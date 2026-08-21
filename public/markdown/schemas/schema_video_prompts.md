# Noor Music: Video Prompts Schema (v1.1.0)

## 1. Schema Purpose & Overview
The **Video Prompts Schema (Draft 07)** specifies the format for 15-second segmented video prompts exported by Noor Music.
It allows video AI generators (such as Luma Dream Machine, Runway Gen-3, or Kling) to consume precise timestamped segments with synchronized visual storytelling, camera movements, and lighting cues.

## 2. Version History & Evolution
### v1.1.0 (2026-08-03) — Production Segment Standardization
- **Draft 07 URI Definition**: Added formal URI (`$id: https://katje.bv/schemas/v1.1.0/videoprompts.json`).
- **Camera & Lighting Validation**: Required properties for `cameraMotion` and `lighting` inside segment objects.
- **Independent Version Tracking**: Added explicit `version` string field.

### v1.0.0 (2025-04-10) — Initial Release
- Introduced segmented video prompt structure containing `segmentNumber` and `visualPrompt`.

---

## 3. Specification & Property Catalog
| Field | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| **$schema** | string | No | Draft 07 JSON Schema declaration URI |
| **version** | string | **Yes** | Schema version string (`"1.1.0"`) |
| **segments** | array | **Yes** | Array of 15-second video segment prompt objects |
| **segments[].segmentNumber** | number | **Yes** | Sequential segment index (1, 2, 3...) |
| **segments[].timestamp** | string | No | Timestamp interval (e.g., `"0:00 - 0:15"`) |
| **segments[].visualPrompt** | string | **Yes** | Detailed visual scene description |
| **segments[].cameraMotion** | string | No | Camera movement instruction (e.g., `"Slow push in"`) |
| **segments[].lighting** | string | No | Cinematic lighting atmosphere |
