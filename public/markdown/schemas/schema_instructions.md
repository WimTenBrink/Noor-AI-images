# Noor Music: Lyrics Instructions Schema (v1.1.0)

## 1. Schema Purpose & Overview
The **Lyrics Instructions Schema (Draft 07)** validates exported instruction metadata for song generation.
It allows SUNO AI and external music synthesizers to ingest exact parameters including vocal quartet declarations, tempo, theme, singers, and instrument lineups.

## 2. Version History & Evolution
### v1.1.0 (2026-08-03) — Vocal Quartet Integration Release
- **Draft 07 URI Definition**: Added formal URI (`$id: https://katje.bv/schemas/v1.1.0/instructions.json`).
- **Quartet Specification**: Standardized required vocal quartet prefix ("Female vocal quartet (Soprano, Alto, Mezzo-Soprano, Feminine Contralto)") in style property.
- **Instrument & Singer Arrays**: Added explicit arrays for `singers` and `instruments` to preserve active selections.

### v1.0.0 (2025-01-15) — Initial Release
- Core schema for generation parameters including `theme`, `style`, and `tempo`.

---

## 3. Specification & Property Catalog
| Field | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| **$schema** | string | No | Draft 07 JSON Schema declaration URI |
| **version** | string | **Yes** | Schema version string (`"1.1.0"`) |
| **theme** | string | No | Core lyrical theme prompt |
| **style** | string | No | Musical genre and vocal quartet declaration |
| **singers** | array | No | Active singer names and vocal roles |
| **tempo** | string | No | Rhythmic tempo description |
| **instruments** | array | No | Selected instruments array |
