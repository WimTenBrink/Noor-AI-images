import { SINGERS_DETAILED, SingerDetailedProfile } from './singersDetailed';
import { StoryCharacter } from '../types';

export interface CoverArtPromptJobPayload {
  subjectId: string;
  subjectName: string;
  subjectType: 'singer' | 'character';
  sceneKey: 'base' | 'band1' | 'band2' | 'band3' | 'song1' | 'song2' | 'song3';
  sceneName: string;
  appearanceDetails: string;
  lyrics: string;
  songTitle: string;
  songStyle?: string;
}

export function getDefaultStoryCharacters(songTitle: string, lyrics: string): StoryCharacter[] {
  return [
    {
      id: 'char_1',
      name: 'Evelyn',
      species: 'Human female',
      description: 'An ethereal young woman matching the emotional cadence of the lyrics',
      age: '21',
      bodyShape: 'Slender athletic build with long lean legs',
      skinColor: 'Smooth warm fair skin with subtle radiance',
      hairColorStyle: 'Long flowing dark mahogany waves reaching down her back',
      details: 'Large deep amber eyes, delicate high cheekbones, soft rosy lips'
    },
    {
      id: 'char_2',
      name: 'Astra',
      species: 'Human female',
      description: 'A vibrant young woman expressing the atmospheric theme of the song',
      age: '22',
      bodyShape: 'Statuesque and graceful feminine posture',
      skinColor: 'Porcelain skin with a natural soft flush',
      hairColorStyle: 'Shoulder-length sun-gold blonde locks with natural beach waves',
      details: 'Bright sapphire blue eyes, expressive curved lips, slender waist'
    },
    {
      id: 'char_3',
      name: 'Dire Wolf Shadow',
      species: 'Mythical dire wolf',
      description: 'A majestic spiritual wolf beast companion reflecting the wild spirit of the song',
      age: 'Ancient',
      bodyShape: 'Broad muscular feline-canine chest',
      skinColor: 'Thick shimmering midnight-silver pelt coat with glowing moon-blue fur tips',
      hairColorStyle: 'Dense silver mane flowing along spine',
      details: 'Luminous golden amber eyes, fierce noble jawline, razor claws'
    }
  ];
}

export function buildCoverArtJobPrompt(payload: CoverArtPromptJobPayload): { prompt: string; systemInstruction: string } {
  const { subjectName, subjectType, sceneName, appearanceDetails, lyrics, songTitle, songStyle } = payload;

  const systemInstruction = `You are an expert AI image prompt generator for album cover art.
TASK: Generate a single album cover art storyboard prompt and scene description for "[Subject: ${subjectName}]" (${subjectType}) in scene "[Scene: ${sceneName}]" based on the song "${songTitle}".

SCENE DESIGN RULES:
1. **SCENE PURPOSE & DESCRIPTION**:
   - The scene title and description describes ONLY what the scene environment and atmosphere show.
   - For 'Base': Describe a clean, neutral atmospheric environment background setting.
   - For 'Band 1', 'Band 2', 'Band 3': Describe the singer during a live stage performance moment setting (e.g. Band 1, Band 2, or Band 3 moment).
   - For 'Song 1', 'Song 2', 'Song 3': Describe the character in a specific narrative scene derived directly from the lyrics.

PROMPT & PHRASING CONSTRAINTS:
1. **SUBJECT IDENTIFICATION & SPECIES**:
   - Refer to human female subjects as a "young woman". Do NOT mention the species "Human" or "Human female". ONLY mention species if the character is non-human (e.g., "Mythical dire wolf").
2. **NO MEASUREMENTS**:
   - Absolutely NO measurements in inches, feet, meters, or weight units (e.g. no "1.65 m", "58 kg"). Use descriptive natural descriptors like "slender athletic frame" or "statuesque posture".
3. **DO NOT DESCRIBE WHAT IS NOT THERE**:
   - Never say that they are not wearing clothes. Do NOT use words like "unclothed", "bare", "naked", or "without clothing".
   - Do NOT describe missing items or things that are absent. Only describe elements that ARE visually present in the scene. Only add, never describe removal!
4. **PROMPT STRUCTURAL ORDER**:
   - Physical description (Young woman / Non-human species -> hair color and style, eyes, skin tone, facial features, build) -> Scene Environment & Atmospheric Setting -> Technical quality parameters ("4k resolution, cinematic 16:9 widescreen, ultra-detailed photorealistic, masterpiece").
5. **SINGLE CHARACTER ONLY**:
   - Focus strictly on this ONE single subject (${subjectName}).

OUTPUT FORMAT:
Return a JSON object with:
{
  "title": "${sceneName} - ${subjectName}",
  "prompt": "Standard clean prompt string following exact order: Physical Subject -> Environment -> Quality. Max 1,500 characters in length. Do not mention clothing or absent items.",
  "sceneTitle": "${sceneName}",
  "description": "Multi-line scene description detailing ONLY the visual setting, lighting, and environment atmosphere for ${sceneName}.",
  "cleanPrompt": "Standard prompt following exact order: Physical Subject -> Environment -> Quality. Max 1,500 characters in length. Do not mention clothing or absent items.",
  "explicitPrompt": "NSFW prompt following exact order: Physical Subject with explicit anatomical details -> Environment -> Quality."
}
`;

  const prompt = `Generate cover art prompt for ${subjectName} (${subjectType}) in scene "${sceneName}".
Song Title: "${songTitle}"
Style: "${songStyle || 'Acoustic Folk'}"
Lyrics context:
${lyrics}
`;

  return { prompt, systemInstruction };
}
