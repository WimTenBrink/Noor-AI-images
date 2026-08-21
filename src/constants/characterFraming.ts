export type CharacterFramingId = 
  | 'portrait'
  | 'chest_up'
  | 'torso_up'
  | 'hip_up'
  | 'knees_up'
  | 'full_body';

export interface CharacterFramingOption {
  id: CharacterFramingId;
  label: string;
  shortLabel: string;
  description: string;
  promptModifier: string;
}

export const CHARACTER_FRAMING_OPTIONS: CharacterFramingOption[] = [
  {
    id: 'portrait',
    label: 'Portrait (Head & Face)',
    shortLabel: 'Portrait',
    description: 'Tight framing focusing on head, face, facial expressions, hairstyle and upper neck.',
    promptModifier: 'Character framing: Portrait close-up framing focusing on the face, facial expression, eyes, hair, and upper neck with shoulders visible at the lower frame edge'
  },
  {
    id: 'chest_up',
    label: 'Chest-Up (Bust / Medium Close-Up)',
    shortLabel: 'Chest-Up',
    description: 'Medium close-up showing head, neck, shoulders, collarbone area, and upper chest.',
    promptModifier: 'Character framing: Chest-up medium close-up shot framing from top of head down to mid-chest and shoulders, highlighting facial expressions and upper posture'
  },
  {
    id: 'torso_up',
    label: 'Torso-Up (Waist-Up / Medium Shot)',
    shortLabel: 'Torso-Up',
    description: 'Waist-up medium framing showing head down to waist, arms, hand gestures, and torso.',
    promptModifier: 'Character framing: Torso-up waist-up medium shot framing from top of head down to the waistline, showing full torso, arms, hand gestures, and upper body postures'
  },
  {
    id: 'hip_up',
    label: 'Hip-Up (Three-Quarter Mid Shot)',
    shortLabel: 'Hip-Up',
    description: 'Mid shot from head down to hips and upper thighs, showing gestures and outfit details.',
    promptModifier: 'Character framing: Hip-up three-quarter mid shot framing captured from above the head down to the hips and upper thighs, presenting full upper body gestures and dynamic posing'
  },
  {
    id: 'knees_up',
    label: 'Knees-Up (Medium Full / 3/4 Shot)',
    shortLabel: 'Knees-Up',
    description: 'Medium full shot from head down to knees, showing full posture, movement, and outfit.',
    promptModifier: 'Character framing: Knees-up medium-full shot framing from the top of the head down to just around the knees, showcasing body language, dynamic postures, and mid-leg outfits'
  },
  {
    id: 'full_body',
    label: 'Full Body (Wide / Head-to-Toe)',
    shortLabel: 'Full Body',
    description: 'Full-length wide shot from head down to feet and shoes firmly standing in the scene.',
    promptModifier: 'Character framing: Full body wide shot framing capturing complete head-to-toe figures from hair to feet standing in the environment, showcasing full physical poses'
  }
];

export const DEFAULT_CHARACTER_FRAMING: CharacterFramingId = 'full_body';

export function getCharacterFramingById(id: string): CharacterFramingOption {
  const found = CHARACTER_FRAMING_OPTIONS.find(f => f.id === id);
  return found || CHARACTER_FRAMING_OPTIONS.find(f => f.id === 'full_body') || CHARACTER_FRAMING_OPTIONS[5]; // Default to full_body
}
