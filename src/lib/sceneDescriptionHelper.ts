import { getAdventureCategory, findLocationInAllAdventures, AdventureLocationOption } from '../constants/adventuresData';
import { getPredefinedScenesForLocation, PredefinedScene } from '../constants/predefinedScenes';

export interface SimpleLocationItem {
  id: string;
  label: string;
  type?: string;
  description: string;
}

/**
 * Combines the descriptions from Adventure Theme, Location Setting, and Predefined Scene
 * into a single unified scene background description.
 */
export function buildCombinedSceneDescription(
  adventureId: string,
  locationId: string,
  sceneId: string,
  availableLocations?: SimpleLocationItem[]
): string {
  const parts: string[] = [];

  // 1. Adventure Theme Description
  const adv = getAdventureCategory(adventureId);
  if (adv?.description && adv.description.trim().length > 0) {
    const cleanAdv = adv.description.trim().replace(/\.$/, '');
    parts.push(`Adventure Context: ${cleanAdv}.`);
  }

  // 2. Location Setting Description
  if (locationId && locationId !== 'none') {
    const loc = findLocationInAllAdventures(locationId) || availableLocations?.find(l => l.id === locationId);
    if (loc?.description && 
        !loc.description.startsWith('Custom setting') && 
        !loc.description.startsWith('Unspecified location') &&
        loc.description.trim().length > 0) {
      const cleanLoc = loc.description.trim().replace(/\.$/, '');
      const typeStr = loc.type ? ` (${loc.type.toUpperCase()})` : '';
      parts.push(`Setting${typeStr}: ${cleanLoc}.`);
    }
  }

  // 3. Predefined Scene Description
  if (sceneId && sceneId !== 'custom') {
    const scenes = getPredefinedScenesForLocation(locationId);
    const scene = scenes.find(s => s.id === sceneId);
    if (scene?.text && scene.text.trim().length > 0) {
      const cleanScene = scene.text.trim().replace(/\.$/, '');
      parts.push(`Scene Elements: ${cleanScene}.`);
    }
  }

  if (parts.length === 0) {
    return 'Relaxing together at the Abcoude homestead farm near sunset, enjoying the peaceful countryside atmosphere after a song rehearsal.';
  }

  return parts.join(' ');
}

/**
 * Strips all structural tags, labels, and bracketed prefixes from scene descriptions
 * (e.g. 'Adventure Context:', 'Setting (OUTDOORS):', 'Scene Elements:', 'Location:').
 */
export function removeSceneLabels(text: string): string {
  if (!text || typeof text !== 'string') return '';
  return text
    .replace(/(?:Adventure Context|Setting(?:\s*\([A-Z\s/-]+\))?|Scene Elements|Background|Scene|Description|Location|Theme|Homestead Dataset Details):\s*/gi, '')
    .replace(/\[(?:Setting|Location|Adventure|Context|Scene)\]/gi, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/**
 * Formats scene text into fluid, natural narrative prose without any labels or prefixes.
 */
export function formatFluidSceneText(
  rawText: string,
  adventureId?: string,
  locationId?: string,
  sceneId?: string
): string {
  const cleaned = removeSceneLabels(rawText);
  if (!cleaned || cleaned.trim().length === 0) {
    const combined = buildCombinedSceneDescription(adventureId || 'farm', locationId || 'none', sceneId || 'custom');
    return removeSceneLabels(combined);
  }

  // Ensure complete sentences with proper punctuation and natural spacing
  const sentences = cleaned
    .split(/(?<=[.!?])\s+/)
    .map(s => s.trim())
    .filter(Boolean)
    .map(s => {
      let sentence = s;
      if (!/[.!?]$/.test(sentence)) {
        sentence += '.';
      }
      return sentence.charAt(0).toUpperCase() + sentence.slice(1);
    });

  return sentences.join(' ');
}

