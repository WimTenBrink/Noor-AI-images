/**
 * Remix Prompt Suggestions Library
 * Pure data and constants containing comprehensive suggestions for remixing scene prompts.
 * Strictly organized with first two mandatory items:
 * 1. Clean & reorganize prompt
 * 2. Fix prompt for WAN 2.1 Video (Resolve "Invalid content" / Safety error)
 */

export interface RemixSuggestionItem {
  id: string;
  label: string;
  command: string;
  description?: string;
  badge?: string;
}

export interface RemixSuggestionCategory {
  id: string;
  title: string;
  iconName: string;
  items: RemixSuggestionItem[];
}

export const SUGGESTION_CLEAN_REORGANIZE = '🧹 Clean & organize prompt (visible only, proper order & line breaks)';
export const SUGGESTION_FIX_WAN_SAFETY = '🛡️ Fix prompt for WAN 2.1 Video (Resolve "Invalid content" / Safety error)';

export const REMIX_SUGGESTION_CATEGORIES: RemixSuggestionCategory[] = [
  {
    id: 'essential',
    title: '⚡ Essential Structuring & WAN Safety Fix',
    iconName: 'Wand2',
    items: [
      {
        id: 'clean_organize',
        label: SUGGESTION_CLEAN_REORGANIZE,
        command: 'Clean up the prompt, remove all non-visible data (such as vocal roles like alto/soprano, musical roles, and unseen traits), and organize the scene into canonical section order with clean line breaks: Character Appearances -> Actions -> Wardrobe -> Lighting -> Weather & Setting -> Framing -> Artistic Style.',
        description: 'Enforces canonical 7-section order and strips all non-visible text',
        badge: 'Recommended'
      },
      {
        id: 'wan_safety_fix',
        label: SUGGESTION_FIX_WAN_SAFETY,
        command: 'Fix prompt for WAN 2.1 Video generator: neutralize any sensitive phrasing, remove ambiguous anatomy terms, strip all non-visible meta descriptions, and reformat into safe cinematic photorealistic video prompt syntax to eliminate "Invalid content" safety flags.',
        description: 'Eliminates WAN video safety triggers and rewords to clean photorealistic syntax',
        badge: 'WAN Fix'
      }
    ]
  },
  {
    id: 'wardrobe_reduction',
    title: '👙 Wardrobe Reduction, Summer & Minimalist Clothing',
    iconName: 'Sparkles',
    items: [
      {
        id: 'remove_jackets_layers',
        label: '🧥 Remove heavy jackets, coats, and outer layered clothing',
        command: 'Remove all heavy jackets, outer coats, sweaters, and layered garments. Dress subjects in simple, lightweight single-layer attire.'
      },
      {
        id: 'summer_beachwear_bikini',
        label: '👙 Reduce clothes to lightweight summer beachwear and bikini',
        command: 'Change wardrobe to lightweight vibrant summer beachwear: Miranda in a stylish coral two-piece bikini, Annelies in a sun-yellow halter bikini top with matching beach wrap.'
      },
      {
        id: 'sleeveless_crop_shorts',
        label: '🎽 Switch to casual sleeveless crop tops and distressed denim shorts',
        command: 'Wardrobe update: sleeveless ribbed cotton crop tank tops paired with casual high-waisted denim cutoff shorts.'
      },
      {
        id: 'remove_all_accessories',
        label: '🕶️ Remove all hats, glasses, jewelry, and accessories',
        command: 'Remove all accessories completely: no hats, no sunglasses, no jewelry, no necklaces, no earrings, and no wristwatches.'
      },
      {
        id: 'barefoot_summer',
        label: '👣 Remove shoes and socks for natural barefoot appearance',
        command: 'Remove all footwear and socks: characters are naturally barefoot on the soft ground.'
      },
      {
        id: 'sheer_breezy_linen',
        label: '👗 Switch to lightweight airy sheer linen summer dresses',
        command: 'Wardrobe update: lightweight, breezy sheer white linen summer dresses with thin spaghetti straps that flutter gently in the warm air.'
      },
      {
        id: 'backless_halter_sundress',
        label: '✨ Change to open-back lightweight summer halter sundresses',
        command: 'Wardrobe update: elegant open-back halter sundresses in soft pastel shades of lavender and sky blue.'
      },
      {
        id: 'minimalist_solid_cotton',
        label: '👕 Simplify attire to minimalist solid-tone cotton tops and shorts',
        command: 'Wardrobe: clean minimalist solid-color cotton scoop-neck tops and relaxed cotton shorts without patterns or logos.'
      },
      {
        id: 'activewear_athletic_tops',
        label: '🏃 Switch to breathable athletic sports bras and running shorts',
        command: 'Wardrobe: sleek breathable athletic sports tank tops and fitted activewear running shorts.'
      },
      {
        id: 'retro_swimwear',
        label: '🏊 Change to vintage 1970s retro one-piece poolside swimsuits',
        command: 'Wardrobe: vintage 1970s retro one-piece swimsuits with classic scoop necklines in striped seaside colors.'
      },
      {
        id: 'strip_props_bags',
        label: '🎒 Strip all bags, backpacks, belts, and handheld props',
        command: 'Remove all bags, purses, belts, straps, and handheld objects from the characters for a completely clean silhouette.'
      }
    ]
  },
  {
    id: 'lighting',
    title: '🌅 Atmospheric Lighting & Time of Day',
    iconName: 'Sun',
    items: [
      {
        id: 'golden_hour_rim',
        label: '🌅 Add warm golden sunset with glowing edge rim lighting',
        command: 'Lighting: Low-angle golden hour sunset casting warm amber rim illumination across hair and shoulders with soft volumetric lens flare.'
      },
      {
        id: 'blue_hour_twilight',
        label: '🌌 Apply moody blue hour twilight with gentle ambient glow',
        command: 'Lighting: Cinematic blue hour twilight with deep indigo ambient shadows and delicate soft warm practical accent glow.'
      },
      {
        id: 'volumetric_god_rays',
        label: '✨ Infuse dramatic cinematic volumetric god rays through trees',
        command: 'Lighting: Dramatic volumetric shafts of natural sunlight breaking through tree branches, creating visible radiant light beams.'
      },
      {
        id: 'studio_softbox_diffusion',
        label: '💡 Switch to clean studio softbox lighting with soft diffusion',
        command: 'Lighting: Professional portrait studio lighting with a large octabox key light and gentle bounce fill, rendering smooth natural skin gradients.'
      },
      {
        id: 'warm_candlelight_intimate',
        label: '🕯️ Add intimate warm candlelight with flickering amber glow',
        command: 'Lighting: Intimate warm candlelit ambiance with soft amber glow illuminating facial features and gentle deep falloff shadows.'
      },
      {
        id: 'noir_chiaroscuro',
        label: '🎬 Apply high-contrast dramatic chiaroscuro key lighting',
        command: 'Lighting: Dramatic chiaroscuro lighting with a strong directional key light creating bold sculptural shadows and highlights.'
      },
      {
        id: 'cool_moonlight',
        label: '🌙 Add cool midnight moonlight illumination with soft shadows',
        command: 'Lighting: Cool silvery moonlight from above casting subtle blue-silver sheen and serene nighttime shadows.'
      },
      {
        id: 'neon_city_reflections',
        label: '🏮 Add vibrant cyberpunk neon city reflections (magenta & cyan)',
        command: 'Lighting: Dual-tone cinematic neon street lighting with vibrant magenta rim light and soft cyan ambient fill reflections.'
      }
    ]
  },
  {
    id: 'setting_environment',
    title: '🌾 Background Setting & Weather Atmosphere',
    iconName: 'TreePine',
    items: [
      {
        id: 'sun_drenched_beach',
        label: '🏖️ Transport scene to a sun-drenched coastal beach and waves',
        command: 'Main background scene: Sun-drenched golden sand beach with gentle turquoise ocean waves rolling in under a clear azure sky.'
      },
      {
        id: 'wildflower_summer_meadow',
        label: '🌸 Set scene in a lush blooming wildflower meadow under open skies',
        command: 'Main background scene: Lush rolling green meadow filled with blooming wild poppies, chamomile, and tall summer grass swaying in the breeze.'
      },
      {
        id: 'modern_artist_loft',
        label: '🎨 Place in an airy modern artist loft with tall sunlit windows',
        command: 'Main background scene: Spacious industrial artist loft with exposed brick walls, polished concrete floors, and large floor-to-ceiling sunlit windows.'
      },
      {
        id: 'acoustic_studio_wood',
        label: '🎙️ Move to an authentic cozy acoustic recording studio',
        command: 'Main background scene: Warm vintage recording studio interior with acoustic wood slat wall panels, vintage microphones, and warm ambient lamps.'
      },
      {
        id: 'pine_forest_dawn_mist',
        label: '🌲 Set in a serene pine forest with morning dew and mist',
        command: 'Weather Condition & Setting: Serene Scandinavian pine forest at daybreak with soft morning mist hovering above mossy ground.'
      },
      {
        id: 'european_cafe_terrace',
        label: '☕ Place on a lively European cobblestone café terrace',
        command: 'Main background scene: Charming outdoor sidewalk café terrace on a sunlit European cobblestone square with bistro tables.'
      },
      {
        id: 'cherry_blossom_breeze',
        label: '🌸 Add gentle cherry blossom flower petals drifting in the breeze',
        command: 'Weather & Background: Gentle warm spring breeze carrying delicate pink cherry blossom petals fluttering softly through the air.'
      },
      {
        id: 'rainy_moody_haze',
        label: '🌧️ Add soft gentle rain mist with atmospheric vapor haze',
        command: 'Weather Condition: Gentle atmospheric morning rain drizzle with glossy wet surface reflections and soft ambient mist.'
      }
    ]
  },
  {
    id: 'actions_expressions',
    title: '💃 Actions, Poses & Interpersonal Dynamics',
    iconName: 'Users',
    items: [
      {
        id: 'joyful_shared_laugh',
        label: '😄 Show Miranda and Annelies sharing a warm, joyful laugh',
        command: 'Action & Expression: Miranda and Annelies are looking toward each other, caught in a moment of genuine spontaneous laughter with bright warm smiles.'
      },
      {
        id: 'serene_confident_gaze',
        label: '✨ Characters facing camera with serene, confident gentle smiles',
        command: 'Action & Expression: Both subjects standing naturally, facing the camera with calm, confident, and gentle welcoming smiles.'
      },
      {
        id: 'windblown_walking_stride',
        label: '🚶 Add dynamic mid-motion walking stride with flowing hair',
        command: 'Action & Pose: Walking forward together in a natural relaxed stride, with gentle wind blowing strands of hair across their faces in motion.'
      },
      {
        id: 'acoustic_guitar_session',
        label: '🎸 Pose characters holding acoustic guitars in live musical harmony',
        command: 'Action: Miranda fingerpicking an acoustic dreadnought guitar while Annelies strums rhythm chords, singing together in harmony.'
      },
      {
        id: 'leaning_wooden_fence',
        label: '🌾 Position characters leaning comfortably against a rustic fence',
        command: 'Action & Pose: Miranda and Annelies leaning gracefully against a weathered rustic timber rail fence, relaxed and carefree.'
      },
      {
        id: 'contemplative_horizon',
        label: '🌅 Peaceful contemplative expressions gazing toward the horizon',
        command: 'Action & Expression: Subtle profile view with characters gazing peacefully toward the distant horizon with dreamy, reflective expressions.'
      }
    ]
  },
  {
    id: 'camera_framing',
    title: '🎥 Camera Framing & Cinematic Lens',
    iconName: 'Camera',
    items: [
      {
        id: 'wide_cinematic_35mm',
        label: '🎬 Shift to wide cinematic 35mm establishing composition',
        command: 'Character framing: Wide cinematic 35mm landscape shot capturing full body figures in harmony with the surrounding expansive environment.'
      },
      {
        id: 'portrait_85mm_bokeh',
        label: '📸 Switch to intimate 85mm portrait with creamy shallow bokeh',
        command: 'Character framing: Intimate 85mm medium close-up portrait with an f/1.8 shallow depth of field rendering the background into creamy soft bokeh.'
      },
      {
        id: 'low_angle_heroic',
        label: '📐 Use dynamic low-angle framing looking slightly upward',
        command: 'Character framing: Dynamic low-angle perspective looking slightly upward, emphasizing stature and open sky above.'
      },
      {
        id: 'eye_level_symmetrical',
        label: '⚖️ Shift to balanced eye-level centered composition',
        command: 'Character framing: Balanced eye-level framing with symmetrical two-shot composition centered naturally in the frame.'
      },
      {
        id: 'dutch_angle_dynamic',
        label: '📐 Apply subtle Dutch angle tilt for lively artistic energy',
        command: 'Character framing: Stylized subtle Dutch angle camera tilt adding dynamic momentum and contemporary artistic flair.'
      }
    ]
  },
  {
    id: 'film_color_grading',
    title: '🎞️ Color Grading & Film Stock Aesthetics',
    iconName: 'Palette',
    items: [
      {
        id: 'kodachrome_vintage_70s',
        label: '🎞️ Apply vintage 1970s Kodachrome film grain & warm saturation',
        command: 'Style and photography: Shot on 35mm Kodak Kodachrome 64 vintage film stock with warm nostalgic color saturation and fine organic film grain.'
      },
      {
        id: 'clean_portra_400',
        label: '📷 Crisp clean Kodak Portra 400 with natural true skin tones',
        command: 'Style and photography: Shot on 35mm Kodak Portra 400 film, natural true-to-life skin tones, balanced soft highlights, and pristine optical clarity.'
      },
      {
        id: 'cinematic_teal_orange',
        label: '🎬 Cinematic teal and orange grade with rich deep blacks',
        command: 'Style and photography: Cinematic color grade featuring warm amber-gold highlights paired with deep rich teal shadows and balanced contrast.'
      },
      {
        id: 'dreamy_pastel_fujifilm',
        label: '🌸 Soft pastel Fujifilm Pro 400H dreamy muted palette',
        command: 'Style and photography: Shot on Fujifilm Pro 400H, soft airy pastel color palette with luminous ethereal highlights and gentle contrast.'
      },
      {
        id: 'monochrome_tri_x',
        label: '⚫ High-contrast black and white Kodak Tri-X 400 film',
        command: 'Style and photography: High-contrast fine-art black and white photography shot on Kodak Tri-X 400 film with rich silver tonal gradation.'
      }
    ]
  }
];

/**
 * Flattens all suggestion items into a single searchable array
 */
export function getAllSuggestionItems(): RemixSuggestionItem[] {
  return REMIX_SUGGESTION_CATEGORIES.flatMap(cat => cat.items);
}
