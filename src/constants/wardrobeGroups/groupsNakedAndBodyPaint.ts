/**
 * Naked & Body Painted Costumes Wardrobe Group
 */

import { WardrobeGroup, createWardrobeItem } from './types';

export const GROUPS_NAKED_AND_BODY_PAINT: WardrobeGroup[] = [
  {
    id: 'naked',
    name: 'Naked & Body Painted Costumes',
    icon: '🎨',
    description: 'Natural unpainted adornments (pure jewelry, rope harnesses, vine leaves, floral garlands) as well as artistic full-body paint designs in signature colors',
    items: [
      createWardrobeItem(
        'naked_pure_natural',
        'Natural Unadorned Skin (Pure Form)',
        'Completely unclad natural figure with smooth, natural skin tone and subtle studio rim lighting, barefoot and confident',
        'barefoot on warm floorboards',
        [],
        'completely natural unclad skin with soft warm lighting and natural posture, barefoot with graceful poise',
        'naked',
        {
          miranda: 'natural unclad appearance with subtle platinum silver stud earrings, soft oceanic ambient lighting, barefoot with confident graceful posture',
          annelies: 'natural unclad appearance with bronze leaf ear cuff, warm amber sunlit rim lighting, barefoot with serene smile',
          fannie: 'natural unclad appearance with silver helix ring, twilight violet ambient lighting, barefoot with athletic stance',
          emma: 'natural unclad appearance with small ruby ear studs, high-contrast studio rim lighting, barefoot with bold athletic poise',
          senna: 'natural unclad appearance with delicate gold chain necklace, warm golden hour lighting, barefoot with warm friendly expression'
        }
      ),
      createWardrobeItem(
        'naked_bodypaint_signature',
        'Artistic Full-Body Paint in Signature Palette',
        'Intricate full-body artistic swirls, tribal lines, and gradient pigments painted directly onto skin in character palette colors',
        'barefoot with painted foot arches',
        [
          { name: 'Full-Body Artistic Pigment', description: 'Intricate swirling matte and metallic body paint designs', color: 'Signature Character Palette' }
        ],
        'adorned in elaborate artistic full-body paint with flowing swirls, geometric accents, and shimmering metallic pigment in signature colors, barefoot',
        'naked',
        {
          miranda: 'adorned in elaborate artistic body paint with deep sapphire blue waves, teal swirls, and shimmering platinum silver line art across torso and legs, barefoot',
          annelies: 'adorned in natural botanical body paint with swirling emerald vines, golden amber leaves, and bronze tribal accents, barefoot',
          fannie: 'adorned in celestial body paint with deep violet nebula patterns, lilac geometric constellations, and silver stardust pigments, barefoot',
          emma: 'adorned in fierce flame body paint with ruby red ribbons, black obsidian tribal geometric lines, and crimson accents, barefoot',
          senna: 'adorned in sunburst body paint with warm golden honey rays, amber floral fractals, and cream line art across torso and limbs, barefoot'
        }
      ),
      createWardrobeItem(
        'naked_gold_leaf_kintsugi',
        'Gold Leaf Kintsugi Skin Adornment',
        'Gleaming 24k gold leaf and lacquer lines applied along the natural contours of the body like Japanese kintsugi pottery repair',
        'barefoot with gilded toes',
        [
          { name: '24k Gold Leaf Kintsugi Lines', description: 'Intricate fractured gold foil lines accentuating muscle definition and collarbones', color: 'Gleaming 24k Gold Leaf' }
        ],
        'natural unclad skin adorned with intricate 24k gold leaf kintsugi fracture lines following the natural contours of the body, barefoot in soft light',
        'naked'
      ),
      createWardrobeItem(
        'naked_bioluminescent_glow',
        'Bioluminescent Luminescent Markings',
        'Delicate glowing bioluminescent patterns painted along the spine, collarbone, and limbs that softly illuminate in dim light',
        'barefoot in dark glowing atmosphere',
        [
          { name: 'Bioluminescent Body Markings', description: 'Phosphorescent intricate tribal patterns emitting a soft ambient glow', color: 'Cyan & Violet Bioluminescence' }
        ],
        'natural unclad skin adorned with delicate glowing cyan and violet bioluminescent markings tracing the spine and collarbones, barefoot in twilight',
        'naked'
      )
    ]
  }
];
