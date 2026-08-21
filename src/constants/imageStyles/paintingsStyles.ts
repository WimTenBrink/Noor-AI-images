import { ImageStyleOption } from './types';

export const PAINTINGS_STYLES: ImageStyleOption[] = [
  {
    id: 'art_watercolor',
    label: 'Watercolor Painting (Transparent & Luminous)',
    category: 'Paintings & Fine Art',
    description: 'Soft translucent washes, pigment blooming, paper texture, delicate brushwork',
    promptModifier: 'Fine art watercolor painting on cold-press textured cotton paper, luminous translucent color washes, organic pigment blooming edges, delicate splatters, wet-on-wet watercolor technique',
    std1Modifier: 'Luminous watercolor painting, soft bleeding edges, translucent layered pigments, paper grain texture, 16:9 composition',
    std2Modifier: 'Editorial watercolor portrait, expressive dry-brush strokes with fluid translucent color pools, 16:9 widescreen',
    std3Modifier: 'Warm atmospheric watercolor artwork, golden amber and violet washes, delicate pigment settling, 16:9 composition'
  },
  {
    id: 'art_oil_classical',
    label: 'Classical Oil Painting (Rembrandt Chiaroscuro)',
    category: 'Paintings & Fine Art',
    description: 'Rich impasto, dramatic chiaroscuro, golden Rembrandt lighting, master museum canvas',
    promptModifier: 'Classical Dutch Golden Age oil painting, masterwork canvas texture, dramatic Rembrandt chiaroscuro lighting, rich layered oil glazes, visible impasto brushstrokes, museum gallery quality',
    std1Modifier: 'Dutch Golden Age master oil painting, rich warm chiaroscuro key lighting, textured linen canvas, authentic oil glazes, 16:9 composition',
    std2Modifier: 'Grand classical oil portrait, rich velvet textures, luminous golden highlights, masterly figurative painting, 16:9 widescreen',
    std3Modifier: 'Intimate classical oil painting tableau, candle-lit ambient glow, deep warm shadows, master brushwork, 16:9 composition'
  },
  {
    id: 'art_impressionism',
    label: 'Impressionism (Claude Monet / Renoir)',
    category: 'Paintings & Fine Art',
    description: 'Dappled sunlight, vibrant broken brushstrokes, luminous outdoor plein-air atmosphere',
    promptModifier: 'Impressionist master painting, Claude Monet and Renoir aesthetic, loose vibrant broken color brushstrokes, dappled outdoor sunlight, shimmering light reflections, rich textured canvas',
    std1Modifier: 'Plein-air impressionist oil painting, sparkling sunlight filtering through leaves, vibrant pastel and jewel tone daubs, 16:9 composition',
    std2Modifier: 'Impressionist garden portrait, lively textured brushwork, luminous atmospheric haze, sunlit impressionism, 16:9 widescreen',
    std3Modifier: 'Cozy impressionist interior scene, warm lamp light, visible colorful palette knife strokes, 16:9 composition'
  },
  {
    id: 'art_art_nouveau',
    label: 'Art Nouveau & Secession (Alphonse Mucha)',
    category: 'Paintings & Fine Art',
    description: 'Ornate organic filigree, flowing botanical curves, decorative golden halos, Mucha elegance',
    promptModifier: 'Alphonse Mucha Art Nouveau masterpiece, ornate organic botanical filigree, flowing sinuous lines, decorative golden leaf halos, pastel jewel tones, Czech Secessionist poster aesthetic',
    std1Modifier: 'Art Nouveau decorative painting, elegant organic arabesques, gilded floral arches, Mucha pastel colors, 16:9 composition',
    std2Modifier: 'High-fashion Art Nouveau portrait, flowing golden hair tendrils, intricate stylized foliage borders, 16:9 widescreen',
    std3Modifier: 'Harmonious Art Nouveau group tableau, interlocking decorative botanical motifs, warm gilded glow, 16:9 composition'
  },
  {
    id: 'art_gouache_matte',
    label: 'Gouache Painting (Matte & Opaque)',
    category: 'Paintings & Fine Art',
    description: 'Velvety matte finish, flat opaque designer color blocks, crisp brush lines',
    promptModifier: 'Fine art opaque gouache painting on Bristol board, velvety flat matte finish, rich solid designer pigment planes, crisp clean brush edges, mid-century graphic illustration style',
    std1Modifier: 'Matte gouache illustration, velvety saturated color fields, charming flat poster art brushwork, 16:9 composition',
    std2Modifier: 'Mid-century editorial gouache painting, sophisticated color blocking, clean graphic silhouettes, 16:9 widescreen',
    std3Modifier: 'Warm textured gouache group scene, rich earthy matte tones, soft chalky finish, 16:9 composition'
  },
  {
    id: 'art_acrylic_impasto',
    label: 'Acrylic Impasto (Palette Knife & Heavy Body)',
    category: 'Paintings & Fine Art',
    description: 'Thick sculpted paint ridges, vibrant chunky palette knife application, high textural relief',
    promptModifier: 'Contemporary heavy body acrylic painting, thick sculptural palette knife impasto, tactile raised paint ridges, dynamic energetic color swatches, gallery canvas texture',
    std1Modifier: 'Palette knife acrylic painting, rich dimensional paint textures, bold vibrant color slabs, 16:9 composition',
    std2Modifier: 'Modern expressive acrylic portrait, sculpted face contours with thick impasto highlights, 16:9 widescreen',
    std3Modifier: 'Vibrant impasto group painting, harmonious multi-colored palette knife strokes, tactile surface, 16:9 composition'
  },
  {
    id: 'art_fresco_renaissance',
    label: 'Renaissance Wall Fresco (Buon Fresco)',
    category: 'Paintings & Fine Art',
    description: 'Italian Renaissance wet plaster fresco, soft mineral pigments, antique craquelure',
    promptModifier: 'Italian Renaissance buon fresco mural on aged lime plaster wall, subtle craquelure surface cracks, soft earthy mineral pigments, Sistine Chapel and Raphael inspired monumental grace',
    std1Modifier: 'Renaissance wall fresco painting, delicate aged plaster texture, serene classical lighting, 16:9 composition',
    std2Modifier: 'Monumental Renaissance fresco portrait, draped classical garments, soft lime-wash palette, 16:9 widescreen',
    std3Modifier: 'Harmonious fresco group tableau, gentle chiaroscuro, historic Florentine fresco atmosphere, 16:9 composition'
  },
  {
    id: 'art_ukiyo_e',
    label: 'Japanese Ukiyo-e Woodblock Print (Hokusai & Hiroshige)',
    category: 'Paintings & Fine Art',
    description: 'Edo period woodblock print, bokashi color gradients, crisp black calligraphic outlines',
    promptModifier: 'Traditional Japanese Edo-period Ukiyo-e woodcut print, Katsushika Hokusai and Utagawa Hiroshige aesthetic, crisp calligraphic keyblock ink outlines, subtle bokashi color gradations, handmade washi paper texture',
    std1Modifier: 'Ukiyo-e woodblock print scene, organic washi paper grain, flowing kimono contours, serene bokashi sky, 16:9 composition',
    std2Modifier: 'Striking Ukiyo-e fashion portrait, bold decorative patterns, elegant calligraphic linework, 16:9 widescreen',
    std3Modifier: 'Cozy Japanese tea room Ukiyo-e woodblock scene, warm indigo and vermilion woodblock inks, 16:9 composition'
  }
];
