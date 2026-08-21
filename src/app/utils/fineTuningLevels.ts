export interface LevelStep {
  level: number;
  label: string;
  description: string;
}

// 25 levels for Vocabulary & Metaphor Complexity
export const COMPLEXITY_STEPS: LevelStep[] = Array.from({ length: 25 }, (_, i) => {
  const levelLabels = [
    "Toddler Simple (Basic 1-syllable words)",
    "Nursery Rhyme (Elementary phrasing)",
    "Simple Conversational (Everyday speech)",
    "Basic Pop Directness (Clear & transparent)",
    "Clean Commercial (Accessible metaphors)",
    "Radio Friendly (Light imagery)",
    "Casual Storytelling (Natural narrative)",
    "Modern Indie (Refined everyday words)",
    "Artistic Clarity (Thoughtful word choices)",
    "Poetic Pop (Polished metaphoric layers)",
    "Rich Narrative (Detailed literary descriptions)",
    "Chamber Lyricism (Sophisticated vocabulary)",
    "Traditional Folk Verse (Archaic flourishes)",
    "Literary Fiction (Dense evocative imagery)",
    "Classic Academic (Polysyllabic eloquence)",
    "Refined Contemporary (Polished lyrical diction)",
    "Intricate Lyrical Artistry (Rich rhetorical tropes)",
    "Enigmatic Symbolism (Deep allegorical riddles)",
    "Philosophical Treatise (Abstract concepts)",
    "Classical Metric Elegance (Structured iambic grandeur)",
    "Hermetic Cryptic (Obscure ancient motifs)",
    "Hyper-Literary Monologue (Densely woven verse)",
    "Neologism Synthesis (Inventive linguistic craft)",
    "Abstract Poetic Maze (Complex multi-layered prose)",
    "Apex Polyglot Eloquence (Maximum vocabulary complexity & poetic depth)"
  ];
  return {
    level: i,
    label: levelLabels[i] || `Complexity Level ${i + 1}`,
    description: `Level ${i + 1} of 25: Vocabulary depth step ${i + 1}. Fine-tunes verse metaphoric sophistication and word choice.`
  };
});

export function getComplexityStep(level: number): LevelStep {
  const norm = Math.max(0, Math.min(24, Math.round(level)));
  return COMPLEXITY_STEPS[norm];
}

// 25 levels for Chorus Repetitiveness
export const REPETITIVENESS_STEPS: LevelStep[] = Array.from({ length: 25 }, (_, i) => {
  const labels = [
    "Zero Repetition (Never repeats a line)",
    "Through-Composed Flow (Non-repeating narrative)",
    "Minimal Refrain (Passing 1-line echo)",
    "Subtle Theme Anchor (Slight motif return)",
    "Casual Hook (Light chorus return)",
    "Standard Pop Structure (2x chorus repeat)",
    "Catchy Radio Hook (Memorable refrain)",
    "Earworm Melody (Sticky repeating lines)",
    "Heavy Dance Anthem (3x chorus repeat)",
    "Hypnotic Chant (Rhythmic repeating phrase)",
    "Mantra Pulse (Continuous core mantra)",
    "Relentless Groove (High-frequency hook)",
    "Looping Resonance (Rhythmic chorus lock)",
    "Trance Echo (Repeated vocal motif)",
    "Club Anthem Stomp (Pounding hook iteration)",
    "Pagan Refrain (Community choir mantra)",
    "Obsessive Focus (Single line recurring constantly)",
    "Ethereal Drone Repetition (Hypnotic loop)",
    "Mantra Overdrive (Lyrical repetitive wave)",
    "Hyper-Hook Saturation (Chorus dominates song)",
    "Non-Stop Refrain (80% chorus content)",
    "Hypnotic Vocal Loop (Continuous singing lock)",
    "Relentless Mantra Wave (Overpowering hook repetition)",
    "Infinite Refrain Loop (Maximum chorus persistence)",
    "Apex Catchy Loop (Ultimate hypnotic hook repetition)"
  ];
  return {
    level: i,
    label: labels[i] || `Repetitiveness Level ${i + 1}`,
    description: `Level ${i + 1} of 25: Controls chorus frequency, earworm stickiness, and lyrical repetition.`
  };
});

export function getRepetitivenessStep(level: number): LevelStep {
  const norm = Math.max(0, Math.min(24, Math.round(level)));
  return REPETITIVENESS_STEPS[norm];
}

// 25 levels for Harmonic Density
export const HARMONICS_STEPS: LevelStep[] = Array.from({ length: 25 }, (_, i) => {
  const labels = [
    "Solo Unison Voice (Single naked voice line)",
    "Delicate Doubling (Light double-track voice)",
    "Intimate Duo (2-part close acoustic harmony)",
    "Trio Resonance (3-part folk triad)",
    "Chamber Quartet (4-part vocal blend)",
    "Full Band Backing (Standard chorus harmonies)",
    "Rich Folk Chorale (5-part acoustic harmony)",
    "Lush Vocal Layering (Dense vocal stacks)",
    "Cathedral Choir (Soprano/Alto/Tenor/Bass blend)",
    "Polyphonic Gospel (Resonant call-response stacks)",
    "Angelic Overtones (Floating high vocal layers)",
    "Gothic Cathedral Choir (Massive vocal wall)",
    "Operatic Ensemble (Dramatic multi-singer chorale)",
    "Symphonic Vocal Stack (Densely layered octaves)",
    "Ethereal Siren Waves (Infinite vocal overtones)",
    "Pagan Ritual Choir (Thick throat-chanting layers)",
    "Wall of Vocal Sound (Overdriven vocal multi-tracks)",
    "Cosmic Choral Wave (Dense cluster harmonies)",
    "Celestial Polyphony (Ornate microtonal layers)",
    "Sovereignty Ensemble (Resonant matriarchal choir)",
    "Hyper-Dense Choir (32-track vocal orchestration)",
    "Heavenly Overtone Grid (Extreme vocal layering)",
    "Thundering Voice Wall (Maximum acoustic choir density)",
    "Omnipresent Choir (Full vocal spectrum saturation)",
    "Apex Choral Infinity (Ultimate harmonic vocal density & overtone stack)"
  ];
  return {
    level: i,
    label: labels[i] || `Harmonics Level ${i + 1}`,
    description: `Level ${i + 1} of 25: Adjusts vocal layering, chorale depth, and harmony complexity.`
  };
});

export function getHarmonicsStep(level: number): LevelStep {
  const norm = Math.max(0, Math.min(24, Math.round(level)));
  return HARMONICS_STEPS[norm];
}

// 25 levels for Acoustic Reverb Space
export const REVERB_STEPS: LevelStep[] = Array.from({ length: 25 }, (_, i) => {
  const labels = [
    "Anchoic Chamber (Zero room reflection)",
    "Dry Studio Vocal (Crisp up-front dry voice)",
    "Small Wooden Room (Cozy acoustic cabin)",
    "Living Room Warmth (Natural residential space)",
    "Acoustic Parlor (Intimate wooden parlor)",
    "Folk Studio Booth (Clean acoustic studio space)",
    "Spacious Hall (Polished concert hall decay)",
    "Large Theatre (Warm auditorium acoustics)",
    "Stone Church (Traditional parish reflections)",
    "Barn Studio (High ceiling wooden acoustics)",
    "Grand Ballroom (Sweeping polished decay)",
    "Cathedral Nave (3-second cathedral tail)",
    "Gothic Basilica (Deep stone arch echo)",
    "Mountain Canyon (Long natural outdoor tail)",
    "Subterranean Cavern (Echoing stone cavern)",
    "Glacial Glacier Cavern (Crisp icy reflections)",
    "Abbey Cathedral Hall (5-second lush reverb)",
    "Ethereal Void (Floating infinite space delay)",
    "Cosmic Abyss (Deep ambient space reverb)",
    "Pagan Stone Circle (Open sky stone reflections)",
    "Oceanic Abyss (Deep submerged reverberation)",
    "Infinite Hallway (8-second lingering tail)",
    "Omnipresent Echo (Massive spatial diffusion)",
    "Transcendent Reverberation (Extreme acoustic space)",
    "Apex Spatial Infinity (Ultimate cathedral echo & infinite space tail)"
  ];
  return {
    level: i,
    label: labels[i] || `Reverb Level ${i + 1}`,
    description: `Level ${i + 1} of 25: Controls room acoustics, cathedral reflections, and spatial echo.`
  };
});

export function getReverbStep(level: number): LevelStep {
  const norm = Math.max(0, Math.min(24, Math.round(level)));
  return REVERB_STEPS[norm];
}

// 25 levels for Prompt Strictness
export const STRICTNESS_STEPS: LevelStep[] = Array.from({ length: 25 }, (_, i) => {
  const labels = [
    "Wild Improvisation (AI takes total creative freedom)",
    "Abstract Inspiration (Very loose adherence)",
    "Free Spirit (General theme guidance)",
    "Creative Interpretation (Flexible prompt adherence)",
    "Balanced Freedom (Standard creative latitude)",
    "Guided Direction (Follows main prompt themes)",
    "Structured Adherence (Respects core directives)",
    "Polished Alignment (Follows instructions closely)",
    "Faithful Rendering (Strict adherence to guidelines)",
    "High Precision (Follows prompt & dialect rules)",
    "Rigid Directive (Enforces exact guidelines)",
    "Exact Blueprint Alignment (Strict structural obedience)",
    "Zero Deviation (Follows all directives literally)",
    "Total Blueprint Adherence (Maximum prompt obedience)",
    "Ironclad Compliance (Strict enforcement of all parameters)",
    "Pedantic Precision (Verbatim execution of prompt keywords)",
    "Absolute Blueprint Locking (Unwavering directive adherence)",
    "Literal Translation (Zero room for AI drift)",
    "Dogmatic Rule Enforcement (Strict constraint validation)",
    "Flawless Execution (Precision prompt rendering)",
    "Impervious Locking (Total prompt parameter adherence)",
    "Uncompromising Obedience (Absolute rule enforcement)",
    "Supreme Directive Supremacy (Pure literal AI alignment)",
    "Total Control Master (Complete parameter obedience)",
    "Apex Absolute Prompt Lock (Ultimate 100% strict adherence to all rules)"
  ];
  return {
    level: i,
    label: labels[i] || `Strictness Level ${i + 1}`,
    description: `Level ${i + 1} of 25: Controls how strictly the AI adheres to all entered directives and rules.`
  };
});

export function getStrictnessStep(level: number): LevelStep {
  const norm = Math.max(0, Math.min(24, Math.round(level)));
  return STRICTNESS_STEPS[norm];
}
