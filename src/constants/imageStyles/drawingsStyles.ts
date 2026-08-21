import { ImageStyleOption } from './types';

export const DRAWINGS_STYLES: ImageStyleOption[] = [
  {
    id: 'draw_coloring_plate',
    label: 'Coloring Plate / Coloring Book Page',
    category: 'Drawings & Sketches',
    description: 'Clean crisp black line outlines on pure white paper, ready for coloring in',
    promptModifier: 'Coloring plate line art drawing, clean crisp black outlines on pure white background, coloring book page for people to color in, clear closed contour lines, high contrast black line art on bright white canvas',
    std1Modifier: 'Coloring plate line drawing, spontaneous candid scene rendered in crisp clean black outlines on pure white background, coloring book page for coloring in, distinct sharp line contours, 16:9 composition',
    std2Modifier: 'High-fashion editorial coloring plate, elegant detailed black vector line art on pristine white paper, fashion coloring book page ready to be colored in, clear line boundaries, 16:9 widescreen',
    std3Modifier: 'Intimate close group coloring page, clean bold and fine black outlines on pure white paper, characters close together in clear line art suitable for coloring in, 16:9 composition'
  },
  {
    id: 'draw_pencil_graphite',
    label: 'Pencil Sketch (Graphite on Paper)',
    category: 'Drawings & Sketches',
    description: 'Detailed graphite pencil drawing with crosshatching, smudging, and textured paper',
    promptModifier: 'Detailed hand-drawn graphite pencil sketch on textured off-white artist paper, fine crosshatching, delicate pencil shading, smudged graphite textures',
    std1Modifier: 'Hand-drawn graphite pencil drawing, fine sharp line work, smooth graphite blending, visible sketchbook paper tooth, 16:9 composition',
    std2Modifier: 'Architectural and figurative pencil sketch, energetic gestural pencil strokes, detailed face contours, paper grain, 16:9',
    std3Modifier: 'Academic classical graphite drawing, layered pencil tonal rendering, rich tonal depth, fine artist sketch, 16:9 widescreen'
  },
  {
    id: 'draw_continuous_line',
    label: 'Continuous Single Line Art (Minimalist)',
    category: 'Drawings & Sketches',
    description: 'Modern minimalist single-stroke line drawing, fluid black continuous contour on off-white',
    promptModifier: 'Minimalist continuous single line art drawing, elegant flowing black stroke on off-white textured paper, Picasso and Matisse inspired line aesthetic, delicate artistic contour',
    std1Modifier: 'Continuous line art drawing, spontaneous candid moment captured in a single flowing black ink line, minimalist Scandinavian line drawing, 16:9 composition',
    std2Modifier: 'Fashion editorial single-line art, sophisticated continuous fluid black stroke, haute couture minimalist line contour, 16:9 widescreen',
    std3Modifier: 'Intimate close group continuous line drawing, intertwining single line contours of characters in close contact, modern gallery line art, 16:9 composition'
  },
  {
    id: 'draw_charcoal',
    label: 'Charcoal Drawing (Smudged & Expressive)',
    category: 'Drawings & Sketches',
    description: 'Rich velvety charcoal dust, bold expressive strokes, and kneaded eraser highlights',
    promptModifier: 'Fine art charcoal drawing on rough heavy rag paper, deep velvety black charcoal dust, dramatic expressive strokes, kneaded eraser highlights',
    std1Modifier: 'Expressive charcoal drawing on textured paper, rich powdery black shadows, soft blended gradients, bright paper highlights, 16:9',
    std2Modifier: 'Vine charcoal and white chalk sketch on toned grey paper, bold gestural contours, atmospheric charcoal dusting, 16:9 composition',
    std3Modifier: 'Master charcoal figurative study, dramatic chiaroscuro charcoal shading, smudged textural depth, 16:9 widescreen'
  },
  {
    id: 'draw_colored_pencil',
    label: 'Colored Pencil Illustration',
    category: 'Drawings & Sketches',
    description: 'Layered Prismacolor wax colored pencil, vibrant crosshatching, smooth burnishing',
    promptModifier: 'Detailed colored pencil illustration on vellum paper, vibrant layered Prismacolor pencils, delicate crosshatched color blends, burnished waxy texture',
    std1Modifier: 'Hand-drawn colored pencil illustration, rich multi-layered pencil hues, fine detailing, delicate paper grain, 16:9 composition',
    std2Modifier: 'Botanical and figurative colored pencil artwork, soft pastel colored pencil shading, crisp line accents, 16:9 widescreen',
    std3Modifier: 'Vibrant colored pencil concept art, luminous layered pigments, smooth burnished gradients, 16:9 composition'
  },
  {
    id: 'draw_crayon_wax',
    label: 'Wax Crayon & Oil Pastel',
    category: 'Drawings & Sketches',
    description: 'Thick creamy wax crayon textures, vibrant chunky colors, expressive drawing',
    promptModifier: 'Expressive wax crayon and heavy oil pastel drawing on rough cardboard, thick creamy wax textures, rich saturated color strokes, tactile paper friction',
    std1Modifier: 'Wax crayon and oil pastel artwork, chunky vibrant strokes, rich tactile wax layering, bold expressive color, 16:9 composition',
    std2Modifier: 'Chalk pastel and wax crayon sketch, soft powdery blends juxtaposed with thick bold wax lines, 16:9 widescreen',
    std3Modifier: 'Contemporary oil pastel illustration, buttery thick pigment application, vibrant lively colors, 16:9 composition'
  },
  {
    id: 'draw_pen_ink',
    label: 'Pen & Ink Crosshatching',
    category: 'Drawings & Sketches',
    description: 'Fine technical ink pen lines, intricate crosshatching, vintage etching aesthetic',
    promptModifier: 'Intricate pen and black ink drawing on parchment, fine nib crosshatching, delicate stippling, vintage Victorian engraving and etching style',
    std1Modifier: 'Fine pen and black ink illustration, master crosshatching shading, crisp clean black lines on off-white paper, 16:9 composition',
    std2Modifier: 'Dip pen and India ink drawing with watercolor wash accents, intricate crosshatch detail, 16:9 widescreen',
    std3Modifier: 'Vintage copperplate engraving style pen drawing, dense hatched shadows, elegant linear details, 16:9 composition'
  }
];
