/**
 * Noor Music - Abcoude Farmhouse & Studio Tree Dataset
 * 
 * Detailed tree-structured dataset (/Farm/House/Room/Object) defining
 * the singers' homestead, ground-floor bedrooms, two attics connected by
 * an elevated roof terrace, converted stables studio, guest interview lounge,
 * barn animals, surrounding pastures, garden statues, vegetable garden,
 * sauna, pool, and multi-car garage.
 */

export const FARMHOUSE_SCHEMA_VERSION = "1.0.0";

export const FARMHOUSE_JSON = {
  "$schema": `https://katje.bv/schemas/v${FARMHOUSE_SCHEMA_VERSION}/farmhouse.json`,
  "version": FARMHOUSE_SCHEMA_VERSION,
  "title": "Abcoude Farmhouse & Studio Tree Dataset",
  "description": "Comprehensive tree-structured specification of the Noor singers' homestead farm in Abcoude, Utrecht, Netherlands, formed by joining two historic buildings into a single spacious ground-floor home with two attics connected by a central roof terrace.",
  "Farm": {
    "Name": "Abcoude Homestead Farm & Recording Studio",
    "Location": "Abcoude, Utrecht Province, Netherlands",
    "Description": "Historic 18th-century Dutch thatched-roof homestead created by joining two historic buildings into one massive ground-floor home with two distinct attics linked by a central elevated roof terrace. Features 6 ground-floor bedrooms with King-size beds (4 for the singers, 2 for guests), green polder pastures, weeping willow trees, garden statues, organic vegetable garden, a massive renovated stables recording studio & guest interview lounge, outdoor heated swimming pool, Scandinavian sauna, and an expansive multi-car garage.",
    "House": {
      "Architecture": {
        "Structure": "Joined Twin Dutch Homestead (Two merged 18th-century thatched-roof buildings forming one continuous single-level ground floor home with two independent attics above)",
        "GroundFloorSummary": "Single-level ground floor containing the rustic kitchen, main living lounge & hearth, 6 bedrooms with King-size beds for two persons, luxury bathroom, guest toilet, and sauna access",
        "UpperFloorsSummary": "Two separate attics (West Attic hobby & photo studio, East Attic reading & music loft) connected by a central outdoor elevated roof terrace with connecting doors from both attics"
      },
      "Kitchen": {
        "Name": "Rustic Country Kitchen",
        "Description": "Warm rustic farmhouse kitchen located on the ground floor with hand-painted 18th-century Delfts Blue splashback tiles, terracotta floor, large reclaimed oak dining table seating 12, vintage gas range, copper cookware, espresso bar, and windows overlooking the herb and vegetable garden.",
        "Objects": {
          "OakDiningTable": "Large reclaimed Dutch oak dining table seating 12 with mismatched wooden chairs",
          "GasRange": "6-burner vintage stainless steel gas range with hanging polished copper pots and pans",
          "CoffeeStation": "Professional Italian La Marzocco espresso machine surrounded by ceramic mug collections",
          "DelftTiles": "Original 18th-century blue and white Delftware tiles depicting Dutch countryside scenes",
          "HerbWindowsill": "Wide sunny windowsill filled with terracotta pots of basil, rosemary, mint, sage, and thyme",
          "PantryLarder": "Walk-in pantry lined with glass jars of homemade fruit jams, pickles, and artisanal teas"
        }
      },
      "LivingRoom": {
        "Name": "Cozy Band Lounge & Hearth",
        "Description": "Spacious ground-floor band lounge featuring exposed oak ceiling beams, brick fireplace hearth, plush cognac leather sectionals, vintage Persian rug, acoustic guitars, and floor-to-ceiling mahogany bookshelves.",
        "Objects": {
          "Fireplace": "Open red-brick wood-burning hearth with stacked birch logs beside iron hearth tools",
          "LeatherSofas": "Deep worn cognac leather sectionals adorned with handwoven wool blankets and linen pillows",
          "Bookshelves": "Floor-to-ceiling mahogany shelves stuffed with vinyl records, novels, sheet music, and awards",
          "RecordPlayer": "Vintage McIntosh tube-amplifier turntable with vintage floorstanding wooden speakers",
          "AcousticNook": "Corner guitar stand holding Miranda's acoustic bass, Fannie's parlor guitar, and Annelies's acoustic guitar"
        }
      },
      "BedroomMiranda": {
        "Name": "Miranda's Bedroom (Ground Floor West Wing)",
        "Description": "Ground floor West Wing master bedroom featuring a luxurious King-size bed for two persons (200x200cm) with low oak platform frame, macrame wall hangings, custom Orange bass guitar stack, vinyl crates, and double French doors to the garden.",
        "Objects": {
          "KingBed": "King-size bed for two persons (200x200cm) with crisp white linen sheets, indigo batik quilt, and leather throw pillows",
          "BassRig": "Custom Orange bass amplifier stack and pedalboard near her corner writing desk",
          "FrenchDoors": "Double French doors opening onto a private patio with river canal view"
        }
      },
      "BedroomAnnelies": {
        "Name": "Annelies's Bedroom (Ground Floor North Wing)",
        "Description": "Ground floor North Wing minimalist Scandinavian sanctuary featuring a King-size bed for two persons (200x200cm) with white-washed timber frame and sage green duvet, keyboard workstation, synthesizer rack, and window seat.",
        "Objects": {
          "KingBed": "King-size bed for two persons (200x200cm) with white-washed timber frame and plush sage green duvet",
          "SynthDesk": "Sleek wooden workstation with Moog synthesizer, audio interface, and studio headphones",
          "WindowSeat": "Cushioned bay window seat overlooking the sheep meadow, weeping willows, and canal"
        }
      },
      "BedroomFannie": {
        "Name": "Fannie's Bedroom (Ground Floor East Wing)",
        "Description": "Ground floor East Wing warm rustic bedroom featuring an antique brass King-size bed for two persons (200x200cm) with patchwork quilt, mandolin display, dried lavender bundles, and handwoven tapestry.",
        "Objects": {
          "KingBed": "Antique brass King-size bed frame for two persons (200x200cm) with patchwork quilt and feather pillows",
          "MandolinDisplay": "Wall-mounted vintage acoustic mandolin beside dried lavender bundles",
          "Tapestry": "Hand-loomed Dutch countryside wall hanging behind the bed"
        }
      },
      "BedroomEmma": {
        "Name": "Emma's Bedroom (Ground Floor South Wing)",
        "Description": "Ground floor South Wing cozy bedroom featuring a low oak King-size bed for two persons (200x200cm) with plush linen bedding, writing desk with vintage typewriter, whisper vocal microphone, and fairy lights.",
        "Objects": {
          "KingBed": "Low oak King-size bed for two persons (200x200cm) with plush linen duvet, throw blankets, and fairy lights",
          "WritingDesk": "Vintage wooden writing desk with typewriter, songwriting journals, and acoustic ukulele"
        }
      },
      "GuestBedroom1": {
        "Name": "Guest Bedroom 1 (Ground Floor East Wing)",
        "Description": "Spacious ground floor guest bedroom featuring a comfortable King-size bed for two persons (200x200cm), warm neutral decor, oak wardrobe, reading armchair, and garden view.",
        "Objects": {
          "KingBed": "King-size bed for two persons (200x200cm) with crisp white duvet and plush pillows",
          "Armchair": "Cozy leather reading armchair with floor lamp and side table"
        }
      },
      "GuestBedroom2": {
        "Name": "Guest Bedroom 2 (Ground Floor West Wing)",
        "Description": "Inviting ground floor guest bedroom featuring a King-size bed for two persons (200x200cm), oak vanity desk, luggage bench, and glass sliding door to the side terrace.",
        "Objects": {
          "KingBed": "King-size bed for two persons (200x200cm) with linen bedding and soft woven blankets",
          "VanityDesk": "Oak vanity table with mirror, lamp, and guest welcome tray"
        }
      },
      "WestAttic": {
        "Name": "West Attic: Creative Hobby Space & Private Photo Studio",
        "Description": "First attic space located in the West building under sloped oak rafters and glass skylights, dedicated to equipment maintenance, instrument soldering, art painting easels, softbox studio lights, and private band photoshoots. Features an exterior door opening onto the central connecting Roof Terrace.",
        "Objects": {
          "SolderingWorkbench": "Electronics repair workbench equipped with soldering iron, wire spools, pedal parts, and testing meters",
          "ArtEaselAndPaints": "Wooden painting easel surrounded by acrylic paint tubes, canvas stretchers, and sketchbooks",
          "PhotoBackdropAndSoftboxes": "Professional seamless backdrop roll, studio softbox lights, and camera tripod for private band photoshoots",
          "PrivatePhotoArchive": "Leather-bound albums and framed prints from the band's private photo collection",
          "TerraceDoor": "Solid timber door with glass window leading directly onto the central elevated Roof Terrace"
        }
      },
      "EastAttic": {
        "Name": "East Attic: Music Nook & Reading Loft",
        "Description": "Second attic space located in the East building under sloped wooden beams and skylights, featuring an acoustic instrument nook, vinyl record archives, plush beanbag lounge, and songwriting desk. Features an exterior door opening onto the central connecting Roof Terrace.",
        "Objects": {
          "AcousticInstrumentNook": "Corner display with acoustic guitars, ukuleles, and percussion shakers",
          "VinylArchive": "Wooden crates housing rare vinyl records and vintage music magazines",
          "BeanbagLounge": "Plush floor cushions and beanbags under warm fairy lights",
          "TerraceDoor": "Solid timber door with glass window leading directly onto the central elevated Roof Terrace"
        }
      },
      "RoofTerrace": {
        "Name": "Central Elevated Connecting Roof Terrace",
        "Description": "Spacious elevated outdoor roof terrace positioned between the West Attic and East Attic, physically bridging the two upper building structures. Features teak outdoor lounge furniture, potted lavender, festoon string lights, and exterior doors connecting to both attics with panoramic views over thatched roofs, swimming pool, and pastures.",
        "Objects": {
          "TeakLoungeSet": "Weatherproof teak outdoor sofa and lounge chairs with navy cushions around a low coffee table",
          "FestoonLighting": "Warm Edison bulb festoon lights strung between the two attic gables",
          "PottedPlants": "Terracotta pots of lavender, hydrangeas, and dwarf olive trees",
          "ConnectingDoors": "Two timber entrance doors leading into the West Attic and East Attic respectively"
        }
      },
      "Bathroom": {
        "Name": "Main Farmhouse Bathroom",
        "Description": "Luxurious ground-floor spa-like bathroom featuring a freestanding clawfoot porcelain tub, walk-in slate rain shower, double marble basin vanity, brass faucets, and eucalyptus sprigs.",
        "Objects": {
          "ClawfootTub": "Deep porcelain double-ended clawfoot bathtub with brass telephone shower fixture and wooden bath tray",
          "RainShower": "Glass-enclosed walk-in shower with natural slate river rock floor and rainfall showerhead",
          "VanityMirror": "Large gilt-framed vintage mirror above double marble basin sink with brass faucets"
        }
      },
      "Toilet": {
        "Name": "Powder Room & Guest Toilet",
        "Description": "Charming ground-floor guest toilet with vintage botanical wallpaper, Victorian pull-chain porcelain water tank, marble pedestal sink, and scented candle display.",
        "Objects": {
          "PullChainToilet": "Classic Victorian style porcelain toilet with overhead wooden water tank and polished brass chain",
          "PedestalSink": "Compact white ceramic pedestal sink with lavender scented soaps and cloth hand towels"
        }
      },
      "Sauna": {
        "Name": "Scandinavian Cedarwood Sauna",
        "Description": "Aromatic Finnish red cedarwood sauna room with multi-tiered wooden benches, lava stone stove, wooden water bucket, long ladle, and warm ambient lighting.",
        "Objects": {
          "SaunaStove": "Stainless steel sauna heater piled with natural volcanic stones",
          "CedarBenches": "Two-tier smooth red cedar slatted benches accommodating up to 8 people",
          "BucketAndLadle": "Handcrafted wooden bucket and long ladle for water steam pour"
        }
      },
      "SwimmingPool": {
        "Name": "Outdoor Heated Swimming Pool & Patio",
        "Description": "Heated outdoor freshwater swimming pool with turquoise mosaic tiles, bluestone patio, teak sun loungers, outdoor shower, and garden statues.",
        "Objects": {
          "PoolWater": "Crystal clear heated turquoise water with subtle submerged pool illumination",
          "TeakLoungers": "Adjustable teak wood sun loungers with thick navy-blue waterproof cushions and plush towels",
          "PoolPatio": "Smooth bluestone patio surrounding the pool with potted hydrangeas and stone garden statues"
        }
      }
    },
    "StablesAndBarn": {
      "Name": "Timber Stables, Recording Studio & Livestock Barn",
      "Description": "Renovated 19th-century timber stable complex housing a large soundproof recording studio, interview guest lounge, animal stalls, and hayloft.",
      "StablesRecordingStudio": {
        "Name": "Converted Stables Recording Studio & Interview Lounge",
        "Description": "Expansive converted timber stable wing repurposed into a state-of-the-art soundproof recording studio, acoustic live tracking room, instrument vault, and plush guest lounge for interviews and press visits.",
        "Objects": {
          "SoundproofLiveRoom": "Acoustically treated live tracking room with floating oak floors, drum booth, and isolation booth for full band sessions",
          "ControlRoom": "32-channel vintage Neve analog recording console, Neumann tube microphones, rack compressors, and mastering monitors",
          "InterviewGuestLounge": "Plush velvet chesterfield sofa lounge with espresso bar, mood lamps, and press backdrop for journalist interviews",
          "InstrumentVault": "Climate-controlled wall racks showcasing vintage Fender bass guitars, electric guitars, keyboards, drum kits, and acoustic instruments"
        }
      },
      "GoatPen": {
        "Description": "Spacious clean wooden goat barn and enclosure with fresh straw bedding, climbing ramps, salt licks, and outdoor paddock access.",
        "Animals": "12 female goats (Bram, Klaartje, Liesje, Saar, Fleur, Lotte, Mina, Pip, Katje, Jet, Nora, and Sophie)"
      },
      "SheepMeadow": {
        "Description": "Fenced grassy paddock attached to the stables with timber shelter, shade trees, and freshwater drinking trough.",
        "Animals": "10 female sheep (fluffy Texel and Zwartbles female sheep: Snoes, Lotje, Mette, Tess, Brechtje, Doortje, Fien, Guusje, Hilke, and Imke)"
      },
      "ChickenCoop": {
        "Description": "Protected timber hen coop with nesting boxes, roosting bars, spacious outdoor wire run, and hen feeders.",
        "Animals": "15 female laying hens (Noord-Hollandse Blauwe and Sussex female hens providing fresh daily eggs)"
      },
      "Hayloft": {
        "Description": "Upper barn loft filled with sweet-smelling dry hay bales, old wooden ladders, and vintage farm equipment displays."
      }
    },
    "FieldsAndGardens": {
      "Name": "Pastures, Gardens, Statues & Surrounding Land",
      "Description": "Expansive 5-acre rural landscape surrounding the farmhouse, featuring flower beds, classical garden statues, organic vegetable garden, orchard, and river canals.",
      "VegetableGarden": {
        "Description": "Raised wooden organic vegetable garden beds producing heirloom tomatoes, carrots, zucchini, strawberries, and crisp lettuces, alongside a glass greenhouse."
      },
      "DecorativeStatues": {
        "Description": "Classical Dutch sandstone and bronze garden sculptures of mythical figures, birds, and animals placed tastefully along the lawns and pathways."
      },
      "TreesAndBushes": {
        "WillowTrees": "Row of weeping willow trees hanging gently over the canal border",
        "AppleOrchard": "Small orchard of 12 heirloom Elstar apple trees",
        "BerryBushes": "Wild blackberry, raspberry, and redcurrant bushes along the ditch",
        "FlowerGardens": "Beds of Dutch tulips, lavender, hydrangeas, and wildflowers"
      },
      "SurroundingLandscape": "Green polder pasture land, narrow drainage canals with lily pads, wooden footbridges, canal pier with bench, and distant windmills under a wide Dutch sky."
    },
    "ParkingGarage": {
      "Name": "Expansive Covered Garage & Guest Parking Pavilion",
      "Description": "Huge brick garage and timber carport accommodating all 4 singers' individual cars, motorbikes, and bicycles, plus band vehicles, maintenance tools, and dedicated paved guest parking spaces.",
      "SingersVehicles": {
        "MirandaVehicles": "Miranda: 1975 Vintage Emerald Green Land Rover Defender 90 (car), 1978 Matte Black BMW R100 Custom Cafe Racer (motorbike), matte black Cannondale road bicycle",
        "AnneliesVehicles": "Annelies: 1985 Midnight Blue Saab 900 Turbo Convertible (car), Triumph Bonneville T120 in Cherry Red (motorbike), Gazelle Omafiets in sage green with wicker basket (bicycle)",
        "FannieVehicles": "Fannie: 1978 Mustard Yellow Volvo 240 DL Wagon (car), Vintage Royal Enfield Bullet 350 in Olive Green (motorbike), rustic copper touring bicycle with leather saddlebags",
        "EmmaVehicles": "Emma: 1991 Pearl White Mazda MX-5 Miata (car), Custom Honda Super Cub 125 in sky blue (motorbike), cream Dutch transport bicycle with wooden crate"
      },
      "BandVehicles": {
        "BandVan": "1984 Vintage Cream & Navy Volkswagen Transporter band tour van",
        "Scooter": "Senna Bakker's sleek yellow reporter motor scooter with press helmet"
      },
      "GuestParking": "6 dedicated paved guest parking spaces with electric vehicle charging stations and guest signage",
      "Equipment": "Wall-mounted bike racks, hydraulic car lift, tool workbench, spare tires, motorcycle gear lockers, and heavy road cases for tour gear"
    }
  }
};

/**
 * Download Farmhouse JSON dataset file
 */
export function downloadFarmhouseJson(): void {
  try {
    const dataStr = JSON.stringify(FARMHOUSE_JSON, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `farmhouse-dataset-v${FARMHOUSE_SCHEMA_VERSION}.json`;
    a.click();
    URL.revokeObjectURL(url);
  } catch (err) {
    console.error('Failed to download farmhouse JSON dataset:', err);
  }
}
