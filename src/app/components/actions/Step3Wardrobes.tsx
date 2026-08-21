import React, { useMemo } from 'react';
import { 
  Shirt, Sparkles, X, Check, Copy, AlertCircle, Eye
} from 'lucide-react';
import { SINGERS_DETAILED } from '../../../constants/singersDetailed';
import { WARDROBE_GROUPS, WardrobeGroup, getWardrobeGroupById } from '../../../constants/wardrobeGroups';
import { 
  getWardrobesForGroup, 
  getSingerWardrobeEvent,
  buildWardrobePromptText 
} from '../../../lib/wardrobesHelper';

interface Step3WardrobesProps {
  enabledChars: Record<string, boolean>;
  wardrobes: Record<string, string>;
  selectedWardrobeGroup: string;
  onSelectWardrobeGroup: (groupId: string) => void;
  onSelectCharacterWardrobe: (singerId: string, wardrobeId: string) => void;
  onToggleCharacterWardrobe: (singerId: string) => void;
}

const SINGER_BADGES: Record<string, { avatar: string; border: string; bg: string; text: string }> = {
  miranda: { avatar: '🎸', border: 'border-purple-500/40', bg: 'bg-purple-950/30', text: 'text-purple-300' },
  annelies: { avatar: '🎻', border: 'border-indigo-500/40', bg: 'bg-indigo-950/30', text: 'text-indigo-300' },
  fannie: { avatar: '🥁', border: 'border-rose-500/40', bg: 'bg-rose-950/30', text: 'text-rose-300' },
  emma: { avatar: '🎹', border: 'border-amber-500/40', bg: 'bg-amber-950/30', text: 'text-amber-300' },
  senna: { avatar: '🎙️', border: 'border-emerald-500/40', bg: 'bg-emerald-950/30', text: 'text-emerald-300' }
};

export const Step3Wardrobes: React.FC<Step3WardrobesProps> = ({
  enabledChars,
  wardrobes,
  selectedWardrobeGroup,
  onSelectWardrobeGroup,
  onSelectCharacterWardrobe,
  onToggleCharacterWardrobe
}) => {
  const activeSingers = SINGERS_DETAILED.filter(s => enabledChars[s.id]);
  const currWardrobeGroup = getWardrobeGroupById(selectedWardrobeGroup);

  // Dynamically sort wardrobe groups at runtime
  const sortedWardrobeGroups = useMemo(() => {
    return [...WARDROBE_GROUPS].sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  return (
    <div className="flex-1 flex flex-col space-y-4 min-h-0 overflow-y-auto pr-1">
      {/* HEADER & GLOBAL WARDROBE GROUP SELECTOR */}
      <div className="p-3 bg-lavender-surface/50 border border-lavender-border/70 rounded-xl flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-pink-950/60 border border-pink-500/40 flex items-center justify-center text-pink-300">
            <Shirt size={18} />
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-bold text-lavender-accent uppercase tracking-wider">
              Character Wardrobes ({activeSingers.length} Active)
            </h3>
            <p className="text-[11px] text-lavender-text/70">
              Select clothing collection categories and specific outfits for each enabled character.
            </p>
          </div>
        </div>

        {/* WARDROBE GROUP DROPDOWN */}
        <div className="flex items-center gap-2 min-w-0">
          <label className="text-xs font-bold text-pink-300 flex items-center gap-1 shrink-0 whitespace-nowrap">
            <Shirt size={14} className="text-pink-400" />
            <span>Wardrobe Group:</span>
          </label>
          <select
            value={selectedWardrobeGroup}
            onChange={(e) => onSelectWardrobeGroup(e.target.value)}
            className="px-3 py-1.5 bg-lavender-bg border border-pink-500/40 text-pink-200 rounded-lg text-xs font-semibold focus:outline-none focus:border-pink-400 cursor-pointer shadow-sm"
          >
            {sortedWardrobeGroups.map(group => (
              <option key={group.id} value={group.id}>
                {group.icon} {group.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {activeSingers.length === 0 ? (
        <div className="p-8 text-center bg-lavender-surface/20 rounded-xl border border-lavender-border/40 space-y-2">
          <AlertCircle size={28} className="mx-auto text-amber-400" />
          <h4 className="text-xs font-bold text-lavender-accent">No Active Characters</h4>
          <p className="text-[11px] text-lavender-text/70">
            Please return to Characters and enable at least one character to configure wardrobes.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {activeSingers.map(singer => {
            const badge = SINGER_BADGES[singer.id] || { avatar: '👤', border: 'border-lavender-border', bg: 'bg-lavender-surface', text: 'text-lavender-text' };
            const currentWardrobeId = wardrobes[singer.id] || 'none';
            const isWardrobeActive = currentWardrobeId !== 'none';
            const rawGroupWardrobes = getWardrobesForGroup(singer.id, selectedWardrobeGroup);
            // Dynamically sort outfits at runtime
            const groupWardrobes = [...rawGroupWardrobes].sort((a, b) => a.title.localeCompare(b.title));
            const activeEvent = isWardrobeActive ? getSingerWardrobeEvent(singer.id, currentWardrobeId) : null;
            const wardrobePrompt = isWardrobeActive ? buildWardrobePromptText(singer.id, currentWardrobeId) : '';
            const isCurrentInGroup = groupWardrobes.some(w => w.id === currentWardrobeId);

            return (
              <div
                key={singer.id}
                className={`p-3.5 rounded-xl border space-y-2.5 bg-lavender-surface/30 ${badge.border} shadow-sm`}
              >
                {/* CHARACTER HEADER */}
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

                  {/* TOGGLE WARDROBE ON/OFF */}
                  <label className="flex items-center gap-1.5 text-xs text-lavender-text font-semibold cursor-pointer select-none px-2 py-1 bg-lavender-bg rounded border border-lavender-border/60 hover:bg-lavender-surface transition-colors">
                    <input
                      type="checkbox"
                      checked={isWardrobeActive}
                      onChange={() => onToggleCharacterWardrobe(singer.id)}
                      className="rounded border-lavender-border text-pink-500 focus:ring-pink-500 h-3.5 w-3.5 cursor-pointer accent-pink-500"
                    />
                    <span className="text-[11px]">{isWardrobeActive ? 'Outfit Active' : 'No Outfit'}</span>
                  </label>
                </div>

                {/* OUTFIT SELECTOR */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-pink-300 font-bold flex items-center gap-1">
                      <Shirt size={12} />
                      Outfit ({currWardrobeGroup?.name || 'Active Group'}):
                    </span>
                    <span className="text-lavender-text/50">
                      {groupWardrobes.length} available
                    </span>
                  </div>

                  <select
                    value={isWardrobeActive && isCurrentInGroup ? currentWardrobeId : 'placeholder'}
                    onChange={(e) => {
                      if (e.target.value !== 'placeholder') {
                        onSelectCharacterWardrobe(singer.id, e.target.value);
                      }
                    }}
                    disabled={!isWardrobeActive}
                    className={`w-full bg-lavender-bg border border-lavender-border rounded-lg p-2 text-xs font-medium text-lavender-text focus:outline-none focus:border-pink-400 truncate ${
                      !isWardrobeActive ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:border-pink-400/60'
                    }`}
                  >
                    <option value="placeholder" disabled>
                      {!isWardrobeActive 
                        ? '🌿 No Wardrobe (Natural unadorned appearance)' 
                        : `👔 Choose outfit from ${currWardrobeGroup?.name || 'group'}...`}
                    </option>
                    {groupWardrobes.map(w => (
                      <option key={w.id} value={w.id}>
                        {w.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* PREVIEW OF SELECTED OUTFIT */}
                {isWardrobeActive && activeEvent ? (
                  <div className="p-2.5 bg-pink-950/30 border border-pink-500/30 rounded-lg text-[11px] text-pink-200 space-y-1">
                    <span className="font-semibold block flex items-center gap-1">
                      <span>👗 {activeEvent.title}</span>
                    </span>
                    <p className="text-pink-300/80 text-[10px] leading-relaxed line-clamp-3">
                      {wardrobePrompt}
                    </p>
                  </div>
                ) : (
                  <div className="p-2 bg-purple-950/20 border border-purple-500/20 rounded-lg text-[10px] text-purple-200/70">
                    🌿 Natural unadorned/naked appearance &bull; No clothing pieces assigned
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
