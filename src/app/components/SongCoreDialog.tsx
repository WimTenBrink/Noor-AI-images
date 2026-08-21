import React, { useState, useEffect } from 'react';
import { Dialog } from './Dialog';
import { 
  Download, Copy, Check, RotateCcw, Music2, BookOpen, Sparkles
} from 'lucide-react';
import { parseLyrics, getCleanFormattedLyrics } from '../utils/lyricsParser';
import { Job, Song } from '../../types';
import { MarkdownView } from './MarkdownView';
import { useJobQueue } from '../hooks/useJobQueue';
import { 
  GENERATE_STORY_BEHIND_SONG_PROMPT 
} from '../../constants/prompts';
import { 
  SYSTEM_INSTRUCTIONS_STORY_BEHIND_SONG 
} from '../../constants/instructions';

interface SongCoreDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  lyrics: string;
  jobs?: Job[];
  song?: Song;
  onUpdateSong?: React.Dispatch<React.SetStateAction<Song>>;
}

export const SongCoreDialog: React.FC<SongCoreDialogProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  lyrics,
  jobs = [],
  song,
  onUpdateSong
}) => {
  const { retryJob, addJob, deleteJob } = useJobQueue();
  const [copied, setCopied] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'lyrics' | 'story'>('lyrics');

  const sections = parseLyrics(lyrics);
  const cleanLyrics = getCleanFormattedLyrics(lyrics);

  useEffect(() => {
    if (sections.length > 0 && (!selectedSectionId || !sections.some(s => s.id === selectedSectionId))) {
      setSelectedSectionId(sections[0].id);
    }
  }, [lyrics, sections, selectedSectionId]);

  useEffect(() => {
    setActiveTab('lyrics');
  }, [isOpen, title]);

  const handleCopy = () => {
    navigator.clipboard.writeText(cleanLyrics);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyGeminiPrompt = () => {
    const promptText = `Analyze these lyrics. What's the story? What hidden messages does it have? Is it PG-13? Giggle-test? Any further comments?\nTitle: ${title || ''}\nLyrics:\n${cleanLyrics}`;
    navigator.clipboard.writeText(promptText);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleDownload = (format: 'md' | 'pdf') => {
    if (format === 'md') {
      const content = `# ${title || 'Untitled Song'}\n\n${cleanLyrics}`;
      const blob = new Blob([content], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${title || 'song'}.md`;
      a.click();
      URL.revokeObjectURL(url);
    } else {
      window.print();
    }
  };

  const matchJob = (j: any, prefix: string) => typeof j?.name === 'string' && j.name.startsWith(prefix);

  const getJobStatus = (prefix: string) => {
    if (!jobs) return null;
    const matching = jobs.find(j => matchJob(j, prefix) && (j.status === 'pending' || j.status === 'running'));
    return matching ? matching.status : null;
  };

  const getTabStatus = (tabId: string) => {
    if (tabId === 'lyrics') return 'success';
    if (song?.story) return 'success';

    const matchedJob = jobs.find(j => matchJob(j, 'Story Behind Song: '));
    if (matchedJob) {
      if (matchedJob.status === 'failed') return 'failed';
      if (matchedJob.status === 'done' && !song?.story) return 'failed';
      return 'pending';
    }

    return 'empty';
  };

  const handleRetryStory = () => {
    const token = localStorage.getItem('noor-api-key') || '';
    const matchedJob = jobs.find(j => matchJob(j, 'Story Behind Song: '));

    if (matchedJob) {
      retryJob(matchedJob.id, token);
    } else {
      addJob(
        `Story Behind Song: ${title}`,
        'normal',
        GENERATE_STORY_BEHIND_SONG_PROMPT(title, lyrics, song?.imageDescription),
        token,
        song?.settings || {},
        SYSTEM_INSTRUCTIONS_STORY_BEHIND_SONG
      );
    }
  };

  const handleRedoStory = () => {
    if (onUpdateSong) {
      onUpdateSong(prev => ({ ...prev, story: undefined }));
    }

    const matchedJob = jobs.find(j => matchJob(j, 'Story Behind Song: '));
    if (matchedJob) {
      deleteJob(matchedJob.id);
    }

    const token = localStorage.getItem('noor-api-key') || '';
    addJob(
      `Story Behind Song: ${title}`,
      'normal',
      GENERATE_STORY_BEHIND_SONG_PROMPT(title, lyrics, song?.imageDescription),
      token,
      song?.settings || {},
      SYSTEM_INSTRUCTIONS_STORY_BEHIND_SONG
    );
  };

  const renderStoryContent = () => {
    const status = getJobStatus('Story Behind Song: ');
    if (status) {
      return (
        <div className="flex-1 flex flex-col items-center justify-center p-12 text-center bg-lavender-surface/5 rounded-lg border border-lavender-border/20 m-4 h-[55vh]">
          <div className="w-12 h-12 border-4 border-lavender-accent border-t-transparent rounded-full animate-spin mb-4" />
          <h3 className="text-xl font-bold text-lavender-accent">Generating Story Behind Song</h3>
          <p className="text-sm text-lavender-text/70 mt-2 max-w-sm leading-relaxed">
            The story behind the song itself, explaining what it is about and singer interpretations/quotes.
          </p>
          <div className="mt-4 text-xs bg-lavender-surface px-3 py-1.5 rounded text-lavender-accent font-mono uppercase tracking-wider animate-pulse border border-lavender-border/40">
            Queue Status: {status}
          </div>
        </div>
      );
    }

    const matchedJob = jobs.find(j => matchJob(j, 'Story Behind Song: '));
    if (matchedJob && matchedJob.status === 'failed' && !song?.story) {
      return (
        <div className="flex-1 flex flex-col items-center justify-center p-12 text-center bg-lavender-surface/5 rounded-lg border border-red-500/30 m-4 h-[55vh]">
          <div className="p-6 bg-red-500/10 rounded-full border border-red-500/20 shadow-inner mb-4 text-3xl">
            ⚠️
          </div>
          <h3 className="text-xl font-bold text-red-400">Generation Failed</h3>
          <p className="text-sm text-lavender-text/70 mt-2 max-w-sm leading-relaxed">
            The background job encountered an issue while generating "Story Behind Song".
          </p>
          {matchedJob.error && (
            <div className="mt-2 text-xs bg-red-500/5 px-4 py-2 rounded text-red-300 font-mono border border-red-500/10 max-w-lg overflow-auto max-h-32 mb-4">
              {matchedJob.error}
            </div>
          )}
          <button
            onClick={handleRetryStory}
            className="px-4 py-2 bg-lavender-accent hover:bg-lavender-accent/80 text-black font-extrabold rounded-lg flex items-center gap-2 transition-all cursor-pointer text-sm"
          >
            <RotateCcw size={14} />
            Retry Generation Step
          </button>
        </div>
      );
    }

    if (!song?.story) {
      return (
        <div className="flex-1 flex flex-col items-center justify-center p-12 text-center bg-lavender-surface/5 rounded-lg border border-lavender-border/20 m-4 h-[55vh]">
          <div className="p-6 bg-lavender-surface rounded-full border border-lavender-border/40 shadow-inner mb-4 text-3xl">
            📝
          </div>
          <h3 className="text-xl font-bold text-lavender-text/80">
            Story Behind Song
          </h3>
          <p className="text-sm text-lavender-text/60 mt-2 max-w-sm leading-relaxed">
            The story behind "{title || 'this song'}" has not been downloaded or generated. Click below to start the storyteller generation.
          </p>
          <button
            onClick={handleRetryStory}
            className="mt-6 px-4 py-2 bg-lavender-accent hover:bg-lavender-accent/80 text-black font-extrabold rounded-lg flex items-center gap-2 transition-all cursor-pointer text-sm"
          >
            <RotateCcw size={14} />
            Generate Story
          </button>
        </div>
      );
    }

    return (
      <div className="flex-1 bg-lavender-bg/30 border border-lavender-border/40 rounded-lg flex flex-col overflow-hidden m-4 h-[70vh]">
        <div className="px-4 py-2.5 border-b border-lavender-border/20 flex justify-between items-center bg-lavender-surface/10">
          <span className="text-xs font-semibold text-lavender-accent/85 tracking-wider uppercase">Story Behind Song</span>
          <button
            onClick={handleRedoStory}
            className="px-3 py-1 bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 font-bold rounded border border-red-500/20 flex items-center gap-1.5 transition-all cursor-pointer text-xs"
            title="Regenerate this report"
          >
            <RotateCcw size={12} />
            Redo Generation
          </button>
        </div>
        <div className="flex-1 overflow-auto">
          <MarkdownView content={song.story} filename={`${title}_story`} />
        </div>
      </div>
    );
  };

  return (
    <Dialog 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Song Core & Lyrics"
      onConfirm={onClose}
      size="full"
    >
      <div className="flex flex-col gap-4 w-full h-[85vh] overflow-hidden relative">
        {/* Top actions toolbar */}
        <div className="flex justify-between items-center px-4 py-2 border-b border-lavender-border flex-wrap gap-2">
          <div className="flex flex-col">
            <span className="text-sm text-lavender-text/80 font-medium">
              Active Song: <span className="text-lavender-accent font-bold">{title || 'Untitled'}</span>
            </span>
            <span className="text-xs text-lavender-text/50 font-medium">
              Review core lyrics and songwriter narrative story behind the song.
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <button 
              onClick={handleCopyGeminiPrompt} 
              className="px-3 py-1.5 bg-lavender-accent/10 hover:bg-lavender-accent/20 text-lavender-accent font-bold text-xs rounded transition-colors border border-lavender-accent/30 flex items-center gap-1.5 cursor-pointer shadow-sm" 
              title="Copy prompt for Google Gemini analysis to clipboard"
            >
              {copiedPrompt ? <Check size={14} className="text-green-400" /> : <Sparkles size={14} />}
              <span>{copiedPrompt ? 'Copied Gemini Prompt!' : 'Copy Gemini Prompt'}</span>
            </button>
            <button 
              onClick={handleCopy} 
              className="p-2 hover:bg-lavender-surface rounded text-lavender-text transition-colors border border-lavender-border/30 cursor-pointer" 
              title="Copy Clean Lyrics"
            >
              {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
            </button>
            <button 
              onClick={() => handleDownload('md')} 
              className="p-2 hover:bg-lavender-surface rounded text-lavender-text transition-colors border border-lavender-border/30 cursor-pointer" 
              title="Download Lyrics Markdown"
            >
              <Download size={18} />
            </button>
            <button 
              onClick={() => handleDownload('pdf')} 
              className="px-3 py-1 hover:bg-lavender-surface rounded text-lavender-text font-bold text-sm transition-colors border border-lavender-border cursor-pointer"
              title="Export to PDF"
            >
              PDF
            </button>
          </div>
        </div>

        {/* Tab Selection Header */}
        <div className="flex px-4 border-b border-lavender-border/20 gap-4 shrink-0 bg-lavender-surface/5 py-1.5 select-none">
          {[
            { id: 'lyrics', label: 'Lyrics & Karaoke', icon: <Music2 size={14} /> },
            { id: 'story', label: 'Story Behind Song', icon: <BookOpen size={14} /> }
          ].map(tab => {
            const isActive = activeTab === tab.id;
            const status = getTabStatus(tab.id);
            const isPending = tab.id === 'story' && jobs.some(j => matchJob(j, 'Story Behind Song: ') && (j.status === 'pending' || j.status === 'running'));
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-black transition-all cursor-pointer border-b-2 ${
                  isActive
                    ? 'border-lavender-accent text-lavender-accent bg-lavender-accent/5 font-extrabold'
                    : 'border-transparent text-lavender-text/60 hover:text-lavender-text'
                }`}
              >
                {status === 'success' ? (
                  <Check size={12} className="text-green-400 shrink-0" />
                ) : (
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isPending ? 'bg-amber-500 animate-pulse' : 'bg-orange-500'}`} />
                )}
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Sub tab contents */}
        {activeTab === 'lyrics' ? (
          <div className="flex-1 flex gap-6 min-h-0 overflow-hidden px-4 pb-4">
            {/* Left Sidebar */}
            <div className="w-1/4 min-w-[280px] max-w-[360px] bg-lavender-surface/10 border border-lavender-border/40 rounded-lg p-4 flex flex-col gap-4 overflow-y-auto">
              <h3 className="text-lg font-bold text-lavender-accent border-b border-lavender-border/40 pb-2 flex items-center justify-between">
                <span>Performance Details</span>
                <span className="text-xs bg-lavender-surface px-2 py-0.5 rounded text-lavender-accent font-mono">
                  {sections.length} Sections
                </span>
              </h3>
              
              <div className="flex flex-col gap-3">
                {sections.map((section) => {
                  const isSelected = selectedSectionId === section.id;
                  const checkString = `${section.title} ${section.singer || ''} ${section.melodicPeak || ''} ${section.consonantTiming || ''}`.toLowerCase();
                  const isRap = checkString.includes('rap') || checkString.includes('hip hop') || checkString.includes('rapper') || checkString.includes('rapping') || checkString.includes('rapped');
                  const isOpera = !isRap && (checkString.includes('opera') || checkString.includes('operatic') || checkString.includes('soprano') || checkString.includes('coloratura') || checkString.includes('aria'));

                  const borderStyle = isSelected 
                    ? (isRap ? 'border-yellow-500 bg-yellow-500/10 shadow-md translate-x-1' : isOpera ? 'border-violet-500/80 bg-violet-500/10 shadow-md translate-x-1' : 'bg-lavender-accent/15 border-lavender-accent shadow-md translate-x-1')
                    : (isRap ? 'bg-yellow-500/2 border-yellow-500/20 hover:border-yellow-500/50 hover:bg-yellow-500/5' : isOpera ? 'bg-violet-500/2 border-violet-500/20 hover:border-violet-500/50 hover:bg-violet-500/5' : 'bg-lavender-surface/5 border-lavender-border/20 hover:border-lavender-border/80 hover:bg-lavender-surface/10');

                  const titleAccent = isSelected
                    ? (isRap ? 'text-yellow-400 font-extrabold' : isOpera ? 'text-violet-300 font-extrabold' : 'text-lavender-accent')
                    : (isRap ? 'text-yellow-500' : isOpera ? 'text-violet-400' : 'text-lavender-text');

                  return (
                    <button
                      key={section.id}
                      onClick={() => setSelectedSectionId(section.id)}
                      className={`text-left p-4 rounded-lg transition-all border outline-none cursor-pointer ${borderStyle}`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className={`text-base ${titleAccent}`}>
                          {section.title}
                          {isRap && ' ⚡'}
                          {isOpera && ' 🎭'}
                        </span>
                        {section.tempo && (
                          <span className="text-[10px] bg-lavender-surface px-1.5 py-0.5 rounded text-lavender-accent font-mono border border-lavender-border/40">
                            {section.tempo}
                          </span>
                        )}
                      </div>

                      {section.singer && (
                        <div className="text-xs text-lavender-text/80 mb-3 bg-lavender-surface/30 px-2 py-1 rounded border border-lavender-border/10 italic">
                          Vocal: {section.singer}
                        </div>
                      )}

                      <div className="space-y-1.5 text-xs text-lavender-text/90">
                        {section.key && (
                          <div className="flex gap-1">
                            <span className="font-semibold text-lavender-accent/80">Key:</span>
                            <span className="font-mono">{section.key}</span>
                          </div>
                        )}
                        {section.melodicPeak && (
                          <div>
                            <span className="font-semibold text-lavender-accent/80">Melodic Peak:</span>
                            <p className="mt-0.5 ml-1 leading-normal text-lavender-text/80">{section.melodicPeak}</p>
                          </div>
                        )}
                        {section.consonantTiming && (
                          <div>
                            <span className="font-semibold text-lavender-accent/80">Consonant Timing:</span>
                            <p className="mt-0.5 ml-1 leading-normal text-lavender-text/80">{section.consonantTiming}</p>
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Center Main Lyrics Panel */}
            <div className="flex-1 bg-lavender-bg/30 border border-lavender-border/40 rounded-lg flex flex-col p-8 overflow-y-auto min-h-0 relative">
              <h1 className="text-3xl font-bold text-lavender-accent text-center border-b border-lavender-border pb-4 mb-6">
                {title || 'Untitled Song'}
              </h1>
              
              <div className="flex flex-col gap-6 text-center py-4">
                {sections.length === 0 ? (
                  <div className="text-xl text-lavender-text/50">No lyrics available.</div>
                ) : (
                  sections.map((section) => {
                    const isSelected = selectedSectionId === section.id;
                    const checkString = `${section.title} ${section.singer || ''} ${section.melodicPeak || ''} ${section.consonantTiming || ''}`.toLowerCase();
                    const isRap = checkString.includes('rap') || checkString.includes('hip hop') || checkString.includes('rapper') || checkString.includes('rapping') || checkString.includes('rapped');
                    const isOpera = !isRap && (checkString.includes('opera') || checkString.includes('operatic') || checkString.includes('soprano') || checkString.includes('coloratura') || checkString.includes('aria'));

                    let activeBoxStyle = 'bg-lavender-accent/5 border-lavender-accent/70 scale-[1.01] shadow-lg';
                    if (isSelected) {
                      if (isRap) activeBoxStyle = 'bg-yellow-500/5 border-yellow-500/60 scale-[1.01] shadow-[0_0_15px_rgba(234,179,8,0.15)]';
                      else if (isOpera) activeBoxStyle = 'bg-violet-500/5 border-violet-500/60 scale-[1.01] shadow-[0_0_15px_rgba(139,92,246,0.15)]';
                    }

                    const boxHoverStyle = isSelected
                      ? activeBoxStyle
                      : 'border-transparent hover:bg-lavender-surface/10 hover:border-lavender-border/20';

                    const fontColorStyle = isRap 
                      ? 'text-yellow-300 font-semibold drop-shadow-[0_0_4px_rgba(234,179,8,0.15)]' 
                      : isOpera 
                        ? 'text-violet-300 font-medium drop-shadow-[0_0_4px_rgba(139,92,246,0.15)]' 
                        : 'text-lavender-text font-medium';

                    return (
                      <div
                        key={section.id}
                        onClick={() => setSelectedSectionId(section.id)}
                        className={`p-6 rounded-xl transition-all cursor-pointer duration-300 border ${boxHoverStyle}`}
                      >
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <span className={`${
                            isRap ? 'bg-yellow-500/20 text-yellow-300' : isOpera ? 'bg-violet-500/20 text-violet-300' : 'bg-lavender-surface/60 text-lavender-accent'
                          } text-xs px-2 py-0.5 rounded-full font-bold uppercase tracking-wider`}>
                            {section.title}
                            {isRap && ' ⚡'}
                            {isOpera && ' 🎭'}
                          </span>
                          {section.singer && (
                            <span className="text-xs px-2 py-0.5 rounded-full italic bg-lavender-accent/10 text-lavender-text/85">
                              {section.singer}
                            </span>
                          )}
                        </div>
                        
                        <div className={`whitespace-pre-line text-2xl leading-relaxed ${fontColorStyle}`}>
                          {section.lines.join('\n')}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        ) : (
          renderStoryContent()
        )}
      </div>
    </Dialog>
  );
};
