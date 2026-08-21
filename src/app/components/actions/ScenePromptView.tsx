import React, { useState } from 'react';
import { 
  Sparkles, RefreshCw, Download, Copy, Check, Palette, User, Scan, ShieldAlert, FileText, Code2, Tag
} from 'lucide-react';
import { 
  IMAGE_STYLE_CATEGORIES, 
  ImageStyleCategory,
  getImageStyleById,
  getStylesByCategory 
} from '../../../constants/imageStyles';
import { 
  CHARACTER_FRAMING_OPTIONS, 
  getCharacterFramingById 
} from '../../../constants/characterFraming';
import { 
  AGE_OPTIONS, 
  getAgeById 
} from '../../../constants/characterAge';
import { 
  PROMPT_RATING_OPTIONS, 
  PromptRatingId, 
  getPromptRatingById 
} from '../../../constants/promptRating';
import { SingerActionSceneResult } from '../../../lib/singerActions';
import { ColorCodedPrompt } from './ColorCodedPrompt';
import { 
  filterPromptStringBySegmentIds
} from '../../../lib/promptColorizer';

interface ScenePromptViewProps {
  generatedScene: SingerActionSceneResult | null;
  selectedPromptRating: PromptRatingId;
  onChangePromptRating: (rating: PromptRatingId) => void;
  selectedImageStyle: string;
  onChangeImageStyle: (style: string) => void;
  selectedCharacterFraming: string;
  onChangeCharacterFraming: (framing: string) => void;
  selectedCharacterAge: string;
  onChangeCharacterAge: (age: string) => void;
  isTomboy: boolean;
  onToggleIsTomboy: (isTomboy: boolean) => void;
  getFullPrompt: () => string;
  loadingPrompt: boolean;
  generatingImage: boolean;
  copiedMap: Record<string, boolean>;
  onCopy: (key: string, text: string) => void;
  onGenerateImageFromPrompt: () => void;
  onGeneratePrompts: () => void;
  onGenerateSceneSongLyrics: () => void;
  onDownloadSceneJson: () => void;
  onChangeTitle?: (title: string) => void;
  onChangePromptText?: (newPromptText: string) => void;
}

export const ScenePromptView: React.FC<ScenePromptViewProps> = ({
  generatedScene,
  selectedPromptRating,
  onChangePromptRating,
  selectedImageStyle,
  onChangeImageStyle,
  selectedCharacterFraming,
  onChangeCharacterFraming,
  selectedCharacterAge,
  onChangeCharacterAge,
  isTomboy,
  onToggleIsTomboy,
  getFullPrompt,
  loadingPrompt,
  generatingImage,
  copiedMap,
  onCopy,
  onGenerateImageFromPrompt,
  onGeneratePrompts,
  onGenerateSceneSongLyrics,
  onDownloadSceneJson,
  onChangeTitle,
  onChangePromptText
}) => {
  const [viewMode, setViewMode] = useState<'color' | 'raw'>('color');
  const [enabledSegmentIds, setEnabledSegmentIds] = useState<Record<string, boolean>>({});

  const handleToggleSegment = (segmentId: string, enabled: boolean) => {
    setEnabledSegmentIds(prev => ({ ...prev, [segmentId]: enabled }));
  };

  const currentStyle = getImageStyleById(selectedImageStyle);
  const currentCategory = currentStyle.category;
  const availableStylesInGroup = getStylesByCategory(currentCategory);
  const currentFraming = getCharacterFramingById(selectedCharacterFraming);
  const currentAge = getAgeById(selectedCharacterAge);
  const currentRating = getPromptRatingById(selectedPromptRating);

  const handleCategoryChange = (newCategory: ImageStyleCategory) => {
    const stylesInNewCat = getStylesByCategory(newCategory);
    if (stylesInNewCat.length > 0) {
      if (!stylesInNewCat.some(s => s.id === selectedImageStyle)) {
        onChangeImageStyle(stylesInNewCat[0].id);
      }
    }
  };

  const fullPromptText = getFullPrompt();
  const filteredPromptText = filterPromptStringBySegmentIds(fullPromptText, enabledSegmentIds);
  const currentTitle = generatedScene?.title || '';

  return (
    <div className="flex-1 flex flex-col min-h-0 space-y-3">
      {/* CONTROLS & OPTIONS BAR (Rating, Style, Framing, Age, Tomboy) */}
      <div className="flex flex-col gap-2.5 p-3 rounded-xl border border-lavender-border bg-lavender-surface/40 flex-shrink-0">
        
        {/* TOP ROW: ACTIONS & STATUS */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-lavender-accent">Scene Prompt & Output</span>
            {generatedScene && (
              <span className="text-[11px] text-lavender-text/60">
                ({generatedScene.activeSingers.length} active characters)
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={onGeneratePrompts}
              className="px-3.5 py-1.5 text-xs font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-lg shadow-md flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer"
              title="Generate master image prompt for this scene"
            >
              <Sparkles size={13} className="text-amber-300 animate-pulse" />
              {generatedScene ? 'Regenerate Prompt' : 'Generate Prompt'}
            </button>

            <button
              onClick={onGenerateSceneSongLyrics}
              className="px-3.5 py-1.5 text-xs font-bold bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 text-amber-200 rounded flex items-center gap-1.5 transition-all shadow-md active:scale-95 cursor-pointer"
              title="Clear options, generate fun song options & lyrics for this scene, and open Generate Song dialog"
            >
              <Sparkles size={13} className="text-amber-400 animate-pulse" />
              Generate Song Lyrics for Scene
            </button>

            {generatedScene && (
              <button
                onClick={onDownloadSceneJson}
                className="px-3 py-1.5 text-xs font-semibold bg-lavender-surface hover:bg-lavender-accent/20 border border-lavender-border text-lavender-accent rounded flex items-center gap-1.5 transition-all cursor-pointer"
                title="Download scene data and prompts as JSON"
              >
                <Download size={13} />
                Download JSON
              </button>
            )}
          </div>
        </div>

        {/* SELECTOR BAR: RATING, FRAMING, AGE, TOMBOY, ART STYLE (Compact Grid Layout) */}
        <div className="flex flex-col gap-2 pt-2 border-t border-lavender-border/40 bg-lavender-surface/30 px-3 py-2 rounded-lg">
          {/* Row 1: Rating, Framing, Age, Tomboy */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-2.5 items-center">
            
            {/* Listbox 1: Prompt Rating (md:col-span-4) */}
            <div className="md:col-span-4 flex items-center gap-1.5 min-w-0">
              <label className="text-xs font-bold text-amber-300 flex items-center gap-1 shrink-0 whitespace-nowrap">
                <ShieldAlert size={13} className={currentRating.isAdultRating ? "text-rose-400" : "text-amber-400"} />
                <span>Rating:</span>
              </label>
              <select
                value={selectedPromptRating}
                onChange={(e) => onChangePromptRating(e.target.value as PromptRatingId)}
                className={`flex-1 min-w-0 px-2 py-1 text-xs rounded border focus:outline-none cursor-pointer truncate font-semibold ${
                  currentRating.isAdultRating 
                    ? 'bg-rose-950/60 border-rose-500/50 text-rose-200 focus:border-rose-400' 
                    : 'bg-lavender-bg border-lavender-border text-lavender-text focus:border-lavender-accent'
                }`}
                title={`Rating: ${currentRating.label} - ${currentRating.shortDescription}`}
              >
                {PROMPT_RATING_OPTIONS.map(opt => (
                  <option key={opt.id} value={opt.id} className="bg-lavender-bg text-lavender-text">
                    {opt.label} ({opt.shortDescription})
                  </option>
                ))}
              </select>
            </div>

            {/* Listbox 2: Character Framing (md:col-span-3) */}
            <div className="md:col-span-3 flex items-center gap-1.5 min-w-0">
              <label className="text-xs font-bold text-lavender-accent flex items-center gap-1 shrink-0 whitespace-nowrap">
                <Scan size={13} />
                <span>Framing:</span>
              </label>
              <select
                value={selectedCharacterFraming}
                onChange={(e) => onChangeCharacterFraming(e.target.value)}
                className="flex-1 min-w-0 px-2 py-1 text-xs bg-lavender-bg border border-lavender-border rounded text-lavender-text focus:outline-none focus:border-lavender-accent cursor-pointer truncate"
                title={`Framing: ${currentFraming.label} - ${currentFraming.description}`}
              >
                {CHARACTER_FRAMING_OPTIONS.map(opt => (
                  <option key={opt.id} value={opt.id} className="bg-lavender-bg text-lavender-text">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Listbox 3: Character Age (md:col-span-3) */}
            <div className="md:col-span-3 flex items-center gap-1.5 min-w-0">
              <label className="text-xs font-bold text-lavender-accent flex items-center gap-1 shrink-0 whitespace-nowrap">
                <User size={13} />
                <span>Age:</span>
              </label>
              <select
                value={selectedCharacterAge}
                onChange={(e) => onChangeCharacterAge(e.target.value)}
                className="flex-1 min-w-0 px-2 py-1 text-xs bg-lavender-bg border border-lavender-border rounded text-lavender-text focus:outline-none focus:border-lavender-accent cursor-pointer truncate"
                title={`Character Age: ${currentAge.label} - ${currentAge.description}`}
              >
                {AGE_OPTIONS.map(opt => (
                  <option key={opt.id} value={opt.id} className="bg-lavender-bg text-lavender-text">
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Toggle: Tomboy (md:col-span-2) */}
            <div className="md:col-span-2 flex items-center justify-start md:justify-end gap-1.5 min-w-0">
              <label className="flex items-center gap-1.5 text-xs text-lavender-text font-semibold cursor-pointer select-none bg-lavender-surface/60 hover:bg-lavender-surface border border-lavender-border px-2 py-1 rounded transition-colors whitespace-nowrap">
                <input
                  type="checkbox"
                  checked={isTomboy}
                  onChange={(e) => onToggleIsTomboy(e.target.checked)}
                  className="rounded border-lavender-border text-lavender-accent focus:ring-lavender-accent h-3.5 w-3.5 cursor-pointer accent-purple-500"
                />
                <span className="text-[11px]">Tomboy</span>
              </label>
            </div>
          </div>

          {/* Row 2: Art Style Categories & Style Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-2.5 items-center pt-1 border-t border-lavender-border/20">
            
            {/* Listbox 4: Style Group (md:col-span-4) */}
            <div className="md:col-span-4 flex items-center gap-1.5 min-w-0">
              <label className="text-xs font-bold text-lavender-accent flex items-center gap-1 shrink-0 whitespace-nowrap">
                <Palette size={13} />
                <span>Style Group:</span>
              </label>
              <select
                value={currentCategory}
                onChange={(e) => handleCategoryChange(e.target.value as ImageStyleCategory)}
                className="flex-1 min-w-0 px-2 py-1 text-xs bg-lavender-bg border border-lavender-border rounded text-lavender-text focus:outline-none focus:border-lavender-accent cursor-pointer truncate"
              >
                {IMAGE_STYLE_CATEGORIES.map(cat => (
                  <option key={cat} value={cat} className="bg-lavender-bg text-lavender-text">
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Listbox 5: Style within Group (md:col-span-5) */}
            <div className="md:col-span-5 flex items-center gap-1.5 min-w-0">
              <label className="text-xs font-bold text-lavender-accent flex items-center gap-1 shrink-0 whitespace-nowrap">
                <span>Style:</span>
              </label>
              <select
                value={selectedImageStyle}
                onChange={(e) => onChangeImageStyle(e.target.value)}
                className="flex-1 min-w-0 px-2 py-1 text-xs bg-lavender-bg border border-lavender-border rounded text-lavender-text focus:outline-none focus:border-lavender-accent cursor-pointer truncate font-medium"
              >
                {availableStylesInGroup.map(style => (
                  <option key={style.id} value={style.id} className="bg-lavender-bg text-lavender-text">
                    {style.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Style Badge / Hint (md:col-span-3) */}
            <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-2 text-xs min-w-0">
              <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 flex items-center gap-1 truncate" title={currentStyle.description || currentStyle.label}>
                <Sparkles size={11} className="text-emerald-400 shrink-0" />
                <span className="truncate">{currentStyle.label}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SINGLE PROMPT DISPLAY AREA */}
      {generatedScene ? (
        <div className="flex-1 flex flex-col min-h-0 p-3.5 rounded-xl border border-lavender-border bg-lavender-surface/30 space-y-2.5">
          
          {/* IMAGE TITLE LABEL & COPY SECTION */}
          <div className="flex flex-wrap items-center justify-between gap-2 p-2 px-3 rounded-lg border border-purple-500/40 bg-purple-950/25 flex-shrink-0">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <span className="text-xs font-bold text-amber-300 flex items-center gap-1 shrink-0">
                <Tag size={13} className="text-amber-400" />
                <span>Image Title:</span>
              </span>

              {onChangeTitle ? (
                <div className="flex items-center gap-1.5 flex-1 min-w-0">
                  <input
                    type="text"
                    value={currentTitle}
                    onChange={(e) => onChangeTitle(e.target.value)}
                    placeholder="Scene & Image Title..."
                    className="flex-1 min-w-0 px-2.5 py-1 text-xs md:text-sm font-semibold bg-lavender-bg border border-purple-500/30 rounded text-purple-100 placeholder-purple-400/40 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
                  />
                  <button
                    onClick={() => onCopy('scene_title', currentTitle)}
                    className="p-1 text-lavender-text/70 hover:text-lavender-accent hover:bg-lavender-surface rounded transition-colors shrink-0"
                    title="Copy Title to clipboard"
                  >
                    {copiedMap['scene_title'] ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                  </button>
                </div>
              ) : (
                <span className="text-xs md:text-sm font-semibold text-purple-200 truncate" title={currentTitle}>
                  {currentTitle || 'Untitled Scene'}
                </span>
              )}
            </div>

            <button
              onClick={() => onCopy('scene_title', currentTitle)}
              className="px-2.5 py-1 text-xs font-semibold bg-purple-900/50 hover:bg-purple-800/60 border border-purple-500/40 text-purple-200 rounded flex items-center gap-1.5 shrink-0 transition-all cursor-pointer shadow-sm"
              title="Copy image title to clipboard"
            >
              {copiedMap['scene_title'] ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
              Copy Title
            </button>
          </div>

          {/* HEADER ROW OF PROMPT VIEW (View Mode Toggle & Action Buttons) */}
          <div className="flex flex-wrap items-center justify-between gap-2 flex-shrink-0">
            <div className="flex items-center gap-2">
              <span className={`px-2 py-0.5 rounded text-xs font-bold border flex items-center gap-1.5 ${
                currentRating.isAdultRating 
                  ? 'bg-rose-950/50 border-rose-500/40 text-rose-200' 
                  : 'bg-amber-950/40 border-amber-500/40 text-amber-200'
              }`}>
                <ShieldAlert size={13} className={currentRating.isAdultRating ? "text-rose-400" : "text-amber-400"} />
                {currentRating.label} Scene Prompt
              </span>
              
              {/* VIEW MODE TOGGLE (Color-Coded vs Raw Monospace) */}
              <div className="flex items-center p-0.5 bg-lavender-bg border border-lavender-border rounded-lg text-xs">
                <button
                  onClick={() => setViewMode('color')}
                  className={`px-2 py-0.5 rounded flex items-center gap-1 font-semibold transition-all cursor-pointer ${
                    viewMode === 'color'
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'text-lavender-text/70 hover:text-lavender-text'
                  }`}
                  title="Color-coded prompt with character, environment, clothing & quality sections"
                >
                  <Palette size={12} />
                  Color-Coded
                </button>
                <button
                  onClick={() => setViewMode('raw')}
                  className={`px-2 py-0.5 rounded flex items-center gap-1 font-semibold transition-all cursor-pointer ${
                    viewMode === 'raw'
                      ? 'bg-purple-600 text-white shadow-sm'
                      : 'text-lavender-text/70 hover:text-lavender-text'
                  }`}
                  title="Raw prompt monospace text"
                >
                  <FileText size={12} />
                  Raw Text
                </button>
              </div>

              {loadingPrompt && <RefreshCw size={12} className="animate-spin text-lavender-accent" />}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onGenerateImageFromPrompt}
                disabled={generatingImage || !fullPromptText}
                className="px-3 py-1 text-xs font-semibold bg-emerald-900/40 hover:bg-emerald-800/60 border border-emerald-500/40 text-emerald-200 rounded-lg flex items-center gap-1.5 disabled:opacity-50 transition-all cursor-pointer shadow-sm"
                title="Generate image from prompt using Gemini API"
              >
                {generatingImage ? (
                  <RefreshCw size={12} className="animate-spin text-emerald-300" />
                ) : (
                  <Sparkles size={12} className="text-emerald-300" />
                )}
                {generatingImage ? "Generating Image..." : "Generate Image"}
              </button>
              <button
                onClick={() => onCopy('prompt_textarea', filteredPromptText)}
                className="px-2.5 py-1 text-xs font-semibold bg-lavender-surface hover:bg-lavender-border text-lavender-accent rounded-lg flex items-center gap-1.5 cursor-pointer shadow-sm"
                title="Copy prompt text (filtered by active sections) to clipboard"
              >
                {copiedMap['prompt_textarea'] ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                Copy Prompt
              </button>
            </div>
          </div>

          {/* MAIN PROMPT CONTENT (Color-Coded View or Raw Textarea View) */}
          <div className="flex-1 flex flex-col min-h-0">
            {viewMode === 'color' ? (
              <ColorCodedPrompt
                promptText={fullPromptText}
                onCopyText={onCopy}
                copiedMap={copiedMap}
                enabledSegmentIds={enabledSegmentIds}
                onToggleSegment={handleToggleSegment}
                onChangePromptText={onChangePromptText}
              />
            ) : (
              <div className="relative flex-1 flex flex-col min-h-0">
                <textarea
                  value={fullPromptText}
                  onChange={(e) => onChangePromptText && onChangePromptText(e.target.value)}
                  placeholder={loadingPrompt ? "Generating prompt with AI..." : "Prompt will appear here..."}
                  className={`flex-1 w-full bg-lavender-bg border rounded-lg p-3.5 pr-10 text-xs md:text-sm font-mono leading-relaxed focus:outline-none resize-y min-h-[300px] overflow-y-auto ${
                    currentRating.isAdultRating 
                      ? 'border-rose-500/30 text-rose-100 selection:bg-rose-800 selection:text-white' 
                      : 'border-lavender-border text-lavender-text selection:bg-purple-800 selection:text-white'
                  }`}
                />
                <button
                  onClick={() => onCopy('raw_textarea_inner', filteredPromptText)}
                  className="absolute top-3 right-3 p-1.5 text-lavender-text/70 hover:text-lavender-accent bg-lavender-surface/80 hover:bg-lavender-surface border border-lavender-border rounded transition-all cursor-pointer"
                  title="Copy filtered prompt text"
                >
                  {copiedMap['raw_textarea_inner'] ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                </button>
              </div>
            )}
          </div>

          {/* PROMPT METADATA & FOOTER HINT */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-lavender-text/60 italic flex-shrink-0 pt-1">
            <span>
              Rating: <strong className="text-lavender-text/80 not-italic">{currentRating.label}</strong> — {currentRating.rules}
            </span>
            <span className="not-italic text-lavender-muted">
              Style and framing are appended automatically to the base scene composition.
            </span>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center p-8 rounded-xl border border-lavender-border/60 bg-lavender-surface/20 text-center space-y-4 min-h-[300px]">
          <div className="w-14 h-14 rounded-full bg-purple-950/40 border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-inner">
            <Sparkles size={28} className="animate-pulse text-amber-400" />
          </div>
          <div className="space-y-1.5 max-w-md">
            <h3 className="text-sm font-bold text-lavender-accent">Ready to Generate Scene Prompt</h3>
            <p className="text-xs text-lavender-text/70 leading-relaxed">
              Generate a tailored master image prompt for this scene based on the selected rating (<strong className="text-amber-300">{currentRating.label}</strong>), character actions, wardrobe, and atmosphere setting.
            </p>
          </div>
          <button
            onClick={onGeneratePrompts}
            className="px-5 py-2.5 text-xs font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-lg shadow-lg flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
          >
            <Sparkles size={15} className="text-amber-300 animate-pulse" />
            Generate Scene Prompt
          </button>
        </div>
      )}
    </div>
  );
};
