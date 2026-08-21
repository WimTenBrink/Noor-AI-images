import { AdventureCategory } from './types';

export const MODERN_ADVENTURES: AdventureCategory[] = [
  {
    id: 'farm',
    label: 'Abcoude Homestead & Farm',
    description: 'The historic Dutch twin farmhouse in Abcoude, featuring ground-floor bedrooms, recording studio, gardens, and outdoor pool.',
    locations: [
      {
        id: 'farm_courtyard',
        label: 'Farmhouse Cobblestone Courtyard & Garden',
        type: 'outdoors',
        description: 'Outdoors: The rustic central brick courtyard between the twin homestead buildings, with blooming lavender, terracotta planters, and gravel drive.'
      },
      {
        id: 'farm_pool_patio',
        label: 'Outdoor Heated Pool & Bluestone Patio',
        type: 'outdoors',
        description: 'Outdoors: Turquoise mosaic heated outdoor pool with teak loungers, bluestone patio, and garden statues under the open Dutch sky.'
      },
      {
        id: 'farm_studio',
        label: 'Converted Stables Sound Studio & Live Room',
        type: 'indoors',
        description: 'Indoors: State-of-the-art timber recording studio with Neve mixing console, acoustic baffle panels, vintage bass guitars, and ambient warm lighting.'
      },
      {
        id: 'farm_kitchen',
        label: 'Rustic Farmhouse Kitchen & Long Oak Table',
        type: 'indoors',
        description: 'Indoors: Warm country kitchen with Delfts Blue tiles, terracotta floor, massive oak dining table, copper pots, and garden view.'
      },
      {
        id: 'farm_living',
        label: 'Farmhouse Living Room & Open Brick Hearth',
        type: 'indoors',
        description: 'Indoors: Cozy ground-floor lounge with exposed timber beams, brick fireplace, deep leather armchairs, and vinyl turntable.'
      },
      {
        id: 'farm_bedroom',
        label: 'Ground-Floor Master Bedroom (King Bed)',
        type: 'indoors',
        description: 'Indoors: Spacious ground-floor bedroom with King-size bed (200x200cm), crisp linen bedding, exposed beams, and French doors to the garden.'
      },
      {
        id: 'farm_bathroom',
        label: 'Farmhouse Luxury Spa Bathroom & Clawfoot Tub',
        type: 'indoors',
        description: 'Indoors: Ground-floor spa bathroom with freestanding clawfoot porcelain soaking tub, walk-in rain shower, and brass fixtures.'
      },
      {
        id: 'farm_attic',
        label: 'West Attic Photo Studio & Skylight Loft',
        type: 'indoors',
        description: 'Indoors: Atmospheric attic space under wooden rafters and skylights, with photography softboxes, easels, and cozy seating.'
      },
      {
        id: 'farm_roof_terrace',
        label: 'Connecting Elevated Roof Terrace & Lounge',
        type: 'outdoors',
        description: 'Outdoors: Central elevated terrace bridging the attics, with teak outdoor sofas, festoon lights, and view over the thatched roofs and pool.'
      },
      {
        id: 'farm_sauna',
        label: 'Scandinavian Cedarwood Sauna Chalet',
        type: 'indoors',
        description: 'Indoors: Aromatic Finnish red cedar sauna with two-tiered benches, volcanic stone stove, and wooden bucket.'
      }
    ]
  },
  {
    id: 'amsterdam',
    label: 'Amsterdam Landmarks & Canals',
    description: 'Iconic Amsterdam landmarks, historic canals, Rijksmuseum, Jordaan bridges, and waterfront terraces.',
    locations: [
      {
        id: 'ams_rijksmuseum_gardens',
        label: 'Rijksmuseum Passage & Sculptured Gardens',
        type: 'outdoors',
        description: 'Outdoors: The monumental red-brick Renaissance arches of the Rijksmuseum passage, overlooking manicured flower gardens and classical sculptures.'
      },
      {
        id: 'ams_dam_square',
        label: 'Dam Square & Royal Palace Plaza',
        type: 'outdoors',
        description: 'Outdoors: The historic open cobblestone square facing the majestic sandstone Royal Palace, with neoclassical pediments and street artists.'
      },
      {
        id: 'ams_magere_brug',
        label: 'Magere Brug (Skinny Bridge) on the Amstel River',
        type: 'outdoors',
        description: 'Outdoors: Historic white-painted wooden double-drawbridge spanning the Amstel River, lined with incandescent bulb lights reflecting in the evening water.'
      },
      {
        id: 'ams_prinsengracht_bridge',
        label: 'Prinsengracht Canal Bridge & Gabled Houses',
        type: 'outdoors',
        description: 'Outdoors: Classic 17th-century arched brick canal bridge lined with bicycles, framed by iconic leaning gabled townhouses and weeping willows.'
      },
      {
        id: 'ams_vondelpark_pavilion',
        label: 'Vondelpark Rose Garden & Vondelparkpaviljoen',
        type: 'outdoors',
        description: 'Outdoors: Lush green English landscape park featuring curved gravel paths, expansive lawns, weeping willows by the pond, and rose beds.'
      },
      {
        id: 'ams_bloemenmarkt',
        label: 'Bloemenmarkt Floating Flower Market',
        type: 'outdoors',
        description: 'Outdoors: Floating flower market on Singel canal, packed with vibrant tulip displays, wooden bulb crates, greenhouse barges, and souvenir stalls.'
      },
      {
        id: 'ams_concertgebouw',
        label: 'Concertgebouw Plaza & Concert Hall',
        type: 'indoors',
        description: 'Indoors: Classical concert hall interior featuring gilded balconies, crimson velvet seats, crystal chandeliers, and grand organ pipes.'
      },
      {
        id: 'ams_ndsm_wharf',
        label: 'NDSM Wharf Industrial Art Hub',
        type: 'outdoors',
        description: 'Outdoors: Rugged former shipyard waterfront with giant rusted steel shipping containers, street art murals, crane hotels, and creative arts warehouses.'
      },
      {
        id: 'ams_westerkerk',
        label: 'Westerkerk Tower & Square',
        type: 'outdoors',
        description: 'Outdoors: Renaissance church with 85-meter blue-crowned spire, cobblestone square, and views along the Keizersgracht.'
      },
      {
        id: 'ams_begijnhof',
        label: 'Begijnhof Medieval Courtyard',
        type: 'outdoors',
        description: 'Outdoors: Tranquil enclosed medieval sanctuary garden surrounded by historic timber-framed houses, manicured lawns, and a quiet chapel.'
      },
      {
        id: 'ams_luxury_boutique_hotel_suite',
        label: 'Grand Canal 5-Star Boutique Hotel Penthouse Suite',
        type: 'indoors',
        description: 'Indoors: Top-floor canal house hotel suite with Emperor-sized four-poster bed, Egyptian cotton sheets, freestanding marble soaking tub, roaring fireplace, and canal views.'
      },
      {
        id: 'ams_private_canal_cruiser_cabin',
        label: 'Historic Wooden Salon Boat Master Stateroom',
        type: 'indoors',
        description: 'Indoors: Private teak salon cruiser stateroom gliding through illuminated canals, featuring plush velvet banquettes, low mahogany table, and champagne flute bucket.'
      },
      {
        id: 'ams_exclusive_rooftop_hot_tub',
        label: 'Exclusive Amsterdam Rooftop Jacuzzi Lounge',
        type: 'outdoors',
        description: 'Outdoors: Steaming rooftop hot tub overlooking illuminated city gables and church spires at twilight, with plush daybeds and soft cocktail lighting.'
      },
      {
        id: 'ams_hidden_cocktail_speakeasy_booth',
        label: 'Velvet-Lined Secret Speakeasy VIP Booth',
        type: 'indoors',
        description: 'Indoors: Intimate hidden cocktail bar booth behind velvet curtains, with deep leather banquettes, dim vintage sconces, and craft cocktail crystal glasses.'
      }
    ]
  },
  {
    id: 'beach',
    label: 'Dutch Coast & Beach Dunes',
    description: 'Coastal dunes, sandy ocean shores, North Sea waters, mudflats, and beach piers across the Netherlands.',
    locations: [
      {
        id: 'beach_scheveningen_pier',
        label: 'Scheveningen Pier & Ocean Boardwalk',
        type: 'outdoors',
        description: 'Outdoors: Iconic ocean pier extending into the North Sea, with Ferris wheel, wooden promenade deck, sandy beach, and breaking ocean waves.'
      },
      {
        id: 'beach_zandvoort_dunes',
        label: 'Zandvoort Sand Dunes & Beach Club',
        type: 'outdoors',
        description: 'Outdoors: Rolling coastal sand dunes topped with marram grass, wooden dune boardwalks, wide golden sand beaches, and rustic beach pavilions.'
      },
      {
        id: 'beach_texel_lighthouse',
        label: 'Texel Island Bright Red Lighthouse Shore',
        type: 'outdoors',
        description: 'Outdoors: Towering vibrant red brick lighthouse standing on northern Texel sand dunes, overlooking vast open ocean tides and sea foam.'
      },
      {
        id: 'beach_waddenzee_flats',
        label: 'Waddenzee Mudflats & Shallow Sea',
        type: 'outdoors',
        description: 'Outdoors: Tidal mudflats at low tide, with shallow glistening saltwater pools, sandbars, sea birds, and vast horizon.'
      },
      {
        id: 'beach_noordwijk_grass',
        label: 'Noordwijk Coastal Grass Dunes',
        type: 'outdoors',
        description: 'Outdoors: Natural protected coastal dune landscape covered in sea buckthorn bushes, marram dune grass, wind-sculpted sand, and sea breeze.'
      },
      {
        id: 'beach_zeeland_delta',
        label: 'Zeeland Delta Works Coastal Seawall',
        type: 'outdoors',
        description: 'Outdoors: Massive stone storm surge barriers and concrete seawalls along the ocean coast, with wide sand flats and pounding surf.'
      },
      {
        id: 'beach_ameland_sunset',
        label: 'Ameland Sunset Beach & Surf',
        type: 'outdoors',
        description: 'Outdoors: Northern island beach under a dramatic golden hour sunset, with tide pools, driftwood logs, and soft rolling waves.'
      },
      {
        id: 'beach_bloemendaal_club',
        label: 'Bloemendaal aan Zee Beach Lounge',
        type: 'outdoors',
        description: 'Outdoors: Coastal beach pavilion with teak decking, white linen cabana daybeds, fire pits, and ocean horizon view.'
      },
      {
        id: 'beach_secluded_overwater_bungalow',
        label: 'Private Coastal Overwater Bungalow Suite',
        type: 'indoors',
        description: 'Indoors: Romantic wooden overwater bungalow with King bed under draped white linen mosquito canopy, glass floor ocean panel, and private sundeck.'
      },
      {
        id: 'beach_dune_glamping_safari_tent',
        label: 'Sunset Dune Luxury Glamping Safari Tent',
        type: 'indoors',
        description: 'Indoors: Bohemian canvas safari tent nestled in warm sand dunes, furnished with plush low mattress, sheepskin rugs, glowing lanterns, and ocean breeze.'
      },
      {
        id: 'beach_private_cabana_daybed',
        label: 'VIP Coastal Beach Club Private Cabana',
        type: 'outdoors',
        description: 'Outdoors: Shaded private beach cabana with billowing white drapes, double king daybed, iced champagne bucket, and turquoise surf view.'
      },
      {
        id: 'beach_hidden_sea_cave_pool',
        label: 'Secluded Tidal Sea Cave & Natural Rock Pool',
        type: 'outdoors',
        description: 'Outdoors: Sheltered coastal cavern with calm turquoise tidal waters, smooth sand floor, natural stone sun ledges, and gentle ocean echo.'
      }
    ]
  },
  {
    id: 'forest',
    label: 'Forests & Woodland Parks',
    description: 'Dense forests, national park woodlands, ancient pine trails, and leafy sanctuaries.',
    locations: [
      {
        id: 'forest_veluwe_pine',
        label: 'Veluwe National Park Pine Trails',
        type: 'outdoors',
        description: 'Outdoors: Expansive pine forest with tall Scots pine trees, soft needle-covered woodland paths, sunbeams piercing the canopy, and heather clearings.'
      },
      {
        id: 'forest_speulderbos',
        label: 'Speulderbos "Dancing Trees" Ancient Forest',
        type: 'outdoors',
        description: 'Outdoors: Primeval forest of ancient, gnarled, crooked oak and beech trees whose twisted trunks create a fairytale-like woodland atmosphere.'
      },
      {
        id: 'forest_utrechtse_heuvelrug',
        label: 'Utrechtse Heuvelrug Beech Canopy',
        type: 'outdoors',
        description: 'Outdoors: Rolling forest hills lined with soaring beech trees, carpeted in golden autumn leaves, mossy stone walls, and winding dirt trails.'
      },
      {
        id: 'forest_kroondomein',
        label: 'Kroondomein Het Loo Royal Woodland',
        type: 'outdoors',
        description: 'Outdoors: Historic royal forest estate featuring stately oak avenues, clear forest streams, wild deer glades, and towering fir trees.'
      },
      {
        id: 'forest_clingendael',
        label: 'Clingendael Forest & Japanese Garden',
        type: 'outdoors',
        description: 'Outdoors: Historic woodland estate featuring serene Japanese garden pavilions, moss-covered stone bridges, red maples, and bamboo groves.'
      },
      {
        id: 'forest_twilight_glade',
        label: 'Twilight Forest Glade & Fern Valley',
        type: 'outdoors',
        description: 'Outdoors: Quiet interior forest clearing surrounded by dense pine trees, lush wild ferns, glowing fireflies, and twilight ambient light.'
      },
      {
        id: 'forest_luxury_treehouse_suite',
        label: 'Canopy Luxury Treehouse Master Suite',
        type: 'indoors',
        description: 'Indoors: Wooden treehouse pavilion suspended in ancient oak branches with king feather bed, panoramic glass walls, private canopy hot tub, and fairy lantern glow.'
      },
      {
        id: 'forest_secluded_hot_springs',
        label: 'Hidden Thermal Hot Spring Grotto',
        type: 'outdoors',
        description: 'Outdoors: Natural steamy hot mineral pool surrounded by mossy boulders, wild ferns, towering pines, soft cedar plank deck, and rising warm mist.'
      },
      {
        id: 'forest_scandinavian_glass_cabin',
        label: 'Cozy Glass-Roofed Forest Chalet',
        type: 'indoors',
        description: 'Indoors: Modern timber cabin with sloped glass ceiling looking up at the pine canopy and night stars, featuring roaring wood stove, sheepskin rugs, and plush double bed.'
      },
      {
        id: 'forest_secret_mossy_clearing',
        label: 'Enchanted Sun-Dappled Fern Meadow & Blanket',
        type: 'outdoors',
        description: 'Outdoors: Secluded woodland clearing carpeted in soft emerald moss, with sunbeams piercing the canopy, velvet picnic blankets, and wild berries.'
      }
    ]
  },
  {
    id: 'wild_west',
    label: 'Wild West & Frontier',
    description: 'Desert canyons, wooden saloons, ghost towns, cattle ranches, and frontier outposts.',
    locations: [
      {
        id: 'west_saloon_porch',
        label: 'Desert Town Saloon & Wooden Porch',
        type: 'outdoors',
        description: 'Outdoors: Rustic 1880s wooden saloon porch with hitching posts, swinging wooden doors, dusty dirt main street, and distant red rock mesas.'
      },
      {
        id: 'west_red_canyon',
        label: 'Dusty Red Rock Canyon Trail',
        type: 'outdoors',
        description: 'Outdoors: Dramatic red sandstone canyon trail with towering rock formations, saguaro cacti, tumbleweeds, and bright desert sun.'
      },
      {
        id: 'west_train_station',
        label: 'Old West Steam Train Depot',
        type: 'outdoors',
        description: 'Outdoors: Frontier wooden railway station with a black steam locomotive resting on tracks, water tower, telegraph lines, and wooden platforms.'
      },
      {
        id: 'west_cattle_ranch',
        label: 'Frontier Cattle Ranch Barnyard',
        type: 'outdoors',
        description: 'Outdoors: Timber cattle barn with split-rail fences, hay wagons, saddle racks, leather lassos, and open prairie pastures under blue skies.'
      },
      {
        id: 'west_gold_mine',
        label: 'Gold Mine Cavern Entry & Rails',
        type: 'indoors',
        description: 'Indoors: Wooden timber-supported mine shaft entry with rusty ore carts on narrow iron tracks, lanterns, pickaxes, and glints of gold in rock.'
      },
      {
        id: 'west_ghost_town',
        label: 'Desert Ghost Town Main Street',
        type: 'outdoors',
        description: 'Outdoors: Abandoned frontier town main street with weathered boardwalks, sun-bleached wooden storefronts, tumbleweeds, and desert wind.'
      },
      {
        id: 'west_prairie_camp',
        label: 'Prairie Covered Wagon Encampment',
        type: 'outdoors',
        description: 'Outdoors: Circle of canvas-topped pioneer covered wagons around a crackling campfire, with cast-iron coffee pots and starry prairie sky.'
      },
      {
        id: 'west_saloon_luxury_honeymoon_suite',
        label: 'Frontier Saloon Upstairs Luxury Honeymoon Suite',
        type: 'indoors',
        description: 'Indoors: Opulent Victorian frontier suite above the saloon with crimson flock wallpaper, plush velvet king bed, clawfoot copper soaking tub, lace curtains, and bourbon decanter.'
      },
      {
        id: 'west_canyon_secluded_hot_springs',
        label: 'Red Rock Canyon Thermal Hot Spring Pool',
        type: 'outdoors',
        description: 'Outdoors: Hidden natural mineral pool carved into warm red canyon stone under desert stars, with smooth rock benches and flickering campfire glow.'
      },
      {
        id: 'west_ranch_owner_private_bedroom',
        label: 'High Desert Master Ranch Bedroom & Hearth',
        type: 'indoors',
        description: 'Indoors: Sturdy timber log cabin master bedroom with massive river-stone fireplace, thick Navajo wool blankets, king log bed, buffalo hide rug, and mountain views.'
      }
    ]
  }
];
