/**
 * Rags, Castaway & Weathered Wardrobe Group
 */

import { WardrobeGroup, createWardrobeItem } from './types';

export const GROUPS_RAGS_AND_WEATHERED: WardrobeGroup[] = [
  {
    id: 'rags_weathered',
    name: 'Rags, Castaway & Weathered',
    icon: '🪵',
    description: 'Distressed peasant rags, burlap tunics, castaway garments, and weathered wanderer wraps',
    items: [
      createWardrobeItem(
        'rags_peasant_torn',
        'Distressed Peasant Linen Rags',
        'Frayed and weathered rough unbleached linen tunic with torn ragged hem and rope belt cord',
        'barefoot with dirt-dusted feet',
        [
          { name: 'Torn Peasant Tunic', description: 'Coarse open-weave flax tunic with frayed edges and patched holes', color: 'Aged Weathered Linen Flax' },
          { name: 'Rope Waist Cord', description: 'Knotted frayed hemp cord holding the torn fabric together', color: 'Natural Hemp' }
        ],
        'wearing a distressed frayed coarse linen peasant tunic with ragged hem tied with a knotted hemp rope cord, barefoot on dirt road',
        'rags_weathered'
      ),
      createWardrobeItem(
        'rags_castaway_island',
        'Island Castaway Shredded Garments',
        'Sun-bleached shredded cotton shirt torn into a crop wrap and frayed ragged denim shorts held by vines',
        'barefoot on remote island sand',
        [
          { name: 'Shredded Sun-Bleached Top', description: 'Torn ragged cotton crop wrap tied across the chest', color: 'Sun-Bleached Faded White' },
          { name: 'Frayed Castaway Shorts', description: 'Ragged cut-off denim with unraveled threads and sea salt stains', color: 'Faded Ocean Blue' }
        ],
        'wearing shredded sun-bleached cotton rags tied across the chest and frayed castaway shorts with sea salt distressing, barefoot on tropical sand',
        'rags_weathered'
      ),
      createWardrobeItem(
        'rags_burlap_sack',
        'Rough Burlap Sack Tunic',
        'Rough natural burlap hessian cloth with frayed armholes, tied loosely at the waist with fibrous cord',
        'barefoot on rustic floorboards',
        [
          { name: 'Burlap Sack Shift', description: 'Coarse woven jute burlap fabric draped as a sleeveless shift', color: 'Natural Earth Burlap Brown' }
        ],
        'wearing a coarse rough burlap sack tunic with frayed edges tied loosely with fibrous twine, barefoot on rustic wooden floorboards',
        'rags_weathered'
      )
    ]
  }
];
