# Noor Music: AI Jobs Queue Schema (v1.1.0)

## 1. Schema Purpose & Overview
The **AI Jobs Queue Schema (Draft 07)** defines the format for exporting and inspecting the AI job execution queue in Noor Music.
It allows developers to analyze task concurrency, priority levels, status transitions, and raw API request/response payloads.

## 2. Version History & Evolution
### v1.1.0 (2026-08-03) — Concurrency & Priority Specification
- **Draft 07 URI Definition**: Added formal URI (`$id: https://katje.bv/schemas/v1.1.0/jobs.json`).
- **Enum Constraints**: Standardized priority enums (`"low"`, `"normal"`, `"high"`) and status enums (`"pending"`, `"running"`, `"done"`, `"failed"`).
- **Rate-Limit Auditing**: Added support for 429 auto-pause trace attributes.

### v1.0.0 (2025-01-15) — Initial Release
- Core schema for queue jobs including `id`, `name`, `priority`, `status`, and `createdAt`.

---

## 3. Specification & Property Catalog
| Field | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| **$schema** | string | No | Draft 07 JSON Schema declaration URI |
| **version** | string | **Yes** | Schema version string (`"1.1.0"`) |
| **jobs** | array | **Yes** | Array of AI queue job records |
| **jobs[].id** | string | **Yes** | Unique job ID |
| **jobs[].name** | string | **Yes** | Job display name |
| **jobs[].priority** | string | **Yes** | Priority level: `"low"`, `"normal"`, or `"high"` |
| **jobs[].status** | string | **Yes** | Execution status: `"pending"`, `"running"`, `"done"`, or `"failed"` |
| **jobs[].createdAt** | string | No | Job creation timestamp |
