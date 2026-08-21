export type PromptRatingId = 'innocent' | 'normal' | 'professional' | 'intimate' | 'nsfw' | 'explicit';

export interface PromptRatingOption {
  id: PromptRatingId;
  label: string;
  shortDescription: string;
  description: string;
  rules: string;
  isAdultRating: boolean;
}

export const PROMPT_RATING_OPTIONS: PromptRatingOption[] = [
  {
    id: 'innocent',
    label: 'Innocent',
    shortDescription: 'Child-safe & wholesome friendship',
    description: 'Child-safe and wholesome, focusing on cheerful friendship, smiling camaraderie, and vibrant activity.',
    rules: 'Focus on cheerful camaraderie, smiling expressions, joyful interaction, vibrant outdoor activity, and wholesome friendship.',
    isAdultRating: false
  },
  {
    id: 'normal',
    label: 'Normal',
    shortDescription: 'Spontaneous & candid moment',
    description: 'Spontaneous and candid scene with natural unposed expressions, authentic dynamic interactions, and realistic composition.',
    rules: 'Focus on authentic candid snapshots with natural unposed expressions, joyful interactions, dynamic body movement, and realistic framing.',
    isAdultRating: false
  },
  {
    id: 'professional',
    label: 'Professional',
    shortDescription: 'High-fashion editorial photo shoot',
    description: 'Professional high-fashion photo shoot with poised postures, dramatic lighting, and refined qualities.',
    rules: 'Focus on high-fashion editorial modeling, poised postures, dramatic studio lighting, magazine spread aesthetics, and refined qualities.',
    isAdultRating: false
  },
  {
    id: 'intimate',
    label: 'Intimate',
    shortDescription: 'Close physical proximity & sisterly bond',
    description: 'Characters in close physical proximity with light summer wear and warm sisterly bond.',
    rules: 'Focus on close physical proximity, characters touching shoulders or leaning together, warm sisterly camaraderie, and light summer wear.',
    isAdultRating: false
  },
  {
    id: 'nsfw',
    label: 'NSFW',
    shortDescription: 'Fine-art private album & natural form',
    description: 'Private personal album portrait with natural body form, relaxed poses, and artistic composition.',
    rules: 'Focus on fine-art private personal album photography, natural body curves, authentic relaxed poses, and artistic composition.',
    isAdultRating: true
  },
  {
    id: 'explicit',
    label: 'Explicit',
    shortDescription: 'Full anatomical fidelity & natural form',
    description: 'Fine-art anatomical study with complete anatomical fidelity and natural form.',
    rules: 'Focus on fine-art anatomical fidelity, detailed contours of private areas, full posture, and natural feminine form.',
    isAdultRating: true
  }
];

export const DEFAULT_PROMPT_RATING: PromptRatingId = 'normal';

export function getPromptRatingById(id: string): PromptRatingOption {
  const found = PROMPT_RATING_OPTIONS.find(r => r.id === id);
  return found || PROMPT_RATING_OPTIONS.find(r => r.id === DEFAULT_PROMPT_RATING)!;
}
