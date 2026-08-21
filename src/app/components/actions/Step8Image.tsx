import React from 'react';
import { 
  Image as ImageIcon, Sparkles, Wand2, Copy, Check, RotateCw, ArrowLeft, Layers, Palette, ShieldAlert
} from 'lucide-react';
import { ImageView } from '../ImageView';

interface Step8ImageProps {
  imageSrc: string | null;
  imageTitle: string;
  imagePrompt?: string;
  loadingImage: boolean;
  onGenerateImage: () => void;
  onBackToPrompt: () => void;
  copiedMap: Record<string, boolean>;
  onCopyText: (key: string, text: string) => void;
  styleLabel?: string;
  ratingLabel?: string;
}

export const Step8Image: React.FC<Step8ImageProps> = ({
  imageSrc,
  imageTitle,
  imagePrompt,
  loadingImage,
  onGenerateImage,
  onBackToPrompt,
  copiedMap,
  onCopyText,
  styleLabel,
  ratingLabel
}) => {
  return (
    <div className="flex-1 flex flex-col min-h-0 h-full">
      {/* TOP CONTROL / METADATA BAR */}
      <div className="flex items-center justify-between flex-wrap gap-2 px-3 py-1.5 mb-2 bg-lavender-surface/50 rounded-lg border border-lavender-border/60 shrink-0">
        <div className="flex items-center gap-2.5 flex-wrap min-w-0">
          <div className="flex items-center gap-1.5 text-xs font-bold text-lavender-accent uppercase tracking-wider">
            <ImageIcon size={14} className="text-emerald-400" />
            <span>Scene Artwork</span>
          </div>

          {imageTitle && (
            <div className="flex items-center gap-1.5 bg-lavender-bg px-2 py-0.5 rounded border border-lavender-border/60 max-w-xs truncate">
              <span className="text-[11px] font-semibold text-purple-200 truncate">
                {imageTitle}
              </span>
              <button
                type="button"
                onClick={() => onCopyText('scene_img_title', imageTitle)}
                className="text-lavender-text/60 hover:text-lavender-accent transition-colors cursor-pointer"
                title="Copy scene title"
              >
                {copiedMap['scene_img_title'] ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
              </button>
            </div>
          )}

          {styleLabel && (
            <span className="text-[10px] font-semibold text-indigo-300 bg-indigo-950/40 px-2 py-0.5 rounded border border-indigo-500/30 flex items-center gap-1">
              <Palette size={10} />
              {styleLabel}
            </span>
          )}

          {ratingLabel && (
            <span className="text-[10px] font-semibold text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/30 flex items-center gap-1">
              <ShieldAlert size={10} />
              {ratingLabel}
            </span>
          )}
        </div>

        {/* RIGHT ACTIONS: REGENERATE & BACK TO PROMPT */}
        <div className="flex items-center gap-2 ml-auto">
          <button
            type="button"
            onClick={onBackToPrompt}
            className="px-2.5 py-1 text-xs font-semibold bg-lavender-surface hover:bg-lavender-border text-lavender-accent rounded-md flex items-center gap-1 transition-all cursor-pointer border border-lavender-border/60"
            title="Return to Prompt inspector"
          >
            <ArrowLeft size={12} />
            <span>Prompt View</span>
          </button>

          <button
            type="button"
            onClick={onGenerateImage}
            disabled={loadingImage}
            className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-600 hover:to-teal-600 text-white rounded-md flex items-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95 disabled:opacity-50 border border-emerald-500/40"
            title="Re-render scene artwork"
          >
            {loadingImage ? (
              <>
                <RotateCw size={13} className="animate-spin text-emerald-200" />
                <span>Rendering...</span>
              </>
            ) : (
              <>
                <Sparkles size={13} className="text-amber-300" />
                <span>{imageSrc ? 'Regenerate Image' : 'Generate Image'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* MAIN VIEWPORT: PAN & ZOOM IMAGEVIEW, LOADING STATE, OR EMPTY STATE */}
      <div className="flex-1 min-h-0 bg-lavender-surface/30 rounded-xl border border-lavender-border/60 overflow-hidden flex flex-col relative shadow-xs">
        {loadingImage ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-black/40 space-y-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-4 border-emerald-500/20 border-t-emerald-400 animate-spin flex items-center justify-center" />
              <div className="absolute inset-0 flex items-center justify-center text-emerald-300">
                <ImageIcon size={24} className="animate-pulse" />
              </div>
            </div>
            <div className="space-y-1 max-w-md">
              <h4 className="text-sm font-bold text-emerald-300">
                Rendering Scene Artwork with Gemini 2.5...
              </h4>
              <p className="text-xs text-lavender-text/70">
                Synthesizing cinematic composition, character poses, wardrobes, and environmental atmosphere.
              </p>
            </div>
            {imagePrompt && (
              <div className="max-w-lg w-full bg-lavender-bg/70 p-3 rounded-lg border border-lavender-border/50 text-left">
                <div className="text-[10px] font-bold text-lavender-accent uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Layers size={10} /> Active Prompt Preview
                </div>
                <p className="text-[11px] font-mono text-lavender-text/80 line-clamp-3 leading-relaxed">
                  {imagePrompt}
                </p>
              </div>
            )}
          </div>
        ) : imageSrc ? (
          <div className="w-full h-full flex flex-col">
            <ImageView src={imageSrc} alt={imageTitle || 'Generated Scene Artwork'} />
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-lavender-bg/40 text-lavender-text/60 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-emerald-300">
              <ImageIcon size={30} />
            </div>
            <div className="space-y-1.5 max-w-md">
              <h4 className="text-sm font-bold text-lavender-accent">
                No Scene Image Generated Yet
              </h4>
              <p className="text-xs text-lavender-text/70">
                Ready to generate the scene artwork based on your compiled prompt and selected art style.
              </p>
            </div>
            <button
              type="button"
              onClick={onGenerateImage}
              className="px-5 py-2.5 text-xs font-bold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl inline-flex items-center gap-2 transition-all cursor-pointer shadow-md active:scale-95 border border-emerald-400/40"
            >
              <Wand2 size={15} className="text-amber-300" />
              <span>Generate Scene Image Now</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
