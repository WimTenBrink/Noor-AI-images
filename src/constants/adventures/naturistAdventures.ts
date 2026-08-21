import { AdventureCategory } from './types';

export const NATURIST_ADVENTURES: AdventureCategory[] = [
  {
    id: 'naturist',
    label: 'Naturist, Bathhouse & Wellness Sanctuaries',
    description: 'Clothing-optional naturist beaches, Scandinavian cedarwood saunas, Turkish hammams, mineral hot springs, rain showers, and serene outdoor soaking baths.',
    locations: [
      {
        id: 'naturist_dune_beach',
        label: 'Naturist Sand Dune Beach & Tidal Surf',
        type: 'outdoors',
        description: 'Outdoors: Expansive golden coastal sand dunes and clothing-optional beach under open skies, with soft marram dune grass, refreshing sea breezes, sun-warmed sand towels, and rhythmic North Sea rolling surf.'
      },
      {
        id: 'naturist_secluded_cove',
        label: 'Secluded Sunbathing Cove & Tidal Rock Pools',
        type: 'outdoors',
        description: 'Outdoors: Sheltered coastal inlet protected by towering sea cliffs, fine white sand, crystal-clear shallow azure rock pools, and flat sun-warmed granite ledges.'
      },
      {
        id: 'naturist_scandinavian_sauna',
        label: 'Scandinavian Red Cedar Dry Sauna Cabin',
        type: 'indoors',
        description: 'Indoors: Aromatic Finnish red cedarwood sauna cabin with two-tiered benches, steaming volcanic stone stove, birch whisks (vihta), warm ambient lighting, and wooden water bucket.'
      },
      {
        id: 'naturist_smoke_sauna',
        label: 'Lakeside Finnish Smoke Sauna & Plunge Pier',
        type: 'indoors',
        description: 'Indoors: Traditional rustic soot-seasoned timber smoke sauna (savusauna) beside a pristine forest lake, offering deep gentle radiant heat and a private wooden plunge jetty.'
      },
      {
        id: 'naturist_turkish_hammam',
        label: 'Imperial Turkish Hammam & Heated Marble Slab',
        type: 'indoors',
        description: 'Indoors: Majestic domed marble bathhouse with soaring arched ceilings, heated octagonal central marble platform (göbek taşı), carved wall fountains, brass bowls (tas), and gentle rising warm steam.'
      },
      {
        id: 'naturist_japanese_onsen',
        label: 'Geothermal Outdoor Onsen & Mineral Rock Bath',
        type: 'outdoors',
        description: 'Outdoors: Natural steaming volcanic hot spring pool bordered by smooth river stones, mossy boulders, weeping Japanese maples, and tranquil rising mineral steam in the fresh mountain air.'
      },
      {
        id: 'naturist_walkin_rain_shower',
        label: 'Luxury Spa Walk-in Rain Shower & Body Jets',
        type: 'indoors',
        description: 'Indoors: Spacious open-concept slate-and-glass shower suite featuring dual ceiling-mounted rainfall deluge showerheads, horizontal body mist nozzles, and aromatic teak duckboard flooring.'
      },
      {
        id: 'naturist_botanical_clawfoot_tub',
        label: 'Freestanding Porcelain Clawfoot Soaking Tub',
        type: 'indoors',
        description: 'Indoors: Elegant vintage porcelain roll-top soaking tub filled with warm botanical-infused water and floating rose petals, set beside candlelit French windows overlooking private gardens.'
      },
      {
        id: 'naturist_rooftop_hot_tub',
        label: 'Secluded Penthouse Rooftop Jacuzzi & Sun Deck',
        type: 'outdoors',
        description: 'Outdoors: Steaming hydrotherapy jacuzzi hot tub on a private wooden rooftop sun deck, with bubbling massage jets, plush loungers, and expansive sunset and starlight horizon views.'
      },
      {
        id: 'naturist_lakeside_dock',
        label: 'Tranquil Forest Lake Sun Deck & Swimming Jetty',
        type: 'outdoors',
        description: 'Outdoors: Weathered cedarwood swimming jetty extending into a crystal-clear mountain lake, with comfortable sunbathing daybeds, warm pine-scented air, and calm freshwater.'
      },
      {
        id: 'naturist_waterfall_lagoon',
        label: 'Hidden Forest Waterfall & Emerald Plunge Pool',
        type: 'outdoors',
        description: 'Outdoors: Secluded natural plunge lagoon beneath a cascading mountain waterfall, surrounded by lush wild ferns, moss-covered rocks, and sunbeams dancing on emerald water.'
      },
      {
        id: 'naturist_eucalyptus_steam_room',
        label: 'Aromatic Eucalyptus Herbal Steam Sanctuary',
        type: 'indoors',
        description: 'Indoors: Iridescent glass-mosaic tiled steam cabin filled with warm, invigorating eucalyptus mist, heated ergonomic stone benches, and gentle starry fiber-optic ceiling lights.'
      },
      {
        id: 'naturist_bamboo_outdoor_shower',
        label: 'Open-Air Tropical Bamboo Garden Shower',
        type: 'outdoors',
        description: 'Outdoors: Enclosed private outdoor garden shower framed by living bamboo stalks, smooth river pebble drainage, hand-carved stone washbasin, and warm summer breeze.'
      },
      {
        id: 'naturist_resort_pool',
        label: 'Naturist Resort Heated Swimming Pool & Solarium',
        type: 'outdoors',
        description: 'Outdoors: Sparkling turquoise clothing-optional resort pool with submerged sun shelves, poolside teak loungers, tropical palm landscaping, and warm sunlit atmosphere.'
      },
      {
        id: 'naturist_roman_caldarium',
        label: 'Classical Roman Caldarium & Mosaic Thermal Baths',
        type: 'indoors',
        description: 'Indoors: Grand Roman-inspired thermal bath hall with fluted marble columns, heated hypocaust stone floors, warm lapis lazuli mosaic pools, and classical bronze statues.'
      },
      {
        id: 'naturist_farm_cedar_tub',
        label: 'Homestead Wood-Fired Cedar Soaking Tub',
        type: 'outdoors',
        description: 'Outdoors: Rustic wood-fired cedar barrel hot tub set in a secluded herb garden beside blooming lavender beds, overlooking peaceful green polder pastures.'
      },
      {
        id: 'naturist_private_tanning_lawn',
        label: 'Sun-Drenched Solarium & Private Tanning Lawn',
        type: 'outdoors',
        description: 'Outdoors: Walled private sanctuary courtyard with plush velvety lawn, cushioned sunloungers, potted citrus trees, and complete unobserved seclusion under bright sunshine.'
      },
      {
        id: 'naturist_mud_bath_springs',
        label: 'Volcanic Thermal Mud Bath & Mineral Spa',
        type: 'outdoors',
        description: 'Outdoors: Natural warm volcanic mineral clay pool surrounded by geothermal steam vents, wooden boardwalk rinse stations, and therapeutic mineral springs.'
      },
      {
        id: 'naturist_massage_treatment_suite',
        label: 'Couples Aromatherapy & Massage Suite',
        type: 'indoors',
        description: 'Indoors: Warm candlelit holistic treatment studio with twin heated massage tables, soft linen coverings, aromatic essential oil diffusers, and soothing ambient music.'
      },
      {
        id: 'naturist_hinoki_ofuro',
        label: 'Japanese Hinoki Wood Ofuro Soaking Room',
        type: 'indoors',
        description: 'Indoors: Fragrant Japanese Hinoki cypress soaking tub set into a minimalist cedarwood sanctuary with sliding shoji screens opening to a private moss and stone rock garden.'
      },
      {
        id: 'naturist_sea_cave_grotto',
        label: 'Tidal Sea Cave Natural Whirlpool & Grotto',
        type: 'outdoors',
        description: 'Outdoors: Hidden ocean cavern with natural sunbeam shafts illuminating a smooth sand floor, calm swirling seawater pool, and secluded rock sunbathing shelves.'
      },
      {
        id: 'naturist_alpine_hot_tub',
        label: 'Alpine Chalet Balcony Steaming Cedar Hot Tub',
        type: 'outdoors',
        description: 'Outdoors: Elevated timber chalet deck with a steaming round cedar hot tub, crisp mountain air, and panoramic views of evergreen pines and sunlit peaks.'
      },
      {
        id: 'naturist_dune_glamping_bath',
        label: 'Open-Air Hammered Copper Bathtub in the Dunes',
        type: 'outdoors',
        description: 'Outdoors: Freestanding hand-hammered copper bathtub set on a private wooden deck nestled between coastal sand dunes and wild marram grass under a starlit sky.'
      },
      {
        id: 'naturist_infrared_sauna',
        label: 'Full-Spectrum Infrared Sauna & Chromotherapy Lounge',
        type: 'indoors',
        description: 'Indoors: Modern Canadian hemlock infrared sauna cabin with deep radiant warmth, soft multi-spectrum mood illumination, and ergonomic contoured wooden loungers.'
      },
      {
        id: 'naturist_river_sandbar',
        label: 'Secluded River Sandbar & Shingle Island',
        type: 'outdoors',
        description: 'Outdoors: Sun-warmed natural sandbar and pebble beach in the curve of a clear winding river, sheltered by weeping willow trees and whispering freshwater reeds.'
      },
      {
        id: 'naturist_salt_flotation_pool',
        label: 'Dead Sea Mineral Flotation & Salt Pool',
        type: 'indoors',
        description: 'Indoors: Tranquil indoor mineral salt pool designed for effortless weightless floating, with underwater mood lighting, soft acoustic resonance, and warm saline water.'
      }
    ]
  }
];
