import React, { useMemo } from 'react';
import { 
  Palette, Sparkles, Wand2, Image as ImageIcon, Copy, Check, 
  Download, FileText, ArrowRight
} from 'lucide-react';
import { 
  IMAGE_STYLE_CATEGORIES, 
  getStylesByCategory, 
  getImageStyleById, 
  ImageStyleCategory,
  ImageStyleOption
} from '../../../constants/imageStyles';

interface Step6StyleAndGenerationProps {
  selectedStyleCategory: ImageStyleCategory | string;
  onSelectStyleCategory: (category: string) => void;
  selectedStyle: string;
  onSelectStyle: (styleId: string) => void;
  sceneTitle: string;
  onChangeSceneTitle: (title: string) => void;
  onGeneratePrompts: () => void;
  onOpenSongGenerator?: () => void;
  onOpenImageGenerator?: () => void;
  onDownloadPromptJson: () => void;
  copiedTitle: boolean;
  onCopyTitle: () => void;
  hasGeneratedPrompt: boolean;
  onGoToStep7?: () => void;
  loadingPrompt?: boolean;
  onCopyFilteredPrompt?: () => void;
  copiedFilteredPrompt?: boolean;
}

export const Step6StyleAndGeneration: React.FC<Step6StyleAndGenerationProps> = ({
  selectedStyleCategory,
  onSelectStyleCategory,
  selectedStyle,
  onSelectStyle,
  sceneTitle,
  onChangeSceneTitle,
  onGeneratePrompts,
  onDownloadPromptJson,
  copiedTitle,
  onCopyTitle,
  hasGeneratedPrompt,
  onGoToStep7,
  loadingPrompt = false,
  onCopyFilteredPrompt,
  copiedFilteredPrompt = false
}) => {
  // Dynamically sort style categories at runtime
  const sortedStyleCategories = useMemo(() => {
    return [...IMAGE_STYLE_CATEGORIES].sort((a, b) => a.localeCompare(b));
  }, []);

  // Dynamically sort style options for category at runtime
  const categoryStyles = useMemo(() => {
    const rawStyles = getStylesByCategory(selectedStyleCategory as ImageStyleCategory);
    return [...rawStyles].sort((a, b) => a.label.localeCompare(b.label));
  }, [selectedStyleCategory]);

  const currStyle = getImageStyleById(selectedStyle);

  return (
    <div className="flex-1 flex flex-col space-y-4 min-h-0 overflow-y-auto pr-1">
      {/* HEADER BAR */}
      <div className="p-3 bg-lavender-surface/50 border border-lavender-border/70 rounded-xl flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
            <Palette size={18} />
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-bold text-lavender-accent uppercase tracking-wider">
              Art Style &amp; Options
            </h3>
            <p className="text-[11px] text-lavender-text/70">
              Select artistic style medium, configure scene title, and trigger prompt compilation or media generator workflows.
            </p>
          </div>
        </div>

        {/* TOP COPY FILTERED BUTTON (IF PROMPT GENERATED) */}
        {hasGeneratedPrompt && onCopyFilteredPrompt && (
          <button
            type="button"
            onClick={onCopyFilteredPrompt}
            className="px-3 py-1.5 text-xs font-bold bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white rounded-lg flex items-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95 border border-purple-500/40 ml-auto"
            title="Copy filtered prompt based on current sections and style selection"
          >
            {copiedFilteredPrompt ? (
              <>
                <Check size={13} className="text-emerald-300" />
                <span className="text-emerald-200">Filtered Prompt Copied!</span>
              </>
            ) : (
              <>
                <Copy size={13} className="text-indigo-200" />
                <span>Copy Filtered</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* STYLE SELECTION CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {/* STYLE CATEGORY (GROUP) */}
        <div className="bg-lavender-surface/40 p-3.5 rounded-xl border border-lavender-border/60 space-y-2">
          <label className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
            <Palette size={14} className="text-emerald-400" />
            1. Artistic Category / Tradition
          </label>
          <select
            value={selectedStyleCategory}
            onChange={(e) => onSelectStyleCategory(e.target.value)}
            className="w-full bg-lavender-bg border border-lavender-border rounded-lg p-2 text-xs font-semibold text-lavender-accent focus:outline-none focus:border-emerald-400 cursor-pointer shadow-sm hover:border-emerald-400/60"
          >
            {sortedStyleCategories.map(cat => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <p className="text-[10px] text-lavender-text/70 italic">
            Artistic medium or historic comic illustration heritage
          </p>
        </div>

        {/* SPECIFIC ART STYLE */}
        <div className="bg-lavender-surface/40 p-3.5 rounded-xl border border-lavender-border/60 space-y-2">
          <label className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
            <Sparkles size={14} className="text-indigo-400" />
            2. Specific Visual Style Preset
          </label>
          <select
            value={selectedStyle}
            onChange={(e) => onSelectStyle(e.target.value)}
            className="w-full bg-lavender-bg border border-lavender-border rounded-lg p-2 text-xs font-semibold text-lavender-accent focus:outline-none focus:border-indigo-400 cursor-pointer shadow-sm hover:border-indigo-400/60"
          >
            {categoryStyles.map(st => (
              <option key={st.id} value={st.id}>
                {st.label}
              </option>
            ))}
          </select>
          <p className="text-[10px] text-lavender-text/70 italic line-clamp-1">
            {currStyle?.description || 'Visual rendering aesthetic and ink/color characteristics.'}
          </p>
        </div>
      </div>

      {/* SCENE TITLE INPUT WITH COPY */}
      <div className="bg-lavender-surface/40 p-3.5 rounded-xl border border-lavender-border/60 space-y-1.5">
        <label className="text-xs font-bold text-lavender-accent flex items-center justify-between">
          <span>Scene Title / Concept Name:</span>
          <span className="text-[10px] text-lavender-text/60">Included in metadata &amp; downloads</span>
        </label>
        <div className="relative flex items-center">
          <input
            type="text"
            value={sceneTitle}
            onChange={(e) => onChangeSceneTitle(e.target.value)}
            placeholder="E.g., Abcoude Courtyard Acoustic Rehearsal"
            className="w-full bg-lavender-bg border border-lavender-border rounded-lg p-2.5 pr-10 text-xs md:text-sm font-semibold text-lavender-text focus:outline-none focus:border-lavender-accent"
          />
          {sceneTitle && (
            <button
              type="button"
              onClick={onCopyTitle}
              className="absolute right-2.5 p-1 text-lavender-text/70 hover:text-lavender-accent rounded cursor-pointer transition-colors"
              title="Copy Title"
            >
              {copiedTitle ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            </button>
          )}
        </div>
      </div>

      {/* PRIMARY ACTION BUTTONS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
        {/* COMPILE PROMPT BUTTON */}
        <button
          type="button"
          onClick={onGeneratePrompts}
          disabled={loadingPrompt}
          className="p-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl shadow-lg flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer group active:scale-95 disabled:opacity-50"
        >
          <div className="flex items-center gap-2">
            <Wand2 size={18} className="text-amber-300 group-hover:rotate-12 transition-transform" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider">
              {loadingPrompt ? 'Compiling Master Prompt...' : 'Compile Prompt'}
            </span>
          </div>
          <span className="text-[10px] text-purple-200/80 text-center">
            Synthesize all character poses, wardrobes &amp; environment with AI
          </span>
        </button>

        {/* VIEW PROMPT / NEXT BUTTON */}
        <button
          type="button"
          onClick={onGoToStep7}
          className="p-4 bg-gradient-to-r from-indigo-700 to-purple-800 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl shadow-lg flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer group active:scale-95"
        >
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-amber-300 group-hover:scale-110 transition-transform" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider">
              Inspect Prompt &amp; Image
            </span>
          </div>
          <span className="text-[10px] text-indigo-100/80 text-center">
            View color-coded segments and trigger Gemini image rendering
          </span>
        </button>

        {/* DOWNLOAD JSON SCHEMA & METADATA */}
        <button
          type="button"
          onClick={onDownloadPromptJson}
          disabled={!hasGeneratedPrompt}
          className="p-4 bg-lavender-surface hover:bg-lavender-border text-lavender-accent border border-lavender-border rounded-xl shadow flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer group active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed sm:col-span-2 md:col-span-1"
        >
          <div className="flex items-center gap-2">
            <Download size={18} className="text-lavender-accent group-hover:translate-y-0.5 transition-transform" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider">
              Download JSON
            </span>
          </div>
          <span className="text-[10px] text-lavender-text/70 text-center">
            Export Draft-07 compliant singer action schema JSON package
          </span>
        </button>
      </div>

      {/* QUICK VIEW MASTER PROMPT BANNER */}
      {hasGeneratedPrompt && onGoToStep7 && (
        <div className="p-3 bg-purple-950/30 border border-purple-500/40 rounded-xl flex items-center justify-between flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-2 text-purple-200">
            <Sparkles size={16} className="text-amber-400" />
            <span>Master prompt compiled and ready! Click to inspect color-coded sections and copy for WAN/Mage.Space.</span>
          </div>
          <button
            type="button"
            onClick={onGoToStep7}
            className="px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-bold flex items-center gap-1 cursor-pointer transition-all shadow active:scale-95 text-xs"
          >
            <span>View Prompt</span>
            <ArrowRight size={13} />
          </button>
        </div>
      )}
    </div>
  );
};
