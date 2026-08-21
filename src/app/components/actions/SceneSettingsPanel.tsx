import React from 'react';
import { 
  Compass, Sun, Smile, MapPin, Music, Wand2, Dices, Sparkles, Copy, Check, RefreshCw, Shirt, Layers
} from 'lucide-react';
import { ADVENTURE_CATEGORIES } from '../../../constants/adventuresData';
import { WEATHER_OPTIONS, MOOD_OPTIONS, LOCATION_OPTIONS } from '../../../lib/singerActions';
import { WARDROBE_GROUPS, WardrobeGroup } from '../../../constants/wardrobeGroups';
import { ACTION_GROUPS, ActionGroup } from '../../../constants/actionGroups';

interface LocationOptionItem {
  id: string;
  label: string;
  type: string;
  description: string;
}

interface SceneSettingsPanelProps {
  selectedAdventure: string;
  onSelectAdventure: (adv: string) => void;
  selectedWeather: string;
  onSelectWeather: (weather: string) => void;
  selectedMood: string;
  onSelectMood: (mood: string) => void;
  selectedLocation: string;
  onSelectLocation: (loc: string) => void;
  availableLocations: LocationOptionItem[];
  includeInstruments: boolean;
  onToggleIncludeInstruments: (enabled: boolean) => void;
  mainSceneText: string;
  onChangeMainSceneText: (text: string) => void;
  onRandomizeMainScene: () => void;
  onRandomizeAllActions: () => void;
  loadingScene: boolean;
  loadingAll: boolean;
  copiedMainScene: boolean;
  onCopyMainScene: () => void;
  selectedWardrobeGroup: string;
  onSelectWardrobeGroup: (group: string) => void;
  selectedActionGroup: string;
  onSelectActionGroup: (group: string) => void;
}

export const SceneSettingsPanel: React.FC<SceneSettingsPanelProps> = ({
  selectedAdventure,
  onSelectAdventure,
  selectedWeather,
  onSelectWeather,
  selectedMood,
  onSelectMood,
  selectedLocation,
  onSelectLocation,
  availableLocations,
  includeInstruments,
  onToggleIncludeInstruments,
  mainSceneText,
  onChangeMainSceneText,
  onRandomizeMainScene,
  onRandomizeAllActions,
  loadingScene,
  loadingAll,
  copiedMainScene,
  onCopyMainScene,
  selectedWardrobeGroup,
  onSelectWardrobeGroup,
  selectedActionGroup,
  onSelectActionGroup
}) => {
  const currentActionGroup = ACTION_GROUPS.find(g => g.id === selectedActionGroup);
  const currentWardrobeGroup = WARDROBE_GROUPS.find(g => g.id === selectedWardrobeGroup);
  const currLoc = availableLocations.find(l => l.id === selectedLocation) || LOCATION_OPTIONS.find(l => l.id === selectedLocation);
  const currWeather = WEATHER_OPTIONS.find(w => w.id === selectedWeather);
  const currMood = MOOD_OPTIONS.find(m => m.id === selectedMood);

  return (
    <div className="bg-lavender-surface/30 p-2.5 rounded-xl border border-lavender-border/60 space-y-2">
      {/* 4-COLUMN COMPACT TOP GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {/* ADVENTURE THEME SELECTOR */}
        <div className="flex flex-col gap-0.5">
          <label className="text-[11px] font-bold text-lavender-accent flex items-center gap-1">
            <Compass size={12} className="text-purple-400" />
            Adventure Theme:
          </label>
          <select
            value={selectedAdventure}
            onChange={(e) => onSelectAdventure(e.target.value)}
            className="bg-lavender-bg border border-lavender-border rounded p-1.5 text-xs font-semibold text-lavender-accent focus:outline-none focus:border-lavender-accent cursor-pointer truncate"
          >
            {ADVENTURE_CATEGORIES.map(adv => (
              <option key={adv.id} value={adv.id}>
                {adv.label}
              </option>
            ))}
          </select>
        </div>

        {/* LOCATION SELECTOR */}
        <div className="flex flex-col gap-0.5">
          <label className="text-[11px] font-bold text-lavender-accent flex items-center gap-1">
            <MapPin size={12} className="text-blue-400" />
            Location Setting:
          </label>
          <select
            value={selectedLocation}
            onChange={(e) => onSelectLocation(e.target.value)}
            className="bg-lavender-bg border border-lavender-border rounded p-1.5 text-xs font-medium text-lavender-text focus:outline-none focus:border-lavender-accent cursor-pointer truncate"
          >
            {availableLocations.map(loc => (
              <option key={loc.id} value={loc.id}>{loc.label}</option>
            ))}
          </select>
        </div>

        {/* WEATHER SELECTOR */}
        <div className="flex flex-col gap-0.5">
          <label className="text-[11px] font-bold text-lavender-accent flex items-center gap-1">
            <Sun size={12} className="text-amber-400" />
            Weather & Light:
          </label>
          <select
            value={selectedWeather}
            onChange={(e) => onSelectWeather(e.target.value)}
            className="bg-lavender-bg border border-lavender-border rounded p-1.5 text-xs text-lavender-text focus:outline-none focus:border-lavender-accent cursor-pointer truncate"
          >
            {WEATHER_OPTIONS.map(w => (
              <option key={w.id} value={w.id}>{w.label}</option>
            ))}
          </select>
        </div>

        {/* MOOD SELECTOR */}
        <div className="flex flex-col gap-0.5">
          <label className="text-[11px] font-bold text-lavender-accent flex items-center gap-1">
            <Smile size={12} className="text-pink-400" />
            Scene Mood:
          </label>
          <select
            value={selectedMood}
            onChange={(e) => onSelectMood(e.target.value)}
            className="bg-lavender-bg border border-lavender-border rounded p-1.5 text-xs text-lavender-text focus:outline-none focus:border-lavender-accent cursor-pointer truncate"
          >
            {MOOD_OPTIONS.map(m => (
              <option key={m.id} value={m.id}>{m.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* COMPACT ACTIVE SETTING TAGS (if custom set) */}
      {(currLoc?.id !== 'none' || currWeather?.id !== 'none' || currMood?.id !== 'none') && (
        <div className="flex flex-wrap gap-1.5 text-[10px] text-lavender-text/80 pt-0.5">
          {currLoc && currLoc.id !== 'none' && (
            <span className="px-2 py-0.5 bg-indigo-950/40 border border-indigo-500/30 rounded text-indigo-200 truncate max-w-[280px]" title={currLoc.description}>
              📍 {currLoc.label.split('(')[0].trim()}
            </span>
          )}
          {currWeather && currWeather.id !== 'none' && (
            <span className="px-2 py-0.5 bg-amber-950/40 border border-amber-500/30 rounded text-amber-200 truncate max-w-[220px]" title={currWeather.description}>
              ☀️ {currWeather.label}
            </span>
          )}
          {currMood && currMood.id !== 'none' && (
            <span className="px-2 py-0.5 bg-pink-950/40 border border-pink-500/30 rounded text-pink-200 truncate max-w-[220px]" title={currMood.description}>
              ✨ {currMood.label}
            </span>
          )}
        </div>
      )}

      {/* MAIN SCENE & TOOLBAR */}
      <div className="space-y-1">
        <div className="flex items-center justify-between flex-wrap gap-1.5">
          <div className="flex items-center gap-3">
            <label className="text-[11px] font-bold text-lavender-accent flex items-center gap-1">
              <Wand2 size={12} className="text-purple-400" />
              Main Scene & Background:
            </label>
            <label className="flex items-center gap-1.5 cursor-pointer select-none text-[11px] font-medium text-lavender-text/80 hover:text-lavender-accent transition-colors">
              <input
                type="checkbox"
                checked={includeInstruments}
                onChange={(e) => onToggleIncludeInstruments(e.target.checked)}
                className="w-3.5 h-3.5 rounded border-lavender-border text-indigo-500 focus:ring-indigo-500 bg-lavender-bg cursor-pointer accent-indigo-500"
              />
              <Music size={11} className="text-indigo-400" />
              <span>Instruments</span>
            </label>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={onRandomizeMainScene}
              disabled={loadingScene}
              className="px-2 py-0.5 text-[11px] font-bold bg-purple-900/40 hover:bg-purple-800/60 border border-purple-500/40 text-purple-200 rounded flex items-center gap-1 transition-all disabled:opacity-50 cursor-pointer"
              title="Use AI Job to randomize main background scene"
            >
              {loadingScene ? (
                <RefreshCw size={11} className="animate-spin text-purple-300" />
              ) : (
                <Dices size={11} className="text-purple-300" />
              )}
              Randomize Scene
            </button>

            <button
              onClick={onRandomizeAllActions}
              disabled={loadingAll}
              className="px-2 py-0.5 text-[11px] font-bold bg-indigo-900/40 hover:bg-indigo-800/60 border border-indigo-500/40 text-indigo-200 rounded flex items-center gap-1 transition-all disabled:opacity-50 cursor-pointer"
              title="Use AI Job to generate complementary actions for all enabled characters"
            >
              {loadingAll ? (
                <RefreshCw size={11} className="animate-spin text-indigo-300" />
              ) : (
                <Sparkles size={11} className="text-indigo-300" />
              )}
              Randomize All
            </button>
          </div>
        </div>

        <div className="relative">
          <textarea
            value={typeof mainSceneText === 'string' ? mainSceneText : (mainSceneText ? String(mainSceneText) : '')}
            onChange={(e) => onChangeMainSceneText(e.target.value)}
            placeholder="Describe the overall background scene elements (e.g., instruments, rustic barn walls, coffee cups, weather)..."
            rows={3}
            className="w-full bg-lavender-bg border border-lavender-border rounded p-2.5 text-xs text-lavender-text focus:outline-none focus:border-lavender-accent resize-y min-h-[82px] overflow-y-auto leading-relaxed pr-8"
          />
          {mainSceneText && (
            <button
              onClick={onCopyMainScene}
              className="absolute right-2 top-2 p-0.5 text-lavender-text/50 hover:text-lavender-accent transition-colors cursor-pointer"
              title="Copy main scene text"
            >
              {copiedMainScene ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
            </button>
          )}
        </div>
      </div>

      {/* COMPACT GLOBAL CHARACTER DROPDOWN GROUPS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-lavender-border/40">
        {/* WARDROBE GROUP SELECTOR */}
        <div className="flex items-center gap-1.5 p-1.5 bg-lavender-bg/70 rounded-lg border border-lavender-border/40">
          <label className="text-[11px] font-bold text-pink-300 flex items-center gap-1 whitespace-nowrap shrink-0">
            <Shirt size={12} className="text-pink-400" />
            Wardrobe Group:
          </label>
          <select
            value={selectedWardrobeGroup}
            onChange={(e) => onSelectWardrobeGroup(e.target.value)}
            className="w-full bg-lavender-surface border border-lavender-border text-lavender-accent text-xs font-semibold rounded p-1 focus:outline-none focus:border-lavender-accent cursor-pointer hover:border-lavender-accent/60 truncate"
            title="Choose a wardrobe group to populate character outfit dropdowns"
          >
            {WARDROBE_GROUPS.map((group: WardrobeGroup) => (
              <option key={group.id} value={group.id}>
                {group.icon} {group.name}
              </option>
            ))}
          </select>
        </div>

        {/* ACTION GROUP SELECTOR */}
        <div className="flex items-center gap-1.5 p-1.5 bg-lavender-bg/70 rounded-lg border border-lavender-border/40">
          <label className="text-[11px] font-bold text-purple-300 flex items-center gap-1 whitespace-nowrap shrink-0">
            <Sparkles size={12} className="text-purple-400" />
            Action Group:
          </label>
          <select
            value={selectedActionGroup}
            onChange={(e) => onSelectActionGroup(e.target.value)}
            className="w-full bg-lavender-surface border border-lavender-border text-lavender-accent text-xs font-semibold rounded p-1 focus:outline-none focus:border-lavender-accent cursor-pointer hover:border-lavender-accent/60 truncate"
            title="Choose an action group to populate character action dropdowns"
          >
            {ACTION_GROUPS.map((group: ActionGroup) => (
              <option key={group.id} value={group.id}>
                {group.icon} {group.name} ({group.actions.length})
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
