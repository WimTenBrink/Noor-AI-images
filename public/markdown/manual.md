# Noor Music: The Complete User Manual

Welcome to Noor Music, a professional-grade AI songwriting environment designed specifically for the band "Noor". This manual provides everything you need to know to create, manage, and explore the musical world of Noor.

## 1. Introduction to Noor Music

Noor Music is more than just a lyric generator. It is a collaborative space where you can define the musical direction of the band Noor—a group of four talented women with a unique sapphic pop sound. They are particularly fond of **double entendres**, often singing about innocent topics that carry a playful, suggestive subtext. By combining advanced AI with a robust job management system and specialized data viewers, Noor Music allows you to craft intricate songs tailored to the band's specific identity.

## 2. Meet the Band: Noor

Understanding the band members is key to generating the best lyrics.

### Miranda Noor [Soprano]
Miranda is the primary lyricist and composer. She is a Mixed Race (Indian, Dutch, American) woman married to Annelies Brink. She plays a vintage Fender Jazz Bass and is known for her passionate, empathetic storytelling. Her lyrics often explore the subtle complexities of the human heart. **Vocal Specialty: Female Soprano - Ethereal, operatic, High-pitched, High-register, Angelic, Shimmering.**

### Annelies Brink [Alto]
Annelies is a Dutch graphic designer and Miranda's wife. She is the grounding presence of the group, known for her infectious laugh and calm demeanor. She often provides creative problem-solving and digital illustrations for the band's projects. **Vocal Specialty: Female Alto - Choral, Alt-Rock, raspy husky tone, Deep, Low-mid focused, Gravelly, Haunting.**

### Fannie de Jong [Mezzo-Soprano]
Fannie is a ball of kinetic energy from Utrecht. She is lovers with Emma Vermeer. As the group's drummer, she plays a Tama kit with custom decals. She also contributes rap verses and beatboxing, bringing a playful and witty energy to the band's dynamic. **Vocal Specialty: Female Mezzo-Soprano - Soulful, Rap, wide dramatic vibrato, Controlled, Syncopated, Staccato.**

### Emma Vermeer [Feminine Contralto]
Emma is a confident and mischievous student from Amsterdam. She is lovers with Fannie. She plays keyboard and synthesizers, specifically a vintage Roland Juno-106. As the natural leader of the group, she has a keen eye for aesthetics and photography. **Vocal Specialty: Female Contralto - Bluesy, resonant chest voice, Off-beat, Velvety, Melancholy.**

### Band Member Background & Physicality
- **Age:** Highly youthful, fresh-faced, collegiate appearance matching student-aged young adult women (appearing late-teens/early-twenties), without specifying numerical age numbers in prompts.
- **Physicality:** They are exceptionally athletic, tone, and highly slender well-trained young women, avoiding any massive or heavy/overweight traits. They have flat, slender chests.
- **Lifestyle:** They prefer to be barefoot everywhere they go and are not ashamed of their bodies. They frequently visit naturist resorts.
- **Relationships:** While they are two couples (Miranda/Annelies and Fannie/Emma), they behave as a single family; they have an unbreakable, deeply supportive sisterly/romantic bond as a quartet.
- **Interests:** They have no desire to have children and no interest in men. Their bond is deeply sensual rather than purely sexual.

## 3. Getting Started: Configuration

### API Key Setup
To use the AI features, you must provide a Gemini API key.
1. Navigate to **Settings > API Key**.
2. A dialog will appear allowing you to select a key from your Google Cloud projects.
3. Once selected, the application will be ready to generate songs.

### Content Rating
In the header, you can select a content rating (G, PG, PG-13, R, NC-17). This guides the AI in its choice of themes and language, ensuring the generated lyrics meet your specific needs.

## 4. The Creative Process

### Selecting Instruments and Styles
Use the sidebars to define your song's foundation:
- **Instruments (Left):** Select from a wide range of instruments. Your choices will be incorporated into the AI's musical direction.
- **Vocal Styles (Top of Left Sidebar):** Toggle specific singing techniques like **Opera**, **Rap**, **Yodeling**, or **Deep Voice**. The AI will only use these styles if they are checked; otherwise, the band will sing in their normal voices.
- **Styles (Right):** Choose genres and sub-genres. These guide the rhythmic and melodic feel of the song.

### Generating a Song
1. Click the **Generate Song** button in the header.
2. Enter a theme or description for your song.
3. The AI will use your selected instruments, styles, and the band's persona to craft unique lyrics.
4. A new job will be added to the queue.
5. In the parameters dialog, clicking the "Clear" button resets all custom creation parameters to default immediately.
6. **Advanced Defaults Toggles:** Fine-tune details under the "Defaults Toggles" tab:
   - **Audience Settings:** Centralizes spectator ambient sounds (clapping, stomping, cheering, humming, and chanting), allowing you to instruct the crowd to sing along or sing the chorus.
   - **Self-Reflection Poetic Filter:** When enabled, the singers can be named, but you must mention and name **all four** of them (Miranda, Annelies, Fannie, Emma) in the song. When disabled, the AI is **strictly forbidden** from naming or referring to the singers under any circumstance.
   - **Backward Phonetic Reversal:** Write mirror-phonetic lyrics or backward subtextual references to enable code cracking when played backwards.

### Stable Diffusion XL 2.0 Cover Art Prompts
When generating cover art prompts, you only need to generate six plus one scenes (6 narrative lyric scenes + 1 Barn studio scene = 7 scenes total), not twelve plus two.
- **Scene Descriptions:** The description of each scene is preserved as-is, providing the common backdrop setting used to generate both standard and NSFW prompt variants.
- **Prompt Similarity & Differences:** Each scene generates both a standard prompt ("cleanPrompt") and an NSFW prompt ("explicitPrompt"), sharing the same core visual scene setting.
- **Standard Prompts:** Include the words "sheer summer dress" mentioned strictly ONCE after all persons are described, with no other clothing mentioned. For the four single singer solo prompts, a visible text title with the singer's name is displayed.
- **NSFW Prompts:** Feature nudity by explicitly adding the word "nude" after character descriptions as the ONLY indication of nudity (never using "unadorned" or "natural state"), with more details about their breasts (flat/slender chest, without using the word 'cup') and other body parts.
- **No Names Rule:** The AI is strictly forbidden from using actual character names inside the prompt text itself (referring to singers strictly by physical traits and instrument roles to prevent feature blending), except for the visible text title tag at the end of single singer solo prompts.
- **Group Separation:** Uses spatial grouping descriptions in multi-member prompts to keep facial and hair attributes completely distinct.

## 5. Job Operations & Auto-Downloads

Noor Music automates file management to streamline your production process:
- **Immediate Lyrics Generation Download**: As soon as lyrics are produced, the app auto-downloads `{title}-instructions.json` containing the title, style, and generated lyrics.
- **Complete Suite Saved Download**: When all jobs complete of the generation cycle (incorporating Lyrics, Karaoke, and Interview), the app automatically bundles your entire workspace options, instruments, configurations, styles, and song content, and auto-downloads it as a single cohesive `{title}.json` project file.
- **Automatic Settings Restoration**: To resume editing or display a saved project, simply drag and drop the `.json` bundle file anywhere onto the main viewport area. The app will auto-import all your instruments, rating, dialect, emotions, forbidden topics, and configurations, restoring your creative environment instantly.

## 6. Managing Jobs

The status bar at the bottom tracks your generation progress:
- **Pending (Yellow):** Jobs waiting in the queue.
- **Running (Blue):** The AI is currently generating your song.
- **Done (Green):** The song is complete and ready to view.
- **Failed (Red):** An error occurred.

### Job Actions
Click any counter in the status bar to see a list of recent jobs.
- **Show:** Open the detailed Job Dialog.
- **Delete:** Remove a job from the queue. (Running jobs cannot be deleted!)
- **Retry:** Re-run a failed job.
- **Speed Up:** Increase a job's priority.

### The Job Dialog
This dialog provides a deep dive into each AI interaction:
- **Result:** View the generated lyrics, image, or data.
- **Original Data:** See the prompt and system instructions used.
- **Error:** View detailed error logs if a job fails.
- **Raw Request/Response:** Inspect the exact payloads sent to and received from the API.

## 7. Working with Assets

### JSON Schemas & Version History
Noor Music exports formal **JSON Schema Draft 07** files for Song projects, Cover Art prompts, Video Segment prompts, System Logs, AI Jobs, and Lyrics Instructions.
- **Downloading Schemas:** Click the **JSON** menu in the top header and choose any schema to download its **.json** file. Each schema contains an embedded **help** object detailing its **purpose** and **versionHistory**.
- **Viewing Schema Evolution:** Within each item in the **JSON** menu, click the **Help** button on the right side of the menu item row. This opens a modal dialog showing the version history, structural evolution, and full property catalog of that schema.

### The Library Sidebars
The sidebars also act as a library for your project. You can view, delete, or add assets here.
- **View:** Clicking the "Eye" icon opens the asset in the main area.
- **Delete:** Clicking the "Trash" icon removes the asset from the library.

### Specialized Viewers
- **Markdown:** Used for biographies and help docs. Supports MD and PDF export.
- **Images:** Use the mouse wheel to zoom (5% to 1000%) and drag to scroll.
- **JSON/XML:** Explore data in a collapsible tree structure.
- **Text:** View plain text in a fixed-width font.

## 8. The Singers Section

Explore the detailed backgrounds of each band member in the **Singers** menu. Each entry features a full-screen display of the singer's portrait and their biography, with text flowing elegantly around the image.

## 9. System Console

For technical users, the **Terminal** icon in the header opens the System Log. Here you can track all application events, errors, and AI interactions in real-time.

---

## 10. How to Install Noor Music on Ubuntu 24.04 (For Dummies!)

Want to run this wonderful songwriter suite locally on your Ubuntu machine? It is super easy! No tech wizardry required. Just follow this beginner-friendly step-by-step roadmap:

### Step 1: Open Your Terminal
Don't be scared! Click on the **Activities** button in the top-left corner of your Ubuntu desktop screen. 
In the search bar that appears, type `Terminal`, and click on the black box icon with the little white symbols inside.

### Step 2: Update Your System Tools
Copy this command, paste it into your terminal, and click **Enter**:
```bash
sudo apt update && sudo apt upgrade -y
```
*(Tip: To paste in the terminal, press **Ctrl + Shift + V** on your keyboard. It will ask for your computer's password. Type it and press Enter. The screen won't show dots or stars as you type—this is normal and safe in Ubuntu!)*

### Step 3: Install the "Motor" (Node.js and npm)
Next, copy and paste this command and press Enter:
```bash
sudo apt install -y nodejs npm
```
*(This installs Node.js, which runs our JavaScript code, and npm, which is the package loader.)*

To verify the installation completed successfully, run these commands:
```bash
node -v
npm -v
```
If you see version numbers (such as v18 or v20), then congrats! The primary installation succeeded!

### Step 4: Extract and Enter the App Folder
Move your downloaded or exported ZIP folder of this app (e.g. `noor-music.zip`) into your Downloads folder. Right-click it and select "Extract Here". Or in your Terminal, navigate to the extracted folder:
```bash
cd ~/Downloads/noor-music
```
*(Note: Change `noor-music` to match the name of the folder where the files were extracted.)*

### Step 5: Install App Requirements
Let us pull all of the visual packages, icons, and AI libraries the app needs. Paste this in and hit Enter:
```bash
npm install
```

### Step 6: Start Your Local App Server
Now, we boot up the engine. Type this in:
```bash
npm run dev
```

### Step 7: Open Noor Music in Your Browser!
The terminal will display a local address, typically:
```
http://localhost:3000   or   http://localhost:5173
```
Simply right-click that address in the terminal and choose **Open Link**, or type/paste it into your Firefox or Chrome web browser address bar and press Enter.

**Hooray!** Your local instance of Noor Music is now live and running on Ubuntu 24.04! Enjoy writing songs with the band!

---
*Created by Katje B.V. (Knowledge And Technology Joyfully Engaged)*
