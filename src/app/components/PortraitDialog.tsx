import React, { useState } from 'react';
import { Dialog } from './Dialog';
import { PortraitPrompts, PortraitType } from '../../types';
import { Check, User, FileText, Download, Wand2, Copy, Sparkles } from 'lucide-react';
import { cn } from '../../lib/utils';
import { MarkdownView } from './MarkdownView';
import { SINGERS_DETAILED, getSingerDetailedById } from '../../constants/singersDetailed';

interface PortraitDialogProps {
  isOpen: boolean;
  onClose: () => void;
  type: PortraitType;
  prompts?: PortraitPrompts;
  onRegenerate?: (type: PortraitType) => void;
}

type Tab = 'miranda' | 'annelies' | 'fannie' | 'emma' | 'summary';

export const PortraitDialog: React.FC<PortraitDialogProps> = ({
  isOpen,
  onClose,
  type,
  prompts,
  onRegenerate
}) => {
  const [activeTab, setActiveTab] = useState<Tab>('miranda');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const tabs: { id: Tab; label: string; icon: React.ReactNode; badgeClass: string }[] = [
    { id: 'miranda', label: 'Miranda Noor', icon: <span className="text-sm">🌊</span>, badgeClass: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
    { id: 'annelies', label: 'Annelies Brink', icon: <span className="text-sm">☀️</span>, badgeClass: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
    { id: 'fannie', label: 'Fannie de Jong', icon: <span className="text-sm">🦨</span>, badgeClass: 'text-purple-400 bg-purple-500/10 border-purple-500/20' },
    { id: 'emma', label: 'Emma Vermeer', icon: <span className="text-sm">🌿</span>, badgeClass: 'text-red-400 bg-red-500/10 border-red-500/20' },
    { id: 'summary', label: 'Summary', icon: <FileText size={11} />, badgeClass: 'text-lavender-accent bg-lavender-accent/10 border-lavender-accent/20' },
  ];

  const getPromptForSinger = (singerId: string): string => {
    const singerData = getSingerDetailedById(singerId);
    if (!singerData) return '';
    if (type === 'Face') return singerData.Face || '';
    if (type === 'Torso') return singerData.Torso || '';
    if (type === 'Body') return singerData.Body || '';
    return singerData.Base || '';
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const generateMarkdown = () => {
    const singers = [
      { id: 'miranda', label: 'Miranda Noor' },
      { id: 'annelies', label: 'Annelies Brink' },
      { id: 'fannie', label: 'Fannie de Jong' },
      { id: 'emma', label: 'Emma Vermeer' }
    ];

    let md = `# Singer ${type} Portrait Prompts (Noor Music Dataset)\n\n`;
    md += `*Preset character prompts sourced directly from the Singers Detailed Character Dataset (v1.0.0).*\n\n`;
    
    singers.forEach(s => {
      const p = getPromptForSinger(s.id);
      const detail = getSingerDetailedById(s.id);
      md += `## ${s.label} - ${detail?.role || 'Singer'}\n\n`;
      md += `**${type} Portrait Prompt:**\n\n\`\`\`text\n${p}\n\`\`\`\n\n`;
      if (detail) {
        md += `**Physical Profile Summary:**\n`;
        md += `- **Build:** ${detail.appearance.build}\n`;
        md += `- **Skin Tone:** ${detail.appearance.skinColor}\n`;
        md += `- **Hair Style:** ${detail.appearance.hairColorStyle}\n`;
        md += `- **Eye Color:** ${detail.appearance.eyeColor}\n\n`;
      }
    });

    return md;
  };

  const handleDownload = () => {
    const md = generateMarkdown();
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${type}_Portraits.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const renderSingerSection = (singerId: string) => {
    const singerData = getSingerDetailedById(singerId);
    const promptText = getPromptForSinger(singerId);
    if (!singerData) return null;

    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
        {/* Character Overview Card */}
        <div className="bg-lavender-surface/40 border border-lavender-border rounded p-4 flex flex-wrap gap-4 items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-lavender-accent flex items-center gap-2">
              <User size={18} />
              {singerData.name}
            </h3>
            <p className="text-xs text-lavender-text/70">{singerData.role}</p>
          </div>
          <div className="flex flex-wrap gap-3 text-xs">
            <span className="px-2 py-1 bg-black/30 border border-lavender-border rounded">
              <strong className="text-lavender-accent">Hair:</strong> {singerData.appearance.hairColorStyle}
            </span>
            <span className="px-2 py-1 bg-black/30 border border-lavender-border rounded">
              <strong className="text-lavender-accent">Eyes:</strong> {singerData.appearance.eyeColor}
            </span>
            <span className="px-2 py-1 bg-black/30 border border-lavender-border rounded">
              <strong className="text-lavender-accent">Skin:</strong> {singerData.appearance.skinColor}
            </span>
          </div>
        </div>

        {/* Prompt Card */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-lavender-accent flex items-center gap-2">
              <Sparkles size={16} />
              {type} Portrait AI Generation Prompt
            </h4>
            <button
              onClick={() => handleCopy(promptText, singerId)}
              className="flex items-center gap-1.5 px-3 py-1 bg-lavender-surface hover:bg-lavender-accent hover:text-lavender-bg border border-lavender-border text-xs rounded transition-all font-bold"
            >
              {copiedKey === singerId ? (
                <>
                  <Check size={13} className="text-emerald-400" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={13} />
                  Copy Prompt
                </>
              )}
            </button>
          </div>

          <div className="relative group">
            <textarea
              readOnly
              value={promptText}
              className="w-full h-48 bg-black/50 border border-lavender-border rounded p-4 text-sm focus:ring-1 focus:ring-lavender-accent outline-none resize-none font-mono text-lavender-text leading-relaxed"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={onClose}
      title={`${type} Portraits`}
      size="full"
    >
      <div className="flex flex-col h-full bg-lavender-bg/40">
        {/* Header Actions */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-lavender-border bg-lavender-surface/30">
          <div className="flex items-center gap-2 text-xs text-lavender-text/70">
            <Sparkles size={14} className="text-lavender-accent" />
            <span>Character prompts sourced from <strong>Singers Detailed Dataset</strong></span>
          </div>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-1.5 border border-lavender-accent text-lavender-accent rounded font-bold hover:bg-lavender-accent hover:text-lavender-bg transition-all text-sm"
          >
            <Download size={16} />
            Download {type} Summary
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-lavender-border bg-lavender-surface/20 flex-wrap">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all relative",
                  isActive
                    ? "text-lavender-accent bg-lavender-accent/5 font-extrabold"
                    : "text-lavender-text/50 hover:text-lavender-text hover:bg-lavender-surface/30"
                )}
              >
                <span className={cn(
                  "inline-flex items-center justify-center p-1 rounded-md border text-[10px] shrink-0 transition-all",
                  isActive ? "bg-lavender-accent text-black border-transparent" : tab.badgeClass
                )}>
                  {tab.icon}
                </span>
                {tab.label}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-lavender-accent" />
                )}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          {activeTab === 'miranda' && renderSingerSection('miranda')}
          {activeTab === 'annelies' && renderSingerSection('annelies')}
          {activeTab === 'fannie' && renderSingerSection('fannie')}
          {activeTab === 'emma' && renderSingerSection('emma')}
          {activeTab === 'summary' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="bg-black/40 border border-lavender-border rounded p-6 h-[65vh] overflow-hidden">
                <MarkdownView content={generateMarkdown()} filename={`${type}_Portraits`} />
              </div>
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
};
