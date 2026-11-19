import React, { useState, useMemo } from 'react';
import { 
  Sparkles, Image as ImageIcon, Copy, Check, Edit3, Save, X, RotateCcw, 
  Layers, ArrowLeft, Wand2, History, Trash2, ArrowRight, Palette, CheckCheck
} from 'lucide-react';
import { 
  stripLineBreaksForCopy, 
  cleanAndStructurePrompt, 
  DEFAULT_CLEAN_REMIX_INSTRUCTIONS, 
  fixPromptForWanSafety,
  MAX_REMIX_HISTORY 
} from '../../../lib/remixHelper';
import { getImageStyleById } from '../../../constants/imageStyles';
import { StyleTreeDropdown } from './StyleTreeDropdown';
import { RemixSuggestionsDropdown } from './RemixSuggestionsDropdown';
import { 
  RemixSuggestionItem, 
  SUGGESTION_CLEAN_REORGANIZE, 
  SUGGESTION_FIX_WAN_SAFETY 
} from '../../../constants/remixSuggestions';

interface Step9RemixProps {
  currentFilteredPrompt: string;
  remixHistory: string[];
  activeHistoryIndex: number;
  onSelectHistoryIndex: (index: number) => void;
  onSaveManualRemixPrompt: (editedPrompt: string) => void;
  onGenerateRemixPrompt: (instructions: string, basePrompt: string) => void;
  loadingRemixPrompt: boolean;
  onGenerateRemixImage: (prompt: string) => void;
  loadingImage: boolean;
  onGoToImage?: () => void;
  hasGeneratedImage?: boolean;
  onBackToPrompt: () => void;
  onCopyText: (key: string, text: string) => void;
  copiedMap: Record<string, boolean>;
  onClearRemixHistory?: () => void;
  sceneTitle?: string;
  remixError?: string | null;
  onClearError?: () => void;
  selectedStyleCategory?: string;
  onSelectStyleCategory?: (category: string) => void;
  selectedStyle?: string;
  onSelectStyle?: (styleId: string) => void;
}

const QUICK_REMIX_SUGGESTIONS = [
  '🧹 Clean & organize prompt (visible only, proper order & line breaks)',
  '🛡️ Fix prompt for WAN 2.1 Video (Resolve "Invalid content" / Safety error)',
  '👙 Reduce clothes to lightweight summer beachwear and bikini',
  '🕶️ Remove all hats, glasses, jewelry, and accessories',
  '👣 Remove shoes and socks for natural barefoot appearance',
  '🌅 Add golden sunset light with warm rim glow',
  '🌾 Enhance the meadow background with wild summer flowers',
  '😄 Show Miranda and Annelies sharing a warm joyful smile',
  '👗 Switch wardrobes to breezy sheer white linen sundresses',
  '📷 Shift camera framing to a cinematic low-angle wide shot',
  '🌧️ Add gentle misty morning rain with soft atmospheric haze'
];

export const Step9Remix: React.FC<Step9RemixProps> = ({
  currentFilteredPrompt,
  remixHistory,
  activeHistoryIndex,
  onSelectHistoryIndex,
  onSaveManualRemixPrompt,
  onGenerateRemixPrompt,
  loadingRemixPrompt,
  onGenerateRemixImage,
  loadingImage,
  onGoToImage,
  hasGeneratedImage = false,
  onBackToPrompt,
  onCopyText,
  copiedMap,
  onClearRemixHistory,
  sceneTitle,
  remixError,
  onClearError,
  selectedStyleCategory = 'Master Artists & Movements',
  onSelectStyleCategory,
  selectedStyle = 'photo_realistic',
  onSelectStyle
}) => {
  const [isEditingPrompt, setIsEditingPrompt] = useState(false);
  const [editDraft, setEditDraft] = useState('');
  const [commandInstructions, setCommandInstructions] = useState('');

  const currStyle = useMemo(() => {
    return getImageStyleById(selectedStyle);
  }, [selectedStyle]);

  // Active prompt to display
  const activePromptText = remixHistory[activeHistoryIndex] || currentFilteredPrompt || '';

  const handleStartEdit = () => {
    setEditDraft(activePromptText);
    setIsEditingPrompt(true);
  };

  const handleCancelEdit = () => {
    setIsEditingPrompt(false);
    setEditDraft('');
  };

  const handleSaveEdit = () => {
    const trimmed = editDraft.trim();
    if (trimmed) {
      onSaveManualRemixPrompt(trimmed);
    }
    setIsEditingPrompt(false);
  };

  const handleCopyCleanPrompt = () => {
    const cleanPrompt = stripLineBreaksForCopy(activePromptText);
    onCopyText('remix_clean_prompt', cleanPrompt);
  };

  const handleDefaultCleanRemix = () => {
    if (loadingRemixPrompt) return;
    const baseToClean = activePromptText || currentFilteredPrompt || '';
    if (!baseToClean.trim()) return;

    if (onClearError) onClearError();
    // 1. Immediately apply deterministic clean & structure (0ms responsiveness)
    const cleaned = cleanAndStructurePrompt(baseToClean);
    onSaveManualRemixPrompt(cleaned);

    // 2. Also trigger standard remix prompt job for queue and logging
    onGenerateRemixPrompt(DEFAULT_CLEAN_REMIX_INSTRUCTIONS, baseToClean);
  };

  const handleWanSafetyFix = () => {
    if (loadingRemixPrompt) return;
    const baseToFix = activePromptText || currentFilteredPrompt || '';
    if (!baseToFix.trim()) return;

    if (onClearError) onClearError();
    // 1. Immediately sanitize and fix prompt for WAN 2.1 Video
    const wanSafe = fixPromptForWanSafety(baseToFix);
    onSaveManualRemixPrompt(wanSafe);

    // 2. Also trigger standard remix prompt job for queue and logging
    onGenerateRemixPrompt(
      'Fix prompt for WAN 2.1 Video generator: neutralize any sensitive phrasing, remove ambiguous anatomy terms, strip all non-visible meta descriptions, and reformat into safe cinematic photorealistic video prompt syntax.',
      baseToFix
    );
  };

  const handleSyncFilteredPrompt = () => {
    if (!currentFilteredPrompt || !currentFilteredPrompt.trim()) return;
    if (onClearError) onClearError();
    onSaveManualRemixPrompt(currentFilteredPrompt);
  };

  const handleApplyAiRemix = () => {
    if (loadingRemixPrompt) return;
    const trimmedInstructions = commandInstructions.trim();
    if (!trimmedInstructions) return;
    if (onClearError) onClearError();
    onGenerateRemixPrompt(trimmedInstructions, activePromptText);
    setCommandInstructions('');
  };

  const handleSelectQuickSuggestion = (suggestion: string) => {
    if (suggestion.includes('Clean & organize')) {
      handleDefaultCleanRemix();
      return;
    }
    if (suggestion.includes('Fix prompt for WAN')) {
      handleWanSafetyFix();
      return;
    }
    // Strip leading emoji
    const cleanText = suggestion.replace(/^[\p{Emoji}\s]+/gu, '').trim();
    setCommandInstructions(prev => prev ? `${prev}\n${cleanText}` : cleanText);
  };

  const handleSelectSuggestionItem = (item: RemixSuggestionItem, applyImmediately = false) => {
    if (onClearError) onClearError();

    if (item.label === SUGGESTION_CLEAN_REORGANIZE) {
      if (applyImmediately) {
        handleDefaultCleanRemix();
      } else {
        setCommandInstructions(prev => prev ? `${prev}\n${item.command}` : item.command);
      }
      return;
    }

    if (item.label === SUGGESTION_FIX_WAN_SAFETY) {
      if (applyImmediately) {
        handleWanSafetyFix();
      } else {
        setCommandInstructions(prev => prev ? `${prev}\n${item.command}` : item.command);
      }
      return;
    }

    if (applyImmediately) {
      onGenerateRemixPrompt(item.command, activePromptText || currentFilteredPrompt || '');
    } else {
      setCommandInstructions(prev => prev ? `${prev}\n${item.command}` : item.command);
    }
  };

  const handleSelectTreeStyle = (styleId: string, category: string) => {
    if (onSelectStyleCategory) {
      onSelectStyleCategory(category);
    }
    if (onSelectStyle) {
      onSelectStyle(styleId);
    }
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 h-full">
      {/* ERROR BANNER IF REMIX JOB FAILED */}
      {remixError && (
        <div className="mb-2 p-2.5 rounded-lg bg-red-950/60 border border-red-500/50 text-xs text-red-200 flex items-center justify-between shrink-0 shadow-sm animate-shake">
          <div className="flex items-center gap-2">
            <span className="text-red-400 font-bold">Remix Error:</span>
            <span>{remixError}</span>
          </div>
          {onClearError && (
            <button
              onClick={onClearError}
              className="text-red-400 hover:text-red-200 px-1.5 py-0.5 rounded hover:bg-red-900/40 cursor-pointer text-xs"
              title="Dismiss error"
            >
              ✕
            </button>
          )}
        </div>
      )}

      {/* TOP CONTROLS & METADATA BAR */}
      <div className="flex items-center justify-between flex-wrap gap-2 px-3 py-1.5 mb-2 bg-lavender-surface/50 rounded-lg border border-lavender-border/60 shrink-0">
        <div className="flex items-center gap-2.5 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs font-bold text-lavender-accent uppercase tracking-wider">
            <Sparkles size={14} className="text-purple-400" />
            <span>Remix Studio</span>
          </div>

          {sceneTitle && (
            <span className="text-[11px] font-semibold text-purple-200 bg-lavender-bg px-2 py-0.5 rounded border border-lavender-border/60 max-w-xs truncate">
              {sceneTitle}
            </span>
          )}

          {loadingRemixPrompt && (
            <span className="text-[11px] text-amber-300 font-semibold flex items-center gap-1 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-500/30 animate-pulse">
              <Sparkles size={11} className="animate-spin text-amber-300" />
              AI Remixing Scene Prompt...
            </span>
          )}
        </div>

        {/* WORKFLOW NAVIGATION SHORTCUTS */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onBackToPrompt}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-lavender-text/80 bg-lavender-bg hover:bg-lavender-surface hover:text-lavender-accent rounded border border-lavender-border transition-colors cursor-pointer"
            title="Return to Step 8 Prompt"
          >
            <ArrowLeft size={12} />
            <span>Prompt Tab</span>
          </button>

          {hasGeneratedImage && onGoToImage && (
            <button
              type="button"
              onClick={onGoToImage}
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/60 rounded border border-emerald-500/40 transition-colors cursor-pointer"
              title="Jump to Step 10 Image View"
            >
              <ImageIcon size={12} />
              <span>View Artwork</span>
              <ArrowRight size={12} />
            </button>
          )}
        </div>
      </div>

      {/* ARTISTIC STYLE TREEVIEW & PROMPT SUGGESTIONS LISTBOX (REMIX EXCLUSIVE) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 px-3 py-2 mb-2 bg-lavender-surface/60 rounded-lg border border-lavender-border/70 shrink-0 relative z-30">
        {/* COMBINED CATEGORY & STYLE TREEVIEW DROPDOWN */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label className="text-[11px] font-bold text-emerald-300 flex items-center gap-1.5">
              <Palette size={13} className="text-emerald-400" />
              <span>Artistic Category &amp; Style Tree</span>
            </label>
            <span className="text-[10px] font-normal text-lavender-text/60 italic">
              Combined category treeview
            </span>
          </div>
          <StyleTreeDropdown
            selectedStyleId={selectedStyle}
            onSelectStyle={handleSelectTreeStyle}
            disabled={loadingRemixPrompt}
          />
        </div>

        {/* PROMPT SUGGESTIONS LISTBOX DROPDOWN (WAN FIX, WARDROBE, LIGHTING, ATMOSPHERE) */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <label className="text-[11px] font-bold text-purple-300 flex items-center gap-1.5">
              <Wand2 size={13} className="text-purple-400" />
              <span>Prompt Suggestions</span>
            </label>
            <span className="text-[10px] font-normal text-lavender-text/60 italic">
              Clean, WAN fix, wardrobe, lighting...
            </span>
          </div>
          <RemixSuggestionsDropdown
            onSelectSuggestion={handleSelectSuggestionItem}
            disabled={loadingRemixPrompt}
          />
        </div>
      </div>

      {/* MAIN WORKSPACE GRID: SIDE BUTTON BAR (0-9) + CENTER REMIX DISPLAY & COMMAND INPUT */}
      <div className="flex-1 flex gap-2.5 min-h-0 overflow-hidden">
        {/* SIDE BUTTON BAR: HISTORY NUMBERS 0 TO 9 */}
        <div className="w-16 shrink-0 flex flex-col items-center bg-lavender-surface/60 rounded-lg border border-lavender-border/70 p-1.5 overflow-y-auto custom-scrollbar">
          <div className="flex items-center justify-center gap-1 text-[10px] font-bold text-lavender-text/70 uppercase tracking-wider mb-1 w-full text-center border-b border-lavender-border/40 pb-1">
            <History size={11} className="text-purple-400" />
            <span>Slots</span>
          </div>

          <div className="flex-1 flex flex-col gap-1 w-full">
            {Array.from({ length: MAX_REMIX_HISTORY }).map((_, index) => {
              const hasEntry = index < remixHistory.length;
              const isActive = index === activeHistoryIndex;
              const previewSnippet = hasEntry ? remixHistory[index].slice(0, 80) + '...' : 'Empty slot';

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    if (hasEntry) {
                      onSelectHistoryIndex(index);
                    }
                  }}
                  disabled={!hasEntry}
                  className={`w-full py-1.5 px-1 rounded flex flex-col items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-purple-600 text-white shadow-md ring-1 ring-purple-300'
                      : hasEntry
                      ? 'bg-lavender-bg hover:bg-purple-900/40 text-lavender-accent border border-lavender-border/80'
                      : 'bg-lavender-bg/30 text-lavender-text/30 border border-lavender-border/20 cursor-not-allowed'
                  }`}
                  title={`Remix #${index}: ${previewSnippet}`}
                >
                  <span className="text-xs leading-none">{index}</span>
                  {hasEntry && (
                    <span className="text-[8px] font-normal text-lavender-text/60 leading-none mt-0.5">
                      {index === 0 ? 'Latest' : `#${index}`}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {remixHistory.length > 0 && onClearRemixHistory && (
            <button
              type="button"
              onClick={onClearRemixHistory}
              className="mt-1 p-1 text-lavender-text/40 hover:text-red-400 hover:bg-red-950/40 rounded transition-colors cursor-pointer"
              title="Clear Remix History"
            >
              <Trash2 size={12} />
            </button>
          )}
        </div>

        {/* MAIN REMIX WORKSPACE: TOP (FILTERED REMIX PROMPT) + BOTTOM (COMMAND PROMPT) */}
        <div className="flex-1 flex flex-col gap-2 min-h-0 overflow-hidden">
          {/* TOP PANEL: THE REMIX PROMPT (FILTERED PROMPT WITH LINE BREAKS) */}
          <div className="flex-1 flex flex-col min-h-0 bg-lavender-surface/80 rounded-lg border border-lavender-border/80 p-2.5 shadow-sm overflow-hidden">
            {/* PANEL HEADER */}
            <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-lavender-border/50 shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-lavender-text flex items-center gap-1.5">
                  <Layers size={13} className="text-indigo-400" />
                  <span>Filtered Remix Prompt</span>
                </span>
                <span className="text-[10px] text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
                  Iteration #{activeHistoryIndex} of {Math.max(1, remixHistory.length)}
                </span>
                {currStyle && (
                  <span className="hidden sm:inline-block text-[10px] text-emerald-300 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30 truncate max-w-xs">
                    Style: {currStyle.label}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5">
                {isEditingPrompt ? (
                  <>
                    <button
                      type="button"
                      onClick={handleSaveEdit}
                      className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded transition-colors cursor-pointer"
                      title="Save edited remix prompt as new iteration"
                    >
                      <Save size={12} />
                      <span>Save</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      className="flex items-center gap-1 px-2 py-1 text-xs font-semibold text-lavender-text/70 hover:text-lavender-text bg-lavender-bg rounded border border-lavender-border transition-colors cursor-pointer"
                      title="Cancel manual edit"
                    >
                      <X size={12} />
                      <span>Cancel</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={handleSyncFilteredPrompt}
                      disabled={!currentFilteredPrompt || currentFilteredPrompt.trim() === activePromptText.trim()}
                      className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-purple-200 bg-purple-950/60 hover:bg-purple-900/80 rounded border border-purple-500/40 shadow-xs transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                      title="Copy latest filtered prompt from Step 8 Prompt tab into Remix"
                    >
                      <RotateCcw size={12} className="text-purple-300" />
                      <span>Sync Filtered</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleDefaultCleanRemix}
                      disabled={loadingRemixPrompt || !activePromptText.trim()}
                      className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-indigo-200 bg-indigo-950/70 hover:bg-indigo-900/90 rounded border border-indigo-500/50 shadow-xs transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                      title="Default Remix: Clean prompt, strip all non-visible data (voice registers like alto/soprano, unseen roles), and enforce canonical section order with line breaks"
                    >
                      <Sparkles size={12} className="text-indigo-400" />
                      <span>Default Clean</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleStartEdit}
                      className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-lavender-text/80 bg-lavender-bg hover:bg-lavender-surface hover:text-lavender-accent rounded border border-lavender-border transition-colors cursor-pointer"
                      title="Edit this remix prompt manually"
                    >
                      <Edit3 size={12} />
                      <span>Edit</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyCleanPrompt}
                      className={`flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded border transition-all cursor-pointer ${
                        copiedMap['remix_clean_prompt']
                          ? 'bg-emerald-950/70 text-emerald-300 border-emerald-500/50'
                          : 'bg-purple-950/60 text-purple-200 hover:bg-purple-900/80 border-purple-500/40 shadow-xs'
                      }`}
                      title="Copy continuous prompt to clipboard without line breaks"
                    >
                      {copiedMap['remix_clean_prompt'] ? (
                        <>
                          <Check size={12} className="text-emerald-400" />
                          <span>Copied (No Breaks)</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>Copy (No Breaks)</span>
                        </>
                      )}
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* REMIX PROMPT TEXT DISPLAY / EDIT AREA */}
            <div className="flex-1 min-h-0 relative overflow-hidden flex flex-col">
              {isEditingPrompt ? (
                <textarea
                  value={editDraft}
                  onChange={e => setEditDraft(e.target.value)}
                  className="w-full h-full p-2.5 bg-lavender-bg rounded border border-purple-500/60 text-lavender-text font-mono text-xs leading-relaxed resize-none focus:outline-none focus:ring-1 focus:ring-purple-400 custom-scrollbar"
                  placeholder="Enter or modify remix prompt..."
                  autoFocus
                />
              ) : (
                <div className="w-full h-full p-2.5 bg-lavender-bg/90 rounded border border-lavender-border/60 text-lavender-text font-mono text-xs leading-relaxed overflow-y-auto whitespace-pre-wrap select-text custom-scrollbar">
                  {activePromptText ? (
                    activePromptText
                  ) : (
                    <span className="text-lavender-text/40 italic">
                      No prompt generated yet. Return to Step 8 to synthesize or enter a remix prompt.
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* BOTTOM PANEL: MULTI-LINE COMMAND PROMPT & REMIX ACTIONS */}
          <div className="shrink-0 flex flex-col gap-1.5 bg-lavender-surface/80 rounded-lg border border-lavender-border/80 p-2.5 shadow-sm">
            {/* COMMAND PROMPT HEADER */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-lavender-accent">
                <Wand2 size={13} className="text-purple-400" />
                <span>AI Remix Commands</span>
                <span className="text-[10px] font-normal text-lavender-text/60">
                  (Instructions telling the AI how to refine the prompt with minimal changes)
                </span>
              </div>
            </div>

            {/* COMMAND TEXTAREA */}
            <div className="relative">
              <textarea
                value={commandInstructions}
                onChange={e => setCommandInstructions(e.target.value)}
                rows={2}
                disabled={loadingRemixPrompt}
                className="w-full px-2.5 py-1.5 bg-lavender-bg rounded border border-lavender-border/80 text-lavender-text text-xs leading-normal resize-none focus:outline-none focus:border-purple-500/80 custom-scrollbar placeholder:text-lavender-text/40"
                placeholder="E.g., Add warm golden sunset rim lighting, have Miranda smile warmly towards Annelies, and change the weather to a mild evening breeze..."
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleApplyAiRemix();
                  }
                }}
              />
            </div>

            {/* QUICK SUGGESTION CHIPS */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 custom-scrollbar">
              <span className="text-[10px] font-semibold text-lavender-text/50 shrink-0">Suggestions:</span>
              {QUICK_REMIX_SUGGESTIONS.map((sug, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectQuickSuggestion(sug)}
                  className="px-2 py-0.5 text-[10px] font-medium text-purple-200 bg-purple-950/40 hover:bg-purple-900/60 rounded border border-purple-500/30 whitespace-nowrap transition-colors cursor-pointer shrink-0"
                >
                  {sug}
                </button>
              ))}
            </div>

            {/* ACTION BUTTONS BAR */}
            <div className="flex items-center justify-between gap-2 pt-1 border-t border-lavender-border/40 mt-0.5">
              <div className="text-[10px] text-lavender-text/50">
                Press <kbd className="px-1.5 py-0.5 bg-lavender-bg rounded border border-lavender-border text-[10px] font-semibold text-purple-300">Enter</kbd> to execute immediately, <kbd className="px-1.5 py-0.5 bg-lavender-bg rounded border border-lavender-border text-[10px] font-semibold text-lavender-text/70">Shift+Enter</kbd> for new line
              </div>

              <div className="flex items-center gap-2">
                {/* DEFAULT CLEAN & ORDER ACTION BUTTON */}
                <button
                  type="button"
                  onClick={handleDefaultCleanRemix}
                  disabled={loadingRemixPrompt || !activePromptText.trim()}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-md border border-indigo-500/60 bg-indigo-950/70 hover:bg-indigo-900/90 text-indigo-200 shadow-xs transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Execute default remix: strip non-visible data, organize into canonical order, and apply clean line breaks"
                >
                  <Wand2 size={13} className="text-indigo-400" />
                  <span>Default Clean & Order</span>
                </button>

                {/* REMIX PROMPT WITH AI BUTTON */}
                <button
                  type="button"
                  onClick={handleApplyAiRemix}
                  disabled={!commandInstructions.trim() || loadingRemixPrompt}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-md shadow-xs transition-all cursor-pointer ${
                    !commandInstructions.trim() || loadingRemixPrompt
                      ? 'bg-lavender-bg text-lavender-text/40 border border-lavender-border/40 cursor-not-allowed'
                      : 'bg-purple-600 hover:bg-purple-500 text-white shadow-purple-900/30'
                  }`}
                  title="Generate remixed prompt with AI according to commands"
                >
                  <Sparkles size={13} className={loadingRemixPrompt ? 'animate-spin' : ''} />
                  <span>{loadingRemixPrompt ? 'Remixing Prompt...' : 'Apply AI Remix'}</span>
                </button>

                {/* GENERATE REMIX IMAGE BUTTON */}
                <button
                  type="button"
                  onClick={() => onGenerateRemixImage(activePromptText)}
                  disabled={!activePromptText.trim() || loadingImage}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-md shadow-xs transition-all cursor-pointer ${
                    !activePromptText.trim() || loadingImage
                      ? 'bg-lavender-bg text-lavender-text/40 border border-lavender-border/40 cursor-not-allowed'
                      : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/30'
                  }`}
                  title="Generate high-resolution scene image using this Remix prompt in the Image tab"
                >
                  <ImageIcon size={13} className={loadingImage ? 'animate-spin' : ''} />
                  <span>{loadingImage ? 'Generating Image...' : 'Generate Remix Image'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

