/**
 * Fantasy, Sci-Fi & Adventure Wardrobe Group
 */

import { WardrobeGroup, createWardrobeItem } from './types';

export const GROUPS_FANTASY_AND_SCIFI: WardrobeGroup[] = [
  {
    id: 'fantasy_scifi',
    name: 'Fantasy, Sci-Fi & Adventure',
    icon: '🚀',
    description: 'Enchanted realm robes, starship EVA suits, cyberpunk techwear, and prehistoric explorer gear',
    items: [
      createWardrobeItem(
        'fantasy_enchanted',
        'Elven Enchanted Silk Court Robe',
        'Flowing translucent elven silk tunic with silver leaf filigree embroidery, scalloped hem, and braided mithril belt',
        'barefoot on mossy forest ground',
        [
          { name: 'Elven Silk Tunic', description: 'Gossamer silk gown with draped bell sleeves and silver leaf embroidery', color: 'Ethereal Signature Tone' },
          { name: 'Mithril Leaf Belt', description: 'Articulated silver wire belt with sculpted elven leaves', color: 'Gleaming Silver' }
        ],
        'wearing an ethereal flowing elven silk court tunic with silver leaf embroidery and sculpted mithril belt, barefoot on soft moss',
        'fantasy_scifi',
        {
          miranda: 'wearing an elven silk court tunic in translucent sapphire blue with silver leaf embroidery and a mithril belt, barefoot on mossy glade',
          annelies: 'wearing a forest druid embroidered tunic with bronze oak leaf filigree and braided ivy belt, barefoot on woodland moss',
          fannie: 'wearing an enchanted lilac and deep violet silk robe with silver moon filigree and crystal belt, barefoot in twilight forest',
          emma: 'wearing a dark sorceress velvet tunic in ruby red and shadow black with obsidian clasps, barefoot in enchanted grove',
          senna: 'wearing a golden celestial tunic with sunburst embroidery and woven leaf trim, barefoot in fairy ring'
        }
      ),
      createWardrobeItem(
        'space_suit',
        'Orbital EVA Starship Spacesuit',
        'Form-fitting pressurized space exploration suit with thermal insulation pads, illuminated life-support chest unit, and magnetic seals',
        'barefoot inside orbital habitat',
        [
          { name: 'Pressurized EVA Jumpsuit', description: 'Thermal-bonded white and metallic space suit with articulating joints and LED telemetry badge', color: 'Pristine White & Signature Accent' },
          { name: 'Chest Life-Support Module', description: 'Sleek brushed titanium telemetry console with glowing status lights', color: 'Titanium Silver & Cyan Glow' }
        ],
        'wearing a high-tech pressurized orbital exploration spacesuit with glowing chest telemetry unit and thermal insulation pads, barefoot in space habitat',
        'fantasy_scifi',
        {
          miranda: 'wearing an orbital EVA spacesuit in pristine white with deep sapphire thermal insulation pads and cyan status lights, barefoot inside ship',
          annelies: 'wearing a planetary exploration spacesuit in warm cream and emerald green with bronze utility clips, barefoot in habitat',
          fannie: 'wearing an orbital jump spacesuit in metallic silver and deep violet with thruster telemetry belt, barefoot in airlock',
          emma: 'wearing a tactical starship interceptor EVA suit in matte black and crimson with illuminated oxygen readout, barefoot',
          senna: 'wearing an expedition starship science suit in white and golden yellow with holo-pad wrist unit, barefoot in bridge'
        }
      ),
      createWardrobeItem(
        'cyberpunk_neon',
        'Cyberpunk Holographic Vinyl & Techwear',
        'Holographic translucent vinyl trench coat with fiber-optic piping over an asymmetrical neoprene techwear crop top and high-rise cyber joggers',
        'barefoot with glowing LED ankle rings',
        [
          { name: 'Holographic Trench Coat', description: 'Translucent iridescent vinyl long coat with glowing optical edge lighting', color: 'Holographic Iridescent' },
          { name: 'Neoprene Tech Crop Top', description: 'Matte black waterproof technical sports top with utility clips', color: 'Matte Tech Black & Neon Accent' },
          { name: 'Cyber Joggers', description: 'High-rise tapered technical joggers with MOLLE webbing straps', color: 'Dark Techwear Grey' }
        ],
        'wearing a holographic vinyl long coat with glowing neon fiber-optic trim over a neoprene techwear crop top and cyber joggers, barefoot with LED ankle glow',
        'fantasy_scifi',
        {
          miranda: 'wearing a holographic vinyl trench coat with fiber-optic blue lapels over a neoprene techwear crop top and sapphire joggers, barefoot with blue LED glow',
          annelies: 'wearing a tactical techwear harness vest in emerald and bronze over a cyber crop top and high-rise joggers, barefoot in neon rain',
          fannie: 'wearing a translucent lilac iridescent tech jacket over a deep violet sports harness and cyber cargo pants, barefoot with purple LED trim',
          emma: 'wearing a black leather and crimson techwear jacket with glowing red laser conduits and combat joggers, barefoot in neon city',
          senna: 'wearing a clear vinyl jacket with golden fiber-optic wiring over a techwear tank and utility joggers, barefoot with amber HUD visor'
        }
      ),
      createWardrobeItem(
        'stoneage_primitive',
        'Prehistoric Fur Pelt & Leather Wraps',
        'Tanned wild animal pelt bandeau crop top and matching asymmetrical leather loincloth wrap with bone and tooth beads',
        'barefoot on prehistoric earth',
        [
          { name: 'Fur Pelt Bandeau Top', description: 'Raw-edge tanned animal hide bandeau top secured with sinew thongs', color: 'Natural Tanned Hide' },
          { name: 'Leather Loincloth Wrap', description: 'Asymmetrical wild pelt loincloth skirt with beaded fringe and bone charms', color: 'Earthy Fur Pelt' }
        ],
        'wearing a raw-edge tanned fur pelt bandeau top and matching asymmetrical leather loincloth wrap adorned with bone beads, barefoot on primal earth',
        'fantasy_scifi',
        {
          miranda: 'wearing a beaded sapphire-tinted fur pelt loincloth and raw leather halter crop top with silver beads, barefoot on riverbank',
          annelies: 'wearing a woven grass and tanned hide loincloth in sage and amber with a braided pelt bandeau top, barefoot in prehistoric jungle',
          fannie: 'wearing a tanned hide athletic loincloth in deep violet and a raw hide crop bandeau with shell beads, barefoot by campfire',
          emma: 'wearing a black wolf pelt bandeau top and jagged leather loincloth wrap with obsidian tooth necklace, barefoot on rocky crag',
          senna: 'wearing a golden deer hide crop top and fringed leather loincloth wrap with amber beads, barefoot on savannah'
        }
      ),
      createWardrobeItem(
        'dinosaur_explorer',
        'Dinosaur Expedition Field Safari Gear',
        'Safari utility vest with multiple flap pockets over a rolled-sleeve expedition shirt and durable linen field shorts with canteen belt',
        'sturdy trail field boots / barefoot in camp',
        [
          { name: 'Multi-Pocket Safari Vest', description: 'Heavy cotton drill expedition vest with brass D-rings and compass pocket', color: 'Safari Khaki / Character Hue' },
          { name: 'Linen Field Shorts', description: 'High-waisted belted canvas expedition shorts with cargo pouches', color: 'Desert Tan' }
        ],
        'wearing a multi-pocket expedition safari vest over a rolled field shirt and canvas cargo shorts with a utility belt, barefoot in the basecamp',
        'fantasy_scifi'
      )
    ]
  }
];
