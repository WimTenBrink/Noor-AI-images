import wardrobesData from '../../public/wardrobes.json';
import { 
  WARDROBE_GROUPS, 
  WardrobeGroup, 
  getWardrobeItemById, 
  getWardrobeItemsForGroup, 
  getWardrobePromptForSinger 
} from '../constants/wardrobeGroups';

export interface WardrobePiece {
  name: string;
  description: string;
  color: string;
}

export interface WardrobeEvent {
  group?: string;
  event: string;
  title: string;
  footwear: string;
  clothes: WardrobePiece[];
}

export interface SingerWardrobes {
  id: string;
  name: string;
  role: string;
  palette: string;
  events: WardrobeEvent[];
}

/**
 * Get clothing details for a given singer and event
 */
export function getSingerWardrobeEvent(singerId: string, eventId: string): WardrobeEvent | null {
  if (!eventId || eventId === 'none') return null;
  
  // First check in static JSON dataset
  const singer = wardrobesData.singers.find(s => s.id === singerId);
  if (singer) {
    const ev = singer.events.find(e => e.event === eventId);
    if (ev) return ev as WardrobeEvent;
  }

  // Fallback to WARDROBE_GROUPS items
  const item = getWardrobeItemById(eventId);
  if (item) {
    return {
      group: item.groupId,
      event: item.id,
      title: item.name,
      footwear: item.footwear,
      clothes: item.clothes
    };
  }

  return null;
}

/**
 * Get all available wardrobe groups
 */
export function getWardrobeGroupsList(): WardrobeGroup[] {
  return WARDROBE_GROUPS;
}

/**
 * Find which group an event belongs to for a given singer
 */
export function findWardrobeGroupForEvent(singerId: string, eventId: string): string {
  if (!eventId || eventId === 'none') return 'daily_casual';
  const ev = getSingerWardrobeEvent(singerId, eventId);
  if (ev && ev.group) {
    return ev.group;
  }
  const item = getWardrobeItemById(eventId);
  if (item && item.groupId) {
    return item.groupId;
  }
  return 'daily_casual';
}

/**
 * Get all wardrobe items for a given singer within a specific group, sorted alphabetically
 */
export function getWardrobesForGroup(singerId: string, groupId: string): { id: string; title: string; group?: string }[] {
  const result: Map<string, { id: string; title: string; group?: string }> = new Map();

  // 1. Items from WARDROBE_GROUPS
  const groupItems = getWardrobeItemsForGroup(groupId);
  groupItems.forEach(item => {
    result.set(item.id, {
      id: item.id,
      title: item.name,
      group: item.groupId
    });
  });

  // 2. Items from wardrobesData (JSON)
  const singer = wardrobesData.singers.find(s => s.id === singerId);
  if (singer && singer.events) {
    const allEvents = singer.events as WardrobeEvent[];
    const filteredEvents = (!groupId || groupId === 'all')
      ? allEvents
      : allEvents.filter(e => e.group === groupId);

    filteredEvents.forEach(e => {
      if (!result.has(e.event)) {
        result.set(e.event, { id: e.event, title: e.title, group: e.group });
      }
    });
  }

  return Array.from(result.values())
    .sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }));
}

/**
 * Build a detailed clothing description string for image prompts without parentheses or weird punctuation
 * Returns pre-baked inclusive prompt directly without needing AI regeneration
 */
export function buildWardrobePromptText(singerId: string, eventId: string): string {
  if (!eventId || eventId === 'none') {
    return '';
  }

  // 1. Direct prompt lookup from WARDROBE_GROUPS (customized per singer)
  const prebakedPrompt = getWardrobePromptForSinger(singerId, eventId);
  if (prebakedPrompt) {
    return prebakedPrompt;
  }

  // 2. Fallback to event clothes breakdown if from legacy JSON
  const ev = getSingerWardrobeEvent(singerId, eventId);
  if (!ev) return '';

  const clothesList = ev.clothes.map(c => `${c.color} ${c.name}, ${c.description}`).join(', ');
  const footwearText = ev.footwear ? `, adornments: ${ev.footwear}` : '';

  if (ev.group === 'ropes_jewelry' || ev.event.startsWith('ropes_')) {
    return `adorned exclusively in ropes, jewelry, and natural leaves with no cloth, featuring ${clothesList}${footwearText}`;
  }

  if (ev.group === 'artistic_covering' || ev.event.startsWith('covering_')) {
    return `natural unclad skin tastefully covered for modesty, featuring ${clothesList}${footwearText}`;
  }

  if (ev.group === 'naked' || ev.event.startsWith('naked_')) {
    if (ev.event.startsWith('naked_pure_') || ev.event.startsWith('naked_unpainted_') || !ev.event.includes('paint') && !ev.event.includes('pigment') && !ev.event.includes('henna')) {
      return `natural unpainted appearance, adorned in jewelry and natural accessories featuring ${clothesList}${footwearText}`;
    }
    return `adorned in artistic full-body paint designs and jewelry featuring ${clothesList}${footwearText}`;
  }

  const standardFootwear = ev.footwear ? `, ${ev.footwear}` : '';
  return `wearing ${clothesList}${standardFootwear}`;
}

/**
 * Map an adventure category ID to a default matching wardrobe event ID
 */
export function getSuggestedWardrobeForAdventure(adventureId: string): string {
  switch (adventureId) {
    case 'roman':
      return 'toga_roman_classic';
    case 'greek':
      return 'historical_greek_chiton';
    case 'celtic':
      return 'forest_expedition';
    case 'egyptian':
      return 'gala';
    case 'norse':
      return 'historical_viking_tunic';
    case 'japanese':
      return 'kimono_silk_yukata';
    case 'mesoamerican':
      return 'stoneage_primitive';
    case 'arabian':
      return 'gala';
    case 'dnd_settings':
      return 'dnd_paladin';
    case 'conan_hyboria':
      return 'stoneage_primitive';
    case 'tarzan_jungle':
      return 'beachwear';
    case 'pirates_caribbean':
      return 'pirate_swashbuckler_tavern';
    case 'gothic_horror':
      return 'formal';
    case 'stone_age':
    case 'stoneage':
      return 'stoneage_primitive';
    case 'space':
      return 'space_suit';
    case 'dinosaurs':
      return 'dinosaur_explorer';
    case 'cyberpunk':
      return 'cyberpunk_neon';
    case 'wild_west':
    case 'wildwest':
      return 'wildwest_frontier';
    case 'steampunk':
      return 'steampunk_industrial';
    case 'fantasy':
      return 'fantasy_enchanted';
    case 'medieval':
      return 'medieval_castle';
    case 'forest':
      return 'forest_expedition';
    case 'amsterdam':
      return 'amsterdam_heritage';
    case 'beach':
      return 'beachwear';
    case 'farm':
      return 'farmwork';
    default:
      return 'none';
  }
}

/**
 * List all available event IDs for a singer, dynamically sorted alphabetically with 'None' at the top
 */
export function getAvailableWardrobes(singerId: string): { id: string; title: string }[] {
  const singer = wardrobesData.singers.find(s => s.id === singerId);
  if (!singer) {
    return [{ id: 'none', title: 'None' }];
  }

  // Dynamic alphabetical sorting of all events by their title
  const sortedEvents = (singer.events as WardrobeEvent[])
    .slice()
    .map(e => ({ id: e.event, title: e.title }))
    .sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }));

  return [
    { id: 'none', title: 'None (Default Base Outfit)' },
    ...sortedEvents
  ];
}

/**
 * Get all wardrobe events for a singer, dynamically sorted alphabetically by title
 */
export function getSortedSingerEvents(singerId: string, groupId?: string): WardrobeEvent[] {
  const singer = wardrobesData.singers.find(s => s.id === singerId);
  if (!singer || !singer.events) return [];
  
  let events = singer.events as WardrobeEvent[];
  if (groupId && groupId !== 'all') {
    events = events.filter(e => e.group === groupId);
  }

  return events
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }));
}


