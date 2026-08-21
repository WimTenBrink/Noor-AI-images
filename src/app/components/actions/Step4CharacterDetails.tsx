import React, { useMemo } from 'react';
import { 
  Users, UserCheck, ShieldAlert, Camera, Sparkles, AlertCircle, Info
} from 'lucide-react';
import { SINGERS_DETAILED } from '../../../constants/singersDetailed';
import { 
  AGE_OPTIONS, 
  buildCharacterAgeLabel 
} from '../../../constants/characterAge';
import { 
  CHARACTER_FRAMING_OPTIONS, 
  getCharacterFramingById 
} from '../../../constants/characterFraming';
import { 
  PROMPT_RATING_OPTIONS, 
  PromptRatingId, 
  getPromptRatingById 
} from '../../../constants/promptRating';

interface Step4CharacterDetailsProps {
  enabledChars: Record<string, boolean>;
  characterAges: Record<string, string>;
  characterTomboys: Record<string, boolean>;
  onChangeCharacterAge: (singerId: string, ageId: string) => void;
  onToggleCharacterTomboy: (singerId: string) => void;
  selectedFraming: string;
  onSelectFraming: (framingId: string) => void;
  selectedRating: PromptRatingId;
  onSelectRating: (ratingId: PromptRatingId) => void;
}

const SINGER_BADGES: Record<string, { avatar: string; border: string; bg: string; text: string }> = {
  miranda: { avatar: '🎸', border: 'border-purple-500/40', bg: 'bg-purple-950/30', text: 'text-purple-300' },
  annelies: { avatar: '🎻', border: 'border-indigo-500/40', bg: 'bg-indigo-950/30', text: 'text-indigo-300' },
  fannie: { avatar: '🥁', border: 'border-rose-500/40', bg: 'bg-rose-950/30', text: 'text-rose-300' },
  emma: { avatar: '🎹', border: 'border-amber-500/40', bg: 'bg-amber-950/30', text: 'text-amber-300' },
  senna: { avatar: '🎙️', border: 'border-emerald-500/40', bg: 'bg-emerald-950/30', text: 'text-emerald-300' }
};

const RATING_BADGE_COLORS: Record<string, string> = {
  innocent: 'bg-emerald-950/40 text-emerald-300 border-emerald-500/40',
  normal: 'bg-blue-950/40 text-blue-300 border-blue-500/40',
  professional: 'bg-purple-950/40 text-purple-300 border-purple-500/40',
  intimate: 'bg-amber-950/40 text-amber-300 border-amber-500/40',
  nsfw: 'bg-rose-950/40 text-rose-300 border-rose-500/40',
  explicit: 'bg-red-950/40 text-red-300 border-red-500/40'
};

const RATING_ICONS: Record<string, string> = {
  innocent: '🌱',
  normal: '📷',
  professional: '🎬',
  intimate: '💛',
  nsfw: '🔞',
  explicit: '⚠️'
};

export const Step4CharacterDetails: React.FC<Step4CharacterDetailsProps> = ({
  enabledChars,
  characterAges,
  characterTomboys,
  onChangeCharacterAge,
  onToggleCharacterTomboy,
  selectedFraming,
  onSelectFraming,
  selectedRating,
  onSelectRating
}) => {
  const activeSingers = SINGERS_DETAILED.filter(s => enabledChars[s.id]);
  const currFraming = getCharacterFramingById(selectedFraming);
  const currRating = getPromptRatingById(selectedRating);

  // Dynamically sort camera framing options at runtime
  const sortedFramingOptions = useMemo(() => {
    return [...CHARACTER_FRAMING_OPTIONS].sort((a, b) => a.label.localeCompare(b.label));
  }, []);

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
              Rating, Demographics &amp; Camera Framing
            </h3>
            <p className="text-[11px] text-lavender-text/70">
              Customize age &amp; Tomboy styling per character, then set camera framing and content rating.
            </p>
          </div>
        </div>
      </div>

      {/* GLOBAL SETTINGS: FRAMING & RATING */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {/* CAMERA FRAMING */}
        <div className="bg-lavender-surface/40 p-3.5 rounded-xl border border-lavender-border/60 space-y-2">
          <label className="text-xs font-bold text-teal-300 flex items-center gap-1.5">
            <Camera size={14} className="text-teal-400" />
            Camera &amp; Character Framing
          </label>
          <select
            value={selectedFraming}
            onChange={(e) => onSelectFraming(e.target.value)}
            className="w-full bg-lavender-bg border border-lavender-border rounded-lg p-2 text-xs font-semibold text-lavender-accent focus:outline-none focus:border-teal-400 cursor-pointer shadow-sm hover:border-teal-400/60"
          >
            {sortedFramingOptions.map(f => (
              <option key={f.id} value={f.id}>
                {f.label}
              </option>
            ))}
          </select>
          <p className="text-[10px] text-lavender-text/70 italic">
            {currFraming.description}
          </p>
        </div>

        {/* CONTENT RATING */}
        <div className="bg-lavender-surface/40 p-3.5 rounded-xl border border-lavender-border/60 space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-pink-300 flex items-center gap-1.5">
              <ShieldAlert size={14} className="text-pink-400" />
              Content Rating Level
            </label>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${RATING_BADGE_COLORS[currRating.id] || ''}`}>
              {currRating.label}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            {PROMPT_RATING_OPTIONS.map(r => {
              const isSelected = selectedRating === r.id;
              const badgeClass = RATING_BADGE_COLORS[r.id] || 'border-lavender-border';
              const icon = RATING_ICONS[r.id] || '⭐';

              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => onSelectRating(r.id)}
                  className={`p-2 rounded-lg text-left transition-all border flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? `bg-lavender-bg ${badgeClass} shadow-sm ring-1 ring-lavender-accent/40`
                      : 'bg-lavender-surface/30 border-lavender-border/40 text-lavender-text/70 hover:bg-lavender-surface/50 hover:text-lavender-text'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[11px] font-bold truncate">{r.label}</span>
                    <span className="text-xs">{icon}</span>
                  </div>
                  <span className="text-[9px] text-lavender-text/50 mt-1 line-clamp-1">
                    {r.shortDescription}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="text-[10px] text-lavender-text/70 italic">
            {currRating.description}
          </p>
        </div>
      </div>

      {/* ACTIVE SINGER DEMOGRAPHICS & TOMBOY TOGGLES */}
      {activeSingers.length === 0 ? (
        <div className="p-8 text-center bg-lavender-surface/20 rounded-xl border border-lavender-border/40 space-y-2">
          <AlertCircle size={28} className="mx-auto text-amber-400" />
          <h4 className="text-xs font-bold text-lavender-accent">No Active Characters</h4>
          <p className="text-[11px] text-lavender-text/70">
            Please return to Characters and enable at least one character.
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
              const badge = SINGER_BADGES[singer.id] || { avatar: '👤', border: 'border-lavender-border', bg: 'bg-lavender-surface', text: 'text-lavender-text' };
              const currentAge = characterAges[singer.id] || 'young_adult';
              const isTomboy = characterTomboys[singer.id] ?? true;
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
    </div>
  );
};
