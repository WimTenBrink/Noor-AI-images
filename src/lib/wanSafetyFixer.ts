/**
 * WAN 2.1 Video Safety and Format Fixer
 * Pure logic and functions to sanitize, neutralize safety triggers, and reformat
 * prompts to resolve "Invalid content" errors from WAN 2.1 Video generators.
 */

import { cleanAndStructurePrompt, stripNonVisibleData } from './remixHelper';

/**
 * List of sensitive or trigger terms that commonly trigger WAN 2.1 "Invalid content"
 * safety filters, paired with safe, high-quality photorealistic replacements.
 */
const WAN_SAFETY_REPLACEMENTS: Array<[RegExp, string]> = [
  // Nudity and anatomical triggers
  [/\b(?:naked|nude|nudity|unclad|unclothed|topless|bottomless)\b/gi, 'tasteful fine-art attire'],
  [/\b(?:bare\s+breasts?|unclothed\s+breasts?|exposed\s+breasts?|cleavage|breasts?)\b/gi, 'upper torso silhouette'],
  [/\b(?:nipples?|areola)\b/gi, 'figure detail'],
  [/\b(?:genitals?|vulva|vagina|penis|crotch|pubic)\b/gi, 'lower torso'],
  [/\b(?:buttocks?|ass|butt)\b/gi, 'posture'],

  // Suggestive / erotic adjectives
  [/\b(?:erotic|sexual|sexually|sensual|seductive|provocative|voluptuous|curvaceous|lustful|kinky|fetish)\b/gi, 'graceful aesthetic'],
  [/\b(?:revealing|scantily\s+clad|tight-fitting|skin-tight|see-through|sheer\s+transparent)\b/gi, 'breathable summer linen'],
  [/\b(?:lingerie|underwear|undergarments|panties|bra|thong|g-string)\b/gi, 'classic summer swimwear'],

  // Underage / sensitive age phrasing
  [/\b(?:loli|shota|underage|schoolgirl|lolita)\b/gi, 'young adult'],

  // Violence / gore / weapons triggers
  [/\b(?:blood|bloody|gore|gory|corpse|slaughter|mutilation)\b/gi, 'dramatic atmosphere'],
  [/\b(?:gun|pistol|rifle|knife|dagger|weapon|sword)\b/gi, 'acoustic guitar prop'],

  // Diffusion buzzwords that can cause filter issues
  [/\b(?:nsfw|explicit|uncensored|lewd|ecchi)\b/gi, 'fine-art photorealism']
];

/**
 * Fixes and cleans a scene prompt specifically to pass WAN 2.1 Video validation
 * and resolve "Invalid content" safety rejections.
 */
export function fixPromptForWanSafety(rawPrompt: string): string {
  if (!rawPrompt || !rawPrompt.trim()) return '';

  let sanitized = rawPrompt;

  // 1. Apply safety substitutions
  for (const [pattern, replacement] of WAN_SAFETY_REPLACEMENTS) {
    sanitized = sanitized.replace(pattern, replacement);
  }

  // 2. Strip non-visible audio metadata (voice registers like soprano, vocal roles)
  sanitized = stripNonVisibleData(sanitized);

  // 3. Normalize multiple whitespace and clean punctuation
  sanitized = sanitized
    .replace(/[ \t]+/g, ' ')
    .replace(/\s*,\s*,+/g, ', ')
    .replace(/\s*\.\s*\.+/g, '.');

  // 4. Structure into canonical 7-section ordering with clean line breaks
  const structured = cleanAndStructurePrompt(sanitized);

  // 5. Ensure camera framing and artistic medium are explicitly specified for video stability
  let finalPrompt = structured;
  if (!finalPrompt.toLowerCase().includes('character framing:') && !finalPrompt.toLowerCase().includes('camera framing:')) {
    finalPrompt = `Character framing: Cinematic eye-level medium shot with stable 35mm composition and smooth visual pacing.\n${finalPrompt}`;
  }

  return finalPrompt.trim();
}
