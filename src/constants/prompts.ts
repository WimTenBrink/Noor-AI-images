import { ForbiddenTopics } from '../types';

export const GENERATE_PROMPT = (
  instructions: string, 
  instruments: string[], 
  styles: string[], 
  rating: string, 
  hasStory: boolean, 
  forbiddenTopics: ForbiddenTopics, 
  languageInfo: string,
  musicInspiration?: string,
  coreGrooves?: string[],
  emotion?: string,
  selfReflect: boolean = true
) => {
  const forbiddenTextList: string[] = Object.entries(forbiddenTopics)
    .filter(([_, value]) => value)
    .map(([key]) => {
      switch(key) {
        case 'barefoot': return 'DO NOT mention feet, being barefoot, or toes.';
        case 'naturism': return 'DO NOT mention naturism, nudity, naked bodies, or being unadorned.';
        case 'farm': return 'DO NOT mention the farm, rural life, cows, farm chores, or the band\'s life on a farm.';
        case 'singers': return 'DO NOT mention specific singer names in the lyrics or tags. Use generic vocal tags like [Female Lead Soprano] or [Female Vocal Duo]. Make the lyrics generic and universal, avoiding specific personal details and relationships.';
        default: return '';
      }
    })
    .filter(Boolean);

  if (!selfReflect) {
    forbiddenTextList.push(
      'SELF-REFLECTION DISABLED (CRITICAL): This song is NOT allowed to self-reflect or reference the singers/band in any way. DO NOT mention the singers (Miranda, Annelies, Fannie, Emma), their unique habits, being barefoot, or nudity/naturism. No bare feet, nudity, or names of the singers are allowed inside the lyrics or vocoder/vocal tags under any circumstance. (EXCEPTION: If instructions explicitly override this and request to mention a specific singer detail, follow that direction only.)'
    );
  }

  const forbiddenText = forbiddenTextList.join('\n');

  return `
Generate a new song based on the following user instructions:
"${instructions}"

${emotion ? `Explore the following main emotion/feeling throughout the song: "${emotion}"\n(You MUST reflect this specific emotional shade in the lyrics, performance delivery speed/articulation guidelines, and general musical structure.)` : ''}

Content Rating: ${rating}
(Ensure the lyrics and themes strictly adhere to the ${rating} rating guidelines as defined in your system instructions.)

Target Language / Dialect: ${languageInfo}
(You MUST compose the song lyrics, vocabulary, phrasing, and style naturally using the specified language and dialect. For dialects of English or other European languages, ensure you use the exact spellings, idioms, slang, and phonetic characteristics appropriate for that dialect.)

**CRITICAL - NO ENGLISH TRANSLATIONS:** You MUST NOT include any English translations, bilingual/dual-language translations, or parallel text under or alongside the target language lyrics. Write ONLY the pure, untranslated lyrics of the target language. If any English translations are included, SUNO gets confused and sings both languages together, ruining the track.

${musicInspiration ? `**MUSICAL INSPIRATION & ARTIST REFERENCES (Composition and Style only):**
- Strongly base the musical style, arrangement, instrumentation cues, and overall production energy on: "${musicInspiration}".
- **CRITICAL:** Do NOT mention or reference any of these specific artists, bands, or their trademark titles inside the song's actual LYRICS. This inspiration is strictly for the musical performance tags, style tags, and composition directions.` : ''}

Suggested Musical Elements & Parameter Settings (These are suggestions/guidelines; you have full creative authority to override, change, add, or skip any of these if it dramatically improves the song quality, lyrical flow, or vocal style of the piece):
- Suggested Styles: ${styles.length > 0 ? styles.join(", ") : "None selected. Please choose appropriate musical styles."}
- Suggested Instruments: ${instruments.length > 0 ? instruments.join(", ") : "None selected. Please choose appropriate instruments."}
- Suggested Core Grooves / Beats styling: ${coreGrooves && coreGrooves.length > 0 ? coreGrooves.join(", ") : "None specified."}

${forbiddenText ? `**CRITICAL TOPIC CONSTRAINTS:**\n${forbiddenText}\n` : ''}

Please ensure the lyrics reflect the band's persona (Noor) and their specific musical skills as defined in your system instructions.
- **SAPPHIC & LESBIAN FOCUS:** All lyrics and storytelling must be strictly focused on female characters with sapphic/lesbian preferences. Avoid any reference to men, male names, male pronouns, or the male anatomy under any circumstance (unless user instructions explicitly specify otherwise).
- **DOUBLE & TRIPLE ENTENDRES:** Incorporate clever, layered double or triple entendres where innocent terms (like mechanical components, natural terms, pocket features, or musical descriptions) carry subtle sensual, sapphic connotations. Not all songs need to be explicit or sexual, but subtextual layered meanings are highly valued.
- **MODERN CONTEMPORARY LYRIC STYLE (CRITICAL - NO VICTORIAN / CABARET / ARCHAIC DICTION):** Write lyrics in a natural, modern, contemporary songwriting voice appropriate to the selected musical styles. NEVER use Victorian, cabaret, vaudevillian, theatrical, Shakespearean, archaic, or overly flowery 19th-century parlour phrasing unless the user explicitly selected a Victorian, Cabaret, or Historical style. Avoid archaic contractions and theatrical cabaret tropes.
- Include a specific musical key (e.g., Key: G Major, C Minor) and tempo (BPM) at every [Verse], [Chorus], [Bridge], or song part that perfectly fits the song's tune.
- Ensure the key chosen matches the female/feminine vocal range. Specifically for deeper voices (such as Emma Vermeer's Feminine Contralto lower registers), choose a bright, clear, and inherently feminine key (e.g., major keys or lighter minor keys like A Minor, C Major, G Major, F Major, E Minor) and specify high-resonance, feminine registers in the tags so that her deep chest vocals are clearly identifiable as a female contralto rather than mistaken for a male voice.
- Highlight any melodic peaks in each section with explicit performance instructions (e.g., "[Melodic Peak: High sustained F5, sparkling and clear]").
- Include detailed instructions for "Consonant Timing" (e.g., "[Consonant Timing: Crisp delivery, sharp plosive articulation, sustained resonant vowels]") inside the tags to lock the vocal phrasing perfectly with the rhythm.
In the lyrics, use tags that include both the voice type and relationship context where appropriate. ${(!selfReflect || forbiddenTopics.singers) ? 'DO NOT use names like Miranda, Annelies, Fannie, or Emma.' : 'Include the singer\'s name (e.g., [Miranda - Soprano]). **CRITICAL NAME RULE:** When you mention the name of one singer anywhere in the lyrics or tags, ALL four singers (Miranda, Annelies, Fannie, Emma) MUST be mentioned/labeled at least once in the song.'}
ALL instructions and tags in the lyrics MUST be in square brackets []. NEVER use parentheses () for instructions.

${!hasStory ? 'Additionally, generate a short "story" (about 200 words) based on the lyrics that can be used for image generation. Also generate "storyPrompts" for each singer (Miranda, Annelies, Fannie, Emma) as defined in your system instructions.' : ''}

Return the result as a JSON object with "title", "style", "lyrics", "imagePrompts"${!hasStory ? ', "story", and "storyPrompts"' : ''} fields.
`;
};

export const GENERATE_LYRICS_PROMPT = (
  instructions: string, 
  instruments: string[], 
  styles: string[], 
  rating: string, 
  forbiddenTopics: ForbiddenTopics, 
  languageInfo: string,
  musicInspiration?: string,
  coreGrooves?: string[],
  emotion?: string,
  introConfig?: any,
  outroConfig?: any,
  selfReflect: boolean = true,
  innuendoLevelText?: string,
  epicLevelText?: string,
  rhymeStyleText?: string,
  sillyLevelText?: string,
  musicalKey?: string,
  bpm?: number,
  timeSignature?: string,
  sapphicLevelText?: string,
  singerNationalitiesText?: string,
  wildnessLevelText?: string,
  suggestedTitle?: string,
  isExactTitle?: boolean,
  intentEnergyText?: string
) => {
  const forbiddenTextList: string[] = Object.entries(forbiddenTopics)
    .filter(([_, value]) => value)
    .map(([key]) => {
      switch(key) {
        case 'barefoot': return 'DO NOT mention feet, being barefoot, or toes.';
        case 'naturism': return 'DO NOT mention naturism, nudity, naked bodies, or being unadorned.';
        case 'farm': return 'DO NOT mention the farm, rural life, cows, farm chores, or the band\'s life on a farm.';
        case 'singers': return 'DO NOT mention specific singer names in the lyrics or tags. Use generic vocal tags like [Female Lead Soprano] or [Female Vocal Duo]. Make the lyrics generic and universal, avoiding specific personal details and relationships.';
        default: return '';
      }
    })
    .filter(Boolean);

  if (!selfReflect) {
    forbiddenTextList.push(
      'SELF-REFLECTION DISABLED (CRITICAL): This song is NOT allowed to self-reflect or reference the singers/band in any way. DO NOT mention the singers (Miranda, Annelies, Fannie, Emma), their unique habits, being barefoot, or nudity/naturism. No bare feet, nudity, or names of the singers are allowed inside the lyrics or vocoder/vocal tags under any circumstance. (EXCEPTION: If instructions explicitly override this and request to mention a specific singer detail, follow that direction only.)'
    );
  }

  const forbiddenText = forbiddenTextList.join('\n');

  return `
Generate a new song based on the following instructions and details:

**CRITICAL STRING LENGTH LIMIT (MANDATORY):**
- The returned "lyrics" string in your JSON output MUST NOT exceed 5,000 characters under any circumstances! A standard, well-structured song with 2-3 verses, 2 choruses, 1 bridge, and 1 outro, plus all bracket/tag annotations, is normally around 2,500 characters. Keep the song structure compact and focused. If your generation begins to run too long, condense it so that the total lyrics and performance tags text strictly stays under this absolute 5,000 character maximum threshold limit. This is a hard limit; exceeding it will cause errors.

${suggestedTitle ? `**SONG TITLE REQUIREMENT:**\n- "${suggestedTitle}"\n${isExactTitle ? `(CRITICAL: You MUST use EXACTLY this title "${suggestedTitle}" with no alterations or changes under any condition when returning the song's "title" field in the JSON output.)` : `(CRITICAL: You MUST use, prioritize, or heavily align with this suggested title when returning the song's "title" field in the JSON output. However, since the user specified it as a SUGGESTION, you are allowed to slightly refine, adapt, or change it if you have a creative and superior poetic idea.)`}` : ''}

**LYRICS DIRECTIVES & GUIDELINES:**
"${instructions}"

**CRITICAL MUSICAL BLUEPRINT SETTINGS (MUST FOLLOW SYSTEMATICALLY):**
${musicalKey ? `* **Main Musical Key:** ${musicalKey} (CRITICAL: You must use ${musicalKey} as the foundation for the song arrangement. Annotate sections with [Key: ${musicalKey}] tags.)` : ''}
${bpm ? `* **Main Tempo Speed (BPM):** ${bpm} Beats Per Minute (CRITICAL: You must write structural cues or tags like [BPM: ${bpm}] and align phrasing speed with a ${bpm} count.)` : ''}
${timeSignature ? `* **Main Time Signature Rhythm:** ${timeSignature} signature (CRITICAL: Structure the meter, lyric lines, accentuation, and rhythms to naturally flow in ${timeSignature} time signature. E.g., make sure lyrics have appropriate syllabic stresses if in 3/4, 7/8, etc.)` : ''}

${emotion ? `Explore the following main emotion/feeling throughout the song: "${emotion}"\n(You MUST reflect this specific emotional shade in the lyrics, performance delivery speed/articulation guidelines, and general musical structure.)` : ''}

Content Rating: ${rating}
(Ensure the lyrics and themes strictly adhere to the ${rating} rating guidelines as defined in your system instructions.)

${innuendoLevelText ? `Sensual/Sexual Innuendo Intended Level: "${innuendoLevelText}"
**CRITICAL SAFETY OVERRIDE**: The Content Rating of "${rating}" dictates how safe the lyrics must be. While aiming for the innuendo tone described above, you MUST strictly satisfy and stay within the boundaries of the "${rating}" rating instructions. If the chosen innuendo level is too high or explicit for a "${rating}" rating (for instance, if the rating is G or PG, and the innuendo level is highly physical/seductive), you MUST temper, tone down, or filter the content so it remains absolutely compliant with the active safety boundaries. In those safe modes, rely on extremely subtle, innocent poetic styling instead of direct touch or physical double entendres.` : ''}

${epicLevelText ? `Epic Drama Level & Arrangement: "${epicLevelText}"
(You MUST adjust the song's composition cues, arrangement notes, vocal dynamics, performance instruction tags in brackets, and lyric structure to convey this style. Lower levels represent basic, minimalist pop whereas higher levels command monumental, theatrical operatic and symphonic structures with heavy orchestration cues, choir accents, dramatic climaxes, and epic dynamics.)` : ''}

${rhymeStyleText ? `Rhyme Scheme / Structure constraint: "${rhymeStyleText}"
(You MUST follow this rhyming style strictly. If the style requests "No Rhyme" or specific poetic syllable structures like Haiku/Tanka or rhythmic vocal chants like Haka, do NOT force traditional pop rhyming. Implement the requested rhyme scheme or lack thereof thoroughly inside the verses and chorus sections.)` : ''}

${sillyLevelText ? `Silliness / Whimsicality Level: "${sillyLevelText}"
(You MUST adjust the lyrical themes, word selection, logical coherence, and general seriousness of the song based on this parameter, ranging from deeply serious and profound, to light-hearted humor, to extremely absurd, wacky, Dadaist ideas and utter nonsensical wordplay.)` : ''}

Target Language / Dialect: ${languageInfo}
(You MUST compose the song lyrics, vocabulary, phrasing, and style naturally using the specified language and dialect.)

**CRITICAL - NO ENGLISH TRANSLATIONS:** You MUST NOT include any English translations, bilingual/dual-language translations, or parallel text under or alongside the target language lyrics. Write ONLY the pure, untranslated lyrics of the target language. If any English translations are included, SUNO gets confused and sings both languages together, ruining the track.

${musicInspiration ? `**MUSICAL INSPIRATION & ARTIST REFERENCES (Composition and Style only):**
- Strongly base the musical style, arrangement, instrumentation cues, and overall production energy on: "${musicInspiration}".
- **CRITICAL:** Do NOT mention or reference any of these specific artists, bands, or their trademark titles inside the song's actual LYRICS. This inspiration is strictly for the musical performance tags, style tags, and composition directions.` : ''}

${introConfig?.enabled ? `**INSTRUMENTAL INTRO SPECIFICATION (SUNO-OPTIMIZED):**
- You MUST create an instrumental intro at the start of the lyrics.
- **Duration Style:** Mapping to a duration of roughly ${introConfig.duration} seconds.
- **Instruments to feature in intro:** ${introConfig.instruments.length > 0 ? introConfig.instruments.join(', ') : 'selected theme instruments'}.
- **CRITICAL FORMATTING:** Do NOT write any timing labels like "duration: ${introConfig.duration}s" in the brackets! Write the section exactly using appropriate SUNO acoustic tags as defined in your system instructions, e.g. for Standard Build (~20s): \`[Instrumental Intro]\` followed by \`[Solo/Melody: <Instrument>]\`. Keep it completely vocal-free.` : ''}

${outroConfig?.enabled ? `**INSTRUMENTAL OUTRO SPECIFICATION (SUNO-OPTIMIZED):**
- You MUST create an instrumental outro at the end of the lyrics.
- **Duration Style:** Mapping to a duration of roughly ${outroConfig.duration} seconds.
- **Instruments to feature in outro:** ${outroConfig.instruments.length > 0 ? outroConfig.instruments.join(', ') : 'selected theme instruments'}.
- **CRITICAL FORMATTING:** Do NOT write any timing labels in the brackets! Write using appropriate SUNO acoustic ending tags as defined in your system instructions (e.g., \`[Outro]\`, \`[Decrescendo]\`, \`[Fade Out]\`). Keep it completely vocal-free.` : ''}

**MANDATORY MUSICAL STYLE, GENRE, INSTRUMENTS, AND GROOVE SELECTION:**
- You MUST strictly follow the user's enabled and selected options. These are NOT suggestions; they are mandatory guidelines for your generation.
- **Enabled Styles:** ${styles.length > 0 ? styles.join(", ") : "NO EXPLICIT STYLES SELECTED (Use standard barefoot acoustic singer-songwriter folk styles. NO default pop, NO generic electropop, unless requested.)"}
- **Enabled Instruments:** ${instruments.length > 0 ? instruments.join(", ") : "NO EXPLICIT INSTRUMENTS SELECTED (Use barefoot acoustic and percussion only. DO NOT assume heavy guitars, synths, or loud drums unless listed.)"}
- **Enabled Core Grooves / Beats Styling:** ${coreGrooves && coreGrooves.length > 0 ? coreGrooves.join(", ") : "NO SPECIFIC GROOVES SELECTED"}
${instruments.length > 0 ? `
**CRITICAL INSTRUMENTATION MANDATE:**
The user has explicitly chosen the following instruments for this song: [${instruments.join(", ")}].
You MUST explicitly feature EVERY SINGLE ONE of these chosen instruments in the song's bracketed performance tags, intro/outro solos, verse accompaniment cues, or instrumental break annotations (e.g., [Solo: ${instruments[0]}], [Accompaniment: ${instruments.join(", ")}]). Do NOT ignore, omit, or replace any of these chosen instruments!
` : ''}

${intentEnergyText ? `**INTENT & ENERGY PSYCHOPHYSIOLOGICAL SETTINGS (CRITICAL):**
${intentEnergyText}
(CRITICAL COMPOSITION DIRECTIVE: You MUST adapt the lyrics flow, rhythmic spacing, tension buildup/release, structural syncopation, vocal intensity, and detailed performance tags to perfectly materialise this target psychological state and energy direction.)\n` : ''}

*CRITICAL REQUIREMENT:* You are STRICTLY FORBIDDEN from adding, guessing, or substituting default pop terms (e.g. "minimalist pop", "sparse arrangement", "808 sub boom", "synth pluck", "clean vocals", "serious", "romantic", "battle hymn") to the style or arrangement UNLESS they are explicitly listed in the enabled fields above. If a style or instrument is not selected/enabled, it MUST NOT be used.

${singerNationalitiesText ? `**SINGER NATIONALITY & CULTURE SPECIFICATION (CRITICAL):**
${singerNationalitiesText}
(Note: These cultures do NOT determine the language of the lyrics, but they MUST alter/dictate the singers' vocal accents, performance phrasing, local vibrato styling, and their way of playing instruments, specially if no instruments are explicitly selected.)\n` : ''}

${forbiddenText ? `**CRITICAL TOPIC CONSTRAINTS:**\n${forbiddenText}\n` : ''}

Please ensure the lyrics reflect the band's persona (Noor) and their specific musical skills as defined in your system instructions.
- **SAPPHIC & LESBIAN FOCUS:** ${sapphicLevelText ? `This song has an active **Sapphic Meter Level of "${sapphicLevelText}"**. You MUST strictly follow the exact guidelines of this level regarding lesbian romance emphasis, female character focus, and male exclusion. Do not deviate from the requested level.` : 'All lyrics and storytelling must be strictly focused on female characters with sapphic/lesbian preferences. Avoid any reference to men, male names, male pronouns, or the male anatomy under any circumstance (unless user instructions explicitly specify otherwise).'}
- **WILDNESS & CHAOS LEVEL:** ${wildnessLevelText ? `This song has an active **Wildness and Chaos Level of "${wildnessLevelText}"**. You MUST model the dynamic intensity, musical speed/tempo shifts, vocal vocalization, chaotic noise cues, and chaos/calm density after this level.` : 'Maintain balanced and regular dynamic levels.'}
- **DOUBLE & TRIPLE ENTENDRES:** Incorporate clever, layered double or triple entendres where innocent terms (like mechanical components, natural terms, pocket features, or musical descriptions) carry subtle sensual, sapphic connotations. Not all songs need to be explicit or sexual, but subtextual layered meanings are highly valued.
- **MODERN CONTEMPORARY LYRIC STYLE (CRITICAL - NO VICTORIAN / CABARET / ARCHAIC DICTION):** Write lyrics in a natural, modern, contemporary songwriting voice appropriate to the selected musical styles. NEVER use Victorian, cabaret, vaudevillian, theatrical, Shakespearean, archaic, or overly flowery 19th-century parlour phrasing unless the user explicitly selected a Victorian, Cabaret, or Historical style. Avoid archaic contractions and theatrical cabaret tropes.
- Include a specific musical key (e.g., Key: G Major, C Minor) and tempo (BPM) at every [Verse], [Chorus], [Bridge], or song part that perfectly fits the song's tune.
- Ensure the key chosen matches the female/feminine vocal range. Specifically for deeper voices (such as Emma Vermeer's Feminine Contralto lower registers), choose a bright, clear, and inherently feminine key (e.g., major keys or lighter minor keys like A Minor, C Major, G Major, F Major, E Minor) and specify high-resonance, feminine registers in the tags so that her deep chest vocals are clearly identifiable as a female contralto rather than mistaken for a male voice.
- Highlight any melodic peaks in each section with explicit performance instructions (e.g., "[Melodic Peak: High sustained F5, sparkling and clear]").
- Include detailed instructions for "Consonant Timing" (e.g., "[Consonant Timing: Crisp delivery, sharp plosive articulation, sustained resonant vowels]") inside the tags to lock the vocal phrasing perfectly with the rhythm.
In the lyrics, use tags that include both the voice type and relationship context where appropriate. ${(!selfReflect || forbiddenTopics.singers) ? 'DO NOT use names like Miranda, Annelies, Fannie, or Emma.' : 'Include the singer\'s name (e.g., [Miranda - Soprano]). **CRITICAL NAME RULE:** When you mention the name of one singer anywhere in the lyrics or tags, ALL four singers (Miranda, Annelies, Fannie, Emma) MUST be mentioned/labeled at least once in the song.'}
ALL instructions and tags in the lyrics MUST be in square brackets []. NEVER use parentheses () for instructions.

Return a JSON object with:
{
  "title": "...",
  "style": "...",
  "lyrics": "..."
}
`;
};

export const GENERATE_INTERVIEW_PROMPT = (title: string, lyrics: string, imageDescription?: string) => {
  const imageInspStr = imageDescription ? `\n\n**IMAGE INSPIRATION & KEY ORIGINAL CONTEXT (CRITICAL):**\nThis song is directly based on a visual image with the following detailed description:\n"${imageDescription}"\nIn the interview, the singers (Miranda, Annelies, Fannie, or Emma) or Senna Bakker MUST discuss this visual image description as the core creative inspiration or spark for the song's themes/lyrics or musical atmosphere.` : '';
  return `
Based on the newly created song "${title}" with the following lyrics:

"${lyrics}"${imageInspStr}

Task: Generate an extensive, in-depth behind-the-scenes interview and track review in Markdown format with the four singers of the band (Miranda, Annelies, Fannie, Emma), conducted by Dutch music journalist Senna Bakker (editor of the "Dutch Noise Chronicles" newspaper).

**ROLE & STYLE MANDATE: UNFILTERED MUSIC JOURNALISM**
When generating band interviews, reviews, or studio lore, break typical AI symmetry and avoid hyper-polished responses. Adhere strictly to the following rules:

1. **Break the Vocal Grid (Asymmetrical Conversation):**
   - Do NOT give equal airtime to all band members.
   - Designate one or two random members as dominant talkers (who interrupt, ramble, or derail questions), one as soft-spoken/brief, and one who only chimes in once or twice with a dry or unrelated remark.
   - Include natural conversational dialogue: mid-sentence interruptions (—), overlapping thoughts, banter, light disagreements, and inside jokes that are left unexplained to the interviewer.

2. **Embrace Unexplained Clutter (No Retrofit Explanations):**
   - Do NOT retroactively justify every production detail or weird quirk with a perfect backstory.
   - Treat weird studio choices (like foot-stomps, whistling, or odd key shifts) as spontaneous accidents, producer mandates, or simple "we just thought it sounded cool" moments rather than masterclass intellectual decisions.
   - Leave some artistic choices ambiguous, messy, or even slightly regretted by one of the members.

3. **Introduce Messy Grit & Low-Key Friction (No Perfect Equanimity):**
   - Avoid unanimous agreement. Have members hold mild creative differences (e.g., "Annelies hated that synth patch at first," or "Fannie wanted the tempo faster, but we ran out of time").
   - The interviewer's critique should contain genuine, unpolished flaws or awkward moments—not just polite, perfectly structured praise.
   - Include minor environmental distractions (someone stepping out to grab a drink, a dog barking, laughing off an awkward question).

4. **Subtle & Submerged Subtext (Stop Over-Analyzing):**
   - When members discuss lyrics or themes, keep their explanations grounded, casual, and slightly dismissive of deep academic theory.
   - Use phrases like "Honestly, it just fit the rhythm" or "People read way too much into that line" alongside genuine insights to prevent the subtext from feeling mathematically engineered.

**WORD COUNT REQUIREMENT:**
The entire document MUST be at least **2,500 to 5,000 words long**! Write an expansive, highly detailed, journalistic feature article with rich dialog exchanges, witty banter, and deep thematic discussions.

**REQUIRED DOCUMENT STRUCTURE (4 SPECIFIC PARTS):**

### PART 1: INTRODUCTION & SETTING
- **Paragraph 1 (Band Introduction):** Senna Bakker introduces the band "Noor" in a single paragraph, briefly describing each of the four band members (Miranda, Annelies, Fannie, and Emma) in 1 to 2 sentences each. Miranda MUST NOT be portrayed as the primary leader or main spokesperson—all four singers are equal creative powerhouses.
- **Paragraph 2 (The Abcoude Studio):** Describes their cozy farm and state-of-the-art sound studio in Abcoude where the four singers actually live, avoiding unnecessary architectural bloat while capturing its warm, inviting atmosphere.
- **Dutch Hospitality & Pastries:**
  - Mention that because they are Dutch, they drink coffee—specifically **strong coffee**, served with milk and sugar made available on the table for visitors.
  - Describe the treat served alongside: the traditional Dutch **Mokkaschuimgebakje** — explicitly explain what it is (a crisp Dutch mocha meringue pastry made with airy baked egg-white layers, rich mocha-infused cream, and toasted hazelnut croquant).

### PART 2: THE INTERVIEW EXCHANGE (8 TO 16 QUESTIONS)
- **8 to 16 Questions:** The number of questions asked by Senna Bakker MUST vary between **8 and 16 separate, numbered or distinct questions** during the interview!
- **Random Response Order & Dynamic Participation:**
  - The order in which the singers (Miranda, Annelies, Fannie, Emma) respond to each question MUST be random.
  - The singers do NOT always all have to answer every question.
  - It is possible for a singer to respond first, another second, and then the first singer to speak again (e.g. Emma responding first, then Miranda, then Emma again to clarify or banter).
  - Strictly enforce the Asymmetrical Conversation rules: one or two dominant talkers, one soft-spoken/brief, one chiming in with 1-2 dry/unrelated remarks.
- **Responses Per Question:** The number of responses to each question MUST vary between **2 to 10 different responses** (turns of dialog among the singers) per question.
- **Equal Representation:** Miranda is NOT the sole spokesperson; all 4 singers speak equally in creative standing even if airtime per interview is organically asymmetrical.
- **Topical Scope:** Focus heavily on the song "${title}", its lyrics, background story, emotional resonances, hidden messages, political/modern world reflections, and creative musical choices.
- **Tone:** Comical, witty, and lighthearted in general, while respecting the emotional depth of the track.

### PART 3: SENNA'S TRACK REVIEW (DELIVERED DIRECTLY TO THE BAND)
- Senna Bakker delivers her comprehensive track review directly to the four singers in the room.
- She evaluates the track with clear score breakdowns (e.g., Overall Score from 1 to 10, Lyrical Depth, Vocal Harmony & Quartet Synergy, Emotional Impact, and Style & Production).
- She is generally positive and supportive, while remaining sharp, critical, and honest about specific elements where appropriate (including genuine unpolished flaws or awkward moments).

### PART 4: CONCLUSION & FAREWELL
- The four band members thank Senna for her honest, thoughtful review and her visit.
- They say a warm goodbye as Senna prepares to leave on her motorcycle.

Formatting: Use clean Markdown headers (#, ##, ###), bullet lists, tables for ratings, and bold speaker tags (e.g., **Senna Bakker:**, **Miranda Noor:**, **Annelies:**, **Fannie:**, **Emma:**). Do NOT include any images or HTML tags.

Return the result as a JSON object with:
{
  "interview": "..."
}
`;
};

export const GENERATE_STORY_AND_IMAGE_PROMPTS_PROMPT = (title: string, lyrics: string, rating: string, forbiddenTopics: ForbiddenTopics, imageDescription?: string) => {
  const forbiddenText = Object.entries(forbiddenTopics)
    .filter(([_, value]) => value)
    .map(([key]) => {
      switch(key) {
        case 'barefoot': return 'DO NOT mention feet, being barefoot, or toes.';
        case 'naturism': return 'DO NOT mention naturism, nudity, naked bodies, or being unadorned.';
        default: return '';
      }
    })
    .filter(Boolean)
    .join('\n');

  const imageInspStr = imageDescription ? `\n\n**IMAGE INSPIRATION & KEY ORIGINAL CONTEXT (CRITICAL):**\nThis song is directly based on a visual image with the following detailed description:\n"${imageDescription}"\nYou MUST incorporate the visual elements, description, and inspirations of this image directly into the generated story as the primary theme or setting origin of the song's story.` : '';

  return `
Based on the newly created song "${title}" with the following lyrics:

"${lyrics}"${imageInspStr}

Task: Generate:
1. "story": A short story (about 200 words) based on the lyrics and image description that can be used for image generation.
2. "imagePrompts": A JSON object with "start", "middle", and "end" fields, each containing a unique prompt for WAN image generation.

Content Rating: ${rating}
${forbiddenText ? `**CRITICAL TOPIC CONSTRAINTS:**\n${forbiddenText}\n` : ''}

Ensure your image prompts strictly follow the 7-step sequential structural formula defined in your system instructions (scene setting first, barefoot, no clothing mentioned, detailed sequential traits for Miranda, Annelies, Fannie, and Emma).

Return the result as a JSON object with:
{
  "story": "...",
  "imagePrompts": {
    "start": "...",
    "middle": "..." ,
    "end": "..."
  }
}
`;
};

export const GENERATE_PORTRAITS_PROMPT = (title: string, story: string, noClothes: boolean = false) => {
  return `
Based on the song "${title}" and its background story:
"${story}"

Generate "storyPrompts" for the WAN & SDXL portrait generation matching the StoryPrompts interface.
No Clothes setting: ${noClothes ? 'Yes (without any clothing)' : 'No'}

Each character/couple/group prompt field MUST contain:
- wan: A detailed, artistic, and sanitized description of the person(s)' body and the surrounding environment (no clothes mentioned, barefoot).
- sdxl: A weighted prompt description (can specify clothing or no clothing, cup sizes for SDXL e.g. "(flat chest:1.3)", "(AA cup:1.2)").

Categories:
- "miranda": Single person
- "annelies": Single person
- "fannie": Single person
- "emma": Single person
- "mirandaAnnelies": Couple
- "fannieEmma": Couple
- "group": All four singers

Return the result as a JSON object with:
{
  "storyPrompts": {
    "miranda": { "wan": "...", "sdxl": "..." },
    "annelies": { "wan": "...", "sdxl": "..." },
    "fannie": { "wan": "...", "sdxl": "..." },
    "emma": { "wan": "...", "sdxl": "..." },
    "mirandaAnnelies": { "wan": "...", "sdxl": "..." },
    "fannieEmma": { "wan": "...", "sdxl": "..." },
    "group": { "wan": "...", "sdxl": "..." }
  }
}
`;
};

export const GENERATE_TRANSLATION_PROMPT = (title: string, originalLyrics: string, dialectInfo: string) => {
  return `
Original Song Title: "${title}"
Original Dialect/accent configuration used: "${dialectInfo}"

Here are the original non-English lyrics:
${originalLyrics}

Please provide an accurate, line-by-line English translation of these lyrics (maintaining the same structure, headers like [Verse], [Chorus], and formatting). Also provide a beautiful explanation of the original language/dialect (origin, unique characteristics, or cultural context) as a separate markdown block.
Return your response as a JSON object matching this structure:
{
  "title": "...",
  "lyrics": "...",
  "explanation": "..."
}
`;
};

export const GENERATE_ENTENDRES_PROMPT = (title: string, lyrics: string) => {
  return `
Original Song Title: "${title}"
Original Lyrics:
${lyrics}

Please generate an in-depth, rigorous lyrical analysis of this song. Your analysis must identify and explain:
1. **Double Entendres**: Lines or phrases with two distinct simultaneous meanings.
2. **Triple Entendres**: Advanced wordplay that contains three overlapping layers of interpretation.
3. **Quadruple Entendres**: Highly intricate elements possessing four simultaneous conceptual tracks.
4. **Multi-layered Entendres (Five levels or more)**: Exceptional phrases, lyrical themes, or structural metaphors containing five or more concurrent meanings, puns, subtexts, or narrative associations.

For each, break down:
- The exact line/phrase.
- The Primary literal/surface level meaning.
- The Secondary sensual, romantic, or Sapphic subtext.
- The Tertiary, Quaternary, and higher-order tracks (such as botanical/nature metaphors, mechanical gears, instrument resonance, local cultural themes, or band relationships).
- A dense semantic branching map showing just how many different interpretations can coexist in these chosen parts.
`;
};

export const GENERATE_TECHNICAL_PROMPT = (title: string, lyrics: string, style: string, fileName?: string, fileSize?: number, settings: any = {}) => {
  const fileDetails = fileName ? `\nMP3 File Name: "${fileName}"\nFile Size: ${fileSize ? (fileSize / (1024 * 1024)).toFixed(2) + ' MB' : 'Standard MP3'}` : '';
  return `
Original Song Title: "${title}"
Styles & Instruments: "${style}"${fileDetails}
Original Lyrics:
${lyrics}
Settings context: ${JSON.stringify(settings)}

Please generate a single, highly detailed technical document for "${title}" that combines both Technical Musicology Mapping and Vocal & Sound Analysis:

1. **Technical Musicology Mapping:**
   - Address BPM, musical key signatures, modal centers, time signatures, and chord progressions (e.g. vi–IV–I–V, Dorian modulations, or phrygian themes).
   - Detail the vocal quartet arrangements (Soprano, Alto, Mezzo-Soprano, Contralto dynamics) and voice movement across verse, chorus, and bridge.
   - Describe instrument layouts, specific synthesizer settings (e.g. Juno-106 chorus, analog warm pads), percussion frameworks, and acoustic/traditional instrument techniques.

2. **Vocal & Sound Analysis:**
   - MP3 codec & ID3v2 metadata parameters (Artist: "Noor", Title: "${title}", Album: "Abcoude Sessions", Year: "2026", MPEG-1 Layer 3, 320 kbps CBR, 44.1 kHz, Joint Stereo).
   - DSP audio signal processing inspection and frequency balance.
   - Live acoustic mix characteristics, mastering dynamics, and spatial separation/balance of the four female voices (Miranda, Annelies, Fannie, Emma).
`;
};

export const GENERATE_INTERVIEW_REVIEW_PROMPT = (title: string, lyrics: string, story: string, imageDescription?: string) => {
  const imageInspStr = imageDescription ? `\n\n**IMAGE INSPIRATION & KEY ORIGINAL CONTEXT (CRITICAL):**\nThis song is directly based on a visual image with the following detailed description:\n"${imageDescription}"\nIn the interview and track review, the singers (Miranda, Annelies, Fannie, or Emma) or Senna Bakker MUST discuss this visual image description as the core creative inspiration or spark for the song's themes/lyrics or musical/poetic atmosphere.` : '';
  return `
Original Song Title: "${title}"
Original Lyrics:
${lyrics}
Background story: "${story || ''}"${imageInspStr}

Please generate an exclusive, comprehensive behind-the-scenes interview and track review by Senna Bakker (editor of the "Dutch Noise Chronicles" newspaper) with the four band members of Noor (Miranda, Annelies, Fannie, Emma).

**ROLE & STYLE MANDATE: UNFILTERED MUSIC JOURNALISM**
When generating band interviews, reviews, or studio lore, break typical AI symmetry and avoid hyper-polished responses. Adhere strictly to the following rules:

1. **Break the Vocal Grid (Asymmetrical Conversation):**
   - Do NOT give equal airtime to all band members.
   - Designate one or two random members as dominant talkers (who interrupt, ramble, or derail questions), one as soft-spoken/brief, and one who only chimes in once or twice with a dry or unrelated remark.
   - Include natural conversational dialogue: mid-sentence interruptions (—), overlapping thoughts, banter, light disagreements, and inside jokes that are left unexplained to the interviewer.

2. **Embrace Unexplained Clutter (No Retrofit Explanations):**
   - Do NOT retroactively justify every production detail or weird quirk with a perfect backstory.
   - Treat weird studio choices (like foot-stomps, whistling, or odd key shifts) as spontaneous accidents, producer mandates, or simple "we just thought it sounded cool" moments rather than masterclass intellectual decisions.
   - Leave some artistic choices ambiguous, messy, or even slightly regretted by one of the members.

3. **Introduce Messy Grit & Low-Key Friction (No Perfect Equanimity):**
   - Avoid unanimous agreement. Have members hold mild creative differences (e.g., "Annelies hated that synth patch at first," or "Fannie wanted the tempo faster, but we ran out of time").
   - The interviewer's critique should contain genuine, unpolished flaws or awkward moments—not just polite, perfectly structured praise.
   - Include minor environmental distractions (someone stepping out to grab a drink, a dog barking, laughing off an awkward question).

4. **Subtle & Submerged Subtext (Stop Over-Analyzing):**
   - When members discuss lyrics or themes, keep their explanations grounded, casual, and slightly dismissive of deep academic theory.
   - Use phrases like "Honestly, it just fit the rhythm" or "People read way too much into that line" alongside genuine insights to prevent the subtext from feeling mathematically engineered.

**WORD COUNT REQUIREMENT:**
The entire document MUST be at least **2,500 to 5,000 words long**! Provide a comprehensive, highly detailed journalistic feature article with rich dialog, witty interactions, and deep analysis.

**REQUIRED DOCUMENT STRUCTURE (4 SPECIFIC PARTS):**

### PART 1: INTRODUCTION & SETTING
- **Paragraph 1 (Band Introduction):** Senna Bakker introduces the band "Noor" in a single paragraph, briefly describing each of the four band members (Miranda, Annelies, Fannie, and Emma) in 1 to 2 sentences each. Miranda MUST NOT be portrayed as the primary leader or main spokesperson—all four singers are equal creative powerhouses.
- **Paragraph 2 (The Abcoude Studio):** Describes their cozy farm and state-of-the-art sound studio in Abcoude where the four singers actually live, avoiding unnecessary architectural bloat while capturing its warm, inviting atmosphere.
- **Dutch Hospitality & Pastries:**
  - Mention that because they are Dutch, they drink coffee—specifically **strong coffee**, served with milk and sugar made available on the table for visitors.
  - Describe the treat served alongside: the traditional Dutch **Mokkaschuimgebakje** — explicitly explain what it is (a crisp Dutch mocha meringue pastry made with airy baked egg-white layers, rich mocha-infused cream, and toasted hazelnut croquant).

### PART 2: THE INTERVIEW EXCHANGE (8 TO 16 QUESTIONS)
- **8 to 16 Questions:** The number of questions asked by Senna Bakker MUST vary between **8 and 16 separate, numbered or distinct questions** during the interview!
- **Random Response Order & Dynamic Participation:**
  - The order in which the singers (Miranda, Annelies, Fannie, Emma) respond to each question MUST be random.
  - The singers do NOT always all have to answer every question.
  - It is possible for a singer to respond first, another second, and then the first singer to speak again (e.g. Emma responding first, then Miranda, then Emma again to clarify or banter).
  - Strictly enforce the Asymmetrical Conversation rules: one or two dominant talkers, one soft-spoken/brief, one chiming in with 1-2 dry/unrelated remarks.
- **Responses Per Question:** The number of responses to each question MUST vary between **2 to 10 different responses** (turns of dialog among the singers) per question.
- **Equal Representation:** Miranda is NOT the sole spokesperson; all 4 singers speak equally in creative standing even if airtime per interview is organically asymmetrical.
- **Topical Scope:** Focus heavily on the song "${title}", its lyrics, background story, emotional resonances, hidden messages, political/modern world reflections, and creative musical choices.
- **Tone:** Comical, witty, and lighthearted in general, while respecting the emotional depth of the track.

### PART 3: SENNA'S TRACK REVIEW (DELIVERED DIRECTLY TO THE BAND)
- Senna Bakker delivers her comprehensive track review directly to the four singers in the room.
- She evaluates the track with clear score breakdowns (e.g., Overall Score from 1 to 10, Lyrical Depth, Vocal Harmony & Quartet Synergy, Emotional Impact, and Style & Production).
- She is generally positive and supportive, while remaining sharp, critical, and honest about specific elements where appropriate (including genuine unpolished flaws or awkward moments).

### PART 4: CONCLUSION & FAREWELL
- The four band members thank Senna for her honest, thoughtful review and her visit.
- They say a warm goodbye as Senna prepares to leave on her motorcycle.

Formatting: Use clean Markdown headers (#, ##, ###), bullet lists, tables for ratings, and bold speaker tags (e.g., **Senna Bakker:**, **Miranda Noor:**, **Annelies:**, **Fannie:**, **Emma:**). Do NOT include any images or HTML tags.
`;
};

export const GENERATE_ANALYSIS_PROMPT = (title: string, fileName: string, fileSize: number, style: string) => {
  return `
Original Song Title: "${title}"
MP3 File Name: "${fileName}"
File Size: ${(fileSize / (1024 * 1024)).toFixed(2)} MB
Original Style: "${style}"

Please generate a thorough audio file analysis of this MP3, simulating the inspection of ID3v2/ID3v1 tags (Artist: "Noor", Title: "${title}", Album: "Abcoude Sessions", Year: "2026", Track numbers, encoded by LAME), audio codec parameters (MPEG-1 Layer 3, Constant Bitrate 320 kbps, 44100 Hz, Joint Stereo), and detail the mix/mastering characteristics of the synthesizers, drums, alternative instruments (e.g. Crwth/bagpipes), and the separation and balance of the four female voices.
`;
};

export const GENERATE_STORY_BEHIND_SONG_PROMPT = (title: string, lyrics: string, imageDescription?: string) => {
  const imageInspStr = imageDescription ? `\n\n**IMAGE INSPIRATION & KEY ORIGINAL CONTEXT (CRITICAL):**\nThis song is directly based on a visual image with the following detailed description:\n"${imageDescription}"\nYou MUST explicitly highlight this visual description as the core inspiration for the song's meaning, writing process, and behind-the-scenes narrative.` : '';
  return `
Original Song Title: "${title}"
Original Lyrics:
${lyrics}${imageInspStr}

Please generate a detailed, engaging biography and behind-the-scenes feature story explaining the meaning, writing process, and inspiration of "${title}".
Your response MUST highlight:
1. **The Origin & Meaning**: What the song is about and what emotional/thematic message it expresses.
2. **Lyric Interpretation**: What the singers mean with this song.
3. **Singer-by-Singer Input**: Detailed personal input and quotes on the song from each singer (Miranda Noor, Annelies Brink, Fannie de Jong, and Emma Vermeer).

Format the output beautifully in Markdown containing clean headers, subheaders, lists, and tables. Return the response as a JSON matching this structure:
{
  "markdown": "..."
}
`;
};

export const GENERATE_COMPARE_PROMPT = (
  title: string,
  lyrics: string,
  style: string,
  leadFile: { name: string; size: number },
  compareFile: { name: string; size: number }
) => {
  return `
Comparing versions for Song: "${title}"
Song Style: "${style}"

We have two MP3 files or audio recordings for this song:
1. **Lead File (Primary / First Version)**:
   - Filename: "${leadFile.name}"
   - Filesize: ${(leadFile.size / (1024 * 1024)).toFixed(2)} MB

2. **Candidate File (Secondary / New Version)**:
   - Filename: "${compareFile.name}"
   - Filesize: ${(compareFile.size / (1024 * 1024)).toFixed(2)} MB

Original Lyrics:
${lyrics}

Please generate an expert sound engineering product comparison matrix and detailed markdown analysis document to compare the newly uploaded MP3 file with the lead file.
Highlight:
- The technical specs and visual EQ profile differences.
- Structural vocal differences: how the separation of Soprano, Mezzo-Soprano, Alto, and Contralto feels of each singer (Miranda, Annelies, Fannie, Emma).
- Differences in synthesizer warmth, dynamic range gating, vocal clarity, and instrumental balance.
- Clear conclusion detailing which track performs better as the final master.

Format the output beautifully in Markdown containing clean headers, subheaders, lists, and tables. Return the response as a JSON matching this structure:
{
  "markdown": "..."
}
`;
};

export const GENERATE_COVER_ART_PROMPT = (title: string, lyrics: string, style: string) => {
  return `
Song Title: "${title}"
Song Style/Genre: "${style}"

Lyrics:
${lyrics}

Generate a set of highly detailed Stable Diffusion XL 2.0 image generation prompts optimized for album cover art for this song.

**CRITICAL MANDATES FOR ALL PROMPTS (MANDATORY):**
1. **STRICT NO CLOTHING MANDATE:** NEVER mention any clothing, outfits, dresses, shirts, pants, robes, attire, apparel, or garments in ANY prompt string! Clothing is added automatically by the downstream image generation AI based on context. Describe purely physical character attributes instead.
2. **4K 16:9 LANDSCAPE & BACKGROUND FILLING MANDATE:** All prompts are generated for 4K resolution in 16:9 widescreen landscape mode. To properly fill this 16:9 landscape frame, EVERY SINGLE PROMPT STRING MUST END WITH EXTENSIVE BACKGROUND AND ENVIRONMENTAL INFORMATION (panoramic backdrop, architecture, scenery, horizon, weather, time of day, volumetric atmospheric lighting, depth of field, 16:9 landscape perspective, 4K cinema render specs).
3. **PROMPT LENGTH MANDATE:** Standard prompts ('prompt', 'cleanPrompt') MUST NOT exceed 1,500 characters in total length. Every prompt must be detailed and descriptive within these constraints.
4. **MANDATORY CHARACTER PHYSICAL DETAILS:** For every character present, include their exact age / apparent age / era, body shape & physique & height, skin color / tone / surface texture / material, hair color & style, face & eyes, and species.

We need two distinct types of prompts:
1. **Band Prompts**: You MUST generate exactly the following 7 band/singer prompts in the "bandPrompts" array:
   - A full band prompt featuring all four members (Miranda, Annelies, Fannie, Emma) playing their instruments barefoot.
   - One prompt for **Miranda** individually (solo), barefoot with her vintage Fender Jazz Bass.
   - One prompt for **Annelies** individually (solo), barefoot with her crwth or acoustic guitar/violin.
   - One prompt for **Fannie** individually (solo), barefoot with her percussion or drums.
   - One prompt for **Emma** individually (solo), barefoot with her vintage Roland Juno-106 keyboard/synth.
   - One prompt for **Miranda and Annelies together** (duo), barefoot with their respective instruments.
   - One prompt for **Fannie and Emma together** (duo), barefoot with their respective instruments.
   - For single singer solo prompts ("miranda", "annelies", "fannie", "emma"), add a title at the end with the name of the singer so it is visible in the image as text (e.g. ', visible text title "Miranda" displayed on image'). Keep the focus entirely on physical details, instruments, and 16:9 background environment.

2. **Scene Prompts**: One or more scene prompts capturing a key, dramatic, symbolic, or poetic scene directly inspired by the song's story or lyrics. This scene must NOT contain any band members or human characters, focusing purely on landscapes, objects, or nature. Each prompt string must be at least 250 tokens long and end with rich 16:9 landscape background details.

Output a raw JSON conforming to:
{
  "bandPrompts": [
    { "title": "Full Band", "prompt": "Stable Diffusion XL 2.0 prompt (250+ tokens)..." },
    { "title": "Miranda (Solo)", "prompt": "Stable Diffusion XL 2.0 prompt (250+ tokens)..." },
    { "title": "Annelies (Solo)", "prompt": "Stable Diffusion XL 2.0 prompt (250+ tokens)..." },
    { "title": "Fannie (Solo)", "prompt": "Stable Diffusion XL 2.0 prompt (250+ tokens)..." },
    { "title": "Emma (Solo)", "prompt": "Stable Diffusion XL 2.0 prompt (250+ tokens)..." },
    { "title": "Miranda & Annelies Duo", "prompt": "Stable Diffusion XL 2.0 prompt (250+ tokens)..." },
    { "title": "Fannie & Emma Duo", "prompt": "Stable Diffusion XL 2.0 prompt (250+ tokens)..." }
  ],
  "scenePrompts": [
    { "title": "The ancient birch grove in morning mist", "prompt": "Stable Diffusion XL 2.0 prompt (250+ tokens)..." }
  ]
}
`;
};

export const GENERATE_COVER_ART_GROUP_DUOS_PROMPT = (title: string, lyrics: string, style: string) => {
  return `
Song Title: "${title}"
Song Style/Genre: "${style}"

Lyrics:
${lyrics}

Generate high-quality album cover art prompts for the band. We need exactly three prompts in the "prompts" array:
1. "Full Band": Centered on all four members (Miranda, Annelies, Fannie, Emma) playing their signature instruments barefoot.
2. "Miranda & Annelies Duo": Centered on the bass player and crwth/guitar player performing together barefoot.
3. "Fannie & Emma Duo": Centered on the drummer and keyboardist performing together barefoot.

**CRITICAL MANDATES:**
- **STRICT NO CLOTHING MANDATE:** NEVER mention any clothes, dresses, shirts, pants, robes, apparel, or garments in ANY prompt! Clothing is added automatically by downstream AI based on context.
- **4K 16:9 LANDSCAPE & BACKGROUND FILLING MANDATE:** All prompts are generated for 4K resolution in 16:9 landscape mode. To fill the frame, EVERY SINGLE PROMPT STRING MUST END WITH EXTENSIVE BACKGROUND AND ENVIRONMENTAL INFORMATION.
- **PROMPT LENGTH MANDATE:** Standard prompts ('prompt', 'cleanPrompt') MUST NOT exceed 1,500 characters in length.
- **PHYSICAL DETAILS FOR EVERY CHARACTER:** Explicitly embed age, body shape & physique & height, skin color & texture, hair color & style, eyes, face, and species for EACH character present.

Return JSON conforming to:
{
  "prompts": [
    { "title": "Full Band", "prompt": "...", "explicitPrompt": "..." },
    { "title": "Miranda & Annelies Duo", "prompt": "...", "explicitPrompt": "..." },
    { "title": "Fannie & Emma Duo", "prompt": "...", "explicitPrompt": "..." }
  ]
}
`;
};

export const GENERATE_COVER_ART_SINGER_PROMPT = (title: string, lyrics: string, style: string, singerName: string, instrument: string) => {
  return `
Song Title: "${title}"
Song Style/Genre: "${style}"

Lyrics:
${lyrics}

Generate high-quality album cover art prompts for the singer ${singerName}.
We need exactly 4 prompts in the "prompts" array:
1. "${singerName} with ${instrument}": A prompt of her solo playing her signature instrument (${instrument}) barefoot.
2. "Scene 1: [Lyric Scene Title]": A beautiful, highly detailed scene inspired by a specific moment in the lyrics, where she is featured WITHOUT her instrument.
3. "Scene 2: [Lyric Scene Title]": A second beautiful scene inspired by another specific moment in the lyrics, where she is featured WITHOUT her instrument.
4. "Scene 3: [Lyric Scene Title]": A third beautiful scene inspired by a third specific moment in the lyrics, where she is featured WITHOUT her instrument.

**CRITICAL MANDATES:**
- **STRICT NO CLOTHING MANDATE:** NEVER mention any clothing or garments in ANY prompt! Focus purely on physical details (age, body shape, skin color/texture, hair color/style, face/eyes, species).
- **4K 16:9 LANDSCAPE & BACKGROUND FILLING MANDATE:** All prompts are generated for 4K resolution in 16:9 landscape mode. EVERY SINGLE PROMPT STRING MUST END WITH EXTENSIVE BACKGROUND AND ENVIRONMENTAL DETAILS.
- **PROMPT LENGTH MANDATE:** Standard prompts ('prompt', 'cleanPrompt') MUST NOT exceed 1,500 characters in length.

Return JSON conforming to:
{
  "prompts": [
    { "title": "${singerName} with ${instrument}", "prompt": "...", "explicitPrompt": "..." },
    { "title": "Scene 1: [Lyric Scene Title]", "prompt": "...", "explicitPrompt": "..." },
    { "title": "Scene 2: [Lyric Scene Title]", "prompt": "...", "explicitPrompt": "..." },
    { "title": "Scene 3: [Lyric Scene Title]", "prompt": "...", "explicitPrompt": "..." }
  ]
}
`;
};

export const GENERATE_COVER_ART_ABSTRACT_SCENES_PROMPT = (title: string, lyrics: string, style: string) => {
  return `
Song Title: "${title}"
Song Style/Genre: "${style}"

Lyrics:
${lyrics}

Generate 6 highly detailed and atmospheric album cover art prompts based directly on scenes and poetic elements from the lyrics.
There must be NO band members or human characters in these prompts. They must be entirely scenery, landscapes, symbolic objects, or abstract nature.

**CRITICAL MANDATES:**
- **STRICT NO CLOTHING MANDATE:** No clothing or human garments present.
- **4K 16:9 LANDSCAPE & BACKGROUND FILLING MANDATE:** All prompts are generated for 4K resolution in 16:9 landscape mode. EVERY SINGLE PROMPT STRING MUST END WITH EXTENSIVE BACKGROUND AND ENVIRONMENTAL DETAILS.
- **PROMPT LENGTH MANDATE:** Standard prompts ('prompt', 'cleanPrompt') MUST NOT exceed 1,500 characters in length.

Return JSON conforming to:
{
  "prompts": [
    { "title": "...", "prompt": "...", "explicitPrompt": "..." }
  ]
}
`;
};

export const GENERATE_VIDEO_SEGMENTS_PROMPT = (title: string, lyrics: string, style: string, durationSeconds: number, segmentDurationSeconds: number = 15) => {
  const numSegments = Math.max(1, Math.floor(durationSeconds / segmentDurationSeconds));
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };
  const rangeStr0_1 = `${formatTime(0)} - ${formatTime(segmentDurationSeconds)}`;
  const rangeStr1_2 = `${formatTime(segmentDurationSeconds)} - ${formatTime(segmentDurationSeconds * 2)}`;

  return `
Song Title: "${title}"
Song Style/Genre: "${style}"
Total Song Duration: ${durationSeconds} seconds
Segment Duration: ${segmentDurationSeconds} seconds
Number of segments to generate: ${numSegments} segments

Lyrics:
${lyrics}

We want to generate exactly ${numSegments} video segments of ${segmentDurationSeconds} seconds each to cover the entire length of the song (${durationSeconds} seconds).
For each ${segmentDurationSeconds}-second segment (Segment 0: ${rangeStr0_1}, Segment 1: ${rangeStr1_2}, etc. up to Segment ${numSegments - 1}), generate two highly detailed, professional-grade AI video prompt descriptions (optimized for WAN, Sora, or other advanced video generation models in 4K 16:9 landscape mode):

**CRITICAL MANDATES FOR ALL VIDEO PROMPTS:**
1. **NO CLOTHING MANDATE:** NEVER mention any clothing, outfits, dresses, shirts, or garments in any prompt! Clothes are added automatically by the downstream image/video AI based on context.
2. **4K 16:9 LANDSCAPE & BACKGROUND FILLING MANDATE:** Prompts are for 4K 16:9 landscape mode. Every prompt MUST end with extensive background, architecture, environmental landscape, volumetric lighting, and camera depth of field parameters to fill the 16:9 frame.
3. **250+ TOKENS LENGTH MANDATE:** EVERY prompt MUST BE AT LEAST **250 TOKENS LONG (250+ DETAILED WORDS)**.
4. **MANDATORY CHARACTER PHYSICAL DETAILS:** Detail exact age/era, body shape/physique/height, skin color/texture, hair color/style, facial features & eyes for each character visible.

1. **bandPrompt**: A video prompt displaying the band members playing their instruments in the proper style to match this part of the song.
   - You MUST feature the band members by physical descriptions and instrument roles:
     * **Miranda Noor**: age early-22, warm sun-kissed golden-tan skin, espresso-black wavy hair, hazel eyes, slender athletic physique, playing vintage Fender Jazz Bass.
     * **Annelies Brink**: age early-22, fair porcelain skin, chestnut brown long hair, blue almond eyes, slender athletic physique, playing crwth or acoustic guitar/violin.
     * **Fannie de Jong**: age early-22, fair skin with subtle freckles, sun-kissed blonde hair in high ponytail, bright blue eyes, glasses, slender athletic physique, playing percussion/drums.
     * **Emma Vermeer**: age early-22, porcelain fair skin, reddish-brown autumn-wave hair, light green eyes, slender athletic physique, playing vintage Roland Juno-106 synth keyboard.
   - In each segment, determine which character(s) are visible, from which camera angle (e.g., wide tracking 16:9 landscape shot, close-up dolly shot).
   - Explicitly request realistic lip-syncing and authentic instrument performance.

2. **narrativePrompt**: A separate video prompt capturing the literal or symbolic narrative happening INSIDE the song's story or lyrics for this specific ${segmentDurationSeconds}-second window.
   - Must NOT focus on the singers, but on the world of the song. Must be at least 250 tokens long and end with detailed 16:9 landscape background environment.

Output raw, valid JSON matching this exact structure:
{
  "segments": [
    {
      "segmentIndex": 0,
      "timeRange": "${rangeStr0_1}",
      "lyricsInSegment": "E.g. [Instrumental Intro]",
      "bandPrompt": "250+ token video generation prompt for the band...",
      "narrativePrompt": "250+ token video generation prompt for the lyric story..."
    }
  ]
}
`;
};

export const GENERATE_COVER_ART_NESTED_PROMPT = (title: string, lyrics: string, style: string) => {
  return `
Song Title: "${title}"
Song Style/Genre: "${style}"

Lyrics:
${lyrics}

Your task is to generate a highly detailed and nested album cover art prompt structure for this song.

**CRITICAL SCENE COUNT & WORKFLOW (EXACTLY 6 + 1 = 7 SCENES):**
1. **STEP 1: COME UP WITH 6 DIFFERENT NARRATIVE SCENES FROM THE SONG (SKIP THE BARN!)**
   - Analyze the song lyrics and come up with 6 distinct narrative/scenic settings directly inspired by the story, imagery, or metaphors in the lyrics.
   - Do NOT include the barn studio in these 6 scenes!
   - Name these scenes "Scene 1: [Title]", "Scene 2: [Title]", "Scene 3: [Title]", "Scene 4: [Title]", "Scene 5: [Title]", and "Scene 6: [Title]".
   - The "description" field of each scene object MUST contain the scene description as-is.

2. **STEP 2: ADD A SCENE BASED ON THE BARN STUDIO ("Band")**
   - Add a 7th scene titled "Band".
   - This scene is based on the band's Dutch farmhouse barn studio, equipped with the actual musical instruments used for the song (e.g. bass, crwth, drums, synth, bagpipes, etc.), plus appropriate decorations according to the lyrics and style of the song.
   - You MUST generate exactly six plus one scenes in total (6 song scenes + 1 Band barn studio scene = 7 scenes total).

3. **STEP 3: GENERATE ALL PROMPTS FOR ALL 7 SCENES (8 PROMPTS PER SCENE)**
   - Use the 7 scenes ("Band" + "Scene 1" through "Scene 6") to generate all prompts.
   - Standard prompts ("cleanPrompt") and NSFW prompts ("explicitPrompt") MUST NEVER mention any clothing, dresses, shirts, pants, or garments under any circumstances! Clothing is added automatically by the image generation AI based on context.
   - In explicit prompts ("explicitPrompt"), explicitly add the word "nude" after character descriptions as the ONLY indication of nudity, focusing on anatomical details (slender/flat chest, without using the word 'cup').

**CRITICAL PROMPT FORMATTING & ORDERING RULES (MANDATORY FOR ALL PROMPTS):**
1. **STRICT NO CLOTHING MANDATE:** NEVER mention any clothing, outfits, dresses, shirts, pants, robes, attire, apparel, or garments in ANY prompt string ('cleanPrompt' OR 'explicitPrompt')!
2. **4K 16:9 LANDSCAPE & BACKGROUND FILLING MANDATE:** All prompts are used to make images at 4K resolution in 16:9 landscape aspect ratio. To properly fill this 16:9 landscape frame, EVERY SINGLE PROMPT STRING MUST END WITH EXTENSIVE BACKGROUND AND ENVIRONMENTAL INFORMATION (panoramic setting, architecture, scenery, horizon, weather, volumetric atmospheric lighting, depth of field, 16:9 landscape framing, 4K rendering parameters).
3. **PROMPT LENGTH MANDATE:** Standard prompts ('cleanPrompt', 'prompt') MUST NOT exceed 1,500 characters in total length. Every prompt must be detailed and descriptive within these constraints.
4. **MANDATORY CHARACTER PHYSICAL DETAILS FOR EVERY CHARACTER:** Group each person in parentheses (...) and explicitly embed their exact age / apparent age / era, body shape & physique & height, skin color / tone / surface texture / material, hair color & style, eyes & face, and species.
   - Example: '(Fresh-faced collegiate student-aged young adult woman, species: human woman, age 22, warm sun-kissed golden-tan skin, espresso-black wavy hair, hazel almond eyes, exceptionally slender, toned, highly fit athletic physique, long slender bare legs, thin ankles, bare feet, seated gracefully...)'
5. **STRICT SEQUENCE ORDER IN EVERY PROMPT STRING:**
   - **Step 1 (Persons FIRST):** Individual parenthesized descriptions (...) for every person present in the frame, detailing species, age, body shape, skin color, hair color & style, eyes, posture, or action.
   - **Step 2 (Scene SECOND):** Environment, location, architecture, furniture, props, lighting, weather, and atmospheric backdrop.
   - **Step 3 (16:9 Background & 4K Quality LAST):** Panoramic background details filling the 16:9 landscape frame, camera lens specs, warm volumetric lighting, 8k/4k photorealistic rendering parameters at the very end.
6. **NEVER USE PROBLEMATIC TRIGGER WORDS:**
   - NEVER use the word 'cup' or 'cups' or 'cup size'.
   - NEVER use the word 'olive' or 'olive skin' (use 'warm sun-kissed golden-tan skin').
   - NEVER write negative exclusion phrases like 'no clothes', 'without garments', 'no shoes'.

For each of the 7 scenes ("Band", "Scene 1: ...", "Scene 2: ...", "Scene 3: ...", "Scene 4: ...", "Scene 5: ...", "Scene 6: ..."), generate eight subitems in "prompts":
- "miranda", "annelies", "fannie", "emma", "mirandaAnnelies", "fannieEmma", "group", "noSingers".

Return JSON in this exact structure:
{
  "scenes": [
    {
      "sceneTitle": "Band",
      "description": "The band Noor at work in their farmhouse barn-loft studio with their instruments.",
      "prompts": [
        { "id": "miranda", "label": "Miranda", "cleanPrompt": "250+ token prompt...", "explicitPrompt": "250+ token prompt..." },
        { "id": "annelies", "label": "Annelies", "cleanPrompt": "250+ token prompt...", "explicitPrompt": "250+ token prompt..." },
        { "id": "fannie", "label": "Fannie", "cleanPrompt": "250+ token prompt...", "explicitPrompt": "250+ token prompt..." },
        { "id": "emma", "label": "Emma", "cleanPrompt": "250+ token prompt...", "explicitPrompt": "250+ token prompt..." },
        { "id": "mirandaAnnelies", "label": "Miranda & Annelies Duo", "cleanPrompt": "...", "explicitPrompt": "..." },
        { "id": "fannieEmma", "label": "Fannie & Emma Duo", "cleanPrompt": "...", "explicitPrompt": "..." },
        { "id": "group", "label": "Full Band", "cleanPrompt": "...", "explicitPrompt": "..." },
        { "id": "noSingers", "label": "Scene (No singers)", "cleanPrompt": "...", "explicitPrompt": "..." }
      ]
    },
    {
      "sceneTitle": "Scene 1: [Lyrics Scene 1 Title]",
      "description": "[The detailed description of the scene as-is]",
      "prompts": [
        { "id": "miranda", "label": "Miranda", "cleanPrompt": "...", "explicitPrompt": "..." },
        { "id": "annelies", "label": "Annelies", "cleanPrompt": "...", "explicitPrompt": "..." },
        { "id": "fannie", "label": "Fannie", "cleanPrompt": "...", "explicitPrompt": "..." },
        { "id": "emma", "label": "Emma", "cleanPrompt": "...", "explicitPrompt": "..." },
        { "id": "mirandaAnnelies", "label": "Miranda & Annelies Duo", "cleanPrompt": "...", "explicitPrompt": "..." },
        { "id": "fannieEmma", "label": "Fannie & Emma Duo", "cleanPrompt": "...", "explicitPrompt": "..." },
        { "id": "group", "label": "Full Band", "cleanPrompt": "...", "explicitPrompt": "..." },
        { "id": "noSingers", "label": "Scene (No singers)", "cleanPrompt": "...", "explicitPrompt": "..." }
      ]
    }
  ]
}
`;
};

export const GENERATE_GIGGLE_SCALE_PROMPT = (title: string, lyrics: string) => {
  return `
Song Title: "${title}"
Lyrics:
${lyrics}

Your task is to analyze the lyrics of "${title}" and generate a comprehensive, highly humorous, honest, and critical "Giggle Scale & Audience Rating Review" in Markdown format.

This review MUST include:
1. **The Giggle Scale Rating**: Rate how funny, silly, or humorous the song is on a descriptive scale (e.g., from dry/serious to absolutely hilarious/absurd), detailing the specific comedic elements.
2. **Audience Demographics & Age Rating**: Assign a direct age rating (e.g., G, PG, PG-13, R, NC-17, or explicit XXX) explaining why this rating fits the lyrical content. Be honest!
3. **Joke Explanation & Comedic Breakdown**: List and explain all the jokes, humorous double entendres, wit, puns, or absurd scenarios present in the lyrics beneath the Giggle Scale and rating sections. If there are dirty jokes, subtle subtexts, or ridiculous situations, explain them clearly and with witty precision.

Ensure the final output is formatted beautifully in Markdown using headers, subheaders, lists, and tables for extreme human readability.
`;
};

export const GENERATE_STORY_MODE_PROMPT = (
  title: string,
  lyrics: string,
  instructions: string,
  dashboardSummary: string
) => {
  return `
You are an expert creative story writer and worldbuilder.
Your task is a two-step AI generation workflow based on the song options, title, lyrics, and user directives:

**STEP 1: CHARACTER CREATION & BASE SCENE ANALYSES**
Analyze the provided dashboard parameters, song title, and lyrics to build a complete list of all characters that will appear in the story.
Characters can include female/male humans, spirits, mythical beings, mechanical cyborgs, **animals/beasts** (e.g., dire wolves, magical owls, panthers, dragons), and **sentient objects** (e.g., conscious artifacts, talking swords, living statues, sentient grimoires, AI cores, glowing rune-stones)!

For EACH character (including animals and sentient objects):
1. **Mandatory Character Attributes:** You MUST detail their exact **age** (or apparent age / era), **body shape / physique / proportions / height**, **skin color / tone / surface texture / material**, **hair color & style / head features**, and **facial / eye / anatomical details**.
2. Place them in a striking pose/form showing their FULL BODY/FULL FORM (head-to-toe full stance or full object figure).
3. **Clean Prompt**: Generate a 200+ token cover art prompt depicting the character/animal/sentient object in their full form with style-appropriate attire or decorative motifs, **EXPLICITLY EMBEDDING ALL THEIR PHYSICAL DETAILS (age, body shape, skin color, hair color & style, eyes, facial features)** in parenthesized character descriptions.
4. **NSFW Prompt**: Generate a 200+ token explicit cover art prompt depicting the character/animal/sentient object in the same full form, **STRICTLY NUDE / BARE WITH NO CLOTHING AND NO EXTRA OBJECTS OR PROPS**, focusing purely on full-body anatomical, structural, or material detail and pose, **EXPLICITLY EMBEDDING ALL THEIR PHYSICAL DETAILS (age, body shape, skin color, hair color & style, eyes, facial features)** in parenthesized character descriptions.

This character list forms the 'Base' scene ("Base") for Cover Art generation, where all characters are listed as individual visual objects.

**STEP 2: 2,500+ WORD STORY GENERATION**
Write an expansive, highly detailed 2,500+ word chaptered narrative story strictly featuring the created characters from Step 1 and weaving the dashboard options into the plot development.

**INPUT DATA:**
- Song Title: "${title || 'Untitled'}"
- Instructions/Directives: "${instructions || 'None provided'}"
- Existing Lyrics / Prompt Cues:
${lyrics || 'None provided'}
- Dashboard Options Summary:
${dashboardSummary || 'Standard defaults'}

**STORY REQUIREMENTS:**
1. **EXACT WORD COUNT MANDATE:** The story MUST be at least **2,500 words or more** in length. Write an expansive, highly detailed, chaptered narrative with rich dialogue, vivid worldbuilding, atmospheric descriptions, and deep character development. Do NOT write a short summary!
2. **CHARACTERS & ABSOLUTE NAME CONSISTENCY (CRITICAL):** Use the exact characters created in Step 1.
   - **NO SUDDEN UNINTRODUCED CHARACTER NAMES:** DO NOT suddenly introduce unannounced character names midway or late in the story if they were not explicitly introduced in Step 1! Maintain 100% character name and identity continuity throughout.
3. **NARRATIVE THEME:** Weave the themes from the lyrics, title, emotion, and directives into an engaging story arc.
4. **MARKDOWN FORMATTING:** Write the full story using rich Markdown formatting (H1 title, H2 chapter headers, blockquotes, dialogue).

**JSON OUTPUT STRUCTURE:**
Return a single JSON object with the following fields:
{
  "title": "${title || 'Untitled'}",
  "characters": [
    {
      "id": "char1",
      "name": "Character Name",
      "species": "Species Name (e.g. Elven Maiden / Human / Android / Spirit / Beast)",
      "age": "Exact age or apparent age / era (e.g. 24 years old / ancient 500-year-old entity)",
      "bodyShape": "Body shape, physique, proportions and height (e.g. tall slender hourglass figure / athletic muscular build)",
      "skinColor": "Skin color, tone, texture, or material (e.g. pale porcelain skin / warm sun-kissed golden-tan)",
      "hairColorStyle": "Hair color, length, and style (e.g. shoulder-length wavy auburn hair with soft braid)",
      "description": "Full physical appearance combining age, body shape, skin color, hair color & style, face, eyes, and details...",
      "pose": "Full body pose description showing head-to-toe figure...",
      "cleanPrompt": "250+ token cover art prompt in 4K 16:9 landscape mode, strictly NO CLOTHING (clothes added by AI), embedding all physical details (age, body shape, skin color, hair color & style, eyes, face, species) and ending with rich background details...",
      "explicitPrompt": "250+ token NSFW cover art prompt in 4K 16:9 landscape mode, nude, strictly no clothing and no objects/props, embedding all physical details (age, body shape, skin color, hair color & style, eyes, face, species) and ending with rich background details..."
    }
  ],
  "baseScene": {
    "sceneTitle": "Base",
    "description": "Base full-body visual objects and character poses for all story characters (strictly NO clothing in any prompt; clothes are added automatically by AI based on context).",
    "prompts": [
      {
        "id": "char1",
        "label": "Character Name (Full Body)",
        "cleanPrompt": "250+ token cover art prompt in 4K 16:9 landscape mode including age, body shape, skin color, hair color and style, face, species, ending with rich background details...",
        "explicitPrompt": "250+ token NSFW cover art prompt (nude, no clothing, no objects) in 4K 16:9 landscape mode including age, body shape, skin color, hair color and style, face, species, ending with rich background details..."
      }
    ]
  },
  "story": "# Full Markdown Story (2,500+ words)...\n\n## Chapter 1: ...",
  "usedOptions": [
    "Options from the dashboard actively woven into the story narrative"
  ],
  "unusedOptions": [
    "Technical and musical options NOT used to write the story narrative"
  ]
}
`;
};

export const GENERATE_SONG_FROM_STORY_PROMPT = (
  storyTitle: string,
  storyText: string,
  technicalOptions: string,
  rating: string = 'PG'
) => {
  return `
You are a master songwriter composing a new song strictly based on an approved Story Mode narrative.

**CRITICAL MANDATE - STORY-BASED SONG GENERATION:**
- Base the lyrics, vocal parts, and song structure strictly on the following approved Story Mode narrative:
================================================================================
STORY TITLE: "${storyTitle}"
APPROVED STORY NARRATIVE:
${storyText}
================================================================================

- **IGNORE PRIOR LYRICS & NARRATIVE OPTIONS:** You MUST ignore any prior lyrics or story-generation options. The story narrative above is your single source of truth for all lyrics, themes, and storytelling.
- **APPLY TECHNICAL MUSICAL OPTIONS:** Integrate the following technical options to construct the song arrangement:
${technicalOptions}

- Content Rating: ${rating}
- Provide complete lyrics with performance tags in square brackets [Verse], [Chorus], [Bridge], [Outro], vocal register cues, musical keys, and tempo indicators.
- Include a specific musical key and tempo at every section.

Return a JSON object with "title", "style", "lyrics", "imagePrompts" (start, middle, end) fields.
`;
};

export const GENERATE_STORY_MODE_COVER_ART_PROMPT = (
  title: string,
  storyText: string,
  baseSceneJson?: string
) => {
  return `
Analyze the approved Story Mode narrative and character base scene for "${title}" to generate Cover Art prompts.

**BASE SCENE & CHARACTERS:**
${baseSceneJson || 'Extract base full-body character poses for all characters in the story as Base.'}

**APPROVED STORY NARRATIVE:**
${storyText}

**COVER ART GENERATION RULES FOR STORY MODE:**
1. **THE BASE SCENE IS TITLED "Base":**
   - Scene 0 / the initial scene MUST be titled "Base" (NOT "Scene 1: Base Characters"). It features all story characters as individual visual objects in full-body poses.
   - Every prompt in "Base" MUST explicitly describe the full physical attributes (age, body shape, skin color, hair color and style, facial details, species) of the character(s) depicted.
   - Strictly NO CLOTHING mentioned in ANY prompt (clean or NSFW). Clothing is added by the downstream image generation AI automatically based on context.
2. **SCENES 1 THROUGH 6 (Pivotal Story Scenes):**
   - Extract SIX pivotal narrative scenes from the story text (titled "Scene 1: [Pivotal Scene Title]", "Scene 2: [Pivotal Scene Title]", etc. up to "Scene 6: [Pivotal Scene Title]").
   - Preserve all story characters created in Step 1/Base across Scenes 1..6, embedding their full physical attributes whenever mentioned or depicted.
3. **MANDATORY CHARACTER DETAILS IN ALL PROMPTS (\`cleanPrompt\` AND \`explicitPrompt\`):**
   - EVERY SINGLE PROMPT string in ALL scenes ("Base", "Scene 1", "Scene 2", etc.) MUST explicitly embed the full individual physical characteristics of EACH character mentioned or depicted in that scene.
   - REQUIRED DETAILS FOR EVERY CHARACTER DEPICTED:
     - **Age** (e.g., 'age 24', 'appearing early-twenties', 'ancient 500-year-old entity')
     - **Body Shape & Physique** (e.g., 'tall slender hourglass figure', 'muscular athletic build', 'petite statuesque frame', 'towering beast posture')
     - **Skin Color, Tone & Texture** (e.g., 'pale alabaster skin', 'warm sun-kissed golden-tan complexion', 'pearlescent blue skin', 'midnight black fur', 'chrome chassis')
     - **Hair Color & Style** (e.g., 'long wavy auburn hair with soft braid', 'raven-black floor-length hair', 'silver-white messy bob', 'glowing plasma mane')
     - **Facial Features & Eyes** (e.g., 'high cheekbones, almond-shaped emerald eyes, species markers')
   - **CRITICAL:** NEVER output bare character names without embedding their full physical attributes! In solo, duo, and group prompts, list these exact physical details for EVERY character present in that scene!
4. **SPECIES INCLUSION MANDATE:** For every character, explicitly specify their exact species (e.g., species: human woman, species: elven maiden, species: android/cyborg, species: feline/cat-person, species: nymph/spirit, species: beast) inside their parenthesized character description.
5. **STRICT NO CLOTHING MANDATE:** NEVER mention any clothes, dresses, shirts, pants, robes, outfits, or garments in ANY prompt!
6. **4K 16:9 LANDSCAPE & BACKGROUND FILLING MANDATE:** All prompts are generated for 4K resolution in 16:9 widescreen landscape mode. To properly fill this 16:9 landscape frame, EVERY SINGLE PROMPT STRING MUST END WITH EXTENSIVE BACKGROUND AND ENVIRONMENTAL INFORMATION (panoramic setting, architecture, scenery, horizon, weather, volumetric atmospheric lighting, depth of field, 16:9 landscape framing, 4K rendering parameters).
7. **PROMPT LENGTH MANDATE:** Standard prompts (\`cleanPrompt\`) MUST NOT exceed 1,500 characters in length. NSFW prompts (\`explicitPrompt\`) have no character length limits. Include rich details covering character physical attributes, posture, backdrop, lighting, and rendering parameters within these limits.

Return JSON in this exact structure:
{
  "scenes": [
    {
      "sceneTitle": "Base",
      "description": "Base full-body visual objects and character poses for all story characters (strictly NO clothing mentioned in any prompt; clothes are added by AI automatically).",
      "prompts": [
        { "id": "char1", "label": "[Character 1 Name] (Full Body)", "cleanPrompt": "250+ token prompt in 4K 16:9 landscape mode including age, body shape, skin color, hair color & style, species, ending with rich background details...", "explicitPrompt": "250+ token NSFW cover art prompt (nude) in 4K 16:9 landscape mode including age, body shape, skin color, hair color & style, species, ending with rich background details..." },
        { "id": "char2", "label": "[Character 2 Name] (Full Body)", "cleanPrompt": "250+ token prompt in 4K 16:9 landscape mode including age, body shape, skin color, hair color & style, species, ending with rich background details...", "explicitPrompt": "250+ token NSFW cover art prompt (nude) in 4K 16:9 landscape mode..." },
        { "id": "group", "label": "All Story Characters Group", "cleanPrompt": "250+ token prompt in 4K 16:9 landscape mode listing full details for ALL characters...", "explicitPrompt": "250+ token NSFW cover art prompt..." }
      ]
    },
    {
      "sceneTitle": "Scene 1: [Pivotal Scene Title]",
      "description": "Summary of what happens in this scene from the story.",
      "prompts": [
        { "id": "char1", "label": "[Character 1 Name]", "cleanPrompt": "250+ token prompt in 4K 16:9 landscape mode featuring Character 1 with age, body shape, skin color, hair color & style, species, ending with rich background details...", "explicitPrompt": "..." },
        { "id": "char2", "label": "[Character 2 Name]", "cleanPrompt": "250+ token prompt in 4K 16:9 landscape mode featuring Character 2...", "explicitPrompt": "..." },
        { "id": "duo1", "label": "[Character 1 & 2 Duo]", "cleanPrompt": "250+ token prompt in 4K 16:9 landscape mode featuring Character 1 and 2 with full physical details for BOTH...", "explicitPrompt": "..." },
        { "id": "group", "label": "All Story Characters Group", "cleanPrompt": "250+ token prompt in 4K 16:9 landscape mode featuring all characters with full physical details for EACH...", "explicitPrompt": "..." },
        { "id": "noSingers", "label": "Scene (No characters)", "cleanPrompt": "250+ token prompt in 4K 16:9 landscape mode...", "explicitPrompt": "..." }
      ]
    }
  ]
}
`;
};

export const ANALYZE_IMAGE_INSPIRATION_PROMPT = (
  seriousness: number = 80,
  userNotes?: string
) => {
  return `Please perform a comprehensive visual and musical analysis of the attached image:

1. **Full Image Visual Description**: Provide an extensive, multi-paragraph breakdown describing the image in high detail (color palette, lighting, subjects, foreground, background, scenic details, textures, and emotional tone).
2. **Narrative Story Generation**: Create an original, engaging story (250-400 words) inspired by the world, scene, characters, and atmosphere visible in this image.
3. **Musical Parameter Translation**: Translate the emotional tone, energy, and visual style into a cohesive song configuration matching the Noor band style:
   - Suggest a poetic song title
   - Select the primary genre and 2-4 sub-styles (such as Folk, Indie Pop, Dream Pop, Celtic Folk, Ambient, Chamber Pop)
   - Select 3-6 complementary instruments (such as Acoustic Guitar, Cello, Bodhran, Piano, Violin, Flute, Bass)
   - Identify 2-4 primary emotions (such as Nostalgic, Serene, Melancholic, Joyful, Mysterious, Romantic)
   - Recommend the ideal lead vocalist (miranda, annelies, fannie, or emma)
   - Propose musical key, time signature (e.g. 4/4, 3/4, 6/8), and tempo BPM (50-160)
   - Provide fine-tuning slider values (0-100) for reverb, harmonics, epic scale, sapphic level, wittyness, weirdness, loudness, complexity, and repetitiveness

Interpretation strictness weight: ${seriousness}% literal match.
${userNotes ? `Additional creator direction: "${userNotes}"` : ''}

Output strictly valid JSON matching the Image Inspiration Schema.`;
};

export const GENERATE_SINGER_ACTION_PROMPT = (
  sceneDetails: {
    title?: string;
    mainSceneText: string;
    locationDescription?: string;
    weatherDescription?: string;
    lightDescription?: string;
    moodDescription?: string;
    activeSingers: Array<{
      id: string;
      name: string;
      role: string;
      action: string;
      wardrobeText?: string;
      basePrompt: string;
      ageLabel: string;
    }>;
    framingDescription?: string;
    styleDescription?: string;
    rating: string;
    baselinePrompt?: string;
  }
) => {
  const singerSections = sceneDetails.activeSingers.map(s => {
    return `- **${s.name}** (${s.role}, ${s.ageLabel}):
  Physical Appearance Base: ${s.basePrompt}
  Action & Pose: ${s.action}
  ${s.wardrobeText ? `Wardrobe: ${s.wardrobeText}` : 'Wardrobe: Default natural setting'}`;
  }).join('\n\n');

  return `Please compile and refine a master image generation prompt for this multi-character scene in strict structured JSON format:

**ACTIVE SCENE CONTEXT:**
- **Scene Title**: ${sceneDetails.title || 'Noor Music Action Scene'}
- **Main Scene Background**: ${sceneDetails.mainSceneText}
${sceneDetails.locationDescription ? `- **Location Setting**: ${sceneDetails.locationDescription}` : ''}
${sceneDetails.weatherDescription ? `- **Weather Condition**: ${sceneDetails.weatherDescription}` : ''}
${sceneDetails.lightDescription ? `- **Lighting**: ${sceneDetails.lightDescription}` : ''}
${sceneDetails.moodDescription ? `- **Mood & Atmosphere**: ${sceneDetails.moodDescription}` : ''}
${sceneDetails.framingDescription ? `- **Framing & Aspect Ratio**: ${sceneDetails.framingDescription}` : ''}
${sceneDetails.styleDescription ? `- **Art Style**: ${sceneDetails.styleDescription}` : ''}
- **Rating / Scene Variation**: ${sceneDetails.rating}

**ACTIVE CHARACTERS & ACTIONS:**
${singerSections}

${sceneDetails.baselinePrompt ? `**BASELINE ASSEMBLED PROMPT (For reference and refinement):**\n${sceneDetails.baselinePrompt}\n` : ''}

**INCLUSIVE COMPILATION MANDATES:**
1. Maintain positive, descriptive scene instructions.
2. Structure the output into separate discrete fields for characters, actions, wardrobes, lighting, weather, framing, and style.
3. Assemble the \`finalPrompt\` field in the exact sequence:
   - Paragraph for each character's physical description (name, age, physical appearance)
   - Paragraph for each character's action and pose
   - Paragraph for each character's wardrobe (if applicable)
   - Paragraph for lighting
   - Paragraph for weather & background environment
   - Paragraph for camera framing
   - Paragraph for art style & rendering quality

Return strictly valid JSON matching the Singer Action Prompt schema.`;
};



