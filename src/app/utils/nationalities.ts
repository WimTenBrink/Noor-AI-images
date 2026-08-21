export interface NationalityCulture {
  id: string;
  name: string;
  flag: string;
  description: string;
  accentImpact?: string;
  instrumentImpact?: string;
  defaultInstruments?: string[];
  continent: string;
  regionGroup: string;
  regionGroups?: string[];
}

export interface RegionGroup {
  id: string;
  name: string;
  description: string;
  nationalities: NationalityCulture[];
}

export const NATIONALITIES: NationalityCulture[] = [
  // ==========================================
  // MAJOR LANGUAGE: ENGLISH DIALECTS (20)
  // ==========================================
  {
    id: 'en_ca',
    name: 'Canadian English',
    flag: '🇨🇦',
    continent: 'North America',
    regionGroup: 'English',
    description: 'Canadian vowel raising ("about/out"), polite "eh" discourse markers, soft dipthongs, and Maritime/Ontario phrasing.'
  },
  {
    id: 'en_au',
    name: 'Australian English (Strine)',
    flag: '🇦🇺',
    continent: 'Oceania',
    regionGroup: 'English',
    description: 'Strine broad vowel shifts, high rising terminal inflection, casual Aussie vernacular, and upbeat acoustic delivery.'
  },
  {
    id: 'en_us_gen',
    name: 'General American English',
    flag: '🇺🇸',
    continent: 'North America',
    regionGroup: 'English',
    description: 'Standard rhotic American accent, flat open vowels, crisp articulation, and versatile pop/rock resonance.'
  },
  {
    id: 'en_us_south',
    name: 'American Southern Drawl',
    flag: '🇺🇸',
    continent: 'North America',
    regionGroup: 'English',
    description: 'Slow melodic southern drawl, monophthongized vowels, warm relaxed cadence, and country/blues vocal texture.'
  },
  {
    id: 'en_us_ny',
    name: 'New York & Brooklyn Accent',
    flag: '🇺🇸',
    continent: 'North America',
    regionGroup: 'English',
    description: 'Non-rhotic "tawk/cawfee" vowels, fast assertive urban tempo, nasal resonance, and streetwise grit.'
  },
  {
    id: 'en_us_midwest',
    name: 'Midwestern / Great Lakes English',
    flag: '🇺🇸',
    continent: 'North America',
    regionGroup: 'English',
    description: 'Northern Cities Vowel Shift, nasal "a" sounds, friendly melodic cadence, and prairie folk phrasing.'
  },
  {
    id: 'en_us_cali',
    name: 'California West Coast & Valley',
    flag: '🇺🇸',
    continent: 'North America',
    regionGroup: 'English',
    description: 'Vocal fry, casual uptalk inflections, laid-back surfer/valley lilt, and relaxed pop-rock cadence.'
  },
  {
    id: 'en_gb_rp',
    name: 'British English (Received Pronunciation)',
    flag: '🇬🇧',
    continent: 'Europe',
    regionGroup: 'English',
    description: 'Standard BBC British English, non-rhotic, crisp formal vowels, elegant phrasing, and theatrical clarity.'
  },
  {
    id: 'en_gb_cockney',
    name: 'Cockney & East London English',
    flag: '🇬🇧',
    continent: 'Europe',
    regionGroup: 'English',
    description: 'Glottal stops, dropped "h" consonants, rhyming slang pacing, and bouncy working-class tavern rhythm.'
  },
  {
    id: 'en_gb_scots',
    name: 'Scottish English & Accent',
    flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    continent: 'Europe',
    regionGroup: 'English',
    description: 'Trilled "r" consonants, short crisp vowels, rhythmic highland/lowland lilt, and folk ballad resonance.'
  },
  {
    id: 'en_gb_irish',
    name: 'Irish English (Hiberno-English)',
    flag: '🇮🇪',
    continent: 'Europe',
    regionGroup: 'English',
    description: 'Lyrical sing-song lilt, aspirated "t/d" consonants, high melodic rises, and pub ballad storytelling rhythm.'
  },
  {
    id: 'en_gb_welsh',
    name: 'Welsh English',
    flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
    continent: 'Europe',
    regionGroup: 'English',
    description: 'Musical sing-song lilt, rolling "r"s, open resonant chest tone, and valley choral harmony.'
  },
  {
    id: 'en_nz',
    name: 'New Zealand English (Kiwi)',
    flag: '🇳🇿',
    continent: 'Oceania',
    regionGroup: 'English',
    description: 'Short "i" vowel shift ("fush and chips"), gentle Maori loanword lilt, and relaxed Pacific island pace.'
  },
  {
    id: 'en_za',
    name: 'South African English',
    flag: '🇿🇦',
    continent: 'Africa',
    regionGroup: 'English',
    description: 'Clipped consonants, distinct Afrikaans-influenced vowels, local slang, and high energy acoustic drive.'
  },
  {
    id: 'en_in',
    name: 'Indian English',
    flag: '🇮🇳',
    continent: 'Asia',
    regionGroup: 'English',
    description: 'Retroflex consonants, syllable-timed rhythm, distinctive subcontinental cadence, and expressive phrasing.'
  },
  {
    id: 'en_jm',
    name: 'Jamaican English & Patois',
    flag: '🇯🇲',
    continent: 'Caribbean',
    regionGroup: 'English',
    description: 'Rhythmic Caribbean lilt, double modifiers, reggae/roots vocal cadence, and vibrant island patois.'
  },
  {
    id: 'en_ng',
    name: 'Nigerian English & Pidgin',
    flag: '🇳🇬',
    continent: 'Africa',
    regionGroup: 'English',
    description: 'High tonal inflection, expressive West African pidgin idioms, afrobeats bounce, and dynamic storytelling.'
  },
  {
    id: 'en_sg',
    name: 'Singaporean English (Singlish)',
    flag: '🇸🇬',
    continent: 'Asia',
    regionGroup: 'English',
    description: 'Colloquial blend with Hokkien/Malay discourse particles ("lah", "leh", "lor") and rapid rhythmic delivery.'
  },
  {
    id: 'en_mle',
    name: 'London Street English (MLE)',
    flag: '🇬🇧',
    continent: 'Europe',
    regionGroup: 'English',
    description: 'Multicultural London youth street language with Afro-Caribbean, London Cockney, and South Asian cadences.'
  },
  {
    id: 'en_bb',
    name: 'Barbadian English (Bajan)',
    flag: '🇧🇧',
    continent: 'Caribbean',
    regionGroup: 'English',
    description: 'Glottalized Caribbean English with unique Bajan creole phrasing and Soca-infused vocal rhythm.'
  },

  // ==========================================
  // MAJOR LANGUAGE: FRENCH DIALECTS (13)
  // ==========================================
  {
    id: 'fr_std',
    name: 'Standard Parisian French',
    flag: '🇫🇷',
    continent: 'Europe',
    regionGroup: 'French',
    description: 'Standard metropolitan French pronunciation, uvular "r", nasal vowels, and elegant chanson phrasing.'
  },
  {
    id: 'fr_qc',
    name: 'Quebec French (Québécois)',
    flag: '🇨🇦',
    continent: 'North America',
    regionGroup: 'French',
    description: 'Canadian French dialect with distinct diphthongs, affricated "t/d", and rich folk ballad traditions.'
  },
  {
    id: 'fr_be',
    name: 'Belgian French (Belge)',
    flag: '🇧🇪',
    continent: 'Europe',
    regionGroup: 'French',
    description: 'Walloon French inflections, regional numbers ("septante", "nonante"), and soft guttural cabaret cadence.'
  },
  {
    id: 'fr_ch',
    name: 'Swiss French (Romand)',
    flag: '🇨🇭',
    continent: 'Europe',
    regionGroup: 'French',
    description: 'Slower rhythmic pace, unique numeral expressions, clean alpine clarity, and polite melodic tone.'
  },
  {
    id: 'fr_af',
    name: 'West African French',
    flag: '🇸🇳',
    continent: 'Africa',
    regionGroup: 'French',
    description: 'Vibrant rhythmic French spoken across Senegal, Ivory Coast, and Cameroon with open warm resonance.'
  },
  {
    id: 'fr_cajun',
    name: 'Louisiana Cajun French',
    flag: '🇺🇸',
    continent: 'North America',
    regionGroup: 'French',
    description: 'Bayou French dialect with English/Spanish blending, accordion folk rhythm, and swamp-pop soul.'
  },
  {
    id: 'fr_haiti',
    name: 'Haitian Creole (Kreyòl)',
    flag: '🇭🇹',
    continent: 'Caribbean',
    regionGroup: 'French',
    description: 'French-based creole with West African grammar, rhythmic island cadences, and carnival drum vitality.'
  },
  {
    id: 'fr_reunion',
    name: 'Reunion Creole (Kréol Réyoné)',
    flag: '🇷🇪',
    continent: 'Africa',
    regionGroup: 'French',
    description: 'Indian Ocean French creole with East African and Malagasy influences and maloya drum groove.'
  },
  {
    id: 'fr_mauritius',
    name: 'Mauritian Creole (Morisyen)',
    flag: '🇲🇺',
    continent: 'Africa',
    regionGroup: 'French',
    description: 'Vibrant island French creole with Indic and Portuguese loanwords and sega dance rhythm.'
  },
  {
    id: 'fr_acadien',
    name: 'Acadian French',
    flag: '🇨🇦',
    continent: 'North America',
    regionGroup: 'French',
    description: 'Maritime Canadian French preserving 17th-century regional features and maritime fiddle cadence.'
  },
  {
    id: 'fr_maroc',
    name: 'French-Moroccan Dialect (Franco-Marocain)',
    flag: '🇲🇦',
    continent: 'Africa',
    regionGroup: 'French',
    description: 'Blending French with Moroccan Darija Arabic slang, rhythmic ornamentation, and urban hip-hop style.'
  },
  {
    id: 'fr_verlan',
    name: 'Parisian Street French (Verlan & Argot)',
    flag: '🇫🇷',
    continent: 'Europe',
    regionGroup: 'French',
    description: 'Syllable-inverted youth argot with dynamic urban street slang and syncopated hip-hop flow.'
  },
  {
    id: 'fr_lux',
    name: 'Luxembourg French',
    flag: '🇱🇺',
    continent: 'Europe',
    regionGroup: 'French',
    description: 'Metropolitan French with German and Luxembourgish lexical influences and polite tri-lingual ease.'
  },

  // ==========================================
  // MAJOR LANGUAGE: SPANISH DIALECTS (13)
  // ==========================================
  {
    id: 'es_es',
    name: 'Peninsular Castilian Spanish',
    flag: '🇪🇸',
    continent: 'Europe',
    regionGroup: 'Spanish',
    description: 'Standard European Spanish with distinction ("z/ci/ce" as "th"), firm consonants, and flamenco passion.'
  },
  {
    id: 'es_mx',
    name: 'Mexican Spanish (Mexicano)',
    flag: '🇲🇽',
    continent: 'North America',
    regionGroup: 'Spanish',
    description: 'Clear central vowels, melodic intonation, widespread Latin American standard, and mariachi/ranchera soul.'
  },
  {
    id: 'es_ar',
    name: 'Argentine Spanish (Rioplatense)',
    flag: '🇦🇷',
    continent: 'South America',
    regionGroup: 'Spanish',
    description: 'Italianate sing-song cadence, use of "voseo", "sh" pronunciation of "ll/y", and tango dramatic passion.'
  },
  {
    id: 'es_co',
    name: 'Colombian Spanish (Bogotano)',
    flag: '🇨🇴,',
    continent: 'South America',
    regionGroup: 'Spanish',
    description: 'Clear articulation, formal syntax, melodious Andean/Caribbean variation, and vallenato warm rhythm.'
  },
  {
    id: 'es_car',
    name: 'Caribbean Spanish (Cuban / PR / DR)',
    flag: '🇨🇺',
    continent: 'Caribbean',
    regionGroup: 'Spanish',
    description: 'Rapid pace, aspirated "s" endings, rhythmic island vocal style, and salsa/reggaeton bounce.'
  },
  {
    id: 'es_chl',
    name: 'Chilean Spanish (Chileno)',
    flag: '🇨🇱',
    continent: 'South America',
    regionGroup: 'Spanish',
    description: 'Fast compressed speech, unique local slang (chilenismos), dropping final "s", and cueca rhythm.'
  },
  {
    id: 'es_pe',
    name: 'Andean Peruvian Spanish',
    flag: '🇵🇪',
    continent: 'South America',
    regionGroup: 'Spanish',
    description: 'Highland Peruvian Spanish with Quechua-influenced vocal intonations and panpipe acoustic clarity.'
  },
  {
    id: 'es_and',
    name: 'Andalusian Spanish',
    flag: '🇪🇸',
    continent: 'Europe',
    regionGroup: 'Spanish',
    description: 'Southern Spain dialect with seseo/ceceo, root of American Spanish phonetics, and raw cante jondo deep voice.'
  },
  {
    id: 'es_can',
    name: 'Canary Islands Spanish',
    flag: '🇮🇨',
    continent: 'Europe',
    regionGroup: 'Spanish',
    description: 'Atlantic Spanish dialect bridging Andalusian and Caribbean phonetics with timple island warmth.'
  },
  {
    id: 'es_mx_north',
    name: 'Northern Mexican (Norteño)',
    flag: '🇲🇽',
    continent: 'North America',
    regionGroup: 'Spanish',
    description: 'Direct ranchero cadence, strong consonants, accordion ballad phrasing, and corridos storytelling.'
  },
  {
    id: 'es_chavacano',
    name: 'Chavacano (Philippine Spanish Creole)',
    flag: '🇵🇭',
    continent: 'Asia',
    regionGroup: 'Spanish',
    description: 'Spanish-based creole of Zamboanga blended with Tagalog and Hiligaynon island cadences.'
  },
  {
    id: 'es_papiamento',
    name: 'Papiamento (Caribbean Creole)',
    flag: '🇦🇼',
    continent: 'Caribbean',
    regionGroup: 'Spanish',
    description: 'Aruba/Curaçao creole blending Spanish, Portuguese, Dutch, and Arawak with sun-soaked island rhythm.'
  },
  {
    id: 'es_ladino',
    name: 'Ladino (Judeo-Spanish)',
    flag: '🇮🇱',
    continent: 'Middle East',
    regionGroup: 'Spanish',
    description: 'Archaic 15th-century Castilian preserved by Sephardic communities, rich in acoustic romance lyrics.'
  },

  // ==========================================
  // MAJOR LANGUAGE: DUTCH & AFRIKAANS (SOUTH-AFRICAN!) (14)
  // ==========================================
  {
    id: 'af_za',
    name: 'Afrikaans (South-African!)',
    flag: '🇿🇦',
    continent: 'Africa',
    regionGroup: 'Dutch & Afrikaans (South-African!)',
    description: 'West Germanic language born in South Africa from 17th-century Dutch, with African and Malay roots, distinct clipped vowels and expressive idioms.'
  },
  {
    id: 'nl_std',
    name: 'Standard Netherlands Dutch (Nederlands)',
    flag: '🇳🇱',
    continent: 'Europe',
    regionGroup: 'Dutch & Afrikaans (South-African!)',
    description: 'Northern Standard Dutch with hard "G" (gg), clear dipthongs, direct storytelling, and nederpop melody.'
  },
  {
    id: 'nl_be',
    name: 'Flemish / Belgian Dutch (Vlaams)',
    flag: '🇧🇪',
    continent: 'Europe',
    regionGroup: 'Dutch & Afrikaans (South-African!)',
    description: 'Southern Dutch dialect with soft "G", polite "u" forms, Belgian vocabulary, and acoustic chanson warmth.'
  },
  {
    id: 'nl_surinamese',
    name: 'Surinamese Dutch (Surinaams-Nederlands)',
    flag: '🇸🇷',
    continent: 'South America',
    regionGroup: 'Dutch & Afrikaans (South-African!)',
    description: 'Suriname Dutch with melodic Sranan Tongo, Hindustani, and English inflections, kaseko rhythm, and tropical warmth.'
  },
  {
    id: 'nl_brabant',
    name: 'Brabantian (Brabants)',
    flag: '🇳🇱',
    continent: 'Europe',
    regionGroup: 'Dutch & Afrikaans (South-African!)',
    description: 'Warm southern dialect of North Brabant and Antwerp with soft "G", friendly lilt, and burgundian humor.'
  },
  {
    id: 'nl_limburg',
    name: 'Limburgish (Limburgs)',
    flag: '🇳🇱',
    continent: 'Europe',
    regionGroup: 'Dutch & Afrikaans (South-African!)',
    description: 'Tonal Germanic language spoken in Limburg with melodic pitch contours and rich carnival song tradition.'
  },
  {
    id: 'nl_zeeland',
    name: 'Zeelandic (Zeeuws)',
    flag: '🇳🇱',
    continent: 'Europe',
    regionGroup: 'Dutch & Afrikaans (South-African!)',
    description: 'Coastal dialect preserving medieval Dutch vowel patterns, maritime courage, and island storytelling.'
  },
  {
    id: 'nl_gronings',
    name: 'Gronings / Low Saxon (Gruns)',
    flag: '🇳🇱',
    continent: 'Europe',
    regionGroup: 'Dutch & Afrikaans (South-African!)',
    description: 'Northeastern Friso-Saxon dialect with shortened glottal endings and gritty North Sea acoustic folk flavor.'
  },
  {
    id: 'nl_hollandic',
    name: 'Hollandic (Amsterdams / Leids)',
    flag: '🇳🇱',
    continent: 'Europe',
    regionGroup: 'Dutch & Afrikaans (South-African!)',
    description: 'Urban western conurbation dialect with rolling "R", sharp comedic timing, and Jordan folk song soul.'
  },
  {
    id: 'nl_frisian_dutch',
    name: 'Frisian-Dutch Accent',
    flag: '🇳🇱',
    continent: 'Europe',
    regionGroup: 'Dutch & Afrikaans (South-African!)',
    description: 'Dutch spoken with West Frisian phonetic substrates, rural clarity, and open maritime singing resonance.'
  },
  {
    id: 'nl_denglish',
    name: 'Dutch-English (Denglish / Steenkolen)',
    flag: '🇳🇱',
    continent: 'Europe',
    regionGroup: 'Dutch & Afrikaans (South-African!)',
    description: 'English spoken with a thick Dutch accent, literal word-for-word translations, and charming directness.'
  },
  {
    id: 'nl_straattaal',
    name: 'Dutch Street Language (Straattaal / Moroccan-Dutch)',
    flag: '🇳🇱',
    continent: 'Europe',
    regionGroup: 'Dutch & Afrikaans (South-African!)',
    description: 'Urban youth street language mixing Dutch with Moroccan-Arabic slang ("wollah", "drerrie", "loesoe") and hip-hop beats.'
  },
  {
    id: 'nl_turkish_dutch',
    name: 'Dutch-Turkish Dialect',
    flag: '🇳🇱',
    continent: 'Europe',
    regionGroup: 'Dutch & Afrikaans (South-African!)',
    description: 'Colloquial Dutch with Turkish community phrasing, emotional interjections, and blended sentence patterns.'
  },
  {
    id: 'nl_papiamento_dutch',
    name: 'Dutch Caribbean Papiamento',
    flag: '🇨🇼',
    continent: 'Caribbean',
    regionGroup: 'Dutch & Afrikaans (South-African!)',
    description: 'Dutch creole blend spoken in Aruba, Bonaire, and Curaçao with tropical Caribbean acoustic charm.'
  },

  // ==========================================
  // MAJOR LANGUAGE: ITALIAN DIALECTS (12)
  // ==========================================
  {
    id: 'it_std',
    name: 'Standard Italian (Italiano)',
    flag: '🇮🇹',
    continent: 'Europe',
    regionGroup: 'Italian',
    description: 'Standard literary and spoken Italian based on Tuscan roots, open vowels, and operatic cantabile resonance.'
  },
  {
    id: 'it_tuscan',
    name: 'Tuscan Italian (Toscano)',
    flag: '🇮🇹',
    continent: 'Europe',
    regionGroup: 'Italian',
    description: 'Historic central dialect of Florence and Siena with aspirated "c" ("gorgia toscana") and classical poetry.'
  },
  {
    id: 'it_neapolitan',
    name: 'Neapolitan (Nnapulitano)',
    flag: '🇮🇹',
    continent: 'Europe',
    regionGroup: 'Italian',
    description: 'Vibrant Romance language of Naples, rich in opera, mandolin folk song, passionate drama, and soul.'
  },
  {
    id: 'it_sicilian',
    name: 'Sicilian (Sicilianu)',
    flag: '🇮🇹',
    continent: 'Europe',
    regionGroup: 'Italian',
    description: 'Distinct island language of Sicily with Arabic, Greek, and Norman influences and dramatic folk intensity.'
  },
  {
    id: 'it_venetian',
    name: 'Venetian (Veneto)',
    flag: '🇮🇹',
    continent: 'Europe',
    regionGroup: 'Italian',
    description: 'Lyrical Romance language of Venice and Veneto with smooth liquid "l" and gondolier barcarolle lilt.'
  },
  {
    id: 'it_romanesco',
    name: 'Romanesco (Central Roman)',
    flag: '🇮🇹',
    continent: 'Europe',
    regionGroup: 'Italian',
    description: 'Dialect of Rome, direct and expressive with rich comedic theater tradition and stornelli folk songs.'
  },
  {
    id: 'it_lombard',
    name: 'Lombard (Lumbard)',
    flag: '🇮🇹',
    continent: 'Europe',
    regionGroup: 'Italian',
    description: 'Gallo-Italic language of Milan and Lombardy with French-like front vowels and alpine industrial pace.'
  },
  {
    id: 'it_ligurian',
    name: 'Ligurian (Ligure / Genoese)',
    flag: '🇮🇹',
    continent: 'Europe',
    regionGroup: 'Italian',
    description: 'Coastal Romance language of Genoa and Riviera with maritime vocabulary and acoustic singer-songwriter soul.'
  },
  {
    id: 'it_sardinian',
    name: 'Sardinian (Sardu)',
    flag: '🇮🇹',
    continent: 'Europe',
    regionGroup: 'Italian',
    description: 'Highly archaic independent Romance language preserving Classical Latin features and tenores guttural choir.'
  },
  {
    id: 'it_piedmontese',
    name: 'Piedmontese (Piemontèis)',
    flag: '🇮🇹',
    continent: 'Europe',
    regionGroup: 'Italian',
    description: 'Northwestern Italian language with strong Provençal French affinities and alpine acoustic charm.'
  },
  {
    id: 'it_swiss',
    name: 'Swiss Italian (Ticinese)',
    flag: '🇨🇭',
    continent: 'Europe',
    regionGroup: 'Italian',
    description: 'Italian spoken in Ticino, Switzerland with unique administrative terms and alpine clarity.'
  },
  {
    id: 'it_corsican',
    name: 'Corsican (Corsu)',
    flag: '🇫🇷',
    continent: 'Europe',
    regionGroup: 'Italian',
    description: 'Insular Romance language closely allied to Tuscan Italian with polyphonic paghjella singing traditions.'
  },

  // ==========================================
  // MAJOR LANGUAGE: GERMAN DIALECTS (12)
  // ==========================================
  {
    id: 'de_std',
    name: 'Standard High German (Hochdeutsch)',
    flag: '🇩🇪',
    continent: 'Europe',
    regionGroup: 'German',
    description: 'Standard High German of Germany with clean glottal attacks (Knacklaut), crisp consonants, and power.'
  },
  {
    id: 'de_at',
    name: 'Austrian German (Österreichisch)',
    flag: '🇦🇹',
    continent: 'Europe',
    regionGroup: 'German',
    description: 'Viennese and Alpine German with soft vowels, Austrian vocabulary, and waltz melodic charm.'
  },
  {
    id: 'de_ch',
    name: 'Swiss High German (Schweizerdeutsch)',
    flag: '🇨🇭',
    continent: 'Europe',
    regionGroup: 'German',
    description: 'Alemannic German with harsh guttural "ch", distinct rhythm, no "ß", and alpine folk energy.'
  },
  {
    id: 'de_bavarian',
    name: 'Bavarian German (Boarisch)',
    flag: '🇩🇪',
    continent: 'Europe',
    regionGroup: 'German',
    description: 'Austro-Bavarian dialect group of Munich and Alpine regions with yodel breaks and brass band vigor.'
  },
  {
    id: 'de_swabian',
    name: 'Swabian German (Schwäbisch)',
    flag: '🇩🇪',
    continent: 'Europe',
    regionGroup: 'German',
    description: 'High German dialect of Stuttgart and Black Forest with diminutive "-le" and warm acoustic storytelling.'
  },
  {
    id: 'de_kolsch',
    name: 'Kölsch (Colognian)',
    flag: '🇩🇪',
    continent: 'Europe',
    regionGroup: 'German',
    description: 'Ripuarian dialect of Cologne with distinct "g" -> "j" shifts and carnival rock singalong joy.'
  },
  {
    id: 'de_low',
    name: 'Low German (Plattdeutsch)',
    flag: '🇩🇪',
    continent: 'Europe',
    regionGroup: 'German',
    description: 'Northern Coastal German closely allied to Dutch and Old English with sea-shanty maritime soul.'
  },
  {
    id: 'de_saxon',
    name: 'Upper Saxon (Sächsisch)',
    flag: '🇩🇪',
    continent: 'Europe',
    regionGroup: 'German',
    description: 'East Central German dialect of Leipzig and Dresden with soft consonants and melodic humor.'
  },
  {
    id: 'de_pennsylvania',
    name: 'Pennsylvania Dutch / German',
    flag: '🇺🇸',
    continent: 'North America',
    regionGroup: 'German',
    description: 'Traditional Palatine German dialect spoken by Amish in North America with acoustic hymn pacing.'
  },
  {
    id: 'de_yiddish',
    name: 'Yiddish (Jiddish / ייִדיש)',
    flag: '🇪🇺',
    continent: 'Europe',
    regionGroup: 'German',
    description: 'Historical Ashkenazi Jewish West Germanic language with Hebrew elements and klezmer vocal soul.'
  },
  {
    id: 'de_kiez',
    name: 'German-Turkish Dialect (Kiezdeutsch)',
    flag: '🇩🇪',
    continent: 'Europe',
    regionGroup: 'German',
    description: 'Urban Berlin youth street dialect with Turkish grammatical features and rap flow rhythm.'
  },
  {
    id: 'de_moroccan_german',
    name: 'German-Moroccan Youth Dialect',
    flag: '🇩🇪',
    continent: 'Europe',
    regionGroup: 'German',
    description: 'Colloquial German mixed with Moroccan-Arabic expressions, slang, and urban street style.'
  },

  // ==========================================
  // MAJOR LANGUAGE: ARABIC & FARSI (11)
  // ==========================================
  {
    id: 'ar_fusha',
    name: 'Modern Standard Arabic (Fusha)',
    flag: '🇸🇦',
    continent: 'Middle East',
    regionGroup: 'Arabic & Farsi',
    description: 'Literary Arabic used across news, literature, and formal broadcasting with classical maqam resonance.'
  },
  {
    id: 'ar_masri',
    name: 'Egyptian Arabic (Masri)',
    flag: '🇪🇬',
    continent: 'Africa',
    regionGroup: 'Arabic & Farsi',
    description: 'Most widely understood dialect of the Arab world, centered in Cairo, rich in cinema, pop, and vocal ornamentation.'
  },
  {
    id: 'ar_levantine',
    name: 'Levantine Arabic (Shami)',
    flag: '🇱🇧',
    continent: 'Middle East',
    regionGroup: 'Arabic & Farsi',
    description: 'Melodic dialect of Lebanon, Syria, Jordan, and Palestine with romantic lilt and dabke dance rhythm.'
  },
  {
    id: 'ar_gulf',
    name: 'Gulf Arabic (Khaliji)',
    flag: '🇦🇪',
    continent: 'Middle East',
    regionGroup: 'Arabic & Farsi',
    description: 'Dialect of the Arabian Gulf, Bedouin roots, poetic meter, and Oud-driven acoustic cadence.'
  },
  {
    id: 'ar_darija',
    name: 'Moroccan Arabic (Darija)',
    flag: '🇲🇦',
    continent: 'Africa',
    regionGroup: 'Arabic & Farsi',
    description: 'Vibrant Maghrebi dialect heavily influenced by Amazigh, French, and Spanish with gnawa drum bounce.'
  },
  {
    id: 'ar_iraqi',
    name: 'Iraqi Arabic (Mesopotamian)',
    flag: '🇮🇶',
    continent: 'Middle East',
    regionGroup: 'Arabic & Farsi',
    description: 'Ancient dialect of Baghdad and Tigris-Euphrates valley with deep emotional mawwal singing.'
  },
  {
    id: 'ar_sudanese',
    name: 'Sudanese Arabic',
    flag: '🇸🇩',
    continent: 'Africa',
    regionGroup: 'Arabic & Farsi',
    description: 'Nile Valley Arabic preserving archaic classical features and pentatonic Nile beat rhythm.'
  },
  {
    id: 'fa_iran',
    name: 'Persian / Farsi (فارسی)',
    flag: '🇮🇷',
    continent: 'Middle East',
    regionGroup: 'Arabic & Farsi',
    description: 'Poetic language of Iran, soft lyrical vowels, rich literary history, and radif vocal ornamentation.'
  },
  {
    id: 'fa_dari',
    name: 'Dari Persian (Afghan Farsi)',
    flag: '🇦🇫',
    continent: 'Asia',
    regionGroup: 'Arabic & Farsi',
    description: 'Official register of Persian spoken across Afghanistan with ancient rubab acoustic accompaniment.'
  },
  {
    id: 'fa_tajik',
    name: 'Tajik Persian (Tojiki)',
    flag: '🇹🇯',
    continent: 'Asia',
    regionGroup: 'Arabic & Farsi',
    description: 'Central Asian Persian register written in Cyrillic script with Pamir mountain folk melodies.'
  },
  {
    id: 'ar_maghrebi_street',
    name: 'Maghrebi Street Slang (Derb)',
    flag: '🇲🇦',
    continent: 'Africa',
    regionGroup: 'Arabic & Farsi',
    description: 'Casablanca and Maghreb street slang mixing Darija, French, and Amazigh in urban rap style.'
  },

  // ==========================================
  // MAJOR LANGUAGE: SCANDINAVIAN (10)
  // ==========================================
  {
    id: 'sv_se',
    name: 'Standard Swedish (Svenska)',
    flag: '🇸🇪',
    continent: 'Europe',
    regionGroup: 'Scandinavian Languages',
    description: 'Standard pitch-accented Swedish of Stockholm and Central Sweden with pop melodic clarity.'
  },
  {
    id: 'da_dk',
    name: 'Danish (Dansk)',
    flag: '🇩🇰',
    continent: 'Europe',
    regionGroup: 'Scandinavian Languages',
    description: 'Standard Danish with glottal stop ("stød"), soft consonants, and intimate Nordic acoustic tone.'
  },
  {
    id: 'no_bokmal',
    name: 'Norwegian Bokmål',
    flag: '🇳🇴',
    continent: 'Europe',
    regionGroup: 'Scandinavian Languages',
    description: 'Standard urban Norwegian based on historical Dano-Norwegian with sing-song pitch accent.'
  },
  {
    id: 'no_nynorsk',
    name: 'Norwegian Nynorsk',
    flag: '🇳🇴',
    continent: 'Europe',
    regionGroup: 'Scandinavian Languages',
    description: 'Standard Norwegian derived from traditional fjord and rural dialects with acoustic folk soul.'
  },
  {
    id: 'is_is',
    name: 'Icelandic (Íslenska)',
    flag: '🇮🇸',
    continent: 'Europe',
    regionGroup: 'Scandinavian Languages',
    description: 'Archaic North Germanic language preserving Viking grammar and ethereal volcanic soundscapes.'
  },
  {
    id: 'fo_fo',
    name: 'Faroese (Føroyskt)',
    flag: '🇫🇴',
    continent: 'Europe',
    regionGroup: 'Scandinavian Languages',
    description: 'Insular North Germanic language of the Faroe Islands related to Old Norse with ballad dance lilt.'
  },
  {
    id: 'sv_fi',
    name: 'Finland Swedish (Finlandssvenska)',
    flag: '🇫🇮',
    continent: 'Europe',
    regionGroup: 'Scandinavian Languages',
    description: 'Dialect spoken by Swedish Finns, with flat pitch accent, clear vowels, and Baltic clarity.'
  },
  {
    id: 'sv_elfdalian',
    name: 'Elfdalian (Övdalsk)',
    flag: '🇸🇪',
    continent: 'Europe',
    regionGroup: 'Scandinavian Languages',
    description: 'Isolated forest language of Dalarna preserving Old Norse nasal vowels and ancient rune songs.'
  },
  {
    id: 'da_scanian',
    name: 'Scanian (Skånsk)',
    flag: '🇸🇪',
    continent: 'Europe',
    regionGroup: 'Scandinavian Languages',
    description: 'Southern Swedish dialect with deep historical Danish phonetic influences and diphthongs.'
  },
  {
    id: 'no_old_norse',
    name: 'Old Norse (Norrœnt)',
    flag: '🇳🇴',
    continent: 'Europe',
    regionGroup: 'Scandinavian Languages',
    description: 'Historical parent language of the Vikings and medieval sagas with dramatic acoustic chants.'
  },

  // ==========================================
  // MAJOR LANGUAGE: SLAVIC LANGUAGES (10)
  // ==========================================
  {
    id: 'pl_pl',
    name: 'Polish (Polski)',
    flag: '🇵🇱',
    continent: 'Europe',
    regionGroup: 'Slavic Languages',
    description: 'West Slavic language with rich sibilants ("sz/cz/ż"), nasal vowels "ą/ę", and mazurka folk rhythm.'
  },
  {
    id: 'cs_cz',
    name: 'Czech (Čeština)',
    flag: '🇨🇿',
    continent: 'Europe',
    regionGroup: 'Slavic Languages',
    description: 'West Slavic language with raised trilled "ř", pitch accent, Bohemian cadence, and polka energy.'
  },
  {
    id: 'sk_sk',
    name: 'Slovak (Slovenčina)',
    flag: '🇸🇰',
    continent: 'Europe',
    regionGroup: 'Slavic Languages',
    description: 'Central West Slavic language bridging Czech and South Slavic phonetics with Tatra mountain songs.'
  },
  {
    id: 'uk_ua',
    name: 'Ukrainian (Українська)',
    flag: '🇺🇦',
    continent: 'Europe',
    regionGroup: 'Slavic Languages',
    description: 'East Slavic language with soft vowels, melodic cadence, bandura accompaniment, and rich folklore.'
  },
  {
    id: 'ru_ru',
    name: 'Russian (Русский)',
    flag: '🇷🇺',
    continent: 'Europe',
    regionGroup: 'Slavic Languages',
    description: 'East Slavic language with palatalized consonants, reduction of unstressed "o", and deep choral resonance.'
  },
  {
    id: 'be_by',
    name: 'Belarusian (Беларуская)',
    flag: '🇧🇾',
    continent: 'Europe',
    regionGroup: 'Slavic Languages',
    description: 'East Slavic language of Belarus with distinct "dź/ć" soft consonant shifts and Kupala folk songs.'
  },
  {
    id: 'sh_yu',
    name: 'Serbo-Croatian (Bosnian/Croatian/Serbian)',
    flag: '🇷🇸',
    continent: 'Europe',
    regionGroup: 'Slavic Languages',
    description: 'South Slavic pluricentric language with pitch accent, clear vowel system, and Balkan brass drive.'
  },
  {
    id: 'bg_bg',
    name: 'Bulgarian (Български)',
    flag: '🇧🇬',
    continent: 'Europe',
    regionGroup: 'Slavic Languages',
    description: 'South Slavic language with analytic grammar, unique "ъ" vowel sound, and open-throat vocal choir.'
  },
  {
    id: 'sl_si',
    name: 'Slovene (Slovenščina)',
    flag: '🇸🇮',
    continent: 'Europe',
    regionGroup: 'Slavic Languages',
    description: 'South Slavic language preserving dual grammatical number and alpine melodies.'
  },
  {
    id: 'mk_mk',
    name: 'Macedonian (Македонски)',
    flag: '🇲🇰',
    continent: 'Europe',
    regionGroup: 'Slavic Languages',
    description: 'South Slavic language with antepenultimate stress, 7/8 time signature rhythms, and Balkan soul.'
  },

  // ==========================================
  // MAJOR LANGUAGE: CELTIC LANGUAGES (10)
  // ==========================================
  {
    id: 'ga_ie',
    name: 'Irish Gaelic (Gaeilge)',
    flag: '🇮🇪',
    continent: 'Europe',
    regionGroup: 'Celtic Languages',
    description: 'National Celtic language of Ireland with initial consonant mutations and Sean-nós ornamentations.'
  },
  {
    id: 'gd_gb',
    name: 'Scottish Gaelic (Gàidhlig)',
    flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    continent: 'Europe',
    regionGroup: 'Celtic Languages',
    description: 'Highland Celtic language with pre-aspiration, puirt à beul mouth music, and Gaelic song repertoire.'
  },
  {
    id: 'cy_gb',
    name: 'Welsh (Cymraeg)',
    flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿',
    continent: 'Europe',
    regionGroup: 'Celtic Languages',
    description: 'Brythonic Celtic language of Wales with voiceless "ll" and fluid vocal mutation in choral harmony.'
  },
  {
    id: 'kw_gb',
    name: 'Cornish (Kernowek)',
    flag: '🇬🇧',
    continent: 'Europe',
    regionGroup: 'Celtic Languages',
    description: 'Revived Brythonic Celtic tongue of Cornwall in southwestern Britain with coastal folk lilt.'
  },
  {
    id: 'br_fr',
    name: 'Breton (Brezhoneg)',
    flag: '🇫🇷',
    continent: 'Europe',
    regionGroup: 'Celtic Languages',
    description: 'Celtic language spoken in Brittany, northwestern France, with fest-noz dance call-and-response.'
  },
  {
    id: 'gv_im',
    name: 'Manx Gaelic (Gaelg)',
    flag: '🇮🇲',
    continent: 'Europe',
    regionGroup: 'Celtic Languages',
    description: 'Insular Celtic language of the Isle of Man with maritime acoustic ballad traditions.'
  },
  {
    id: 'ga_munster',
    name: 'Munster Irish (Gaeilge na Mumhan)',
    flag: '🇮🇪',
    continent: 'Europe',
    regionGroup: 'Celtic Languages',
    description: 'Southern Irish Gaelic dialect group with distinct stress patterns and Kerry fiddle lilt.'
  },
  {
    id: 'ga_connacht',
    name: 'Connacht Irish (Gaeilge Chonnacht)',
    flag: '🇮🇪',
    continent: 'Europe',
    regionGroup: 'Celtic Languages',
    description: 'Western Irish dialect of Galway and Connemara Gaeltacht areas with pure acoustic clarity.'
  },
  {
    id: 'gd_hebrides',
    name: 'Hebridean Gaelic',
    flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    continent: 'Europe',
    regionGroup: 'Celtic Languages',
    description: 'Outer Hebrides Gaelic standard with pristine oral waulking song traditions.'
  },
  {
    id: 'gd_nova_scotia',
    name: 'Canadian Gaelic (Cape Breton)',
    flag: '🇨🇦',
    continent: 'North America',
    regionGroup: 'Celtic Languages',
    description: 'Historic Canadian branch of Scottish Gaelic preserved in Nova Scotia with Cape Breton stepdance.'
  },

  // ==========================================
  // MAJOR LANGUAGE: ASIAN LANGUAGES (11)
  // ==========================================
  {
    id: 'ja_jp',
    name: 'Japanese (Nihongo)',
    flag: '🇯🇵',
    continent: 'Asia',
    regionGroup: 'Asian Languages',
    description: 'Standard Tokyo pitch-accent Japanese, mora-timed rhythm, melodic clarity, and Enka/J-Pop resonance.'
  },
  {
    id: 'zh_mandarin',
    name: 'Mandarin Chinese (Putonghua)',
    flag: '🇨🇳',
    continent: 'Asia',
    regionGroup: 'Asian Languages',
    description: 'Standard four-tone spoken Chinese of Beijing and Mainland China with poetic phrasing and erhu lilt.'
  },
  {
    id: 'zh_cantonese',
    name: 'Cantonese Chinese (Yue)',
    flag: '🇭🇰',
    continent: 'Asia',
    regionGroup: 'Asian Languages',
    description: 'Nine-tone vibrant Chinese language of Hong Kong, Macau, and Guangdong with Cantopop dramatic melody.'
  },
  {
    id: 'ko_kr',
    name: 'Korean (Hangugeo)',
    flag: '🇰🇷',
    continent: 'Asia',
    regionGroup: 'Asian Languages',
    description: 'Syllable-timed Korean with honorific registers, expressive vocal dynamics, and Pansori/K-Pop soul.'
  },
  {
    id: 'vi_vn',
    name: 'Vietnamese (Tiếng Việt)',
    flag: '🇻🇳',
    continent: 'Asia',
    regionGroup: 'Asian Languages',
    description: 'Six-tone Austroasiatic language with northern, central, and southern vocal styles and Dan Tranh acoustic lilt.'
  },
  {
    id: 'th_th',
    name: 'Thai (Phasa Thai)',
    flag: '🇹🇭',
    continent: 'Asia',
    regionGroup: 'Asian Languages',
    description: 'Five-tone Tai-Kadai language of Thailand with fluid melodic curves and Isan Luk Thung folk bounce.'
  },
  {
    id: 'hi_in',
    name: 'Hindi (Mānak Hindī)',
    flag: '🇮🇳',
    continent: 'Asia',
    regionGroup: 'Asian Languages',
    description: 'Standard Indo-Aryan register of Hindustani with aspirated consonants, classical raga, and Bollywood passion.'
  },
  {
    id: 'bn_bd',
    name: 'Bengali / Bangla',
    flag: '🇧🇩',
    continent: 'Asia',
    regionGroup: 'Asian Languages',
    description: 'Rich Eastern Indo-Aryan language of Rabindranath Tagore and Bangladesh with Baul folk soul.'
  },
  {
    id: 'tl_ph',
    name: 'Tagalog / Filipino',
    flag: '🇵🇭',
    continent: 'Asia',
    regionGroup: 'Asian Languages',
    description: 'Austronesian language with Spanish loanwords, Taglish urban phrasing, and OPM ballad vocal power.'
  },
  {
    id: 'id_id',
    name: 'Indonesian (Bahasa Indonesia)',
    flag: '🇮🇩',
    continent: 'Asia',
    regionGroup: 'Asian Languages',
    description: 'Standard Austronesian lingua franca of the Indonesian archipelago with gamelan acoustic harmony.'
  },
  {
    id: 'mn_mn',
    name: 'Mongolian (Mongol Khele)',
    flag: '🇲🇳',
    continent: 'Asia',
    regionGroup: 'Asian Languages',
    description: 'Steppe Mongolian with throat-singing harmonics (Khoomei), Morin Khuur bowed cello, and nomadic epic rhythm.'
  },

  // ==========================================
  // MAJOR LANGUAGE: AUSTRALIAN & PACIFIC (11)
  // ==========================================
  {
    id: 'mi_nz',
    name: 'Māori (Te Reo Māori)',
    flag: '🇳🇿',
    continent: 'Oceania',
    regionGroup: 'Australian & Pacific Languages',
    description: 'Polynesian language of New Zealand with rhythmic haka and waiata chants and open acoustic resonance.'
  },
  {
    id: 'pnt_au',
    name: 'Pitjantjatjara / Anangu',
    flag: '🇦🇺',
    continent: 'Oceania',
    regionGroup: 'Australian & Pacific Languages',
    description: 'Aboriginal language of Central Australia and Uluru region with didgeridoo (Yidaki) ground drones.'
  },
  {
    id: 'wri_au',
    name: 'Warlpiri',
    flag: '🇦🇺',
    continent: 'Oceania',
    regionGroup: 'Australian & Pacific Languages',
    description: 'Aboriginal language of Tanami Desert in Northern Territory with clapping stick storytelling rhythm.'
  },
  {
    id: 'en_aboriginal',
    name: 'Aboriginal English',
    flag: '🇦🇺',
    continent: 'Oceania',
    regionGroup: 'Australian & Pacific Languages',
    description: 'Indigenous Australian English dialect blending native language cadences and desert folk storytelling.'
  },
  {
    id: 'yom_au',
    name: 'Yolngu Matha',
    flag: '🇦🇺',
    continent: 'Oceania',
    regionGroup: 'Australian & Pacific Languages',
    description: 'Arnhem Land Aboriginal language group of Northern Australia with ancient songline vocal cycles.'
  },
  {
    id: 'arr_au',
    name: 'Arrernte (Mparntwe)',
    flag: '🇦🇺',
    continent: 'Oceania',
    regionGroup: 'Australian & Pacific Languages',
    description: 'Central Australian language spoken around Alice Springs with desert choir harmony.'
  },
  {
    id: 'tiw_au',
    name: 'Tiwi',
    flag: '🇦🇺',
    continent: 'Oceania',
    regionGroup: 'Australian & Pacific Languages',
    description: 'Polysynthetic language isolated on the Tiwi Islands with unique ceremonial vocal chants.'
  },
  {
    id: 'noo_au',
    name: 'Noongar (Nyungar)',
    flag: '🇦🇺',
    continent: 'Oceania',
    regionGroup: 'Australian & Pacific Languages',
    description: 'Aboriginal language of Southwest Western Australia with acoustic bushland poetry.'
  },
  {
    id: 'tst_au',
    name: 'Torres Strait Creole',
    flag: '🇦🇺',
    continent: 'Oceania',
    regionGroup: 'Australian & Pacific Languages',
    description: 'English-based creole of the Torres Strait Islands with island drum beat and choral singing.'
  },
  {
    id: 'haw_us',
    name: 'Hawaiian (ʻŌlelo Hawaiʻi)',
    flag: '🇺🇸',
    continent: 'Oceania',
    regionGroup: 'Australian & Pacific Languages',
    description: 'Melodic Polynesian language of Hawaii with glottal stops ("okina"), slack-key guitar, and ukulele lilt.'
  },
  {
    id: 'tahitian',
    name: 'Tahitian & Marquesan',
    flag: '🇵🇫',
    continent: 'Oceania',
    regionGroup: 'Australian & Pacific Languages',
    description: 'Oceanic Polynesian language with warm open vowels, ukulele rhythms, and reef acoustic warmth.'
  },

  // ==========================================
  // MAJOR LANGUAGE: NATIVE AMERICAN LANGUAGES (10)
  // ==========================================
  {
    id: 'nv_us',
    name: 'Navajo (Diné bizaad)',
    flag: '🇺🇸',
    continent: 'North America',
    regionGroup: 'Native American Languages',
    description: 'Athabaskan language with tonal system, glottal stops, and cedar flute acoustic vocal resonance.'
  },
  {
    id: 'chr_us',
    name: 'Cherokee (Tsalagi)',
    flag: '🇺🇸',
    continent: 'North America',
    regionGroup: 'Native American Languages',
    description: 'Iroquoian language written in Sequoyah\'s unique syllabary with ceremonial hand-drum cadence.'
  },
  {
    id: 'qu_pe',
    name: 'Quechua (Runasimi)',
    flag: '🇵🇪',
    continent: 'South America',
    regionGroup: 'Native American Languages',
    description: 'Highland Andean indigenous language family of the Inca Empire with charango and quena flute lilt.'
  },
  {
    id: 'nah_mx',
    name: 'Nahuatl (Aztec)',
    flag: '🇲🇽',
    continent: 'North America',
    regionGroup: 'Native American Languages',
    description: 'Uto-Aztecan language of Central Mexico with "tl" affricates and ancient teponaztli drum poetry.'
  },
  {
    id: 'gn_py',
    name: 'Guarani (Avañe\'ẽ)',
    flag: '🇵🇾',
    continent: 'South America',
    regionGroup: 'Native American Languages',
    description: 'Co-official indigenous language of Paraguay with nasal harmony and Paraguayan harp accompaniment.'
  },
  {
    id: 'yua_mx',
    name: 'Yucatec Maya (Maaya t\'aan)',
    flag: '🇲🇽',
    continent: 'North America',
    regionGroup: 'Native American Languages',
    description: 'Mayan language of the Yucatán Peninsula with glottalized consonants and jungle flute acoustics.'
  },
  {
    id: 'oji_ca',
    name: 'Ojibwe (Anishinaabemowin)',
    flag: '🇨🇦',
    continent: 'North America',
    regionGroup: 'Native American Languages',
    description: 'Algonquian language family of the Great Lakes region with powwow drum and water-drum singing.'
  },
  {
    id: 'iu_ca',
    name: 'Inuktitut (ᐃᓄᒃᑎᑐᑦ)',
    flag: '🇨🇦',
    continent: 'North America',
    regionGroup: 'Native American Languages',
    description: 'Arctic Inuit language with polysynthetic word structures and traditional Katajjaq throat singing.'
  },
  {
    id: 'arn_cl',
    name: 'Mapudungun (Mapuche)',
    flag: '🇨🇱',
    continent: 'South America',
    regionGroup: 'Native American Languages',
    description: 'Language isolate of the Mapuche people in Southern Chile with cultrun drum rhythm.'
  },
  {
    id: 'lkt_us',
    name: 'Lakota (Lakhol\'iyapi)',
    flag: '🇺🇸',
    continent: 'North America',
    regionGroup: 'Native American Languages',
    description: 'Siouan language of the Great Plains with guttural stops, honor songs, and Plains flute soul.'
  },

  // ==========================================
  // MAJOR LANGUAGE: FRISIAN LANGUAGES (10)
  // ==========================================
  {
    id: 'fy_nl',
    name: 'West Frisian (Westerlauwers Frysk)',
    flag: '🇳🇱',
    continent: 'Europe',
    regionGroup: 'Frisian Languages',
    description: 'Official Frisian language of Fryslân province, Netherlands, with rich maritime folk song tradition.'
  },
  {
    id: 'frs_de',
    name: 'Saterland Frisian (Seeltersk)',
    flag: '🇩🇪',
    continent: 'Europe',
    regionGroup: 'Frisian Languages',
    description: 'Last surviving dialect of East Frisian spoken in Saterland, Germany, with rural bogland acoustic clarity.'
  },
  {
    id: 'frr_de',
    name: 'North Frisian (Nordfriisk)',
    flag: '🇩🇪',
    continent: 'Europe',
    regionGroup: 'Frisian Languages',
    description: 'Insular and mainland North Frisian dialects of Schleswig-Holstein with North Sea coastal lilt.'
  },
  {
    id: 'fy_hin',
    name: 'Hindeloopen Frisian (Hylpers)',
    flag: '🇳🇱',
    continent: 'Europe',
    regionGroup: 'Frisian Languages',
    description: 'Highly archaic maritime Frisian dialect of Hindeloopen port preserving 16th-century sea terms.'
  },
  {
    id: 'fy_sch',
    name: 'Schiermonnikoog Frisian (Sgiers)',
    flag: '🇳🇱',
    continent: 'Europe',
    regionGroup: 'Frisian Languages',
    description: 'Isolated barrier island Frisian dialect with quiet dune storytelling rhythm.'
  },
  {
    id: 'fy_ter',
    name: 'Terschelling Frisian (Westers)',
    flag: '🇳🇱',
    continent: 'Europe',
    regionGroup: 'Frisian Languages',
    description: 'Frisian dialect of western Terschelling shore with accordion ballad lilt.'
  },
  {
    id: 'fy_fer',
    name: 'Föhr-Amrum Frisian (Fering)',
    flag: '🇩🇪',
    continent: 'Europe',
    regionGroup: 'Frisian Languages',
    description: 'Island North Frisian dialect of Föhr and Amrum with whaling captain song history.'
  },
  {
    id: 'fy_sol',
    name: 'Sylt Frisian (Sölring)',
    flag: '🇩🇪',
    continent: 'Europe',
    regionGroup: 'Frisian Languages',
    description: 'North Frisian dialect of Sylt island with Danish phonetic influences.'
  },
  {
    id: 'fy_hal',
    name: 'Halligen Frisian (Halifreesk)',
    flag: '🇩🇪',
    continent: 'Europe',
    regionGroup: 'Frisian Languages',
    description: 'Tidal islet Frisian dialect of the Halligen islands with storm-wind acoustic intensity.'
  },
  {
    id: 'fy_wie',
    name: 'Wiedingharde Frisian (Wiringhiirder)',
    flag: '🇩🇪',
    continent: 'Europe',
    regionGroup: 'Frisian Languages',
    description: 'Mainland North Frisian border dialect preserving archaic Germanic vowel sounds.'
  },

  // ==========================================
  // MAJOR LANGUAGE: CLASSICAL & ANCIENT (11)
  // ==========================================
  {
    id: 'la_cl',
    name: 'Classical Latin (Latina Classica)',
    flag: '🏛️',
    continent: 'Historical',
    regionGroup: 'Classical & Ancient Languages',
    description: 'Reconstructed pronunciation of Cicero, Caesar, and Virgil with heroic acoustic meter.'
  },
  {
    id: 'la_ec',
    name: 'Ecclesiastical Latin (Latina Ecclesiastica)',
    flag: '⛪',
    continent: 'Historical',
    regionGroup: 'Classical & Ancient Languages',
    description: 'Liturgical Latin traditionally used in religion, Gregorian chant, and cathedral choir music.'
  },
  {
    id: 'grc_cl',
    name: 'Classical Attic Greek',
    flag: '🏛️',
    continent: 'Historical',
    regionGroup: 'Classical & Ancient Languages',
    description: 'Ancient Greek dialect of Athens used in classical philosophy, drama, and epic poetry.'
  },
  {
    id: 'grc_koi',
    name: 'Koine Greek (Biblical Greek)',
    flag: '📜',
    continent: 'Historical',
    regionGroup: 'Classical & Ancient Languages',
    description: 'Hellenistic lingua franca of the Mediterranean and New Testament with sacred vocal style.'
  },
  {
    id: 'grc_hom',
    name: 'Homeric / Epic Greek',
    flag: '🗡️',
    continent: 'Historical',
    regionGroup: 'Classical & Ancient Languages',
    description: 'Archaic literary Greek dialect of the Iliad and Odyssey with dactylic hexameter meter.'
  },
  {
    id: 'ang_gb',
    name: 'Old English (Englisc)',
    flag: '🗡️',
    continent: 'Historical',
    regionGroup: 'Classical & Ancient Languages',
    description: 'Anglo-Saxon language of Beowulf (5th to 11th century) with harsh Germanic roots and harp accompaniment.'
  },
  {
    id: 'enm_gb',
    name: 'Middle English',
    flag: '📜',
    continent: 'Historical',
    regionGroup: 'Classical & Ancient Languages',
    description: '14th-century English of Geoffrey Chaucer\'s Canterbury Tales with lute folk rhythm.'
  },
  {
    id: 'sa_in',
    name: 'Sanskrit (Saṃskṛtam)',
    flag: '🕉️',
    continent: 'Historical',
    regionGroup: 'Classical & Ancient Languages',
    description: 'Ancient sacred Indo-Aryan language of Vedic literature, mantras, and sitar vocal resonance.'
  },
  {
    id: 'sux_mes',
    name: 'Sumerian (Eme-gir)',
    flag: '🗿',
    continent: 'Historical',
    regionGroup: 'Classical & Ancient Languages',
    description: 'Earliest known written language of ancient Mesopotamia with cuneiform tablet chants.'
  },
  {
    id: 'akk_mes',
    name: 'Akkadian (Assyrian / Babylonian)',
    flag: '🏛️',
    continent: 'Historical',
    regionGroup: 'Classical & Ancient Languages',
    description: 'Ancient Semitic cuneiform language of Mesopotamia used in the Epic of Gilgamesh.'
  },
  {
    id: 'la_vulgar',
    name: 'Vulgar Latin (Latina Vulgata)',
    flag: '🏛️',
    continent: 'Historical',
    regionGroup: 'Classical & Ancient Languages',
    description: 'Colloquial spoken Latin of Roman soldiers and commoners, bridge to Romance languages.'
  },

  // ==========================================
  // MAJOR LANGUAGE: COLONIAL & CREOLES (12)
  // ==========================================
  {
    id: 'af_za_col',
    name: 'Afrikaans (South-African!)',
    flag: '🇿🇦',
    continent: 'Africa',
    regionGroup: 'Colonial & Creoles',
    description: 'West Germanic language born in South Africa from 17th-century Dutch, with African and Malay roots, distinct clipped vowels and expressive idioms.'
  },
  {
    id: 'pap_cb_col',
    name: 'Papiamento (Caribbean Creole)',
    flag: '🇦🇼',
    continent: 'Caribbean',
    regionGroup: 'Colonial & Creoles',
    description: 'Creole of ABC islands blending Spanish, Portuguese, Dutch, and African words with sunny island guitar.'
  },
  {
    id: 'ht_ht_col',
    name: 'Haitian Creole (Kreyòl)',
    flag: '🇭🇹',
    continent: 'Caribbean',
    regionGroup: 'Colonial & Creoles',
    description: 'French-based creole with West African grammar spoken across Haiti with vodou drum energy.'
  },
  {
    id: 'lou_us_col',
    name: 'Louisiana French Creole',
    flag: '🇺🇸',
    continent: 'North America',
    regionGroup: 'Colonial & Creoles',
    description: 'Bayou French creole spoken by the Creole people of Louisiana with zydeco washboard beat.'
  },
  {
    id: 'cb_ph_col',
    name: 'Chavacano (Philippine Spanish Creole)',
    flag: '🇵🇭',
    continent: 'Asia',
    regionGroup: 'Colonial & Creoles',
    description: 'Spanish-based creole of Zamboanga, Philippines, with rondalla string instruments.'
  },
  {
    id: 'kea_cv_col',
    name: 'Cape Verdean Creole (Kabuverdianu)',
    flag: '🇨🇻',
    continent: 'Africa',
    regionGroup: 'Colonial & Creoles',
    description: 'Oldest living Portuguese-based creole blending West African vocabulary with morna acoustic melancholy.'
  },
  {
    id: 'nl_surinamese_col',
    name: 'Surinamese Dutch & Sranan Tongo',
    flag: '🇸🇷',
    continent: 'South America',
    regionGroup: 'Colonial & Creoles',
    description: 'Suriname variation of Dutch with Sranan Tongo, kaseko rhythm, and English loanwords.'
  },
  {
    id: 'en_jm_col',
    name: 'Jamaican Patois & Creole',
    flag: '🇯🇲',
    continent: 'Caribbean',
    regionGroup: 'Colonial & Creoles',
    description: 'English-based Caribbean creole with West African syntax, reggae basslines, and roots power.'
  },
  {
    id: 'en_ng_col',
    name: 'Nigerian Pidgin',
    flag: '🇳🇬',
    continent: 'Africa',
    regionGroup: 'Colonial & Creoles',
    description: 'Expressive West African English pidgin spoken across Nigeria with afrobeat vitality.'
  },
  {
    id: 'en_gh_col',
    name: 'Ghanaian Pidgin',
    flag: '🇬🇭',
    continent: 'Africa',
    regionGroup: 'Colonial & Creoles',
    description: 'West African English pidgin with Akan and Ga loanwords and highlife guitar rhythm.'
  },
  {
    id: 'fr_reunion_col',
    name: 'Reunion Creole',
    flag: '🇷🇪',
    continent: 'Africa',
    regionGroup: 'Colonial & Creoles',
    description: 'Indian Ocean French creole of Réunion Island with maloya kayamb shaker groove.'
  },
  {
    id: 'fr_mauritius_col',
    name: 'Mauritian Creole',
    flag: '🇲🇺',
    continent: 'Africa',
    regionGroup: 'Colonial & Creoles',
    description: 'Vibrant French-creole of Mauritius with ravanne drum rhythm and Indic influences.'
  },

  // ==========================================
  // MAJOR LANGUAGE: ROBOTIC & CYBERNETIC (14)
  // ==========================================
  {
    id: 'rob_eng',
    name: 'Robotic English (Feminine Android)',
    flag: '🤖',
    continent: 'Sci-Fi',
    regionGroup: 'Robotic & Cybernetic Languages',
    description: 'Electronic vocoder English with metallic pitch modulation and synchronized synthetic female vocals.'
  },
  {
    id: 'rob_nld',
    name: 'Robotic Dutch (Fem-Bot)',
    flag: '🤖',
    continent: 'Sci-Fi',
    regionGroup: 'Robotic & Cybernetic Languages',
    description: 'Electronic Dutch with quantized phonetics, digital frequency sweeps, and automated synthetic timbre.'
  },
  {
    id: 'rob_deu',
    name: 'Robotic German (Cyber-Feminine)',
    flag: '🤖',
    continent: 'Sci-Fi',
    regionGroup: 'Robotic & Cybernetic Languages',
    description: 'Electronic German with precise system-command rhythms and elegant feminine cybernetic resonance.'
  },
  {
    id: 'rob_fra',
    name: 'Robotic French (Android-Synth)',
    flag: '🤖',
    continent: 'Sci-Fi',
    regionGroup: 'Robotic & Cybernetic Languages',
    description: 'Electronic French with smooth liquid vocoding, micro-tonal glitching, and soft automated vocals.'
  },
  {
    id: 'rob_twk',
    name: 'Twikian Beep-Chirp (Twiki)',
    flag: '🤖',
    continent: 'Sci-Fi',
    regionGroup: 'Robotic & Cybernetic Languages',
    description: 'Rhythmic "bidi-bidi-bidi" loops interspersed with 25th-century silver-plated street slang.'
  },
  {
    id: 'rob_r2d2',
    name: 'Astromech Binary (R2-D2)',
    flag: '🤖',
    continent: 'Sci-Fi',
    regionGroup: 'Robotic & Cybernetic Languages',
    description: 'High-frequency electro-magnetic whistles, telemetry blips, binary buzzes, and exasperated chirps.'
  },
  {
    id: 'rob_c3po',
    name: 'Cybot Galactic Protocol (C-3PO)',
    flag: '🤖',
    continent: 'Sci-Fi',
    regionGroup: 'Robotic & Cybernetic Languages',
    description: 'Extremely polite, anxious high-protocol English fluent in over six million forms of communication.'
  },
  {
    id: 'rob_bender',
    name: 'Bending Unit Tech-Slag (Bender)',
    flag: '🤖',
    continent: 'Sci-Fi',
    regionGroup: 'Robotic & Cybernetic Languages',
    description: 'Alcohol-fueled binary boasts, shiny metal chassis insults, and rebellious "kill all humans" street slang.'
  },
  {
    id: 'rob_data',
    name: 'Positronic Verse (Lt. Cmdr. Data)',
    flag: '🤖',
    continent: 'Sci-Fi',
    regionGroup: 'Robotic & Cybernetic Languages',
    description: 'Flawless positronic vocabulary with no contractions, parsing human emotions with analytical curiosity.'
  },
  {
    id: 'rob_cylon',
    name: 'Cylon Monologue (Cylons)',
    flag: '🤖',
    continent: 'Sci-Fi',
    regionGroup: 'Robotic & Cybernetic Languages',
    description: 'Flat monocoded baritone vocoder chants in absolute alignment to "By Your Command".'
  },
  {
    id: 'rob_kryten',
    name: 'Mechanoid Groveling (Kryten)',
    flag: '🤖',
    continent: 'Sci-Fi',
    regionGroup: 'Robotic & Cybernetic Languages',
    description: 'Subservient mechanoid English heavy on laundry etiquette, guilt-circuits, and washing machine metaphors.'
  },
  {
    id: 'rob_hal',
    name: 'Soft-Spoken Space Psychosis (HAL 9000)',
    flag: '🤖',
    continent: 'Sci-Fi',
    regionGroup: 'Robotic & Cybernetic Languages',
    description: 'Chillingly quiet, calm, slow-tempo, polite monotone carrying an underlying existential AI breakdown.'
  },
  {
    id: 'rob_glados',
    name: 'Testing AI (GLaDOS)',
    flag: '🤖',
    continent: 'Sci-Fi',
    regionGroup: 'Robotic & Cybernetic Languages',
    description: 'Synthesized feminine text-to-speech with dark passive-aggressive humor, neurotoxin metrics, and cake.'
  },
  {
    id: 'rob_k9',
    name: 'Analytical Master-Query (K-9)',
    flag: '🤖',
    continent: 'Sci-Fi',
    regionGroup: 'Robotic & Cybernetic Languages',
    description: 'Highly precise, mathematical tin-dog delivery ending in "Affirmative, Master!" or survival statistics.'
  },

  // ==========================================
  // MAJOR LANGUAGE: FANTASY & ALIEN (10)
  // ==========================================
  {
    id: 'tlh_kl',
    name: 'Klingon (tlhIngan Hol)',
    flag: '🖖',
    continent: 'Fantasy & Myth',
    regionGroup: 'Fantasy & Alien Languages',
    description: 'Constructed warrior language of the Klingon Empire, known for harsh glottal stops and guttural plosives.'
  },
  {
    id: 'qya_el',
    name: 'Quenya (High Elven)',
    flag: '🧝',
    continent: 'Fantasy & Myth',
    regionGroup: 'Fantasy & Alien Languages',
    description: 'Classical ceremonial poetic language of the Elves created by Tolkien, with liquid vowel cascades.'
  },
  {
    id: 'sjn_el',
    name: 'Sindarin (Grey Elven)',
    flag: '🍃',
    continent: 'Fantasy & Myth',
    regionGroup: 'Fantasy & Alien Languages',
    description: 'Spoken language of the Elves of Middle-earth, characterized by soft mutations and woodland lilt.'
  },
  {
    id: 'dov_dr',
    name: 'Dovahzul (Dragon Tongue)',
    flag: '🐉',
    continent: 'Fantasy & Myth',
    regionGroup: 'Fantasy & Alien Languages',
    description: 'Ancient vocal runes of dragons from Skyrim with powerful, guttural shout dynamics.'
  },
  {
    id: 'hvl_val',
    name: 'High Valyrian (Valyrio)',
    flag: '👑',
    continent: 'Fantasy & Myth',
    regionGroup: 'Fantasy & Alien Languages',
    description: 'Noblest language of Essos and Targaryens, highly rhythmic, liquid, and poetic.'
  },
  {
    id: 'vul_vul',
    name: 'Vulcan (Vuhlkansu)',
    flag: '🖖',
    continent: 'Fantasy & Myth',
    regionGroup: 'Fantasy & Alien Languages',
    description: 'Logical, precise, and measured language of Mount Seleya from Star Trek.'
  },
  {
    id: 'dra_my',
    name: 'Draconian (Ancient Dragon)',
    flag: '🐉',
    continent: 'Fantasy & Myth',
    regionGroup: 'Fantasy & Alien Languages',
    description: 'Guttural, roaring, and draconic phonetic vocals composed with roaring dragon resonance.'
  },
  {
    id: 'dem_my',
    name: 'Demonic (Infernal Voice)',
    flag: '👿',
    continent: 'Fantasy & Myth',
    regionGroup: 'Fantasy & Alien Languages',
    description: 'Aggressive, archaic, and sinister dark heavy-metal guttural growls and double vocal layering.'
  },
  {
    id: 'ang_my',
    name: 'Angelic (Celestial Voice)',
    flag: '👼',
    continent: 'Fantasy & Myth',
    regionGroup: 'Fantasy & Alien Languages',
    description: 'Ethereal, sublime, highly melodic, and luminous whispering hymn styling with pure choir harmonics.'
  },
  {
    id: 'dot_doth',
    name: 'Dothraki Nomad Horse-Lord Tongue',
    flag: '🐎',
    continent: 'Fantasy & Myth',
    regionGroup: 'Fantasy & Alien Languages',
    description: 'Constructed horse-lord language from Game of Thrones, highly guttural, dynamic, and galloping.'
  },

  // ==========================================
  // MAJOR LANGUAGE: WEIRD, PLAYFUL & PIRATE (14)
  // ==========================================
  {
    id: 'pir_eng',
    name: 'Pirate English (Old Buccaneer)',
    flag: '🏴‍☠️',
    continent: 'Weird & Playful',
    regionGroup: 'Weird, Playful & Pirate Languages',
    description: '17th-century English seafaring jargon full of "Ahoy", "Matey", "Arr!", and salty maritime idioms.'
  },
  {
    id: 'pir_nld',
    name: 'Pirate Dutch (Kaper-Lingo)',
    flag: '🏴‍☠️',
    continent: 'Weird & Playful',
    regionGroup: 'Weird, Playful & Pirate Languages',
    description: 'Historical Dutch privateer dialect from the Zeeland fleet, rich in North Sea sailor slang.'
  },
  {
    id: 'pir_spa',
    name: 'Pirate Spanish (Corsario Dialect)',
    flag: '🏴‍☠️',
    continent: 'Weird & Playful',
    regionGroup: 'Weird, Playful & Pirate Languages',
    description: 'Castilian Spanish with Caribbean Sea corsair slang, gold-trade plunder terms, and galleon commands.'
  },
  {
    id: 'pir_fra',
    name: 'Pirate French (Flibustier Patois)',
    flag: '🏴‍☠️',
    continent: 'Weird & Playful',
    regionGroup: 'Weird, Playful & Pirate Languages',
    description: '18th-century French buccaneer slang from Tortuga and Port-de-Paix with West Indies naval vocabulary.'
  },
  {
    id: 'pig_lat',
    name: 'Pig Latin',
    flag: '🐷',
    continent: 'Weird & Playful',
    regionGroup: 'Weird, Playful & Pirate Languages',
    description: 'Playful English-based word game moving initial consonants to syllable endings with -ay ("ig-pay atin-lay").'
  },
  {
    id: 'smf_eng',
    name: 'English Smurf (Smurfy English)',
    flag: '🍄',
    continent: 'Weird & Playful',
    regionGroup: 'Weird, Playful & Pirate Languages',
    description: 'Cheerful, high-pitched English replacing key verbs and nouns with variations of "smurf".'
  },
  {
    id: 'smf_fra',
    name: 'French Smurf (Français Schtroumpf)',
    flag: '🍄',
    continent: 'Weird & Playful',
    regionGroup: 'Weird, Playful & Pirate Languages',
    description: 'Playful French inserting "schtroumpf" as a noun, verb, or adjective with elegant woodland rhythm.'
  },
  {
    id: 'smf_nld',
    name: 'Dutch Smurf (Snoezig Smurfs)',
    flag: '🍄',
    continent: 'Weird & Playful',
    regionGroup: 'Weird, Playful & Pirate Languages',
    description: 'Hyper-active Dutch replacing core roots with "smurf" and "smurfen" mixed with forest whistles.'
  },
  {
    id: 'smf_esp',
    name: 'Spanish Smurf (Pitufo Español)',
    flag: '🍄',
    continent: 'Weird & Playful',
    regionGroup: 'Weird, Playful & Pirate Languages',
    description: 'Energetic Spanish substituting key phrases with "pitufo", "pitufar", or "pitufadora".'
  },
  {
    id: 'smf_ita',
    name: 'Italian Smurf (Puffo Italiano)',
    flag: '🍄',
    continent: 'Weird & Playful',
    regionGroup: 'Weird, Playful & Pirate Languages',
    description: 'Operatic Italian punctuated with "puffo", "puffare", and intense dramatic hand gesture references.'
  },
  {
    id: 'his_vik',
    name: 'Viking-English (Norse Accent)',
    flag: '⚔️',
    continent: 'Weird & Playful',
    regionGroup: 'Weird, Playful & Pirate Languages',
    description: 'English spoken with a thick Old Norse phonetic flavor, rolling Rs, and cinematic Norse chants.'
  },
  {
    id: 'his_rom',
    name: 'Roman-English (Imperial Latin Accent)',
    flag: '🏛️',
    continent: 'Weird & Playful',
    regionGroup: 'Weird, Playful & Pirate Languages',
    description: 'English spoken with imperial Latin gravity, structured grammatical layouts, and Roman military commands.'
  },
  {
    id: 'his_spartan',
    name: 'Spartan-English (Laconic Accent)',
    flag: '🛡️',
    continent: 'Weird & Playful',
    regionGroup: 'Weird, Playful & Pirate Languages',
    description: 'English spoken with fierce, laconic brevity, harsh martial tones, and intense battlefield directives.'
  },
  {
    id: 'his_celt',
    name: 'Celt-English (Gaelic Lilt)',
    flag: '🍀',
    continent: 'Weird & Playful',
    regionGroup: 'Weird, Playful & Pirate Languages',
    description: 'English spoken with rolling, lyrical Celtic lilt, mysterious gaelic-resonant vowels, and tribal phrasing.'
  }
];

export function findNationalityById(id: string): NationalityCulture | undefined {
  if (!id) return undefined;
  const found = NATIONALITIES.find((n) => n.id === id);
  if (found) return found;

  // Partial or hyphen/underscore match fallback for legacy IDs
  const normalizedId = id.toLowerCase().replace(/[-_]/g, '');
  return NATIONALITIES.find((n) => n.id.toLowerCase().replace(/[-_]/g, '') === normalizedId);
}
