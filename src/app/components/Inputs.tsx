import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Tooltip } from './Tooltip';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, ...props }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (props.value) {
      navigator.clipboard.writeText(String(props.value));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const charCount = props.value ? String(props.value).length : 0;

  return (
    <div className="flex flex-col gap-0.5 w-full text-lavender-text font-sans">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1.5">
          {label && <label className="text-xs font-extrabold text-lavender-accent uppercase tracking-wider">{label}</label>}
          {props.maxLength && (
            <span className="text-[9px] font-mono font-bold px-1 py-0.5 rounded bg-lavender-surface text-lavender-accent/60 border border-lavender-border/30">
              {charCount}/{props.maxLength}
            </span>
          )}
        </div>
        <Tooltip title="Copy text" content="Copy full contents of this textbox securely to your system clipboard.">
          <button 
            type="button"
            onClick={handleCopy}
            className="p-1 hover:bg-lavender-surface rounded text-lavender-accent transition-colors duration-150 cursor-pointer"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </Tooltip>
      </div>
      <textarea 
        {...props}
        className="w-full bg-lavender-surface border border-lavender-border rounded p-2.5 text-sm text-lavender-text focus:outline-none focus:border-lavender-accent resize-none font-sans"
      />
    </div>
  );
};

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label?: string }> = ({ label, ...props }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (props.value) {
      navigator.clipboard.writeText(String(props.value));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const charCount = props.value ? String(props.value).length : 0;

  return (
    <div className="flex flex-col gap-0.5 w-full text-lavender-text font-sans">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1.5">
          {label && <label className="text-xs font-extrabold text-lavender-accent uppercase tracking-wider">{label}</label>}
          {props.maxLength && (
            <span className="text-[9px] font-mono font-bold px-1 py-0.5 rounded bg-lavender-surface text-lavender-accent/60 border border-lavender-border/30">
              {charCount}/{props.maxLength}
            </span>
          )}
        </div>
        <Tooltip title="Copy text" content="Copy full contents of this textbox securely to your system clipboard.">
          <button 
            type="button"
            onClick={handleCopy}
            className="p-1 hover:bg-lavender-surface rounded text-lavender-accent transition-colors duration-150 cursor-pointer"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>
        </Tooltip>
      </div>
      <input 
        {...props}
        className="w-full bg-lavender-surface border border-lavender-border rounded p-2.5 text-sm text-lavender-text focus:outline-none focus:border-lavender-accent font-sans"
      />
    </div>
  );
};
