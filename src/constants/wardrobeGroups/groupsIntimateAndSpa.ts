/**
 * Intimate, Lingerie & Spa Towels Wardrobe Group
 */

import { WardrobeGroup, createWardrobeItem } from './types';

export const GROUPS_INTIMATE_AND_SPA: WardrobeGroup[] = [
  {
    id: 'intimate_towels',
    name: 'Intimate, Lingerie & Spa Towels',
    icon: '🪷',
    description: 'Delicate lace sets, silk slips, sauna towel wraps, and plush spa bathrobes',
    items: [
      createWardrobeItem(
        'underwear',
        'Delicate Silk Lace Lingerie Set',
        'Delicate sheer scalloped floral lace bralette with matching lace boyshorts or bikini briefs',
        'barefoot in private bedroom',
        [
          { name: 'Floral Lace Bralette', description: 'Wireless unlined triangle bralette with scalloped eyelash lace edges', color: 'Signature Lace Tone' },
          { name: 'Matching Lace Boyshorts', description: 'Low-rise stretch lace panties with scalloped leg trim', color: 'Signature Lace Tone' }
        ],
        'wearing a delicate scalloped floral lace wireless bralette and matching sheer lace boyshorts, barefoot in soft morning bedroom light',
        'intimate_towels',
        {
          miranda: 'wearing a deep sapphire blue silk lace bralette and matching teal lace boyshorts with silver trim, barefoot in bedroom light',
          annelies: 'wearing an amber floral lace bralette and sage green comfortable cotton briefs with bronze charm, barefoot in morning light',
          fannie: 'wearing a violet satin boxer shorts and lavender string lace bralette with lilac trim, barefoot in bedroom',
          emma: 'wearing a black lace underwire bra and crimson silk panties with delicate bows, barefoot in bedroom',
          senna: 'wearing a golden honey lace bralette and warm ivory cotton boyshorts, barefoot with soft smile'
        }
      ),
      createWardrobeItem(
        'silk_slip_nightgown',
        'Bias-Cut Mulberry Silk Slip',
        'Bias-cut short silk satin slip nightdress with delicate spaghetti straps and French lace trim along the hemline',
        'barefoot on bedroom carpet',
        [
          { name: 'Mulberry Silk Slip', description: 'Flowing thigh-length silk satin camisole dress with plunging V-neckline', color: 'Lustrous Pastel / Signature Hue' }
        ],
        'wearing a flowing bias-cut mulberry silk satin slip nightdress with spaghetti straps and delicate lace trim, barefoot',
        'intimate_towels'
      ),
      createWardrobeItem(
        'spa_towel_wrap',
        'Secured Spa Towel Wrap',
        'Thick plush waffle-weave white cotton bath towel wrapped securely around the chest falling to mid-thigh',
        'barefoot on warm bath tiles',
        [
          { name: 'Plush Bath Towel Wrap', description: 'Thick absorbent white terrycloth towel tucked securely above the bust', color: 'Crisp Spa White' }
        ],
        'wearing a thick plush white Turkish cotton bath towel wrapped securely around the chest and falling to mid-thigh, barefoot on warm bath tiles',
        'intimate_towels'
      ),
      createWardrobeItem(
        'waffle_bathrobe',
        'Open Waffle-Knit Spa Bathrobe',
        'Plush organic cotton waffle-knit spa bathrobe tied loosely with a belt over natural unclad skin',
        'barefoot with damp hair',
        [
          { name: 'Organic Waffle Robe', description: 'Voluminous kimono-collar spa robe with tie sash and deep patch pockets', color: 'Warm Cream / Signature Tint' }
        ],
        'wearing a plush organic waffle-knit spa bathrobe tied loosely at the waist over natural skin, barefoot with relaxed posture',
        'intimate_towels'
      ),
      createWardrobeItem(
        'corset_camisole',
        'Vintage Ribbed Camisole & Tap Shorts',
        'Vintage ribbed cotton scoop-neck camisole top and matching high-waisted flutter tap shorts',
        'barefoot on sunlit floor',
        [
          { name: 'Ribbed Cotton Camisole', description: 'Fine-gauge pointelle cotton tank top with tiny satin bow', color: 'Pearl White' },
          { name: 'Flutter Tap Shorts', description: 'Loose lightweight cotton shorts with scalloped lace hem', color: 'Soft Matching Hue' }
        ],
        'wearing a vintage ribbed pointelle cotton camisole with satin bow and matching flutter tap shorts, barefoot on sunlit floor',
        'intimate_towels'
      )
    ]
  }
];
