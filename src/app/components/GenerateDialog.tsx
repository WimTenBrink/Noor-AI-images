import React, { useState, useEffect, useMemo } from 'react';
import { Dialog } from './Dialog';
import { Copy, Check, Sliders, Volume2, Music, Sparkles, BookOpen, RefreshCw } from 'lucide-react';
import { AppDefaults } from '../../types';
import { StoryModeDialog } from './StoryModeDialog';
import { useJobQueue } from '../hooks/useJobQueue';
import { GENERATE_SONG_FROM_STORY_PROMPT, GENERATE_STORY_MODE_COVER_ART_PROMPT } from '../../constants/prompts';

// Import modular types & components
import { TabId, DefaultsSubTabId, TabDefinition, ChildTabDefinition, GenerateDialogProps } from './generate/types';
import { DashboardTreeView } from './generate/DashboardTreeView';
import { DefaultsTab } from './generate/tabs/DefaultsTab';
import { PromptTab } from './generate/tabs/PromptTab';
import { IntentEnergyTab } from './generate/tabs/IntentEnergyTab';
import { VocalAccentToneTab } from './generate/tabs/VocalAccentToneTab';
import { ComposerTab } from './generate/tabs/ComposerTab';
import { SingersTab, DEFAULT_SINGER_INSTRUMENTS } from './generate/tabs/SingersTab';
import { MusicTheoryTab } from './generate/tabs/MusicTheoryTab';
import { StructureTab } from './generate/tabs/StructureTab';
import { PoeticsTab } from './generate/tabs/PoeticsTab';
import { SlidersTab } from './generate/tabs/SlidersTab';
import { OverviewTab } from './generate/tabs/OverviewTab';
import { SINGERS } from '../../constants/singers';
import { getFilteredLyricsInstructions as generateInstructionPrompt } from '../utils/defaultsHelper';
import { buildInspirationPromptDirective } from '../data/inspirationData';
import { getSapphicStep } from '../utils/sapphicLevels';
import { getSillyStep } from '../utils/sillyLevels';
import { getWildnessStep } from '../utils/wildnessLevels';
import { getLoudnessStep } from '../utils/loudnessLevels';
import { getEpicStep } from '../utils/epicLevels';
import { getRatingStep } from '../utils/ratingLevels';
import {
  getComplexityStep,
  getRepetitivenessStep,
  getHarmonicsStep,
  getReverbStep,
  getStrictnessStep
} from '../utils/fineTuningLevels';
import { matchCatalogStyles, matchCatalogInstruments } from '../../lib/imageInspiration';

const SAVED_SETTINGS_KEY = 'noor-generate-dialog-settings-v2';

const getInitialSetting = <T,>(key: string, defaultValue: T): T => {
  try {
    const raw = localStorage.getItem(SAVED_SETTINGS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed[key] !== undefined) {
        return parsed[key];
      }
    }
  } catch (e) {
    // Fallback
  }
  return defaultValue;
};

export const GenerateDialog: React.FC<GenerateDialogProps> = ({
  isOpen,
  onClose,
  appDefaults: providedAppDefaults,
  setAppDefaults: providedSetAppDefaults,
  onConfirm,
  onGenerateSong,
  currentTitle,
  initialStory,
  selectedInstruments,
  selectedStyles,
  currentDialectId,
  selfReflect
}) => {
  const { jobs, addJob } = useJobQueue();

  // Active scene song AI jobs monitoring
  const activeSceneJobs = useMemo(() => {
    return jobs.filter(j => 
      (j.generationSettings?.isSceneSongJob || j.name.includes('Scene Song')) && 
      (j.status === 'pending' || j.status === 'running')
    );
  }, [jobs]);

  const isSceneSongActive = activeSceneJobs.length > 0;

  // Dialog multi-page navigation state ('options' -> Page 1, 'overview' -> Page 2)
  const [dialogPage, setDialogPage] = useState<'options' | 'overview'>('options');

  useEffect(() => {
    if (isOpen) {
      setDialogPage('options');
      try {
        const raw = localStorage.getItem(SAVED_SETTINGS_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed.instructions !== undefined) setInstructions(parsed.instructions);
          if (parsed.suggestedTitle !== undefined) setSuggestedTitle(parsed.suggestedTitle);
          if (parsed.exactTitle !== undefined) setExactTitle(parsed.exactTitle);
          if (parsed.imageDescription !== undefined) setImageDescription(parsed.imageDescription);
          if (parsed.imageSeriousness !== undefined) setImageSeriousness(parsed.imageSeriousness);
          if (parsed.musicInspiration !== undefined) setMusicInspiration(parsed.musicInspiration);
          if (parsed.selectedInspirationArtists !== undefined) setSelectedInspirationArtists(parsed.selectedInspirationArtists);
          if (parsed.selectedFocusGroup !== undefined) setSelectedFocusGroup(parsed.selectedFocusGroup);
          if (parsed.selectedDialects !== undefined) setSelectedDialects(parsed.selectedDialects);
          if (parsed.selectedEmotions !== undefined) setSelectedEmotions(parsed.selectedEmotions);
          if (parsed.dialogSelectedStyles !== undefined) setDialogSelectedStyles(parsed.dialogSelectedStyles);
          if (parsed.dialogSelectedInstruments !== undefined) setDialogSelectedInstruments(parsed.dialogSelectedInstruments);
          if (parsed.selectedBand !== undefined) setSelectedBand(parsed.selectedBand);
          if (parsed.selectedLead !== undefined) setSelectedLead(parsed.selectedLead);
          if (parsed.singerInstruments !== undefined) setSingerInstruments(parsed.singerInstruments);
          if (parsed.leadSingingPercentage !== undefined) setLeadSingingPercentage(parsed.leadSingingPercentage);
          if (parsed.selectedTimeSignature !== undefined) setSelectedTimeSignature(parsed.selectedTimeSignature);
          if (parsed.selectedMusicalKey !== undefined) setSelectedMusicalKey(parsed.selectedMusicalKey);
          if (parsed.selectedStructurePreset !== undefined) setSelectedStructurePreset(parsed.selectedStructurePreset);
          if (parsed.selectedRhymeScheme !== undefined) setSelectedRhymeScheme(parsed.selectedRhymeScheme);
          if (parsed.sliderSapphic !== undefined) setSliderSapphic(parsed.sliderSapphic);
          if (parsed.sliderWittyness !== undefined) setSliderWittyness(parsed.sliderWittyness);
          if (parsed.sliderWeirdness !== undefined) setSliderWeirdness(parsed.sliderWeirdness);
          if (parsed.sliderLoudness !== undefined) setSliderLoudness(parsed.sliderLoudness);
          if (parsed.sliderEpic !== undefined) setSliderEpic(parsed.sliderEpic);
          if (parsed.sliderRating !== undefined) setSliderRating(parsed.sliderRating);
          if (parsed.sliderComplexity !== undefined) setSliderComplexity(parsed.sliderComplexity);
          if (parsed.sliderRepetitiveness !== undefined) setSliderRepetitiveness(parsed.sliderRepetitiveness);
          if (parsed.sliderHarmonics !== undefined) setSliderHarmonics(parsed.sliderHarmonics);
          if (parsed.sliderReverb !== undefined) setSliderReverb(parsed.sliderReverb);
          if (parsed.sliderTempoBpm !== undefined) setSliderTempoBpm(parsed.sliderTempoBpm);
          if (parsed.sliderStrictness !== undefined) setSliderStrictness(parsed.sliderStrictness);
          if (parsed.isEnabledSapphic !== undefined) setIsEnabledSapphic(parsed.isEnabledSapphic);
          if (parsed.isEnabledWittyness !== undefined) setIsEnabledWittyness(parsed.isEnabledWittyness);
          if (parsed.isEnabledWeirdness !== undefined) setIsEnabledWeirdness(parsed.isEnabledWeirdness);
          if (parsed.isEnabledLoudness !== undefined) setIsEnabledLoudness(parsed.isEnabledLoudness);
          if (parsed.isEnabledEpic !== undefined) setIsEnabledEpic(parsed.isEnabledEpic);
          if (parsed.isEnabledRating !== undefined) setIsEnabledRating(parsed.isEnabledRating);
          if (parsed.isEnabledComplexity !== undefined) setIsEnabledComplexity(parsed.isEnabledComplexity);
          if (parsed.isEnabledRepetitiveness !== undefined) setIsEnabledRepetitiveness(parsed.isEnabledRepetitiveness);
          if (parsed.isEnabledHarmonics !== undefined) setIsEnabledHarmonics(parsed.isEnabledHarmonics);
          if (parsed.isEnabledReverb !== undefined) setIsEnabledReverb(parsed.isEnabledReverb);
          if (parsed.isEnabledTempo !== undefined) setIsEnabledTempo(parsed.isEnabledTempo);
          if (parsed.isEnabledStrictness !== undefined) setIsEnabledStrictness(parsed.isEnabledStrictness);
          if (parsed.appDefaults !== undefined) setAppDefaults(parsed.appDefaults);
        }
      } catch (e) {
        // Ignore
      }
    }
  }, [isOpen]);

  // Internal fallback defaults if not provided
  const [internalDefaults, setInternalDefaults] = useState<AppDefaults>(() => getInitialSetting('appDefaults', {
    doubleEntendres: false,
    rap: false,
    chant: false,
    bandRole: 'soprano',
    useInstruments: true,
    tempo: 'medium',
    mood: 'joyful',
    genre: 'Pop',
    language: 'English',
    topic: 'Love and Connection',
    rhymeScheme: 'AABB',
    structure: 'Verse-Chorus-Verse-Chorus-Bridge-Chorus',
    religion: 'Norse',
    passiveAggressive: false,
    rude: false,
    politeness: false,
    rivalry: false,
    loud: false,
    selfReflection: selfReflect ?? true,
    lyricsReversal: false,
    gothicMelancholy: false,
    vocalPolyphony: false,
    acousticBarnEcho: false,
    barnAnimalSounds: 'none',
    barnRainRoof: false,
    barnWoodenCreaks: false,
    dutchFolkCulture: false,
    nordicCelticFusion: false,
    ecoFeminism: false,
    sapphic: true,
    pagan: true,
    barefootNaturism: true,
    noMenOrKids: true,
    aCappellaFocus: false,
    callAndResponse: true,
    acousticImprovisation: false,
    vocalBeatboxing: false,
    audienceInteraction: true,
    audienceClapping: true,
    audienceStomping: false,
    audienceCheering: true,
    audienceSinging: false,
    audienceHumming: false,
    audienceSingsChorus: false,
    audienceWhistling: false,
    audienceGasps: false,
    audienceCallResponse: false,
    steelpanDrums: false,
    didgeridoo: false,
    bullroarer: false,
    boneFlute: false,
    logDrum: false,
    jawHarp: false,
    stoneLithophone: false,
    bagpipes: false,
    crwth: false,
    barnStudio: true,
    acousticOnly: false,
    vocalLilting: false,
    poeticAllegory: true,
    storytellerBallad: false,
    colorCoding: true,
    archaicIdioms: false,
    animismSpirits: false,
    astrologicalRituals: false,
    continentAfrica: false,
    continentAntarctica: false,
    continentAsia: false,
    continentEurope: true,
    continentNorthAmerica: false,
    continentSouthAmerica: false,
    continentOceania: false,
    cultureEuropean: true,
    cultureIndian: false,
    cultureAboriginal: false,
    cultureNativeAmerican: false,
    cultureEastAsian: false,
    cultureMiddleEastern: false,
    cultureAfrican: false,
    cultureLatinAmerican: false,
    culturePolynesian: false,
    cultureCelticNordic: true,
    cultureSlavic: false,
    cultureCaribbean: false
  }));

  const appDefaults = providedAppDefaults || internalDefaults;
  const setAppDefaults = providedSetAppDefaults || setInternalDefaults;

  // Active Main Tab
  const [activeTabId, setActiveTabId] = useState<TabId>('prompt');

  // Subtab States
  const [defaultsSubTab, setDefaultsSubTab] = useState<DefaultsSubTabId>('band');
  const [promptSubTab, setPromptSubTab] = useState<string>('lyrics');
  const [accentToneSubTab, setAccentToneSubTab] = useState<string>('accent');
  const [composerSubTab, setComposerSubTab] = useState<string>('styles');
  const [singersSubTab, setSingersSubTab] = useState<string>('bandFormation');
  const [musicTheorySubTab, setMusicTheorySubTab] = useState<string>('timeSignature');
  const [structureSubTab, setStructureSubTab] = useState<string>('songStructure');
  const [poeticsSubTab, setPoeticsSubTab] = useState<string>('rhymeScheme');
  const [slidersSubTab, setSlidersSubTab] = useState<string>('sliders');

  // All Tree nodes are always expanded
  const [expandedNodes, setExpandedNodes] = useState<Record<TabId, boolean>>({
    prompt: true,
    defaults: true,
    intentEnergy: true,
    vocalAccentTone: true,
    composer: true,
    singers: true,
    musicTheory: true,
    structure: true,
    poetics: true,
    sliders: true
  });

  // Enabled Nodes Map
  const [enabledTabs, setEnabledTabs] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('noor-enabled-tabs-v4');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // Ignore
    }
    return {
      defaults: false,
      band: false,
      culture: false,
      theme: false,
      beliefs: false,
      concertPerformance: false,
      audience: false,
      coreInstruments: false,
      lyricalStyle: false,
      prompt: false,
      inspiration: false,
      imageToSong: false,
      suggestedTitle: false,
      lyrics: false,
      artistImpression: false,
      intentEnergy: false,
      vocalAccentTone: false,
      accent: false,
      emotion: false,
      composer: false,
      styles: false,
      instruments: false,
      singers: false,
      bandFormation: false,
      leadVocalist: false,
      individualInstruments: false,
      vocalMix: false,
      musicTheory: false,
      timeSignature: false,
      musicalKey: false,
      structure: false,
      songStructure: false,
      poetics: false,
      rhymeScheme: false,
      sliders: false,
      sapphic: false,
      wittyness: false,
      weirdness: false,
      loudness: false,
      epic: false,
      rating: false,
      complexity: false,
      repetitiveness: false,
      harmonics: false,
      reverb: false,
      tempo: false,
      strictness: false
    };
  });

  useEffect(() => {
    try {
      localStorage.setItem('noor-enabled-tabs-v4', JSON.stringify(enabledTabs));
    } catch (e) {
      // Ignore
    }
  }, [enabledTabs]);

  const toggleTabEnabled = (id: string) => {
    if (id === 'prompt') return; // Cannot disable core prompt
    setEnabledTabs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // State fields for options (loaded from localStorage if present)
  const [instructions, setInstructions] = useState<string>(() => getInitialSetting('instructions', ''));
  const [suggestedTitle, setSuggestedTitle] = useState<string>(() => getInitialSetting('suggestedTitle', currentTitle || ''));
  const [exactTitle, setExactTitle] = useState<boolean>(() => getInitialSetting('exactTitle', false));
  const [imageDescription, setImageDescription] = useState<string>(() => getInitialSetting('imageDescription', ''));
  const [imageSeriousness, setImageSeriousness] = useState<number>(() => getInitialSetting('imageSeriousness', 80));
  const [musicInspiration, setMusicInspiration] = useState<string>(() => getInitialSetting('musicInspiration', ''));
  const [selectedInspirationArtists, setSelectedInspirationArtists] = useState<string[]>(() => getInitialSetting('selectedInspirationArtists', []));
  const [selectedFocusGroup, setSelectedFocusGroup] = useState<string>(() => getInitialSetting('selectedFocusGroup', ''));
  const [selectedDialects, setSelectedDialects] = useState<string[]>(() => getInitialSetting('selectedDialects', currentDialectId ? [currentDialectId] : []));
  const [selectedEmotions, setSelectedEmotions] = useState<string[]>(() => getInitialSetting('selectedEmotions', []));
  const [dialogSelectedStyles, setDialogSelectedStyles] = useState<string[]>(() => getInitialSetting('dialogSelectedStyles', selectedStyles || []));
  const [dialogSelectedInstruments, setDialogSelectedInstruments] = useState<string[]>(() => getInitialSetting('dialogSelectedInstruments', selectedInstruments || []));
  const [selectedBand, setSelectedBand] = useState<string>(() => getInitialSetting('selectedBand', 'katje-full'));
  const [selectedLead, setSelectedLead] = useState<string>(() => getInitialSetting('selectedLead', 'fannie'));
  const [singerInstruments, setSingerInstruments] = useState<Record<string, string>>(() => getInitialSetting('singerInstruments', DEFAULT_SINGER_INSTRUMENTS));
  const [leadSingingPercentage, setLeadSingingPercentage] = useState<number>(() => getInitialSetting('leadSingingPercentage', 50));
  const [selectedTimeSignature, setSelectedTimeSignature] = useState<string>(() => getInitialSetting('selectedTimeSignature', '4/4'));
  const [selectedMusicalKey, setSelectedMusicalKey] = useState<string>(() => getInitialSetting('selectedMusicalKey', 'C Major'));
  const [selectedStructurePreset, setSelectedStructurePreset] = useState<string>(() => getInitialSetting('selectedStructurePreset', 'standard'));
  const [selectedRhymeScheme, setSelectedRhymeScheme] = useState<string>(() => getInitialSetting('selectedRhymeScheme', 'aabb'));

  // Fine-Tuning Topic Sliders
  const [sliderSapphic, setSliderSapphic] = useState<number>(() => getInitialSetting('sliderSapphic', 0));
  const [sliderWittyness, setSliderWittyness] = useState<number>(() => getInitialSetting('sliderWittyness', 0));
  const [sliderWeirdness, setSliderWeirdness] = useState<number>(() => getInitialSetting('sliderWeirdness', 0));
  const [sliderLoudness, setSliderLoudness] = useState<number>(() => getInitialSetting('sliderLoudness', 0));
  const [sliderEpic, setSliderEpic] = useState<number>(() => getInitialSetting('sliderEpic', 0));
  const [sliderRating, setSliderRating] = useState<number>(() => getInitialSetting('sliderRating', 0)); // G

  // General Fine-Tuning Sliders
  const [sliderComplexity, setSliderComplexity] = useState<number>(() => getInitialSetting('sliderComplexity', 0));
  const [sliderRepetitiveness, setSliderRepetitiveness] = useState<number>(() => getInitialSetting('sliderRepetitiveness', 0));
  const [sliderHarmonics, setSliderHarmonics] = useState<number>(() => getInitialSetting('sliderHarmonics', 0));
  const [sliderReverb, setSliderReverb] = useState<number>(() => getInitialSetting('sliderReverb', 0));
  const [sliderTempoBpm, setSliderTempoBpm] = useState<number>(() => getInitialSetting('sliderTempoBpm', 50));
  const [sliderStrictness, setSliderStrictness] = useState<number>(() => getInitialSetting('sliderStrictness', 0));

  // Individual slider enabled checkboxes
  const [isEnabledSapphic, setIsEnabledSapphic] = useState<boolean>(() => getInitialSetting('isEnabledSapphic', false));
  const [isEnabledWittyness, setIsEnabledWittyness] = useState<boolean>(() => getInitialSetting('isEnabledWittyness', false));
  const [isEnabledWeirdness, setIsEnabledWeirdness] = useState<boolean>(() => getInitialSetting('isEnabledWeirdness', false));
  const [isEnabledLoudness, setIsEnabledLoudness] = useState<boolean>(() => getInitialSetting('isEnabledLoudness', false));
  const [isEnabledEpic, setIsEnabledEpic] = useState<boolean>(() => getInitialSetting('isEnabledEpic', false));
  const [isEnabledRating, setIsEnabledRating] = useState<boolean>(() => getInitialSetting('isEnabledRating', false));

  const [isEnabledComplexity, setIsEnabledComplexity] = useState<boolean>(() => getInitialSetting('isEnabledComplexity', false));
  const [isEnabledRepetitiveness, setIsEnabledRepetitiveness] = useState<boolean>(() => getInitialSetting('isEnabledRepetitiveness', false));
  const [isEnabledHarmonics, setIsEnabledHarmonics] = useState<boolean>(() => getInitialSetting('isEnabledHarmonics', false));
  const [isEnabledReverb, setIsEnabledReverb] = useState<boolean>(() => getInitialSetting('isEnabledReverb', false));
  const [isEnabledTempo, setIsEnabledTempo] = useState<boolean>(() => getInitialSetting('isEnabledTempo', false));
  const [isEnabledStrictness, setIsEnabledStrictness] = useState<boolean>(() => getInitialSetting('isEnabledStrictness', false));

  // Individual Singer Fine-Tuning Sliders
  const [singerSliderValues, setSingerSliderValues] = useState<Record<string, number>>(() => getInitialSetting('singerSliderValues', {}));
  const [singerSliderEnabled, setSingerSliderEnabled] = useState<Record<string, boolean>>(() => getInitialSetting('singerSliderEnabled', {}));

  // Automatically enable nodes with counter >= 1 and disable nodes with counter 0
  useEffect(() => {
    const parentTabs: TabId[] = [
      'prompt', 'defaults', 'intentEnergy', 'vocalAccentTone',
      'composer', 'singers', 'musicTheory', 'structure', 'poetics', 'sliders'
    ];

    const childNodes: { tabId: TabId; subId: string }[] = [
      { tabId: 'prompt', subId: 'inspiration' },
      { tabId: 'prompt', subId: 'suggestedTitle' },
      { tabId: 'prompt', subId: 'lyrics' },
      { tabId: 'prompt', subId: 'imageToSong' },
      { tabId: 'vocalAccentTone', subId: 'accent' },
      { tabId: 'vocalAccentTone', subId: 'emotion' },
      { tabId: 'composer', subId: 'styles' },
      { tabId: 'composer', subId: 'instruments' },
      { tabId: 'singers', subId: 'individualInstruments' },
      { tabId: 'structure', subId: 'songStructure' },
      { tabId: 'poetics', subId: 'rhymeScheme' },
      { tabId: 'sliders', subId: 'sapphic' },
      { tabId: 'sliders', subId: 'wittyness' },
      { tabId: 'sliders', subId: 'weirdness' },
      { tabId: 'sliders', subId: 'loudness' },
      { tabId: 'sliders', subId: 'epic' },
      { tabId: 'sliders', subId: 'rating' },
      { tabId: 'sliders', subId: 'complexity' },
      { tabId: 'sliders', subId: 'repetitiveness' },
      { tabId: 'sliders', subId: 'harmonics' },
      { tabId: 'sliders', subId: 'reverb' },
      { tabId: 'sliders', subId: 'tempo' },
      { tabId: 'sliders', subId: 'strictness' }
    ];

    let hasChanges = false;
    const nextEnabled = { ...enabledTabs };

    childNodes.forEach(({ tabId, subId }) => {
      const cnt = getChildSelectionCount(tabId, subId);
      const shouldBeEnabled = cnt >= 1;
      if (nextEnabled[subId] !== shouldBeEnabled) {
        nextEnabled[subId] = shouldBeEnabled;
        hasChanges = true;
      }
    });

    parentTabs.forEach((tabId) => {
      if (tabId === 'prompt') return; // Core prompt is always active
      const cnt = getTabSelectionCount(tabId);
      const shouldBeEnabled = cnt >= 1;
      if (nextEnabled[tabId] !== shouldBeEnabled) {
        nextEnabled[tabId] = shouldBeEnabled;
        hasChanges = true;
      }
    });

    if (hasChanges) {
      setEnabledTabs(nextEnabled);
    }
  }, [
    suggestedTitle,
    instructions,
    imageDescription,
    selectedInspirationArtists,
    selectedFocusGroup,
    selectedDialects,
    selectedEmotions,
    dialogSelectedStyles,
    dialogSelectedInstruments,
    selectedBand,
    selectedLead,
    selectedTimeSignature,
    selectedMusicalKey,
    selectedStructurePreset,
    selectedRhymeScheme,
    isEnabledSapphic,
    isEnabledWittyness,
    isEnabledWeirdness,
    isEnabledLoudness,
    isEnabledEpic,
    isEnabledRating,
    isEnabledComplexity,
    isEnabledRepetitiveness,
    isEnabledHarmonics,
    isEnabledReverb,
    isEnabledTempo,
    isEnabledStrictness
  ]);

  const [copiedSuccess, setCopiedSuccess] = useState(false);

  // Sync completed scene song jobs into GenerateDialog state
  useEffect(() => {
    const completedOptionsJob = jobs.find(j => 
      (j.generationSettings?.isSceneSongOptions || j.name.includes('Scene Song Options')) && 
      j.status === 'done' && 
      j.result
    );

    if (completedOptionsJob && completedOptionsJob.result) {
      const res = typeof completedOptionsJob.result === 'object' ? completedOptionsJob.result : null;
      if (res) {
        if (res.title && suggestedTitle !== res.title) setSuggestedTitle(res.title);
        if (Array.isArray(res.styles) && res.styles.length > 0) setDialogSelectedStyles(res.styles);
        if (Array.isArray(res.instruments) && res.instruments.length > 0) setDialogSelectedInstruments(res.instruments);
        if (Array.isArray(res.inspirationArtists) && res.inspirationArtists.length > 0) setSelectedInspirationArtists(res.inspirationArtists);
        if (Array.isArray(res.emotions) && res.emotions.length > 0) setSelectedEmotions(res.emotions);
        if (res.leadVocalist) setSelectedLead(res.leadVocalist);
        if (res.timeSignature) setSelectedTimeSignature(res.timeSignature);
        if (res.musicalKey) setSelectedMusicalKey(res.musicalKey);
        if (res.structurePreset) setSelectedStructurePreset(res.structurePreset);
        if (res.rhymeScheme) setSelectedRhymeScheme(res.rhymeScheme);

        // Update Sliders if returned
        if (res.sliders && typeof res.sliders === 'object') {
          if (res.sliders.sapphic !== undefined) { setSliderSapphic(res.sliders.sapphic); setIsEnabledSapphic(true); }
          if (res.sliders.wittyness !== undefined) { setSliderWittyness(res.sliders.wittyness); setIsEnabledWittyness(true); }
          if (res.sliders.weirdness !== undefined) { setSliderWeirdness(res.sliders.weirdness); setIsEnabledWeirdness(true); }
          if (res.sliders.loudness !== undefined) { setSliderLoudness(res.sliders.loudness); setIsEnabledLoudness(true); }
          if (res.sliders.epic !== undefined) { setSliderEpic(res.sliders.epic); setIsEnabledEpic(true); }
          if (res.sliders.rating !== undefined) { setSliderRating(res.sliders.rating); setIsEnabledRating(true); }
          if (res.sliders.complexity !== undefined) { setSliderComplexity(res.sliders.complexity); setIsEnabledComplexity(true); }
          if (res.sliders.repetitiveness !== undefined) { setSliderRepetitiveness(res.sliders.repetitiveness); setIsEnabledRepetitiveness(true); }
          if (res.sliders.harmonics !== undefined) { setSliderHarmonics(res.sliders.harmonics); setIsEnabledHarmonics(true); }
          if (res.sliders.reverb !== undefined) { setSliderReverb(res.sliders.reverb); setIsEnabledReverb(true); }
          if (res.sliders.tempo !== undefined) { setSliderTempoBpm(res.sliders.tempo); setIsEnabledTempo(true); }
          if (res.sliders.strictness !== undefined) { setSliderStrictness(res.sliders.strictness); setIsEnabledStrictness(true); }
        }

        // Update App Defaults (enforcing selfReflection)
        if (res.defaults && typeof res.defaults === 'object') {
          setAppDefaults(prev => ({ ...prev, ...res.defaults, selfReflection: true }));
        }

        // Update Enabled Tabs
        if (res.enabledTabs && typeof res.enabledTabs === 'object') {
          setEnabledTabs(prev => ({ ...prev, ...res.enabledTabs }));
        }
      }
    }

    const completedLyricsJob = jobs.find(j => 
      (j.generationSettings?.isSceneSongLyrics || j.name.includes('Scene Song Lyrics')) && 
      j.status === 'done' && 
      j.result
    );

    if (completedLyricsJob && completedLyricsJob.result) {
      const res = typeof completedLyricsJob.result === 'object' ? completedLyricsJob.result : null;
      const lyricsText = res?.lyrics || (typeof completedLyricsJob.result === 'string' ? completedLyricsJob.result : res?.text || res?.content || '');
      if (lyricsText && instructions !== lyricsText && !instructions.startsWith('Generating fun lyrics')) {
        setInstructions(lyricsText);
        if (res?.title && (!suggestedTitle || suggestedTitle.startsWith('Scene Song:'))) {
          setSuggestedTitle(res.title);
        }
      }
    }

    // Sync completed Image Inspiration jobs
    const completedImageInspirationJob = jobs.find(j => 
      (j.generationSettings?.isImageInspirationJob || j.name.includes('Image Inspiration')) && 
      j.status === 'done' && 
      j.result
    );

    if (completedImageInspirationJob && completedImageInspirationJob.result) {
      try {
        const rawRes = typeof completedImageInspirationJob.result === 'object'
          ? completedImageInspirationJob.result
          : JSON.parse(String(completedImageInspirationJob.result));

        if (rawRes) {
          if (rawRes.imageDescription) {
            setImageDescription(rawRes.imageDescription);
          }
          if (rawRes.story) {
            try {
              localStorage.setItem('noor-image-inspiration-story', rawRes.story);
            } catch {}
          }
          if (rawRes.title) {
            setSuggestedTitle(rawRes.title);
          }
          if (Array.isArray(rawRes.styles) && rawRes.styles.length > 0) {
            const matched = matchCatalogStyles(rawRes.styles);
            setDialogSelectedStyles(matched);
          }
          if (Array.isArray(rawRes.instruments) && rawRes.instruments.length > 0) {
            const matchedInst = matchCatalogInstruments(rawRes.instruments);
            setDialogSelectedInstruments(matchedInst);
          }
          if (Array.isArray(rawRes.emotions) && rawRes.emotions.length > 0) {
            setSelectedEmotions(rawRes.emotions);
          }
          if (rawRes.leadVocalist) {
            const lead = String(rawRes.leadVocalist).toLowerCase();
            if (['miranda', 'annelies', 'fannie', 'emma'].includes(lead)) {
              setSelectedLead(lead);
            }
          }
          if (rawRes.musicalKey) {
            setSelectedMusicalKey(rawRes.musicalKey);
          }
          if (rawRes.timeSignature) {
            setSelectedTimeSignature(rawRes.timeSignature);
          }
          if (rawRes.tempoBpm) {
            setSliderTempoBpm(rawRes.tempoBpm);
            setIsEnabledTempo(true);
          }
          if (rawRes.sliders && typeof rawRes.sliders === 'object') {
            const sl = rawRes.sliders;
            if (sl.reverb !== undefined) { setSliderReverb(sl.reverb); setIsEnabledReverb(true); }
            if (sl.harmonics !== undefined) { setSliderHarmonics(sl.harmonics); setIsEnabledHarmonics(true); }
            if (sl.epic !== undefined) { setSliderEpic(sl.epic); setIsEnabledEpic(true); }
            if (sl.sapphic !== undefined) { setSliderSapphic(sl.sapphic); setIsEnabledSapphic(true); }
            if (sl.wittyness !== undefined) { setSliderWittyness(sl.wittyness); setIsEnabledWittyness(true); }
            if (sl.weirdness !== undefined) { setSliderWeirdness(sl.weirdness); setIsEnabledWeirdness(true); }
            if (sl.loudness !== undefined) { setSliderLoudness(sl.loudness); setIsEnabledLoudness(true); }
            if (sl.complexity !== undefined) { setSliderComplexity(sl.complexity); setIsEnabledComplexity(true); }
            if (sl.repetitiveness !== undefined) { setSliderRepetitiveness(sl.repetitiveness); setIsEnabledRepetitiveness(true); }
          }
        }
      } catch (err) {
        console.error('Error applying image inspiration result:', err);
      }
    }
  }, [jobs]);

  // Sync state changes into LocalStorage
  useEffect(() => {
    try {
      const payloadToSave = {
        instructions,
        suggestedTitle,
        exactTitle,
        imageDescription,
        imageSeriousness,
        musicInspiration,
        selectedInspirationArtists,
        selectedFocusGroup,
        selectedDialects,
        selectedEmotions,
        dialogSelectedStyles,
        dialogSelectedInstruments,
        selectedBand,
        selectedLead,
        singerInstruments,
        leadSingingPercentage,
        selectedTimeSignature,
        selectedMusicalKey,
        selectedStructurePreset,
        selectedRhymeScheme,
        sliderSapphic,
        sliderWittyness,
        sliderWeirdness,
        sliderLoudness,
        sliderEpic,
        sliderRating,
        sliderComplexity,
        sliderRepetitiveness,
        sliderHarmonics,
        sliderReverb,
        sliderTempoBpm,
        sliderStrictness,
        isEnabledSapphic,
        isEnabledWittyness,
        isEnabledWeirdness,
        isEnabledLoudness,
        isEnabledEpic,
        isEnabledRating,
        isEnabledComplexity,
        isEnabledRepetitiveness,
        isEnabledHarmonics,
        isEnabledReverb,
        isEnabledTempo,
        isEnabledStrictness,
        singerSliderValues,
        singerSliderEnabled,
        appDefaults
      };
      localStorage.setItem(SAVED_SETTINGS_KEY, JSON.stringify(payloadToSave));
    } catch (e) {
      // Ignore
    }
  }, [
    instructions,
    suggestedTitle,
    exactTitle,
    imageDescription,
    imageSeriousness,
    musicInspiration,
    selectedFocusGroup,
    selectedDialects,
    selectedEmotions,
    dialogSelectedStyles,
    dialogSelectedInstruments,
    selectedBand,
    selectedLead,
    leadSingingPercentage,
    selectedTimeSignature,
    selectedMusicalKey,
    selectedStructurePreset,
    selectedRhymeScheme,
    sliderSapphic,
    sliderWittyness,
    sliderWeirdness,
    sliderLoudness,
    sliderEpic,
    sliderRating,
    sliderComplexity,
    sliderRepetitiveness,
    sliderHarmonics,
    sliderReverb,
    sliderTempoBpm,
    sliderStrictness,
    isEnabledSapphic,
    isEnabledWittyness,
    isEnabledWeirdness,
    isEnabledLoudness,
    isEnabledEpic,
    isEnabledRating,
    isEnabledComplexity,
    isEnabledRepetitiveness,
    isEnabledHarmonics,
    isEnabledReverb,
    isEnabledTempo,
    isEnabledStrictness,
    singerSliderValues,
    singerSliderEnabled,
    appDefaults
  ]);

  // Define main tab items list (10 Option Nodes with Lyrics & Directives first)
  const tabsList: TabDefinition[] = [
    { id: 'prompt', label: '1. Lyrics & Directives', icon: <Sparkles size={14} /> },
    { id: 'defaults', label: '2. Defaults Toggles', icon: <Sliders size={14} /> },
    { id: 'intentEnergy', label: '3. Intent & Energy', icon: <Volume2 size={14} /> },
    { id: 'vocalAccentTone', label: '4. Vocal Dialect & Emotion', icon: <Volume2 size={14} /> },
    { id: 'composer', label: '5. Styles & Instruments', icon: <Music size={14} /> },
    { id: 'singers', label: '6. Band & Lead Vocalist', icon: <Music size={14} /> },
    { id: 'musicTheory', label: '7. Time Sig & Musical Key', icon: <Music size={14} /> },
    { id: 'structure', label: '8. Song Structure', icon: <Music size={14} /> },
    { id: 'poetics', label: '9. Rhyme Scheme & Meter', icon: <Music size={14} /> },
    { id: 'sliders', label: '10. Fine-Tuning Sliders', icon: <Sliders size={14} /> }
  ];

  // Define child tabs map
  const tabChildren: Record<TabId, ChildTabDefinition[]> = {
    defaults: [
      { subId: 'band', label: 'Band' },
      { subId: 'culture', label: 'Culture' },
      { subId: 'theme', label: 'Theme' },
      { subId: 'beliefs', label: 'Beliefs' },
      { subId: 'concertPerformance', label: 'Concert & Performance' },
      { subId: 'audience', label: 'Audience Settings' },
      { subId: 'coreInstruments', label: 'Core Instruments' },
      { subId: 'lyricalStyle', label: 'Lyrical Style & Tone' }
    ],
    prompt: [
      { subId: 'inspiration', label: '⭐ Inspiration' },
      { subId: 'imageToSong', label: '📷 Image Inspiration' },
      { subId: 'suggestedTitle', label: 'Suggested Song Title' },
      { subId: 'lyrics', label: 'Lyrics Guidelines & Prompts' },
      { subId: 'artistImpression', label: 'Artist Impression & Ideas' }
    ],
    intentEnergy: [],
    vocalAccentTone: [
      { subId: 'accent', label: 'Regional Dialects' },
      { subId: 'emotion', label: 'Track Emotion' }
    ],
    composer: [
      { subId: 'styles', label: 'Genre Styles' },
      { subId: 'instruments', label: 'Instrument Tracks' }
    ],
    singers: [
      { subId: 'bandFormation', label: 'Band Ensemble' },
      { subId: 'leadVocalist', label: 'Lead Vocalist' },
      { subId: 'individualInstruments', label: 'Individual Instruments' },
      { subId: 'vocalMix', label: 'Lead Singing Share' }
    ],
    musicTheory: [
      { subId: 'timeSignature', label: 'Time Signature' },
      { subId: 'musicalKey', label: 'Musical Key' }
    ],
    structure: [
      { subId: 'songStructure', label: 'Song Structure Presets' }
    ],
    poetics: [
      { subId: 'rhymeScheme', label: 'Rhyme Scheme' }
    ],
    sliders: [
      { subId: 'sapphic', label: 'Sapphic Level' },
      { subId: 'wittyness', label: 'Wittyness Level' },
      { subId: 'weirdness', label: 'Weirdness Level' },
      { subId: 'loudness', label: 'Loudness Level' },
      { subId: 'epic', label: 'Epic Scale' },
      { subId: 'rating', label: 'Content Rating' },
      { subId: 'complexity', label: 'Vocabulary Complexity' },
      { subId: 'repetitiveness', label: 'Chorus Repetitiveness' },
      { subId: 'harmonics', label: 'Harmonic Density' },
      { subId: 'reverb', label: 'Reverb Space' },
      { subId: 'tempo', label: 'Tempo BPM' },
      { subId: 'strictness', label: 'Prompt Strictness' }
    ]
  };

  // Helper counters
  const getTabSelectionCount = (tabId: TabId): number => {
    if (tabId === 'prompt') return (suggestedTitle ? 1 : 0) + (instructions ? 1 : 0) + (imageDescription ? 1 : 0) + selectedInspirationArtists.length;
    if (tabId === 'intentEnergy') return selectedFocusGroup ? 1 : 0;
    if (tabId === 'vocalAccentTone') return selectedDialects.length + selectedEmotions.length;
    if (tabId === 'composer') return dialogSelectedStyles.length + dialogSelectedInstruments.length;
    if (tabId === 'singers') return (selectedBand ? 1 : 0) + (selectedLead ? 1 : 0) + Object.keys(singerInstruments).length;
    if (tabId === 'musicTheory') return (selectedTimeSignature ? 1 : 0) + (selectedMusicalKey ? 1 : 0);
    if (tabId === 'structure') return selectedStructurePreset ? 1 : 0;
    if (tabId === 'poetics') return selectedRhymeScheme ? 1 : 0;
    if (tabId === 'sliders') {
      let count = 0;
      if (isEnabledSapphic) count++;
      if (isEnabledWittyness) count++;
      if (isEnabledWeirdness) count++;
      if (isEnabledLoudness) count++;
      if (isEnabledEpic) count++;
      if (isEnabledRating) count++;
      if (isEnabledComplexity) count++;
      if (isEnabledRepetitiveness) count++;
      if (isEnabledHarmonics) count++;
      if (isEnabledReverb) count++;
      if (isEnabledTempo) count++;
      if (isEnabledStrictness) count++;
      return count;
    }
    return 0;
  };

  const getChildSelectionCount = (tabId: TabId, subId: string): number => {
    if (subId === 'inspiration') return selectedInspirationArtists.length;
    if (tabId === 'sliders') {
      if (subId === 'all') {
        let count = 0;
        if (isEnabledSapphic) count++;
        if (isEnabledWittyness) count++;
        if (isEnabledWeirdness) count++;
        if (isEnabledLoudness) count++;
        if (isEnabledEpic) count++;
        if (isEnabledRating) count++;
        if (isEnabledComplexity) count++;
        if (isEnabledRepetitiveness) count++;
        if (isEnabledHarmonics) count++;
        if (isEnabledReverb) count++;
        if (isEnabledTempo) count++;
        if (isEnabledStrictness) count++;
        return count;
      }
      if (subId === 'topic') {
        let count = 0;
        if (isEnabledSapphic) count++;
        if (isEnabledWittyness) count++;
        if (isEnabledWeirdness) count++;
        if (isEnabledLoudness) count++;
        if (isEnabledEpic) count++;
        if (isEnabledRating) count++;
        return count;
      }
      if (subId === 'musical') {
        let count = 0;
        if (isEnabledComplexity) count++;
        if (isEnabledRepetitiveness) count++;
        if (isEnabledHarmonics) count++;
        if (isEnabledReverb) count++;
        if (isEnabledTempo) count++;
        if (isEnabledStrictness) count++;
        return count;
      }
      if (subId === 'sapphic') return isEnabledSapphic ? 1 : 0;
      if (subId === 'wittyness') return isEnabledWittyness ? 1 : 0;
      if (subId === 'weirdness') return isEnabledWeirdness ? 1 : 0;
      if (subId === 'loudness') return isEnabledLoudness ? 1 : 0;
      if (subId === 'epic') return isEnabledEpic ? 1 : 0;
      if (subId === 'rating') return isEnabledRating ? 1 : 0;
      if (subId === 'complexity') return isEnabledComplexity ? 1 : 0;
      if (subId === 'repetitiveness') return isEnabledRepetitiveness ? 1 : 0;
      if (subId === 'harmonics') return isEnabledHarmonics ? 1 : 0;
      if (subId === 'reverb') return isEnabledReverb ? 1 : 0;
      if (subId === 'tempo') return isEnabledTempo ? 1 : 0;
      if (subId === 'strictness') return isEnabledStrictness ? 1 : 0;
    }
    if (subId === 'suggestedTitle') return suggestedTitle ? 1 : 0;
    if (subId === 'lyrics') return instructions ? 1 : 0;
    if (subId === 'imageToSong') return imageDescription ? 1 : 0;
    if (subId === 'accent') return selectedDialects.length;
    if (subId === 'emotion') return selectedEmotions.length;
    if (subId === 'styles') return dialogSelectedStyles.length;
    if (subId === 'instruments') return dialogSelectedInstruments.length;
    if (subId === 'individualInstruments') return Object.keys(singerInstruments).length;
    return 0;
  };

  // Construct final prompt string
  const generatedLyricsPrompt = useMemo(() => {
    const isDefaultsActive = enabledTabs.defaults ||
      enabledTabs.band ||
      enabledTabs.culture ||
      enabledTabs.theme ||
      enabledTabs.beliefs ||
      enabledTabs.concertPerformance ||
      enabledTabs.audience ||
      enabledTabs.coreInstruments ||
      enabledTabs.lyricalStyle;

    const baseDefaultsPrompt = isDefaultsActive ? generateInstructionPrompt(appDefaults, enabledTabs) : '';
    let promptParts: string[] = [];

    // 1. Defaults Toggles (CORE BAND DEFAULTS & CULTURAL BACKGROUND)
    if (isDefaultsActive && baseDefaultsPrompt) {
      promptParts.push(`=== CORE BAND DEFAULTS & CULTURAL BACKGROUND ===\n${baseDefaultsPrompt}`);
    }

    // 2. Lyrics Directives
    if ((enabledTabs.prompt || enabledTabs.lyrics) && instructions) {
      promptParts.push(`=== DIRECTIVES & LYRICS INSTRUCTIONS ===\n${instructions}`);
    }

    // 3. Suggested Song Title
    if ((enabledTabs.prompt || enabledTabs.suggestedTitle) && suggestedTitle) {
      promptParts.push(`=== TITLE DIRECTIVE ===\n${exactTitle ? `Exact Title: "${suggestedTitle}"` : `Suggested Title: "${suggestedTitle}"`}`);
    }

    // 4. Image Inspiration
    if ((enabledTabs.prompt || enabledTabs.imageToSong) && imageDescription) {
      promptParts.push(`=== IMAGE INSPIRATION (${imageSeriousness}% Literal) ===\n${imageDescription}`);
    }

    // 5. Inspiration Node (Selected Inspiration Artists & Bands)
    if ((enabledTabs.prompt || enabledTabs.inspiration) && selectedInspirationArtists.length > 0) {
      const inspirationDirective = buildInspirationPromptDirective(selectedInspirationArtists);
      if (inspirationDirective) {
        promptParts.push(inspirationDirective);
      }
    }

    // 6. Artist Impression & Ideas
    if ((enabledTabs.prompt || enabledTabs.artistImpression) && musicInspiration) {
      promptParts.push(`=== ARTIST INSPIRATION ===\n${musicInspiration}`);
    }

    // 7. Intent & Energy Focus
    if ((enabledTabs.intentEnergy) && selectedFocusGroup) {
      promptParts.push(`=== ENERGY FOCUS ===\nUmbrella Focus: ${selectedFocusGroup}`);
    }

    // 8. Regional Dialects & Track Emotions
    if (enabledTabs.vocalAccentTone || enabledTabs.accent || enabledTabs.emotion) {
      if ((enabledTabs.vocalAccentTone || enabledTabs.accent) && selectedDialects.length > 0) {
        promptParts.push(`Regional Dialects & Accents: ${selectedDialects.join(', ')}`);
      }
      if ((enabledTabs.vocalAccentTone || enabledTabs.emotion) && selectedEmotions.length > 0) {
        promptParts.push(`Track Emotions: ${selectedEmotions.join(', ')}`);
      }
    }

    // 9. Selected Styles & Instruments
    if (enabledTabs.composer || enabledTabs.styles || enabledTabs.instruments) {
      if ((enabledTabs.composer || enabledTabs.styles) && dialogSelectedStyles.length > 0) {
        promptParts.push(`Selected Styles: ${dialogSelectedStyles.join(', ')}`);
      }
      if ((enabledTabs.composer || enabledTabs.instruments) && dialogSelectedInstruments.length > 0) {
        promptParts.push(`Selected Instruments: ${dialogSelectedInstruments.join(', ')}`);
      }
    }

    // 10. Band Formation, Lead Vocalist & Individual Singer Main Instruments
    if (enabledTabs.singers || enabledTabs.individualInstruments || enabledTabs.bandFormation || enabledTabs.leadVocalist || enabledTabs.vocalMix) {
      let singerPart = `Band Ensemble: ${selectedBand}, Lead Singer: ${selectedLead} (${leadSingingPercentage}% lead share)`;
      if (singerInstruments && Object.keys(singerInstruments).length > 0 && (enabledTabs.singers || enabledTabs.individualInstruments)) {
        const instsText = SINGERS.map(s => `${s.name}: ${singerInstruments[s.id] || 'Default'}`).join(', ');
        singerPart += `\nIndividual Singer Main Instruments: ${instsText}`;
      }
      promptParts.push(singerPart);
    }

    // 11. Time Signature & Musical Key
    if (enabledTabs.musicTheory || enabledTabs.timeSignature || enabledTabs.musicalKey) {
      promptParts.push(`Time Signature: ${selectedTimeSignature}, Key: ${selectedMusicalKey}`);
    }

    // 12. Song Structure Preset
    if (enabledTabs.structure || enabledTabs.songStructure) {
      promptParts.push(`Structure Preset: ${selectedStructurePreset}`);
    }

    // 13. Rhyme Scheme
    if (enabledTabs.poetics || enabledTabs.rhymeScheme) {
      promptParts.push(`Rhyme Scheme: ${selectedRhymeScheme}`);
    }

    // 14. Fine-Tuning Sliders
    const isAnySliderActive = enabledTabs.sliders ||
      enabledTabs.sapphic || enabledTabs.wittyness || enabledTabs.weirdness || enabledTabs.loudness ||
      enabledTabs.epic || enabledTabs.rating || enabledTabs.complexity || enabledTabs.repetitiveness ||
      enabledTabs.harmonics || enabledTabs.reverb || enabledTabs.tempo || enabledTabs.strictness ||
      isEnabledSapphic || isEnabledWittyness || isEnabledWeirdness || isEnabledLoudness ||
      isEnabledEpic || isEnabledRating || isEnabledComplexity || isEnabledRepetitiveness ||
      isEnabledHarmonics || isEnabledReverb || isEnabledTempo || isEnabledStrictness ||
      Object.values(singerSliderEnabled).some(Boolean);

    if (isAnySliderActive) {
      let sliderParts: string[] = [];
      if (isEnabledSapphic || enabledTabs.sapphic) sliderParts.push(`Sapphic (Lesbian) Theme: ${getSapphicStep(sliderSapphic).label} - ${getSapphicStep(sliderSapphic).description}`);
      if (isEnabledWittyness || enabledTabs.wittyness) sliderParts.push(`Wittyness/Humor: ${getSillyStep(sliderWittyness).label} - ${getSillyStep(sliderWittyness).description}`);
      if (isEnabledWeirdness || enabledTabs.weirdness) sliderParts.push(`Weirdness/Wildness: ${getWildnessStep(sliderWeirdness).label} - ${getWildnessStep(sliderWeirdness).description}`);
      if (isEnabledLoudness || enabledTabs.loudness) sliderParts.push(`Loudness/Energy: ${getLoudnessStep(sliderLoudness).label} - ${getLoudnessStep(sliderLoudness).description}`);
      if (isEnabledEpic || enabledTabs.epic) sliderParts.push(`Epic Scale: ${getEpicStep(sliderEpic).label} - ${getEpicStep(sliderEpic).description}`);
      if (isEnabledRating || enabledTabs.rating) sliderParts.push(`Content Rating: ${getRatingStep(sliderRating).code ? `${getRatingStep(sliderRating).code} - ` : ''}${getRatingStep(sliderRating).label} - ${getRatingStep(sliderRating).description}`);
      if (isEnabledComplexity || enabledTabs.complexity) sliderParts.push(`Vocabulary Complexity: ${getComplexityStep(sliderComplexity).label} - ${getComplexityStep(sliderComplexity).description}`);
      if (isEnabledRepetitiveness || enabledTabs.repetitiveness) sliderParts.push(`Chorus Repetitiveness: ${getRepetitivenessStep(sliderRepetitiveness).label} - ${getRepetitivenessStep(sliderRepetitiveness).description}`);
      if (isEnabledHarmonics || enabledTabs.harmonics) sliderParts.push(`Harmonic Vocal Density: ${getHarmonicsStep(sliderHarmonics).label} - ${getHarmonicsStep(sliderHarmonics).description}`);
      if (isEnabledReverb || enabledTabs.reverb) sliderParts.push(`Acoustic Reverb Space: ${getReverbStep(sliderReverb).label} - ${getReverbStep(sliderReverb).description}`);
      if (isEnabledTempo || enabledTabs.tempo) sliderParts.push(`Tempo: ${sliderTempoBpm} BPM`);
      if (isEnabledStrictness || enabledTabs.strictness) sliderParts.push(`Prompt Strictness: ${getStrictnessStep(sliderStrictness).label} - ${getStrictnessStep(sliderStrictness).description}`);

      const paramList = [
        { id: 'sapphic', name: 'Sapphic Theme', getStep: (v: number) => getSapphicStep(v) },
        { id: 'wittyness', name: 'Wittyness', getStep: (v: number) => getSillyStep(v) },
        { id: 'weirdness', name: 'Weirdness', getStep: (v: number) => getWildnessStep(v) },
        { id: 'loudness', name: 'Loudness', getStep: (v: number) => getLoudnessStep(v) },
        { id: 'epic', name: 'Epic Scale', getStep: (v: number) => getEpicStep(v) },
        { id: 'rating', name: 'Rating', getStep: (v: number) => getRatingStep(v) },
        { id: 'complexity', name: 'Complexity', getStep: (v: number) => getComplexityStep(v) },
        { id: 'repetitiveness', name: 'Repetitiveness', getStep: (v: number) => getRepetitivenessStep(v) },
        { id: 'harmonics', name: 'Harmonics', getStep: (v: number) => getHarmonicsStep(v) },
        { id: 'reverb', name: 'Reverb Space', getStep: (v: number) => getReverbStep(v) },
        { id: 'tempo', name: 'Tempo', getStep: (v: number) => ({ label: `${v} BPM`, description: undefined }) },
        { id: 'strictness', name: 'Strictness', getStep: (v: number) => getStrictnessStep(v) }
      ];

      paramList.forEach(p => {
        SINGERS.forEach(s => {
          const key = `${p.id}_${s.id}`;
          if (singerSliderEnabled[key]) {
            const val = singerSliderValues[key] !== undefined ? singerSliderValues[key] : 0;
            const stepInfo = p.getStep(val);
            sliderParts.push(`  └ Singer Custom Override [${s.name} - ${p.name}]: ${stepInfo.label}${stepInfo.description ? ` - ${stepInfo.description}` : ''}`);
          }
        });
      });
      
      if (sliderParts.length > 0) {
        promptParts.push(`=== FINE-TUNING SLIDERS ===\n${sliderParts.join('\n')}`);
      }
    }

    return promptParts.join('\n\n');
  }, [
    appDefaults,
    enabledTabs,
    instructions,
    suggestedTitle,
    exactTitle,
    imageDescription,
    imageSeriousness,
    selectedInspirationArtists,
    musicInspiration,
    selectedFocusGroup,
    selectedDialects,
    selectedEmotions,
    dialogSelectedStyles,
    dialogSelectedInstruments,
    selectedBand,
    selectedLead,
    singerInstruments,
    leadSingingPercentage,
    selectedTimeSignature,
    selectedMusicalKey,
    selectedStructurePreset,
    selectedRhymeScheme,
    sliderSapphic,
    sliderWittyness,
    sliderWeirdness,
    sliderLoudness,
    sliderEpic,
    sliderRating,
    sliderComplexity,
    sliderRepetitiveness,
    sliderHarmonics,
    sliderReverb,
    sliderTempoBpm,
    sliderStrictness,
    singerSliderValues,
    singerSliderEnabled,
    isEnabledSapphic,
    isEnabledWittyness,
    isEnabledWeirdness,
    isEnabledLoudness,
    isEnabledEpic,
    isEnabledRating,
    isEnabledComplexity,
    isEnabledRepetitiveness,
    isEnabledHarmonics,
    isEnabledReverb,
    isEnabledTempo,
    isEnabledStrictness
  ]);

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(generatedLyricsPrompt);
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 2000);
  };

  const handleGenerateClick = () => {
    const payload = {
      title: suggestedTitle || 'Untitled Katje Composition',
      prompt: generatedLyricsPrompt,
      defaults: appDefaults,
      styles: dialogSelectedStyles,
      instruments: dialogSelectedInstruments,
      singerInstruments: singerInstruments,
      tempoBpm: sliderTempoBpm
    };

    if (onConfirm) {
      const formattedSingerInstruments: Record<string, string[]> = {};
      Object.entries(singerInstruments).forEach(([singerId, instName]) => {
        if (instName) {
          formattedSingerInstruments[singerId] = [instName];
        }
      });

      const inspirationDirective = buildInspirationPromptDirective(selectedInspirationArtists);
      const resolvedMusicInspiration = [inspirationDirective, musicInspiration].filter(Boolean).join('\n\n');

      onConfirm(
        instructions, 
        resolvedMusicInspiration, 
        selectedDialects.join(','), 
        isEnabledRating ? getRatingStep(sliderRating).label : undefined, 
        [], 
        selectedEmotions[0], 
        dialogSelectedInstruments, 
        dialogSelectedStyles,
        false, // targetChildVoice
        [], // targetSoundEffects
        { enabled: false, duration: 15, instruments: [] }, // targetIntroConfig
        { enabled: false, duration: 15, instruments: [] }, // targetOutroConfig
        appDefaults?.selfReflection, // targetSelfReflect
        undefined, // targetInnuendoLevel
        appDefaults?.lyricsReversal, // targetReverseLyrics
        isEnabledEpic ? sliderEpic : undefined, // targetEpicLevel
        selectedRhymeScheme, // targetRhymeId
        isEnabledWittyness ? sliderWittyness : undefined, // targetSillyLevel
        isEnabledSapphic ? sliderSapphic : undefined, // targetSapphicLevel
        isEnabledWeirdness ? sliderWeirdness : undefined, // targetWildnessLevel
        selectedMusicalKey, // targetMusicalKey
        isEnabledTempo ? sliderTempoBpm : undefined, // targetBpm
        selectedTimeSignature, // targetTimeSignature
        { miranda: false, annelies: false, fannie: false, emma: false }, // targetSingerChildVoices
        { miranda: selectedEmotions[0] || 'Joyful', annelies: selectedEmotions[0] || 'Joyful', fannie: selectedEmotions[0] || 'Joyful', emma: selectedEmotions[0] || 'Joyful' }, // targetSingerEmotions
        { miranda: '', annelies: '', fannie: '', emma: '' }, // targetSingerPrompts
        formattedSingerInstruments, // targetSingerInstruments
        { miranda: false, annelies: false, fannie: false, emma: false }, // targetSingerPartnerUps
        {}, // targetSingerNationalities
        suggestedTitle, // targetSuggestedTitle
        enabledTabs, // targetEnabledTabs
        exactTitle, // targetExactTitle
        selectedFocusGroup ? [selectedFocusGroup] : [], // targetIntentEnergy
        imageDescription // targetImageDescription
      );
    }

    if (onGenerateSong) {
      onGenerateSong(payload);
    }

    onClose();
  };

  // Story Mode State and Integration
  const [showStoryModeDialog, setShowStoryModeDialog] = useState<boolean>(false);

  const unusedOptionsList = useMemo(() => {
    const list: { category: string; value: string }[] = [];
    list.push({ category: 'Musical Key', value: selectedMusicalKey });
    list.push({ category: 'Tempo (BPM)', value: isEnabledTempo ? `${sliderTempoBpm} BPM` : 'Default (120 BPM)' });
    list.push({ category: 'Time Signature', value: selectedTimeSignature });
    list.push({ category: 'Song Structure', value: selectedStructurePreset });
    list.push({ category: 'Rhyme Scheme', value: selectedRhymeScheme });
    if (dialogSelectedStyles.length > 0) {
      list.push({ category: 'Selected Styles', value: dialogSelectedStyles.join(', ') });
    }
    if (dialogSelectedInstruments.length > 0) {
      list.push({ category: 'Selected Instruments', value: dialogSelectedInstruments.join(', ') });
    }
    const activeSliders: string[] = [];
    if (isEnabledSapphic) activeSliders.push(`Sapphic: ${sliderSapphic}%`);
    if (isEnabledWittyness) activeSliders.push(`Wit: ${sliderWittyness}%`);
    if (isEnabledWeirdness) activeSliders.push(`Surrealism: ${sliderWeirdness}%`);
    if (isEnabledLoudness) activeSliders.push(`Loudness: ${sliderLoudness}%`);
    if (isEnabledEpic) activeSliders.push(`Epic: ${sliderEpic}%`);
    if (isEnabledRating) activeSliders.push(`Rating: ${getRatingStep(sliderRating).label}`);
    if (isEnabledComplexity) activeSliders.push(`Complexity: ${sliderComplexity}%`);
    if (isEnabledRepetitiveness) activeSliders.push(`Repetitiveness: ${sliderRepetitiveness}%`);
    if (isEnabledHarmonics) activeSliders.push(`Harmonics: ${sliderHarmonics}%`);
    if (isEnabledReverb) activeSliders.push(`Reverb: ${sliderReverb}%`);
    if (isEnabledStrictness) activeSliders.push(`Strictness: ${sliderStrictness}%`);
    if (activeSliders.length > 0) {
      list.push({ category: 'Fine-Tuning Sliders', value: activeSliders.join(' | ') });
    }
    return list;
  }, [
    selectedMusicalKey, isEnabledTempo, sliderTempoBpm, selectedTimeSignature,
    selectedStructurePreset, selectedRhymeScheme, dialogSelectedStyles, dialogSelectedInstruments,
    isEnabledSapphic, sliderSapphic, isEnabledWittyness, sliderWittyness,
    isEnabledWeirdness, sliderWeirdness, isEnabledLoudness, sliderLoudness,
    isEnabledEpic, sliderEpic, isEnabledRating, sliderRating,
    isEnabledComplexity, sliderComplexity, isEnabledRepetitiveness, sliderRepetitiveness,
    isEnabledHarmonics, sliderHarmonics, isEnabledReverb, sliderReverb,
    isEnabledStrictness, sliderStrictness
  ]);

  const dashboardSummary = useMemo(() => {
    let summary = `Title: ${exactTitle || suggestedTitle || currentTitle || 'Untitled'}\n`;
    summary += `Directives: ${instructions || 'None'}\n`;
    if (selectedEmotions.length > 0) summary += `Emotion: ${selectedEmotions.join(', ')}\n`;
    if (selectedDialects.length > 0) summary += `Dialect: ${selectedDialects.join(', ')}\n`;
    if (selectedFocusGroup) summary += `Intent & Energy: ${selectedFocusGroup}\n`;
    if (musicInspiration) summary += `Inspiration: ${musicInspiration}\n`;
    if (imageDescription) summary += `Image Description: ${imageDescription}\n`;
    summary += `Selected Band / Singer Lead: ${selectedBand || 'Full Band'} (${selectedLead || 'Miranda'})\n`;
    return summary;
  }, [
    exactTitle, suggestedTitle, currentTitle, instructions, selectedEmotions, selectedDialects,
    selectedFocusGroup, musicInspiration, imageDescription, selectedBand, selectedLead
  ]);

  const handleApproveAndGenerateStorySong = (storyText: string, storyTitle: string, unusedOptionsStr: string, charactersData?: any) => {
    const token = localStorage.getItem('noor-api-key') || '';
    const ratingLabel = isEnabledRating ? getRatingStep(sliderRating).label : 'PG';

    // 1. Generate Song based on Story Mode Narrative (ignoring lyrics and options used to write story)
    const songPrompt = GENERATE_SONG_FROM_STORY_PROMPT(
      storyTitle,
      storyText,
      unusedOptionsStr,
      ratingLabel
    );
    addJob(
      `Lyrics: ${storyTitle}`,
      'high',
      songPrompt,
      token,
      {
        enabledTabs,
        suggestedTitle: storyTitle,
        exactTitle: storyTitle,
        storyText
      }
    );

    // 2. Generate Cover Art Prompts based on Story Scenes replacing singers with story characters
    const baseSceneJson = charactersData ? (typeof charactersData === 'string' ? charactersData : JSON.stringify(charactersData)) : undefined;
    const coverArtPrompt = GENERATE_STORY_MODE_COVER_ART_PROMPT(storyTitle, storyText, baseSceneJson);
    addJob(
      `Cover Art Prompts: ${storyTitle}`,
      'high',
      coverArtPrompt,
      token
    );

    setShowStoryModeDialog(false);
    onClose();
  };

  const isAnalyzingImage = useMemo(() => {
    return jobs.some(j =>
      (j.generationSettings?.isImageInspirationJob || j.name.includes('Image Inspiration')) &&
      (j.status === 'running' || j.status === 'pending')
    );
  }, [jobs]);

  return (
    <Dialog
      isOpen={isOpen}
      onClose={dialogPage === 'overview' ? () => setDialogPage('options') : onClose}
      onConfirm={dialogPage === 'options' ? () => setDialogPage('overview') : handleGenerateClick}
      title={dialogPage === 'options' ? "Generate / Modify Song Options" : "Song Generation Overview"}
      size="full"
      headerActions={
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowStoryModeDialog(true)}
            className="px-3.5 py-1.5 text-xs font-black bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 rounded-xl border border-amber-500/40 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            <BookOpen size={14} />
            Story Mode
          </button>
          <button
            type="button"
            onClick={handleCopyPrompt}
            className="px-3 py-1.5 text-xs font-black bg-lavender-surface hover:bg-lavender-surface/80 text-lavender-text rounded-xl border border-lavender-border/40 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            {copiedSuccess ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
            {copiedSuccess ? 'Copied!' : 'Copy Prompt'}
          </button>
        </div>
      }
    >
      <div className="flex flex-col h-[75vh] min-h-[500px] w-full overflow-hidden bg-lavender-bg rounded-2xl border border-lavender-border/30 shadow-2xl">
        {dialogPage === 'options' ? (
          /* PAGE 1: Options Configuration Tree & Tabs */
          <div className="flex flex-1 overflow-hidden">
            {/* Left Sidebar Tree View Navigation */}
            <DashboardTreeView
              tabsList={tabsList}
              tabChildren={tabChildren}
              activeTabId={activeTabId}
              setActiveTabId={setActiveTabId}
              expandedNodes={expandedNodes}
              setExpandedNodes={setExpandedNodes}
              enabledTabs={enabledTabs}
              toggleTabEnabled={toggleTabEnabled}
              getTabSelectionCount={getTabSelectionCount}
              getChildSelectionCount={getChildSelectionCount}
              defaultsSubTab={defaultsSubTab}
              setDefaultsSubTab={setDefaultsSubTab}
              promptSubTab={promptSubTab}
              setPromptSubTab={setPromptSubTab}
              accentToneSubTab={accentToneSubTab}
              setAccentToneSubTab={setAccentToneSubTab}
              composerSubTab={composerSubTab}
              setComposerSubTab={setComposerSubTab}
              singersSubTab={singersSubTab}
              setSingersSubTab={setSingersSubTab}
              musicTheorySubTab={musicTheorySubTab}
              setMusicTheorySubTab={setMusicTheorySubTab}
              structureSubTab={structureSubTab}
              setStructureSubTab={setStructureSubTab}
              poeticsSubTab={poeticsSubTab}
              setPoeticsSubTab={setPoeticsSubTab}
              slidersSubTab={slidersSubTab}
              setSlidersSubTab={setSlidersSubTab}
            />

            {/* Right Content Area */}
            <div className="flex-1 overflow-y-auto p-5 custom-scrollbar bg-black/10">
              {isSceneSongActive && (
                <div className="mb-4 p-3.5 bg-gradient-to-r from-amber-950/80 via-purple-950/80 to-indigo-950/80 border border-amber-500/50 rounded-xl flex items-center justify-between gap-3 shadow-lg animate-pulse">
                  <div className="flex items-center gap-3">
                    <RefreshCw size={20} className="animate-spin text-amber-400 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-amber-200 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles size={13} className="text-amber-400" />
                        AI is Generating Fun Scene Song & Lyrics...
                      </h4>
                      <p className="text-[11px] text-amber-100/80 mt-0.5">
                        Analyzing your scene actions, character wardrobes, and location setting to build catchy song options, genre, instruments, and full lyrics. Fields will auto-fill when complete.
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold px-2.5 py-1 bg-amber-500/20 text-amber-300 rounded border border-amber-500/40 uppercase tracking-wider flex-shrink-0">
                    {activeSceneJobs.length} AI Job{activeSceneJobs.length > 1 ? 's' : ''} Running
                  </span>
                </div>
              )}
              {activeTabId === 'defaults' && (
                <DefaultsTab
                  appDefaults={appDefaults}
                  setAppDefaults={setAppDefaults}
                  defaultsSubTab={defaultsSubTab}
                  setDefaultsSubTab={setDefaultsSubTab}
                />
              )}

              {activeTabId === 'prompt' && (
                <PromptTab
                  promptSubTab={promptSubTab}
                  setPromptSubTab={setPromptSubTab}
                  instructions={instructions}
                  setInstructions={setInstructions}
                  suggestedTitle={suggestedTitle}
                  setSuggestedTitle={setSuggestedTitle}
                  exactTitle={exactTitle}
                  setExactTitle={setExactTitle}
                  imageDescription={imageDescription}
                  setImageDescription={setImageDescription}
                  imageSeriousness={imageSeriousness}
                  setImageSeriousness={setImageSeriousness}
                  musicInspiration={musicInspiration}
                  setMusicInspiration={setMusicInspiration}
                  selectedInspirationArtists={selectedInspirationArtists}
                  setSelectedInspirationArtists={setSelectedInspirationArtists}
                  dialogSelectedStyles={dialogSelectedStyles}
                  setDialogSelectedStyles={setDialogSelectedStyles}
                  dialogSelectedInstruments={dialogSelectedInstruments}
                  setDialogSelectedInstruments={setDialogSelectedInstruments}
                  selectedEmotions={selectedEmotions}
                  setSelectedEmotions={setSelectedEmotions}
                  selectedLead={selectedLead}
                  setSelectedLead={setSelectedLead}
                  selectedMusicalKey={selectedMusicalKey}
                  setSelectedMusicalKey={setSelectedMusicalKey}
                  selectedTimeSignature={selectedTimeSignature}
                  setSelectedTimeSignature={setSelectedTimeSignature}
                  sliderTempoBpm={sliderTempoBpm}
                  setSliderTempoBpm={setSliderTempoBpm}
                  setSliderSapphic={setSliderSapphic}
                  setIsEnabledSapphic={setIsEnabledSapphic}
                  setSliderWittyness={setSliderWittyness}
                  setIsEnabledWittyness={setIsEnabledWittyness}
                  setSliderWeirdness={setSliderWeirdness}
                  setIsEnabledWeirdness={setIsEnabledWeirdness}
                  setSliderLoudness={setSliderLoudness}
                  setIsEnabledLoudness={setIsEnabledLoudness}
                  setSliderEpic={setSliderEpic}
                  setIsEnabledEpic={setIsEnabledEpic}
                  setSliderComplexity={setSliderComplexity}
                  setIsEnabledComplexity={setIsEnabledComplexity}
                  setSliderRepetitiveness={setSliderRepetitiveness}
                  setIsEnabledRepetitiveness={setIsEnabledRepetitiveness}
                  setSliderHarmonics={setSliderHarmonics}
                  setIsEnabledHarmonics={setIsEnabledHarmonics}
                  setSliderReverb={setSliderReverb}
                  setIsEnabledReverb={setIsEnabledReverb}
                  setIsEnabledTempo={setIsEnabledTempo}
                  onAddJob={addJob}
                  isAnalyzingImage={isAnalyzingImage}
                  onGenerateSong={() => {
                    handleGenerateClick();
                  }}
                />
              )}

              {activeTabId === 'intentEnergy' && (
                <IntentEnergyTab
                  isEnabled={!!enabledTabs.intentEnergy}
                  selectedFocusGroup={selectedFocusGroup}
                  setSelectedFocusGroup={setSelectedFocusGroup}
                />
              )}

              {activeTabId === 'vocalAccentTone' && (
                <VocalAccentToneTab
                  accentToneSubTab={accentToneSubTab}
                  setAccentToneSubTab={setAccentToneSubTab}
                  selectedDialects={selectedDialects}
                  setSelectedDialects={setSelectedDialects}
                  selectedEmotions={selectedEmotions}
                  setSelectedEmotions={setSelectedEmotions}
                />
              )}

              {activeTabId === 'composer' && (
                <ComposerTab
                  composerSubTab={composerSubTab}
                  setComposerSubTab={setComposerSubTab}
                  dialogSelectedStyles={dialogSelectedStyles}
                  setDialogSelectedStyles={setDialogSelectedStyles}
                  dialogSelectedInstruments={dialogSelectedInstruments}
                  setDialogSelectedInstruments={setDialogSelectedInstruments}
                />
              )}

              {activeTabId === 'singers' && (
                <SingersTab
                  singersSubTab={singersSubTab}
                  setSingersSubTab={setSingersSubTab}
                  selectedBand={selectedBand}
                  setSelectedBand={setSelectedBand}
                  selectedLead={selectedLead}
                  setSelectedLead={setSelectedLead}
                  leadSingingPercentage={leadSingingPercentage}
                  setLeadSingingPercentage={setLeadSingingPercentage}
                  singerInstruments={singerInstruments}
                  setSingerInstruments={setSingerInstruments}
                />
              )}

              {activeTabId === 'musicTheory' && (
                <MusicTheoryTab
                  musicTheorySubTab={musicTheorySubTab}
                  setMusicTheorySubTab={setMusicTheorySubTab}
                  selectedTimeSignature={selectedTimeSignature}
                  setSelectedTimeSignature={setSelectedTimeSignature}
                  selectedMusicalKey={selectedMusicalKey}
                  setSelectedMusicalKey={setSelectedMusicalKey}
                />
              )}

              {activeTabId === 'structure' && (
                <StructureTab
                  structureSubTab={structureSubTab}
                  setStructureSubTab={setStructureSubTab}
                  selectedStructurePreset={selectedStructurePreset}
                  setSelectedStructurePreset={setSelectedStructurePreset}
                  isEnabledStructure={!!enabledTabs.songStructure}
                />
              )}

              {activeTabId === 'poetics' && (
                <PoeticsTab
                  poeticsSubTab={poeticsSubTab}
                  setPoeticsSubTab={setPoeticsSubTab}
                  selectedRhymeScheme={selectedRhymeScheme}
                  setSelectedRhymeScheme={setSelectedRhymeScheme}
                />
              )}

              {activeTabId === 'sliders' && (
                <SlidersTab
                  slidersSubTab={slidersSubTab}
                  setSlidersSubTab={setSlidersSubTab}
                  sliderSapphic={sliderSapphic}
                  setSliderSapphic={setSliderSapphic}
                  sliderWittyness={sliderWittyness}
                  setSliderWittyness={setSliderWittyness}
                  sliderWeirdness={sliderWeirdness}
                  setSliderWeirdness={setSliderWeirdness}
                  sliderLoudness={sliderLoudness}
                  setSliderLoudness={setSliderLoudness}
                  sliderEpic={sliderEpic}
                  setSliderEpic={setSliderEpic}
                  sliderRating={sliderRating}
                  setSliderRating={setSliderRating}
                  sliderComplexity={sliderComplexity}
                  setSliderComplexity={setSliderComplexity}
                  sliderRepetitiveness={sliderRepetitiveness}
                  setSliderRepetitiveness={setSliderRepetitiveness}
                  sliderHarmonics={sliderHarmonics}
                  setSliderHarmonics={setSliderHarmonics}
                  sliderReverb={sliderReverb}
                  setSliderReverb={setSliderReverb}
                  sliderTempoBpm={sliderTempoBpm}
                  setSliderTempoBpm={setSliderTempoBpm}
                  sliderStrictness={sliderStrictness}
                  setSliderStrictness={setSliderStrictness}
                  isEnabledSapphic={isEnabledSapphic}
                  setIsEnabledSapphic={setIsEnabledSapphic}
                  isEnabledWittyness={isEnabledWittyness}
                  setIsEnabledWittyness={setIsEnabledWittyness}
                  isEnabledWeirdness={isEnabledWeirdness}
                  setIsEnabledWeirdness={setIsEnabledWeirdness}
                  isEnabledLoudness={isEnabledLoudness}
                  setIsEnabledLoudness={setIsEnabledLoudness}
                  isEnabledEpic={isEnabledEpic}
                  setIsEnabledEpic={setIsEnabledEpic}
                  isEnabledRating={isEnabledRating}
                  setIsEnabledRating={setIsEnabledRating}
                  isEnabledComplexity={isEnabledComplexity}
                  setIsEnabledComplexity={setIsEnabledComplexity}
                  isEnabledRepetitiveness={isEnabledRepetitiveness}
                  setIsEnabledRepetitiveness={setIsEnabledRepetitiveness}
                  isEnabledHarmonics={isEnabledHarmonics}
                  setIsEnabledHarmonics={setIsEnabledHarmonics}
                  isEnabledReverb={isEnabledReverb}
                  setIsEnabledReverb={setIsEnabledReverb}
                  isEnabledTempo={isEnabledTempo}
                  setIsEnabledTempo={setIsEnabledTempo}
                  isEnabledStrictness={isEnabledStrictness}
                  setIsEnabledStrictness={setIsEnabledStrictness}
                  singerSliderValues={singerSliderValues}
                  setSingerSliderValues={setSingerSliderValues}
                  singerSliderEnabled={singerSliderEnabled}
                  setSingerSliderEnabled={setSingerSliderEnabled}
                />
              )}
            </div>
          </div>
        ) : (
          /* PAGE 2: Final Summary Overview */
          <div className="flex-1 overflow-y-auto p-5 custom-scrollbar bg-black/10">
            <OverviewTab
              suggestedTitle={suggestedTitle}
              exactTitle={exactTitle}
              instructions={instructions}
              imageDescription={imageDescription}
              imageSeriousness={imageSeriousness}
              musicInspiration={musicInspiration}
              selectedInspirationArtists={selectedInspirationArtists}
              selectedFocusGroup={selectedFocusGroup}
              selectedDialects={selectedDialects}
              selectedEmotions={selectedEmotions}
              dialogSelectedStyles={dialogSelectedStyles}
              dialogSelectedInstruments={dialogSelectedInstruments}
              selectedBand={selectedBand}
              selectedLead={selectedLead}
              singerInstruments={singerInstruments}
              leadSingingPercentage={leadSingingPercentage}
              selectedTimeSignature={selectedTimeSignature}
              selectedMusicalKey={selectedMusicalKey}
              selectedStructurePreset={selectedStructurePreset}
              selectedRhymeScheme={selectedRhymeScheme}
              sliderSapphic={sliderSapphic}
              sliderWittyness={sliderWittyness}
              sliderWeirdness={sliderWeirdness}
              sliderLoudness={sliderLoudness}
              sliderEpic={sliderEpic}
              sliderRating={sliderRating}
              sliderComplexity={sliderComplexity}
              sliderRepetitiveness={sliderRepetitiveness}
              sliderHarmonics={sliderHarmonics}
              sliderReverb={sliderReverb}
              sliderTempoBpm={sliderTempoBpm}
              sliderStrictness={sliderStrictness}
              isEnabledSapphic={isEnabledSapphic}
              isEnabledWittyness={isEnabledWittyness}
              isEnabledWeirdness={isEnabledWeirdness}
              isEnabledLoudness={isEnabledLoudness}
              isEnabledEpic={isEnabledEpic}
              isEnabledRating={isEnabledRating}
              isEnabledComplexity={isEnabledComplexity}
              isEnabledRepetitiveness={isEnabledRepetitiveness}
              isEnabledHarmonics={isEnabledHarmonics}
              isEnabledReverb={isEnabledReverb}
              isEnabledTempo={isEnabledTempo}
              isEnabledStrictness={isEnabledStrictness}
              generatedLyricsPrompt={generatedLyricsPrompt}
              appDefaults={appDefaults}
              onCopyPrompt={handleCopyPrompt}
              onGenerateSong={handleGenerateClick}
              copiedSuccess={copiedSuccess}
            />
          </div>
        )}
      </div>

      <StoryModeDialog
        isOpen={showStoryModeDialog}
        onClose={() => setShowStoryModeDialog(false)}
        songTitle={exactTitle || suggestedTitle || currentTitle || 'Untitled Song'}
        lyrics={generatedLyricsPrompt}
        instructions={instructions}
        dashboardSummary={dashboardSummary}
        unusedOptionsList={unusedOptionsList}
        initialStory={initialStory || ''}
        jobs={jobs}
        onApproveAndGenerate={handleApproveAndGenerateStorySong}
      />
    </Dialog>
  );
};
