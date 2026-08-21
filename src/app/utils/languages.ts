import { LanguageGroup, Dialect } from '../../types/languages';
import { NATIONALITIES } from './nationalities';

export const LANGUAGE_GROUPS: LanguageGroup[] = [
  {
    id: 'english',
    name: 'English',
    dialects: [
      { id: 'en_ca', name: 'Canadian English', description: 'Canadian vowel raising, polite "eh" tags, soft dipthongs, and Maritime phrasing' },
      { id: 'en_au', name: 'Australian English (Strine)', description: 'Strine broad vowel shifts, high rising terminal inflection, casual Aussie vernacular' },
      { id: 'en_us_gen', name: 'General American English', description: 'Standard rhotic American accent, flat open vowels, crisp articulation' },
      { id: 'en_us_south', name: 'American Southern Drawl', description: 'Slow melodic southern drawl, monophthongized vowels, warm relaxed cadence' },
      { id: 'en_us_ny', name: 'New York & Brooklyn Accent', description: 'Non-rhotic "tawk/cawfee" vowels, fast assertive urban tempo, nasal resonance' },
      { id: 'en_us_midwest', name: 'Midwestern / Great Lakes English', description: 'Northern Cities Vowel Shift, nasal "a" sounds, friendly melodic cadence' },
      { id: 'en_us_cali', name: 'California West Coast & Valley', description: 'Vocal fry, casual uptalk inflections, laid-back surfer/valley lilt' },
      { id: 'en_gb_rp', name: 'British English (RP)', description: 'Standard BBC British English, non-rhotic, crisp formal vowels, elegant phrasing' },
      { id: 'en_gb_cockney', name: 'Cockney & East London English', description: 'Glottal stops, dropped "h" consonants, rhyming slang pacing, bouncy rhythm' },
      { id: 'en_gb_scots', name: 'Scottish English & Accent', description: 'Trilled "r" consonants, short crisp vowels, rhythmic highland lilt' },
      { id: 'en_gb_irish', name: 'Irish English (Hiberno-English)', description: 'Lyrical sing-song lilt, aspirated "t/d" consonants, pub ballad storytelling rhythm' },
      { id: 'en_gb_welsh', name: 'Welsh English', description: 'Musical sing-song lilt, rolling "r"s, open resonant chest tone' },
      { id: 'en_nz', name: 'New Zealand English (Kiwi)', description: 'Short "i" vowel shift ("fush and chips"), gentle Maori loanword lilt' },
      { id: 'en_za', name: 'South African English', description: 'Clipped consonants, distinct Afrikaans-influenced vowels, local slang' },
      { id: 'en_in', name: 'Indian English', description: 'Retroflex consonants, syllable-timed rhythm, distinctive subcontinental cadence' },
      { id: 'en_jm', name: 'Jamaican English & Patois', description: 'Rhythmic Caribbean lilt, double modifiers, reggae/roots vocal cadence' },
      { id: 'en_ng', name: 'Nigerian English & Pidgin', description: 'High tonal inflection, expressive West African pidgin idioms, afrobeats bounce' },
      { id: 'en_sg', name: 'Singaporean English (Singlish)', description: 'Colloquial blend with Hokkien/Malay discourse particles ("lah", "leh", "lor")' },
      { id: 'en_mle', name: 'London Street English (MLE)', description: 'Multicultural London youth street language with Afro-Caribbean and South Asian features' },
      { id: 'en_bb', name: 'Barbadian English (Bajan)', description: 'Glottalized Caribbean English with unique Bajan creole phrasing' }
    ]
  },
  {
    id: 'french',
    name: 'French',
    dialects: [
      { id: 'fr_std', name: 'Standard Parisian French', description: 'Standard metropolitan French pronunciation, uvular "r", nasal vowels' },
      { id: 'fr_qc', name: 'Quebec French (Québécois)', description: 'Canadian French dialect with distinct diphthongs and affricated "t/d"' },
      { id: 'fr_be', name: 'Belgian French (Belge)', description: 'Walloon French inflections, regional numbers ("septante", "nonante")' },
      { id: 'fr_ch', name: 'Swiss French (Romand)', description: 'Slower rhythmic pace, unique numeral expressions, clean alpine clarity' },
      { id: 'fr_af', name: 'West African French', description: 'Vibrant rhythmic French spoken across Senegal, Ivory Coast, and Cameroon' },
      { id: 'fr_cajun', name: 'Louisiana Cajun French', description: 'Bayou French dialect with English/Spanish blending and accordion folk rhythm' },
      { id: 'fr_haiti', name: 'Haitian Creole (Kreyòl)', description: 'French-based creole with West African grammar and rhythmic island cadences' },
      { id: 'fr_reunion', name: 'Reunion Creole (Kréol Réyoné)', description: 'Indian Ocean French creole with East African and Malagasy influences' },
      { id: 'fr_mauritius', name: 'Mauritian Creole (Morisyen)', description: 'Vibrant island French creole with Indic and Portuguese loanwords' },
      { id: 'fr_acadien', name: 'Acadian French', description: 'Maritime Canadian French preserving 17th-century regional features' },
      { id: 'fr_maroc', name: 'French-Moroccan Dialect (Franco-Marocain)', description: 'Blending French with Moroccan Darija Arabic slang and phonetic rhythm' },
      { id: 'fr_verlan', name: 'Parisian Street French (Verlan & Argot)', description: 'Syllable-inverted youth argot with dynamic urban street slang' },
      { id: 'fr_lux', name: 'Luxembourg French', description: 'Metropolitan French with German and Luxembourgish lexical influences' }
    ]
  },
  {
    id: 'spanish',
    name: 'Spanish',
    dialects: [
      { id: 'es_es', name: 'Peninsular Castilian Spanish', description: 'Standard European Spanish with distinction ("z/ci/ce" as "th")' },
      { id: 'es_mx', name: 'Mexican Spanish (Mexicano)', description: 'Clear central vowels, melodic intonation, widespread Latin American standard' },
      { id: 'es_ar', name: 'Argentine Spanish (Rioplatense)', description: 'Italianate sing-song cadence, use of "voseo", "sh" pronunciation of "ll/y"' },
      { id: 'es_co', name: 'Colombian Spanish (Bogotano)', description: 'Clear articulation, formal syntax, melodious Andean/Caribbean variation' },
      { id: 'es_car', name: 'Caribbean Spanish (Cuban / PR / DR)', description: 'Rapid pace, aspirated "s" endings, rhythmic island vocal style' },
      { id: 'es_chl', name: 'Chilean Spanish (Chileno)', description: 'Fast compressed speech, unique local slang (chilenismos), dropping final "s"' },
      { id: 'es_pe', name: 'Andean Peruvian Spanish', description: 'Highland Peruvian Spanish with Quechua-influenced vocal intonations' },
      { id: 'es_and', name: 'Andalusian Spanish', description: 'Southern Spain dialect with seseo/ceceo, root of American Spanish phonetics' },
      { id: 'es_can', name: 'Canary Islands Spanish', description: 'Atlantic Spanish dialect bridging Andalusian and Caribbean phonetics' },
      { id: 'es_mx_north', name: 'Northern Mexican (Norteño)', description: 'Direct ranchero cadence, strong consonants, accordion ballad phrasing' },
      { id: 'es_chavacano', name: 'Chavacano (Philippine Spanish Creole)', description: 'Spanish-based creole of Zamboanga blended with Tagalog and Hiligaynon' },
      { id: 'es_papiamento', name: 'Papiamento (Caribbean Creole)', description: 'Aruba/Curaçao creole blending Spanish, Portuguese, Dutch, and Arawak' },
      { id: 'es_ladino', name: 'Ladino (Judeo-Spanish)', description: 'Archaic 15th-century Castilian preserved by Sephardic communities' }
    ]
  },
  {
    id: 'dutch',
    name: 'Dutch & Afrikaans (South-African!)',
    dialects: [
      { id: 'af_za', name: 'Afrikaans (South-African!)', description: 'West Germanic language born in South Africa from 17th-century Dutch, with African and Malay roots, distinct clipped vowels and expressive idioms.' },
      { id: 'nl_std', name: 'Standard Netherlands Dutch (Nederlands)', description: 'Northern Standard Dutch with hard "G" (gg) and clear dipthongs' },
      { id: 'nl_be', name: 'Flemish / Belgian Dutch (Vlaams)', description: 'Southern Dutch dialect with soft "G", polite "u" forms, and Belgian vocabulary' },
      { id: 'nl_surinamese', name: 'Surinamese Dutch (Surinaams-Nederlands)', description: 'Suriname Dutch with melodic Sranan Tongo, Hindustani, and English inflections' },
      { id: 'nl_brabant', name: 'Brabantian (Brabants)', description: 'Warm southern dialect of North Brabant and Antwerp with soft "G"' },
      { id: 'nl_limburg', name: 'Limburgish (Limburgs)', description: 'Tonal Germanic language spoken in Limburg with melodic pitch contours' },
      { id: 'nl_zeeland', name: 'Zeelandic (Zeeuws)', description: 'Coastal dialect preserving medieval Dutch vowel patterns and maritime terms' },
      { id: 'nl_gronings', name: 'Gronings / Low Saxon (Gruns)', description: 'Northeastern Friso-Saxon dialect with shortened glottal endings' },
      { id: 'nl_hollandic', name: 'Hollandic (Amsterdams / Leids)', description: 'Urban western conurbation dialect with rolling "R" and sharp humor' },
      { id: 'nl_frisian_dutch', name: 'Frisian-Dutch Accent', description: 'Dutch spoken with West Frisian phonetic substrates and rural clarity' },
      { id: 'nl_denglish', name: 'Dutch-English (Denglish / Steenkolen)', description: 'English spoken with a thick Dutch accent and literal sentence translation' },
      { id: 'nl_straattaal', name: 'Dutch Street Language (Straattaal / Moroccan-Dutch)', description: 'Urban youth street language mixing Dutch with Moroccan-Arabic slang ("wollah", "drerrie")' },
      { id: 'nl_turkish_dutch', name: 'Dutch-Turkish Dialect', description: 'Colloquial Dutch with Turkish community phrasing and emotional expressions' },
      { id: 'nl_papiamento_dutch', name: 'Dutch Caribbean Papiamento', description: 'Dutch creole blend spoken in Aruba, Bonaire, and Curaçao' }
    ]
  },
  {
    id: 'italian',
    name: 'Italian',
    dialects: [
      { id: 'it_std', name: 'Standard Italian (Italiano)', description: 'Standard literary and spoken Italian based on Tuscan roots' },
      { id: 'it_tuscan', name: 'Tuscan Italian (Toscano)', description: 'Historic central dialect of Florence and Siena with aspirated "c"' },
      { id: 'it_neapolitan', name: 'Neapolitan (Nnapulitano)', description: 'Vibrant Romance language of Naples, rich in opera, folk song, and emotion' },
      { id: 'it_sicilian', name: 'Sicilian (Sicilianu)', description: 'Distinct island language of Sicily with Arabic, Greek, and Norman influences' },
      { id: 'it_venetian', name: 'Venetian (Veneto)', description: 'Lyrical Romance language of Venice and Veneto with smooth liquid "l"' },
      { id: 'it_romanesco', name: 'Romanesco (Central Roman)', description: 'Dialect of Rome, direct and expressive with rich comedic theater tradition' },
      { id: 'it_lombard', name: 'Lombard (Lumbard)', description: 'Gallo-Italic language of Milan and Lombardy with French-like front vowels' },
      { id: 'it_ligurian', name: 'Ligurian (Ligure / Genoese)', description: 'Coastal Romance language of Genoa and Riviera with maritime vocabulary' },
      { id: 'it_sardinian', name: 'Sardinian (Sardu)', description: 'Highly archaic independent Romance language preserving Classical Latin features' },
      { id: 'it_piedmontese', name: 'Piedmontese (Piemontèis)', description: 'Northwestern Italian language with strong Provençal French affinities' },
      { id: 'it_swiss', name: 'Swiss Italian (Ticinese)', description: 'Italian spoken in Ticino, Switzerland with unique administrative terms' },
      { id: 'it_corsican', name: 'Corsican (Corsu)', description: 'Insular Romance language closely allied to Tuscan Italian' }
    ]
  },
  {
    id: 'german',
    name: 'German',
    dialects: [
      { id: 'de_std', name: 'Standard High German (Hochdeutsch)', description: 'Standard High German of Germany with clean glottal attacks and crisp consonants' },
      { id: 'de_at', name: 'Austrian German (Österreichisch)', description: 'Viennese and Alpine German with soft vowels and Austrian vocabulary' },
      { id: 'de_ch', name: 'Swiss High German (Schweizerdeutsch)', description: 'Alemannic German with harsh guttural "ch", distinct rhythm, and no "ß"' },
      { id: 'de_bavarian', name: 'Bavarian German (Boarisch)', description: 'Austro-Bavarian dialect group of Munich and Alpine regions' },
      { id: 'de_swabian', name: 'Swabian German (Schwäbisch)', description: 'High German dialect of Stuttgart and Black Forest with diminutive "-le"' },
      { id: 'de_kolsch', name: 'Kölsch (Colognian)', description: 'Ripuarian dialect of Cologne with distinct "g" -> "j" shifts' },
      { id: 'de_low', name: 'Low German (Plattdeutsch)', description: 'Northern Coastal German closely allied to Dutch and Old English' },
      { id: 'de_saxon', name: 'Upper Saxon (Sächsisch)', description: 'East Central German dialect of Leipzig and Dresden' },
      { id: 'de_pennsylvania', name: 'Pennsylvania Dutch / German', description: 'Traditional Palatine German dialect spoken by Amish in North America' },
      { id: 'de_yiddish', name: 'Yiddish (Jiddish / ייִדיש)', description: 'Historical Ashkenazi Jewish West Germanic language with Hebrew elements' },
      { id: 'de_kiez', name: 'German-Turkish Dialect (Kiezdeutsch)', description: 'Urban Berlin youth street dialect with Turkish grammatical features' },
      { id: 'de_moroccan_german', name: 'German-Moroccan Youth Dialect', description: 'Colloquial German mixed with Moroccan-Arabic expressions and slang' }
    ]
  },
  {
    id: 'arabic_and_persian',
    name: 'Arabic & Farsi',
    dialects: [
      { id: 'ar_fusha', name: 'Modern Standard Arabic (Fusha)', description: 'Literary Arabic used across news, literature, and formal broadcasting' },
      { id: 'ar_masri', name: 'Egyptian Arabic (Masri)', description: 'Most widely understood dialect of the Arab world, centered in Cairo' },
      { id: 'ar_levantine', name: 'Levantine Arabic (Shami)', description: 'Melodic dialect of Lebanon, Syria, Jordan, and Palestine' },
      { id: 'ar_gulf', name: 'Gulf Arabic (Khaliji)', description: 'Dialect of the Arabian Gulf, Bedouin roots, poetic meter' },
      { id: 'ar_darija', name: 'Moroccan Arabic (Darija)', description: 'Vibrant Maghrebi dialect heavily influenced by Amazigh, French, and Spanish' },
      { id: 'ar_iraqi', name: 'Iraqi Arabic (Mesopotamian)', description: 'Ancient dialect of Baghdad and Tigris-Euphrates valley' },
      { id: 'ar_sudanese', name: 'Sudanese Arabic', description: 'Nile Valley Arabic preserving archaic classical features and African rhythm' },
      { id: 'fa_iran', name: 'Persian / Farsi (فارسی)', description: 'Poetic language of Iran, soft lyrical vowels, rich literary history' },
      { id: 'fa_dari', name: 'Dari Persian (Afghan Farsi)', description: 'Official register of Persian spoken across Afghanistan' },
      { id: 'fa_tajik', name: 'Tajik Persian (Tojiki)', description: 'Central Asian Persian register written in Cyrillic script' },
      { id: 'ar_maghrebi_street', name: 'Maghrebi Street Slang (Derb)', description: 'Casablanca and Maghreb street slang mixing Darija, French, and Amazigh' }
    ]
  },
  {
    id: 'scandinavian',
    name: 'Scandinavian Languages',
    dialects: [
      { id: 'sv_se', name: 'Standard Swedish (Svenska)', description: 'Standard pitch-accented Swedish of Stockholm and Central Sweden' },
      { id: 'da_dk', name: 'Danish (Dansk)', description: 'Standard Danish with glottal stop ("stød") and soft consonants' },
      { id: 'no_bokmal', name: 'Norwegian Bokmål', description: 'Standard urban Norwegian based on historical Dano-Norwegian' },
      { id: 'no_nynorsk', name: 'Norwegian Nynorsk', description: 'Standard Norwegian derived from traditional fjord and rural dialects' },
      { id: 'is_is', name: 'Icelandic (Íslenska)', description: 'Archaic North Germanic language preserving Viking grammar and pronunciation' },
      { id: 'fo_fo', name: 'Faroese (Føroyskt)', description: 'Insular North Germanic language of the Faroe Islands related to Old Norse' },
      { id: 'sv_fi', name: 'Finland Swedish (Finlandssvenska)', description: 'Dialect spoken by Swedish Finns, with flat pitch accent and clear vowels' },
      { id: 'sv_elfdalian', name: 'Elfdalian (Övdalsk)', description: 'Isolated forest language of Dalarna preserving Old Norse nasal vowels' },
      { id: 'da_scanian', name: 'Scanian (Skånsk)', description: 'Southern Swedish dialect with deep historical Danish phonetic influences' },
      { id: 'no_old_norse', name: 'Old Norse (Norrœnt)', description: 'Historical parent language of the Vikings and medieval sagas' }
    ]
  },
  {
    id: 'slavic',
    name: 'Slavic Languages',
    dialects: [
      { id: 'pl_pl', name: 'Polish (Polski)', description: 'West Slavic language with rich sibilants ("sz/cz/ż"), nasal vowels "ą/ę"' },
      { id: 'cs_cz', name: 'Czech (Čeština)', description: 'West Slavic language with raised trilled "ř", pitch accent, and Bohemian cadence' },
      { id: 'sk_sk', name: 'Slovak (Slovenčina)', description: 'Central West Slavic language bridging Czech and South Slavic phonetics' },
      { id: 'uk_ua', name: 'Ukrainian (Українська)', description: 'East Slavic language with soft vowels, melodic cadence, and rich folklore' },
      { id: 'ru_ru', name: 'Russian (Русский)', description: 'East Slavic language with palatalized consonants and reduction of unstressed "o"' },
      { id: 'be_by', name: 'Belarusian (Беларуская)', description: 'East Slavic language of Belarus with distinct "dź/ć" soft consonant shifts' },
      { id: 'sh_yu', name: 'Serbo-Croatian (Bosnian/Croatian/Serbian)', description: 'South Slavic pluricentric language with pitch accent and clear vowel system' },
      { id: 'bg_bg', name: 'Bulgarian (Български)', description: 'South Slavic language with analytic grammar and unique "ъ" vowel sound' },
      { id: 'sl_si', name: 'Slovene (Slovenščina)', description: 'South Slavic language preserving dual grammatical number and alpine melodies' },
      { id: 'mk_mk', name: 'Macedonian (Македонски)', description: 'South Slavic language with antepenultimate stress and Balkan features' }
    ]
  },
  {
    id: 'celtic',
    name: 'Celtic Languages',
    dialects: [
      { id: 'ga_ie', name: 'Irish Gaelic (Gaeilge)', description: 'National Celtic language of Ireland with initial consonant mutations' },
      { id: 'gd_gb', name: 'Scottish Gaelic (Gàidhlig)', description: 'Highland Celtic language with pre-aspiration and Gaelic song repertoire' },
      { id: 'cy_gb', name: 'Welsh (Cymraeg)', description: 'Brythonic Celtic language of Wales with voiceless "ll" and fluid vocal mutation' },
      { id: 'kw_gb', name: 'Cornish (Kernowek)', description: 'Revived Brythonic Celtic tongue of Cornwall in southwestern Britain' },
      { id: 'br_fr', name: 'Breton (Brezhoneg)', description: 'Celtic language spoken in Brittany, northwestern France' },
      { id: 'gv_im', name: 'Manx Gaelic (Gaelg)', description: 'Insular Celtic language of the Isle of Man' },
      { id: 'ga_munster', name: 'Munster Irish (Gaeilge na Mumhan)', description: 'Southern Irish Gaelic dialect group with distinct stress patterns' },
      { id: 'ga_connacht', name: 'Connacht Irish (Gaeilge Chonnacht)', description: 'Western Irish dialect of Galway and Connemara Gaeltacht areas' },
      { id: 'gd_hebrides', name: 'Hebridean Gaelic', description: 'Outer Hebrides Gaelic standard with pristine oral waulking song traditions' },
      { id: 'gd_nova_scotia', name: 'Canadian Gaelic (Cape Breton)', description: 'Historic Canadian branch of Scottish Gaelic preserved in Nova Scotia' }
    ]
  },
  {
    id: 'asian',
    name: 'Asian Languages',
    dialects: [
      { id: 'ja_jp', name: 'Japanese (Nihongo)', description: 'Standard Tokyo pitch-accent Japanese, mora-timed rhythm, melodic clarity' },
      { id: 'zh_mandarin', name: 'Mandarin Chinese (Putonghua)', description: 'Standard four-tone spoken Chinese of Beijing and Mainland China' },
      { id: 'zh_cantonese', name: 'Cantonese Chinese (Yue)', description: 'Nine-tone vibrant Chinese language of Hong Kong, Macau, and Guangdong' },
      { id: 'ko_kr', name: 'Korean (Hangugeo)', description: 'Syllable-timed Korean with honorific registers and expressive vocal dynamics' },
      { id: 'vi_vn', name: 'Vietnamese (Tiếng Việt)', description: 'Six-tone Austroasiatic language with northern, central, and southern vocal styles' },
      { id: 'th_th', name: 'Thai (Phasa Thai)', description: 'Five-tone Tai-Kadai language of Thailand with fluid melodic curves' },
      { id: 'hi_in', name: 'Hindi (Mānak Hindī)', description: 'Standard Indo-Aryan register of Hindustani with aspirated consonants' },
      { id: 'bn_bd', name: 'Bengali / Bangla', description: 'Rich Eastern Indo-Aryan language of Rabindranath Tagore and Bangladesh' },
      { id: 'tl_ph', name: 'Tagalog / Filipino', description: 'Austronesian language with Spanish loanwords and Taglish urban phrasing' },
      { id: 'id_id', name: 'Indonesian (Bahasa Indonesia)', description: 'Standard Austronesian lingua franca of the Indonesian archipelago' },
      { id: 'mn_mn', name: 'Mongolian (Mongol Khele)', description: 'Steppe Mongolian with throat-singing harmonics (Khoomei)' }
    ]
  },
  {
    id: 'australian_and_pacific',
    name: 'Australian & Pacific Languages',
    dialects: [
      { id: 'mi_nz', name: 'Māori (Te Reo Māori)', description: 'Polynesian language of New Zealand with rhythmic haka and waiata chants' },
      { id: 'pnt_au', name: 'Pitjantjatjara / Anangu', description: 'Aboriginal language of Central Australia and Uluru region' },
      { id: 'wri_au', name: 'Warlpiri', description: 'Aboriginal language of Tanami Desert in Northern Territory' },
      { id: 'en_aboriginal', name: 'Aboriginal English', description: 'Indigenous Australian English dialect blending native language cadences' },
      { id: 'yom_au', name: 'Yolngu Matha', description: 'Arnhem Land Aboriginal language group of Northern Australia' },
      { id: 'arr_au', name: 'Arrernte (Mparntwe)', description: 'Central Australian language spoken around Alice Springs' },
      { id: 'tiw_au', name: 'Tiwi', description: 'Polysynthetic language isolated on the Tiwi Islands' },
      { id: 'noo_au', name: 'Noongar (Nyungar)', description: 'Aboriginal language of Southwest Western Australia' },
      { id: 'tst_au', name: 'Torres Strait Creole', description: 'English-based creole of the Torres Strait Islands' },
      { id: 'haw_us', name: 'Hawaiian (ʻŌlelo Hawaiʻi)', description: 'Melodic Polynesian language of Hawaii with glottal stops ("okina")' },
      { id: 'tahitian', name: 'Tahitian & Marquesan', description: 'Oceanic Polynesian language with warm open vowels and ukulele rhythms' }
    ]
  },
  {
    id: 'native_american',
    name: 'Native American Languages',
    dialects: [
      { id: 'nv_us', name: 'Navajo (Diné bizaad)', description: 'Athabaskan language with tonal system and complex verb stem morphology' },
      { id: 'chr_us', name: 'Cherokee (Tsalagi)', description: 'Iroquoian language written in Sequoyah\'s unique syllabary' },
      { id: 'qu_pe', name: 'Quechua (Runasimi)', description: 'Highland Andean indigenous language family of the Inca Empire' },
      { id: 'nah_mx', name: 'Nahuatl (Aztec)', description: 'Uto-Aztecan language of Central Mexico with "tl" affricates' },
      { id: 'gn_py', name: 'Guarani (Avañe\'ẽ)', description: 'Co-official indigenous language of Paraguay with nasal harmony' },
      { id: 'yua_mx', name: 'Yucatec Maya (Maaya t\'aan)', description: 'Mayan language of the Yucatán Peninsula with glottalized consonants' },
      { id: 'oji_ca', name: 'Ojibwe (Anishinaabemowin)', description: 'Algonquian language family of the Great Lakes region' },
      { id: 'iu_ca', name: 'Inuktitut (ᐃᓄᒃᑎᑐᑦ)', description: 'Arctic Inuit language with polysynthetic word structures' },
      { id: 'arn_cl', name: 'Mapudungun (Mapuche)', description: 'Language isolate of the Mapuche people in Southern Chile' },
      { id: 'lkt_us', name: 'Lakota (Lakhol\'iyapi)', description: 'Siouan language of the Great Plains with guttural stops' }
    ]
  },
  {
    id: 'frisian',
    name: 'Frisian Languages',
    dialects: [
      { id: 'fy_nl', name: 'West Frisian (Westerlauwers Frysk)', description: 'Official Frisian language of Fryslân province, Netherlands' },
      { id: 'frs_de', name: 'Saterland Frisian (Seeltersk)', description: 'Last surviving dialect of East Frisian spoken in Saterland, Germany' },
      { id: 'frr_de', name: 'North Frisian (Nordfriisk)', description: 'Insular and mainland North Frisian dialects of Schleswig-Holstein' },
      { id: 'fy_hin', name: 'Hindeloopen Frisian (Hylpers)', description: 'Highly archaic maritime Frisian dialect of Hindeloopen port' },
      { id: 'fy_sch', name: 'Schiermonnikoog Frisian (Sgiers)', description: 'Isolated barrier island Frisian dialect' },
      { id: 'fy_ter', name: 'Terschelling Frisian (Westers)', description: 'Frisian dialect of western Terschelling shore' },
      { id: 'fy_fer', name: 'Föhr-Amrum Frisian (Fering)', description: 'Island North Frisian dialect of Föhr and Amrum' },
      { id: 'fy_sol', name: 'Sylt Frisian (Sölring)', description: 'North Frisian dialect of Sylt island with Danish influences' },
      { id: 'fy_hal', name: 'Halligen Frisian (Halifreesk)', description: 'Tidal islet Frisian dialect of the Halligen islands' },
      { id: 'fy_wie', name: 'Wiedingharde Frisian (Wiringhiirder)', description: 'Mainland North Frisian border dialect' }
    ]
  },
  {
    id: 'classical',
    name: 'Classical & Ancient Languages',
    dialects: [
      { id: 'la_cl', name: 'Classical Latin (Latina Classica)', description: 'Reconstructed pronunciation of Cicero, Caesar, and Virgil' },
      { id: 'la_ec', name: 'Ecclesiastical Latin (Latina Ecclesiastica)', description: 'Liturgical Latin traditionally used in religion, Gregorian chant, and choir music' },
      { id: 'grc_cl', name: 'Classical Attic Greek', description: 'Ancient Greek dialect of Athens used in classical philosophy and drama' },
      { id: 'grc_koi', name: 'Koine Greek (Biblical Greek)', description: 'Hellenistic lingua franca of the Mediterranean and New Testament' },
      { id: 'grc_hom', name: 'Homeric / Epic Greek', description: 'Archaic literary Greek dialect of the Iliad and Odyssey' },
      { id: 'ang_gb', name: 'Old English (Englisc)', description: 'Anglo-Saxon language of Beowulf (5th to 11th century)' },
      { id: 'enm_gb', name: 'Middle English', description: '14th-century English of Geoffrey Chaucer\'s Canterbury Tales' },
      { id: 'sa_in', name: 'Sanskrit (Saṃskṛtam)', description: 'Ancient sacred Indo-Aryan language of Vedic literature' },
      { id: 'sux_mes', name: 'Sumerian (Eme-gir)', description: 'Earliest known written language of ancient Mesopotamia' },
      { id: 'akk_mes', name: 'Akkadian (Assyrian / Babylonian)', description: 'Ancient Semitic cuneiform language of Mesopotamia' },
      { id: 'la_vulgar', name: 'Vulgar Latin (Latina Vulgata)', description: 'Colloquial spoken Latin of Roman soldiers and commoners' }
    ]
  },
  {
    id: 'colonial_european',
    name: 'Colonial European & Creoles',
    dialects: [
      { id: 'af_za', name: 'Afrikaans (South-African!)', description: 'West Germanic language born in South Africa from 17th-century Dutch, with African and Malay roots' },
      { id: 'pap_cb', name: 'Papiamento (Caribbean Creole)', description: 'Creole of ABC islands blending Spanish, Portuguese, Dutch, and African words' },
      { id: 'ht_ht', name: 'Haitian Creole (Kreyòl)', description: 'French-based creole with West African grammar spoken across Haiti' },
      { id: 'lou_us', name: 'Louisiana French Creole', description: 'Bayou French creole spoken by the Creole people of Louisiana' },
      { id: 'cb_ph', name: 'Chavacano (Philippine Spanish Creole)', description: 'Spanish-based creole of Zamboanga, Philippines' },
      { id: 'kea_cv', name: 'Cape Verdean Creole (Kabuverdianu)', description: 'Oldest living Portuguese-based creole blending West African vocabulary' },
      { id: 'nl_surinamese', name: 'Surinamese Dutch & Sranan Tongo', description: 'Suriname variation of Dutch with Sranan Tongo and English loanwords' },
      { id: 'en_jm', name: 'Jamaican Patois & Creole', description: 'English-based Caribbean creole with West African syntax' },
      { id: 'en_ng', name: 'Nigerian Pidgin', description: 'Expressive West African English pidgin spoken across Nigeria' },
      { id: 'en_gh', name: 'Ghanaian Pidgin', description: 'West African English pidgin with Akan and Ga loanwords' },
      { id: 'fr_reunion', name: 'Reunion Creole', description: 'Indian Ocean French creole of Réunion Island' },
      { id: 'fr_mauritius', name: 'Mauritian Creole', description: 'Vibrant French-creole of Mauritius with Indic influences' }
    ]
  },
  {
    id: 'robotic',
    name: 'Robotic & Cybernetic Languages',
    dialects: [
      { id: 'rob_eng', name: 'Robotic English (Feminine Android)', description: 'Electronic vocoder English with metallic pitch modulation' },
      { id: 'rob_nld', name: 'Robotic Dutch (Fem-Bot)', description: 'Electronic Dutch with quantized phonetics and automated synthetic timbre' },
      { id: 'rob_deu', name: 'Robotic German (Cyber-Feminine)', description: 'Electronic German with precise system-command rhythms' },
      { id: 'rob_fra', name: 'Robotic French (Android-Synth)', description: 'Electronic French with smooth liquid vocoding and soft synth tone' },
      { id: 'rob_twk', name: 'Twikian Beep-Chirp (Twiki)', description: 'Rhythmic "bidi-bidi-bidi" loops with 25th-century street slang' },
      { id: 'rob_r2d2', name: 'Astromech Binary (R2-D2)', description: 'High-frequency whistles, telemetry blips, and binary chirps' },
      { id: 'rob_c3po', name: 'Cybot Protocol (C-3PO)', description: 'Polite, anxious protocol English fluent in six million forms of communication' },
      { id: 'rob_bender', name: 'Bending Unit Tech-Slag (Bender)', description: 'Rebellious binary boasts and shiny metal chassis insults' },
      { id: 'rob_data', name: 'Positronic Verse (Lt. Cmdr. Data)', description: 'Flawless positronic vocabulary without contractions' },
      { id: 'rob_cylon', name: 'Cylon Monologue', description: 'Flat monocoded baritone vocoder chants: "By Your Command"' },
      { id: 'rob_kryten', name: 'Mechanoid Groveling (Kryten)', description: 'Subservient mechanoid English heavy on laundry etiquette and guilt-circuits' },
      { id: 'rob_hal', name: 'Space Psychosis Monotone (HAL 9000)', description: 'Chillingly calm, slow, polite monotone carrying AI breakdown' },
      { id: 'rob_glados', name: 'Testing AI (GLaDOS)', description: 'Synthesized feminine text-to-speech with dark testing metrics' },
      { id: 'rob_k9', name: 'Analytical Master-Query (K-9)', description: 'Mathematical tin-dog delivery ending in "Affirmative, Master!"' }
    ]
  },
  {
    id: 'fantasy_and_alien',
    name: 'Fantasy & Alien Languages',
    dialects: [
      { id: 'tlh_kl', name: 'Klingon (tlhIngan Hol)', description: 'Warrior language of Klingon Empire with glottal stops and harsh plosives' },
      { id: 'qya_el', name: 'Quenya (High Elven)', description: 'Classical ceremonial poetic language of Tolkien\'s Elves' },
      { id: 'sjn_el', name: 'Sindarin (Grey Elven)', description: 'Spoken language of Middle-earth Elves with soft mutations' },
      { id: 'dov_dr', name: 'Dovahzul (Dragon Tongue)', description: 'Vocal runes of dragons from Skyrim with guttural shout dynamics' },
      { id: 'hvl_val', name: 'High Valyrian (Valyrio)', description: 'Noblest language of Essos and Targaryens, rhythmic and liquid' },
      { id: 'vul_vul', name: 'Vulcan (Vuhlkansu)', description: 'Logical, precise, and measured language of Mount Seleya' },
      { id: 'dra_my', name: 'Draconian (Ancient Dragon)', description: 'Guttural, roaring, and draconic phonetic vocals' },
      { id: 'dem_my', name: 'Demonic (Infernal Voice)', description: 'Aggressive, archaic, and sinister dark heavy-metal vocals' },
      { id: 'ang_my', name: 'Angelic (Celestial Voice)', description: 'Ethereal, luminous whispering hymn styling' },
      { id: 'dot_doth', name: 'Dothraki Nomad Horse-Lord Tongue', description: 'Constructed horse-lord language from Game of Thrones' }
    ]
  },
  {
    id: 'weird_playful_pirate',
    name: 'Weird, Playful & Pirate Languages',
    dialects: [
      { id: 'pir_eng', name: 'Pirate English (Old Buccaneer)', description: '17th-century seafaring jargon: "Ahoy", "Matey", "Arr!", and salty sea idioms' },
      { id: 'pir_nld', name: 'Pirate Dutch (Kaper-Lingo)', description: 'Historical Dutch privateer dialect rich in North Sea sailor slang' },
      { id: 'pir_spa', name: 'Pirate Spanish (Corsario)', description: 'Castilian Spanish with Caribbean corsair slang and galleon commands' },
      { id: 'pir_fra', name: 'Pirate French (Flibustier Patois)', description: '18th-century French buccaneer slang from Tortuga and Port-de-Paix' },
      { id: 'pig_lat', name: 'Pig Latin', description: 'Playful argot moving first consonants to end with "ay" ("ig-pay atin-lay")' },
      { id: 'smf_eng', name: 'English Smurf (Smurfy English)', description: 'High-pitched cheerful English replacing verbs and nouns with "smurf"' },
      { id: 'smf_fra', name: 'French Smurf (Français Schtroumpf)', description: 'Playful French inserting "schtroumpf" as noun, verb, or adjective' },
      { id: 'smf_nld', name: 'Dutch Smurf (Snoezig Smurfs)', description: 'Hyper-active Dutch replacing roots with "smurf" and "smurfen"' },
      { id: 'smf_esp', name: 'Spanish Smurf (Pitufo Español)', description: 'Energetic Spanish substituting key phrases with "pitufo" or "pitufar"' },
      { id: 'smf_ita', name: 'Italian Smurf (Puffo Italiano)', description: 'Operatic Italian punctuated with "puffo" and dramatic hand gestures' },
      { id: 'his_vik', name: 'Viking-English (Norse Accent)', description: 'English with Old Norse phonetic flavor, rolling Rs, and Viking chants' },
      { id: 'his_rom', name: 'Roman-English (Imperial Latin Accent)', description: 'English spoken with imperial Latin gravity and Roman military directives' },
      { id: 'his_spartan', name: 'Spartan-English (Laconic Accent)', description: 'English spoken with laconic brevity and battlefield directives' },
      { id: 'his_celt', name: 'Celt-English (Gaelic Lilt)', description: 'English spoken with rolling, lyrical Celtic lilt and tribal phrasing' }
    ]
  }
];

export const DEFAULT_DIALECT: Dialect = {
  id: 'en_gb_rp',
  name: 'British English (RP)',
  description: 'Standard BBC British English, non-rhotic, crisp formal vowels'
};

/**
 * Finds a dialect globally by ID, searching in LANGUAGE_GROUPS and fallback to NATIONALITIES.
 */
export function findDialectById(id: string): Dialect {
  if (!id) return DEFAULT_DIALECT;

  for (const group of LANGUAGE_GROUPS) {
    const found = group.dialects.find((d) => d.id === id);
    if (found) return found;
  }

  // Fallback to NATIONALITIES if ID format differs or legacy ID
  const nat = NATIONALITIES.find((n) => n.id === id);
  if (nat) {
    return {
      id: nat.id,
      name: nat.name,
      description: nat.description
    };
  }

  // Try normalized ID match
  const normalized = id.toLowerCase().replace(/[-_]/g, '');
  for (const group of LANGUAGE_GROUPS) {
    const found = group.dialects.find((d) => d.id.toLowerCase().replace(/[-_]/g, '') === normalized);
    if (found) return found;
  }

  return DEFAULT_DIALECT;
}

/**
 * Finds which LanguageGroup a dialect belongs to.
 */
export function findGroupByDialectId(dialectId: string): LanguageGroup | undefined {
  if (!dialectId) return undefined;
  return LANGUAGE_GROUPS.find((group) =>
    group.dialects.some((d) => d.id === dialectId || d.id.toLowerCase().replace(/[-_]/g, '') === dialectId.toLowerCase().replace(/[-_]/g, ''))
  );
}
