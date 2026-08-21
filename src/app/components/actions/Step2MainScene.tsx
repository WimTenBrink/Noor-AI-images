import React from 'react';
import { 
  Wand2, Dices, Copy, Check, RefreshCw, HelpCircle, FileText
} from 'lucide-react';

interface Step2MainSceneProps {
  mainSceneText: string;
  onChangeMainSceneText: (text: string) => void;
  onRandomizeMainScene: () => void;
  loadingScene: boolean;
  copiedMainScene: boolean;
  onCopyMainScene: () => void;
  themeSummaryText: string;
}

export const Step2MainScene: React.FC<Step2MainSceneProps> = ({
  mainSceneText,
  onChangeMainSceneText,
  onRandomizeMainScene,
  loadingScene,
  copiedMainScene,
  onCopyMainScene,
  themeSummaryText
}) => {
  return (
    <div className="flex-1 flex flex-col space-y-4 min-h-0 overflow-y-auto pr-1">
      {/* HEADER BAR */}
      <div className="p-3 bg-lavender-surface/50 border border-lavender-border/70 rounded-xl flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
            <Wand2 size={18} />
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-bold text-lavender-accent uppercase tracking-wider">
              Step 2 of 6: Main Scene &amp; AI
            </h3>
            <p className="text-[11px] text-lavender-text/70">
              The environmental settings are compiled into this core background scene anchor. Click Randomize to generate an enhanced description with AI.
            </p>
          </div>
        </div>

        {/* RANDOMIZE BUTTON */}
        <button
          onClick={onRandomizeMainScene}
          disabled={loadingScene}
          className="px-4 py-2 text-xs font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-lg flex items-center gap-2 transition-all disabled:opacity-50 cursor-pointer shadow-md active:scale-95"
          title="Use active settings to generate an enhanced, descriptive scene background with AI"
        >
          {loadingScene ? (
            <RefreshCw size={14} className="animate-spin text-amber-300" />
          ) : (
            <Dices size={14} className="text-amber-300" />
          )}
          <span>{loadingScene ? 'Generating Background...' : 'Randomize'}</span>
        </button>
      </div>

      {/* THEME SUMMARY BANNER */}
      {themeSummaryText && (
        <div className="p-3 bg-lavender-surface/30 rounded-xl border border-lavender-border/50 text-xs text-lavender-text/80 space-y-1">
          <div className="text-[11px] font-bold text-lavender-accent uppercase tracking-wider flex items-center gap-1.5">
            <FileText size={13} className="text-indigo-400" />
            Active Settings from Step 1:
          </div>
          <p className="text-[11px] text-lavender-text/80 leading-relaxed font-mono bg-lavender-bg/60 p-2 rounded border border-lavender-border/40">
            {themeSummaryText}
          </p>
        </div>
      )}

      {/* MAIN SCENE TEXTBOX WITH COPY ICON */}
      <div className="bg-lavender-surface/30 p-4 rounded-xl border border-lavender-border/60 space-y-2 flex-1 flex flex-col min-h-0">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-lavender-accent flex items-center gap-1.5">
            <Wand2 size={13} className="text-purple-400" />
            Main Background Scene Description
          </label>
          <span className="text-[10px] text-lavender-text/60">
            Edit text directly or click Randomize above
          </span>
        </div>

        <div className="relative flex-1 flex flex-col min-h-[180px]">
          <textarea
            value={typeof mainSceneText === 'string' ? mainSceneText : (mainSceneText ? String(mainSceneText) : '')}
            onChange={(e) => onChangeMainSceneText(e.target.value)}
            placeholder="Describe the overall background environment setting, furniture, architecture, landscape, and ambient props..."
            rows={8}
            className="w-full flex-1 bg-lavender-bg border border-lavender-border rounded-lg p-3 text-xs md:text-sm text-lavender-text focus:outline-none focus:border-lavender-accent resize-y min-h-[160px] overflow-y-auto leading-relaxed pr-10"
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
      <div className="p-3 bg-indigo-950/20 rounded-xl border border-indigo-500/20 text-xs text-indigo-200/80 flex items-start gap-2.5">
        <HelpCircle size={16} className="text-indigo-400 shrink-0 mt-0.5" />
        <div className="space-y-1 text-[11px]">
          <span className="font-semibold text-indigo-300 block">Single Scene Environment Anchor</span>
          <p>
            This scene text serves as the foundation for the entire composition. When you generate prompts on the final page, this setting is combined with the active characters, their specific wardrobes, and poses.
          </p>
        </div>
      </div>
    </div>
  );
};
