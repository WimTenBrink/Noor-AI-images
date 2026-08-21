import React from 'react';
import { Sparkles, BookOpen, Palette, Music, Disc } from 'lucide-react';
import { AppDefaults } from '../../../../../types';

interface BandSubTabProps {
  appDefaults: AppDefaults;
  setAppDefaults: React.Dispatch<React.SetStateAction<AppDefaults>>;
}

export const BandSubTab: React.FC<BandSubTabProps> = ({
  appDefaults,
  setAppDefaults
}) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center gap-2 mb-2">
        <span className="h-1.5 w-1.5 rounded-full bg-lavender-accent animate-pulse" />
        <h3 className="text-xs font-black uppercase tracking-wider text-lavender-accent/90">
          Band Core Default Settings
        </h3>
      </div>
      <p className="text-[11px] text-lavender-text/60 leading-relaxed font-medium mb-3">
        Configure the primary band preferences, including self-reflection filters, linguistic idioms, color coding, and signature traditional instrumentation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* Self-reflection Poetic Filter */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.selfReflection}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, selfReflection: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Sparkles size={14} className="text-amber-400" /> Self-reflection Poetic Filter
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Applies self-reflective poetic imagery, introspective narrative depth, and band-character identity filters to all outputs.
            </p>
          </div>
        </label>

        {/* Old Dutch & Archaic Idioms */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.archaicIdioms || false}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, archaicIdioms: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <BookOpen size={14} className="text-emerald-400" /> Old Dutch & Archaic Idioms
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Injects historical Dutch sayings, archaic phrasing, and classical maritime idioms into verse structures.
            </p>
          </div>
        </label>

        {/* Color-Coding Mode */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.colorCoding}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, colorCoding: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Palette size={14} className="text-purple-400" /> Color-Coding Mode
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Color-codes vocal parts by singer voice register in generated lyrics and markdown score layouts.
            </p>
          </div>
        </label>

        {/* Use Bagpipes */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.bagpipes}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, bagpipes: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Music size={14} className="text-cyan-400" /> Use Bagpipes
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Enables Great Highland bagpipes as a default backing drone and melody instrument in song arrangements.
            </p>
          </div>
        </label>

        {/* Use Crwth */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.crwth}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, crwth: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Disc size={14} className="text-indigo-400" /> Use Crwth
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Includes the ancient Welsh Crwth bowed lyre for eerie, haunting acoustic string textures.
            </p>
          </div>
        </label>
      </div>
    </div>
  );
};
