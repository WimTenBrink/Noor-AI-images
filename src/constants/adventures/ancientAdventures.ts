import { AdventureCategory } from './types';

export const ANCIENT_ADVENTURES: AdventureCategory[] = [
  {
    id: 'roman',
    label: 'Ancient Rome & Imperium',
    description: 'Colosseum arenas, imperial forums, marble thermae baths, Appian Way aqueducts, and luxurious patrician villas.',
    locations: [
      {
        id: 'roman_colosseum_arena',
        label: 'Colosseum Arena Floor & Imperial Box',
        type: 'outdoors',
        description: 'Outdoors: Sun-baked sand arena floor of the Flavian Amphitheater surrounded by roaring tiers of marble seating, imperial canopies, and bronze banners.'
      },
      {
        id: 'roman_forum_senate',
        label: 'Roman Forum & Curia Senate Plaza',
        type: 'outdoors',
        description: 'Outdoors: The heart of classical Rome with towering Corinthian columns, triumphal arches, statues of emperors, and bustling paved avenues.'
      },
      {
        id: 'roman_thermae_baths',
        label: 'Grand Imperial Thermae & Caldarium',
        type: 'indoors',
        description: 'Indoors: Colossal vaulted Roman bath complex with heated marble pools, steaming water jets, intricate mosaic floors, and sunlight piercing arched clerestory windows.'
      },
      {
        id: 'roman_villa_rustica_peristyle',
        label: 'Villa Rustica Peristyle Garden & Olive Grove',
        type: 'outdoors',
        description: 'Outdoors: Sun-drenched countryside villa courtyard framed by fluted colonnades, manicured cypress hedges, marble statues of Venus, and rolling olive groves.'
      },
      {
        id: 'roman_pantheon_temple',
        label: 'Pantheon Rotunda & Oculum Light Beam',
        type: 'indoors',
        description: 'Indoors: Soaring unreinforced concrete dome with central circular oculus casting a majestic sunbeam across polychrome marble floors and altars.'
      },
      {
        id: 'roman_appian_way',
        label: 'Appian Way & Stone Aqueduct Highway',
        type: 'outdoors',
        description: 'Outdoors: Historic basalt-paved military road flanked by umbrella stone pines, ancient cypress trees, monumental family tombs, and soaring stone aqueduct arches.'
      },
      {
        id: 'roman_gladiator_ludus',
        label: 'Gladiator Ludus Training Yard',
        type: 'outdoors',
        description: 'Outdoors: Dusty gladiatorial training barracks courtyard with wooden practice posts (palus), iron weapon racks, sand pits, and colonnaded warrior quarters.'
      },
      {
        id: 'roman_palatine_emperor_palace',
        label: 'Palatine Hill Imperial Palace Throne Room',
        type: 'indoors',
        description: 'Indoors: Opulent imperial audience chamber with porphyry marble columns, gilded ceilings, ivory curule seats, and panoramic views over the Circus Maximus.'
      },
      {
        id: 'roman_triclinium_banquet',
        label: 'Patrician Triclinium Banquet Hall',
        type: 'indoors',
        description: 'Indoors: Intimate dining room lined with three luxurious velvet-draped dining couches around a low cedar table, overflowing with silver wine crater urns and platters of figs and roast peacock.'
      },
      {
        id: 'roman_pompeii_fresco_atrium',
        label: 'Pompeii Villa Atrium & Impluvium Pool',
        type: 'indoors',
        description: 'Indoors: Open-roofed marble atrium with central rainwater collection pool (impluvium), walls adorned with vibrant crimson mythological frescoes, and bronze statuettes.'
      },
      {
        id: 'roman_capri_cliff_villa',
        label: 'Capri Cliffside Imperial Terrace & Sea View',
        type: 'outdoors',
        description: 'Outdoors: High clifftop marble terrace overlooking the sparkling sapphire Tyrrhenian Sea, draped with fragrant bougainvillea, shaded pergolas, and cooling sea breezes.'
      },
      {
        id: 'roman_dionysus_vineyard',
        label: 'Sun-Drenched Campanian Dionysian Vineyard',
        type: 'outdoors',
        description: 'Outdoors: Terraced hillside vineyard with ripe purple grape clusters on trellises, stone olive presses, terracotta amphorae jars, and rustic timber arbors.'
      },
      {
        id: 'roman_imperial_luxury_cubiculum',
        label: 'Imperial Villa Master Cubiculum & Silk Drapes',
        type: 'indoors',
        description: 'Indoors: Luxurious Roman bedchamber with inlaid bronze and ivory couch bed (lectus), Tyrian purple silk canopies, soft linen cushions, and oil lamps burning perfumed olive oil.'
      },
      {
        id: 'roman_private_caldarium_pool',
        label: 'Private Thermal Caldarium & Scented Oils',
        type: 'indoors',
        description: 'Indoors: Secluded private thermal pool of heated mineral water, alabaster strigils, vials of fragrant rose and spikenard oil, and heated floor hypocaust tiles.'
      }
    ]
  },
  {
    id: 'greek',
    label: 'Ancient Greece & Olympus',
    description: 'Acropolis temples, Delphi oracles, Aegean harbors, olive grove amphitheaters, and Olympian mythological heights.',
    locations: [
      {
        id: 'greek_parthenon_acropolis',
        label: 'Athens Parthenon & Acropolis Citadel',
        type: 'outdoors',
        description: 'Outdoors: Crown of Classical Athens with pristine white Pentelic marble Doric columns, golden friezes, olive trees, and panoramic views of the Aegean Sea.'
      },
      {
        id: 'greek_delphi_apollo_temple',
        label: 'Sanctuary of Apollo at Delphi & Sacred Way',
        type: 'outdoors',
        description: 'Outdoors: Dramatic mountain sanctuary nestled beneath Mount Parnassus crags, featuring stone temple ruins, bronze tripod cauldrons, and sacred olive groves.'
      },
      {
        id: 'greek_olympus_cloud_altar',
        label: 'Mount Olympus Sacred Cloud Peak & Golden Thrones',
        type: 'outdoors',
        description: 'Outdoors: Mythological mountain summit rising above a sea of golden clouds, with twelve radiant marble and gold thrones under a sparkling celestial sky.'
      },
      {
        id: 'greek_aegean_trireme_harbor',
        label: 'Aegean Island Harbor & Trireme Pier',
        type: 'outdoors',
        description: 'Outdoors: Turquoise harbor with wooden multi-oared Athenian triremes moored at white stone piers, drying fishing nets, amphorae stacks, and whitewashed seaside colonnades.'
      },
      {
        id: 'greek_epidaurus_amphitheater',
        label: 'Epidaurus Stone Theater & Olive Hills',
        type: 'outdoors',
        description: 'Outdoors: Perfect semicircle of concentric limestone tiers carved into a green hillside, overlooking pine forests and distant Peloponnesian peaks.'
      },
      {
        id: 'greek_spartan_agoge_gymnasium',
        label: 'Spartan Agoge Gymnasium & Sand Pit',
        type: 'outdoors',
        description: 'Outdoors: Open-air Spartan wrestling palaestra with sand pits, bronze shields hung on stone pillars, oil flasks, and rugged mountain backdrops.'
      },
      {
        id: 'greek_knossos_labyrinth_palace',
        label: 'Minoan Palace of Knossos & Fresco Courtyard',
        type: 'outdoors',
        description: 'Outdoors: Multi-tiered Bronze Age Cretan palace featuring vibrant red-tapered columns, leaping bull frescoes, stone lightwells, and winding maze corridors.'
      },
      {
        id: 'greek_oracle_sacred_spring',
        label: 'Castalian Sacred Spring & Laurel Grove',
        type: 'outdoors',
        description: 'Outdoors: Crystal clear mountain spring cascading down limestone gorge rock into carved marble basins, surrounded by aromatic laurel trees and whispering winds.'
      },
      {
        id: 'greek_dionysian_olive_terrace',
        label: 'Sunlit Marble Terrace over the Aegean Sea',
        type: 'outdoors',
        description: 'Outdoors: Pristine white marble terrace with carved balustrades perched high above deep blue waters, shaded by climbing grapevines and flowering oleanders.'
      },
      {
        id: 'greek_symposium_banquet_hall',
        label: 'Classical Athenian Symposium Hall & Kline Couches',
        type: 'indoors',
        description: 'Indoors: Elegant circular room with painted terracotta floor, low wooden kline recliners draped in white wool, painted kylix wine cups, and gentle lyre music.'
      },
      {
        id: 'greek_rhodes_colossus_harbor',
        label: 'Harbor of Rhodes & Colossus Bronze Beacon',
        type: 'outdoors',
        description: 'Outdoors: Bustling ancient port guarded by the colossal bronze statue of Helios holding aloft a blazing beacon fire, with merchant sailing ships entering the bay.'
      },
      {
        id: 'greek_santorini_caldera_temple',
        label: 'Ancient Thera Caldera Cliffside Temple',
        type: 'outdoors',
        description: 'Outdoors: Dramatic cliff-edge sanctuary perched on volcanic black and red cliffs overlooking the sapphire caldera waters, with marble altars and Aegean sunset.'
      },
      {
        id: 'greek_aphrodite_secluded_grotto',
        label: 'Aphrodite\'s Hidden Turquoise Lagoon & Sea Cave',
        type: 'outdoors',
        description: 'Outdoors: Sheltered natural sea grotto with crystal turquoise water, smooth sun-warmed marble rock ledges, wild myrtle blossoms, and sea spray mists.'
      },
      {
        id: 'greek_royal_palace_bedchamber',
        label: 'Royal Aegean Palace Marble Bedchamber',
        type: 'indoors',
        description: 'Indoors: Airy palace bedchamber with fluted marble columns open to sea breezes, king bed draped in pure white gossamer linen, olive oil lamps, and panoramic ocean terrace.'
      }
    ]
  },
  {
    id: 'celtic',
    label: 'Ancient Celtic & Druidic Realms',
    description: 'Sacred oak nemetons, stone ringforts, misty peat bogs, Giant’s Causeway cliffs, and enchanted fairy glens.',
    locations: [
      {
        id: 'celtic_sacred_nemeton_circle',
        label: 'Sacred Oak Nemeton & Megalithic Stone Ring',
        type: 'outdoors',
        description: 'Outdoors: Ancient circle of towering lichen-covered standing stones inside a primeval oak grove, with spiral triskele carvings, glowing embers, and mist.'
      },
      {
        id: 'celtic_ringfort_dun',
        label: 'Hilltop Stone Ringfort Dun & Thatched Roundhouse',
        type: 'outdoors',
        description: 'Outdoors: Circular drystone fortress wall on an emerald hilltop, enclosing conical timber and wattle roundhouses with smoking heather thatch roofs.'
      },
      {
        id: 'celtic_giants_causeway',
        label: 'Giant\'s Causeway Basalt Coast & Atlantic Mist',
        type: 'outdoors',
        description: 'Outdoors: Thousands of interlocking hexagonal basalt columns stepping down into surging green Atlantic ocean waves, under moody dramatic northern skies.'
      },
      {
        id: 'celtic_misty_peat_bog_cauldron',
        label: 'Mist-Shrouded Peat Bog & Sacred Offering Pool',
        type: 'outdoors',
        description: 'Outdoors: Atmospheric bogland with dark reflective pools, cotton grass tufts, ancient submerged bog oaks, and carved wooden idol offerings.'
      },
      {
        id: 'celtic_druid_forest_hermitage',
        label: 'Ancient Druidic Oak Hollow & Mistletoe Altar',
        type: 'outdoors',
        description: 'Outdoors: Massive hollowed thousand-year-old sacred oak tree with golden sickle carvings, sprigs of green mistletoe, river stone hearth, and rune sticks.'
      },
      {
        id: 'celtic_heather_moors_tor',
        label: 'Windswept Heather Moors & Granite Tor Peak',
        type: 'outdoors',
        description: 'Outdoors: Vast rolling purple heather moors rising to a dramatic weathered granite tor rock outcrop under sweeping clouds and mountain winds.'
      },
      {
        id: 'celtic_fairy_glen_bluebells',
        label: 'Enchanted Fairy Glen & Bluebell Meadow',
        type: 'outdoors',
        description: 'Outdoors: Secluded magical valley carpeted in vibrant bluebells and soft green moss, with babbling crystal streams, hazel groves, and gentle sunbeams.'
      },
      {
        id: 'celtic_clachan_roundhouse_hearth',
        label: 'Chieftain\'s Timber Roundhouse & Central Peat Hearth',
        type: 'indoors',
        description: 'Indoors: Spacious conical timber roundhouse with central stone peat fire, fragrant woodsmoke, hanging bronze shields, woolen tartan blankets, and mead horns.'
      },
      {
        id: 'celtic_sacred_wishing_well',
        label: 'Clootie Sacred Spring & Wishing Tree',
        type: 'outdoors',
        description: 'Outdoors: Natural bubbling freshwater spring nestled beside an ancient hawthorn tree hung with colorful linen clootie ribbons and silver coin offerings.'
      },
      {
        id: 'celtic_highland_waterfall_glen',
        label: 'Emerald Highland Glen & Salmon Waterfall',
        type: 'outdoors',
        description: 'Outdoors: Roaring mountain waterfall cascading into a deep crystal pool, surrounded by weeping birch trees, wild ferns, and steep green mountain crags.'
      },
      {
        id: 'celtic_bardic_mead_hall',
        label: 'Bardic Great Hall & Carved Knotwork Benches',
        type: 'indoors',
        description: 'Indoors: Heavy oak hall with intricate Celtic knotwork pillar carvings, roaring stone hearth, wire-strung Celtic clarsach harps, and feast tables.'
      },
      {
        id: 'celtic_pictish_standing_stones',
        label: 'Carved Pictish Beast Stones on Coastal Cliffs',
        type: 'outdoors',
        description: 'Outdoors: Sheer ocean bluffs where monumental stone slabs carved with intricate Pictish beasts, double discs, and Z-rods overlook the surging sea.'
      },
      {
        id: 'celtic_cozy_fur_lined_bothy',
        label: 'Secluded Highland Bothy with Fireplace & Sheepskin Bed',
        type: 'indoors',
        description: 'Indoors: Intimate stone cottage with crackling peat fireplace, deep soft sheepskin rugs, heather mattress with wool tartan throws, and candlelight.'
      },
      {
        id: 'celtic_hidden_fairy_pool_grotto',
        label: 'Crystal Glen Fairy Pool & Mossy Sunbathing Bank',
        type: 'outdoors',
        description: 'Outdoors: Secluded mountain fairy pool with luminous cyan-green water, smooth granite basking stones, wild thyme scents, and gentle mist.'
      }
    ]
  },
  {
    id: 'egyptian',
    label: 'Ancient Egypt & Pharaonic Nile',
    description: 'Great Pyramids, Karnak pillar halls, Nile feluccas, Valley of the Kings tombs, and desert oasis sanctuaries.',
    locations: [
      {
        id: 'egypt_giza_pyramids_sphinx',
        label: 'Great Pyramids of Giza & Sandstone Sphinx',
        type: 'outdoors',
        description: 'Outdoors: Monumental limestone pyramids rising majestically against golden desert dunes, with the enigmatic Great Sphinx gazing toward the rising sun.'
      },
      {
        id: 'egypt_karnak_hypostyle_hall',
        label: 'Karnak Temple Colossal Hypostyle Pillar Hall',
        type: 'indoors',
        description: 'Indoors: Forest of 134 towering stone papyrus columns covered in deep hieroglyphic carvings, with sunbeams cutting through high stone clerestory grills.'
      },
      {
        id: 'egypt_nile_felucca_reeds',
        label: 'Nile River Papyrus Reeds & Royal Wooden Felucca',
        type: 'outdoors',
        description: 'Outdoors: Calm blue Nile waters lined with lush green date palms and tall papyrus reeds, with a traditional wooden sailing felucca gliding at sunset.'
      },
      {
        id: 'egypt_valley_kings_tomb',
        label: 'Valley of the Kings Royal Pharaoh Painted Tomb',
        type: 'indoors',
        description: 'Indoors: Subterranean royal burial corridor with brilliantly preserved polychrome frescoes of Ra and Osiris, gold-leaf inscriptions, and quartzite sarcophagus.'
      },
      {
        id: 'egypt_abu_simbel_facade',
        label: 'Abu Simbel Colossi of Ramesses Sun Temple',
        type: 'outdoors',
        description: 'Outdoors: Four colossal seated statues of Pharaoh Ramesses II carved into the sheer sandstone mountain face above the glistening waters of the Nile.'
      },
      {
        id: 'egypt_alexandria_library',
        label: 'Great Library of Alexandria & Lighthouse Harbor',
        type: 'indoors',
        description: 'Indoors: Grand colonnaded scholar hall with soaring marble arches, thousands of papyrus scroll niches, astrolabes, and view of the Pharos Lighthouse.'
      },
      {
        id: 'egypt_queen_lotus_pool',
        label: 'Queen\'s Palace Sunken Lotus Pond & Peristyle',
        type: 'outdoors',
        description: 'Outdoors: Shaded royal palace garden with a rectangular pool covered in blue lotus flowers, surrounded by painted palm-leaf columns and pomegranate trees.'
      },
      {
        id: 'egypt_oasis_palms_spring',
        label: 'Siwa Desert Oasis & Turquoise Spring',
        type: 'outdoors',
        description: 'Outdoors: Secluded desert haven surrounded by towering sand dunes, with bubbling turquoise mineral springs, date palm groves, and mudbrick ruins.'
      },
      {
        id: 'egypt_luxor_obelisk_avenue',
        label: 'Avenue of Sphinxes & Luxor Temple Pylons',
        type: 'outdoors',
        description: 'Outdoors: Monumental stone-paved processional road lined with hundreds of ram-headed and human-headed sphinxes leading to towering temple pylons.'
      },
      {
        id: 'egypt_pharaoh_throne_room',
        label: 'Golden Throne Room & Lapis Lazuli Columns',
        type: 'indoors',
        description: 'Indoors: Magnificent royal audience hall with gold-leaf covered walls, lapis lazuli inlaid pillars, lion thrones, and braziers burning fragrant kyphi incense.'
      },
      {
        id: 'egypt_perfumed_royal_boudoir',
        label: 'Royal Scented Linen Bedchamber & Myrrh Braziers',
        type: 'indoors',
        description: 'Indoors: Opulent palace bedchamber with gilded wooden lion bed draped in fine sheer Egyptian flax linen, alabaster perfume jars, and cooling papyrus fans.'
      },
      {
        id: 'egypt_secluded_desert_star_tent',
        label: 'Bedouin Silk Tent on Starlit Golden Dunes',
        type: 'indoors',
        description: 'Indoors: Luxurious embroidered silk pavilion tent pitched atop a smooth desert sand dune, with plush floor cushions, brass tea trays, and starry sky.'
      }
    ]
  },
  {
    id: 'norse',
    label: 'Norse & Viking Age',
    description: 'Jarl longhouses, mist-shrouded fjords, runestone circles, sacred Yggdrasil groves, and the golden halls of Valhalla.',
    locations: [
      {
        id: 'norse_viking_longhouse_hall',
        label: 'Jarl\'s Great Longhouse Hall & Carved Dragon Pillars',
        type: 'indoors',
        description: 'Indoors: Massive timber stave longhouse with central stone fire trench, carved Odin and Thor dragon pillars, round painted shields, and long mead benches.'
      },
      {
        id: 'norse_fjord_longship_jetty',
        label: 'Mist-Veiled Fjord & Wooden Longship Jetty',
        type: 'outdoors',
        description: 'Outdoors: Towering snow-capped fjord cliffs rising above still glacial waters, with carved wooden dragon-headed longships moored at timber jetties.'
      },
      {
        id: 'norse_yggdrasil_sacred_ash',
        label: 'Sacred Ash Grove of Yggdrasil & Norn Well',
        type: 'outdoors',
        description: 'Outdoors: Primeval mountain grove centered around a colossal world-ash tree with roots touching sacred spring waters, draped in silver frost and runes.'
      },
      {
        id: 'norse_valhalla_high_hall',
        label: 'Golden Hall of Valhalla & Shield-Thatch Roof',
        type: 'indoors',
        description: 'Indoors: Vast mythical hall roofed with golden battle shields and supported by spear shafts, illuminated by roaring bonfires and endless feasts of the Einherjar.'
      },
      {
        id: 'norse_runestone_circle_hill',
        label: 'Runestone Circle on Stormy Sea Bluffs',
        type: 'outdoors',
        description: 'Outdoors: High grassy coastal cliff overlooking crashing arctic waves, with tall granite stones carved in red Futhark runes against an ominous sky.'
      },
      {
        id: 'norse_blacksmith_runic_forge',
        label: 'Village Weapon Forge & Glowing Iron Anvil',
        type: 'indoors',
        description: 'Indoors: Rustic timber forge with stone hearth, leather bellows blowing red-hot coals, forged Damascus steel axes, and flying orange sparks.'
      },
      {
        id: 'norse_snowy_pine_pass',
        label: 'Glacial Mountain Pass & Pine Tree Snowdrift',
        type: 'outdoors',
        description: 'Outdoors: Deep snowy pine forest on a high Scandinavian mountain pass with frozen waterfalls, icicles, animal tracks, and crisp winter sun.'
      },
      {
        id: 'norse_coastal_beacon_aurora',
        label: 'Coastal Beacon Fire & Blazing Aurora Borealis',
        type: 'outdoors',
        description: 'Outdoors: High stone sea-cliff beacon bonfire crackling against a pitch-black arctic night sky illuminated by swirling green and violet northern lights.'
      },
      {
        id: 'norse_birch_sauna_cold_plunge',
        label: 'Lakeside Birchwood Sauna & Icy Plunge Pier',
        type: 'indoors',
        description: 'Indoors: Steamy red-cedar log sauna with hot river stones, birch twig whisks, aromatic spruce steam, and wooden ladder leading into clear lake water.'
      },
      {
        id: 'norse_chieftain_fur_bedchamber',
        label: 'Jarl\'s Private Timber Bedchamber with Bear Furs & Hearth',
        type: 'indoors',
        description: 'Indoors: Cozy timber bedchamber with carved wooden bedstead piled high with thick brown bear and wolf pelts, stone fireplace, and drinking horns.'
      },
      {
        id: 'norse_secluded_fjord_hot_springs',
        label: 'Hidden Glacial Fjord Thermal Geothermal Spring',
        type: 'outdoors',
        description: 'Outdoors: Natural steamy mineral hot pool nestled between snow-covered granite boulders at the water\'s edge of a calm fjord.'
      },
      {
        id: 'norse_cozy_turf_roof_homestead',
        label: 'Turf-Roofed Coastal Farmstead & Sheep Meadow',
        type: 'outdoors',
        description: 'Outdoors: Traditional sod-roofed Viking timber cottage with green grass roof, wooden smoke vent, coastal flower meadows, and ocean horizon.'
      }
    ]
  },
  {
    id: 'japanese',
    label: 'Feudal Japan & Samurai',
    description: 'Kyoto shrines, samurai dojos, bamboo forests, mountain onsens, white castle keeps, and zen rock gardens.',
    locations: [
      {
        id: 'japan_kyoto_pagoda_temple',
        label: 'Kyoto Buddhist Temple Courtyard & Crimson Pagoda',
        type: 'outdoors',
        description: 'Outdoors: Serene wooden temple courtyard with a five-story crimson pagoda, weeping cherry trees, bronze temple bells, and raked gravel paths.'
      },
      {
        id: 'japan_samurai_dojo_hall',
        label: 'Traditional Wood & Tatami Samurai Training Dojo',
        type: 'indoors',
        description: 'Indoors: Polished cedar floor dojo with tatami mats, calligraphy wall scroll (kakemono), katana weapon racks, and soft paper shoji lantern light.'
      },
      {
        id: 'japan_fushimi_torii_path',
        label: 'Mountain Shrine Pathway of Ten Thousand Vermilion Torii Gates',
        type: 'outdoors',
        description: 'Outdoors: Winding mountain trail covered by a tunnel of vibrant vermilion wooden Torii gates, dappled with sunbeams and stone fox (kitsune) statues.'
      },
      {
        id: 'japan_arashiyama_bamboo_grove',
        label: 'Towering Arashiyama Emerald Bamboo Forest',
        type: 'outdoors',
        description: 'Outdoors: Soaring forest of dense green bamboo stalks rustling in the wind, with narrow wooden boardwalk path and mystical emerald lighting.'
      },
      {
        id: 'japan_mountain_onsen_spring',
        label: 'Secluded Steamy Mountain Onsen Hot Spring & Snow Pines',
        type: 'outdoors',
        description: 'Outdoors: Natural outdoor thermal mineral bath framed by smooth river rocks, rising steam, falling snowflakes, and snow-draped cedar pines.'
      },
      {
        id: 'japan_castle_tenshu_overlook',
        label: 'Himeji White Castle Keep Tenshu Overlook & Moat',
        type: 'outdoors',
        description: 'Outdoors: Imposing white-plastered hilltop castle fortress with curving gray tile gables, defensive stone ramps, wide moat, and cherry blossom trees.'
      },
      {
        id: 'japan_geisha_teahouse_garden',
        label: 'Traditional Cedar Teahouse & Stone Lantern Koi Garden',
        type: 'outdoors',
        description: 'Outdoors: Peaceful Japanese garden with a moss-covered stone lantern, arched vermilion bridge over a koi pond, red maples, and open tea pavilion.'
      },
      {
        id: 'japan_zen_rock_garden',
        label: 'Ryoanji Zen Gravel Rake & Moss Rock Garden',
        type: 'outdoors',
        description: 'Outdoors: Famous dry landscape garden with fifteen weathered boulders surrounded by moss islands in a sea of meticulously raked white gravel.'
      },
      {
        id: 'japan_shoji_master_pavilion',
        label: 'Daimyo\'s Tatami Bedchamber with Gold Foil Shoji',
        type: 'indoors',
        description: 'Indoors: Luxurious feudal master chamber with tatami rush mats, painted silk and gold-leaf sliding doors, plush silk futon bedding, and garden vista.'
      },
      {
        id: 'japan_moonlit_cherry_blossom_bridge',
        label: 'Arched Wooden Bridge over Moat in Falling Sakura Petals',
        type: 'outdoors',
        description: 'Outdoors: Elegant curved wooden bridge over still water under a full moon, illuminated by paper lanterns and swirling pink cherry blossom petals.'
      },
      {
        id: 'japan_ninja_mountain_hideout',
        label: 'Secluded Mist Mountain Hermitage & Pine Terrace',
        type: 'indoors',
        description: 'Indoors: Hidden mountain retreat with secret trapdoors, low wooden tables, tea kettle steaming over sunken hearth (irori), and mist-covered valley view.'
      },
      {
        id: 'japan_private_cedar_bathhouse',
        label: 'Private Hinoki Cypress Soaking Tub with Garden Vista',
        type: 'indoors',
        description: 'Indoors: Fragrant Japanese hinoki wood soaking tub filled with steaming spring water, overlooking a private enclosed bamboo and fern rock courtyard.'
      }
    ]
  },
  {
    id: 'mesoamerican',
    label: 'Ancient Maya & Aztec Empires',
    description: 'Step pyramids, sacred cenote sinkholes, jungle temple palaces, obsidian workshops, and floating chinampas.',
    locations: [
      {
        id: 'meso_sun_step_pyramid',
        label: 'Great Step Pyramid of the Sun & Ceremonial Plaza',
        type: 'outdoors',
        description: 'Outdoors: Colossal multi-tiered stone step pyramid with steep staircases leading to the sun temple summit, overlooking a wide cobblestone ceremonial plaza.'
      },
      {
        id: 'meso_sacred_cenote_sinkhole',
        label: 'Sacred Cenote Turquoise Limestone Sinkhole',
        type: 'outdoors',
        description: 'Outdoors: Natural circular limestone sinkhole with crystal-clear turquoise waters, hanging tropical vines, sunbeams piercing the cliff mouth, and ferns.'
      },
      {
        id: 'meso_palenque_palace_tower',
        label: 'Palenque Jungle Palace & Stone Observation Tower',
        type: 'outdoors',
        description: 'Outdoors: Intricate limestone palace complex surrounded by dense tropical jungle, featuring carved stone piers, stucco masks, and a four-story tower.'
      },
      {
        id: 'meso_jade_throne_room',
        label: 'Royal Jade Throne Room & Quetzal Feather Canopy',
        type: 'indoors',
        description: 'Indoors: Vaulted stone palace chamber with carved jade masks, jaguar skin cushions, brilliant emerald quetzal feather headdresses, and copal incense.'
      },
      {
        id: 'meso_peten_rainforest_canopy',
        label: 'Dense Petén Jungle Canopy & Carved Stone Stelae',
        type: 'outdoors',
        description: 'Outdoors: Primeval tropical rainforest where ancient limestone stelae carved with intricate hieroglyphic calendar dates stand among giant mahogany trees.'
      },
      {
        id: 'meso_obsidian_ballcourt',
        label: 'Grand Ceremonial Ballcourt & Carved Stone Rings',
        type: 'outdoors',
        description: 'Outdoors: Sloped stone playing alley flanked by towering carved walls with high stone hoop rings, decorated with relief carvings of feathered serpents.'
      },
      {
        id: 'meso_cloud_forest_altar',
        label: 'Misty High Mountain Cloud Forest Temple Altar',
        type: 'outdoors',
        description: 'Outdoors: Secluded stone altar perched high in misty cloud-forest mountains, surrounded by giant ferns, bromeliads, orchids, and swirling fog.'
      },
      {
        id: 'meso_tenochtitlan_chinampas',
        label: 'Lake Texcoco Floating Garden Chinampas & Canals',
        type: 'outdoors',
        description: 'Outdoors: Network of fertile artificial island gardens separated by narrow canals, filled with maize, squash, vibrant marigolds, and wooden dugout canoes.'
      },
      {
        id: 'meso_lava_tube_cavern',
        label: 'Volcanic Lava Tube Cave with Glowing Obsidian Crystals',
        type: 'indoors',
        description: 'Indoors: Underground volcanic cavern with smooth basalt walls, dark subterranean river, shimmering black obsidian blades, and flickering pine torches.'
      },
      {
        id: 'meso_royal_canopy_bedchamber',
        label: 'Chieftain\'s Palace Bedchamber with Jaguar Pelts & Copal Incense',
        type: 'indoors',
        description: 'Indoors: Airy stone palace bedchamber with woven cotton hammocks, spotted jaguar furs, polychrome ceramic vessels, and aromatic copal resin smoke.'
      }
    ]
  },
  {
    id: 'arabian',
    label: 'Arabian Nights & Desert Sands',
    description: 'Sultan palaces, spice bazaars, desert caravanserai, flying carpet terraces, and treasure caves.',
    locations: [
      {
        id: 'arabian_sultan_marble_palace',
        label: 'Sultan\'s Grand Palace & Intricate Mosaic Courtyard',
        type: 'indoors',
        description: 'Indoors: Soaring horseshoe arches with intricate geometric zellij tilework, marble fountains, gold filigree screens, and hanging brass lanterns.'
      },
      {
        id: 'arabian_silk_spice_bazaar',
        label: 'Bustling Spice Souk & Silk Tapestry Merchant Alley',
        type: 'outdoors',
        description: 'Outdoors: Narrow covered bazaar street overflowing with mounds of saffron, cinnamon, mounds of colorful spices, hanging silk carpets, and brass lamps.'
      },
      {
        id: 'arabian_desert_oasis_caravanserai',
        label: 'Desert Palm Oasis & Mudbrick Caravanserai',
        type: 'outdoors',
        description: 'Outdoors: Fortified mudbrick desert trading post surrounded by lush date palms, fresh spring wells, resting camels, and golden dunes.'
      },
      {
        id: 'arabian_starlit_rooftop_terrace',
        label: 'Starlit Palace Rooftop with Cushioned Divans & Shisha',
        type: 'outdoors',
        description: 'Outdoors: Palace rooftop overlooking illuminated domes and minarets under a vast desert starry sky, with embroidered silk divans, brass tea trays, and shisha.'
      },
      {
        id: 'arabian_magic_treasure_cave',
        label: 'Hidden Cave of Wonders Overflowing with Golden Treasure',
        type: 'indoors',
        description: 'Indoors: Colossal glittering cavern piled high with gold coins, gemstone necklaces, jeweled scimitars, magic lamps, and glowing crystal stalactites.'
      },
      {
        id: 'arabian_moorish_fountain_garden',
        label: 'Moorish Palace Garden with Orange Trees & Fountains',
        type: 'outdoors',
        description: 'Outdoors: Symmetrical paradise garden with tiled water channels, babbling marble fountains, fragrant blooming orange trees, and climbing jasmine.'
      },
      {
        id: 'arabian_palace_hammam_baths',
        label: 'Grand Royal Hammam with Domed Skylights & Rose Water',
        type: 'indoors',
        description: 'Indoors: Steamy heated marble bathhouse under a perforated star-skylight dome, with warm sunken plunge pools, rose petal waters, and soft linen wraps.'
      },
      {
        id: 'arabian_flying_carpet_balcony',
        label: 'Gilded Palace Balcony Overlooking Starlit Minarets',
        type: 'outdoors',
        description: 'Outdoors: High palace balcony with carved marble balustrades and floating silk carpets, looking out over shimmering desert city minarets at midnight.'
      },
      {
        id: 'arabian_bedouin_camp_dunes',
        label: 'Bedouin Desert Campfire Encampment on Golden Dunes',
        type: 'outdoors',
        description: 'Outdoors: Circle of black camel-hair tents around a crackling campfire atop a high desert dune ridge, under a magnificent Milky Way galaxy.'
      },
      {
        id: 'arabian_royal_silk_bedchamber',
        label: 'Grand Harem Master Suite with Silk Drapes & Persian Rugs',
        type: 'indoors',
        description: 'Indoors: Sensual palace bedchamber with Emperor-sized round divan bed, layers of crimson and gold sheer silk canopies, hand-woven Persian carpets, and rose attar.'
      }
    ]
  }
];
