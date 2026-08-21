export interface PredefinedScene {
  id: string;
  label: string;
  locationId?: string; // specific location or 'all'
  category?: string;
  text: string;
}

export const PREDEFINED_SCENES: PredefinedScene[] = [
  // --- ABCOUDE HOMESTEAD & FARM LOCATIONS ---
  {
    id: 'farm_court_1',
    locationId: 'farm_courtyard',
    label: 'Cobblestone Lavender Afternoon',
    category: 'Farmhouse',
    text: 'Sun-drenched cobblestone courtyard between the twin 19th-century brick farmhouses in Abcoude, surrounded by blossoming lavender planters, weathered oak benches, and a gravel driveway under clear blue skies.'
  },
  {
    id: 'farm_court_2',
    locationId: 'farm_courtyard',
    label: 'Courtyard Twilight Lanterns',
    category: 'Farmhouse',
    text: 'Rustic brick courtyard in Abcoude at golden twilight, illuminated by warm wrought-iron lanterns and string lights strung between the barn rafters and climbing ivy walls.'
  },
  {
    id: 'farm_court_3',
    locationId: 'farm_courtyard',
    label: 'Courtyard Vintage Tractor & Sunflowers',
    category: 'Farmhouse',
    text: 'Historic farmyard beside a restored vintage green Porsche-diesel tractor and towering golden sunflowers blooming along the whitewashed wooden picket fence.'
  },
  {
    id: 'farm_court_4',
    locationId: 'farm_courtyard',
    label: 'Morning Mist Cobblestones',
    category: 'Farmhouse',
    text: 'Early morning mist rising over the damp Dutch cobblestone courtyard, with dew glistening on fresh pasture grass and wooden milk pails near the barn entryway.'
  },
  {
    id: 'farm_pool_1',
    locationId: 'farm_pool_patio',
    label: 'Sunlit Poolside Teak Loungers',
    category: 'Farmhouse',
    text: 'Heated turquoise mosaic outdoor swimming pool shimmering under the afternoon sun, flanked by bluestone flagstones, teak sun loungers, rolled linen towels, and lush Dutch polder meadows.'
  },
  {
    id: 'farm_pool_2',
    locationId: 'farm_pool_patio',
    label: 'Sunset Pool Reflection & Garden Sculptures',
    category: 'Farmhouse',
    text: 'Crystal-clear pool terrace at sunset reflecting violet and amber clouds, framed by manicured boxwood hedges, stone garden statues, and a steaming outdoor cedar hot tub.'
  },
  {
    id: 'farm_pool_3',
    locationId: 'farm_pool_patio',
    label: 'Poolside Water Splashes & Summer Patio',
    category: 'Farmhouse',
    text: 'Vibrant outdoor pool patio with crystal water splashes, umbrellas, ice-cold lemon water carafes, and unobstructed vistas of the green Utrecht countryside.'
  },
  {
    id: 'farm_studio_1',
    locationId: 'farm_studio',
    label: 'Timber Live Room & Neve Console',
    category: 'Farmhouse Studio',
    text: 'Acoustically treated live room inside the converted timber stables, featuring rich oak wall baffles, glowing vacuum tube amplifiers, a classic Neve mixing console, and vintage instruments.'
  },
  {
    id: 'farm_studio_2',
    locationId: 'farm_studio',
    label: 'Late Night Jam & Warm Ambient Glow',
    category: 'Farmhouse Studio',
    text: 'Intimate recording studio sanctuary illuminated by Edison filament bulbs, Persian floor rugs, braided instrument cables, and vintage microphones ready for vocal takes.'
  },
  {
    id: 'farm_studio_3',
    locationId: 'farm_studio',
    label: 'Control Room Tape Decks & Sunlight Beams',
    category: 'Farmhouse Studio',
    text: 'Sunlight filtering through high stable transom windows onto analog reel-to-reel tape machines, studio monitor speakers, leather swivel chairs, and handwritten sheet music.'
  },
  {
    id: 'farm_kitchen_1',
    locationId: 'farm_kitchen',
    label: 'Delfts Blue Tiles & Fresh Dutch Bread',
    category: 'Farmhouse Living',
    text: 'Traditional Dutch farmhouse kitchen with antique Delfts Blue tile backsplashes, a massive reclaimed oak trestle table, terracotta floor tiles, and copper pans hanging from heavy ceiling beams.'
  },
  {
    id: 'farm_kitchen_2',
    locationId: 'farm_kitchen',
    label: 'Sunlit Breakfast Farmhouse Kitchen',
    category: 'Farmhouse Living',
    text: 'Sun-filled country kitchen with French doors opening to the herb garden, featuring a porcelain farmhouse sink, freshly baked bread on cutting boards, and Gouda cheese wheels on the sideboard.'
  },
  {
    id: 'farm_kitchen_3',
    locationId: 'farm_kitchen',
    label: 'Evening Candlelight Kitchen Gathering',
    category: 'Farmhouse Living',
    text: 'Warm evening kitchen lit by beeswax candles and brass fixtures, with a steaming Dutch oven on the cast-iron stove and panoramic views across the dark polder fields.'
  },
  {
    id: 'farm_living_1',
    locationId: 'farm_living',
    label: 'Open Brick Fireplace & Leather Sofas',
    category: 'Farmhouse Living',
    text: 'Spacious ground-floor living room with an open brick hearth, crackling firewood, deep caramel leather armchairs, exposed timber beams, and a turntable playing vintage vinyl records.'
  },
  {
    id: 'farm_living_2',
    locationId: 'farm_living',
    label: 'Afternoon Sunbeams & Bookshelves',
    category: 'Farmhouse Living',
    text: 'Peaceful farmhouse salon with floor-to-ceiling wooden bookshelves, floor cushions, wool blankets, and tall sash windows framing sheep grazing in the distance.'
  },
  {
    id: 'farm_bedroom_1',
    locationId: 'farm_bedroom',
    label: 'King Bed & Garden French Doors',
    category: 'Farmhouse Bedrooms',
    text: 'Airy ground-floor master suite featuring a 200x200cm King-size platform bed dressed in pure washed linen, white wooden shiplap walls, and open French doors leading to the courtyard garden.'
  },
  {
    id: 'farm_bedroom_2',
    locationId: 'farm_bedroom',
    label: 'Early Morning Sun & Timber Beams',
    category: 'Farmhouse Bedrooms',
    text: 'Serene homestead bedroom with morning sunlight streaming through sheer curtains onto hardwood pine floors, antique wooden wardrobe cabinets, and comfortable reading nooks.'
  },
  {
    id: 'farm_bath_1',
    locationId: 'farm_bath',
    label: 'Clawfoot Tub & Marble Vanity',
    category: 'Farmhouse Spa',
    text: 'Luxurious ground-floor spa bathroom centered around a freestanding white porcelain clawfoot tub, brass gooseneck faucet, rain shower enclosure, and aromatic eucalyptus branches.'
  },
  {
    id: 'farm_bath_2',
    locationId: 'farm_bathroom',
    label: 'Soaking Tub & Steam Glass',
    category: 'Farmhouse Spa',
    text: 'Private farmhouse bath with steam rising gently from a deep soaking tub, polished slate tiles, woven wicker laundry hampers, and soft natural daylight.'
  },
  {
    id: 'farm_attic_1',
    locationId: 'farm_attic',
    label: 'Loft Skylights & Photo Studio Easels',
    category: 'Farmhouse Attic',
    text: 'Historic west attic loft with steep timber rafters, oversized skylights revealing passing clouds, photography background paper rolls, softbox lights, and painting easels.'
  },
  {
    id: 'farm_roof_1',
    locationId: 'farm_roof_terrace',
    label: 'Roof Terrace Panorama & Wicker Chairs',
    category: 'Farmhouse Outdoors',
    text: 'Elevated wooden deck connecting the twin farmhouse roofs, furnished with comfortable all-weather wicker armchairs, potted olive trees, and panoramic 360-degree vistas over Dutch canals.'
  },
  {
    id: 'farm_dock_1',
    locationId: 'farm_canal_dock',
    label: 'Angstel River Wooden Pier & Rowboat',
    category: 'Farmhouse Outdoors',
    text: 'Private weathered wooden dock resting along the calm Angstel riverbank, with a classic wooden rowing boat tethered among swaying green reeds and weeping willows.'
  },
  {
    id: 'farm_orchard_1',
    locationId: 'farm_apple_orchard',
    label: 'Blossoming Apple Orchard & Wildflowers',
    category: 'Farmhouse Outdoors',
    text: 'Historic organic apple orchard with gnarly fruit trees in full pink blossom, dappled sunlight on lush grass, and buzzing honeybee hives near the timber boundary fence.'
  },
  {
    id: 'farm_sauna_1',
    locationId: 'farm_garden_sauna',
    label: 'Nordic Cedar Barrel Sauna & Cold Plunge',
    category: 'Farmhouse Spa',
    text: 'Nordic red cedar barrel sauna in the secluded corner of the garden, with aromatic cedar steam, panoramic glass back wall, and an outdoor stone cold-plunge tub.'
  },

  // --- MODERN & URBAN LOCATIONS ---
  {
    id: 'urban_rooftop_1',
    locationId: 'amsterdam_rooftop',
    label: 'Canal City Skyline at Sunset',
    category: 'Urban Amsterdam',
    text: 'Chic rooftop terrace overlooking Amsterdam canal houses and historic church towers, decorated with modern string lights, potted palms, and vibrant sunset skies.'
  },
  {
    id: 'urban_street_1',
    locationId: 'amsterdam_canals',
    label: 'Bicycle Bridge & Brick Merchant Houses',
    category: 'Urban Amsterdam',
    text: 'Iconic arched brick bridge over the Prinsengracht canal, lined with vintage Dutch bicycles, cobblestones, and ornate 17th-century merchant gable houses.'
  },
  {
    id: 'urban_concert_1',
    locationId: 'concert_hall',
    label: 'Festival Main Stage & Laser Beams',
    category: 'Live Stage',
    text: 'Electrifying festival main stage arena with dramatic purple and blue moving-head spotlights, towering speaker stacks, smoke haze, and an energized crowd atmosphere.'
  },
  {
    id: 'urban_club_1',
    locationId: 'underground_club',
    label: 'Underground Industrial Neon Lounge',
    category: 'Nightlife',
    text: 'Atmospheric underground basement club with exposed brick arches, neon magenta signage, velvet booths, polished concrete floors, and pulsing sub-bass vibrations.'
  },
  {
    id: 'urban_park_1',
    locationId: 'vondelpark',
    label: 'Vondelpark Meadow & Willow Lake',
    category: 'Nature & Parks',
    text: 'Sun-drenched grassy knoll in Vondelpark beside a serene pond with weeping willows, cyclists on smooth paths, and blooming rose gardens.'
  },
  {
    id: 'beach_dunes_1',
    locationId: 'zandvoort_beach',
    label: 'North Sea Dunes & Coastal Breeze',
    category: 'Coast & Beach',
    text: 'Sweeping North Sea coastal sand dunes covered in marram grass, golden afternoon light, wooden boardwalks, and rolling ocean waves under an endless maritime horizon.'
  },

  // --- NATURIST & NORDIC LOCATIONS ---
  {
    id: 'naturist_spa_1',
    locationId: 'naturist_resort',
    label: 'Secluded Lakeside Sun Deck',
    category: 'Naturist & Spa',
    text: 'Pristine, private lakeside wooden sun deck surrounded by dense pine forests, crystal-clear swimming waters, smooth sunbathing boulders, and warm golden sunlight.'
  },
  {
    id: 'naturist_dunes_1',
    locationId: 'naturist_dunes',
    label: 'Protected Coastal Dune Hollow',
    category: 'Naturist & Spa',
    text: 'Warm, sheltered white sand hollow nestled between high coastal dunes, secluded from wind, under pure bright sunshine and clear ocean skies.'
  },
  {
    id: 'naturist_forest_1',
    locationId: 'naturist_woodland',
    label: 'Woodland Sunlit Stream & Granite Rocks',
    category: 'Naturist & Spa',
    text: 'Lush, untouched forest clearing with a sparkling freshwater stream bubbling over smooth granite boulders, mossy banks, and dappled sunbeams.'
  },

  // --- ANCIENT & HISTORICAL LOCATIONS ---
  {
    id: 'ancient_temple_1',
    locationId: 'ancient_greece_temple',
    label: 'Marble Colonnade & Aegean Vista',
    category: 'Ancient World',
    text: 'Magnificent ancient marble temple perched high on a cliffside overlooking the sapphire Aegean Sea, with fluted Doric columns, olive trees, and azure skies.'
  },
  {
    id: 'ancient_roman_1',
    locationId: 'roman_villa',
    label: 'Roman Villa Atrium & Mosaic Courtyard',
    category: 'Ancient World',
    text: 'Classical Roman domus atrium with an impluvium reflecting pool, vibrant mythological floor mosaics, marble statues, and lush cypress gardens.'
  },
  {
    id: 'ancient_egypt_1',
    locationId: 'egyptian_palace',
    label: 'Nile Palace Terrace & Sandstone Pylons',
    category: 'Ancient World',
    text: 'Grand Egyptian palace terrace overlooking the fertile Nile River, flanked by carved sandstone lotus columns, papyrus plants, and golden sunset reflections.'
  },
  {
    id: 'medieval_castle_1',
    locationId: 'medieval_castle_hall',
    label: 'Gothic Castle Great Hall & Tapestries',
    category: 'Medieval & Renaissance',
    text: 'Towering Gothic castle great hall with stained glass lancet windows, heraldic woven tapestries, massive stone fireplaces, and polished flagstone floors.'
  },

  // --- FANTASY & MYTHICAL LOCATIONS ---
  {
    id: 'fantasy_elven_1',
    locationId: 'elven_sanctuary',
    label: 'Bioluminescent Elven Silverwood Sanctuary',
    category: 'Fantasy Realms',
    text: 'Ethereal elven forest sanctuary with silver-barked trees, glowing crystal lanterns, sweeping spiraling bridges, and waterfalls shimmering with celestial starlight.'
  },
  {
    id: 'fantasy_tavern_1',
    locationId: 'fantasy_inn',
    label: 'Cozy Adventurer Tavern & Hearth Fire',
    category: 'Fantasy Realms',
    text: 'Bustling fantasy inn with a roaring stone hearth, carved wooden tankards, maps pinned to timber posts, iron chandeliers, and warm amber tavern light.'
  },
  {
    id: 'fantasy_crystals_1',
    locationId: 'crystal_caverns',
    label: 'Subterranean Glowing Geode Grotto',
    category: 'Fantasy Realms',
    text: 'Enchanted underground cavern filled with giant luminous amethyst crystals, glowing subterranean pools, floating spores, and mystical reflections.'
  },

  // --- SCI-FI & PREHISTORIC LOCATIONS ---
  {
    id: 'scifi_bridge_1',
    locationId: 'starship_bridge',
    label: 'Starship Bridge & Nebula Vista',
    category: 'Sci-Fi Universe',
    text: 'High-tech starship command bridge with holographic tactical displays, glowing cyan interfaces, brushed titanium consoles, and panoramic viewport of a vibrant cosmic nebula.'
  },
  {
    id: 'scifi_neon_city_1',
    locationId: 'cyberpunk_city',
    label: 'Cyberpunk Metropolis Rain & Neon Arcs',
    category: 'Sci-Fi Universe',
    text: 'Dystopian futuristic cyberpunk metropolis with wet reflective asphalt, towering holographic advertisements, neon pink and turquoise signs, and flying traffic corridors.'
  },
  {
    id: 'prehistoric_valley_1',
    locationId: 'prehistoric_jungle',
    label: 'Primeval Fern Valley & Volcanic Peaks',
    category: 'Prehistoric World',
    text: 'Vast primeval jurassic valley with giant tree ferns, cycads, cascading warm waterfalls, and misty volcanic mountain peaks in the humid prehistoric air.'
  }
];

/**
 * Get predefined scenes for a given location ID, plus relevant category scenes and general fallbacks.
 */
export function getPredefinedScenesForLocation(locationId: string): PredefinedScene[] {
  if (!locationId || locationId === 'none') {
    return PREDEFINED_SCENES;
  }
  const matching = PREDEFINED_SCENES.filter(s => s.locationId === locationId);
  if (matching.length > 0) {
    const others = PREDEFINED_SCENES.filter(s => s.locationId !== locationId);
    return [...matching, ...others];
  }
  return PREDEFINED_SCENES;
}
