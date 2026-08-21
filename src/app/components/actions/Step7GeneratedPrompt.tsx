import React from 'react';
import { 
  Layers, Copy, Check, Eye, Code, Sparkles, Image as ImageIcon, RotateCw
} from 'lucide-react';
import { ColorCodedPrompt } from './ColorCodedPrompt';

interface Step7GeneratedPromptProps {
  generatedPrompt: string;
  onGeneratePrompts: () => void;
  onGenerateImage?: () => void;
  loadingImage?: boolean;
  onGoToImage?: () => void;
  hasGeneratedImage?: boolean;
  copiedPrompt: boolean;
  onCopyPrompt: () => void;
  promptViewMode: 'color' | 'raw';
  onTogglePromptViewMode: (mode: 'color' | 'raw') => void;
  onCopyTextSnippet: (key: string, text: string) => void;
  copiedMap: Record<string, boolean>;
  loadingPrompt?: boolean;
  enabledSegmentIds?: Record<string, boolean>;
  onToggleSegment?: (segmentId: string, enabled: boolean) => void;
  onCopyFilteredPrompt?: () => void;
  copiedFilteredPrompt?: boolean;
}

export const Step7GeneratedPrompt: React.FC<Step7GeneratedPromptProps> = ({
  generatedPrompt,
  onGeneratePrompts,
  onGenerateImage,
  loadingImage = false,
  onGoToImage,
  hasGeneratedImage = false,
  copiedPrompt,
  onCopyPrompt,
  promptViewMode,
  onTogglePromptViewMode,
  onCopyTextSnippet,
  copiedMap,
  loadingPrompt = false,
  enabledSegmentIds,
  onToggleSegment,
  onCopyFilteredPrompt,
  copiedFilteredPrompt = false
}) => {
  return (
    <div className="flex-1 flex flex-col min-h-0 h-full">
      {/* COMPACT CONTROLS BAR: TITLE, VIEW MODE TOGGLES, GENERATE SCENE IMAGE, AND COPY FILTERED */}
      <div className="flex items-center justify-between flex-wrap gap-2 px-3 py-1.5 mb-2 bg-lavender-surface/50 rounded-lg border border-lavender-border/60 shrink-0">
        <div className="flex items-center gap-2.5 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs font-bold text-lavender-accent uppercase tracking-wider">
            <Layers size={14} className="text-indigo-400" />
            <span>Generated Prompt</span>
          </div>

          {loadingPrompt && (
            <span className="text-[11px] text-amber-300 font-semibold flex items-center gap-1 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/30 animate-pulse">
              <Sparkles size={11} className="animate-spin text-amber-300" />
              AI Prompt Synthesizer running...
            </span>
          )}

          {/* VIEW MODE TOGGLES */}
          <div className="flex items-center bg-lavender-bg p-0.5 rounded-md border border-lavender-border/60 text-xs">
            <button
              type="button"
              onClick={() => onTogglePromptViewMode('color')}
              className={`px-2 py-0.5 rounded flex items-center gap-1 text-[11px] font-semibold transition-all cursor-pointer ${
                promptViewMode === 'color'
                  ? 'bg-purple-900/70 text-purple-200 shadow-xs'
                  : 'text-lavender-text/60 hover:text-lavender-text'
              }`}
            >
              <Eye size={12} /> Color-Coded
            </button>
            <button
              type="button"
              onClick={() => onTogglePromptViewMode('raw')}
              className={`px-2 py-0.5 rounded flex items-center gap-1 text-[11px] font-semibold transition-all cursor-pointer ${
                promptViewMode === 'raw'
                  ? 'bg-purple-900/70 text-purple-200 shadow-xs'
                  : 'text-lavender-text/60 hover:text-lavender-text'
              }`}
            >
              <Code size={12} /> Raw Text
            </button>
          </div>
        </div>

        {/* ALIGNED TO THE RIGHT: GENERATE SCENE IMAGE AND COPY FILTERED BUTTONS */}
        <div className="flex items-center gap-2 ml-auto">
          {/* REGENERATE PROMPT BUTTON */}
          <button
            type="button"
            onClick={onGeneratePrompts}
            disabled={loadingPrompt}
            className="px-2.5 py-1 text-xs font-semibold bg-purple-900/50 hover:bg-purple-800/70 text-purple-200 border border-purple-500/40 rounded-md flex items-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95 disabled:opacity-50"
            title="Regenerate prompt with all current settings and character actions"
          >
            {loadingPrompt ? (
              <RotateCw size={12} className="animate-spin text-purple-300" />
            ) : (
              <Sparkles size={12} className="text-amber-300" />
            )}
            <span>Regenerate</span>
          </button>

          {/* GENERATE SCENE IMAGE BUTTON ON PROMPT PAGE */}
          {onGenerateImage && (
            <button
              type="button"
              onClick={onGenerateImage}
              disabled={loadingImage || !generatedPrompt}
              className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-600 hover:to-teal-600 text-white rounded-md flex items-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95 disabled:opacity-50 border border-emerald-500/40"
              title="Render high-fidelity scene artwork directly via Gemini 2.5 Image Generator"
            >
              {loadingImage ? (
                <>
                  <RotateCw size={13} className="animate-spin text-emerald-200" />
                  <span>Generating Image...</span>
                </>
              ) : (
                <>
                  <ImageIcon size={13} className="text-emerald-200" />
                  <span>Generate Scene Image</span>
                </>
              )}
            </button>
          )}

          {/* VIEW IMAGE BUTTON IF IMAGE ALREADY EXISTS */}
          {hasGeneratedImage && onGoToImage && !loadingImage && (
            <button
              type="button"
              onClick={onGoToImage}
              className="px-2.5 py-1 text-xs font-semibold bg-lavender-surface hover:bg-lavender-border text-lavender-accent rounded-md flex items-center gap-1 transition-all cursor-pointer border border-lavender-border/60"
              title="View the generated scene image"
            >
              <ImageIcon size={12} className="text-emerald-400" />
              <span>View Image</span>
            </button>
          )}

          {/* COPY FILTERED BUTTON */}
          {generatedPrompt && onCopyFilteredPrompt && (
            <button
              type="button"
              onClick={onCopyFilteredPrompt}
              className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white rounded-md flex items-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95 border border-purple-500/40"
              title="Copy only the currently filtered/checked prompt sections as a single continuous prompt"
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
      </div>

      {/* PROMPT CONTENT EXPANDED TO FULL AVAILABLE HEIGHT */}
      <div className="flex-1 min-h-0 bg-lavender-surface/30 p-2.5 rounded-xl border border-lavender-border/60 flex flex-col shadow-xs overflow-hidden">
        {generatedPrompt ? (
          promptViewMode === 'color' ? (
            <div className="flex-1 min-h-0 overflow-y-auto pr-1">
              <ColorCodedPrompt 
                promptText={generatedPrompt} 
                onCopyText={onCopyTextSnippet}
                copiedMap={copiedMap}
                enabledSegmentIds={enabledSegmentIds}
                onToggleSegment={onToggleSegment}
                showFilterToolbar={true}
              />
            </div>
          ) : (
            <div className="relative flex-1 min-h-0 flex flex-col">
              <textarea
                readOnly
                value={generatedPrompt}
                className="w-full flex-1 min-h-0 bg-lavender-bg border border-lavender-border rounded-lg p-3 text-xs md:text-sm font-mono text-lavender-text leading-relaxed resize-none focus:outline-none pr-10 overflow-y-auto"
              />
              <button
                type="button"
                onClick={onCopyPrompt}
                className="absolute right-3 top-3 p-1.5 bg-lavender-surface/90 hover:bg-lavender-border text-lavender-text hover:text-lavender-accent border border-lavender-border/70 rounded-md transition-colors cursor-pointer shadow-sm"
                title="Copy raw text to clipboard"
              >
                {copiedPrompt ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
            </div>
          )
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-lavender-bg/40 rounded-lg border border-dashed border-lavender-border/50 text-lavender-text/60 space-y-3">
            <Sparkles size={28} className="mx-auto text-lavender-accent/60 animate-pulse" />
            <p className="text-xs max-w-md mx-auto">
              No prompt has been generated yet. Return to Step 7 to configure your style, or click below to compile immediately.
            </p>
            <button
              type="button"
              onClick={onGeneratePrompts}
              className="px-4 py-2 text-xs font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-lg inline-flex items-center gap-2 transition-all cursor-pointer shadow-md active:scale-95"
            >
              <Sparkles size={14} className="text-amber-300" />
              <span>Generate Prompt Now</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

