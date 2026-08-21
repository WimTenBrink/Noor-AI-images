import React, { useMemo } from 'react';
import { 
  Sun, Moon, CloudSun, Music, Check, Sparkles, Compass
} from 'lucide-react';
import { 
  WEATHER_CONDITIONS,
  LIGHT_GROUPS,
  MOOD_GROUPS,
  getLightsForGroup,
  getMoodsForGroup,
  getWeatherById,
  getLightById,
  getMoodById,
  WeatherOption,
  LightGroup,
  MoodGroup
} from '../../../constants/sceneOptions';

interface Step3ThemeProps {
  selectedWeather: string;
  onSelectWeather: (weatherId: string) => void;
  selectedLightGroup: string;
  onSelectLightGroup: (groupId: string) => void;
  selectedLight: string;
  onSelectLight: (lightId: string) => void;
  selectedMoodGroup: string;
  onSelectMoodGroup: (groupId: string) => void;
  selectedMood: string;
  onSelectMood: (moodId: string) => void;
  includeInstruments: boolean;
  onToggleIncludeInstruments: (include: boolean) => void;
}

export const Step3Theme: React.FC<Step3ThemeProps> = ({
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
  onToggleIncludeInstruments
}) => {
  // Dynamically sort weather options at runtime
  const sortedWeatherOptions = useMemo(() => {
    return [...WEATHER_CONDITIONS].sort((a, b) => {
      if (a.id === 'none') return -1;
      if (b.id === 'none') return 1;
      return a.label.localeCompare(b.label);
    });
  }, []);

  // Dynamically sort light groups at runtime
  const sortedLightGroups = useMemo(() => {
    return [...LIGHT_GROUPS].sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  // Dynamically sort lights within the selected group at runtime
  const sortedLightsInGroup = useMemo(() => {
    const rawLights = getLightsForGroup(selectedLightGroup);
    return [...rawLights].sort((a, b) => {
      if (a.id === 'none') return -1;
      if (b.id === 'none') return 1;
      return a.label.localeCompare(b.label);
    });
  }, [selectedLightGroup]);

  // Dynamically sort mood groups at runtime
  const sortedMoodGroups = useMemo(() => {
    return [...MOOD_GROUPS].sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  // Dynamically sort moods within the selected group at runtime
  const sortedMoodsInGroup = useMemo(() => {
    const rawMoods = getMoodsForGroup(selectedMoodGroup);
    return [...rawMoods].sort((a, b) => {
      if (a.id === 'none') return -1;
      if (b.id === 'none') return 1;
      return a.label.localeCompare(b.label);
    });
  }, [selectedMoodGroup]);

  const activeWeather = getWeatherById(selectedWeather);
  const activeLight = getLightById(selectedLight, selectedLightGroup);
  const activeMood = getMoodById(selectedMood, selectedMoodGroup);

  return (
    <div className="flex-1 flex flex-col space-y-4 min-h-0 overflow-y-auto pr-1">
      {/* HEADER BAR */}
      <div className="p-3 bg-lavender-surface/50 border border-lavender-border/70 rounded-xl flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-950/60 border border-amber-500/40 flex items-center justify-center text-amber-300">
            <Sun size={18} />
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-bold text-lavender-accent uppercase tracking-wider">
              Atmospheric Theme &amp; Environment
            </h3>
            <p className="text-[11px] text-lavender-text/70">
              Fine-tune weather conditions, lighting atmosphere, mood tones, and musical props.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {/* 1. WEATHER CONDITIONS */}
        <div className="bg-lavender-surface/40 p-3.5 rounded-xl border border-lavender-border/60 space-y-2 flex flex-col justify-between">
          <div className="space-y-2">
            <label className="text-xs font-bold text-sky-300 flex items-center gap-1.5">
              <CloudSun size={14} className="text-sky-400" />
              1. Weather Condition
            </label>

            <select
              value={selectedWeather}
              onChange={(e) => onSelectWeather(e.target.value)}
              className="w-full bg-lavender-bg border border-lavender-border rounded-lg p-2 text-xs font-semibold text-lavender-accent focus:outline-none focus:border-sky-400 cursor-pointer shadow-sm hover:border-sky-400/60"
            >
              {sortedWeatherOptions.map(w => (
                <option key={w.id} value={w.id}>
                  {w.icon} {w.label}
                </option>
              ))}
            </select>
          </div>

          <div className="p-2 bg-sky-950/20 border border-sky-500/30 rounded-lg text-[10px] text-sky-200/80 min-h-[38px] flex items-center">
            {activeWeather?.description || 'Natural ambient outdoor atmospheric weather'}
          </div>
        </div>

        {/* 2. LIGHTING (GROUP + PRESET) */}
        <div className="bg-lavender-surface/40 p-3.5 rounded-xl border border-lavender-border/60 space-y-2 flex flex-col justify-between">
          <div className="space-y-2">
            <label className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
              <Sun size={14} className="text-amber-400" />
              2. Lighting Atmosphere
            </label>

            <div className="space-y-1.5">
              {/* LIGHT GROUP SELECTOR */}
              <select
                value={selectedLightGroup}
                onChange={(e) => {
                  onSelectLightGroup(e.target.value);
                  onSelectLight('none');
                }}
                className="w-full bg-lavender-bg border border-lavender-border rounded-lg p-1.5 text-xs font-semibold text-amber-200 focus:outline-none focus:border-amber-400 cursor-pointer shadow-sm"
              >
                {sortedLightGroups.map(lg => (
                  <option key={lg.id} value={lg.id}>
                    {lg.icon} {lg.name}
                  </option>
                ))}
              </select>

              {/* SPECIFIC LIGHT PRESET */}
              <select
                value={selectedLight}
                onChange={(e) => onSelectLight(e.target.value)}
                className="w-full bg-lavender-bg border border-lavender-border rounded-lg p-2 text-xs font-medium text-lavender-text focus:outline-none focus:border-amber-400 cursor-pointer hover:border-amber-400/60 truncate"
              >
                {sortedLightsInGroup.map(l => (
                  <option key={l.id} value={l.id}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="p-2 bg-amber-950/20 border border-amber-500/30 rounded-lg text-[10px] text-amber-200/80 min-h-[38px] flex items-center">
            {activeLight?.description || 'Standard natural balanced daylight'}
          </div>
        </div>

        {/* 3. MOOD & EMOTIONAL TONE */}
        <div className="bg-lavender-surface/40 p-3.5 rounded-xl border border-lavender-border/60 space-y-2 flex flex-col justify-between">
          <div className="space-y-2">
            <label className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
              <Sparkles size={14} className="text-purple-400" />
              3. Scene Mood &amp; Tone
            </label>

            <div className="space-y-1.5">
              {/* MOOD GROUP SELECTOR */}
              <select
                value={selectedMoodGroup}
                onChange={(e) => {
                  onSelectMoodGroup(e.target.value);
                  onSelectMood('none');
                }}
                className="w-full bg-lavender-bg border border-lavender-border rounded-lg p-1.5 text-xs font-semibold text-purple-200 focus:outline-none focus:border-purple-400 cursor-pointer shadow-sm"
              >
                {sortedMoodGroups.map(mg => (
                  <option key={mg.id} value={mg.id}>
                    {mg.icon} {mg.name}
                  </option>
                ))}
              </select>

              {/* SPECIFIC MOOD PRESET */}
              <select
                value={selectedMood}
                onChange={(e) => onSelectMood(e.target.value)}
                className="w-full bg-lavender-bg border border-lavender-border rounded-lg p-2 text-xs font-medium text-lavender-text focus:outline-none focus:border-purple-400 cursor-pointer hover:border-purple-400/60 truncate"
              >
                {sortedMoodsInGroup.map(m => (
                  <option key={m.id} value={m.id}>
                    {m.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="p-2 bg-purple-950/20 border border-purple-500/30 rounded-lg text-[10px] text-purple-200/80 min-h-[38px] flex items-center">
            {activeMood?.description || 'Natural joyful relaxed atmosphere'}
          </div>
        </div>
      </div>

      {/* MUSICAL INSTRUMENTS TOGGLE BANNER */}
      <div className="bg-lavender-surface/30 p-3 rounded-xl border border-lavender-border/60 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-pink-950/50 border border-pink-500/40 flex items-center justify-center text-pink-300">
            <Music size={15} />
          </div>
          <div>
            <div className="text-xs font-bold text-lavender-accent">
              Include Musical Instruments in Prompt
            </div>
            <div className="text-[11px] text-lavender-text/70">
              When active, adds signature band instruments (Miranda: Guitar, Annelies: Violin, Fannie: Drums, Emma: Keyboard, Senna: Camera/Mic).
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onToggleIncludeInstruments(!includeInstruments)}
          className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer border ${
            includeInstruments
              ? 'bg-pink-600 text-white border-pink-500 shadow-sm'
              : 'bg-lavender-bg text-lavender-text/70 border-lavender-border hover:bg-lavender-surface'
          }`}
        >
          {includeInstruments ? (
            <>
              <Check size={13} />
              <span>Instruments Included</span>
            </>
          ) : (
            <span>No Instruments</span>
          )}
        </button>
      </div>
    </div>
  );
};
