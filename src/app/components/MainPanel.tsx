import React, { useState, useEffect, useRef } from 'react';
import { Dialog } from './Dialog';
import { ImageView } from './ImageView';
import { SINGERS_DETAILED } from '../../constants/singersDetailed';
import { 
  generateScenePrompts, 
  downloadSingerActionSceneJson, 
  SingerActionSceneResult,
  LOCATION_OPTIONS,
  WEATHER_OPTIONS,
  MOOD_OPTIONS,
  getFarmhouseLocationDetails,
  stripInstrumentsFromText,
  stripClothingFromText,
  shuffleArray,
  appendStyleToPrompt,
  stripStyleFromPrompt,
  sanitizePromptText,
  replaceGenderReferences
} from '../../lib/singerActions';
import { buildWardrobePromptText, getSuggestedWardrobeForAdventure } from '../../lib/wardrobesHelper';
import { useJobQueue } from '../hooks/useJobQueue';
import { 
  RotateCcw, Sparkles, ChevronLeft, ChevronRight, Check, Copy, Compass, 
  Wand2, Shirt, UserCheck, Zap, Palette, Users, Sun, Film, Image as ImageIcon
} from 'lucide-react';
import { ADVENTURE_CATEGORIES, getLocationsForAdventure, findLocationInAllAdventures } from '../../constants/adventuresData';
import { SYSTEM_INSTRUCTIONS_SINGER_ACTION_PROMPT } from '../../constants/instructions';
import { GENERATE_SINGER_ACTION_PROMPT } from '../../constants/prompts';
import { 
  IMAGE_STYLE_CATEGORIES, 
  IMAGE_STYLES, 
  getImageStyleById, 
  getCategoryForStyleId,
  getStylesByCategory,
  ImageStyleCategory
} from '../../constants/imageStyles';
import { 
  CHARACTER_FRAMING_OPTIONS, 
  DEFAULT_CHARACTER_FRAMING 
} from '../../constants/characterFraming';
import { 
  DEFAULT_CHARACTER_AGE, 
  DEFAULT_IS_TOMBOY, 
  buildCharacterAgeLabel 
} from '../../constants/characterAge';
import { 
  LIGHT_GROUPS, 
  MOOD_GROUPS, 
  getLightById, 
  getMoodById, 
  getWeatherById,
  getLightsForGroup,
  getMoodsForGroup
} from '../../constants/sceneOptions';
import { 
  PROMPT_RATING_OPTIONS, 
  PromptRatingId, 
  DEFAULT_PROMPT_RATING, 
  getPromptRatingById 
} from '../../constants/promptRating';
import { 
  filterPromptStringBySegmentIds,
  parsePromptSections
} from '../../lib/promptColorizer';
import { 
  buildCombinedSceneDescription,
  removeSceneLabels,
  formatFluidSceneText
} from '../../lib/sceneDescriptionHelper';

// Import our 9 discrete step components
import { Step1Characters } from './actions/Step1Characters';
import { Step2Scene } from './actions/Step2Scene';
import { Step3Theme } from './actions/Step3Theme';
import { Step3Wardrobes } from './actions/Step3Wardrobes';
import { Step4CharacterDetails } from './actions/Step4CharacterDetails';
import { Step5Actions } from './actions/Step5Actions';
import { Step6StyleAndGeneration } from './actions/Step6StyleAndGeneration';
import { Step7GeneratedPrompt } from './actions/Step7GeneratedPrompt';
import { Step8Image } from './actions/Step8Image';

const WIZARD_PAGE_KEY = 'noor_action_wizard_page_v4';
const ACTIONS_STORAGE_KEY = 'noor_singer_actions_v2';
const WARDROBES_STORAGE_KEY = 'noor_singer_wardrobes_v2';
const SCENE_STORAGE_KEY = 'noor_singer_action_scene_v2';
const ENABLED_CHARS_STORAGE_KEY = 'noor_singer_enabled_chars_v2';
const MAIN_SCENE_STORAGE_KEY = 'noor_main_scene_v2';
const SCENE_LOCKED_STORAGE_KEY = 'noor_scene_locked_v2';
const PREDEFINED_SCENE_STORAGE_KEY = 'noor_predefined_scene_v2';
const ADVENTURE_STORAGE_KEY = 'noor_adventure_v2';
const LOCATION_STORAGE_KEY = 'noor_location_v2';
const WEATHER_STORAGE_KEY = 'noor_weather_v2';
const LIGHT_GROUP_STORAGE_KEY = 'noor_light_group_v2';
const LIGHT_STORAGE_KEY = 'noor_light_v2';
const MOOD_GROUP_STORAGE_KEY = 'noor_mood_group_v2';
const MOOD_STORAGE_KEY = 'noor_mood_v2';
const INSTRUMENTS_STORAGE_KEY = 'noor_instruments_v2';
const IMAGE_STYLE_STORAGE_KEY = 'noor_singer_image_style_v2';
const STYLE_CATEGORY_STORAGE_KEY = 'noor_singer_style_category_v2';
const CHARACTER_FRAMING_STORAGE_KEY = 'noor_character_framing_v2';
const CHARACTER_AGES_STORAGE_KEY = 'noor_character_ages_v2';
const CHARACTER_TOMBOYS_STORAGE_KEY = 'noor_character_tomboys_v2';
const PROMPT_RATING_STORAGE_KEY = 'noor_prompt_rating_v2';
const WARDROBE_GROUP_STORAGE_KEY = 'noor_wardrobe_group_v2';
const ACTION_GROUP_STORAGE_KEY = 'noor_action_group_v2';
const PROMPT_VIEW_MODE_STORAGE_KEY = 'noor_prompt_view_mode_v2';
const ENABLED_SEGMENTS_STORAGE_KEY = 'noor_enabled_segments_v2';
const GENERATED_IMAGE_STORAGE_KEY = 'noor_generated_scene_image_v2';

const DEFAULT_MAIN_SCENE = 'Relaxing together at the Abcoude homestead farm near sunset, enjoying the peaceful countryside atmosphere after a song rehearsal.';

const DEFAULT_ACTIONS: Record<string, string> = {
  miranda: 'Stretching hamstrings and calves with graceful flexibility against a wooden fence.',
  annelies: 'Running with an energetic, athletic stride and focused athletic posture.',
  fannie: 'Dribbling a vintage leather soccer ball with agile, nimble footwork.',
  emma: 'Performing a dynamic martial high kick with poised balance in the open air.',
  senna: 'Taking candid portrait photographs of friends with a vintage rangefinder camera.'
};

const DEFAULT_ENABLED_CHARS: Record<string, boolean> = {
  miranda: true,
  annelies: true,
  fannie: true,
  emma: true,
  senna: true
};

const DEFAULT_WARDROBES: Record<string, string> = {
  miranda: 'none',
  annelies: 'none',
  fannie: 'none',
  emma: 'none',
  senna: 'none'
};

const DEFAULT_CHARACTER_AGES: Record<string, string> = {
  miranda: 'young_adult',
  annelies: 'young_adult',
  fannie: 'young_adult',
  emma: 'young_adult',
  senna: 'young_adult'
};

const DEFAULT_CHARACTER_TOMBOYS: Record<string, boolean> = {
  miranda: true,
  annelies: true,
  fannie: true,
  emma: true,
  senna: true
};

export type WizardStep = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

interface MainPanelProps {
  targetStep?: number | null;
  onStepChanged?: () => void;
  resetTrigger?: number;
  onShowSinger?: (singerId: string) => void;
}

export const MainPanel: React.FC<MainPanelProps> = ({
  targetStep,
  onStepChanged,
  resetTrigger,
  onShowSinger
}) => {
  const { addJob, jobs } = useJobQueue();

  // Wizard current page (1-9)
  const [currentPage, setCurrentPage] = useState<WizardStep>(() => {
    const saved = localStorage.getItem(WIZARD_PAGE_KEY);
    const num = Number(saved);
    if (num >= 1 && num <= 9) return num as WizardStep;
    return 1;
  });

  // Step 1: Characters selection (5 characters)
  const [enabledChars, setEnabledChars] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(ENABLED_CHARS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return { ...DEFAULT_ENABLED_CHARS };
  });

  // Step 2: Scene & Location (Adventure Theme, Location Setting, Predefined Scenes, Scene text)
  const [selectedAdventure, setSelectedAdventure] = useState<string>(() => {
    return localStorage.getItem(ADVENTURE_STORAGE_KEY) || 'farm';
  });
  const [selectedLocation, setSelectedLocation] = useState<string>(() => {
    return localStorage.getItem(LOCATION_STORAGE_KEY) || 'none';
  });
  const [selectedPredefinedScene, setSelectedPredefinedScene] = useState<string>(() => {
    return localStorage.getItem(PREDEFINED_SCENE_STORAGE_KEY) || 'custom';
  });
  const [mainSceneText, setMainSceneText] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(MAIN_SCENE_STORAGE_KEY);
      if (typeof saved === 'string' && saved && saved !== '[object Object]' && saved !== 'undefined' && saved !== 'null') {
        return saved;
      }
    } catch {}
    return DEFAULT_MAIN_SCENE;
  });
  const [isSceneLocked, setIsSceneLocked] = useState<boolean>(() => {
    const saved = localStorage.getItem(SCENE_LOCKED_STORAGE_KEY);
    return saved !== null ? saved === 'true' : false;
  });

  // Step 3: Theme & Atmospheric Environment
  const [selectedWeather, setSelectedWeather] = useState<string>(() => {
    return localStorage.getItem(WEATHER_STORAGE_KEY) || 'none';
  });
  const [selectedLightGroup, setSelectedLightGroup] = useState<string>(() => {
    return localStorage.getItem(LIGHT_GROUP_STORAGE_KEY) || 'outdoors';
  });
  const [selectedLight, setSelectedLight] = useState<string>(() => {
    return localStorage.getItem(LIGHT_STORAGE_KEY) || 'none';
  });
  const [selectedMoodGroup, setSelectedMoodGroup] = useState<string>(() => {
    return localStorage.getItem(MOOD_GROUP_STORAGE_KEY) || 'joyful_energetic';
  });
  const [selectedMood, setSelectedMood] = useState<string>(() => {
    return localStorage.getItem(MOOD_STORAGE_KEY) || 'none';
  });
  const [includeInstruments, setIncludeInstruments] = useState<boolean>(() => {
    const saved = localStorage.getItem(INSTRUMENTS_STORAGE_KEY);
    return saved !== null ? saved === 'true' : false;
  });

  // Step 4: Wardrobe Collection & Outfits
  const [selectedWardrobeGroup, setSelectedWardrobeGroup] = useState<string>(() => {
    return localStorage.getItem(WARDROBE_GROUP_STORAGE_KEY) || 'daily_casual';
  });
  const [wardrobes, setWardrobes] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(WARDROBES_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return { ...DEFAULT_WARDROBES };
  });

  // Step 5: Character Age, Tomboy, Camera Framing & Rating
  const [characterAges, setCharacterAges] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(CHARACTER_AGES_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return { ...DEFAULT_CHARACTER_AGES };
  });
  const [characterTomboys, setCharacterTomboys] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(CHARACTER_TOMBOYS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return { ...DEFAULT_CHARACTER_TOMBOYS };
  });
  const [selectedCharacterFraming, setSelectedCharacterFraming] = useState<string>(() => {
    const saved = localStorage.getItem(CHARACTER_FRAMING_STORAGE_KEY);
    if (saved && CHARACTER_FRAMING_OPTIONS.some(f => f.id === saved)) return saved;
    return DEFAULT_CHARACTER_FRAMING;
  });
  const [selectedPromptRating, setSelectedPromptRating] = useState<PromptRatingId>(() => {
    const saved = localStorage.getItem(PROMPT_RATING_STORAGE_KEY);
    if (saved && PROMPT_RATING_OPTIONS.some(r => r.id === saved)) return saved as PromptRatingId;
    return DEFAULT_PROMPT_RATING;
  });

  // Step 6: Action Group & Actions per Character
  const [selectedActionGroup, setSelectedActionGroup] = useState<string>(() => {
    return localStorage.getItem(ACTION_GROUP_STORAGE_KEY) || 'sporting';
  });
  const [actions, setActions] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(ACTIONS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return { ...DEFAULT_ACTIONS };
  });

  // Step 7: Style Category & Style
  const [selectedStyleCategory, setSelectedStyleCategory] = useState<string>(() => {
    return localStorage.getItem(STYLE_CATEGORY_STORAGE_KEY) || 'franco_belgian_bd';
  });
  const [selectedImageStyle, setSelectedImageStyle] = useState<string>(() => {
    const saved = localStorage.getItem(IMAGE_STYLE_STORAGE_KEY);
    if (saved && IMAGE_STYLES.some(s => s.id === saved)) return saved;
    return 'herge_tintin';
  });

  // Step 8: Generated Scene Prompts State
  const [generatedScene, setGeneratedScene] = useState<SingerActionSceneResult | null>(() => {
    try {
      const saved = localStorage.getItem(SCENE_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return null;
  });

  // Prompt View Modes & Section Filtering (with persistent local storage)
  const [promptViewMode, setPromptViewMode] = useState<'color' | 'raw'>(() => {
    try {
      const saved = localStorage.getItem(PROMPT_VIEW_MODE_STORAGE_KEY);
      if (saved === 'raw' || saved === 'color') return saved;
    } catch {}
    return 'color';
  });

  const [enabledSegmentIds, setEnabledSegmentIds] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(ENABLED_SEGMENTS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return {};
  });

  // Loading & async Job tracking
  const [loadingJobs, setLoadingJobs] = useState<{
    scene: boolean;
    prompt: boolean;
  }>({
    scene: false,
    prompt: false
  });
  const [generatingImage, setGeneratingImage] = useState<boolean>(false);

  // Track pending AI Job IDs
  const pendingJobsRef = useRef<{
    sceneJobId?: string;
    promptJobId?: string;
    imageJobId?: string;
  }>({});

  // Feedback states
  const [copiedMap, setCopiedMap] = useState<Record<string, boolean>>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [generatedSceneImage, setGeneratedSceneImage] = useState<{
    src: string;
    title: string;
    prompt: string;
  } | null>(() => {
    try {
      const saved = localStorage.getItem(GENERATED_IMAGE_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return null;
  });

  // Sync external navigation triggers
  useEffect(() => {
    if (targetStep && targetStep >= 1 && targetStep <= 9) {
      setCurrentPage(targetStep as WizardStep);
      if (onStepChanged) onStepChanged();
    }
  }, [targetStep, onStepChanged]);

  // Sync external reset trigger
  useEffect(() => {
    if (resetTrigger && resetTrigger > 0) {
      handleResetDefaults();
    }
  }, [resetTrigger]);

  // Persist wizard step
  useEffect(() => {
    localStorage.setItem(WIZARD_PAGE_KEY, String(currentPage));
  }, [currentPage]);

  // Persist characters
  useEffect(() => {
    localStorage.setItem(ENABLED_CHARS_STORAGE_KEY, JSON.stringify(enabledChars));
  }, [enabledChars]);

  // Persist scene & adventure settings
  useEffect(() => {
    localStorage.setItem(ADVENTURE_STORAGE_KEY, selectedAdventure);
    localStorage.setItem(LOCATION_STORAGE_KEY, selectedLocation);
    localStorage.setItem(PREDEFINED_SCENE_STORAGE_KEY, selectedPredefinedScene);
    localStorage.setItem(SCENE_LOCKED_STORAGE_KEY, String(isSceneLocked));
    const textToSave = typeof mainSceneText === 'string' ? mainSceneText : (mainSceneText ? String(mainSceneText) : '');
    localStorage.setItem(MAIN_SCENE_STORAGE_KEY, textToSave);
  }, [selectedAdventure, selectedLocation, selectedPredefinedScene, mainSceneText, isSceneLocked]);

  // Persist theme & atmospheric settings
  useEffect(() => {
    localStorage.setItem(WEATHER_STORAGE_KEY, selectedWeather);
    localStorage.setItem(LIGHT_GROUP_STORAGE_KEY, selectedLightGroup);
    localStorage.setItem(LIGHT_STORAGE_KEY, selectedLight);
    localStorage.setItem(MOOD_GROUP_STORAGE_KEY, selectedMoodGroup);
    localStorage.setItem(MOOD_STORAGE_KEY, selectedMood);
    localStorage.setItem(INSTRUMENTS_STORAGE_KEY, String(includeInstruments));
  }, [selectedWeather, selectedLightGroup, selectedLight, selectedMoodGroup, selectedMood, includeInstruments]);

  // Persist wardrobes
  useEffect(() => {
    localStorage.setItem(WARDROBE_GROUP_STORAGE_KEY, selectedWardrobeGroup);
    localStorage.setItem(WARDROBES_STORAGE_KEY, JSON.stringify(wardrobes));
  }, [selectedWardrobeGroup, wardrobes]);

  // Persist demographic & framing details
  useEffect(() => {
    localStorage.setItem(CHARACTER_AGES_STORAGE_KEY, JSON.stringify(characterAges));
    localStorage.setItem(CHARACTER_TOMBOYS_STORAGE_KEY, JSON.stringify(characterTomboys));
    localStorage.setItem(CHARACTER_FRAMING_STORAGE_KEY, selectedCharacterFraming);
    localStorage.setItem(PROMPT_RATING_STORAGE_KEY, selectedPromptRating);
  }, [characterAges, characterTomboys, selectedCharacterFraming, selectedPromptRating]);

  // Persist actions
  useEffect(() => {
    localStorage.setItem(ACTION_GROUP_STORAGE_KEY, selectedActionGroup);
    localStorage.setItem(ACTIONS_STORAGE_KEY, JSON.stringify(actions));
  }, [selectedActionGroup, actions]);

  // Persist style
  useEffect(() => {
    localStorage.setItem(STYLE_CATEGORY_STORAGE_KEY, selectedStyleCategory);
    localStorage.setItem(IMAGE_STYLE_STORAGE_KEY, selectedImageStyle);
  }, [selectedStyleCategory, selectedImageStyle]);

  // Persist scene
  useEffect(() => {
    if (generatedScene) {
      localStorage.setItem(SCENE_STORAGE_KEY, JSON.stringify(generatedScene));
    }
  }, [generatedScene]);

  // Persist prompt view mode and segment filters
  useEffect(() => {
    localStorage.setItem(PROMPT_VIEW_MODE_STORAGE_KEY, promptViewMode);
  }, [promptViewMode]);

  useEffect(() => {
    if (Object.keys(enabledSegmentIds).length > 0) {
      localStorage.setItem(ENABLED_SEGMENTS_STORAGE_KEY, JSON.stringify(enabledSegmentIds));
    }
  }, [enabledSegmentIds]);

  // Persist generated scene image
  useEffect(() => {
    if (generatedSceneImage) {
      localStorage.setItem(GENERATED_IMAGE_STORAGE_KEY, JSON.stringify(generatedSceneImage));
    } else {
      localStorage.removeItem(GENERATED_IMAGE_STORAGE_KEY);
    }
  }, [generatedSceneImage]);

  // Initialize segmented toggle states whenever new prompt is generated
  useEffect(() => {
    const fullPrompt = generatedScene?.prompt || generatedScene?.basePrompt || '';
    if (fullPrompt) {
      const sections = parsePromptSections(fullPrompt);
      const initialMap: Record<string, boolean> = {};
      sections.forEach(sec => {
        initialMap[sec.id] = true;
      });
      setEnabledSegmentIds(initialMap);
    }
  }, [generatedScene?.prompt, generatedScene?.basePrompt]);

  // Helper to extract job result string
  const extractJobPromptAndTitle = (res: any): { prompt?: string; title?: string } => {
    if (!res) return {};
    if (typeof res === 'string') {
      try {
        const parsed = JSON.parse(res);
        return { prompt: parsed.prompt || parsed.mainScene, title: parsed.title };
      } catch {
        // Check for markdown json codeblock
        const match = res.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
        if (match) {
          try {
            const parsed = JSON.parse(match[1]);
            return { prompt: parsed.prompt || parsed.mainScene, title: parsed.title };
          } catch {}
        }
        return { prompt: res };
      }
    }
    if (typeof res === 'object') {
      return {
        prompt: res.prompt || res.mainScene || res.masterPrompt || res.fullPrompt,
        title: res.title
      };
    }
    return {};
  };

  // Listen to Job Queue completions
  useEffect(() => {
    if (!jobs || jobs.length === 0) return;

    // 1. Scene Randomize Job
    if (pendingJobsRef.current.sceneJobId) {
      const sId = pendingJobsRef.current.sceneJobId;
      const job = jobs.find(j => j.id === sId);
      if (job && (job.status === 'done' || job.status === 'failed')) {
        if (job.status === 'done' && job.result) {
          const { prompt: rawPrompt } = extractJobPromptAndTitle(job.result);
          if (rawPrompt) {
            const cleaned = removeSceneLabels(sanitizePromptText(rawPrompt));
            setMainSceneText(cleaned);
            setSelectedPredefinedScene('custom');
          }
        } else if (job.status === 'failed') {
          // Client-side fallback: format the current text into clean, fluid prose without labels
          setMainSceneText(prev => formatFluidSceneText(prev, selectedAdventure, selectedLocation, selectedPredefinedScene));
          setSelectedPredefinedScene('custom');
        }
        setLoadingJobs(prev => ({ ...prev, scene: false }));
        pendingJobsRef.current.sceneJobId = undefined;
      }
    }

    // 2. Prompt Compilation Job
    if (pendingJobsRef.current.promptJobId) {
      const pId = pendingJobsRef.current.promptJobId;
      const job = jobs.find(j => j.id === pId);
      if (job && (job.status === 'done' || job.status === 'failed')) {
        if (job.status === 'done' && job.result) {
          const { prompt: rawPrompt, title: rawTitle } = extractJobPromptAndTitle(job.result);
          if (rawPrompt) {
            const isAdultRating = selectedPromptRating === 'nsfw' || selectedPromptRating === 'explicit';
            let promptStr = isAdultRating ? stripClothingFromText(sanitizePromptText(rawPrompt)) : sanitizePromptText(rawPrompt);
            const finalTitle = rawTitle ? sanitizePromptText(rawTitle) : undefined;
            setGeneratedScene(prev => {
              if (!prev) return prev;
              return {
                ...prev,
                title: finalTitle || prev.title,
                rating: selectedPromptRating,
                prompt: promptStr,
                basePrompt: promptStr,
                standardPrompt: promptStr,
                standardPrompt1: promptStr,
                standardPrompt2: promptStr,
                standardPrompt3: promptStr,
                standardPrompts: [promptStr, promptStr, promptStr],
                nsfwPrompt: promptStr,
                explicitPrompt: promptStr
              };
            });
          }
        }
        setLoadingJobs(prev => ({ ...prev, prompt: false }));
        pendingJobsRef.current.promptJobId = undefined;
      }
    }

    // 3. Image Generation Job
    if (pendingJobsRef.current.imageJobId) {
      const imgJobId = pendingJobsRef.current.imageJobId;
      const job = jobs.find(j => j.id === imgJobId);
      if (job && (job.status === 'done' || job.status === 'failed')) {
        if (job.status === 'done' && job.result) {
          try {
            let imgUrl = '';
            if (typeof job.result === 'string') {
              if (job.result.startsWith('data:image/') || job.result.startsWith('http')) {
                imgUrl = job.result;
              } else {
                const match = job.result.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
                if (match) {
                  const parsed = JSON.parse(match[1]);
                  if (parsed.imageUrl || parsed.image || parsed.url) {
                    imgUrl = parsed.imageUrl || parsed.image || parsed.url;
                  }
                }
              }
            } else if (typeof job.result === 'object' && job.result) {
              if (job.result.imageUrl || job.result.image || job.result.url) {
                imgUrl = job.result.imageUrl || job.result.image || job.result.url;
              }
            }

            if (imgUrl) {
              const ratingObj = getPromptRatingById(selectedPromptRating);
              const sceneTitle = generatedScene?.title ? `${generatedScene.title}` : `Scene Image — ${ratingObj.label}`;
              const finalPrompt = generatedScene?.prompt || generatedScene?.basePrompt || '';
              setGeneratedSceneImage({
                src: imgUrl,
                title: sceneTitle,
                prompt: finalPrompt
              });
              setCurrentPage(9);
            }
          } catch (e) {
            console.error('Error parsing image result:', e);
          }
        }
        setGeneratingImage(false);
        pendingJobsRef.current.imageJobId = undefined;
      }
    }
  }, [jobs, selectedPromptRating, generatedScene?.title, generatedScene?.prompt, generatedScene?.basePrompt]);

  // Locations for active adventure
  const adventureLocations = getLocationsForAdventure(selectedAdventure);
  const availableLocations = [
    { id: 'none', label: 'None / Custom setting', type: 'outdoors', description: 'Custom setting specified in Main Scene box' },
    ...adventureLocations.filter(l => l.id !== 'none').map(l => ({
      id: l.id,
      label: `${l.label} (${l.type === 'outdoors' ? '🌲 Outdoors' : '🏠 Indoors'})`,
      type: l.type,
      description: l.description
    }))
  ];

  // Helper strings
  const getLocationPromptStr = () => {
    if (!selectedLocation || selectedLocation === 'none') return '';
    const loc = findLocationInAllAdventures(selectedLocation) || LOCATION_OPTIONS.find(l => l.id === selectedLocation);
    if (!loc || loc.id === 'none') return '';
    const base = `Location Setting (${loc.type.toUpperCase()}): ${loc.description}.`;
    const details = getFarmhouseLocationDetails(loc.id);
    return details ? `${base} Homestead Dataset Details: ${details}` : base;
  };

  const getWeatherPromptStr = () => {
    if (!selectedWeather || selectedWeather === 'none') return '';
    const opt = getWeatherById(selectedWeather) || WEATHER_OPTIONS.find(w => w.id === selectedWeather);
    return opt && opt.id !== 'none' ? `Weather Condition: ${opt.description}.` : '';
  };

  const getLightPromptStr = () => {
    if (!selectedLight || selectedLight === 'none') return '';
    const opt = getLightById(selectedLight, selectedLightGroup);
    return opt && opt.id !== 'none' ? `Lighting: ${opt.description}.` : '';
  };

  const getMoodPromptStr = () => {
    if (!selectedMood || selectedMood === 'none') return '';
    const opt = getMoodById(selectedMood, selectedMoodGroup) || MOOD_OPTIONS.find(m => m.id === selectedMood);
    return opt && opt.id !== 'none' ? `Scene Mood & Atmosphere: ${opt.description}.` : '';
  };

  // AI Job: Randomize Main Scene (Step 2)
  // Rewrites and improves the current text in the textbox and enables lock
  const handleAiRandomizeMainScene = () => {
    setIsSceneLocked(true);
    const existingRaw = (typeof mainSceneText === 'string' && mainSceneText.trim().length > 0)
      ? mainSceneText.trim()
      : buildCombinedSceneDescription(selectedAdventure, selectedLocation, selectedPredefinedScene, availableLocations);

    // Strip labels to start from clean prose context
    const cleanExisting = removeSceneLabels(existingRaw);

    const locObj = findLocationInAllAdventures(selectedLocation) || LOCATION_OPTIONS.find(l => l.id === selectedLocation);
    const weatherStr = getWeatherPromptStr();
    const lightStr = getLightPromptStr();
    const moodStr = getMoodPromptStr();

    const envRules = locObj && locObj.id !== 'none'
      ? `ENVIRONMENT CONTEXT: ${removeSceneLabels(locObj.description)}.`
      : '';

    const prompt = `You are a visual director and prose stylist for cinematic environmental photography.
Rewrite the following scene background description to make it elegant, highly immersive, fluid, and evocative:

EXISTING SCENE TEXT:
"${cleanExisting}"

${weatherStr ? `Atmospheric Weather Context: ${removeSceneLabels(weatherStr)}` : ''}
${lightStr ? `Lighting Context: ${removeSceneLabels(lightStr)}` : ''}
${moodStr ? `Atmosphere & Mood: ${removeSceneLabels(moodStr)}` : ''}
${envRules}

CRITICAL RULES:
- Output a cohesive, beautifully written 2 to 3 sentence description in natural, fluid language.
- Strip away all structured labels, prefixes, metadata tags, or parenthetical annotations (such as 'Adventure Context:', 'Setting (OUTDOORS):', 'Scene Elements:', 'Setting:', 'Location:', 'Theme:').
- Weave the setting, architecture, flora, ambient props, materials, natural textures, and light into one continuous, picturesque background description.
- Keep the focus strictly on the physical background scene environment and ambient surroundings.
- Return clean JSON:
{
  "title": "Enhanced Scene Background",
  "prompt": "your enhanced fluid 2-3 sentence description without any labels or prefixes"
}`;

    const systemInst = `You are a creative photo art director. Return ONLY clean JSON with keys "title" and "prompt". Ensure the prompt contains NO labels, headers, or prefix tags, and uses fluid, natural, immersive language.`;

    setLoadingJobs(prev => ({ ...prev, scene: true }));
    const jobId = addJob({
      name: 'Randomize & Improve Scene',
      priority: 'high',
      prompt,
      systemInstruction: systemInst
    });
    pendingJobsRef.current.sceneJobId = jobId;
  };

  // Compile Scene Prompts (Step 7/8)
  const handleGeneratePrompts = () => {
    const activeCount = Object.entries(enabledChars).filter(([id, enabled]) => enabled && actions[id]?.trim().length >= 3).length;
    if (activeCount === 0) {
      setErrorMessage('Please provide an action (at least 3 characters) for at least one enabled character to compile the prompt.');
      return;
    }
    setErrorMessage(null);

    const locObj = findLocationInAllAdventures(selectedLocation) || LOCATION_OPTIONS.find(l => l.id === selectedLocation);

    const baseline = generateScenePrompts(
      actions, 
      wardrobes, 
      enabledChars, 
      mainSceneText, 
      locObj?.id, 
      selectedWeather, 
      selectedMood, 
      includeInstruments, 
      selectedImageStyle,
      selectedLight,
      selectedLightGroup,
      selectedMoodGroup,
      selectedCharacterFraming,
      characterAges,
      characterTomboys,
      selectedPromptRating
    );

    if (baseline) {
      setGeneratedScene(baseline);
    }

    const weatherObj = getWeatherById(selectedWeather);
    const lightObj = getLightById(selectedLight, selectedLightGroup);
    const moodObj = getMoodById(selectedMood, selectedMoodGroup);
    const framingObj = CHARACTER_FRAMING_OPTIONS.find(f => f.id === selectedCharacterFraming);
    const styleObj = getImageStyleById(selectedImageStyle);

    const activeSingersPayload = SINGERS_DETAILED
      .filter(s => enabledChars[s.id] && actions[s.id]?.trim().length >= 3)
      .map(s => {
        const singerTomboy = characterTomboys[s.id] ?? DEFAULT_IS_TOMBOY;
        const memberAge = characterAges[s.id] || DEFAULT_CHARACTER_AGE;
        const ageLabel = buildCharacterAgeLabel(memberAge, singerTomboy);
        const actionText = actions[s.id] ? actions[s.id].trim() : '';
        const wardrobeKey = wardrobes[s.id] || 'none';
        const wardrobeText = wardrobeKey !== 'none' ? buildWardrobePromptText(s.id, wardrobeKey) : '';
        const isAdultRating = selectedPromptRating === 'nsfw' || selectedPromptRating === 'explicit';
        const baseDescription = isAdultRating ? s.Body : s.Base;
        return {
          id: s.id,
          name: s.name,
          role: s.role,
          action: actionText,
          wardrobeText,
          basePrompt: replaceGenderReferences(baseDescription, singerTomboy),
          ageLabel
        };
      });

    const promptPayload = GENERATE_SINGER_ACTION_PROMPT({
      title: baseline?.title,
      mainSceneText: mainSceneText,
      locationDescription: locObj?.description,
      weatherDescription: weatherObj?.description || weatherObj?.label,
      lightDescription: lightObj?.description || lightObj?.label,
      moodDescription: moodObj?.description || moodObj?.label,
      activeSingers: activeSingersPayload,
      framingDescription: framingObj?.description || framingObj?.label,
      styleDescription: styleObj?.description || styleObj?.label,
      rating: selectedPromptRating,
      baselinePrompt: baseline?.prompt || baseline?.basePrompt
    });

    setLoadingJobs(prev => ({ ...prev, prompt: true }));
    const jobId = addJob({
      name: `Compile Scene Master Prompt: ${selectedPromptRating.toUpperCase()}`,
      priority: 'high',
      prompt: promptPayload,
      systemInstruction: SYSTEM_INSTRUCTIONS_SINGER_ACTION_PROMPT
    });
    pendingJobsRef.current.promptJobId = jobId;
  };

  // Copy helper
  const handleCopy = (key: string, text: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedMap(prev => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setCopiedMap(prev => ({ ...prev, [key]: false }));
    }, 2000);
  };

  // Copy filtered prompt helper (used across Step 7 and Step 8)
  const handleCopyFilteredPrompt = () => {
    const fullPrompt = generatedScene?.prompt || generatedScene?.basePrompt || '';
    if (!fullPrompt) return;
    const filteredText = filterPromptStringBySegmentIds(fullPrompt, enabledSegmentIds);
    handleCopy('filtered_master_prompt', filteredText || fullPrompt);
  };

  // Reset to defaults
  const handleResetDefaults = () => {
    setSelectedAdventure('farm');
    setSelectedLocation('none');
    setSelectedPredefinedScene('custom');
    setSelectedWeather('none');
    setSelectedLightGroup('outdoors');
    setSelectedLight('none');
    setSelectedMoodGroup('joyful_energetic');
    setSelectedMood('none');
    setIncludeInstruments(false);
    setSelectedImageStyle('herge_tintin');
    setSelectedStyleCategory('franco_belgian_bd');
    setSelectedCharacterFraming(DEFAULT_CHARACTER_FRAMING);
    setSelectedPromptRating(DEFAULT_PROMPT_RATING);
    setMainSceneText(DEFAULT_MAIN_SCENE);
    setIsSceneLocked(false);
    setEnabledChars({ ...DEFAULT_ENABLED_CHARS });
    setActions({ ...DEFAULT_ACTIONS });
    setSelectedWardrobeGroup('daily_casual');
    setSelectedActionGroup('sporting');
    setWardrobes({ ...DEFAULT_WARDROBES });
    setCharacterAges({ ...DEFAULT_CHARACTER_AGES });
    setCharacterTomboys({ ...DEFAULT_CHARACTER_TOMBOYS });
    setGeneratedScene(null);
    setGeneratedSceneImage(null);
    setCurrentPage(1);
    setErrorMessage(null);

    localStorage.removeItem(SCENE_STORAGE_KEY);
    localStorage.removeItem(SCENE_LOCKED_STORAGE_KEY);
    localStorage.removeItem(GENERATED_IMAGE_STORAGE_KEY);
  };

  // Download JSON
  const handleDownloadSceneJson = () => {
    if (!generatedScene) return;
    const finalPrompt = generatedScene.prompt || generatedScene.basePrompt || '';
    downloadSingerActionSceneJson({
      ...generatedScene,
      prompt: finalPrompt,
      basePrompt: finalPrompt,
      rating: selectedPromptRating,
      imageStyle: selectedImageStyle,
      characterFraming: selectedCharacterFraming
    });
  };

  // Generate Image with Gemini
  const handleGenerateImage = () => {
    let promptToUse = generatedScene?.prompt || generatedScene?.basePrompt || '';
    if (!promptToUse) {
      const result = generateScenePrompts(
        actions,
        wardrobes,
        enabledChars,
        mainSceneText,
        selectedLocation,
        selectedWeather,
        selectedMood,
        includeInstruments,
        selectedImageStyle,
        selectedLight,
        selectedLightGroup,
        selectedMoodGroup,
        selectedCharacterFraming,
        characterAges,
        characterTomboys,
        selectedPromptRating
      );
      if (result) {
        setGeneratedScene(result);
        promptToUse = result.prompt || result.basePrompt || '';
      }
    }
    if (!promptToUse) return;

    setGeneratingImage(true);
    setCurrentPage(9); // Navigate to Image page immediately
    const jobTitle = `Generate Scene Image: ${generatedScene?.title || 'Action Scene'}`;

    const jobId = addJob({
      name: jobTitle,
      priority: 'high',
      isImageJob: true,
      prompt: promptToUse
    });
    pendingJobsRef.current.imageJobId = jobId;
  };

  // 9 Compact Wizard Steps: Characters, Scene, Theme, Wardrobe, Rating, Action, Style, Prompt, Image
  const WIZARD_STEPS = [
    { step: 1 as WizardStep, title: 'Characters', icon: <Users size={14} /> },
    { step: 2 as WizardStep, title: 'Scene', icon: <Compass size={14} /> },
    { step: 3 as WizardStep, title: 'Theme', icon: <Sun size={14} /> },
    { step: 4 as WizardStep, title: 'Wardrobe', icon: <Shirt size={14} /> },
    { step: 5 as WizardStep, title: 'Rating', icon: <UserCheck size={14} /> },
    { step: 6 as WizardStep, title: 'Action', icon: <Zap size={14} /> },
    { step: 7 as WizardStep, title: 'Style', icon: <Palette size={14} /> },
    { step: 8 as WizardStep, title: 'Prompt', icon: <Sparkles size={14} /> },
    { step: 9 as WizardStep, title: 'Image', icon: <ImageIcon size={14} /> }
  ];

  const handleNext = () => {
    if (currentPage < 9) {
      if (currentPage === 6 || currentPage === 7) {
        if (!generatedScene?.prompt && !generatedScene?.basePrompt) {
          handleGeneratePrompts();
        }
      }
      setCurrentPage((prev) => (prev + 1) as WizardStep);
    }
  };

  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => (prev - 1) as WizardStep);
    }
  };

  const enabledCount = Object.values(enabledChars).filter(Boolean).length;

  return (
    <div className="flex-1 flex flex-col h-full min-h-0 bg-lavender-bg/95 border-x border-lavender-border/40 overflow-hidden relative">
      {/* Top Wizard Control Header */}
      <div className="p-3 bg-lavender-surface/60 border-b border-lavender-border flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30">
            <Sparkles size={18} />
          </div>
          <div>
            <h2 className="text-base font-bold text-lavender-accent leading-tight">
              Character Actions &amp; Scene Prompt Studio
            </h2>
            <p className="text-xs text-lavender-text/70">
              Visual director for WAN Video, Mage.Space, SDXL, and Midjourney
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleResetDefaults}
            className="px-3 py-1.5 text-xs font-bold bg-red-950/30 hover:bg-red-900/50 text-red-300 border border-red-500/30 rounded-lg flex items-center gap-1.5 transition-all shadow-sm cursor-pointer hover:border-red-500/60 active:scale-95"
            title="Clear and reset all options to defaults"
          >
            <RotateCcw size={13} />
            Reset Defaults
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col min-h-0 p-3 space-y-3 overflow-hidden">
        {/* Error message banner if any */}
        {errorMessage && (
          <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-500/40 text-xs text-red-200 flex items-center justify-between shrink-0">
            <span>{errorMessage}</span>
            <button onClick={() => setErrorMessage(null)} className="text-red-400 hover:text-red-200 cursor-pointer">
              ✕
            </button>
          </div>
        )}

        {/* STEP PROGRESS TABS (NO NUMBERS, COMPACT TITLES: Characters, Scene, Theme, Wardrobe, Rating, Action, Style, Prompt) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 border-b border-lavender-border/50 scrollbar-thin shrink-0">
          {WIZARD_STEPS.map(({ step, title, icon }) => {
            const isCurrent = currentPage === step;
            const isCompleted = currentPage > step;

            return (
              <button
                key={step}
                onClick={() => setCurrentPage(step)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 shrink-0 cursor-pointer select-none ${
                  isCurrent
                    ? 'bg-purple-900/60 text-purple-200 border border-purple-500/50 shadow-sm ring-1 ring-purple-500/30'
                    : isCompleted
                    ? 'bg-lavender-surface/60 text-emerald-300 border border-emerald-500/30 hover:bg-lavender-surface'
                    : 'text-lavender-text/60 hover:text-lavender-text hover:bg-lavender-surface/30 border border-transparent'
                }`}
              >
                <span>{icon}</span>
                <span>{title}</span>
              </button>
            );
          })}
        </div>

        {/* ACTIVE WIZARD PAGE CONTENT */}
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
          {/* STEP 1: CHARACTERS */}
          {currentPage === 1 && (
            <Step1Characters
              enabledChars={enabledChars}
              onToggleChar={(singerId) => setEnabledChars(prev => ({ ...prev, [singerId]: !prev[singerId] }))}
              onSelectAll={() => {
                const allActive: Record<string, boolean> = {};
                SINGERS_DETAILED.forEach(s => { allActive[s.id] = true; });
                setEnabledChars(allActive);
              }}
              onDeselectAll={() => {
                const allDisabled: Record<string, boolean> = {};
                SINGERS_DETAILED.forEach(s => { allDisabled[s.id] = false; });
                setEnabledChars(allDisabled);
              }}
              onShowSingerDetails={onShowSinger}
            />
          )}

          {/* STEP 2: SCENE */}
          {currentPage === 2 && (
            <Step2Scene
              selectedAdventure={selectedAdventure}
              onSelectAdventure={(adv) => {
                setSelectedAdventure(adv);
                setSelectedLocation('none');
                setSelectedPredefinedScene('custom');
                const newLocations = getLocationsForAdventure(adv);
                const availLocs = [
                  { id: 'none', label: 'None / Custom setting', type: 'outdoors', description: 'Custom setting specified in Main Scene box' },
                  ...newLocations.filter(l => l.id !== 'none').map(l => ({
                    id: l.id,
                    label: `${l.label} (${l.type === 'outdoors' ? '🌲 Outdoors' : '🏠 Indoors'})`,
                    type: l.type,
                    description: l.description
                  }))
                ];
                if (!isSceneLocked) {
                  const combined = buildCombinedSceneDescription(adv, 'none', 'custom', availLocs);
                  setMainSceneText(combined);
                }
                setWardrobes({
                  miranda: getSuggestedWardrobeForAdventure(adv),
                  annelies: getSuggestedWardrobeForAdventure(adv),
                  fannie: getSuggestedWardrobeForAdventure(adv),
                  emma: getSuggestedWardrobeForAdventure(adv),
                  senna: getSuggestedWardrobeForAdventure(adv)
                });
              }}
              selectedLocation={selectedLocation}
              onSelectLocation={(loc) => {
                setSelectedLocation(loc);
                setSelectedPredefinedScene('custom');
                if (!isSceneLocked) {
                  const combined = buildCombinedSceneDescription(selectedAdventure, loc, 'custom', availableLocations);
                  setMainSceneText(combined);
                }
              }}
              availableLocations={availableLocations}
              selectedPredefinedScene={selectedPredefinedScene}
              onSelectPredefinedScene={(sId, sText) => {
                setSelectedPredefinedScene(sId);
                if (!isSceneLocked) {
                  const combined = buildCombinedSceneDescription(selectedAdventure, selectedLocation, sId, availableLocations);
                  setMainSceneText(combined);
                }
              }}
              mainSceneText={mainSceneText}
              onChangeMainSceneText={(text) => {
                setMainSceneText(text);
              }}
              onRandomizeMainScene={handleAiRandomizeMainScene}
              loadingScene={loadingJobs.scene}
              copiedMainScene={!!copiedMap['main_scene']}
              onCopyMainScene={() => handleCopy('main_scene', mainSceneText)}
              isSceneLocked={isSceneLocked}
              onToggleSceneLocked={(locked) => {
                setIsSceneLocked(locked);
              }}
            />
          )}

          {/* STEP 3: THEME */}
          {currentPage === 3 && (
            <Step3Theme
              selectedWeather={selectedWeather}
              onSelectWeather={setSelectedWeather}
              selectedLightGroup={selectedLightGroup}
              onSelectLightGroup={setSelectedLightGroup}
              selectedLight={selectedLight}
              onSelectLight={setSelectedLight}
              selectedMoodGroup={selectedMoodGroup}
              onSelectMoodGroup={setSelectedMoodGroup}
              selectedMood={selectedMood}
              onSelectMood={setSelectedMood}
              includeInstruments={includeInstruments}
              onToggleIncludeInstruments={setIncludeInstruments}
            />
          )}

          {/* STEP 4: WARDROBE */}
          {currentPage === 4 && (
            <Step3Wardrobes
              enabledChars={enabledChars}
              wardrobes={wardrobes}
              selectedWardrobeGroup={selectedWardrobeGroup}
              onSelectWardrobeGroup={setSelectedWardrobeGroup}
              onSelectCharacterWardrobe={(singerId, wardrobeId) => {
                setWardrobes(prev => ({ ...prev, [singerId]: wardrobeId }));
              }}
              onToggleCharacterWardrobe={(singerId) => {
                setWardrobes(prev => ({
                  ...prev,
                  [singerId]: prev[singerId] === 'none' ? 'daily_casual_1' : 'none'
                }));
              }}
            />
          )}

          {/* STEP 5: RATING */}
          {currentPage === 5 && (
            <Step4CharacterDetails
              enabledChars={enabledChars}
              characterAges={characterAges}
              characterTomboys={characterTomboys}
              onChangeCharacterAge={(singerId, ageId) => {
                setCharacterAges(prev => ({ ...prev, [singerId]: ageId }));
              }}
              onToggleCharacterTomboy={(singerId) => {
                setCharacterTomboys(prev => ({ ...prev, [singerId]: !prev[singerId] }));
              }}
              selectedFraming={selectedCharacterFraming}
              onSelectFraming={(framingId) => {
                setSelectedCharacterFraming(framingId);
                if (generatedScene) {
                  const currentPrompt = generatedScene.prompt || generatedScene.basePrompt || '';
                  const updated = appendStyleToPrompt(stripStyleFromPrompt(currentPrompt), selectedImageStyle, selectedPromptRating, framingId);
                  setGeneratedScene(prev => prev ? { ...prev, characterFraming: framingId, prompt: updated } : prev);
                }
              }}
              selectedRating={selectedPromptRating}
              onSelectRating={(ratingId) => {
                setSelectedPromptRating(ratingId);
                if (generatedScene) {
                  const currentPrompt = generatedScene.prompt || generatedScene.basePrompt || '';
                  const updated = appendStyleToPrompt(stripStyleFromPrompt(currentPrompt), selectedImageStyle, ratingId, selectedCharacterFraming);
                  setGeneratedScene(prev => prev ? { ...prev, rating: ratingId, prompt: updated } : prev);
                }
              }}
            />
          )}

          {/* STEP 6: ACTION */}
          {currentPage === 6 && (
            <Step5Actions
              enabledChars={enabledChars}
              actions={actions}
              selectedActionGroup={selectedActionGroup}
              onSelectActionGroup={setSelectedActionGroup}
              onSelectCharacterAction={(singerId, actionText) => {
                setActions(prev => ({ ...prev, [singerId]: actionText }));
              }}
              onChangeCharacterActionText={(singerId, text) => {
                setActions(prev => ({ ...prev, [singerId]: text }));
              }}
              copiedSingerId={Object.keys(copiedMap).find(k => copiedMap[k] && ['miranda', 'annelies', 'fannie', 'emma', 'senna'].includes(k)) || null}
              onCopyCharacterAction={(singerId, text) => handleCopy(singerId, text)}
            />
          )}

          {/* STEP 7: STYLE */}
          {currentPage === 7 && (
            <Step6StyleAndGeneration
              selectedStyleCategory={selectedStyleCategory}
              onSelectStyleCategory={(cat) => {
                setSelectedStyleCategory(cat);
                const inCat = getStylesByCategory(cat as ImageStyleCategory);
                if (inCat.length > 0 && !inCat.some(s => s.id === selectedImageStyle)) {
                  setSelectedImageStyle(inCat[0].id);
                  if (generatedScene) {
                    const currentPrompt = generatedScene.prompt || generatedScene.basePrompt || '';
                    const updated = appendStyleToPrompt(stripStyleFromPrompt(currentPrompt), inCat[0].id, selectedPromptRating, selectedCharacterFraming);
                    setGeneratedScene(prev => prev ? { ...prev, imageStyle: inCat[0].id, prompt: updated } : prev);
                  }
                }
              }}
              selectedStyle={selectedImageStyle}
              onSelectStyle={(stId) => {
                setSelectedImageStyle(stId);
                if (generatedScene) {
                  const currentPrompt = generatedScene.prompt || generatedScene.basePrompt || '';
                  const updated = appendStyleToPrompt(stripStyleFromPrompt(currentPrompt), stId, selectedPromptRating, selectedCharacterFraming);
                  setGeneratedScene(prev => prev ? { ...prev, imageStyle: stId, prompt: updated } : prev);
                }
              }}
              sceneTitle={generatedScene?.title || 'Noor Music Scene'}
              onChangeSceneTitle={(title) => {
                setGeneratedScene(prev => prev ? { ...prev, title } : prev);
              }}
              onGeneratePrompts={() => {
                handleGeneratePrompts();
                setCurrentPage(8);
              }}
              onDownloadPromptJson={handleDownloadSceneJson}
              copiedTitle={!!copiedMap['scene_title']}
              onCopyTitle={() => handleCopy('scene_title', generatedScene?.title || '')}
              hasGeneratedPrompt={!!(generatedScene?.prompt || generatedScene?.basePrompt)}
              loadingPrompt={loadingJobs.prompt}
              onCopyFilteredPrompt={handleCopyFilteredPrompt}
              copiedFilteredPrompt={!!copiedMap['filtered_master_prompt']}
              onGoToStep7={() => {
                if (!generatedScene?.prompt && !generatedScene?.basePrompt) {
                  handleGeneratePrompts();
                }
                setCurrentPage(8);
              }}
            />
          )}

          {/* STEP 8: PROMPT */}
          {currentPage === 8 && (
            <Step7GeneratedPrompt
              generatedPrompt={generatedScene?.prompt || generatedScene?.basePrompt || ''}
              onGeneratePrompts={handleGeneratePrompts}
              onGenerateImage={handleGenerateImage}
              loadingImage={generatingImage}
              hasGeneratedImage={!!generatedSceneImage?.src}
              onGoToImage={() => setCurrentPage(9)}
              copiedPrompt={!!copiedMap['master_prompt']}
              onCopyPrompt={() => handleCopy('master_prompt', generatedScene?.prompt || generatedScene?.basePrompt || '')}
              promptViewMode={promptViewMode}
              onTogglePromptViewMode={setPromptViewMode}
              onCopyTextSnippet={(key, text) => handleCopy(key, text)}
              copiedMap={copiedMap}
              loadingPrompt={loadingJobs.prompt}
              enabledSegmentIds={enabledSegmentIds}
              onToggleSegment={(segId, enabled) => {
                setEnabledSegmentIds(prev => ({ ...prev, [segId]: enabled }));
              }}
              onCopyFilteredPrompt={handleCopyFilteredPrompt}
              copiedFilteredPrompt={!!copiedMap['filtered_master_prompt']}
            />
          )}

          {/* STEP 9: IMAGE */}
          {currentPage === 9 && (
            <Step8Image
              imageSrc={generatedSceneImage?.src || null}
              imageTitle={generatedSceneImage?.title || generatedScene?.title || 'Noor Music Scene Artwork'}
              imagePrompt={generatedSceneImage?.prompt || generatedScene?.prompt || generatedScene?.basePrompt || ''}
              loadingImage={generatingImage}
              onGenerateImage={handleGenerateImage}
              onBackToPrompt={() => setCurrentPage(8)}
              copiedMap={copiedMap}
              onCopyText={handleCopy}
              styleLabel={getImageStyleById(selectedImageStyle)?.label}
              ratingLabel={getPromptRatingById(selectedPromptRating)?.label}
            />
          )}
        </div>

        {/* BOTTOM NAVIGATION BAR: BACK & NEXT */}
        <div className="flex items-center justify-between pt-2.5 border-t border-lavender-border/40 shrink-0">
          {/* LEFT: CHARACTER STATUS & CURRENT PAGE */}
          <div className="flex items-center gap-2 text-xs text-lavender-text/70">
            <span className="px-2.5 py-1 rounded bg-lavender-surface border border-lavender-border/50 text-xs font-bold text-lavender-accent">
              {WIZARD_STEPS[currentPage - 1]?.title}
            </span>
            <span className="hidden sm:inline">
              Active Characters: <span className="font-bold text-emerald-300">{enabledCount}/5</span>
            </span>
          </div>

          {/* RIGHT: BACK BUTTON AND OPTIONAL FORWARD BUTTON */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleBack}
              disabled={currentPage === 1}
              className="px-4 py-2 text-xs font-bold bg-lavender-surface hover:bg-lavender-border text-lavender-accent border border-lavender-border rounded-lg flex items-center gap-1.5 transition-all shadow-sm cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed active:scale-95"
            >
              <ChevronLeft size={15} />
              <span>Back</span>
            </button>

            {currentPage < 9 && (
              <button
                onClick={handleNext}
                className="px-5 py-2 text-xs font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-lg flex items-center gap-1.5 transition-all shadow-md cursor-pointer active:scale-95"
              >
                <span>{currentPage === 7 ? 'View Prompt' : currentPage === 8 ? 'View Image' : 'Next'}</span>
                <ChevronRight size={15} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
