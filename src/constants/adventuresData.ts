export * from './adventures/types';
import { AdventureCategory, AdventureLocationOption } from './adventures/types';
import { MODERN_ADVENTURES } from './adventures/modernAdventures';
import { NATURIST_ADVENTURES } from './adventures/naturistAdventures';
import { ANCIENT_ADVENTURES } from './adventures/ancientAdventures';
import { FANTASY_ADVENTURES } from './adventures/fantasyAdventures';
import { SCIFI_PREHISTORIC_ADVENTURES } from './adventures/sciFiPrehistoricAdventures';

export { MODERN_ADVENTURES } from './adventures/modernAdventures';
export { NATURIST_ADVENTURES } from './adventures/naturistAdventures';
export { ANCIENT_ADVENTURES } from './adventures/ancientAdventures';
export { FANTASY_ADVENTURES } from './adventures/fantasyAdventures';
export { SCIFI_PREHISTORIC_ADVENTURES } from './adventures/sciFiPrehistoricAdventures';

export const ADVENTURE_CATEGORIES: AdventureCategory[] = [
  ...MODERN_ADVENTURES,
  ...NATURIST_ADVENTURES,
  ...ANCIENT_ADVENTURES,
  ...FANTASY_ADVENTURES,
  ...SCIFI_PREHISTORIC_ADVENTURES
];

/**
 * Get category by ID
 */
export function getAdventureCategory(categoryId: string): AdventureCategory | undefined {
  return ADVENTURE_CATEGORIES.find(cat => cat.id === categoryId);
}

/**
 * Get location options for a specific adventure category ID.
 * Returns default list with 'none' option first, followed by adventure locations.
 */
export function getLocationsForAdventure(categoryId: string): AdventureLocationOption[] {
  const category = getAdventureCategory(categoryId) || ADVENTURE_CATEGORIES[0];
  const defaultOption: AdventureLocationOption = {
    id: 'none',
    label: 'None',
    type: 'outdoors',
    description: 'Unspecified location setting'
  };
  return [defaultOption, ...(category ? category.locations : [])];
}

/**
 * Find a location option across all adventure categories
 */
export function findLocationInAllAdventures(locationId: string): AdventureLocationOption | undefined {
  if (!locationId || locationId === 'none') return undefined;
  for (const cat of ADVENTURE_CATEGORIES) {
    const loc = cat.locations.find(l => l.id === locationId);
    if (loc) return loc;
  }
  return undefined;
}
