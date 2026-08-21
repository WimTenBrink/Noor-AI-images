/**
 * Historical, Period & Mythological Wardrobe Group
 */

import { WardrobeGroup, createWardrobeItem } from './types';

export const GROUPS_HISTORICAL_AND_PERIOD: WardrobeGroup[] = [
  {
    id: 'historical_period',
    name: 'Historical, Period & Mythological',
    icon: '🏛️',
    description: 'Roman and Greek togas, medieval gowns, wild west dusters, and Victorian attire',
    items: [
      createWardrobeItem(
        'toga_roman_classic',
        'Roman Classic Imperial Toga',
        'Pure draped fine wool toga with gilded border embroidery, pinned at the shoulder with a golden fibula brooch',
        'leather gladiator lace-up sandals / barefoot',
        [
          { name: 'Imperial Wool Toga', description: 'Flowing voluminous draped Roman toga with embroidered borders', color: 'Bleached White with Tyrian Purple / Gold Trim' },
          { name: 'Fibula Brooch', description: 'Ornate stamped gold shoulder clasp', color: 'Gilded Brass / Gold' }
        ],
        'wearing an imperial Roman draped white wool toga with embroidered gold borders and shoulder brooch, barefoot on marble',
        'historical_period'
      ),
      createWardrobeItem(
        'historical_greek_chiton',
        'Hellenic Greek Pleated Chiton',
        'Delicate draped linen chiton pinned along the shoulders with a braided golden cord belt beneath the bust',
        'barefoot on ancient stone steps',
        [
          { name: 'Pleated Hellenic Chiton', description: 'Fine translucent linen tunic draped with double girdle cinching', color: 'Unbleached Flax & Pastel Trim' }
        ],
        'wearing a finely pleated Hellenic Greek linen chiton with golden braided cord belt and shoulder button clasps, barefoot on sunlit stone steps',
        'historical_period'
      ),
      createWardrobeItem(
        'medieval_castle',
        'Medieval Court Velvet Gown',
        'Fitted velvet court kirtle with hanging trumpet sleeves, gold metallic brocade bodice, and linen underchemise',
        'soft leather turnshoes / barefoot',
        [
          { name: 'Velvet Court Gown', description: 'Heavy royal velvet gown with trailing hem and gold wire brocade trim', color: 'Signature Royal Jewel Tone' },
          { name: 'Linen Underchemise', description: 'White gathered linen chemise with ruffled neckline', color: 'Ivory Linen' }
        ],
        'wearing a regal medieval court velvet gown with hanging trumpet sleeves and gold brocade trim over a gathered linen underchemise, barefoot on stone flags',
        'historical_period',
        {
          miranda: 'wearing a noble deep sapphire blue velvet court gown with silver lace trim and hanging trumpet sleeves over an ivory linen chemise, barefoot in castle hall',
          annelies: 'wearing a peasant linen chemise under a laced emerald velvet bodice with antique bronze embroidery, barefoot on stone floor',
          fannie: 'wearing a medieval deep violet velvet kirtle with lilac silk lining and silver filigree girdle belt, barefoot in stone castle',
          emma: 'wearing a crimson red velvet noblewoman gown with black fur trim and gilded brass belt, barefoot in the banquet hall',
          senna: 'wearing a golden amber medieval maiden dress with braided trim and flowing hem, barefoot on castle terrace'
        }
      ),
      createWardrobeItem(
        'wildwest_frontier',
        'Wild West Frontier Duster & Flannel',
        'Suede fringe leather vest or long canvas duster coat over a rolled flannel shirt and rugged prairie trousers with a wide leather belt',
        'distressed leather cowgirl boots / barefoot',
        [
          { name: 'Suede Fringe Vest / Duster', description: 'Weathered brown suede vest with leather fringe along chest and hem', color: 'Rustic Suede Brown' },
          { name: 'Prairie Flannel Shirt', description: 'Soft plaid cotton button-down with pearl snap buttons', color: 'Signature Plaid' },
          { name: 'Rugged Denim Trousers', description: 'High-waisted sturdy canvas frontier pants with leather tool belt', color: 'Indigo Denim' }
        ],
        'wearing a weathered suede fringe vest over a pearl-snap plaid flannel shirt and rugged canvas frontier trousers with a tooled leather belt, barefoot on wood porch',
        'historical_period',
        {
          miranda: 'wearing a sapphire blue suede fringe vest over a pearl white linen prairie shirt with silver concho belt, barefoot on saloon porch',
          annelies: 'wearing a plaid flannel western shirt in amber and sage over rustic canvas work trousers with leather belt, barefoot',
          fannie: 'wearing a deep violet suede western vest over a lilac cotton prairie shirt with tooled silver belt, barefoot on boardwalk',
          emma: 'wearing a long black canvas duster coat over a red flannel shirt and dark denim jeans with gun holster, barefoot',
          senna: 'wearing a tan suede fringe jacket over a golden check shirt and brown trousers with camera bag, barefoot on wooden porch'
        }
      ),
      createWardrobeItem(
        'pirate_swashbuckler',
        'Swashbuckler Pirate Coat & Ruffled Chemise',
        'Open velvet captain tailcoat with brass buttons, sheer ruffled pirate chemise, wide leather waist sash, and striped knee breeches',
        'leather buccaneer boots / barefoot on timber deck',
        [
          { name: 'Velvet Captain Coat', description: 'Tailored brocade pirate coat with wide cuffs and gold braid', color: 'Deep Ocean Blue / Crimson' },
          { name: 'Ruffled Poet Chemise', description: 'Open-collar loose linen shirt with cascading lace ruffles', color: 'Aged Parchment White' },
          { name: 'Waist Sash & Breeches', description: 'Crimson silk waist sash wrapped over striped linen breeches', color: 'Striped Crimson & Black' }
        ],
        'wearing a velvet pirate captain coat over an open-collar ruffled linen poet chemise with a wide silk waist sash and breeches, barefoot on ship deck',
        'historical_period'
      )
    ]
  }
];
