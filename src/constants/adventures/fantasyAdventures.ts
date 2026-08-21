import { AdventureCategory } from './types';

export const FANTASY_ADVENTURES: AdventureCategory[] = [
  {
    id: 'dnd_settings',
    label: 'D&D & Forgotten Realms',
    description: 'Yawning Portal taverns, Underdark mushroom chasms, Astral Plane islands, wizard spires, dragon lairs, and Candlekeep libraries.',
    locations: [
      {
        id: 'dnd_yawning_portal_tavern',
        label: 'The Yawning Portal Tavern & Undermountain Well',
        type: 'indoors',
        description: 'Indoors: Bustling Waterdeep tavern centered around a massive open stone well plunging into the Undermountain dungeon, with raucous adventuring parties, tankards of ale, and roaring fireplaces.'
      },
      {
        id: 'dnd_underdark_fungal_cavern',
        label: 'Underdark Bioluminescent Mushroom Forest & Chasm',
        type: 'indoors',
        description: 'Indoors: Vast subterranean cavern illuminated by towering glowing purple and cyan Zurkhwood fungi, phosphorescent moss, underground waterfalls, and deep stone chasms.'
      },
      {
        id: 'dnd_astral_plane_island',
        label: 'Astral Plane Silver Void & Floating Githyanki Island',
        type: 'outdoors',
        description: 'Outdoors: Ethereal silver realm with shimmering psychic winds, floating asteroid fortresses, and crystal towers drifting weightlessly through infinite silver starlight.'
      },
      {
        id: 'dnd_wizard_high_spire',
        label: 'Archmage\'s Arcane Observatory Spire & Orrery',
        type: 'indoors',
        description: 'Indoors: Soaring circular stone tower with a massive spinning brass planetary orrery, floating glowing spell scrolls, crystal focus orbs, and floor-to-ceiling celestial windows.'
      },
      {
        id: 'dnd_dragon_gold_mountain_lair',
        label: 'Red Dragon\'s Volcanic Gold Hoard Mountain Cavern',
        type: 'indoors',
        description: 'Indoors: Colossal volcanic cavern floor covered in mountain-sized piles of glittering gold coins, jewel-encrusted crowns, ancient magical swords, and glowing lava rivers.'
      },
      {
        id: 'dnd_cormanthor_elven_canopy',
        label: 'Cormanthor Ancient Treetop Elven Village',
        type: 'outdoors',
        description: 'Outdoors: Majestic living elven tree-city grown into giant thousand-foot ancient trees, with curving wooden rope bridges, glowing lantern blossoms, and mist.'
      },
      {
        id: 'dnd_dwarf_underground_forge',
        label: 'Dwarven Stronghold Great Magma Forge',
        type: 'indoors',
        description: 'Indoors: Massive carved stone hall supported by colossal dwarven king statues, with channels of glowing red magma, giant iron anvils, and ringing war hammers.'
      },
      {
        id: 'dnd_shadowfell_gloom_ruins',
        label: 'Shadowfell Desolate Shadow Citadel in Obsidian Mists',
        type: 'outdoors',
        description: 'Outdoors: Haunting monochromatic ruin realm with black jagged obsidian spires, cold wispy gray fog, leafless thorn trees, and ghostly floating specters.'
      },
      {
        id: 'dnd_feywild_fairy_ring',
        label: 'Feywild Shimmering Wild Magic Meadow & Prismatic Pool',
        type: 'outdoors',
        description: 'Outdoors: Hyper-vibrant magical forest meadow with glowing oversized flowers, dancing fairy lights, rainbow-tinted crystal streams, and perpetual twilight.'
      },
      {
        id: 'dnd_spelljammer_bridge',
        label: 'Spelljammer Dragonfly Ship Helm & Astral Sail Deck',
        type: 'outdoors',
        description: 'Outdoors: Wooden deck of a living dragonfly-shaped star galleon sailing through colorful Wildspace phlogiston, with glowing crystalline helm throne and glowing astral sails.'
      },
      {
        id: 'dnd_candlekeep_study_chamber',
        label: 'Candlekeep Monastic Library Study Vault',
        type: 'indoors',
        description: 'Indoors: Historic sea-cliff fortress library with soaring vaulted stone ceilings, thousands of leather-bound grimoires, stained-glass clerestory windows, and beeswax candles.'
      },
      {
        id: 'dnd_cozy_adventurer_suite',
        label: 'Adventurers Guild Private Master Suite & Hearth',
        type: 'indoors',
        description: 'Indoors: Opulent guild quarters with plush four-poster bed draped in enchanted silk quilts, roaring stone fireplace, weapon display racks, and flagon of spiced elven wine.'
      }
    ]
  },
  {
    id: 'conan_hyboria',
    label: 'Conan & Hyborian Age',
    description: 'Cimmerian rugged crags, Aquilonian marble palaces, Stygian snake pyramids, and Zamoran thief alleys.',
    locations: [
      {
        id: 'conan_cimmerian_highlands',
        label: 'Cimmerian Windswept Crags & Rugged Pine Slopes',
        type: 'outdoors',
        description: 'Outdoors: Gloomy northern highland wilderness with dark jagged granite mountains, gloomy gray skies, windswept pines, and roaring mountain torrents.'
      },
      {
        id: 'conan_aquilonian_royal_palace',
        label: 'Aquilonian Royal Throne Room & Colossal Marble Pillars',
        type: 'indoors',
        description: 'Indoors: Magnificent high-civilization throne room with gleaming white marble columns, gold-fringed crimson banners, lion-carved throne, and royal guards in polished armor.'
      },
      {
        id: 'conan_stygian_black_pyramid',
        label: 'Stygian Black Basalt Pyramid & Serpent Cult Sanctuary',
        type: 'indoors',
        description: 'Indoors: Menacing subterranean temple of Set with polished black basalt walls, giant coiled emerald serpent statues, glowing green braziers, and shadow-draped altars.'
      },
      {
        id: 'conan_zamoran_city_thieves',
        label: 'Zamoran City of Thieves & Moonlit Shadow Rooftops',
        type: 'outdoors',
        description: 'Outdoors: Maze of winding narrow alleys and flat rooftops in the infamous city of Shadizar, with moonlit minarets, silk awnings, and stealthy rogue shadows.'
      },
      {
        id: 'conan_barachan_corsair_deck',
        label: 'Barachan Isles Pirate Corsair War Galley Deck',
        type: 'outdoors',
        description: 'Outdoors: Blood-stained timber deck of a swift corsair raiding ship cutting through tropical waters, with black sails billowing, grappling hooks, and sun-bleached masts.'
      },
      {
        id: 'conan_pictish_wilderness_totem',
        label: 'Savage Pictish Primeval Forest & Blood Totem Glade',
        type: 'outdoors',
        description: 'Outdoors: Dark untamed virgin jungle across the Black River, with menacing skull-topped carved wooden totems, dense tangled creepers, and distant tribal war drums.'
      },
      {
        id: 'conan_frost_giant_glacial_chasm',
        label: 'Nordheim Frost Giant Chasm & Ice Citadel',
        type: 'outdoors',
        description: 'Outdoors: Freezing blue glacial canyon in Nordheim with sheer ice walls, howling blizzards, mammoth bones, and towering frozen giant thrones.'
      },
      {
        id: 'conan_desert_ruin_oasis',
        label: 'Hyborian Desert Sunken Oasis & Cyclopean Ruins',
        type: 'outdoors',
        description: 'Outdoors: Ancient forgotten pre-human cyclopean stone ruins half-buried in red desert sands, surrounding a deep palm-shaded mineral water spring.'
      },
      {
        id: 'conan_shadizar_harem_chamber',
        label: 'Luxurious Velvet Harem Palace of Shadizar the Wicked',
        type: 'indoors',
        description: 'Indoors: Sensual palace chamber filled with piles of embroidered silk cushions, sheer gauze curtains, heavy brass incense burners, and decanters of spiced wine.'
      },
      {
        id: 'conan_sunken_dagon_temple',
        label: 'Sunken Altar of Dagon on Coral-Encrusted Sea Cliffs',
        type: 'outdoors',
        description: 'Outdoors: Mysterious ancient stone megalith altar standing on wave-battered coastal cliffs, dripping with kelp, barnacles, and strange abyssal carvings.'
      }
    ]
  },
  {
    id: 'tarzan_jungle',
    label: 'Tarzan & Lost Jungle Worlds',
    description: 'Canopy treehouses, lost cities of Opar, hidden waterfall lagoons, and uncharted prehistoric valleys.',
    locations: [
      {
        id: 'tarzan_great_treehouse_canopy',
        label: 'Grand Treehouse Lookout Platform & Hanging Lianas',
        type: 'outdoors',
        description: 'Outdoors: Sturdy wooden platform built into the towering branches of a colossal jungle ironwood tree, hung with thick climbing lianas and panoramic green canopy view.'
      },
      {
        id: 'tarzan_lost_city_opar',
        label: 'Lost City of Opar Gold & Basalt Sun Temple Ruins',
        type: 'outdoors',
        description: 'Outdoors: Crumbling cyclopean stone city hidden deep in the African jungle, with towering basalt pillars covered in pure gold sheets and sun-worship altars.'
      },
      {
        id: 'tarzan_hidden_waterfall_lagoon',
        label: 'Emerald Waterfall Plunge Pool & Sandy Jungle Shore',
        type: 'outdoors',
        description: 'Outdoors: Breathtaking secluded mountain waterfall tumbling into a calm crystal-clear emerald lagoon, fringed by wild orchids, giant ferns, and white sand.'
      },
      {
        id: 'tarzan_deep_rainforest_vines',
        label: 'Virgin African Rainforest Canopy & Swinging Vines',
        type: 'outdoors',
        description: 'Outdoors: Dense multi-layered tropical rainforest canopy with thick swinging monkey ropes, colorful parrots, sunbeams piercing the green ceiling, and vibrant flowers.'
      },
      {
        id: 'tarzan_gorilla_nesting_glade',
        label: 'Mangani Gorilla Nesting Glade in Bamboo Thickets',
        type: 'outdoors',
        description: 'Outdoors: Peaceful clearing deep inside towering bamboo and fern thickets, with fresh leaf nests and sunlit patches where great apes rest.'
      },
      {
        id: 'tarzan_river_steamboat_wreck',
        label: 'Sunken Colonial Steamboat Wreck in Jungle River',
        type: 'outdoors',
        description: 'Outdoors: Weathered 19th-century paddle steamer resting half-submerged on a muddy jungle riverbank, draped with wild flowering vines and tree roots.'
      },
      {
        id: 'tarzan_lost_valley_dinosaurs',
        label: 'Hidden Prehistoric Lost Valley of Living Dinosaurs',
        type: 'outdoors',
        description: 'Outdoors: Mist-veiled caldera valley untouched by time, where giant tree ferns flourish and prehistoric beasts roam beneath smoking volcanic peaks.'
      },
      {
        id: 'tarzan_kilimanjaro_cloud_mist',
        label: 'Mist-Veiled Foothills of Mount Kilimanjaro',
        type: 'outdoors',
        description: 'Outdoors: Lush high-elevation cloud forest with giant groundsels and lobelias, opening up to glimpses of the majestic snow-covered peak above.'
      },
      {
        id: 'tarzan_sun_god_temple_chamber',
        label: 'Ancient Jungle Sun Temple Sacrificial Chamber & Idols',
        type: 'indoors',
        description: 'Indoors: Vaulted jungle temple cavern with carved stone idols, burning torch braziers, golden sun discs, and shafts of sunlight cutting through vine-covered ceiling cracks.'
      },
      {
        id: 'tarzan_treehouse_luxury_bedroom',
        label: 'Open-Air Rainforest Treehouse Master Bedroom & Hammock',
        type: 'indoors',
        description: 'Indoors: Romantic open-timber bedroom high in the trees, with wide woven hammock, soft feather mattress under sheer white mosquito netting, and glowing lanterns.'
      }
    ]
  },
  {
    id: 'pirates_caribbean',
    label: 'Pirates & High Seas',
    description: 'Pirate galleon decks, Tortuga taverns, smuggler treasure caves, and tropical coral atolls.',
    locations: [
      {
        id: 'pirate_galleon_weatherdeck',
        label: 'Pirate Galleon Weatherdeck, Masts & Rigging',
        type: 'outdoors',
        description: 'Outdoors: Sun-bleached wooden deck of a three-masted pirate galleon cutting through turquoise Caribbean waves, with coils of rope, brass cannons, and Jolly Roger flag flying.'
      },
      {
        id: 'pirate_tortuga_tavern_harbor',
        label: 'Tortuga Buccaneers Harbor & Rum Tavern Pier',
        type: 'outdoors',
        description: 'Outdoors: Raucous tropical pirate haven harbor with wooden dock pilings, smoking rum taverns, swinging lanterns, barrel stacks, and anchored corsair schooners.'
      },
      {
        id: 'pirate_smugglers_cove_cave',
        label: 'Smuggler\'s Hidden Treasure Cove & Sea Cavern',
        type: 'indoors',
        description: 'Indoors: Secluded tidal sea cave with subterranean sandy beach, glowing torchlight reflecting on water, open iron-bound treasure chests, and gold doubloons.'
      },
      {
        id: 'pirate_shipwreck_coral_lagoon',
        label: 'Tropical Atoll Shipwreck & Turquoise Lagoon',
        type: 'outdoors',
        description: 'Outdoors: Pristine turquoise coral lagoon with the wooden rib skeleton of a wrecked Spanish galleon resting on vibrant coral reefs under palm trees.'
      },
      {
        id: 'pirate_sunken_fort_cannons',
        label: 'Coastal Spanish Stone Fort Ruins & Iron Cannons',
        type: 'outdoors',
        description: 'Outdoors: Weathered stone fortress bastion overlooking the crashing sea, with rusty iron cannons pointed through embrasures, palm trees, and ocean horizon.'
      },
      {
        id: 'pirate_captains_cabin_stateroom',
        label: 'Captain\'s Ornate Stern Gallery Stateroom & Sea Charts',
        type: 'indoors',
        description: 'Indoors: Spacious mahogany-paneled stern cabin with curved mullioned gallery windows overlooking ship\'s wake, navigation charts, brass astrolabe, and captain\'s bed.'
      },
      {
        id: 'pirate_white_sand_caye',
        label: 'Deserted White Sand Caye with Coconut Palms',
        type: 'outdoors',
        description: 'Outdoors: Tiny uninhabited coral sand island with leaning coconut palms, crystal-clear warm shallows, seashells, and gentle tropical breeze.'
      },
      {
        id: 'pirate_misty_mangrove_hideout',
        label: 'Misty Mangrove Creek & Secret Rowboat Landing',
        type: 'outdoors',
        description: 'Outdoors: Tangled saltwater mangrove swamp with arching stilt roots, quiet dark channels, hanging Spanish moss, and a hidden wooden dock.'
      },
      {
        id: 'pirate_governor_mansion_terrace',
        label: 'Colonial Governor\'s Port Town Veranda & Palms',
        type: 'outdoors',
        description: 'Outdoors: Elegant whitewashed colonial governor\'s veranda with stone balustrades, wicker plantation chairs, vibrant bougainvillea, and view of the port harbor.'
      },
      {
        id: 'pirate_starlit_quarterdeck',
        label: 'Starlit Ocean Waves & Ship\'s Helm Wheel',
        type: 'outdoors',
        description: 'Outdoors: Elevated quarterdeck behind the large carved brass-and-wood steering wheel, looking out over the sparkling moonlit sea and billowing sails.'
      }
    ]
  },
  {
    id: 'gothic_horror',
    label: 'Gothic Horror & Vampire Realms',
    description: 'Castle ballrooms, misty graveyards, vampire crypts, mad alchemist towers, and moonlit Transylvanian villages.',
    locations: [
      {
        id: 'gothic_castle_ballroom',
        label: 'Castle Ravenloft Grand Gothic Ballroom & Organ',
        type: 'indoors',
        description: 'Indoors: Soaring dark stone ballroom with towering pointed arch windows, massive wrought-iron chandeliers dripping black wax, pipe organ, and crimson velvet curtains.'
      },
      {
        id: 'gothic_misty_graveyard_mausoleum',
        label: 'Moonlit Misty Graveyard & Carved Stone Mausoleum',
        type: 'outdoors',
        description: 'Outdoors: Ancient overgrown cemetery shrouded in thick rolling fog under a full moon, with crooked Celtic cross headstones, weeping angel statues, and mausoleum.'
      },
      {
        id: 'gothic_transylvanian_village_inn',
        label: 'Cobblestone Mountain Hamlet & Timber Tavern',
        type: 'outdoors',
        description: 'Outdoors: Brooding eastern European mountain village street with steep timber-framed roofs, wrought-iron street lamps, howling mountain winds, and shadowy alleys.'
      },
      {
        id: 'gothic_vampire_crypt_sarcophagus',
        label: 'Subterranean Vampire Crypt & Velvet Sarcophagus',
        type: 'indoors',
        description: 'Indoors: Deep subterranean stone vaulted tomb with carved marble sarcophagus lined in crimson silk velvet, scattered red rose petals, and flickering candles.'
      },
      {
        id: 'gothic_mad_alchemist_lab',
        label: 'Mad Alchemist\'s Lightning Tower & Galvanic Coils',
        type: 'indoors',
        description: 'Indoors: Cluttered high tower laboratory with electrical spark arcs, bubbling colored glass retorts, lightning rods in broken skylights, and arcane diagrams.'
      },
      {
        id: 'gothic_victorian_manor_library',
        label: 'Dark Victorian Manor Library with High Arched Windows',
        type: 'indoors',
        description: 'Indoors: Brooding mahogany library with towering dark bookcases, rolling ladders, crackling stone fireplace, leather wingback chairs, and silver decanters.'
      },
      {
        id: 'gothic_witches_coven_bonfire',
        label: 'Witches\' Coven Deep Forest Clearing & Bonfire',
        type: 'outdoors',
        description: 'Outdoors: Secluded primeval clearing deep in the black forest with roaring bonfire, bubbling iron cauldron, hanging skull talismans, and dancing shadows.'
      },
      {
        id: 'gothic_midnight_rooftop_gargoyles',
        label: 'Gothic Cathedral Spire & Rain-Drenched Gargoyles',
        type: 'outdoors',
        description: 'Outdoors: High slippery stone cathedral rooftop with carved demonic stone gargoyles crouching in the midnight rain against lightning-lit storm clouds.'
      },
      {
        id: 'gothic_abandoned_abbey_ruins',
        label: 'Sunken Gothic Abbey Ruins Under Full Moon',
        type: 'outdoors',
        description: 'Outdoors: Roofless ruined medieval stone abbey with skeletal tracery windows framing the starry night sky, overgrown with dark ivy and wild thorn bushes.'
      },
      {
        id: 'gothic_opulent_master_bedchamber',
        label: 'Vampire Lord\'s Crimson Velvet Master Bedchamber',
        type: 'indoors',
        description: 'Indoors: Sumptuous master bedchamber with massive carved ebony four-poster bed draped in crimson damask, roaring hearth, antique silver mirrors, and balcony.'
      }
    ]
  },
  {
    id: 'fantasy',
    label: 'High Fantasy Realm',
    description: 'Enchanted forests, crystal caverns, floating islands, wizard towers, and magical shrines.',
    locations: [
      {
        id: 'fantasy_elven_canopy',
        label: 'Enchanted Elven Forest Canopy',
        type: 'outdoors',
        description: 'Outdoors: Ancient silver-barked woodland with glowing lotus lanterns suspended from giant branches, winding wooden walkways, and sparkling airborne dust.'
      },
      {
        id: 'fantasy_crystal_cave',
        label: 'Crystal Cavern Sanctuary & Pool',
        type: 'indoors',
        description: 'Indoors: Underground subterranean cave lined with massive glowing blue and amethyst quartz crystals reflecting in a mirror-like subterranean pool.'
      },
      {
        id: 'fantasy_floating_island',
        label: 'Floating Island Cloud Palace',
        type: 'outdoors',
        description: 'Outdoors: Mystical marble palace perched on a floating landmass drifting above sea-level clouds, with cascading waterfalls falling into the sky.'
      },
      {
        id: 'fantasy_wizard_library',
        label: 'Ancient Wizard Tower Library',
        type: 'indoors',
        description: 'Indoors: Soaring circular stone tower packed with ancient spellbooks, floating glowing runes, brass astrolabes, and a large telescope pointing to stars.'
      },
      {
        id: 'fantasy_fairy_waterfall',
        label: 'Fairy Waterfall Glade & Lotus Pool',
        type: 'outdoors',
        description: 'Outdoors: Hidden woodland glen with a shimmering turquoise waterfall, glowing water lilies, mossy stepping stones, and gentle rainbow mists.'
      },
      {
        id: 'fantasy_glyph_circle',
        label: 'Mystical Rune Glyph Stone Circle',
        type: 'outdoors',
        description: 'Outdoors: Ring of ancient carved menhirs standing on a grassy hill, with glowing blue magical glyph runes pulsing in the stone under moonlight.'
      },
      {
        id: 'fantasy_sunken_atlantis',
        label: 'Sunken Coral Ruins of Atlantis',
        type: 'outdoors',
        description: 'Outdoors: Submerged underwater marble temple ruins draped in colorful coral gardens, glowing bioluminescent anemones, and clear turquoise waters.'
      },
      {
        id: 'fantasy_pegasus_meadow',
        label: 'Golden Pegasus Meadow & Shrine',
        type: 'outdoors',
        description: 'Outdoors: Sun-dappled meadow filled with golden wildflowers, marble column ruins, crystal clear streams, and gentle fantasy flora.'
      },
      {
        id: 'fantasy_celestial_temple',
        label: 'Celestial Star Temple Courtyard',
        type: 'outdoors',
        description: 'Outdoors: High mountain stone courtyard surrounded by white marble archways, reflection pools, and views over a starry cosmic night sky.'
      },
      {
        id: 'fantasy_runestone_clearing',
        label: 'Ancient Runestone Forest Glade',
        type: 'outdoors',
        description: 'Outdoors: Quiet mossy clearing featuring a central carved ancient runestone, surrounded by glowing mushrooms and whispering silver birch trees.'
      },
      {
        id: 'fantasy_elven_canopy_bedroom',
        label: 'Royal Elven Tree-Palace Bedchamber',
        type: 'indoors',
        description: 'Indoors: Breathtaking living-wood canopy bedchamber grown into ancient mallorn branches, with gossamer silk drapes, floating luminescent blossom lights, silver fur blankets, and open forest balcony.'
      },
      {
        id: 'fantasy_mermaid_grotto_suite',
        label: 'Sunken Coral Palace Crystal Grotto & Lagoon',
        type: 'indoors',
        description: 'Indoors: Magical underwater crystal cavern with warm turquoise pool, mother-of-pearl daybed, bioluminescent anemones, and soft glowing amethyst alcoves.'
      },
      {
        id: 'fantasy_nymph_spring_bath',
        label: 'Enchanted Forest Hot Spring Bath & Lotus Flowers',
        type: 'outdoors',
        description: 'Outdoors: Hidden natural mineral hot spring fed by a gently misting cascade, surrounded by giant pink lotus blossoms, mossy sunbathing stones, and floating rosewater.'
      },
      {
        id: 'fantasy_cozy_witch_cottage_loft',
        label: 'Enchanted Forest Cottage Attic Bedchamber',
        type: 'indoors',
        description: 'Indoors: Charming cottage attic under timber rafters hung with drying lavender and star lilies, with feather mattress, patchwork quilts, roaring hearth, and skylight overlooking the magical moon.'
      }
    ]
  },
  {
    id: 'medieval',
    label: 'Medieval Kingdom & Castles',
    description: 'Castles, walled cities, knight tournament fields, monasteries, and royal banquet halls.',
    locations: [
      {
        id: 'med_muiderslot_castle',
        label: 'Muiderslot Medieval Castle Courtyard',
        type: 'outdoors',
        description: 'Outdoors: 13th-century stone moat castle featuring round corner towers, heavy oak portcullis, cobblestone courtyard, and falconry perches.'
      },
      {
        id: 'med_binnenhof_hall',
        label: 'Binnenhof Knight\'s Hall & Moat (1300s)',
        type: 'outdoors',
        description: 'Outdoors: Medieval gothic Ridderzaal (Knight\'s Hall) with rose stained glass windows, stone moat, timber drawbridge, and pennant banners.'
      },
      {
        id: 'med_valkhof_ruins',
        label: 'Valkhof Castle Citadel Nijmegen',
        type: 'outdoors',
        description: 'Outdoors: Imperial Carolingian stone fortress perched on Valkhof hill above the Waal River, with stone arches, watchtowers, and iron torches.'
      },
      {
        id: 'med_amersfoort_gate',
        label: 'Koppelpoort Amersfoort City Wall Gate',
        type: 'outdoors',
        description: 'Outdoors: Combined land and water gate on medieval brick city walls, with double watchtowers, portcullis wheels, and wooden water gates.'
      },
      {
        id: 'med_utrecht_dom_plaza',
        label: 'Utrecht Dom Tower Plaza (1350s)',
        type: 'outdoors',
        description: 'Outdoors: Gothic cathedral construction plaza dominated by the soaring 112-meter stone Dom Tower, stone masons\' yards, and timber scaffolding.'
      },
      {
        id: 'med_marketplace',
        label: 'Medieval Cobblestone Market Square',
        type: 'outdoors',
        description: 'Outdoors: Bustling 14th-century Dutch village market square with wooden merchant stalls, thatch-roofed guildhalls, iron braziers, and horse carts.'
      },
      {
        id: 'med_monastery_garden',
        label: 'Gothic Monastery Cloister Garden',
        type: 'outdoors',
        description: 'Outdoors: Serene stone vaulted cloister arcade enclosing a square herb garden with stone fountain, medicinal plants, and sundial.'
      },
      {
        id: 'med_blacksmith_forge',
        label: 'Medieval Blacksmith Forge & Alley',
        type: 'indoors',
        description: 'Indoors: Timber and stone forge with roaring red coal hearth, iron anvil, hammers, glowing sparks, leather aprons, and forged swords.'
      },
      {
        id: 'med_great_hall',
        label: 'Castle Keep Great Banquet Hall',
        type: 'indoors',
        description: 'Indoors: Massive stone banquet hall with roaring fireplace, long oak feast tables, wrought-iron chandeliers, heraldic tapestries, and stone flags.'
      },
      {
        id: 'med_river_wharf',
        label: 'Medieval River Harbor Wharf',
        type: 'outdoors',
        description: 'Outdoors: Timber docks on a Dutch river where wooden cog ships unload barrels, rope coils, and wool sacks under timber crane wheels.'
      },
      {
        id: 'med_tournament_field',
        label: 'Knight\'s Jousting Tournament Field',
        type: 'outdoors',
        description: 'Outdoors: Grassy tournament grounds framed by colorful silk heraldic pavilions, wooden tilt barriers, armor racks, and royal viewing gallery.'
      },
      {
        id: 'med_scriptorium',
        label: 'Monastery Vault Scriptorium',
        type: 'indoors',
        description: 'Indoors: Vaulted stone room lit by beeswax candles, with slanted wooden writing desks, parchment manuscripts, quill pens, and ink pots.'
      },
      {
        id: 'med_royal_canopy_bedchamber',
        label: 'Castle Royal Master Bedchamber',
        type: 'indoors',
        description: 'Indoors: Sumptuous stone castle bedchamber with massive carved oak four-poster bed draped in crimson velvet curtains, roaring stone fireplace, fur throws, and silver goblet flagons.'
      },
      {
        id: 'med_private_roman_bathhouse',
        label: 'Castle Thermal Stone Bathhouse & Sunken Pool',
        type: 'indoors',
        description: 'Indoors: Steamy vaulted stone chamber with deep cedar and marble sunken bath, rose petals floating in warm spring water, flickering oil lamps, and soft linen robes.'
      },
      {
        id: 'med_secret_tower_boudoir',
        label: 'High Turret Secret Boudoir & Moonlit Balcony',
        type: 'indoors',
        description: 'Indoors: High secluded stone turret chamber overlooking the starry realm, with arched stone balcony, plush velvet divan, lute instruments, and candle sconces.'
      },
      {
        id: 'med_secluded_castle_garden_arbor',
        label: 'Moonlit Castle Rose Bower & Marble Bench',
        type: 'outdoors',
        description: 'Outdoors: Private walled palace rose garden at night, with fragrant climbing red roses, carved marble bench, bubbling stone fountain, and moonlight.'
      },
      {
        id: 'med_knights_pavilion_tent',
        label: 'Grand Silk Tournament Pavilion Tent',
        type: 'indoors',
        description: 'Indoors: Luxurious silk-lined royal tournament tent with gold trim, deep carpeted rugs, low feather bed with damask quilts, and warm iron braziers.'
      }
    ]
  }
];
