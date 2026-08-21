export interface RatingLevelStep {
  level: number;
  code: string;
  label: string;
  description: string;
}

export const RATING_STEPS: RatingLevelStep[] = [
  { level: 0, code: "G", label: "G - General Audiences", description: "All ages admitted. Wholesome, clean, family-safe lyrics with no coarse language or adult themes." },
  { level: 1, code: "PG", label: "PG - Parental Guidance", description: "Parental guidance suggested. Light mild humor, soft romantic themes, and innocent wordplay." },
  { level: 2, code: "PG-13", label: "PG-13 - Parents Strongly Cautioned", description: "Parents strongly cautioned. Mild innuendo, light double entendres, edgy humor, or mild profanity." },
  { level: 3, code: "R", label: "R - Restricted", description: "Restricted content. Strong adult themes, provocative romantic lyrics, direct profanity, or dark topics." },
  { level: 4, code: "NC-17", label: "NC-17 - Adults Only", description: "Explicit adult content. Sensual themes, intense explicit romantic passion, and raw uncensored vocabulary." },
  { level: 5, code: "X", label: "X - Explicit Adult", description: "Explicit sensual focus, uninhibited adult lyrics, passion-heavy narrative, and bold themes." },
  { level: 6, code: "XX", label: "XX - Hardcore Explicit", description: "Unfiltered physical intimacy, highly explicit romantic descriptions, and intense adult themes." },
  { level: 7, code: "XXX", label: "XXX - Uncensored Erotica", description: "Maximum explicit rating: raw, completely uncensored, ultra-intense sensual passion and erotic lyrics." }
];

export function getRatingStep(level: number): RatingLevelStep {
  const normalized = Math.max(0, Math.min(RATING_STEPS.length - 1, Math.round(level)));
  return RATING_STEPS[normalized];
}
