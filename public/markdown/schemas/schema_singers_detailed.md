# Noor Music: Singers Detailed Profile Schema (v1.0.0)

## 1. Schema Purpose & Overview
The **Singers Detailed Profile Schema (Draft 07)** defines the complete physical, personal, and anatomical profile structure for Noor singers (Miranda Noor, Annelies Brink, Fannie de Jong, Emma Vermeer).
It provides a standardized taxonomy (appearance, personality, otherDetails) used by AI cover art generators to construct individual character prompts with 100% physical fidelity.

## 2. Version History & Evolution
### v1.0.0 (2026-08-10) — Initial Profile Schema Release
- **Draft 07 URI Definition**: Formal schema identifier (`$id: https://katje.bv/schemas/v1.0.0/singers_detailed.json`).
- **Full Taxonomy**: Categorized physical attributes (height, weight, build, skin, eyes, hair, face, breasts, genitals) and personality/lifestyle properties.

---

## 3. Specification & Property Catalog
| Field | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| **$schema** | string | No | Draft 07 JSON Schema declaration URI |
| **version** | string | **Yes** | Schema version string (`"1.0.0"`) |
| **title** | string | **Yes** | Title of dataset |
| **singers** | array | **Yes** | Array of singer profiles |
| **appearance.height** | string | **Yes** | Height specification |
| **appearance.skinColor** | string | **Yes** | Skin tone and complexion details |
| **appearance.eyeColor** | string | **Yes** | Eye shape, color, lashes |
| **appearance.hairColorStyle** | string | **Yes** | Hair length, color, wave, style |
| **appearance.faceDetails** | string | **Yes** | Facial geometry, nose, lips |
| **appearance.breasts** | string | No | Bust shape, position, nipples |
| **appearance.genitals** | string | No | Anatomical details for explicit prompts |
