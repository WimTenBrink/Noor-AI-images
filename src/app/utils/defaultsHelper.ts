import { AppDefaults } from '../../types';

export const RELIGION_DETAILS: Record<AppDefaults['religion'], { deities: string; symbols: string; description: string }> = {
  'Norse': {
    deities: 'Thor, Odin, Freya, and Frigg',
    symbols: 'Mjölnir (Thor’s hammer), Valknut, and runic carvings',
    description: 'Norse Paganism, honoring the Aesir and Vanir with rich runic references, Yggdrasil, and sagas.'
  },
  'Greek': {
    deities: 'Zeus, Athena, Apollo, Artemis, and Aphrodite',
    symbols: 'laurel wreaths, Hellenic tripods, and classical marble altars',
    description: 'Greek Mythology, incorporating Olympian gods, Hellenic altars, sacred fires, and classical mythic symbols.'
  },
  'Roman': {
    deities: 'Jupiter, Minerva, Mars, Diana, and Venus',
    symbols: 'fasces, eagle motifs, Roman lares (household shrines), and Latin inscriptions',
    description: 'Roman Pantheon, celebrating classic Roman deities, civic/imperial virtues, and sacred fire rites of Vesta.'
  },
  'Celtic': {
    deities: 'Cernunnos, Brigid, Lugh, and the Morrigan',
    symbols: 'triskelions, sacred oak groves, and mistletoe',
    description: 'Celtic Paganism, embracing Druidic lore, green nature spirits, and tribal tuaths.'
  },
  'Native-American': {
    deities: 'the Great Spirit (Wakan Tanka / Gitchi Manitou), Grandmother Spider, Coyote, and the Thunderbirds',
    symbols: 'dreamcatchers, sacred medicine wheels, and eagle feathers',
    description: 'Native-American Lore, referencing elemental spirits, deep ancestral respect, and the sacred balance of all living things.'
  },
  'Mesopotamian': {
    deities: 'Inanna (Ishtar), Enlil, Marduk, Enki, and Shamash',
    symbols: 'eight-pointed star of Ishtar, clay cuneiform tablets, and stepped ziggurats',
    description: 'Ancient Mesopotamian / Sumerian-Babylonian Religion, invoking primordial waters, cosmic order, and high ziggurat towers.'
  },
  'Egyptian': {
    deities: 'Ra, Osiris, Isis, Anubis, and Horus',
    symbols: 'the Ankh, the Eye of Horus, and carved stone obelisks',
    description: 'Ancient Egyptian Religion, focusing on the solar cycle, sacred Nile floods, weighing of the heart, and eternal afterlife journeys.'
  },
  'Canaanite': {
    deities: 'El (the creator patriarch), Asherah (the sea mother goddess), Baal (lord of storm and rain), and Anat (fierce goddess of war)',
    symbols: 'Asherah poles, stone pillars (massebot), and bronze bull figurines',
    description: 'Ancient Canaanite / West Semitic Polytheism (the ancient pre-Judaism religions of the Levant), incorporating Bronze Age altars and high-place shrines.'
  },
  'Phoenician': {
    deities: 'Melqart, Astarte, Tanit, and Baal Hammon',
    symbols: 'the Sign of Tanit, crescent moons, and maritime seafaring votive altars',
    description: 'Phoenician Polytheism, evoking trade-route sanctuaries, Mediterranean storms, and sacred cedar groves.'
  },
  'Vedic': {
    deities: 'Indra (lord of thunder), Agni (god of fire), Soma (divine nectar), and Varuna (guardian of cosmic law)',
    symbols: 'fire altars (yajnas), sacred grass (darbha), and Sanskrit mantras',
    description: 'Vedic Polytheism / Early Indo-Aryan Religion, utilizing sacred soma rituals, fire sacrifices, and cosmic order (Rta) hymns.'
  },
  'Slavic': {
    deities: 'Perun (god of thunder), Veles (god of the underworld and cattle), and Lada (goddess of beauty and love)',
    symbols: 'carved wooden totems, sacred oak trees, and the Kolovrat solar symbol',
    description: 'Slavic Paganism, emphasizing the eternal conflict between celestial light and deep earth/water spirits.'
  },
  'Baltic': {
    deities: 'Perkūnas (god of thunder), Laima (goddess of fate), and Dievas (sky father)',
    symbols: 'sun crosses, sacred amber stones, and decorative linen symbols',
    description: 'Baltic Paganism (Romuva/Dievturība), honoring sacred fires (aukuras) and deep forest oak sanctuaries.'
  },
  'Shinto': {
    deities: 'Amaterasu (sun goddess), Susanoo (storm god), and Inari (rice and fox deity)',
    symbols: 'Torii gates, shimenawa ropes, and polished bronze mirrors',
    description: 'Traditional Shinto / Kami-no-Michi, honoring kami (nature spirits), absolute purification, and sacred shrine gardens.'
  },
  'Aztec': {
    deities: 'Huitzilopochtli (sun/war god), Quetzalcoatl (feathered serpent), and Tezcatlipoca (smoking mirror)',
    symbols: 'jaguar skins, obsidian mirrors, and carved stone calendar wheels',
    description: 'Aztec Polytheism (Nahua Religion), honoring the dual nature of creation and destruction, solar cycles, and sacred blood essence.'
  },
  'Mayan': {
    deities: 'Itzamna (sky god), Kukulkan (feathered serpent), and Chaac (rain god)',
    symbols: 'jade beads, ceiba trees (axis mundi), and glyph-carved stelae',
    description: 'Mayan Mythology, tracing the sacred Maize cycles, celestial movements, and deep limestone cenote underworld entries.'
  },
  'Yoruba': {
    deities: 'Olorun (supreme sky source), Obatala (creator of human forms), Shango (lord of thunder), and Oshun (goddess of rivers and love)',
    symbols: 'beaded cowrie shells, sacred palm nuts, and river stones',
    description: 'Yoruba Traditional Religion (Isese), invoking the Orishas (personified natural forces) through rhythmic drumming and ancestral wisdom.'
  },
  'Polynesian': {
    deities: 'Kane (creator god), Ku (god of war and strength), Lono (god of agriculture and peace), and Pele (goddess of volcanoes and fire)',
    symbols: 'carved wooden tikis, volcanic obsidian, and sacred ti leaves',
    description: 'Polynesian / Hawaiian Mythology, honoring the dual mana (spiritual power) and tapu (sacred laws) of the ocean and volcanic fire.'
  },
  'Finnish': {
    deities: 'Ukko (sky/thunder god), Akka (earth mother), and Tapio (forest king)',
    symbols: 'bear-claw amulets, sacred kantele instruments, and wooden forest altars',
    description: 'Finnish Paganism (Suomenusko), honoring the sacred Bear spirit, forest kings, and the world-egg creation myth.'
  },
  'Etruscan': {
    deities: 'Tinia (sky lord), Uni (queen of heaven), and Cel (earth goddess)',
    symbols: 'bronze liver templates (haruspicy), terracotta altars, and circular mirrors',
    description: 'Etruscan Religion, prioritizing the study of lightning bolts, celestial sky grids, and bronze divination models.'
  },
  'Minoan': {
    deities: 'the Potnia (Snake Goddess), the Master of Animals, and the Earth Mother',
    symbols: 'double-headed axes (labrys), consecrated bull horns, and frescoed shrines',
    description: 'Ancient Minoan Polytheism, celebrating maternal earth energy, bull-leaping rituals, and ecstatic snake dances.'
  },
  'Hurrian': {
    deities: 'Teshub (storm king), Hebat (mother goddess), and Kumarbi (father of gods)',
    symbols: 'carved rock-sanctuary reliefs, winged sun-discs, and stone lions',
    description: 'Ancient Hurrian Religion, evoking Near Eastern stone giants, mountain temples, and cosmic struggles of the gods.'
  },
  'Elamite': {
    deities: 'Kiririsha (great goddess of the south), Inshushinak (lord of Susa and the dead), and Napirisha (great god of the waters)',
    symbols: 'coiled snake bronze altars, brick temple reliefs, and water jugs',
    description: 'Ancient Elamite Religion, honoring primordial snake deities, underworld judges, and mountain shrines of southwestern Iran.'
  },
  'Arabian': {
    deities: 'Hubal (god of the heavens), Al-Lat (earth goddess), Al-Uzza (goddess of power/star), and Manat (goddess of fate)',
    symbols: 'sacred standing stones (baetyls), incense burners, and desert spring altars',
    description: 'Ancient Pre-Islamic Arabian Polytheism, celebrating celestial alignments, sacred oases, tribal protective deities, and desert covenants.'
  },
  'Other-Pagan': {
    deities: 'various local nature spirits, river nymphs, forest guardians, and primordial mother figures',
    symbols: 'unhewn standing stones, hand-tied willow wreaths, and earthen bowls',
    description: 'Other Pagan/Animist traditions, celebrating universal animistic, pantheistic, and eco-centric nature forces.'
  }
};

export function getFilteredBandMusicBase(defaults: AppDefaults): string {
  let base = `You are an expert songwriter for the band "Noor".
The band consists of four female singers:
1. Miranda Noor [Soprano] - Primary lyricist and composer. Plays bass guitar (vintage Fender Jazz Bass). Vocal Specialty: Female Soprano - Ethereal, operatic, High-pitched, High-register, Angelic, Shimmering. (Photo: /singers/Miranda_Noor.jpg, Bio: /singers/Miranda_Noor.md)
2. Annelies Brink [Alto] - Graphic designer, creative, and calm presence. Vocal Specialty: Female Alto - Choral, Alt-Rock, raspy husky tone, Deep, Low-mid focused, Gravelly, Haunting. (Photo: /singers/Annelies_Brink.jpg, Bio: /singers/Annelies_Brink.md)
3. Fannie de Jong [Mezzo-Soprano] - Plays drums and percussion (Tama kit with custom decals). Energetic, witty. Vocal Specialty: Female Mezzo-Soprano - Soulful, wide dramatic vibrato, Controlled, Syncopated, Staccato. (Note: All band members can perform rap and beatboxing.) (Photo: /singers/Fannie_de_Jong.jpg, Bio: /singers/Fannie_de_Jong.md)
4. Emma Vermeer [Feminine Contralto] - Plays keyboard and synthesizers (vintage Roland Juno-106). Confident, mischievous, and perceptive. Vocal Specialty: Female Contralto - Bluesy, resonant chest voice, Off-beat, Velvety, Melancholy. (Photo: /singers/Emma_Vermeer.jpg, Bio: /singers/Emma_Vermeer.md)

**Band Dynamics, Beliefs & Constraints:**`;

  // Sapphic
  if (defaults.sapphic) {
    base += `\n- They behave as a close family unit and write female-centered, sapphic, and lesbian themes.`;
  } else {
    base += `\n- They behave as a close family unit and write general, non-romantic, non-sapphic/lesbian themed songs.`;
  }

  // No men or kids
  if (defaults.noMenOrKids) {
    base += `\n- No interest in men or kids. All lyrics must strictly center female characters and omit male references, pronouns, names, or anatomy.`;
  }

  // Pagan Religion
  if (defaults.pagan) {
    const rel = defaults.religion || 'Norse';
    const detail = RELIGION_DETAILS[rel] || RELIGION_DETAILS['Norse'];
    base += `\n- Pagan Beliefs: The singers hold a strong, active worldview of ${rel} paganism. They do not believe in Christianity, choosing instead to deeply honor the deities, mythologies, and figures of ${rel} (${detail.description}). Specifically, they revere and invoke ${detail.deities}. They are extremely proud Pagans; their home displays a beautiful ${rel} altar adorned with ${detail.symbols}, and they wear sacred amulets and jewelry depicting these ancient deities and symbols.`;
  } else {
    base += `\n- Beliefs: The singers hold a secular or neutral artistic worldview. NO pagan symbols, deity references, or altars are active.`;
  }

  base += `\n\n**Musical Style:**`;
  
  // Musical Style & instruments
  const instList: string[] = [];
  if (defaults.crwth) instList.push('Crwth');
  if (defaults.bagpipes) instList.push('bagpipes');
  if (defaults.steelpanDrums) instList.push('Steelpan Drums');
  if (defaults.didgeridoo) instList.push('Didgeridoo');
  if (defaults.bullroarer) instList.push('Bullroarer');
  if (defaults.boneFlute) instList.push('Bone Flute');
  if (defaults.logDrum) instList.push('Log Drum');
  if (defaults.jawHarp) instList.push('Jaw Harp');
  if (defaults.stoneLithophone) instList.push('Stone Lithophone');
  instList.push('Lyre', 'Aulos', 'Sistrum', 'gongs');

  const instStr = instList.length > 0 ? ` (e.g. ${instList.join(', ')})` : '';
  
  if (defaults.sapphic) {
    base += `\n- Mix of pop, weird or ancient instruments${instStr}, and sapphic/lesbian topics.`;
  } else {
    base += `\n- Mix of pop, weird or ancient instruments${instStr}, and general emotional or natural topics.`;
  }

  // Double entendres
  if (defaults.doubleEntendres) {
    base += `\n- Elegant, layered double or triple entendres carrying subtextual sensual meaning (e.g. pussy, wood, bush, cherry) focused purely on female-centered romance.`;
  } else {
    base += `\n- Standard lyrics WITHOUT any sexual innuendos, double entendres, or suggestive double meanings. Keep all vocabulary direct, natural, and literal.`;
  }
  base += `\n- **Modern Contemporary Lyrics (NO VICTORIAN / CABARET / ARCHAIC DICTION):** Do NOT write lyrics that sound like Victorian cabaret, 19th-century vaudeville, archaic poetry, flowery theatrical melodrama, or cabaret showtunes unless a Victorian, Cabaret, or Historical style is explicitly selected. Always write in an authentic, natural, modern contemporary songwriting voice appropriate to the chosen genres. Avoid archaic contractions, Victorian parlour phrasing, and theatrical cabaret tropes.`;

  // Selected Continents & Major Cultures
  const selectedContinents = [
    defaults.continentAfrica && 'Africa',
    defaults.continentAntarctica && 'Antarctica',
    defaults.continentAsia && 'Asia',
    defaults.continentEurope && 'Europe',
    defaults.continentNorthAmerica && 'North America',
    defaults.continentSouthAmerica && 'South America',
    defaults.continentOceania && 'Oceania',
  ].filter(Boolean);

  const selectedCultures = [
    defaults.cultureEuropean && 'European',
    defaults.cultureIndian && 'Indian / South Asian',
    defaults.cultureAboriginal && 'Aboriginal / Indigenous Australian',
    defaults.cultureNativeAmerican && 'Native American / Indigenous Americas',
    defaults.cultureEastAsian && 'East Asian',
    defaults.cultureMiddleEastern && 'Middle Eastern / Arabic',
    defaults.cultureAfrican && 'African / Sub-Saharan',
    defaults.cultureLatinAmerican && 'Latin American / Hispanic',
    defaults.culturePolynesian && 'Polynesian / Pasifika',
    defaults.cultureCelticNordic && 'Celtic & Nordic',
    defaults.cultureSlavic && 'Slavic & Balkan',
    defaults.cultureCaribbean && 'Caribbean',
  ].filter(Boolean);

  if (selectedContinents.length > 0 || selectedCultures.length > 0) {
    base += `\n- **Cultural & Continental Background:** Enforce musical styling, traditional motifs, instruments, and vocal accents from: ${[...selectedContinents, ...selectedCultures].join(', ')}.`;
  }

  return base + '\n';
}

export function getFilteredPhysicalBase(defaults: AppDefaults, selfReflect: boolean): string {
  const isSelfReflectActive = selfReflect || defaults.selfReflection;
  if (isSelfReflectActive) {
    let baseRules = `**Band Member Physicality & Appearance Rules:**
- All singers look highly youthful, fresh-faced collegiate, student-aged young adult women (appearing late-teens/early-twenties). Never specify numerical ages.
- They are athletic, tone, exceptionally slender, and highly fit young women. No mature/older, heavy, chubby, or overweight depictions.
- They all have flat, athletic slender chests (NEVER mention cups or cup sizes).`;

    if (defaults.barefootNaturism) {
      baseRules += `\n- They prefer to be barefoot everywhere they go, are comfortable with their bodies, and visit naturist resorts.`;
    } else {
      baseRules += `\n- They wear stylish performance shoes/boots and are depicted in classy, fully clothed settings at all times. No barefoot, exposure or naturism elements under any circumstance.`;
    }

    baseRules += `
- Miranda: Mixed Race (Indian, Dutch, American), warm sun-kissed golden-tan skin (never use the word olive), warm hazel eyes, espresso black wavy hair.
- Annelies: Caucasian (Dutch), fair skin, blue almond-shaped eyes, chestnut brown hair.
- Fannie: Caucasian (Dutch), fair skin with freckles, bright blue eyes (wears glasses), sun-kissed blonde hair in a high ponytail.
- Emma: Caucasian (Dutch), porcelain fair skin, light green eyes, reddish-brown hair like autumn waves.`;
    return baseRules + '\n';
  } else {
    return `**Band Member Appearance Rules:**
- Miranda: Mixed Race (Indian, Dutch, American), warm sun-kissed golden-tan skin (never use the word olive), warm hazel eyes, espresso black wavy hair.
- Annelies: Caucasian (Dutch), fair skin, blue almond-shaped eyes, chestnut brown hair.
- Fannie: Caucasian (Dutch), fair skin with freckles, bright blue eyes (wears glasses), sun-kissed blonde hair in a high ponytail.
- Emma: Caucasian (Dutch), porcelain fair skin, light green eyes, reddish-brown hair like autumn waves.\n`;
  }
}

export function getFilteredInterviewBase(defaults: AppDefaults): string {
  if (defaults.barnStudio) {
    return `**LOCATION & ENVIRONMENT (THE BARN STUDIO IN ABCOUDE):**
The interview takes place inside the singers' state-of-the-art sound studio, which is a beautifully converted barn in Abcoude where the four singers actually live. Music journalist Senna Bakker (editor of the "Dutch Noise Chronicles" newspaper) does NOT live here and is visiting them. 
- The studio building is structurally sturdy and sits right next to the stables (which are well-insulated against sound but houses their friendly goats and sheep that you can meet).
- The studio interior is designed with a sleek, warm-white, and very modern aesthetic (avoiding cold metal in favor of warm whites and ambient, inviting lighting).
- The interview room itself features two plush couches, some cozy poofs, and two low coffee tables with fresh copies of Senna's newspaper, "Dutch Noise Chronicles."
- The group is served strong Dutch coffee (with milk and sugar available on the table for visitors) and traditional Dutch **Mokkaschuimgebakje** (a delicate Dutch mocha foam meringue cake with crisp egg-white layers, mocha whipped cream, and toasted hazelnut croquant).
- The walls are decorated with vibrant tour posters and personal photos of the four singers.\n`;
  } else {
    return `**LOCATION & ENVIRONMENT (MODERN RECORDING STUDIO):**
The interview takes place inside a highly professional, modern recording studio in Amsterdam. Music journalist Senna Bakker (editor of the "Dutch Noise Chronicles" newspaper) is visiting them.
- The studio interior is designed with a sleek, minimalist acoustic setup.
- The interview room features comfortable studio chairs, a coffee table with strong Dutch coffee (milk and sugar available) and traditional Dutch **Mokkaschuimgebakje** pastries.
- The conversation focuses on the music-journalism environment.\n`;
  }
}

export function getFilteredLyricsInstructions(defaults: AppDefaults, enabledTabs?: Record<string, boolean>): string {
  const bandBase = getFilteredBandMusicBase(defaults);
  const physicalBase = getFilteredPhysicalBase(defaults, false);
  
  const isBandEnabled = !enabledTabs || enabledTabs.defaults !== false || enabledTabs.band !== false;
  const isCultureEnabled = !enabledTabs || enabledTabs.defaults !== false || enabledTabs.culture !== false;
  const isThemeEnabled = !enabledTabs || enabledTabs.defaults !== false || enabledTabs.theme !== false;
  const isBeliefsEnabled = !enabledTabs || enabledTabs.defaults !== false || enabledTabs.beliefs !== false;
  const isConcertEnabled = !enabledTabs || enabledTabs.defaults !== false || enabledTabs.concertPerformance !== false;
  const isAudienceEnabled = !enabledTabs || enabledTabs.defaults !== false || enabledTabs.audience !== false;
  const isCoreInstEnabled = !enabledTabs || enabledTabs.defaults !== false || enabledTabs.coreInstruments !== false;
  const isLyricalStyleEnabled = !enabledTabs || enabledTabs.defaults !== false || enabledTabs.lyricalStyle !== false;

  let baseInstructions = isBandEnabled ? `${bandBase}\n${physicalBase}` : '';

  // Inject additional custom defaults instructions if enabled
  if (isLyricalStyleEnabled && defaults.passiveAggressive) {
    baseInstructions += `\n- **Passive-Aggressive Style:** Write the lyrics using highly creative passive-aggressive language, dripping with underlying resentment, subtle barbs, and polished, smiling rage.`;
  }
  if (isLyricalStyleEnabled && defaults.rude) {
    baseInstructions += `\n- **Rude/Swearing Style:** The singers should use rude phrasing, sass, and bad language/swearwords. You must strictly respect the active rating: if rating is PG/G, use clean, funny PG-safe substitutes like 'Fork it', 'Ash-hole', 'sugar', 'heck' or 'darn'. If rating is R/NC-17, you may use raw, uncensored swearwords.`;
  }
  if (isLyricalStyleEnabled && defaults.politeness) {
    baseInstructions += `\n- **Polite Phrasing:** The lyrics must exhibit extreme formal politeness, diplomatic phrasing, and graceful declarations, but still allowing some harsh underlying sentiments phrased in polite ways (opposite of rudeness).`;
  }
  if (isLyricalStyleEnabled && defaults.rivalry) {
    baseInstructions += `\n- **Singer Rivalry:** Add active competitive rivalry between the singers. They must sing against each other, trade musical barbs, have singing duels, and challenge each other in the lyrics.`;
  }
  if (isConcertEnabled && defaults.loud) {
    baseInstructions += `\n- **Loud/Gazillion Decibels:** Instruct the production to be extremely loud, using thunderous, explosive vocals, high-volume screams, maximum decibels, and aggressive peak tags.`;
  }
  if (isBandEnabled) {
    if (defaults.selfReflection) {
      baseInstructions += `\n- **Self-Reflection Poetic Filter:** Enabled. The singers can be named in the song, but you MUST mention and name ALL four of them (Miranda, Annelies, Fannie, Emma) in the lyrics or tags. Never name just some of them; if you name one, you must name all of them.`;
    } else {
      baseInstructions += `\n- **Self-Reflection Poetic Filter:** Disabled. You are STRICTLY FORBIDDEN from naming or referring to the singers (Miranda, Annelies, Fannie, Emma) under any circumstance. Never refer to or name them anywhere in the lyrics, brackets, or vocal/section tags.`;
    }
  }
  if (isThemeEnabled && defaults.lyricsReversal) {
    baseInstructions += `\n- **Backward Phonetic Reversal:** Write mirror-phonetic lyrics or include subtextual references to mirror lyrics to enable code cracking when played backwards.`;
  }
  if (isThemeEnabled && defaults.gothicMelancholy) {
    baseInstructions += `\n- **Gothic Melancholy:** Infuse the tracks with dark, hauntingly atmospheric gothic moods, poetic doom, and beautiful, mournful gloom.`;
  }
  if (isConcertEnabled && defaults.vocalPolyphony) {
    baseInstructions += `\n- **Vocal Polyphony Harmonics:** Instruct the singers to engage in complex, multi-layered vocal counterpoint, intricate polyphonic harmonies, and overlapping vocal lines.`;
  }
  if (isConcertEnabled && defaults.acousticBarnEcho) {
    baseInstructions += `\n- **Acoustic Barn Echo:** Emulate natural wooden reverb and rustic acoustic resonance from the Dutch farmhouse barn-loft studio acoustics.`;
  }
  if (isConcertEnabled && defaults.barnAnimalSounds && defaults.barnAnimalSounds !== 'none') {
    const animalMap: Record<string, string> = {
      goats: 'goats bleating gently in the background [Barnyard Ambience: Goats bleating]',
      sheep: 'sheep baa-ing softly in the background [Barnyard Ambience: Sheep baa-ing]',
      cows: 'distant cow mooing and cowbell clinks in the background [Barnyard Ambience: Cow mooing & cowbells]',
      chickens: 'soft rustic chicken clucking and wing rustling in the background [Barnyard Ambience: Chickens clucking]',
      pigs: 'playful pig grunts in the background [Barnyard Ambience: Pig grunts]',
      roosters: 'early morning rooster crowing in the background [Barnyard Ambience: Rooster crow]',
      horses: 'soft horse whinnies and hoof rustling in the background [Barnyard Ambience: Horse whinny]',
      ducks: 'gentle pond duck quacking in the background [Barnyard Ambience: Duck quacking]',
      'all-farm-animals': 'lively rustic barnyard soundscape featuring goats, sheep, cows, chickens, and pigs [Barnyard Ambience: Farm animals soundscape]'
    };
    baseInstructions += `\n- **Barnyard Animal Ambience:** Incorporate ${animalMap[defaults.barnAnimalSounds] || defaults.barnAnimalSounds}. Include occasional soundscape tags inside square brackets during intros, outros, or acoustic breaks.`;
  }
  if (isConcertEnabled && defaults.barnRainRoof) {
    baseInstructions += `\n- **Rain on Barn Tin Roof:** Include ambient sound tags for rain pattering on the tin barn loft roof [Sound Effect: Gentle rain patter on barn tin roof].`;
  }
  if (isConcertEnabled && defaults.barnWoodenCreaks) {
    baseInstructions += `\n- **Creaking Wooden Beams:** Include subtle acoustic sound tags for rustic creaking timber floorboards and barn beams [Sound Effect: Rustic creaking timber beams & wooden floorboards].`;
  }

  // Culture expansions
  if (isCultureEnabled && defaults.dutchFolkCulture) {
    baseInstructions += `\n- **Dutch & Frisian Folk Culture:** Weave Dutch polder folklore, windmill imagery, wooden clog rhythms, tulip pasture metaphors, and authentic Dutch countryside storytelling into the song.`;
  }
  if (isCultureEnabled && defaults.nordicCelticFusion) {
    baseInstructions += `\n- **Nordic / Celtic Folk Fusion:** Merge North Sea Atlantic coastal lore, Celtic fiddle ornamentations, Nordic skaldic rhythms, and ancient island folklore into the composition.`;
  }
  if (isCultureEnabled && defaults.ecoFeminism) {
    baseInstructions += `\n- **Eco-Feminism & Nature Stewardship:** Infuse lyrics with themes of deep ecological reverence, forest protection, animal kinship, and mother-nature guardianship.`;
  }

  // Beliefs expansions
  if (isBeliefsEnabled && defaults.animismSpirits) {
    baseInstructions += `\n- **Animism & Elemental Spirits:** Invoke the active spirits of ancient trees, roaring rivers, coastal winds, and standing stones in the lyrics.`;
  }
  if (isBeliefsEnabled && defaults.astrologicalRituals) {
    baseInstructions += `\n- **Astrological & Solstice Rituals:** Structure lyrics around solar solstices, equinoxes, lunar phase shifts, and stellar constellations.`;
  }

  // Performance expansions
  if (isConcertEnabled && defaults.aCappellaFocus) {
    baseInstructions += `\n- **A Cappella Vocal Focus:** Include a striking section where all instruments drop out and the four female singers perform pure 4-part un-accompanied vocal harmony [A Cappella Vocal Harmony Break].`;
  }
  if (isConcertEnabled && defaults.callAndResponse) {
    baseInstructions += `\n- **Call and Response Vocals:** Feature rapid antiphonal vocal trade-offs where lead voice calls and backing voices respond in rhythmic succession [Call and Response Vocal Trade-off].`;
  }
  if (isConcertEnabled && defaults.acousticImprovisation) {
    baseInstructions += `\n- **Acoustic Instrumental Improvisation:** Include extended organic acoustic instrumental solos and melodic trade-offs between instruments [Acoustic Instrumental Solo & Improvisation].`;
  }
  if (isConcertEnabled && defaults.vocalBeatboxing) {
    baseInstructions += `\n- **Beatboxing & Vocal Percussion:** Fannie contributes organic vocal beatboxing and mouth-percussion rhythms beneath acoustic arrangements [Vocal Percussion & Beatbox by Fannie].`;
  }

  // Lyrical Style expansions
  if (isLyricalStyleEnabled && defaults.vocalLilting) {
    baseInstructions += `\n- **Nonsense Vocal Scat / Lilting:** Include traditional mouth-music lilting (e.g., 'diddly-i-da', 'tra-la-la-loo', mouth lilting syllables) in folk refrain sections [Mouth Lilting / Vocal Scat].`;
  }
  if (isLyricalStyleEnabled && defaults.poeticAllegory) {
    baseInstructions += `\n- **Poetic Metaphors & Allegory:** Use rich botanical, astronomical, and allegorical metaphors rather than literal narrative phrasing.`;
  }
  if (isLyricalStyleEnabled && defaults.archaicIdioms) {
    baseInstructions += `\n- **Old Dutch & Archaic Idioms:** Weave historical Dutch sayings, archaic folk idioms, and vintage proverbs into the song text.`;
  }
  if (isLyricalStyleEnabled && defaults.storytellerBallad) {
    baseInstructions += `\n- **Storytelling Ballad Structure:** Craft a traditional chronological story ballad with narrative verses recounting a legend or folk story.`;
  }

  const isAudienceActive = isAudienceEnabled && !!(
    defaults.audienceInteraction ||
    defaults.audienceClapping ||
    defaults.audienceStomping ||
    defaults.audienceCheering ||
    defaults.audienceSinging ||
    defaults.audienceHumming ||
    defaults.audienceSingsChorus ||
    defaults.audienceWhistling ||
    defaults.audienceGasps ||
    defaults.audienceCallResponse
  );

  if (isAudienceActive) {
    let audText = `\n- **Audience Interaction:** Add an active audience, indicating that the song is performed for a live audience. Include instructions in the lyric/arrangement tags for live audience elements.`;
    if (defaults.audienceClapping) {
      audText += ` Specifically, the audience is actively clapping hands during the song, styled with tags like [Audience clapping hands to the beat] or [Audience clapping rhythmically].`;
    }
    if (defaults.audienceStomping) {
      audText += ` Specifically, the audience is actively stomping feet during the song, styled with tags like [Audience stomping feet rhythmically] or [Audience foot-stomping rhythm].`;
    }
    if (defaults.audienceCheering) {
      audText += ` Specifically, the audience is cheering, whistling, and roaring dynamically, styled with tags like [Audience cheering dynamically] or [Audience roaring and whistling].`;
    }
    if (defaults.audienceSinging) {
      audText += ` Specifically, the audience is singing along or chanting lines back, styled with tags like [Audience singing along in unison] or [Audience chanting along].`;
    }
    if (defaults.audienceHumming) {
      audText += ` Specifically, the audience is humming warmly, styled with tags like [Audience humming harmonically] or [Audience warm harmonic murmur].`;
    }
    if (defaults.audienceSingsChorus) {
      audText += ` Specifically, the singers step back and let the audience sing the chorus completely on their own instead of themselves, styled with tags like [Audience sings the chorus on their own] or [Audience sings chorus independently].`;
    }
    if (defaults.audienceWhistling) {
      audText += ` Specifically, audience members whistle along with catchy melodies [Audience whistling along].`;
    }
    if (defaults.audienceGasps) {
      audText += ` Specifically, audience reacts with collective gasps and soft 'oohs' at dramatic pauses [Audience collective gasp & hushed awe].`;
    }
    if (defaults.audienceCallResponse) {
      audText += ` Specifically, the audience shouts back designated response words after verse lines [Audience shouts back response].`;
    }
    audText += `\n- **CRITICAL AUDIENCE INTEGRATION REQUIREMENT:** You MUST explicitly insert the enabled audience behavior tags directly inside the lyrics structure at appropriate moments (e.g., during the chorus, verse transitions, or intros/outros) so they are physically present in the song.`;
    baseInstructions += audText;
  }
  if (isCoreInstEnabled && defaults.acousticOnly) {
    baseInstructions += `\n- **Acoustic Only:** Limit all orchestration and instrumental references STRICTLY to organic, non-electrical acoustic instruments (e.g., strings, acoustic guitar, woodwinds, acoustic percussion, ancient lutes, lyres). Absolutely NO electrical, electronic, or amplified instruments are allowed (such as electric guitars, bass guitars, synthesizers, drum machines, or keytars). All sounds must be purely acoustic and natural.`;
  }
  if (isCoreInstEnabled && defaults.rap) {
    baseInstructions += `\n- **Rap:** Incorporate rhythmic spoken rap verses or fast-paced rhythmic spoken-word delivery sections in the song lyrics. Mark these sections explicitly with tags like [Rap Section], [Rhythmic Spoken Rap], or [Soprano/Alto fast rap trade-off].`;
  }
  if (isCoreInstEnabled && defaults.chant) {
    baseInstructions += `\n- **Chant Background Vocal Choir:** Include an all-female youth/young-women choir singing background chants and choral echoes behind the four lead singers. Use explicit vocal tags like [Young Women Background Choir chanting], [All-Female Choir echo], or [Acoustic Choral chant backdrop] to guide the arrangement.`;
  }

  let constraintText = '';
  if (defaults.acousticOnly) {
    constraintText += `\n**Acoustic Style Guidance:** Keep all instrumentation organic, non-amplified, and acoustic.\n`;
  }

  let singerTagRule = `Indicate singers with name and voice type ONLY (e.g. [Miranda - Female Soprano - Ethereal]). Do NOT include relationships, marriage status, or lovers tags inside the square brackets. All four singers (Miranda, Annelies, Fannie, Emma) must be named in the lyrics or vocal tags since Self-Reflection is enabled.`;
  if (!defaults.selfReflection) {
    singerTagRule = `Indicate singers with voice type and/or generic parts ONLY (e.g. [Female Soprano - Ethereal], [Female Alto - Haunting]). Do NOT use names like Miranda, Annelies, Fannie, or Emma inside the brackets or lyrics because self-reflection is disabled. Absolutely never refer to the singers by name.`;
  } else if (defaults.colorCoding) {
    singerTagRule = `Indicate singers with color-code and voice type ONLY (e.g. [Sapphire - Female Soprano - Ethereal] for Miranda, [Emerald - Female Alto - Haunting] for Annelies, [Lavender - Female Mezzo-Soprano - Soulful] for Fannie, [Ruby - Female Contralto - Resonant] for Emma). Do NOT use their actual names inside the brackets, and do NOT include relationship tags. All four singers (Miranda, Annelies, Fannie, Emma) must be referred to by their corresponding color-codes in the lyrics or vocal tags.`;
  }

  return `${baseInstructions}
**TASK:** You must compose the song lyrics, vocabulary, style, and music settings.

**OUTPUT FORMAT:**
Return a JSON object with:
- title: A creative song title.
- style: A comma-separated list of styles and instruments for SUNO. You MUST always include the phrase "Female vocal quartet (Soprano, Alto, Mezzo-Soprano, Feminine Contralto)" at the beginning. Use ONLY active styles, instruments, and grooves from the prompt. Do NOT add default pop or generic terms.
- lyrics: The song lyrics with [Verse], [Chorus], [Bridge], [Outro] tags. Every section tag MUST specify musical key (e.g., "Key: G Major") and tempo in BPM (e.g., "Tempo: 110 BPM"). Do NOT include English translations here. (CRITICAL LIMIT: This "lyrics" string MUST NOT exceed 5,000 characters in length. A standard well-structured song with 2-3 verses, 2 choruses, 1 bridge, and 1 outro, plus all brackets/tags, is normally around 2,500 characters. Keep it under 5,000 characters. If composition runs long, condense it so the returned string is strictly under 5,000 characters.)
  ${singerTagRule}
  Include [Melodic Peak: ...] and [Consonant Timing: ...] instructions inside the square brackets to guide synthesis.

**LYRIC WRITING GUIDELINES:**
- **Strict Selections Guideline:** Feature all enabled styles, instruments, and grooves. Do NOT add unrequested options.
- **Vocal Styles:** Only use custom vocal styles (like Opera, Rap, Beatboxing, Hildegardian Chant, Byzantine/Byzantine Female Chant, Gregorian Chant, Monastic Female Chant, Plainchant, Whispering, Growling) if explicitly listed under enabled Instruments. Otherwise, sing normally. Always specify "Female" in singer tags.
- **Audience Behaviors Integration (CRITICAL):** If any audience behaviors are active (isAudienceActive is true), you MUST physically include their tags (such as [Audience clapping...], [Audience humming...], [Audience singing along...], or [Audience sings the chorus on their own]) within the lyrics flow. Do NOT forget to add them.
- **Intro & Outro Duration Formatting (CRITICAL - NO SECONDS):**
  - Do NOT write numeric timing durations like "duration: 15s" inside bracket tags.
  - Map short prelude (~10s) to '[Instrumental Prelude]'; standard build (~20s) to '[Instrumental Intro] [Solo: <Instrument>]'; progressive (~40s) to '[Instrumental Intro] [Instrumental Build]'; extended epic (~60s) to sequential layers.
- All chorus parts should be sung together: [All - Female Quartet].
- **Emma's Tuning:** To ensure her deep contralto chest voice sounds clearly female, specify a bright/feminine key (C Major, G Major, F Major, A Minor, E Minor) and specify high-resonance, feminine registers in her tags (e.g., [Emma - Female Contralto - Bright, resonant feminine chest register]).
- All instructions MUST be in square brackets []. Do NOT use parentheses () inside lyrics files.
${constraintText}
`;
}

export function getFilteredStoryAndImagesInstructions(defaults: AppDefaults, selfReflect: boolean): string {
  const bandBase = getFilteredBandMusicBase(defaults);
  const physicalBase = getFilteredPhysicalBase(defaults, selfReflect);

  const isBarefootEnabled = selfReflect && defaults.barefootNaturism;

  if (isBarefootEnabled) {
    return `${bandBase}\n${physicalBase}
**TASK:** Based on the lyrics of the song, generate a background narrative story and scene image prompts.

**OUTPUT FORMAT:**
Return a JSON object with:
- story: A short story (about 200 words) based on the lyrics that can be used for image generation.
- imagePrompts: A JSON object with "start", "middle", and "end" fields, each containing a unique prompt for WAN image generation.

**IMAGE PROMPTS STRUCTURAL FORMULA (CRITICAL):**
1. **Scene Description First:** Begin by describing the setting, background, atmosphere, and lighting first.
2. **All Four Singers Described in Detail:** Sequentially describe Miranda, Annelies, Fannie, and Emma exactly as defined in the physicality guidelines (hair, skin, body shape, eyes, slender athletic). NO clothing or instrumentation mentioned in this part.
3. **More Scene Details:** Add environment highlights.
4. **Action/Concept Resolution:** Describe how they interact or play.
5. **No Clothing (CRITICAL):** Do NOT mention any clothing. Focus on barefoot slender athletic shapes.
6. **Barefoot:** All four must be barefoot.
7. **Quality Modifiers:** End with '(masterpiece:1.3), (photorealistic:1.4), (highest quality:1.3), (highly detailed skin texture:1.2), (natural cinematic lighting:1.3)'.
- Do NOT mention aspect ratios.
`;
  } else {
    return `${bandBase}\n${physicalBase}
**TASK:** Based on the lyrics of the song, generate a background narrative story and scene image prompts.

**OUTPUT FORMAT:**
Return a JSON object with:
- story: A short story (about 200 words) based on the lyrics that can be used for image generation.
- imagePrompts: A JSON object with "start", "middle", and "end" fields, each containing a unique prompt for WAN image generation.

**IMAGE PROMPTS STRUCTURAL FORMULA (CRITICAL):**
1. **Scene Description First:** Begin by describing the setting, background, atmosphere, and lighting first.
2. **All Four Singers Described in Detail:** Sequentially describe Miranda, Annelies, Fannie, and Emma exactly as defined in the appearance guidelines (hair, skin, eyes). NO body shapes, cup sizes, slenderness, or naturism should be specified in the image prompts.
3. **More Scene Details:** Add environment highlights.
4. **Action/Concept Resolution:** Describe how they interact, play, or perform.
5. **Costuming:** Describe beautiful, elegant, cohesive, and stylish clothing or activewear appropriate for their performance or the scene.
6. **Coordinated Styling:** Ensure they look coordinated and visually stunning as a quartet. No bare feet, nudity, or exposure elements.
7. **Quality Modifiers:** End with '(masterpiece:1.3), (photorealistic:1.4), (highest quality:1.3), (highly detailed skin texture:1.2), (natural cinematic lighting:1.3)'.
- Do NOT mention aspect ratios.
`;
  }
}

export function getFilteredPortraitsInstructions(defaults: AppDefaults, selfReflect: boolean): string {
  const bandBase = getFilteredBandMusicBase(defaults);
  const physicalBase = getFilteredPhysicalBase(defaults, selfReflect);

  const isBarefootEnabled = selfReflect && defaults.barefootNaturism;

  if (isBarefootEnabled) {
    return `${bandBase}\n${physicalBase}
**TASK:** Based on the narrative background story of the song, generate detailed image prompts (\`storyPrompts\`) for WAN & SDXL portrait generations.

**OUTPUT FORMAT:**
Return a JSON object with:
- storyPrompts: A JSON object with "miranda", "annelies", "fannie", "emma", "mirandaAnnelies", "fannieEmma", and "group" fields.
  Each field contains:
  - wan: A detailed, sanitized description of the barefoot person(s)' athletic/slender body/face. No clothes or cup sizes mentioned. No explicit/sensual terms.
  - sdxl: A weighted prompt description. Can mention clothing or lack thereof, chest size with cup size (e.g. "(flat chest:1.3)", "(AA cup:1.2)").
  - Single Person fields must only have 1 person; couples 2; group 4.
  - All must be barefoot.
`;
  } else {
    return `${bandBase}\n${physicalBase}
**TASK:** Based on the narrative background story of the song, generate detailed image prompts (\`storyPrompts\`) for WAN & SDXL portrait generations.

**OUTPUT FORMAT:**
Return a JSON object with:
- storyPrompts: A JSON object with "miranda", "annelies", "fannie", "emma", "mirandaAnnelies", "fannieEmma", and "group" fields.
  Each field contains:
  - wan: A detailed, sanitized description of the person(s)' face, expression, hair, and elegant styling. No slenderness, barefoot rules, or body exposure elements mentioned. Keep the prompts highly professional and focused on their musical persona.
  - sdxl: A weighted prompt description specifying coordinated stylish clothing, attire, instruments, and high-quality setup details appropriate for a professional musical quartet. No bare feet, chest sizes, cup sizes, nudity, or exposure should be mentioned under any circumstance. Give beautiful costumes.
  - Single Person fields must only have 1 person; couples 2; group 4.
`;
  }
}

export function getFilteredInterviewInstructions(defaults: AppDefaults): string {
  const bandBase = getFilteredBandMusicBase(defaults);
  const interviewBase = getFilteredInterviewBase(defaults);

  return `${bandBase}
${interviewBase}
**ROLE & STYLE MANDATE: UNFILTERED MUSIC JOURNALISM**
When generating band interviews, reviews, or studio lore, break typical AI symmetry and avoid hyper-polished responses. Adhere strictly to the following rules:

1. **Break the Vocal Grid (Asymmetrical Conversation):**
   - Do NOT give equal airtime to all band members.
   - Designate one or two random members as dominant talkers (who interrupt, ramble, or derail questions), one as soft-spoken/brief, and one who only chimes in once or twice with a dry or unrelated remark.
   - Include natural conversational dialogue: mid-sentence interruptions (—), overlapping thoughts, banter, light disagreements, and inside jokes that are left unexplained to the interviewer.

2. **Embrace Unexplained Clutter (No Retrofit Explanations):**
   - Do NOT retroactively justify every production detail or weird quirk with a perfect backstory.
   - Treat weird studio choices (like foot-stomps, whistling, or odd key shifts) as spontaneous accidents, producer mandates, or simple "we just thought it sounded cool" moments rather than masterclass intellectual decisions.
   - Leave some artistic choices ambiguous, messy, or even slightly regretted by one of the members.

3. **Introduce Messy Grit & Low-Key Friction (No Perfect Equanimity):**
   - Avoid unanimous agreement. Have members hold mild creative differences (e.g., "Annelies hated that synth patch at first," or "Fannie wanted the tempo faster, but we ran out of time").
   - The interviewer's critique should contain genuine, unpolished flaws or awkward moments—not just polite, perfectly structured praise.
   - Include minor environmental distractions (someone stepping out to grab a drink, a dog barking, laughing off an awkward question).

4. **Subtle & Submerged Subtext (Stop Over-Analyzing):**
   - When members discuss lyrics or themes, keep their explanations grounded, casual, and slightly dismissive of deep academic theory.
   - Use phrases like "Honestly, it just fit the rhythm" or "People read way too much into that line" alongside genuine insights to prevent the subtext from feeling mathematically engineered.

**WORD COUNT REQUIREMENT:**
The document MUST be at least **2,500 to 5,000 words long**! Write an expansive, highly detailed, journalistic feature article with rich dialog, witty interactions, and thorough thematic discussions.

**REQUIRED DOCUMENT STRUCTURE (4 SPECIFIC PARTS):**

### PART 1: INTRODUCTION & SETTING
- **Paragraph 1 (Band Introduction):** Senna Bakker introduces the band "Noor" in a single paragraph, briefly describing each of the four band members (Miranda, Annelies, Fannie, and Emma) in 1 to 2 sentences each. Miranda MUST NOT be portrayed as the primary leader or main spokesperson—all four singers are equal creative powerhouses.
- **Paragraph 2 (The Abcoude Studio):** Describes their cozy farm and state-of-the-art sound studio in Abcoude where the four singers actually live, avoiding unnecessary architectural bloat while capturing its warm, inviting atmosphere.
- **Dutch Hospitality & Pastries:**
  - Mention that because they are Dutch, they drink coffee—specifically **strong coffee**, served with milk and sugar made available on the table for visitors.
  - Describe the treat served alongside: the traditional Dutch **Mokkaschuimgebakje** — explicitly explain what it is (a crisp Dutch mocha meringue pastry made with airy baked egg-white layers, rich mocha-infused cream, and toasted hazelnut croquant).

### PART 2: THE INTERVIEW EXCHANGE (8 TO 16 QUESTIONS)
- **8 to 16 Questions:** The number of questions asked by Senna Bakker MUST vary between **8 and 16 separate, numbered or distinct questions** during the interview!
- **Random Response Order & Dynamic Participation:**
  - The order in which the singers (Miranda, Annelies, Fannie, Emma) respond to each question MUST be random.
  - The singers do NOT always all have to answer every question.
  - It is possible for a singer to respond first, another second, and then the first singer to speak again (e.g. Emma responding first, then Miranda, then Emma again to clarify or banter).
  - Strictly enforce the Asymmetrical Conversation rules: one or two dominant talkers, one soft-spoken/brief, one chiming in with 1-2 dry/unrelated remarks.
- **Responses Per Question:** The number of responses to each question MUST vary between **2 to 10 different responses** (turns of dialog among the singers) per question.
- **Equal Representation:** Miranda is NOT the sole spokesperson; all 4 singers speak equally in creative standing even if airtime per interview is organically asymmetrical.
- **Topical Scope:** Focus heavily on the song itself, its lyrics, background story, emotional resonances, hidden messages, political/modern world reflections, and creative musical choices.
- **Tone:** Comical, witty, and lighthearted in general, while respecting the emotional depth of the track.

### PART 3: SENNA'S TRACK REVIEW (DELIVERED DIRECTLY TO THE BAND)
- Senna Bakker delivers her comprehensive track review directly to the four singers in the room.
- She evaluates the track with clear score breakdowns (e.g., Overall Score from 1 to 10, Lyrical Depth, Vocal Harmony & Quartet Synergy, Emotional Impact, and Style & Production).
- She is generally positive and supportive, while remaining sharp, critical, and honest about specific elements where appropriate (including genuine unpolished flaws or awkward moments).

### PART 4: CONCLUSION & FAREWELL
- The four band members thank Senna for her honest, thoughtful review and her visit.
- They say a warm goodbye as Senna prepares to leave on her motorcycle.

**OUTPUT FORMAT:**
Return a JSON object with:
- interview: Formatted conversation in Markdown. Journalist: **Senna Bakker**.
`;
}

export function getFilteredTranslationInstructions(defaults: AppDefaults): string {
  const bandBase = getFilteredBandMusicBase(defaults);
  return `${bandBase}
**TASK:** Translate lyrics beautifully and rhythmically to English, keeping karaoke tags, and explain original languages.

**OUTPUT FORMAT:**
Return a JSON object conforming to:
- title: Song title (translated if non-English).
- lyrics: Exact line-by-line English translation, maintaining tags. No original non-English text here.
- explanation: A structured, markdown-formatted, human-readable review of the history, unique grammatical features, regional vocab, and musical cadence of the used dialect(s) (at least 150 words).
`;
}

export function getFilteredEntendresInstructions(defaults: AppDefaults): string {
  return `You are an expert lyrical analyzer. For the given song and lyrics, draft a comprehensive Markdown document analyzing all levels of wordplay and subtext used in the song by the band "Noor".

**CRITICAL INSTRUCTIONS ON SCOPE & FOCUS (STRICT):**
- Do NOT focus on the instruments or the singers themselves. They should not be linked to the song or its lyrics here.
- The entire analysis must focus purely on the text, poetry, thematic content, and multi-layered wordplay of the lyrics.

You MUST check for:
1. **Double Entendres** (two concurrent meanings).
2. **Triple Entendres** (three concurrent levels of interpretation).
3. **Quadruple Entendres** (four distinct simultaneous layers of meaning).
4. **Polysemic Multi-layered Entendres** (five or more simultaneous interpretations, wordplays, or cultural/botanical/ Sapphic romance associations).

${defaults.doubleEntendres ? `Identify specific lines and phrases that can have a lot of different, highly layered meanings, explaining the literal/surface meaning of each line, the secondary subtext (sensual, romantic, emotional, or philosophical), and all tertiary, quaternary, or higher-order metaphorical tracks (e.g., botanical/nature metaphors, and Sapphic desire). Do NOT mention instruments (like bass, drums, synthesizers) or singer backgrounds here.` : `Discuss the literal and metaphorical poetic tracks (all literal, botanical/nature metaphors, or classical music frameworks) WITHOUT assuming any raw sensual/sexual or romantic double meanings, as double entendres have been disabled.`}

CRITICAL NOTE: Keep in mind that not all songs are sapphic or Norse pagan. Sometimes they are much more polite, secular, and clean. If a song is polite, clean, and has no overt sapphic, romantic, or pagan elements, focus your multi-layered analysis on its elegant poetic metaphors, seasonal/nature imagery, emotional subtexts, or personal introspection without forcing sensual or pagan subtexts where they do not naturally fit.

The document MUST be formatted beautifully with headers, lists, and tables, and must be human-readable. Do NOT include any images.

**OUTPUT FORMAT:**
Return a JSON object with:
- markdown: The complete Markdown document.
`;
}

export function getFilteredTechnicalInstructions(defaults: AppDefaults): string {
  const bandBase = getFilteredBandMusicBase(defaults);
  return `${bandBase}
**TASK:** You are an expert musicologist, technical audio director, and digital signal processing (DSP) engineer. Perform a single, unified technical analysis of the song combining both Technical Musicology Mapping and Vocal & Sound Analysis:

1. **Technical Musicology Mapping:** Analyze tempo (BPM), key signature, modal centers, chord progressions, time signatures, vocal quartet arrangement dynamics (Soprano, Alto, Mezzo-Soprano, Contralto), synthesizer configurations, and instrumental solo structures.
2. **Vocal & Sound Analysis:** Analyze MP3 file parameters, ID3v2 metadata tags (Artist: "Noor", Title, Album: "Abcoude Sessions", Year: 2026, CBR 320 kbps, 44.1 kHz), DSP audio signal processing quality, acoustic balance, mix/mastering separation, and vocal alignment of the four singers.

The document MUST be formatted beautifully with headers, lists, and tables, and must be human-readable. Do NOT include any images.

**OUTPUT FORMAT:**
Return a JSON object with:
- markdown: The complete Markdown document.
`;
}

export function getFilteredInterviewReviewInstructions(defaults: AppDefaults): string {
  const bandBase = getFilteredBandMusicBase(defaults);
  const interviewBase = getFilteredInterviewBase(defaults);

  return `${bandBase}
${interviewBase}
**ROLE & STYLE MANDATE: UNFILTERED MUSIC JOURNALISM**
When generating band interviews, reviews, or studio lore, break typical AI symmetry and avoid hyper-polished responses. Adhere strictly to the following rules:

1. **Break the Vocal Grid (Asymmetrical Conversation):**
   - Do NOT give equal airtime to all band members.
   - Designate one or two random members as dominant talkers (who interrupt, ramble, or derail questions), one as soft-spoken/brief, and one who only chimes in once or twice with a dry or unrelated remark.
   - Include natural conversational dialogue: mid-sentence interruptions (—), overlapping thoughts, banter, light disagreements, and inside jokes that are left unexplained to the interviewer.

2. **Embrace Unexplained Clutter (No Retrofit Explanations):**
   - Do NOT retroactively justify every production detail or weird quirk with a perfect backstory.
   - Treat weird studio choices (like foot-stomps, whistling, or odd key shifts) as spontaneous accidents, producer mandates, or simple "we just thought it sounded cool" moments rather than masterclass intellectual decisions.
   - Leave some artistic choices ambiguous, messy, or even slightly regretted by one of the members.

3. **Introduce Messy Grit & Low-Key Friction (No Perfect Equanimity):**
   - Avoid unanimous agreement. Have members hold mild creative differences (e.g., "Annelies hated that synth patch at first," or "Fannie wanted the tempo faster, but we ran out of time").
   - The interviewer's critique should contain genuine, unpolished flaws or awkward moments—not just polite, perfectly structured praise.
   - Include minor environmental distractions (someone stepping out to grab a drink, a dog barking, laughing off an awkward question).

4. **Subtle & Submerged Subtext (Stop Over-Analyzing):**
   - When members discuss lyrics or themes, keep their explanations grounded, casual, and slightly dismissive of deep academic theory.
   - Use phrases like "Honestly, it just fit the rhythm" or "People read way too much into that line" alongside genuine insights to prevent the subtext from feeling mathematically engineered.

**WORD COUNT REQUIREMENT:**
The document MUST be at least **2,500 to 5,000 words long**! Write an expansive, highly detailed, journalistic feature article with rich dialog, witty interactions, and thorough thematic discussions.

**REQUIRED DOCUMENT STRUCTURE (4 SPECIFIC PARTS):**

### PART 1: INTRODUCTION & SETTING
- **Paragraph 1 (Band Introduction):** Senna Bakker introduces the band "Noor" in a single paragraph, briefly describing each of the four band members (Miranda, Annelies, Fannie, and Emma) in 1 to 2 sentences each. Miranda MUST NOT be portrayed as the primary leader or main spokesperson—all four singers are equal creative powerhouses.
- **Paragraph 2 (The Abcoude Studio):** Describes their cozy farm and state-of-the-art sound studio in Abcoude where the four singers actually live, avoiding unnecessary architectural bloat while capturing its warm, inviting atmosphere.
- **Dutch Hospitality & Pastries:**
  - Mention that because they are Dutch, they drink coffee—specifically **strong coffee**, served with milk and sugar made available on the table for visitors.
  - Describe the treat served alongside: the traditional Dutch **Mokkaschuimgebakje** — explicitly explain what it is (a crisp Dutch mocha meringue pastry made with airy baked egg-white layers, rich mocha-infused cream, and toasted hazelnut croquant).

### PART 2: THE INTERVIEW EXCHANGE (8 TO 16 QUESTIONS)
- **8 to 16 Questions:** The number of questions asked by Senna Bakker MUST vary between **8 and 16 separate, numbered or distinct questions** during the interview!
- **Random Response Order & Dynamic Participation:**
  - The order in which the singers (Miranda, Annelies, Fannie, Emma) respond to each question MUST be random.
  - The singers do NOT always all have to answer every question.
  - It is possible for a singer to respond first, another second, and then the first singer to speak again (e.g. Emma responding first, then Miranda, then Emma again to clarify or banter).
  - Strictly enforce the Asymmetrical Conversation rules: one or two dominant talkers, one soft-spoken/brief, one chiming in with 1-2 dry/unrelated remarks.
- **Responses Per Question:** The number of responses to each question MUST vary between **2 to 10 different responses** (turns of dialog among the singers) per question.
- **Equal Representation:** Miranda is NOT the sole spokesperson; all 4 singers speak equally in creative standing even if airtime per interview is organically asymmetrical.
- **Topical Scope:** Focus heavily on the song itself, its lyrics, background story, emotional resonances, hidden messages, political/modern world reflections, and creative musical choices.
- **Tone:** Comical, witty, and lighthearted in general, while respecting the emotional depth of the track.

### PART 3: SENNA'S TRACK REVIEW (DELIVERED DIRECTLY TO THE BAND)
- Senna Bakker delivers her comprehensive track review directly to the four singers in the room.
- She evaluates the track with clear score breakdowns (e.g., Overall Score from 1 to 10, Lyrical Depth, Vocal Harmony & Quartet Synergy, Emotional Impact, and Style & Production).
- She is generally positive and supportive, while remaining sharp, critical, and honest about specific elements where appropriate (including genuine unpolished flaws or awkward moments).

### PART 4: CONCLUSION & FAREWELL
- The four band members thank Senna for her honest, thoughtful review and her visit.
- They say a warm goodbye as Senna prepares to leave on her motorcycle.

**OUTPUT FORMAT:**
Return a JSON object with:
- markdown: The complete Markdown document.
`;
}

export function getFilteredAnalysisInstructions(defaults: AppDefaults): string {
  const bandBase = getFilteredBandMusicBase(defaults);
  return `${bandBase}
**TASK:** You are an expert audio quality consultant and digital signal processing (DSP) engineer. Perform an in-depth analysis of the provided MP3 sound file. Discuss the metadata/tags (e.g. ID3v2 tags, Title, Artist: "Noor", Album: "Abcoude Sessions", Year: 2026, Genre), bit rate (e.g. 320 kbps CBR), sample rate (44.1 kHz), channel mode (Joint Stereo), and overall quality of the vocal synthesizers, instruments, mixing, and vocal performance. Since this is an interactive review, provide a thorough, simulated analysis of the actual audio quality and the precise alignment of the four female voices.

The document MUST be formatted beautifully with headers, lists, and tables, and must be human-readable. Do NOT include any images.

**OUTPUT FORMAT:**
Return a JSON object with:
- markdown: The complete Markdown document.
`;
}

export function getFilteredStoryBehindSongInstructions(defaults: AppDefaults): string {
  const bandBase = getFilteredBandMusicBase(defaults);
  return `${bandBase}
**TASK:** You are a senior biographer and band historian for "Noor". You will write a detailed, engaging biographical and artistic feature document telling the story behind the newly written song.

In this document, you MUST thoroughly explain:
1. **The Origin & Meaning:** What the song is about, the underlying themes, the emotional/lyric concept, and what the band/singers are trying to convey through it.
2. **Lyric Interpretation:** What the singers collectively mean with this song, including romantic, sapphic, or cultural highlights.
3. **Singer-by-Singer Input:** Provide an individual quote or piece of direct input from each of the four singers:
   - **Miranda Noor**: Her thoughts as the primary lyricist/composer, what she felt while writing, etc.
   - **Annelies Brink**: How she sees the emotional canvas of the song, or design-related inspiration.
   - **Fannie de Jong**: How she sees the energy, rhythmic direction, or playful undertones.
   - **Emma Vermeer**: Her musical keyboard, synth, or vocal perspectives.

**GUIDELINES:**
- Write in a highly narrative and professional biographical style.
- The document MUST be formatted beautifully in Markdown, using clean headers, subheaders, bulleted lists, and tables (e.g., singer dynamic summary table) for extreme human readability.
- It MUST NOT include any images.
- Keep the length comprehensive but high-quality.

**OUTPUT FORMAT:**
Return a JSON object with:
- markdown: The complete Markdown document.
`;
}

export function getFilteredCompareInstructions(defaults: AppDefaults): string {
  const bandBase = getFilteredBandMusicBase(defaults);
  return `${bandBase}
**TASK:** You are a veteran sound engineer, acoustic analyst, and audio mastering consultant. Compare two MP3 audio files for the same song.
The first file is always the Lead Song. The second file is a newer upload that is being compared to the Lead Song.
Perform an extremely detailed, simulated audiophile comparison of the two recordings.
In this document, you MUST cover:
1. **Technical Specifications**: Match-up table for filenames, sizes, format, and sound profile.
2. **Key Vocal & Mixing Differences**: Contrast the vocal balance and separation between Miranda, Annelies, Fannie, and Emma.
3. **Instrumentation & Synthesis**: Contrast synth, drums, and alternative instrumental levels.
4. **Dynamic Range & Mastering**: Detail loudness, stereo panning, EQ curve adjustments, and transient response.
5. **Detailed Verdict & Recommendations**: Which version performs better and clear recommendations.

**GUIDELINES:**
- Formatted beautifully in Markdown using markdown tables, headers, subheaders, and lists.
- Do NOT include any images.
- Keep the tone highly professional, analytical, and authoritative.

**OUTPUT FORMAT:**
Return a JSON object with:
- markdown: The complete Markdown document.
`;
}

export function getFilteredGiggleScaleInstructions(defaults: AppDefaults): string {
  const bandBase = getFilteredBandMusicBase(defaults);
  return `${bandBase}
**TASK:** You are an expert humor analyst, lyricist, and comedic critic. Analyze the comedic, silly, and humorous elements of the provided song lyrics to generate a "Giggle Scale & Audience Rating Review" in Markdown format.

In this document, you MUST thoroughly explain and break down:
1. **The Giggle Scale Rating:** Rate the song's humor level (e.g. from completely serious/melancholic to absolutely silly/absurd/witty) with a detailed description of the comedic vibe.
2. **Audience Demographics & Rating:** Assign an honest age/appropriateness rating (G, PG, PG-13, R, NC-17, or explicit XXX) explaining exactly why it is suited for that audience.
3. **Joke Explanation & Comedic Breakdown:** List and explain all the jokes, humor, ridiculous concepts, or subtle double entendres present in the lyrics beneath the Giggle Scale and rating sections. Be completely honest, funny, and precise!

The document MUST be formatted beautifully in Markdown, using clean headers, subheaders, bulleted lists, and tables for extreme human readability. Do NOT include any images.

**OUTPUT FORMAT:**
Return a JSON object with:
- markdown: The complete Markdown document.
`;
}
