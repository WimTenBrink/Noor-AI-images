import { ImageStyleOption } from './types';

export const EXOTIC_STYLES: ImageStyleOption[] = [
  {
    id: 'exp_stained_glass',
    label: 'Stained Glass Cathedral Window',
    category: 'Exotic & Experimental',
    description: 'Luminous colored glass panes, black lead caming lines, glowing sunlight',
    promptModifier: 'Intricate stained glass cathedral window mosaic, luminous glowing translucent colored glass pieces, bold black lead soldering caming lines, bright sunlight shining through',
    std1Modifier: 'Master stained glass window artwork, glowing jewel-toned glass fragments, black lead outlines, radiant backlighting, 16:9 composition',
    std2Modifier: 'Artisan stained glass mosaic, vibrant ruby, sapphire and amber glass tiles, sunbeams piercing through colored glass, 16:9 widescreen',
    std3Modifier: 'Gothic cathedral stained glass panel, intricate geometric and figurative glasswork, luminous lighting, 16:9 composition'
  },
  {
    id: 'exp_paper_cutout',
    label: 'Layered Paper Cutout Shadowbox',
    category: 'Exotic & Experimental',
    description: 'Multi-layered 3D papercraft, clean scissor-cut edges, cast depth shadows',
    promptModifier: 'Multi-layered papercraft cutout illustration in a wooden shadowbox frame, textured craft paper sheets, crisp scissor-cut silhouettes, physical depth shadows between layers',
    std1Modifier: 'Layered paper cutout artwork, 3D papercraft depth, clean cut cardstock shapes, gentle soft shadows between paper planes, 16:9 composition',
    std2Modifier: 'Intricate paper tolling shadowbox art, layered colorful paper silhouettes, tactile dimensional papercraft, 16:9 widescreen',
    std3Modifier: 'Contemporary paper sculpture illustration, crisp architectural paper layers, soft ambient studio lighting, 16:9 composition'
  },
  {
    id: 'exp_linocut',
    label: 'Linocut / Woodcut Relief Print',
    category: 'Exotic & Experimental',
    description: 'Hand-carved linoleum block, bold gouge marks, textured block-printing ink',
    promptModifier: 'Hand-carved linocut relief block print on fibrous mulberry paper, bold white gouge marks in black block-printing ink, authentic hand-pressed texture',
    std1Modifier: 'Linocut block print artwork, expressive carved gouge lines, rich opaque printing ink, handmade paper texture, 16:9 composition',
    std2Modifier: 'Two-color woodcut print, bold rustic carving marks, organic relief printing texture, 16:9 widescreen',
    std3Modifier: 'Modern relief printmaking illustration, dynamic positive and negative space carving, tactile ink transfer, 16:9 composition'
  },
  {
    id: 'exp_graffiti_mural',
    label: 'Street Art & Spray Paint Mural',
    category: 'Exotic & Experimental',
    description: 'Urban brick wall graffiti mural, aerosol spray paint drips, vibrant stencil art',
    promptModifier: 'Urban street art graffiti mural on a weathered brick wall, vibrant aerosol spray paint splatter and soft overspray, dynamic stencil and freehand street art, Banksy aesthetic',
    std1Modifier: 'Urban street art mural on brick, colorful spray paint gradients, crisp stencil cutouts, authentic brick and plaster texture, 16:9 composition',
    std2Modifier: 'Large-scale city wall aerosol graffiti piece, bold spray can lines, energetic drips and splatter, 16:9 widescreen',
    std3Modifier: 'Contemporary urban street mural, vibrant pop aerosol colors on textured concrete, 16:9 composition'
  },
  {
    id: 'exp_blueprint_cyan',
    label: 'Architectural Blueprint (Cyan & White)',
    category: 'Exotic & Experimental',
    description: 'Technical drafting blueprint, sharp white architectural lines on deep cyan drafting paper',
    promptModifier: 'Technical architectural blueprint drafting, crisp white schematic lines and callout dimensions on deep cyan blue drafting paper with faint millimeter grid lines',
    std1Modifier: 'Architectural blueprint schematic illustration, white line drafting on deep Prussian cyan paper, technical grid overlay, 16:9 composition',
    std2Modifier: 'Haute couture blueprint schematic, precision white technical lines detailing fashion silhouettes on cyan drafting paper, 16:9 widescreen',
    std3Modifier: 'Intimate grouping schematic blueprint, white vector drafting lines on deep blue architectural paper, 16:9 composition'
  },
  {
    id: 'exp_mandala_zentangle',
    label: 'Zentangle & Mandala Pattern Art',
    category: 'Exotic & Experimental',
    description: 'Intricate decorative geometric zentangle patterns, harmonious line ornamentation',
    promptModifier: 'Intricate zentangle and mandala line art drawing on heavy artist paper, mesmerizing repetitive geometric patterns, flowing organic flourishes, ornate line work',
    std1Modifier: 'Zentangle pattern line illustration, spontaneous candid scene adorned with intricate geometric pattern fills, ornamental line harmony, 16:9 composition',
    std2Modifier: 'High-fashion mandala line art, couture figures adorned with elaborate zentangle lace patterns and geometric filigree, 16:9 widescreen',
    std3Modifier: 'Intimate close group mandala composition, interlocking decorative zentangle flourishes weaving between the characters, 16:9 composition'
  }
];
