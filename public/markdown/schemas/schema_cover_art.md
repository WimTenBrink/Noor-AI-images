# Noor Music: Cover Art Prompts Schema (v1.1.0)

## 1. Schema Purpose & Overview
The **Cover Art Prompts Schema (Draft 07)** validates structured image generation packages exported from Noor Music.
It ensures that Stable Diffusion XL 2.0 and Midjourney rendering pipelines receive correctly segmented prompts for group shots, solo singer portraits, and scenic backdrops without blending physical or instrumental attributes.

## 2. Version History & Evolution
### v1.1.0 (2026-08-03) — Character Spatial Isolation Release
- **Draft 07 URI Definition**: Added formal schema identifier (`$id: https://katje.bv/schemas/v1.1.0/coverart.json`).
- **Character Separation Rule Enforcement**: Added strict separation rules for multi-character prompts to avoid facial or hair feature crossover.
- **No-Names Policy Integration**: Standardized prompts to reference singers strictly by instrument role and physical features rather than names.

### v1.0.0 (2025-01-15) — Initial Release
- Established core arrays for `groupAndDuos`, solo singer arrays (`miranda`, `annelies`, `fannie`, `emma`), and `scenes`.

---

## 3. Specification & Property Catalog
| Field | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| **$schema** | string | No | Draft 07 JSON Schema declaration URI |
| **version** | string | **Yes** | Schema version string (`"1.1.0"`) |
| **groupAndDuos** | array | No | Multi-member performance and quartet storyboards |
| **miranda** | array | No | Solo Soprano bass guitarist visual prompts |
| **annelies** | array | No | Solo Alto graphic designer visual prompts |
| **fannie** | array | No | Solo Mezzo-Soprano percussionist visual prompts |
| **emma** | array | No | Solo Contralto keyboardist visual prompts |
| **scenes** | array | No | Lyrical story setting backdrops (no singers) |
