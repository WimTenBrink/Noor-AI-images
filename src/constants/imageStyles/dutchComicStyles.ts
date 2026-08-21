import { ImageStyleOption } from './types';

export const DUTCH_COMIC_STYLES: ImageStyleOption[] = [
  {
    id: 'comic_storm_lawrence',
    label: 'Don Lawrence (Storm & The Trigan Empire / Dutch Master Painter)',
    category: 'Dutch Comics',
    description: 'Fully painted lush oil and gouache sci-fi fantasy art, hyper-detailed musculature, glowing luminous brushwork',
    promptModifier: 'Fully painted European sci-fi fantasy comic art, Don Lawrence Storm and Trigan Empire aesthetic, masterclass gouache and oil painting, hyper-detailed anatomy and drapery, dramatic cinematic lighting, rich saturated colors',
    std1Modifier: 'Don Lawrence style painted sci-fi comic art, master oil and gouache brushwork, heroic physiques, rich atmospheric depth and glowing lighting, 16:9 composition',
    std2Modifier: 'Lush painted fantasy comic fashion portrait, dramatic chiaroscuro highlights, tactile oil paint textures, Don Lawrence high-fantasy aesthetic, 16:9 widescreen',
    std3Modifier: 'Intimate painted sci-fi comic group portrait, rich warm gouache tones, master anatomical rendering, glowing jewel-toned lighting, 16:9 composition'
  },
  {
    id: 'comic_willy_vandersteen',
    label: 'Willy Vandersteen (Suske en Wiske / Classic Flemish Comic Heritage)',
    category: 'Dutch Comics',
    description: 'Classic Flemish comic adventure, clean lively ink outlines, folklore fantasy elements, warm nostalgic Belgian/Dutch colors',
    promptModifier: 'Willy Vandersteen Suske en Wiske (Spike and Suzy / Bob et Bobette) comic art style, legendary Flemish studio draughtsmanship, lively animated character movement, clean dynamic ink outlines, warm vintage Gouache colors, rich historical folklore adventure charm',
    std1Modifier: 'Willy Vandersteen style Flemish comic adventure scene, cheerful energetic character gestures, colorful historical or fantasy background, 16:9 composition',
    std2Modifier: 'Classic Flemish graphic novel fashion portrait in Vandersteen style, stylish vintage 1960s outfits, clean dynamic outlines, bright primary colors, 16:9 widescreen',
    std3Modifier: 'Warm hearthside group gathering in Vandersteen comic style, affectionate family camaraderie, cozy glowing cottage interior, 16:9 composition'
  },
  {
    id: 'comic_marten_toonder',
    label: 'Marten Toonder (Tom Poes & Olivier B. Bommel / Lyrical Fable Art)',
    category: 'Dutch Comics',
    description: 'Lyrical storybook draughtsmanship, atmospheric Dutch polders, whimsical aristocratic beasts, rich crosshatched pen textures',
    promptModifier: 'Marten Toonder comic art style, Tom Poes and Heer Bommel aesthetic, lyrical Dutch storybook draughtsmanship, exquisite pen-and-ink crosshatching, romantic atmospheric polder landscapes with ancient trees, warm gentle watercolor tinting',
    std1Modifier: 'Marten Toonder style storybook graphic scene, rolling green Dutch estate, whimsical charm, delicate crosshatched ink lines, 16:9 composition',
    std2Modifier: 'Aristocratic vintage fashion portrait in Toonder style, velvet waistcoats and tweed coats, refined crosshatch detail, soft watercolor hues, 16:9 widescreen',
    std3Modifier: 'Intimate library or study fireside scene in Toonder style, tall bookshelves, glowing fireplace, gentle intellectual warmth, 16:9 composition'
  },
  {
    id: 'comic_martin_lodewijk',
    label: 'Martin Lodewijk (Agent 327 / High-Energy Secret Agent Comic)',
    category: 'Dutch Comics',
    description: 'Dynamic secret agent parody, snappy comedic cartoon anatomy, vibrant pop colors, energetic Amsterdam cityscapes',
    promptModifier: 'Martin Lodewijk Agent 327 comic art style, high-energy Dutch comedic adventure strip, snappy caricatured character design, dynamic action poses, clean lively ink outlines, vibrant 1970s-1980s European pop palette, iconic Dutch canal and city backdrops',
    std1Modifier: 'Martin Lodewijk style spy comedy scene, lively dynamic poses along Amsterdam canals, bright cheerful pop colors, 16:9 composition',
    std2Modifier: 'Retro secret agent fashion spread in Lodewijk style, stylish spy trench coats, sunglasses, crisp bold ink lines, 16:9 widescreen',
    std3Modifier: 'Intimate undercover briefing scene in Lodewijk comic style, funny conspiratorial expressions, warm cafe background, 16:9 composition'
  },
  {
    id: 'comic_peter_de_smet',
    label: 'Peter de Smet (De Generaal / Slapstick Cartoon Brilliance)',
    category: 'Dutch Comics',
    description: 'Masterclass slapstick cartoon comedy, rubbery expressive anatomy, exuberant dynamic lines, warm whimsical Gouache colors',
    promptModifier: 'Peter de Smet De Generaal comic strip style, masterclass Dutch comedic cartoon art, wonderfully expressive rubbery characters, energetic bouncing postures, clean bouncy brush inking, bright sunny European gouache colors',
    std1Modifier: 'Peter de Smet style lively cartoon scene, hilarious joyful character interactions, bouncy fluid linework, bright cheerful colors, 16:9 composition',
    std2Modifier: 'Whimsical cartoon fashion spread in De Smet style, playful vintage military and casual outfits, rubbery dynamic poses, 16:9 widescreen',
    std3Modifier: 'Cozy humorous group scene in De Smet comic style, animated joyful smiles, warm sunny interior, 16:9 composition'
  },
  {
    id: 'comic_jan_kruis',
    label: 'Jan Kruis (Jan, Jans en de Kinderen / Warm Dutch Domestic Slice-of-Life)',
    category: 'Dutch Comics',
    description: 'Beloved Dutch family slice-of-life, warm gentle humor, cozy 1970s Dutch home interiors, clean approachable line art',
    promptModifier: 'Jan Kruis Jan, Jans en de Kinderen comic strip style, beloved Dutch family life comic art, warm gentle human expressions, cozy Dutch living room and garden backdrops, clean friendly pen outlines, comforting warm watercolor and gouache palette',
    std1Modifier: 'Jan Kruis style cozy Dutch domestic scene, heartwarming family camaraderie, teapot on the table, soft natural daylight, 16:9 composition',
    std2Modifier: 'Charming retro Dutch fashion spread in Jan Kruis style, 1970s knit sweaters, flared corduroys, friendly approachable linework, 16:9 widescreen',
    std3Modifier: 'Warm living room sofa gathering in Jan Kruis style, cat and dog sleeping nearby, gentle affectionate laughter, 16:9 composition'
  },
  {
    id: 'comic_dick_matena',
    label: 'Dick Matena (De Avonden & Literary Graphic Adaptations)',
    category: 'Dutch Comics',
    description: 'Moody realistic Amsterdam realism, delicate moody crosshatching, post-war Dutch literary atmosphere, rich sepia and slate tones',
    promptModifier: 'Dick Matena graphic novel style, De Avonden (The Evenings) and Kort Amerikaan aesthetic, masterclass realistic Dutch graphic novel draughtsmanship, delicate moody pen hatching, authentic 1940s-1950s Amsterdam architectural backdrops, atmospheric sepia and slate tones',
    std1Modifier: 'Dick Matena style literary graphic novel scene, misty Amsterdam canal streetlights, delicate moody inking, contemplative character depth, 16:9 composition',
    std2Modifier: 'Post-war European fashion portrait in Matena style, tailored wool overcoats, atmospheric rainy window background, refined pen hatching, 16:9 widescreen',
    std3Modifier: 'Intimate dim-lit living room conversation in Matena comic style, soft shaded lamplight, delicate facial lines, authentic emotional gravitas, 16:9 composition'
  },
  {
    id: 'comic_dick_briel',
    label: 'Dick Briel (Professor Palmboom / Exquisite Dutch Ligne Claire)',
    category: 'Dutch Comics',
    description: 'Exquisite 1930s ligne claire mystery adventure, uniform pristine line weight, elegant London/Amsterdam architecture, refined pastel gouache',
    promptModifier: 'Dick Briel Professor Palmboom comic art style, masterclass Dutch ligne claire graphic novel, uniform pristine black ink outlines, immaculate 1930s architectural and automotive draughtsmanship, refined flat pastel gouache color harmony',
    std1Modifier: 'Dick Briel style ligne claire adventure scene, crisp 1930s European streetscape, pristine line work, bright clear daylight, 16:9 composition',
    std2Modifier: 'Refined 1930s graphic novel fashion spread in Briel style, tailored double-breasted suits, cloche hats, pristine geometric perspective, 16:9 widescreen',
    std3Modifier: 'Intimate archaeological study scene in Briel comic style, ancient maps and globe, warm gentle lamplight, clean graphic outlines, 16:9 composition'
  },
  {
    id: 'comic_marc_sleen',
    label: 'Marc Sleen (The Adventures of Nero / Flemish Comic Phenomenon)',
    category: 'Dutch Comics',
    description: 'Legendary rapid caricature style, cheerful absurd adventure, bold spontaneous inking, vibrant Flemish newspaper comic energy',
    promptModifier: 'Marc Sleen The Adventures of Nero (Het Nieuwsblad) comic art style, legendary Flemish newspaper strip art, spontaneous bold brush inking, highly expressive caricatured character faces, cheerful absurd adventure energy, bright primary color fills',
    std1Modifier: 'Marc Sleen style lively Flemish comic scene, joyful energetic banter, bold spontaneous inking, sunny outdoor setting, 16:9 composition',
    std2Modifier: 'Humorous graphic fashion spread in Marc Sleen style, quirky retro outfits, bold expressive line contours, 16:9 widescreen',
    std3Modifier: 'Cheerful Belgian waffle feast group scene in Sleen comic style, joyful smiling faces, warm celebratory atmosphere, 16:9 composition'
  },
  {
    id: 'comic_kolk_de_wit',
    label: 'Hanco Kolk & Peter de Wit (Gilles de Geus & S1NGLE)',
    category: 'Dutch Comics',
    description: 'Sophisticated graphic dynamism, fluid calligraphic ink strokes, historical Eighty Years War & modern chic Dutch humor',
    promptModifier: 'Hanco Kolk and Peter de Wit comic art style, Gilles de Geus and S1NGLE aesthetic, fluid calligraphic ink brushwork, masterful anatomical stylization, chic modern graphic timing, vibrant sophisticated European color scripts',
    std1Modifier: 'Hanco Kolk style dynamic graphic novel scene, elegant fluid brush strokes, lively spirited expressions, bright Dutch sky, 16:9 composition',
    std2Modifier: 'Chic modern graphic fashion spread in Kolk & De Wit style, sleek contemporary outlines, bold solid color fields, sophisticated charm, 16:9 widescreen',
    std3Modifier: 'Intimate wine terrace group scene in Kolk comic style, lively expressive poses, fluid brush contours, warm sunset glow, 16:9 composition'
  },
  {
    id: 'comic_joost_swarte',
    label: 'Joost Swarte (Jopo de Pojo & Modern Klare Lijn Pioneer)',
    category: 'Dutch Comics',
    description: 'Pioneering Modern Klare Lijn, Bauhaus and De Stijl architectural geometry, playful witty elegance, pristine flat color fills',
    promptModifier: 'Joost Swarte comic art and graphic design style, creator of Klare Lijn concept, Jopo de Pojo aesthetic, immaculate uniform black line contours, De Stijl and Memphis design architectural geometry, witty playful surrealism, pristine flat designer colors',
    std1Modifier: 'Joost Swarte style modern Klare Lijn scene, playful geometric architecture, pristine uniform lines, vibrant designer color harmony, 16:9 composition',
    std2Modifier: 'High-fashion Bauhaus graphic spread in Swarte style, modernist avant-garde outfits, clean geometric perspectives, 16:9 widescreen',
    std3Modifier: 'Intimate designer lounge scene in Swarte comic style, sleek modernist furniture, clear line art, warm vibrant palette, 16:9 composition'
  },
  {
    id: 'comic_typex_rembrandt',
    label: 'Typex / Raymond Koot (Rembrandt & Andy Warhol Graphic Novels)',
    category: 'Dutch Comics',
    description: 'Visceral expressive graphic novel art, scratchy energetic ink and dry brush, earthy Rembrandt-esque sepia tones, raw artistic authenticity',
    promptModifier: 'Typex (Raymond Koot) graphic novel style, Rembrandt and Warhol aesthetic, raw expressive scratchy ink and dry-brush textures, tactile paper tooth, rich earthy sepia, ochre and ink-wash palette, visceral masterclass Dutch graphic storytelling',
    std1Modifier: 'Typex style raw artistic graphic novel scene, energetic scratchy inking, rich earthy tones, intense authentic character presence, 16:9 composition',
    std2Modifier: 'Bohemian artist studio fashion portrait in Typex style, textured layered clothing, expressive ink splatters, dramatic golden-brown lighting, 16:9 widescreen',
    std3Modifier: 'Intimate candlelit tavern gathering in Typex comic style, warm golden chiaroscuro, tactile dry-brush shading, deep camaraderie, 16:9 composition'
  },
  {
    id: 'comic_eric_heuvel',
    label: 'Eric Heuvel (January Jones & Geheimen van de Tijd / Adventure BD)',
    category: 'Dutch Comics',
    description: 'Classic 1930s aviation adventure ligne claire, detailed historic planes & exotic locales, pristine clear line art',
    promptModifier: 'Eric Heuvel comic book art style, January Jones and The Secret of Time aesthetic, masterclass Dutch ligne claire adventure art, pristine uniform black ink lines, meticulously drafted 1930s aeroplanes, exotic historical adventure backdrops, rich vibrant gouache coloring',
    std1Modifier: 'Eric Heuvel style 1930s adventure comic scene, vintage airfield background, clear crisp outlines, bright tropical sunlight, 16:9 composition',
    std2Modifier: 'Aviatrix fashion spread in Heuvel style, stylish 1930s leather flight jackets and goggles, clean geometric line precision, 16:9 widescreen',
    std3Modifier: 'Intimate expedition tent group scene in Heuvel comic style, warm hurricane lantern glow, detailed historical maps, friendly unity, 16:9 composition'
  },
  {
    id: 'comic_gerrit_de_jager',
    label: 'Gerrit de Jager (De Familie Doorzon & Liefde en Geluk)',
    category: 'Dutch Comics',
    description: 'Iconic satirical Dutch cartoon art, wild kinetic movement, big expressive noses, witty Dutch suburban humor',
    promptModifier: 'Gerrit de Jager De Familie Doorzon comic strip style, iconic Dutch satirical cartooning, hyper-kinetic slapstick movements, delightfully expressive characters, bold lively ink brush lines, bright sunny primary colors',
    std1Modifier: 'Gerrit de Jager style energetic Dutch cartoon scene, hilarious kinetic character action, bold lively outlines, sunny suburban garden, 16:9 composition',
    std2Modifier: 'Satirical pop fashion spread in De Jager style, colorful quirky suburban outfits, snappy dynamic poses, 16:9 widescreen',
    std3Modifier: 'Warm chaotic family dinner group scene in De Jager comic style, joyful flying cutlery, smiling friendly faces, 16:9 composition'
  },
  {
    id: 'comic_mark_retera_dirkjan',
    label: 'Mark Retera (DirkJan / Absurdist Dutch Gag Masterpiece)',
    category: 'Dutch Comics',
    description: 'Master of Dutch absurd comedic timing, clean iconic character silhouettes, deadpan expressive acting, bright flat colors',
    promptModifier: 'Mark Retera DirkJan comic strip style, masterclass absurdist Dutch newspaper comic art, clean iconic stylized character silhouettes, hilarious deadpan expressions, crisp uniform pen outlines, bright cheerful flat Gouache color fills',
    std1Modifier: 'Mark Retera style absurdist gag comic scene, quirky character postures, clean crisp inking, bright sunny day atmosphere, 16:9 composition',
    std2Modifier: 'Stylized cartoon fashion portrait in Retera style, distinct quirky outfits, bold clean outlines, witty deadpan charm, 16:9 widescreen',
    std3Modifier: 'Humorous campsite group scene in DirkJan comic style, funny expressive camaraderie, bright cheerful colors, 16:9 composition'
  },
  {
    id: 'comic_minck_oosterveer',
    label: 'Minck Oosterveer (Nicky Saxx & Ronson Inc / Master High-Contrast Noir)',
    category: 'Dutch Comics',
    description: 'Masterful Dutch high-contrast black-and-white comic noir, razor-sharp brush shadows, cinematic pulp thriller lighting',
    promptModifier: 'Minck Oosterveer comic book art style, Nicky Saxx and Ronson Inc aesthetic, masterclass high-contrast black and white ink brushwork, razor-sharp shadow cuts, dramatic cinematic pulp thriller lighting, sleek realistic human anatomy',
    std1Modifier: 'Minck Oosterveer style pulp thriller comic scene, bold velvet black shadow shapes, crisp dramatic lighting, intense candid focus, 16:9 composition',
    std2Modifier: 'Dramatic noir fashion spread in Oosterveer style, high-contrast black leather and trench coats, striking silhouette lighting, 16:9 widescreen',
    std3Modifier: 'Intimate safehouse group scene in Oosterveer comic style, deep atmospheric brush shadows, warm rim light, focused unity, 16:9 composition'
  },
  {
    id: 'comic_romano_molenaar',
    label: 'Romano Molenaar (Storm Painted Continuation & Red Sonja)',
    category: 'Dutch Comics',
    description: 'Powerful painted fantasy realism, dramatic glowing highlights, muscular dynamic anatomy, lush fantasy environments',
    promptModifier: 'Romano Molenaar comic art style, contemporary Storm series painterly continuation, heroic dark fantasy realism, rich digital oil and acrylic rendering, dynamic heroic anatomy, glowing dramatic lighting, epic sci-fi fantasy atmosphere',
    std1Modifier: 'Romano Molenaar style painted fantasy scene, majestic glowing skies, heroic physical presence, rich textured brushwork, 16:9 composition',
    std2Modifier: 'High-fantasy armor fashion spread in Molenaar style, gleaming polished metals, dynamic heroic stances, dramatic rim lighting, 16:9 widescreen',
    std3Modifier: 'Intimate fantasy camp scene in Molenaar style, warm glowing embers, rich painted textures on faces and garments, heroic unity, 16:9 composition'
  },
  {
    id: 'comic_paul_geerts',
    label: 'Paul Geerts (Suske en Wiske Golden Era Continuation)',
    category: 'Dutch Comics',
    description: 'Beloved 1970s-1990s Suske en Wiske golden era, warm accessible Flemish ligne claire, vibrant exotic adventures',
    promptModifier: 'Paul Geerts Suske en Wiske comic art style, golden era Flemish adventure strip draughtsmanship, fluid approachable ink outlines, dynamic energetic poses, warm vibrant 1980s European comic coloring, wholesome nostalgic adventure charm',
    std1Modifier: 'Paul Geerts style Flemish adventure scene, lively animated group interaction, clean ink lines, colorful tropical or castle backdrop, 16:9 composition',
    std2Modifier: 'Nostalgic 1980s European graphic novel fashion portrait in Geerts style, colorful casual adventure clothes, clean outlines, 16:9 widescreen',
    std3Modifier: 'Heartwarming group feast scene in Paul Geerts comic style, joyful smiling faces, cozy glowing room, 16:9 composition'
  },
  {
    id: 'comic_jef_nys_jommeke',
    label: 'Jef Nys (Jommeke & Filiberke / Classic Flemish Children\'s BD)',
    category: 'Dutch Comics',
    description: 'Endearing Flemish children\'s classic, soft rounded cartoon curves, sunny joyful landscapes, sweet innocent humor',
    promptModifier: 'Jef Nys Jommeke comic strip style, classic beloved Flemish children\'s adventure art, soft friendly rounded character anatomy, clean smooth ink lines, bright sunlit pasture and village backdrops, joyful wholesome European charm',
    std1Modifier: 'Jef Nys style sunny Flemish adventure scene, cheerful friendly character interaction, bright green meadows and blue skies, 16:9 composition',
    std2Modifier: 'Playful retro cartoon fashion portrait in Jef Nys style, bright colorful sweaters and shorts, friendly rounded outlines, 16:9 widescreen',
    std3Modifier: 'Cozy treehouse group meeting in Jommeke comic style, warm sunny wooden interior, sweet happy faces, 16:9 composition'
  },
  {
    id: 'comic_merijn_hos',
    label: 'Merijn Hos (Modern Dutch Graphic Art & Organic Wood Sculpture)',
    category: 'Dutch Comics',
    description: 'Contemporary Dutch graphic art, flowing organic shapes, folk-art inspired flat patterns, vibrant modern color palette',
    promptModifier: 'Merijn Hos contemporary Dutch illustration style, organic flowing contours, tactile folk-art woodblock patterns, playful abstract flora and fauna, sophisticated vibrant designer palette, modern Amsterdam gallery aesthetic',
    std1Modifier: 'Merijn Hos style graphic illustration scene, whimsical organic shapes, rich decorative patterns, vibrant modern color harmony, 16:9 composition',
    std2Modifier: 'High-fashion editorial graphic in Hos style, flowing stylized garments adorned with folk-art geometric motifs, 16:9 widescreen',
    std3Modifier: 'Intimate decorative group portrait in Merijn Hos style, interwoven colorful abstract flora, warm joyful harmony, 16:9 composition'
  },
  {
    id: 'comic_theo_van_den_boogaard',
    label: 'Theo van den Boogaard (Sjef van Oekel / Hyper-Detailed Dutch Comedy)',
    category: 'Dutch Comics',
    description: 'Hyper-detailed Amsterdam streetscapes, meticulous architectural draughtsmanship, explosive slapstick facial expressions',
    promptModifier: 'Theo van den Boogaard comic art style, Sjef van Oekel and Ansje Anders aesthetic, hyper-detailed architectural pen draughtsmanship of Amsterdam brick facades, wild expressive character faces, rich vintage Dutch color printing',
    std1Modifier: 'Theo van den Boogaard style detailed city scene, intricate Amsterdam canals and bridges, expressive lively characters, 16:9 composition',
    std2Modifier: 'Classic Amsterdam street fashion spread in Boogaard style, detailed wool coats and scarves, meticulous historic building background, 16:9 widescreen',
    std3Modifier: 'Atmospheric brown cafe group scene in Boogaard comic style, intricate wood paneling, warm glowing stained glass, lively conversation, 16:9 composition'
  },
  {
    id: 'comic_hein_de_kort',
    label: 'Hein de Kort (Piet & Riet / Scribbled Underground Dutch Satire)',
    category: 'Dutch Comics',
    description: 'Raw scribbled ink style, delightfully unhinged energetic cartoons, dry Dutch humor, earthy vibrant watercolors',
    promptModifier: 'Hein de Kort comic strip style, Piet & Riet and Dirk & Desiree aesthetic, delightfully raw scribbled black ink lines, energetic loose cartoon anatomy, dry witty observational charm, earthy vibrant watercolor fills on textured paper',
    std1Modifier: 'Hein de Kort style raw scribbled cartoon scene, lively eccentric character gestures, textured loose ink work, warm watercolor washes, 16:9 composition',
    std2Modifier: 'Underground cartoon fashion plate in De Kort style, loose expressive garments, energetic ink scribbles, witty offbeat charm, 16:9 widescreen',
    std3Modifier: 'Cozy eccentric living room scene in Hein de Kort comic style, warm cluttered interior, friendly smiling banter, 16:9 composition'
  }
];
