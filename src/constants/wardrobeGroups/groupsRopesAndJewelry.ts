/**
 * Ropes, Jewelry & Natural Adornments Wardrobe Group
 */

import { WardrobeGroup, createWardrobeItem } from './types';

export const GROUPS_ROPES_AND_JEWELRY: WardrobeGroup[] = [
  {
    id: 'ropes_jewelry',
    name: 'Ropes and jewelry',
    icon: '🌿',
    description: 'Outfits crafted exclusively from ropes, jewelry, metal chains, or natural leaves in strategic places — strictly no cloth',
    items: [
      createWardrobeItem(
        'ropes_hemp_chainmail',
        'Layered Filigree Body Chains & Hemp Ropes',
        'Adorned exclusively in layered golden filigree body chains, cascading metallic necklaces, and soft knotted hemp cords with no cloth',
        'barefoot with golden anklets and toe rings',
        [
          { name: 'Filigree Body Chain Set', description: 'Intricate draped shoulder-to-hip golden chains with gemstone drops', color: 'Gleaming Gold & Jewels' },
          { name: 'Knotted Hemp Adornment', description: 'Soft hemp rope cords framing the waistline and hips', color: 'Natural Golden Hemp' }
        ],
        'adorned exclusively in layered golden filigree body chains and soft knotted hemp cords with no cloth, barefoot with delicate gold anklets',
        'ropes_jewelry'
      ),
      createWardrobeItem(
        'ropes_ivy_vine_leaves',
        'Living Ivy Vines & Laurel Leaves',
        'Natural unclad figure adorned exclusively with woven living ivy vines, laurel garlands, and emerald gemstone body chains with strictly no fabric',
        'barefoot with braided vine anklets',
        [
          { name: 'Woven Ivy Garland Harness', description: 'Fresh flexible green ivy vines and laurel leaves woven gracefully across the torso and hips', color: 'Lush Green Ivy & Bronze Filigree' }
        ],
        'adorned exclusively in living green ivy vines and laurel garlands woven across the torso with no cloth, barefoot on forest moss with vine anklets',
        'ropes_jewelry'
      ),
      createWardrobeItem(
        'ropes_pearl_cascade',
        'Cascading Pearl Strands & Silver Chains',
        'Layered multi-strand freshwater pearl ropes and delicate sterling silver filigree chains draped across the chest and hips with no cloth',
        'barefoot with silver pearl toe rings',
        [
          { name: 'Freshwater Pearl Harness', description: 'Dozens of shimmering pearl strands draped from choker to waist', color: 'Lustrous Iridescent Pearl & Sterling Silver' }
        ],
        'adorned exclusively in cascading freshwater pearl strands and delicate sterling silver body chains with no cloth, barefoot with silver pearl toe rings',
        'ropes_jewelry'
      )
    ]
  }
];
