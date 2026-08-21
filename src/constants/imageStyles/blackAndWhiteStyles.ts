import { ImageStyleOption } from './types';

export const BLACK_AND_WHITE_STYLES: ImageStyleOption[] = [
  {
    id: 'bw_silver_gelatin',
    label: 'B&W Silver Gelatin Fine Art',
    category: 'Black & White',
    description: 'Rich tonal gradations, velvety deep blacks, luminous silver highlights',
    promptModifier: 'Fine art black and white silver gelatin print, rich tonal range from deep velvet blacks to luminous silver whites, Ilford HP5 400 aesthetic',
    std1Modifier: 'Black and white fine-art photograph, classic silver gelatin print, balanced tonal gradations, timeless studio lighting, 16:9 composition',
    std2Modifier: 'Ilford black and white 35mm film photograph, fine grain structure, rich midtones, luminous natural highlights, 16:9 widescreen',
    std3Modifier: 'Master black and white environmental portrait, Ansel Adams zone system tonality, crisp contrast, 16:9 composition'
  },
  {
    id: 'bw_film_noir',
    label: 'B&W Film Noir (High Contrast)',
    category: 'Black & White',
    description: 'Dramatic Venetian blind shadows, chiaroscuro, smoky 1940s mystery',
    promptModifier: 'Dramatic 1940s film noir black and white photograph, extreme high contrast chiaroscuro, sharp shadow patterns, mysterious moody atmosphere',
    std1Modifier: 'Film noir black and white photograph, sharp spotlight shadows, atmospheric smoke and haze, 16:9 cinematic widescreen',
    std2Modifier: '1940s cinema noir still, slatted Venetian blind shadows across the subjects, dramatic side lighting, 16:9 composition',
    std3Modifier: 'Low-key black and white noir photography, deep blacks, single tungsten key light, intense dramatic mood, 16:9'
  },
  {
    id: 'bw_daguerreotype',
    label: 'B&W Antique Daguerreotype (1850s)',
    category: 'Black & White',
    description: 'Victorian polished silver plate, antique vignetting, subtle patina and tarnish',
    promptModifier: 'Authentic 1850s Victorian daguerreotype photograph, polished silver plate reflection, antique lens aberrations, sepia-toned monochrome, historic patina',
    std1Modifier: '19th century antique daguerreotype plate, soft lens falloff, historic silver plate tones, delicate tarnish edges, 16:9 composition',
    std2Modifier: 'Victorian wet collodion ambrotype, antique monochrome patina, glass plate texture, historic archive aesthetic, 16:9 widescreen',
    std3Modifier: '1860s tintype portrait, rustic metal plate sheen, vintage monochrome chemical artifacts, historic period look, 16:9'
  },
  {
    id: 'bw_cyanotype',
    label: 'B&W Cyanotype Prussian Blue',
    category: 'Black & White',
    description: 'Historic sun print in deep Prussian blue and crisp white tones',
    promptModifier: 'Historic cyanotype photographic print, rich Prussian blue monochrome chemistry, watercolor paper texture, botanical sun-print aesthetic',
    std1Modifier: 'Cyanotype photographic print on heavy cotton paper, deep indigo and Prussian blue tones, crisp white highlights, 16:9 composition',
    std2Modifier: 'Botanical cyanotype contact print, deep blue tonal gradient, organic paper fiber textures, 16:9 widescreen',
    std3Modifier: 'Dual-toned cyanotype and sepia historical print, Prussian blue shadows with warm beige highlights, 16:9 composition'
  },
  {
    id: 'bw_woodcut_medieval',
    label: 'Medieval Woodcut & Gutenberg Engraving',
    category: 'Black & White',
    description: '15th-century Gutenberg woodcut printing, bold gouged black ink lines, vintage folio plate',
    promptModifier: '15th-century medieval woodcut relief print on aged fibrous parchment, bold gouged black ink lines, antique block printing character, historical folio book plate',
    std1Modifier: 'Medieval woodcut print, historic relief-cut linework on rough rag paper, authentic vintage woodblock aesthetic, 16:9 composition',
    std2Modifier: 'Renaissance woodcut fashion portrait, ornate decorative woodblock borders, crisp carved linework, 16:9 widescreen',
    std3Modifier: 'Intimate medieval woodcut tableau, figures gathered closely in historical woodblock carving style, aged paper texture, 16:9 composition'
  }
];
