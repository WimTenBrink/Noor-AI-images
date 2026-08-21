/**
 * Sensual, Bondage & Wrapped Bands Wardrobe Group
 */

import { WardrobeGroup, createWardrobeItem } from './types';

export const GROUPS_SENSUAL_AND_BONDAGE: WardrobeGroup[] = [
  {
    id: 'erotic_bondage',
    name: 'Sensual, Bondage & Wrapped Bands',
    icon: '🎀',
    description: 'Artistic rope shibari harnesses, leather strap cinchers, satin wrapped bands, and cage lingerie',
    items: [
      createWardrobeItem(
        'bondage_shibari_jute',
        'Natural Jute Rope Shibari Chest Harness',
        'Intricate geometric diamond-patterned natural jute rope shibari chest harness tied securely around the torso over unclad skin',
        'barefoot on bamboo mat',
        [
          { name: 'Jute Shibari Harness', description: 'Soft conditioned natural fiber ropes tied in traditional decorative diamond patterns', color: 'Natural Golden Jute' }
        ],
        'wearing an intricate artistic geometric jute rope shibari chest harness tied over natural unclad skin, barefoot on bamboo tatami',
        'erotic_bondage'
      ),
      createWardrobeItem(
        'bondage_satin_bands',
        'Crisscrossing Silk Satin Wrapped Bands',
        'Wide lustrous silk satin ribbon bands wrapped and tied crisscrossing around the chest, waist, and thighs',
        'barefoot on silk sheets',
        [
          { name: 'Satin Ribbon Bands', description: 'Wide shimmering silk satin bands tied in elegant flat knots across the body', color: 'Signature Lustrous Tone' }
        ],
        'wearing wide lustrous silk satin ribbon bands wrapped crisscrossing across the chest and waist over natural skin, barefoot on silk sheets',
        'erotic_bondage'
      ),
      createWardrobeItem(
        'bondage_leather_straps',
        'Artisan Leather Strap Body Harness',
        'Supple oiled leather cage body harness with polished brass O-rings and adjustable buckle straps framing the torso',
        'barefoot on dark floorboards',
        [
          { name: 'Leather Cage Harness', description: 'Handcrafted leather straps with riveted brass rings framing the ribcage and hips', color: 'Oiled Chestnut / Black Leather' }
        ],
        'wearing an artisan oiled leather strap body harness with brass O-rings and buckle accents over natural unclad skin, barefoot',
        'erotic_bondage'
      ),
      createWardrobeItem(
        'bondage_velvet_choker_cuffs',
        'Velvet Collar & Connected Wrist Cuffs',
        'Plush velvet choker collar with brass leash ring connected via slender chains to matching velvet wrist cuffs',
        'barefoot on plush rug',
        [
          { name: 'Plush Velvet Collar', description: 'Padded velvet choker with decorative center D-ring and satin ribbon tie', color: 'Deep Velvet Jewel Tone' },
          { name: 'Velvet Wrist Cuffs', description: 'Matching soft velvet cuffs with fine golden link connector chains', color: 'Deep Velvet Jewel Tone' }
        ],
        'wearing a padded velvet choker collar and matching velvet wrist cuffs connected by fine golden chains over natural unclad skin, barefoot',
        'erotic_bondage'
      )
    ]
  }
];
