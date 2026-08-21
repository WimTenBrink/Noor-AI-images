import React, { useState, useRef, useEffect } from 'react';
import { Maximize, ZoomIn, ZoomOut, Download, Copy, Check } from 'lucide-react';
import { convertImageToPngBlob, downloadImageFile } from '../../lib/utils';

interface ImageViewProps {
  src: string;
  alt?: string;
}

export const ImageView: React.FC<ImageViewProps> = ({ src, alt }) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    // Zoom goes from 5% to 1,000% in intervals of 5% (0.05)
    const delta = e.deltaY > 0 ? -0.05 : 0.05;
    const newZoom = Math.min(Math.max(0.05, zoom + delta), 10);
    // Round to nearest 0.05
    setZoom(Math.round(newZoom * 20) / 20);
  };

  useEffect(() => {
    if (src && (src.startsWith('http') && !src.includes('localhost'))) {
      // Automatic download and conversion to PNG for web images
      const safeName = alt ? `${alt.toLowerCase().replace(/[^a-z0-9]/g, '_')}.png` : 'web-image.png';
      downloadImageFile(src, safeName).catch((err) => {
        console.warn('Auto web image download failed:', err);
      });
    }
  }, [src, alt]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const fitToWindow = () => {
    if (containerRef.current) {
      setZoom(0.8); 
      setPosition({ x: 0, y: 0 });
    }
  };

  const zoom100 = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleCopy = async () => {
    try {
      // Browsers strictly require image/png for ClipboardItem
      const pngBlob = await convertImageToPngBlob(src);
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': pngBlob })
      ]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy image to clipboard as PNG', err);
      // Fallback: Copy the image data or URL as text if binary image write fails
      try {
        await navigator.clipboard.writeText(src);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error('Fallback copy text failed:', fallbackErr);
      }
    }
  };

  const handleDownload = async () => {
    const filename = alt ? `${alt.toLowerCase().replace(/[^a-z0-9]/g, '_')}.png` : 'image.png';
    await downloadImageFile(src, filename);
  };

  return (
    <div className="relative w-full h-full bg-black overflow-hidden flex flex-col">
      <div className="absolute top-2 right-2 z-10 flex gap-2">
        <button onClick={fitToWindow} className="p-2 bg-lavender-surface rounded hover:bg-lavender-accent" title="Fit to window"><Maximize size={16} /></button>
        <button onClick={zoom100} className="p-2 bg-lavender-surface rounded hover:bg-lavender-accent" title="Zoom 100%">100%</button>
        <button onClick={handleCopy} className="p-2 bg-lavender-surface rounded hover:bg-lavender-accent">
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
        <button onClick={handleDownload} className="p-2 bg-lavender-surface rounded hover:bg-lavender-accent"><Download size={16} /></button>
      </div>
      <div 
        ref={containerRef}
        className="flex-1 cursor-grab active:cursor-grabbing"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <img 
          src={src} 
          alt={alt}
          referrerPolicy="no-referrer"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
            transition: isDragging ? 'none' : 'transform 0.1s ease-out',
            transformOrigin: 'center',
          }}
          className="max-w-none pointer-events-none"
        />
      </div>
      <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-xs">
        Zoom: {Math.round(zoom * 100)}%
      </div>
    </div>
  );
};
