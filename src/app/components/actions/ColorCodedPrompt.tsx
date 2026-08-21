import React, { useState } from 'react';
import { 
  User, Activity, Trees, CloudSun, SunMedium, Shirt, Scan, Sparkles, ShieldAlert, Copy, Check, Info, Eye, EyeOff, Edit2, X, CheckSquare, Square
} from 'lucide-react';
import { 
  PromptSegment, 
  parsePromptSections, 
  tokenizePromptText,
  PromptSectionType,
  filterPromptBySegmentIds 
} from '../../../lib/promptColorizer';

interface ColorCodedPromptProps {
  promptText: string;
  onCopyText: (key: string, text: string) => void;
  copiedMap: Record<string, boolean>;
  enabledSegmentIds?: Record<string, boolean>;
  onToggleSegment?: (segmentId: string, enabled: boolean) => void;
  onChangePromptText?: (newPromptText: string) => void;
  showFilterToolbar?: boolean;
}

export const ColorCodedPrompt: React.FC<ColorCodedPromptProps> = ({
  promptText,
  onCopyText,
  copiedMap,
  enabledSegmentIds: externalEnabledSegmentIds,
  onToggleSegment: externalOnToggleSegment,
  onChangePromptText,
  showFilterToolbar = true
}) => {
  const [highlightTokens, setHighlightTokens] = useState(true);
  const [internalEnabledSegmentIds, setInternalEnabledSegmentIds] = useState<Record<string, boolean>>({});
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingDraft, setEditingDraft] = useState<string>('');

  const segments: PromptSegment[] = parsePromptSections(promptText);

  const enabledSegmentIds = externalEnabledSegmentIds || internalEnabledSegmentIds;

  const toggleSegment = (segmentId: string, enabled: boolean) => {
    if (externalOnToggleSegment) {
      externalOnToggleSegment(segmentId, enabled);
    } else {
      setInternalEnabledSegmentIds(prev => ({ ...prev, [segmentId]: enabled }));
    }
  };

  const handleSelectAll = () => {
    const nextMap: Record<string, boolean> = {};
    segments.forEach(s => { nextMap[s.id] = true; });
    if (externalOnToggleSegment) {
      segments.forEach(s => externalOnToggleSegment(s.id, true));
    } else {
      setInternalEnabledSegmentIds(nextMap);
    }
  };

  const handleDeselectAll = () => {
    const nextMap: Record<string, boolean> = {};
    segments.forEach(s => { nextMap[s.id] = false; });
    if (externalOnToggleSegment) {
      segments.forEach(s => externalOnToggleSegment(s.id, false));
    } else {
      setInternalEnabledSegmentIds(nextMap);
    }
  };

  const handleCopyFilteredPrompt = () => {
    const filteredText = filterPromptBySegmentIds(segments, enabledSegmentIds);
    onCopyText('filtered_master_prompt', filteredText);
  };

  const handleStartEdit = (idx: number, currentText: string) => {
    setEditingIndex(idx);
    setEditingDraft(currentText);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditingDraft('');
  };

  const handleSaveEdit = (idx: number) => {
    if (!onChangePromptText) {
      setEditingIndex(null);
      return;
    }
    const updatedSegments = [...segments];
    const trimmed = editingDraft.trim();
    if (trimmed) {
      updatedSegments[idx] = {
        ...updatedSegments[idx],
        text: trimmed
      };
    } else {
      // Remove empty segment
      updatedSegments.splice(idx, 1);
    }
    const newFullPrompt = updatedSegments.map(s => s.text).filter(Boolean).join('\n');
    onChangePromptText(newFullPrompt);
    setEditingIndex(null);
    setEditingDraft('');
  };

  const getSectionStyle = (type: PromptSectionType, isEnabled: boolean) => {
    if (!isEnabled) {
      return {
        container: 'bg-lavender-surface/10 border-lavender-border/20 opacity-50',
        badgeBg: 'bg-lavender-surface/40 text-lavender-text/50 border-lavender-border/30',
        textColor: 'text-lavender-text/50 line-through decoration-lavender-text/30',
        icon: <EyeOff size={13} className="text-lavender-text/40" />
      };
    }

    switch (type) {
      case 'character':
        return {
          container: 'bg-purple-950/25 border-purple-500/35 hover:border-purple-400/50',
          badgeBg: 'bg-purple-900/60 text-purple-200 border-purple-400/50',
          textColor: 'text-purple-100/90',
          icon: <User size={13} className="text-purple-300" />
        };
      case 'action':
        return {
          container: 'bg-fuchsia-950/25 border-fuchsia-500/35 hover:border-fuchsia-400/50',
          badgeBg: 'bg-fuchsia-900/60 text-fuchsia-200 border-fuchsia-400/50',
          textColor: 'text-fuchsia-100/90',
          icon: <Activity size={13} className="text-fuchsia-300" />
        };
      case 'environment':
        return {
          container: 'bg-emerald-950/25 border-emerald-500/35 hover:border-emerald-400/50',
          badgeBg: 'bg-emerald-900/60 text-emerald-200 border-emerald-400/50',
          textColor: 'text-emerald-100/90',
          icon: <Trees size={13} className="text-emerald-300" />
        };
      case 'weather':
        return {
          container: 'bg-sky-950/25 border-sky-500/35 hover:border-sky-400/50',
          badgeBg: 'bg-sky-900/60 text-sky-200 border-sky-400/50',
          textColor: 'text-sky-100/90',
          icon: <CloudSun size={13} className="text-sky-300" />
        };
      case 'lighting':
        return {
          container: 'bg-amber-950/25 border-amber-500/35 hover:border-amber-400/50',
          badgeBg: 'bg-amber-900/60 text-amber-200 border-amber-400/50',
          textColor: 'text-amber-100/90',
          icon: <SunMedium size={13} className="text-amber-300" />
        };
      case 'clothing':
        return {
          container: 'bg-orange-950/25 border-orange-500/35 hover:border-orange-400/50',
          badgeBg: 'bg-orange-900/60 text-orange-200 border-orange-400/50',
          textColor: 'text-orange-100/90',
          icon: <Shirt size={13} className="text-orange-300" />
        };
      case 'framing':
        return {
          container: 'bg-indigo-950/25 border-indigo-500/35 hover:border-indigo-400/50',
          badgeBg: 'bg-indigo-900/60 text-indigo-200 border-indigo-400/50',
          textColor: 'text-indigo-100/90',
          icon: <Scan size={13} className="text-indigo-300" />
        };
      case 'style':
        return {
          container: 'bg-cyan-950/25 border-cyan-500/35 hover:border-cyan-400/50',
          badgeBg: 'bg-cyan-900/60 text-cyan-200 border-cyan-400/50',
          textColor: 'text-cyan-100/90',
          icon: <Sparkles size={13} className="text-cyan-300" />
        };
      case 'fineart':
        return {
          container: 'bg-rose-950/25 border-rose-500/35 hover:border-rose-400/50',
          badgeBg: 'bg-rose-900/60 text-rose-200 border-rose-400/50',
          textColor: 'text-rose-100/90',
          icon: <ShieldAlert size={13} className="text-rose-300" />
        };
      default:
        return {
          container: 'bg-lavender-surface/30 border-lavender-border/40 hover:border-lavender-accent/40',
          badgeBg: 'bg-lavender-surface text-lavender-accent border-lavender-border',
          textColor: 'text-lavender-text',
          icon: <Info size={13} className="text-lavender-accent" />
        };
    }
  };

  const renderSegmentText = (text: string, isEnabled: boolean) => {
    if (!highlightTokens || !isEnabled) {
      return text;
    }

    const tokens = tokenizePromptText(text);
    return tokens.map((token, i) => {
      if (!token.highlightType) {
        return <span key={i}>{token.text}</span>;
      }
      switch (token.highlightType) {
        case 'character_name':
          return (
            <span key={i} className="font-bold text-purple-300 underline decoration-purple-400/40 decoration-1 underline-offset-2">
              {token.text}
            </span>
          );
        case 'environment_kw':
          return (
            <span key={i} className="font-semibold text-emerald-300">
              {token.text}
            </span>
          );
        case 'weather_kw':
          return (
            <span key={i} className="font-semibold text-sky-300">
              {token.text}
            </span>
          );
        case 'lighting_kw':
          return (
            <span key={i} className="font-semibold text-amber-300">
              {token.text}
            </span>
          );
        case 'clothing_kw':
          return (
            <span key={i} className="font-semibold text-orange-300">
              {token.text}
            </span>
          );
        case 'framing_kw':
          return (
            <span key={i} className="font-semibold text-indigo-300">
              {token.text}
            </span>
          );
        case 'style_kw':
          return (
            <span key={i} className="font-semibold text-cyan-300">
              {token.text}
            </span>
          );
        case 'rating_kw':
          return (
            <span key={i} className="font-semibold text-rose-300">
              {token.text}
            </span>
          );
        default:
          return <span key={i}>{token.text}</span>;
      }
    });
  };

  if (!promptText || promptText.trim().length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center p-6 text-lavender-text/50 text-xs italic">
        Prompt is empty
      </div>
    );
  }

  const enabledCount = segments.filter(s => enabledSegmentIds[s.id] !== false).length;

  return (
    <div className="flex-1 flex flex-col min-h-0 space-y-2">
      {/* FILTER TOOLBAR WITH INDIVIDUAL SECTION SUMMARY & QUICK ACTIONS */}
      <div className="flex flex-col gap-2 px-3 py-2 bg-lavender-bg/80 border border-lavender-border/50 rounded-xl text-[11px] flex-shrink-0 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-lavender-accent flex items-center gap-1 shrink-0">
              <Info size={12} className="text-lavender-accent" />
              <span>Section Filters ({enabledCount}/{segments.length} included):</span>
            </span>

            {/* QUICK SELECTION BUTTONS */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleSelectAll}
                className="px-2 py-0.5 text-[10px] font-semibold bg-lavender-surface hover:bg-lavender-border text-lavender-accent border border-lavender-border/60 rounded flex items-center gap-1 cursor-pointer transition-colors"
                title="Include all sections in prompt"
              >
                <CheckSquare size={11} className="text-emerald-400" />
                <span>Select All</span>
              </button>
              <button
                type="button"
                onClick={handleDeselectAll}
                className="px-2 py-0.5 text-[10px] font-semibold bg-lavender-surface hover:bg-lavender-border text-lavender-text/70 hover:text-rose-300 border border-lavender-border/60 rounded flex items-center gap-1 cursor-pointer transition-colors"
                title="Deselect all sections"
              >
                <Square size={11} className="text-lavender-text/50" />
                <span>Clear All</span>
              </button>
            </div>
          </div>

          {/* TOKEN HIGHLIGHT TOGGLE */}
          <div className="flex items-center gap-2">
            <label className="flex items-center gap-1.5 text-lavender-text/80 cursor-pointer select-none text-[11px]">
              <input
                type="checkbox"
                checked={highlightTokens}
                onChange={(e) => setHighlightTokens(e.target.checked)}
                className="rounded border-lavender-border text-purple-500 focus:ring-purple-400 h-3 w-3 cursor-pointer accent-purple-500"
              />
              <span>Keyword Highlighting</span>
            </label>
          </div>
        </div>
      </div>

      {/* SEGMENTED PARAGRAPHS LIST (EACH SECTION HAS AN INDIVIDUAL CHECKBOX) */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1 min-h-[260px]">
        {segments.map((seg, idx) => {
          const isEnabled = enabledSegmentIds[seg.id] !== false;
          const style = getSectionStyle(seg.type, isEnabled);
          const copyKey = `seg_${seg.id}_${idx}`;
          const isEditing = editingIndex === idx;

          return (
            <div
              key={seg.id || idx}
              className={`p-3 rounded-lg border transition-all ${style.container}`}
            >
              {/* SEGMENT HEADER WITH INDIVIDUAL CHECKBOX */}
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  {/* INDIVIDUAL SECTION CHECKBOX */}
                  <label 
                    className="flex items-center gap-1.5 cursor-pointer select-none"
                    title={isEnabled ? "Uncheck to exclude this section from prompt" : "Check to include this section in prompt"}
                  >
                    <input
                      type="checkbox"
                      checked={isEnabled}
                      onChange={(e) => toggleSegment(seg.id, e.target.checked)}
                      className="rounded border-lavender-border text-purple-500 focus:ring-purple-400 h-3.5 w-3.5 cursor-pointer accent-purple-500"
                    />
                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-bold border ${style.badgeBg}`}>
                      {style.icon}
                      {seg.label}
                    </span>
                  </label>

                  {!isEnabled && !isEditing && (
                    <span className="text-[10px] text-lavender-text/50 font-medium italic">
                      (Excluded from copied prompt)
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5">
                  {/* EDIT SECTION BUTTON */}
                  {!isEditing && (
                    <button
                      onClick={() => handleStartEdit(idx, seg.text)}
                      className="px-2 py-0.5 text-[11px] font-medium text-lavender-accent hover:text-white bg-lavender-surface/50 hover:bg-lavender-surface border border-lavender-border/40 hover:border-lavender-accent rounded flex items-center gap-1 transition-colors cursor-pointer"
                      title="Edit this section of the prompt"
                    >
                      <Edit2 size={11} className="text-lavender-accent" />
                      <span>Edit</span>
                    </button>
                  )}

                  {/* TOGGLE EXCLUDE / INCLUDE */}
                  {!isEditing && (
                    <button
                      onClick={() => toggleSegment(seg.id, !isEnabled)}
                      className="px-1.5 py-0.5 text-[10px] text-lavender-text/60 hover:text-lavender-accent rounded border border-lavender-border/30 hover:border-lavender-accent/40 flex items-center gap-1 cursor-pointer"
                      title={isEnabled ? "Disable this section from prompt" : "Enable this section in prompt"}
                    >
                      {isEnabled ? <Eye size={10} /> : <EyeOff size={10} />}
                      <span>{isEnabled ? "Included" : "Excluded"}</span>
                    </button>
                  )}

                  {/* COPY SINGLE SECTION BUTTON */}
                  <button
                    onClick={() => onCopyText(copyKey, isEditing ? editingDraft : seg.text)}
                    className="p-1 text-lavender-text/60 hover:text-lavender-accent hover:bg-lavender-surface/60 rounded transition-colors cursor-pointer"
                    title="Copy this section to clipboard"
                  >
                    {copiedMap[copyKey] ? (
                      <Check size={12} className="text-emerald-400" />
                    ) : (
                      <Copy size={12} />
                    )}
                  </button>
                </div>
              </div>

              {/* SEGMENT CONTENT (TEXT OR EDIT TEXTAREA) */}
              {isEditing ? (
                <div className="mt-2 flex flex-col gap-2">
                  <div className="relative">
                    <textarea
                      value={editingDraft}
                      onChange={(e) => setEditingDraft(e.target.value)}
                      onKeyDown={(e) => {
                        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                          handleSaveEdit(idx);
                        } else if (e.key === 'Escape') {
                          handleCancelEdit();
                        }
                      }}
                      rows={Math.max(3, Math.min(8, Math.ceil(editingDraft.length / 65) + 1))}
                      className="w-full p-2.5 pr-8 text-xs md:text-sm font-mono bg-lavender-bg border border-lavender-accent/60 rounded-md text-lavender-text focus:outline-none focus:ring-1 focus:ring-lavender-accent resize-y selection:bg-purple-800 selection:text-white leading-relaxed"
                      placeholder="Edit this prompt section..."
                      autoFocus
                    />
                    <button
                      onClick={() => onCopyText(`edit_${idx}`, editingDraft)}
                      className="absolute top-2.5 right-2.5 p-1 text-lavender-text/60 hover:text-lavender-accent hover:bg-lavender-surface rounded transition-colors"
                      title="Copy current edit text"
                    >
                      {copiedMap[`edit_${idx}`] ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    <span className="text-[11px] text-lavender-text/60">
                      Press <kbd className="px-1 py-0.5 text-[10px] bg-lavender-surface border border-lavender-border rounded text-lavender-accent">Ctrl+Enter</kbd> to save, <kbd className="px-1 py-0.5 text-[10px] bg-lavender-surface border border-lavender-border rounded text-lavender-accent">Esc</kbd> to cancel.
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleCancelEdit}
                        className="px-2.5 py-1 text-xs text-lavender-text/80 hover:text-rose-300 hover:bg-rose-950/30 border border-lavender-border/40 rounded flex items-center gap-1 transition-all cursor-pointer"
                        title="Cancel edits"
                      >
                        <X size={12} className="text-rose-400" />
                        Cancel
                      </button>
                      <button
                        onClick={() => handleSaveEdit(idx)}
                        className="px-3 py-1 text-xs font-semibold bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/60 text-emerald-200 rounded flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                        title="Save changes to this prompt section"
                      >
                        <Check size={12} className="text-emerald-400" />
                        Save Section
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p 
                  className={`text-xs md:text-sm font-mono leading-relaxed select-text cursor-text ${style.textColor}`}
                  onDoubleClick={() => handleStartEdit(idx, seg.text)}
                  title="Double-click or click Edit to modify this section"
                >
                  {renderSegmentText(seg.text, isEnabled)}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

