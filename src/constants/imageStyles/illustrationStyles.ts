import { ImageStyleOption } from './types';

export const ILLUSTRATION_STYLES: ImageStyleOption[] = [
  {
    id: 'art_studio_ghibli',
    label: 'Studio Ghibli Anime (Hayao Miyazaki)',
    category: 'Illustration & Graphic Art',
    description: 'Lush hand-painted watercolor skies, soft nostalgic lighting, expressive cel animation',
    promptModifier: 'Studio Ghibli anime feature film still, Hayao Miyazaki aesthetic, lush hand-painted gouache background scenery, billowing cumulus clouds, expressive 2D cel animation linework, warm nostalgic atmosphere',
    std1Modifier: 'Studio Ghibli style anime scene, lush green countryside, billowing white clouds in azure sky, charming expressive cel character art, 16:9 composition',
    std2Modifier: 'Cinematic Ghibli animation still, golden sunset light washing over detailed hand-painted background, gentle breeze in hair and clothes, 16:9 widescreen',
    std3Modifier: 'Cozy rustic interior in Studio Ghibli style, warm lamp glow, richly detailed kitchen props, heartfelt character interaction, 16:9 composition'
  },
  {
    id: 'art_synthwave_80s_poster',
    label: '80s Synthwave & Retrowave Airbrush',
    category: 'Illustration & Graphic Art',
    description: 'Neon grid horizons, glowing chrome typography, magenta & cyan airbrush aesthetics',
    promptModifier: '1980s synthwave retrowave airbrush poster, glowing neon laser grid horizon, vibrant magenta and cyan gradient lighting, reflective chrome surfaces, retro-futuristic album cover art',
    std1Modifier: 'Synthwave 80s poster art, bold neon sunset backdrop, vibrant purple and cyan rim lighting, 16:9 composition',
    std2Modifier: 'High-fashion retrowave editorial, glossy chrome accents, electric neon glow, 1980s airbrushed graphic aesthetic, 16:9 widescreen',
    std3Modifier: 'Warm neon night scene, glowing synthwave color reflections, retro-futuristic skyline, 16:9 composition'
  },
  {
    id: 'art_pop_art_warhol',
    label: 'Pop Art & Silkscreen (Andy Warhol / Roy Lichtenstein)',
    category: 'Illustration & Graphic Art',
    description: 'Bold Ben-Day dots, primary silkscreen colors, high-contrast comic book pop art',
    promptModifier: 'Classic 1960s Pop Art screenprint, Andy Warhol and Roy Lichtenstein aesthetic, bold Ben-Day dot patterns, primary red yellow and blue solid color blocks, thick black graphic ink outlines',
    std1Modifier: 'Pop Art graphic illustration, vibrant silkscreen offset color registration, bold Ben-Day dots, dynamic energetic poses, 16:9 composition',
    std2Modifier: 'High-fashion Pop Art portrait, striking flat color fields, graphic comic book inking, bold primary color contrast, 16:9 widescreen',
    std3Modifier: 'Harmonious Pop Art group print, stylized retro silhouettes, vibrant multi-panel silkscreen color harmony, 16:9 composition'
  },
  {
    id: 'art_cyberpunk_neon',
    label: 'Cyberpunk Neon & Hologram (Blade Runner)',
    category: 'Illustration & Graphic Art',
    description: 'Rain-soaked asphalt reflections, glowing holographic signage, dense dystopian megacity',
    promptModifier: 'Cyberpunk sci-fi digital illustration, Blade Runner 2049 aesthetic, rain-slicked city streets with glowing neon reflections, holographic signs in Japanese kanji, atmospheric volumetric haze, dense futuristic megacity',
    std1Modifier: 'Cyberpunk urban street scene, vibrant neon pink and electric blue reflections, atmospheric steam and rain, dynamic character grouping, 16:9 composition',
    std2Modifier: 'High-fashion cyberpunk editorial portrait, futuristic techwear garments, sleek glowing fiber-optic accents, dramatic cinematic rim lighting, 16:9 widescreen',
    std3Modifier: 'Intimate cyberpunk noodle bar or balcony scene, warm neon lanterns amidst cold rainy city backdrop, atmospheric mood, 16:9 composition'
  },
  {
    id: 'art_storybook_fairytale',
    label: 'Classic Children’s Storybook (Arthur Rackham)',
    category: 'Illustration & Graphic Art',
    description: 'Intricate pen and ink with delicate watercolor washes, enchanted forest atmosphere',
    promptModifier: 'Golden Age children\'s book illustration, Arthur Rackham and Beatrix Potter aesthetic, delicate calligraphic pen and ink line work, soft earthy watercolor washes, enchanted magical forest ambiance',
    std1Modifier: 'Storybook fairytale illustration, charming woodland backdrop, delicate ink linework with soft watercolor tinting, 16:9 composition',
    std2Modifier: 'Enchanted fairytale fashion portrait, ethereal flowing garments, delicate botanical borders and pen flourishes, 16:9 widescreen',
    std3Modifier: 'Cozy storybook hearthside gathering, warm sepia and olive tones, gentle fairytale magic, 16:9 composition'
  },
  {
    id: 'art_risograph_duotone',
    label: 'Risograph Duotone Art Print',
    category: 'Illustration & Graphic Art',
    description: 'Vibrant two-tone Risograph print, organic soy ink grain, offset screen textures',
    promptModifier: 'Authentic Risograph duotone art print, vibrant fluorescent pink and ocean teal soy ink layers, tactile paper texture, organic screen halftones, offset registration charm',
    std1Modifier: 'Risograph duotone art print, vibrant overlapping ink layers, organic paper grain, spontaneous candid composition, 16:9',
    std2Modifier: 'Editorial fashion Risograph poster, stylish duotone color separation, graphic halftone textures, modern art zine aesthetic, 16:9 widescreen',
    std3Modifier: 'Intimate group Risograph print, warm overlapping duotone inks creating rich third-color blends, tactile art print, 16:9 composition'
  }
];
