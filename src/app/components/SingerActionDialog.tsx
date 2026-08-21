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
  Wand2, Shirt, UserCheck, Zap, Palette, Music, Image as ImageIcon
} from 'lucide-react';
import { ADVENTURE_CATEGORIES, getLocationsForAdventure, findLocationInAllAdventures } from '../../constants/adventuresData';
import { SYSTEM_INSTRUCTIONS_LYRICS, SYSTEM_INSTRUCTIONS_BASE, SYSTEM_INSTRUCTIONS_SINGER_ACTION_PROMPT } from '../../constants/instructions';
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

// Import our 7 discrete step components
import { Step1ThemeAndSetting } from './actions/Step1ThemeAndSetting';
import { Step2MainScene } from './actions/Step2MainScene';
import { Step3Wardrobes } from './actions/Step3Wardrobes';
import { Step4CharacterDetails } from './actions/Step4CharacterDetails';
import { Step5Actions } from './actions/Step5Actions';
import { Step6StyleAndGeneration } from './actions/Step6StyleAndGeneration';
import { Step7GeneratedPrompt } from './actions/Step7GeneratedPrompt';

const WIZARD_PAGE_KEY = 'noor_action_wizard_page_v3';
const ACTIONS_STORAGE_KEY = 'noor_singer_actions_v2';
const WARDROBES_STORAGE_KEY = 'noor_singer_wardrobes_v2';
const SCENE_STORAGE_KEY = 'noor_singer_action_scene_v2';
const ENABLED_CHARS_STORAGE_KEY = 'noor_singer_enabled_chars_v2';
const MAIN_SCENE_STORAGE_KEY = 'noor_main_scene_v2';
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

export type WizardStep = 1 | 2 | 3 | 4 | 5 | 6 | 7;

interface SingerActionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenGenerateDialog?: () => void;
  onClearMainWindow?: () => void;
}

export const SingerActionDialog: React.FC<SingerActionDialogProps> = ({
  isOpen,
  onClose,
  onOpenGenerateDialog,
  onClearMainWindow
}) => {
  const { addJob, jobs } = useJobQueue();

  // Wizard current page (1-7)
  const [currentPage, setCurrentPage] = useState<WizardStep>(() => {
    const saved = localStorage.getItem(WIZARD_PAGE_KEY);
    const num = Number(saved);
    if (num >= 1 && num <= 7) return num as WizardStep;
    return 1;
  });

  // Step 1: Theme & Environmental Settings
  const [selectedAdventure, setSelectedAdventure] = useState<string>(() => {
    return localStorage.getItem(ADVENTURE_STORAGE_KEY) || 'farm';
  });
  const [selectedLocation, setSelectedLocation] = useState<string>(() => {
    return localStorage.getItem(LOCATION_STORAGE_KEY) || 'none';
  });
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

  // Enabled Characters State (5 characters)
  const [enabledChars, setEnabledChars] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(ENABLED_CHARS_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return { ...DEFAULT_ENABLED_CHARS };
  });

  // Step 2: Main Scene Background Setting Textbox
  const [mainSceneText, setMainSceneText] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(MAIN_SCENE_STORAGE_KEY);
      if (typeof saved === 'string' && saved && saved !== '[object Object]' && saved !== 'undefined' && saved !== 'null') {
        return saved;
      }
    } catch {}
    return DEFAULT_MAIN_SCENE;
  });

  // Step 3: Wardrobe Collection & Outfits
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

  // Step 4: Character Age, Tomboy, Camera Framing & Rating
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

  // Step 5: Action Group & Actions per Character
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

  // Step 6: Style Category & Style
  const [selectedStyleCategory, setSelectedStyleCategory] = useState<string>(() => {
    return localStorage.getItem(STYLE_CATEGORY_STORAGE_KEY) || 'franco_belgian_bd';
  });
  const [selectedImageStyle, setSelectedImageStyle] = useState<string>(() => {
    const saved = localStorage.getItem(IMAGE_STYLE_STORAGE_KEY);
    if (saved && IMAGE_STYLES.some(s => s.id === saved)) return saved;
    return 'herge_tintin';
  });

  // Generated Scene Prompts State
  const [generatedScene, setGeneratedScene] = useState<SingerActionSceneResult | null>(() => {
    try {
      const saved = localStorage.getItem(SCENE_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch {}
    return null;
  });

  // Prompt View Modes & Section Filtering
  const [promptViewMode, setPromptViewMode] = useState<'color' | 'raw'>('color');
  const [enabledSegmentIds, setEnabledSegmentIds] = useState<Record<string, boolean>>({});
  const [activeSections, setActiveSections] = useState({
    characters: true,
    environment: true,
    clothing: true,
    style: true
  });

  // Copy feedbacks
  const [copiedMap, setCopiedMap] = useState<Record<string, boolean>>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Active AI Jobs & Generation
  const [loadingJobs, setLoadingJobs] = useState<{
    scene: boolean;
    prompt: boolean;
  }>({
    scene: false,
    prompt: false
  });
  const [generatingImage, setGeneratingImage] = useState<boolean>(false);

  // Image Modal
  const [generatedImageModal, setGeneratedImageModal] = useState<{
    isOpen: boolean;
    src: string;
    title: string;
  } | null>(null);

  // Track pending AI Job IDs
  const pendingJobsRef = useRef<{
    sceneJobId?: string;
    promptJobId?: string;
    imageJobId?: string;
  }>({});

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem(WIZARD_PAGE_KEY, String(currentPage));
  }, [currentPage]);

  useEffect(() => {
    localStorage.setItem(ADVENTURE_STORAGE_KEY, selectedAdventure);
  }, [selectedAdventure]);

  useEffect(() => {
    localStorage.setItem(LOCATION_STORAGE_KEY, selectedLocation);
  }, [selectedLocation]);

  useEffect(() => {
    localStorage.setItem(WEATHER_STORAGE_KEY, selectedWeather);
  }, [selectedWeather]);

  useEffect(() => {
    localStorage.setItem(LIGHT_GROUP_STORAGE_KEY, selectedLightGroup);
  }, [selectedLightGroup]);

  useEffect(() => {
    localStorage.setItem(LIGHT_STORAGE_KEY, selectedLight);
  }, [selectedLight]);

  useEffect(() => {
    localStorage.setItem(MOOD_GROUP_STORAGE_KEY, selectedMoodGroup);
  }, [selectedMoodGroup]);

  useEffect(() => {
    localStorage.setItem(MOOD_STORAGE_KEY, selectedMood);
  }, [selectedMood]);

  useEffect(() => {
    localStorage.setItem(INSTRUMENTS_STORAGE_KEY, String(includeInstruments));
  }, [includeInstruments]);

  useEffect(() => {
    localStorage.setItem(ENABLED_CHARS_STORAGE_KEY, JSON.stringify(enabledChars));
  }, [enabledChars]);

  useEffect(() => {
    const textToSave = typeof mainSceneText === 'string' ? mainSceneText : (mainSceneText ? String(mainSceneText) : '');
    localStorage.setItem(MAIN_SCENE_STORAGE_KEY, textToSave);
  }, [mainSceneText]);

  useEffect(() => {
    localStorage.setItem(WARDROBE_GROUP_STORAGE_KEY, selectedWardrobeGroup);
  }, [selectedWardrobeGroup]);

  useEffect(() => {
    localStorage.setItem(WARDROBES_STORAGE_KEY, JSON.stringify(wardrobes));
  }, [wardrobes]);

  useEffect(() => {
    localStorage.setItem(CHARACTER_AGES_STORAGE_KEY, JSON.stringify(characterAges));
  }, [characterAges]);

  useEffect(() => {
    localStorage.setItem(CHARACTER_TOMBOYS_STORAGE_KEY, JSON.stringify(characterTomboys));
  }, [characterTomboys]);

  useEffect(() => {
    localStorage.setItem(CHARACTER_FRAMING_STORAGE_KEY, selectedCharacterFraming);
  }, [selectedCharacterFraming]);

  useEffect(() => {
    localStorage.setItem(PROMPT_RATING_STORAGE_KEY, selectedPromptRating);
  }, [selectedPromptRating]);

  useEffect(() => {
    localStorage.setItem(ACTION_GROUP_STORAGE_KEY, selectedActionGroup);
  }, [selectedActionGroup]);

  useEffect(() => {
    localStorage.setItem(ACTIONS_STORAGE_KEY, JSON.stringify(actions));
  }, [actions]);

  useEffect(() => {
    localStorage.setItem(STYLE_CATEGORY_STORAGE_KEY, selectedStyleCategory);
  }, [selectedStyleCategory]);

  useEffect(() => {
    localStorage.setItem(IMAGE_STYLE_STORAGE_KEY, selectedImageStyle);
  }, [selectedImageStyle]);

  useEffect(() => {
    if (generatedScene) {
      localStorage.setItem(SCENE_STORAGE_KEY, JSON.stringify(generatedScene));
    }
  }, [generatedScene]);

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

  // Helper to extract API key
  const getApiKey = () => {
    try {
      const stored = localStorage.getItem('google_genai_api_key');
      if (stored) return stored;
    } catch {}
    return '';
  };

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

  const getInstrumentsPromptStr = () => {
    return includeInstruments
      ? 'Musical instruments: Enabled. Characters hold or play their primary instrument matching their band role.'
      : '';
  };

  const buildThemeSummaryText = (): string => {
    const parts: string[] = [];
    const adv = ADVENTURE_CATEGORIES.find(a => a.id === selectedAdventure);
    if (adv) parts.push(`Adventure Theme: ${adv.label}`);

    const locStr = getLocationPromptStr();
    if (locStr) parts.push(locStr);

    const wStr = getWeatherPromptStr();
    if (wStr) parts.push(wStr);

    const lStr = getLightPromptStr();
    if (lStr) parts.push(lStr);

    const mStr = getMoodPromptStr();
    if (mStr) parts.push(mStr);

    if (includeInstruments) parts.push('Musical Instruments: Enabled');

    return parts.join(' | ') || 'Default Dutch Countryside Atmosphere.';
  };

  // Helper to extract text from AI job result
  const extractJobPromptString = (result: any): string => {
    if (!result) return '';
    if (typeof result === 'string') {
      try {
        const match = result.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
        const text = match ? match[1] : result;
        const parsed = JSON.parse(text);
        if (typeof parsed === 'string') return parsed;
        if (parsed && typeof parsed === 'object') {
          if (typeof parsed.prompt === 'string') return parsed.prompt;
          if (typeof parsed.description === 'string') return parsed.description;
          if (typeof parsed.action === 'string') return parsed.action;
          if (typeof parsed.title === 'string' && !parsed.prompt) return parsed.title;
        }
      } catch {}
      return result;
    }
    if (typeof result === 'object') {
      if (typeof result.prompt === 'string') return result.prompt;
      if (typeof result.description === 'string') return result.description;
      if (typeof result.action === 'string') return result.action;
      if (typeof result.text === 'string') return result.text;
      try {
        return JSON.stringify(result);
      } catch {
        return '';
      }
    }
    return String(result || '');
  };

  const extractJobPromptAndTitle = (result: any): { prompt: string; title: string } => {
    let prompt = '';
    let title = '';
    if (!result) return { prompt, title };
    let parsed: any = null;
    if (typeof result === 'string') {
      try {
        const match = result.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
        const text = match ? match[1] : result;
        parsed = JSON.parse(text);
      } catch {
        prompt = result;
      }
    } else if (typeof result === 'object' && result) {
      parsed = result;
    }

    if (parsed) {
      if (typeof parsed === 'string') {
        prompt = parsed;
      } else if (typeof parsed === 'object') {
        if (typeof parsed.title === 'string') title = parsed.title;
        if (Array.isArray(parsed.characters) || Array.isArray(parsed.actions) || parsed.lighting || parsed.weather || parsed.style) {
          // Assemble discrete section fields into strictly ordered prompt paragraphs
          const sections: string[] = [];
          if (Array.isArray(parsed.characters)) {
            parsed.characters.forEach((c: any) => {
              if (c && c.description) sections.push(c.description);
            });
          }
          if (Array.isArray(parsed.actions)) {
            parsed.actions.forEach((a: any) => {
              if (a && a.action) sections.push(a.action);
            });
          }
          if (Array.isArray(parsed.wardrobes)) {
            parsed.wardrobes.forEach((w: any) => {
              if (w && w.wardrobe) sections.push(w.wardrobe);
            });
          }
          if (parsed.lighting) sections.push(parsed.lighting);
          if (parsed.weather) sections.push(parsed.weather);
          if (parsed.framing) sections.push(parsed.framing);
          if (parsed.style) sections.push(parsed.style);
          prompt = sections.filter(Boolean).join('\n\n');
        } else if (typeof parsed.finalPrompt === 'string' && parsed.finalPrompt.trim()) {
          prompt = parsed.finalPrompt;
        } else if (typeof parsed.prompt === 'string' && parsed.prompt.trim()) {
          prompt = parsed.prompt;
        } else if (typeof parsed.description === 'string') {
          prompt = parsed.description;
        } else if (typeof parsed.action === 'string') {
          prompt = parsed.action;
        }
      }
    }
    return { prompt, title };
  };

  // Monitor AI Job Results
  useEffect(() => {
    // 1. Scene Randomize Job
    if (pendingJobsRef.current.sceneJobId) {
      const job = jobs.find(j => j.id === pendingJobsRef.current.sceneJobId);
      if (job && (job.status === 'done' || job.status === 'failed')) {
        if (job.status === 'done' && job.result) {
          const promptText = extractJobPromptString(job.result);
          if (promptText) {
            setMainSceneText(promptText);
          }
        }
        setLoadingJobs(prev => ({ ...prev, scene: false }));
        pendingJobsRef.current.sceneJobId = undefined;
      }
    }

    // 2. Scene Prompt Generation Job
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
              setGeneratedImageModal({
                isOpen: true,
                src: imgUrl,
                title: sceneTitle
              });
            }
          } catch (e) {
            console.error('Error parsing image result:', e);
          }
        }
        setGeneratingImage(false);
        pendingJobsRef.current.imageJobId = undefined;
      }
    }
  }, [jobs]);

  // AI Job: Randomize Main Scene (Page 2)
  const handleAiRandomizeMainScene = () => {
    setMainSceneText('');
    const locObj = findLocationInAllAdventures(selectedLocation) || LOCATION_OPTIONS.find(l => l.id === selectedLocation);
    const locStr = getLocationPromptStr();
    const weatherStr = getWeatherPromptStr();
    const lightStr = getLightPromptStr();
    const moodStr = getMoodPromptStr();

    const envRules = locObj && locObj.id !== 'none'
      ? `ENVIRONMENT TYPE (${locObj.type.toUpperCase()}): This scene is set in ${locObj.type.toUpperCase()} environment (${locObj.description}).`
      : 'Ensure the environment setting is clear and realistic.';

    const prompt = `Generate a detailed 2-sentence main background scene description for a landscape or environmental photograph.
${locStr} ${weatherStr} ${lightStr} ${moodStr}
${envRules}
CRITICAL INCLUSIVE RULE: Focus strictly on the background environment setting, landscape, nature, and architectural elements.
Return JSON: { "title": "Main Scene Background", "prompt": "string" }`;

    const systemInst = `You are a creative photo art director. Return ONLY clean JSON with keys "title" and "prompt". Focus strictly on the background environment setting.`;

    setLoadingJobs(prev => ({ ...prev, scene: true }));
    const jobId = addJob("Randomize Main Scene", "normal", prompt, getApiKey(), undefined, systemInst);
    pendingJobsRef.current.sceneJobId = jobId;
  };

  // Compile Scene Prompts (Page 6)
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
    const jobId = addJob(
      `Compile Scene Master Prompt: ${selectedPromptRating.toUpperCase()}`,
      "high",
      promptPayload,
      getApiKey(),
      { type: 'singer_action_prompt', rating: selectedPromptRating },
      SYSTEM_INSTRUCTIONS_SINGER_ACTION_PROMPT
    );
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

  // Copy filtered prompt helper (used across Step 6 and Step 7)
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
    setEnabledChars({ ...DEFAULT_ENABLED_CHARS });
    setActions({ ...DEFAULT_ACTIONS });
    setSelectedWardrobeGroup('daily_casual');
    setSelectedActionGroup('sporting');
    setWardrobes({ ...DEFAULT_WARDROBES });
    setCharacterAges({ ...DEFAULT_CHARACTER_AGES });
    setCharacterTomboys({ ...DEFAULT_CHARACTER_TOMBOYS });
    setGeneratedScene(null);
    setCurrentPage(1);
    setErrorMessage(null);

    localStorage.removeItem(SCENE_STORAGE_KEY);
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
    const fullPrompt = generatedScene?.prompt || generatedScene?.basePrompt || '';
    if (!fullPrompt) {
      handleGeneratePrompts();
    }
    const promptToUse = fullPrompt || generatedScene?.prompt || '';
    if (!promptToUse) return;

    setGeneratingImage(true);
    const ratingObj = getPromptRatingById(selectedPromptRating);
    const jobTitle = `Generate Image: ${ratingObj.label}`;

    const promptPayload = `GENERATE_IMAGE_REQUEST
Prompt: ${promptToUse}
Aspect Ratio: 16:9
Format: image/png
Art Style: ${getImageStyleById(selectedImageStyle).label}`;

    const jobId = addJob(
      jobTitle,
      "high",
      promptPayload,
      getApiKey(),
      { isImageGenerationJob: true, rating: selectedPromptRating }
    );
    pendingJobsRef.current.imageJobId = jobId;
  };

  // Generate Song from Scene Context
  const handleGenerateSong = () => {
    const activeSingers = SINGERS_DETAILED.filter(s => enabledChars[s.id]);
    const sceneTitleBase = mainSceneText ? mainSceneText.slice(0, 40) + '...' : 'Dutch Countryside Scene';

    const singerActionSummary = activeSingers.map(s => {
      return `- ${s.name} (${s.role}): ${actions[s.id] || 'enjoying the atmosphere'}`;
    }).join('\n');

    const sceneContextText = `
MAIN SCENE BACKGROUND:
"${mainSceneText || 'Countryside farmstead in Abcoude'}"

ACTIVE CHARACTERS & ACTIONS:
${singerActionSummary}

LOCATION & ATMOSPHERE:
${getLocationPromptStr()}
${getWeatherPromptStr()}
${getMoodPromptStr()}
`;

    const apiKey = getApiKey();

    const optionsPrompt = `
You are an expert music producer and songwriter for the Dutch female pop/folk quartet Noor (Miranda Noor, Annelies Brink, Fannie de Jong, Emma Vermeer) and reporter Senna Bakker.
Analyze this scene setting to generate song options for the dashboard:
${sceneContextText}

Return valid JSON with title, genre, styles, instruments, inspirationArtists, emotions, leadVocalist, timeSignature, musicalKey, structurePreset, sliders, defaults, enabledTabs.
`;

    addJob(
      `Scene Song Options: ${sceneTitleBase}`,
      'high',
      optionsPrompt,
      apiKey,
      { isSceneSongJob: true, isSceneSongOptions: true },
      SYSTEM_INSTRUCTIONS_BASE
    );

    const lyricsPrompt = `
Write an upbeat, entertaining, self-reflective full-length song for the quartet Noor based on this scene:
${sceneContextText}

Return JSON with "title" and "lyrics".
`;

    addJob(
      `Scene Song Lyrics: ${sceneTitleBase}`,
      'high',
      lyricsPrompt,
      apiKey,
      { isSceneSongJob: true, isSceneSongLyrics: true },
      SYSTEM_INSTRUCTIONS_LYRICS
    );

    if (onClearMainWindow) onClearMainWindow();
    onClose();
    if (onOpenGenerateDialog) onOpenGenerateDialog();
  };

  // Wizard Steps Configuration
  const WIZARD_STEPS = [
    { step: 1 as WizardStep, title: 'Theme & Setting', icon: <Compass size={13} /> },
    { step: 2 as WizardStep, title: 'Main Scene & AI', icon: <Wand2 size={13} /> },
    { step: 3 as WizardStep, title: 'Wardrobes', icon: <Shirt size={13} /> },
    { step: 4 as WizardStep, title: 'Demographics & Rating', icon: <UserCheck size={13} /> },
    { step: 5 as WizardStep, title: 'Poses & Actions', icon: <Zap size={13} /> },
    { step: 6 as WizardStep, title: 'Style & Options', icon: <Palette size={13} /> },
    { step: 7 as WizardStep, title: 'Generated Prompt', icon: <Sparkles size={13} /> }
  ];

  const handleNext = () => {
    if (currentPage < 7) {
      // If moving towards prompt page (from page 5 or 6), compile prompts if not already generated
      if (currentPage === 5 || currentPage === 6) {
        if (!generatedScene?.prompt && !generatedScene?.basePrompt) {
          handleGeneratePrompts();
        }
      }
      setCurrentPage((prev) => (prev + 1) as WizardStep);
    } else {
      handleGeneratePrompts();
    }
  };

  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => (prev - 1) as WizardStep);
    }
  };

  const enabledCount = Object.values(enabledChars).filter(Boolean).length;

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title="Character Actions & Scene Prompt Wizard"
      size="full"
      headerActions={
        <div className="flex items-center gap-2">
          <button
            onClick={handleResetDefaults}
            className="px-3 py-1.5 text-xs font-bold bg-red-950/30 hover:bg-red-900/50 text-red-300 border border-red-500/30 rounded-lg flex items-center gap-1.5 transition-all shadow-sm cursor-pointer hover:border-red-500/60"
            title="Clear and reset all options to defaults"
          >
            <RotateCcw size={13} />
            Reset
          </button>
        </div>
      }
    >
      <div className="h-full flex flex-col min-h-0 space-y-3 p-1">
        {/* Error message banner if any */}
        {errorMessage && (
          <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-500/40 text-xs text-red-200 flex items-center justify-between shrink-0">
            <span>{errorMessage}</span>
            <button onClick={() => setErrorMessage(null)} className="text-red-400 hover:text-red-200 cursor-pointer">
              ✕
            </button>
          </div>
        )}

        {/* STEP PROGRESS BAR / BREADCRUMBS */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 border-b border-lavender-border/50 scrollbar-thin shrink-0">
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
                <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                  isCurrent ? 'bg-purple-500 text-white font-bold' : isCompleted ? 'bg-emerald-500/30 text-emerald-300 font-bold' : 'bg-lavender-bg text-lavender-text/60'
                }`}>
                  {step}
                </span>
                <span className="hidden sm:inline">{icon}</span>
                <span>{title}</span>
              </button>
            );
          })}
        </div>

        {/* ACTIVE WIZARD PAGE CONTENT */}
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
          {/* PAGE 1: THEME & SETTINGS */}
          {currentPage === 1 && (
            <Step1ThemeAndSetting
              selectedAdventure={selectedAdventure}
              onSelectAdventure={(adv) => {
                setSelectedAdventure(adv);
                setSelectedLocation('none');
                setWardrobes({
                  miranda: getSuggestedWardrobeForAdventure(adv),
                  annelies: getSuggestedWardrobeForAdventure(adv),
                  fannie: getSuggestedWardrobeForAdventure(adv),
                  emma: getSuggestedWardrobeForAdventure(adv),
                  senna: getSuggestedWardrobeForAdventure(adv)
                });
              }}
              selectedLocation={selectedLocation}
              onSelectLocation={setSelectedLocation}
              availableLocations={availableLocations}
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
              enabledChars={enabledChars}
              onToggleChar={(singerId) => setEnabledChars(prev => ({ ...prev, [singerId]: !prev[singerId] }))}
            />
          )}

          {/* PAGE 2: MAIN SCENE & AI */}
          {currentPage === 2 && (
            <Step2MainScene
              mainSceneText={mainSceneText}
              onChangeMainSceneText={setMainSceneText}
              onRandomizeMainScene={handleAiRandomizeMainScene}
              loadingScene={loadingJobs.scene}
              copiedMainScene={!!copiedMap['main_scene']}
              onCopyMainScene={() => handleCopy('main_scene', mainSceneText)}
              themeSummaryText={buildThemeSummaryText()}
            />
          )}

          {/* PAGE 3: WARDROBES */}
          {currentPage === 3 && (
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

          {/* PAGE 4: DEMOGRAPHICS, FRAMING & RATING */}
          {currentPage === 4 && (
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

          {/* PAGE 5: ACTIONS & POSES */}
          {currentPage === 5 && (
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

          {/* PAGE 6: ART STYLE & OPTIONS */}
          {currentPage === 6 && (
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
                setCurrentPage(7);
              }}
              onOpenSongGenerator={handleGenerateSong}
              onOpenImageGenerator={handleGenerateImage}
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
                setCurrentPage(7);
              }}
            />
          )}

          {/* PAGE 7: GENERATED PROMPT */}
          {currentPage === 7 && (
            <Step7GeneratedPrompt
              generatedPrompt={generatedScene?.prompt || generatedScene?.basePrompt || ''}
              onGeneratePrompts={handleGeneratePrompts}
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
        </div>

        {/* BOTTOM NAVIGATION BAR: BACK & NEXT (HIDDEN ON PAGE 7) */}
        <div className="flex items-center justify-between pt-2.5 border-t border-lavender-border/40 shrink-0">
          {/* LEFT: CHARACTER STATUS & CURRENT PAGE */}
          <div className="flex items-center gap-2 text-xs text-lavender-text/70">
            <span className="px-2 py-0.5 rounded bg-lavender-surface border border-lavender-border/50 text-[11px] font-bold text-lavender-accent">
              Step {currentPage} of 7
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

            {currentPage < 7 && (
              <button
                onClick={handleNext}
                className="px-5 py-2 text-xs font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-lg flex items-center gap-1.5 transition-all shadow-md cursor-pointer active:scale-95"
              >
                <span>{currentPage === 6 ? 'View Prompt' : 'Next'}</span>
                <ChevronRight size={15} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* GENERATED IMAGE MODAL */}
      {generatedImageModal && (
        <Dialog
          isOpen={generatedImageModal.isOpen}
          onClose={() => setGeneratedImageModal(null)}
          title={generatedImageModal.title}
          size="full"
          isNested={true}
        >
          <div className="h-full w-full flex flex-col min-h-[500px]">
            <div className="flex items-center justify-between px-4 py-2 bg-lavender-surface/50 border-b border-lavender-border flex-shrink-0">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <span className="text-xs font-bold text-amber-300">Title:</span>
                <span className="text-xs md:text-sm font-semibold text-purple-200 truncate">
                  {generatedImageModal.title}
                </span>
              </div>
              <button
                onClick={() => handleCopy('img_modal_title', generatedImageModal.title)}
                className="px-2.5 py-1 text-xs font-semibold bg-lavender-surface hover:bg-lavender-border text-lavender-accent rounded flex items-center gap-1.5 cursor-pointer shadow-sm shrink-0"
                title="Copy Title to clipboard"
              >
                {copiedMap['img_modal_title'] ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                Copy Title
              </button>
            </div>
            <ImageView src={generatedImageModal.src} alt={generatedImageModal.title} />
          </div>
        </Dialog>
      )}
    </Dialog>
  );
};
