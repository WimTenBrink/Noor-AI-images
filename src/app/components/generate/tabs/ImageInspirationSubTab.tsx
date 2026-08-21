/**
 * Noor Music - Image Inspiration SubTab Component
 * 
 * Provides an interactive drag-and-drop image canvas, AI analysis trigger,
 * story reading view, visual description editor, and matched musical parameters.
 * Pure UI layer.
 */

import React, { useState, useRef, useCallback } from 'react';
import {
  Image as ImageIcon,
  UploadCloud,
  Sparkles,
  Copy,
  Check,
  Trash2,
  RefreshCw,
  Music,
  BookOpen,
  Eye,
  Sliders,
  Play,
  ArrowRight,
  Info,
  Layers,
  Wand2
} from 'lucide-react';
import {
  fileToBase64,
  ImageInspirationResult,
  matchCatalogStyles,
  matchCatalogInstruments,
} from '../../../../lib/imageInspiration';
import { ANALYZE_IMAGE_INSPIRATION_PROMPT } from '../../../../constants/prompts';
import { SYSTEM_INSTRUCTIONS_IMAGE_INSPIRATION } from '../../../../constants/instructions';
import { Tooltip } from '../../Tooltip';
import { cn } from '../../../../lib/utils';

interface ImageInspirationSubTabProps {
  imageDescription: string;
  setImageDescription: (val: string) => void;
  imageSeriousness: number;
  setImageSeriousness: (val: number) => void;
  suggestedTitle: string;
  setSuggestedTitle: (val: string) => void;
  instructions: string;
  setInstructions: (val: string) => void;
  dialogSelectedStyles: string[];
  setDialogSelectedStyles: React.Dispatch<React.SetStateAction<string[]>>;
  dialogSelectedInstruments: string[];
  setDialogSelectedInstruments: React.Dispatch<React.SetStateAction<string[]>>;
  selectedEmotions: string[];
  setSelectedEmotions: React.Dispatch<React.SetStateAction<string[]>>;
  selectedLead: string;
  setSelectedLead: (val: string) => void;
  selectedMusicalKey: string;
  setSelectedMusicalKey: (val: string) => void;
  selectedTimeSignature: string;
  setSelectedTimeSignature: (val: string) => void;
  sliderTempoBpm: number;
  setSliderTempoBpm: (val: number) => void;
  // Slider setters
  setSliderSapphic: (val: number) => void;
  setIsEnabledSapphic: (val: boolean) => void;
  setSliderWittyness: (val: number) => void;
  setIsEnabledWittyness: (val: boolean) => void;
  setSliderWeirdness: (val: number) => void;
  setIsEnabledWeirdness: (val: boolean) => void;
  setSliderLoudness: (val: number) => void;
  setIsEnabledLoudness: (val: boolean) => void;
  setSliderEpic: (val: number) => void;
  setIsEnabledEpic: (val: boolean) => void;
  setSliderComplexity: (val: number) => void;
  setIsEnabledComplexity: (val: boolean) => void;
  setSliderRepetitiveness: (val: number) => void;
  setIsEnabledRepetitiveness: (val: boolean) => void;
  setSliderHarmonics: (val: number) => void;
  setIsEnabledHarmonics: (val: boolean) => void;
  setSliderReverb: (val: number) => void;
  setIsEnabledReverb: (val: boolean) => void;
  setIsEnabledTempo: (val: boolean) => void;
  // Job Queue / Actions
  onAddJob: (
    name: string,
    priority: 'low' | 'normal' | 'high',
    prompt: string,
    apiKey: string,
    generationSettings?: any,
    systemInstruction?: string,
    imageBase64?: string,
    imageMimeType?: string,
    isImageJob?: boolean
  ) => string;
  isAnalyzing?: boolean;
  onGenerateSong?: () => void;
}

export const ImageInspirationSubTab: React.FC<ImageInspirationSubTabProps> = ({
  imageDescription,
  setImageDescription,
  imageSeriousness,
  setImageSeriousness,
  suggestedTitle,
  setSuggestedTitle,
  instructions,
  setInstructions,
  dialogSelectedStyles,
  setDialogSelectedStyles,
  dialogSelectedInstruments,
  setDialogSelectedInstruments,
  selectedEmotions,
  setSelectedEmotions,
  selectedLead,
  setSelectedLead,
  selectedMusicalKey,
  setSelectedMusicalKey,
  selectedTimeSignature,
  setSelectedTimeSignature,
  sliderTempoBpm,
  setSliderTempoBpm,
  setSliderSapphic,
  setIsEnabledSapphic,
  setSliderWittyness,
  setIsEnabledWittyness,
  setSliderWeirdness,
  setIsEnabledWeirdness,
  setSliderLoudness,
  setIsEnabledLoudness,
  setSliderEpic,
  setIsEnabledEpic,
  setSliderComplexity,
  setIsEnabledComplexity,
  setSliderRepetitiveness,
  setIsEnabledRepetitiveness,
  setSliderHarmonics,
  setIsEnabledHarmonics,
  setSliderReverb,
  setIsEnabledReverb,
  setIsEnabledTempo,
  onAddJob,
  isAnalyzing = false,
  onGenerateSong
}) => {
  const apiKey = typeof window !== 'undefined' ? (localStorage.getItem('noor-api-key') || process.env.GEMINI_API_KEY || '') : '';
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [imageDataUrl, setImageDataUrl] = useState<string | null>(() => {
    try {
      return localStorage.getItem('noor-image-inspiration-preview') || null;
    } catch {
      return null;
    }
  });
  const [imageMimeType, setImageMimeType] = useState<string>('image/jpeg');
  const [imageFileName, setImageFileName] = useState<string>('');
  const [isDragOver, setIsDragOver] = useState(false);
  const [storyText, setStoryText] = useState<string>(() => {
    try {
      return localStorage.getItem('noor-image-inspiration-story') || '';
    } catch {
      return '';
    }
  });
  const [storySummary, setStorySummary] = useState<string>('');
  const [lastAnalysis, setLastAnalysis] = useState<ImageInspirationResult | null>(null);

  const [copiedStory, setCopiedStory] = useState(false);
  const [copiedDesc, setCopiedDesc] = useState(false);
  const [appliedDirective, setAppliedDirective] = useState(false);
  const [showFullImageModal, setShowFullImageModal] = useState(false);

  // Drag & drop handlers
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  }, []);

  const processSelectedFile = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (PNG, JPG, WEBP, GIF)');
      return;
    }

    try {
      const converted = await fileToBase64(file);
      setImageDataUrl(converted.dataUrl);
      setImageMimeType(converted.mimeType);
      setImageFileName(converted.fileName);

      try {
        localStorage.setItem('noor-image-inspiration-preview', converted.dataUrl);
      } catch (err) {
        console.warn('Image preview too large for localStorage, kept in memory only.');
      }

      // Automatically trigger analysis for seamless creator workflow
      startAnalysis(converted.base64, converted.mimeType, converted.fileName);
    } catch (err) {
      console.error('Failed to process image file:', err);
    }
  };

  const handleDrop = useCallback(
    async (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragOver(false);

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0];
        await processSelectedFile(file);
      }
    },
    [imageSeriousness]
  );

  const handleFileInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      await processSelectedFile(file);
    }
  };

  const startAnalysis = (
    base64Override?: string,
    mimeTypeOverride?: string,
    fileNameOverride?: string
  ) => {
    const rawDataUrl = imageDataUrl || '';
    const base64 = base64Override || (rawDataUrl.includes(',') ? rawDataUrl.split(',')[1] : rawDataUrl);
    const mime = mimeTypeOverride || imageMimeType || 'image/jpeg';
    const name = fileNameOverride || imageFileName || 'Uploaded Visual Inspiration';

    if (!base64) {
      alert('Please select or drop an image first.');
      return;
    }

    const prompt = ANALYZE_IMAGE_INSPIRATION_PROMPT(
      imageSeriousness,
      imageDescription ? `Initial user note: ${imageDescription}` : undefined
    );

    const jobTitle = `Image Inspiration: ${name.length > 25 ? name.substring(0, 22) + '...' : name}`;

    onAddJob(
      jobTitle,
      'high',
      prompt,
      apiKey || '',
      {
        isImageInspirationJob: true,
        imageFileName: name,
        imageSeriousness,
      },
      SYSTEM_INSTRUCTIONS_IMAGE_INSPIRATION,
      base64,
      mime
    );
  };

  const handleCopyStory = () => {
    if (!storyText) return;
    navigator.clipboard.writeText(storyText);
    setCopiedStory(true);
    setTimeout(() => setCopiedStory(false), 2000);
  };

  const handleCopyDesc = () => {
    if (!imageDescription) return;
    navigator.clipboard.writeText(imageDescription);
    setCopiedDesc(true);
    setTimeout(() => setCopiedDesc(false), 2000);
  };

  const handleApplyStoryAsDirectives = () => {
    if (!storyText) return;
    const directiveHeader = `[Narrative Story & Visual Inspiration Context]:\n${storyText}\n\n[Lyric Theme Guidance]: Express the atmospheric emotional arc and vivid imagery from the story above.`;
    setInstructions(directiveHeader);
    setAppliedDirective(true);
    setTimeout(() => setAppliedDirective(false), 2500);
  };

  const handleClearImage = () => {
    setImageDataUrl(null);
    setImageFileName('');
    setImageDescription('');
    setStoryText('');
    setStorySummary('');
    setLastAnalysis(null);
    try {
      localStorage.removeItem('noor-image-inspiration-preview');
      localStorage.removeItem('noor-image-inspiration-story');
    } catch {}
  };

  return (
    <div id="image-inspiration-subtab" className="space-y-4 animate-fade-in">
      {/* Top Banner */}
      <div className="bg-lavender-surface/15 border border-lavender-border/40 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <h4 className="text-xs font-bold text-lavender-accent uppercase tracking-wider flex items-center gap-1.5">
            <ImageIcon size={14} /> Image Inspiration & Multimodal Story Engine
          </h4>
          <p className="text-[11px] text-lavender-text/70 mt-0.5">
            Drop an image or artwork. The AI will analyze the scene, compose an original background story, and auto-configure matching musical genres, instruments, and sliders.
          </p>
        </div>
        {imageDataUrl && (
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              id="reanalyze-image-btn"
              onClick={() => startAnalysis()}
              disabled={isAnalyzing}
              className={cn(
                "px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm",
                isAnalyzing
                  ? "bg-lavender-accent/30 text-lavender-text/50 cursor-not-allowed"
                  : "bg-lavender-accent text-lavender-bg hover:brightness-110 active:scale-95"
              )}
            >
              <RefreshCw size={13} className={cn(isAnalyzing && "animate-spin")} />
              {isAnalyzing ? 'Analyzing Image...' : 'Re-Analyze Image'}
            </button>
            <button
              id="clear-image-btn"
              onClick={handleClearImage}
              className="p-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 transition-colors"
              title="Remove Image"
            >
              <Trash2 size={14} />
            </button>
          </div>
        )}
      </div>

      {/* Main Drag-and-Drop Area & Preview Card */}
      {!imageDataUrl ? (
        <div
          id="image-drop-zone"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={cn(
            "border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center gap-3 text-center cursor-pointer transition-all duration-200",
            isDragOver
              ? "border-lavender-accent bg-lavender-accent/15 scale-[1.01]"
              : "border-lavender-border/50 bg-black/40 hover:border-lavender-accent/70 hover:bg-lavender-surface/10"
          )}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png, image/jpeg, image/webp, image/gif"
            onChange={handleFileInputChange}
            className="hidden"
          />
          <div className="w-14 h-14 rounded-2xl bg-lavender-surface/30 border border-lavender-border/60 flex items-center justify-center text-lavender-accent shadow-inner">
            <UploadCloud size={28} />
          </div>
          <div>
            <span className="text-sm font-bold text-lavender-text block">
              Drag & drop an inspiration image here, or browse files
            </span>
            <span className="text-[11px] text-lavender-text/60 mt-1 block">
              Supports PNG, JPG, WEBP, and GIF artworks, photos, or scene concepts
            </span>
          </div>
          <button
            type="button"
            className="px-4 py-1.5 rounded-xl bg-lavender-surface border border-lavender-border/60 text-lavender-text text-xs font-semibold hover:bg-lavender-accent hover:text-lavender-bg transition-colors shadow-sm"
          >
            Browse Computer
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Column: Image Card */}
          <div className="bg-lavender-surface/10 border border-lavender-border/40 rounded-2xl p-3 flex flex-col gap-2.5">
            <div className="relative group rounded-xl overflow-hidden border border-lavender-border/40 bg-black/60 aspect-video flex items-center justify-center">
              <img
                src={imageDataUrl}
                alt="Inspiration Source"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowFullImageModal(true)}
                  className="px-2.5 py-1.5 rounded-lg bg-lavender-surface/90 text-lavender-text text-xs font-semibold flex items-center gap-1 hover:bg-lavender-accent hover:text-lavender-bg transition-colors"
                >
                  <Eye size={12} /> View Full
                </button>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-2.5 py-1.5 rounded-lg bg-lavender-surface/90 text-lavender-text text-xs font-semibold flex items-center gap-1 hover:bg-lavender-accent hover:text-lavender-bg transition-colors"
                >
                  <RefreshCw size={12} /> Replace
                </button>
              </div>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png, image/jpeg, image/webp, image/gif"
              onChange={handleFileInputChange}
              className="hidden"
            />

            {/* Interpretation Strictness */}
            <div className="bg-black/40 border border-lavender-border/30 rounded-xl p-2.5 space-y-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-bold text-lavender-text">Interpretation Seriousness</span>
                <span className="font-black text-lavender-accent">{imageSeriousness}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={imageSeriousness}
                onChange={(e) => setImageSeriousness(parseInt(e.target.value, 10))}
                className="w-full accent-lavender-accent h-1.5 rounded cursor-pointer"
              />
              <div className="flex justify-between text-[9px] text-lavender-text/50">
                <span>Abstract / Loose</span>
                <span>Exact Literal</span>
              </div>
            </div>

            {/* Image File Meta */}
            {imageFileName && (
              <div className="text-[10px] text-lavender-text/50 truncate flex items-center gap-1 px-1">
                <ImageIcon size={10} /> {imageFileName}
              </div>
            )}
          </div>

          {/* Middle & Right Columns: Story & Matched Settings */}
          <div className="md:col-span-2 space-y-3">
            {/* AI Analysis Active Indicator */}
            {isAnalyzing && (
              <div className="bg-lavender-accent/15 border border-lavender-accent/40 rounded-2xl p-3.5 flex items-center gap-3 animate-pulse">
                <Wand2 size={18} className="text-lavender-accent animate-spin" />
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold text-lavender-accent">AI Multimodal Analysis in Progress...</div>
                  <div className="text-[11px] text-lavender-text/70">
                    Scanning visual elements, composing narrative story, and matching musical genres and instruments.
                  </div>
                </div>
              </div>
            )}

            {/* Generated Story Display Card */}
            <div id="image-story-card" className="bg-lavender-surface/15 border border-lavender-border/40 rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between gap-2 border-b border-lavender-border/25 pb-2.5">
                <div className="flex items-center gap-2 min-w-0">
                  <BookOpen size={16} className="text-lavender-accent flex-shrink-0" />
                  <div>
                    <h5 className="text-xs font-bold text-lavender-accent uppercase tracking-wider">
                      Narrative Story from Image
                    </h5>
                    {storySummary && (
                      <p className="text-[11px] text-lavender-text/70 italic truncate max-w-md">
                        {storySummary}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  {storyText && (
                    <>
                      <Tooltip title="Copy Story" content="Copy full narrative story to clipboard">
                        <button
                          type="button"
                          onClick={handleCopyStory}
                          className="px-2 py-1 rounded-lg bg-lavender-surface/60 border border-lavender-border/40 text-lavender-text text-xs flex items-center gap-1 hover:bg-lavender-accent hover:text-lavender-bg transition-colors"
                        >
                          {copiedStory ? <Check size={12} className="text-green-400" /> : <Copy size={12} />}
                          <span>{copiedStory ? 'Copied' : 'Copy'}</span>
                        </button>
                      </Tooltip>
                      <Tooltip title="Apply Directives" content="Set this story as custom lyric directives">
                        <button
                          type="button"
                          onClick={handleApplyStoryAsDirectives}
                          className={cn(
                            "px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 transition-all",
                            appliedDirective
                              ? "bg-green-500/20 border border-green-500/40 text-green-300"
                              : "bg-lavender-accent/20 border border-lavender-accent/40 text-lavender-accent hover:bg-lavender-accent hover:text-lavender-bg"
                          )}
                        >
                          <Sparkles size={12} />
                          <span>{appliedDirective ? 'Applied to Lyrics' : 'Use as Lyrics Directives'}</span>
                        </button>
                      </Tooltip>
                    </>
                  )}
                </div>
              </div>

              {storyText ? (
                <div className="bg-black/50 border border-lavender-border/30 rounded-xl p-3.5 max-h-56 overflow-y-auto text-xs text-lavender-text/90 leading-relaxed whitespace-pre-wrap font-sans">
                  {storyText}
                </div>
              ) : (
                <div className="py-6 text-center text-xs text-lavender-text/50 bg-black/30 rounded-xl border border-dashed border-lavender-border/30">
                  {isAnalyzing
                    ? 'AI is generating the narrative story for your image...'
                    : 'Click "Re-Analyze Image" to generate an imaginative background story.'}
                </div>
              )}
            </div>

            {/* Image Visual Description Card */}
            <div id="image-description-card" className="bg-lavender-surface/10 border border-lavender-border/30 rounded-2xl p-3.5 space-y-2">
              <div className="flex items-center justify-between gap-2">
                <h5 className="text-[11px] font-bold text-lavender-text/80 uppercase tracking-wider flex items-center gap-1.5">
                  <Eye size={13} className="text-lavender-accent" /> Full Visual Description
                </h5>
                {imageDescription && (
                  <button
                    type="button"
                    onClick={handleCopyDesc}
                    className="px-2 py-0.5 rounded text-[11px] text-lavender-text/70 hover:text-lavender-accent flex items-center gap-1"
                  >
                    {copiedDesc ? <Check size={11} className="text-green-400" /> : <Copy size={11} />}
                    <span>{copiedDesc ? 'Copied' : 'Copy'}</span>
                  </button>
                )}
              </div>
              <textarea
                value={imageDescription}
                onChange={(e) => setImageDescription(e.target.value)}
                placeholder="Visual breakdown of colors, lighting, setting, and subjects..."
                className="w-full h-20 bg-black/60 border border-lavender-border/40 text-lavender-text rounded-xl p-2.5 text-xs focus:outline-none focus:border-lavender-accent font-mono leading-relaxed"
              />
            </div>
          </div>
        </div>
      )}

      {/* Matched Musical Parameters Preview */}
      {imageDataUrl && (dialogSelectedStyles.length > 0 || dialogSelectedInstruments.length > 0 || suggestedTitle) && (
        <div id="matched-settings-panel" className="bg-lavender-surface/15 border border-lavender-border/40 rounded-2xl p-4 space-y-3">
          <div className="flex items-center justify-between gap-2 border-b border-lavender-border/20 pb-2">
            <h5 className="text-xs font-bold text-lavender-accent uppercase tracking-wider flex items-center gap-1.5">
              <Music size={14} /> Auto-Matched Song Parameters (Stored in Project)
            </h5>
            <span className="text-[10px] bg-green-500/15 border border-green-500/30 text-green-300 px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">
              <Check size={10} /> Active & Configured
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            {/* Suggested Title */}
            <div className="bg-black/50 border border-lavender-border/30 rounded-xl p-2.5 space-y-1">
              <span className="text-[10px] font-bold text-lavender-text/60 uppercase">Suggested Title</span>
              <div className="font-bold text-lavender-accent truncate">{suggestedTitle || 'Untitled'}</div>
            </div>

            {/* Matched Vocalist & Key */}
            <div className="bg-black/50 border border-lavender-border/30 rounded-xl p-2.5 space-y-1">
              <span className="text-[10px] font-bold text-lavender-text/60 uppercase">Vocal & Key</span>
              <div className="font-semibold text-lavender-text capitalize">
                Lead: <span className="text-lavender-accent font-bold">{selectedLead}</span> • {selectedMusicalKey} ({selectedTimeSignature})
              </div>
            </div>

            {/* Matched Genres */}
            <div className="bg-black/50 border border-lavender-border/30 rounded-xl p-2.5 space-y-1">
              <span className="text-[10px] font-bold text-lavender-text/60 uppercase">Matched Genres & Styles</span>
              <div className="flex flex-wrap gap-1">
                {dialogSelectedStyles.slice(0, 3).map((st) => (
                  <span key={st} className="px-1.5 py-0.5 rounded bg-lavender-accent/20 text-lavender-accent text-[10px] font-semibold">
                    {st}
                  </span>
                ))}
              </div>
            </div>

            {/* Matched Instruments */}
            <div className="bg-black/50 border border-lavender-border/30 rounded-xl p-2.5 space-y-1">
              <span className="text-[10px] font-bold text-lavender-text/60 uppercase">Matched Instruments</span>
              <div className="flex flex-wrap gap-1">
                {dialogSelectedInstruments.slice(0, 3).map((inst) => (
                  <span key={inst} className="px-1.5 py-0.5 rounded bg-lavender-surface/50 text-lavender-text text-[10px] font-semibold border border-lavender-border/30">
                    {inst}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Action Button */}
          {onGenerateSong && (
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                id="generate-song-from-story-btn"
                onClick={onGenerateSong}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-lavender-accent to-purple-400 text-lavender-bg text-xs font-black flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-md"
              >
                <Sparkles size={14} /> Generate Song from this Image & Story
                <ArrowRight size={14} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Full Image Modal View */}
      {showFullImageModal && imageDataUrl && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowFullImageModal(false)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-lavender-surface border border-lavender-border rounded-2xl overflow-hidden shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imageDataUrl}
              alt="Full Preview"
              className="max-h-[80vh] w-auto mx-auto object-contain rounded-xl"
            />
            <div className="flex justify-between items-center px-3 py-2 mt-1">
              <span className="text-xs text-lavender-text/70">{imageFileName || 'Image Inspiration Source'}</span>
              <button
                type="button"
                onClick={() => setShowFullImageModal(false)}
                className="px-3 py-1 bg-lavender-accent text-lavender-bg rounded-lg text-xs font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
