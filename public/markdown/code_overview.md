# Noor Music: Technical Code Overview

This document provides a detailed technical analysis of the Noor Music codebase, outlining the structures, constants, and architectural patterns used in the application.

## 1. Architectural Overview

Noor Music is built as a highly modular React 19 application running in the Vite dev environment. It enforces strict separation between UI, state management, and business logic layers. Furthermore, pure TypeScript modules (.ts) are used for static constants, logic, and interfaces, while JSX UI configurations reside wholly in .tsx modules.

### Core Directories
- `/src/app/components`: Pure UI presentation files styled with Tailwind CSS. Includes custom alerts, tree views, zoomable image panels, and markdown renderers.
- `/src/app/hooks`: Custom React hooks for orchestration. Primarily `useNoorApp` which acts as the core state hub of the playground.
- `/src/app/services`: Async services (e.g., job runner queue, network connections).
- `/src/constants`: Holds system instructions, prompts, and options list data structures.
- `/src/types`: Domain models, enums, and interfaces for proper type safety.

## 1.1 JSON Schemas, Version History & Data Evolution (`/src/constants/jsonSchemas.ts`)
The application defines six independent **Draft 07 JSON Schemas** for Song projects, Cover Art prompts, Video Segment prompts, System Logs, AI Jobs, and Lyrics Instructions.
- **Embedded Schema Help (`help`)**: Each exported schema object includes an embedded `help` property containing its `purpose` and a `versionHistory` array tracking historical schema versions (`v1.0.0`, `v1.1.0`), release dates, and structural changes.
- **Header Menu Help Integration**: Each JSON schema download item in `Header.tsx` includes a distinct **Help** button (`helpId: 'help-schema-*'`). Clicking this button opens a modal dialog showing the Markdown documentation for that schema's evolution.

## 2. State Management and Hooks

### `useNoorApp`
The primary hook that manages the application's global state and side effects.
- **Settings Compilation:** Whenever an Interview is generated (concluding the songwriting cycle), the full block of config states—including rating, dialect, emotions, instruments, styles, silly/epic/innuendo slider outputs, and default toggles—is compiled automatically and packed into the main Song document structure under `settings`.
- **Drag-and-Drop Restoration Engine:** Contains the parsed reader logic that accepts drops of exported `{title}.json` files. It reads the `settings` metadata property of the JSON file and instantly updates all corresponding React states (including the new audience and lyrical style toggles), resetting the workspace exactly as saved.
- **Lyrics Instruction Auto-Downloads:** Listens to lyrics completion events to immediately download a compact metadata sheet containing the prompt's instructions under `{title}-instructions.json` for SUNO or other render platforms.

### `useJobQueue`
A bridge between the React UI and the `JobService`. It maintains a priority-sorted (High > Normal > Low) queue and processes up to 5 concurrent worker threads simultaneously, with full pause triggers on 429 warnings.

## 3. Core Services and Structures

### `JobService`
A priority queue manager with concurrency limits. It preserves the exact request and response headers (shortening long base64 hashes inside) into each Job entity for detailed diagnostic inspection under the dialog's raw requests tab.

### `AIService`
Connects with the Gemini 2.5/3.5 models. Standardized system instructions and prompt prefixes are modularly injected during query formation.

---

## 4. Ubuntu 24.04 Local Server Deployment (For Dummies!)

If you wish to configure and launch Noor Music on your own Ubuntu 24.04 instance, here is the technical sequence of commands simplified for direct success:

1. **System Libraries Sync:** Ensure packages index are fully up to date:
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

2. **Server Environment Installation:** Load the local Node.js environment runner:
   ```bash
   sudo apt install -y nodejs npm
   ```

3. **Check Versions:**
   ```bash
   node -v && npm -v
   ```
   *(Note: Ensure Node is at least version 18+ to successfully boot Vite and React 19 rules.)*

4. **Navigate to Code Directory:**
   ```bash
   cd /path/to/extracted/noor-music
   ```

5. **Install Packages:** Pull dependencies securely via:
   ```bash
   npm install
   ```

6. **Ignite Dev Server:** Run Vite behind local port 3000 mapping:
   ```bash
   npm run dev
   ```

7. **Review in Browser:** Open `http://localhost:3000` or the designated host output inside your browser!

---

## 5. Main Data Structures

### `Song` Interface
```typescript
export interface Song {
  id?: string;
  title: string;
  style: string;
  lyrics: string;
  story?: string;
  storyPrompts?: StoryPrompts;
  interview?: string;
  settings?: any; // Automated custom settings configurations block
}
```

### `Job` Interface
```typescript
export interface Job {
  id: string;
  name: string;
  priority: 'low' | 'normal' | 'high';
  status: 'pending' | 'running' | 'done' | 'failed';
  prompt: string;
  systemInstruction?: string;
  result?: any;
  error?: string;
  rawRequest?: string;
  rawResponse?: string;
  timestamp: number;
}
```

---
*License: MIT | Created by Katje B.V.*
