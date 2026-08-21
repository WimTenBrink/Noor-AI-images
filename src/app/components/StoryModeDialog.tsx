import React, { useState, useEffect } from 'react';
import { Dialog } from './Dialog';
import { MarkdownView } from './MarkdownView';
import { Job } from '../../types';
import { useJobQueue } from '../hooks/useJobQueue';
import { 
  BookOpen, Check, Copy, Download, Sparkles, UserCheck, Sliders, RefreshCw, Layers, Shield, Wand2, ArrowRight
} from 'lucide-react';
import { GENERATE_STORY_MODE_PROMPT, GENERATE_SONG_FROM_STORY_PROMPT, GENERATE_STORY_MODE_COVER_ART_PROMPT } from '../../constants/prompts';
import { SYSTEM_INSTRUCTIONS_STORY_MODE_NARRATIVE } from '../../constants/instructions';

export interface StoryCharacter {
  id?: string;
  name: string;
  species?: string;
  description: string;
  pose?: string;
  cleanPrompt?: string;
  explicitPrompt?: string;
}

interface StoryModeDialogProps {
  isOpen: boolean;
  onClose: () => void;
  songTitle: string;
  lyrics: string;
  instructions: string;
  dashboardSummary: string;
  unusedOptionsList: { category: string; value: string }[];
  initialStory?: string;
  jobs?: Job[];
  onApproveAndGenerate: (storyText: string, storyTitle: string, unusedOptionsStr: string, charactersData?: any) => void;
}

function extractStoryText(res: any): string {
  if (!res) return '';
  if (typeof res === 'string') {
    const trimmed = res.trim();
    if (trimmed.startsWith('{') || trimmed.startsWith('```')) {
      try {
        const cleaned = trimmed.replace(/^```json\s*/i, '').replace(/^```\s*/, '').replace(/```\s*$/, '').trim();
        const parsed = JSON.parse(cleaned);
        if (parsed) return extractStoryText(parsed);
      } catch (e) {
        // Fallthrough
      }
    }
    return res;
  }
  if (typeof res === 'object') {
    if (typeof res.story === 'string' && res.story) return res.story;
    if (typeof res.story === 'object' && res.story) return extractStoryText(res.story);
    if (typeof res.narrative === 'string' && res.narrative) return res.narrative;
    if (typeof res.text === 'string' && res.text) return res.text;
    if (typeof res.content === 'string' && res.content) return res.content;
    if (typeof res.markdown === 'string' && res.markdown) return res.markdown;
  }
  return '';
}

function extractCharacters(res: any): StoryCharacter[] {
  if (!res) return [];
  if (typeof res === 'string') {
    try {
      const cleaned = res.replace(/^```json\s*/i, '').replace(/^```\s*/, '').replace(/```\s*$/, '').trim();
      const parsed = JSON.parse(cleaned);
      if (parsed) return extractCharacters(parsed);
    } catch (e) {}
  }
  if (typeof res === 'object' && Array.isArray(res.characters)) {
    return res.characters.map((c: any, idx: number) => ({
      id: typeof c === 'object' && c.id ? c.id : `char_${idx + 1}`,
      name: typeof c === 'string' ? c : (c.name || `Character ${idx + 1}`),
      species: typeof c === 'object' ? (c.species || '') : '',
      description: typeof c === 'object' ? (c.description || '') : '',
      pose: typeof c === 'object' ? (c.pose || '') : '',
      cleanPrompt: typeof c === 'object' ? (c.cleanPrompt || '') : '',
      explicitPrompt: typeof c === 'object' ? (c.explicitPrompt || '') : ''
    }));
  }
  return [];
}

export const StoryModeDialog: React.FC<StoryModeDialogProps> = ({
  isOpen,
  onClose,
  songTitle,
  lyrics,
  instructions,
  dashboardSummary,
  unusedOptionsList,
  initialStory = '',
  jobs: propJobs = [],
  onApproveAndGenerate
}) => {
  const { addJob, jobs: queueJobs } = useJobQueue();
  const activeJobs = queueJobs && queueJobs.length > 0 ? queueJobs : propJobs;

  const [storyText, setStoryText] = useState<string>(initialStory);
  const [characters, setCharacters] = useState<StoryCharacter[]>([]);
  const [copiedSuccess, setCopiedSuccess] = useState<boolean>(false);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [downloadedAuto, setDownloadedAuto] = useState<boolean>(false);

  const [jobError, setJobError] = useState<string>('');

  const jobName = `Story Mode Narrative: ${songTitle || 'Untitled Song'}`;
  // Find the MOST RECENT matching story job (searching array from the end)
  const matchedJob = [...activeJobs].reverse().find(j => 
    typeof j?.name === 'string' && (j.name === jobName || j.name.startsWith('Story Mode Narrative: '))
  );

  // Synchronize initialStory prop when opened
  useEffect(() => {
    if (initialStory && initialStory !== storyText) {
      setStoryText(initialStory);
    }
  }, [initialStory]);

  // Monitor background job status and auto-trigger on dialog open ONLY if no story and no job exists
  useEffect(() => {
    if (!isOpen) return;

    if (matchedJob) {
      if (matchedJob.status === 'running' || matchedJob.status === 'pending') {
        setIsGenerating(true);
        setJobError('');
      } else if (matchedJob.status === 'done' && matchedJob.result) {
        setIsGenerating(false);
        setJobError('');
        const mainStory = extractStoryText(matchedJob.result);
        if (mainStory) {
          setStoryText(mainStory);
          const chars = extractCharacters(matchedJob.result);
          if (chars && chars.length > 0) {
            setCharacters(chars);
          }
        }
      } else if (matchedJob.status === 'failed') {
        setIsGenerating(false);
        setJobError(matchedJob.error || 'The story generation request failed. Please check your API key or network and try again.');
      }
    } else {
      const hasStory = Boolean((storyText && storyText.trim().length > 0) || (initialStory && initialStory.trim().length > 0));
      if (!hasStory && !isGenerating && !jobError) {
        // Auto-trigger story generation immediately upon opening ONLY if no story and no matchedJob exists
        handleGenerateStory();
      }
    }
  }, [isOpen, matchedJob, initialStory, storyText]);

  // Handle auto-download when story is generated for the first time
  useEffect(() => {
    if (storyText && storyText.length > 100 && !downloadedAuto) {
      handleDownloadStory();
      setDownloadedAuto(true);
    }
  }, [storyText, downloadedAuto]);

  const handleGenerateStory = () => {
    const token = localStorage.getItem('noor-api-key') || '';
    setIsGenerating(true);
    setJobError('');
    setDownloadedAuto(false);
    
    addJob(
      jobName,
      'high',
      GENERATE_STORY_MODE_PROMPT(
        songTitle || 'Untitled Song',
        lyrics,
        instructions,
        dashboardSummary
      ),
      token,
      undefined,
      SYSTEM_INSTRUCTIONS_STORY_MODE_NARRATIVE
    );
  };

  const handleDownloadStory = () => {
    if (!storyText) return;
    const safeTitle = (songTitle || 'story').replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const blob = new Blob([storyText], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${safeTitle}_story_mode.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyStory = () => {
    if (!storyText) return;
    navigator.clipboard.writeText(storyText);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 2000);
  };

  const handleApprove = () => {
    if (!storyText) return;
    const unusedStr = unusedOptionsList.map(o => `${o.category}: ${o.value}`).join('\n');
    const rawResult = matchedJob?.result;
    onApproveAndGenerate(storyText, songTitle || 'Untitled Song', unusedStr, rawResult || { characters });
    onClose();
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={storyText ? handleApprove : undefined}
      title={`Story Mode: ${songTitle || 'Untitled Song'}`}
      size="full"
      headerActions={
        <div className="flex items-center gap-2">
          {storyText && (
            <>
              <button
                type="button"
                onClick={handleCopyStory}
                className="px-3 py-1.5 text-xs font-bold bg-lavender-surface/80 hover:bg-lavender-accent hover:text-black text-lavender-text rounded-xl border border-lavender-border/40 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {copiedSuccess ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
                {copiedSuccess ? 'Copied!' : 'Copy Story'}
              </button>
              <button
                type="button"
                onClick={handleDownloadStory}
                className="px-3 py-1.5 text-xs font-bold bg-lavender-surface/80 hover:bg-lavender-accent hover:text-black text-lavender-text rounded-xl border border-lavender-border/40 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Download size={13} />
                Download (.md)
              </button>
              <button
                type="button"
                onClick={handleApprove}
                className="px-3.5 py-1.5 text-xs font-black bg-green-600 hover:bg-green-500 text-white rounded-xl shadow-lg border border-green-400/40 transition-all flex items-center gap-1.5 cursor-pointer animate-pulse"
              >
                <Check size={14} className="stroke-[3]" />
                Approve Story & Generate Song
              </button>
            </>
          )}
        </div>
      }
    >
      <div className="flex flex-col h-[78vh] min-h-[520px] w-full overflow-hidden bg-lavender-bg rounded-2xl border border-lavender-border/30 shadow-2xl">
        {!storyText && jobError ? (
          /* Error State */
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-black/20">
            <div className="w-14 h-14 rounded-2xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400 mb-4 shadow-xl">
              <BookOpen size={28} />
            </div>
            <h3 className="text-lg font-bold text-red-400 mb-2">
              Story Generation Encountered an Error
            </h3>
            <p className="text-xs text-lavender-text/70 max-w-md mb-6 leading-relaxed bg-red-950/30 p-3 rounded-xl border border-red-900/40">
              {jobError}
            </p>
            <button
              type="button"
              onClick={handleGenerateStory}
              className="px-6 py-2.5 rounded-xl bg-lavender-accent hover:bg-lavender-accent/90 text-black font-extrabold text-xs shadow-xl transition-all flex items-center gap-2 cursor-pointer"
            >
              <RefreshCw size={14} />
              Retry Story Generation
            </button>
          </div>
        ) : !storyText && !isGenerating ? (
          /* Empty / Initial Call to Action State */
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-black/20">
            <div className="w-16 h-16 rounded-2xl bg-lavender-accent/15 border border-lavender-accent/30 flex items-center justify-center text-lavender-accent mb-4 shadow-xl">
              <BookOpen size={32} />
            </div>
            <h3 className="text-xl font-black text-lavender-text mb-2">
              Generate 2,500+ Word Narrative Story
            </h3>
            <p className="text-xs text-lavender-text/70 max-w-lg mb-6 leading-relaxed">
              Story Mode analyzes your song title, lyrics, and selected dashboard options to write an immersive 2,500+ word narrative story with named characters (female spirits, maidens, heroes). Options not used in the story will be listed in the sidebar.
            </p>
            <button
              type="button"
              onClick={handleGenerateStory}
              className="px-6 py-3 rounded-xl bg-lavender-accent hover:bg-lavender-accent/90 text-black font-extrabold text-sm shadow-xl transition-all flex items-center gap-2 cursor-pointer"
            >
              <Wand2 size={16} />
              Write Story Mode Narrative
            </button>
          </div>
        ) : isGenerating ? (
          /* Loading / AI Generation Active State */
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-black/20">
            <div className="w-12 h-12 rounded-full border-3 border-lavender-accent border-t-transparent animate-spin mb-4" />
            <h3 className="text-lg font-bold text-lavender-accent mb-1 flex items-center gap-2">
              <Sparkles size={18} />
              Writing 2,500+ Word Narrative Story...
            </h3>
            <p className="text-xs text-lavender-text/60 max-w-md">
              Analyzing lyrics, title, and dashboard options. Crafting characters, worldbuilding, chapters, and story arc.
            </p>
            <div className="mt-4 px-3 py-1.5 rounded-lg bg-black/40 border border-lavender-border/30 text-[11px] font-mono text-lavender-text/50">
              Job: {jobName}
            </div>
          </div>
        ) : (
          /* Main Story & Unused Options View */
          <div className="flex flex-1 overflow-hidden">
            {/* Main Area: Story Markdown Display */}
            <div className="flex-1 flex flex-col overflow-hidden border-r border-lavender-border/20">
              <div className="p-3 bg-black/30 border-b border-lavender-border/20 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-lavender-accent" />
                  <span className="text-xs font-black uppercase tracking-wider text-lavender-text">
                    Narrative Story ({storyText.split(/\s+/).length} Words)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleGenerateStory}
                  className="px-2.5 py-1 text-[11px] font-bold bg-black/40 hover:bg-black/60 text-lavender-text/80 rounded-lg border border-lavender-border/30 transition-all flex items-center gap-1 cursor-pointer"
                  title="Regenerate Story"
                >
                  <RefreshCw size={11} />
                  Regenerate
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 custom-scrollbar bg-black/10">
                <MarkdownView content={storyText} />
              </div>
            </div>

            {/* Sidebar Area: Story Characters & Unused Dashboard Options */}
            <div className="w-[320px] lg:w-[360px] flex flex-col bg-black/30 overflow-y-auto custom-scrollbar shrink-0 p-4 gap-5">
              {/* Characters Section */}
              {characters && characters.length > 0 && (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-lavender-accent border-b border-lavender-border/20 pb-2">
                    <UserCheck size={14} />
                    <h4 className="text-xs font-black uppercase tracking-wider">
                      Story Characters ({characters.length})
                    </h4>
                  </div>
                  <div className="flex flex-col gap-2">
                    {characters.map((char, idx) => (
                      <div 
                        key={idx}
                        className="bg-black/40 border border-lavender-border/30 rounded-xl p-3 flex flex-col gap-1.5 shadow-sm"
                      >
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-xs font-extrabold text-lavender-accent">
                            {char.name}
                          </span>
                          {char.species && (
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-lavender-surface border border-lavender-border/30 text-lavender-text/80 whitespace-nowrap">
                              {char.species}
                            </span>
                          )}
                        </div>
                        {char.description && (
                          <p className="text-[11px] text-lavender-text/80 leading-relaxed">
                            {char.description}
                          </p>
                        )}
                        {char.pose && (
                          <div className="text-[10px] text-lavender-accent/90 bg-black/30 p-1.5 rounded border border-lavender-border/20 mt-0.5">
                            <span className="font-bold uppercase tracking-wider">Pose: </span>
                            <span>{char.pose}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Unused Options Section */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-lavender-accent border-b border-lavender-border/20 pb-2">
                  <Sliders size={14} />
                  <h4 className="text-xs font-black uppercase tracking-wider">
                    Unused Options (Not in Narrative)
                  </h4>
                </div>
                <p className="text-[11px] text-lavender-text/60 leading-normal">
                  These options were not included in the story narrative and will be applied directly when generating the final song:
                </p>

                <div className="flex flex-col gap-2 mt-1">
                  {unusedOptionsList.map((opt, idx) => (
                    <div 
                      key={idx}
                      className="bg-black/40 border border-lavender-border/20 rounded-xl p-2.5 flex flex-col gap-1"
                    >
                      <span className="text-[10px] font-black uppercase tracking-wider text-lavender-accent/90">
                        {opt.category}
                      </span>
                      <span className="text-xs font-medium text-lavender-text font-mono">
                        {opt.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Banner inside Sidebar */}
              <div className="mt-auto pt-4 border-t border-lavender-border/20 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={handleApprove}
                  className="w-full py-2.5 px-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-black text-xs shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Check size={15} />
                  Approve Story & Generate Song
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Dialog>
  );
};
