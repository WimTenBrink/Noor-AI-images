import React from 'react';
import { BookOpen, Sparkles, Repeat, AlertTriangle, Smile, Palette } from 'lucide-react';
import { AppDefaults } from '../../../../../types';

interface LyricalStyleSubTabProps {
  appDefaults: AppDefaults;
  setAppDefaults: React.Dispatch<React.SetStateAction<AppDefaults>>;
}

export const LyricalStyleSubTab: React.FC<LyricalStyleSubTabProps> = ({
  appDefaults,
  setAppDefaults
}) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center gap-2 mb-2">
        <span className="h-1.5 w-1.5 rounded-full bg-lavender-accent animate-pulse" />
        <h3 className="text-xs font-black uppercase tracking-wider text-lavender-accent/90">
          Lyrical Style, Phrasing & Tone Controls
        </h3>
      </div>
      <p className="text-[11px] text-lavender-text/60 leading-relaxed font-medium mb-3">
        Configure poetic tropes, vocal lilting, backwards subtext, emotional sarcasm, and politeness filters.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* Vocal Lilting */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.vocalLilting || false}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, vocalLilting: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Sparkles size={14} className="text-cyan-400" /> Vocal Lilting & Ornamentation
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Instructs vocalists to use gentle vocal leaps, lilting trills, and rhythmic folk ornamentations.
            </p>
          </div>
        </label>

        {/* Poetic Allegory */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.poeticAllegory || false}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, poeticAllegory: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <BookOpen size={14} className="text-emerald-400" /> Deep Poetic Allegory & Metaphor
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Weaves multilayered allegories involving botanical symbols, tides, and seasonal transformations.
            </p>
          </div>
        </label>

        {/* Storyteller Ballad */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.storytellerBallad || false}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, storytellerBallad: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <BookOpen size={14} className="text-amber-400" /> Storyteller Folk Ballad
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Structures lyrics as chronological folk tales with clear narrative arcs and morality stanzas.
            </p>
          </div>
        </label>

        {/* Backward Phonetic Reversal */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.lyricsReversal || false}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, lyricsReversal: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Repeat size={14} className="text-rose-400" /> Phonetic Backmasking Subtext
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Embeds subliminal phonetic mirror codes designed to reveal secret secondary messages when played backwards.
            </p>
          </div>
        </label>

        {/* Passive-Aggressive */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.passiveAggressive}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, passiveAggressive: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <AlertTriangle size={14} className="text-orange-400" /> Passive-Aggressive Subtext
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Infuses lyrics with smiling resentment, subtle sarcasm, and polite barbs.
            </p>
          </div>
        </label>

        {/* Polite Phrasing */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.politeness}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, politeness: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Smile size={14} className="text-indigo-400" /> Diplomatic Polite Phrasing
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Enforces high formal courtesy, graceful declarations, and gentle diplomacy across all verses.
            </p>
          </div>
        </label>
      </div>
    </div>
  );
};
