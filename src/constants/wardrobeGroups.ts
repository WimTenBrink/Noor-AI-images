/**
 * Wardrobe Groups Catalogue and Types
 * 
 * Organizes all character wardrobe collections into curated groups with full pre-baked inclusive prompts.
 * Eliminates repetitive AI regeneration by providing instant, high-quality prompts for every wardrobe item and singer.
 */

import { WardrobeGroup, WardrobeItem, WardrobePiece, WardrobeItemSummary } from './wardrobeGroups/types';
import { GROUPS_DAILY_AND_CASUAL } from './wardrobeGroups/groupsDailyAndCasual';
import { GROUPS_PERFORMANCE_AND_FORMAL } from './wardrobeGroups/groupsPerformanceAndFormal';
import { GROUPS_ATHLETICS_AND_FITNESS } from './wardrobeGroups/groupsAthleticsAndFitness';
import { GROUPS_SWIMWEAR_AND_BEACH } from './wardrobeGroups/groupsSwimwearAndBeach';
import { GROUPS_HISTORICAL_AND_PERIOD } from './wardrobeGroups/groupsHistoricalAndPeriod';
import { GROUPS_FANTASY_AND_SCIFI } from './wardrobeGroups/groupsFantasyAndSciFi';
import { GROUPS_ROLEPLAY_AND_DND } from './wardrobeGroups/groupsRoleplayAndDnd';
import { GROUPS_INTIMATE_AND_SPA } from './wardrobeGroups/groupsIntimateAndSpa';
import { GROUPS_SENSUAL_AND_BONDAGE } from './wardrobeGroups/groupsSensualAndBondage';
import { GROUPS_RAGS_AND_WEATHERED } from './wardrobeGroups/groupsRagsAndWeathered';
import { GROUPS_ROPES_AND_JEWELRY } from './wardrobeGroups/groupsRopesAndJewelry';
import { GROUPS_ARTISTIC_COVERING } from './wardrobeGroups/groupsArtisticAndCovering';
import { GROUPS_NAKED_AND_BODY_PAINT } from './wardrobeGroups/groupsNakedAndBodyPaint';

export type { WardrobeGroup, WardrobeItem, WardrobePiece, WardrobeItemSummary } from './wardrobeGroups/types';

export const WARDROBE_GROUPS: WardrobeGroup[] = [
  ...GROUPS_DAILY_AND_CASUAL,
  ...GROUPS_PERFORMANCE_AND_FORMAL,
  ...GROUPS_ATHLETICS_AND_FITNESS,
  ...GROUPS_SWIMWEAR_AND_BEACH,
  ...GROUPS_HISTORICAL_AND_PERIOD,
  ...GROUPS_FANTASY_AND_SCIFI,
  ...GROUPS_ROLEPLAY_AND_DND,
  ...GROUPS_INTIMATE_AND_SPA,
  ...GROUPS_SENSUAL_AND_BONDAGE,
  ...GROUPS_RAGS_AND_WEATHERED,
  ...GROUPS_ROPES_AND_JEWELRY,
  ...GROUPS_ARTISTIC_COVERING,
  ...GROUPS_NAKED_AND_BODY_PAINT
];

/**
 * Get all available wardrobe groups
 */
export function getAllWardrobeGroups(): WardrobeGroup[] {
  return WARDROBE_GROUPS;
}

/**
 * Get wardrobe group by ID
 */
export function getWardrobeGroupById(groupId: string): WardrobeGroup | undefined {
  if (!groupId || groupId === 'all') {
    return {
      id: 'all',
      name: 'All Wardrobes (Full Collection)',
      icon: '🌟',
      description: 'Browse and filter across all wardrobe categories and collections',
      items: WARDROBE_GROUPS.flatMap(g => g.items)
    };
  }
  return WARDROBE_GROUPS.find(g => g.id === groupId);
}

/**
 * Get wardrobe items for a specific group ID
 */
export function getWardrobeItemsForGroup(groupId: string): WardrobeItem[] {
  if (!groupId || groupId === 'all') {
    return WARDROBE_GROUPS.flatMap(g => g.items);
  }
  const group = WARDROBE_GROUPS.find(g => g.id === groupId);
  return group ? group.items : [];
}

/**
 * Find wardrobe item by item ID
 */
export function getWardrobeItemById(wardrobeId: string): WardrobeItem | undefined {
  for (const group of WARDROBE_GROUPS) {
    const item = group.items.find(w => w.id === wardrobeId);
    if (item) return item;
  }
  return undefined;
}

/**
 * Get prompt description for a wardrobe item tailored to a specific singer without AI calls
 */
export function getWardrobePromptForSinger(singerId: string, wardrobeId: string): string {
  if (!wardrobeId || wardrobeId === 'none') {
    return '';
  }
  const item = getWardrobeItemById(wardrobeId);
  if (!item) return '';

  if (item.singerPrompts && item.singerPrompts[singerId]) {
    return item.singerPrompts[singerId];
  }

  return item.prompt;
}
