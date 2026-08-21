export interface AgeOption {
  id: string;
  label: string;
  description: string;
}

export const AGE_OPTIONS: AgeOption[] = [
  { id: 'child', label: 'Child', description: 'childhood age appearance' },
  { id: 'teen', label: 'Teen', description: 'teenager youth age appearance' },
  { id: 'young_adult', label: 'Young adult', description: 'young adult age appearance' },
  { id: 'adult', label: 'Adult', description: 'mature adult age appearance' },
  { id: 'middle_aged', label: 'Middle-aged', description: 'middle-aged adult appearance' },
  { id: 'aging', label: 'Aging', description: 'aging distinguished adult appearance' },
  { id: 'senior', label: 'Senior', description: 'senior elderly age appearance' }
];

export const DEFAULT_CHARACTER_AGE = 'young_adult';
export const DEFAULT_IS_TOMBOY = true;

export function getAgeById(id: string): AgeOption {
  const found = AGE_OPTIONS.find(a => a.id === id);
  return found || AGE_OPTIONS.find(a => a.id === DEFAULT_CHARACTER_AGE)!;
}

/**
 * Builds the character demographic descriptor string based on age and tomboy settings.
 * Example:
 * - age="young_adult", isTomboy=true -> "young adult tomboy"
 * - age="young_adult", isTomboy=false -> "young adult woman" (or "young adult female")
 * - age="teen", isTomboy=true -> "teen tomboy"
 * - age="teen", isTomboy=false -> "teen girl"
 * - age="child", isTomboy=true -> "child tomboy"
 * - age="child", isTomboy=false -> "young girl"
 * - age="adult", isTomboy=true -> "adult tomboy"
 * - age="adult", isTomboy=false -> "adult woman"
 * - age="aging", isTomboy=true -> "aging tomboy"
 * - age="aging", isTomboy=false -> "aging woman"
 */
export function buildCharacterAgeLabel(ageId: string = DEFAULT_CHARACTER_AGE, isTomboy: boolean = DEFAULT_IS_TOMBOY): string {
  const ageObj = getAgeById(ageId);
  const ageLabelLower = ageObj.label.toLowerCase();

  if (isTomboy) {
    return `${ageLabelLower} tomboy`;
  }

  if (ageId === 'child') {
    return 'young girl';
  } else if (ageId === 'teen') {
    return 'teen girl';
  } else {
    return `${ageLabelLower} woman`;
  }
}
