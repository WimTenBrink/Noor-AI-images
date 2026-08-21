import React, { useState, useMemo, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Download, Copy, Check } from 'lucide-react';
import { SINGERS } from '../../constants/singers';

interface MarkdownViewProps {
  content: string;
  children?: React.ReactNode;
  filename?: string;
}

const FacebookIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

function toUnicodeBold(str: string): string {
  return str.replace(/[A-Za-z0-9]/g, (char) => {
    const code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1d5d4 + (code - 65));
    if (code >= 97 && code <= 122) return String.fromCodePoint(0x1d5ee + (code - 97));
    if (code >= 48 && code <= 57) return String.fromCodePoint(0x1d7ec + (code - 48));
    return char;
  });
}

function toUnicodeItalic(str: string): string {
  return str.replace(/[A-Za-z]/g, (char) => {
    const code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) return String.fromCodePoint(0x1d608 + (code - 65));
    if (code >= 97 && code <= 122) {
      if (char === 'h') return 'ℎ';
      return String.fromCodePoint(0x1d622 + (code - 97));
    }
    return char;
  });
}

export function formatMarkdownForFacebook(md: string): string {
  const lines = md.split('\n');
  const resultLines: string[] = [];
  let inCodeBlock = false;

  for (let line of lines) {
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) {
      resultLines.push(`  ${line}`);
      continue;
    }

    if (/^(\*{3,}|-{3,}|_{3,})$/.test(line.trim())) {
      resultLines.push('────────────────────────────────────────');
      continue;
    }

    if (line.startsWith('# ')) {
      const title = line.replace(/^#\s+/, '').trim();
      resultLines.push(`\n=== ${toUnicodeBold(title.toUpperCase())} ===\n`);
      continue;
    }
    if (line.startsWith('## ')) {
      const title = line.replace(/^##\s+/, '').trim();
      resultLines.push(`\n▶ ${toUnicodeBold(title)}\n`);
      continue;
    }
    if (line.startsWith('### ')) {
      const title = line.replace(/^###\s+/, '').trim();
      resultLines.push(`\n◆ ${toUnicodeBold(title)}\n`);
      continue;
    }
    if (line.startsWith('#### ')) {
      const title = line.replace(/^####\s+/, '').trim();
      resultLines.push(`\n▪ ${toUnicodeBold(title)}\n`);
      continue;
    }

    if (line.startsWith('> ')) {
      line = `▎ ${line.replace(/^>\s*/, '')}`;
    }

    if (/^[\*\-\+]\s+/.test(line)) {
      line = line.replace(/^[\*\-\+]\s+/, '• ');
    }

    line = line.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1 ($2)');
    line = line.replace(/(\*\*|__)(.*?)\1/g, (_, __, inner) => toUnicodeBold(inner));
    line = line.replace(/(\*|_)(.*?)\1/g, (_, __, inner) => toUnicodeItalic(inner));
    line = line.replace(/`([^`]+)`/g, '[$1]');

    resultLines.push(line);
  }

  return resultLines.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

const calculateAge = (birthDate: string) => {
  const today = new Date(); // Dynamic current date from browser settings
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age;
};

export const MarkdownView: React.FC<MarkdownViewProps> = ({ content, children, filename = 'document' }) => {
  const [copied, setCopied] = useState(false);
  const [fbCopied, setFbCopied] = useState(false);

  const processedContent = useMemo(() => {
    let result = typeof content === 'string' ? content : (content ? JSON.stringify(content, null, 2) : '');
    // Convert literal '\\n' representations (backslash + n) to real line breaks
    result = result.replace(/\\n/g, '\n').replace(/\\r/g, '');

    SINGERS.forEach(singer => {
      const age = calculateAge(singer.birthDate);
      const placeholder = `{${singer.id}-age}`;
      result = result.replaceAll(placeholder, age.toString());
    });
    
    // Clean any AI-generated HTML p elements with align and image blocks
    result = result.replace(/<p\s+align="center">[\s\S]*?<\/p>/gi, '');
    result = result.replace(/<img[\s\S]*?\/>/gi, '');
    result = result.replace(/<p\s+align='center'>[\s\S]*?<\/p>/gi, '');
    return result;
  }, [content]);

  const handleCopy = () => {
    navigator.clipboard.writeText(processedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyFacebook = () => {
    const fbText = formatMarkdownForFacebook(processedContent);
    navigator.clipboard.writeText(fbText);
    setFbCopied(true);
    setTimeout(() => setFbCopied(false), 2000);
  };

  const handleDownload = (format: 'md' | 'pdf') => {
    if (format === 'md') {
      const blob = new Blob([processedContent], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${filename.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.md`;
      a.click();
    } else {
      window.print(); // Simple PDF export via print
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mj = (window as any).MathJax;
    if (mj && containerRef.current) {
      // Small timeout to let React render the DOM node completely
      const timer = setTimeout(() => {
        try {
          mj.typesetPromise?.([containerRef.current]);
        } catch (err) {
          console.error('MathJax typeset error:', err);
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [processedContent]);

  return (
    <div className="relative w-full h-full flex flex-col">
      <div className="flex items-center justify-end gap-2 p-2 border-b border-lavender-border">
        <button 
          onClick={handleCopy} 
          className="p-2 hover:bg-lavender-surface rounded text-lavender-text flex items-center gap-1.5 transition-colors" 
          title="Copy Raw Markdown"
        >
          {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
        </button>
        <button 
          onClick={handleCopyFacebook} 
          className="px-2.5 py-1.5 hover:bg-lavender-surface rounded text-[#1877F2] hover:text-[#166FE5] flex items-center gap-1.5 border border-[#1877F2]/30 hover:border-[#1877F2]/60 bg-[#1877F2]/5 transition-all text-xs font-semibold" 
          title="Copy Markdown with formatting optimized for Facebook post"
        >
          {fbCopied ? (
            <>
              <Check size={15} className="text-green-500" />
              <span className="text-green-500 font-bold">Copied for FB!</span>
            </>
          ) : (
            <>
              <FacebookIcon size={15} className="text-[#1877F2]" />
              <span>Copy to Facebook</span>
            </>
          )}
        </button>
        <button onClick={() => handleDownload('md')} className="p-2 hover:bg-lavender-surface rounded" title="Download Markdown"><Download size={16} /></button>
        <button onClick={() => handleDownload('pdf')} className="p-2 hover:bg-lavender-surface rounded font-bold text-xs">PDF</button>
      </div>
      <div ref={containerRef} className="flex-1 overflow-auto p-6 markdown-body">
        {children}
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{
            table: ({ children, ...props }) => (
              <div className="overflow-x-auto my-4 w-full">
                <table className="w-full min-w-full border-collapse border border-lavender-border text-left align-top" {...props}>
                  {children}
                </table>
              </div>
            )
          }}
        >
          {processedContent}
        </ReactMarkdown>
      </div>
    </div>
  );
};
