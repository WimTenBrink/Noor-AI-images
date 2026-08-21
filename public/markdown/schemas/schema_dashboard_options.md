# Noor Music: Dashboard Options Schema (v1.0.0)

## 1. Schema Purpose & Overview
The **Dashboard Options Schema (Draft 07)** defines the complete structure of all Generate dialog options, node groups, subgroups, descriptions, and data types.
It provides a machine-readable specification of every configuration parameter in the Noor Music composition dashboard.

## 2. Version History & Evolution
### v1.0.0 (2026-08-09) — Complete Generate Dashboard Schema Release
- **Draft 07 URI Definition**: Formal schema identifier (`$id: https://katje.bv/schemas/v1.0.0/dashboard_options.json`).
- **Full Group & Option Catalog**: Comprehensive taxonomy covering all 10 Node Groups (Lyrics & Directives, Defaults Toggles, Intent & Energy, Vocal Dialect & Emotion, Styles & Instruments, Band & Lead Vocalist, Time Sig & Key, Song Structure, Rhyme Scheme & Meter, Fine-Tuning Sliders).

---

## 3. Specification & Property Catalog
| Field | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| **$schema** | string | No | Draft 07 JSON Schema declaration URI |
| **version** | string | **Yes** | Schema version string (`"1.0.0"`) |
| **title** | string | **Yes** | Title of the options dataset |
| **groups** | array | **Yes** | Array of 10 Dashboard Node Groups |
| **groups[].id** | string | **Yes** | Group identifier string |
| **groups[].groupNumber** | number | **Yes** | Sequential group index (1-10) |
| **groups[].name** | string | **Yes** | Group display name |
| **groups[].description** | string | **Yes** | Group purpose description |
| **groups[].subgroups** | array | **Yes** | Array of subgroups containing options |
| **subgroups[].options[].dataType** | string | **Yes** | Data type (`boolean`, `string`, `number`, `array`, `select`, `slider`) |
