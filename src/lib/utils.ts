import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTimestamp(ts: number): string {
  return new Date(ts).toLocaleTimeString();
}

export function downloadJson(data: any, filename: string) {
  const exportData =
    data && typeof data === 'object' && !Array.isArray(data) && !data.$schema
      ? {
          $schema: 'https://katje.bv/schemas/v1.1.0/song.json',
          version: '1.1.0',
          ...data,
        }
      : data;
  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename.endsWith('.json') ? filename : `${filename}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export function shortenBase64(str: string): string {
  if (str.length < 20) return str;
  return `${str.substring(0, 10)}...${str.substring(str.length - 10)}`;
}

export function downloadPlainText(content: string, filename: string) {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename.endsWith('.txt') ? filename : `${filename}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * Convert any image source (URL, data URL, blob URL, SVG) into a PNG Blob.
 * Crucial for Clipboard API which only accepts 'image/png' on write,
 * and ensuring all generated/exported images are strictly PNG.
 */
export async function convertImageToPngBlob(src: string): Promise<Blob> {
  if (!src) {
    throw new Error('Empty image source provided');
  }

  // Fast-path: Already a PNG base64 data URL
  if (src.startsWith('data:image/png;base64,')) {
    try {
      const base64Data = src.replace('data:image/png;base64,', '');
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      return new Blob([byteArray], { type: 'image/png' });
    } catch (e) {
      console.warn('Fast base64 parse failed, falling back to canvas rendering:', e);
    }
  }

  // Handle SVG text/data URLs properly
  let effectiveSrc = src;
  if (src.trim().startsWith('<svg')) {
    effectiveSrc = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(src)}`;
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width || 1024;
        canvas.height = img.naturalHeight || img.height || 576;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          throw new Error('Canvas 2D context is not available');
        }
        ctx.drawImage(img, 0, 0);
        canvas.toBlob((blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Failed to convert canvas to PNG blob'));
          }
        }, 'image/png');
      } catch (err) {
        reject(err);
      }
    };
    img.onerror = (err) => {
      reject(new Error('Failed to load image for PNG conversion'));
    };
    img.src = effectiveSrc;
  });
}

/**
 * Convert any image source into a PNG base64 data URL
 */
export async function convertImageToPngDataUrl(src: string): Promise<string> {
  const blob = await convertImageToPngBlob(src);
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('Failed to read PNG blob as data URL'));
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

/**
 * Robustly trigger a file download for any image format (data URL, blob, remote URL).
 * All images are strictly converted and saved as .png files!
 * Appends the anchor to document.body and delays revokeObjectURL to prevent premature cancellation.
 */
export async function downloadImageFile(src: string, filename = 'image.png'): Promise<void> {
  if (!src || typeof window === 'undefined') return;

  // Enforce .png extension strictly
  let safeFilename = filename.replace(/\.(svg|jpg|jpeg|webp|gif|bmp)$/i, '');
  if (!safeFilename.toLowerCase().endsWith('.png')) {
    safeFilename = `${safeFilename}.png`;
  }

  try {
    // Convert any image format to PNG Blob first to guarantee strictly .PNG output
    const pngBlob = await convertImageToPngBlob(src);
    const blobUrl = URL.createObjectURL(pngBlob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = blobUrl;
    a.download = safeFilename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      if (a.parentNode) document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
    }, 15000);
  } catch (err) {
    console.warn('downloadImageFile primary PNG conversion failed, falling back:', err);
    // Fallback: if already a data URL, clean download
    if (src.startsWith('data:image/png')) {
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = src;
      a.download = safeFilename;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        if (a.parentNode) document.body.removeChild(a);
      }, 15000);
    }
  }
}

