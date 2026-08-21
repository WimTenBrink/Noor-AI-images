import React, { useState, useEffect } from 'react';
import { Dialog } from './Dialog';
import { Tooltip } from './Tooltip';
import { 
  Download, Copy, Check, RotateCcw, Trash2, Sparkles, Cpu
} from 'lucide-react';
import { Job, Song, VideoSegmentPrompt } from '../../types';
import { useJobQueue } from '../hooks/useJobQueue';
import { HorizontalScroll } from './HorizontalScroll';
import { GENERATE_VIDEO_SEGMENTS_PROMPT } from '../../constants/prompts';

interface FlatScene {
  id: string;
  segmentIndex: number;
  type: 'band' | 'narrative' | 'custom';
  label: string;
  timeRange: string;
  lyricsInSegment: string;
  prompt: string;
}

interface UploadedFile {
  name: string;
  size: number;
  matched: boolean;
  date: string;
  duration?: number;
}

interface VideoSegmentPromptsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  lyrics: string;
  isMp3Matched?: boolean;
  jobs?: Job[];
  song?: Song;
  onUpdateSong?: React.Dispatch<React.SetStateAction<Song>>;
}

const checkIfMatched = (filename: string, songTitle: string) => {
  if (!songTitle) return false;
  const cleanF = filename.toLowerCase().replace(/\s+/g, '').replace(/\.[^/.]+$/, "");
  const cleanT = songTitle.toLowerCase().replace(/\s+/g, "");
  return cleanF.includes(cleanT) || cleanT.includes(cleanF);
};

export const VideoSegmentPromptsDialog: React.FC<VideoSegmentPromptsDialogProps> = ({
  isOpen,
  onClose,
  title,
  lyrics,
  isMp3Matched = false,
  jobs = [],
  song,
  onUpdateSong
}) => {
  const { addJob, deleteJob } = useJobQueue();
  const [customDuration, setCustomDuration] = useState<number>(180);
  const [videoSegmentDuration, setVideoSegmentDuration] = useState<number>(15);
  const [flatScenes, setFlatScenes] = useState<FlatScene[]>([]);
  const [activeSceneIdx, setActiveSceneIdx] = useState<number>(0);
  const [copiedPrompts, setCopiedPrompts] = useState<Record<string, boolean>>({});

  // Uploaded files list (fetched from local storage for matching)
  const [uploadedFiles] = useState<UploadedFile[]>(() => {
    const saved = localStorage.getItem('noor-uploaded-mp3s-v4');
    return saved ? JSON.parse(saved) : [];
  });

  // Synchronize video timeline prompts
  useEffect(() => {
    if (song?.videoSegmentPrompts && song.videoSegmentPrompts.length > 0) {
      const segIds = song.videoSegmentPrompts.map((_, idx) => `seg-${idx}-band`);
      const alreadyMatched = flatScenes.length > 0 && flatScenes.some(s => segIds.includes(s.id));
      if (flatScenes.length === 0 || !alreadyMatched) {
        const initialScenes: FlatScene[] = [];
        song.videoSegmentPrompts.forEach((seg, idx) => {
          initialScenes.push({
            id: `seg-${idx}-band`,
            segmentIndex: idx,
            type: 'band',
            label: `🎬 Seg ${idx} (Band)`,
            timeRange: seg.timeRange || `${idx * videoSegmentDuration}s - ${(idx + 1) * videoSegmentDuration}s`,
            lyricsInSegment: seg.lyricsInSegment || '',
            prompt: seg.bandPrompt || 'No band performance prompt generated.'
          });
          initialScenes.push({
            id: `seg-${idx}-narrative`,
            segmentIndex: idx,
            type: 'narrative',
            label: `🎨 Seg ${idx} (Story)`,
            timeRange: seg.timeRange || `${idx * videoSegmentDuration}s - ${(idx + 1) * videoSegmentDuration}s`,
            lyricsInSegment: seg.lyricsInSegment || '',
            prompt: seg.narrativePrompt || 'No narrative scene prompt generated.'
          });
        });
        setFlatScenes(initialScenes);
        setActiveSceneIdx(0);
      }
    } else {
      setFlatScenes([]);
    }
  }, [song?.videoSegmentPrompts, videoSegmentDuration]);

  const handleUpdateScene = (id: string, updates: Partial<FlatScene>) => {
    const updated = flatScenes.map(s => s.id === id ? { ...s, ...updates } : s);
    setFlatScenes(updated);

    if (onUpdateSong) {
      onUpdateSong(prev => {
        const newSegments: VideoSegmentPrompt[] = [];
        const segmentMap: Record<number, Partial<VideoSegmentPrompt>> = {};

        updated.forEach(s => {
          if (!segmentMap[s.segmentIndex]) {
            segmentMap[s.segmentIndex] = {
              segmentIndex: s.segmentIndex,
              timeRange: s.timeRange,
              lyricsInSegment: s.lyricsInSegment,
              bandPrompt: '',
              narrativePrompt: ''
            };
          }
          if (s.type === 'band') {
            segmentMap[s.segmentIndex].bandPrompt = s.prompt;
          } else {
            if (segmentMap[s.segmentIndex].narrativePrompt) {
              segmentMap[s.segmentIndex].narrativePrompt += '\n\n' + s.prompt;
            } else {
              segmentMap[s.segmentIndex].narrativePrompt = s.prompt;
            }
          }
        });

        Object.keys(segmentMap).forEach(key => {
          const numKey = Number(key);
          newSegments.push(segmentMap[numKey] as VideoSegmentPrompt);
        });

        return {
          ...prev,
          videoSegmentPrompts: newSegments
        };
      });
    }
  };

  const handleAddScene = () => {
    const lastScene = flatScenes[flatScenes.length - 1];
    const nextSegIdx = lastScene ? lastScene.segmentIndex + 1 : 0;
    const startSec = lastScene ? (nextSegIdx * videoSegmentDuration) : 0;
    const endSec = startSec + videoSegmentDuration;

    const newScene: FlatScene = {
      id: `custom-${Date.now()}`,
      segmentIndex: nextSegIdx,
      type: 'custom',
      label: `✨ Custom Scene ${flatScenes.length + 1}`,
      timeRange: `${startSec}s - ${endSec}s`,
      lyricsInSegment: 'Custom scene details...',
      prompt: 'A spectacular, highly detailed cinematic shot in exquisite lighting...'
    };

    const updated = [...flatScenes, newScene];
    setFlatScenes(updated);
    setActiveSceneIdx(updated.length - 1);

    if (onUpdateSong) {
      onUpdateSong(prev => {
        const newSegments: VideoSegmentPrompt[] = [];
        const segmentMap: Record<number, Partial<VideoSegmentPrompt>> = {};

        updated.forEach(s => {
          if (!segmentMap[s.segmentIndex]) {
            segmentMap[s.segmentIndex] = {
              segmentIndex: s.segmentIndex,
              timeRange: s.timeRange,
              lyricsInSegment: s.lyricsInSegment,
              bandPrompt: '',
              narrativePrompt: ''
            };
          }
          if (s.type === 'band') {
            segmentMap[s.segmentIndex].bandPrompt = s.prompt;
          } else {
            if (segmentMap[s.segmentIndex].narrativePrompt) {
              segmentMap[s.segmentIndex].narrativePrompt += '\n\n' + s.prompt;
            } else {
              segmentMap[s.segmentIndex].narrativePrompt = s.prompt;
            }
          }
        });

        Object.keys(segmentMap).forEach(key => {
          const numKey = Number(key);
          newSegments.push(segmentMap[numKey] as VideoSegmentPrompt);
        });

        return {
          ...prev,
          videoSegmentPrompts: newSegments
        };
      });
    }
  };

  const handleDeleteScene = (idx: number) => {
    if (flatScenes.length <= 1) return;
    const updated = flatScenes.filter((_, i) => i !== idx);
    setFlatScenes(updated);
    setActiveSceneIdx(Math.max(0, idx - 1));

    if (onUpdateSong) {
      onUpdateSong(prev => {
        const newSegments: VideoSegmentPrompt[] = [];
        const segmentMap: Record<number, Partial<VideoSegmentPrompt>> = {};

        updated.forEach(s => {
          if (!segmentMap[s.segmentIndex]) {
            segmentMap[s.segmentIndex] = {
              segmentIndex: s.segmentIndex,
              timeRange: s.timeRange,
              lyricsInSegment: s.lyricsInSegment,
              bandPrompt: '',
              narrativePrompt: ''
            };
          }
          if (s.type === 'band') {
            segmentMap[s.segmentIndex].bandPrompt = s.prompt;
          } else {
            if (segmentMap[s.segmentIndex].narrativePrompt) {
              segmentMap[s.segmentIndex].narrativePrompt += '\n\n' + s.prompt;
            } else {
              segmentMap[s.segmentIndex].narrativePrompt = s.prompt;
            }
          }
        });

        Object.keys(segmentMap).forEach(key => {
          const numKey = Number(key);
          newSegments.push(segmentMap[numKey] as VideoSegmentPrompt);
        });

        return {
          ...prev,
          videoSegmentPrompts: newSegments
        };
      });
    }
  };

  const handleDownloadVideoPromptsJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(song?.videoSegmentPrompts || [], null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${title.replace(/\s+/g, '_')}_video_prompts.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const matchJob = (j: any, prefix: string) => typeof j?.name === 'string' && j.name.startsWith(prefix);

  const handleRedoVideoPrompts = () => {
    if (onUpdateSong) {
      onUpdateSong(prev => ({ ...prev, videoSegmentPrompts: undefined }));
    }
    const matchedJob = jobs.find(j => matchJob(j, `Video Segment Prompts: `));
    if (matchedJob) {
      deleteJob(matchedJob.id);
    }
  };

  const handleCopyPrompt = (promptText: string, id: string) => {
    navigator.clipboard.writeText(promptText);
    setCopiedPrompts(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopiedPrompts(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const getJobStatus = (prefix: string) => {
    if (!jobs) return null;
    const matching = jobs.find(j => matchJob(j, prefix) && (j.status === 'pending' || j.status === 'running'));
    return matching ? matching.status : null;
  };

  const status = getJobStatus('Video Segment Prompts: ');
  const matchedJob = jobs.find(j => matchJob(j, 'Video Segment Prompts: '));
  const videoPrompts = song?.videoSegmentPrompts;

  const renderVideoPromptsContent = () => {
    if (status) {
      return (
        <div className="flex-1 flex flex-col items-center justify-center p-12 text-center bg-lavender-surface/5 rounded-lg border border-lavender-border/20 m-4 h-[55vh]">
          <div className="w-12 h-12 border-4 border-lavender-accent border-t-transparent rounded-full animate-spin mb-4" />
          <h3 className="text-xl font-bold text-lavender-accent">Generating Video Segment Prompts</h3>
          <p className="text-sm text-lavender-text/70 mt-2 max-w-sm leading-relaxed">
            The AI is chunking the lyrics into {videoSegmentDuration}-second segments, matching instruments, assigning standard clothes, deciding camera angles, and writing two detailed prompt options per segment.
          </p>
          <div className="mt-4 text-xs bg-lavender-surface px-3 py-1.5 rounded text-lavender-accent font-mono uppercase tracking-wider animate-pulse border border-lavender-border/40">
            Queue Status: {status}
          </div>
        </div>
      );
    }

    if (matchedJob && matchedJob.status === 'failed' && !videoPrompts) {
      return (
        <div className="flex-1 flex flex-col items-center justify-center p-12 text-center bg-lavender-surface/5 rounded-lg border border-red-500/30 m-4 h-[55vh]">
          <div className="p-6 bg-red-500/10 rounded-full border border-red-500/20 shadow-inner mb-4 text-3xl">
            ⚠️
          </div>
          <h3 className="text-xl font-bold text-red-400">Generation Failed</h3>
          <p className="text-sm text-lavender-text/70 mt-2 max-w-sm leading-relaxed">
            Something went wrong while generating the video segment prompts. Let's try again.
          </p>
          {matchedJob.error && (
            <div className="mt-2 text-xs bg-red-500/5 px-4 py-2 rounded text-red-300 font-mono border border-red-500/10 max-w-lg overflow-auto max-h-32 mb-4">
              {matchedJob.error}
            </div>
          )}
          <button
            onClick={handleRedoVideoPrompts}
            className="px-4 py-2 bg-lavender-accent hover:bg-lavender-accent/80 text-black font-extrabold rounded-lg flex items-center gap-2 transition-all cursor-pointer text-sm"
          >
            <RotateCcw size={14} />
            Retry Generation
          </button>
        </div>
      );
    }

    if (!videoPrompts || videoPrompts.length === 0) {
      const mp3File = uploadedFiles.find(f => checkIfMatched(f.name, title));
      const mp3Duration = mp3File?.duration;
      const durationToUse = mp3Duration ? Math.round(mp3Duration) : customDuration;
      const numSegments = Math.max(1, Math.floor(durationToUse / videoSegmentDuration));

      return (
        <div className="flex-1 flex flex-col items-center justify-start md:justify-center p-8 text-center bg-lavender-surface/5 rounded-lg border border-lavender-border/20 m-4 h-[55vh] overflow-y-auto scrollbar-thin">
          <div className="p-5 bg-lavender-surface rounded-full border border-lavender-border/40 shadow-inner mb-4 text-4xl shrink-0 select-none">
            🎬
          </div>
          <h3 className="text-xl font-bold text-lavender-accent">Generate Video Segment Prompts</h3>
          <p className="text-sm text-lavender-text/70 mt-2 max-w-xl leading-relaxed">
            Transform this song into a fully synchronized {videoSegmentDuration}-second segmented storyboard prompt sheet. Perfect for tools like Sora, WAN, Kling, or Luma Dream Machine to piece together a movie of the exact song duration.
          </p>

          <div className="bg-lavender-surface/20 border border-lavender-border/30 rounded-xl p-5 mt-6 max-w-md w-full text-left space-y-4">
            <h4 className="text-xs font-bold text-lavender-accent/80 uppercase tracking-wider">Video Segment Settings</h4>
            
            {mp3Duration ? (
              <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-lg">
                <span className="text-xl">✅</span>
                <div className="text-xs">
                  <p className="font-extrabold text-emerald-400">Audio File Duration Detected</p>
                  <p className="text-lavender-text/70">"{mp3File?.name}" ({Math.round(mp3Duration)} seconds / {numSegments} segments)</p>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-lavender-text/70 font-semibold">Custom Song Duration</span>
                  <span className="text-lavender-accent font-mono font-bold">{customDuration} seconds</span>
                </div>
                <input 
                  type="range" 
                  min="30" 
                  max="300" 
                  step="10"
                  value={customDuration}
                  onChange={(e) => setCustomDuration(Number(e.target.value))}
                  className="w-full accent-lavender-accent cursor-pointer h-1 bg-lavender-border/40 rounded-lg outline-none"
                />
                <div className="flex justify-between text-[10px] text-lavender-text/40 font-mono">
                  <span>30s</span>
                  <span>{numSegments} segments ({videoSegmentDuration}s each)</span>
                  <span>300s</span>
                </div>
              </div>
            )}

            {/* Segment Duration Control Section */}
            <div className="space-y-2.5 pt-3 border-t border-lavender-border/10">
              <div className="flex justify-between items-center text-xs">
                <span className="text-lavender-text/80 font-bold">Segment Duration</span>
                <span className="text-lavender-accent font-mono font-black text-sm bg-lavender-accent/10 px-2 py-0.5 rounded">
                  {videoSegmentDuration} seconds
                </span>
              </div>
              
              <input 
                type="range" 
                min="1" 
                max="30" 
                step="1"
                value={videoSegmentDuration}
                onChange={(e) => setVideoSegmentDuration(Math.max(1, Math.min(30, Number(e.target.value))))}
                className="w-full accent-lavender-accent cursor-pointer h-1.5 bg-lavender-border/30 rounded-lg outline-none"
              />
              
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-lavender-text/40 font-mono">1s - 30s</span>
                <div className="flex items-center gap-1.5 bg-black/20 p-1 rounded-lg border border-lavender-border/10">
                  <span className="text-[10px] text-lavender-text/50 font-bold px-1 select-none font-mono">Quick:</span>
                  <button 
                    onClick={() => setVideoSegmentDuration(5)} 
                    className={`px-2 py-0.5 rounded text-[10px] font-black tracking-wide transition-all ${
                      videoSegmentDuration === 5 
                        ? 'bg-lavender-accent text-black shadow-sm' 
                        : 'hover:bg-lavender-surface/20 text-lavender-text/75'
                    }`}
                  >
                    5s
                  </button>
                  <button 
                    onClick={() => setVideoSegmentDuration(10)} 
                    className={`px-2 py-0.5 rounded text-[10px] font-black tracking-wide transition-all ${
                      videoSegmentDuration === 10 
                        ? 'bg-lavender-accent text-black shadow-sm' 
                        : 'hover:bg-lavender-surface/20 text-lavender-text/75'
                    }`}
                  >
                    10s
                  </button>
                  <button 
                    onClick={() => setVideoSegmentDuration(15)} 
                    className={`px-2 py-0.5 rounded text-[10px] font-black tracking-wide transition-all ${
                      videoSegmentDuration === 15 
                        ? 'bg-lavender-accent text-black shadow-sm' 
                        : 'hover:bg-lavender-surface/20 text-lavender-text/75'
                    }`}
                  >
                    15s
                  </button>
                </div>
              </div>
            </div>

            <ul className="text-[11px] text-lavender-text/65 space-y-1 list-disc list-inside border-t border-lavender-border/10 pt-3">
              <li>Generates both **Band Performance** & **Lyric B-Roll** prompts.</li>
              <li>Specifies standard clothing, barefoot, and physical instrument playing.</li>
              <li>Aligns angles, close-ups, and lip-sync instructions.</li>
            </ul>
          </div>

          <button
            onClick={() => {
              const token = localStorage.getItem('noor-api-key') || '';
              addJob(
                `Video Segment Prompts: ${title}`,
                'high',
                GENERATE_VIDEO_SEGMENTS_PROMPT(title, lyrics, song?.style || '', durationToUse, videoSegmentDuration),
                token,
                song?.settings || {},
                "You are a specialized AI prompt engineer. Generate highly descriptive video prompts in JSON format."
              );
            }}
            className="mt-6 px-6 py-3 bg-lavender-accent hover:bg-lavender-accent/80 text-black font-extrabold rounded-xl flex items-center gap-2 transition-all cursor-pointer text-sm shadow-lg hover:shadow-lavender-accent/15"
          >
            <Sparkles size={16} />
            Queue Video Prompt Generation
          </button>
        </div>
      );
    }

    const currentScene = flatScenes[activeSceneIdx] || flatScenes[0];

    return (
      <div className="flex-1 flex flex-col min-h-0 overflow-hidden px-4 pb-3 gap-3">
        {/* Child Tabs & Actions inline row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-lavender-border/20 pb-1 shrink-0 gap-3">
          <div className="flex-1 min-w-0 w-full">
            <HorizontalScroll className="py-1" containerClassName="flex items-center gap-1.5 select-none">
              {flatScenes.map((scene, idx) => {
                const isActive = activeSceneIdx === idx;
                let icon = "🎬";
                if (scene.type === 'narrative') icon = "🎨";
                else if (scene.type === 'custom') icon = "✨";

                return (
                  <Tooltip
                    key={scene.id}
                    title={scene.label}
                    content={`Time range: ${scene.timeRange || 'N/A'}\nSubject/Lyrics: ${scene.lyricsInSegment || 'N/A'}`}
                    className="inline-block"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveSceneIdx(idx)}
                      className={`flex items-center gap-1.5 px-3 py-2 text-xs font-black rounded-lg border transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'bg-lavender-accent text-black border-transparent shadow-md font-extrabold scale-102'
                          : 'bg-lavender-surface/5 border-lavender-border/25 text-lavender-text/80 hover:text-lavender-text hover:bg-lavender-surface/15'
                      }`}
                    >
                      <span className="text-sm shrink-0">{icon}</span>
                      <span>{scene.label}</span>
                      {isActive && flatScenes.length > 1 && (
                        <span
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteScene(idx);
                          }}
                          className="ml-1.5 p-0.5 rounded hover:bg-black/30 text-red-500 hover:text-red-400 transition-all cursor-pointer inline-flex items-center"
                          title="Delete Scene"
                        >
                          <Trash2 size={12} />
                        </span>
                      )}
                    </button>
                  </Tooltip>
                );
              })}

              {/* Add Scene Button "+" as an extra tab */}
              <button
                type="button"
                onClick={handleAddScene}
                className="flex items-center justify-center w-8 h-8 rounded-lg bg-lavender-accent/15 border border-lavender-accent/30 text-lavender-accent hover:bg-lavender-accent hover:text-black transition-all cursor-pointer text-lg font-black shrink-0 ml-1 hover:shadow-md"
                title="Add Custom Scene"
              >
                +
              </button>
            </HorizontalScroll>
          </div>

          <div className="flex gap-2 shrink-0 self-end sm:self-auto">
            <button
              onClick={handleDownloadVideoPromptsJson}
              className="px-2.5 py-1.5 bg-lavender-surface hover:bg-lavender-surface/80 border border-lavender-border/40 text-lavender-text hover:text-lavender-accent text-xs font-bold rounded-lg flex items-center gap-1.5 transition-all cursor-pointer"
              title="Download JSON Sheet"
            >
              <Download size={13} />
              <span className="hidden md:inline">Download JSON</span>
            </button>
            <button
              onClick={handleRedoVideoPrompts}
              className="px-2.5 py-1.5 bg-red-500/5 hover:bg-red-500/10 text-red-400 hover:text-red-300 border border-red-500/15 text-xs font-bold rounded-lg flex items-center gap-1.5 transition-all cursor-pointer"
              title="Regenerate Timeline"
            >
              <RotateCcw size={13} />
              <span className="hidden md:inline">Regenerate Timeline</span>
            </button>
          </div>
        </div>

        {/* Active Scene Panel */}
        {currentScene ? (
          <div className="flex-1 overflow-y-auto bg-black/25 p-5 border border-lavender-border/30 rounded-xl flex flex-col gap-4 min-h-0">
            {/* Fields Grid with built-in Scene Type Selector */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-lavender-border/10 pb-4 shrink-0">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider text-lavender-accent/80 block">
                  Scene Type / Video Context
                </label>
                <div className="flex gap-1 bg-black/40 p-1 rounded-lg border border-lavender-border/10 text-xs font-mono h-9 items-center">
                  {[
                    { type: 'band', label: '🎬 Band' },
                    { type: 'narrative', label: '🎨 Lyric' },
                    { type: 'custom', label: '✨ Custom' },
                  ].map((opt) => (
                    <button
                      key={opt.type}
                      type="button"
                      onClick={() => handleUpdateScene(currentScene.id, { type: opt.type as any })}
                      className={`flex-1 py-1 rounded font-bold transition-all cursor-pointer text-[10px] text-center h-7 ${
                        currentScene.type === opt.type
                          ? 'bg-lavender-accent text-black font-black'
                          : 'hover:bg-lavender-surface/10 text-lavender-text/60'
                      }`}
                    >
                      {opt.label.split(' ')[1]}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider text-lavender-accent/80 block">
                  Timeline / Time Range Window
                </label>
                <input
                  type="text"
                  value={currentScene.timeRange}
                  onChange={(e) => handleUpdateScene(currentScene.id, { timeRange: e.target.value })}
                  className="w-full bg-black/45 border border-lavender-border/25 rounded-lg px-3 py-2 text-xs font-mono text-lavender-text focus:border-lavender-accent focus:outline-none transition-all h-9"
                  placeholder="e.g. 0s - 15s"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-wider text-lavender-accent/80 block">
                  Lyrics / Subject Matter
                </label>
                <input
                  type="text"
                  value={currentScene.lyricsInSegment}
                  onChange={(e) => handleUpdateScene(currentScene.id, { lyricsInSegment: e.target.value })}
                  className="w-full bg-black/45 border border-lavender-border/25 rounded-lg px-3 py-2 text-xs italic text-lavender-text focus:border-lavender-accent focus:outline-none transition-all h-9"
                  placeholder="Lyrics or scene subject..."
                />
              </div>
            </div>

            {/* Large Prompt Text Area */}
            <div className="flex-1 flex flex-col gap-2 min-h-[220px]">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-black uppercase tracking-wider text-lavender-accent/80 block">
                  Video Generator Prompt Content
                </label>
                <button
                  type="button"
                  onClick={() => handleCopyPrompt(currentScene.prompt, `scene-${currentScene.id}`)}
                  className="px-2.5 py-1 bg-lavender-accent/10 hover:bg-lavender-accent hover:text-black rounded border border-lavender-accent/20 hover:border-transparent text-[10px] font-black flex items-center gap-1 transition-all cursor-pointer shrink-0 text-lavender-accent"
                >
                  {copiedPrompts[`scene-${currentScene.id}`] ? <Check size={10} className="text-green-400" /> : <Copy size={10} />}
                  {copiedPrompts[`scene-${currentScene.id}`] ? 'Copied!' : 'Copy Prompt'}
                </button>
              </div>
              <textarea
                value={currentScene.prompt}
                onChange={(e) => handleUpdateScene(currentScene.id, { prompt: e.target.value })}
                className="w-full flex-1 min-h-[160px] bg-black/45 border border-lavender-border/25 rounded-xl p-3.5 text-xs font-mono text-lavender-text/90 leading-relaxed focus:border-lavender-accent focus:outline-none transition-all resize-none overflow-y-auto"
                placeholder="Describe the detailed visual scenes, clothes, lighting, camera angles, physical actions, and style here..."
              />
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center text-lavender-text/40 bg-black/10 border border-lavender-border/20 rounded-xl">
            <span>No scenes created yet. Click the "+" tab to add one!</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title="Video Segment Prompts"
      onConfirm={onClose}
      size="full"
    >
      <div className="flex flex-col gap-1.5 w-full h-[85vh] overflow-hidden relative">
        <div className="flex justify-between items-center px-4 py-1.5 border-b border-lavender-border flex-wrap gap-2 shrink-0">
          <div className="flex flex-col">
            <span className="text-sm text-lavender-text/80 font-medium">
              Active Song: <span className="text-lavender-accent font-bold">{title || 'Untitled'}</span>
            </span>
            <span className="text-xs text-lavender-text/50 font-medium">
              Create video segment prompts aligned with the music duration.
            </span>
          </div>
        </div>

        {renderVideoPromptsContent()}
      </div>
    </Dialog>
  );
};
