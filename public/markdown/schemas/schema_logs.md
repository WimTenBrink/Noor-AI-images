# Noor Music: System Logs Schema (v1.1.0)

## 1. Schema Purpose & Overview
The **System Logs Schema (Draft 07)** defines the export format for Noor Music console event telemetry.
Its purpose is to provide developers and automated diagnostics tools with a clean, structured JSON log of application events, warnings, and error traces.

## 2. Version History & Evolution
### v1.1.0 (2026-08-03) — Telemetry Hardening
- **Draft 07 URI Definition**: Added formal URI (`$id: https://katje.bv/schemas/v1.1.0/logs.json`).
- **Enum Level Validation**: Enforced strict enum values (`"info"`, `"warn"`, `"error"`) on log entries.
- **Timestamp Formatting**: Required formatted timestamp strings for session auditing.

### v1.0.0 (2025-01-15) — Initial Release
- Established array structure for log entries with `id`, `timestamp`, `level`, `title`, and `details`.

---

## 3. Specification & Property Catalog
| Field | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| **$schema** | string | No | Draft 07 JSON Schema declaration URI |
| **version** | string | **Yes** | Schema version string (`"1.1.0"`) |
| **entries** | array | **Yes** | Array of log entry objects |
| **entries[].id** | string | **Yes** | Unique entry UUID |
| **entries[].timestamp** | string | **Yes** | Time of log event |
| **entries[].level** | string | **Yes** | Severity level: `"info"`, `"warn"`, or `"error"` |
| **entries[].title** | string | **Yes** | Short headline of the event |
| **entries[].details** | string | No | Detailed stack trace or diagnostics message |
