export interface LoudnessLevelStep {
  level: number;
  label: string;
  description: string;
}

export const LOUDNESS_STEPS: LoudnessLevelStep[] = [
  { level: 0, label: "Silent Whispers (pPpp)", description: "Ultra-quiet ambient room breathing, softest vocal friction, near-zero sound projection." },
  { level: 1, label: "Faint Breeze (Ppp)", description: "Delicate acoustic tickling, barely audible finger-picking and soft head-voice hums." },
  { level: 2, label: "Bedtime Lullaby (Pp)", description: "Very quiet soothing singing, gentle room reverberation, soft acoustic cradle song." },
  { level: 3, label: "Subdued Piano (P)", description: "Soft acoustic piano touches, quiet vocal intimacy without heavy chest compression." },
  { level: 4, label: "Mellow Living Room", description: "Casual intimate acoustic volume, relaxing living room performance level." },
  { level: 5, label: "Gentle Coffeehouse", description: "Unamplified coffeehouse acoustic volume, comfortable conversational singing." },
  { level: 6, label: "Balanced Folk Ensemble", description: "Standard organic acoustic folk balance, clear unforced chest vocals." },
  { level: 7, label: "Moderate Pop Energy (Mf)", description: "Medium-loud vocal projection, crisp snare slaps, and active strumming." },
  { level: 8, label: "Bright Stage Projection", description: "Full room vocal projection, clear horn accents, and active bass lines." },
  { level: 9, label: "Punchy Radio Mix", description: "Strong compressed radio punch, crisp percussion, and vibrant lead presence." },
  { level: 10, label: "Driving Rock Pulse (F)", description: "Strong driving rhythm section, loud acoustic and electric guitars, energetic vocals." },
  { level: 11, label: "Symphonic Forte", description: "Full orchestral orchestra swell, roaring brass entries, and soaring choir." },
  { level: 12, label: "Stadium Anthem (Ff)", description: "High-power stadium projection, thundering drums, and belting lead vocals." },
  { level: 13, label: "Pounding Dancefloor", description: "Heavy sub-bass kicks, piercing synth leads, and high-decibel club energy." },
  { level: 14, label: "Roaring Arena Rock", description: "Explosive guitar stacks, crushing drum rimshots, and strained rock belt." },
  { level: 15, label: "Thunderous Brass Fanfare", description: "Blaring trumpets and trombones, pounding timpani, and soaring soprano opera." },
  { level: 16, label: "Fortississimo Peak (Fff)", description: "Colossal acoustic pressure, screaming vocal belts, and shattering percussion." },
  { level: 17, label: "Industrial Clanger", description: "Heavy metallic pistonic impact, distortion-driven vocals, and extreme punch." },
  { level: 18, label: "Heavy Metal Explosion", description: "Full wall of amplified Marshall stacks, roaring bass overdrive, and screaming vocals." },
  { level: 19, label: "Volcanic Eruption", description: "Booming bass sub-thumps, ear-splitting brass blasts, and primal war shouts." },
  { level: 20, label: "Sonic Boom Wave", description: "Rattling low-end acoustic shockwaves, soaring operatic screams, and max dynamics." },
  { level: 21, label: "Ear-Shattering Crescendo", description: "Overdriven acoustic saturation, extreme wall of sound, and ferocious choir shrieks." },
  { level: 22, label: "Deafening Thunderstorm", description: "Peak acoustic pressure level, crushing bass walls, and thunderous percussion." },
  { level: 23, label: "Cataclysmic Supernova", description: "Ultimate acoustic volume: roaring brass, screaming vocals, and maxed-out dynamic headroom." },
  { level: 24, label: "Absolute Decibel Meltdown", description: "The loudest conceivable sonic explosion! Unhinged volume, crushing bass, and roaring sirens!" }
];

export function getLoudnessStep(level: number): LoudnessLevelStep {
  const normalized = Math.max(0, Math.min(LOUDNESS_STEPS.length - 1, Math.round(level)));
  return LOUDNESS_STEPS[normalized];
}
