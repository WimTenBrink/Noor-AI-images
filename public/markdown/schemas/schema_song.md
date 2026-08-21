# Noor Music: Song Project Schema (v1.1.0)

## 1. Schema Purpose & Overview
The **Song Project JSON Schema (Draft 07)** formally defines the complete structure of a Noor Music song project file (`{title}.json`).
Its primary purpose is to allow developers, automated audio renderers, SUNO lyric converters, and external workspace tools to validate song exports, verify required metadata, and seamlessly restore saved songwriting environments.

## 2. Version History & Evolution
### v1.1.0 (2026-08-03) — Modern Workspace & Architecture Release
- **Draft 07 URI Definition**: Added explicit schema identifier (`$id: https://katje.bv/schemas/v1.1.0/song.json`).
- **Workspace State Preservation**: Added the `settings` property to store full user creation configurations (including dialect, content rating, silly/epic/innuendo sliders, audience interaction toggles, selfReflect, and reverseLyrics).
- **Video & Lyric Automation**: Added `videoSegmentPrompts` array for 15-second b-roll generation and `instructions` object for SUNO tag injection.
- **Independent Version Tracking**: Added explicit `version` string field to decouple schema format from app release builds.

### v1.0.0 (2025-01-15) — Initial Release
- Initial data structure defining core project fields: `id`, `title`, `style`, `lyrics`, `karaokeLyrics`, `spoiler`, `coverArtPrompts`, `createdAt`, and `updatedAt`.

---

## 3. Specification & Property Catalog
| Field | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| **$schema** | string | No | Draft 07 JSON Schema declaration URI |
| **version** | string | **Yes** | Schema version string (e.g., `"1.1.0"`) |
| **id** | string | No | Unique UUID identifier for the project |
| **title** | string | **Yes** | Primary title of the song |
| **style** | string | No | Full genre style prefix including vocal quartet declaration |
| **lyrics** | string | No | Structured song lyrics with bracketed section tags |
| **karaokeLyrics** | string | No | Timestamped/synced karaoke cue sheet |
| **spoiler** | string | No | Comprehensive behind-the-scenes interview narrative |
| **settings** | object | No | Complete workspace configuration settings block |
| **coverArtPrompts** | object | No | SDXL 2.0 / Midjourney prompts for cover art |
| **videoSegmentPrompts** | array | No | 15-second video segment prompts |
| **createdAt** | string | No | ISO-8601 creation timestamp |
| **updatedAt** | string | No | ISO-8601 last modification timestamp |
