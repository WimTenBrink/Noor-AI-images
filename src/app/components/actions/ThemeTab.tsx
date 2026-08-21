import React from 'react';
import { 
  Compass, Sun, Smile, MapPin, Music, Sparkles, Lamp, CloudSun, Check, Copy, User
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
import { LOCATION_OPTIONS } from '../../../lib/singerActions';
import { 
  AGE_OPTIONS, 
  AgeOption, 
  getAgeById 
} from '../../../constants/characterAge';

interface LocationOptionItem {
  id: string;
  label: string;
  type: string;
  description: string;
}

interface ThemeTabProps {
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
  selectedCharacterAge: string;
  onSelectCharacterAge: (age: string) => void;
  isTomboy: boolean;
  onToggleIsTomboy: (val: boolean) => void;
}

export const ThemeTab: React.FC<ThemeTabProps> = ({
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
  selectedCharacterAge,
  onSelectCharacterAge,
  isTomboy,
  onToggleIsTomboy
}) => {
  const currentLights = getLightsForGroup(selectedLightGroup);
  const currentMoods = getMoodsForGroup(selectedMoodGroup);

  const currLoc = availableLocations.find(l => l.id === selectedLocation) || LOCATION_OPTIONS.find(l => l.id === selectedLocation);
  const currWeather = getWeatherById(selectedWeather);
  const currLight = getLightById(selectedLight, selectedLightGroup);
  const currMood = getMoodById(selectedMood, selectedMoodGroup);
  const currAge = getAgeById(selectedCharacterAge);

  return (
    <div className="bg-lavender-surface/30 p-4 rounded-xl border border-lavender-border/60 space-y-4">
      {/* SECTION HEADER & INSTRUMENTS TOGGLE */}
      <div className="flex items-center justify-between pb-2 border-b border-lavender-border/40 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-purple-300">
            <Compass size={16} />
          </div>
          <div>
            <h3 className="text-xs font-bold text-lavender-accent uppercase tracking-wider">
              Adventure, Location, Lighting & Mood
            </h3>
            <p className="text-[11px] text-lavender-text/70">
              Configure the environmental setting, weather condition, grouped lighting, and emotional atmosphere.
            </p>
          </div>
        </div>

        {/* INCLUDE INSTRUMENTS TOGGLE */}
        <label className="flex items-center gap-2 px-3 py-1.5 bg-lavender-bg border border-lavender-border/80 hover:border-indigo-500/50 rounded-lg cursor-pointer select-none text-xs font-semibold text-lavender-text transition-all">
          <input
            type="checkbox"
            checked={includeInstruments}
            onChange={(e) => onToggleIncludeInstruments(e.target.checked)}
            className="w-4 h-4 rounded border-lavender-border text-indigo-500 focus:ring-indigo-500 bg-lavender-surface cursor-pointer accent-indigo-500"
          />
          <Music size={14} className="text-indigo-400" />
          <span>Include Musical Instruments</span>
        </label>
      </div>

      {/* 2-ROW GRID FOR THEME CONTROLS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 1. ADVENTURE THEME */}
        <div className="bg-lavender-bg/70 p-3 rounded-lg border border-lavender-border/50 flex flex-col gap-1.5">
          <label className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
            <Compass size={14} className="text-purple-400" />
            1. Adventure Theme
          </label>
          <select
            value={selectedAdventure}
            onChange={(e) => onSelectAdventure(e.target.value)}
            className="w-full bg-lavender-surface border border-lavender-border rounded-md p-2 text-xs font-semibold text-lavender-accent focus:outline-none focus:border-lavender-accent cursor-pointer hover:border-lavender-accent/60"
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
        <div className="bg-lavender-bg/70 p-3 rounded-lg border border-lavender-border/50 flex flex-col gap-1.5">
          <label className="text-xs font-bold text-blue-300 flex items-center gap-1.5">
            <MapPin size={14} className="text-blue-400" />
            2. Location Setting
          </label>
          <select
            value={selectedLocation}
            onChange={(e) => onSelectLocation(e.target.value)}
            className="w-full bg-lavender-surface border border-lavender-border rounded-md p-2 text-xs font-medium text-lavender-text focus:outline-none focus:border-lavender-accent cursor-pointer hover:border-lavender-accent/60 truncate"
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

      {/* WEATHER & LIGHTING ROW (SPLIT INTO WEATHER, LIGHT GROUP, LIGHT SETTING) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
        {/* 3. WEATHER CONDITION LISTBOX */}
        <div className="bg-lavender-bg/70 p-3 rounded-lg border border-lavender-border/50 flex flex-col gap-1.5">
          <label className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
            <CloudSun size={14} className="text-amber-400" />
            3. Weather Condition
          </label>
          <select
            value={selectedWeather}
            onChange={(e) => onSelectWeather(e.target.value)}
            className="w-full bg-lavender-surface border border-lavender-border rounded-md p-2 text-xs text-lavender-text focus:outline-none focus:border-lavender-accent cursor-pointer hover:border-lavender-accent/60"
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

        {/* 4A. LIGHT GROUP SELECTOR */}
        <div className="bg-lavender-bg/70 p-3 rounded-lg border border-lavender-border/50 flex flex-col gap-1.5">
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
            className="w-full bg-lavender-surface border border-lavender-border rounded-md p-2 text-xs font-semibold text-lavender-accent focus:outline-none focus:border-lavender-accent cursor-pointer hover:border-lavender-accent/60"
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

        {/* 4B. MATCHING LIGHT SETTING SELECTOR */}
        <div className="bg-lavender-bg/70 p-3 rounded-lg border border-lavender-border/50 flex flex-col gap-1.5">
          <label className="text-xs font-bold text-amber-200 flex items-center gap-1.5">
            <Sun size={14} className="text-amber-300" />
            4b. Light Setting
          </label>
          <select
            value={selectedLight}
            onChange={(e) => onSelectLight(e.target.value)}
            className="w-full bg-lavender-surface border border-lavender-border rounded-md p-2 text-xs text-lavender-text focus:outline-none focus:border-lavender-accent cursor-pointer hover:border-lavender-accent/60 truncate"
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

      {/* MOOD GROUP & MATCHING MOOD SETTING ROW */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
        {/* 5A. MOOD GROUP SELECTOR */}
        <div className="bg-lavender-bg/70 p-3 rounded-lg border border-lavender-border/50 flex flex-col gap-1.5">
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
            className="w-full bg-lavender-surface border border-lavender-border rounded-md p-2 text-xs font-semibold text-lavender-accent focus:outline-none focus:border-lavender-accent cursor-pointer hover:border-lavender-accent/60"
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

        {/* 5B. MATCHING MOOD SETTING SELECTOR */}
        <div className="bg-lavender-bg/70 p-3 rounded-lg border border-lavender-border/50 flex flex-col gap-1.5">
          <label className="text-xs font-bold text-pink-200 flex items-center gap-1.5">
            <Sparkles size={14} className="text-pink-300" />
            5b. Scene Mood Setting
          </label>
          <select
            value={selectedMood}
            onChange={(e) => onSelectMood(e.target.value)}
            className="w-full bg-lavender-surface border border-lavender-border rounded-md p-2 text-xs text-lavender-text focus:outline-none focus:border-lavender-accent cursor-pointer hover:border-lavender-accent/60 truncate"
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

      {/* ACTIVE SUMMARY CHIPS */}
      <div className="p-2.5 bg-lavender-bg/90 rounded-lg border border-lavender-border/40 flex flex-wrap items-center gap-2 text-xs">
        <span className="text-[11px] font-bold text-lavender-text/70 uppercase">Active Atmosphere:</span>
        {currLoc && currLoc.id !== 'none' && (
          <span className="px-2.5 py-1 bg-indigo-950/50 border border-indigo-500/40 rounded-full text-indigo-200 text-[11px] font-medium flex items-center gap-1" title={currLoc.description}>
            <MapPin size={11} className="text-indigo-400" />
            {currLoc.label.split('(')[0].trim()}
          </span>
        )}
        {currWeather && currWeather.id !== 'none' && (
          <span className="px-2.5 py-1 bg-amber-950/50 border border-amber-500/40 rounded-full text-amber-200 text-[11px] font-medium flex items-center gap-1" title={currWeather.description}>
            <CloudSun size={11} className="text-amber-400" />
            {currWeather.label}
          </span>
        )}
        {currLight && currLight.id !== 'none' && (
          <span className="px-2.5 py-1 bg-yellow-950/50 border border-yellow-500/40 rounded-full text-yellow-200 text-[11px] font-medium flex items-center gap-1" title={currLight.description}>
            <Sun size={11} className="text-yellow-400" />
            {currLight.label}
          </span>
        )}
        {currMood && currMood.id !== 'none' && (
          <span className="px-2.5 py-1 bg-pink-950/50 border border-pink-500/40 rounded-full text-pink-200 text-[11px] font-medium flex items-center gap-1" title={currMood.description}>
            <Smile size={11} className="text-pink-400" />
            {currMood.label}
          </span>
        )}
        {includeInstruments && (
          <span className="px-2.5 py-1 bg-purple-950/50 border border-purple-500/40 rounded-full text-purple-200 text-[11px] font-medium flex items-center gap-1">
            <Music size={11} className="text-purple-400" />
            Instruments Included
          </span>
        )}
        <span className="px-2.5 py-1 bg-amber-950/50 border border-amber-500/40 rounded-full text-amber-200 text-[11px] font-medium flex items-center gap-1" title={currAge.description}>
          <User size={11} className="text-amber-400" />
          Age: {currAge.label} ({isTomboy ? 'Tomboy' : 'Feminine'})
        </span>
      </div>
    </div>
  );
};
