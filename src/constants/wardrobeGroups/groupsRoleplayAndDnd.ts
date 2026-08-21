/**
 * D&D Classes & Live Roleplay Wardrobe Group
 */

import { WardrobeGroup, createWardrobeItem } from './types';

export const GROUPS_ROLEPLAY_AND_DND: WardrobeGroup[] = [
  {
    id: 'dnd_classes',
    name: 'D&D Classes & Live Roleplay',
    icon: '🐉',
    description: 'Tabletop and live roleplay character classes with authentic armor, weapon sets, enchanted robes, and adventuring gear',
    items: [
      createWardrobeItem(
        'dnd_paladin',
        'Oath Paladin Polished Plate & Cloak',
        'Fluted polished steel half-plate armor with gold filigree heraldry, velvet-lined cape, and leather weapon belt with holy symbol',
        'steel greaves / barefoot on cathedral stone',
        [
          { name: 'Fluted Steel Plate Armor', description: 'Gleaming breastplate and pauldrons embossed with radiant holy symbols', color: 'Polished Silver & Gold Inlay' },
          { name: 'Velvet War Cape', description: 'Heavy royal cloak pinned with a gilded lion brooch', color: 'Signature Royal Hue' }
        ],
        'wearing gleaming polished fluted steel plate armor with gold filigree and a heavy velvet war cape with holy symbol, barefoot on temple stone',
        'dnd_classes'
      ),
      createWardrobeItem(
        'dnd_ranger',
        'Wilderness Ranger Leather & Camouflage',
        'Supple studded leather brigandine armor, hooded archer mantle, quiver strap, and fingerless leather shooting gloves',
        'soft leather woodland moccasins / barefoot',
        [
          { name: 'Studded Leather Brigandine', description: 'Flexible oiled leather armor with darkened steel studs and side laces', color: 'Forest Green & Earth Brown' },
          { name: 'Hooded Archer Mantle', description: 'Weatherproof wool cowl with quiver harness', color: 'Woodland Camo Tone' }
        ],
        'wearing supple studded leather armor and a hooded archer mantle with quiver strap and fingerless shooting gloves, barefoot on mossy terrain',
        'dnd_classes'
      ),
      createWardrobeItem(
        'dnd_rogue',
        'Shadow Rogue Leather Armor & Daggers',
        'Sleek darkened leather armor with muffled buckles, utility pouch belt with lockpicks, and a dark shadow silk half-cowl',
        'soft muffled leather stealth boots / barefoot',
        [
          { name: 'Darkened Stealth Leather', description: 'Matte black and charcoal form-fitting leather vest with reinforced shoulders', color: 'Midnight Shadow Charcoal' },
          { name: 'Utility Bandolier & Daggers', description: 'Chest harness fitted with throwing dagger sheaths and tool pouches', color: 'Dark Oiled Leather' }
        ],
        'wearing form-fitting darkened stealth leather armor with a chest bandolier of throwing daggers and muffled utility pouches, barefoot in shadow',
        'dnd_classes'
      ),
      createWardrobeItem(
        'dnd_druid',
        'Circle Druid Woven Bark & Leaf Armor',
        'Living barkwood breastplate bound with ivy vines, floral garland headdress, and woven linen mantle with feather charms',
        'barefoot on sacred grove earth',
        [
          { name: 'Living Bark & Vine Breastplate', description: 'Articulated ironwood bark cuirass interwoven with living green ivy and moss', color: 'Natural Bark & Green Moss' },
          { name: 'Woven Linen Mantle', description: 'Raw linen wrap adorned with bird feathers, acorn beads, and mistletoe', color: 'Natural Linen & Forest Flora' }
        ],
        'wearing an articulated living barkwood cuirass bound with ivy vines and a raw linen mantle with feather charms, barefoot on sacred grove soil',
        'dnd_classes'
      ),
      createWardrobeItem(
        'dnd_wizard',
        'Archmage Celestial Embroidered Robes',
        'Layered velvet and silk wizard robes embroidered with glowing astrological runes, braided sash with spell component pouches, and crystal talisman',
        'soft embroidered slippers / barefoot',
        [
          { name: 'Runed Arcane Robes', description: 'Voluminous tiered silk robes with glowing constellation embroidery along the hem', color: 'Deep Astral Blue / Violet' },
          { name: 'Component Belt & Tome Holster', description: 'Braided silk sash with potion vials, scroll tubes, and focus wand loop', color: 'Gilded Trim & Leather' }
        ],
        'wearing voluminous layered silk wizard robes embroidered with glowing astrological runes and a braided component belt with scroll tubes, barefoot',
        'dnd_classes'
      ),
      createWardrobeItem(
        'dnd_bard',
        'College of Lore Bard Duelist Attire',
        'Brocade doublet with slashed satin sleeves, poet linen shirt, leather rapier frog belt, and feathered velvet beret',
        'soft turnshoes / barefoot on tavern stage',
        [
          { name: 'Slashed Brocade Doublet', description: 'Tailored silk brocade vest with decorative ribbon lacing and flared peplum', color: 'Vibrant Signature Color & Gold' },
          { name: 'Poet Linen Shirt', description: 'Loose billowing white linen shirt with ruffled lace collar and cuffs', color: 'Pristine Cream Linen' }
        ],
        'wearing a tailored silk brocade doublet with slashed sleeves over a ruffled poet linen shirt with a leather instrument strap, barefoot on stage',
        'dnd_classes'
      )
    ]
  }
];
