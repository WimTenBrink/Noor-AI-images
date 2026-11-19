import React, { useMemo } from 'react';
import { Users, UserCheck, AlertCircle, Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';
import { SINGERS_DETAILED } from '../../../constants/singersDetailed';
import { 
  AGE_OPTIONS, 
  DEFAULT_CHARACTER_AGE, 
  DEFAULT_IS_TOMBOY, 
  buildCharacterAgeLabel 
} from '../../../constants/characterAge';

interface Step4AgeProps {
  enabledChars: Record<string, boolean>;
  characterAges: Record<string, string>;
  characterTomboys: Record<string, boolean>;
  onChangeCharacterAge: (singerId: string, ageId: string) => void;
  onToggleCharacterTomboy: (singerId: string) => void;
  onSetAllAges?: (ageId: string) => void;
  onSetAllTomboys?: (isTomboy: boolean) => void;
}

const SINGER_BADGES: Record<string, { avatar: string; border: string; bg: string; text: string; role: string }> = {
  miranda: { avatar: '🎸', border: 'border-purple-500/40', bg: 'bg-purple-950/30', text: 'text-purple-300', role: 'Soprano & Bass' },
  annelies: { avatar: '🎻', border: 'border-indigo-500/40', bg: 'bg-indigo-950/30', text: 'text-indigo-300', role: 'Alto & Guitar' },
  fannie: { avatar: '🥁', border: 'border-rose-500/40', bg: 'bg-rose-950/30', text: 'text-rose-300', role: 'Mezzo & Drums' },
  emma: { avatar: '🎹', border: 'border-amber-500/40', bg: 'bg-amber-950/30', text: 'text-amber-300', role: 'Contralto & Keys' },
  senna: { avatar: '🎙️', border: 'border-emerald-500/40', bg: 'bg-emerald-950/30', text: 'text-emerald-300', role: 'Press & Reporter' }
};

export const Step4Age: React.FC<Step4AgeProps> = ({
  enabledChars,
  characterAges,
  characterTomboys,
  onChangeCharacterAge,
  onToggleCharacterTomboy,
  onSetAllAges,
  onSetAllTomboys
}) => {
  const activeSingers = SINGERS_DETAILED.filter(s => enabledChars[s.id]);

  // Dynamically sort age options at runtime
  const sortedAgeOptions = useMemo(() => {
    return [...AGE_OPTIONS].sort((a, b) => a.label.localeCompare(b.label));
  }, []);

  return (
    <div className="flex-1 flex flex-col space-y-4 min-h-0 overflow-y-auto pr-1">
      {/* HEADER BAR */}
      <div className="p-3 bg-lavender-surface/50 border border-lavender-border/70 rounded-xl flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-teal-950/60 border border-teal-500/40 flex items-center justify-center text-teal-300">
            <UserCheck size={18} />
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-bold text-lavender-accent uppercase tracking-wider">
              Character Age &amp; Tomboy Demographics
            </h3>
            <p className="text-[11px] text-lavender-text/70">
              Customize age category and tomboy styling per character for prompt synthesis.
            </p>
          </div>
        </div>

        {/* BATCH ACTION CONTROLS */}
        <div className="flex items-center gap-2">
          {onSetAllTomboys && (
            <button
              type="button"
              onClick={() => onSetAllTomboys(true)}
              className="px-2.5 py-1 text-xs font-semibold bg-lavender-surface hover:bg-lavender-border text-teal-300 border border-teal-500/40 rounded-lg flex items-center gap-1 cursor-pointer transition-all active:scale-95 shadow-sm"
              title="Enable tomboy traits for all characters"
            >
              <CheckCircle2 size={12} />
              All Tomboys
            </button>
          )}

          {onSetAllAges && (
            <button
              type="button"
              onClick={() => onSetAllAges('young_adult')}
              className="px-2.5 py-1 text-xs font-semibold bg-lavender-surface hover:bg-lavender-border text-lavender-accent border border-lavender-border rounded-lg flex items-center gap-1 cursor-pointer transition-all active:scale-95 shadow-sm"
              title="Reset all characters to standard Young Adult"
            >
              <RotateCcw size={12} />
              All Young Adult
            </button>
          )}
        </div>
      </div>

      {/* ACTIVE SINGER DEMOGRAPHICS & TOMBOY TOGGLES */}
      {activeSingers.length === 0 ? (
        <div className="p-8 text-center bg-lavender-surface/20 rounded-xl border border-lavender-border/40 space-y-2">
          <AlertCircle size={28} className="mx-auto text-amber-400" />
          <h4 className="text-xs font-bold text-lavender-accent">No Active Characters</h4>
          <p className="text-[11px] text-lavender-text/70">
            Please return to the Characters page and enable at least one character.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-lavender-accent px-1">
            <span className="flex items-center gap-1.5">
              <Users size={14} className="text-purple-400" />
              Per-Character Age Demographics &amp; Tomboy Traits ({activeSingers.length} Active)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {activeSingers.map(singer => {
              const badge = SINGER_BADGES[singer.id] || { avatar: '👤', border: 'border-lavender-border', bg: 'bg-lavender-surface', text: 'text-lavender-text', role: singer.role };
              const currentAge = characterAges[singer.id] || DEFAULT_CHARACTER_AGE;
              const isTomboy = characterTomboys[singer.id] ?? DEFAULT_IS_TOMBOY;
              const ageLabel = buildCharacterAgeLabel(currentAge, isTomboy);

              return (
                <div
                  key={singer.id}
                  className={`p-3.5 rounded-xl border space-y-3 bg-lavender-surface/30 ${badge.border} shadow-sm`}
                >
                  {/* CHARACTER INFO */}
                  <div className="flex items-center justify-between pb-2 border-b border-lavender-border/30">
                    <div className="flex items-center gap-2">
                      <span className="text-xl p-1 rounded bg-lavender-bg border border-lavender-border/50">{badge.avatar}</span>
                      <div>
                        <div className={`text-xs font-bold ${badge.text}`}>
                          {singer.name}
                        </div>
                        <div className="text-[10px] text-lavender-text/60 font-medium">
                          {singer.role}
                        </div>
                      </div>
                    </div>

                    <span className="text-[11px] px-2 py-0.5 rounded bg-lavender-bg border border-lavender-border font-mono text-lavender-accent">
                      {ageLabel}
                    </span>
                  </div>

                  {/* AGE SELECTION */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold text-teal-300 flex items-center justify-between">
                      <span>Age Category:</span>
                      <span className="text-[10px] text-lavender-text/50">
                        {sortedAgeOptions.find(a => a.id === currentAge)?.description || ''}
                      </span>
                    </label>
                    <select
                      value={currentAge}
                      onChange={(e) => onChangeCharacterAge(singer.id, e.target.value)}
                      className="w-full bg-lavender-bg border border-lavender-border rounded-lg p-2 text-xs font-medium text-lavender-text focus:outline-none focus:border-teal-400 cursor-pointer shadow-sm hover:border-teal-400/60"
                    >
                      {sortedAgeOptions.map(ageOpt => (
                        <option key={ageOpt.id} value={ageOpt.id}>
                          {ageOpt.label} ({ageOpt.description})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* TOMBOY TOGGLE */}
                  <div className="pt-1 flex items-center justify-between">
                    <label className="flex items-center gap-2 text-xs text-lavender-text font-semibold cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={isTomboy}
                        onChange={() => onToggleCharacterTomboy(singer.id)}
                        className="rounded border-lavender-border text-teal-500 focus:ring-teal-500 h-4 w-4 cursor-pointer accent-teal-500"
                      />
                      <span>Tomboy Styling &amp; Traits</span>
                    </label>

                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      isTomboy ? 'bg-teal-950/50 text-teal-300 border border-teal-500/40' : 'bg-lavender-bg text-lavender-text/50 border border-lavender-border'
                    }`}>
                      {isTomboy ? 'Tomboy Active' : 'Feminine Base'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TIP */}
      <div className="p-3 bg-lavender-surface/30 rounded-xl border border-lavender-border/50 flex items-center gap-2 text-xs text-lavender-text/70">
        <Sparkles size={15} className="text-teal-400 shrink-0" />
        <span>
          Age specifications guide the visual maturity and proportions of each character, while Tomboy styling emphasizes athletic posture, natural energy, and tomboy haircut aesthetics.
        </span>
      </div>
    </div>
  );
};
