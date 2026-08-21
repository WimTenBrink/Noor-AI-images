import { Job, Priority, JobStatus } from '../../types';
import { generateSong, generateImage } from './aiService';
import { SYSTEM_INSTRUCTIONS } from '../../constants/instructions';
import { downloadImageFile } from '../../lib/utils';

function safeBase64TruncateReplacer(key: string, value: any): any {
  if (typeof value === 'string') {
    // 1. Data URLs
    if (value.startsWith('data:') && value.includes(';base64,')) {
      const parts = value.split(';base64,');
      const base64Data = parts[1] || '';
      if (base64Data.length > 20) {
        return `${parts[0]};base64,${base64Data.substring(0, 10)}...${base64Data.substring(base64Data.length - 10)}`;
      }
      return value;
    }

    // 2. Base64 strings by key name
    const lowerKey = (key || '').toLowerCase();
    const isImageOrDataKey = lowerKey === 'data' || lowerKey === 'imagebase64' || lowerKey === 'imagebytes' || lowerKey === 'inlinedata' || lowerKey === 'bytes' || lowerKey === 'b64';
    if (isImageOrDataKey && value.length > 20) {
      return value.substring(0, 10) + '...' + value.substring(value.length - 10);
    }

    // 3. Very long strings without spaces/newlines (raw base64 payload strings)
    if (value.length > 200 && !value.includes(' ') && !value.includes('\n')) {
      return value.substring(0, 10) + '...' + value.substring(value.length - 10);
    }
  }
  return value;
}

function unescapeJsonString(str: string): string {
  return str
    .replace(/\\n/g, '\n')
    .replace(/\\r/g, '')
    .replace(/\\t/g, '\t')
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\');
}

function repairJsonString(input: string): string {
  if (!input || input.length > 500000) return input;
  let inString = false;
  let escaped = false;
  let result = '';

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (inString) {
      if (escaped) {
        result += char;
        escaped = false;
      } else if (char === '\\') {
        result += char;
        escaped = true;
      } else if (char === '"') {
        // Peek ahead to check if this quote is closing the string or unescaped quote inside string
        let nextNonWhitespaceChar = '';
        for (let j = i + 1; j < input.length; j++) {
          const c = input[j];
          if (c !== ' ' && c !== '\t' && c !== '\n' && c !== '\r') {
            nextNonWhitespaceChar = c;
            break;
          }
        }
        if (!nextNonWhitespaceChar || nextNonWhitespaceChar === ',' || nextNonWhitespaceChar === ':' || nextNonWhitespaceChar === '}' || nextNonWhitespaceChar === ']') {
          inString = false;
          result += '"';
        } else {
          result += '\\"';
        }
      } else if (char === '\n') {
        result += '\\n';
      } else if (char === '\r') {
        result += '\\r';
      } else if (char === '\t') {
        result += '\\t';
      } else {
        result += char;
      }
    } else {
      if (char === '"') {
        inString = true;
      }
      result += char;
    }
  }

  return result;
}

function extractFieldsRegex(text: string): any {
  if (!text || text.length > 500000) return null;
  const result: any = {};
  const keys = ['title', 'prompt', 'scene', 'action', 'style', 'lyrics', 'story', 'markdown', 'text', 'content', 'review', 'analysis', 'technical', 'entendres', 'giggleScale', 'interviewReview', 'imageDescription'];
  
  for (const key of keys) {
    const searchKey = `"${key}"`;
    const idx = text.indexOf(searchKey);
    if (idx !== -1) {
      const colonIdx = text.indexOf(':', idx + searchKey.length);
      if (colonIdx !== -1) {
        const quoteStart = text.indexOf('"', colonIdx);
        if (quoteStart !== -1 && quoteStart < colonIdx + 10) {
          let quoteEnd = -1;
          for (let i = quoteStart + 1; i < text.length; i++) {
            if (text[i] === '"' && text[i - 1] !== '\\') {
              quoteEnd = i;
              break;
            }
          }
          if (quoteEnd !== -1) {
            result[key] = unescapeJsonString(text.substring(quoteStart + 1, quoteEnd));
          }
        }
      }
    }
  }

  if (Object.keys(result).length > 0) {
    return result;
  }

  return null;
}

function cleanAndParseJSON(text: string): any {
  if (!text) return {};
  let cleaned = text.trim();

  // 1. Direct JSON.parse (fast path)
  try {
    return JSON.parse(cleaned);
  } catch (e) {}

  // 2. Extract ```json ... ``` or ``` ... ``` code blocks
  const codeBlockMatch = cleaned.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  if (codeBlockMatch) {
    const code = codeBlockMatch[1].trim();
    try {
      return JSON.parse(code);
    } catch (e) {}
    try {
      return JSON.parse(repairJsonString(code));
    } catch (e) {}
  }

  // Strip backticks if left over
  cleaned = cleaned.replace(/^```json\s*/i, '').replace(/^```\s*/, '').replace(/```\s*$/, '').trim();

  // 3. Find outermost JSON object
  const firstObj = cleaned.indexOf('{');
  const lastObj = cleaned.lastIndexOf('}');
  if (firstObj !== -1 && lastObj > firstObj) {
    const candidate = cleaned.substring(firstObj, lastObj + 1);
    try {
      return JSON.parse(candidate);
    } catch (e) {}
    try {
      return JSON.parse(repairJsonString(candidate));
    } catch (e) {}
  }

  // 4. Find outermost JSON array
  const firstArr = cleaned.indexOf('[');
  const lastArr = cleaned.lastIndexOf(']');
  if (firstArr !== -1 && lastArr > firstArr) {
    const candidate = cleaned.substring(firstArr, lastArr + 1);
    try {
      return JSON.parse(candidate);
    } catch (e) {}
    try {
      return JSON.parse(repairJsonString(candidate));
    } catch (e) {}
  }

  // 5. Fallback fields extraction
  const regexExtracted = extractFieldsRegex(cleaned);
  if (regexExtracted) {
    return regexExtracted;
  }

  // 6. Fallback for raw text output: check for Title / Style headers or raw lyrics/story
  const titleHeaderMatch = cleaned.match(/(?:Title|Song Title):\s*([^\n]+)/i);
  const styleHeaderMatch = cleaned.match(/(?:Style|Genre|Music Style):\s*([^\n]+)/i);

  const extractedTitle = titleHeaderMatch ? titleHeaderMatch[1].trim() : undefined;
  const extractedStyle = styleHeaderMatch ? styleHeaderMatch[1].trim() : undefined;

  const unescapedCleaned = unescapeJsonString(cleaned);

  return {
    title: extractedTitle,
    style: extractedStyle,
    lyrics: unescapedCleaned,
    story: unescapedCleaned,
    text: unescapedCleaned,
    markdown: unescapedCleaned
  };
}

class JobService {
  private queue: Job[] = [];
  private runningCount = 0;
  private maxConcurrent = 5;
  private isPaused = false;
  private listeners: ((jobs: Job[]) => void)[] = [];

  constructor() {
    setInterval(() => this.processQueue(), 5000);
  }

  subscribe(listener: (jobs: Job[]) => void) {
    this.listeners.push(listener);
    listener([...this.queue]);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach(l => l([...this.queue]));
  }

  addJob(
    nameOrOptions: string | {
      name: string;
      priority?: Priority;
      prompt?: string;
      apiKey?: string;
      generationSettings?: any;
      systemInstruction?: string;
      imageBase64?: string;
      imageMimeType?: string;
      isImageJob?: boolean;
      type?: string;
      data?: any;
      action?: () => Promise<any>;
    },
    priority?: Priority,
    prompt?: string,
    apiKey?: string,
    generationSettings?: any,
    systemInstruction?: string,
    imageBase64?: string,
    imageMimeType?: string,
    isImageJob?: boolean
  ): string {
    let finalName = '';
    let finalPriority: Priority = 'normal';
    let finalPrompt = '';
    let finalApiKey = '';
    let finalGenSettings: any = undefined;
    let finalSystemInstruction = SYSTEM_INSTRUCTIONS;
    let finalImageBase64: string | undefined = undefined;
    let finalImageMimeType: string | undefined = undefined;
    let finalIsImageJob = false;

    if (typeof nameOrOptions === 'object' && nameOrOptions !== null) {
      finalName = nameOrOptions.name || 'AI Job';
      finalPriority = nameOrOptions.priority || priority || 'normal';
      finalPrompt = nameOrOptions.prompt || nameOrOptions.data?.prompt || prompt || '';
      finalApiKey = nameOrOptions.apiKey || apiKey || '';
      finalGenSettings = nameOrOptions.generationSettings || nameOrOptions.data?.generationSettings || generationSettings;
      finalSystemInstruction = nameOrOptions.systemInstruction || nameOrOptions.data?.systemInstruction || systemInstruction || SYSTEM_INSTRUCTIONS;
      finalImageBase64 = nameOrOptions.imageBase64 || nameOrOptions.data?.imageBase64 || imageBase64;
      finalImageMimeType = nameOrOptions.imageMimeType || nameOrOptions.data?.imageMimeType || imageMimeType;
      finalIsImageJob = nameOrOptions.isImageJob || (nameOrOptions.type === 'image') || isImageJob || false;
    } else {
      finalName = String(nameOrOptions || 'AI Job');
      finalPriority = priority || 'normal';
      finalPrompt = prompt || '';
      finalApiKey = apiKey || '';
      finalGenSettings = generationSettings;
      finalSystemInstruction = systemInstruction || SYSTEM_INSTRUCTIONS;
      finalImageBase64 = imageBase64;
      finalImageMimeType = imageMimeType;
      finalIsImageJob = isImageJob || false;
    }

    const job: Job = {
      id: Math.random().toString(36).substring(7),
      name: finalName,
      priority: finalPriority,
      status: 'pending',
      createdAt: Date.now(),
      apiKey: finalApiKey,
      prompt: finalPrompt,
      systemInstruction: finalSystemInstruction,
      generationSettings: finalGenSettings,
      imageBase64: finalImageBase64,
      imageMimeType: finalImageMimeType,
      isImageJob: finalIsImageJob,
    };
    this.queue.push(job);
    this.notify();
    // Process queue immediately without waiting for 5-second interval
    setTimeout(() => this.processQueue(), 0);
    return job.id;
  }

  pause() {
    this.isPaused = true;
    this.notify();
  }

  resume() {
    this.isPaused = false;
    this.notify();
  }

  getIsPaused() {
    return this.isPaused;
  }

  deleteJob(id: string) {
    const job = this.queue.find(j => j.id === id);
    if (job && job.status !== 'running') {
      this.queue = this.queue.filter(j => j.id !== id);
      this.notify();
    }
  }

  deleteAll(status?: JobStatus) {
    this.queue = this.queue.filter(j => {
      if (j.status === 'running') return true;
      if (status && j.status !== status) return true;
      return false;
    });
    this.notify();
  }

  clearQueue() {
    this.queue = [];
    this.runningCount = 0;
    this.isPaused = false;
    this.notify();
  }

  retryJob(id: string, apiKey: string) {
    const job = this.queue.find(j => j.id === id);
    if (job && job.status === 'failed') {
      job.status = 'pending';
      job.error = undefined;
      job.retryCount = 0;
      if (apiKey) job.apiKey = apiKey;
      this.notify();
    }
  }

  retryAll(apiKey: string) {
    this.queue.forEach(j => {
      if (j.status === 'failed') {
        j.status = 'pending';
        j.error = undefined;
        j.retryCount = 0;
        if (apiKey) j.apiKey = apiKey;
      }
    });
    this.notify();
  }

  speedUp(id: string) {
    const job = this.queue.find(j => j.id === id);
    if (job && job.status === 'pending') {
      if (job.priority === 'low') job.priority = 'normal';
      else if (job.priority === 'normal') job.priority = 'high';
      this.notify();
    }
  }

  private async processQueue() {
    // Failsafe: check for any running jobs that have been active for more than 100 seconds and mark them as failed.
    let changed = false;
    this.queue.forEach(j => {
      if (j.status === 'running' && j.startedAt && (Date.now() - j.startedAt > 100000)) {
        console.warn(`Failsafe: job ${j.id} (${j.name}) has been active for over 100 seconds. Terminating with timeout.`);
        j.status = 'failed';
        j.error = 'AI response timed out (100s background failsafe limit reached). The request was cancelled to prevent freezing the pipeline.';
        j.completedAt = Date.now();
        this.runningCount = Math.max(0, this.runningCount - 1);
        changed = true;
      }
    });
    if (changed) {
      this.notify();
    }

    if (this.isPaused || this.runningCount >= this.maxConcurrent) return;

    const pendingJobs = this.queue
      .filter(j => j.status === 'pending')
      .sort((a, b) => {
        const priorityMap = { high: 0, normal: 1, low: 2 };
        if (priorityMap[a.priority] !== priorityMap[b.priority]) {
          return priorityMap[a.priority] - priorityMap[b.priority];
        }
        return a.createdAt - b.createdAt;
      });

    if (pendingJobs.length === 0) return;

    const job = pendingJobs[0];
    this.runJob(job);
  }

  private async runJob(job: Job) {
    job.status = 'running';
    job.startedAt = Date.now();
    this.runningCount++;
    this.notify();

    try {
      const localStorageKey = typeof window !== 'undefined' 
        ? (localStorage.getItem('noor_gemini_api_key') || localStorage.getItem('noor-api-key') || localStorage.getItem('gemini_api_key') || localStorage.getItem('GEMINI_API_KEY') || '') 
        : '';
      const apiKey = job.apiKey || localStorageKey || process.env.GEMINI_API_KEY || '';
      
      const browserNow = new Date();
      const browserTimezone = typeof Intl !== 'undefined' ? Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC' : 'UTC';
      const temporalContext = `

**DYNAMIC TEMPORAL CONTEXT (Browser Settings):**
- **Date/Time:** ${browserNow.toString()} (ISO: ${browserNow.toISOString()})
- **Time Zone:** ${browserTimezone}
`;

      const resolvedSystemInstruction = (job.systemInstruction || SYSTEM_INSTRUCTIONS) + temporalContext;

      if (job.isImageJob || job.name.toLowerCase().includes('generate image')) {
        const imgResult = await generateImage(job.prompt || '', apiKey);
        job.rawRequest = JSON.stringify(imgResult.rawRequest, safeBase64TruncateReplacer, 2);
        job.rawResponse = JSON.stringify(imgResult.rawResponse, safeBase64TruncateReplacer, 2);
        job.result = imgResult.imageUrl;

        // Auto download generated image using our robust helper (strictly PNG format)
        if (typeof window !== 'undefined' && imgResult.imageUrl) {
          try {
            const safeTitle = (job.name || 'generated-image').replace(/[/\\?%*:|"<>]/g, '-');
            await downloadImageFile(imgResult.imageUrl, `${safeTitle}-${Date.now()}.png`);
          } catch (downloadErr) {
            console.error('Failed to auto-download image:', downloadErr);
          }
        }

        job.status = 'done';
        return;
      }

      // Construct "raw" request for logging
      const rawRequestObj = {
        model: "gemini-3.7-flash",
        contents: job.imageBase64 ? [
          { inlineData: { data: job.imageBase64, mimeType: job.imageMimeType } },
          { text: job.prompt }
        ] : job.prompt,
        config: {
          systemInstruction: resolvedSystemInstruction,
          responseMimeType: "application/json",
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_NONE",
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_NONE",
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_NONE",
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_NONE",
            },
          ],
        }
      };
      job.rawRequest = JSON.stringify(rawRequestObj, safeBase64TruncateReplacer, 2);

      const response = await generateSong(
        job.prompt || '',
        apiKey,
        resolvedSystemInstruction,
        job.imageBase64,
        job.imageMimeType
      );
      
      // Capture "raw" response for logging
      const rawResponseObj = {
        candidates: response.candidates,
        usageMetadata: (response as any).usageMetadata,
      };
      job.rawResponse = JSON.stringify(rawResponseObj, safeBase64TruncateReplacer, 2);

      let songTitle = 'Untitled Song';
      let jobType = typeof job.name === 'string' ? job.name : String(job.name || '');
      const colonIndex = jobType.indexOf(':');
      if (colonIndex !== -1) {
        songTitle = jobType.substring(colonIndex + 1).trim();
        jobType = jobType.substring(0, colonIndex).trim();
      }

      // Format clean, human-readable headers
      const promptTokenCount = (response as any).usageMetadata?.promptTokenCount || 'Unknown';
      const candidatesTokenCount = (response as any).usageMetadata?.candidatesTokenCount || 'Unknown';
      const totalTokenCount = (response as any).usageMetadata?.totalTokenCount || 'Unknown';

      const fileHeader = `================================================================================
AI DEBUG LOG HEADERS
================================================================================
Timestamp: ${new Date().toISOString()}
Song Title: ${songTitle}
Job Name: ${jobType}
Model: gemini-3.7-flash
Prompt Token Count: ${promptTokenCount}
Candidates Token Count: ${candidatesTokenCount}
Total Token Count: ${totalTokenCount}
================================================================================

================================================================================
SYSTEM INSTRUCTIONS
================================================================================
${resolvedSystemInstruction || 'None'}

================================================================================
USER PROMPT
================================================================================
${job.prompt || ''}
`;

      const fileSeparator = `\n--------------------------------------------------------------------------------\n`;

      const fileResponse = `================================================================================
AI RESPONSE (RAW DATA)
================================================================================
${response.text || ''}
`;

      const fileContent = fileHeader + fileSeparator + fileResponse;
      const safeFilename = `${songTitle} - ${jobType}.txt`.replace(/[/\\?%*:|"<>]/g, '-');

      if (typeof window !== 'undefined') {
        try {
          const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = safeFilename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        } catch (downloadErr) {
          console.error('Failed to auto-download AI debug file:', downloadErr);
        }
      }

      const firstCandidate = response.candidates?.[0];
      if (firstCandidate?.finishReason === 'PROHIBITED_CONTENT') {
        throw new Error("The AI request was blocked by Gemini's safety filters (Finish Reason: PROHIBITED_CONTENT). Even with safety settings set to 'BLOCK_NONE', certain sensitive, extreme, or unsafe topics trigger hard system-level safeguards. To prevent this, try rephrasing your prompt to use lighter, more metaphorical, or playful terms instead of graphic descriptors.");
      }
      if (firstCandidate?.finishReason && firstCandidate.finishReason !== 'STOP' && firstCandidate.finishReason !== 'MAX_TOKENS') {
        throw new Error(`The AI request failed to complete normally (Finish Reason: ${firstCandidate.finishReason}). Please try a different prompt.`);
      }

      const rawText = response.text || firstCandidate?.content?.parts?.[0]?.text || '';
      if (!rawText) throw new Error("No text returned from AI");
      
      const parsed = cleanAndParseJSON(rawText);
      if (parsed && typeof parsed === 'object') {
        if (job.generationSettings) {
          parsed.settings = job.generationSettings;
        }
      }
      job.result = parsed;
      job.status = 'done';
    } catch (error: any) {
      if (!job.retryCount || job.retryCount === 0) {
        job.retryCount = 1;
        job.status = 'pending';
        job.error = undefined;
        // Keep logs clean that it is auto-retrying
        console.warn(`Job "${job.name}" (${job.id}) failed on first attempt. Retrying automatically... Error: ${error.message}`);
      } else {
        job.status = 'failed';
        job.error = error.message;
        job.retryCount = 2; // Failed twice!
        const isRateLimit = error.message.includes('429') || 
                            error.message.toUpperCase().includes('RATE_LIMIT') || 
                            error.message.toUpperCase().includes('RESOURCE_EXHAUSTED') ||
                            error.message.toUpperCase().includes('TOO MANY REQUESTS');
        if (isRateLimit) {
          this.pause();
        }
      }
    } finally {
      job.completedAt = Date.now();
      this.runningCount--;
      this.notify();
    }
  }
}

export const jobService = new JobService();
