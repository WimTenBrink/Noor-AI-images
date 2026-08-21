import React, { useState, useEffect, useRef } from 'react';
import { Dialog } from './Dialog';
import { 
  Download, Copy, Check, UploadCloud, FileAudio, Trash2, ShieldCheck, ShieldAlert, RotateCcw,
  Cpu, FileText, ChevronRight
} from 'lucide-react';
import { Job, Song } from '../../types';
import { useJobQueue } from '../hooks/useJobQueue';
import { MarkdownView } from './MarkdownView';
import { 
  GENERATE_ENTENDRES_PROMPT,
  GENERATE_TECHNICAL_PROMPT,
  GENERATE_INTERVIEW_REVIEW_PROMPT,
  GENERATE_GIGGLE_SCALE_PROMPT
} from '../../constants/prompts';
import { 
  SYSTEM_INSTRUCTIONS_ENTENDRES,
  SYSTEM_INSTRUCTIONS_TECHNICAL,
  SYSTEM_INSTRUCTIONS_INTERVIEW_REVIEW,
  SYSTEM_INSTRUCTIONS_GIGGLE_SCALE
} from '../../constants/instructions';

interface UploadedFile {
  name: string;
  size: number;
  matched: boolean;
  date: string;
  duration?: number;
}

interface FileReviewsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  lyrics: string;
  isMp3Matched?: boolean;
  onDropMp3?: (file: File) => void;
  jobs?: Job[];
  song?: Song;
  onUpdateSong?: React.Dispatch<React.SetStateAction<Song>>;
}

const formatBytes = (bytes: number) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const FileReviewsDialog: React.FC<FileReviewsDialogProps> = ({
  isOpen,
  onClose,
  title,
  lyrics,
  isMp3Matched: propIsMp3Matched = false,
  onDropMp3,
  jobs = [],
  song,
  onUpdateSong
}) => {
  const { retryJob, addJob, deleteJob } = useJobQueue();
  const [activeTab, setActiveTab] = useState<'dropFile' | 'entendres' | 'technical' | 'interview' | 'giggleScale'>('dropFile');
  const [isDragging, setIsDragging] = useState(false);
  const dragCounter = useRef(0);

  // Track uploaded files with persistence in localStorage (unique to context)
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>(() => {
    const saved = localStorage.getItem('noor-uploaded-mp3s-v4');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('noor-uploaded-mp3s-v4', JSON.stringify(uploadedFiles));
  }, [uploadedFiles]);

  useEffect(() => {
    if (isOpen) {
      setActiveTab('dropFile');
    }
  }, [isOpen]);

  const checkIfMatched = (fileName: string, songTitle?: string): boolean => {
    if (!songTitle) return false;
    const cleanTitle = songTitle.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanFileName = fileName.toLowerCase().replace(/\.mp3$/, '').replace(/[^a-z0-9]/g, '');
    
    const isPrefixOrSuffix = cleanFileName.includes(cleanTitle) || cleanTitle.includes(cleanFileName);
    const titleWords = songTitle.toLowerCase().split(/[^a-z0-9]+/).filter(w => w.length > 2);
    const areWordsInName = titleWords.length > 0 && titleWords.every(word => fileName.toLowerCase().includes(word));
    return isPrefixOrSuffix || areWordsInName || fileName.toLowerCase() === 'song.mp3' || fileName.toLowerCase() === 'audio.mp3';
  };

  const isMatchedLocal = uploadedFiles.some(f => checkIfMatched(f.name, title));
  const isMp3Matched = propIsMp3Matched || isMatchedLocal;

  const handleProcessFile = (file: File) => {
    const isMatched = checkIfMatched(file.name, title);
    
    const newFileRecord: UploadedFile = {
      name: file.name,
      size: file.size,
      matched: isMatched,
      date: new Date().toLocaleTimeString()
    };
    
    try {
      const audioUrl = URL.createObjectURL(file);
      const audio = new Audio(audioUrl);
      audio.addEventListener('loadedmetadata', () => {
        const duration = audio.duration;
        if (duration && !isNaN(duration)) {
          setUploadedFiles(prev => 
            prev.map(f => f.name === file.name ? { ...f, duration } : f)
          );
        }
        URL.revokeObjectURL(audioUrl);
      });
      audio.addEventListener('error', () => {
        URL.revokeObjectURL(audioUrl);
      });
    } catch (e) {
      console.error("Error reading audio duration:", e);
    }
    
    setUploadedFiles(prev => {
      const filtered = prev.filter(f => f.name !== file.name);
      return [newFileRecord, ...filtered];
    });

    if (onDropMp3) {
      onDropMp3(file);
    }
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    dragCounter.current++;
    if (dragCounter.current === 1) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    dragCounter.current--;
    if (dragCounter.current === 0) {
      setIsDragging(false);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    dragCounter.current = 0;
    const file = e.dataTransfer.files[0];
    if (file) {
      handleProcessFile(file);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleProcessFile(file);
    }
  };

  const matchJob = (j: any, prefix: string) => typeof j?.name === 'string' && j.name.startsWith(prefix);

  const getJobStatus = (prefix: string) => {
    if (!jobs) return null;
    const matching = jobs.find(j => matchJob(j, prefix) && (j.status === 'pending' || j.status === 'running'));
    return matching ? matching.status : null;
  };

  const getTabStatus = (tabId: string, prefix: string) => {
    if (tabId === 'dropFile') return isMp3Matched ? 'success' : 'empty';

    const contentVal = tabId === 'entendres' ? song?.entendres :
                       tabId === 'technical' ? song?.technical :
                       tabId === 'interview' ? song?.interviewReview :
                       tabId === 'giggleScale' ? song?.giggleScale : null;

    if (contentVal) return 'success';

    if (prefix) {
      const matchedJob = jobs.find(j => matchJob(j, prefix));
      if (matchedJob) {
        if (matchedJob.status === 'failed') return 'failed';
        if (matchedJob.status === 'done' && !contentVal) return 'failed';
        return 'pending';
      }
    }

    return 'empty';
  };

  const handleRetryTab = (tabId: string) => {
    const token = localStorage.getItem('noor-api-key') || '';
    let prefix = '';
    if (tabId === 'entendres') prefix = 'Double Entendres: ';
    else if (tabId === 'technical') prefix = 'Technical Details: ';
    else if (tabId === 'interview') prefix = 'Interview & Review: ';
    else if (tabId === 'giggleScale') prefix = 'Giggle Scale: ';

    const matchedJob = jobs.find(j => matchJob(j, prefix));

    if (matchedJob) {
      retryJob(matchedJob.id, token);
    } else {
      if (tabId === 'entendres') {
        addJob(
          `Double Entendres: ${title}`,
          'high',
          GENERATE_ENTENDRES_PROMPT(title, lyrics),
          token,
          song?.settings || {},
          SYSTEM_INSTRUCTIONS_ENTENDRES
        );
      } else if (tabId === 'technical') {
        const mp3File = uploadedFiles.find(f => checkIfMatched(f.name, title));
        addJob(
          `Technical Details: ${title}`,
          'high',
          GENERATE_TECHNICAL_PROMPT(title, lyrics, song?.style || '', mp3File?.name, mp3File?.size, song?.settings || {}),
          token,
          song?.settings || {},
          SYSTEM_INSTRUCTIONS_TECHNICAL
        );
      } else if (tabId === 'interview') {
        addJob(
          `Interview & Review: ${title}`,
          'high',
          GENERATE_INTERVIEW_REVIEW_PROMPT(title, lyrics, song?.story || '', song?.imageDescription),
          token,
          song?.settings || {},
          SYSTEM_INSTRUCTIONS_INTERVIEW_REVIEW
        );
      } else if (tabId === 'giggleScale') {
        addJob(
          `Giggle Scale: ${title}`,
          'high',
          GENERATE_GIGGLE_SCALE_PROMPT(title, lyrics),
          token,
          song?.settings || {},
          SYSTEM_INSTRUCTIONS_GIGGLE_SCALE
        );
      }
    }
  };

  const handleRedo = (tabId: string) => {
    if (onUpdateSong) {
      onUpdateSong(prev => {
        const updated = { ...prev };
        if (tabId === 'entendres') updated.entendres = undefined;
        else if (tabId === 'technical') updated.technical = undefined;
        else if (tabId === 'interview') updated.interviewReview = undefined;
        else if (tabId === 'giggleScale') updated.giggleScale = undefined;
        return updated;
      });
    }

    let jobPrefix = '';
    if (tabId === 'entendres') jobPrefix = 'Double Entendres: ';
    else if (tabId === 'technical') jobPrefix = 'Technical Details: ';
    else if (tabId === 'interview') jobPrefix = 'Interview & Review: ';
    else if (tabId === 'giggleScale') jobPrefix = 'Giggle Scale: ';

    if (jobPrefix) {
      const matchedJob = jobs.find(j => matchJob(j, jobPrefix));
      if (matchedJob) {
        deleteJob(matchedJob.id);
      }
    }

    const token = localStorage.getItem('noor-api-key') || '';
    if (tabId === 'entendres') {
      addJob(
        `Double Entendres: ${title}`,
        'high',
        GENERATE_ENTENDRES_PROMPT(title, lyrics),
        token,
        song?.settings || {},
        SYSTEM_INSTRUCTIONS_ENTENDRES
      );
    } else if (tabId === 'technical') {
      const mp3File = uploadedFiles.find(f => checkIfMatched(f.name, title));
      addJob(
        `Technical Details: ${title}`,
        'high',
        GENERATE_TECHNICAL_PROMPT(title, lyrics, song?.style || '', mp3File?.name, mp3File?.size, song?.settings || {}),
        token,
        song?.settings || {},
        SYSTEM_INSTRUCTIONS_TECHNICAL
      );
    } else if (tabId === 'interview') {
      addJob(
        `Interview & Review: ${title}`,
        'high',
        GENERATE_INTERVIEW_REVIEW_PROMPT(title, lyrics, song?.story || '', song?.imageDescription),
        token,
        song?.settings || {},
        SYSTEM_INSTRUCTIONS_INTERVIEW_REVIEW
      );
    } else if (tabId === 'giggleScale') {
      addJob(
        `Giggle Scale: ${title}`,
        'high',
        GENERATE_GIGGLE_SCALE_PROMPT(title, lyrics),
        token,
        song?.settings || {},
        SYSTEM_INSTRUCTIONS_GIGGLE_SCALE
      );
    }
  };

  const renderDropFileContent = () => {
    return (
      <div className="flex-1 flex flex-col md:flex-row gap-6 min-h-0 overflow-hidden px-4 pb-4 text-lavender-text">
        {/* Left/Main drag area */}
        <div className="flex-1 flex flex-col gap-4">
          <div 
            className="flex-1 border-2 border-dashed border-lavender-border/40 hover:border-lavender-accent/60 bg-lavender-surface/5 rounded-xl flex flex-col items-center justify-center p-8 text-center transition-all min-h-[300px] relative cursor-pointer group"
            onClick={() => document.getElementById('reviews-file-input')?.click()}
          >
            <input 
              id="reviews-file-input"
              type="file" 
              accept=".mp3" 
              onChange={handleFileInputChange} 
              className="hidden" 
            />
            <div className="p-6 bg-lavender-surface group-hover:bg-lavender-surface/80 rounded-full border border-lavender-border/40 group-hover:border-lavender-accent/40 shadow-xl mb-4 text-lavender-accent animate-pulse transition-all">
              <UploadCloud size={32} />
            </div>
            <h3 className="text-xl font-bold text-lavender-accent">Drag & Drop Song MP3 Audio File</h3>
            <p className="text-sm text-lavender-text/70 mt-2 max-w-sm font-medium">
              Or click anywhere in this dashed box to browse files on your computer.
            </p>
            <div className="mt-4 text-[10px] bg-lavender-accent/10 border border-lavender-accent/30 text-lavender-accent font-black px-3.5 py-1.5 rounded-full font-mono uppercase tracking-widest leading-none">
              accepts only *.mp3
            </div>
          </div>
        </div>

        {/* Right panel listing uploaded/dropped files */}
        <div className="w-full md:w-1/3 min-w-[320px] bg-lavender-surface/10 border border-lavender-border/40 rounded-xl p-4 flex flex-col gap-4 overflow-y-auto">
          <div className="flex items-center justify-between border-b border-lavender-border/40 pb-2">
            <h3 className="text-xs font-black text-lavender-accent flex items-center gap-1.5 uppercase tracking-wide font-mono">
              <FileAudio size={14} />
              <span>Uploaded Files Log</span>
            </h3>
            {uploadedFiles.length > 0 && (
              <button 
                onClick={() => setUploadedFiles([])}
                className="text-[9px] bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 px-2.5 py-1 rounded font-black uppercase tracking-wider transition-all cursor-pointer font-mono"
              >
                Clear Log
              </button>
            )}
          </div>

          {uploadedFiles.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-lavender-text/40 italic text-xs border border-dashed border-lavender-border/10 rounded-lg min-h-[220px]">
              <div className="text-xl mb-2">📁</div>
              No files uploaded yet. Drag or pick an MP3 file to verify it for Karaoke analytics.
            </div>
          ) : (
            <div className="flex flex-col gap-3 overflow-y-auto pr-1">
              {uploadedFiles.map((f, idx) => {
                const isForCurrentSong = checkIfMatched(f.name, title);
                const copiedFileId = `cp-review-${idx}`;
                return (
                  <div 
                    key={f.name + '-' + idx} 
                    className={`p-3.5 border rounded-xl flex flex-col gap-2 transition-all ${
                      isForCurrentSong
                        ? 'bg-green-500/5 border-green-500/30'
                        : 'bg-lavender-surface/30 border-lavender-border/25 shadow-sm'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-1.5">
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-black text-white truncate block" title={f.name}>
                          {f.name}
                        </span>
                        <span className="text-[10px] text-lavender-text/50 font-bold block">
                          Size: {formatBytes(f.size || 0)} • Logged: {f.date}
                        </span>
                      </div>
                      
                      <div className="flex gap-1.5 shrink-0">
                        {/* Copy file button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigator.clipboard.writeText(f.name);
                            const el = document.getElementById(copiedFileId);
                            if (el) {
                              el.innerText = 'Copied!';
                              setTimeout(() => { if (el) el.innerText = 'Copy'; }, 1500);
                            }
                          }}
                          className="p-1.5 bg-lavender-surface hover:bg-lavender-accent hover:text-black rounded border border-lavender-border/30 hover:border-transparent text-lavender-text transition-all cursor-pointer relative group"
                          title="Copy File Name"
                        >
                          <Copy size={11} />
                        </button>

                        {/* Delete File button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setUploadedFiles(prev => prev.filter((_, itemIdx) => itemIdx !== idx));
                          }}
                          className="p-1.5 bg-red-500/10 hover:bg-red-500 border border-red-500/20 hover:border-transparent text-red-400 hover:text-white rounded transition-all cursor-pointer relative group"
                          title="Remove Log Entry"
                        >
                          <Trash2 size={11} />
                        </button>
                      </div>
                    </div>

                    {/* Status bar */}
                    <div className="flex items-center gap-1.5 pt-1.5 border-t border-lavender-border/15">
                      {isForCurrentSong ? (
                        <span className="flex items-center gap-1 text-[9.5px] font-black text-green-400 uppercase tracking-wider">
                          <ShieldCheck size={11} />
                          MATCHED with "{title}"
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[9.5px] font-black text-red-400 uppercase tracking-wider font-mono">
                          <ShieldAlert size={11} />
                          MISMATCH: Not for active song
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderReportContent = (tabId: 'entendres' | 'technical' | 'interview' | 'giggleScale', content: string | undefined, jobPrefix: string, titleLabel: string, desc: string) => {
    const status = getJobStatus(jobPrefix);
    if (status) {
      return (
        <div className="flex-1 flex flex-col items-center justify-center p-12 text-center bg-lavender-surface/5 rounded-lg border border-lavender-border/20 m-4 h-[55vh]">
          <div className="w-12 h-12 border-4 border-lavender-accent border-t-transparent rounded-full animate-spin mb-4" />
          <h3 className="text-xl font-bold text-lavender-accent">Generating {titleLabel}</h3>
          <p className="text-sm text-lavender-text/70 mt-2 max-w-sm leading-relaxed">{desc}</p>
          <div className="mt-4 text-xs bg-lavender-surface px-3 py-1.5 rounded text-lavender-accent font-mono uppercase tracking-wider animate-pulse border border-lavender-border/40">
            Queue Status: {status}
          </div>
        </div>
      );
    }

    const matchedJob = jobs.find(j => matchJob(j, jobPrefix));
    if (matchedJob && matchedJob.status === 'failed' && !content) {
      return (
        <div className="flex-1 flex flex-col items-center justify-center p-12 text-center bg-lavender-surface/5 rounded-lg border border-red-500/30 m-4 h-[55vh]">
          <div className="p-6 bg-red-500/10 rounded-full border border-red-500/20 shadow-inner mb-4 text-3xl">
            ⚠️
          </div>
          <h3 className="text-xl font-bold text-red-400">Generation Failed</h3>
          <p className="text-sm text-lavender-text/70 mt-2 max-w-sm leading-relaxed">
            The background job encountered an issue while generating "{titleLabel}".
          </p>
          {matchedJob.error && (
            <div className="mt-2 text-xs bg-red-500/5 px-4 py-2 rounded text-red-300 font-mono border border-red-500/10 max-w-lg overflow-auto max-h-32 mb-4">
              {matchedJob.error}
            </div>
          )}
          <button
            onClick={() => handleRetryTab(tabId)}
            className="px-4 py-2 bg-lavender-accent hover:bg-lavender-accent/80 text-black font-extrabold rounded-lg flex items-center gap-2 transition-all cursor-pointer text-sm"
          >
            <RotateCcw size={14} />
            Retry Generation Step
          </button>
        </div>
      );
    }

    if (!content) {
      return (
        <div className="flex-1 flex flex-col items-center justify-center p-12 text-center bg-lavender-surface/5 rounded-lg border border-lavender-border/20 m-4 h-[55vh]">
          <div className="p-6 bg-lavender-surface rounded-full border border-lavender-border/40 shadow-inner mb-4 text-3xl">
            🔒
          </div>
          <h3 className="text-xl font-bold text-lavender-text/80">
            Report Locked
          </h3>
          <p className="text-sm text-lavender-text/60 mt-2 max-w-sm leading-relaxed">
            To unlock advanced reviews, drop the correct MP3 sound file for "{title || 'this song'}" directly onto this dialog, or upload it in the 'Drop File' tab page.
          </p>
        </div>
      );
    }

    return (
      <div className="flex-1 bg-lavender-bg/30 border border-lavender-border/40 rounded-lg flex flex-col overflow-hidden m-4 h-[70vh]">
        <div className="px-4 py-2.5 border-b border-lavender-border/20 flex justify-between items-center bg-lavender-surface/10">
          <span className="text-xs font-semibold text-lavender-accent/85 tracking-wider uppercase font-mono">{titleLabel}</span>
          <button
            onClick={() => handleRedo(tabId)}
            className="px-3 py-1 bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 font-bold rounded border border-red-500/20 flex items-center gap-1.5 transition-all cursor-pointer text-xs font-mono"
            title="Regenerate this report"
          >
            <RotateCcw size={12} />
            Redo Generation
          </button>
        </div>
        <div className="flex-1 overflow-auto">
          <MarkdownView content={content} filename={`${title}_${tabId}`} />
        </div>
      </div>
    );
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title="Advanced File Reviews"
      onConfirm={onClose}
      size="full"
    >
      <div 
        className="flex flex-col gap-4 w-full h-[85vh] overflow-hidden relative"
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {isDragging && (
          <div className="absolute inset-0 z-50 bg-lavender-bg/95 border-4 border-dashed border-lavender-accent flex flex-col items-center justify-center p-8 text-center backdrop-blur-md pointer-events-none">
            <div className="p-6 bg-lavender-surface rounded-full border border-lavender-border/40 shadow-xl mb-4 text-4xl animate-bounce">
              🎵
            </div>
            <h3 className="text-2xl font-bold text-lavender-accent">Drop MP3 Sound File Here</h3>
            <p className="text-sm text-lavender-text/70 mt-2 max-w-sm font-semibold">
              Verify if the dropped audio is the matched file for "{title || 'Untitled Song'}" to unlock advanced reviews!
            </p>
          </div>
        )}

        {/* Top actions toolbar */}
        <div className="flex justify-between items-center px-4 py-2 border-b border-lavender-border flex-wrap gap-2 shrink-0">
          <div className="flex flex-col">
            <span className="text-sm text-lavender-text/80 font-medium">
              Active Song: <span className="text-lavender-accent font-bold">{title || 'Untitled'}</span>
            </span>
            <span className="text-xs text-lavender-text/50 font-medium">
              Verify mix files, match waveform details, and query double entendre structures.
            </span>
          </div>
        </div>

        {/* Tab Selection Header */}
        <div className="flex px-4 border-b border-lavender-border/20 gap-4 shrink-0 bg-lavender-surface/5 py-1.5 select-none font-mono">
          {[
            { id: 'dropFile', label: 'Drop File', prefix: '', desc: 'Drop MP3 audio to unlock more reports', icon: <UploadCloud size={14} /> },
            { id: 'entendres', label: 'Multi-Level Entendres', prefix: 'Double Entendres: ', desc: 'Linguistic review of all sensual double entendres, metaphors, and botanical subtexts.', icon: <FileText size={14} /> },
            { id: 'technical', label: 'Technical', prefix: 'Technical Details: ', desc: 'Technical musicology mapping, key signatures, and vocal & sound analysis breakdown.', icon: <Cpu size={14} /> },
            { id: 'interview', label: 'Interview & Review', prefix: 'Interview & Review: ', desc: 'Honest studio interview with the singers and track review.', icon: <FileText size={14} /> },
            { id: 'giggleScale', label: 'Giggle Scale', prefix: 'Giggle Scale: ', desc: 'Comedic analysis, target demographics, rating, and joke breakdown.', icon: <FileText size={14} /> }
          ].map(tab => {
            const isActive = activeTab === tab.id;
            const status = getTabStatus(tab.id, tab.prefix);
            const isPending = status === 'pending';

            return (
              <div
                key={tab.id}
                className={`flex items-center gap-1 border-b-2 transition-all ${
                  isActive
                    ? 'border-lavender-accent bg-lavender-accent/5 font-extrabold text-lavender-accent'
                    : 'border-transparent text-lavender-text/60 hover:text-lavender-text'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-black transition-all cursor-pointer shrink-0"
                >
                  {status === 'success' ? (
                    <Check size={12} className="text-green-400 shrink-0" />
                  ) : (
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isPending ? 'bg-amber-500 animate-pulse' : 'bg-orange-500'}`} />
                  )}
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
                {tab.id !== 'dropFile' && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRedo(tab.id);
                    }}
                    className="p-1 text-lavender-text/30 hover:text-red-400 hover:bg-red-500/10 rounded transition-all cursor-pointer mr-1.5"
                    title={`Redo ${tab.label} Generation`}
                  >
                    <RotateCcw size={10} />
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Dynamic Panel Content */}
        <div className="flex-1 overflow-y-auto min-h-0">
          {activeTab === 'dropFile' && renderDropFileContent()}
          {activeTab === 'entendres' && renderReportContent('entendres', song?.entendres, 'Double Entendres: ', 'Linguistic Metaphor Review', 'In-depth linguistic review of sensual double entendres')}
          {activeTab === 'technical' && renderReportContent('technical', song?.technical, 'Technical Details: ', 'Technical Analysis', 'Technical musicology mapping and vocal & sound analysis breakdown')}
          {activeTab === 'interview' && renderReportContent('interview', song?.interviewReview, 'Interview & Review: ', 'Studio Interview & Track Review', 'Compilation of singer studio interview and review')}
          {activeTab === 'giggleScale' && renderReportContent('giggleScale', song?.giggleScale, 'Giggle Scale: ', 'Giggle Scale & Rating Review', 'Comedic breakdown, ratings, and song jokes explanations')}
        </div>
      </div>
    </Dialog>
  );
};
