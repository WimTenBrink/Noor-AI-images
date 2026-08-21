/**
 * Daily, Casual & Lounge Wardrobe Group
 */

import { WardrobeGroup, createWardrobeItem } from './types';

export const GROUPS_DAILY_AND_CASUAL: WardrobeGroup[] = [
  {
    id: 'daily_casual',
    name: 'Daily, Casual & Lounge',
    icon: '☕',
    description: 'Casual rehearsal, studio sessions, tour travel, streetwear, farmwork, and cozy loungewear',
    items: [
      createWardrobeItem(
        'casual',
        'Casual Rehearsal & Home',
        'Comfortable oversized knit sweater and relaxed fit denim jeans with rolled cuffs',
        'soft canvas slip-on sneakers',
        [
          { name: 'Slouchy Knit Sweater', description: 'Relaxed oversized crewneck sweater with ribbed cuffs and drop shoulders', color: 'Signature Knit' },
          { name: 'Relaxed Fit Jeans', description: 'High-waisted comfortable denim trousers with subtle cuffed hems', color: 'Nautical White / Indigo' }
        ],
        'wearing a comfortable oversized knit sweater and relaxed denim jeans with soft slip-on sneakers',
        'daily_casual',
        {
          miranda: 'wearing a slouchy deep sapphire blue oversized knit sweater, crisp nautical white relaxed denim trousers, and soft canvas sneakers',
          annelies: 'wearing a warm cream oversized slouchy knit sweater, sage green linen utility trousers, and bronze feather pendant with canvas sneakers',
          fannie: 'wearing a relaxed lavender linen button-down shirt, deep violet cargo trousers, and metallic silver high-top sneakers',
          emma: 'wearing a ruby red oversized boyfriend hoodie, distressed charcoal denim jeans, and black skate sneakers',
          senna: 'wearing a golden honey waffle-knit henley shirt, relaxed driftwood brown canvas trousers, and vintage white trainers'
        }
      ),
      createWardrobeItem(
        'farmwork',
        'Abcoude Farmwork & Gardening',
        'Heavy-duty canvas bib overalls with utility pockets over a rolled-sleeve flannel shirt',
        'heavy-duty mud-proof rubber wellington boots',
        [
          { name: 'Canvas Work Dungarees', description: 'Sturdy cotton canvas bib overalls with utility pockets and brass buckles', color: 'Earth Canvas' },
          { name: 'Long-Sleeve Flannel Layer', description: 'Soft brushed flannel button-down shirt rolled up at the forearms', color: 'Plaid Pattern' }
        ],
        'wearing sturdy canvas bib overalls over a rolled-sleeve flannel work shirt, with rubber wellington boots',
        'daily_casual',
        {
          miranda: 'wearing coastal driftwood brown canvas work overalls over an ocean teal brushed flannel shirt with mud-proof rubber boots',
          annelies: 'wearing rustic bronze canvas garden dungarees over an amber and sage plaid flannel shirt with green wellington boots',
          fannie: 'wearing deep violet utility work overalls over a lilac check cotton work shirt with waterproof rubber boots',
          emma: 'wearing heavy charcoal denim work overalls over a crimson red flannel shirt with rugged work boots',
          senna: 'wearing golden tan canvas dungarees over a sunburst plaid work shirt with brown utility wellingtons'
        }
      ),
      createWardrobeItem(
        'laundryday',
        'Laundry Day & Home Chores',
        'Oversized soft cotton fleece t-shirt and lightweight drawstring lounge shorts',
        'barefoot on warm wooden floorboards',
        [
          { name: 'Oversized Cotton T-Shirt', description: 'Loose vintage-wash boyfriend cotton tee draped comfortably off one shoulder', color: 'Signature Tone' },
          { name: 'Drawstring Boxer Shorts', description: 'Lightweight breathable striped cotton lounge shorts', color: 'Crisp White' }
        ],
        'wearing a loose oversized soft cotton tee off one shoulder and relaxed drawstring lounge shorts, barefoot on floorboards',
        'daily_casual',
        {
          miranda: 'wearing a pale blue oversized soft cotton fleece t-shirt and pearl white ribbed knit lounge shorts, barefoot on warm floorboards',
          annelies: 'wearing a sage green rolled-sleeve graphic tee and warm cream fleece lounge sweatshorts, barefoot on wooden floorboards',
          fannie: 'wearing a lilac cropped fleece sweatshirt and deep violet drawstring jersey lounge shorts, barefoot on timber floorboards',
          emma: 'wearing a washed black oversized graphic band tee and ruby red cotton boxer shorts, barefoot on studio floor',
          senna: 'wearing a golden amber soft cotton lounge t-shirt and off-white drawstring shorts, barefoot on wooden planks'
        }
      ),
      createWardrobeItem(
        'studiowork',
        'Recording Studio Session & Mix Work',
        'Soft modal cotton jogger pants, fitted cotton tank top, and an open slouchy cardigan sweater',
        'cushioned indoor studio slippers',
        [
          { name: 'Slouchy Studio Cardigan', description: 'Open-front chunky knit cardigan with ribbed pockets', color: 'Signature Muted Tone' },
          { name: 'Fitted Cotton Tank', description: 'Soft breathable ribbed cotton scoop neck tank', color: 'Neutral Base' },
          { name: 'Tapered Studio Joggers', description: 'Flex-fit modal cotton jogger pants with elasticated waistband', color: 'Signature Color' }
        ],
        'wearing an open slouchy knit cardigan over a fitted cotton tank top and tapered studio jogger pants, with soft studio slippers',
        'daily_casual',
        {
          miranda: 'wearing a pale blue slouchy knitted cardigan, pearl white cotton camisole, and ocean teal relaxed linen drawstring pants, barefoot in studio',
          annelies: 'wearing a bronze open chunky knit cardigan, warm cream cotton tank, and sage green artist studio wide-leg trousers, barefoot in studio',
          fannie: 'wearing a lavender sleeveless athletic tank top and deep violet flex-fit studio jogger pants, barefoot in the vocal booth',
          emma: 'wearing a black open oversized hoodie, crimson ribbed tank top, and charcoal grey cotton sweatpants, barefoot at the mixing console',
          senna: 'wearing a honey gold knit cardigan, white scoop neck tank top, and driftwood brown studio trousers, barefoot with studio headphones'
        }
      ),
      createWardrobeItem(
        'travel',
        'Tour Bus & Travel Lounge',
        'Plush velour hooded zip tracksuit with matching tapered sweatpants and memory foam slip-ons',
        'cushioned memory foam travel slip-ons',
        [
          { name: 'Velour Zip Hoodie', description: 'Ultra-soft plush velour zip-up hoodie with metal hardware pull', color: 'Signature Deep Tone' },
          { name: 'Matching Velour Joggers', description: 'Comfortable relaxed-fit velour sweatpants with ribbed ankles', color: 'Signature Deep Tone' }
        ],
        'wearing a comfortable plush velour hooded zip-up tracksuit and matching joggers with cushioned travel slip-ons',
        'daily_casual',
        {
          miranda: 'wearing a deep sapphire blue plush velour hooded tracksuit with silver zipper pulls and matching joggers, barefoot on tour bus rug',
          annelies: 'wearing a warm cream knit duster cardigan over emerald green stretch travel leggings, barefoot in lounge',
          fannie: 'wearing a lavender hooded zip-up tracksuit with deep violet racing stripes and matching joggers, barefoot',
          emma: 'wearing a crimson red and black colorblocked fleece travel sweatsuit with silver zippers, barefoot on travel sofa',
          senna: 'wearing a golden amber velour lounge tracksuit with off-white piping and relaxed travel joggers, barefoot'
        }
      ),
      createWardrobeItem(
        'streetwear_city',
        'Urban Streetwear & Denim Jacket',
        'Oversized vintage denim jacket with brass buttons over a cropped rib-knit top and high-waisted cargo joggers',
        'chunky platform urban sneakers',
        [
          { name: 'Oversized Denim Jacket', description: 'Vintage wash distressed denim trucker jacket with drop shoulders', color: 'Washed Indigo Denim' },
          { name: 'Cropped Ribbed Top', description: 'Form-fitting ribbed cotton crop top', color: 'Signature Color' },
          { name: 'Utility Cargo Joggers', description: 'Multi-pocket canvas street joggers with buckle straps', color: 'Neutral Street Tone' }
        ],
        'wearing an oversized vintage denim trucker jacket over a cropped ribbed top and multi-pocket street cargo joggers with chunky platform sneakers',
        'daily_casual'
      ),
      createWardrobeItem(
        'cozy_pajamas',
        'Silk Satin Pajama Set',
        'Notched-collar button-front silk pajama shirt with contrasting piping and matching wide-leg pajama trousers',
        'barefoot on bedroom rug',
        [
          { name: 'Silk Button-Front Pajama Shirt', description: 'Lustrous mulberry silk sleep shirt with mother-of-pearl buttons and chest pocket', color: 'Signature Lustrous Tone' },
          { name: 'Wide-Leg Silk Sleep Trousers', description: 'Flowing elastic-waist silk satin sleep pants with drawstring', color: 'Signature Lustrous Tone' }
        ],
        'wearing a luxurious notched-collar silk satin pajama shirt with contrast piping and flowing matching wide-leg silk trousers, barefoot',
        'daily_casual'
      ),
      createWardrobeItem(
        'coffee_morning',
        'Morning Coffee Oversized Knit',
        'Thick chunky cable-knit oversized sweater worn over ribbed cotton hot shorts, holding a ceramic mug',
        'barefoot with knit ankle warmers',
        [
          { name: 'Chunky Cable-Knit Sweater', description: 'Voluminous wool-blend turtleneck sweater falling past the hips', color: 'Warm Oatmeal / Character Hue' },
          { name: 'Ribbed Lounge Hot Shorts', description: 'Soft seamless cotton stretch shorts', color: 'Soft Neutral' }
        ],
        'wearing a chunky oversized cable-knit sweater falling past the hips over ribbed cotton lounge shorts, barefoot with soft ankle warmers',
        'daily_casual'
      )
    ]
  }
];
