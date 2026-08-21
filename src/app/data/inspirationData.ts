export interface InspirationGenreNode {
  id: string;
  label: string;
  parentId?: string; // If undefined, top-level
  description?: string;
}

export interface InspirationArtist {
  id: string;
  name: string;
  type: 'band' | 'solo';
  genreIds: string[];
  era?: string;
  styleKeywords: string[];
  musicalDirectives: string;
}

export const INSPIRATION_GENRES: InspirationGenreNode[] = [
  // Pop
  { id: 'pop', label: 'Pop & Dance', description: 'Catchy hooks, synth melodies, dance rhythms, and vocal production' },
  { id: 'pop-synth', parentId: 'pop', label: 'Synthpop & 80s Pop' },
  { id: 'pop-dance', parentId: 'pop', label: 'Dance Pop & Club' },
  { id: 'pop-art', parentId: 'pop', label: 'Art Pop & Experimental Pop' },
  { id: 'pop-europop', parentId: 'pop', label: 'EuroPop & Schlager' },
  { id: 'pop-classic', parentId: 'pop', label: 'Classic Pop & Ballads' },

  // Rock
  { id: 'rock', label: 'Rock', description: 'Electric guitars, driving rhythm sections, anthemic choruses, and raw energy' },
  { id: 'rock-classic', parentId: 'rock', label: 'Classic Rock & Arena' },
  { id: 'rock-hard', parentId: 'rock', label: 'Hard Rock & Glam' },
  { id: 'rock-soft', parentId: 'rock', label: 'Soft Rock & Pop Rock' },
  { id: 'rock-prog', parentId: 'rock', label: 'Progressive & Art Rock' },
  { id: 'rock-folk', parentId: 'rock', label: 'Folk Rock & Roots' },

  // Metal
  { id: 'metal', label: 'Metal', description: 'Distorted riffs, double-bass drums, soaring vocals, and epic soundscapes' },
  { id: 'metal-heavy', parentId: 'metal', label: 'Heavy Metal & NWOBHM' },
  { id: 'metal-thrash', parentId: 'metal', label: 'Thrash & Power Metal' },
  { id: 'metal-symphonic', parentId: 'metal', label: 'Symphonic & Gothic Metal' },
  { id: 'metal-hair', parentId: 'metal', label: 'Hair Metal & Glam Metal' },

  // Punk & Alternative
  { id: 'alt', label: 'Punk & Alternative', description: 'Raw attitude, indie sensibilities, grunge grit, and expressive non-conformity' },
  { id: 'alt-punk', parentId: 'alt', label: 'Punk Rock & Post-Punk' },
  { id: 'alt-grunge', parentId: 'alt', label: 'Grunge & 90s Alt Rock' },
  { id: 'alt-indie', parentId: 'alt', label: 'Indie Rock & Britpop' },
  { id: 'alt-newwave', parentId: 'alt', label: 'New Wave & Darkwave' },

  // Classic & Orchestral
  { id: 'classic', label: 'Classical & Orchestral', description: 'Grand arrangements, operatic vocals, rich strings, and cinematic drama' },
  { id: 'classic-baroque', parentId: 'classic', label: 'Baroque & Classical Era' },
  { id: 'classic-romantic', parentId: 'classic', label: 'Romantic & Symphonic' },
  { id: 'classic-opera', parentId: 'classic', label: 'Operatic & Classical Crossover' },
  { id: 'classic-cinematic', parentId: 'classic', label: 'Cinematic & Film Score' },

  // Country & Folk
  { id: 'folk', label: 'Country & Folk', description: 'Acoustic instruments, storytelling lyrics, harmony vocals, and earthy warmth' },
  { id: 'folk-trad', parentId: 'folk', label: 'Traditional Folk & Singer-Songwriter' },
  { id: 'folk-country', parentId: 'folk', label: 'Classic Country & Outlaw' },
  { id: 'folk-bluegrass', parentId: 'folk', label: 'Bluegrass & Americana' },
  { id: 'folk-celtic', parentId: 'folk', label: 'Celtic Folk & Nordic Roots' },

  // R&B & Soul
  { id: 'rnb', label: 'R&B & Soul', description: 'Groovy basslines, soulful vocal delivery, brass horn accents, and emotional depth' },
  { id: 'rnb-motown', parentId: 'rnb', label: 'Motown & Classic Soul' },
  { id: 'rnb-funk', parentId: 'rnb', label: 'Funk & Disco' },
  { id: 'rnb-modern', parentId: 'rnb', label: 'Modern R&B & Neo-Soul' },

  // Jazz & Blues
  { id: 'jazz', label: 'Jazz & Blues', description: 'Expressive phrasing, improvisation, blue notes, and sophisticated chords' },
  { id: 'jazz-vocal', parentId: 'jazz', label: 'Vocal Jazz & Big Band' },
  { id: 'jazz-blues', parentId: 'jazz', label: 'Delta & Electric Blues' },
  { id: 'jazz-fusion', parentId: 'jazz', label: 'Cool Jazz & Fusion' },

  // Electronic & Trip-Hop
  { id: 'electronic', label: 'Electronic & Ambient', description: 'Synthesizers, trip-hop beats, atmospheric textures, and electronic grooves' },
  { id: 'electronic-triphop', parentId: 'electronic', label: 'Trip-Hop & Downtempo' },
  { id: 'electronic-synthwave', parentId: 'electronic', label: 'Synthwave & Electro' },
  { id: 'electronic-ambient', parentId: 'electronic', label: 'Ambient & Space Music' },

  // World & Reggae
  { id: 'world', label: 'Reggae & World', description: 'Offbeat rhythms, global percussion, dub echoes, and rich cultural flavor' },
  { id: 'world-reggae', parentId: 'world', label: 'Reggae & Dub' },
  { id: 'world-latin', parentId: 'world', label: 'Latin & Flamenco' },
  { id: 'world-afrobeat', parentId: 'world', label: 'Afrobeat & Global Beats' }
];

export const INSPIRATION_ARTISTS: InspirationArtist[] = [
  // Pop / Rock crossover icons mentioned in requirements
  {
    id: 'roxette',
    name: 'Roxette',
    type: 'band',
    genreIds: ['pop', 'pop-synth', 'rock', 'rock-soft', 'pop-europop'],
    era: '80s / 90s',
    styleKeywords: ['melodic pop-rock', 'duet dynamics', 'catchy chorus', 'crunchy rhythm guitar', 'power ballad'],
    musicalDirectives: 'Incorporate dual male-female vocal contrast, punchy distorted power chords paired with bright synth hooks, and dynamic emotional build-ups from intimate verses into big anthemic choruses.'
  },
  {
    id: 'acdc',
    name: 'AC/DC',
    type: 'band',
    genreIds: ['rock', 'rock-hard', 'rock-classic', 'metal-heavy'],
    era: '70s / 80s',
    styleKeywords: ['hard rock riffs', 'high-voltage rhythm', 'gritty lead vocals', 'driving 4/4 drum beat'],
    musicalDirectives: 'Use raw, blues-based hard rock guitar riffs, driving straight-ahead drum grooves, gritty rasp in the vocal line, and simple, explosive chorus chants.'
  },
  {
    id: 'def-leppard',
    name: 'Def Leppard',
    type: 'band',
    genreIds: ['rock', 'rock-hard', 'metal-hair', 'rock-classic'],
    era: '80s',
    styleKeywords: ['multi-layered vocal harmonies', 'polished production', 'melodic guitar solos', 'stadium chorus'],
    musicalDirectives: 'Feature massive gang vocal harmonies in the chorus, clean arpeggiated guitars mixed with crunchy rhythm walls, and precisely structured melodic guitar leads.'
  },
  {
    id: 'madonna',
    name: 'Madonna',
    type: 'solo',
    genreIds: ['pop', 'pop-dance', 'pop-synth', 'rnb-funk'],
    era: '80s / 90s / 00s',
    styleKeywords: ['dance-pop groove', 'provocative theme', 'synth bassline', 'vocal cadence'],
    musicalDirectives: 'Emphasize tight danceable bass grooves, crisp electronic percussion, bold narrative attitude, and infectious vocal hooks.'
  },
  {
    id: 'cher',
    name: 'Cher',
    type: 'solo',
    genreIds: ['pop', 'pop-dance', 'pop-classic', 'rock-soft', 'folk-trad'],
    era: '60s - 00s',
    styleKeywords: ['contralto vocals', 'auto-tune accent', 'dramatic pop-dance', 'folk-pop roots'],
    musicalDirectives: 'Channel deep contralto vocal resonance, dramatic crescendo arrangements, emotional resilience in text, and modern dance-pop synth beats.'
  },
  {
    id: 'queen',
    name: 'Queen',
    type: 'band',
    genreIds: ['rock', 'rock-classic', 'rock-prog', 'pop-art', 'rock-hard'],
    era: '70s / 80s',
    styleKeywords: ['operatic rock', 'multi-track vocal harmony', 'virtuoso guitar solos', 'theatrical structure'],
    musicalDirectives: 'Incorporate grand operatic vocal harmonies, abrupt rhythm and genre shifts within the track, theatrical piano flourishes, and multi-layered orchestration.'
  },
  {
    id: 'abba',
    name: 'ABBA',
    type: 'band',
    genreIds: ['pop', 'pop-classic', 'pop-europop', 'pop-synth'],
    era: '70s',
    styleKeywords: ['wall of sound pop', 'crystalline dual female harmonies', 'piano glissandos', 'melancholic pop lyrics'],
    musicalDirectives: 'Build rich double-tracked female harmonies, lush piano and string backdrops, bittersweet emotional storytelling, and irresistible melodic precision.'
  },
  {
    id: 'beatles',
    name: 'The Beatles',
    type: 'band',
    genreIds: ['pop', 'pop-classic', 'rock', 'rock-classic', 'folk-trad', 'rock-prog'],
    era: '60s',
    styleKeywords: ['timeless songwriting', 'innovative basslines', 'vocal three-part harmony', 'psychedelic flourishes'],
    musicalDirectives: 'Employ inventive chord progressions, vocal three-part harmonies, melodic bass movement, and poetic imagery.'
  },
  {
    id: 'rolling-stones',
    name: 'The Rolling Stones',
    type: 'band',
    genreIds: ['rock', 'rock-classic', 'jazz-blues', 'rock-hard'],
    era: '60s / 70s',
    styleKeywords: ['blues-rock swagger', 'interlocking guitars', 'swaggering rhythm', 'raw street poetry'],
    musicalDirectives: 'Utilize syncopated guitar weaving, loose swaggering groove, blues-inflected vocal phrasing, and gritty lyrical observations.'
  },
  {
    id: 'fleetwood-mac',
    name: 'Fleetwood Mac',
    type: 'band',
    genreIds: ['rock', 'rock-soft', 'folk', 'folk-trad', 'pop-classic'],
    era: '70s / 80s',
    styleKeywords: ['three-part harmony', 'intertwined personal lyrics', 'acoustic-electric warmth', 'steady groove'],
    musicalDirectives: 'Feature organic acoustic and electric guitar layering, rich three-part vocal harmonies, deeply personal relationship lyrics, and driving steady basslines.'
  },
  {
    id: 'pink-floyd',
    name: 'Pink Floyd',
    type: 'band',
    genreIds: ['rock', 'rock-prog', 'rock-classic', 'electronic-ambient'],
    era: '70s',
    styleKeywords: ['psychedelic soundscapes', 'expressive guitar bending', 'philosophical lyrics', 'concept atmospheres'],
    musicalDirectives: 'Build slow, spacious arrangements with atmospheric sound effects, expressive bluesy guitar solos, deep philosophical lyrical themes, and hypnotic keyboard pads.'
  },
  {
    id: 'metallica',
    name: 'Metallica',
    type: 'band',
    genreIds: ['metal', 'metal-thrash', 'metal-heavy', 'rock-hard'],
    era: '80s / 90s',
    styleKeywords: ['fast downpicked riffs', 'aggressive drum double-kick', 'dark thematic lyrics', 'acoustic-to-heavy dynamics'],
    musicalDirectives: 'Use tight, fast downpicked guitar riffs, sudden meter changes, brooding acoustic intro transitions into heavy distortion, and aggressive vocal delivery.'
  },
  {
    id: 'iron-maiden',
    name: 'Iron Maiden',
    type: 'band',
    genreIds: ['metal', 'metal-heavy', 'metal-thrash', 'rock-prog'],
    era: '80s',
    styleKeywords: ['galloping basslines', 'twin guitar harmonies', 'literary epic lyrics', 'soaring theatrical vocals'],
    musicalDirectives: 'Employ galloping bass rhythms, dual harmony guitar leads, theatrical operatic vocals, and historical or literary epic lyrical themes.'
  },
  {
    id: 'judas-priest',
    name: 'Judas Priest',
    type: 'band',
    genreIds: ['metal', 'metal-heavy', 'metal-thrash', 'rock-hard'],
    era: '70s / 80s',
    styleKeywords: ['screaming high vocals', 'dual guitar attack', 'leather and steel aesthetic', 'speed riffs'],
    musicalDirectives: 'Incorporate soaring falsetto metal screams, razor-sharp dual guitar riffs, driving double-bass drumming, and anthemic metal lyrics.'
  },
  {
    id: 'guns-n-roses',
    name: 'Guns N\' Roses',
    type: 'band',
    genreIds: ['rock', 'rock-hard', 'rock-classic', 'metal-hair'],
    era: '80s / 90s',
    styleKeywords: ['raw bluesy hard rock', 'soaring guitar solos', 'raspy vocal range', 'rebellious lyricism'],
    musicalDirectives: 'Combine aggressive hard rock riffs with bluesy melodic guitar leads, dynamic piano ballad sections, and passionate raspy vocal climaxes.'
  },
  {
    id: 'bon-jovi',
    name: 'Bon Jovi',
    type: 'band',
    genreIds: ['rock', 'rock-classic', 'rock-hard', 'pop-classic'],
    era: '80s / 90s',
    styleKeywords: ['arena rock anthem', 'talk-box guitar', 'working-class storytelling', 'key-change choruses'],
    musicalDirectives: 'Craft anthemic stadium choruses, relatable storytelling about everyday struggles, talk-box or driving guitar motifs, and uplifting key changes.'
  },
  {
    id: 'aerosmith',
    name: 'Aerosmith',
    type: 'band',
    genreIds: ['rock', 'rock-hard', 'rock-classic', 'jazz-blues'],
    era: '70s / 80s / 90s',
    styleKeywords: ['blues-rock funk', 'vocal scat and screams', 'twisting guitar leads', 'rhythmic strut'],
    musicalDirectives: 'Incorporate funky blues-rock guitar rhythm, vocal improvisations and high screams, horn accents, and rhythmic swaggering lyrics.'
  },
  {
    id: 'scorpions',
    name: 'Scorpions',
    type: 'band',
    genreIds: ['rock', 'rock-hard', 'metal-heavy', 'rock-soft'],
    era: '70s / 80s',
    styleKeywords: ['melodic power ballads', 'twin guitar leads', 'hopeful political lyrics', 'soaring hooks'],
    musicalDirectives: 'Feature whistle or acoustic guitar ballad intros, emotional melodic climaxes, twin guitar lead harmony, and uplifting international lyrics.'
  },
  {
    id: 'michael-jackson',
    name: 'Michael Jackson',
    type: 'solo',
    genreIds: ['pop', 'pop-dance', 'rnb-funk', 'rnb-motown', 'rock-soft'],
    era: '70s / 80s / 90s',
    styleKeywords: ['funky basslines', 'vocal hiccups and accents', 'cinematic production', 'rhythmic precision'],
    musicalDirectives: 'Utilize syncopated basslines, percussive vocal hiccups and grunts, cinematic brass stabs, and tight pop-funk arrangements.'
  },
  {
    id: 'prince',
    name: 'Prince',
    type: 'solo',
    genreIds: ['pop', 'rnb-funk', 'rock', 'pop-synth', 'rnb-modern'],
    era: '80s / 90s',
    styleKeywords: ['Minneapolis sound', 'funk guitar chops', 'falsetto vocals', 'genre-blurring genius'],
    musicalDirectives: 'Blend dry drum machine beats, fiery guitar solos, slap bass synth lines, falsetto vocal accents, and eccentric poetic flair.'
  },
  {
    id: 'david-bowie',
    name: 'David Bowie',
    type: 'solo',
    genreIds: ['rock', 'rock-prog', 'pop-art', 'alt-newwave', 'rock-classic'],
    era: '70s / 80s / 90s',
    styleKeywords: ['chameleonic style', 'avant-garde pop', 'dramatic vocal delivery', 'surrealist lyrics'],
    musicalDirectives: 'Incorporate art-rock experimentation, dramatic theatrical vocals, surreal sci-fi or existential lyrics, and lush sax and guitar textures.'
  },
  {
    id: 'elton-john',
    name: 'Elton John',
    type: 'solo',
    genreIds: ['pop', 'pop-classic', 'rock-soft', 'rock-classic'],
    era: '70s / 80s',
    styleKeywords: ['piano-driven rock', 'narrative storytelling', 'soaring melodies', 'grand orchestral backing'],
    musicalDirectives: 'Center on energetic piano riffs, rich narrative storytelling, gospel-influenced chord changes, and memorable vocal melodies.'
  },
  {
    id: 'whitney-houston',
    name: 'Whitney Houston',
    type: 'solo',
    genreIds: ['pop', 'pop-classic', 'rnb-motown', 'rnb-modern', 'pop-dance'],
    era: '80s / 90s',
    styleKeywords: ['virtuoso vocal power', 'gospel vocal runs', 'emotional balladry', 'upbeat dance pop'],
    musicalDirectives: 'Build around soaring virtuosic vocal melismas, dramatic key changes, warm synth pads, and powerful emotional resolution.'
  },
  {
    id: 'tina-turner',
    name: 'Tina Turner',
    type: 'solo',
    genreIds: ['rock', 'pop', 'rnb-funk', 'rnb-motown', 'rock-hard'],
    era: '60s - 90s',
    styleKeywords: ['gritty soulful vocals', 'high-energy rhythm', 'empowerment anthem', 'driving brass'],
    musicalDirectives: 'Employ raspy, powerful soul vocals, high-energy rock drum beat, punchy horn section, and lyrics of personal victory.'
  },
  {
    id: 'celine-dion',
    name: 'Celine Dion',
    type: 'solo',
    genreIds: ['pop', 'pop-classic', 'classic-opera'],
    era: '90s / 00s',
    styleKeywords: ['power ballad', 'dramatic vocal belt', 'orchestral swell', 'key change climax'],
    musicalDirectives: 'Use delicate acoustic piano openings that build into full orchestral swells, explosive belted vocal climaxes, and passionate romantic themes.'
  },
  {
    id: 'lady-gaga',
    name: 'Lady Gaga',
    type: 'solo',
    genreIds: ['pop', 'pop-dance', 'pop-synth', 'pop-art', 'rock-soft'],
    era: '00s / 10s / 20s',
    styleKeywords: ['theatrical dance-pop', 'heavy synth bass', 'glam rock influence', 'anthem chorus'],
    musicalDirectives: 'Feature punchy four-on-the-floor electro beats, theatrical vocal delivery, bold synth stabs, and empowering anthemic hooks.'
  },
  {
    id: 'taylor-swift',
    name: 'Taylor Swift',
    type: 'solo',
    genreIds: ['pop', 'folk-country', 'folk-trad', 'pop-synth'],
    era: '00s - 20s',
    styleKeywords: ['vivid narrative lyrics', 'pop-country crossover', 'intimate vocal delivery', 'concept storytelling'],
    musicalDirectives: 'Focus on highly specific narrative detail, conversational vocal cadences, acoustic guitar or synth bass driving patterns, and cathartic bridge structures.'
  },
  {
    id: 'kate-bush',
    name: 'Kate Bush',
    type: 'solo',
    genreIds: ['pop-art', 'rock-prog', 'alt', 'electronic-ambient', 'folk-celtic'],
    era: '70s / 80s',
    styleKeywords: ['fairlight CMI synths', 'high theatrical falsetto', 'literary folklore lyrics', 'polyrhythmic beats'],
    musicalDirectives: 'Incorporate unorthodox vocal phrasing, dramatic falsetto leaps, atmospheric synth textures, folk instruments, and mythological narrative concepts.'
  },
  {
    id: 'bjork',
    name: 'Björk',
    type: 'solo',
    genreIds: ['pop-art', 'electronic-ambient', 'electronic-triphop', 'alt'],
    era: '90s - 20s',
    styleKeywords: ['avant-garde electronic', 'orchestral strings', 'expressive organic vocals', 'microbeats'],
    musicalDirectives: 'Combine eccentric electronic microbeats with lush symphonic string arrangements, passionate vocal dynamics, and nature-inspired imagery.'
  },
  {
    id: 'nirvana',
    name: 'Nirvana',
    type: 'band',
    genreIds: ['alt', 'alt-grunge', 'alt-punk', 'rock'],
    era: '90s',
    styleKeywords: ['loud-quiet-loud dynamics', 'fuzzy distorted guitar', 'raw passionate vocals', 'poetic angst'],
    musicalDirectives: 'Utilize stark loud-quiet-loud verse-chorus contrasts, heavy fuzz guitar distortion, raw unpolished vocals, and cryptic poetic angst.'
  },
  {
    id: 'radiohead',
    name: 'Radiohead',
    type: 'band',
    genreIds: ['alt', 'alt-indie', 'rock-prog', 'electronic-ambient', 'pop-art'],
    era: '90s - 20s',
    styleKeywords: ['experimental art rock', 'melancholic falsetto', 'complex time signatures', 'glitch electronics'],
    musicalDirectives: 'Employ atmospheric ambient guitar and synth layers, melancholic falsetto vocals, unorthodox rhythm meters, and introspective dystopian lyrics.'
  },
  {
    id: 'linkin-park',
    name: 'Linkin Park',
    type: 'band',
    genreIds: ['alt', 'alt-grunge', 'rock-hard', 'metal-heavy', 'electronic-synthwave'],
    era: '00s / 10s',
    styleKeywords: ['nu-metal hip-hop fusion', 'dual vocal trade-offs', 'heavy electronic samples', 'cathartic screams'],
    musicalDirectives: 'Interweave melodic rapping and soaring sung/screamed vocal choruses, electronic scratch or synth textures, and heavy down-tuned guitar riffs.'
  },
  {
    id: 'the-cure',
    name: 'The Cure',
    type: 'band',
    genreIds: ['alt', 'alt-newwave', 'alt-punk', 'rock-soft'],
    era: '80s / 90s',
    styleKeywords: ['gothic post-punk', 'chorus-effect guitar', 'expressive melancholic vocals', 'lush basslines'],
    musicalDirectives: 'Layer sparkling chorus-drenched guitar lines, long atmospheric intros, melancholic emotional lyrics, and expressive, quavering vocal delivery.'
  },
  {
    id: 'depeche-mode',
    name: 'Depeche Mode',
    type: 'band',
    genreIds: ['electronic', 'electronic-synthwave', 'pop-synth', 'alt-newwave'],
    era: '80s / 90s',
    styleKeywords: ['dark synthpop', 'industrial beats', 'baritone vocals', 'sensual lyrics'],
    musicalDirectives: 'Use dark atmospheric synthesizer sequences, metallic percussion samples, rich baritone lead vocals, and themes of desire and faith.'
  },
  {
    id: 'portishead',
    name: 'Portishead',
    type: 'band',
    genreIds: ['electronic', 'electronic-triphop', 'alt', 'jazz-blues'],
    era: '90s',
    styleKeywords: ['trip-hop noir', 'vinyl crackle and turntable scratches', 'haunting female vocals', 'cinematic spy-film guitars'],
    musicalDirectives: 'Create slow, hypnotic trip-hop drum breaks, dark vinyl texture, melancholic minor-key guitar chords, and vulnerable, haunting vocal melodies.'
  },
  {
    id: 'massive-attack',
    name: 'Massive Attack',
    type: 'band',
    genreIds: ['electronic', 'electronic-triphop', 'rnb-modern', 'world-reggae'],
    era: '90s / 00s',
    styleKeywords: ['dub trip-hop', 'deep bass sub-frequencies', 'whispered rap and soul vocals', 'dark cinematic pads'],
    musicalDirectives: 'Rely on heavy sub-bass loops, cinematic string orchestrations, slow dub-influenced percussion, and mysterious, intimate vocal performances.'
  },
  {
    id: 'dolly-parton',
    name: 'Dolly Parton',
    type: 'solo',
    genreIds: ['folk', 'folk-country', 'folk-trad', 'folk-bluegrass'],
    era: '60s - 20s',
    styleKeywords: ['vibrato vocals', 'storyteller country', 'bright acoustic fingerpicking', 'witty lyrics'],
    musicalDirectives: 'Feature fast acoustic guitar fingerpicking, clear expressive vibrato singing, humorous or touching storytelling, and classic country chord structures.'
  },
  {
    id: 'johnny-cash',
    name: 'Johnny Cash',
    type: 'solo',
    genreIds: ['folk', 'folk-country', 'folk-trad', 'jazz-blues'],
    era: '50s - 00s',
    styleKeywords: ['boom-chicka-boom rhythm', 'deep baritone voice', 'outlaw storytelling', 'stark acoustic guitar'],
    musicalDirectives: 'Utilize the steady "boom-chicka-boom" acoustic rhythm, deep gravelly baritone vocals, stark minimalist arrangements, and tales of redemption and struggle.'
  },
  {
    id: 'bob-dylan',
    name: 'Bob Dylan',
    type: 'solo',
    genreIds: ['folk', 'folk-trad', 'rock-folk', 'rock-classic'],
    era: '60s - 20s',
    styleKeywords: ['poetic surrealist lyrics', 'harmonica solos', 'nasal vocal cadence', 'folk acoustic strumming'],
    musicalDirectives: 'Focus on dense, stream-of-consciousness poetic lyrics, simple acoustic guitar strumming interspersed with raw harmonica phrasing, and expressive narrative delivery.'
  },
  {
    id: 'first-aid-kit',
    name: 'First Aid Kit',
    type: 'band',
    genreIds: ['folk', 'folk-trad', 'folk-country', 'pop-classic'],
    era: '10s / 20s',
    styleKeywords: ['sisterly vocal harmony', 'Indie Americana', 'pedal steel guitar', 'poetic nature imagery'],
    musicalDirectives: 'Build tight two-part vocal harmonies, shimmering acoustic guitars, pedal steel atmospheric accents, and bittersweet lyrics about journeying and nature.'
  },
  {
    id: 'stevie-wonder',
    name: 'Stevie Wonder',
    type: 'solo',
    genreIds: ['rnb', 'rnb-motown', 'rnb-funk', 'jazz-vocal', 'pop-classic'],
    era: '60s / 70s / 80s',
    styleKeywords: ['Clavinet funk groove', 'harmonica solos', 'rich chromatic chords', 'joyful soul vocals'],
    musicalDirectives: 'Incorporate bouncy Clavinet funk riffs, expressive chromatic harmonica accents, sophisticated jazz-pop harmony, and uplifting vocal energy.'
  },
  {
    id: 'aretha-franklin',
    name: 'Aretha Franklin',
    type: 'solo',
    genreIds: ['rnb', 'rnb-motown', 'rnb-funk', 'jazz-vocal'],
    era: '60s / 70s',
    styleKeywords: ['Queen of Soul vocals', 'gospel piano chords', 'brass horn stabs', 'impassioned call-and-response'],
    musicalDirectives: 'Anchor the song on gospel piano chords, powerful soul vocal improvisations, dynamic brass stabs, and call-and-response backing singers.'
  },
  {
    id: 'frank-sinatra',
    name: 'Frank Sinatra',
    type: 'solo',
    genreIds: ['jazz', 'jazz-vocal', 'classic-opera', 'pop-classic'],
    era: '40s - 60s',
    styleKeywords: ['big band swing', 'silky legato phrasing', 'lush horn and string arrangements', 'suave vocal style'],
    musicalDirectives: 'Use sweeping string orchestrations, tight big band horn swing, impeccably timed vocal legato phrasing, and sophisticated romantic lyrics.'
  },
  {
    id: 'andrea-bocelli',
    name: 'Andrea Bocelli',
    type: 'solo',
    genreIds: ['classic', 'classic-opera', 'pop-classic'],
    era: '90s - 20s',
    styleKeywords: ['tenor operatic belt', 'neoclassical orchestration', 'romantic Italian flair', 'soaring acoustic guitar'],
    musicalDirectives: 'Build lush neoclassical symphonic arrangements, soaring operatic tenor climaxes, classical Spanish/acoustic guitar flourishes, and passionate romantic themes.'
  },
  {
    id: 'enya',
    name: 'Enya',
    type: 'solo',
    genreIds: ['folk-celtic', 'electronic-ambient', 'classic', 'pop-art'],
    era: '80s - 20s',
    styleKeywords: ['multi-layered vocal wall', 'celtic harp and strings', 'ethereal ambient pads', 'pagan and nature themes'],
    musicalDirectives: 'Construct massive multi-tracked vocal choir walls, ethereal synth pads, pizzicato strings, and hypnotic, peaceful nature imagery.'
  },
  {
    id: 'bob-marley',
    name: 'Bob Marley',
    type: 'band',
    genreIds: ['world', 'world-reggae', 'rnb-funk'],
    era: '70s',
    styleKeywords: ['reggae skank guitar', 'one-drop drum beat', 'spiritual message', 'warm bass groove'],
    musicalDirectives: 'Rely on offbeat rhythm guitar chops (skank), deep one-drop drum rhythms, soul-stirring message lyrics, and backing vocal harmonies.'
  },

  // --- NEW 100 EXPANDED ARTISTS & BANDS ---
  {
    id: 'led-zeppelin',
    name: 'Led Zeppelin',
    type: 'band',
    genreIds: ['rock', 'rock-classic', 'rock-hard', 'rock-folk', 'jazz-blues'],
    era: '70s',
    styleKeywords: ['heavy blues rock', 'thunderous drumming', 'mystical lyrics', 'screaming tenor vocals'],
    musicalDirectives: 'Combine heavy blues guitar riffage, thunderous un-damped drum grooves, mystical folk acoustic interludes, and soaring high tenor vocal cries.'
  },
  {
    id: 'black-sabbath',
    name: 'Black Sabbath',
    type: 'band',
    genreIds: ['metal', 'metal-heavy', 'rock-hard', 'rock-classic'],
    era: '70s',
    styleKeywords: ['downtuned doom riffs', 'occult atmosphere', 'tritone interval', 'ominous rhythm'],
    musicalDirectives: 'Utilize heavy down-tuned guitar riffs, tritone "devil interval" motifs, dark ominous tempo changes, and eerie, haunting vocal cadence.'
  },
  {
    id: 'deep-purple',
    name: 'Deep Purple',
    type: 'band',
    genreIds: ['rock', 'rock-classic', 'rock-hard', 'metal-heavy'],
    era: '70s',
    styleKeywords: ['distorted Hammond organ', 'fast guitar arpeggios', 'screaming vocal belts', 'driving rock beat'],
    musicalDirectives: 'Feature overdrive Hammond organ dueling with fast bluesy guitar leads, high screeching vocal belts, and driving high-velocity drumming.'
  },
  {
    id: 'the-who',
    name: 'The Who',
    type: 'band',
    genreIds: ['rock', 'rock-classic', 'rock-hard', 'rock-prog'],
    era: '60s / 70s',
    styleKeywords: ['power chord windmills', 'lead bass guitar', 'explosive drum fills', 'rock opera anthems'],
    musicalDirectives: 'Incorporate explosive drum fills, restless lead basslines, ringing acoustic and power-chord rhythm guitars, and anthemic rock opera choruses.'
  },
  {
    id: 'genesis',
    name: 'Genesis',
    type: 'band',
    genreIds: ['rock', 'rock-prog', 'pop-synth', 'pop-classic'],
    era: '70s / 80s',
    styleKeywords: ['intricate synth solos', 'dramatic storytelling', 'gated reverb drums', 'melodic art-pop'],
    musicalDirectives: 'Blend complex progressive keyboard textures and dramatic storytelling with tight 80s gated-reverb drum beats and infectious melodic hooks.'
  },
  {
    id: 'rush',
    name: 'Rush',
    type: 'band',
    genreIds: ['rock', 'rock-prog', 'metal-heavy', 'rock-hard'],
    era: '70s / 80s',
    styleKeywords: ['virtuoso power trio', 'odd time signatures', 'philosophical lyrics', 'analog synth pads'],
    musicalDirectives: 'Employ rapid shifting time signatures, intricate bass and guitar counterpoint, Taurus synth pedal swells, and philosophical science-fiction lyricism.'
  },
  {
    id: 'yes',
    name: 'Yes',
    type: 'band',
    genreIds: ['rock', 'rock-prog', 'pop-art'],
    era: '70s',
    styleKeywords: ['soaring vocal counterpoint', 'growling Rickenbacker bass', 'classical guitar runs', 'cosmic themes'],
    musicalDirectives: 'Use bright growling basslines, multi-part soaring vocal harmonies, classical acoustic guitar interludes, and expansive cosmic fantasy storytelling.'
  },
  {
    id: 'boston',
    name: 'Boston',
    type: 'band',
    genreIds: ['rock', 'rock-classic', 'rock-hard', 'rock-soft'],
    era: '70s',
    styleKeywords: ['layered guitar harmonies', 'soaring tenor belt', 'organ crescendos', 'pristine arena rock'],
    musicalDirectives: 'Build immaculate multi-tracked guitar harmonies, soaring clean high vocal leads, pipe organ crescendos, and crystal-clear arena production.'
  },
  {
    id: 'journey',
    name: 'Journey',
    type: 'band',
    genreIds: ['rock', 'rock-classic', 'rock-soft', 'pop-classic'],
    era: '70s / 80s',
    styleKeywords: ['soaring tenor belting', 'piano-driven rock intro', 'melodic guitar solos', 'triumphant chorus'],
    musicalDirectives: 'Start with driving piano chords, transition into soaring high-register vocal belting, liquid guitar solos, and universally uplifting choruses.'
  },
  {
    id: 'foreigner',
    name: 'Foreigner',
    type: 'band',
    genreIds: ['rock', 'rock-classic', 'rock-hard', 'rock-soft'],
    era: '70s / 80s',
    styleKeywords: ['crunchy rhythm riffs', 'gospel choir chorus', 'sax accents', 'passionate rock vocal'],
    musicalDirectives: 'Combine driving guitar riffs, passionate raspy lead vocals, subtle synth and sax hooks, and gospel choir backing swells in the climax.'
  },
  {
    id: 'heart',
    name: 'Heart',
    type: 'band',
    genreIds: ['rock', 'rock-hard', 'rock-classic', 'folk-trad'],
    era: '70s / 80s',
    styleKeywords: ['powerful female belt', 'acoustic-to-heavy acoustic transitions', 'folk-rock roots', 'arena hooks'],
    musicalDirectives: 'Contrast delicate acoustic folk intro picking with ferocious hard-rock guitar riffs and explosive, soulful female vocal belting.'
  },
  {
    id: 'blondie',
    name: 'Blondie',
    type: 'band',
    genreIds: ['pop', 'pop-synth', 'alt-newwave', 'alt-punk', 'pop-dance'],
    era: '70s / 80s',
    styleKeywords: ['new wave disco fusion', 'cool detached vocals', 'farfisa organ', 'punk attitude'],
    musicalDirectives: 'Merge four-on-the-floor disco rhythms with gritty punk guitar chops, cool effortless female vocal phrasing, and retro organ stabs.'
  },
  {
    id: 'duran-duran',
    name: 'Duran Duran',
    type: 'band',
    genreIds: ['pop', 'pop-synth', 'alt-newwave', 'pop-dance'],
    era: '80s',
    styleKeywords: ['slap bass groove', 'shimmering synth pads', 'stylish dramatic vocals', 'glamorous art-pop'],
    musicalDirectives: 'Highlight funky slap bass grooves, lush synth arpeggiators, crisp electronic drum snaps, and dramatic, stylish vocal melodies.'
  },
  {
    id: 'tears-for-fears',
    name: 'Tears for Fears',
    type: 'band',
    genreIds: ['pop', 'pop-synth', 'alt-newwave', 'pop-art'],
    era: '80s',
    styleKeywords: ['psychological lyricism', 'lush synth orchestrations', 'driving bass synth', 'emotive pop duet'],
    musicalDirectives: 'Feature deep introspective lyrics, cinematic synthesizer orchestrations, punchy acoustic/electronic rhythm layering, and cathartic vocal swells.'
  },
  {
    id: 'george-michael',
    name: 'George Michael',
    type: 'solo',
    genreIds: ['pop', 'pop-dance', 'pop-classic', 'rnb-motown', 'rnb-modern'],
    era: '80s / 90s',
    styleKeywords: ['silky pop vocals', 'funky acoustic guitar rhythm', 'sensual sax leads', 'flawless pop arrangement'],
    musicalDirectives: 'Craft silky smooth vocal phrasing, tight acoustic guitar funk chops, soulful saxophone accents, and immaculate dance-pop production.'
  },
  {
    id: 'cyndi-lauper',
    name: 'Cyndi Lauper',
    type: 'solo',
    genreIds: ['pop', 'pop-synth', 'alt-newwave', 'pop-classic'],
    era: '80s',
    styleKeywords: ['eccentric vocal hiccups', 'bright synth hooks', 'vulnerable ballads', 'playful new wave'],
    musicalDirectives: 'Blend playful vocal acrobatics and quirky expressive hiccups with bright 80s synth bells, or deliver heartbreakingly tender ballad phrasing.'
  },
  {
    id: 'phil-collins',
    name: 'Phil Collins',
    type: 'solo',
    genreIds: ['pop', 'pop-classic', 'rock-soft', 'rnb-motown'],
    era: '80s / 90s',
    styleKeywords: ['gated reverb drum fill', 'horn section stabs', 'heartfelt pop ballad', 'rhythmic precision'],
    musicalDirectives: 'Feature iconic gated-reverb drum climaxes, punchy Motown-inspired brass section stabs, and raw, soulful vocal honesty.'
  },
  {
    id: 'billy-joel',
    name: 'Billy Joel',
    type: 'solo',
    genreIds: ['pop', 'pop-classic', 'rock-soft', 'jazz-vocal'],
    era: '70s / 80s',
    styleKeywords: ['storyteller piano', 'broadway rock vocal', 'harmonica accents', 'vivid character sketches'],
    musicalDirectives: 'Lead with energetic story-driven piano patterns, vivid narrative lyrics about working-class characters, and dynamic Broadway-rock vocal delivery.'
  },
  {
    id: 'bruce-springsteen',
    name: 'Bruce Springsteen',
    type: 'solo',
    genreIds: ['rock', 'rock-classic', 'rock-folk', 'folk-trad'],
    era: '70s / 80s / 90s',
    styleKeywords: ['heartland rock anthem', 'glockenspiel & sax duo', 'gritty working-class lyrics', 'stadium energy'],
    musicalDirectives: 'Incorporate wall-of-sound heartland rock energy, bright glockenspiel bell counterpoints, triumphant sax solos, and passionate, gravelly storytelling.'
  },
  {
    id: 'tom-petty',
    name: 'Tom Petty',
    type: 'solo',
    genreIds: ['rock', 'rock-classic', 'rock-folk', 'alt-indie'],
    era: '70s / 80s / 90s',
    styleKeywords: ['jangly 12-string guitar', 'nasal drawl vocal', 'roots rock groove', 'straightforward hooks'],
    musicalDirectives: 'Use ringing 12-string Rickenbacker guitar chords, relaxed roots-rock rhythm, conversational southern vocal drawl, and unforgettable chorus hooks.'
  },
  {
    id: 'u2',
    name: 'U2',
    type: 'band',
    genreIds: ['rock', 'rock-classic', 'alt-indie', 'pop-classic'],
    era: '80s / 90s / 00s',
    styleKeywords: ['delayed rhythmic guitar', 'driving octave bass', 'soaring falsetto tenor', 'spiritual arena rock'],
    musicalDirectives: 'Utilize dotted-eighth note guitar delay shimmer, steady driving octave basslines, atmospheric synth ambience, and passionate, high-soaring vocals.'
  },
  {
    id: 'rem',
    name: 'R.E.M.',
    type: 'band',
    genreIds: ['alt', 'alt-indie', 'rock-folk', 'pop-art'],
    era: '80s / 90s',
    styleKeywords: ['arpeggiated Rickenbacker guitar', 'poetic cryptic lyrics', 'melodic basslines', 'folk-pop harmonies'],
    musicalDirectives: 'Combine jangly arpeggiated guitars, expressive melodic bass counterpoint, cryptic literary lyrics, and earnest vocal harmonies.'
  },
  {
    id: 'the-police',
    name: 'The Police',
    type: 'band',
    genreIds: ['rock', 'alt-newwave', 'world-reggae', 'pop-art'],
    era: '70s / 80s',
    styleKeywords: ['reggae rock skank', 'chorus electric guitar', 'hi-hat intricate rhythms', 'high vocal range'],
    musicalDirectives: 'Interweave syncopated reggae-punk guitar chords, chorus pedal shimmer, complex hi-hat and cymbal work, and high-register melodic vocals.'
  },
  {
    id: 'talking-heads',
    name: 'Talking Heads',
    type: 'band',
    genreIds: ['alt', 'alt-newwave', 'alt-punk', 'rnb-funk', 'world-afrobeat'],
    era: '70s / 80s',
    styleKeywords: ['afrobeat funk rhythm', 'eccentric vocal cadence', 'interlocking guitars', 'art-punk groove'],
    musicalDirectives: 'Build hyper-rhythmic polyrhythmic funk grooves, interlocking clean guitar chops, nervous intellectual vocals, and vibrant percussion layers.'
  },
  {
    id: 'joy-division',
    name: 'Joy Division',
    type: 'band',
    genreIds: ['alt', 'alt-punk', 'alt-newwave'],
    era: '70s',
    styleKeywords: ['post-punk gloom', 'high melodic bass guitar', 'angular drum patterns', 'baritone haunting vocal'],
    musicalDirectives: 'Feature high-register lead basslines, angular robotic drum beats, sparse cold guitar stabs, and deep, haunting baritone vocal delivery.'
  },
  {
    id: 'new-order',
    name: 'New Order',
    type: 'band',
    genreIds: ['electronic', 'electronic-synthwave', 'alt-newwave', 'pop-dance'],
    era: '80s',
    styleKeywords: ['dance-punk synth bass', 'melodic bass guitar', 'sequenced electronic drum', 'melancholic dance'],
    musicalDirectives: 'Merge heavy analog synthesizer sequencers and electronic drum machine beats with high melodic bass guitar leads and bittersweet pop lyrics.'
  },
  {
    id: 'kraftwerk',
    name: 'Kraftwerk',
    type: 'band',
    genreIds: ['electronic', 'electronic-synthwave', 'pop-synth'],
    era: '70s / 80s',
    styleKeywords: ['robotic synth minimalism', 'vocoder vocals', 'hypnotic electronic pulse', 'futuristic concepts'],
    musicalDirectives: 'Construct precise robotic synthesizer loops, vocoded or deadpan vocal phrases, hypnotic electronic rhythm grids, and clean futuristic melodies.'
  },
  {
    id: 'the-prodigy',
    name: 'The Prodigy',
    type: 'band',
    genreIds: ['electronic', 'electronic-synthwave', 'alt-punk', 'rock-hard'],
    era: '90s / 00s',
    styleKeywords: ['big beat breakbeats', 'aggressive synth stabs', 'punk vocal shouts', 'high-octane energy'],
    musicalDirectives: 'Deploy relentless heavy breakbeat drum samples, distorted synthesizer stabs, menacing punk vocal chants, and frantic raver energy.'
  },
  {
    id: 'chemical-brothers',
    name: 'The Chemical Brothers',
    type: 'band',
    genreIds: ['electronic', 'electronic-synthwave', 'pop-dance'],
    era: '90s / 00s',
    styleKeywords: ['psychedelic big beat', 'sweeping bass filters', 'hypnotic vocal loops', 'strobe synth riffs'],
    musicalDirectives: 'Build massive psychedelic breakbeat builds, sweeping filter risers, distorted bass synth loops, and hypnotic hypnotic vocal repetitions.'
  },
  {
    id: 'daft-punk',
    name: 'Daft Punk',
    type: 'band',
    genreIds: ['electronic', 'electronic-synthwave', 'pop-dance', 'rnb-funk'],
    era: '90s / 00s / 10s',
    styleKeywords: ['french house disco', 'talkbox robot vocals', 'funky guitar strum', 'analog synth warmth'],
    musicalDirectives: 'Incorporate groovy slap bass, muted disco funk guitar strumming, robot talkbox/vocoder hooks, and warm analog synthesizer hooks.'
  },
  {
    id: 'gorillaz',
    name: 'Gorillaz',
    type: 'band',
    genreIds: ['alt', 'alt-indie', 'electronic-triphop', 'pop', 'rnb-modern'],
    era: '00s / 10s',
    styleKeywords: ['genre-blurring cartoon indie', 'dub bassline', 'mellow acoustic strum', 'lazy melodica leads'],
    musicalDirectives: 'Combine hip-hop breakbeats, lo-fi dub bass loops, melancholic acoustic guitar, lazy vocal delivery, and playful genre crossovers.'
  },
  {
    id: 'oasis',
    name: 'Oasis',
    type: 'band',
    genreIds: ['alt', 'alt-indie', 'rock', 'rock-classic'],
    era: '90s',
    styleKeywords: ['wall of distorted guitar', 'swaggering britpop', 'nasal Lennon-esque vocal', 'stadium Singalong'],
    musicalDirectives: 'Build heavy walls of distorted acoustic and electric guitars, swaggering tempo, arrogant nasal vocal delivery, and massive singalong chorus melodies.'
  },
  {
    id: 'blur',
    name: 'Blur',
    type: 'band',
    genreIds: ['alt', 'alt-indie', 'pop-art', 'rock'],
    era: '90s / 00s',
    styleKeywords: ['quirky britpop', 'brass horn hooks', 'fuzzy alt-rock distortion', 'witty social commentary'],
    musicalDirectives: 'Mix playful kooky music-hall piano and horn arrangements with sudden explosive lo-fi fuzz guitar breakouts and satirical lyrics.'
  },
  {
    id: 'the-strokes',
    name: 'The Strokes',
    type: 'band',
    genreIds: ['alt', 'alt-indie', 'alt-punk', 'rock'],
    era: '00s',
    styleKeywords: ['interlocking twin guitars', 'driving garage rock drum', 'compressed vocal distortion', 'tight indie groove'],
    musicalDirectives: 'Feature mechanical, tight drum rhythms, interlocking rhythmic guitar patterns, punchy basslines, and compressed, coolly nonchalant lead vocals.'
  },
  {
    id: 'arctic-monkeys',
    name: 'Arctic Monkeys',
    type: 'band',
    genreIds: ['alt', 'alt-indie', 'rock', 'rock-hard'],
    era: '00s / 10s',
    styleKeywords: ['heavy stoner rock riffs', 'crooner vocal delivery', 'clever wordplay', 'tight syncopated rhythm'],
    musicalDirectives: 'Contrast heavy down-tuned guitar riffs with smooth, crooning vocal cadences, syncopated drum beats, and witty nocturnal lyricism.'
  },
  {
    id: 'foo-fighters',
    name: 'Foo Fighters',
    type: 'band',
    genreIds: ['rock', 'rock-hard', 'alt-grunge', 'rock-classic'],
    era: '90s / 00s / 10s',
    styleKeywords: ['triple guitar assault', 'melodic scream-along', 'relentless drum driving force', 'dynamic post-grunge'],
    musicalDirectives: 'Build dynamic verse-to-chorus explosions with dense triple-guitar rhythm walls, driving drum fills, and passionate melodic screaming.'
  },
  {
    id: 'red-hot-chili-peppers',
    name: 'Red Hot Chili Peppers',
    type: 'band',
    genreIds: ['rock', 'alt-indie', 'rnb-funk', 'alt-grunge'],
    era: '90s / 00s',
    styleKeywords: ['slap bass virtuosity', 'melodic Hendrix-style guitar', 'rap-singing vocal transition', 'californian nostalgia'],
    musicalDirectives: 'Anchor the groove with hyperactive slap bass and syncopated drumming, paired with melodic atmospheric guitar embellishments and rhythmic rap-sung vocals.'
  },
  {
    id: 'pearl-jam',
    name: 'Pearl Jam',
    type: 'band',
    genreIds: ['alt', 'alt-grunge', 'rock', 'rock-classic'],
    era: '90s / 00s',
    styleKeywords: ['deep baritone vocal bravado', 'classic rock dual guitars', 'passionate social commentary', 'grunge balladeering'],
    musicalDirectives: 'Employ expressive baritone vocal vibrato, soaring Hendrix-influenced guitar leads, dynamic rhythm shifts, and earnest emotional storytelling.'
  },
  {
    id: 'soundgarden',
    name: 'Soundgarden',
    type: 'band',
    genreIds: ['alt', 'alt-grunge', 'rock-hard', 'metal-heavy'],
    era: '90s',
    styleKeywords: ['sludgy drop-D riffs', '4-octave vocal range', 'unusual time signatures', 'psychedelic metal'],
    musicalDirectives: 'Use heavy down-tuned sludgy guitar chords, odd time meters (like 7/4 or 5/4), and awe-inspiring multi-octave vocal belting and screams.'
  },
  {
    id: 'alice-in-chains',
    name: 'Alice in Chains',
    type: 'band',
    genreIds: ['alt', 'alt-grunge', 'metal-heavy', 'rock-hard'],
    era: '90s',
    styleKeywords: ['haunting minor-key vocal harmonies', 'heavy sludgy guitar riffs', 'brooding dark atmosphere', 'acoustic-grunge blend'],
    musicalDirectives: 'Focus on eerie two-part vocal harmonies in minor seconds, heavy bending guitar riffs, dark melancholic themes, and intimate acoustic textures.'
  },
  {
    id: 'smashing-pumpkins',
    name: 'Smashing Pumpkins',
    type: 'band',
    genreIds: ['alt', 'alt-grunge', 'rock-prog', 'pop-art'],
    era: '90s',
    styleKeywords: ['fuzz guitar orchestration', 'nasal whispered-to-screamed vocals', 'sweeping strings', 'gothic dream-pop'],
    musicalDirectives: 'Layer dozens of fuzzy Big Muff distorted guitars, delicate orchestral string sections, dynamic drum rolls, and dramatic nasal vocal delivery.'
  },
  {
    id: 'green-day',
    name: 'Green Day',
    type: 'band',
    genreIds: ['alt', 'alt-punk', 'rock', 'pop'],
    era: '90s / 00s',
    styleKeywords: ['three-chord punk crunch', 'driving bass walking lines', 'snare crack drumming', 'melodic pop-punk anthem'],
    musicalDirectives: 'Deliver fast crunchy power-chord guitar rhythms, busy melodic basslines, razor-sharp snare drumming, and infectious snotty-pop-punk vocal hooks.'
  },
  {
    id: 'blink-182',
    name: 'Blink-182',
    type: 'band',
    genreIds: ['alt', 'alt-punk', 'pop'],
    era: '90s / 00s',
    styleKeywords: ['fast octave guitar riffs', 'frenetic drum fills', 'dual nasal vocal trade-offs', 'youthful angst'],
    musicalDirectives: 'Feature fast clean octave guitar leads, hyperactive marching drum fills, dual nasal vocal trade-offs, and catchy chorus hooks.'
  },
  {
    id: 'the-offspring',
    name: 'The Offspring',
    type: 'band',
    genreIds: ['alt', 'alt-punk', 'rock'],
    era: '90s / 00s',
    styleKeywords: ['middle-eastern scale guitar riff', 'high-pitched vocal chants', 'fast ska-punk tempo', 'satirical lyrics'],
    musicalDirectives: 'Incorporate rapid skate-punk drum tempos, phrygian/middle-eastern guitar riff accents, gang vocal "whoa-oh" chants, and satirical storytelling.'
  },
  {
    id: 'muse',
    name: 'Muse',
    type: 'band',
    genreIds: ['rock', 'rock-prog', 'alt-indie', 'electronic-synthwave', 'classic-cinematic'],
    era: '00s / 10s',
    styleKeywords: ['fuzz bass synth', 'classical piano arpeggios', 'soaring falsetto drama', 'dystopian sci-fi rock'],
    musicalDirectives: 'Combine heavy distorted synth bass, fast Rachmaninoff-style piano arpeggios, dramatic operatic falsetto, and epic dystopian orchestral crescendos.'
  },
  {
    id: 'coldplay',
    name: 'Coldplay',
    type: 'band',
    genreIds: ['pop', 'pop-classic', 'alt-indie', 'rock-soft'],
    era: '00s / 10s',
    styleKeywords: ['soaring falsetto piano ballad', 'chiming guitar delay', 'stadium singalong hooks', 'euphoric builds'],
    musicalDirectives: 'Build emotional piano-driven melodies, atmospheric chiming guitar hooks, gentle vocal falsetto transitions, and massive euphoric stadium chorus singalongs.'
  },
  {
    id: 'florence-and-the-machine',
    name: 'Florence + The Machine',
    type: 'band',
    genreIds: ['alt', 'alt-indie', 'pop-art', 'folk', 'classic-cinematic'],
    era: '10s / 20s',
    styleKeywords: ['thunderous orchestral harp', 'vocal siren belt', 'gothic tribal drums', 'mythological lyricism'],
    musicalDirectives: 'Combine cascading harp flourishes, heavy tribal drum grooves, dramatic string orchestration, and raw, soaring siren-like vocal belting.'
  },
  {
    id: 'lana-del-rey',
    name: 'Lana Del Rey',
    type: 'solo',
    genreIds: ['pop', 'pop-art', 'electronic-triphop', 'classic-cinematic'],
    era: '10s / 20s',
    styleKeywords: ['cinematic noir strings', 'lazy hip-hop trip-hop beat', 'breathy sultry vocal', 'vintage hollywood nostalgia'],
    musicalDirectives: 'Use slow cinematic string arrangements, subtle trip-hop drum beats, breathy melancholic vocal delivery, and romantic vintage Americana themes.'
  },
  {
    id: 'billie-eilish',
    name: 'Billie Eilish',
    type: 'solo',
    genreIds: ['pop', 'pop-art', 'electronic-ambient'],
    era: '10s / 20s',
    styleKeywords: ['whispered intimate vocal', 'sub-bass thumps', 'minimalist dark pop', 'layered vocal harmony stack'],
    musicalDirectives: 'Emphasize ultra-close whispered vocal recordings, heavy sub-bass pulses, eerie minimalist synth textures, and multi-tracked vocal harmony stacks.'
  },
  {
    id: 'lorde',
    name: 'Lorde',
    type: 'solo',
    genreIds: ['pop', 'pop-art', 'electronic'],
    era: '10s / 20s',
    styleKeywords: ['minimalist vocal-driven pop', 'snappy drum snaps', 'layered choir pads', 'perceptive youth lyrics'],
    musicalDirectives: 'Rely on sparse minimalist arrangements, deep sub-bass drops, tight vocal choir harmonies created solely from her own voice, and conversational lyrics.'
  },
  {
    id: 'dua-lipa',
    name: 'Dua Lipa',
    type: 'solo',
    genreIds: ['pop', 'pop-dance', 'rnb-funk'],
    era: '10s / 20s',
    styleKeywords: ['nu-disco bassline', 'punchy studio brass', 'smoky alto vocal', 'relentless dance groove'],
    musicalDirectives: 'Feature prominent slap/fingerpicked disco basslines, punchy brass section stabs, smoky alto lead vocal, and energetic four-on-the-floor house beats.'
  },
  {
    id: 'the-weeknd',
    name: 'The Weeknd',
    type: 'solo',
    genreIds: ['pop', 'pop-synth', 'rnb-modern', 'electronic-synthwave'],
    era: '10s / 20s',
    styleKeywords: ['dark synthwave', '80s analog synth bass', 'MJ-inspired falsetto', 'cinematic nocturnal pop'],
    musicalDirectives: 'Build dark 80s synthwave basslines, crisp electronic drum machine beats, soaring Michael Jackson-inspired falsetto, and nocturnal lyrical atmosphere.'
  },
  {
    id: 'bruno-mars',
    name: 'Bruno Mars',
    type: 'solo',
    genreIds: ['pop', 'rnb-funk', 'rnb-motown', 'pop-dance'],
    era: '10s / 20s',
    styleKeywords: ['retro funk-pop groove', 'talkbox lead', 'tight brass section', 'virtuoso vocal runs'],
    musicalDirectives: 'Deliver infectious retro 70s/80s funk grooves, tight horn stabs, syncopated rhythm guitar, talkbox accents, and flawless energetic vocal belting.'
  },
  {
    id: 'adele',
    name: 'Adele',
    type: 'solo',
    genreIds: ['pop', 'pop-classic', 'rnb-motown'],
    era: '00s / 10s / 20s',
    styleKeywords: ['soulful piano ballad', 'dramatic vocal belting', 'gospel organ backing', 'heartbreak lyricism'],
    musicalDirectives: 'Anchor the composition on emotional grand piano chords, dramatic vocal belt climaxes, subtle string swells, and deeply personal heartbreak storytelling.'
  },
  {
    id: 'amy-winehouse',
    name: 'Amy Winehouse',
    type: 'solo',
    genreIds: ['rnb', 'rnb-motown', 'jazz-vocal'],
    era: '00s',
    styleKeywords: ['60s girl-group motown', 'deep brass baritone sax', 'smoky jazz vocal phrasing', 'raw honest lyrics'],
    musicalDirectives: 'Recreate retro 60s Motown soul with deep baritone sax stabs, rimshot snare beats, smoky jazz-inflected vocal phrasing, and candid autobiographical text.'
  },
  {
    id: 'sade',
    name: 'Sade',
    type: 'solo',
    genreIds: ['rnb', 'rnb-modern', 'jazz-fusion', 'electronic-triphop'],
    era: '80s / 90s / 00s',
    styleKeywords: ['smooth quiet storm jazz', 'subtle bass groove', 'smoky warm vocals', 'sophisticated chill'],
    musicalDirectives: 'Craft ultra-smooth quiet storm grooves with warm basslines, subtle rimshot drumming, soft saxophone and Spanish guitar solos, and soothing smoky vocals.'
  },
  {
    id: 'marvin-gaye',
    name: 'Marvin Gaye',
    type: 'solo',
    genreIds: ['rnb', 'rnb-motown', 'rnb-funk'],
    era: '60s / 70s',
    styleKeywords: ['silky multi-track vocals', 'conga percussion groove', 'lush orchestral soul', 'socially conscious lyrics'],
    musicalDirectives: 'Layer silky multi-tracked lead and background vocals over gentle conga percussion grooves, warm electric piano, and socially conscious or sensual lyrics.'
  },
  {
    id: 'earth-wind-fire',
    name: 'Earth, Wind & Fire',
    type: 'band',
    genreIds: ['rnb', 'rnb-funk', 'rnb-motown', 'pop-dance'],
    era: '70s',
    styleKeywords: ['blazing horn section', 'falsetto & tenor dual vocals', 'kalimba thumb piano', 'uplifting funk disco'],
    musicalDirectives: 'Feature explosive brass horn fanfares, dual falsetto and tenor vocal interplay, kalimba thumb-piano accents, and joyful, driving funk-disco grooves.'
  },
  {
    id: 'bee-gees',
    name: 'Bee Gees',
    type: 'band',
    genreIds: ['pop', 'pop-dance', 'rnb-funk', 'pop-classic'],
    era: '60s / 70s',
    styleKeywords: ['three-part falsetto harmony', 'disco pulse beat', 'rhythmic guitar strum', 'dramatic pop strings'],
    musicalDirectives: 'Build tight three-part falsetto vocal harmonies, steady driving disco drum beats, rhythmic guitar strumming, and lush dramatic string arrangements.'
  },
  {
    id: 'boney-m',
    name: 'Boney M.',
    type: 'band',
    genreIds: ['pop', 'pop-europop', 'pop-dance', 'rnb-funk'],
    era: '70s',
    styleKeywords: ['euro-disco beat', 'deep narrator bass voice', 'catchy chorus chant', 'reggae-disco rhythm'],
    musicalDirectives: 'Combine four-on-the-floor euro-disco beats, deep narrator spoken/sung bass vocal, female chorus backing chants, and infectious historical song stories.'
  },
  {
    id: 'modern-talking',
    name: 'Modern Talking',
    type: 'band',
    genreIds: ['pop', 'pop-europop', 'pop-synth'],
    era: '80s',
    styleKeywords: ['high falsetto europop chorus', 'synth bass sequence', 'romantic disco beat', 'nostalgic synth leads'],
    musicalDirectives: 'Feature bright synth bass sequences, romantic mid-tempo euro-disco beats, and distinctive high falsetto unison choruses over soft lead verses.'
  },
  {
    id: 'pet-shop-boys',
    name: 'Pet Shop Boys',
    type: 'band',
    genreIds: ['pop', 'pop-synth', 'pop-dance', 'alt-newwave'],
    era: '80s / 90s',
    styleKeywords: ['deadpan spoken-sung vocal', 'orchestral synth stabs', 'literary dance-pop', 'pulsing electro'],
    musicalDirectives: 'Pair sophisticated deadpan spoken/sung lead vocals with dramatic orchestral synth stabs, pulsing electro basslines, and witty social observation.'
  },
  {
    id: 'erasure',
    name: 'Erasure',
    type: 'band',
    genreIds: ['pop', 'pop-synth', 'pop-dance'],
    era: '80s / 90s',
    styleKeywords: ['analog synth brass hooks', 'expressive operatic pop vocals', 'upbeat synthpop', 'joyful melody'],
    musicalDirectives: 'Combine bouncy analog synth basslines and brass sequences with soaring, emotive operatic pop vocals and uplifting melodic choruses.'
  },
  {
    id: 'eurythmics',
    name: 'Eurythmics',
    type: 'band',
    genreIds: ['pop', 'pop-synth', 'alt-newwave', 'rock-soft'],
    era: '80s',
    styleKeywords: ['soulful contralto lead', 'stark synth sequences', 'bluesy guitar accents', 'striking synthpop'],
    musicalDirectives: 'Contrast stark electronic synthesizer sequencers with deep, soulful contralto vocal belting and sharp bluesy guitar stabs.'
  },
  {
    id: 'simply-red',
    name: 'Simply Red',
    type: 'band',
    genreIds: ['pop', 'pop-classic', 'rnb-motown', 'jazz-vocal'],
    era: '80s / 90s',
    styleKeywords: ['blue-eyed soul vocals', 'gentle funk rhythm', 'mellow sax solos', 'romantic soul pop'],
    musicalDirectives: 'Deliver smooth blue-eyed soul lead vocals, warm bass and drum grooves, delicate keyboard pads, and romantic sax interludes.'
  },
  {
    id: 'seal',
    name: 'Seal',
    type: 'solo',
    genreIds: ['pop', 'pop-classic', 'rnb-modern', 'electronic-ambient'],
    era: '90s',
    styleKeywords: ['raspy soulful tenor', 'lush orchestral synth production', 'expansive pop build', 'spiritual themes'],
    musicalDirectives: 'Combine deeply emotive raspy tenor vocal delivery with expansive Trevor Horn-style orchestral synth production and spiritual lyricism.'
  },
  {
    id: 'george-harrison',
    name: 'George Harrison',
    type: 'solo',
    genreIds: ['rock', 'rock-folk', 'folk-trad', 'pop-classic'],
    era: '70s',
    styleKeywords: ['slide guitar melody', 'eastern sitar influence', 'spiritual lyrics', 'warm acoustic strum'],
    musicalDirectives: 'Incorporate distinctive singing slide guitar leads, warm acoustic rhythm strumming, subtle sitar or eastern melodic phrasing, and devotional text.'
  },
  {
    id: 'paul-mccartney',
    name: 'Paul McCartney',
    type: 'solo',
    genreIds: ['pop', 'pop-classic', 'rock-soft', 'rock-classic'],
    era: '70s / 80s',
    styleKeywords: ['melodic basslines', 'infectious pop hooks', 'acoustic balladeering', 'whimsical arrangements'],
    musicalDirectives: 'Lead with highly melodic counterpoint basslines, effortless pop vocal hooks, whimsical acoustic arrangements, and optimistic storytelling.'
  },
  {
    id: 'john-lennon',
    name: 'John Lennon',
    type: 'solo',
    genreIds: ['rock', 'rock-classic', 'pop-classic', 'folk-trad'],
    era: '70s',
    styleKeywords: ['raw emotional vocal honesty', 'stark piano strum', 'peace manifesto lyrics', 'slapback tape echo'],
    musicalDirectives: 'Focus on stark unadorned piano or acoustic guitar, slapback echo on passionate vocals, and raw, deeply honest social or personal lyrics.'
  },
  {
    id: 'simon-and-garfunkel',
    name: 'Simon & Garfunkel',
    type: 'band',
    genreIds: ['folk', 'folk-trad', 'rock-folk', 'pop-classic'],
    era: '60s',
    styleKeywords: ['pristine duo vocal harmony', 'intricate fingerstyle acoustic', 'poetic urban lyrics', 'gentle folk pace'],
    musicalDirectives: 'Build immaculate two-part vocal harmonies, intricate acoustic fingerpicking, poetic literary observations of city life, and delicate song dynamics.'
  },
  {
    id: 'neil-young',
    name: 'Neil Young',
    type: 'solo',
    genreIds: ['folk', 'folk-trad', 'rock-folk', 'rock', 'alt-grunge'],
    era: '70s / 90s',
    styleKeywords: ['fuzzy feedback guitar solos', 'vulnerable falsetto tenor', 'harmonica folk strum', 'raw rustic energy'],
    musicalDirectives: 'Alternate between fragile acoustic fingerpicking with harmonica, and explosive, ragged fuzz-guitar solos with high vulnerable vocal phrasing.'
  },
  {
    id: 'joni-mitchell',
    name: 'Joni Mitchell',
    type: 'solo',
    genreIds: ['folk', 'folk-trad', 'jazz-vocal', 'pop-art'],
    era: '70s',
    styleKeywords: ['alternate guitar tunings', 'poetic stream-of-consciousness', 'jazz-inflected vocal leaps', 'painterly lyrics'],
    musicalDirectives: 'Use unique alternate acoustic guitar tunings, wide vocal pitch leaps, jazz-influenced bass counterpoint, and rich poetic imagery.'
  },
  {
    id: 'crosby-stills-nash-young',
    name: 'Crosby, Stills, Nash & Young',
    type: 'band',
    genreIds: ['folk', 'folk-trad', 'rock-folk', 'rock-classic'],
    era: '70s',
    styleKeywords: ['four-part acoustic harmony', 'dual electric guitar duels', 'counterculture lyrics', 'lush folk rock'],
    musicalDirectives: 'Construct lush four-part vocal harmonies over acoustic guitar textures, shifting into fiery dual electric guitar solos and political commentary.'
  },
  {
    id: 'the-beach-boys',
    name: 'The Beach Boys',
    type: 'band',
    genreIds: ['pop', 'pop-classic', 'pop-art', 'rock-classic'],
    era: '60s',
    styleKeywords: ['symphonic vocal harmonies', 'unusual orchestral instrumentation', 'surf pop groove', 'complex key modulation'],
    musicalDirectives: 'Feature intricate multi-layered vocal counterpoint, electro-theremin and french horn stabs, inventive chord progressions, and nostalgic summer themes.'
  },
  {
    id: 'the-doors',
    name: 'The Doors',
    type: 'band',
    genreIds: ['rock', 'rock-classic', 'rock-prog', 'jazz-blues'],
    era: '60s',
    styleKeywords: ['baritone poetic croon', 'Vox Continental organ', 'bassless keyboard grooves', 'psychedelic blues'],
    musicalDirectives: 'Combine swirling Vox Continental organ riffs, hypnotic keyboard basslines, flamenco-blues guitar accents, and dramatic, dark poetic spoken-sung vocals.'
  },
  {
    id: 'jimi-hendrix',
    name: 'Jimi Hendrix',
    type: 'solo',
    genreIds: ['rock', 'rock-classic', 'jazz-blues', 'rock-hard'],
    era: '60s',
    styleKeywords: ['wah-wah guitar virtuosity', 'psychedelic feedback', 'rhythmic thumb-bass guitar chording', 'fluid blues-rock'],
    musicalDirectives: 'Employ expressive wah-wah guitar leads, double-stop chordal embellishments, controlled feedback textures, and fluid, soulful rock singing.'
  },
  {
    id: 'eric-clapton',
    name: 'Eric Clapton',
    type: 'solo',
    genreIds: ['rock', 'rock-classic', 'jazz-blues', 'rock-soft'],
    era: '70s / 90s',
    styleKeywords: ['woman tone guitar lead', 'laid-back blues shuffle', 'expressive vocal delivery', 'unplugged acoustic guitar'],
    musicalDirectives: 'Deliver warm "woman tone" guitar solos, relaxed blues-rock shuffle grooves, soulful singing, and intricate fingerstyle acoustic blues.'
  },
  {
    id: 'santana',
    name: 'Santana',
    type: 'band',
    genreIds: ['rock', 'rock-classic', 'world-latin', 'jazz-fusion'],
    era: '70s / 90s',
    styleKeywords: ['sustain guitar leads', 'conga & timbales Latin percussion', 'organ montuno', 'latin-rock fusion'],
    musicalDirectives: 'Build fiery sustained electric guitar leads over driving Latin percussion (congas, timbales), organ montuno chords, and infectious rhythm grooves.'
  },
  {
    id: 'stevie-ray-vaughan',
    name: 'Stevie Ray Vaughan',
    type: 'solo',
    genreIds: ['jazz', 'jazz-blues', 'rock-classic', 'rock-hard'],
    era: '80s',
    styleKeywords: ['heavy gauge Stratocaster tone', 'explosive Texas blues shuffle', 'furious pentatonic runs', 'raw vocals'],
    musicalDirectives: 'Drive furious Texas blues guitar shuffles, heavy tone string bending, fast pentatonic solo runs, and gritty, passionate vocals.'
  },
  {
    id: 'bb-king',
    name: 'B.B. King',
    type: 'solo',
    genreIds: ['jazz', 'jazz-blues', 'rnb-motown'],
    era: '50s - 90s',
    styleKeywords: ['vibrato single-note guitar', 'call-and-response vocals', 'brass big band backing', 'authentic blues'],
    musicalDirectives: 'Master call-and-response between warm, expressive vocal phrases and piercing, fluttering single-note electric guitar vibrato backed by horns.'
  },
  {
    id: 'miles-davis',
    name: 'Miles Davis',
    type: 'solo',
    genreIds: ['jazz', 'jazz-fusion', 'jazz-vocal'],
    era: '50s - 80s',
    styleKeywords: ['Harmon mute trumpet', 'modal jazz space', 'electric jazz fusion funk', 'cool detached tone'],
    musicalDirectives: 'Use sparse, whispering Harmon-muted trumpet phrasing, open modal space, hypnotic bass grooves, and sophisticated, spacious arrangements.'
  },
  {
    id: 'john-coltrane',
    name: 'John Coltrane',
    type: 'solo',
    genreIds: ['jazz', 'jazz-fusion'],
    era: '50s / 60s',
    styleKeywords: ['sheets of sound saxophone', 'complex harmonic changes', 'spiritual jazz intensity', 'modal improvisations'],
    musicalDirectives: 'Incorporate rapid cascade tenor saxophone runs, intense spiritual modal improvisations, dynamic drum polyrhythms, and complex chord substitutions.'
  },
  {
    id: 'nina-simone',
    name: 'Nina Simone',
    type: 'solo',
    genreIds: ['jazz', 'jazz-vocal', 'rnb-motown', 'folk-trad'],
    era: '50s - 70s',
    styleKeywords: ['classical piano counterpoint', 'deep commanding contralto', 'civil rights anthem', 'raw intensity'],
    musicalDirectives: 'Anchor on Bach-inspired classical piano fugues and counterpoint, dramatic tempo shifts, deep commanding vocal intensity, and impassioned lyrics.'
  },
  {
    id: 'ella-fitzgerald',
    name: 'Ella Fitzgerald',
    type: 'solo',
    genreIds: ['jazz', 'jazz-vocal', 'pop-classic'],
    era: '40s - 60s',
    styleKeywords: ['virtuoso scat singing', 'horn-like vocal agility', 'big band swing', 'flawless intonation'],
    musicalDirectives: 'Feature acrobatic scat vocal improvisations mimicking brass instruments, swinging big band orchestrations, and crystal-clear melodic phrasing.'
  },
  {
    id: 'louis-armstrong',
    name: 'Louis Armstrong',
    type: 'solo',
    genreIds: ['jazz', 'jazz-vocal', 'pop-classic'],
    era: '30s - 60s',
    styleKeywords: ['gravelly joyful voice', 'bright trumpet solos', 'dixieland swing', 'warm timeless charm'],
    musicalDirectives: 'Combine bright, soaring trumpet lead fanfares with deep gravelly, joyful vocal phrasing and upbeat Dixieland swing brass rhythms.'
  },
  {
    id: 'nightwish',
    name: 'Nightwish',
    type: 'band',
    genreIds: ['metal', 'metal-symphonic', 'metal-thrash', 'classic-cinematic'],
    era: '90s / 00s / 10s',
    styleKeywords: ['operatic soprano lead', 'full film-score orchestra', 'heavy guitar riffs', 'fantasy epic themes'],
    musicalDirectives: 'Fuse full cinematic film-score orchestrations and choral risers with heavy distorted guitar metal riffs and dramatic operatic soprano vocal leads.'
  },
  {
    id: 'within-temptation',
    name: 'Within Temptation',
    type: 'band',
    genreIds: ['metal', 'metal-symphonic', 'rock-hard', 'pop-art'],
    era: '00s / 10s',
    styleKeywords: ['soaring high soprano', 'gothic symphonic metal', 'dramatic string orchestrations', 'catchy metal hooks'],
    musicalDirectives: 'Combine soaring high-register soprano vocals, dramatic string section crescendos, punchy heavy guitar rhythm walls, and anthemic hooks.'
  },
  {
    id: 'epica',
    name: 'Epica',
    type: 'band',
    genreIds: ['metal', 'metal-symphonic', 'classic-opera', 'metal-heavy'],
    era: '00s / 10s',
    styleKeywords: ['classical mezzo-soprano', 'death metal growls duo', 'film score choir', 'philosophical lyrics'],
    musicalDirectives: 'Alternate between delicate classical mezzo-soprano vocals and harsh growls, backed by massive choir stabs, double-bass drumming, and orchestral brass.'
  },
  {
    id: 'evanescence',
    name: 'Evanescence',
    type: 'band',
    genreIds: ['rock', 'rock-hard', 'metal-symphonic', 'alt-grunge'],
    era: '00s',
    styleKeywords: ['gothic piano intro', 'soaring belt vocals', 'heavy alternative metal riffs', 'dramatic string swells'],
    musicalDirectives: 'Start with eerie classical piano arpeggios, building into explosive heavy down-tuned guitar riffs and dramatic, soaring female belt vocals.'
  },
  {
    id: 'system-of-a-down',
    name: 'System of a Down',
    type: 'band',
    genreIds: ['metal', 'metal-heavy', 'alt-punk', 'world'],
    era: '00s',
    styleKeywords: ['frenetic tempo switches', 'operatic armenian folk metal', 'dual vocal trade-offs', 'satirical political lyrics'],
    musicalDirectives: 'Execute abrupt, chaotic tempo shifts between frantic polka/folk rhythms and crushing heavy metal riffs, accompanied by theatrical vocal trade-offs.'
  },
  {
    id: 'slipknot',
    name: 'Slipknot',
    type: 'band',
    genreIds: ['metal', 'metal-heavy', 'metal-thrash'],
    era: '00s',
    styleKeywords: ['tribal percussion assault', 'down-tuned chaotic riffs', 'screamed-to-melodic vocals', 'dark aggression'],
    musicalDirectives: 'Deploy extra industrial/tribal percussion layers, down-tuned aggressive guitar chaos, turntablism samples, and intense screamed-to-sung vocal transitions.'
  },
  {
    id: 'rammstein',
    name: 'Rammstein',
    type: 'band',
    genreIds: ['metal', 'metal-heavy', 'electronic-synthwave', 'rock-hard'],
    era: '90s / 00s / 10s',
    styleKeywords: ['neue deutsche harte', 'marching industrial beat', 'deep german baritone', 'crushing guitar wall'],
    musicalDirectives: 'Rely on precise robotic industrial drum beats, crushing down-tuned guitar power chords, dark synth sequencers, and deep, rolling baritone German vocal delivery.'
  },
  {
    id: 'megadeth',
    name: 'Megadeth',
    type: 'band',
    genreIds: ['metal', 'metal-thrash', 'metal-heavy'],
    era: '80s / 90s',
    styleKeywords: ['technical thrash metal', 'furious dual solos', 'snarling vocals', 'political apocalypse'],
    musicalDirectives: 'Feature intricate, high-speed technical thrash guitar riffing, blistering dual guitar solos, snarling vocal delivery, and anti-war political themes.'
  },
  {
    id: 'slayer',
    name: 'Slayer',
    type: 'band',
    genreIds: ['metal', 'metal-thrash'],
    era: '80s / 90s',
    styleKeywords: ['relentless double-kick drumming', 'chromatic thrash speed', 'whammy bar noise solos', 'aggressive shouting'],
    musicalDirectives: 'Unleash ultra-fast 200+ BPM double-bass drum beats, sinister chromatic guitar speed riffs, wild tremolo arm solos, and aggressive shouted lyrics.'
  },
  {
    id: 'pantera',
    name: 'Pantera',
    type: 'band',
    genreIds: ['metal', 'metal-heavy', 'metal-thrash', 'rock-hard'],
    era: '90s',
    styleKeywords: ['groove metal power', 'squealing guitar pinch harmonics', 'thunderous rhythm section', 'hostile bark vocal'],
    musicalDirectives: 'Deliver syncopated mid-tempo heavy metal grooves, razor-sharp guitar pinch harmonics, pounding bass, and fierce, barking vocal power.'
  },
  {
    id: 'helloween',
    name: 'Helloween',
    type: 'band',
    genreIds: ['metal', 'metal-thrash', 'metal-heavy'],
    era: '80s / 90s',
    styleKeywords: ['german power metal', 'twin harmony guitar leads', 'high falsetto operatic vocals', 'epic melodic storytelling'],
    musicalDirectives: 'Drive galloping double-bass power metal drum rhythms, twin harmony guitar lead duels, soaring high operatic vocal belting, and whimsical fantasy themes.'
  },
  {
    id: 'blind-guardian',
    name: 'Blind Guardian',
    type: 'band',
    genreIds: ['metal', 'metal-thrash', 'folk-celtic', 'rock-prog'],
    era: '90s / 00s',
    styleKeywords: ['bardic power metal choir', 'tolkien fantasy lyrics', 'complex guitar layering', 'acoustic folk interludes'],
    musicalDirectives: 'Combine massive layered choir vocals (bardic style), fast power metal rhythms, acoustic folk guitar interludes, and epic Tolkien-inspired storytelling.'
  },
  {
    id: 'sabaton',
    name: 'Sabaton',
    type: 'band',
    genreIds: ['metal', 'metal-thrash', 'rock-hard'],
    era: '00s / 10s',
    styleKeywords: ['historical military metal', 'synth keyboard brass intro', 'gravelly baritone chants', 'marching beats'],
    musicalDirectives: 'Feature martial marching drum rhythms, triumphant brass synth hooks, gravelly baritone vocal chants, and anthemic historical battle lyrics.'
  },
  {
    id: 'dragonforce',
    name: 'DragonForce',
    type: 'band',
    genreIds: ['metal', 'metal-thrash'],
    era: '00s',
    styleKeywords: ['extreme speed power metal', 'video game synth sounds', 'blistering guitar sweeps', 'high tenor anthems'],
    musicalDirectives: 'Unleash hyper-speed 200+ BPM blast beats, sweeping chiptune synth FX, lightning-fast guitar solos, and triumphant soaring tenor vocal hooks.'
  },
  {
    id: 'avenged-sevenfold',
    name: 'Avenged Sevenfold',
    type: 'band',
    genreIds: ['metal', 'metal-heavy', 'rock-hard', 'rock-prog'],
    era: '00s / 10s',
    styleKeywords: ['dual guitar harmonization', 'raspy nasal lead vocal', 'orchestral metal transitions', 'dynamic drum fills'],
    musicalDirectives: 'Incorporate elaborate dual guitar harmony leads, raspy nasal vocal melodies, sudden acoustic piano/orchestral interludes, and complex drumming.'
  }
];

/**
 * Filter artists by genre node ID or subgenre node ID.
 * Returns all artists if node ID is 'all' or empty.
 */
export function getArtistsByGenre(genreId?: string, searchQuery?: string): InspirationArtist[] {
  let filtered = INSPIRATION_ARTISTS;

  if (genreId && genreId !== 'all') {
    // Check if genreId is a parent genre or subgenre
    filtered = filtered.filter(artist => {
      return artist.genreIds.some(gId => gId === genreId || gId.startsWith(`${genreId}-`));
    });
  }

  if (searchQuery && searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(artist => {
      return (
        artist.name.toLowerCase().includes(q) ||
        artist.styleKeywords.some(kw => kw.toLowerCase().includes(q)) ||
        (artist.era && artist.era.toLowerCase().includes(q))
      );
    });
  }

  return filtered;
}

/**
 * Format selected inspiration artists into prompt directives
 * WITHOUT explicitly inserting artist names inside the actual lyrics!
 */
export function buildInspirationPromptDirective(selectedArtistIds: string[]): string {
  if (!selectedArtistIds || selectedArtistIds.length === 0) return '';

  const selectedArtists = INSPIRATION_ARTISTS.filter(a => selectedArtistIds.includes(a.id));
  if (selectedArtists.length === 0) return '';

  const styleDirectives = selectedArtists.map(a => `- **${a.name}** (${a.type}${a.era ? `, ${a.era}` : ''}): ${a.musicalDirectives} (Style Keywords: ${a.styleKeywords.join(', ')})`).join('\n');

  return `=== ARTIST & BAND STYLE INSPIRATION ===
Incorporate the musical style, vocal energy, arrangement dynamics, and aesthetic nuances of the following artists and bands into the song composition:
${styleDirectives}

CRITICAL MANDATE: Use these artist and band styles strictly as musical, vocal, and stylistic aesthetic directives for the songwriting. The generated lyrics and song title MUST NOT mention or contain any artist or band names inside the song text, brackets, or title!`;
}
