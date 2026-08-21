import React from 'react';
import { 
  Compass, MapPin, CloudSun, Lamp, Sun, Smile, Sparkles, Music, Users, Check
} from 'lucide-react';
import { ADVENTURE_CATEGORIES } from '../../../constants/adventuresData';
import { 
  WEATHER_CONDITIONS, 
  LIGHT_GROUPS, 
  MOOD_GROUPS, 
  getLightsForGroup, 
  getMoodsForGroup,
  getLightById,
  getMoodById,
  getWeatherById
} from '../../../constants/sceneOptions';
import { SINGERS_DETAILED } from '../../../constants/singersDetailed';
import { LOCATION_OPTIONS } from '../../../lib/singerActions';

export interface LocationOptionItem {
  id: string;
  label: string;
  type: string;
  description: string;
}

interface Step1ThemeAndSettingProps {
  selectedAdventure: string;
  onSelectAdventure: (adv: string) => void;
  selectedLocation: string;
  onSelectLocation: (loc: string) => void;
  availableLocations: LocationOptionItem[];
  selectedWeather: string;
  onSelectWeather: (weather: string) => void;
  selectedLightGroup: string;
  onSelectLightGroup: (group: string) => void;
  selectedLight: string;
  onSelectLight: (light: string) => void;
  selectedMoodGroup: string;
  onSelectMoodGroup: (group: string) => void;
  selectedMood: string;
  onSelectMood: (mood: string) => void;
  includeInstruments: boolean;
  onToggleIncludeInstruments: (enabled: boolean) => void;
  enabledChars: Record<string, boolean>;
  onToggleChar: (singerId: string) => void;
}

const SINGER_BADGES: Record<string, { avatar: string; border: string; bg: string; text: string }> = {
  miranda: { avatar: '🎸', border: 'border-purple-500/40', bg: 'bg-purple-950/30', text: 'text-purple-300' },
  annelies: { avatar: '🎻', border: 'border-indigo-500/40', bg: 'bg-indigo-950/30', text: 'text-indigo-300' },
  fannie: { avatar: '🥁', border: 'border-rose-500/40', bg: 'bg-rose-950/30', text: 'text-rose-300' },
  emma: { avatar: '🎹', border: 'border-amber-500/40', bg: 'bg-amber-950/30', text: 'text-amber-300' },
  senna: { avatar: '🎙️', border: 'border-emerald-500/40', bg: 'bg-emerald-950/30', text: 'text-emerald-300' }
};

export const Step1ThemeAndSetting: React.FC<Step1ThemeAndSettingProps> = ({
  selectedAdventure,
  onSelectAdventure,
  selectedLocation,
  onSelectLocation,
  availableLocations,
  selectedWeather,
  onSelectWeather,
  selectedLightGroup,
  onSelectLightGroup,
  selectedLight,
  onSelectLight,
  selectedMoodGroup,
  onSelectMoodGroup,
  selectedMood,
  onSelectMood,
  includeInstruments,
  onToggleIncludeInstruments,
  enabledChars,
  onToggleChar
}) => {
  const currentLights = getLightsForGroup(selectedLightGroup);
  const currentMoods = getMoodsForGroup(selectedMoodGroup);

  const currLoc = availableLocations.find(l => l.id === selectedLocation) || LOCATION_OPTIONS.find(l => l.id === selectedLocation);
  const currWeather = getWeatherById(selectedWeather);
  const currLight = getLightById(selectedLight, selectedLightGroup);
  const currMood = getMoodById(selectedMood, selectedMoodGroup);
  const enabledCount = Object.values(enabledChars).filter(Boolean).length;

  return (
    <div className="flex-1 flex flex-col space-y-4 min-h-0 overflow-y-auto pr-1">
      {/* HEADER BAR */}
      <div className="p-3 bg-lavender-surface/50 border border-lavender-border/70 rounded-xl flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-300">
            <Compass size={18} />
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-bold text-lavender-accent uppercase tracking-wider">
              Step 1 of 6: Theme &amp; Environmental Setting
            </h3>
            <p className="text-[11px] text-lavender-text/70">
              Configure the theme, location, lighting, atmosphere, and select which characters are participating.
            </p>
          </div>
        </div>

        {/* INSTRUMENTS TOGGLE */}
        <label className="flex items-center gap-2 px-3 py-1.5 bg-lavender-bg border border-lavender-border/80 hover:border-indigo-500/50 rounded-lg cursor-pointer select-none text-xs font-semibold text-lavender-text transition-all">
          <input
            type="checkbox"
            checked={includeInstruments}
            onChange={(e) => onToggleIncludeInstruments(e.target.checked)}
            className="w-4 h-4 rounded border-lavender-border text-indigo-500 focus:ring-indigo-500 bg-lavender-surface cursor-pointer accent-indigo-500"
          />
          <Music size={14} className="text-indigo-400" />
          <span>Musical Instruments</span>
        </label>
      </div>

      {/* 2-COLUMN GRID FOR SETTINGS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {/* 1. ADVENTURE THEME */}
        <div className="bg-lavender-surface/30 p-3 rounded-xl border border-lavender-border/50 flex flex-col gap-1.5">
          <label className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
            <Compass size={14} className="text-purple-400" />
            1. Adventure Theme
          </label>
          <select
            value={selectedAdventure}
            onChange={(e) => onSelectAdventure(e.target.value)}
            className="w-full bg-lavender-bg border border-lavender-border rounded-lg p-2 text-xs font-semibold text-lavender-accent focus:outline-none focus:border-lavender-accent cursor-pointer hover:border-lavender-accent/60"
          >
            {ADVENTURE_CATEGORIES.map(adv => (
              <option key={adv.id} value={adv.id}>
                {adv.label}
              </option>
            ))}
          </select>
          <span className="text-[10px] text-lavender-text/60 italic">
            Sets the adventure narrative context and default wardrobe collection.
          </span>
        </div>

        {/* 2. LOCATION SETTING */}
        <div className="bg-lavender-surface/30 p-3 rounded-xl border border-lavender-border/50 flex flex-col gap-1.5">
          <label className="text-xs font-bold text-blue-300 flex items-center gap-1.5">
            <MapPin size={14} className="text-blue-400" />
            2. Location Setting
          </label>
          <select
            value={selectedLocation}
            onChange={(e) => onSelectLocation(e.target.value)}
            className="w-full bg-lavender-bg border border-lavender-border rounded-lg p-2 text-xs font-medium text-lavender-text focus:outline-none focus:border-lavender-accent cursor-pointer hover:border-lavender-accent/60 truncate"
          >
            {availableLocations.map(loc => (
              <option key={loc.id} value={loc.id}>
                {loc.label}
              </option>
            ))}
          </select>
          <span className="text-[10px] text-lavender-text/60 truncate">
            {currLoc?.description || 'Pick a specific scenery location in this adventure.'}
          </span>
        </div>
      </div>

      {/* WEATHER & LIGHTING ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* 3. WEATHER CONDITION */}
        <div className="bg-lavender-surface/30 p-3 rounded-xl border border-lavender-border/50 flex flex-col gap-1.5">
          <label className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
            <CloudSun size={14} className="text-amber-400" />
            3. Weather Condition
          </label>
          <select
            value={selectedWeather}
            onChange={(e) => onSelectWeather(e.target.value)}
            className="w-full bg-lavender-bg border border-lavender-border rounded-lg p-2 text-xs text-lavender-text focus:outline-none focus:border-lavender-accent cursor-pointer hover:border-lavender-accent/60"
          >
            {WEATHER_CONDITIONS.map(w => (
              <option key={w.id} value={w.id}>
                {w.icon} {w.label}
              </option>
            ))}
          </select>
          <span className="text-[10px] text-lavender-text/60 truncate" title={currWeather?.description}>
            {currWeather?.description || 'Atmospheric outdoor weather condition'}
          </span>
        </div>

        {/* 4A. LIGHT GROUP */}
        <div className="bg-lavender-surface/30 p-3 rounded-xl border border-lavender-border/50 flex flex-col gap-1.5">
          <label className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
            <Lamp size={14} className="text-amber-400" />
            4a. Light Group
          </label>
          <select
            value={selectedLightGroup}
            onChange={(e) => {
              const newGroup = e.target.value;
              onSelectLightGroup(newGroup);
              const available = getLightsForGroup(newGroup);
              if (available.length > 0) {
                onSelectLight(available[0].id);
              }
            }}
            className="w-full bg-lavender-bg border border-lavender-border rounded-lg p-2 text-xs font-semibold text-lavender-accent focus:outline-none focus:border-lavender-accent cursor-pointer hover:border-lavender-accent/60"
          >
            {LIGHT_GROUPS.map(group => (
              <option key={group.id} value={group.id}>
                {group.icon} {group.name}
              </option>
            ))}
          </select>
          <span className="text-[10px] text-lavender-text/60 truncate">
            {LIGHT_GROUPS.find(g => g.id === selectedLightGroup)?.description || 'Lighting category'}
          </span>
        </div>

        {/* 4B. LIGHT SETTING */}
        <div className="bg-lavender-surface/30 p-3 rounded-xl border border-lavender-border/50 flex flex-col gap-1.5">
          <label className="text-xs font-bold text-amber-200 flex items-center gap-1.5">
            <Sun size={14} className="text-amber-300" />
            4b. Light Setting
          </label>
          <select
            value={selectedLight}
            onChange={(e) => onSelectLight(e.target.value)}
            className="w-full bg-lavender-bg border border-lavender-border rounded-lg p-2 text-xs text-lavender-text focus:outline-none focus:border-lavender-accent cursor-pointer hover:border-lavender-accent/60 truncate"
          >
            {currentLights.map(light => (
              <option key={light.id} value={light.id}>
                {light.label}
              </option>
            ))}
          </select>
          <span className="text-[10px] text-lavender-text/60 truncate" title={currLight?.description}>
            {currLight?.description || 'Selected illumination quality'}
          </span>
        </div>
      </div>

      {/* MOOD GROUP & MOOD SETTING */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* 5A. MOOD GROUP */}
        <div className="bg-lavender-surface/30 p-3 rounded-xl border border-lavender-border/50 flex flex-col gap-1.5">
          <label className="text-xs font-bold text-pink-300 flex items-center gap-1.5">
            <Smile size={14} className="text-pink-400" />
            5a. Mood Group
          </label>
          <select
            value={selectedMoodGroup}
            onChange={(e) => {
              const newGroup = e.target.value;
              onSelectMoodGroup(newGroup);
              const available = getMoodsForGroup(newGroup);
              if (available.length > 0) {
                onSelectMood(available[0].id);
              }
            }}
            className="w-full bg-lavender-bg border border-lavender-border rounded-lg p-2 text-xs font-semibold text-lavender-accent focus:outline-none focus:border-lavender-accent cursor-pointer hover:border-lavender-accent/60"
          >
            {MOOD_GROUPS.map(group => (
              <option key={group.id} value={group.id}>
                {group.icon} {group.name}
              </option>
            ))}
          </select>
          <span className="text-[10px] text-lavender-text/60 truncate">
            {MOOD_GROUPS.find(g => g.id === selectedMoodGroup)?.description || 'Emotional atmosphere category'}
          </span>
        </div>

        {/* 5B. MOOD SETTING */}
        <div className="bg-lavender-surface/30 p-3 rounded-xl border border-lavender-border/50 flex flex-col gap-1.5">
          <label className="text-xs font-bold text-pink-200 flex items-center gap-1.5">
            <Sparkles size={14} className="text-pink-300" />
            5b. Scene Mood Setting
          </label>
          <select
            value={selectedMood}
            onChange={(e) => onSelectMood(e.target.value)}
            className="w-full bg-lavender-bg border border-lavender-border rounded-lg p-2 text-xs text-lavender-text focus:outline-none focus:border-lavender-accent cursor-pointer hover:border-lavender-accent/60 truncate"
          >
            {currentMoods.map(mood => (
              <option key={mood.id} value={mood.id}>
                {mood.label}
              </option>
            ))}
          </select>
          <span className="text-[10px] text-lavender-text/60 truncate" title={currMood?.description}>
            {currMood?.description || 'Active mood description'}
          </span>
        </div>
      </div>

      {/* CHARACTER PARTICIPATION SELECTION (5 CHARACTERS WITH CHECKBOXES) */}
      <div className="bg-lavender-surface/40 p-4 rounded-xl border border-lavender-border/70 space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-lavender-border/40">
          <div className="flex items-center gap-2">
            <Users size={16} className="text-lavender-accent" />
            <h4 className="text-xs font-bold text-lavender-accent uppercase tracking-wider">
              Participating Characters ({enabledCount}/5 Enabled)
            </h4>
          </div>
          <span className="text-[11px] text-lavender-text/70">
            Check characters to include in the scene, wardrobe, and action pages.
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2.5">
          {SINGERS_DETAILED.map(singer => {
            const isEnabled = !!enabledChars[singer.id];
            const badge = SINGER_BADGES[singer.id] || { avatar: '👤', border: 'border-lavender-border', bg: 'bg-lavender-surface', text: 'text-lavender-text' };

            return (
              <div
                key={singer.id}
                onClick={() => onToggleChar(singer.id)}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex flex-col justify-between gap-2 select-none ${
                  isEnabled
                    ? `bg-lavender-surface/80 ${badge.border} shadow-sm ring-1 ring-purple-500/30`
                    : 'bg-lavender-bg/40 border-lavender-border/40 opacity-60 hover:opacity-80'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl p-1 rounded-lg bg-lavender-bg border border-lavender-border/60">{badge.avatar}</span>
                  <input
                    type="checkbox"
                    checked={isEnabled}
                    onChange={() => {}}
                    className="w-4 h-4 rounded border-lavender-border text-emerald-500 focus:ring-emerald-500 bg-lavender-bg cursor-pointer accent-emerald-500 pointer-events-none"
                  />
                </div>

                <div>
                  <div className={`text-xs font-bold ${badge.text}`}>
                    {singer.name}
                  </div>
                  <div className="text-[10px] text-lavender-text/70 font-medium">
                    {singer.role}
                  </div>
                </div>

                <div className="pt-1 border-t border-lavender-border/30 text-[10px] font-semibold flex items-center gap-1">
                  {isEnabled ? (
                    <span className="text-emerald-300 flex items-center gap-1">
                      <Check size={11} /> Enabled
                    </span>
                  ) : (
                    <span className="text-lavender-text/50">Disabled</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
