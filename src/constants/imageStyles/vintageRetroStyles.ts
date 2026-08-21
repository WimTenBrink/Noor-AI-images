import { ImageStyleOption } from './types';

export const VINTAGE_RETRO_STYLES: ImageStyleOption[] = [
  {
    id: 'retro_70s_kodachrome',
    label: '1970s Kodachrome Slide',
    category: 'Vintage & Retro',
    description: 'Rich warm reds and yellows, saturated 1970s film nostalgia, sun flare',
    promptModifier: '1970s Kodachrome 64 vintage color slide photograph, rich warm saturated reds and earth tones, natural sun flare, authentic 70s atmosphere',
    std1Modifier: 'Authentic 1970s color photograph, Kodachrome warmth, vintage color saturation, gentle film grain, 16:9 composition',
    std2Modifier: '1970s summer vacation slide, warm sunlight, vintage fashion photography aesthetic, 16:9 widescreen',
    std3Modifier: 'Retro 1970s band photo, warm golden tones, authentic vintage slide film scan texture, 16:9 composition'
  },
  {
    id: 'retro_80s_synthwave',
    label: '1980s Synthwave / Retrowave',
    category: 'Vintage & Retro',
    description: 'Neon chrome wireframe grid, purple & sunset gradients, 80s synth nostalgia',
    promptModifier: '1980s synthwave retrowave aesthetic, glowing neon grid horizon, vibrant purple and sunset orange gradient sky, chrome reflections, vintage CRT glow',
    std1Modifier: 'Synthwave 80s retro digital illustration, vibrant neon sunset horizon, cool magenta rim lighting, 16:9 composition',
    std2Modifier: 'Outrun / Retrowave 80s aesthetic, glowing neon wireframe horizon, 80s album cover art style, 16:9 widescreen',
    std3Modifier: 'Vintage 1980s VHS cover art, airbrushed neon lighting, futuristic 80s nostalgia, 16:9 composition'
  },
  {
    id: 'retro_60s_psychedelic',
    label: '1960s Psychedelic Rock Poster',
    category: 'Vintage & Retro',
    description: 'Swirling liquid light colors, Fillmore poster art, organic flowing paisley',
    promptModifier: '1960s San Francisco psychedelic concert poster art, swirling liquid light show colors, vibrant paisley patterns, organic flowing contours, vintage Woodstock poster',
    std1Modifier: '1960s psychedelic rock art, flowing vibrant color waves, whimsical retro design, 16:9 composition',
    std2Modifier: 'Fillmore West psychedelic poster illustration, electric neon psychedelic swirls, vintage screenprint, 16:9 widescreen',
    std3Modifier: 'Summer of Love 1967 poster art, groovy psychedelic visual vibrations, artistic color harmony, 16:9 composition'
  }
];
