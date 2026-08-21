/**
 * Action Groups and Actions Catalogue
 * 
 * Provides 42 comprehensive action categories and concrete physical actions for character scenes.
 * Each action includes id, label, description/actionText, fixed prompt, and category.
 * Designed with inclusive-only descriptions suitable for prompt generation without AI calls.
 */

import { ActionGroup, ActionItem } from './actionGroups/types';
import { GROUPS_BASIC_AND_POSING } from './actionGroups/groupsBasicAndPosing';
import { GROUPS_MUSIC_AND_DANCE } from './actionGroups/groupsMusicAndDance';
import { GROUPS_SPORTS_AND_OUTDOORS } from './actionGroups/groupsSportsAndOutdoors';
import { GROUPS_ARTS_AND_MEDIA } from './actionGroups/groupsArtsAndMedia';
import { GROUPS_LIFE_AND_FANTASY } from './actionGroups/groupsLifeAndFantasy';
import { GROUPS_HOME_AND_WORK } from './actionGroups/groupsHomeAndWork';
import { GROUPS_CRAFT_AND_RELAXATION } from './actionGroups/groupsCraftAndRelaxation';

export type { ActionItem, ActionGroup } from './actionGroups/types';

export const ACTION_GROUPS: ActionGroup[] = [
  ...GROUPS_BASIC_AND_POSING,
  ...GROUPS_MUSIC_AND_DANCE,
  ...GROUPS_SPORTS_AND_OUTDOORS,
  ...GROUPS_ARTS_AND_MEDIA,
  ...GROUPS_LIFE_AND_FANTASY,
  ...GROUPS_HOME_AND_WORK,
  ...GROUPS_CRAFT_AND_RELAXATION,
];

/**
 * Get all available action groups
 */
export function getAllActionGroups(): ActionGroup[] {
  return ACTION_GROUPS;
}

/**
 * Get action group by ID
 */
export function getActionGroupById(groupId: string): ActionGroup | undefined {
  return ACTION_GROUPS.find(g => g.id === groupId);
}

/**
 * Get actions for a specific group ID
 */
export function getActionsForGroup(groupId: string): ActionItem[] {
  const group = getActionGroupById(groupId);
  return group ? group.actions : [];
}

/**
 * Find action item by action ID
 */
export function getActionItemById(actionId: string): ActionItem | undefined {
  for (const group of ACTION_GROUPS) {
    const action = group.actions.find(a => a.id === actionId);
    if (action) return action;
  }
  return undefined;
}
