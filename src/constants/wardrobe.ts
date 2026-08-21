export interface WardrobeItem {
  palette: string;
  underwear: string[];
  casual: string[];
  studiowork: string[];
  interview: string[];
  laundryday: string[];
  sports: string[];
  official: string[];
  gala: string[];
  swimwear: string[];
  swimmingOnePiece?: string[];
  swimmingBikiniBottom?: string[];
  travel: string[];
  stoneagePrimitive?: string[];
  spaceSuit?: string[];
  spaceUniform?: string[];
  spaceUnderwear?: string[];
  dinosaurExplorer?: string[];
  cyberpunkNeon?: string[];
  wildwestFrontier?: string[];
  steampunkIndustrial?: string[];
  fantasyEnchanted?: string[];
  medievalCastle?: string[];
  forestExpedition?: string[];
  amsterdamHeritage?: string[];
}

export const WARDROBE_DATA: Record<string, WardrobeItem> = {
  miranda: {
    palette: 'Pale Blue, Deep Sapphire, Teal, Platinum Silver, Pearl White',
    underwear: ['Sapphire Blue Silk Bralette', 'Sapphire Blue Silk Panties', 'Teal Lace Boyshorts', 'Pearl White Seamless Camisole'],
    casual: ['Sapphire Linen Button-down', 'White Raw-silk Wide-leg Trousers', 'Teal Knit Wrap Cardigan'],
    studiowork: ['Pale Blue Slouchy Knitted Cardigan', 'Pearl White Cotton Camisole', 'Teal Relaxed Linen Drawstring Pants (Barefoot)'],
    interview: ['Pearl White Draped Silk Wrap Blouse', 'Deep Sapphire Tailored Wide-Leg Trousers (Barefoot)'],
    laundryday: ['Pale Blue Oversized Soft Fleece Hoodie', 'Pearl White Ribbed Knit Hot Shorts (Barefoot)'],
    sports: ['Teal Compression Racerback Crop Top', 'Deep Sapphire Running Leggings', 'Platinum Athletic Running Sneakers'],
    official: ['Crisp Sapphire Blazer', 'Matching Trousers', 'Pearl Silk Camisole', 'Platinum Silver Brooch'],
    gala: ['Floor-length Highslit Sapphire Satin Gown', 'Silver Geometric Trim', 'Platinum Choker'],
    swimwear: ['Teal Active One-piece Swimsuit', 'Asymmetrical Sapphire Pareo (Barefoot)'],
    swimmingOnePiece: ['Deep Sapphire Blue One-piece Bathing Suit (Barefoot)'],
    swimmingBikiniBottom: ['Teal Bikini Bottom Only (Barefoot)'],
    travel: ['Deep Sapphire Velour Tracksuit', 'Silver Zipper Pulls (Barefoot)'],
    stoneagePrimitive: ['Beaded Sapphire Pelt Loincloth', 'Raw Leather Halter Crop Top (Barefoot)'],
    spaceSuit: ['Orbital EVA Spacesuit with Platinum Thermal Insulation Pads (Barefoot inside habitat)'],
    spaceUniform: ['Fleet Bridge Officer Tunic in Deep Sapphire', 'Slim Starfleet Trousers in Pearl White (Barefoot)'],
    spaceUnderwear: ['Zero-G Thermal Compression Top', 'Zero-G Compression Hot Shorts (Barefoot)'],
    dinosaurExplorer: ['Expedition Safari Vest in Pale Blue', 'Linen Field Shorts in Pearl White (Barefoot)'],
    cyberpunkNeon: ['Holographic Vinyl Trench Coat with Fiber-Optic Blue Lapels', 'Neoprene Techwear Crop Top (Barefoot)'],
    wildwestFrontier: ['Suede Fringe Vest in Sapphire Blue', 'Linen Prairie Shirt in Pearl White (Barefoot)'],
    steampunkIndustrial: ['Clockwork Brass Corset Vest in Teal & Platinum', 'Pleated Industrial Trousers (Barefoot)'],
    fantasyEnchanted: ['Elven Silk Court Tunic with Silver Leaf Embroidery (Barefoot)'],
    medievalCastle: ['Noble Velvet Court Gown in Deep Sapphire with Silver Lace (Barefoot)'],
    forestExpedition: ['Waterproof Woodland Anorak in Teal', 'Stretch Trail Tights in Sapphire (Barefoot)'],
    amsterdamHeritage: ['Tailored Wool Canal Overcoat', 'Silk Scarf & Wide Trousers (Barefoot)']
  },
  annelies: {
    palette: 'Emerald Green, Sage, Amber, Bronze, Warm Cream',
    underwear: ['Amber Lace Bralette', 'Sage Green Comfy Cotton Briefs', 'Warm Cream Seamless Crop Top'],
    casual: ['Cream Oversized Slouchy Knit Sweater', 'Sage Green Linen Utility Pants', 'Bronze Feather Pendant'],
    studiowork: ['Bronze Open Chunky Cardigan', 'Warm Cream Cotton Tank', 'Sage Green Artist Studio Wide-Leg Pants (Barefoot)'],
    interview: ['Warm Cream Boho Silk Button-Up Shirt', 'Emerald Green High-Waisted Pleated Trousers (Barefoot)'],
    laundryday: ['Sage Green Rolled-Sleeve Graphic Tee', 'Warm Cream Fleece Lounge Sweatshorts (Barefoot)'],
    sports: ['Sage Green Ribbed Performance Sports Bra', 'Amber High-Rise Athletic Shorts', 'Trail Running Sneakers'],
    official: ['Emerald Structured Trench Coat', 'Warm Cream Silk Blouse', 'Sage Slate Flat-front Skirt'],
    gala: ['Deep Emerald Velvet Backless Dress', 'Antique Bronze Embroidery', 'Bronze Drop Earrings'],
    swimwear: ['Amber High-waisted Vintage Bikini Set', 'Sage Green Mesh coverup (Barefoot)'],
    swimmingOnePiece: ['Emerald Green One-piece Bathing Suit (Barefoot)'],
    swimmingBikiniBottom: ['Warm Amber Bikini Bottom Only (Barefoot)'],
    travel: ['Warm Cream Knit Duster Cardigan', 'Emerald Green Stretch Leggings (Barefoot)'],
    stoneagePrimitive: ['Woven Grass & Tanned Hide Loincloth in Sage & Amber', 'Braided Pelt Bandeau Top (Barefoot)'],
    spaceSuit: ['Planetary Exploration Spacesuit in Emerald & Cream with Bronze Utility Clips (Barefoot)'],
    spaceUniform: ['Science Officer Tunic in Sage Green', 'Cargo Duty Trousers in Warm Cream (Barefoot)'],
    spaceUnderwear: ['Bamboo Thermal Sports Bra in Warm Cream', 'Bamboo Seamless Briefs in Sage Green (Barefoot)'],
    dinosaurExplorer: ['Safari Field Shirt in Sage Green', 'Fossil Hunter Utility Shorts in Warm Amber (Barefoot)'],
    cyberpunkNeon: ['Tactical Techwear Harness Vest in Emerald & Bronze', 'High-Rise Cyber Joggers (Barefoot)'],
    wildwestFrontier: ['Plaid Flannel Western Shirt in Amber & Sage', 'Rustic Canvas Work Trousers (Barefoot)'],
    steampunkIndustrial: ['Leather Gear Harness Vest in Bronze & Emerald', 'Puffy Sleeve Cotton Blouse (Barefoot)'],
    fantasyEnchanted: ['Forest Druid Embroidered Tunic with Bronze Oak Leaf Filigree (Barefoot)'],
    medievalCastle: ['Peasant Linen Chemise & Laced Velvet Bodice (Barefoot)'],
    forestExpedition: ['Woodland Parka Coat in Emerald Green', 'Thermal Henley & Cargo Pants (Barefoot)'],
    amsterdamHeritage: ['Chunky Cable-Knit Duster Sweater in Warm Cream', 'Velvet Wide-Leg Trousers (Barefoot)']
  },
  fannie: {
    palette: 'Lavender, Deep Violet, Lilac, Metallic Silver',
    underwear: ['Violet Boxer Shorts', 'Lavender String', 'Lilac Crop Tank'],
    casual: ['Lavender Linen Shirt', 'Violet Cargo Pants', 'Metallic Silver High-top Sneaks'],
    studiowork: ['Lavender Sleeveless Athletic Tank Top', 'Deep Violet Flex-Fit Studio Joggers (Barefoot)'],
    interview: ['Deep Violet Satin Tailored Vest', 'Lavender High-Waisted Cropped Trousers (Barefoot)'],
    laundryday: ['Lilac Cropped Fleece Sweatshirt', 'Deep Violet Drawstring Jersey Shorts (Barefoot)'],
    sports: ['Deep Violet High-Impact Cross-Back Sports Bra', 'Lavender & Silver Compression Tights', 'High-Top Cross-Training Sneakers'],
    official: ['Tailored Deep Violet Suit', 'Silk Lavender Dress Shirt', 'Silver Collar Clips'],
    gala: ['Asymmetrical Lavender Silk Gown', 'Silver Geometric Piping', 'Metallic Silver Cuff Bracelets'],
    swimwear: ['Violet Bikini Top', 'Violet Bikini Bottom', 'Asymmetrical Lilac Pareo (Barefoot)'],
    swimmingOnePiece: ['Deep Violet One-piece Bathing Suit (Barefoot)'],
    swimmingBikiniBottom: ['Lilac Bikini Bottom Only (Barefoot)'],
    travel: ['Lavender Hooded Zip-up Tracksuit', 'Matching Jogging Pants (Barefoot)'],
    stoneagePrimitive: ['Tanned Hide Athletic Loincloth in Deep Violet', 'Raw Hide Crop Bandeau (Barefoot)'],
    spaceSuit: ['Orbital Jump Spacesuit in Deep Violet & Metallic Silver with Thruster Belt (Barefoot)'],
    spaceUniform: ['Flight Deck Officer Tunic in Deep Violet', 'Stretch Flight Trousers in Lilac (Barefoot)'],
    spaceUnderwear: ['High-Impact Mesh Sports Bra', 'Compression Athletic Hot Shorts in Lavender & Silver (Barefoot)'],
    dinosaurExplorer: ['Distressed Expedition Tank in Lavender', 'Multi-Pocket Cargo Shorts in Deep Violet (Barefoot)'],
    cyberpunkNeon: ['Cropped Cyber Bomber Jacket in Metallic Purple', 'Fiber-Optic Athletic Tank (Barefoot)'],
    wildwestFrontier: ['Distressed Denim Western Vest over Bandanna Crop Top', 'Western Jeans (Barefoot)'],
    steampunkIndustrial: ['Brass-Goggled Utility Corset in Deep Violet', 'Striped Crop Trousers (Barefoot)'],
    fantasyEnchanted: ['Arcane Battle-Mage Robes with Silver Runes (Barefoot)'],
    medievalCastle: ['Tournament Page Tunic in Lavender & Silver', 'Fitted Trousers (Barefoot)'],
    forestExpedition: ['Active Windbreaker Jacket in Lilac', 'Compression Trail Shorts (Barefoot)'],
    amsterdamHeritage: ['Cropped Denim Street Jacket in Deep Violet', 'Graphic Tee & Cargo Pants (Barefoot)']
  },
  emma: {
    palette: 'Midnight Black, Charcoal Gray, Crimson Red, Gold, Ivory White',
    underwear: ['Black Satin Plunge Bra', 'Crimson Mesh Boy Briefs', 'Sheer Modal Camisole'],
    casual: ['Oversized Black Premium Leather Jacket', 'Crimson Ribbed Tank Top', 'Charcoal Distressed Jeans'],
    studiowork: ['Midnight Black & Gold Open Silk Kimono Robe', 'Crimson Ribbed Camisole', 'Charcoal Wide-Leg Palazzo Pants (Barefoot)'],
    interview: ['Ivory White Draped Asymmetrical Silk Blouse', 'Midnight Black Tailored Slim Trousers (Barefoot)'],
    laundryday: ['Midnight Black & Gold Oversized Band Tour T-Shirt', 'Charcoal Cotton Biker Shorts (Barefoot)'],
    sports: ['Crimson Sculpting Crop Top', 'Midnight Black High-Waisted Gym Leggings', 'Black Athletic Running Sneakers'],
    official: ['Crimson Double-breasted Structured Blazer', 'Black Silk Shirt', 'Black Tailored Slim Pants', 'Gold Pin Accents'],
    gala: ['Midnight Black Corset Gown', 'Gold Lace Filigree', 'Crimson Velvet Caplet lining'],
    swimwear: ['Minimalist Black Cheeky Bikini', 'Gold Hardware Ring Accents', 'Sheer Crimson Wrap (Barefoot)'],
    swimmingOnePiece: ['Midnight Black & Gold One-piece Bathing Suit (Barefoot)'],
    swimmingBikiniBottom: ['Crimson Red Bikini Bottom Only (Barefoot)'],
    travel: ['Crimson Plush Velvet Hoodie', 'Matching Velvet Track Pants (Barefoot)'],
    stoneagePrimitive: ['Fur & Leather Loincloth Wrap in Midnight Black & Crimson', 'Harness Leather Crop Top (Barefoot)'],
    spaceSuit: ['Stealth EVA Spacesuit in Matte Black & Gold with Crimson Visor Accents (Barefoot)'],
    spaceUniform: ['Starship Captain Uniform Coat in Crimson & Black with Gold Braid', 'Command Trousers (Barefoot)'],
    spaceUnderwear: ['Thermal Compression Crop Top in Midnight Black', 'Cheekini Base Layer Shorts (Barefoot)'],
    dinosaurExplorer: ['Rugged Leather Field Jacket in Black & Gold', 'Ribbed Camisole & Denim Shorts (Barefoot)'],
    cyberpunkNeon: ['Neoprene Corset Jacket with Crimson Glowing EL-Wire', 'Techwear Strapped Pants (Barefoot)'],
    wildwestFrontier: ['Velvet Saloon Duster Coat in Crimson & Black', 'Tailored Western Trousers (Barefoot)'],
    steampunkIndustrial: ['Velvet Corset Vest with Gold Brass Filigree', 'Silk Ruffled Blouse & Trousers (Barefoot)'],
    fantasyEnchanted: ['Dark Sorceress Velvet Gown with Gold Embroidery (Barefoot)'],
    medievalCastle: ['Noble Velvet Square-Neck Gown in Crimson & Gold (Barefoot)'],
    forestExpedition: ['Oilskin Outdoor Duster in Midnight Black', 'Ribbed Thermal Shirt & Pants (Barefoot)'],
    amsterdamHeritage: ['Leather Trench Coat in Midnight Black', 'Silk Neck Scarf & Slim Pants (Barefoot)']
  },
  senna: {
    palette: 'Charcoal Navy, Camel Tan, Crimson Red, Crisp White, Polished Gold',
    underwear: ['Charcoal Navy Satin Bralette', 'Charcoal Navy Silk Briefs', 'Soft Silk Lounge Slippers'],
    casual: ['Camel Wool Trench Coat', 'Crisp White Silk Crewneck', 'Charcoal Navy Cropped Trousers', 'Sleek White Leather City Sneakers'],
    studiowork: ['Camel Tailored Soft Knit Cardigan', 'Crisp White Silk Camisole', 'Charcoal Wide-Leg Trousers', 'Stylish Suede Loafers'],
    interview: ['Charcoal Navy Reporter Blazer', 'Crisp White Silk Wrap Blouse', 'Tailored Cigarette Pants', 'Sharp Pointed Leather Pumps'],
    laundryday: ['Camel Cashmere Sweatshirt', 'Crisp White Jersey Shorts', 'Soft Leather Slip-On Loafers'],
    sports: ['Crimson Compression Crop Top', 'Charcoal & Gold Sculpt Tights', 'Cushioned Urban Athletic Running Sneakers'],
    official: ['Charcoal Navy Executive Suit Blazer', 'Crisp White Silk Shirt', 'Tailored Slim Trousers', 'Polished Black Leather Heels'],
    gala: ['Crimson & Gold Silk High-Slit Gown', 'Polished Gold Drop Earrings', 'Elegant Strappy Gold Stiletto Heels'],
    swimwear: ['Charcoal Navy Designer One-Piece Swimsuit', 'Camel & Crimson Chiffon Kaftan', 'Chic Tan Leather Wedge Sandals'],
    swimmingOnePiece: ['Charcoal Navy & Polished Gold One-piece Bathing Suit (Barefoot)'],
    swimmingBikiniBottom: ['Charcoal Navy Bikini Bottom Only (Barefoot)'],
    travel: ['Camel Travel Duster Coat', 'Charcoal Navy Stretch Leggings', 'Chic Leather Ankle Boots'],
    stoneagePrimitive: ['Tanned Leather Reporter Tunic', 'Leather Wrap Trousers', 'Laced Leather Moccasin Reporter Boots'],
    spaceSuit: ['Press Correspondent EVA Suit with Gold Insignia Patches', 'Heavy Magnetized Space Boots'],
    spaceUniform: ['Press Division Officer Uniform with Gold Badge Pin', 'Polished Leather Uniform Boots'],
    spaceUnderwear: ['Modal Thermal Press Camisole', 'Seamless Lounge Briefs', 'Soft Silk Lounge Slippers'],
    dinosaurExplorer: ['Safari Trench Jacket in Camel Tan', 'Crisp Silk Crewneck & Pants', 'Rugged Leather Field Boots'],
    cyberpunkNeon: ['Cyber-Reporter Trench Coat with HUD Visor Lapels', 'High-Top Cyber Combat Boots'],
    wildwestFrontier: ['Suede Trench Duster Coat in Camel Tan', 'Tailored Riding Trousers', 'Polished Leather Cowboy Boots'],
    steampunkIndustrial: ['Press Tailcoat & Gold Pocket Watch Chain', 'Tailored Striped Trousers', 'Leather Oxford Boots'],
    fantasyEnchanted: ['Court Herald Tunic & Capelet with Gold Crest', 'Polished Leather Court Riding Boots'],
    medievalCastle: ['Royal Herald Tunic with Gold Emblem', 'High Leather Riding Boots'],
    forestExpedition: ['Outdoor Expedition Duster in Camel Tan', 'Stretch Utility Trousers', 'Durable Leather Trail Boots'],
    amsterdamHeritage: ['Double-Breasted Trench Coat in Charcoal Navy', 'Camel Wool Scarf', 'Sleek Leather City Boots']
  }
};

export const WARDROBE_MD = `# NOOR QUARTET & SENNA BAKKER WARDROBE SYSTEM INITIALIZATION (v1.2.0)

This official manual documents the color palettes and curated clothing collections of the members of the alternative pop/electronic vocal quartet **Noor** (Miranda Noor, Annelies Brink, Fannie de Jong, Emma Vermeer) and media correspondent **Senna Bakker**. Each member has a distinct seasonal palette and an extensive, alphabetically indexed wardrobe inventory for standard lifestyles, adventure scenarios, historical settings, and specialized themes.

*Footwear Policy:* Miranda, Annelies, Fannie, and Emma prefer **barefoot** across casual, studio work, interviews, laundry day, travel, beachwear, towels, togas, rags, lingerie, and all Adventure theme settings (primitive, space habitat, cyberpunk, fantasy, medieval, wild west, etc.), unless footwear is required for active sports. **Senna Bakker always wears shoes** (chic sneakers, riding boots, pumps, loafers, space boots, or heels) in every setting without exception (except swimming and towels).

---

## 1. RAGS & WEATHERED ATTIRE
- **Rags - Distressed Peasant Rags:** Heavily distressed raw linen tunics with frayed collars, unraveling hems, coarse cross-stitching, and shredded raw-hem wrap skirts.
- **Rags - Rough Burlap Sack Tunic:** Coarse natural jute sacking tied loosely at the waist with braided hemp twine, frayed at all edges, barefoot.
- **Rags - Shipwrecked Castaway Rags:** Weather-beaten salt-bleached tops with shredded short sleeves and torn cutoff canvas island breeches with raw thread fringe.
- **Rags - Patched Scraps Wanderer:** Rustic sleeveless tunics assembled from mismatched scrap fabrics, vibrant color patches, exposed rough seams, and frayed cloth belts.
- **Rags - Torn Linen & Muslin Wraps:** Strips of raw cotton muslin and gauze tied snugly as improvised frayed bandeaus and tattered draped muslin wraps.

---

## 2. LINGERIE & NIGHTWEAR
- **Lingerie - Delicate Floral Lace Set:** Sheer scalloped floral lace bralettes with delicate adjustable satin straps paired with matching low-rise lace cheeky panties.
- **Lingerie - Silk Satin Camisole & Tap Shorts:** Bias-cut glossy silk camisoles with eyelash lace V-neck trim and high-cut French satin tap shorts.
- **Lingerie - Vintage Corset & Lace Stockings:** Structured sweetheart corset bustiers with vertical boning and satin ribbon lace-up back, paired with sheer thigh-high lace stockings.
- **Lingerie - Sheer Mesh & Lace Bodysuit:** Plunging neckline one-piece stretch illusion tulle bodysuits with delicate lace applique panels and low scoop back.
- **Lingerie - Flowing Chiffon Peignoir & Nightgown:** Ethereal semi-transparent chiffon mini slip nightgowns with matching floor-sweeping sheer flutter-sleeve peignoir robes.

---

## 3. SEXY ATTIRE & NIGHTLIFE
- **Sexy - String Bikini & Sheer Micro Pareo:** Minimalist triangle halter string bikini tops, low-rise tie-side bottoms, and translucent matching micro chiffon sarongs.
- **Sexy - Distressed Cutoffs & Knotted Crop Tank:** Ultra-short vintage denim daisy dukes with frayed hems and tightly knotted ribbed crop tanks showcasing midriff and waist.
- **Sexy - Backless Silk Mini Slip Dress:** Liquid silk satin mini dresses with low open cowl back, delicate spaghetti straps, and daring high thigh slits.
- **Sexy - Form-Fitting Leather Bustier & Leggings:** Strapless genuine leather zip-up bustiers with contour stitching and second-skin matte stretch leggings.
- **Sexy - Sheer Fishnet Mesh & Metallic Hotpants:** Long-sleeve fishnet mesh crop tops over metallic reflective bandeaus with matching high-cut metallic hotpants.

---

## 4. SIMPLE TOWELS & SPA WRAPS
- **Towel - Classic Bath Towel Wrap:** Thick fluffy 100% cotton terrycloth bath towels wrapped securely around the torso above the bust, tucked at the chest, falling to mid-thigh with damp tousled hair.
- **Towel - Natural Linen Sauna Towel Wrap:** Lightweight breathable organic waffle-textured linen towels knotted casually under the arms across the upper chest.
- **Towel - Oversized Plush Beach Towel Wrap:** Large plush velour beach towels with vibrant cabana stripes draped snugly around the upper torso.
- **Towel - Terrycloth Spa Bathrobe (Loose Open):** Soft heavyweight cotton terrycloth kimono spa robes worn loosely open with casual belt ties at the hips.

---

## 5. TOGAS & CLASSICAL DRAPES
- **Toga - Classic Draped Roman Linen Toga:** Authentic flowing white linen Roman togas with embroidered Greek-key borders fastened over the shoulder with golden brooch clasps.
- **Toga - Asymmetrical Royal Silk Toga:** Fluid shimmering pure silk chitons draped diagonally across the chest with braided metallic cord sashes and cascading side folds.
- **Toga - Rustic Draped Peasant Toga:** Unbleached rustic homespun raw linen tunics with natural drape and braided leather cord belts.
- **Toga - Ceremonial Imperial Toga & Laurel Trim:** Heavily pleated ceremonial Roman court togas with rich cascading drapes, draped pallium mantles, and cast laurel leaf brooches.

---

## 6. BOHEMIAN & CREATIVE ATTIRE
- **Bohemian - Festival Crochet Top & Maxi Skirt:** Handcrafted knit crochet halter tops with fringe and flowing tiered floral chiffon maxi skirts with high side slits.
- **Kimono - Draped Floral Silk Yukata Robe:** Lightweight summer silk yukata kimono robes with wide bell sleeves and ornate satin obi sashes.
- **Pirate - Swashbuckler Tavern Tunic & Bodice:** Ruffled off-shoulder linen poet blouses, supple leather underbust waist bodices, and layered ragged handkerchief skirts.
- **Pajamas - Cozy Oversized Flannel Sleepshirt:** Ultra-soft brushed cotton plaid flannel button-down shirts worn slouchy and unbuttoned with matching mini ribbed boy-shorts.
- **Fitness - Ribbed Seamless Sports Bra & Biker Shorts:** Form-sculpting moisture-wicking racerback sports bralettes and high-rise compression micro biker shorts.

---

## 7. ADVENTURE & THEME WARDROBE CATEGORIES
- **Stone Age & Primitive Worlds:** Loincloths, hand-scraped pelt wraps, raw hide tops, bone bead accents.
- **Space - Astronaut EVA Spacesuit:** High-tech body-contouring EVA suits, thermal insulation pads, wrist gauges.
- **Space - Starship Officer Uniform:** Tailored fleet officer tunics, shoulder epaulets, gold/silver rank pins.
- **Space - Zero-G Base Layer & Underwear:** Seamless moisture-wicking thermal sports tanks, compression shorts, modal camisoles.
- **Prehistoric & Dinosaur Valley Explorer:** Rugged canvas safari vests, fossil hunter shorts, field jackets.
- **Cyberpunk - Neon Techwear:** Holographic vinyl trench coats, glowing EL-wire seams, fiber-optic tops, cyber combat boots.
- **Wild West - Frontier Duster:** Suede fringe vests, saloon velvet dusters, flannel western shirts, cowboy boots.
- **Steampunk - Industrial Era:** Clockwork brass corset vests, goggle straps, ruffled silk blouses, leather oxford boots.
- **High Fantasy - Enchanted Realm:** Elven silk tunics, druid leaf embroidery, arcane battle-mage robes.
- **Medieval Castle & Peasant:** Royal court gowns, tournament page tunics, peasant linen chemises.
- **Forest & Moorland Expedition:** Waterproof woodland anoraks, oilskin dusters, trail tights, trail boots.
- **Amsterdam Landmarks & Heritage:** Double-breasted wool overcoats, cable-knit duster sweaters, silk scarves, city boots.
`;

