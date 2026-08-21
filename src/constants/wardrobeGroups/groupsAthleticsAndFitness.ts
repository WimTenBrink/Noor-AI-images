/**
 * Athletics, Sports & Fitness Wardrobe Group
 */

import { WardrobeGroup, createWardrobeItem } from './types';

export const GROUPS_ATHLETICS_AND_FITNESS: WardrobeGroup[] = [
  {
    id: 'athletics_fitness',
    name: 'Athletics, Sports & Fitness',
    icon: '🏃',
    description: 'High-energy athletic training, gym workouts, yoga, tennis, and outdoor sports',
    items: [
      createWardrobeItem(
        'sports',
        'Cross-Training & Running Set',
        'High-impact racerback compression sports bra and high-rise athletic training tights with mesh side panels',
        'performance lightweight running sneakers',
        [
          { name: 'Compression Sports Bra', description: 'Moisture-wicking cross-back sports bra with supportive band', color: 'Signature Performance Color' },
          { name: 'High-Rise Athletic Tights', description: 'Compression running leggings with phone pocket and reflective accents', color: 'Midnight Contrast' }
        ],
        'wearing a high-impact compression racerback sports bra and matching high-rise athletic running tights, with lightweight performance sneakers',
        'athletics_fitness',
        {
          miranda: 'wearing a teal compression racerback crop top, deep sapphire running leggings, and platinum silver athletic running sneakers',
          annelies: 'wearing a sage green ribbed performance sports bra, amber high-rise athletic shorts, and lightweight trail running sneakers',
          fannie: 'wearing a deep violet high-impact cross-back sports bra, lavender and silver compression tights, and high-top training sneakers',
          emma: 'wearing a crimson red compression workout crop top, black high-waisted gym bike shorts, and red cross-training sneakers',
          senna: 'wearing a golden honey athletic racerback tank, dark grey stretch running shorts, and retro athletic trainers'
        }
      ),
      createWardrobeItem(
        'yoga_flow',
        'Seamless Yoga & Pilates Bodysuit',
        'Seamless ribbed one-piece yoga catsuit with crisscross back straps and ankle stirrups',
        'barefoot on yoga mat',
        [
          { name: 'Seamless Yoga Catsuit', description: 'Ribbed contour stretch jumpsuit with scoop neckline and open back', color: 'Earth / Pastel Hue' }
        ],
        'wearing a seamless ribbed stretch yoga catsuit with crisscross back straps and body-contouring panels, barefoot on a mat',
        'athletics_fitness'
      ),
      createWardrobeItem(
        'tennis_court',
        'Classic Tennis Dress & Visor',
        'Pleated athletic tennis dress with built-in undershorts, polo collar, and matching athletic sun visor',
        'white tennis court shoes with crew socks',
        [
          { name: 'Pleated Tennis Dress', description: 'Quarter-zip performance pique dress with drop-waist pleated skirt', color: 'Crisp Athletic White with Colored Trim' },
          { name: 'Athletic Sun Visor', description: 'Curved brim performance visor with terrycloth sweatband', color: 'Matching Accent' }
        ],
        'wearing a crisp white pleated athletic tennis dress with colored trim, matching visor, and tennis sneakers with white crew socks',
        'athletics_fitness'
      ),
      createWardrobeItem(
        'boxing_gym',
        'Boxing & Combat Training Set',
        'Satin boxing shorts with wide elastic waistband over a sports bra, with wrapped hand tape',
        'boxing ring shoes / barefoot',
        [
          { name: 'Satin Boxing Shorts', description: 'High-slit training shorts with embroidered character emblem', color: 'Signature Color & Gold' },
          { name: 'Hand Wraps', description: 'Cotton canvas hand and wrist wraps covering knuckles', color: 'White / Black' }
        ],
        'wearing athletic satin boxing shorts with side slits, matching sports bra, and wrapped athletic tape around hands and wrists, barefoot in the ring',
        'athletics_fitness'
      ),
      createWardrobeItem(
        'dance_studio',
        'Dance Studio Leotard & Wrap Skirt',
        'Spaghetti-strap cotton dance leotard with a sheer chiffon wrap skirt and soft knit leg warmers',
        'barefoot with knit leg warmers',
        [
          { name: 'Camisole Dance Leotard', description: 'Fitted scoop-neck stretch leotard with shelf lining', color: 'Signature Tone' },
          { name: 'Chiffon Wrap Skirt', description: 'Tie-waist sheer ballet skirt falling to mid-thigh', color: 'Sheer Matching Hue' },
          { name: 'Ribbed Leg Warmers', description: 'Slouchy acrylic knit leg warmers gathered around ankles', color: 'Heather Grey' }
        ],
        'wearing a fitted camisole dance leotard with a sheer chiffon wrap skirt and slouchy knit leg warmers, barefoot with dancer posture',
        'athletics_fitness'
      )
    ]
  }
];
