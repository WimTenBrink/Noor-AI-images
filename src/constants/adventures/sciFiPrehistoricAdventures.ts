import { AdventureCategory } from './types';

export const SCIFI_PREHISTORIC_ADVENTURES: AdventureCategory[] = [
  {
    id: 'stone_age',
    label: 'Stone Age & Prehistory',
    description: 'Prehistoric stone age settlements, Hunebedden megaliths, hunter-gatherer camps, and peat bog sanctuaries.',
    locations: [
      {
        id: 'stone_hunebedden_drenthe',
        label: 'Hunebedden Megalithic Dolmens Drenthe',
        type: 'outdoors',
        description: 'Outdoors: Massive prehistoric granite megalithic tomb boulders arranged in ancient stone chambers surrounded by oak trees and heather.'
      },
      {
        id: 'stone_flint_camp',
        label: 'Flint Knapping Fire Pit Settlement',
        type: 'outdoors',
        description: 'Outdoors: Primitive hunter-gatherer woodland camp with smoking central campfire, scattered flint flakes, hand axes, and deer hide drying racks.'
      },
      {
        id: 'stone_primeval_hut',
        label: 'Primeval Oak Thatched Hut Village',
        type: 'outdoors',
        description: 'Outdoors: Early Neolithic farming village with wattle-and-daub timber huts, reed thatch roofs, and clay pottery pots.'
      },
      {
        id: 'stone_peat_bog_sanctuary',
        label: 'Peat Bog Sacred Water Sanctuary',
        type: 'outdoors',
        description: 'Outdoors: Ancient misty peat bog wetland with dark water pools, submerged bog oak timber posts, and woven wicker footpaths.'
      },
      {
        id: 'stone_mammoth_shelter',
        label: 'Mammoth Bone Frame Winter Shelter',
        type: 'indoors',
        description: 'Indoors: Interior of a sturdy winter dome shelter constructed from curved mammoth ribs and tusks covered in thick animal furs, lit by a hearth fire.'
      },
      {
        id: 'stone_cave_hearth',
        label: 'Limestone Cave Fire Pit Hearth',
        type: 'indoors',
        description: 'Indoors: Natural limestone cavern interior lit by a roaring hearth fire, with ochre cave wall paintings of wild horses and mammoths.'
      },
      {
        id: 'stone_cozy_fur_lined_cave_nook',
        label: 'Deep Firelit Cavern Master Fur Nook',
        type: 'indoors',
        description: 'Indoors: Secluded dry limestone cave alcove lined with deep soft mammoth and reindeer furs, warmed by glowing hearth embers and wall torches.'
      },
      {
        id: 'stone_secluded_hot_spring_lagoon',
        label: 'Hidden Volcanic Hot Spring Lagoon',
        type: 'outdoors',
        description: 'Outdoors: Pristine geothermal natural warm pool sheltered between steaming rocks and giant ferns, with crystal clear warm mineral water.'
      },
      {
        id: 'stone_tribal_chieftain_lodge',
        label: 'Spacious Cedar-Pole & Fur Pavilion',
        type: 'indoors',
        description: 'Indoors: Grand tribal timber lodge with polished cedar floor, central stone fire pit, layers of soft bear and wolf pelts, and aromatic juniper smoke.'
      }
    ]
  },
  {
    id: 'dinosaurs',
    label: 'Dinosaurs & Prehistoric World',
    description: 'Prehistoric Earth with lush cycad forests, volcanic peaks, giant dinosaurs, and sky phenomena including a fiery meteorite streak.',
    locations: [
      {
        id: 'dino_fern_valley_trex',
        label: 'Cretaceous Fern Valley with Tyrannosaurus Rex',
        type: 'outdoors',
        description: 'Outdoors: Dense tropical Cretaceous valley with towering tree ferns, giant horsetails, steaming geothermal mud pools, and a distant Tyrannosaurus Rex.'
      },
      {
        id: 'dino_meteorite_horizon',
        label: 'Meteorite Streak Horizon & Prehistoric Swamp',
        type: 'outdoors',
        description: 'Outdoors: Dramatic prehistoric cypress swamp at dusk, featuring a blazing glowing meteorite streak cutting across the twilight sky over calm waters.'
      },
      {
        id: 'dino_triceratops_lagoon',
        label: 'Triceratops Watering Hole Lagoon',
        type: 'outdoors',
        description: 'Outdoors: Crystal clear prehistoric freshwater lagoon framed by giant cycad palms, flowering magnolias, and a herd of Triceratops drinking.'
      },
      {
        id: 'dino_pterosaur_cliffs',
        label: 'Pterosaur Coastal Sea Cliff Nests',
        type: 'outdoors',
        description: 'Outdoors: Sheer ocean cliffs overlooking crashing prehistoric tides, with Quetzalcoatlus and Pteranodons soaring through misty sea air.'
      },
      {
        id: 'dino_stegosaurus_forest',
        label: 'Stegosaurus Ginkgo & Conifer Forest',
        type: 'outdoors',
        description: 'Outdoors: Jurassic forest of massive ginkgo trees, araucarias, and tall conifers, with a Stegosaurus browsing foliage with spiked tail lifted.'
      },
      {
        id: 'dino_sauropod_river',
        label: 'Sauropod Brachiosaurus River Crossing',
        type: 'outdoors',
        description: 'Outdoors: Wide silt riverbed in a prehistoric valley where long-necked Brachiosaurus wade through shallow water under sunbeams.'
      },
      {
        id: 'dino_canopy_glamping_platform',
        label: 'Suspended Jungle Canopy Glamping Suite',
        type: 'indoors',
        description: 'Indoors: Bamboo and canvas pavilion suspended high in towering cycad trees, with soft feather double bed, panoramic mosquito netting, and warm torchlight.'
      },
      {
        id: 'dino_volcanic_thermal_spa_cave',
        label: 'Natural Volcanic Thermal Spa Cave',
        type: 'indoors',
        description: 'Indoors: Steamy natural volcanic cave pool with warm turquoise mineral water, smooth basalt stone ledges, glowing moss ceiling, and orchid blossoms.'
      },
      {
        id: 'dino_prehistoric_waterfall_lagoon',
        label: 'Secluded Emerald Waterfall Pool & Sandy Beach',
        type: 'outdoors',
        description: 'Outdoors: Hidden crystal waterfall cascading into a warm emerald lagoon, with private white sand beach, lush flowering vines, and sunlit shallows.'
      }
    ]
  },
  {
    id: 'space',
    label: 'Deep Space & Sci-Fi',
    description: 'Spacecraft flight decks, lunar domes, Martian colonies, orbital stations, and exotic alien worlds.',
    locations: [
      {
        id: 'space_flight_deck',
        label: 'Starship Flight Deck & Panoramic Viewscreen',
        type: 'indoors',
        description: 'Indoors: Futuristic starship bridge with holographic navigation terminals, glowing blue status lights, and a massive glass viewscreen revealing starfields.'
      },
      {
        id: 'space_lunar_base',
        label: 'Lunar Base Tranquility Crater Dome',
        type: 'indoors',
        description: 'Indoors: Pressurized glass dome observatory on the Moon\'s surface, looking out over gray crater dust, lunar rovers, and blue Earth in the black sky.'
      },
      {
        id: 'space_martian_outpost',
        label: 'Martian Red Canyon Colony Outpost',
        type: 'outdoors',
        description: 'Outdoors: Red dusty Martian canyon landscape with pressurized geodesic habitats, solar panel fields, and two small moons overhead.'
      },
      {
        id: 'space_orbital_cupola',
        label: 'Orbital Space Station Glass Cupola',
        type: 'indoors',
        description: 'Indoors: Zero-gravity observation module with multi-pane reinforced glass windows offering a breathtaking view of Earth\'s blue curvature.'
      },
      {
        id: 'space_jupiter_lounge',
        label: 'Jupiter Gas Giant Observation Deck',
        type: 'indoors',
        description: 'Indoors: Luxury orbital cruise station lounge suspended over Jupiter\'s swirling Great Red Spot and golden cloud bands.'
      },
      {
        id: 'space_nebula_deck',
        label: 'Deep Space Nebula Stargazing Deck',
        type: 'indoors',
        description: 'Indoors: Transparent glass stargazing deck immersed in glowing pink, purple, and azure cosmic dust clouds of a stellar nursery nebula.'
      },
      {
        id: 'space_exoplanet_forest',
        label: 'Exoplanet Bioluminescent Alien Forest',
        type: 'outdoors',
        description: 'Outdoors: Exotic alien planet landscape with glowing purple flora, bioluminescent giant mushrooms, twin suns setting, and floating crystal spires.'
      },
      {
        id: 'space_orbital_luxury_hotel_suite',
        label: 'Zero-G Orbital Hotel Penthouse Suite',
        type: 'indoors',
        description: 'Indoors: Ultra-luxury orbital space hotel suite with round rotating gravity king bed, panoramic curved starfield glass, and floating silk drapery.'
      },
      {
        id: 'space_captain_private_quarters',
        label: 'Starship Captain\'s Private Stateroom',
        type: 'indoors',
        description: 'Indoors: Sleek executive stateroom with built-in obsidian platform bed, ambient purple mood lighting, and floor-to-ceiling cosmos view.'
      },
      {
        id: 'space_lunar_resort_private_crater_chalet',
        label: 'Lunar Resort Luxury Dome Chalet & Whirlpool',
        type: 'indoors',
        description: 'Indoors: Secluded glass dome chalet on the Moon with steamy sunken whirlpool hot tub, Earthrise views over the horizon, and plush lounge seating.'
      }
    ]
  },
  {
    id: 'cyberpunk',
    label: 'Cyberpunk Neo-Tokyo & 2099',
    description: 'Futuristic megacities, neon rain alleyways, cyberspace hubs, and high-tech urban lounge environments.',
    locations: [
      {
        id: 'cyber_neon_alley',
        label: 'Future Amsterdam 2099 Neon Alley',
        type: 'outdoors',
        description: 'Outdoors: Rain-slicked cobblestone canal street in a 2099 futuristic Amsterdam with towering holographic advertisements, neon Kanji signs, and hover-trams.'
      },
      {
        id: 'cyber_sky_plaza',
        label: 'Floating Sky-High Hologram Plaza',
        type: 'outdoors',
        description: 'Outdoors: Elevated transparent glass plaza perched atop a 100-story skyscraper, surrounded by flying vehicles and glowing blue holograms.'
      },
      {
        id: 'cyber_synthwave_club',
        label: 'Underground Synthwave Club Lounge',
        type: 'indoors',
        description: 'Indoors: Subterranean cyberpunk lounge with magenta neon strip lighting, translucent acrylic furniture, laser displays, and DJ booth.'
      },
      {
        id: 'cyber_rooftop_pad',
        label: 'High-Tech Hovercar Rooftop Pad',
        type: 'outdoors',
        description: 'Outdoors: Skyscraper rooftop landing pad overlooking a vast glowing megacity skyline under misty rain, with a sleek matte-black hovercar parked.'
      },
      {
        id: 'cyber_tech_workshop',
        label: 'Robotic & Cybernetic Tech Workshop',
        type: 'indoors',
        description: 'Indoors: High-tech lab with robotic arms, soldering stations, glowing fiber optic cables, holographic blueprints, and cybernetic limbs.'
      },
      {
        id: 'cyber_supercomputer_vault',
        label: 'Quantum Supercomputer Server Vault',
        type: 'indoors',
        description: 'Indoors: Chilled server room with rows of black quantum computer towers cooled by liquid nitrogen, pulsing neon LED lights, and glass floors.'
      },
      {
        id: 'cyber_neo_amsterdam_penthouse_suite',
        label: 'MegaTower 88 Luxury Sky Penthouse Suite',
        type: 'indoors',
        description: 'Indoors: Ultra-chic top-floor penthouse with panoramic angled glass walls overlooking neon city clouds, King smart bed, and private cocktail bar.'
      },
      {
        id: 'cyber_capsule_hotel_love_suite',
        label: 'Deluxe Holographic Love Capsule',
        type: 'indoors',
        description: 'Indoors: Sleek futuristic soundproof pod room with glowing cyan and magenta LED light strips, wall-to-wall soft mattress, and cyber-synth audio controls.'
      },
      {
        id: 'cyber_rooftop_infinity_rain_pool',
        label: 'Heated Skyscraper Rooftop Infinity Pool & Jacuzzi',
        type: 'outdoors',
        description: 'Outdoors: Steamy heated glass-walled pool hanging off a skyscraper edge high above neon smog, with floating glowing drink trays.'
      }
    ]
  },
  {
    id: 'steampunk',
    label: 'Victorian Steampunk',
    description: 'Brass clockwork observatories, steam airships, industrial workshops, and copper pipe laboratories.',
    locations: [
      {
        id: 'steam_clockwork_observatory',
        label: 'Brass Clockwork Observatory Deck',
        type: 'indoors',
        description: 'Indoors: Victorian observatory interior with a massive brass telescope, intricate meshed clockwork gear mechanisms, copper dials, and glass dome.'
      },
      {
        id: 'steam_airship_gondola',
        label: 'Steam Airship Gondola Deck',
        type: 'outdoors',
        description: 'Outdoors: Wooden teak deck of a flying Victorian dirigible airship, with brass railings, leather seats, roaring steam vents, and views over clouds.'
      },
      {
        id: 'steam_brass_laboratory',
        label: 'Victorian Brass & Glass Laboratory',
        type: 'indoors',
        description: 'Indoors: High-ceilinged laboratory with bubbling glass retorts, brass pressure gauges, copper piping, Tesla coil arcs, and mahogany worktables.'
      },
      {
        id: 'steam_engine_factory',
        label: 'Industrial Steam Engine Factory Floor',
        type: 'indoors',
        description: 'Indoors: Vast brick factory interior with giant iron flywheels, piston rods, escaping white steam plumes, brass lanterns, and catwalks.'
      },
      {
        id: 'steam_parlor_lounge',
        label: 'Victorian Steampunk Parlor Lounge',
        type: 'indoors',
        description: 'Indoors: Elegant Victorian drawing room with velvet armchairs, polished brass gramophone, mahogany bookcases, and ornate copper clockwork lamps.'
      },
      {
        id: 'steam_greenhouse',
        label: 'Victorian Iron & Glass Conservatory',
        type: 'indoors',
        description: 'Indoors: Soaring wrought-iron greenhouse filled with exotic tropical palms, winding iron staircases, steam misting pipes, and glass roof.'
      },
      {
        id: 'steam_submarine_bridge',
        label: 'Brass Submarine Control Bridge',
        type: 'indoors',
        description: 'Indoors: Nautilus-style submarine helm with circular brass portholes looking into deep ocean waters, copper levers, and pressure gauges.'
      },
      {
        id: 'steam_harbor_docks',
        label: 'Steampunk Harbor Docks & Cranes',
        type: 'outdoors',
        description: 'Outdoors: Cobblestone waterfront port featuring steam-driven iron cranes, ironclad ships, brass lampposts, and misty harbor air.'
      }
    ]
  }
];
