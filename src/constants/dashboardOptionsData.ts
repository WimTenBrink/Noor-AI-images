/**
 * Noor Music - Dashboard Options JSON Data Module
 * 
 * Contains the complete structured dataset of all Node Groups, Subgroups, 
 * and Options within the "Generate" dialog Dashboard.
 * 
 * Created by Knowledge And Technology Joyfully Engaged (Katje B.V.)
 * Licensed under the MIT License.
 */

export const DASHBOARD_OPTIONS_DATA_VERSION = "1.0.0";

export interface DashboardOptionItem {
  id: string;
  name: string;
  description: string;
  dataType: "boolean" | "string" | "number" | "array" | "object" | "select" | "slider";
  defaultValue?: any;
  allowedValues?: string[];
  range?: { min: number; max: number };
}

export interface DashboardSubgroup {
  id: string;
  name: string;
  description: string;
  options: DashboardOptionItem[];
}

export interface DashboardGroupNode {
  id: string;
  groupNumber: number;
  name: string;
  description: string;
  subgroups: DashboardSubgroup[];
}

export interface DashboardOptionsDataPackage {
  $schema: string;
  version: string;
  title: string;
  generator: string;
  author: string;
  license: string;
  createdAt: string;
  groups: DashboardGroupNode[];
}

export const DASHBOARD_OPTIONS_DATA: DashboardOptionsDataPackage = {
  $schema: `https://katje.bv/schemas/v${DASHBOARD_OPTIONS_DATA_VERSION}/dashboard_options.json`,
  version: DASHBOARD_OPTIONS_DATA_VERSION,
  title: "Noor Music Generate Dialog Dashboard Options Reference",
  generator: "Noor Music by Katje B.V.",
  author: "Knowledge And Technology Joyfully Engaged (Katje B.V.)",
  license: "MIT",
  createdAt: "2026-08-09T10:00:00Z",
  groups: [
    {
      id: "prompt",
      groupNumber: 1,
      name: "Lyrics & Directives",
      description: "Core lyrical prompts, title directives, artist inspiration, and visual scene guidelines for song composition.",
      subgroups: [
        {
          id: "inspiration",
          name: "Inspiration Artists & Bands",
          description: "Select artist or band inspiration influences to guide genre, vocal texture, and lyrical tone.",
          options: [
            {
              id: "selectedInspirationArtists",
              name: "Selected Inspiration Artists",
              description: "Array of selected inspiration band and artist influences.",
              dataType: "array",
              defaultValue: []
            },
            {
              id: "musicInspiration",
              name: "Music Inspiration Notes",
              description: "Custom free-form artist impression, style references, and song ideas.",
              dataType: "string",
              defaultValue: ""
            }
          ]
        },
        {
          id: "imageToSong",
          name: "Image Inspiration",
          description: "Visual scene and artwork description to convert into lyrical storytelling.",
          options: [
            {
              id: "imageDescription",
              name: "Image Description Prompt",
              description: "Free-text prompt describing visual artwork, photo, or album scene.",
              dataType: "string",
              defaultValue: ""
            },
            {
              id: "imageSeriousness",
              name: "Image Literalness Seriousness",
              description: "Percentage scale defining how literal vs creative the image translation should be.",
              dataType: "slider",
              defaultValue: 80,
              range: { min: 0, max: 100 }
            }
          ]
        },
        {
          id: "suggestedTitle",
          name: "Suggested Song Title",
          description: "Proposed title for the generated composition with optional exact title locking.",
          options: [
            {
              id: "suggestedTitle",
              name: "Suggested Song Title",
              description: "The suggested song title.",
              dataType: "string",
              defaultValue: ""
            },
            {
              id: "exactTitle",
              name: "Exact Title Lock",
              description: "If enabled, enforces the exact title without AI modifications.",
              dataType: "boolean",
              defaultValue: false
            }
          ]
        },
        {
          id: "lyrics",
          name: "Lyrics Guidelines & Prompts",
          description: "Core instructions, verse themes, and structural guidelines for the lyric generator.",
          options: [
            {
              id: "instructions",
              name: "Lyrics Directives & Prompt",
              description: "Direct prompt instructions for writing song lyrics.",
              dataType: "string",
              defaultValue: ""
            }
          ]
        },
        {
          id: "artistImpression",
          name: "Artist Impression & Ideas",
          description: "Free-form stylistic inspiration, musical impression, and concept notes.",
          options: [
            {
              id: "musicInspiration",
              name: "Free-Form Artist Impression",
              description: "Custom artist impression notes and ideas.",
              dataType: "string",
              defaultValue: ""
            }
          ]
        }
      ]
    },
    {
      id: "defaults",
      groupNumber: 2,
      name: "Defaults Toggles",
      description: "System-wide baseline settings for band roles, culture, themes, beliefs, concert settings, audience interaction, core instruments, and lyrical tone.",
      subgroups: [
        {
          id: "band",
          name: "Band Ensemble Defaults",
          description: "Default band role, vocal arrangement, and barn studio toggles.",
          options: [
            {
              id: "bandRole",
              name: "Lead Vocalist Role Baseline",
              description: "Primary lead vocalist role in quartet.",
              dataType: "select",
              defaultValue: "soprano",
              allowedValues: ["soprano", "alto", "mezzo", "contralto"]
            },
            {
              id: "barnStudio",
              name: "Barn Studio Ambient Setting",
              description: "Enables natural barn studio environment and acoustics.",
              dataType: "boolean",
              defaultValue: true
            },
            {
              id: "barnAnimalSounds",
              name: "Barn Animal Sounds",
              description: "Ambient barn animal soundscapes.",
              dataType: "select",
              defaultValue: "none",
              allowedValues: ["none", "rooster", "cows", "sheep", "all"]
            },
            {
              id: "barnRainRoof",
              name: "Rain on Wooden Roof",
              description: "Acoustic sound of rain pattering on wooden barn roof.",
              dataType: "boolean",
              defaultValue: false
            },
            {
              id: "barnWoodenCreaks",
              name: "Wooden Floor Creaks",
              description: "Acoustic wooden floor creak sounds.",
              dataType: "boolean",
              defaultValue: false
            }
          ]
        },
        {
          id: "culture",
          name: "Cultural Heritage Defaults",
          description: "Regional culture, language dialects, and folk traditions.",
          options: [
            {
              id: "dutchFolkCulture",
              name: "Dutch Folk Tradition",
              description: "Traditional Dutch folk musical and storytelling elements.",
              dataType: "boolean",
              defaultValue: false
            },
            {
              id: "nordicCelticFusion",
              name: "Nordic & Celtic Fusion",
              description: "Fusion of Nordic and Celtic folk traditions.",
              dataType: "boolean",
              defaultValue: false
            },
            {
              id: "ecoFeminism",
              name: "Eco-Feminism Theme",
              description: "Eco-feminist nature protection themes.",
              dataType: "boolean",
              defaultValue: false
            },
            {
              id: "cultureEuropean",
              name: "European Culture Heritage",
              description: "European folk baseline.",
              dataType: "boolean",
              defaultValue: true
            },
            {
              id: "cultureCelticNordic",
              name: "Celtic-Nordic Culture Heritage",
              description: "Celtic-Nordic cultural framing.",
              dataType: "boolean",
              defaultValue: true
            }
          ]
        },
        {
          id: "theme",
          name: "Lyrical Themes Defaults",
          description: "Default thematic focus areas and social narrative constraints.",
          options: [
            {
              id: "topic",
              name: "Primary Baseline Topic",
              description: "Primary thematic topic.",
              dataType: "string",
              defaultValue: "Love and Connection"
            },
            {
              id: "sapphic",
              name: "Sapphic Theme Focus",
              description: "Sapphic and lesbian theme focus.",
              dataType: "boolean",
              defaultValue: true
            },
            {
              id: "pagan",
              name: "Pagan Spirituality Focus",
              description: "Pagan nature spirituality.",
              dataType: "boolean",
              defaultValue: true
            },
            {
              id: "barefootNaturism",
              name: "Barefoot Naturism Theme",
              description: "Barefoot naturism and freedom in nature.",
              dataType: "boolean",
              defaultValue: true
            },
            {
              id: "noMenOrKids",
              name: "No Men or Kids Directive",
              description: "Exclusive female adult narrative space.",
              dataType: "boolean",
              defaultValue: true
            }
          ]
        },
        {
          id: "beliefs",
          name: "Spirituality & Beliefs Defaults",
          description: "Mythological, spiritual, and religious baseline options.",
          options: [
            {
              id: "religion",
              name: "Mythological Framework",
              description: "Mythological or spiritual framework archetype.",
              dataType: "select",
              defaultValue: "Norse",
              allowedValues: ["Norse", "Celtic", "Slavic", "Greek", "None"]
            },
            {
              id: "animismSpirits",
              name: "Animism & Nature Spirits",
              description: "Nature spirit animism and woodland elementals.",
              dataType: "boolean",
              defaultValue: false
            },
            {
              id: "astrologicalRituals",
              name: "Astrological Ritual Motifs",
              description: "Celestial and astrological ritual motifs.",
              dataType: "boolean",
              defaultValue: false
            }
          ]
        },
        {
          id: "concertPerformance",
          name: "Concert & Performance Defaults",
          description: "Live concert acoustics and performance style options.",
          options: [
            {
              id: "acousticBarnEcho",
              name: "Acoustic Barn Echo",
              description: "Natural barn echo acoustics.",
              dataType: "boolean",
              defaultValue: false
            },
            {
              id: "aCappellaFocus",
              name: "A Cappella Focus",
              description: "Focus on pure vocal harmony without instruments.",
              dataType: "boolean",
              defaultValue: false
            },
            {
              id: "callAndResponse",
              name: "Call & Response Patterns",
              description: "Call-and-response vocal structures.",
              dataType: "boolean",
              defaultValue: true
            },
            {
              id: "acousticImprovisation",
              name: "Acoustic Jam Improvisation",
              description: "Spontaneous acoustic jam solos.",
              dataType: "boolean",
              defaultValue: false
            }
          ]
        },
        {
          id: "audience",
          name: "Audience Settings",
          description: "Live audience participation and crowd noise effects.",
          options: [
            {
              id: "audienceInteraction",
              name: "Live Audience Interaction",
              description: "Enable live audience crowd effects.",
              dataType: "boolean",
              defaultValue: true
            },
            {
              id: "audienceClapping",
              name: "Crowd Rhythmic Clapping",
              description: "Rhythmic crowd clapping.",
              dataType: "boolean",
              defaultValue: true
            },
            {
              id: "audienceStomping",
              name: "Crowd Boot Stomping",
              description: "Audience boot stomping.",
              dataType: "boolean",
              defaultValue: false
            },
            {
              id: "audienceCheering",
              name: "Crowd Cheering Sounds",
              description: "Live crowd cheering.",
              dataType: "boolean",
              defaultValue: true
            },
            {
              id: "audienceSinging",
              name: "Crowd Sing-Along",
              description: "Audience singing along.",
              dataType: "boolean",
              defaultValue: false
            },
            {
              id: "audienceSingsChorus",
              name: "Crowd Sings Chorus",
              description: "Audience singing chorus parts.",
              dataType: "boolean",
              defaultValue: false
            }
          ]
        },
        {
          id: "coreInstruments",
          name: "Core Instruments",
          description: "Traditional folk and ancient instrument baseline toggles.",
          options: [
            {
              id: "useInstruments",
              name: "Use Instrumental Accompaniment",
              description: "Enable instrumental accompaniment.",
              dataType: "boolean",
              defaultValue: true
            },
            {
              id: "acousticOnly",
              name: "Strictly Acoustic Instruments",
              description: "Strictly acoustic non-electric instruments.",
              dataType: "boolean",
              defaultValue: false
            },
            {
              id: "steelpanDrums",
              name: "Steelpan Drums",
              description: "Steelpan percussion.",
              dataType: "boolean",
              defaultValue: false
            },
            {
              id: "didgeridoo",
              name: "Aboriginal Didgeridoo",
              description: "Aboriginal didgeridoo.",
              dataType: "boolean",
              defaultValue: false
            },
            {
              id: "bullroarer",
              name: "Ancient Bullroarer",
              description: "Ancient bullroarer wind instrument.",
              dataType: "boolean",
              defaultValue: false
            },
            {
              id: "boneFlute",
              name: "Prehistoric Bone Flute",
              description: "Prehistoric bone flute.",
              dataType: "boolean",
              defaultValue: false
            },
            {
              id: "logDrum",
              name: "Log Drum",
              description: "Traditional wooden log drum.",
              dataType: "boolean",
              defaultValue: false
            },
            {
              id: "jawHarp",
              name: "Jaw Harp / Mouth Harp",
              description: "Resonant jaw harp / mouth harp.",
              dataType: "boolean",
              defaultValue: false
            },
            {
              id: "stoneLithophone",
              name: "Stone Lithophone",
              description: "Ancient stone lithophone resonance.",
              dataType: "boolean",
              defaultValue: false
            },
            {
              id: "bagpipes",
              name: "Highland Bagpipes",
              description: "Highland bagpipes.",
              dataType: "boolean",
              defaultValue: false
            },
            {
              id: "crwth",
              name: "Welsh Crwth Bowed Lyre",
              description: "Welsh bowed lyre (Crwth).",
              dataType: "boolean",
              defaultValue: false
            }
          ]
        },
        {
          id: "lyricalStyle",
          name: "Lyrical Style & Tone",
          description: "Poetic style, emotional tone, and communication behavior toggles.",
          options: [
            {
              id: "rhymeScheme",
              name: "Default Rhyme Scheme",
              description: "Default rhyme scheme.",
              dataType: "string",
              defaultValue: "AABB"
            },
            {
              id: "doubleEntendres",
              name: "Double Entendres",
              description: "Double entendres and dual meanings.",
              dataType: "boolean",
              defaultValue: false
            },
            {
              id: "passiveAggressive",
              name: "Passive Aggressive Tone",
              description: "Subtle passive-aggressive lyrical tone.",
              dataType: "boolean",
              defaultValue: false
            },
            {
              id: "politeness",
              name: "Polite Lyrical Tone",
              description: "Overly polite lyrical phrasing.",
              dataType: "boolean",
              defaultValue: false
            },
            {
              id: "rude",
              name: "Brutally Direct / Rude",
              description: "Brutally direct or rude delivery.",
              dataType: "boolean",
              defaultValue: false
            },
            {
              id: "rivalry",
              name: "Playful Band Rivalry",
              description: "Playful band member rivalry.",
              dataType: "boolean",
              defaultValue: false
            },
            {
              id: "gothicMelancholy",
              name: "Gothic Melancholy Mood",
              description: "Gothic melancholic mood.",
              dataType: "boolean",
              defaultValue: false
            },
            {
              id: "vocalPolyphony",
              name: "Vocal Polyphony",
              description: "Multi-layered vocal polyphony.",
              dataType: "boolean",
              defaultValue: false
            },
            {
              id: "poeticAllegory",
              name: "Poetic Allegory",
              description: "Allegorical storytelling.",
              dataType: "boolean",
              defaultValue: true
            },
            {
              id: "storytellerBallad",
              name: "Storyteller Ballad",
              description: "Traditional narrative ballad phrasing.",
              dataType: "boolean",
              defaultValue: false
            },
            {
              id: "colorCoding",
              name: "Singer Voice Color Coding",
              description: "Color-coded singer voice bracket tags.",
              dataType: "boolean",
              defaultValue: true
            }
          ]
        }
      ]
    },
    {
      id: "intentEnergy",
      groupNumber: 3,
      name: "Intent & Energy",
      description: "Selection of musical umbrella focus group (Dance, Brain, Chill, Feelings) to define energy, tempo, and intent.",
      subgroups: [
        {
          id: "focusGroup",
          name: "Umbrella Focus Selection",
          description: "Selection of specific umbrella focus group defining musical intent and energy.",
          options: [
            {
              id: "selectedFocusGroup",
              name: "Umbrella Focus Group",
              description: "Specific umbrella focus group (e.g. Club & Electronic, Minimalist Ambient, Cinematic & Atmospheric, Raw & Angsty).",
              dataType: "select",
              defaultValue: "",
              allowedValues: [
                "club_electronic", "urban_street", "retro_dance", "rock_heavy_beats", "festive_carnival",
                "minimalist_ambient", "acoustic_focus", "neuro_music", "nature_blend", "symphonic_focus",
                "cinematic_atmospheric", "organic_chill", "meditation_wellness", "spiritual_chant", "lullaby_slumber",
                "raw_angsty", "soulful_roots", "epic_dramatic", "nostalgic_bittersweet", "cinematic_scifi"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "vocalAccentTone",
      groupNumber: 4,
      name: "Vocal Dialect & Emotion",
      description: "Regional dialects, language accents, and track-wide emotional atmosphere.",
      subgroups: [
        {
          id: "accent",
          name: "Regional Dialects & Accents",
          description: "Selection of global regional dialects, accents, or fictional languages.",
          options: [
            {
              id: "selectedDialects",
              name: "Selected Regional Dialects",
              description: "Array of selected dialect codes (e.g. en-NL, mn-MN, pir-ENG, rob-ENG).",
              dataType: "array",
              defaultValue: []
            }
          ]
        },
        {
          id: "emotion",
          name: "Track Emotion",
          description: "Primary emotional atmosphere and vocal vibe.",
          options: [
            {
              id: "selectedEmotions",
              name: "Selected Track Emotions",
              description: "Array of selected emotion tags (e.g. Joyful, Melancholic, Fiery, Ethereal).",
              dataType: "array",
              defaultValue: []
            }
          ]
        }
      ]
    },
    {
      id: "composer",
      groupNumber: 5,
      name: "Styles & Instruments",
      description: "Genre styles and featured instrument track selection.",
      subgroups: [
        {
          id: "styles",
          name: "Genre Styles",
          description: "Selection of musical genre style tags.",
          options: [
            {
              id: "dialogSelectedStyles",
              name: "Selected Genre Styles",
              description: "Selected genre styles (e.g. Dutch Folk, Progressive Rock, Ambient Synth).",
              dataType: "array",
              defaultValue: []
            }
          ]
        },
        {
          id: "instruments",
          name: "Instrument Tracks",
          description: "Selection of featured instruments in the mix.",
          options: [
            {
              id: "dialogSelectedInstruments",
              name: "Selected Instrument Tracks",
              description: "Selected instrument names (e.g. Fender Jazz Bass, Roland Juno-106, Crwth, Bodhrán).",
              dataType: "array",
              defaultValue: []
            }
          ]
        }
      ]
    },
    {
      id: "singers",
      groupNumber: 6,
      name: "Band & Lead Vocalist",
      description: "Ensemble band arrangement, lead singer selection, individual singer main instruments, and vocal mix shares.",
      subgroups: [
        {
          id: "bandFormation",
          name: "Band Ensemble",
          description: "Selection of full band or vocal subgroup formation.",
          options: [
            {
              id: "selectedBand",
              name: "Band Ensemble Formation",
              description: "Active band configuration.",
              dataType: "select",
              defaultValue: "katje-full",
              allowedValues: ["katje-full", "duo-miranda-annelies", "duo-fannie-emma", "solo-miranda", "solo-fannie"]
            }
          ]
        },
        {
          id: "leadVocalist",
          name: "Lead Vocalist",
          description: "Primary lead singer selection.",
          options: [
            {
              id: "selectedLead",
              name: "Designated Lead Vocalist",
              description: "Designated lead singer.",
              dataType: "select",
              defaultValue: "fannie",
              allowedValues: ["miranda", "annelies", "fannie", "emma"]
            }
          ]
        },
        {
          id: "individualInstruments",
          name: "Individual Singer Main Instruments",
          description: "Specific instrument assignments per singer.",
          options: [
            {
              id: "singerInstruments",
              name: "Singer Instrument Map",
              description: "Mapping of singer ID to assigned main instrument.",
              dataType: "object",
              defaultValue: { miranda: "Fender Jazz Bass", annelies: "Crwth / Acoustic Guitar", fannie: "Drums / Bodhrán", emma: "Roland Juno-106 Synth" }
            }
          ]
        },
        {
          id: "vocalMix",
          name: "Lead Singing Share",
          description: "Percentage share of lead vocals vs backing ensemble.",
          options: [
            {
              id: "leadSingingPercentage",
              name: "Lead Singing Percentage Share",
              description: "Percentage of total vocals sung by the designated lead.",
              dataType: "slider",
              defaultValue: 50,
              range: { min: 0, max: 100 }
            }
          ]
        }
      ]
    },
    {
      id: "musicTheory",
      groupNumber: 7,
      name: "Time Sig & Musical Key",
      description: "Rhythmic time signature meter and harmonic key signature selection.",
      subgroups: [
        {
          id: "timeSignature",
          name: "Time Signature Meter",
          description: "Rhythmic meter and time signature.",
          options: [
            {
              id: "selectedTimeSignature",
              name: "Time Signature Meter",
              description: "Active time signature meter.",
              dataType: "select",
              defaultValue: "4/4",
              allowedValues: ["4/4", "3/4", "6/8", "5/4", "7/8", "12/8"]
            }
          ]
        },
        {
          id: "musicalKey",
          name: "Musical Key Signature",
          description: "Harmonic key and tonal center.",
          options: [
            {
              id: "selectedMusicalKey",
              name: "Musical Key Signature",
              description: "Active musical key signature.",
              dataType: "select",
              defaultValue: "C Major",
              allowedValues: [
                "C Major", "G Major", "D Major", "A Major", "E Major", "B Major", "F Major",
                "A Minor", "E Minor", "B Minor", "F# Minor", "C# Minor", "D Minor", "G Minor"
              ]
            }
          ]
        }
      ]
    },
    {
      id: "structure",
      groupNumber: 8,
      name: "Song Structure",
      description: "Song arrangement presets defining verse, chorus, bridge, and solo ordering.",
      subgroups: [
        {
          id: "songStructure",
          name: "Song Structure Presets",
          description: "Preset structural arrangements.",
          options: [
            {
              id: "selectedStructurePreset",
              name: "Structure Preset Template",
              description: "Selected song structure template.",
              dataType: "select",
              defaultValue: "standard",
              allowedValues: ["standard", "extended", "ballad", "folk-simple", "prog-epic"]
            }
          ]
        }
      ]
    },
    {
      id: "poetics",
      groupNumber: 9,
      name: "Rhyme Scheme & Meter",
      description: "Poetic rhyme pattern and verse meter constraints.",
      subgroups: [
        {
          id: "rhymeScheme",
          name: "Rhyme Scheme Pattern",
          description: "Lyrical rhyme scheme pattern.",
          options: [
            {
              id: "selectedRhymeScheme",
              name: "Rhyme Scheme Pattern",
              description: "Active rhyme scheme constraint.",
              dataType: "select",
              defaultValue: "aabb",
              allowedValues: ["aabb", "abab", "abba", "abcb", "monorhyme", "freeverse"]
            }
          ]
        }
      ]
    },
    {
      id: "sliders",
      groupNumber: 10,
      name: "Fine-Tuning Sliders",
      description: "Granular sliders for topic themes, energy, and musical parameters with per-singer override support.",
      subgroups: [
        {
          id: "sapphic",
          name: "Sapphic Level",
          description: "Slider for sapphic/lesbian theme intensity.",
          options: [
            {
              id: "sliderSapphic",
              name: "Sapphic Theme Level",
              description: "Sapphic romance and theme level.",
              dataType: "slider",
              defaultValue: 0,
              range: { min: 0, max: 100 }
            },
            {
              id: "isEnabledSapphic",
              name: "Enable Sapphic Slider",
              description: "Enable sapphic slider constraint.",
              dataType: "boolean",
              defaultValue: false
            }
          ]
        },
        {
          id: "wittyness",
          name: "Wittyness Level",
          description: "Slider for humor, wit, and silliness.",
          options: [
            {
              id: "sliderWittyness",
              name: "Wittyness Level",
              description: "Wittyness and humor level.",
              dataType: "slider",
              defaultValue: 0,
              range: { min: 0, max: 100 }
            },
            {
              id: "isEnabledWittyness",
              name: "Enable Wittyness Slider",
              description: "Enable wittyness slider constraint.",
              dataType: "boolean",
              defaultValue: false
            }
          ]
        },
        {
          id: "weirdness",
          name: "Weirdness Level",
          description: "Slider for surrealism and wildness.",
          options: [
            {
              id: "sliderWeirdness",
              name: "Weirdness Level",
              description: "Surrealism and weirdness level.",
              dataType: "slider",
              defaultValue: 0,
              range: { min: 0, max: 100 }
            },
            {
              id: "isEnabledWeirdness",
              name: "Enable Weirdness Slider",
              description: "Enable weirdness slider constraint.",
              dataType: "boolean",
              defaultValue: false
            }
          ]
        },
        {
          id: "loudness",
          name: "Loudness Level",
          description: "Slider for dynamic loudness and acoustic drive.",
          options: [
            {
              id: "sliderLoudness",
              name: "Loudness Level",
              description: "Loudness and acoustic drive level.",
              dataType: "slider",
              defaultValue: 0,
              range: { min: 0, max: 100 }
            },
            {
              id: "isEnabledLoudness",
              name: "Enable Loudness Slider",
              description: "Enable loudness slider constraint.",
              dataType: "boolean",
              defaultValue: false
            }
          ]
        },
        {
          id: "epic",
          name: "Epic Scale",
          description: "Slider for cinematic epicness and dramatic scale.",
          options: [
            {
              id: "sliderEpic",
              name: "Epic Scale Level",
              description: "Epic dramatic scale level.",
              dataType: "slider",
              defaultValue: 0,
              range: { min: 0, max: 100 }
            },
            {
              id: "isEnabledEpic",
              name: "Enable Epic Scale Slider",
              description: "Enable epic scale slider constraint.",
              dataType: "boolean",
              defaultValue: false
            }
          ]
        },
        {
          id: "rating",
          name: "Content Rating",
          description: "Slider for content safety rating (G, PG, PG-13, R, NC-17).",
          options: [
            {
              id: "sliderRating",
              name: "Content Safety Rating Index",
              description: "Content safety rating step index.",
              dataType: "slider",
              defaultValue: 0,
              range: { min: 0, max: 100 }
            },
            {
              id: "isEnabledRating",
              name: "Enable Rating Slider",
              description: "Enable content rating slider constraint.",
              dataType: "boolean",
              defaultValue: false
            }
          ]
        },
        {
          id: "complexity",
          name: "Vocabulary Complexity",
          description: "Slider for lyrical vocabulary sophistication.",
          options: [
            {
              id: "sliderComplexity",
              name: "Vocabulary Complexity Level",
              description: "Vocabulary complexity level.",
              dataType: "slider",
              defaultValue: 0,
              range: { min: 0, max: 100 }
            },
            {
              id: "isEnabledComplexity",
              name: "Enable Complexity Slider",
              description: "Enable complexity slider constraint.",
              dataType: "boolean",
              defaultValue: false
            }
          ]
        },
        {
          id: "repetitiveness",
          name: "Chorus Repetitiveness",
          description: "Slider for chorus repetition frequency.",
          options: [
            {
              id: "sliderRepetitiveness",
              name: "Chorus Repetitiveness Level",
              description: "Chorus repetitiveness level.",
              dataType: "slider",
              defaultValue: 0,
              range: { min: 0, max: 100 }
            },
            {
              id: "isEnabledRepetitiveness",
              name: "Enable Repetitiveness Slider",
              description: "Enable repetitiveness slider constraint.",
              dataType: "boolean",
              defaultValue: false
            }
          ]
        },
        {
          id: "harmonics",
          name: "Harmonic Density",
          description: "Slider for vocal harmony density and layering.",
          options: [
            {
              id: "sliderHarmonics",
              name: "Harmonic Vocal Density Level",
              description: "Harmonic vocal density level.",
              dataType: "slider",
              defaultValue: 0,
              range: { min: 0, max: 100 }
            },
            {
              id: "isEnabledHarmonics",
              name: "Enable Harmonics Slider",
              description: "Enable harmonics slider constraint.",
              dataType: "boolean",
              defaultValue: false
            }
          ]
        },
        {
          id: "reverb",
          name: "Reverb Space",
          description: "Slider for acoustic reverb hall space.",
          options: [
            {
              id: "sliderReverb",
              name: "Reverb Space Level",
              description: "Acoustic reverb space level.",
              dataType: "slider",
              defaultValue: 0,
              range: { min: 0, max: 100 }
            },
            {
              id: "isEnabledReverb",
              name: "Enable Reverb Slider",
              description: "Enable reverb slider constraint.",
              dataType: "boolean",
              defaultValue: false
            }
          ]
        },
        {
          id: "tempo",
          name: "Tempo BPM",
          description: "Slider for exact music tempo speed in BPM.",
          options: [
            {
              id: "sliderTempoBpm",
              name: "Tempo Speed in BPM",
              description: "Tempo speed in BPM.",
              dataType: "slider",
              defaultValue: 120,
              range: { min: 40, max: 220 }
            },
            {
              id: "isEnabledTempo",
              name: "Enable Tempo BPM Slider",
              description: "Enable exact tempo BPM constraint.",
              dataType: "boolean",
              defaultValue: false
            }
          ]
        },
        {
          id: "strictness",
          name: "Prompt Strictness",
          description: "Slider for how strictly the AI follows prompt directives.",
          options: [
            {
              id: "sliderStrictness",
              name: "Prompt Strictness Level",
              description: "Prompt strictness level.",
              dataType: "slider",
              defaultValue: 0,
              range: { min: 0, max: 100 }
            },
            {
              id: "isEnabledStrictness",
              name: "Enable Strictness Slider",
              description: "Enable prompt strictness constraint.",
              dataType: "boolean",
              defaultValue: false
            }
          ]
        }
      ]
    }
  ]
};

export function downloadDashboardOptionsData() {
  const dataStr = JSON.stringify(DASHBOARD_OPTIONS_DATA, null, 2);
  const blob = new Blob([dataStr], { type: "application/json;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `noor-dashboard-options-v${DASHBOARD_OPTIONS_DATA_VERSION}.json`;
  a.click();
  URL.revokeObjectURL(url);
}
