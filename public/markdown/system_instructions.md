# System Instructions: Recreating Noor Music from Scratch

This comprehensive guide outlines the architectural principles, technical requirements, and implementation details necessary to build the "Noor Music" application. This project is a sophisticated AI-driven songwriting platform tailored for the fictional band "Noor".

## 1. Project Vision and Persona

The core of Noor Music is its unique persona. The application is not just a generic lyric generator; it is a specialized tool for a specific group of artists.

### The Band: Noor
Noor is a four-member female ensemble with a rich, interconnected backstory:
- **Miranda Noor [Soprano]:** The primary lyricist and composer. Born in NYC, she is of Indian, Dutch, and American descent. She is married to Annelies Brink. Her musical style is emotionally honest and intricate. She plays a vintage Fender Jazz Bass. **Vocal Specialty: Female Soprano - Ethereal, operatic, High-pitched, High-register, Angelic, Shimmering.**
- **Annelies Brink [Alto]:** A Dutch graphic designer and the grounding presence of the group. She is married to Miranda. Her calm and supportive nature is reflected in her infectious laugh. **Vocal Specialty: Female Alto - Choral, Alt-Rock, raspy husky tone, Deep, Low-mid focused, Gravelly, Haunting.**
- **Fannie de Jong [Mezzo-Soprano]:** A ball of kinetic energy from Utrecht. She is lovers with Emma Vermeer. She plays drums and percussion (Tama kit) and contributes rap and beatboxing. **Vocal Specialty: Female Mezzo-Soprano - Soulful, Rap, wide dramatic vibrato, Controlled, Syncopated, Staccato.**
- **Emma Vermeer [Feminine Contralto]:** A confident and mischievous student from Amsterdam. She is lovers with Fannie. She plays keyboard and synthesizers (vintage Roland Juno-106) and acts as the group's natural leader. **Vocal Specialty: Female Contralto - Bluesy, resonant chest voice, Off-beat, Velvety, Melancholy.**

### Band Member Background & Physicality
- **Age:** Highly youthful, fresh-faced, collegiate appearance matching student-aged young adult women (appearing late-teens/early-twenties), without specifying numerical age numbers in prompts.
- **Physicality:** They are exceptionally athletic, tone, and highly slender well-trained young women, avoiding any mature or heavy/overweight traits. They have small cup sizes.
- **Lifestyle:** They prefer to be barefoot everywhere they go and are not ashamed of their bodies. They frequently visit naturist resorts.
- **Relationships:** While they are two couples (Miranda/Annelies and Fannie/Emma), they behave as a single family; they have an unbreakable, deeply supportive sisterly/romantic bond as a quartet.
- **Interests:** They have no desire to have children and no interest in men. Their bond is deeply sensual rather than purely sexual.

### Musical Identity
The band's sound is a blend of pop, experimental instrumentation, and sapphic themes. They utilize a wide array of instruments, including electric guitars, drums, gongs, synthesizers, bagpipes, and the ancient Crwth, as well as a vast collection of **Ancient Instruments** (Lyre, Aulos, Sistrum, etc.). A signature element of their songwriting is the use of **double entendres**, where innocent words are used with suggestive, often sexual, undertones.

## 2. Technical Stack and Environment

To recreate this application, you must adhere to the following stack:
- **Framework:** React 19 (Functional Components, Hooks).
- **Language:** TypeScript (Strict Mode).
- **Build Tool:** Vite.
- **Styling:** Tailwind CSS 4.0 with a custom "Dark Lavender" theme.
- **Animations:** Motion (motion/react) for all transitions and dialogs.
- **Icons:** Lucide React for a consistent, modern UI.
- **AI SDK:** @google/genai for interacting with Gemini models.

## 3. Core Architecture: Separation of Concerns

The project must maintain a strict layer-based architecture:
- **/src/app/components:** Pure UI logic. Components should be small, specialized, and reusable.
- **/src/app/hooks:** State orchestration. Use custom hooks to manage complex logic like job queues and application state.
- **/src/app/services:** Business logic. Isolate API calls, file I/O, and data processing.
- **/src/constants:** Static configuration. Keep prompts, instructions, and UI constants (instruments, styles) centralized.
- **/src/types:** Global type definitions.

## 4. Key Systems Implementation

### A. The Job Management Engine
The application treats AI interactions as "Jobs". Implement a `JobService` that handles:
- **Priority Queue:** Jobs are categorized as Low, Normal, or High priority.
- **Concurrency Control:** Limit active jobs to five to prevent API rate limiting.
- **State Tracking:** Jobs transition through Pending (Yellow), Running (Blue), Done (Green), and Failed (Red) states.
- **Raw Data Capture:** Capture the exact request and response payloads for every job.
- **Auto-Pause:** Implement a pause mechanism that triggers on 429 (Too Many Requests) errors.

### B. Specialized Data Viewers
Noor Music requires several specialized controls for different file types:
- **MarkdownView:** A robust renderer for Markdown content, supporting headers, lists, tables, and image wrapping. It must include export options for MD and PDF.
- **TreeView:** A recursive component for JSON and XML data. It should feature collapsible nodes and a clean, readable layout.
- **ImageView:** An advanced image viewer supporting mouse-wheel zooming (5% to 1000%), drag-to-scroll, and automatic conversion of web images to PNG.
- **TextView:** A simple, fixed-font viewer for plain text files.

### C. UI Layout and Navigation
The interface is divided into four main areas:
- **Header:** Contains the Noor logo, navigation menus (JSON, Singers, Settings, Help), and the primary "Generate Song" action. Within each item in the **JSON** menu, a dedicated **Help** button is provided to display the schema's version history and purpose.
- **Sidebars:** Two 20vw panels for selecting Instruments (Left) and Styles (Right). These also serve as libraries for project assets.
- **Main Area:** A central workspace that acts as a drop zone for files and displays the current song or selected asset.
- **Status Bar:** Displays real-time job counters, AI status, and system resource monitoring (CPU/MEM).

## 5. File Operations & Automation
- **Lyric Instruction JSON**: When a song is generated, upon lyrics done, instantly download a metadata JSON consisting of `title`, `style`, and `lyrics` as `{title}-instructions.json`.
- **Complete Project Saved JSON**: When all files (Lyrics, Karaoke, and Interview) are created, automatically bundle all structural fields and options into `{title}.json` for automatic download.
- **Drag and Drop Settings Restore**: Dragging and dropping this complete JSON back onto the main viewport instantly restores all settings in the workspace.
- **Reset Options**: The main "Generate Song" dialog provides the direct clearing/reset mechanism via "onClear" action.

## 6. AI Prompt Engineering and Instructions

The "Brain" of the application resides in its system instructions.
- **Persona Enforcement:** The AI must be instructed to act as the songwriter for Noor, incorporating the band members' specific roles and relationships. This includes their penchant for **double entendres**—singing about innocent objects (e.g., "beaver", "cock", "pussy", "wood") that can be interpreted sexually.
- **Vocal Styles:** The AI only uses specific singing techniques (Opera, Rap, Yodeling, etc.) if they are explicitly selected in the "Instruments" list. Otherwise, it defaults to the singers' normal voices.
- **Output Constraints:** The AI must return structured JSON containing the title, style, and lyrics. The style MUST always begin with the phrase: **"Female vocal quartet (Soprano, Alto, Mezzo-Soprano, Feminine Contralto)"**.
- **Formatting Rules:** All instructions and tags in the lyrics (e.g., [Verse], [Miranda - Female Soprano - Ethereal]) MUST be in square brackets. Parentheses are forbidden as they interfere with SUNO's rendering.
- **Self-Reflection Poetic Filter / Singer Names Rule:** This feature is accessible under **Defaults Toggles > Lyrical Style & Tone**.
  - When *enabled*: The AI is allowed to name the singers (Miranda, Annelies, Fannie, Emma) in the lyrics and tags, but if one name is mentioned, **all four** singers must be mentioned at least once in the song.
  - When *disabled*: The AI is **strictly forbidden** from naming or referencing the singers (Miranda, Annelies, Fannie, Emma) under any circumstance. Never refer to or name them anywhere in the lyrics, brackets, or vocal/section tags.
- **Backward Phonetic Reversal:** Available under **Defaults Toggles > Lyrical Style & Tone**. When enabled, it instructs the generator to include mirror-phonetic lyrics or backward subtextual references to enable code cracking when played backwards.
- **Audience Settings:** A dedicated subtab under **Defaults Toggles > Audience Settings** allows full customization of live spectator sounds (Audience Interaction, Clapping, Stomping, Cheering, Singing, Humming, or singing the chorus).
- **Image Prompt Engineering:** The AI must generate detailed prompts for Stable Diffusion XL 2.0 to serve as album cover art:
  - **Cover Art Prompts:** All cover art prompts strictly NEVER mention any clothing or garments in any prompt (clean or NSFW). Clothes are added automatically by the downstream image generation AI based on context. Prompts are generated for 4K resolution in 16:9 landscape aspect ratio and end with extensive background and environmental details. Character prompts embed full physical details (age, body shape, skin color, hair color & style, eyes, face, species) for every character present.
  - **No Names Rule:** Under no circumstances should actual character names (Miranda, Annelies, Fannie, Emma) be mentioned in the image prompts. They must be referenced strictly by physical traits and roles (the bass player, the crwth/guitar player, the percussionist/drummer, the keyboardist/synthesizer player) with their unique eye colors, hair textures, and skin tones.
  - **Group Separation:** For duo/group prompts, character attributes must be clearly separated and individually defined (using spatial placement) to prevent facial and hair attribute mixing.
  - Incorporate the topic of the song into the scene prompts.
  - Ensure all singers are barefoot with proper instruments.

## 7. Styling and UX Guidelines

- **Theme:** Use a dark scheme with a hint of lavender (#0a0a0f background, #a080ff accent).
- **Typography:** Use a reasonably large, readable font (18px base).
- **Contrast:** Ensure all foreground/background pairings meet accessibility standards.
- **Dialogs:** Custom dialogs must be used instead of browser defaults. They should be 95vw/95vh for main actions and 90vw/90vh for nested ones.

## 8. Development Workflow

1. **Initialize:** Set up the Vite/React/TS environment.
2. **Theme:** Configure Tailwind with the lavender palette.
3. **Services:** Build the `JobService` and `AIService`.
4. **Hooks:** Implement `useNoorApp` to tie everything together.
5. **UI:** Build the layout components and specialized viewers.
6. **Integration:** Connect the Gemini API and implement the generation flow.
7. **Refinement:** Add the "Singers" section, Help documents, and final UX polish.

---
*Created by Katje B.V. (Knowledge And Technology Joyfully Engaged)*
