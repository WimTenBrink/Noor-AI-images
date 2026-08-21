import { GoogleGenAI, HarmCategory, HarmBlockThreshold } from "@google/genai";
import { SYSTEM_INSTRUCTIONS } from "../../constants/instructions";
import { convertImageToPngDataUrl } from "../../lib/utils";

export async function generateSong(
  prompt: string,
  apiKey: string,
  systemInstruction?: string,
  imageBase64?: string,
  imageMimeType?: string
) {
  if (!apiKey) {
    throw new Error("Gemini API key is missing. Please configure it in your Settings.");
  }

  const genAI = new GoogleGenAI({ apiKey });

  const timeoutPromise = new Promise<never>((_, reject) => {
    setTimeout(() => {
      reject(new Error("AI response timed out (90s limit reached). The AI failed to respond in time. Please check your network or try again."));
    }, 90000);
  });

  const contents: any[] = [];
  if (imageBase64 && imageMimeType) {
    let cleanBase64 = imageBase64;
    const commaIdx = cleanBase64.indexOf(',');
    if (cleanBase64.startsWith('data:') && commaIdx !== -1) {
      cleanBase64 = cleanBase64.substring(commaIdx + 1);
    }
    contents.push({
      inlineData: {
        data: cleanBase64,
        mimeType: imageMimeType
      }
    });
  }
  contents.push({ text: prompt });

  const generatePromise = genAI.models.generateContent({
    model: "gemini-3.7-flash",
    contents: contents,
    config: {
      systemInstruction: systemInstruction || SYSTEM_INSTRUCTIONS,
      responseMimeType: "application/json",
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
      ],
    },
  });

  const response = await Promise.race([generatePromise, timeoutPromise]);
  return response;
}

export async function generateImage(
  prompt: string,
  apiKey: string
): Promise<{ imageUrl: string; rawRequest: any; rawResponse: any }> {
  if (!apiKey) {
    throw new Error("Gemini API key is missing. Please configure it in your Settings.");
  }

  const genAI = new GoogleGenAI({ apiKey });

  const timeoutPromise = new Promise<never>((_, reject) => {
    setTimeout(() => {
      reject(new Error("Image generation timed out (90s limit reached). Please try again."));
    }, 90000);
  });

  const apiCall = async () => {
    // 1. Attempt generateImages with imagen-3.0-generate-002 (strictly outputMimeType: image/png)
    const rawReq1 = {
      model: "imagen-3.0-generate-002",
      prompt: prompt,
      config: {
        numberOfImages: 1,
        outputMimeType: "image/png",
        aspectRatio: "16:9"
      }
    };

    try {
      const response = await (genAI.models as any).generateImages({
        model: "imagen-3.0-generate-002",
        prompt: prompt,
        config: {
          numberOfImages: 1,
          outputMimeType: "image/png",
          aspectRatio: "16:9"
        }
      });

      const base64 = response.generatedImages?.[0]?.image?.imageBytes;
      if (base64) {
        return {
          imageUrl: `data:image/png;base64,${base64}`,
          rawRequest: rawReq1,
          rawResponse: response
        };
      }
    } catch (err1: any) {
      console.warn("generateImages failed, trying gemini-3.1-flash-lite-image fallback:", err1);
    }

    // 2. Fallback to gemini-3.1-flash-lite-image and ensure PNG
    const rawReq2 = {
      model: "gemini-3.1-flash-lite-image",
      contents: prompt
    };

    try {
      const response = await genAI.models.generateContent({
        model: "gemini-3.1-flash-lite-image",
        contents: prompt,
      });

      for (const candidate of response.candidates || []) {
        for (const part of candidate.content?.parts || []) {
          if (part.inlineData?.data) {
            const rawDataUrl = `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
            const pngDataUrl = await convertImageToPngDataUrl(rawDataUrl).catch(() => rawDataUrl);
            return {
              imageUrl: pngDataUrl,
              rawRequest: rawReq2,
              rawResponse: response
            };
          }
        }
      }
    } catch (err2: any) {
      console.warn("gemini-3.1-flash-lite-image fallback failed:", err2);
    }

    // 3. Fallback to gemini-3.7-flash SVG illustration and convert to PNG data URL
    const rawReq3 = {
      model: "gemini-3.7-flash",
      contents: `Generate a detailed, high quality SVG image illustration for this prompt: "${prompt}". Return ONLY clean JSON with key "svg" containing valid raw SVG element starting with <svg> and ending with </svg>.`
    };

    try {
      const response = await genAI.models.generateContent({
        model: "gemini-3.7-flash",
        contents: rawReq3.contents,
        config: {
          responseMimeType: "application/json"
        }
      });

      const text = response.text || '';
      let svgCode = '';
      try {
        const parsed = JSON.parse(text);
        svgCode = parsed.svg || parsed.text || '';
      } catch(e) {
        const match = text.match(/<svg[\s\S]*?<\/svg>/i);
        if (match) svgCode = match[0];
      }

      if (svgCode) {
        const svgDataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgCode)}`;
        const pngDataUrl = await convertImageToPngDataUrl(svgDataUrl).catch(() => svgDataUrl);
        return {
          imageUrl: pngDataUrl,
          rawRequest: rawReq3,
          rawResponse: response
        };
      }
    } catch (err3: any) {
      console.warn("gemini-3.6-flash SVG fallback failed:", err3);
    }

    throw new Error("Unable to generate image with Gemini API. Please check your API key and try again.");
  };

  return await Promise.race([apiCall(), timeoutPromise]);
}
