import React from 'react';
import { 
  Wand2, Dices, Sparkles, Copy, Check, RefreshCw, HelpCircle
} from 'lucide-react';

interface MainPromptTabProps {
  mainSceneText: string;
  onChangeMainSceneText: (text: string) => void;
  onRandomizeMainScene: () => void;
  onRandomizeAllActions: () => void;
  loadingScene: boolean;
  loadingAll: boolean;
  copiedMainScene: boolean;
  onCopyMainScene: () => void;
  enabledCharacterCount: number;
  totalCharacterCount: number;
}

export const MainPromptTab: React.FC<MainPromptTabProps> = ({
  mainSceneText,
  onChangeMainSceneText,
  onRandomizeMainScene,
  onRandomizeAllActions,
  loadingScene,
  loadingAll,
  copiedMainScene,
  onCopyMainScene,
  enabledCharacterCount,
  totalCharacterCount
}) => {
  return (
    <div className="bg-lavender-surface/30 p-4 rounded-xl border border-lavender-border/60 space-y-4">
      {/* SECTION HEADER */}
      <div className="flex items-center justify-between pb-2 border-b border-lavender-border/40 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-950/60 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
            <Wand2 size={16} />
          </div>
          <div>
            <h3 className="text-xs font-bold text-lavender-accent uppercase tracking-wider">
              Main Scene Background & AI Settings
            </h3>
            <p className="text-[11px] text-lavender-text/70">
              Define the global environment background scene and run AI batch generators.
            </p>
          </div>
        </div>

        {/* AI ACTION BUTTONS */}
        <div className="flex items-center gap-2">
          <button
            onClick={onRandomizeMainScene}
            disabled={loadingScene}
            className="px-3 py-1.5 text-xs font-bold bg-purple-900/40 hover:bg-purple-800/60 border border-purple-500/40 text-purple-200 rounded-lg flex items-center gap-1.5 transition-all disabled:opacity-50 cursor-pointer shadow-sm"
            title="Generate a rich Dutch scene background using AI"
          >
            {loadingScene ? (
              <RefreshCw size={13} className="animate-spin text-purple-300" />
            ) : (
              <Dices size={13} className="text-purple-300" />
            )}
            Randomize Scene
          </button>

          <button
            onClick={onRandomizeAllActions}
            disabled={loadingAll}
            className="px-3 py-1.5 text-xs font-bold bg-indigo-900/40 hover:bg-indigo-800/60 border border-indigo-500/40 text-indigo-200 rounded-lg flex items-center gap-1.5 transition-all disabled:opacity-50 cursor-pointer shadow-sm"
            title="Generate harmonious actions for all enabled characters using AI"
          >
            {loadingAll ? (
              <RefreshCw size={13} className="animate-spin text-indigo-300" />
            ) : (
              <Sparkles size={13} className="text-indigo-300" />
            )}
            Randomize All Actions ({enabledCharacterCount}/{totalCharacterCount})
          </button>
        </div>
      </div>

      {/* MAIN SCENE TEXTAREA */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-lavender-accent flex items-center gap-1.5">
            <Wand2 size={13} className="text-purple-400" />
            Main Background Scene Description
          </label>
          <span className="text-[10px] text-lavender-text/60">
            This serves as the core environment anchor for all character actions.
          </span>
        </div>

        <div className="relative">
          <textarea
            value={typeof mainSceneText === 'string' ? mainSceneText : (mainSceneText ? String(mainSceneText) : '')}
            onChange={(e) => onChangeMainSceneText(e.target.value)}
            placeholder="Describe the overall background environment setting, furniture, architecture, landscape, and ambient props..."
            rows={5}
            className="w-full bg-lavender-bg border border-lavender-border rounded-lg p-3 text-xs text-lavender-text focus:outline-none focus:border-lavender-accent resize-y min-h-[120px] overflow-y-auto leading-relaxed pr-10"
          />
          {mainSceneText && (
            <button
              onClick={onCopyMainScene}
              className="absolute right-3 top-3 p-1.5 bg-lavender-surface/80 hover:bg-lavender-surface text-lavender-text hover:text-lavender-accent border border-lavender-border/60 rounded-md transition-colors cursor-pointer shadow-sm"
              title="Copy main scene text"
            >
              {copiedMainScene ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            </button>
          )}
        </div>
      </div>

      {/* HELPFUL TIPS CARD */}
      <div className="p-3 bg-indigo-950/20 rounded-lg border border-indigo-500/20 text-xs text-indigo-200/80 flex items-start gap-2.5">
        <HelpCircle size={16} className="text-indigo-400 shrink-0 mt-0.5" />
        <div className="space-y-1 text-[11px]">
          <span className="font-semibold text-indigo-300 block">Inclusive Prompt Formulation</span>
          <p>
            All prompts are constructed with inclusive-only language to optimize image AI results. Character wardrobe outfits, physical poses, and instruments are cleanly composed around this main background description.
          </p>
        </div>
      </div>
    </div>
  );
};
