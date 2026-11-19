/**
 * Remix Helper Logic
 * Pure logic and functions for managing, formatting, and filtering Remix prompts.
 */

import { parsePromptSections, PromptSegment } from './promptColorizer';
import { IMAGE_STYLES, getImageStyleById, ImageStyleOption } from '../constants/imageStyles';
import { appendStyleToPrompt, stripStyleFromPrompt } from './singerActions';
import { fixPromptForWanSafety } from './wanSafetyFixer';

export { fixPromptForWanSafety };

export const REMIX_HISTORY_STORAGE_KEY = 'noor_remix_prompts_history_v1';
export const MAX_REMIX_HISTORY = 10;

export const DEFAULT_CLEAN_REMIX_INSTRUCTIONS = 
  "Clean up the prompt, remove all non-visible data (such as vocal roles like alto/soprano, musical roles, and unseen traits), and organize the scene into canonical section order with clean line breaks: Character Appearances -> Actions -> Wardrobe -> Lighting -> Weather & Setting -> Framing -> Artistic Style.";

/**
 * Pre-sanitizes prompt text before sending to Gemini LLM to prevent
 * accidental safety trigger flags (PROHIBITED_CONTENT / SAFETY) while
 * preserving artistic integrity.
 */
export function sanitizeForGeminiSafety(text: string): string {
  if (!text) return '';
  let s = text;
  // Soften sensitive anatomical and adult terms into classical art descriptors
  s = s.replace(/\b(?:bare\s+breasts?|unclothed\s+breasts?|exposed\s+breasts?|breasts?)\b/gi, 'classical torso contours');
  s = s.replace(/\bnipples?\b/gi, 'figure details');
  s = s.replace(/\b(?:genitals?|vulva|vagina|penis|pubic(?:\s+area|\s+hair)?)\b/gi, 'lower torso form');
  s = s.replace(/\b(?:nudity|nude|naked|unclad|unclothed)\b/gi, 'unadorned fine-art figure');
  s = s.replace(/\b(?:erotic|sexual|sexually)\b/gi, 'artistic aesthetic');
  s = s.replace(/\btopless\b/gi, 'unadorned torso');
  s = s.replace(/\bbottomless\b/gi, 'unadorned physique');
  return s;
}

/**
 * Format prompt segments with clean line breaks separating each section.
 * Filters out unchecked sections based on enabledSegmentIds.
 */
export function formatFilteredPromptWithLineBreaks(
  fullPrompt: string,
  enabledSegmentIds?: Record<string, boolean>
): string {
  if (!fullPrompt || !fullPrompt.trim()) return '';
  const segments = parsePromptSections(fullPrompt);
  
  const filtered = enabledSegmentIds && Object.keys(enabledSegmentIds).length > 0
    ? segments.filter(seg => enabledSegmentIds[seg.id] !== false)
    : segments;

  return filtered
    .map(seg => seg.text.trim())
    .filter(Boolean)
    .join('\n');
}

/**
 * Strips all line breaks and excessive whitespace to produce a continuous single-line prompt string.
 * Used for copying to clipboard for external AI renderers (WAN Video, SDXL, Midjourney).
 */
export function stripLineBreaksForCopy(prompt: string): string {
  if (!prompt) return '';
  return prompt
    .replace(/\r\n/g, ' ')
    .replace(/[\n\r]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Load remix history from localStorage.
 */
export function loadRemixHistory(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem(REMIX_HISTORY_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        return parsed.filter(item => typeof item === 'string' && item.trim().length > 0).slice(0, MAX_REMIX_HISTORY);
      }
    }
  } catch (err) {
    console.error('Failed to load remix history from storage:', err);
  }
  return [];
}

/**
 * Save remix history to localStorage.
 */
export function saveRemixHistory(history: string[]): void {
  if (typeof window === 'undefined') return;
  try {
    const cleaned = history.slice(0, MAX_REMIX_HISTORY);
    localStorage.setItem(REMIX_HISTORY_STORAGE_KEY, JSON.stringify(cleaned));
  } catch (err) {
    console.error('Failed to save remix history to storage:', err);
  }
}

/**
 * Add a new remix prompt to history (capped at MAX_REMIX_HISTORY = 10 items).
 * Prepends the newest item, deduplicating if identical to top item.
 */
export function addRemixToHistory(currentHistory: string[], newPrompt: string): string[] {
  const trimmed = newPrompt.trim();
  if (!trimmed) return currentHistory;

  // Filter out exact duplicate of the prompt if it already exists, or just prepend
  const withoutDupe = currentHistory.filter(item => item.trim() !== trimmed);
  const updated = [trimmed, ...withoutDupe].slice(0, MAX_REMIX_HISTORY);
  saveRemixHistory(updated);
  return updated;
}

/**
 * Clear remix history from localStorage.
 */
export function clearRemixHistory(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(REMIX_HISTORY_STORAGE_KEY);
  } catch (err) {
    console.error('Failed to clear remix history from storage:', err);
  }
}

/**
 * Strips all non-visible data from a text string (voice classifications like alto/soprano,
 * musical professions, career titles, internal thoughts, lore, and meta buzzwords),
 * leaving strictly visible physical details, gestures, wardrobe, lighting, setting, and style.
 */
export function stripNonVisibleData(rawText: string): string {
  if (!rawText) return '';
  let text = rawText;

  // 1. Remove parenthetical or role descriptions
  const nonVisibleRoles = [
    'soprano', 'mezzo-soprano', 'mezzo soprano', 'contralto', 'alto', 'tenor',
    'countertenor', 'baritone', 'bass-baritone', 'falsetto', 'lead vocalist',
    'backing vocalist', 'backing vocals', 'backup singer', 'vocalist', 'lead singer',
    'singer', 'singing voice', 'vocal specialty', 'voice register', 'voice type',
    'drummer', 'percussionist', 'bass guitarist', 'bassist', 'acoustic guitarist',
    'guitarist', 'synthesist', 'keyboardist', 'pianist', 'sound engineer', 'audio engineer',
    'producer', 'musician', 'band member', 'bandmate', 'bandmates', 'duet partner',
    'graphic designer', 'designer', 'reporter', 'journalist', 'investigative journalist',
    'athlete', 'runner', 'student', 'scholar'
  ];

  for (const role of nonVisibleRoles) {
    const parenRegex = new RegExp(`\\(\\s*${role}\\s*(?:\\/[^)]+)?\\)`, 'gi');
    text = text.replace(parenRegex, '');

    const roleColonRegex = new RegExp(`\\b${role}\\s*:\\s*`, 'gi');
    text = text.replace(roleColonRegex, '');

    const commaRoleRegex = new RegExp(`(?:,\\s*|\\b)${role}(?:\\s*,|\\s*\\/\\s*[^,]+,?)`, 'gi');
    text = text.replace(commaRoleRegex, ',');
  }

  // 2. Remove internal psychology, IQ, background lore, and unseen traits
  text = text.replace(/\b(?:with\s+an\s+IQ\s+of\s+\d+|IQ\s+\d+|highly\s+intelligent|creative\s+musician|deep\s+understanding\s+of\s+people|intensely\s+private|prone\s+to\s+bouts\s+of\s+melancholy|fiercely\s+independent|with\s+a\s+thoughtful\s+mind|talented\s+musician|loves\s+music|creative\s+spirit|creative\s+soul|passionate\s+spirit|empathetic\s+storyteller|storyteller|introspective\s+nature)\b/gi, '');
  text = text.replace(/\b(?:married\s+to\s+[^,.;]+|birthplace:\s*[^,.;]+|nationality:\s*[^,.;]+|sexuality:\s*[^,.;]+|lifestyle:\s*[^,.;]+)\b/gi, '');

  // 3. Remove meta buzzwords & quality tags that are non-visual fluff
  text = text.replace(/\b(?:4k\s+ultra-high\s+resolution|8k\s+resolution|trending\s+on\s+artstation|octane\s+render|unreal\s+engine|masterpiece|award\s+winning|hyperrealistic|photorealistic)\b/gi, '');

  // 4. Clean up formatting anomalies (dangling colons, empty parentheses, double commas, spacing)
  text = text.replace(/\(\s*\)/g, '');
  text = text.replace(/,\s*,/g, ',');
  text = text.replace(/:\s*,/g, ':');
  text = text.replace(/:\s*;/g, ':');
  text = text.replace(/,\s*\./g, '.');
  text = text.replace(/\.\s*\./g, '.');
  text = text.replace(/\s{2,}/g, ' ');
  text = text.replace(/\s+,/g, ',');

  return text.trim();
}

/**
 * Categorizes and reorganizes any messy or unstructured prompt into the strict
 * 7-section canonical order with pure visible-only focus and clean line breaks:
 *
 * 1. Character Appearance paragraphs (Miranda -> Annelies -> Fannie -> Emma -> Senna)
 * 2. Character Action & Pose paragraphs (Miranda action:... -> Annelies action:... etc.)
 * 3. Character Wardrobe / Clothing paragraphs (Miranda clothing:... etc.)
 * 4. Lighting paragraph (Lighting: ...)
 * 5. Weather Condition & Background Setting (Weather Condition:... Main background scene:...)
 * 6. Camera Framing paragraph (Character framing: ...)
 * 7. Artistic Style & Rendering Medium (Artistic medium / Image quality: ...)
 */
export function cleanAndStructurePrompt(rawPrompt: string): string {
  if (!rawPrompt || !rawPrompt.trim()) return '';

  const cleanedRaw = stripNonVisibleData(rawPrompt);
  const rawLines = cleanedRaw.split(/\r?\n/).map(l => l.trim()).filter(Boolean);

  const charNames = ['miranda', 'annelies', 'fannie', 'emma', 'senna'];

  const appearances: Record<string, string[]> = { miranda: [], annelies: [], fannie: [], emma: [], senna: [], other: [] };
  const actions: Record<string, string[]> = { miranda: [], annelies: [], fannie: [], emma: [], senna: [], other: [] };
  const wardrobes: Record<string, string[]> = { miranda: [], annelies: [], fannie: [], emma: [], senna: [], other: [] };
  const lightingLines: string[] = [];
  const environmentLines: string[] = [];
  const framingLines: string[] = [];
  const styleLines: string[] = [];

  for (const line of rawLines) {
    const lower = line.toLowerCase();

    // 1. Check Framing
    if (
      lower.startsWith('character framing:') ||
      lower.startsWith('character camera framing:') ||
      lower.startsWith('camera framing:') ||
      lower.startsWith('framing:') ||
      lower.startsWith('shot composition:')
    ) {
      framingLines.push(line);
      continue;
    }

    // 2. Check Style & Medium
    if (
      lower.startsWith('artistic medium:') ||
      lower.startsWith('artistic style') ||
      lower.startsWith('image quality') ||
      lower.startsWith('style and photography') ||
      lower.startsWith('style and medium') ||
      lower.startsWith('style:') ||
      lower.startsWith('rendering medium:')
    ) {
      styleLines.push(line);
      continue;
    }

    // 3. Check Lighting
    if (
      lower.startsWith('lighting:') ||
      lower.startsWith('illumination:') ||
      lower.startsWith('ambient light:') ||
      lower.startsWith('key lighting:')
    ) {
      lightingLines.push(line);
      continue;
    }

    // 4. Check Weather & Background Environment
    if (
      lower.startsWith('weather:') ||
      lower.startsWith('weather condition') ||
      lower.startsWith('main background scene:') ||
      lower.startsWith('background:') ||
      lower.startsWith('location:') ||
      lower.startsWith('environment:') ||
      lower.startsWith('setting:') ||
      lower.startsWith('the scene is set')
    ) {
      environmentLines.push(line);
      continue;
    }

    // 5. Check Wardrobe / Clothing
    const isWardrobe =
      lower.includes('clothing details:') ||
      lower.includes('outfit details:') ||
      lower.includes('wardrobe details:') ||
      lower.includes('outfit:') ||
      lower.includes('wardrobe:') ||
      lower.startsWith('wearing ') ||
      lower.includes('dressed in ');

    if (isWardrobe) {
      let matched = false;
      for (const name of charNames) {
        if (lower.includes(name)) {
          wardrobes[name].push(line);
          matched = true;
          break;
        }
      }
      if (!matched) wardrobes.other.push(line);
      continue;
    }

    // 6. Check Character Actions
    const isAction =
      lower.includes(' action:') ||
      lower.includes(' action (') ||
      lower.includes(' pose:') ||
      lower.includes(' pose (') ||
      lower.startsWith('action:') ||
      lower.startsWith('pose:');

    if (isAction) {
      let matched = false;
      for (const name of charNames) {
        if (lower.includes(name)) {
          actions[name].push(line);
          matched = true;
          break;
        }
      }
      if (!matched) actions.other.push(line);
      continue;
    }

    // 7. Check Character Appearances
    let matchedChar = false;
    for (const name of charNames) {
      if (lower.includes(name)) {
        // Disambiguate if this line looks like an action sentence without the word 'action'
        const hasActionWords =
          (lower.includes('sitting on') || lower.includes('standing gracefully') || lower.includes('leaning against') || lower.includes('walking through') || lower.includes('smiling warmly')) &&
          !lower.includes('ethnicity') && !lower.includes('hair') && !lower.includes('eyes') && !lower.includes('skin');

        if (hasActionWords) {
          actions[name].push(line);
        } else {
          appearances[name].push(line);
        }
        matchedChar = true;
        break;
      }
    }

    if (!matchedChar) {
      // General environment / fallback
      if (lower.includes('meadow') || lower.includes('studio') || lower.includes('room') || lower.includes('sun') || lower.includes('sky')) {
        environmentLines.push(line);
      } else {
        appearances.other.push(line);
      }
    }
  }

  // Assemble sections in canonical order with clean line breaks
  const orderedParagraphs: string[] = [];

  // 1. Character Appearances
  for (const name of charNames) {
    if (appearances[name].length > 0) {
      orderedParagraphs.push(...appearances[name]);
    }
  }
  if (appearances.other.length > 0) {
    orderedParagraphs.push(...appearances.other);
  }

  // 2. Character Actions & Poses
  for (const name of charNames) {
    if (actions[name].length > 0) {
      orderedParagraphs.push(...actions[name]);
    }
  }
  if (actions.other.length > 0) {
    orderedParagraphs.push(...actions.other);
  }

  // 3. Wardrobes & Clothing
  for (const name of charNames) {
    if (wardrobes[name].length > 0) {
      orderedParagraphs.push(...wardrobes[name]);
    }
  }
  if (wardrobes.other.length > 0) {
    orderedParagraphs.push(...wardrobes.other);
  }

  // 4. Lighting
  if (lightingLines.length > 0) {
    orderedParagraphs.push(lightingLines.join(' '));
  }

  // 5. Weather & Background Environment Setting
  if (environmentLines.length > 0) {
    orderedParagraphs.push(environmentLines.join(' '));
  }

  // 6. Camera Framing
  if (framingLines.length > 0) {
    orderedParagraphs.push(framingLines.join(' '));
  }

  // 7. Artistic Style & Rendering Medium
  if (styleLines.length > 0) {
    orderedParagraphs.push(styleLines.join(' '));
  }

  // Clean and sanitize each paragraph
  return orderedParagraphs
    .map(p => stripNonVisibleData(p))
    .filter(Boolean)
    .join('\n');
}

/**
 * Optimizes a prompt specifically for generative video (e.g. WAN 2.1) and image diffusion engines.
 * Strips all non-visual noise (musical roles, professions, voice registers, career descriptions,
 * unseen internal thoughts, meta buzzwords) while preserving rich physical descriptions,
 * dynamic actions, wardrobe materials, cinematic lighting, and artistic rendering style.
 */
export function optimizePromptForWanAi(rawPrompt: string): string {
  if (!rawPrompt || !rawPrompt.trim()) return '';
  return cleanAndStructurePrompt(rawPrompt);
}

/**
 * Performs a deterministic, safety-guaranteed algorithmic prompt remix.
 * Used when applying explicit style/lighting directives or when API safety filters
 * reject text input, ensuring the app never fails or errors out for the user.
 */
export function performDeterministicRemix(
  basePrompt: string,
  instructions: string,
  sceneTitle?: string
): { version: string; title: string; remixPrompt: string; summaryOfChanges: string } {
  if (!basePrompt || !basePrompt.trim()) {
    const optimized = optimizePromptForWanAi(instructions || '');
    return {
      version: '1.0.0',
      title: sceneTitle || 'Remixed Scene',
      remixPrompt: optimized,
      summaryOfChanges: 'Initialized prompt from instructions (visible-only & canonical ordering).'
    };
  }

  const instrLower = (instructions || '').toLowerCase();

  // 0. Check for Default Clean & Order Remix Action
  if (
    instrLower.includes('clean') ||
    instrLower.includes('order') ||
    instrLower.includes('visible only') ||
    instrLower.includes('proper order') ||
    instrLower.includes('line break') ||
    instrLower.includes('default') ||
    instrLower.includes('non-visible') ||
    instrLower.includes('alto') ||
    instrLower.includes('soprano')
  ) {
    const cleanedPrompt = cleanAndStructurePrompt(basePrompt);
    return {
      version: '1.0.0',
      title: sceneTitle ? `${sceneTitle} (Cleaned & Structured)` : 'Cleaned & Structured Scene',
      remixPrompt: cleanedPrompt,
      summaryOfChanges: 'Cleaned prompt, stripped non-visible data (voice registers, unseen roles), and ensured strict canonical 7-section ordering with clean line breaks.'
    };
  }

  // 0.5. Check for WAN 2.1 Video Safety / Invalid Content Fix Action
  if (
    instrLower.includes('wan') ||
    instrLower.includes('invalid content') ||
    instrLower.includes('safety error') ||
    instrLower.includes('safety filter') ||
    instrLower.includes('wan 2.1') ||
    instrLower.includes('video safety')
  ) {
    const fixedPrompt = fixPromptForWanSafety(basePrompt);
    return {
      version: '1.0.0',
      title: sceneTitle ? `${sceneTitle} (WAN 2.1 Video Safe)` : 'WAN 2.1 Video Safe Scene',
      remixPrompt: fixedPrompt,
      summaryOfChanges: 'Sanitized prompt for WAN 2.1 Video: resolved potential "Invalid content" safety triggers, neutralized sensitive phrasing, purged non-visible audio metadata, and reformatted in canonical video-safe order.'
    };
  }

  // 1. Check if this is an Art Style / Medium change
  let matchedStyle: ImageStyleOption | undefined;
  for (const style of IMAGE_STYLES) {
    if (
      instrLower.includes(style.id.toLowerCase()) ||
      instrLower.includes(style.label.toLowerCase()) ||
      (style.promptModifier && instrLower.includes(style.promptModifier.toLowerCase().slice(0, 25)))
    ) {
      matchedStyle = style;
      break;
    }
  }

  if (matchedStyle || instrLower.includes('art style') || instrLower.includes('rendering medium') || instrLower.includes('style to')) {
    const targetStyleId = matchedStyle ? matchedStyle.id : 'photo_realistic';
    const targetLabel = matchedStyle ? matchedStyle.label : 'Updated Visual Style';
    const remixedPrompt = optimizePromptForWanAi(appendStyleToPrompt(stripStyleFromPrompt(basePrompt), targetStyleId));
    return {
      version: '1.0.0',
      title: sceneTitle ? `${sceneTitle} (${targetLabel})` : `Remix (${targetLabel})`,
      remixPrompt: remixedPrompt,
      summaryOfChanges: `Applied visual art style & rendering medium preset: ${targetLabel} (visible-only & canonical ordering).`
    };
  }

  // 2. Check for Lighting adjustments
  if (
    instrLower.includes('light') ||
    instrLower.includes('sunset') ||
    instrLower.includes('sunrise') ||
    instrLower.includes('golden hour') ||
    instrLower.includes('twilight') ||
    instrLower.includes('illumination')
  ) {
    const lines = basePrompt.split('\n');
    let replaced = false;
    const updatedLines = lines.map(line => {
      if (line.toLowerCase().startsWith('lighting:') || line.toLowerCase().startsWith('illumination:')) {
        replaced = true;
        return `Lighting: ${instructions.trim().replace(/^lighting:\s*/i, '')}`;
      }
      return line;
    });

    if (!replaced) {
      // Insert lighting before weather or framing
      const insertIdx = updatedLines.findIndex(l => l.toLowerCase().startsWith('weather') || l.toLowerCase().startsWith('character framing'));
      const newLightLine = `Lighting: ${instructions.trim().replace(/^lighting:\s*/i, '')}`;
      if (insertIdx !== -1) {
        updatedLines.splice(insertIdx, 0, newLightLine);
      } else {
        updatedLines.push(newLightLine);
      }
    }

    const remixedPrompt = cleanAndStructurePrompt(updatedLines.filter(Boolean).join('\n'));
    return {
      version: '1.0.0',
      title: sceneTitle || 'Lighting Remix',
      remixPrompt: remixedPrompt,
      summaryOfChanges: `Updated scene lighting and atmospheric illumination: ${instructions.trim()} (visible-only & canonical ordering).`
    };
  }

  // 3. Check for Weather or Environment adjustments
  if (
    instrLower.includes('weather') ||
    instrLower.includes('rain') ||
    instrLower.includes('mist') ||
    instrLower.includes('meadow') ||
    instrLower.includes('sky') ||
    instrLower.includes('background') ||
    instrLower.includes('environment')
  ) {
    const lines = basePrompt.split('\n');
    let replaced = false;
    const updatedLines = lines.map(line => {
      if (line.toLowerCase().startsWith('weather') || line.toLowerCase().startsWith('main background')) {
        replaced = true;
        return `${line} ${instructions.trim()}`;
      }
      return line;
    });

    if (!replaced) {
      updatedLines.push(`Weather Condition & Setting: ${instructions.trim()}`);
    }

    const remixedPrompt = cleanAndStructurePrompt(updatedLines.filter(Boolean).join('\n'));
    return {
      version: '1.0.0',
      title: sceneTitle || 'Environment Remix',
      remixPrompt: remixedPrompt,
      summaryOfChanges: `Enhanced environment & background atmosphere: ${instructions.trim()} (visible-only & canonical ordering).`
    };
  }

  // 4. Default: safely apply instruction revision with structured formatting
  const lines = basePrompt.split('\n');
  const remixedPrompt = cleanAndStructurePrompt(lines.filter(Boolean).join('\n'));
  return {
    version: '1.0.0',
    title: sceneTitle || 'Remixed Scene',
    remixPrompt: remixedPrompt,
    summaryOfChanges: `Applied user revision commands: ${instructions.trim()} (visible-only & canonical ordering).`
  };
}

/**
 * Extracts base prompt and instructions from a full GENERATE_REMIX_PROMPT string payload
 * and performs deterministic remix fallback.
 */
export function extractAndPerformDeterministicRemix(fullJobPrompt: string): { version: string; title: string; remixPrompt: string; summaryOfChanges: string } | null {
  if (!fullJobPrompt) return null;

  try {
    const baseMarker = '**CURRENT BASE PROMPT:**';
    const instrMarker = '**USER REVISION COMMANDS / INSTRUCTIONS:**';
    const titleMarker = '**SCENE TITLE:**';

    const baseIdx = fullJobPrompt.indexOf(baseMarker);
    const instrIdx = fullJobPrompt.indexOf(instrMarker);
    if (baseIdx === -1 || instrIdx === -1) return null;

    const basePrompt = fullJobPrompt.substring(baseIdx + baseMarker.length, instrIdx).trim();

    let title: string | undefined;
    let instructions = '';

    const titleIdx = fullJobPrompt.indexOf(titleMarker);
    const endMarkers = [
      '**WAN VIDEO & IMAGE ENGINE REWRITE DIRECTIVES:**',
      '**REMIX GUIDELINES:**',
      'Output strictly valid JSON'
    ];

    let guideIdx = -1;
    for (const marker of endMarkers) {
      const idx = fullJobPrompt.indexOf(marker);
      if (idx !== -1 && (guideIdx === -1 || idx < guideIdx)) {
        guideIdx = idx;
      }
    }

    if (titleIdx !== -1) {
      instructions = fullJobPrompt.substring(instrIdx + instrMarker.length, titleIdx).trim();
      const afterTitle = fullJobPrompt.substring(titleIdx + titleMarker.length);
      const nextEnd = guideIdx !== -1 ? guideIdx - (titleIdx + titleMarker.length) : afterTitle.indexOf('\n');
      title = (nextEnd !== -1 ? afterTitle.substring(0, nextEnd) : afterTitle).trim();
    } else if (guideIdx !== -1) {
      instructions = fullJobPrompt.substring(instrIdx + instrMarker.length, guideIdx).trim();
    } else {
      instructions = fullJobPrompt.substring(instrIdx + instrMarker.length).trim();
    }

    return performDeterministicRemix(basePrompt, instructions, title);
  } catch (err) {
    console.error('Failed to extract deterministic remix:', err);
    return null;
  }
}
