/**
 * Scene Environment and Atmosphere Options Catalogue
 * 
 * Provides structured options for:
 * 1. Weather conditions
 * 2. Light groups and specific light settings
 * 3. Mood groups and specific mood settings
 * 
 * All descriptions follow inclusive-only framing for image and prompt generation.
 */

export interface WeatherOption {
  id: string;
  label: string;
  icon: string;
  description: string;
}

export interface LightOption {
  id: string;
  label: string;
  groupId: string;
  description: string;
}

export interface LightGroup {
  id: string;
  name: string;
  icon: string;
  description: string;
  lights: LightOption[];
}

export interface MoodOption {
  id: string;
  label: string;
  groupId: string;
  description: string;
}

export interface MoodGroup {
  id: string;
  name: string;
  icon: string;
  description: string;
  moods: MoodOption[];
}

// ---------------------------------------------------------------------------
// 1. WEATHER OPTIONS (Split from Lighting)
// ---------------------------------------------------------------------------
export const WEATHER_CONDITIONS: WeatherOption[] = [
  { id: 'none', label: 'None (Default)', icon: '🌤️', description: 'Natural ambient outdoor atmospheric weather' },
  { id: 'clear_sunny', label: 'Clear & Sunny', icon: '☀️', description: 'Crystal-clear blue skies with warm sunny weather and crisp visibility' },
  { id: 'golden_sunset', label: 'Golden Sunset', icon: '🌅', description: 'Warm evening sunset sky with radiant amber tones and long gentle shadows' },
  { id: 'soft_overcast', label: 'Soft Overcast', icon: '☁️', description: 'Gentle overcast cloud cover with diffused, balanced natural outdoor atmosphere' },
  { id: 'gentle_rain', label: 'Gentle Rain', icon: '🌧️', description: 'Gentle falling raindrops, glossy wet pavement and leaves, and fresh rain mist' },
  { id: 'passing_shower', label: 'Passing Sun Shower', icon: '🌦️', description: 'Sun shower with raindrops glistening under breaking sunlight and subtle rainbow sheen' },
  { id: 'winter_snow', label: 'Winter Snow & Frost', icon: '❄️', description: 'Fresh white snowfall blanketing surfaces, crisp frost details, and cool winter air' },
  { id: 'morning_fog', label: 'Morning Mist & Fog', icon: '🌫️', description: 'Atmospheric morning fog drifting through the scenery with soft dreamy depth' },
  { id: 'autumn_breeze', label: 'Crisp Autumn Wind', icon: '🍂', description: 'Crisp autumn breeze with golden leaves swirling in the air' },
  { id: 'spring_breeze', label: 'Fresh Spring Breeze', icon: '🌸', description: 'Fresh gentle spring breeze with blooming blossoms and fresh green foliage' },
  { id: 'starry_night', label: 'Clear Starry Night', icon: '✨', description: 'Clear night sky filled with stars and subtle cosmic luminescence' },
  { id: 'coastal_sea_breeze', label: 'Coastal Sea Breeze', icon: '🌊', description: 'Invigorating North Sea ocean breeze, rolling marram dune grass, and salty sea air' }
];

// ---------------------------------------------------------------------------
// 2. LIGHT GROUPS & SPECIFIC LIGHTS
// ---------------------------------------------------------------------------
export const LIGHT_GROUPS: LightGroup[] = [
  {
    id: 'outdoors',
    name: 'Outdoors & Daylight',
    icon: '☀️',
    description: 'Natural sun, golden hour, and outdoor daylight illumination',
    lights: [
      { id: 'none', label: 'None / Ambient Outdoor', groupId: 'outdoors', description: 'Balanced natural outdoor daylight' },
      { id: 'bright_sunlight', label: 'Bright Midday Sunlight', groupId: 'outdoors', description: 'Bright sunny natural daylight, crystal-clear blue skies, gentle sunbeams, and crisp natural shadows' },
      { id: 'golden_hour_flare', label: 'Golden Hour & Sun Flare', groupId: 'outdoors', description: 'Warm golden hour sunset lighting, long dramatic shadows, radiant amber rim light, and soft luminous evening glow' },
      { id: 'dappled_sunlight', label: 'Dappled Canopy Sunlight', groupId: 'outdoors', description: 'Dappled sunbeams filtering through tree leaves and foliage with intricate light and shadow patterns' },
      { id: 'soft_diffused_daylight', label: 'Soft Diffused Daylight', groupId: 'outdoors', description: 'Softly diffused natural daylight creating gentle wrapping light on subjects' },
      { id: 'crisp_morning_light', label: 'Crisp Early Morning Sunlight', groupId: 'outdoors', description: 'Fresh low-angle morning sunlight with crisp clarity and cool morning radiance' },
      { id: 'twilight_dusk', label: 'Twilight Dusk & Blue Hour', groupId: 'outdoors', description: 'Twilight dusk with deep indigo and violet evening sky, warm ambient glow, and subtle twilight lighting' },
      { id: 'overcast_soft_light', label: 'Soft Overcast Illumination', groupId: 'outdoors', description: 'Diffused soft overcast daylight, gentle shadows, natural even illumination, and rich balanced color depth' }
    ]
  },
  {
    id: 'indoors',
    name: 'Indoors & Architecture',
    icon: '🏠',
    description: 'Cozy lamps, hearth fires, skylights, and interior ambient lighting',
    lights: [
      { id: 'none', label: 'None / Ambient Interior', groupId: 'indoors', description: 'Warm interior ambient room lighting' },
      { id: 'warm_fireplace_hearth', label: 'Rustic Fireplace Hearth Glow', groupId: 'indoors', description: 'Warm flickering fireplace light casting rich amber and golden glow on wood and brick surfaces' },
      { id: 'skylight_beams', label: 'Attic Skylight Beams', groupId: 'indoors', description: 'Natural daylight beams streaming down from roof skylights, illuminating dust motes and wooden floorboards' },
      { id: 'vintage_brass_lamps', label: 'Vintage Brass Table Lamps', groupId: 'indoors', description: 'Warm cozy lamp light from brass table lamps and parchment shades creating intimate pools of light' },
      { id: 'candlelight_ambient', label: 'Candlelight & Lantern Glow', groupId: 'indoors', description: 'Soft romantic candlelight and warm vintage lanterns creating intimate golden illumination' },
      { id: 'vanity_mirror_bulbs', label: 'Vanity Mirror Dressing Lights', groupId: 'indoors', description: 'Bright warm globe vanity mirror bulbs casting balanced, flattering portrait light' },
      { id: 'cozy_kitchen_warmth', label: 'Country Kitchen Daylight & Pendants', groupId: 'indoors', description: 'Natural window daylight mixed with warm vintage pendant lights over rustic wooden tables' }
    ]
  },
  {
    id: 'natural_ambient',
    name: 'Natural & Atmospheric',
    icon: '🌙',
    description: 'Moonlight, atmospheric fog glow, and celestial illumination',
    lights: [
      { id: 'none', label: 'None / Subtle Natural', groupId: 'natural_ambient', description: 'Subtle atmospheric ambient illumination' },
      { id: 'moonlight_rim', label: 'Silver Moonlight & Stars', groupId: 'natural_ambient', description: 'Clear dark night sky filled with glittering stars, subtle moonlit rim lighting, and deep nocturnal contrast' },
      { id: 'misty_fog_glow', label: 'Misty Morning Fog Glow', groupId: 'natural_ambient', description: 'Atmospheric morning fog rolling softly through the scene, dreamy diffused lighting, and mysterious depth' },
      { id: 'wet_rain_reflections', label: 'Rainy Street Gloss Reflections', groupId: 'natural_ambient', description: 'Gentle falling raindrops, glossy wet ground reflections, atmospheric cool mist, and glistening water droplets' },
      { id: 'winter_frost_glow', label: 'Winter Snow & Frost Radiance', groupId: 'natural_ambient', description: 'Fresh white snowfall covering the ground, crisp frost textures, cool winter daylight, and visible chilly atmosphere' },
      { id: 'autumn_golden_light', label: 'Autumn Low Amber Sunshine', groupId: 'natural_ambient', description: 'Low warm autumn seasonal sunshine highlighting golden foliage and swirling leaves' }
    ]
  },
  {
    id: 'studio_cinematic',
    name: 'Studio & Cinematic',
    icon: '🎬',
    description: 'Professional photography softboxes, key lights, and dramatic rim lighting',
    lights: [
      { id: 'none', label: 'None / Standard Studio', groupId: 'studio_cinematic', description: 'Clean balanced commercial studio lighting' },
      { id: 'softbox_portrait_key', label: 'Large Softbox Key & Fill', groupId: 'studio_cinematic', description: 'Professional studio photography setup with large diffused octabox key light and soft fill' },
      { id: 'rembrandt_lighting', label: 'Classic Rembrandt Lighting', groupId: 'studio_cinematic', description: 'Artistic Rembrandt portrait lighting with dramatic single-side key light and subtle cheek shadow triangle' },
      { id: 'high_fashion_editorial', label: 'High-Fashion Editorial Key & Rim', groupId: 'studio_cinematic', description: 'High-fashion editorial lighting with crisp beauty dish, defined rim highlights, and glossy contrast' },
      { id: 'cinematic_backlight', label: 'Dramatic Cinematic Backlighting', groupId: 'studio_cinematic', description: 'Cinematic silhouette and edge backlighting emphasizing subject profiles and hair textures' },
      { id: 'colored_gel_accents', label: 'Warm Lavender & Amber Gels', groupId: 'studio_cinematic', description: 'Subtle artistic dual-tone lighting with soft lavender ambient fill and warm amber key accents' }
    ]
  },
  {
    id: 'special',
    name: 'Special & Festive',
    icon: '✨',
    description: 'Festoon fairy lights, neon city accents, and concert stage lighting',
    lights: [
      { id: 'none', label: 'None / Festive Ambient', groupId: 'special', description: 'Subtle festive atmospheric lighting' },
      { id: 'festoon_terrace_lights', label: 'Festoon Garden String Lights', groupId: 'special', description: 'Festoon cafe string bulb lights draped overhead, glowing with warm golden Edison filament radiance' },
      { id: 'stage_spotlight_rig', label: 'Concert Stage Spotlight Rigs', groupId: 'special', description: 'Concert hall stage with dynamic spotlight rigs, volumetric light cones, and subtle atmospheric haze' },
      { id: 'neon_urban_glow', label: 'Neon City Twilight Glow', groupId: 'special', description: 'Urban evening atmosphere with vibrant neon reflections on cobblestones and canal waters' },
      { id: 'fairy_lights_canopy', label: 'Whimsical Fairy Light Canopy', groupId: 'special', description: 'Hundreds of delicate sparkling warm fairy lights creating magical bokeh highlights' }
    ]
  }
];

// ---------------------------------------------------------------------------
// 3. MOOD GROUPS & SPECIFIC MOODS
// ---------------------------------------------------------------------------
export const MOOD_GROUPS: MoodGroup[] = [
  {
    id: 'joyful_energetic',
    name: 'Joyful & Energetic',
    icon: '🎉',
    description: 'Happy, cheerful, partying, euphoric, and playful moods',
    moods: [
      { id: 'none', label: 'None / Natural Band Mood', groupId: 'joyful_energetic', description: 'Natural authentic band atmosphere' },
      { id: 'happy', label: 'Happy & Cheerful', groupId: 'joyful_energetic', description: 'Bright cheerful energy, joyful radiant smiles, carefree laughter, and upbeat uplifting atmosphere' },
      { id: 'partying', label: 'Energetic & Partying', groupId: 'joyful_energetic', description: 'High-energy celebration, dynamic movement, excited expressions, spirited enthusiasm, and festive buzz' },
      { id: 'euphoric', label: 'Euphoric & Triumphant', groupId: 'joyful_energetic', description: 'Euphoric triumph, triumphant raised arms, beaming exhilaration, and overwhelming musical ecstasy' },
      { id: 'playful', label: 'Playful & Whimsical', groupId: 'joyful_energetic', description: 'Whimsical spontaneity, lively animated expressions, teasing camaraderie, and vibrant youthful fun' },
      { id: 'silly', label: 'Silly & Tomboy Humor', groupId: 'joyful_energetic', description: 'Playful goofy shenanigans, cheeky grins, funny candid interactions, and lighthearted tomboy humor' }
    ]
  },
  {
    id: 'intimate_cozy',
    name: 'Intimate & Cozy',
    icon: '☕',
    description: 'Romantic, cozy, warm, resting, and nostalgic atmosphere',
    moods: [
      { id: 'none', label: 'None / Natural Cozy', groupId: 'intimate_cozy', description: 'Homely band atmosphere' },
      { id: 'romantic', label: 'Romantic & Tender', groupId: 'intimate_cozy', description: 'Intimate and tender romantic mood, gentle affectionate smiles, soft warm golden atmosphere, and heartfelt emotional connection' },
      { id: 'cozy', label: 'Cozy & Warm Homely', groupId: 'intimate_cozy', description: 'Warm comforting atmosphere, relaxed homely vibes, soft cozy intimacy, and gentle content smiles' },
      { id: 'sleeping', label: 'Peaceful & Resting', groupId: 'intimate_cozy', description: 'Deep tranquil rest, peaceful resting posture, relaxed serene facial expressions, and quiet calm stillness' },
      { id: 'nostalgic', label: 'Nostalgic & Sentimental', groupId: 'intimate_cozy', description: 'Dreamy sentimental nostalgia, wistful faraway gazes, vintage warmth, and tender cherished memories' },
      { id: 'sisterly_camaraderie', label: 'Sisterly Affection & Closeness', groupId: 'intimate_cozy', description: 'Heartfelt sisterly camaraderie, leaning affectionately together, gentle comforting smiles, and genuine bond' }
    ]
  },
  {
    id: 'calm_serene',
    name: 'Calm & Serene',
    icon: '🌿',
    description: 'Serene, relaxed, peaceful, and contemplative moods',
    moods: [
      { id: 'none', label: 'None / Natural Calm', groupId: 'calm_serene', description: 'Calm authentic presence' },
      { id: 'serene', label: 'Serene & Mindful', groupId: 'calm_serene', description: 'Calm mindful serenity, gentle inner peace, meditative stillness, and soothing harmonious presence' },
      { id: 'relaxed', label: 'Relaxed & Chill', groupId: 'calm_serene', description: 'Laid-back casual relaxation, unhurried easygoing demeanor, comfortable lounging, and mellow peace' },
      { id: 'pensive_contemplative', label: 'Pensive & Contemplative', groupId: 'calm_serene', description: 'Thoughtful quiet contemplation, gazing into the distance, and reflective peaceful mindfulness' },
      { id: 'sad', label: 'Melancholic & Reflective', groupId: 'calm_serene', description: 'Somber melancholic mood, pensive emotional expressions, gentle downcast gaze, and quiet contemplative depth' }
    ]
  },
  {
    id: 'creative_focused',
    name: 'Creative & Focused',
    icon: '🎨',
    description: 'Focused artistic flow, studio rehearsal, vintage retro character',
    moods: [
      { id: 'none', label: 'None / Natural Studio Flow', groupId: 'creative_focused', description: 'Natural creative workflow' },
      { id: 'focused', label: 'Focused Creative Flow', groupId: 'creative_focused', description: 'Deep creative concentration, engaged collaborative focus, passionate artistry, and dedicated craftsmanship' },
      { id: 'rehearsal_intensity', label: 'Passionate Rehearsal Drive', groupId: 'creative_focused', description: 'Dynamic musical passion, focused rehearsal intensity, collaborative eye contact, and rhythmic groove' },
      { id: 'vintage', label: 'Vintage & Retro Nostalgia', groupId: 'creative_focused', description: 'Classic retro charm, timeless period aesthetic, authentic vintage character, and nostalgic flair' }
    ]
  },
  {
    id: 'dramatic_bold',
    name: 'Dramatic & Bold',
    icon: '⚡',
    description: 'Cinematic drama, rebellious swagger, and mysterious tension',
    moods: [
      { id: 'none', label: 'None / Natural Confidence', groupId: 'dramatic_bold', description: 'Natural confident presence' },
      { id: 'dramatic', label: 'Dramatic & Cinematic Tension', groupId: 'dramatic_bold', description: 'Intense dramatic tension, powerful focused eye contact, striking poses, and cinematic gravitas' },
      { id: 'rebellious', label: 'Rebellious Tomboy Swagger', groupId: 'dramatic_bold', description: 'Bold rebellious attitude, confident smirk, edgy tomboy swagger, and fierce independent spirit' },
      { id: 'mysterious', label: 'Mysterious & Enigmatic', groupId: 'dramatic_bold', description: 'Enigmatic mysterious mood, subtle intriguing expressions, moody low-key shadows, and captivating curiosity' },
      { id: 'editorial_poise', label: 'High-Fashion Poise & Elegance', groupId: 'dramatic_bold', description: 'Commanding editorial poise, elegant posture, captivating direct eye contact, and sophisticated presence' }
    ]
  }
];

// ---------------------------------------------------------------------------
// HELPER FUNCTIONS (Pure Logic)
// ---------------------------------------------------------------------------
export function getLightGroupById(groupId: string): LightGroup | undefined {
  return LIGHT_GROUPS.find(g => g.id === groupId);
}

export function getLightsForGroup(groupId: string): LightOption[] {
  const group = getLightGroupById(groupId);
  return group ? group.lights : [];
}

export function getLightById(lightId: string, groupId?: string): LightOption | undefined {
  if (groupId) {
    const group = getLightGroupById(groupId);
    const found = group?.lights.find(l => l.id === lightId);
    if (found) return found;
  }
  for (const group of LIGHT_GROUPS) {
    const found = group.lights.find(l => l.id === lightId);
    if (found) return found;
  }
  return undefined;
}

export function getMoodGroupById(groupId: string): MoodGroup | undefined {
  return MOOD_GROUPS.find(g => g.id === groupId);
}

export function getMoodsForGroup(groupId: string): MoodOption[] {
  const group = getMoodGroupById(groupId);
  return group ? group.moods : [];
}

export function getMoodById(moodId: string, groupId?: string): MoodOption | undefined {
  if (groupId) {
    const group = getMoodGroupById(groupId);
    const found = group?.moods.find(m => m.id === moodId);
    if (found) return found;
  }
  for (const group of MOOD_GROUPS) {
    const found = group.moods.find(m => m.id === moodId);
    if (found) return found;
  }
  return undefined;
}

export function getWeatherById(weatherId: string): WeatherOption | undefined {
  return WEATHER_CONDITIONS.find(w => w.id === weatherId);
}
