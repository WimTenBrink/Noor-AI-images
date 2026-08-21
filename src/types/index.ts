export type Priority = 'low' | 'normal' | 'high';
export type JobStatus = 'pending' | 'running' | 'done' | 'failed';

export interface Job {
  id: string;
  name: string;
  priority: Priority;
  status: JobStatus;
  createdAt: number;
  apiKey?: string;
  startedAt?: number;
  completedAt?: number;
  error?: string;
  rawRequest?: string;
  rawResponse?: string;
  result?: any;
  prompt?: string;
  systemInstruction?: string;
  retryCount?: number;
  generationSettings?: any;
  imageBase64?: string;
  imageMimeType?: string;
  isImageJob?: boolean;
}

export interface StoryPrompts {
  miranda: { wan: string; sdxl: string };
  annelies: { wan: string; sdxl: string };
  fannie: { wan: string; sdxl: string };
  emma: { wan: string; sdxl: string };
  mirandaAnnelies: { wan: string; sdxl: string };
  fannieEmma: { wan: string; sdxl: string };
  group: { wan: string; sdxl: string };
}

export interface PortraitPrompts {
  miranda: { wan: string; sdxl: string };
  annelies: { wan: string; sdxl: string };
  fannie: { wan: string; sdxl: string };
  emma: { wan: string; sdxl: string };
}

export type PortraitType = 'Face' | 'Torso' | 'Body';

export interface ForbiddenTopics {
  barefoot: boolean;
  naturism: boolean;
  farm: boolean;
  singers: boolean;
}

export interface VideoSegmentPrompt {
  segmentIndex: number;
  timeRange: string;
  lyricsInSegment: string;
  bandPrompt: string;
  narrativePrompt: string;
}

export interface StoryCharacter {
  id?: string;
  name: string;
  species?: string;
  description: string;
  pose?: string;
  cleanPrompt?: string;
  explicitPrompt?: string;
  age?: string;
  bodyShape?: string;
  skinColor?: string;
  hairColorStyle?: string;
  details?: string;
}

export interface Song {
  title: string;
  style: string;
  lyrics: string;
  imageDescription?: string;
  imagePrompts?: {
    start: string;
    middle: string;
    end: string;
  };
  story?: string;
  storyCharacters?: StoryCharacter[];
  storyPrompts?: StoryPrompts;
  interview?: string;
  entendres?: string;
  technical?: string;
  interviewReview?: string;
  analysis?: string;
  compare?: string;
  giggleScale?: string;
  coverArtPrompts?: {
    scenes?: {
      sceneTitle: string;
      description?: string;
      prompts: {
        id: string;
        label: string;
        cleanPrompt: string;
        explicitPrompt: string;
      }[];
    }[];
    groupAndDuos?: { title: string; prompt: string; explicitPrompt: string }[];
    miranda?: { title: string; prompt: string; explicitPrompt: string }[];
    annelies?: { title: string; prompt: string; explicitPrompt: string }[];
    fannie?: { title: string; prompt: string; explicitPrompt: string }[];
    emma?: { title: string; prompt: string; explicitPrompt: string }[];
    bandPrompts?: { title: string; prompt: string; explicitPrompt?: string }[];
    scenePrompts?: { title: string; prompt: string; explicitPrompt?: string }[];
  };
  videoSegmentPrompts?: VideoSegmentPrompt[];
  settings?: any;
}

export interface Instrument {
  name: string;
  type: string;
}

export interface Style {
  name: string;
  substyles: string[];
}

export interface LibraryItem {
  id: string;
  name: string;
  type: 'song' | 'image' | 'xml' | 'json' | 'text' | 'markdown';
  content: any;
  sourceUrl?: string;
}

export interface LogEntry {
  id: string;
  timestamp: number;
  level: 'info' | 'warn' | 'error';
  title: string;
  details: string;
}

export interface AppDefaults {
  [key: string]: any;
  bagpipes: boolean;
  crwth: boolean;
  steelpanDrums?: boolean;
  didgeridoo?: boolean;
  bullroarer?: boolean;
  boneFlute?: boolean;
  logDrum?: boolean;
  jawHarp?: boolean;
  stoneLithophone?: boolean;
  sapphic: boolean;
  pagan: boolean;
  doubleEntendres: boolean;
  barnStudio: boolean;
  barefootNaturism: boolean;
  noMenOrKids: boolean;
  passiveAggressive: boolean;
  rude: boolean;
  politeness: boolean;
  rivalry: boolean;
  loud: boolean;
  colorCoding: boolean;
  selfReflection: boolean;
  religion: 'Norse' | 'Greek' | 'Roman' | 'Celtic' | 'Native-American' | 'Mesopotamian' | 'Egyptian' | 'Canaanite' | 'Phoenician' | 'Vedic' | 'Slavic' | 'Baltic' | 'Shinto' | 'Aztec' | 'Mayan' | 'Yoruba' | 'Polynesian' | 'Finnish' | 'Etruscan' | 'Minoan' | 'Hurrian' | 'Elamite' | 'Arabian' | 'Other-Pagan';
  gothicMelancholy: boolean;
  vocalPolyphony: boolean;
  acousticBarnEcho: boolean;
  audienceInteraction: boolean;
  acousticOnly: boolean;
  rap: boolean;
  chant: boolean;
  audienceClapping?: boolean;
  audienceStomping?: boolean;
  audienceCheering?: boolean;
  audienceSinging?: boolean;
  audienceHumming?: boolean;
  audienceSingsChorus?: boolean;
  lyricsReversal?: boolean;
  // Culture expansion
  dutchFolkCulture?: boolean;
  nordicCelticFusion?: boolean;
  ecoFeminism?: boolean;
  // Beliefs expansion
  animismSpirits?: boolean;
  astrologicalRituals?: boolean;
  // Concert & Performance expansion
  aCappellaFocus?: boolean;
  callAndResponse?: boolean;
  acousticImprovisation?: boolean;
  vocalBeatboxing?: boolean;
  // Audience expansion
  audienceWhistling?: boolean;
  audienceGasps?: boolean;
  audienceCallResponse?: boolean;
  // Barn Atmosphere & Animal Sounds
  barnAnimalSounds?: 'none' | 'goats' | 'sheep' | 'cows' | 'chickens' | 'pigs' | 'roosters' | 'horses' | 'ducks' | 'all-farm-animals';
  barnRainRoof?: boolean;
  barnWoodenCreaks?: boolean;
  // Continents & Major Cultures
  continentAfrica?: boolean;
  continentAntarctica?: boolean;
  continentAsia?: boolean;
  continentEurope?: boolean;
  continentNorthAmerica?: boolean;
  continentSouthAmerica?: boolean;
  continentOceania?: boolean;
  cultureEuropean?: boolean;
  cultureIndian?: boolean;
  cultureAboriginal?: boolean;
  cultureNativeAmerican?: boolean;
  cultureEastAsian?: boolean;
  cultureMiddleEastern?: boolean;
  cultureAfrican?: boolean;
  cultureLatinAmerican?: boolean;
  culturePolynesian?: boolean;
  cultureCelticNordic?: boolean;
  cultureSlavic?: boolean;
  cultureCaribbean?: boolean;
  // Lyrical Style expansion
  vocalLilting?: boolean;
  poeticAllegory?: boolean;
  archaicIdioms?: boolean;
  storytellerBallad?: boolean;
}

