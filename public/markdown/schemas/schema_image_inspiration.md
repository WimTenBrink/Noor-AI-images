# Noor Music: Image Inspiration Schema (v1.0.0)

## 1. Schema Purpose & Overview
The **Image Inspiration Schema (Draft 07)** defines the structured multimodal JSON response generated when a creator drops an image into Noor Music's "Generate Song" dialog.
The AI analyzes visual elements, colors, lighting, and subjects to compose a comprehensive scene description, a rich narrative story, and directly mapped musical parameters (genres, instruments, emotional nuances, tempo, and fine-tuning sliders).

## 2. Version History & Evolution
### v1.0.0 (2026-08-18) — Initial Image Inspiration Multimodal Schema
- **Draft 07 URI Definition**: Formal schema identifier (`$id: https://katje.bv/schemas/v1.0.0/image-inspiration.json`).
- **Multimodal Visual Analysis**: Structured fields for `imageDescription`, `story`, `storySummary`, and `mood`.
- **Musical Parameter Mapping**: Structured arrays for `styles`, `instruments`, `emotions`, and fine-tuning sliders (`reverb`, `harmonics`, `epic`, `sapphic`, etc.).
