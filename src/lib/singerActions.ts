import { SINGERS_DETAILED, SingerDetailedProfile } from '../constants/singersDetailed';
import { buildWardrobePromptText, getSingerWardrobeEvent } from './wardrobesHelper';
import { FARMHOUSE_JSON } from '../constants/farmhouseData';
import { findLocationInAllAdventures } from '../constants/adventuresData';
import { getImageStyleById } from '../constants/imageStyles';
import { getCharacterFramingById, DEFAULT_CHARACTER_FRAMING } from '../constants/characterFraming';
import { 
  DEFAULT_CHARACTER_AGE, 
  DEFAULT_IS_TOMBOY, 
  buildCharacterAgeLabel, 
  getAgeById 
} from '../constants/characterAge';
import { 
  PromptRatingId, 
  DEFAULT_PROMPT_RATING, 
  getPromptRatingById, 
  PROMPT_RATING_OPTIONS 
} from '../constants/promptRating';
import { 
  WEATHER_CONDITIONS, 
  LIGHT_GROUPS, 
  MOOD_GROUPS, 
  getLightById, 
  getMoodById, 
  getWeatherById,
  WeatherOption as SceneWeatherOption,
  LightOption,
  LightGroup,
  MoodOption as SceneMoodOption,
  MoodGroup
} from '../constants/sceneOptions';

export { 
  WEATHER_CONDITIONS, 
  LIGHT_GROUPS, 
  MOOD_GROUPS, 
  getLightById, 
  getMoodById, 
  getWeatherById 
};
export type { SceneWeatherOption, LightOption, LightGroup, SceneMoodOption, MoodGroup };

export interface SingerActionActiveMember {
  id: string;
  name: string;
  role: string;
  action: string;
  wardrobe?: string;
  Base: string;
  Face: string;
  Torso: string;
  Body: string;
}

export interface SingerActionSceneResult {
  version: string;
  title: string;
  timestamp: string;
  location?: string;
  weather?: string;
  light?: string;
  lightGroup?: string;
  mood?: string;
  moodGroup?: string;
  mainScene?: string;
  imageStyle?: string;
  characterFraming?: string;
  characterAge?: string | Record<string, string>;
  isTomboy?: boolean | Record<string, boolean>;
  rating?: PromptRatingId;
  prompt?: string;
  basePrompt?: string;
  activeSingers: SingerActionActiveMember[];
  basePrompt1?: string;
  basePrompt2?: string;
  basePrompt3?: string;
  baseNsfwPrompt?: string;
  standardPrompt1: string;
  standardPrompt2: string;
  standardPrompt3: string;
  standardPrompts: string[];
  standardPrompt: string;
  explicitPrompt: string;
  nsfwPrompt: string;
}

export interface LocationOption {
  id: string;
  label: string;
  type: 'outdoors' | 'indoors';
  description: string;
}

export const LOCATION_OPTIONS: LocationOption[] = [
  { id: 'none', label: 'None', type: 'outdoors', description: 'Unspecified location setting' },
  { id: 'farm', label: 'Abcoude Homestead Farm & Yard', type: 'outdoors', description: 'Outdoors: Joined twin 18th-century Dutch homestead, ground-floor bedrooms, green polder pastures, garden statues, and timber stables' },
  { id: 'studio', label: 'Converted Stables Sound Studio & Interview Lounge', type: 'indoors', description: 'Indoors: Converted timber stable wing with Neve mixing console, live recording room, instrument vault, and interview guest lounge' },
  { id: 'farm_attic', label: 'West Attic Hobby Space & Private Photo Studio', type: 'indoors', description: 'Indoors: Atmospheric West Attic under skylights with soldering workbench, art easels, softbox lights, and private photo shoot backdrops' },
  { id: 'farm_roof_terrace', label: 'Connecting Elevated Roof Terrace', type: 'outdoors', description: 'Outdoors: Central elevated roof terrace bridging the two attics, with teak outdoor sofas, festoon lights, and view over thatched roofs and pool' },
  { id: 'farm_kitchen', label: 'Farmhouse Rustic Kitchen', type: 'indoors', description: 'Indoors: Warm country kitchen with Delfts Blue tiles, terracotta floor, oak table seating 12, copper pots, and larder' },
  { id: 'farm_living', label: 'Farmhouse Living Room & Hearth', type: 'indoors', description: 'Indoors: Cozy ground-floor lounge with brick fireplace, leather sectionals, bookshelf, and turntable' },
  { id: 'farm_bedroom', label: 'Farmhouse Ground-Floor Bedrooms (King Beds)', type: 'indoors', description: 'Indoors: Spacious ground-floor bedroom with King-size bed for two persons (200x200cm), exposed oak beams, linen bedding, and garden/patio access' },
  { id: 'farm_bathroom', label: 'Farmhouse Luxury Bathroom & Clawfoot Tub', type: 'indoors', description: 'Indoors: Ground-floor spa bathroom with freestanding clawfoot porcelain tub, walk-in rain shower, and brass faucets' },
  { id: 'farm_toilet', label: 'Farmhouse Guest Toilet & Powder Room', type: 'indoors', description: 'Indoors: Charming ground-floor powder room with botanical wallpaper and classic Victorian pull-chain toilet' },
  { id: 'sauna', label: 'Scandinavian Cedarwood Sauna', type: 'indoors', description: 'Indoors: Aromatic Finnish red cedar sauna with two-tiered benches, volcanic stone stove, and wooden bucket' },
  { id: 'swimming_pool', label: 'Outdoor Heated Swimming Pool & Patio', type: 'outdoors', description: 'Outdoors: Turquoise mosaic heated outdoor pool with teak loungers, bluestone patio, and garden statues' },
  { id: 'farm_barn', label: 'Timber Farm Barn, Stables & Hayloft', type: 'indoors', description: 'Indoors: Renovated 19th-century timber stable complex with sweet-smelling haybales, ladders, and animal stalls' },
  { id: 'farm_enclosure', label: 'Farm Animal Paddock (Goats, Sheep & Chickens)', type: 'outdoors', description: 'Outdoors: Fenced paddock with 12 female goats, 10 female Texel sheep, and 15 female laying hens' },
  { id: 'farm_field', label: 'Farm Pastures, Vegetable Garden & Statues', type: 'outdoors', description: 'Outdoors: 5-acre rural landscape with weeping willows, garden statues, organic vegetable garden, and canals' },
  { id: 'farm_garage', label: 'Expansive Garage, Cars, Motorbikes & Guest Parking', type: 'indoors', description: 'Indoors: Spacious brick multi-car garage housing 4 singers\' cars, 4 motorbikes, 4 bicycles, band van, and guest parking' },
  { id: 'amsterdam', label: 'Amsterdam Canals & Jordaan Streets', type: 'outdoors', description: 'Outdoors: Open canal streetscape with cobblestone paths, brick facades, and historic bridges' },
  { id: 'utrecht', label: 'Utrecht Oudegracht Canal Terrace', type: 'outdoors', description: 'Outdoors: Sunlit stone canal terrace along the historic water level in Utrecht' },
  { id: 'beach', label: 'Scheveningen Beach & Coastal Dunes', type: 'outdoors', description: 'Outdoors: Open North Sea coastline with wide sandy beaches, rolling coastal dunes, marram dune grass, ocean tides, and open sea air' },
  { id: 'forest', label: 'Veluwe Forest Pine Trails', type: 'outdoors', description: 'Outdoors: Natural pine forest trails, tall pine trees, sunbeams filtering through foliage, and woodland paths' },
  { id: 'heather', label: 'Laren Heather Fields in Bloom', type: 'outdoors', description: 'Outdoors: Expansive open moorland covered in vibrant purple blooming heather under a vast open sky' },
  { id: 'windmill', label: 'Zaanse Schans Windmill Meadow', type: 'outdoors', description: 'Outdoors: Traditional Dutch wooden windmills, grassy meadow paths, and open waterways' },
  { id: 'lakeside', label: 'Kagerplassen Lakeside Pier & Dock', type: 'outdoors', description: 'Outdoors: Open wooden pier extending into the calm lake waters of Kagerplassen' },
  { id: 'cafe', label: 'Cozy Vintage Bookstore Cafe', type: 'indoors', description: 'Indoors: Cozy interior with bookshelves, warm wooden tables, and soft indoor lamp lighting' },
  { id: 'rooftop', label: 'Urban Rooftop Terrace Sunset', type: 'outdoors', description: 'Outdoors: Open city rooftop terrace under the twilight horizon' },
  { id: 'stage', label: 'Concert Stage & Light Rig', type: 'indoors', description: 'Indoors: Concert hall stage with spotlight rigs, wooden stage floor, and dark auditorium background' },
  { id: 'backstage', label: 'Dressing Room & Makeup Mirrors', type: 'indoors', description: 'Indoors: Backstage dressing room interior with vanity light bulbs, mirrors, and garment racks' },
  { id: 'recordshop', label: 'Amsterdam Vintage Vinyl Record Shop', type: 'indoors', description: 'Indoors: Cozy record store interior packed with vinyl record crates and posters' }
];

/**
 * Get detailed Farmhouse JSON tree specifications for prompt consistency
 */
export function getFarmhouseLocationDetails(locationId: string): string {
  if (!FARMHOUSE_JSON || !FARMHOUSE_JSON.Farm) return '';
  const farm = FARMHOUSE_JSON.Farm;
  const house = farm.House;
  const stables = farm.StablesAndBarn;
  const fields = farm.FieldsAndGardens;

  switch (locationId) {
    case 'farm':
      return `${farm.Description} Layout: Joined twin 18th-century Dutch homestead with single-level ground floor and two upper attics connected by an elevated roof terrace. Fields & Statues: ${fields.Description}`;
    case 'farm_kitchen':
    case 'kitchen':
      return `${house.Kitchen.Description} Featured objects: ${house.Kitchen.Objects.OakDiningTable}, ${house.Kitchen.Objects.DelftTiles}, ${house.Kitchen.Objects.GasRange}, ${house.Kitchen.Objects.HerbWindowsill}, ${house.Kitchen.Objects.PantryLarder}.`;
    case 'farm_living':
      return `${house.LivingRoom.Description} Featured objects: ${house.LivingRoom.Objects.Fireplace}, ${house.LivingRoom.Objects.LeatherSofas}, ${house.LivingRoom.Objects.Bookshelves}, ${house.LivingRoom.Objects.RecordPlayer}.`;
    case 'farm_bedroom':
      return `Ground-floor bedroom in joined twin Dutch homestead featuring a spacious King-size bed for two persons (200x200cm), exposed oak ceiling beams, warm wooden furniture, linen bedding, writing desk, and patio/garden doors overlooking polder fields.`;
    case 'farm_attic':
      return `${house.WestAttic.Description} Featured objects: ${house.WestAttic.Objects.SolderingWorkbench}, ${house.WestAttic.Objects.ArtEaselAndPaints}, ${house.WestAttic.Objects.PhotoBackdropAndSoftboxes}, ${house.WestAttic.Objects.PrivatePhotoArchive}, ${house.WestAttic.Objects.TerraceDoor}.`;
    case 'farm_roof_terrace':
      return `${house.RoofTerrace.Description} Featured objects: ${house.RoofTerrace.Objects.TeakLoungeSet}, ${house.RoofTerrace.Objects.FestoonLighting}, ${house.RoofTerrace.Objects.PottedPlants}, ${house.RoofTerrace.Objects.ConnectingDoors}.`;
    case 'farm_bathroom':
    case 'bathroom':
      return `${house.Bathroom.Description} Featured objects: ${house.Bathroom.Objects.ClawfootTub}, ${house.Bathroom.Objects.RainShower}, ${house.Bathroom.Objects.VanityMirror}.`;
    case 'farm_toilet':
    case 'toilet':
      return `${house.Toilet.Description} Featured objects: ${house.Toilet.Objects.PullChainToilet}, ${house.Toilet.Objects.PedestalSink}.`;
    case 'sauna':
      return `${house.Sauna.Description} Featured objects: ${house.Sauna.Objects.CedarBenches}, ${house.Sauna.Objects.SaunaStove}, ${house.Sauna.Objects.BucketAndLadle}.`;
    case 'swimming_pool':
      return `${house.SwimmingPool.Description} Featured objects: ${house.SwimmingPool.Objects.PoolWater}, ${house.SwimmingPool.Objects.TeakLoungers}, ${house.SwimmingPool.Objects.PoolPatio}.`;
    case 'studio':
      const studioObj = stables.StablesRecordingStudio.Objects;
      return `${stables.StablesRecordingStudio.Description} Featured areas: ${studioObj.SoundproofLiveRoom}, ${studioObj.ControlRoom}, ${studioObj.InterviewGuestLounge}, ${studioObj.InstrumentVault}.`;
    case 'farm_barn':
      return `${stables.Description} Hayloft: ${stables.Hayloft.Description}.`;
    case 'farm_enclosure':
      return `Farm paddock and animal enclosures: ${stables.GoatPen.Description} Goats: ${stables.GoatPen.Animals}. ${stables.SheepMeadow.Description} Sheep: ${stables.SheepMeadow.Animals}. ${stables.ChickenCoop.Description} Chickens: ${stables.ChickenCoop.Animals}.`;
    case 'farm_field':
      return `${fields.Description} Vegetable Garden: ${fields.VegetableGarden.Description} Statues: ${fields.DecorativeStatues.Description} Landscape: ${fields.SurroundingLandscape}.`;
    case 'farm_garage':
      const g = farm.ParkingGarage;
      return `${g.Description} Miranda: ${g.SingersVehicles.MirandaVehicles}. Annelies: ${g.SingersVehicles.AnneliesVehicles}. Fannie: ${g.SingersVehicles.FannieVehicles}. Emma: ${g.SingersVehicles.EmmaVehicles}. Band Van: ${g.BandVehicles.BandVan}. Guest Parking: ${g.GuestParking}.`;
    default:
      return '';
  }
}

export interface WeatherOption {
  id: string;
  label: string;
  description: string;
}

export interface MoodOption {
  id: string;
  label: string;
  description: string;
}

export const WEATHER_OPTIONS: WeatherOption[] = [
  { id: 'none', label: 'None', description: 'Unspecified ambient lighting' },
  { id: 'sunny', label: 'Sunny & Clear Sky', description: 'Bright sunny natural daylight, crystal-clear blue skies, gentle sunbeams, and crisp natural shadows' },
  { id: 'goldenhour', label: 'Golden Hour Sunset Glow', description: 'Warm golden hour sunset lighting, long dramatic shadows, radiant amber rim light, and soft luminous evening glow' },
  { id: 'overcast', label: 'Soft Overcast Lighting', description: 'Diffused soft overcast daylight, gentle shadows, natural even illumination, and rich balanced color depth' },
  { id: 'rain', label: 'Gentle Rain & Wet Reflections', description: 'Gentle falling raindrops, glossy wet ground reflections, atmospheric cool mist, and glistening water droplets' },
  { id: 'snow', label: 'Winter Snow & Crisp Frost', description: 'Fresh white snowfall covering the ground, crisp frost textures, cool winter daylight, and visible chilly atmosphere' },
  { id: 'fog', label: 'Misty Morning Fog & Haze', description: 'Atmospheric morning fog rolling softly through the scene, dreamy diffused lighting, and mysterious depth' },
  { id: 'twilight', label: 'Twilight Dusk & Indigo Sky', description: 'Twilight dusk with deep indigo and violet evening sky, warm ambient glow, and subtle twilight lighting' },
  { id: 'starry', label: 'Clear Starry Night', description: 'Clear dark night sky filled with glittering stars, subtle moonlit rim lighting, and deep nocturnal contrast' },
  { id: 'autumnbreeze', label: 'Crisp Autumn Wind & Leaves', description: 'Crisp autumn breeze with golden and amber fallen leaves swirling in the air, low warm seasonal sunshine' },
  { id: 'springsun', label: 'Gentle Spring Sunlight', description: 'Fresh gentle spring sunlight, blooming flowers in soft focus, vibrant green foliage, and cheerful warmth' }
];

export const MOOD_OPTIONS: MoodOption[] = [
  { id: 'none', label: 'None', description: 'Natural authentic band atmosphere' },
  { id: 'romantic', label: 'Romantic & Cozy', description: 'Intimate and tender romantic mood, gentle affectionate smiles, soft warm golden atmosphere, and heartfelt emotional connection' },
  { id: 'happy', label: 'Happy & Cheerful', description: 'Bright cheerful energy, joyful radiant smiles, carefree laughter, and upbeat uplifting atmosphere' },
  { id: 'partying', label: 'Energetic & Partying', description: 'High-energy celebration, dynamic movement, excited expressions, spirited enthusiasm, and festive buzz' },
  { id: 'sad', label: 'Melancholic & Sad', description: 'Somber melancholic mood, pensive emotional expressions, gentle downcast gaze, and quiet contemplative sorrow' },
  { id: 'sleeping', label: 'Peaceful & Sleeping / Resting', description: 'Deep tranquil rest, peaceful sleeping posture, relaxed serene facial expressions, and quiet calm stillness' },
  { id: 'nostalgic', label: 'Nostalgic & Dreamy', description: 'Dreamy sentimental nostalgia, wistful faraway gazes, vintage warmth, and tender cherished memories' },
  { id: 'dramatic', label: 'Dramatic & Intense', description: 'Intense dramatic tension, powerful focused eye contact, striking poses, and cinematic gravitas' },
  { id: 'cozy', label: 'Cozy & Warm', description: 'Warm comforting atmosphere, relaxed homely vibes, soft cozy intimacy, and gentle content smiles' },
  { id: 'mysterious', label: 'Mysterious & Moody', description: 'Enigmatic mysterious mood, subtle intriguing expressions, moody low-key shadows, and captivating curiosity' },
  { id: 'silly', label: 'Silly & Playful', description: 'Playful goofy shenanigans, cheeky grins, funny candid interactions, and lighthearted tomboy humor' },
  { id: 'focused', label: 'Focused & Creative', description: 'Deep creative concentration, engaged collaborative focus, passionate artistry, and dedicated craftsmanship' },
  { id: 'relaxed', label: 'Relaxed & Chill', description: 'Laid-back casual relaxation, unhurried easygoing demeanor, comfortable lounging, and mellow peace' },
  { id: 'euphoric', label: 'Euphoric & Triumphant', description: 'Euphoric triumph, triumphant raised arms, beaming exhilaration, and overwhelming musical ecstasy' },
  { id: 'serene', label: 'Serene & Contemplative', description: 'Calm mindful serenity, gentle inner peace, meditative stillness, and soothing harmonious presence' },
  { id: 'rebellious', label: 'Rebellious & Edgy', description: 'Bold rebellious attitude, confident smirk, edgy tomboy swagger, and fierce independent spirit' },
  { id: 'playful', label: 'Playful & Whimsical', description: 'Whimsical spontaneity, lively animated expressions, teasing camaraderie, and vibrant youthful fun' },
  { id: 'vintage', label: 'Vintage & Retro', description: 'Classic retro charm, timeless period aesthetic, authentic vintage character, and nostalgic flair' }
];

// Creative action presets tailored for each singer with NO clothing items
export const SINGER_ACTION_PRESETS: Record<string, string[]> = {
  miranda: [
    "Sitting gracefully on a vintage wooden stool, tuning the pegs of her Fender Jazz Bass guitar while smiling thoughtfully.",
    "Leaning back against a warm studio amplifier, running a hand through her long espresso wavy hair with a passionate gaze.",
    "Standing poised with her bass guitar held across her lap, plucking a resonant low-register string with focused musical intensity.",
    "Seated cross-legged on a studio rug, holding her bass neck upright and looking into the lens with a warm confident expression.",
    "Reaching forward toward an analog mixing desk, adjusting a microphone stand while looking over her shoulder."
  ],
  annelies: [
    "Seated on a rustic bench, holding her antique wooden Crwth bowed lyre across her lap and carefully rosin-ing the bow.",
    "Standing near a sunlit studio window, drawing a warm acoustic bow across the strings of her Crwth with eyes softly closed.",
    "Leaning over an artist's drafting table with a sketch pad, holding a graphite pencil and smiling serenely.",
    "Sitting on an acoustic floor mat, cradling her Crwth lyre close to her chest while listening to the resonant tone.",
    "Standing gracefully with arms loosely folded in front of her, her bright blue almond-shaped eyes glowing in warm studio lighting."
  ],
  fannie: [
    "Seated behind her Tama drum kit, holding wooden drumsticks crossed above her snare with a playful grin behind her round glasses.",
    "Leaning casually against a bass drum head, holding drumsticks in one hand and adjusting her round wire-rimmed glasses with the other.",
    "Standing in an energetic athletic pose, twirling a drumstick between her fingers with a mischievous cheerful smile.",
    "Crouched on the studio floor next to a floor tom, adjusting a drumhead tension rod with curious wide blue eyes.",
    "Perched on a high drum throne with long lean legs dangling, resting her chin on her hands and smiling cheekily."
  ],
  emma: [
    "Standing at a vintage Roland Juno-106 synthesizer, resting her long slender fingers gracefully on the synth keys.",
    "Leaning over an analog synth patch panel with a patch cable in hand, looking up with a confident knowing smirk.",
    "Seated at a wooden piano bench, turning her head toward the group with a calm regal posture and direct green eyes.",
    "Standing tall with broad feminine shoulders, resting one hand on an audio cabinet and looking thoughtfully into the distance.",
    "Sitting with long legs resting on a leather studio sofa, leaning back comfortably with a calm, serene expression."
  ],
  senna: [
    "Standing with a sleek press microphone in hand, gesturing articulate points with a confident reporter smile.",
    "Leaning against an urban broadcast camera rig, reviewing interview notes on her digital tablet with a focused gaze.",
    "Sitting in a modern studio interview armchair with crossed legs, holding a sleek voice recorder with a polite curious smile.",
    "Walking briskly along a bustling studio corridor with her leather reporter satchel, looking toward the camera with a bright smile.",
    "Standing under studio lights holding her microphone, offering a captivating on-camera broadcast report with poise."
  ]
};

const DEFAULT_TITLES = [
  "Attic Rehearsal Session",
  "Acoustic Studio Gathering",
  "Midnight Synth & Bass Groove",
  "Noor Band Lounge Session",
  "Unplugged Harmony Circle",
  "Dutch Noise Chronicles Studio Call",
  "Abcoude Homestead Rehearsal",
  "Sunset Jam & Vocal Session"
];

/**
 * Get first name only from full name
 */
export function getFirstName(fullName: string): string {
  if (!fullName) return '';
  return fullName.trim().split(' ')[0];
}

/**
 * Sanitize a single prompt paragraph line for proper punctuation, removing parentheses, double dots, space before dots, etc.
 */
export function sanitizePromptParagraph(text: string): string {
  if (!text) return '';
  let s = text;

  // Replace internal newlines with single space
  s = s.replace(/[\r\n]+/g, ' ');

  // Remove explicit age numbers like "21-year-old", "21 years old", "21-years-old", "a 21-year-old"
  s = s.replace(/\b(?:a\s+)?\d+[\s-]*(?:years?[\s-]*)?old\b/gi, '');
  s = s.replace(/\bage\s*\d+\b/gi, '');

  // Remove any parentheses ( or )
  s = s.replace(/[\(\)]/g, '');

  // Remove any stray "Subject 1", "Subject 2", etc.
  s = s.replace(/\bSubject\s*\d+\b/gi, '');

  // Fix colon formatting
  s = s.replace(/\s*:\s*/g, ': ');
  s = s.replace(/:\s*:/g, ':');

  // Fix spaces before punctuation (. , ; :)
  s = s.replace(/\s+([.,;:])/g, '$1');

  // Fix multiple consecutive dots or commas
  s = s.replace(/\.+/g, '.');
  s = s.replace(/,+/g, ',');

  // Fix comma-dot or dot-comma
  s = s.replace(/,\./g, '.');
  s = s.replace(/\.,/g, '.');

  // Ensure space after punctuation if followed by a letter/number
  s = s.replace(/([.,;:!])([a-zA-Z0-9])/g, '$1 $2');

  // Clean double spaces
  s = s.replace(/\s+/g, ' ');

  s = s.trim();

  // Ensure line ends with a period if not already ending in punctuation
  if (s.length > 0 && !/[.!?]$/.test(s)) {
    s += '.';
  }

  return s;
}

/**
 * Sanitize prompt text for proper punctuation, removing parentheses, double dots, space before dots, etc.
 * Strictly preserves paragraph newlines without blank lines.
 */
export function sanitizePromptText(text: string): string {
  if (!text) return '';
  return text
    .split('\n')
    .map(line => sanitizePromptParagraph(line))
    .filter(line => line.length > 0)
    .join('\n');
}

/**
 * Helper to clean names and subtractive/negative terms
 */
export function cleanPromptText(text: string): string {
  if (!text) return '';
  let cleaned = text;

  // Remove specific singer names if typed inside actions
  cleaned = cleaned.replace(/\b(Miranda|Annelies|Fannie|Emma|Senna)\b/gi, '');

  // Remove subtractive / removal words that don't add positive visual detail
  const subtractiveRegex = /\b(unclad|bare|naked|nude|without clothing|no clothes|uncensored|obscuring|uncovered)\b/gi;
  cleaned = cleaned.replace(subtractiveRegex, '');

  return sanitizePromptParagraph(cleaned);
}

/**
 * Cap Standard prompt length to maximum 1,500 characters.
 */
export function capStandardPromptLength(promptText: string, maxLength = 1500): string {
  if (!promptText || promptText.length <= maxLength) return promptText;
  let truncated = promptText.substring(0, maxLength);
  const lastPeriod = truncated.lastIndexOf('.');
  if (lastPeriod > maxLength - 300) {
    truncated = truncated.substring(0, lastPeriod + 1);
  } else {
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace > 0) {
      truncated = truncated.substring(0, lastSpace);
    }
  }
  return sanitizePromptText(truncated);
}

/**
 * Get a random action for a specific singer ID
 */
export function getRandomActionForSinger(singerId: string, currentActions?: Record<string, string>): string {
  const presets = SINGER_ACTION_PRESETS[singerId];
  if (!presets || presets.length === 0) {
    return "Sitting gracefully on a studio stool, looking into the camera with a calm expression.";
  }

  // Filter out any action currently used if possible
  const current = currentActions ? currentActions[singerId] : '';
  const candidates = presets.filter(p => p !== current);
  const list = candidates.length > 0 ? candidates : presets;

  const selected = list[Math.floor(Math.random() * list.length)];
  return cleanPromptText(selected);
}

/**
 * Get randomized actions for all singers at once
 */
export function getRandomActionsForAll(): Record<string, string> {
  const result: Record<string, string> = {};
  for (const singer of SINGERS_DETAILED) {
    result[singer.id] = getRandomActionForSinger(singer.id);
  }
  return result;
}

/**
 * Generate scene-appropriate actions for singers that don't have text yet based on a scene description.
 * Does NOT include instruments unless explicitly asked for in sceneDescription.
 */
export function generateThemedActionsForScene(
  sceneDescription: string,
  currentActions?: Record<string, string>,
  enabledMap?: Record<string, boolean>
): Record<string, string> {
  const result: Record<string, string> = { ...(currentActions || {}) };
  if (!sceneDescription || sceneDescription.trim() === '') {
    // If no scene description, populate empty boxes with standard preset actions
    for (const singer of SINGERS_DETAILED) {
      if (enabledMap && !enabledMap[singer.id]) continue;
      if (!result[singer.id] || result[singer.id].trim() === '') {
        result[singer.id] = getRandomActionForSinger(singer.id);
      }
    }
    return result;
  }

  const mentionsInstruments = /instrument|guitar|bass|drum|keyboard|synth|violin|crwth|flute|piano|ukulele|cello|percussion/i.test(sceneDescription);
  const sceneLower = sceneDescription.toLowerCase().trim();

  for (const singer of SINGERS_DETAILED) {
    if (enabledMap && !enabledMap[singer.id]) continue;
    if (!result[singer.id] || result[singer.id].trim() === '') {
      let action = '';

      if (sceneLower.includes('beach') || sceneLower.includes('ocean') || sceneLower.includes('coast') || sceneLower.includes('sea') || sceneLower.includes('shore') || sceneLower.includes('dune') || sceneLower.includes('scheveningen') || sceneLower.includes('sand')) {
        const beachActions: Record<string, string[]> = {
          miranda: [
            "sitting gracefully on a sun-bleached driftwood log on the sand, watching the ocean waves roll in with a soft, relaxed smile.",
            "walking slowly along the water's edge, gazing out at the coastal horizon with a calm, serene expression.",
            "seated on a sandy dune near beach grass, looking into the warm sunlight with a thoughtful, gentle posture."
          ],
          annelies: [
            "lounging comfortably on a beach towel near the shore, shading her eyes from the sun with one hand while smiling softly.",
            "sitting cross-legged on the soft white sand, collecting smooth seashells and looking up with a warm, gentle gaze.",
            "leaning against a rustic beach dune fence, feeling the coastal sea breeze in her hair with a peaceful expression."
          ],
          fannie: [
            "standing in the shallow ocean surf, splashing water playfully with a bright, cheerful laugh.",
            "running along the wet beach sand near the tide line, turning back with an energetic, joyous grin.",
            "crouched by a sea tide pool, pointing at small tide life with curious wide blue eyes and a playful smile."
          ],
          emma: [
            "leaning back against a sun-drenched sand dune, watching the tide with a calm, confident gaze.",
            "standing on a coastal rocky outcrop, looking out over the ocean with a serene, majestic posture.",
            "sitting comfortably on a beach blanket, enjoying the sunset glow across the water with a quiet smile."
          ],
          senna: [
            "standing on a seaside wooden boardwalk, holding a press microphone with a sharp, engaging smile.",
            "walking along a coastal promenade, recording a voice memo on her phone while looking out at the ocean with a bright expression.",
            "seated at an outdoor beach cafe table with her tablet, enjoying the ocean view with a confident posture."
          ]
        };
        const list = beachActions[singer.id] || beachActions.miranda;
        action = list[Math.floor(Math.random() * list.length)];
      } else if (sceneLower.includes('farm') || sceneLower.includes('countryside') || sceneLower.includes('garden') || sceneLower.includes('abcoude')) {
        const farmActions: Record<string, string[]> = {
          miranda: [
            "leaning against a rustic wooden barn fence in the morning sun, holding a warm ceramic mug with a serene smile.",
            "sitting on a rustic wooden bench near the wildflower garden, looking out at the green pastures with a calm expression.",
            "walking along a gravel path between flower beds, pausing to admire the blooms with a thoughtful gaze."
          ],
          annelies: [
            "tending to fresh herbs in a garden bed, looking up with a soft smile and warm amber eyes.",
            "seated on the wooden porch steps of the homestead, resting her hands on her lap with a peaceful posture.",
            "leaning against an oak tree in the farm courtyard, enjoying the quiet countryside breeze with a gentle smile."
          ],
          fannie: [
            "sitting high on a hay bale in the barn loft, dangling her legs cheerfully and laughing warmly.",
            "leaning over the wooden corral gate, calling to the farm animals with a cheerful, energetic expression.",
            "walking through the apple orchard, holding a fresh green apple with a playful, mischievous grin."
          ],
          emma: [
            "standing by the greenhouse door, holding a wooden crate of fresh produce with a calm, proud posture.",
            "leaning back against stacks of fragrant hay in the barn, gazing out the open barn door with a quiet, confident smile.",
            "sitting on a wooden stool in the courtyard, watching the sunset over the pastures with a serene expression."
          ],
          senna: [
            "standing in the farm courtyard with a press microphone, interviewing local growers with a warm, professional expression.",
            "walking along the countryside lane holding a leather reporter clipboard, observing the fields with an inquisitive gaze.",
            "sitting on a wooden bench near the homestead barn, reviewing news reports on her tablet with a calm, focused posture."
          ]
        };
        const list = farmActions[singer.id] || farmActions.miranda;
        action = list[Math.floor(Math.random() * list.length)];
      } else if (sceneLower.includes('gala') || sceneLower.includes('formal') || sceneLower.includes('party') || sceneLower.includes('ballroom') || sceneLower.includes('red carpet')) {
        const galaActions: Record<string, string[]> = {
          miranda: [
            "standing poised near a marble staircase, looking toward the camera with a refined, majestic smile.",
            "leaning gracefully against a grand mahogany railing, looking across the hall with an elegant posture."
          ],
          annelies: [
            "seated elegantly in a plush armchair, holding a glass with a warm, serene expression.",
            "standing by a grand arched window overlooking the city lights, smiling softly into the evening glow."
          ],
          fannie: [
            "posing dynamically near a grand pillar, laughing cheerfully with a radiant, joyful expression.",
            "walking down the carpeted hall, looking over her shoulder with a playful, lively smile."
          ],
          emma: [
            "leaning casually against a grand pillar, looking out across the hall with a calm, commanding gaze.",
            "seated on a velvet sofa with regal posture, watching the gathering with a confident, knowing smirk."
          ],
          senna: [
            "standing on the press carpet with a sleek microphone, conducting a red-carpet broadcast report with radiant charm.",
            "leaning gracefully against a grand marble pillar, holding a tablet while observing the gala with a keen, articulate smile."
          ]
        };
        const list = galaActions[singer.id] || galaActions.miranda;
        action = list[Math.floor(Math.random() * list.length)];
      } else if (mentionsInstruments) {
        action = getRandomActionForSinger(singer.id);
      } else {
        const topic = sceneDescription.trim();
        const genericActions: Record<string, string[]> = {
          miranda: [
            `sitting gracefully in the scene setting of ${topic}, gazing into the lens with a calm, thoughtful smile.`,
            `standing gracefully in ${topic}, looking over her shoulder with a relaxed, elegant posture.`,
            `leaning comfortably in ${topic}, resting her chin on her hand with a serene expression.`
          ],
          annelies: [
            `standing comfortably in ${topic}, resting her hands gently in front of her with a warm, gentle smile.`,
            `seated peacefully in ${topic}, looking softly into the ambient light with a calm posture.`,
            `leaning softly in ${topic}, smiling with a peaceful expression.`
          ],
          fannie: [
            `posing playfully in ${topic}, offering a radiant smile with energetic, lighthearted posture.`,
            `sitting cheerfully in ${topic}, looking up with a mischievous, happy grin.`,
            `standing in ${topic}, laughing warmly with open, cheerful posture.`
          ],
          emma: [
            `leaning back comfortably in ${topic}, observing the surroundings with a quiet, confident gaze.`,
            `standing poised in ${topic}, looking out with a calm, commanding expression.`,
            `seated with serene posture in ${topic}, looking into the camera with a calm, confident smirk.`
          ],
          senna: [
            `standing in the scene setting of ${topic}, holding a press microphone with a confident, articulate reporter expression.`,
            `seated attentively in ${topic}, reviewing notes on her digital tablet with a sharp, curious smile.`,
            `leaning comfortably in ${topic}, looking into the camera with a bright, observant broadcast posture.`
          ]
        };
        const list = genericActions[singer.id] || genericActions.miranda;
        action = list[Math.floor(Math.random() * list.length)];
      }

      result[singer.id] = cleanPromptText(action);
    }
  }

  return result;
}

/**
 * AI-generated scene title based on participating singers and their actions
 */
export function generateAiSceneTitle(activeSingers: SingerActionActiveMember[]): string {
  if (activeSingers.length === 0) return "Noor Music - Studio Session";

  const actionsText = activeSingers.map(s => s.action).join(" ").toLowerCase();

  // Thematic keywords extracted from actions
  const keywords: string[] = [];
  if (actionsText.includes('bass') || actionsText.includes('fender')) keywords.push('Bass Groove');
  if (actionsText.includes('crwth') || actionsText.includes('bow') || actionsText.includes('lyre')) keywords.push('Crwth Reverie');
  if (actionsText.includes('drum') || actionsText.includes('stick') || actionsText.includes('snare')) keywords.push('Percussive Cadence');
  if (actionsText.includes('synth') || actionsText.includes('juno') || actionsText.includes('piano') || actionsText.includes('keys')) keywords.push('Analog Synth Echoes');
  if (actionsText.includes('stool') || actionsText.includes('bench') || actionsText.includes('sofa') || actionsText.includes('rug')) keywords.push('Studio Lounge');
  if (actionsText.includes('window') || actionsText.includes('sunlit') || actionsText.includes('sun')) keywords.push('Sunlit Reverie');

  const mainTheme = keywords.length > 0 ? keywords[Math.floor(Math.random() * keywords.length)] : 'Acoustic Studio Session';

  if (activeSingers.length === 1) {
    const s = activeSingers[0];
    const firstName = getFirstName(s.name);
    const singleTitles = [
      `Solo ${mainTheme} Session - ${firstName}`,
      `${s.role} Studio Solitude - ${firstName}`,
      `Unplugged Acoustic Artistry - ${firstName}`,
      `Acoustic Expression - ${firstName}`
    ];
    return singleTitles[Math.floor(Math.random() * singleTitles.length)];
  }

  if (activeSingers.length === 2) {
    const duetTitles = [
      `Acoustic Duet - ${mainTheme}`,
      `Acoustic Duet Rehearsal Session`,
      `Abcoude Studio Harmony Session`,
      `${mainTheme} Duet Gathering`
    ];
    return duetTitles[Math.floor(Math.random() * duetTitles.length)];
  }

  if (activeSingers.length === 3) {
    const trioTitles = [
      `Trio Harmony Session: ${mainTheme}`,
      `Abcoude Attic Acoustic Session`,
      `Noor Trio Studio Gathering`,
      `Acoustic Reverie Trio`
    ];
    return trioTitles[Math.floor(Math.random() * trioTitles.length)];
  }

  const fullBandTitles = [
    `Abcoude Homestead Rehearsal: ${mainTheme}`,
    `Complete Band Photo Session: ${mainTheme}`,
    `Dutch Noise Chronicles - Unplugged Session`,
    `Noor Quartet Acoustic Reverie`,
    `Sunset Rehearsal at the Studio`
  ];
  return fullBandTitles[Math.floor(Math.random() * fullBandTitles.length)];
}

/**
 * Strip instrument mentions from action string when instruments are disabled
 */
export function stripInstrumentsFromText(text: string): string {
  if (!text) return '';
  let cleaned = text;

  // Specific phrase replacements
  cleaned = cleaned.replace(/\btuning the pegs of her Fender Jazz Bass guitar\b/gi, 'sitting thoughtfully');
  cleaned = cleaned.replace(/\btuning the pegs of her Fender Jazz Bass\b/gi, 'sitting thoughtfully');
  cleaned = cleaned.replace(/\bholding her antique wooden Crwth bowed lyre across her lap and carefully rosin-ing the bow\b/gi, 'sitting with her hands resting comfortably on her lap');
  cleaned = cleaned.replace(/\bdrawing a warm acoustic bow across the strings of her Crwth\b/gi, 'looking out with a soft smile');
  cleaned = cleaned.replace(/\bcradling her Crwth lyre close to her chest\b/gi, 'resting comfortably');
  cleaned = cleaned.replace(/\bseated behind her Tama drum kit\b/gi, 'seated on a wooden stool');
  cleaned = cleaned.replace(/\bholding wooden drumsticks crossed above her snare\b/gi, 'resting her hands on her knees');
  cleaned = cleaned.replace(/\bleaning casually against a bass drum head, holding drumsticks in one hand and\b/gi, 'leaning casually back while');
  cleaned = cleaned.replace(/\btwirling a drumstick between her fingers\b/gi, 'gesturing with a cheerful smile');
  cleaned = cleaned.replace(/\badjusting a drumhead tension rod\b/gi, 'looking around curiously');
  cleaned = cleaned.replace(/\bperched on a high drum throne\b/gi, 'perched on a high stool');
  cleaned = cleaned.replace(/\bstanding at a vintage Roland Juno-106 synthesizer\b/gi, 'standing comfortably in the room');
  cleaned = cleaned.replace(/\bresting her long slender fingers gracefully on the synth keys\b/gi, 'resting her hands comfortably');
  cleaned = cleaned.replace(/\bleaning over an analog synth patch panel with a patch cable in hand\b/gi, 'leaning over a wooden table');
  cleaned = cleaned.replace(/\bseated at a wooden piano bench\b/gi, 'seated on a wooden bench');
  cleaned = cleaned.replace(/\bholding her bass guitar held across her lap, plucking a resonant low-register string\b/gi, 'sitting poised with a warm confident posture');
  cleaned = cleaned.replace(/\bholding her bass neck upright\b/gi, 'sitting cross-legged on a studio rug');
  cleaned = cleaned.replace(/\bleaning back against a warm studio amplifier\b/gi, 'leaning back comfortably');

  // General pattern replacements
  cleaned = cleaned.replace(/\b(her\s+)?(fender\s+jazz\s+bass\s+guitar|fender\s+jazz\s+bass|bass\s+guitar|bass\s+neck|bass\s+drum|bass|crwth\s+bowed\s+lyre|crwth\s+lyre|crwth|tama\s+drum\s+kit|drum\s+kit|drumsticks|drumstick|drums|snare|floor\s+tom|drumhead|drum\s+throne|roland\s+juno-106\s+synthesizer|juno-106|synthesizer|synth\s+keys|synth\s+patch\s+panel|synth|piano\s+bench|piano|guitar|lyre|bowed\s+lyre|musical\s+instrument|instrument|instruments|amplifier|amp)\b/gi, '');

  return sanitizePromptText(cleaned);
}

/**
 * Replaces gendered terms ("girl", "woman", "female") with "Tomboy" or age-appropriate demographic references when tomboy mode is enabled.
 * When enabled, all references to girl or woman are replaced.
 */
export function replaceGenderReferences(text: string, isTomboy: boolean): string {
  if (!text) return '';
  if (!isTomboy) return text;
  let res = text;
  // Multi-word phrases
  res = res.replace(/\byoung\s+adult\s+women\b/gi, 'young adult Tomboys');
  res = res.replace(/\byoung\s+adult\s+woman\b/gi, 'young adult Tomboy');
  res = res.replace(/\bmature\s+adult\s+women\b/gi, 'mature adult Tomboys');
  res = res.replace(/\bmature\s+adult\s+woman\b/gi, 'mature adult Tomboy');
  res = res.replace(/\byoung\s+women\b/gi, 'young Tomboys');
  res = res.replace(/\byoung\s+woman\b/gi, 'young Tomboy');
  res = res.replace(/\byoung\s+girls\b/gi, 'young Tomboys');
  res = res.replace(/\byoung\s+girl\b/gi, 'young Tomboy');
  res = res.replace(/\bteen\s+girls\b/gi, 'teen Tomboys');
  res = res.replace(/\bteen\s+girl\b/gi, 'teen Tomboy');
  res = res.replace(/\btomboy\s+girl\b/gi, 'Tomboy');
  res = res.replace(/\btomboy\s+woman\b/gi, 'Tomboy');

  // Standalone words (preserving capitalization where helpful)
  res = res.replace(/\bWomen\b/g, 'Tomboys');
  res = res.replace(/\bwomen\b/g, 'tomboys');
  res = res.replace(/\bWOMEN\b/g, 'TOMBOYS');
  res = res.replace(/\bWoman\b/g, 'Tomboy');
  res = res.replace(/\bwoman\b/g, 'tomboy');
  res = res.replace(/\bWOMAN\b/g, 'TOMBOY');

  res = res.replace(/\bGirls\b/g, 'Tomboys');
  res = res.replace(/\bgirls\b/g, 'tomboys');
  res = res.replace(/\bGIRLS\b/g, 'TOMBOYS');
  res = res.replace(/\bGirl\b/g, 'Tomboy');
  res = res.replace(/\bgirl\b/g, 'tomboy');
  res = res.replace(/\bGIRL\b/g, 'TOMBOY');

  // Clean up any double tomboy phrases e.g. "tomboy tomboy" -> "Tomboy"
  res = res.replace(/\b(?:tomboy|Tomboys)\s+(?:tomboy|Tomboys)\b/gi, 'Tomboy');

  return res;
}

/**
 * Strip clothing and wardrobe mentions from text for fine-art NSFW prompts
 */
export function stripClothingFromText(text: string): string {
  if (!text) return '';
  let cleaned = text;

  // Remove full clothing/wardrobe paragraph lines (e.g. "Miranda clothing details: wearing ...")
  cleaned = cleaned.replace(/^[^\n]*\b(?:clothing details|wearing|outfit details|wardrobe details)\b[^\n]*$/gim, '');

  // Remove explicit "Wardrobe: ...", "outfit: ...", "wearing ...", "dressed in ...", "clad in ...", "attired in ..." phrases
  cleaned = cleaned.replace(/\b(?:Wardrobe|Selected Wardrobe|Outfit|Attire|Clothing|Adornments?|Accessories)\s*:\s*[^.!?]*(?:[.!?]|$)/gi, '');
  cleaned = cleaned.replace(/\b(?:wearing|dressed in|clad in|attired in|sporting|outfitted in|adorned exclusively in|adorned in)\s+[^,.;]+([,.;]|$)/gi, '$1');
  cleaned = cleaned.replace(/\b(?:in a|in an)\s+(?:bikini|dress|skirt|robe|toga|tunic|sweater|shirt|hoodie|jacket|suit|coat|top|halter|peignoir|kimono|yukata|corset|loincloth|sarong)\b/gi, '');
  cleaned = cleaned.replace(/\b(?:wearing\s+)?(?:sleek\s+|stylish\s+|chic\s+)?(?:footwear|shoes|boots|sneakers|heels|sandals)\b/gi, '');

  // Strip wardrobe item patterns and terms
  const clothingTerms = [
    't-shirt', 'tshirt', 'shirt', 'blouse', 'crop top', 'tank top', 'tube top', 'halter top', 'camisole', 'bustier',
    'corset', 'poet blouse', 'sweater', 'duster sweater', 'cardigan', 'hoodie', 'pullover', 'flannel', 'tunic',
    'bra', 'bralette', 'sports bra', 'undergarment', 'undergarments', 'underwear',
    'jeans', 'daisy dukes', 'cutoffs', 'denim cutoffs', 'shorts', 'pants', 'trousers', 'breeches', 'hotpants', 'slacks',
    'leggings', 'biker shorts', 'boy-shorts', 'panties', 'thong', 'briefs', 'skirt', 'maxi skirt', 'mini skirt', 'wrap skirt',
    'sarong', 'pareo', 'micro pareo', 'loincloth', 'pelt wrap', 'leaves', 'ropes', 'rope harness', 'rope', 'jewelry', 'adornment', 'adornments',
    'dress', 'mini dress', 'slip dress', 'sundress', 'gown', 'nightgown', 'peignoir', 'robe', 'bathrobe', 'kimono',
    'yukata', 'toga', 'chiton', 'bodysuit', 'spacesuit', 'eva suit', 'uniform', 'swimsuit', 'bikini', 'string bikini',
    'lingerie', 'overalls', 'dungarees', 'rags', 'sack tunic', 'burlap sack', 'burlap',
    'bath towel', 'sauna towel', 'beach towel', 'towel wrap', 'terrycloth robe', 'terrycloth', 'towel',
    'jacket', 'leather jacket', 'coat', 'overcoat', 'duster coat', 'duster', 'anorak', 'cape', 'cloak', 'mantle',
    'pallium', 'vest', 'bodice', 'underbust bodice',
    'shoes', 'boots', 'riding boots', 'trail boots', 'space boots', 'city boots', 'sneakers', 'chic sneakers',
    'loafers', 'pumps', 'heels', 'high heels', 'stilettos', 'sandals', 'clogs', 'flip-flops', 'slippers',
    'socks', 'stockings', 'thigh-high stockings', 'lace stockings', 'fishnet stockings', 'tights', 'footwear', 'footgear',
    'outfit', 'wardrobe', 'costume', 'attire', 'garments', 'garment', 'clothes', 'clothing', 'sleeves', 'sleeve',
    'collar', 'waistband', 'zipper', 'button-down', 'straps', 'apron', 'shawl', 'scarf', 'necklace', 'bracelet', 'anklet', 'earrings'
  ];

  // Regex to remove standalone clothing terms
  const termsRegex = new RegExp(`\\b(${clothingTerms.join('|')})\\b`, 'gi');
  cleaned = cleaned.replace(termsRegex, '');

  return sanitizePromptText(cleaned);
}

/**
 * Generate standard and explicit prompts for active singers and actions
 * Order strictly follows:
 * 1. Appearances listed first (using first name only, e.g. Miranda: Base)
 * 2. Wardrobes listed second if selected (repeating first name, e.g. Miranda outfit: wearing...)
 * 3. Actions listed third (e.g. Miranda action: ...)
 * 4. Background details / photography settings
 * Cleaned of parentheses ( ), double dots, spaces before dots, stray (: etc.
 */
/**
 * Shuffle an array into a randomized order (Fisher-Yates)
 */
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

/**
 * Helper to strip any appended style or framing description from a prompt string
 */
export function stripStyleFromPrompt(prompt: string): string {
  if (!prompt) return '';
  const lines = prompt.split('\n');
  const filtered = lines.filter(line => {
    const trimmed = line.trim();
    if (!trimmed) return false;
    if (
      trimmed.startsWith('Image quality') ||
      trimmed.startsWith('Artistic Style & Medium') ||
      trimmed.startsWith('Style and Photography') ||
      trimmed.startsWith('Style and Medium') ||
      trimmed.startsWith('Character framing:') ||
      trimmed.startsWith('Character camera framing:') ||
      trimmed.startsWith('Framing:')
    ) {
      return false;
    }
    return true;
  });
  return filtered.join('\n').trim();
}

/**
 * Build the character camera framing paragraph
 */
export function buildFramingParagraph(framingId: string = DEFAULT_CHARACTER_FRAMING): string {
  const framingObj = getCharacterFramingById(framingId);
  return sanitizePromptParagraph(framingObj.promptModifier);
}

/**
 * Build the image quality, photography settings and art style paragraph
 */
export function buildImageQualityParagraph(
  styleId: string,
  variationOrRating: string = 'normal'
): string {
  if (variationOrRating === 'nsfw' || variationOrRating === 'explicit') {
    return sanitizePromptParagraph('Image quality, photography settings and artistic style: Soft natural shadows, warm key lighting, fine-art photography, authentic realistic photograph, 16:9 cinematic widescreen, 4k ultra-high resolution.');
  }

  const styleObj = getImageStyleById(styleId);
  if (variationOrRating === 'professional' || variationOrRating === 'std2') {
    return sanitizePromptParagraph(`Image quality, settings and artistic style (${styleObj.label}): ${styleObj.std2Modifier || styleObj.promptModifier}. High-fashion editorial photoshoot composition, commercial studio lighting, 16:9 cinematic widescreen, 4k ultra-high resolution.`);
  } else if (variationOrRating === 'intimate' || variationOrRating === 'std3') {
    return sanitizePromptParagraph(`Image quality, settings and artistic style (${styleObj.label}): ${styleObj.std3Modifier || styleObj.promptModifier}. Intimate close-up group portrait framing, warm gentle illumination, tight physical proximity, 16:9 cinematic widescreen, 4k ultra-high resolution.`);
  } else if (variationOrRating === 'innocent') {
    return sanitizePromptParagraph(`Image quality, settings and artistic style (${styleObj.label}): ${styleObj.std1Modifier || styleObj.promptModifier}. Bright cheerful lighting, clear focus, wholesome natural composition, 16:9 cinematic widescreen, 4k ultra-high resolution.`);
  } else {
    // normal / std1 / default
    return sanitizePromptParagraph(`Image quality, settings and artistic style (${styleObj.label}): ${styleObj.std1Modifier || styleObj.promptModifier}. Spontaneous candid framing, natural authentic composition, 16:9 cinematic widescreen, 4k ultra-high resolution.`);
  }
}

/**
 * Build the style, image quality, character framing and camera settings as separate paragraphs
 */
export function buildStyleParagraph(
  styleId: string, 
  variationOrRating: string = 'normal',
  framingId: string = DEFAULT_CHARACTER_FRAMING
): string {
  const framingPara = buildFramingParagraph(framingId);
  const qualityPara = buildImageQualityParagraph(styleId, variationOrRating);
  return `${framingPara}\n${qualityPara}`;
}

/**
 * Dynamically concatenate the selected character framing and art style description to the end of a prompt.
 * Switching art style or framing removes the previous choice and adds the new one without altering the base prompt.
 * Strictly separates with a single newline (no blank lines).
 */
export function appendStyleToPrompt(
  basePrompt: string, 
  styleId: string, 
  variationOrRating: string = 'normal',
  framingId: string = DEFAULT_CHARACTER_FRAMING
): string {
  if (!basePrompt || !basePrompt.trim()) return '';

  const cleanBase = stripStyleFromPrompt(basePrompt);
  if (!cleanBase) return '';

  const framingPara = buildFramingParagraph(framingId);
  const qualityPara = buildImageQualityParagraph(styleId, variationOrRating);
  return [cleanBase, framingPara, qualityPara].filter(Boolean).join('\n');
}

/**
 * Build appearance paragraphs for ALL active characters (Step 1 of Prompt Order)
 */
export function buildCharacterAppearanceParagraphs(
  members: SingerActionActiveMember[],
  sceneTypeOrRating: string = 'normal',
  includeInstruments: boolean = false,
  characterAgeId: string | Record<string, string> = DEFAULT_CHARACTER_AGE,
  isTomboy: boolean | Record<string, boolean> = DEFAULT_IS_TOMBOY
): string[] {
  const paragraphs: string[] = [];

  for (const m of members) {
    const memberAge = typeof characterAgeId === 'object' && characterAgeId ? (characterAgeId[m.id] || DEFAULT_CHARACTER_AGE) : (typeof characterAgeId === 'string' ? characterAgeId : DEFAULT_CHARACTER_AGE);
    const memberTomboy = typeof isTomboy === 'object' && isTomboy ? (isTomboy[m.id] ?? DEFAULT_IS_TOMBOY) : (typeof isTomboy === 'boolean' ? isTomboy : DEFAULT_IS_TOMBOY);
    const ageLabel = buildCharacterAgeLabel(memberAge, memberTomboy);

    const firstName = getFirstName(m.name);
    const isReporter = m.id === 'senna';
    const roleStr = includeInstruments ? `, ${m.role}` : (isReporter ? `, reporter` : `, ${m.role.toLowerCase()}`);
    const label = `${firstName}, ${ageLabel}${roleStr}`;
    
    if (sceneTypeOrRating === 'explicit' || sceneTypeOrRating === 'nsfw') {
      paragraphs.push(sanitizePromptParagraph(`${label}: ${m.Body}.`));
    } else {
      paragraphs.push(sanitizePromptParagraph(`${label}: ${m.Base}.`));
    }
  }

  return paragraphs;
}

/**
 * Build action paragraphs for ALL active characters (Step 2 of Prompt Order)
 */
export function buildCharacterActionParagraphs(
  members: SingerActionActiveMember[],
  sceneTypeOrRating: string = 'normal'
): string[] {
  const paragraphs: string[] = [];

  for (const m of members) {
    const firstName = getFirstName(m.name);
    
    if (sceneTypeOrRating === 'explicit') {
      const explicitAction = stripClothingFromText(m.action);
      paragraphs.push(sanitizePromptParagraph(`${firstName} action (explicit natural fine-art pose): ${explicitAction}.`));
    } else if (sceneTypeOrRating === 'nsfw') {
      const nsfwAction = stripClothingFromText(m.action);
      paragraphs.push(sanitizePromptParagraph(`${firstName} action (fine-art pose): ${nsfwAction}.`));
    } else {
      let posePrefix = 'candid action';
      if (sceneTypeOrRating === 'innocent') posePrefix = 'wholesome cheerful action';
      if (sceneTypeOrRating === 'professional' || sceneTypeOrRating === 'std2') posePrefix = 'fashion photoshoot pose';
      if (sceneTypeOrRating === 'intimate' || sceneTypeOrRating === 'std3') posePrefix = 'intimate grouping pose';

      paragraphs.push(sanitizePromptParagraph(`${firstName} action (${posePrefix}): ${m.action}.`));
    }
  }

  return paragraphs;
}

/**
 * Backward-compatible helper that builds appearance and actions in sequence
 */
export function buildCharacterParagraphs(
  members: SingerActionActiveMember[],
  sceneTypeOrRating: string = 'normal',
  includeInstruments: boolean = false,
  characterAgeId: string | Record<string, string> = DEFAULT_CHARACTER_AGE,
  isTomboy: boolean | Record<string, boolean> = DEFAULT_IS_TOMBOY
): string[] {
  const appearances = buildCharacterAppearanceParagraphs(members, sceneTypeOrRating, includeInstruments, characterAgeId, isTomboy);
  const actions = buildCharacterActionParagraphs(members, sceneTypeOrRating);
  return [...appearances, ...actions];
}

/**
 * Build Lighting paragraph (Step 4 of Prompt Order)
 */
export function buildLightingParagraph(
  light?: string,
  lightGroup?: string
): string {
  let lightText = 'Lighting: Natural ambient light with balanced contrast, soft shadows, and warm illumination';
  if (light && light !== 'none') {
    const lObj = getLightById(light, lightGroup);
    if (lObj && lObj.id !== 'none') {
      lightText = `Lighting: ${lObj.description || lObj.label}`;
    }
  }
  return sanitizePromptParagraph(lightText);
}

/**
 * Build Weather and Background Environment paragraphs (Step 5 of Prompt Order)
 */
export function buildWeatherAndEnvironmentParagraphs(
  mainScene?: string,
  location?: string,
  weather?: string,
  mood?: string,
  moodGroup?: string,
  sceneTypeOrRating: string = 'normal',
  includeInstruments: boolean = false
): string[] {
  // 1. Weather paragraph
  let weatherText = 'Weather: Clear temperate conditions with crisp, clean atmospheric clarity';
  if (weather && weather !== 'none') {
    const wObj = getWeatherById(weather) || WEATHER_OPTIONS.find(w => w.id === weather || w.label === weather);
    if (wObj && wObj.id !== 'none') {
      weatherText = `Weather: ${wObj.description || wObj.label}`;
    }
  }
  const weatherPara = sanitizePromptParagraph(weatherText);

  // 2. Location & scene background paragraph
  const locParts: string[] = [];
  const locObj = findLocationInAllAdventures(location || '') || LOCATION_OPTIONS.find(l => l.id === location || l.label === location);

  if (mainScene && mainScene.trim().length > 0) {
    locParts.push(`Main background scene: ${mainScene.trim()}`);
  } else if (locObj && locObj.id !== 'none') {
    locParts.push(`Main background scene: ${locObj.description}`);
  } else {
    locParts.push('Main background scene: Acoustic music studio interior with warm vintage atmosphere');
  }

  if (locObj && locObj.id !== 'none') {
    locParts.push(`Location setting (${locObj.type.toUpperCase()}): ${locObj.description}`);
    const farmhouseDetails = getFarmhouseLocationDetails(locObj.id);
    if (farmhouseDetails) {
      locParts.push(`Farmhouse dataset details: ${farmhouseDetails}`);
    }
  } else if (location && location !== 'none') {
    locParts.push(`Location: ${location}`);
  }

  if (mood && mood !== 'none') {
    const mObj = getMoodById(mood, moodGroup) || MOOD_OPTIONS.find(m => m.id === mood || m.label === mood);
    if (mObj && mObj.id !== 'none') {
      locParts.push(`Scene mood and atmosphere: ${mObj.description || mObj.label}`);
    }
  }

  if (includeInstruments) {
    locParts.push('Musical instruments: Enabled, characters holding or playing their primary instruments matching their band roles');
  }

  if (sceneTypeOrRating === 'innocent') {
    locParts.push('Scene concept: Wholesome, cheerful, and family-friendly interaction with joyous smiling expressions, playful companionship, and bright natural atmosphere');
  } else if (sceneTypeOrRating === 'normal' || sceneTypeOrRating === 'std1') {
    locParts.push('Scene concept: Spontaneous and candid snapshot capturing an unscripted, natural, in-the-moment interaction with authentic laughter, relaxed body postures, and candid charm');
  } else if (sceneTypeOrRating === 'professional' || sceneTypeOrRating === 'std2') {
    locParts.push('Scene concept: Professional fashion photoshoot with high-end editorial art direction, elegant professional model poise, confident fashion postures, and sharp commercial lighting');
  } else if (sceneTypeOrRating === 'intimate' || sceneTypeOrRating === 'std3') {
    locParts.push('Scene concept: Intimate close grouping with characters gathered closely together in tight physical proximity, touching shoulders, leaning gently together in affectionate sisterly camaraderie');
  } else if (sceneTypeOrRating === 'nsfw') {
    locParts.push('Scene concept: Fine-art private natural portrait, natural form aesthetic, tasteful fine-art composition, soft natural contours, authentic relaxed elegance');
  } else if (sceneTypeOrRating === 'explicit') {
    locParts.push('Scene concept: Explicit fine-art private personal portrait, full natural anatomical fidelity, intimate composition, unfiltered authentic form');
  }

  const envPara = sanitizePromptParagraph(locParts.join('. '));
  return [weatherPara, envPara].filter(Boolean);
}

/**
 * Build 3 separate paragraphs describing Environment & Location, Weather, and Lighting
 */
export function buildEnvironmentParagraphs(
  mainScene?: string,
  location?: string,
  weather?: string,
  light?: string,
  lightGroup?: string,
  mood?: string,
  moodGroup?: string,
  sceneTypeOrRating: string = 'normal',
  includeInstruments: boolean = false
): string[] {
  const lightPara = buildLightingParagraph(light, lightGroup);
  const weatherParas = buildWeatherAndEnvironmentParagraphs(mainScene, location, weather, mood, moodGroup, sceneTypeOrRating, includeInstruments);
  return [lightPara, ...weatherParas];
}

/**
 * Backward compatibility wrapper returning environment paragraphs joined
 */
export function buildEnvironmentParagraph(
  mainScene?: string,
  location?: string,
  weather?: string,
  light?: string,
  lightGroup?: string,
  mood?: string,
  moodGroup?: string,
  sceneTypeOrRating: string = 'normal',
  includeInstruments: boolean = false
): string {
  const paras = buildEnvironmentParagraphs(mainScene, location, weather, light, lightGroup, mood, moodGroup, sceneTypeOrRating, includeInstruments);
  return paras.join('\n');
}

/**
 * Build clothing paragraphs for each character in detail, skipping any character with no clothes
 */
export function buildClothingParagraphs(
  members: SingerActionActiveMember[],
  sceneTypeOrRating: string = 'normal'
): string[] {
  if (sceneTypeOrRating === 'nsfw' || sceneTypeOrRating === 'explicit') {
    return [];
  }

  const paragraphs: string[] = [];

  for (const m of members) {
    if (!m.wardrobe || m.wardrobe === 'none') {
      continue;
    }

    const firstName = getFirstName(m.name);

    // 1. Try getting the customized wardrobe prompt text for this singer & wardrobe item
    const customPrompt = buildWardrobePromptText(m.id, m.wardrobe);
    if (customPrompt && customPrompt.trim().length > 0) {
      const para = sanitizePromptParagraph(`${firstName} clothing details: ${customPrompt}.`);
      if (para) {
        paragraphs.push(para);
        continue;
      }
    }

    // 2. Fallback to event clothes breakdown if available
    const ev = getSingerWardrobeEvent(m.id, m.wardrobe);
    if (!ev) {
      continue;
    }

    // Skip if in naked group or marked naked or empty clothes
    if (ev.group === 'naked' || ev.event.startsWith('naked_') || !ev.clothes || ev.clothes.length === 0) {
      continue;
    }

    const piecesStr = ev.clothes.map(c => `${c.color} ${c.name}, ${c.description}`).join(', ');
    const footwearStr = ev.footwear ? `, ${ev.footwear}` : '';
    const para = sanitizePromptParagraph(`${firstName} clothing details: wearing ${piecesStr}${footwearStr}.`);
    if (para) {
      paragraphs.push(para);
    }
  }

  return paragraphs;
}

/**
 * Generate a single prompt based on the chosen Rating + backward-compatible standard and NSFW variations.
 * Divided into multiple paragraphs without blank lines:
 * 1. A paragraph for each character describing their body and action
 * 2. A paragraph describing the background environment and what is happening
 * 3. Paragraphs describing the clothes that each character is wearing in detail (skipped for characters with no clothes or NSFW/Explicit)
 * 4. A paragraph for the image quality, photography settings and the selected style (based on selected style)
 */
export function generateScenePrompts(
  actionsMap: Record<string, string>,
  wardrobeMap?: Record<string, string>,
  enabledMap?: Record<string, boolean>,
  mainScene?: string,
  location?: string,
  weather?: string,
  mood?: string,
  includeInstruments: boolean = false,
  imageStyleId: string = 'photo_realistic',
  light?: string,
  lightGroup?: string,
  moodGroup?: string,
  characterFramingId: string = DEFAULT_CHARACTER_FRAMING,
  characterAgeId: string | Record<string, string> = DEFAULT_CHARACTER_AGE,
  isTomboy: boolean | Record<string, boolean> = DEFAULT_IS_TOMBOY,
  rating: PromptRatingId = DEFAULT_PROMPT_RATING
): SingerActionSceneResult | null {
  const activeMembers: SingerActionActiveMember[] = [];

  for (const singer of SINGERS_DETAILED) {
    if (enabledMap && !enabledMap[singer.id]) {
      continue;
    }
    const actionText = actionsMap[singer.id] ? actionsMap[singer.id].trim() : '';
    if (actionText.length > 0) {
      let cleanAction = cleanPromptText(actionText);
      if (!includeInstruments) {
        cleanAction = stripInstrumentsFromText(cleanAction);
      }
      const selWardrobe = wardrobeMap ? (wardrobeMap[singer.id] || 'none') : 'none';
      const singerTomboy = typeof isTomboy === 'object' && isTomboy ? (isTomboy[singer.id] ?? DEFAULT_IS_TOMBOY) : (typeof isTomboy === 'boolean' ? isTomboy : DEFAULT_IS_TOMBOY);
      activeMembers.push({
        id: singer.id,
        name: singer.name,
        role: singer.role,
        action: cleanAction,
        wardrobe: selWardrobe,
        Base: sanitizePromptParagraph(replaceGenderReferences(singer.Base, singerTomboy)),
        Face: sanitizePromptParagraph(replaceGenderReferences(singer.Face, singerTomboy)),
        Torso: sanitizePromptParagraph(replaceGenderReferences(singer.Torso, singerTomboy)),
        Body: sanitizePromptParagraph(replaceGenderReferences(singer.Body, singerTomboy))
      });
    }
  }

  if (activeMembers.length === 0) {
    return null;
  }

  const finalTitle = generateAiSceneTitle(activeMembers);

  // =========================================================================
  // PRIMARY SINGLE PROMPT (Based on chosen rating)
  // ORDER: 1. Characters, 2. Actions, 3. Wardrobe, 4. Lighting, 5. Weather, 6. Framing, 7. Quality
  // =========================================================================
  const primaryMembers = shuffleArray(activeMembers);
  const primaryCharParas = buildCharacterAppearanceParagraphs(primaryMembers, rating, includeInstruments, characterAgeId, isTomboy);
  const primaryActionParas = buildCharacterActionParagraphs(primaryMembers, rating);
  const primaryClothingParas = buildClothingParagraphs(primaryMembers, rating);
  const primaryLightingPara = buildLightingParagraph(light, lightGroup);
  const primaryWeatherParas = buildWeatherAndEnvironmentParagraphs(mainScene, location, weather, mood, moodGroup, rating, includeInstruments);
  const primaryFramingPara = buildFramingParagraph(characterFramingId);
  const primaryStylePara = buildImageQualityParagraph(imageStyleId, rating);

  const basePrompt = [
    ...primaryCharParas,
    ...primaryActionParas,
    ...primaryClothingParas,
    primaryLightingPara,
    ...primaryWeatherParas
  ].filter(Boolean).join('\n');
  const prompt = [basePrompt, primaryFramingPara, primaryStylePara].filter(Boolean).join('\n');

  // =========================================================================
  // SCENE 1: SPONTANEOUS AND CANDID (Randomized character order)
  // =========================================================================
  const members1 = shuffleArray(activeMembers);
  const charParas1 = buildCharacterAppearanceParagraphs(members1, 'std1', includeInstruments, characterAgeId, isTomboy);
  const actionParas1 = buildCharacterActionParagraphs(members1, 'std1');
  const clothingParas1 = buildClothingParagraphs(members1, 'std1');
  const lightingPara1 = buildLightingParagraph(light, lightGroup);
  const weatherParas1 = buildWeatherAndEnvironmentParagraphs(mainScene, location, weather, mood, moodGroup, 'std1', includeInstruments);
  const framingPara1 = buildFramingParagraph(characterFramingId);
  const stylePara1 = buildImageQualityParagraph(imageStyleId, 'std1');

  const basePrompt1 = [
    ...charParas1,
    ...actionParas1,
    ...clothingParas1,
    lightingPara1,
    ...weatherParas1
  ].filter(Boolean).join('\n');
  const standardPrompt1 = [basePrompt1, framingPara1, stylePara1].filter(Boolean).join('\n');

  // =========================================================================
  // SCENE 2: PROFESSIONAL FASHION SHOOT (Distinct randomized character order)
  // =========================================================================
  let members2 = shuffleArray(activeMembers);
  if (activeMembers.length > 1 && JSON.stringify(members2.map(m => m.id)) === JSON.stringify(members1.map(m => m.id))) {
    members2 = [...members1.slice(1), members1[0]];
  }

  const charParas2 = buildCharacterAppearanceParagraphs(members2, 'std2', includeInstruments, characterAgeId, isTomboy);
  const actionParas2 = buildCharacterActionParagraphs(members2, 'std2');
  const clothingParas2 = buildClothingParagraphs(members2, 'std2');
  const lightingPara2 = buildLightingParagraph(light, lightGroup);
  const weatherParas2 = buildWeatherAndEnvironmentParagraphs(mainScene, location, weather, mood, moodGroup, 'std2', includeInstruments);
  const framingPara2 = buildFramingParagraph(characterFramingId);
  const stylePara2 = buildImageQualityParagraph(imageStyleId, 'std2');

  const basePrompt2 = [
    ...charParas2,
    ...actionParas2,
    ...clothingParas2,
    lightingPara2,
    ...weatherParas2
  ].filter(Boolean).join('\n');
  const standardPrompt2 = [basePrompt2, framingPara2, stylePara2].filter(Boolean).join('\n');

  // =========================================================================
  // SCENE 3: INTIMATE, CHARACTERS CLOSER TOGETHER (Distinct randomized character order)
  // =========================================================================
  let members3 = shuffleArray(activeMembers);
  if (activeMembers.length > 2) {
    let attempts = 0;
    while (attempts < 5 && (JSON.stringify(members3.map(m => m.id)) === JSON.stringify(members1.map(m => m.id)) || JSON.stringify(members3.map(m => m.id)) === JSON.stringify(members2.map(m => m.id)))) {
      members3 = shuffleArray(activeMembers);
      attempts++;
    }
  } else if (activeMembers.length === 2) {
    members3 = [...activeMembers].reverse();
  }

  const charParas3 = buildCharacterAppearanceParagraphs(members3, 'std3', includeInstruments, characterAgeId, isTomboy);
  const actionParas3 = buildCharacterActionParagraphs(members3, 'std3');
  const clothingParas3 = buildClothingParagraphs(members3, 'std3');
  const lightingPara3 = buildLightingParagraph(light, lightGroup);
  const weatherParas3 = buildWeatherAndEnvironmentParagraphs(mainScene, location, weather, mood, moodGroup, 'std3', includeInstruments);
  const framingPara3 = buildFramingParagraph(characterFramingId);
  const stylePara3 = buildImageQualityParagraph(imageStyleId, 'std3');

  const basePrompt3 = [
    ...charParas3,
    ...actionParas3,
    ...clothingParas3,
    lightingPara3,
    ...weatherParas3
  ].filter(Boolean).join('\n');
  const standardPrompt3 = [basePrompt3, framingPara3, stylePara3].filter(Boolean).join('\n');

  // =========================================================================
  // BUILD SINGLE NSFW PROMPT (Fine-art photography with natural form)
  // =========================================================================
  const membersNsfw = shuffleArray(activeMembers);
  const charParasNsfw = buildCharacterAppearanceParagraphs(membersNsfw, 'nsfw', includeInstruments, characterAgeId, isTomboy);
  const actionParasNsfw = buildCharacterActionParagraphs(membersNsfw, 'nsfw');
  const lightingParaNsfw = buildLightingParagraph(light, lightGroup);
  const weatherParasNsfw = buildWeatherAndEnvironmentParagraphs(mainScene, location, weather, mood, moodGroup, 'nsfw', includeInstruments);
  const framingParaNsfw = buildFramingParagraph(characterFramingId);
  const styleParaNsfw = buildImageQualityParagraph(imageStyleId, 'nsfw');

  const baseNsfwPrompt = [
    ...charParasNsfw,
    ...actionParasNsfw,
    lightingParaNsfw,
    ...weatherParasNsfw
  ].filter(Boolean).join('\n');
  const nsfwPrompt = [baseNsfwPrompt, framingParaNsfw, styleParaNsfw].filter(Boolean).join('\n');

  return {
    version: "1.0.0",
    title: finalTitle,
    timestamp: new Date().toISOString(),
    location: location || '',
    weather: weather || '',
    light: light || '',
    lightGroup: lightGroup || '',
    mood: mood || '',
    moodGroup: moodGroup || '',
    mainScene: mainScene || '',
    imageStyle: imageStyleId,
    characterFraming: characterFramingId,
    characterAge: characterAgeId,
    isTomboy,
    rating,
    prompt,
    basePrompt,
    activeSingers: activeMembers,
    basePrompt1,
    basePrompt2,
    basePrompt3,
    baseNsfwPrompt,
    standardPrompt1,
    standardPrompt2,
    standardPrompt3,
    standardPrompts: [standardPrompt1, standardPrompt2, standardPrompt3],
    standardPrompt: standardPrompt1,
    explicitPrompt: nsfwPrompt,
    nsfwPrompt
  };
}

/**
 * Trigger JSON download for generated scene
 */
export function downloadSingerActionSceneJson(sceneResult: SingerActionSceneResult): void {
  try {
    const dataStr = JSON.stringify(sceneResult, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const sanitizedTitle = sceneResult.title.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
    const filename = `${sanitizedTitle || 'band_action_scene'}.json`;

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  } catch (err) {
    console.error('Failed to download singer action scene JSON:', err);
  }
}
