import React from 'react';
import { HeaderBanner } from '../HeaderBanner';
import { Tooltip } from '../../Tooltip';
import { SINGERS } from '../../../../constants/singers';
import { getSapphicStep } from '../../../utils/sapphicLevels';
import { getSillyStep } from '../../../utils/sillyLevels';
import { getWildnessStep } from '../../../utils/wildnessLevels';
import { getLoudnessStep } from '../../../utils/loudnessLevels';
import { getEpicStep } from '../../../utils/epicLevels';
import { getRatingStep } from '../../../utils/ratingLevels';
import {
  getComplexityStep,
  getRepetitivenessStep,
  getHarmonicsStep,
  getReverbStep,
  getStrictnessStep
} from '../../../utils/fineTuningLevels';

export interface SlidersTabProps {
  slidersSubTab: string;
  setSlidersSubTab: (subId: string) => void;
  sliderSapphic: number;
  setSliderSapphic: (val: number) => void;
  sliderWittyness: number;
  setSliderWittyness: (val: number) => void;
  sliderWeirdness: number;
  setSliderWeirdness: (val: number) => void;
  sliderLoudness: number;
  setSliderLoudness: (val: number) => void;
  sliderEpic: number;
  setSliderEpic: (val: number) => void;
  sliderRating: number;
  setSliderRating: (val: number) => void;
  sliderComplexity: number;
  setSliderComplexity: (val: number) => void;
  sliderRepetitiveness: number;
  setSliderRepetitiveness: (val: number) => void;
  sliderHarmonics: number;
  setSliderHarmonics: (val: number) => void;
  sliderReverb: number;
  setSliderReverb: (val: number) => void;
  sliderTempoBpm: number;
  setSliderTempoBpm: (val: number) => void;
  sliderStrictness: number;
  setSliderStrictness: (val: number) => void;

  isEnabledSapphic: boolean;
  setIsEnabledSapphic: (val: boolean) => void;
  isEnabledWittyness: boolean;
  setIsEnabledWittyness: (val: boolean) => void;
  isEnabledWeirdness: boolean;
  setIsEnabledWeirdness: (val: boolean) => void;
  isEnabledLoudness: boolean;
  setIsEnabledLoudness: (val: boolean) => void;
  isEnabledEpic: boolean;
  setIsEnabledEpic: (val: boolean) => void;
  isEnabledRating: boolean;
  setIsEnabledRating: (val: boolean) => void;

  isEnabledComplexity: boolean;
  setIsEnabledComplexity: (val: boolean) => void;
  isEnabledRepetitiveness: boolean;
  setIsEnabledRepetitiveness: (val: boolean) => void;
  isEnabledHarmonics: boolean;
  setIsEnabledHarmonics: (val: boolean) => void;
  isEnabledReverb: boolean;
  setIsEnabledReverb: (val: boolean) => void;
  isEnabledTempo: boolean;
  setIsEnabledTempo: (val: boolean) => void;
  isEnabledStrictness: boolean;
  setIsEnabledStrictness: (val: boolean) => void;

  singerSliderValues?: Record<string, number>;
  setSingerSliderValues?: React.Dispatch<React.SetStateAction<Record<string, number>>>;
  singerSliderEnabled?: Record<string, boolean>;
  setSingerSliderEnabled?: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

export const ALL_SLIDER_PARAMS = [
  { id: 'sapphic', label: 'Sapphic Theme', theme: 'pink' },
  { id: 'wittyness', label: 'Wittyness', theme: 'amber' },
  { id: 'weirdness', label: 'Weirdness', theme: 'purple' },
  { id: 'loudness', label: 'Loudness', theme: 'red' },
  { id: 'epic', label: 'Epic Scale', theme: 'cyan' },
  { id: 'rating', label: 'Rating', theme: 'yellow' },
  { id: 'complexity', label: 'Complexity', theme: 'lavender' },
  { id: 'repetitiveness', label: 'Repetitiveness', theme: 'lavender' },
  { id: 'harmonics', label: 'Harmonics', theme: 'lavender' },
  { id: 'reverb', label: 'Reverb Space', theme: 'lavender' },
  { id: 'tempo', label: 'Tempo BPM', theme: 'lavender' },
  { id: 'strictness', label: 'Strictness', theme: 'lavender' }
];

export const SlidersTab: React.FC<SlidersTabProps> = ({
  slidersSubTab,
  setSlidersSubTab,
  sliderSapphic,
  setSliderSapphic,
  sliderWittyness,
  setSliderWittyness,
  sliderWeirdness,
  setSliderWeirdness,
  sliderLoudness,
  setSliderLoudness,
  sliderEpic,
  setSliderEpic,
  sliderRating,
  setSliderRating,
  sliderComplexity,
  setSliderComplexity,
  sliderRepetitiveness,
  setSliderRepetitiveness,
  sliderHarmonics,
  setSliderHarmonics,
  sliderReverb,
  setSliderReverb,
  sliderTempoBpm,
  setSliderTempoBpm,
  sliderStrictness,
  setSliderStrictness,
  isEnabledSapphic,
  setIsEnabledSapphic,
  isEnabledWittyness,
  setIsEnabledWittyness,
  isEnabledWeirdness,
  setIsEnabledWeirdness,
  isEnabledLoudness,
  setIsEnabledLoudness,
  isEnabledEpic,
  setIsEnabledEpic,
  isEnabledRating,
  setIsEnabledRating,
  isEnabledComplexity,
  setIsEnabledComplexity,
  isEnabledRepetitiveness,
  setIsEnabledRepetitiveness,
  isEnabledHarmonics,
  setIsEnabledHarmonics,
  isEnabledReverb,
  setIsEnabledReverb,
  isEnabledTempo,
  setIsEnabledTempo,
  isEnabledStrictness,
  setIsEnabledStrictness,
  singerSliderValues = {},
  setSingerSliderValues,
  singerSliderEnabled = {},
  setSingerSliderEnabled
}) => {
  const validParamIds = ALL_SLIDER_PARAMS.map((p) => p.id);
  const activeParamId = validParamIds.includes(slidersSubTab) ? slidersSubTab : 'sapphic';

  const paramConfigs: Record<
    string,
    {
      id: string;
      name: string;
      group: string;
      colorTheme: string;
      min: number;
      max: number;
      value: number;
      setValue: (val: number) => void;
      isEnabled: boolean;
      setIsEnabled: (val: boolean) => void;
      getStep: (val: number) => { level: number; label: string; description: string; code?: string };
    }
  > = {
    sapphic: {
      id: 'sapphic',
      name: 'Sapphic (Lesbian) Theme',
      group: 'Topic & Content',
      colorTheme: 'pink',
      min: 0,
      max: 24,
      value: sliderSapphic,
      setValue: setSliderSapphic,
      isEnabled: isEnabledSapphic,
      setIsEnabled: setIsEnabledSapphic,
      getStep: (v) => getSapphicStep(v)
    },
    wittyness: {
      id: 'wittyness',
      name: 'Wittyness & Humor',
      group: 'Topic & Content',
      colorTheme: 'amber',
      min: 0,
      max: 24,
      value: sliderWittyness,
      setValue: setSliderWittyness,
      isEnabled: isEnabledWittyness,
      setIsEnabled: setIsEnabledWittyness,
      getStep: (v) => getSillyStep(v)
    },
    weirdness: {
      id: 'weirdness',
      name: 'Weirdness & Wildness',
      group: 'Topic & Content',
      colorTheme: 'purple',
      min: 0,
      max: 24,
      value: sliderWeirdness,
      setValue: setSliderWeirdness,
      isEnabled: isEnabledWeirdness,
      setIsEnabled: setIsEnabledWeirdness,
      getStep: (v) => getWildnessStep(v)
    },
    loudness: {
      id: 'loudness',
      name: 'Loudness & Energy',
      group: 'Topic & Content',
      colorTheme: 'red',
      min: 0,
      max: 24,
      value: sliderLoudness,
      setValue: setSliderLoudness,
      isEnabled: isEnabledLoudness,
      setIsEnabled: setIsEnabledLoudness,
      getStep: (v) => getLoudnessStep(v)
    },
    epic: {
      id: 'epic',
      name: 'Epic Scale & Grandeur',
      group: 'Topic & Content',
      colorTheme: 'cyan',
      min: 0,
      max: 24,
      value: sliderEpic,
      setValue: setSliderEpic,
      isEnabled: isEnabledEpic,
      setIsEnabled: setIsEnabledEpic,
      getStep: (v) => getEpicStep(v)
    },
    rating: {
      id: 'rating',
      name: 'Content Rating (G to XXX)',
      group: 'Topic & Content',
      colorTheme: 'yellow',
      min: 0,
      max: 7,
      value: sliderRating,
      setValue: setSliderRating,
      isEnabled: isEnabledRating,
      setIsEnabled: setIsEnabledRating,
      getStep: (v) => getRatingStep(v)
    },
    complexity: {
      id: 'complexity',
      name: 'Vocabulary Complexity',
      group: 'Musical & Technical',
      colorTheme: 'lavender',
      min: 0,
      max: 24,
      value: sliderComplexity,
      setValue: setSliderComplexity,
      isEnabled: isEnabledComplexity,
      setIsEnabled: setIsEnabledComplexity,
      getStep: (v) => getComplexityStep(v)
    },
    repetitiveness: {
      id: 'repetitiveness',
      name: 'Chorus Repetitiveness',
      group: 'Musical & Technical',
      colorTheme: 'lavender',
      min: 0,
      max: 24,
      value: sliderRepetitiveness,
      setValue: setSliderRepetitiveness,
      isEnabled: isEnabledRepetitiveness,
      setIsEnabled: setIsEnabledRepetitiveness,
      getStep: (v) => getRepetitivenessStep(v)
    },
    harmonics: {
      id: 'harmonics',
      name: 'Harmonic Vocal Density',
      group: 'Musical & Technical',
      colorTheme: 'lavender',
      min: 0,
      max: 24,
      value: sliderHarmonics,
      setValue: setSliderHarmonics,
      isEnabled: isEnabledHarmonics,
      setIsEnabled: setIsEnabledHarmonics,
      getStep: (v) => getHarmonicsStep(v)
    },
    reverb: {
      id: 'reverb',
      name: 'Acoustic Reverb Space',
      group: 'Musical & Technical',
      colorTheme: 'lavender',
      min: 0,
      max: 24,
      value: sliderReverb,
      setValue: setSliderReverb,
      isEnabled: isEnabledReverb,
      setIsEnabled: setIsEnabledReverb,
      getStep: (v) => getReverbStep(v)
    },
    tempo: {
      id: 'tempo',
      name: 'Tempo Speed (BPM)',
      group: 'Musical & Technical',
      colorTheme: 'lavender',
      min: 50,
      max: 180,
      value: sliderTempoBpm,
      setValue: setSliderTempoBpm,
      isEnabled: isEnabledTempo,
      setIsEnabled: setIsEnabledTempo,
      getStep: (v) => ({
        level: v,
        label: `${v} BPM`,
        description: `Explicit tempo setting of ${v} Beats Per Minute.`
      })
    },
    strictness: {
      id: 'strictness',
      name: 'Prompt Strictness',
      group: 'Musical & Technical',
      colorTheme: 'lavender',
      min: 0,
      max: 24,
      value: sliderStrictness,
      setValue: setSliderStrictness,
      isEnabled: isEnabledStrictness,
      setIsEnabled: setIsEnabledStrictness,
      getStep: (v) => getStrictnessStep(v)
    }
  };

  const activeParam = paramConfigs[activeParamId] || paramConfigs.sapphic;
  const activeStep = activeParam.getStep(activeParam.value);

  const handleSingerEnableChange = (singerId: string, enabled: boolean) => {
    const key = `${activeParamId}_${singerId}`;
    if (setSingerSliderEnabled) {
      setSingerSliderEnabled((prev) => ({ ...prev, [key]: enabled }));
    }
  };

  const handleSingerValueChange = (singerId: string, val: number) => {
    const key = `${activeParamId}_${singerId}`;
    if (setSingerSliderValues) {
      setSingerSliderValues((prev) => ({ ...prev, [key]: val }));
    }
  };

  const sortedSliderParams = React.useMemo(() => {
    return [...ALL_SLIDER_PARAMS].sort((a, b) => a.label.localeCompare(b.label));
  }, []);

  return (
    <div className="space-y-2 animate-fade-in">
      {/* Parameter Switcher Subtab Bar */}
      <div className="flex items-center gap-1 border-b border-lavender-border/30 pb-1.5 overflow-x-auto custom-scrollbar select-none">
        {sortedSliderParams.map((p) => {
          const isActive = p.id === activeParamId;
          const conf = paramConfigs[p.id];
          const isBandEnabled = conf?.isEnabled;
          const hasSingerEnabled = SINGERS.some((s) => !!singerSliderEnabled[`${p.id}_${s.id}`]);

          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setSlidersSubTab(p.id)}
              className={`px-2 py-0.5 rounded-lg text-[10.5px] font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1 ${
                isActive
                  ? 'bg-lavender-accent text-black font-black shadow-sm'
                  : 'bg-black/30 text-lavender-text/70 hover:text-white border border-lavender-border/20'
              }`}
            >
              <span>{p.label}</span>
              {(isBandEnabled || hasSingerEnabled) && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-sm" title="Active" />
              )}
            </button>
          );
        })}
      </div>

      <HeaderBanner
        title={`Fine-Tuning: ${activeParam.name}`}
        desc={`Set 1 whole-band slider and 4 singer sliders for ${activeParam.name}. Hover over options for descriptions.`}
        targetId="sliders"
        isEnabled={activeParam.isEnabled}
      />

      <div className="space-y-2 pt-0.5">
        {/* SECTION 1: WHOLE BAND SLIDER (1 Slide for Whole Band) */}
        <div className="bg-black/30 px-3 py-2 rounded-xl border border-lavender-border/30 shadow-sm space-y-1">
          <div className="flex items-center justify-between border-b border-lavender-border/20 pb-1">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={activeParam.isEnabled}
                onChange={(e) => activeParam.setIsEnabled(e.target.checked)}
                className="accent-lavender-accent rounded cursor-pointer w-3.5 h-3.5 shrink-0"
              />
              <span className="text-[11px] font-black text-lavender-accent uppercase tracking-wider">
                Whole Band - {activeParam.name}
              </span>
            </label>

            <span className="font-mono text-[10px] text-lavender-accent bg-lavender-accent/15 px-2 py-0.5 rounded border border-lavender-accent/30 font-black">
              {activeParam.id === 'tempo' ? `${activeParam.value} BPM` : `Level ${activeStep.level + 1}/${activeParam.max + 1}`}
            </span>
          </div>

          <Tooltip title={`Whole Band ${activeParam.name}: ${activeStep.label}`} content={activeStep.description} className="block w-full">
            <div className="space-y-1 pt-0.5">
              <div className="flex items-center justify-between text-[11px] font-bold">
                <span className="text-white font-extrabold">{activeStep.label}</span>
                {activeStep.code && (
                  <span className="text-[9px] bg-yellow-500/20 text-yellow-300 px-1.5 py-0.2 rounded font-mono font-black border border-yellow-500/30">
                    {activeStep.code}
                  </span>
                )}
              </div>

              <input
                type="range"
                min={activeParam.min}
                max={activeParam.max}
                disabled={!activeParam.isEnabled}
                value={activeParam.value}
                onChange={(e) => activeParam.setValue(parseInt(e.target.value, 10))}
                className="w-full accent-lavender-accent cursor-pointer h-1.5 bg-lavender-surface/30 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed"
              />
            </div>
          </Tooltip>
        </div>

        {/* SECTION 2: INDIVIDUAL SINGER SLIDERS (4 Additional Slides per Page) */}
        <div className="bg-black/20 px-3 py-2 rounded-xl border border-lavender-border/20 space-y-1.5">
          <div className="flex items-center justify-between border-b border-lavender-border/20 pb-1">
            <h4 className="text-[11px] font-black text-white uppercase tracking-wider flex items-center gap-1.5">
              <span>🎤 Individual Singer Levels</span>
              <span className="text-[9px] font-mono text-lavender-accent bg-black/40 px-1.5 py-0.2 rounded border border-lavender-border/20 normal-case">
                4 Vocalists
              </span>
            </h4>
            <span className="text-[9.5px] text-lavender-text/50">
              Check box to override for specific singer
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {SINGERS.map((singer) => {
              const key = `${activeParamId}_${singer.id}`;
              const isSingerEnabled = !!singerSliderEnabled[key];
              const singerVal = singerSliderValues[key] !== undefined ? singerSliderValues[key] : activeParam.value;
              const singerStep = activeParam.getStep(singerVal);

              return (
                <div
                  key={singer.id}
                  className={`p-2 rounded-xl border transition-all space-y-1 ${
                    isSingerEnabled
                      ? 'bg-lavender-accent/10 border-lavender-accent shadow-sm'
                      : 'bg-black/30 border-lavender-border/20 opacity-60 hover:opacity-80'
                  }`}
                >
                  {/* Singer Header */}
                  <div className="flex items-center justify-between gap-1.5 border-b border-lavender-border/15 pb-1">
                    <label className="flex items-center gap-1.5 cursor-pointer select-none min-w-0">
                      <input
                        type="checkbox"
                        checked={isSingerEnabled}
                        onChange={(e) => handleSingerEnableChange(singer.id, e.target.checked)}
                        className="accent-lavender-accent rounded cursor-pointer w-3 h-3 shrink-0"
                      />
                      <img
                        src={singer.photo}
                        alt={singer.name}
                        className={`w-5 h-5 rounded object-cover border shrink-0 ${
                          isSingerEnabled ? 'border-lavender-accent' : 'border-lavender-border/30 grayscale'
                        }`}
                      />
                      <span className={`text-[11px] font-black truncate ${isSingerEnabled ? 'text-white' : 'text-lavender-text/70'}`}>
                        {singer.name}
                      </span>
                    </label>

                    <span className={`font-mono text-[9px] px-1.5 py-0.2 rounded font-black border shrink-0 ${
                      isSingerEnabled
                        ? 'bg-lavender-accent/20 text-lavender-accent border-lavender-accent/40'
                        : 'bg-black/40 text-lavender-text/40 border-lavender-border/20'
                    }`}>
                      {activeParam.id === 'tempo' ? `${singerVal} BPM` : `Lvl ${singerStep.level + 1}`}
                    </span>
                  </div>

                  {/* Singer Slider & Value readout with Tooltip for description */}
                  <Tooltip title={`${singer.name} - ${activeParam.name}: ${singerStep.label}`} content={singerStep.description} className="block w-full">
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[10px] font-extrabold">
                        <span className={`truncate ${isSingerEnabled ? 'text-lavender-accent' : 'text-lavender-text/50'}`}>
                          {singerStep.label}
                        </span>
                        {singerStep.code && (
                          <span className="text-[8.5px] bg-yellow-500/20 text-yellow-300 px-1 rounded font-mono font-bold shrink-0 ml-1">
                            {singerStep.code}
                          </span>
                        )}
                      </div>

                      <input
                        type="range"
                        min={activeParam.min}
                        max={activeParam.max}
                        disabled={!isSingerEnabled}
                        value={singerVal}
                        onChange={(e) => handleSingerValueChange(singer.id, parseInt(e.target.value, 10))}
                        className="w-full accent-lavender-accent cursor-pointer h-1.5 bg-lavender-surface/30 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed"
                      />
                    </div>
                  </Tooltip>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
