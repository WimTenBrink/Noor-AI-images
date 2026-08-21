import React from 'react';
import { SingerDetailedProfile } from '../../../constants/singersDetailed';
import { getActionsForGroup, getActionGroupById } from '../../../constants/actionGroups';
import { getWardrobeGroupById } from '../../../constants/wardrobeGroups';
import { 
  getWardrobesForGroup, 
  getSingerWardrobeEvent,
  buildWardrobePromptText 
} from '../../../lib/wardrobesHelper';
import { Copy, Check, Shirt, Camera, RefreshCw, Sparkles, X } from 'lucide-react';

interface CharacterActionCardProps {
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

export const CharacterActionCard: React.FC<CharacterActionCardProps> = ({
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
    // Reset dropdown selection back to placeholder so user can pick the same action again if wanted
    e.target.value = 'placeholder';
  };

  const handleWardrobeSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOutfitId = e.target.value;
    if (!selectedOutfitId || selectedOutfitId === 'placeholder') return;
    onWardrobeChange(selectedOutfitId);
  };

  return (
    <div 
      className={`p-2.5 rounded-xl border transition-all ${
        isEnabled 
          ? `bg-lavender-surface/50 ${badge.border} shadow-sm` 
          : 'bg-lavender-surface/20 border-lavender-border/30'
      }`}
    >
      {/* CARD HEADER */}
      <div className="flex items-center justify-between gap-1.5 mb-1.5">
        {/* Left: Checkbox, Avatar, Name & Role */}
        <div className="flex items-center gap-2 min-w-0">
          <input
            type="checkbox"
            checked={isEnabled}
            onChange={onToggle}
            className="w-3.5 h-3.5 rounded border-lavender-border text-lavender-accent focus:ring-lavender-accent bg-lavender-bg cursor-pointer accent-lavender-accent shrink-0"
            title={isEnabled ? `Disable ${singer.name}` : `Enable ${singer.name}`}
          />
          <span className={`text-base transition-opacity shrink-0 ${isEnabled ? 'opacity-100' : 'opacity-50'}`}>
            {badge.avatar}
          </span>
          <div className="flex items-center gap-1.5 min-w-0 flex-wrap">
            <h4 className={`text-xs font-bold truncate ${isEnabled ? 'text-lavender-accent' : 'text-lavender-text/50 line-through'}`}>
              {singer.name}
            </h4>
            {singer.id === 'senna' ? (
              <span className={`px-1.5 py-0.2 text-[9px] bg-amber-500/20 text-amber-300 rounded border border-amber-500/30 font-semibold flex items-center gap-0.5 shrink-0 ${isEnabled ? 'opacity-100' : 'opacity-60'}`}>
                <Camera size={9} /> Reporter
              </span>
            ) : (
              <span className="text-[10px] text-lavender-text/50 font-normal truncate">
                ({singer.role})
              </span>
            )}
            {isLoading && (
              <span className="px-1.5 py-0.2 text-[9px] bg-indigo-500/20 text-indigo-300 rounded border border-indigo-500/30 font-medium flex items-center gap-1 animate-pulse shrink-0">
                <RefreshCw size={9} className="animate-spin text-indigo-300" /> AI Integrating...
              </span>
            )}
          </div>
        </div>

        {/* Right: Quick Outfit Status / Naked Badge */}
        {isWardrobeActive && activeWardrobeEvent ? (
          <div className="flex items-center gap-1 shrink-0 max-w-[50%]">
            <span 
              className="px-1.5 py-0.5 text-[9px] bg-pink-950/60 border border-pink-500/40 text-pink-300 rounded font-medium truncate max-w-[140px]" 
              title={`Active Outfit: ${activeWardrobeEvent.title}`}
            >
              👗 {activeWardrobeEvent.title}
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-1 shrink-0">
            <span 
              className="px-1.5 py-0.5 text-[9px] bg-purple-950/40 border border-purple-500/30 text-purple-300/80 rounded font-medium" 
              title="No wardrobe outfit enabled (natural appearance / naked)"
            >
              🌿 No Wardrobe
            </span>
          </div>
        )}
      </div>

      {/* DUAL DROPDOWNS: WARDROBE & ACTION (Filtered by Global Group Selectors) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-1.5 p-1.5 bg-lavender-bg/70 rounded-lg border border-lavender-border/40">
        {/* Wardrobe Outfit Select within Active Group with Enabled Checkbox */}
        <div className="flex items-center gap-1.5 min-w-0">
          <label className="flex items-center gap-1 text-[10px] font-semibold text-pink-300 whitespace-nowrap shrink-0 cursor-pointer select-none" title={isWardrobeActive ? "Wardrobe enabled. Uncheck for no wardrobe." : "No wardrobe. Check to assign outfit."}>
            <input
              type="checkbox"
              checked={!!isWardrobeActive}
              onChange={handleToggleWardrobe}
              disabled={!isEnabled}
              className="w-3.5 h-3.5 rounded border-lavender-border text-pink-500 focus:ring-pink-500 bg-lavender-surface cursor-pointer accent-pink-500 shrink-0 disabled:opacity-40"
            />
            <Shirt size={11} className="text-pink-400" />
            <span>Outfit:</span>
          </label>
          <select
            value={selectValue}
            onChange={handleWardrobeSelectChange}
            disabled={!isEnabled || !isWardrobeActive}
            className={`flex-1 min-w-0 bg-lavender-surface border border-lavender-border text-lavender-text font-medium text-[11px] rounded px-1.5 py-0.5 focus:outline-none focus:border-lavender-accent truncate transition-opacity ${
              !isEnabled || !isWardrobeActive ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:border-lavender-accent/60'
            }`}
            title={
              !isWardrobeActive 
                ? "No wardrobe (naked). Check box to enable wardrobe." 
                : `Select ${singer.name}'s outfit from ${currentWardrobeGroup?.name || 'group'}`
            }
          >
            <option value="placeholder" disabled>
              {!isWardrobeActive ? '-- No Wardrobe --' : `-- Select Outfit (${currentWardrobeGroup?.name || 'Group'}) (${groupWardrobes.length}) --`}
            </option>
            {groupWardrobes.map(item => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
          </select>
        </div>

        {/* Action Select within Active Group */}
        <div className="flex items-center gap-1 min-w-0">
          <label className="text-[10px] font-semibold text-amber-300 flex items-center gap-0.5 whitespace-nowrap shrink-0">
            <Sparkles size={11} className="text-amber-400" />
            Action:
          </label>
          <select
            defaultValue="placeholder"
            onChange={handleActionSelectChange}
            disabled={!hasMainScene || isLoading}
            className={`flex-1 min-w-0 bg-lavender-surface border border-lavender-border text-lavender-text text-[11px] rounded px-1.5 py-0.5 focus:outline-none focus:border-lavender-accent truncate transition-opacity ${
              !hasMainScene || isLoading ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:border-lavender-accent/60'
            }`}
            title={
              !hasMainScene 
                ? 'Main scene background is required to select actions' 
                : (isLoading ? 'AI integration in progress...' : `Select an action from ${currentActionGroup?.name || 'group'}`)
            }
          >
            <option value="placeholder" disabled>
              {!hasMainScene ? '⚠️ Set main scene first' : `-- Select Action (${currentActionGroup?.name.split('&')[0].trim() || 'Group'}) --`}
            </option>
            {groupActions.map(act => (
              <option key={act.id} value={act.id}>
                {act.label} — {act.actionText}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Action & Wardrobe Prompt Textarea with Copy Icon */}
      <div className="relative">
        <textarea
          value={action}
          onChange={(e) => onActionChange(e.target.value)}
          placeholder={
            singer.id === 'senna'
              ? "Senna's prompt: [Action sentence]. [Wardrobe outfit sentence]..."
              : `${singer.name}'s prompt: [Action sentence]. [Wardrobe outfit sentence]...`
          }
          rows={3}
          className={`w-full bg-lavender-bg border border-lavender-border rounded p-2 text-xs text-lavender-text focus:outline-none focus:border-lavender-accent resize-y min-h-[82px] overflow-y-auto leading-relaxed pr-8 transition-opacity ${
            isEnabled ? 'opacity-100' : 'opacity-50'
          }`}
        />
        {action && (
          <button
            onClick={onCopy}
            className="absolute right-2 top-2 p-0.5 text-lavender-text/50 hover:text-lavender-accent transition-colors cursor-pointer"
            title="Copy character prompt text"
          >
            {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
          </button>
        )}
      </div>
    </div>
  );
};
