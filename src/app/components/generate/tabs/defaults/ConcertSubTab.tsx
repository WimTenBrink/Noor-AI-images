import React from 'react';
import { Mic2, Users, Flame, Zap } from 'lucide-react';
import { AppDefaults } from '../../../../../types';

interface ConcertSubTabProps {
  appDefaults: AppDefaults;
  setAppDefaults: React.Dispatch<React.SetStateAction<AppDefaults>>;
}

export const ConcertSubTab: React.FC<ConcertSubTabProps> = ({
  appDefaults,
  setAppDefaults
}) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center gap-2 mb-2">
        <span className="h-1.5 w-1.5 rounded-full bg-lavender-accent animate-pulse" />
        <h3 className="text-xs font-black uppercase tracking-wider text-lavender-accent/90">
          Concert & Live Performance Defaults
        </h3>
      </div>
      <p className="text-[11px] text-lavender-text/60 leading-relaxed font-medium mb-3">
        Configure default live performance dynamics, vocal arrangements, and acoustic stage interaction styles.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.aCappellaFocus || false}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, aCappellaFocus: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Mic2 size={14} className="text-cyan-400" /> Pure A Cappella Vocal Focus
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Strips heavy backing tracks in favor of pristine four-part female vocal harmonies and finger snaps.
            </p>
          </div>
        </label>

        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.callAndResponse || false}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, callAndResponse: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Users size={14} className="text-amber-400" /> Lead & Choir Call-and-Response
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Structures chorus lines with a lead singer call followed by three-singer harmonic echo responses.
            </p>
          </div>
        </label>

        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.acousticImprovisation || false}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, acousticImprovisation: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Flame size={14} className="text-emerald-400" /> Acoustic Instrumental Jam
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Includes extended instrumental solo passages for bass, drums, synth, and traditional lyres.
            </p>
          </div>
        </label>

        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.vocalBeatboxing || false}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, vocalBeatboxing: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Zap size={14} className="text-purple-400" /> Percussive Beatboxing
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              The singers contribute syncopated vocal beatboxing and mouth percussion behind verse transitions.
            </p>
          </div>
        </label>
      </div>
    </div>
  );
};
