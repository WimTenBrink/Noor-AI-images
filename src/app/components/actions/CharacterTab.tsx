import React, { useState } from 'react';
import { SingerDetailedProfile } from '../../../constants/singersDetailed';
import { getActionsForGroup, getActionGroupById } from '../../../constants/actionGroups';
import { getWardrobeGroupById } from '../../../constants/wardrobeGroups';
import { 
  getWardrobesForGroup, 
  getSingerWardrobeEvent,
  buildWardrobePromptText 
} from '../../../lib/wardrobesHelper';
import { SINGER_ACTION_PRESETS } from '../../../lib/singerActions';
import { 
  Copy, Check, Shirt, Sparkles, RefreshCw, X, User, ChevronDown, ChevronUp, Info, Music
} from 'lucide-react';

interface CharacterTabProps {
  singer: SingerDetailedProfile;
  badge: { avatar: string; border: string; bg: string; text: string };
  action: string;
  wardrobe: string;
  activeWardrobeGroupId: string;
  activeActionGroupId: string;
  isEnabled: boolean;
  isLoading: boolean;
  hasMainScene: boolean;
  copied: boolean;
  onToggle: () => void;
  onActionChange: (text: string) => void;
  onWardrobeChange: (wardrobeId: string) => void;
  onSelectAction: (actionText: string) => void;
  onCopy: () => void;
}

export const CharacterTab: React.FC<CharacterTabProps> = ({
  singer,
  badge,
  action,
  wardrobe,
  activeWardrobeGroupId,
  activeActionGroupId,
  isEnabled,
  isLoading,
  hasMainScene,
  copied,
  onToggle,
  onActionChange,
  onWardrobeChange,
  onSelectAction,
  onCopy
}) => {
  const [showProfileDetails, setShowProfileDetails] = useState(false);

  const currentActionGroup = getActionGroupById(activeActionGroupId);
  const currentWardrobeGroup = getWardrobeGroupById(activeWardrobeGroupId);

  const groupActions = getActionsForGroup(activeActionGroupId);
  const groupWardrobes = getWardrobesForGroup(singer.id, activeWardrobeGroupId);

  // Active outfit info for badge/indicator
  const isWardrobeActive = wardrobe && wardrobe !== 'none';
  const activeWardrobeEvent = isWardrobeActive
    ? getSingerWardrobeEvent(singer.id, wardrobe)
    : null;

  const isCurrentWardrobeInGroup = groupWardrobes.some(w => w.id === wardrobe);

  // Select value determination
  const selectValue = (isWardrobeActive && isCurrentWardrobeInGroup) 
    ? wardrobe 
    : 'placeholder';

  const handleToggleWardrobe = () => {
    if (isWardrobeActive) {
      // Disable wardrobe -> becomes naked
      onWardrobeChange('none');
    } else {
      // Enable wardrobe -> pick first in active group or a default
      const defaultItem = groupWardrobes[0];
      if (defaultItem) {
        onWardrobeChange(defaultItem.id);
      } else {
        onWardrobeChange('daily_casual');
      }
    }
  };

  const handleActionSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedActionId = e.target.value;
    if (!selectedActionId || selectedActionId === 'placeholder') return;
    
    const chosen = groupActions.find(a => a.id === selectedActionId);
    if (chosen) {
      onSelectAction(chosen.actionText);
    }
    // Reset dropdown selection back to placeholder
    e.target.value = 'placeholder';
  };

  const handleWardrobeSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOutfitId = e.target.value;
    if (!selectedOutfitId || selectedOutfitId === 'placeholder') return;
    onWardrobeChange(selectedOutfitId);
  };

  const characterPresets = SINGER_ACTION_PRESETS[singer.id] || [];

  return (
    <div className={`p-4 rounded-xl border transition-all space-y-4 ${
      isEnabled 
        ? `bg-lavender-surface/40 ${badge.border} shadow-md` 
        : 'bg-lavender-surface/20 border-lavender-border/40 opacity-80'
    }`}>
      {/* CHARACTER HEADER BANNER */}
      <div className="flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-lavender-border/40">
        <div className="flex items-center gap-3 min-w-0">
          <div className="text-2xl p-2 rounded-xl bg-lavender-bg border border-lavender-border/70 shadow-inner flex items-center justify-center shrink-0">
            {badge.avatar}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className={`text-sm font-bold ${badge.text}`}>
                {singer.name}
              </h3>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-lavender-bg border border-lavender-border/60 text-lavender-accent">
                {singer.role}
              </span>
              {isLoading && (
                <span className="text-[10px] text-indigo-300 flex items-center gap-1 animate-pulse bg-indigo-950/40 px-2 py-0.5 rounded border border-indigo-500/30">
                  <RefreshCw size={10} className="animate-spin" /> AI Integrating...
                </span>
              )}
            </div>
            <p className="text-[11px] text-lavender-text/70 mt-0.5">
              Tomboy band member &bull; {singer.appearance?.height || '1.75m'} &bull; {singer.appearance?.hairColorStyle || 'Athletic cut'}
            </p>
          </div>
        </div>

        {/* ENABLE / DISABLE TOGGLE BUTTON & BADGES */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onToggle}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm ${
              isEnabled 
                ? 'bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/50 text-emerald-200' 
                : 'bg-lavender-surface hover:bg-lavender-border border border-lavender-border text-lavender-text/60'
            }`}
          >
            <input
              type="checkbox"
              checked={isEnabled}
              onChange={() => {}}
              className="w-3.5 h-3.5 rounded border-lavender-border text-emerald-500 focus:ring-emerald-500 bg-lavender-bg cursor-pointer accent-emerald-500 pointer-events-none"
            />
            <span>{isEnabled ? 'Included in Scene' : 'Excluded from Scene'}</span>
          </button>

          <button
            onClick={() => setShowProfileDetails(!showProfileDetails)}
            className="p-1.5 bg-lavender-bg hover:bg-lavender-surface border border-lavender-border/60 rounded-lg text-lavender-text/70 hover:text-lavender-accent text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
            title="View physical profile and appearance details"
          >
            <User size={13} />
            <span>Profile</span>
            {showProfileDetails ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </button>
        </div>
      </div>

      {/* COLLAPSIBLE PHYSICAL PROFILE DETAILS */}
      {showProfileDetails && (
        <div className="p-3 bg-lavender-bg/90 rounded-lg border border-lavender-border/60 text-xs space-y-2 text-lavender-text/90 animate-fadeIn">
          <div className="font-bold text-lavender-accent flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
            <Info size={13} className="text-indigo-400" />
            Physical Reference Details for Prompt Generation
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
            <div className="p-2 bg-lavender-surface/50 rounded border border-lavender-border/40">
              <span className="font-semibold text-lavender-accent block mb-0.5">Base Appearance:</span>
              <p className="text-lavender-text/80">{singer.Base}</p>
            </div>
            <div className="p-2 bg-lavender-surface/50 rounded border border-lavender-border/40">
              <span className="font-semibold text-lavender-accent block mb-0.5">Face & Expression:</span>
              <p className="text-lavender-text/80">{singer.Face}</p>
            </div>
            <div className="p-2 bg-lavender-surface/50 rounded border border-lavender-border/40">
              <span className="font-semibold text-lavender-accent block mb-0.5">Torso & Physique:</span>
              <p className="text-lavender-text/80">{singer.Torso}</p>
            </div>
            <div className="p-2 bg-lavender-surface/50 rounded border border-lavender-border/40">
              <span className="font-semibold text-lavender-accent block mb-0.5">Full Body:</span>
              <p className="text-lavender-text/80">{singer.Body}</p>
            </div>
          </div>
        </div>
      )}

      {/* WARDROBE & ACTION DROPDOWNS SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* WARDROBE PICKER WITH ENABLED CHECKBOX */}
        <div className="p-3 bg-lavender-bg/70 rounded-lg border border-lavender-border/50 space-y-2">
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-xs font-bold text-pink-300 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={!!isWardrobeActive}
                onChange={handleToggleWardrobe}
                disabled={!isEnabled}
                className="w-4 h-4 rounded border-lavender-border text-pink-500 focus:ring-pink-500 bg-lavender-surface cursor-pointer accent-pink-500 disabled:opacity-40"
              />
              <Shirt size={14} className="text-pink-400" />
              <span>Wardrobe Outfit ({currentWardrobeGroup?.name || 'Active Group'})</span>
            </label>
            {isWardrobeActive && activeWardrobeEvent && (
              <button
                onClick={() => onWardrobeChange('none')}
                className="text-[10px] text-pink-300/80 hover:text-pink-200 hover:underline flex items-center gap-0.5 cursor-pointer"
                title="Remove outfit (natural appearance / naked)"
              >
                <X size={10} /> Disable Outfit
              </button>
            )}
          </div>

          <select
            value={selectValue}
            onChange={handleWardrobeSelectChange}
            disabled={!isEnabled || !isWardrobeActive}
            className={`w-full bg-lavender-surface border border-lavender-border rounded-md p-2 text-xs font-medium text-lavender-text focus:outline-none focus:border-lavender-accent truncate transition-opacity ${
              !isEnabled || !isWardrobeActive ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:border-lavender-accent/60'
            }`}
            title={
              !isWardrobeActive 
                ? "No wardrobe (naked). Check box to enable outfit." 
                : `Select ${singer.name}'s outfit from ${currentWardrobeGroup?.name || 'group'}`
            }
          >
            <option value="placeholder" disabled>
              {!isWardrobeActive 
                ? '🌿 No Wardrobe (Naked / Natural Appearance)' 
                : `👔 Choose outfit from ${currentWardrobeGroup?.name || 'group'} (${groupWardrobes.length} available)...`}
            </option>
            {groupWardrobes.map(w => (
              <option key={w.id} value={w.id}>
                {w.title}
              </option>
            ))}
          </select>

          {/* ACTIVE OUTFIT PREVIEW BADGE */}
          {isWardrobeActive && activeWardrobeEvent ? (
            <div className="p-2 bg-pink-950/30 border border-pink-500/30 rounded text-[11px] text-pink-200">
              <span className="font-semibold block">👗 {activeWardrobeEvent.title}</span>
              <p className="text-pink-300/70 text-[10px] mt-0.5 line-clamp-2">
                {buildWardrobePromptText(singer.id, wardrobe)}
              </p>
            </div>
          ) : (
            <div className="p-2 bg-purple-950/20 border border-purple-500/20 rounded text-[10px] text-purple-200/70">
              🌿 No custom outfit assigned &bull; Natural unadorned/naked appearance
            </div>
          )}
        </div>

        {/* ACTION PICKER */}
        <div className="p-3 bg-lavender-bg/70 rounded-lg border border-lavender-border/50 space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
              <Sparkles size={14} className="text-purple-400" />
              Physical Action ({currentActionGroup?.name || 'Active Group'})
            </label>
            <span className="text-[10px] text-purple-300/70 font-semibold">
              {groupActions.length} Actions
            </span>
          </div>

          <select
            defaultValue="placeholder"
            onChange={handleActionSelectChange}
            disabled={!isEnabled}
            className="w-full bg-lavender-surface border border-lavender-border rounded-md p-2 text-xs font-medium text-lavender-text focus:outline-none focus:border-lavender-accent cursor-pointer disabled:opacity-50 hover:border-lavender-accent/60 truncate"
          >
            <option value="placeholder" disabled>
              ⚡ Choose action from {currentActionGroup?.name || 'group'}...
            </option>
            {groupActions.map(a => (
              <option key={a.id} value={a.id}>
                {a.label}
              </option>
            ))}
          </select>

          <div className="p-2 bg-lavender-surface/30 border border-lavender-border/30 rounded text-[10px] text-lavender-text/60">
            Select an action to auto-compose this character's pose, interaction, and prompt.
          </div>
        </div>
      </div>

      {/* CHARACTER PROMPT TEXTAREA */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-lavender-accent flex items-center gap-1.5">
            <Sparkles size={13} className="text-amber-400" />
            Character Action & Custom Pose Prompt
          </label>
          <span className="text-[10px] text-lavender-text/60">
            Edit text directly or select actions above to update
          </span>
        </div>

        <div className="relative">
          <textarea
            value={action}
            onChange={(e) => onActionChange(e.target.value)}
            disabled={!isEnabled}
            placeholder={`Describe ${singer.name}'s specific physical action, posture, expression, or activity in this scene...`}
            rows={3}
            className="w-full bg-lavender-bg border border-lavender-border rounded-lg p-3 text-xs text-lavender-text focus:outline-none focus:border-lavender-accent resize-y min-h-[85px] overflow-y-auto leading-relaxed pr-10 disabled:opacity-50"
          />
          {action && (
            <button
              onClick={onCopy}
              className="absolute right-3 top-3 p-1.5 bg-lavender-surface/80 hover:bg-lavender-surface text-lavender-text hover:text-lavender-accent border border-lavender-border/60 rounded-md transition-colors cursor-pointer shadow-sm"
              title="Copy character action prompt"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            </button>
          )}
        </div>
      </div>

      {/* CHARACTER SPECIFIC QUICK PRESETS */}
      {characterPresets.length > 0 && (
        <div className="p-3 bg-lavender-bg/50 rounded-lg border border-lavender-border/40 space-y-2">
          <span className="text-[11px] font-bold text-lavender-text/80 uppercase tracking-wider block">
            Signature {singer.name} Quick Presets:
          </span>
          <div className="flex flex-wrap gap-2">
            {characterPresets.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => onSelectAction(preset)}
                disabled={!isEnabled}
                className="px-2.5 py-1 bg-lavender-surface hover:bg-lavender-border border border-lavender-border/70 rounded-md text-[11px] text-lavender-accent hover:text-white transition-all text-left truncate max-w-full cursor-pointer disabled:opacity-40"
                title={preset}
              >
                &bull; {preset.slice(0, 75)}...
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
