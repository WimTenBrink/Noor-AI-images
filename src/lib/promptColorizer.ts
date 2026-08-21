/**
 * Prompt Colorizer & Syntax Analyzer
 * Pure logic and functions for analyzing, segmenting, and tokenizing prompts
 * into color-coded sections (Character, Environment, Clothing, Style & Quality, Fine-Art).
 */

export type PromptSectionType = 'character' | 'action' | 'environment' | 'weather' | 'lighting' | 'clothing' | 'framing' | 'style' | 'fineart' | 'other';

export interface PromptSegment {
  id: string;
  type: PromptSectionType;
  label: string;
  characterName?: string;
  text: string;
}

export interface PromptToken {
  text: string;
  highlightType?: 'character_name' | 'action_verb' | 'environment_kw' | 'weather_kw' | 'lighting_kw' | 'clothing_kw' | 'framing_kw' | 'style_kw' | 'rating_kw';
}

const CHARACTER_NAMES = ['miranda', 'annelies', 'fannie', 'emma', 'senna'];

const CLOTHING_KEYWORDS = [
  'clothing', 'wearing', 'wears', 'dressed', 'outfit', 'wardrobe', 'pieces',
  'dress', 'jeans', 'skirt', 'blouse', 'top', 'shirt', 'jacket', 't-shirt',
  'shorts', 'boots', 'sneakers', 'sandals', 'bikini', 'swimsuit',
  'socks', 'hat', 'sweater', 'hoodie', 'denim', 'leggings', 'trousers', 'pants'
];

const ENVIRONMENT_KEYWORDS = [
  'location', 'setting', 'background', 'environment', 'atmosphere',
  'polder', 'farm', 'farmhouse', 'homestead', 'studio',
  'attic', 'terrace', 'beach', 'dunes', 'canal', 'canals', 'forest', 'meadow',
  'pier', 'lake', 'windmill', 'outdoors', 'indoors', 'pastures', 'rustic'
];

const WEATHER_KEYWORDS = [
  'weather', 'sky', 'clouds', 'rain', 'overcast', 'sunshine', 'sunny',
  'breeze', 'wind', 'storm', 'mist', 'fog', 'clear sky', 'blue sky',
  'cumulus', 'drizzle', 'thunderstorm', 'temperate', 'crisp air'
];

const LIGHTING_KEYWORDS = [
  'lighting', 'sunlight', 'sunset', 'sunrise', 'golden hour', 'twilight', 'sunbeams',
  'shadows', 'rim light', 'key light', 'ambient light', 'dramatic light', 'diffuse',
  'soft light', 'volumetric light', 'illumination', 'warm light', 'radiant'
];

const FRAMING_KEYWORDS = [
  'framing', 'full body', 'medium shot', 'wide shot', 'close-up', 'head-to-toe',
  'camera angle', 'perspective', 'eye level', 'low angle', 'high angle', 'composition'
];

const STYLE_QUALITY_KEYWORDS = [
  'photography', 'photograph', 'photo', 'shot on', 'lens', '35mm', '50mm', '85mm',
  'masterpiece', '8k', 'resolution', 'ultra-detailed', 'cinematic', 'aperture',
  'depth of field', 'bokeh', 'iso', 'shutter', 'sharp focus', 'volumetric',
  'rendering', 'octane', 'vray', 'style', 'unreal engine', 'analog film', 'fujifilm',
  'kodak', 'leica', 'canon', 'hasselblad', 'ultra-high definition', 'film grain'
];

const FINEART_KEYWORDS = [
  'natural body', 'natural form', 'fine-art', 'contours', 'anatomical', 'unadorned',
  'aesthetic pose', 'sensual', 'private album', 'nudity', 'unclothed'
];

/**
 * Classify a paragraph into a specific prompt category
 */
export function classifyParagraph(paragraph: string): { type: PromptSectionType; label: string; characterName?: string } {
  const trimmed = paragraph.trim();
  if (!trimmed) {
    return { type: 'other', label: 'General' };
  }

  const lower = trimmed.toLowerCase();

  // 1. Framing Check
  if (
    lower.startsWith('character framing:') ||
    lower.startsWith('character camera framing:') ||
    lower.startsWith('framing:') ||
    lower.includes('full body wide shot framing') ||
    lower.includes('medium shot framing') ||
    lower.includes('close-up portrait framing') ||
    lower.includes('shot framing')
  ) {
    return { type: 'framing', label: 'Character Framing' };
  }

  // 2. Image Quality & Art Style Check
  if (
    lower.startsWith('image quality') ||
    lower.startsWith('artistic style') ||
    lower.startsWith('settings and artistic style') ||
    lower.startsWith('masterpiece') ||
    lower.startsWith('cinematic') ||
    lower.startsWith('shot on') ||
    lower.includes('8k resolution') ||
    lower.includes('shot on 35mm') ||
    lower.includes('shot on 50mm') ||
    lower.includes('shot on 85mm') ||
    lower.includes('ultra-high resolution') ||
    lower.includes('ultra-high definition') ||
    lower.includes('film grain') ||
    lower.includes('depth of field')
  ) {
    return { type: 'style', label: 'Image Quality & Art Style' };
  }

  // 3. Weather & Sky Check
  if (
    lower.startsWith('weather:') ||
    lower.startsWith('weather and atmospheric') ||
    lower.startsWith('atmospheric conditions:') ||
    lower.startsWith('weather conditions:') ||
    lower.startsWith('sky and weather:') ||
    (WEATHER_KEYWORDS.filter(kw => lower.includes(kw)).length >= 2 && !lower.includes('main background scene') && !lower.includes('lighting:'))
  ) {
    return { type: 'weather', label: 'Weather & Sky' };
  }

  // 4. Lighting & Illumination Check
  if (
    lower.startsWith('lighting:') ||
    lower.startsWith('lighting and illumination:') ||
    lower.startsWith('illumination:') ||
    lower.startsWith('light setting:') ||
    lower.startsWith('ambient lighting:') ||
    (LIGHTING_KEYWORDS.filter(kw => lower.includes(kw)).length >= 2 && !lower.includes('main background scene') && !lower.includes('weather:'))
  ) {
    return { type: 'lighting', label: 'Lighting & Illumination' };
  }

  // 5. Character Action Check (checked BEFORE clothing so actions mentioning 'wearing sunglasses/boots' stay classified as Action)
  const matchedCharForAction = CHARACTER_NAMES.find(name => lower.includes(name));
  const hasActionKeyword = 
    lower.includes('action:') || 
    lower.includes('action (') ||
    lower.includes('action -') ||
    lower.includes('action.') ||
    lower.includes('action,') ||
    (lower.includes('action') && (lower.includes('pose') || lower.includes('candid') || lower.includes('doing') || lower.includes('sitting') || lower.includes('standing') || lower.includes('performing') || lower.includes('singing') || lower.includes('playing') || lower.includes('dancing') || lower.includes('gazing') || lower.includes('leaning') || lower.includes('lying') || lower.includes('relaxing') || lower.includes('stretching') || lower.includes('walking') || lower.includes('holding') || lower.includes('skipping'))) ||
    lower.startsWith('action:') ||
    lower.includes('candid action') ||
    lower.includes('wholesome cheerful action') ||
    lower.includes('fashion photoshoot pose') ||
    lower.includes('intimate grouping pose') ||
    lower.includes('fine-art pose') ||
    lower.includes('pose (doing):') ||
    lower.includes('action (doing):') ||
    lower.includes('(doing):') ||
    lower.includes(' doing: ') ||
    lower.includes(' pose:') ||
    lower.includes(' pose (') ||
    lower.startsWith('pose:') ||
    lower.startsWith('doing:') ||
    (matchedCharForAction && (
      lower.startsWith(`${matchedCharForAction} action`) ||
      lower.startsWith(`${matchedCharForAction}, action`) ||
      lower.startsWith(`${matchedCharForAction}'s action`) ||
      lower.startsWith(`${matchedCharForAction} pose`) ||
      lower.startsWith(`${matchedCharForAction}, pose`) ||
      lower.startsWith(`${matchedCharForAction}'s pose`) ||
      lower.startsWith(`action: ${matchedCharForAction}`) ||
      lower.startsWith(`action (${matchedCharForAction})`)
    ));

  if (hasActionKeyword && !lower.startsWith('clothing details:') && !lower.startsWith('wardrobe:') && !lower.includes('clothing details:')) {
    const charLabel = matchedCharForAction 
      ? `${matchedCharForAction.charAt(0).toUpperCase() + matchedCharForAction.slice(1)}'s Action` 
      : 'Character Action';
    return { type: 'action', label: charLabel, characterName: matchedCharForAction };
  }

  // 6. Clothing & Wardrobe Check
  const hasClothingMarker = 
    lower.includes('clothing details:') ||
    lower.includes('outfit details') ||
    lower.includes('wardrobe details') ||
    lower.includes('wardrobe:') ||
    lower.startsWith('clothing:') ||
    lower.includes('wearing ') ||
    lower.includes('dressed in') ||
    (CLOTHING_KEYWORDS.some(kw => lower.includes(kw)) && (lower.includes('wearing') || lower.includes('dressed') || lower.includes('outfit') || lower.includes('pieces')));

  if (hasClothingMarker) {
    const matchedChar = CHARACTER_NAMES.find(name => lower.includes(name));
    const charLabel = matchedChar ? `${matchedChar.charAt(0).toUpperCase() + matchedChar.slice(1)}'s Wardrobe` : 'Clothing & Wardrobe';
    return { type: 'clothing', label: charLabel, characterName: matchedChar };
  }

  // 7. Environment & Location Setting Check
  if (
    lower.startsWith('the scene is set') ||
    lower.startsWith('main background scene:') ||
    lower.startsWith('background:') ||
    lower.startsWith('location:') ||
    lower.startsWith('location setting') ||
    lower.startsWith('environment:') ||
    lower.startsWith('setting:') ||
    lower.startsWith('farmhouse dataset details:') ||
    lower.includes('homestead farm') ||
    lower.startsWith('scene concept:') ||
    lower.startsWith('musical instruments:')
  ) {
    return { type: 'environment', label: 'Environment & Setting' };
  }

  // 8. Fine-Art / Natural Form Check
  if (
    FINEART_KEYWORDS.some(kw => lower.includes(kw)) ||
    lower.includes('fine-art private') ||
    lower.includes('natural body contours')
  ) {
    return { type: 'fineart', label: 'Natural Body & Fine-Art Pose' };
  }

  // 9. Character Appearance & Description Check (Base, Body, Hair, Eyes, Age)
  for (const name of CHARACTER_NAMES) {
    if (lower.includes(name)) {
      const capName = name.charAt(0).toUpperCase() + name.slice(1);
      // Check if it's an action described without the literal word 'action'
      const isActionWithoutKeyword = 
        (lower.includes('sitting on') || lower.includes('standing on') || lower.includes('playing her') || lower.includes('holding her') || lower.includes('leaning against') || lower.includes('walking through') || lower.includes('laughing together') || lower.includes('performing together')) &&
        !lower.includes('hair') && !lower.includes('skin') && !lower.includes('physique') && !lower.includes('build') && !lower.includes('eyes');

      if (isActionWithoutKeyword) {
        return { type: 'action', label: `${capName}'s Action`, characterName: name };
      }

      return { type: 'character', label: `Character: ${capName}`, characterName: name };
    }
  }

  // Fallback heuristic based on keyword density
  let envScore = 0;
  let weatherScore = 0;
  let lightScore = 0;
  let styleScore = 0;
  let clothScore = 0;
  let framingScore = 0;

  ENVIRONMENT_KEYWORDS.forEach(kw => { if (lower.includes(kw)) envScore++; });
  WEATHER_KEYWORDS.forEach(kw => { if (lower.includes(kw)) weatherScore++; });
  LIGHTING_KEYWORDS.forEach(kw => { if (lower.includes(kw)) lightScore++; });
  STYLE_QUALITY_KEYWORDS.forEach(kw => { if (lower.includes(kw)) styleScore++; });
  CLOTHING_KEYWORDS.forEach(kw => { if (lower.includes(kw)) clothScore++; });
  FRAMING_KEYWORDS.forEach(kw => { if (lower.includes(kw)) framingScore++; });

  if (framingScore > styleScore && framingScore > envScore) {
    return { type: 'framing', label: 'Character Framing' };
  }
  if (weatherScore > envScore && weatherScore > lightScore) {
    return { type: 'weather', label: 'Weather & Sky' };
  }
  if (lightScore > envScore && lightScore > weatherScore) {
    return { type: 'lighting', label: 'Lighting & Illumination' };
  }
  if (styleScore > envScore && styleScore > clothScore) {
    return { type: 'style', label: 'Image Quality & Art Style' };
  }
  if (clothScore > envScore) {
    return { type: 'clothing', label: 'Clothing & Wardrobe' };
  }
  if (envScore > 0) {
    return { type: 'environment', label: 'Environment & Setting' };
  }

  return { type: 'other', label: 'Scene Description' };
}

/**
 * Parses full prompt string into segmented, typed sections.
 * Automatically splits any merged character-and-action lines into separate sections.
 */
export function parsePromptSections(fullPrompt: string): PromptSegment[] {
  if (!fullPrompt || !fullPrompt.trim()) return [];

  // Split by newlines or double newlines
  const initialParagraphs = fullPrompt
    .split(/\n+/)
    .map(p => p.trim())
    .filter(p => p.length > 0);

  // If any paragraph has character description and action merged together (e.g. legacy single-block text), split into two
  const rawParagraphs: string[] = [];

  for (const para of initialParagraphs) {
    const lower = para.toLowerCase();

    // Check if the paragraph starts with an explicit Action, Wardrobe, Lighting, etc. prefix
    const startsWithAction = 
      lower.startsWith('action:') ||
      lower.startsWith('action (') ||
      lower.startsWith('candid action') ||
      lower.startsWith('wholesome cheerful action') ||
      lower.startsWith('fashion photoshoot pose') ||
      lower.startsWith('intimate grouping pose') ||
      lower.startsWith('fine-art pose') ||
      CHARACTER_NAMES.some(name => 
        lower.startsWith(`${name} action`) ||
        lower.startsWith(`${name}, action`) ||
        lower.startsWith(`${name}'s action`) ||
        lower.startsWith(`${name} pose`) ||
        lower.startsWith(`${name}, pose`) ||
        lower.startsWith(`${name}'s pose`)
      );

    if (startsWithAction) {
      // Paragraph is already a standalone action segment — never split!
      rawParagraphs.push(para);
      continue;
    }

    // Only look for merged action if preceded by a genuine sentence ending in a period
    const mergedActionRegex = /^(.+?\.)\s+([A-Z][a-z]+ action \([^)]+\):|[A-Z][a-z]+ action:|[A-Z][a-z]+ pose:|[A-Z][a-z]+ candid action:|[A-Z][a-z]+ wholesome cheerful action:|[A-Z][a-z]+ fashion photoshoot pose:|[A-Z][a-z]+ intimate grouping pose:|Candid action \(doing\):|Wholesome cheerful action \(doing\):|Fashion photoshoot pose \(doing\):|Intimate grouping pose \(doing\):|Fine-art pose \(doing\):|Action \(doing\):)\s*(.*)$/i;

    const match = para.match(mergedActionRegex);
    if (match && match[1].trim().length > 15) {
      const part1 = match[1].trim();
      const actionPrefix = match[2].trim();
      const actionContent = match[3].trim();
      rawParagraphs.push(part1);
      if (actionPrefix && actionContent) {
        rawParagraphs.push(`${actionPrefix} ${actionContent}`);
      } else if (actionPrefix) {
        rawParagraphs.push(actionPrefix);
      }
    } else {
      rawParagraphs.push(para);
    }
  }

  return rawParagraphs.map((para, index) => {
    const { type, label, characterName } = classifyParagraph(para);
    return {
      id: `section_${index}_${type}`,
      type,
      label,
      characterName,
      text: para
    };
  });
}

/**
 * Filter prompt segments by individual section IDs.
 * Unchecked individual sections are excluded.
 * Formats the copied prompt without line breaks (single continuous prompt with single space between sentences).
 */
export function filterPromptBySegmentIds(
  segments: PromptSegment[],
  enabledSegmentIds: Record<string, boolean>
): string {
  if (!segments || segments.length === 0) return '';
  const filtered = segments.filter(seg => enabledSegmentIds[seg.id] !== false);
  
  return filtered
    .map(seg => seg.text.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .join(' ');
}

/**
 * Filter a prompt string by individual enabled segment IDs
 */
export function filterPromptStringBySegmentIds(
  fullPrompt: string,
  enabledSegmentIds: Record<string, boolean>
): string {
  if (!fullPrompt || !fullPrompt.trim()) return '';
  const segments = parsePromptSections(fullPrompt);
  return filterPromptBySegmentIds(segments, enabledSegmentIds);
}

/**
 * Default section enabled mapping for copying prompts.
 */
export const DEFAULT_ENABLED_SECTIONS: Record<PromptSectionType, boolean> = {
  character: true,
  action: true,
  environment: true,
  weather: true,
  lighting: true,
  clothing: true,
  framing: true,
  style: true,
  fineart: true,
  other: true
};

/**
 * Filter a prompt to only include enabled sections.
 * Formats the copied prompt without line breaks (single continuous prompt with single space between sentences).
 */
export function filterPromptBySections(
  fullPrompt: string, 
  enabledSections: Record<PromptSectionType, boolean>
): string {
  if (!fullPrompt || !fullPrompt.trim()) return '';
  const segments = parsePromptSections(fullPrompt);
  const filtered = segments.filter(seg => enabledSections[seg.type] !== false);
  
  // Format without line breaks:
  // Convert any internal whitespace/newlines to single spaces and join all sections with a single space
  return filtered
    .map(seg => seg.text.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .join(' ');
}

/**
 * Tokenize a paragraph to highlight specialized keywords inside the text
 */
export function tokenizePromptText(text: string): PromptToken[] {
  if (!text) return [];

  // Regex splitting by word boundaries while preserving punctuation
  const regex = /(\b[A-Za-z0-9_-]+\b|[^\sA-Za-z0-9_-]+|\s+)/g;
  const matches = text.match(regex) || [text];

  return matches.map(token => {
    const lower = token.toLowerCase();

    // Check character name
    if (CHARACTER_NAMES.includes(lower)) {
      return { text: token, highlightType: 'character_name' };
    }

    // Check framing keywords
    if (FRAMING_KEYWORDS.includes(lower)) {
      return { text: token, highlightType: 'framing_kw' };
    }

    // Check weather keywords
    if (WEATHER_KEYWORDS.includes(lower)) {
      return { text: token, highlightType: 'weather_kw' };
    }

    // Check lighting keywords
    if (LIGHTING_KEYWORDS.includes(lower)) {
      return { text: token, highlightType: 'lighting_kw' };
    }

    // Check style/quality keywords
    if (STYLE_QUALITY_KEYWORDS.includes(lower)) {
      return { text: token, highlightType: 'style_kw' };
    }

    // Check environment keywords
    if (ENVIRONMENT_KEYWORDS.includes(lower)) {
      return { text: token, highlightType: 'environment_kw' };
    }

    // Check clothing keywords
    if (CLOTHING_KEYWORDS.includes(lower)) {
      return { text: token, highlightType: 'clothing_kw' };
    }

    // Check fineart keywords
    if (FINEART_KEYWORDS.includes(lower)) {
      return { text: token, highlightType: 'rating_kw' };
    }

    return { text: token };
  });
}
