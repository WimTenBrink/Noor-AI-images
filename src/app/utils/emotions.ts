export interface Emotion {
  id: string;
  name: string;
  description: string;
  category: string;
}

export const SONG_EMOTIONS: Emotion[] = [
  // --- Joyful, Uplifting & Euphoric ---
  {
    id: 'joyful',
    name: 'Joyful & Radiant',
    category: 'Joyful, Uplifting & Euphoric',
    description: 'Feeling great pleasure, high spirits, and bright, radiant happiness.'
  },
  {
    id: 'euphoric',
    name: 'Euphoric Bliss',
    category: 'Joyful, Uplifting & Euphoric',
    description: 'An intense state of transcendent elation, bliss, and supreme well-being.'
  },
  {
    id: 'ecstatic',
    name: 'Ecstatic Rapture',
    category: 'Joyful, Uplifting & Euphoric',
    description: 'Overwhelming happiness, intense spiritual high, or rapturous excitement.'
  },
  {
    id: 'hopeful',
    name: 'Hopeful & Optimistic',
    category: 'Joyful, Uplifting & Euphoric',
    description: 'Optimistic expectation, looking forward to the future with warmth and confidence.'
  },
  {
    id: 'energetic',
    name: 'Energetic & Vital',
    category: 'Joyful, Uplifting & Euphoric',
    description: 'High-octane excitement, massive physical drive, and intense dynamic vitality.'
  },

  // --- Melancholic, Sad & Nostalgic ---
  {
    id: 'melancholic',
    name: 'Melancholic Poetic',
    category: 'Melancholic, Sad & Nostalgic',
    description: 'Pensive sadness, often sweet, nostalgic, and deeply poetic in delivery.'
  },
  {
    id: 'sad',
    name: 'Sorrowful & Grieving',
    category: 'Melancholic, Sad & Nostalgic',
    description: 'Felt with a heavy posture of grief, sorrow, or melancholic reflection.'
  },
  {
    id: 'nostalgic',
    name: 'Nostalgic Longing',
    category: 'Melancholic, Sad & Nostalgic',
    description: 'A warm, sentimental longing or wistful affection for past times and moments.'
  },
  {
    id: 'despondent',
    name: 'Despondent & Heartbroken',
    category: 'Melancholic, Sad & Nostalgic',
    description: 'In low spirits from loss of hope or courage; feeling completely discouraged.'
  },
  {
    id: 'wistful',
    name: 'Wistful Yearning',
    category: 'Melancholic, Sad & Nostalgic',
    description: 'Gentle, contemplative desire mixed with subtle sadness for unfulfilled dreams.'
  },

  // --- Aggressive, Angry & Fiery ---
  {
    id: 'angry',
    name: 'Fiery Anger',
    category: 'Aggressive, Angry & Fiery',
    description: 'Driven by intense displeasure, hostility, or active, fiery indignation.'
  },
  {
    id: 'resentful',
    name: 'Resentful Bitterness',
    category: 'Aggressive, Angry & Fiery',
    description: 'Expressing bitterness or ongoing indignation at being treated unfairly.'
  },
  {
    id: 'rebellious',
    name: 'Rebellious Defiance',
    category: 'Aggressive, Angry & Fiery',
    description: 'Unapologetic, fierce opposition to authority, rules, or societal constraints.'
  },
  {
    id: 'annoyed',
    name: 'Irritated & Annoyed',
    category: 'Aggressive, Angry & Fiery',
    description: 'Slightly angry and irritated; plagued by minor but persistent frustrations.'
  },

  // --- Serene, Peaceful & Dreamy ---
  {
    id: 'peaceful',
    name: 'Peaceful & Tranquil',
    category: 'Serene, Peaceful & Dreamy',
    description: 'Quiet, calm, free from disturbance or inner turmoil; beautifully tranquil.'
  },
  {
    id: 'serene',
    name: 'Serene Stillness',
    category: 'Serene, Peaceful & Dreamy',
    description: 'Untroubled, perfectly clear, still, and calm; supreme majestic stillness.'
  },
  {
    id: 'dreamy',
    name: 'Dreamy Ethereal',
    category: 'Serene, Peaceful & Dreamy',
    description: 'Vague, pleasant, and floating in a soft state of ethereal, imaginative reverie.'
  },
  {
    id: 'intimate',
    name: 'Intimate Whisper',
    category: 'Serene, Peaceful & Dreamy',
    description: 'Close, quiet vocal presence like a secret whispered right beside the listener.'
  },

  // --- Mystical, Dramatic & Spiritual ---
  {
    id: 'dramatic',
    name: 'Dramatic Grandeur',
    category: 'Mystical, Dramatic & Spiritual',
    description: 'High theatrical tension, sweeping orchestral dynamics, and bold vocal climaxes.'
  },
  {
    id: 'mystical',
    name: 'Mystical & Ancient',
    category: 'Mystical, Dramatic & Spiritual',
    description: 'Shrouded in myth, ritualistic wonder, ancient folklore, and sacred atmosphere.'
  },
  {
    id: 'spiritual',
    name: 'Spiritual Transcendent',
    category: 'Mystical, Dramatic & Spiritual',
    description: 'Sacred chanting, deep soul resonance, and connection to higher cosmic dimensions.'
  },

  // --- Anxious, Dark & Melodramatic ---
  {
    id: 'anxious',
    name: 'Anxious & Tense',
    category: 'Anxious, Dark & Melodramatic',
    description: 'Unease, worry, or nervousness about an uncertain event or future.'
  },
  {
    id: 'gloomy',
    name: 'Gloomy Shadow',
    category: 'Anxious, Dark & Melodramatic',
    description: 'Dark, shadowed, and feeling a heavy spirit of oncoming despair or dim outlook.'
  },
  {
    id: 'terrified',
    name: 'Terrified Dread',
    category: 'Anxious, Dark & Melodramatic',
    description: 'Extreme, heart-pounding fear, dread, or an overwhelming sense of immediate danger.'
  },

  // --- Playful, Quirky & Whimsical ---
  {
    id: 'playful',
    name: 'Playful & Mischievous',
    category: 'Playful, Quirky & Whimsical',
    description: 'Lighthearted, bouncy, teasing, and full of infectious fun and humor.'
  },
  {
    id: 'quirky',
    name: 'Quirky & Eccentric',
    category: 'Playful, Quirky & Whimsical',
    description: 'Offbeat, unusual rhythmic cadence, unexpected melodic twists, and whimsical charm.'
  }
];

export function findEmotionById(id: string): Emotion | undefined {
  return SONG_EMOTIONS.find((e) => e.id === id);
}
