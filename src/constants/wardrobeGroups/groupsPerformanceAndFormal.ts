/**
 * Performance, Gala & Formal Wardrobe Group
 */

import { WardrobeGroup, createWardrobeItem } from './types';

export const GROUPS_PERFORMANCE_AND_FORMAL: WardrobeGroup[] = [
  {
    id: 'performance_formal',
    name: 'Performance, Gala & Formal',
    icon: '✨',
    description: 'Red carpet galas, televised interviews, concert stage outfits, and power suits',
    items: [
      createWardrobeItem(
        'gala',
        'Red Carpet Gala Gown',
        'Floor-length backless silk satin gown with high leg slit, metallic geometric embroidery, and matching fine jewelry',
        'strappy metallic stiletto heels / barefoot',
        [
          { name: 'Floor-Length Silk Gown', description: 'Bias-cut flowing silk satin gown with draped cowl neckline and side thigh slit', color: 'Signature Lustrous Tone' },
          { name: 'Statement Fine Jewelry', description: 'Choker necklace and drop earrings with matching metallic accents', color: 'Platinum / Bronze / Gold' }
        ],
        'wearing a floor-length bias-cut silk satin gala gown with a graceful high leg slit, delicate choker necklace, and elegant barefoot stance',
        'performance_formal',
        {
          miranda: 'wearing a floor-length high-slit deep sapphire blue satin gown with platinum silver geometric trim and choker necklace, barefoot on marble stage',
          annelies: 'wearing a deep emerald green velvet backless evening gown with antique bronze floral embroidery and bronze drop earrings, barefoot',
          fannie: 'wearing an asymmetrical lavender silk evening gown with metallic silver geometric piping and silver cuff bracelets, barefoot',
          emma: 'wearing a dramatic ruby red silk crepe gown with black onyx corset boning and crimson drop earrings, barefoot',
          senna: 'wearing a warm golden amber satin column gown with honey topaz jewelry accents and tailored waist drape, barefoot'
        }
      ),
      createWardrobeItem(
        'interview',
        'Televised Interview & Press Suit',
        'Tailored single-breasted blazer and matching high-waisted wide-leg pleated trousers over a silk draped blouse',
        'pointed-toe dress flats / barefoot',
        [
          { name: 'Tailored Blazer', description: 'Slim-cut structured blazer with peak lapels and horn buttons', color: 'Signature Deep Tone' },
          { name: 'Silk Draped Blouse', description: 'Lustrous silk wrap blouse with concealed placket', color: 'Neutral Silk' },
          { name: 'Wide-Leg Pleated Trousers', description: 'High-waisted tailored trousers with pressed center creases', color: 'Signature Deep Tone' }
        ],
        'wearing a sharp tailored single-breasted blazer over a draped silk blouse and matching high-waisted wide-leg trousers, barefoot on stage',
        'performance_formal',
        {
          miranda: 'wearing a crisp deep sapphire tailored blazer over a pearl white draped silk wrap blouse and matching sapphire wide-leg trousers, barefoot',
          annelies: 'wearing an emerald green structured trench-cut blazer over a warm cream boho silk button-up and pleated sage trousers, barefoot',
          fannie: 'wearing a deep violet satin tailored vest and matching lavender high-waisted cropped dress trousers, barefoot with silver lapel pins',
          emma: 'wearing a crimson red power suit blazer with black silk lapels and fitted dress pants over a black lace camisole, barefoot',
          senna: 'wearing a golden camel tailored suit jacket over a crisp ivory silk button-down and tailored trousers, barefoot with press badge'
        }
      ),
      createWardrobeItem(
        'stage_concert',
        'Live Concert Rock & Pop Stage',
        'Sequin-embroidered leather biker jacket over an asymmetrical metallic crop top and stretch leather performance pants',
        'studded ankle boots / barefoot',
        [
          { name: 'Embellished Stage Jacket', description: 'Cropped moto jacket with iridescent sequins and zip details', color: 'Signature Metallic Tone' },
          { name: 'Metallic Crop Top', description: 'Sleeveless compression stage top with shimmering finish', color: 'Signature Accent Tone' },
          { name: 'Performance Leather Pants', description: 'Stretch faux leather slim stage pants with reinforced knees', color: 'Midnight Black' }
        ],
        'wearing a sequin-embellished cropped stage moto jacket over a metallic crop top and stretch leather concert performance pants, barefoot on stage',
        'performance_formal'
      ),
      createWardrobeItem(
        'power_tuxedo',
        'Contemporary Velvet Tuxedo',
        'Satin-shawl collar plush velvet tuxedo jacket worn open over a plunge satin halter top and matching velvet trousers',
        'black patent dress loafers / barefoot',
        [
          { name: 'Velvet Tuxedo Jacket', description: 'Plush tailored velvet smoking jacket with satin shawl lapels', color: 'Deep Jewel Tone' },
          { name: 'Satin Halter Camisole', description: 'Deep plunge silk satin top with back ties', color: 'Matching Silk' },
          { name: 'Tailored Velvet Trousers', description: 'Slim-cut velvet evening trousers with satin side stripe', color: 'Deep Jewel Tone' }
        ],
        'wearing a plush velvet tuxedo jacket with satin shawl lapels open over a plunge silk halter top and matching velvet evening trousers, barefoot',
        'performance_formal'
      ),
      createWardrobeItem(
        'acoustic_recital',
        'Acoustic Chamber Recital Dress',
        'Flowing chiffon midi dress with flutter sleeves, pleated bodice, and subtle metallic filigree embroidery',
        'ballet flats / barefoot on stage',
        [
          { name: 'Pleated Chiffon Midi Dress', description: 'Layered translucent chiffon dress with tiered skirt and flutter sleeves', color: 'Muted Pastel Tone' }
        ],
        'wearing a flowing tiered chiffon midi dress with flutter sleeves and pleated bodice with subtle metallic filigree embroidery, barefoot on stage',
        'performance_formal'
      )
    ]
  }
];
