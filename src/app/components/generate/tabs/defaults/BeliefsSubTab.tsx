import React from 'react';
import { Shield, Sparkles, Flame } from 'lucide-react';
import { AppDefaults } from '../../../../../types';
import { RELIGION_DETAILS } from '../../../../utils/defaultsHelper';

interface BeliefsSubTabProps {
  appDefaults: AppDefaults;
  setAppDefaults: React.Dispatch<React.SetStateAction<AppDefaults>>;
}

export const BeliefsSubTab: React.FC<BeliefsSubTabProps> = ({
  appDefaults,
  setAppDefaults
}) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center gap-2 mb-2">
        <span className="h-1.5 w-1.5 rounded-full bg-lavender-accent animate-pulse" />
        <h3 className="text-xs font-black uppercase tracking-wider text-lavender-accent/90">
          Pagan Beliefs & Mythology Customization
        </h3>
      </div>
      <p className="text-[11px] text-lavender-text/60 leading-relaxed font-medium mb-3">
        Select whether the band practices active ancient paganism and pick their dedicated mythological pantheon or spiritual tradition.
      </p>

      {/* Pagan Toggle Banner */}
      <div className="bg-lavender-surface/15 border border-lavender-border/40 rounded-2xl p-4 space-y-3">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={appDefaults.pagan}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, pagan: e.target.checked }))}
            className="accent-lavender-accent h-4 w-4 rounded"
          />
          <span className="text-xs font-extrabold text-lavender-text flex items-center gap-1.5">
            <Shield size={14} className="text-purple-400" /> Active Pagan Worldview & Shrine Altars
          </span>
        </label>
        <p className="text-[10.5px] text-lavender-text/60 leading-relaxed font-medium pl-7">
          When active, song prompts explicitly honor the chosen pantheon's deities, sacred altars, amulets, and ancient nature veneration.
        </p>

        {appDefaults.pagan && (
          <div className="pt-3 border-t border-lavender-border/20 space-y-3 animate-fade-in pl-7">
            <label className="block text-xs font-bold text-lavender-accent uppercase tracking-wider">
              Select Pantheon / Pagan Tradition:
            </label>
            <select
              value={appDefaults.religion || 'Norse'}
              onChange={(e) => setAppDefaults((prev) => ({ ...prev, religion: e.target.value as any }))}
              className="w-full bg-black/60 border border-lavender-border/50 text-lavender-text rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-lavender-accent transition-all cursor-pointer font-bold"
            >
              {Object.keys(RELIGION_DETAILS).map((key) => (
                <option key={key} value={key} className="bg-lavender-bg text-lavender-text font-semibold">
                  {key} Paganism
                </option>
              ))}
            </select>

            {/* Pantheon Detail Card */}
            {(() => {
              const rel = appDefaults.religion || 'Norse';
              const detail = RELIGION_DETAILS[rel] || RELIGION_DETAILS['Norse'];
              return (
                <div className="p-3 rounded-xl bg-black/40 border border-lavender-border/30 text-[10.5px] text-lavender-text/80 space-y-1">
                  <p><strong className="text-lavender-accent">Revered Deities:</strong> {detail.deities}</p>
                  <p><strong className="text-lavender-accent">Sacred Symbols:</strong> {detail.symbols}</p>
                  <p className="text-lavender-text/60 italic">{detail.description}</p>
                </div>
              );
            })()}
          </div>
        )}
      </div>

      {/* Additional Belief Expansion Toggles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.animismSpirits || false}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, animismSpirits: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Sparkles size={14} className="text-amber-400" /> Animism & Forest Spirits
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Incorporate forest guardians, river spirits, and ancient living tree wisdom into lyrical themes.
            </p>
          </div>
        </label>

        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.astrologicalRituals || false}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, astrologicalRituals: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Flame size={14} className="text-rose-400" /> Solstice & Astrological Rituals
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Lyrics reference full moon gatherings, equinox bonfires, and celestial seasonal cycles.
            </p>
          </div>
        </label>
      </div>
    </div>
  );
};
