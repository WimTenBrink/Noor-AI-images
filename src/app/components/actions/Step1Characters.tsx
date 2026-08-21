import React from 'react';
import { Users, Check, UserCheck, UserX, Info, Heart, Sparkles } from 'lucide-react';
import { SINGERS_DETAILED } from '../../../constants/singersDetailed';
import { SINGERS } from '../../../constants/singers';

interface Step1CharactersProps {
  enabledChars: Record<string, boolean>;
  onToggleChar: (singerId: string) => void;
  onSelectAll: () => void;
  onDeselectAll: () => void;
  onShowSingerDetails?: (singerId: string) => void;
}

const CHARACTER_PHOTOS: Record<string, string> = {
  miranda: '/singers/Miranda_Noor.jpg',
  annelies: '/singers/Annelies_Brink.jpg',
  fannie: '/singers/Fannie_de_Jong.jpg',
  emma: '/singers/Emma_Vermeer.jpg',
  senna: '/singers/Senna_Bakker.jpg'
};

const CHARACTER_ROLES: Record<string, { role: string; summary: string; badge: string; color: string; bg: string; border: string }> = {
  miranda: {
    role: 'Lead Vocals, Bass Guitar & Composer',
    summary: 'Ethereal soprano with Indian-Dutch heritage. Athletic, graceful, and expressive.',
    badge: 'Soprano & Bass',
    color: 'text-purple-300',
    bg: 'bg-purple-950/40',
    border: 'border-purple-500/50'
  },
  annelies: {
    role: 'Lead Guitar, Alto Vocals & Graphic Designer',
    summary: 'Grounded Dutch alt-rock guitarist. Athletic runner with calm, supportive energy.',
    badge: 'Alto & Guitar',
    color: 'text-indigo-300',
    bg: 'bg-indigo-950/40',
    border: 'border-indigo-500/50'
  },
  fannie: {
    role: 'Drums, Percussion & Mezzo-Soprano',
    summary: 'Kinetic Utrecht drummer and soccer player with syncopated, rhythmic power.',
    badge: 'Mezzo & Drums',
    color: 'text-rose-300',
    bg: 'bg-rose-950/40',
    border: 'border-rose-500/50'
  },
  emma: {
    role: 'Keyboards, Synthesizers & Contralto Leader',
    summary: 'Mischievous, confident Amsterdam keyboardist and martial arts enthusiast.',
    badge: 'Contralto & Keys',
    color: 'text-amber-300',
    bg: 'bg-amber-950/40',
    border: 'border-amber-500/50'
  },
  senna: {
    role: 'Lead Photojournalist & Reporter',
    summary: 'Investigative music journalist and candid photographer for Dutch Noise Chronicles.',
    badge: 'Press & Camera',
    color: 'text-emerald-300',
    bg: 'bg-emerald-950/40',
    border: 'border-emerald-500/50'
  }
};

export const Step1Characters: React.FC<Step1CharactersProps> = ({
  enabledChars,
  onToggleChar,
  onSelectAll,
  onDeselectAll,
  onShowSingerDetails
}) => {
  const enabledCount = Object.values(enabledChars).filter(Boolean).length;

  return (
    <div className="flex-1 flex flex-col space-y-4 min-h-0 overflow-y-auto pr-1">
      {/* HEADER BAR */}
      <div className="p-3 bg-lavender-surface/50 border border-lavender-border/70 rounded-xl flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-300">
            <Users size={18} />
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-bold text-lavender-accent uppercase tracking-wider">
              Character Selection
            </h3>
            <p className="text-[11px] text-lavender-text/70">
              Select which characters will appear in the scene and prompt generation.
            </p>
          </div>
        </div>

        {/* QUICK TOGGLE BUTTONS & ACTIVE COUNT */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-2.5 py-1 bg-lavender-bg rounded-lg border border-lavender-border/80 text-lavender-text">
            Active: <span className="text-emerald-300 font-bold">{enabledCount}</span> of 5
          </span>

          <button
            type="button"
            onClick={onSelectAll}
            className="px-2.5 py-1.5 text-xs font-semibold bg-lavender-surface hover:bg-lavender-border text-lavender-accent border border-lavender-border rounded-lg flex items-center gap-1.5 cursor-pointer transition-all active:scale-95 shadow-sm"
            title="Enable all 5 characters"
          >
            <UserCheck size={13} className="text-emerald-400" />
            Select All
          </button>

          <button
            type="button"
            onClick={onDeselectAll}
            className="px-2.5 py-1.5 text-xs font-semibold bg-lavender-surface hover:bg-lavender-border text-lavender-text hover:text-red-300 border border-lavender-border rounded-lg flex items-center gap-1.5 cursor-pointer transition-all active:scale-95 shadow-sm"
            title="Deselect all characters"
          >
            <UserX size={13} className="text-red-400" />
            Clear
          </button>
        </div>
      </div>

      {/* 5-CHARACTER CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {SINGERS_DETAILED.map((singer) => {
          const isEnabled = !!enabledChars[singer.id];
          const roleInfo = CHARACTER_ROLES[singer.id] || {
            role: singer.role,
            summary: singer.appearance.build,
            badge: singer.role,
            color: 'text-lavender-accent',
            bg: 'bg-lavender-surface',
            border: 'border-lavender-border'
          };
          const photoUrl = CHARACTER_PHOTOS[singer.id] || '/singers/Miranda_Noor.jpg';

          return (
            <div
              key={singer.id}
              onClick={() => onToggleChar(singer.id)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer select-none flex flex-col justify-between relative overflow-hidden ${
                isEnabled
                  ? `${roleInfo.bg} ${roleInfo.border} shadow-md ring-1 ring-lavender-accent/30`
                  : 'bg-lavender-surface/20 border-lavender-border/40 opacity-60 hover:opacity-90 hover:bg-lavender-surface/30'
              }`}
            >
              {/* TOP ROW: PHOTO + NAME + CHECKBOX */}
              <div className="flex items-start gap-3">
                <div className="relative shrink-0">
                  <img
                    src={photoUrl}
                    alt={singer.name}
                    className={`w-14 h-14 rounded-xl object-cover border transition-all ${
                      isEnabled ? `${roleInfo.border} shadow-sm` : 'border-lavender-border/40 grayscale'
                    }`}
                  />
                  {isEnabled && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow">
                      <Check size={12} strokeWidth={3} />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className={`text-sm font-bold truncate ${isEnabled ? 'text-lavender-accent' : 'text-lavender-text/70'}`}>
                      {singer.name}
                    </h4>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${roleInfo.bg} ${roleInfo.border} ${roleInfo.color} shrink-0`}>
                      {roleInfo.badge}
                    </span>
                  </div>

                  <p className="text-xs font-medium text-lavender-text/80 mt-0.5 line-clamp-1">
                    {roleInfo.role}
                  </p>

                  <p className="text-[11px] text-lavender-text/60 mt-1 line-clamp-2 leading-tight">
                    {roleInfo.summary}
                  </p>
                </div>
              </div>

              {/* BOTTOM ROW: STATUS BADGE & DETAILS BUTTON */}
              <div className="flex items-center justify-between pt-3 mt-3 border-t border-lavender-border/40 text-xs">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={isEnabled}
                    onChange={(e) => {
                      e.stopPropagation();
                      onToggleChar(singer.id);
                    }}
                    className="w-4 h-4 rounded border-lavender-border text-purple-600 focus:ring-purple-500 bg-lavender-bg cursor-pointer accent-purple-600"
                  />
                  <span className={`text-xs font-semibold ${isEnabled ? 'text-emerald-300' : 'text-lavender-text/50'}`}>
                    {isEnabled ? 'Active in Scene' : 'Excluded'}
                  </span>
                </div>

                {onShowSingerDetails && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onShowSingerDetails(singer.id);
                    }}
                    className="p-1 px-2 text-[11px] font-medium text-lavender-text/80 hover:text-lavender-accent hover:bg-lavender-surface rounded flex items-center gap-1 border border-lavender-border/50 cursor-pointer transition-colors"
                    title="View Full Profile & Biography"
                  >
                    <Info size={12} />
                    Profile
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* HINT BANNER */}
      <div className="p-3 bg-lavender-surface/30 rounded-xl border border-lavender-border/50 flex items-center gap-2 text-xs text-lavender-text/70">
        <Sparkles size={15} className="text-purple-400 shrink-0" />
        <span>
          Selected characters will be featured in the subsequent steps (wardrobe, poses, actions) and included in the synthesized image generation prompt.
        </span>
      </div>
    </div>
  );
};
