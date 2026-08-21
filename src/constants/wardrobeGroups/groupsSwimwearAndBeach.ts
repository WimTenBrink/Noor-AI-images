/**
 * Swimwear, Beach & Resort Wardrobe Group
 */

import { WardrobeGroup, createWardrobeItem } from './types';

export const GROUPS_SWIMWEAR_AND_BEACH: WardrobeGroup[] = [
  {
    id: 'swimwear_beach',
    name: 'Swimwear, Beach & Resort',
    icon: '🏖️',
    description: 'Coastal leisure, bikinis, one-pieces, surfing rashguards, and beach wraps',
    items: [
      createWardrobeItem(
        'swimwear',
        'Active Bikini & Sheer Pareo',
        'Athletic triangle bikini top and cheeky bikini bottom paired with a printed sheer chiffon sarong wrap',
        'barefoot on warm sand',
        [
          { name: 'Athletic Bikini Top', description: 'Double-strap supportive triangle swim top', color: 'Signature Vibrancy' },
          { name: 'Bikini Bottom', description: 'Low-rise cheeky cut swimwear bottoms with side ties', color: 'Signature Vibrancy' },
          { name: 'Printed Sheer Pareo', description: 'Lightweight chiffon sarong tied loosely at the hip', color: 'Harmonious Pattern' }
        ],
        'wearing a vibrant athletic bikini top and matching low-rise bottoms with a sheer chiffon pareo tied around the hips, barefoot on the beach',
        'swimwear_beach',
        {
          miranda: 'wearing a teal active two-piece bikini set with an asymmetrical sapphire blue sheer pareo wrap tied at the hip, barefoot on sunlit sand',
          annelies: 'wearing an amber high-waisted vintage bikini set with a sage green mesh coverup tied at the waist, barefoot on the beach',
          fannie: 'wearing a deep violet triangle bikini top and matching bottoms with an asymmetrical lilac pareo wrap, barefoot on the shore',
          emma: 'wearing a sporty ruby red string bikini with black piping and a sheer black mesh beach skirt, barefoot on warm coastal sand',
          senna: 'wearing a golden honey floral print bikini with a white linen beach wrap draped around her hips, barefoot with sunglasses'
        }
      ),
      createWardrobeItem(
        'swimming_one_piece',
        'Classic High-Leg One-Piece Swimsuit',
        'Sleek scoop-neck one-piece swimsuit with high-cut hips, deep scoop back, and quick-dry lining',
        'barefoot poolside',
        [
          { name: 'High-Leg One-Piece Swimsuit', description: 'Seamless compression nylon swimsuit with plunging back and high-cut leg line', color: 'Signature Solid Tone' }
        ],
        'wearing a sleek scoop-neck one-piece swimsuit with high-cut legs and deep scoop back, barefoot by the water',
        'swimwear_beach',
        {
          miranda: 'wearing a deep sapphire blue sleek high-leg one-piece swimsuit with metallic silver piping, barefoot at the poolside',
          annelies: 'wearing an emerald green ribbed one-piece bathing suit with antique bronze ring hardware, barefoot on beach sand',
          fannie: 'wearing a deep violet matte one-piece swimsuit with lilac side contour stripes, barefoot near the water',
          emma: 'wearing a crimson red racing-cut high-leg one-piece swimsuit with black accents, barefoot poolside',
          senna: 'wearing a golden yellow retro one-piece swimsuit with white contrast binding, barefoot on the dock'
        }
      ),
      createWardrobeItem(
        'swimming_bikini_bottom',
        'Minimal Bikini Bottoms Only',
        'Single low-rise athletic bikini bottoms with side ties, unclad chest with natural sun-kissed skin',
        'barefoot on private beach',
        [
          { name: 'Bikini Bottom Only', description: 'Single cheeky low-rise swimwear bottom with adjustable side cords', color: 'Signature Color' }
        ],
        'wearing minimal low-rise bikini bottoms only with side ties, natural sun-kissed skin, barefoot on warm coastal sand',
        'swimwear_beach',
        {
          miranda: 'wearing teal low-rise bikini bottoms only, natural unclad upper body, barefoot on secluded sandy beach',
          annelies: 'wearing warm amber high-waisted bikini bottoms only, natural unclad upper body, barefoot in the sun',
          fannie: 'wearing lilac string bikini bottoms only, natural unclad upper body, barefoot on seaside rocks',
          emma: 'wearing black and crimson side-tie bikini bottoms only, natural unclad upper body, barefoot on warm sand',
          senna: 'wearing golden honey cheeky bikini bottoms only, natural unclad upper body, barefoot by the water'
        }
      ),
      createWardrobeItem(
        'surf_rashguard',
        'Surfer Long-Sleeve Rashguard & Boardshorts',
        'UPF 50+ fitted long-sleeve zip-front surfing rashguard and quick-dry stretch boardshorts',
        'barefoot on surfboard / sand',
        [
          { name: 'Long-Sleeve Surfing Rashguard', description: 'Colorblocked performance swim shirt with front zipper and ergonomic seams', color: 'Signature Tone & Navy' },
          { name: 'Stretch Boardshorts', description: 'Drawstring water-repellent short boardshorts with back pocket', color: 'Matching Coastal Contrast' }
        ],
        'wearing a long-sleeve zip-front surf rashguard and quick-dry stretch boardshorts, barefoot holding a surfboard',
        'swimwear_beach'
      ),
      createWardrobeItem(
        'linen_resort',
        'Open Linen Resort Shirt & Shorts',
        'Unbuttoned lightweight white linen beach shirt over a bikini top with matching drawstring linen shorts',
        'braided leather slide sandals / barefoot',
        [
          { name: 'Oversized Linen Beach Shirt', description: 'Loose unbuttoned breezy linen shirt blowing gently in the wind', color: 'Nautical White' },
          { name: 'Drawstring Linen Shorts', description: 'High-waisted lightweight relaxed linen shorts', color: 'Sand / Signature Color' }
        ],
        'wearing a breezy oversized white linen shirt unbuttoned over a bikini top with relaxed drawstring linen shorts, barefoot on the beach',
        'swimwear_beach'
      )
    ]
  }
];
