/**
 * Noor Music - Image Inspiration Business Logic
 * 
 * Handles multimodal image processing, file conversion, schema validation,
 * AI prompt construction, result normalization, and persistent local storage
 * for the Image Inspiration to Song generation pipeline.
 * 
 * Strictly separated from UI controls. Pure TypeScript logic.
 */

import { IMAGE_INSPIRATION_SCHEMA_VERSION } from '../constants/jsonSchemas';
import { STYLES } from '../constants/styles';
import { INSTRUMENTS } from '../constants/instruments';

export const IMAGE_INSPIRATION_STORAGE_KEY = 'noor-image-inspiration-v1';

export interface ImageInspirationSliders {
  reverb?: number;
  harmonics?: number;
  epic?: number;
  sapphic?: number;
  wittyness?: number;
  weirdness?: number;
  loudness?: number;
  complexity?: number;
  repetitiveness?: number;
  tempo?: number;
  strictness?: number;
}

export interface ImageInspirationResult {
  $schema?: string;
  version: string;
  title: string;
  imageDescription: string;
  story: string;
  storySummary?: string;
  mood?: string;
  genre?: string;
  styles: string[];
  instruments: string[];
  emotions: string[];
  musicalKey?: string;
  timeSignature?: string;
  tempoBpm?: number;
  tempoCategory?: string;
  leadVocalist?: string;
  lyricalThemes?: string[];
  sliders?: ImageInspirationSliders;
}

export interface ImageInspirationState {
  imageDataUrl: string | null;
  imageMimeType: string | null;
  imageFileName: string | null;
  imageDescription: string;
  story: string;
  storySummary: string;
  imageSeriousness: number;
  analyzedAt?: number;
  lastResult?: ImageInspirationResult | null;
  suggestedTitle: string;
  matchedStyles: string[];
  matchedInstruments: string[];
  matchedEmotions: string[];
  matchedKey?: string;
  matchedTimeSignature?: string;
  matchedTempoBpm?: number;
  matchedLead?: string;
}

export const INITIAL_IMAGE_INSPIRATION_STATE: ImageInspirationState = {
  imageDataUrl: null,
  imageMimeType: null,
  imageFileName: null,
  imageDescription: '',
  story: '',
  storySummary: '',
  imageSeriousness: 80,
  suggestedTitle: '',
  matchedStyles: [],
  matchedInstruments: [],
  matchedEmotions: [],
  matchedKey: 'C Major',
  matchedTimeSignature: '4/4',
  matchedTempoBpm: 85,
  matchedLead: 'fannie',
};

/**
 * Converts a browser File object to base64 and data URL
 */
export async function fileToBase64(file: File): Promise<{
  base64: string;
  mimeType: string;
  dataUrl: string;
  fileName: string;
  fileSize: number;
}> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      const [header, base64] = dataUrl.split(',');
      const mimeTypeMatch = header.match(/:(.*?);/);
      const mimeType = mimeTypeMatch ? mimeTypeMatch[1] : file.type || 'image/jpeg';
      resolve({
        base64: base64 || '',
        mimeType,
        dataUrl,
        fileName: file.name,
        fileSize: file.size,
      });
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

/**
 * Validates and normalizes raw AI output into a structured ImageInspirationResult
 */
export function validateImageInspirationResult(raw: any): ImageInspirationResult {
  if (!raw || typeof raw !== 'object') {
    throw new Error('AI returned an invalid or empty response structure');
  }

  const title = typeof raw.title === 'string' && raw.title.trim() ? raw.title.trim() : 'Song from Visual Inspiration';
  const imageDescription = typeof raw.imageDescription === 'string' ? raw.imageDescription.trim() : (typeof raw.description === 'string' ? raw.description.trim() : '');
  const story = typeof raw.story === 'string' ? raw.story.trim() : (typeof raw.narrative === 'string' ? raw.narrative.trim() : '');
  const storySummary = typeof raw.storySummary === 'string' ? raw.storySummary.trim() : '';
  const mood = typeof raw.mood === 'string' ? raw.mood.trim() : 'Serene';
  const genre = typeof raw.genre === 'string' ? raw.genre.trim() : 'Acoustic Folk';

  const styles: string[] = Array.isArray(raw.styles)
    ? raw.styles.map((s: any) => String(s).trim()).filter(Boolean)
    : (typeof raw.style === 'string' ? raw.style.split(',').map((s: string) => s.trim()).filter(Boolean) : []);

  const instruments: string[] = Array.isArray(raw.instruments)
    ? raw.instruments.map((i: any) => String(i).trim()).filter(Boolean)
    : (typeof raw.instrument === 'string' ? raw.instrument.split(',').map((i: string) => i.trim()).filter(Boolean) : []);

  const emotions: string[] = Array.isArray(raw.emotions)
    ? raw.emotions.map((e: any) => String(e).trim()).filter(Boolean)
    : (typeof raw.emotion === 'string' ? raw.emotion.split(',').map((e: string) => e.trim()).filter(Boolean) : []);

  const musicalKey = typeof raw.musicalKey === 'string' ? raw.musicalKey.trim() : (typeof raw.key === 'string' ? raw.key.trim() : 'D Minor');
  const timeSignature = typeof raw.timeSignature === 'string' ? raw.timeSignature.trim() : '4/4';
  const tempoBpm = typeof raw.tempoBpm === 'number' ? Math.max(40, Math.min(220, Math.round(raw.tempoBpm))) : (typeof raw.tempo === 'number' ? Math.round(raw.tempo) : 85);
  const tempoCategory = typeof raw.tempoCategory === 'string' ? raw.tempoCategory.trim() : 'medium';
  
  let leadVocalist = typeof raw.leadVocalist === 'string' ? raw.leadVocalist.toLowerCase().trim() : 'fannie';
  if (!['miranda', 'annelies', 'fannie', 'emma'].includes(leadVocalist)) {
    if (leadVocalist.includes('miranda')) leadVocalist = 'miranda';
    else if (leadVocalist.includes('annelies')) leadVocalist = 'annelies';
    else if (leadVocalist.includes('fannie')) leadVocalist = 'fannie';
    else if (leadVocalist.includes('emma')) leadVocalist = 'emma';
    else leadVocalist = 'fannie';
  }

  const lyricalThemes = Array.isArray(raw.lyricalThemes)
    ? raw.lyricalThemes.map((t: any) => String(t).trim()).filter(Boolean)
    : [];

  const rawSliders = raw.sliders && typeof raw.sliders === 'object' ? raw.sliders : {};
  const sliders: ImageInspirationSliders = {
    reverb: typeof rawSliders.reverb === 'number' ? Math.max(0, Math.min(100, rawSliders.reverb)) : 45,
    harmonics: typeof rawSliders.harmonics === 'number' ? Math.max(0, Math.min(100, rawSliders.harmonics)) : 60,
    epic: typeof rawSliders.epic === 'number' ? Math.max(0, Math.min(100, rawSliders.epic)) : 30,
    sapphic: typeof rawSliders.sapphic === 'number' ? Math.max(0, Math.min(100, rawSliders.sapphic)) : 70,
    wittyness: typeof rawSliders.wittyness === 'number' ? Math.max(0, Math.min(100, rawSliders.wittyness)) : 25,
    weirdness: typeof rawSliders.weirdness === 'number' ? Math.max(0, Math.min(100, rawSliders.weirdness)) : 20,
    loudness: typeof rawSliders.loudness === 'number' ? Math.max(0, Math.min(100, rawSliders.loudness)) : 40,
    complexity: typeof rawSliders.complexity === 'number' ? Math.max(0, Math.min(100, rawSliders.complexity)) : 50,
    repetitiveness: typeof rawSliders.repetitiveness === 'number' ? Math.max(0, Math.min(100, rawSliders.repetitiveness)) : 35,
    tempo: tempoBpm,
    strictness: typeof rawSliders.strictness === 'number' ? Math.max(0, Math.min(100, rawSliders.strictness)) : 50,
  };

  return {
    $schema: `https://katje.bv/schemas/v${IMAGE_INSPIRATION_SCHEMA_VERSION}/image-inspiration.json`,
    version: IMAGE_INSPIRATION_SCHEMA_VERSION,
    title,
    imageDescription,
    story,
    storySummary,
    mood,
    genre,
    styles: styles.length > 0 ? styles : ['Acoustic Pop', 'Celtic Folk'],
    instruments: instruments.length > 0 ? instruments : ['Acoustic Guitar', 'Cello', 'Bodhran'],
    emotions: emotions.length > 0 ? emotions : ['Nostalgic', 'Serene'],
    musicalKey,
    timeSignature,
    tempoBpm,
    tempoCategory,
    leadVocalist,
    lyricalThemes,
    sliders,
  };
}

/**
 * Finds closest matching known styles in the app catalog
 */
export function matchCatalogStyles(suggestedStyles: string[]): string[] {
  const allSubstyles: string[] = [];
  STYLES.forEach((grp) => {
    grp.substyles.forEach((sub) => allSubstyles.push(sub.name));
  });

  const matched: string[] = [];
  suggestedStyles.forEach((s) => {
    const directMatch = allSubstyles.find((cat) => cat.toLowerCase() === s.toLowerCase());
    if (directMatch && !matched.includes(directMatch)) {
      matched.push(directMatch);
      return;
    }
    const partialMatch = allSubstyles.find((cat) => cat.toLowerCase().includes(s.toLowerCase()) || s.toLowerCase().includes(cat.toLowerCase()));
    if (partialMatch && !matched.includes(partialMatch)) {
      matched.push(partialMatch);
    }
  });

  return matched.length > 0 ? matched : suggestedStyles;
}

/**
 * Finds closest matching known instruments in the app catalog
 */
export function matchCatalogInstruments(suggestedInstruments: string[]): string[] {
  const allInstNames: string[] = [];
  INSTRUMENTS.forEach((grp) => {
    grp.instruments.forEach((inst) => allInstNames.push(inst.name));
  });

  const matched: string[] = [];
  suggestedInstruments.forEach((i) => {
    const directMatch = allInstNames.find((cat) => cat.toLowerCase() === i.toLowerCase());
    if (directMatch && !matched.includes(directMatch)) {
      matched.push(directMatch);
      return;
    }
    const partialMatch = allInstNames.find((cat) => cat.toLowerCase().includes(i.toLowerCase()) || i.toLowerCase().includes(cat.toLowerCase()));
    if (partialMatch && !matched.includes(partialMatch)) {
      matched.push(partialMatch);
    }
  });

  return matched.length > 0 ? matched : suggestedInstruments;
}

/**
 * Persists Image Inspiration State to LocalStorage
 */
export function saveImageInspirationToStorage(state: ImageInspirationState): void {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(IMAGE_INSPIRATION_STORAGE_KEY, JSON.stringify(state));
    }
  } catch (err) {
    console.error('Failed to save image inspiration state to local storage:', err);
  }
}

/**
 * Loads Image Inspiration State from LocalStorage
 */
export function loadImageInspirationFromStorage(): ImageInspirationState | null {
  try {
    if (typeof window !== 'undefined') {
      const raw = localStorage.getItem(IMAGE_INSPIRATION_STORAGE_KEY);
      if (raw) {
        return JSON.parse(raw);
      }
    }
  } catch (err) {
    console.error('Failed to load image inspiration state from local storage:', err);
  }
  return null;
}

/**
 * Clears Image Inspiration State from LocalStorage
 */
export function clearImageInspirationStorage(): void {
  try {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(IMAGE_INSPIRATION_STORAGE_KEY);
    }
  } catch (err) {
    console.error('Failed to clear image inspiration storage:', err);
  }
}
