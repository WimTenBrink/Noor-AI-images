import React, { useState, useEffect, useMemo } from 'react';
import { Dialog } from './Dialog';
import { Tooltip } from './Tooltip';
import { 
  Download, Copy, Check, RotateCcw, Trash2, User, Users, Guitar, Music2, Disc, Cpu, Sparkles, FileText, RefreshCw, Palette
} from 'lucide-react';
import { Job, Song, StoryCharacter } from '../../types';
import { useJobQueue } from '../hooks/useJobQueue';
import { HorizontalScroll } from './HorizontalScroll';
import { SINGERS_DETAILED } from '../../constants/singersDetailed';
import { buildCoverArtJobPrompt, getDefaultStoryCharacters, CoverArtPromptJobPayload } from '../../constants/coverArtPrompts';
import { 
  IMAGE_STYLE_CATEGORIES, 
  ImageStyleCategory, 
  getImageStyleById, 
  getStylesByCategory 
} from '../../constants/imageStyles';
import { 
  CHARACTER_FRAMING_OPTIONS, 
  CharacterFramingId, 
  getCharacterFramingById 
} from '../../constants/characterFraming';
import { appendStyleToPrompt, stripStyleFromPrompt } from '../../lib/singerActions';

interface CoverArtPromptsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  lyrics: string;
  jobs?: Job[];
  song?: Song;
  onUpdateSong?: React.Dispatch<React.SetStateAction<Song>>;
}

const SINGER_SCENE_KEYS = ['Base', 'Band 1', 'Band 2', 'Band 3'] as const;
const CHARACTER_SCENE_KEYS = ['Base', 'Song 1', 'Song 2', 'Song 3'] as const;

export const CoverArtPromptsDialog: React.FC<CoverArtPromptsDialogProps> = ({
  isOpen,
  onClose,
  title,
  lyrics,
  jobs = [],
  song,
  onUpdateSong
}) => {
  const { addJob, deleteJob } = useJobQueue();
  const [isNsfw, setIsNsfw] = useState<boolean>(true);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('miranda');
  const [selectedSceneKey, setSelectedSceneKey] = useState<string>('Base');
  const [copiedPrompts, setCopiedPrompts] = useState<Record<string, boolean>>({});

  // Image Style Selection state (independent of AI generation jobs)
  const [selectedStyleCategory, setSelectedStyleCategory] = useState<ImageStyleCategory>('Photography');
  const [selectedImageStyle, setSelectedImageStyle] = useState<string>('photo_realistic');
  const [selectedCharacterFraming, setSelectedCharacterFraming] = useState<CharacterFramingId>('full_body');

  // When style category changes, auto-select the first style of that category
  const handleCategoryChange = (cat: ImageStyleCategory) => {
    setSelectedStyleCategory(cat);
    const stylesInCat = getStylesByCategory(cat);
    if (stylesInCat.length > 0) {
      setSelectedImageStyle(stylesInCat[0].id);
    }
  };

  const availableStylesInGroup = useMemo(() => {
    return getStylesByCategory(selectedStyleCategory);
  }, [selectedStyleCategory]);

  const isSelfReflective = Boolean(song?.settings?.appDefaults?.selfReflection);

  // Derive characters
  const characters: StoryCharacter[] = useMemo(() => {
    if (isSelfReflective) return [];
    if (song?.storyCharacters && song.storyCharacters.length > 0) {
      return song.storyCharacters;
    }
    return getDefaultStoryCharacters(title || 'Song', lyrics || '');
  }, [song?.storyCharacters, isSelfReflective, title, lyrics]);

  // Derive singers list
  const singers = useMemo(() => [
    { id: 'miranda', name: 'Miranda Noor', icon: Guitar, profile: SINGERS_DETAILED.find(s => s.id === 'miranda') },
    { id: 'annelies', name: 'Annelies Brink', icon: Music2, profile: SINGERS_DETAILED.find(s => s.id === 'annelies') },
    { id: 'fannie', name: 'Fannie de Jong', icon: Disc, profile: SINGERS_DETAILED.find(s => s.id === 'fannie') },
    { id: 'emma', name: 'Emma Vermeer', icon: Cpu, profile: SINGERS_DETAILED.find(s => s.id === 'emma') },
  ], []);

  // Determine active subject details
  const activeSinger = singers.find(s => s.id === selectedSubjectId);
  const activeCharacter = characters.find(c => (c.id || c.name.toLowerCase().replace(/[^a-z0-9]/g, '_')) === selectedSubjectId);
  const isSelectedSinger = Boolean(activeSinger);

  // Applicable scene keys for active subject
  const activeSceneKeys = isSelectedSinger ? SINGER_SCENE_KEYS : CHARACTER_SCENE_KEYS;

  // Auto-correct active scene key if switching between singer and character
  useEffect(() => {
    if (!activeSceneKeys.includes(selectedSceneKey as any)) {
      setSelectedSceneKey('Base');
    }
  }, [selectedSubjectId, activeSceneKeys]);

  // Extract current prompt and scene details from song.coverArtPrompts
  const currentCap = song?.coverArtPrompts;
  const scenesList = currentCap?.scenes || [];

  const currentSceneObj = scenesList.find((s: any) => 
    s.sceneTitle?.toLowerCase() === selectedSceneKey.toLowerCase()
  );

  const activePromptObj = currentSceneObj?.prompts?.find((p: any) => 
    p.id === selectedSubjectId || p.label?.toLowerCase() === (activeSinger?.name || activeCharacter?.name)?.toLowerCase()
  );

  const currentCleanPrompt = activePromptObj?.cleanPrompt || '';
  const currentExplicitPrompt = activePromptObj?.explicitPrompt || '';
  const currentDescription = currentSceneObj?.description || '';
  const currentSceneTitle = currentSceneObj?.sceneTitle || selectedSceneKey;

  // Dynamically format prompt with selected style and framing (keeping base prompt intact in memory)
  const formatPromptWithStyle = (basePrompt: string, nsfwMode: boolean) => {
    if (!basePrompt || !basePrompt.trim()) return '';
    return appendStyleToPrompt(
      basePrompt,
      selectedImageStyle,
      nsfwMode ? 'nsfw' : 'std1',
      selectedCharacterFraming
    );
  };

  const displayedPrompt = useMemo(() => {
    const rawPrompt = isNsfw ? (currentExplicitPrompt || currentCleanPrompt) : currentCleanPrompt;
    return formatPromptWithStyle(rawPrompt, isNsfw);
  }, [currentExplicitPrompt, currentCleanPrompt, isNsfw, selectedImageStyle, selectedCharacterFraming]);

  // Count progress of queued cover art jobs
  const queuedCoverJobs = jobs.filter(j => typeof j?.name === 'string' && j.name.startsWith('Cover Art Prompt - '));
  const pendingCount = queuedCoverJobs.filter(j => j.status === 'pending' || j.status === 'running').length;
  const completedCount = queuedCoverJobs.filter(j => j.status === 'done').length;
  const totalQueuedJobs = queuedCoverJobs.length;

  // Dispatch individual prompt job
  const dispatchSinglePromptJob = (subjectId: string, subjectName: string, subjectType: 'singer' | 'character', sceneKey: string, appearanceDetails: string) => {
    const token = localStorage.getItem('noor-api-key') || '';
    const payload: CoverArtPromptJobPayload = {
      subjectId,
      subjectName,
      subjectType,
      sceneKey: sceneKey.toLowerCase().replace(/\s+/g, '') as any,
      sceneName: sceneKey,
      appearanceDetails,
      lyrics: lyrics || '',
      songTitle: title || 'Untitled Song',
      songStyle: song?.style
    };

    const { prompt, systemInstruction } = buildCoverArtJobPrompt(payload);
    const jobName = `Cover Art Prompt - ${subjectName} (${sceneKey}): ${title || 'Untitled Song'}`;

    addJob(jobName, 'normal', prompt, token, song?.settings || {}, systemInstruction);
  };

  // Generate All 28 Jobs (or 16 if self-reflective)
  const handleRegenerateAll = () => {
    const token = localStorage.getItem('noor-api-key') || '';

    // Clear existing queued jobs
    queuedCoverJobs.forEach(j => deleteJob(j.id));

    // 1. Queue Singer Jobs (4 singers * 4 scenes = 16 jobs)
    singers.forEach(s => {
      const details = `Subject: Young woman (${s.name})\nBuild: ${s.profile?.appearance?.build || 'Slender athletic frame'}\nSkin: ${s.profile?.appearance?.skinColor || 'Fair'}\nHair: ${s.profile?.appearance?.hairColorStyle || 'Dark wavy hair'}\nEyes: ${s.profile?.appearance?.eyeColor || 'Expressive eyes'}\nFace: ${s.profile?.appearance?.faceDetails || 'Defined cheekbones'}\nBreasts: ${s.profile?.appearance?.breasts || 'Naturally proportioned'}\nGenitals: ${s.profile?.appearance?.genitals || 'Smooth feminine anatomy'}`;
      
      SINGER_SCENE_KEYS.forEach(sceneKey => {
        dispatchSinglePromptJob(s.id, s.name, 'singer', sceneKey, details);
      });
    });

    // 2. Queue Character Jobs (3 characters * 4 scenes = 12 jobs if not self-reflective)
    if (!isSelfReflective) {
      characters.forEach((c, idx) => {
        const cId = c.id || `char_${idx + 1}`;
        const cName = c.name || `Character ${idx + 1}`;
        const isHuman = !c.species || c.species.toLowerCase().includes('human');
        const subjectDescriptor = isHuman ? 'Young woman' : `Non-human species: ${c.species}`;
        const details = `Subject: ${subjectDescriptor} (${cName})\nDescription: ${c.description || ''}\nBuild: ${c.bodyShape || 'Slender athletic posture'}\nSkin: ${c.skinColor || 'Smooth fair'}\nHair: ${c.hairColorStyle || 'Long waves'}\nDetails: ${c.details || 'Expressive'}`;

        CHARACTER_SCENE_KEYS.forEach(sceneKey => {
          dispatchSinglePromptJob(cId, cName, 'character', sceneKey, details);
        });
      });
    }
  };

  // Regenerate Current Active Scene
  const handleRegenerateCurrentScene = () => {
    if (isSelectedSinger && activeSinger) {
      const s = activeSinger;
      const details = `Subject: Young woman (${s.name})\nBuild: ${s.profile?.appearance?.build || 'Slender athletic frame'}\nSkin: ${s.profile?.appearance?.skinColor || 'Fair'}\nHair: ${s.profile?.appearance?.hairColorStyle || 'Dark'}\nEyes: ${s.profile?.appearance?.eyeColor || 'Expressive'}`;
      dispatchSinglePromptJob(s.id, s.name, 'singer', selectedSceneKey, details);
    } else if (activeCharacter) {
      const c = activeCharacter;
      const cId = c.id || c.name.toLowerCase().replace(/[^a-z0-9]/g, '_');
      const isHuman = !c.species || c.species.toLowerCase().includes('human');
      const subjectDescriptor = isHuman ? 'Young woman' : `Non-human species: ${c.species}`;
      const details = `Subject: ${subjectDescriptor} (${c.name})\nDescription: ${c.description || ''}\nBuild: ${c.bodyShape || ''}\nSkin: ${c.skinColor || ''}\nHair: ${c.hairColorStyle || ''}\nDetails: ${c.details || ''}`;
      dispatchSinglePromptJob(cId, c.name, 'character', selectedSceneKey, details);
    }
  };

  const handleCopyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompts(prev => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setCopiedPrompts(prev => ({ ...prev, [key]: false }));
    }, 2000);
  };

  const handleDownloadMarkdown = () => {
    const mode = isNsfw ? 'NSFW' : 'Standard';
    const styleObj = getImageStyleById(selectedImageStyle);
    const framingObj = getCharacterFramingById(selectedCharacterFraming);
    let md = `# Cover Art Prompts (${mode}) - ${title || 'Untitled Song'}\n`;
    md += `**Style Group:** ${selectedStyleCategory} | **Style:** ${styleObj.label} | **Framing:** ${framingObj.label}\n\n`;

    scenesList.forEach((s: any) => {
      md += `## ${s.sceneTitle || 'Scene'}\n\n`;
      if (s.description) md += `*${s.description}*\n\n`;
      md += `| Subject | Prompt |\n| :--- | :--- |\n`;
      (s.prompts || []).forEach((p: any) => {
        const rawText = isNsfw ? (p.explicitPrompt || p.cleanPrompt) : p.cleanPrompt;
        const styledText = formatPromptWithStyle(rawText, isNsfw);
        md += `| ${p.label || p.id} | ${styledText ? styledText.replace(/\n/g, ' ') : 'N/A'} |\n`;
      });
      md += `\n`;
    });

    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(title || 'song').toLowerCase().replace(/[^a-z0-9]/g, '_')}-coverart-${mode.toLowerCase()}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadJson = () => {
    // Generate styled json output without mutating base song.coverArtPrompts in memory
    const originalCap = song?.coverArtPrompts || {};
    const styledScenes = (originalCap.scenes || []).map((s: any) => ({
      ...s,
      prompts: (s.prompts || []).map((p: any) => ({
        ...p,
        cleanPrompt: formatPromptWithStyle(p.cleanPrompt, false),
        explicitPrompt: formatPromptWithStyle(p.explicitPrompt || p.cleanPrompt, true)
      }))
    }));

    const exportData = {
      ...originalCap,
      selectedStyleCategory,
      selectedImageStyle,
      selectedCharacterFraming,
      scenes: styledScenes
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(title || 'song').toLowerCase().replace(/[^a-z0-9]/g, '_')}-coverart.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const headerActions = (
    <div className="flex items-center gap-2 shrink-0 mr-1.5">
      <label className="flex items-center gap-1.5 text-xs font-bold text-lavender-text cursor-pointer select-none bg-lavender-surface/40 px-2.5 py-1 rounded-md border border-lavender-border/40 hover:border-lavender-accent/60 transition-all">
        <input
          type="checkbox"
          checked={isNsfw}
          onChange={(e) => setIsNsfw(e.target.checked)}
          className="accent-lavender-accent w-3.5 h-3.5 cursor-pointer rounded"
        />
        <span className={isNsfw ? "text-red-400 font-extrabold" : "text-lavender-text/70"}>NSFW</span>
      </label>

      <button
        onClick={handleDownloadMarkdown}
        className="px-2.5 py-1 bg-lavender-accent/15 hover:bg-lavender-accent text-lavender-accent hover:text-black border border-lavender-accent/30 hover:border-transparent text-[11px] font-black rounded flex items-center gap-1 transition-all cursor-pointer shadow-sm"
        title="Download Markdown Report"
      >
        <FileText size={12} />
        <span>Download Markdown</span>
      </button>

      <button
        onClick={handleDownloadJson}
        className="px-2.5 py-1 bg-lavender-surface hover:bg-lavender-surface/80 border border-lavender-border/45 text-lavender-text hover:text-lavender-accent text-[11px] font-black rounded flex items-center gap-1 transition-all cursor-pointer"
        title="Download JSON Sheet"
      >
        <Download size={12} />
        <span>Download JSON</span>
      </button>

      <button
        onClick={handleRegenerateAll}
        className="px-3 py-1 bg-lavender-accent hover:bg-lavender-accent/90 text-black text-[11px] font-black rounded flex items-center gap-1 transition-all cursor-pointer shadow-md"
        title="Generate/Regenerate All Prompts"
      >
        <Sparkles size={12} />
        <span>Regenerate All ({isSelfReflective ? '16 Jobs' : '28 Jobs'})</span>
      </button>
    </div>
  );

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title="Cover Art Storyboard Prompts"
      onConfirm={onClose}
      size="full"
      headerActions={headerActions}
    >
      <div className="flex flex-col gap-2.5 w-full h-[85vh] overflow-hidden relative">
        {/* Style & Framing Toolbar Bar (Below Header) */}
        <div className="mx-4 mt-1 px-3.5 py-2.5 bg-lavender-surface/30 border border-lavender-border/50 rounded-xl flex flex-wrap items-center justify-between gap-3 shrink-0 shadow-sm">
          {/* Listbox 1: Style Group */}
          <div className="flex items-center gap-2">
            <label className="text-xs font-bold text-lavender-accent flex items-center gap-1.5 whitespace-nowrap">
              <Palette size={14} className="text-emerald-400" />
              <span>Style Group:</span>
            </label>
            <select
              value={selectedStyleCategory}
              onChange={(e) => handleCategoryChange(e.target.value as ImageStyleCategory)}
              className="bg-lavender-bg border border-lavender-border hover:border-emerald-500/50 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-lavender-accent focus:outline-none focus:border-emerald-400 cursor-pointer shadow-sm"
            >
              {IMAGE_STYLE_CATEGORIES.map((cat) => {
                const count = getStylesByCategory(cat).length;
                return (
                  <option key={cat} value={cat} className="bg-lavender-bg text-lavender-text font-medium">
                    {cat} ({count})
                  </option>
                );
              })}
            </select>
          </div>

          {/* Listbox 2: Specific Style */}
          <div className="flex items-center gap-2 flex-1 min-w-[220px]">
            <label className="text-xs font-bold text-lavender-accent whitespace-nowrap">
              Style:
            </label>
            <select
              value={selectedImageStyle}
              onChange={(e) => setSelectedImageStyle(e.target.value)}
              className="flex-1 bg-lavender-bg border border-emerald-500/40 rounded-lg px-2.5 py-1.5 text-xs font-medium text-lavender-text focus:outline-none focus:border-emerald-400 cursor-pointer shadow-sm"
            >
              {availableStylesInGroup.map(st => (
                <option key={st.id} value={st.id} className="bg-lavender-bg text-lavender-text font-normal">
                  {st.label}
                </option>
              ))}
            </select>
          </div>

          {/* Listbox 3: Character Framing */}
          <div className="flex items-center gap-2 flex-1 min-w-[210px]">
            <label className="text-xs font-bold text-cyan-300 flex items-center gap-1.5 whitespace-nowrap">
              <User size={14} className="text-cyan-400" />
              <span>Framing:</span>
            </label>
            <select
              value={selectedCharacterFraming}
              onChange={(e) => setSelectedCharacterFraming(e.target.value as CharacterFramingId)}
              className="flex-1 bg-lavender-bg border border-cyan-500/40 rounded-lg px-2.5 py-1.5 text-xs font-medium text-cyan-100 focus:outline-none focus:border-cyan-400 cursor-pointer shadow-sm truncate"
              title="Select framing / composition shot"
            >
              {CHARACTER_FRAMING_OPTIONS.map(fr => (
                <option key={fr.id} value={fr.id} className="bg-lavender-bg text-lavender-text font-normal">
                  {fr.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Status Bar for Queued Jobs */}
        {totalQueuedJobs > 0 && (
          <div className="flex items-center justify-between px-4 py-2 bg-lavender-accent/10 border-b border-lavender-accent/30 text-xs text-lavender-accent font-mono shrink-0">
            <div className="flex items-center gap-2">
              <RefreshCw size={13} className={pendingCount > 0 ? "animate-spin text-lavender-accent" : "text-green-400"} />
              <span>
                {pendingCount > 0 
                  ? `Generating Prompts Queue: ${completedCount} / ${totalQueuedJobs} jobs completed (${pendingCount} pending)`
                  : `All ${totalQueuedJobs} Cover Art Prompt jobs generated successfully!`
                }
              </span>
            </div>
            <div className="w-36 bg-black/40 h-2 rounded-full overflow-hidden border border-lavender-border/20">
              <div 
                className="bg-lavender-accent h-full transition-all duration-300"
                style={{ width: `${Math.round((completedCount / totalQueuedJobs) * 100)}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex-1 flex flex-col md:flex-row gap-4 min-h-0 px-4 pb-3">
          {/* Left Sidebar: Visual Subjects */}
          <div className="w-full md:w-56 shrink-0 flex flex-col gap-2 bg-black/30 p-3 border border-lavender-border/30 rounded-xl overflow-y-auto select-none">
            {/* Group 1: SINGERS */}
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-lavender-accent/70 px-2 py-1 block border-b border-lavender-border/15 mb-1">
                Singers ({singers.length})
              </span>
              <div className="flex flex-col gap-1">
                {singers.map(s => {
                  const isSelected = selectedSubjectId === s.id;
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedSubjectId(s.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold border transition-all text-left cursor-pointer ${
                        isSelected
                          ? 'bg-lavender-accent/20 border-lavender-accent/50 text-lavender-accent font-black shadow-inner'
                          : 'bg-black/20 border-transparent text-lavender-text/70 hover:text-lavender-text hover:bg-lavender-surface/10'
                      }`}
                    >
                      <Icon size={14} className={isSelected ? 'text-lavender-accent' : 'text-lavender-text/40'} />
                      <span>{s.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Group 2: CHARACTERS */}
            <div className="mt-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-lavender-accent/70 px-2 py-1 block border-b border-lavender-border/15 mb-1">
                {isSelfReflective ? 'Characters (Self-Reflective)' : `Characters (${characters.length})`}
              </span>
              {isSelfReflective ? (
                <div className="px-2 py-2 text-[11px] text-lavender-text/40 italic">
                  Self-reflective song active. Only singers are featured.
                </div>
              ) : (
                <div className="flex flex-col gap-1">
                  {characters.map((c, idx) => {
                    const cId = c.id || `char_${idx + 1}`;
                    const isSelected = selectedSubjectId === cId;
                    return (
                      <button
                        key={cId}
                        type="button"
                        onClick={() => setSelectedSubjectId(cId)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold border transition-all text-left cursor-pointer ${
                          isSelected
                            ? 'bg-lavender-accent/20 border-lavender-accent/50 text-lavender-accent font-black shadow-inner'
                            : 'bg-black/20 border-transparent text-lavender-text/70 hover:text-lavender-text hover:bg-lavender-surface/10'
                        }`}
                      >
                        <User size={14} className={isSelected ? 'text-lavender-accent' : 'text-lavender-text/40'} />
                        <span className="truncate">{c.name}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Right Area: Scene Tabs & Content */}
          <div className="flex-1 flex flex-col min-h-0 bg-black/25 p-4 border border-lavender-border/30 rounded-xl gap-3">
            {/* Top Scene Tabs Bar */}
            <div className="border-b border-lavender-border/20 pb-2 shrink-0 flex items-center justify-between">
              <HorizontalScroll containerClassName="flex items-center gap-2 select-none">
                {activeSceneKeys.map(sceneKey => {
                  const isActive = selectedSceneKey === sceneKey;
                  return (
                    <button
                      key={sceneKey}
                      type="button"
                      onClick={() => setSelectedSceneKey(sceneKey)}
                      className={`px-4 py-2 text-xs font-black rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'bg-lavender-accent text-black border-transparent shadow-md font-extrabold scale-102'
                          : 'bg-lavender-surface/10 border-lavender-border/25 text-lavender-text/80 hover:text-lavender-text hover:bg-lavender-surface/20'
                      }`}
                    >
                      <span>{sceneKey}</span>
                    </button>
                  );
                })}
              </HorizontalScroll>

              <button
                type="button"
                onClick={handleRegenerateCurrentScene}
                className="px-2.5 py-1.5 bg-lavender-surface hover:bg-lavender-accent hover:text-black border border-lavender-border/30 text-lavender-text text-[11px] font-bold rounded-lg flex items-center gap-1 transition-all shrink-0 ml-2 cursor-pointer"
                title="Regenerate This Scene Prompt"
              >
                <RotateCcw size={11} />
                <span>Redo Scene</span>
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col gap-3 min-h-0 overflow-y-auto pr-1">
              {/* Scene Title Header */}
              <div className="flex items-center justify-between border-b border-lavender-border/15 pb-2 shrink-0">
                <span className="text-sm font-extrabold text-lavender-accent font-mono">
                  {selectedSceneKey}: {activeSinger?.name || activeCharacter?.name || 'Subject'}
                </span>
                <span className="text-[10px] font-bold text-lavender-text/50 uppercase tracking-wider">
                  {isSelectedSinger ? 'Singer Scene' : 'Lyric Story Scene'}
                </span>
              </div>

              {/* Prompt Box */}
              <div className="flex-1 flex flex-col min-h-[180px] bg-black/40 border border-lavender-border/30 rounded-xl p-3">
                <div className="flex items-center justify-between border-b border-lavender-border/20 pb-2 mb-2 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold text-lavender-text">
                      {isNsfw ? 'NSFW / Explicit Prompt (Stable Diffusion)' : 'Standard Prompt (WAN Video)'}
                    </span>
                    {isNsfw && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-black uppercase bg-red-500/20 text-red-400 border border-red-500/30">
                        NSFW
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => handleCopyText(displayedPrompt || 'No prompt generated yet.', 'prompt')}
                    className="px-2.5 py-1 bg-lavender-surface hover:bg-lavender-accent hover:text-black border border-lavender-border/30 text-lavender-text rounded text-[10px] font-black flex items-center gap-1 transition-all cursor-pointer"
                  >
                    {copiedPrompts['prompt'] ? <Check size={11} className="text-green-400" /> : <Copy size={11} />}
                    <span>{copiedPrompts['prompt'] ? 'Copied!' : 'Copy Prompt'}</span>
                  </button>
                </div>

                <textarea
                  readOnly
                  value={displayedPrompt || 'No prompt generated yet. Click "Regenerate All" or "Redo Scene" to create.'}
                  className="flex-1 bg-transparent border-0 resize-none font-mono text-xs leading-relaxed text-lavender-text focus:ring-0 outline-none select-all min-h-[140px]"
                />
              </div>

              {/* Multi-line Description Box */}
              <div className="flex flex-col min-h-[110px] bg-black/40 border border-lavender-border/30 rounded-xl p-3 shrink-0">
                <div className="flex items-center justify-between border-b border-lavender-border/20 pb-2 mb-2 shrink-0">
                  <span className="text-xs font-extrabold text-lavender-text/80">
                    Multi-line Scene Description & Atmosphere
                  </span>

                  <button
                    onClick={() => handleCopyText(currentDescription || 'No description available.', 'desc')}
                    className="px-2.5 py-1 bg-lavender-surface hover:bg-lavender-accent hover:text-black border border-lavender-border/30 text-lavender-text rounded text-[10px] font-black flex items-center gap-1 transition-all cursor-pointer"
                  >
                    {copiedPrompts['desc'] ? <Check size={11} className="text-green-400" /> : <Copy size={11} />}
                    <span>{copiedPrompts['desc'] ? 'Copied!' : 'Copy Description'}</span>
                  </button>
                </div>

                <textarea
                  readOnly
                  value={currentDescription || 'A dramatic scene setting describing the scenario, lighting, and environment.'}
                  className="bg-transparent border-0 resize-none text-xs leading-relaxed text-lavender-text/80 focus:ring-0 outline-none select-all min-h-[70px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
