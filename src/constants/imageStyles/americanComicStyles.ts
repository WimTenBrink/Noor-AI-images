import { ImageStyleOption } from './types';

export const AMERICAN_COMIC_STYLES: ImageStyleOption[] = [
  {
    id: 'comic_superman_golden_age',
    label: 'Classic Superman & Golden/Silver Age (Curt Swan / Shuster)',
    category: 'American & Classic Comic Books',
    description: 'Vintage 1950s/60s superhero comic, Ben-Day dot halftones, heroic dynamic poses, bold primary colors',
    promptModifier: 'Classic 1950s-1960s American superhero comic book style, Curt Swan and Wayne Boring Superman aesthetic, authentic four-color CMYK offset Ben-Day halftone dots, heroic dynamic anatomy, bold primary colors, vintage newsprint paper texture',
    std1Modifier: 'Golden Age superhero comic page, authentic Ben-Day halftone dots, heroic candid smiles, vintage four-color printing charm, 16:9 composition',
    std2Modifier: 'Vintage superhero splash page fashion portrait, dramatic heroic stance, bold red and blue primary palette, retro comic book cover layout, 16:9 widescreen',
    std3Modifier: 'Classic comic book wholesome group shot, vintage four-color newsprint tones, authentic Ben-Day shading, warm retro camaraderie, 16:9 composition'
  },
  {
    id: 'comic_jack_kirby_cosmic',
    label: 'Jack Kirby: The King of Comics (Cosmic Marvel)',
    category: 'American & Classic Comic Books',
    description: 'Kirby crackle energy dots, dynamic extreme foreshortening, blocky monumental anatomy, cosmic power bursts',
    promptModifier: 'Jack Kirby comic book art style, iconic Kirby crackle energy dots, extreme dynamic foreshortening, monumental blocky musculature, explosive cosmic energy bursts, heavy bold ink lines, vibrant Silver Age comic colors',
    std1Modifier: 'Jack Kirby dynamic comic scene, bold kinetic poses, crackling cosmic energy atmosphere, powerhouse inking, 16:9 composition',
    std2Modifier: 'Kirby style cosmic fashion splash page, monumental geometric silhouettes, glowing Kirby crackle halos, vibrant retro superhero palette, 16:9 widescreen',
    std3Modifier: 'Intimate team solidarity scene in Jack Kirby style, powerful solid character blocking, bold dynamic inking, cosmic backdrop, 16:9 composition'
  },
  {
    id: 'comic_dark_knight_miller',
    label: 'Batman: The Dark Knight & Noir Comic (Frank Miller)',
    category: 'American & Classic Comic Books',
    description: 'Gritty high-contrast noir, heavy black ink brush slabs, dramatic urban rain, stark chiaroscuro',
    promptModifier: 'Frank Miller and Klaus Janson The Dark Knight Returns comic style, gritty high-contrast noir, massive heavy black ink brush slabs, rain-streaked dramatic city shadows, stark chiaroscuro with intense neon flashes, raw 1980s graphic novel',
    std1Modifier: 'Frank Miller style gritty comic scene, heavy ink shadows, dramatic rain splatter, candid urban tension, 16:9 composition',
    std2Modifier: 'Dramatic graphic novel fashion splash, razor-sharp shadow cuts, high-contrast black and bold saturated lighting, 16:9 widescreen',
    std3Modifier: 'Intimate shelter from the storm group scene in Frank Miller noir style, heavy comforting ink shadows, warm neon rim light, 16:9 composition'
  },
  {
    id: 'comic_jim_lee_xmen',
    label: '90s Superhero Modern Comic (Jim Lee & Scott Williams)',
    category: 'American & Classic Comic Books',
    description: 'High-octane superhero comic, razor-sharp crosshatching, hyper-detailed musculature, dynamic widescreen action',
    promptModifier: 'Jim Lee and Scott Williams 1990s superhero comic book style, razor-sharp precision inking, intense feathering and crosshatching, heroic hyper-detailed anatomy, dynamic blockbuster action poses, vibrant modern digital coloring',
    std1Modifier: 'Jim Lee style 90s comic book scene, sharp dynamic crosshatching, heroic character interaction, vibrant modern comic palette, 16:9 composition',
    std2Modifier: '90s superhero variant cover fashion spread, powerhouse poses, immaculate feathering inking, dramatic high-gloss lighting, 16:9 widescreen',
    std3Modifier: 'Intimate superhero team downtime scene in Jim Lee style, detailed expressive faces, refined precision inking, warm ambient lighting, 16:9 composition'
  },
  {
    id: 'comic_hellboy_mignola',
    label: 'Hellboy & Gothic Comic (Mike Mignola)',
    category: 'American & Classic Comic Books',
    description: 'Masterclass minimalist graphic shadows, geometric gothic shapes, heavy solid black silhouettes, crimson accents',
    promptModifier: 'Mike Mignola Hellboy graphic novel style, masterclass geometric minimalism, heavy solid black shadow shapes, sharp angular anatomy, atmospheric muted earth tones with vibrant crimson accents, moody gothic mystery',
    std1Modifier: 'Mike Mignola gothic comic scene, bold graphic shadow silhouettes, earthy olive and ochre tones with crimson highlights, 16:9 composition',
    std2Modifier: 'Avant-garde gothic fashion plate in Mignola style, stark geometric silhouette blocking, striking minimalist shadows, 16:9 widescreen',
    std3Modifier: 'Intimate gothic fireside group scene in Mignola style, deep enclosing shadow shapes, warm flickering crimson and gold glow, 16:9 composition'
  },
  {
    id: 'comic_archie_decarlo',
    label: 'Classic Archie & Vintage Teen Comic (Dan DeCarlo)',
    category: 'American & Classic Comic Books',
    description: 'Cheerful Americana comic style, clean fluid line art, bright saturated pop colors, expressive retro charm',
    promptModifier: 'Classic Dan DeCarlo Archie Comics style, 1960s-1970s vintage teen comic art, clean fluid black outlines, cheerful expressive faces, vibrant candy pop colors, wholesome retro Americana charm',
    std1Modifier: 'Dan DeCarlo style retro teen comic scene, joyful candid laughter, bright sunny pop colors, clean bouncy linework, 16:9 composition',
    std2Modifier: 'Vintage teen fashion comic spread, stylish retro 60s/70s outfits, clean elegant cartoon lines, vibrant pastel and primary palette, 16:9 widescreen',
    std3Modifier: 'Cozy malt shop booth group scene in classic Archie style, sweet friendly camaraderie, bright cheerful comic colors, 16:9 composition'
  },
  {
    id: 'comic_ec_tales_crypt',
    label: '1950s EC Comics & Tales from the Crypt (Wally Wood)',
    category: 'American & Classic Comic Books',
    description: 'Vintage 1950s pulp horror & sci-fi comic, dense zip-a-tone halftones, dramatic pulpy shadow hatching',
    promptModifier: '1950s EC Comics and Tales from the Crypt style, Wally Wood and Al Feldstein aesthetic, dense intricate ink hatching, vintage zip-a-tone halftone patterns, dramatic pulpy chiaroscuro, retro newsprint comic book page',
    std1Modifier: '1950s EC pulp comic scene, rich vintage shadow crosshatching, authentic aged newsprint tone, candid dramatic tension, 16:9 composition',
    std2Modifier: 'Pulp comic cover fashion spread, dramatic low-angle lighting, dense vintage pen hatching, bold pulpy headline aesthetic, 16:9 widescreen',
    std3Modifier: 'Atmospheric vintage pulp comic group scene, rich detailed shadow inking, warm sepia newsprint background, close camaraderie, 16:9 composition'
  },
  {
    id: 'comic_calvin_hobbes',
    label: 'Calvin and Hobbes (Bill Watterson / Watercolor Comic)',
    category: 'American & Classic Comic Books',
    description: 'Expressive whimsical ink brushwork, lush watercolor nature washes, dynamic comedic body language',
    promptModifier: 'Bill Watterson Calvin and Hobbes Sunday comic strip style, master expressive loose ink brushwork, luminous watercolor nature washes, lively whimsical character animation, heartwarming newspaper comic art',
    std1Modifier: 'Calvin and Hobbes style Sunday comic spread, exuberant joyful movement, lush glowing autumn watercolor background, lively brush inking, 16:9 composition',
    std2Modifier: 'Whimsical watercolor comic fashion illustration, fluid energetic ink brush lines, luminous transparent watercolor washes, 16:9 widescreen',
    std3Modifier: 'Warm heartwarming group cuddle scene in Bill Watterson watercolor comic style, soft cozy brushwork, glowing watercolor sunset, 16:9 composition'
  },
  {
    id: 'comic_peanuts_schulz',
    label: 'Peanuts & Sunday Comic Strip (Charles M. Schulz)',
    category: 'American & Classic Comic Books',
    description: 'Endearing minimalist ink line art, gentle hand-drawn wavering curves, warm muted newsprint tones',
    promptModifier: 'Charles M. Schulz Peanuts classic comic strip style, endearing minimalist black ink linework, gentle hand-drawn organic curves, warm muted newspaper Sunday color palette, tender poetic innocence',
    std1Modifier: 'Peanuts style Sunday comic scene, charming minimalist line art, soft muted newsprint colors, sweet candid character postures, 16:9 composition',
    std2Modifier: 'Charming minimalist cartoon fashion plate in Schulz style, clean simple outlines, elegant flat color blocks, gentle nostalgic humor, 16:9 widescreen',
    std3Modifier: 'Tender group hug scene in classic Peanuts comic strip style, heartwarming minimalist brush lines, soft comforting watercolor tones, 16:9 composition'
  },
  {
    id: 'comic_sin_city_stark',
    label: 'Sin City Stark Graphic Noir (Frank Miller)',
    category: 'American & Classic Comic Books',
    description: 'Pure stark black and white negative space graphic novel, razor-sharp silhouettes with single accent color splashes',
    promptModifier: 'Frank Miller Sin City graphic novel style, pure stark black and white negative space, razor-sharp silhouette cutouts, dramatic chiaroscuro with zero midtones, isolated single vibrant color accent splash (emerald, crimson, or amber)',
    std1Modifier: 'Sin City stark noir graphic novel scene, pure black and white negative space silhouettes, single glowing color accent, dramatic candid intensity, 16:9 composition',
    std2Modifier: 'High-contrast graphic noir fashion portrait, razor-sharp black and white shapes, dramatic silhouette cuts, striking modern graphic novel aesthetic, 16:9 widescreen',
    std3Modifier: 'Intimate graphic noir group silhouette scene, bold black velvet shadows, crisp white highlights, stark emotional unity, 16:9 composition'
  },
  {
    id: 'comic_watchmen_gibbons',
    label: 'Watchmen (Dave Gibbons & John Higgins)',
    category: 'American & Classic Comic Books',
    description: 'Disciplined realist comic illustration, precise uniform pen inking, sophisticated secondary color palette',
    promptModifier: 'Dave Gibbons and John Higgins Watchmen graphic novel style, disciplined realist comic book draughtsmanship, precise uniform pen linework, sophisticated secondary color palette (purples, oranges, teals), cinematic 1980s graphic novel realism',
    std1Modifier: 'Watchmen style graphic novel scene, precise realistic pen inking, nuanced secondary color harmonies, grounded cinematic atmosphere, 16:9 composition',
    std2Modifier: 'Realist graphic novel fashion portrait, meticulously drafted costumes, rich secondary color grade, dramatic cinematic realism, 16:9 widescreen',
    std3Modifier: 'Intimate character scene in Watchmen graphic novel style, understated authentic expressions, clean disciplined inking, evocative ambient color mood, 16:9 composition'
  }
];
