import React, { useMemo } from 'react';
import { 
  Camera, ShieldAlert, Sparkles, SlidersHorizontal, Ratio, Layout, Eye
} from 'lucide-react';
import { 
  CHARACTER_FRAMING_OPTIONS, 
  getCharacterFramingById 
} from '../../../constants/characterFraming';
import { 
  PROMPT_RATING_OPTIONS, 
  PromptRatingId, 
  getPromptRatingById 
} from '../../../constants/promptRating';
import { 
  ASPECT_RATIO_OPTIONS, 
  getAspectRatioById 
} from '../../../constants/aspectRatios';

interface Step4FramingProps {
  selectedFraming: string;
  onSelectFraming: (framingId: string) => void;
  selectedRating: PromptRatingId;
  onSelectRating: (ratingId: PromptRatingId) => void;
  selectedAspectRatio: string;
  onSelectAspectRatio: (ratioId: string) => void;
}

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

export const Step4Framing: React.FC<Step4FramingProps> = ({
  selectedFraming,
  onSelectFraming,
  selectedRating,
  onSelectRating,
  selectedAspectRatio,
  onSelectAspectRatio
}) => {
  const currFraming = getCharacterFramingById(selectedFraming);
  const currRating = getPromptRatingById(selectedRating);
  const currRatio = getAspectRatioById(selectedAspectRatio);

  // Dynamically sort camera framing options at runtime
  const sortedFramingOptions = useMemo(() => {
    return [...CHARACTER_FRAMING_OPTIONS].sort((a, b) => a.label.localeCompare(b.label));
  }, []);

  return (
    <div className="flex-1 flex flex-col space-y-4 min-h-0 overflow-y-auto pr-1">
      {/* HEADER BAR */}
      <div className="p-3 bg-lavender-surface/50 border border-lavender-border/70 rounded-xl flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
            <Camera size={18} />
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-bold text-lavender-accent uppercase tracking-wider">
              Camera Framing, Content Rating &amp; Aspect Ratio
            </h3>
            <p className="text-[11px] text-lavender-text/70">
              Configure camera perspective, image composition aspect ratio (16:9 to 9:16), and prompt rating.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-lavender-bg border border-lavender-border text-lavender-accent">
            Ratio: {currRatio.ratio}
          </span>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${RATING_BADGE_COLORS[currRating.id] || ''}`}>
            {currRating.label}
          </span>
        </div>
      </div>

      {/* TOP SECTION: ASPECT RATIO LISTBOX + CAMERA FRAMING */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {/* ASPECT RATIO LISTBOX */}
        <div className="bg-lavender-surface/40 p-3.5 rounded-xl border border-lavender-border/60 space-y-2.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
              <Ratio size={14} className="text-purple-400" />
              Image Aspect Ratio (16:9 to 9:16)
            </label>
            <span className="text-[10px] font-mono text-purple-300 font-semibold px-2 py-0.5 bg-purple-950/40 border border-purple-500/30 rounded">
              {currRatio.ratio}
            </span>
          </div>

          {/* LISTBOX SELECTOR */}
          <select
            value={selectedAspectRatio}
            onChange={(e) => onSelectAspectRatio(e.target.value)}
            className="w-full bg-lavender-bg border border-lavender-border rounded-lg p-2.5 text-xs font-semibold text-lavender-accent focus:outline-none focus:border-purple-400 cursor-pointer shadow-sm hover:border-purple-400/60"
            size={4}
          >
            {ASPECT_RATIO_OPTIONS.map((opt) => (
              <option key={opt.id} value={opt.id} className="p-1.5 text-xs font-medium cursor-pointer">
                {opt.label} — [{opt.resolutionHint}]
              </option>
            ))}
          </select>

          {/* ACTIVE RATIO DETAILS */}
          <div className="p-2 bg-lavender-bg/70 rounded-lg border border-lavender-border/40 text-[11px] space-y-1">
            <div className="flex items-center justify-between text-[10px] text-lavender-text/80">
              <span className="font-semibold text-lavender-accent">Composition: {currRatio.orientation.toUpperCase()}</span>
              <span className="font-mono text-purple-300">{currRatio.resolutionHint}</span>
            </div>
            <p className="text-[10px] text-lavender-text/70 leading-tight">
              {currRatio.description}
            </p>
          </div>
        </div>

        {/* CAMERA & CHARACTER FRAMING */}
        <div className="bg-lavender-surface/40 p-3.5 rounded-xl border border-lavender-border/60 space-y-2.5">
          <label className="text-xs font-bold text-teal-300 flex items-center gap-1.5">
            <Camera size={14} className="text-teal-400" />
            Camera Distance &amp; Character Framing
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

          <div className="p-2.5 bg-lavender-bg/70 rounded-lg border border-lavender-border/40 text-[11px] space-y-1">
            <div className="text-[10px] font-bold text-teal-300">
              Shot Perspective: {currFraming.label}
            </div>
            <p className="text-[10px] text-lavender-text/70 italic leading-tight">
              {currFraming.description}
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT RATING LEVEL SELECTION */}
      <div className="bg-lavender-surface/40 p-3.5 rounded-xl border border-lavender-border/60 space-y-2.5">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-pink-300 flex items-center gap-1.5">
            <ShieldAlert size={14} className="text-pink-400" />
            Content Rating Level
          </label>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${RATING_BADGE_COLORS[currRating.id] || ''}`}>
            {currRating.label}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {PROMPT_RATING_OPTIONS.map(r => {
            const isSelected = selectedRating === r.id;
            const badgeClass = RATING_BADGE_COLORS[r.id] || 'border-lavender-border';
            const icon = RATING_ICONS[r.id] || '⭐';

            return (
              <button
                key={r.id}
                type="button"
                onClick={() => onSelectRating(r.id)}
                className={`p-2.5 rounded-xl text-left transition-all border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? `bg-lavender-bg ${badgeClass} shadow-md ring-1 ring-lavender-accent/40`
                    : 'bg-lavender-surface/30 border-lavender-border/40 text-lavender-text/70 hover:bg-lavender-surface/50 hover:text-lavender-text'
                }`}
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[11px] font-bold truncate">{r.label}</span>
                  <span className="text-sm">{icon}</span>
                </div>
                <span className="text-[9px] text-lavender-text/60 mt-1 line-clamp-2 leading-tight">
                  {r.shortDescription}
                </span>
              </button>
            );
          })}
        </div>

        <p className="text-[11px] text-lavender-text/70 italic px-1">
          {currRating.description}
        </p>
      </div>

      {/* QUICK PRESET ASPECT RATIOS GRID */}
      <div className="bg-lavender-surface/30 p-3 rounded-xl border border-lavender-border/50 space-y-2">
        <span className="text-[11px] font-bold text-lavender-accent flex items-center gap-1.5">
          <Layout size={13} className="text-purple-400" />
          Quick Aspect Ratio Selection
        </span>
        <div className="flex items-center gap-1.5 flex-wrap">
          {ASPECT_RATIO_OPTIONS.map((opt) => {
            const isSelected = selectedAspectRatio === opt.id || selectedAspectRatio === opt.ratio;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => onSelectAspectRatio(opt.id)}
                className={`px-2.5 py-1 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-purple-950/60 border-purple-400 text-purple-200 shadow-sm ring-1 ring-purple-400/40'
                    : 'bg-lavender-surface/50 border-lavender-border text-lavender-text/70 hover:text-lavender-accent hover:bg-lavender-surface'
                }`}
              >
                {opt.ratio}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
