/**
 * Singer Action & Wardrobe AI Integration Logic
 * 
 * Generates inclusive-only prompts and system instructions to integrate
 * a character's chosen action and chosen wardrobe seamlessly into the character prompt.
 * The character prompt is made from two AI-generated texts: one with the action and then the wardrobe.
 */

export interface IntegrateActionPromptParams {
  singerId: string;
  singerName: string;
  singerRole: string;
  actionText: string;
  currentWardrobeText?: string;
  mainSceneText: string;
  locationDescription?: string;
  weatherDescription?: string;
  moodDescription?: string;
  otherCharactersActions?: string;
  includeInstruments?: boolean;
}

export interface IntegrateWardrobePromptParams {
  singerId: string;
  singerName: string;
  singerRole: string;
  wardrobeId: string;
  wardrobeTitle: string;
  wardrobeDetail: string;
  currentActionText?: string;
  mainSceneText: string;
  locationDescription?: string;
  weatherDescription?: string;
  moodDescription?: string;
  includeInstruments?: boolean;
}

/**
 * Build AI prompt to integrate a chosen Action into the character prompt.
 * If wardrobe is present, combines the action text with the wardrobe text.
 */
export function buildIntegrateActionPrompt(params: IntegrateActionPromptParams): {
  prompt: string;
  systemInstructions: string;
  jobTitle: string;
} {
  const {
    singerId,
    singerName,
    singerRole,
    actionText,
    currentWardrobeText = '',
    mainSceneText,
    locationDescription = '',
    weatherDescription = '',
    moodDescription = '',
    otherCharactersActions = '',
    includeInstruments = false
  } = params;

  const roleText = includeInstruments ? ` (${singerRole})` : '';
  const isReporter = singerId === 'senna';

  const roleGuidance = isReporter
    ? `Role context: ${singerName} is a media correspondent and journalist holding a press microphone, tablet, or camera taking photos of friends.`
    : (includeInstruments 
        ? `Role context: ${singerName} is a musician in the quartet Noor.`
        : `Role context: ${singerName} is an athletic tomboy girl.`);

  const safeMainScene = typeof mainSceneText === 'string' ? mainSceneText.trim() : (mainSceneText ? String(mainSceneText).trim() : '');
  const safeAction = typeof actionText === 'string' ? actionText.trim() : (actionText ? String(actionText).trim() : '');
  const safeWardrobe = typeof currentWardrobeText === 'string' ? currentWardrobeText.trim() : '';

  const prompt = `Integrate the chosen action for ${singerName}${roleText} into a vivid, cohesive 1-sentence pose description that harmoniously matches the main scene background and nearby companions.
${safeWardrobe ? `Then append the active wardrobe description as the second sentence.` : ''}

CHOSEN ACTION FOR ${singerName.toUpperCase()}:
"${safeAction}"

${safeWardrobe ? `ACTIVE WARDROBE OUTFIT:\n"${safeWardrobe}"\n` : ''}

MAIN SCENE & BACKGROUND SETTING:
"${safeMainScene}"

${locationDescription ? `LOCATION SETTING:\n${locationDescription}\n` : ''}
${weatherDescription ? `WEATHER & LIGHTING:\n${weatherDescription}\n` : ''}
${moodDescription ? `SCENE MOOD:\n${moodDescription}\n` : ''}
${otherCharactersActions ? `OTHER CHARACTERS' POSES & ACTIVITIES:\n${otherCharactersActions}\n` : ''}
${roleGuidance}
${includeInstruments ? `INSTRUMENT GUIDANCE: ${singerName} may hold or play an instrument appropriate to her musical role.` : ''}

DIRECTIVES FOR INTEGRATION:
- Sentence 1 (Action): Create a single, elegant sentence describing ${singerName}'s physical pose, gesture, facial expression, and active interaction matching "${safeAction}" in this setting.
${safeWardrobe ? `- Sentence 2 (Wardrobe): Include the wardrobe description ("${safeWardrobe}") as the second sentence.` : ''}
- Return the combined character prompt consisting of: [Action sentence].${safeWardrobe ? ' [Wardrobe sentence].' : ''}

Return JSON in this format:
{
  "title": "Integrated Action: ${singerName}",
  "action": "1-sentence integrated action description",
  ${safeWardrobe ? `"wardrobe": "${safeWardrobe.replace(/"/g, '\\"')}",` : ''}
  "prompt": "${safeWardrobe ? '[Action sentence]. [Wardrobe sentence].' : '[Action sentence].'}"
}`;

  const systemInstructions = `You are a creative photo art director and scene coordinator. You integrate character poses into cohesive group scenes. Always return valid, clean JSON with keys "title", "action", and "prompt".`;

  return {
    prompt,
    systemInstructions,
    jobTitle: `Integrate Action: ${singerName}`
  };
}

/**
 * Build AI prompt to integrate a chosen Wardrobe into the character prompt.
 * Formulates the tailored wardrobe description and appends it to the action description.
 */
export function buildIntegrateWardrobePrompt(params: IntegrateWardrobePromptParams): {
  prompt: string;
  systemInstructions: string;
  jobTitle: string;
} {
  const {
    singerId,
    singerName,
    singerRole,
    wardrobeId,
    wardrobeTitle,
    wardrobeDetail,
    currentActionText = '',
    mainSceneText,
    locationDescription = '',
    weatherDescription = '',
    moodDescription = '',
    includeInstruments = false
  } = params;

  const roleText = includeInstruments ? ` (${singerRole})` : '';
  const isReporter = singerId === 'senna';

  const roleGuidance = isReporter
    ? `Role context: ${singerName} is a media correspondent and journalist.`
    : (includeInstruments 
        ? `Role context: ${singerName} is a musician in Noor.`
        : `Role context: ${singerName} is an athletic tomboy girl.`);

  const safeMainScene = typeof mainSceneText === 'string' ? mainSceneText.trim() : (mainSceneText ? String(mainSceneText).trim() : '');
  const safeAction = typeof currentActionText === 'string' ? currentActionText.trim() : '';

  const prompt = `Integrate the chosen wardrobe outfit for ${singerName}${roleText} into a stylish, vivid 1-sentence outfit description tailored to her aesthetic style and the scene setting.
Combine this with her action description to form the complete character prompt: [Action sentence]. [Wardrobe sentence].

SELECTED WARDROBE OUTFIT:
Title: "${wardrobeTitle}"
Details: "${wardrobeDetail}"

${safeAction ? `CURRENT ACTION / POSE FOR ${singerName.toUpperCase()}:\n"${safeAction}"\n` : ''}

MAIN SCENE & BACKGROUND SETTING:
"${safeMainScene}"

${locationDescription ? `LOCATION SETTING:\n${locationDescription}\n` : ''}
${weatherDescription ? `WEATHER & LIGHTING:\n${weatherDescription}\n` : ''}
${moodDescription ? `SCENE MOOD:\n${moodDescription}\n` : ''}
${roleGuidance}

DIRECTIVES FOR INTEGRATION:
- Formulate a precise, elegant 1-sentence wardrobe description starting with "Wearing ..." describing the fabrics, cuts, colors, and accessories from the selected outfit.
${safeAction ? `- Preserve the existing action description ("${safeAction}") as the first sentence.` : `- Create a natural 1-sentence action for ${singerName} as the first sentence.`}
- The full character prompt MUST be: [Action sentence]. [Wardrobe sentence].

Return JSON in this format:
{
  "title": "Integrated Wardrobe: ${singerName}",
  "action": "${safeAction ? safeAction.replace(/"/g, '\\"') : '1-sentence action'}",
  "wardrobe": "Wearing [detailed 1-sentence wardrobe description]",
  "prompt": "[Action sentence]. Wearing [detailed 1-sentence wardrobe description]"
}`;

  const systemInstructions = `You are a fashion stylist and art director. Return clean, valid JSON with keys "title", "action", "wardrobe", and "prompt". Ensure the prompt combines the action sentence followed by the wardrobe sentence.`;

  return {
    prompt,
    systemInstructions,
    jobTitle: `Integrate Wardrobe: ${singerName} (${wardrobeTitle})`
  };
}
