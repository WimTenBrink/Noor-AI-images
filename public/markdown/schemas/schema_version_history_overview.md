# Noor Music: JSON Schemas & Data Evolution Reference

## 1. Introduction to Noor Music Schemas
Noor Music generates structured, production-ready JSON exports for songs, cover art prompts, video segment prompts, system logs, AI jobs, lyric instructions, and dashboard configuration options.
Every JSON schema follows the **JSON Schema Draft 07** specification and maintains an explicit, independent semantic version number, helping developers understand the evolution of the data structure.

---

## 2. Master Schema Catalog & Purpose
1. **Song Project Schema (`v1.1.0`)**:
   - *Purpose*: Defines complete song exports (`{title}.json`), preserving lyrics, karaoke cues, cover art prompts, and workspace configurations (`settings`).
   - *Key Evolution*: Upgraded in v1.1.0 to include full settings persistence for drag-and-drop workspace restoration.
2. **Cover Art Prompts Schema (`v1.1.0`)**:
   - *Purpose*: Validates SDXL 2.0 / Midjourney storyboard prompts for band group shots, solo singer portraits, and lyrical backdrops.
   - *Key Evolution*: Upgraded in v1.1.0 with strict character spatial isolation rules and no-names physical trait enforcement.
3. **Video Prompts Schema (`v1.1.0`)**:
   - *Purpose*: Specifies 15-second segmented b-roll video prompts with synchronized visual, camera motion, and lighting cues.
   - *Key Evolution*: Added required sequential numbering and camera motion instructions.
4. **System Logs Schema (`v1.1.0`)**:
   - *Purpose*: Defines console telemetry exports for event tracing and error diagnostics.
   - *Key Evolution*: Enforced strict level enums (`"info"`, `"warn"`, `"error"`).
5. **AI Jobs Queue Schema (`v1.1.0`)**:
   - *Purpose*: Validates exported AI job queue records, concurrency levels, and execution states.
   - *Key Evolution*: Added priority ordering and rate-limit auto-pause auditing.
6. **Lyrics Instructions Schema (`v1.1.0`)**:
   - *Purpose*: Exports exact generation instructions for SUNO AI and external vocal synthesizers.
   - *Key Evolution*: Integrated mandatory vocal quartet style prefix and instrument arrays.
7. **Dashboard Options Schema (`v1.0.0`)**:
   - *Purpose*: Exports machine-readable catalog of all Generate dialog options, groups, subgroups, data types, and descriptions.
   - *Key Evolution*: Initial v1.0.0 release covering all 10 Generate dialog Dashboard nodes.

---

## 3. How to Use & Validate
- **In the UI**: Click the **Help** link within each JSON schema download item in the **JSON** header menu to inspect individual schema version histories and property definitions.
