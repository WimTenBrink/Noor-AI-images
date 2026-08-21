import React, { useMemo } from 'react';
import { 
  Wand2, Dices, Copy, Check, RefreshCw, Compass, MapPin, Film, Sparkles, HelpCircle, Lock, Unlock, AlertCircle 
} from 'lucide-react';
import { ADVENTURE_CATEGORIES } from '../../../constants/adventuresData';
import { PREDEFINED_SCENES, getPredefinedScenesForLocation } from '../../../constants/predefinedScenes';

export interface LocationOptionItem {
  id: string;
  label: string;
  type: string;
  description: string;
}

interface Step2SceneProps {
  selectedAdventure: string;
  onSelectAdventure: (adv: string) => void;
  selectedLocation: string;
  onSelectLocation: (loc: string) => void;
  availableLocations: LocationOptionItem[];
  selectedPredefinedScene: string;
  onSelectPredefinedScene: (sceneId: string, sceneText: string) => void;
  mainSceneText: string;
  onChangeMainSceneText: (text: string) => void;
  onRandomizeMainScene: () => void;
  loadingScene: boolean;
  copiedMainScene: boolean;
  onCopyMainScene: () => void;
  isSceneLocked: boolean;
  onToggleSceneLocked: (locked: boolean) => void;
}

export const Step2Scene: React.FC<Step2SceneProps> = ({
  selectedAdventure,
  onSelectAdventure,
  selectedLocation,
  onSelectLocation,
  availableLocations,
  selectedPredefinedScene,
  onSelectPredefinedScene,
  mainSceneText,
  onChangeMainSceneText,
  onRandomizeMainScene,
  loadingScene,
  copiedMainScene,
  onCopyMainScene,
  isSceneLocked,
  onToggleSceneLocked
}) => {
  // Dynamically sort adventures at runtime alphabetically by label
  const sortedAdventures = useMemo(() => {
    return [...ADVENTURE_CATEGORIES].sort((a, b) => a.label.localeCompare(b.label));
  }, []);

  // Dynamically sort locations at runtime with 'none' first, then alphabetically
  const sortedLocations = useMemo(() => {
    const noneItem = availableLocations.find(l => l.id === 'none');
    const rest = availableLocations.filter(l => l.id !== 'none').sort((a, b) => a.label.localeCompare(b.label));
    return noneItem ? [noneItem, ...rest] : rest;
  }, [availableLocations]);

  // Dynamically fetch and sort predefined scenes for the active location at runtime
  const availableScenes = useMemo(() => {
    const rawScenes = getPredefinedScenesForLocation(selectedLocation);
    const sorted = [...rawScenes].sort((a, b) => a.label.localeCompare(b.label));
    return [
      { id: 'custom', label: '— Custom / Manual Scene —', text: '' },
      ...sorted
    ];
  }, [selectedLocation]);

  const currLoc = sortedLocations.find(l => l.id === selectedLocation);

  return (
    <div className="flex-1 flex flex-col space-y-4 min-h-0 overflow-y-auto pr-1">
      {/* HEADER BAR */}
      <div className="p-3 bg-lavender-surface/50 border border-lavender-border/70 rounded-xl flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-950/60 border border-indigo-500/40 flex items-center justify-center text-indigo-300">
            <Compass size={18} />
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-bold text-lavender-accent uppercase tracking-wider flex items-center gap-2">
              <span>Scene &amp; Setting</span>
              {isSceneLocked && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-950/70 border border-amber-500/40 text-amber-300 flex items-center gap-1">
                  <Lock size={11} />
                  <span>Listboxes Locked</span>
                </span>
              )}
            </h3>
            <p className="text-[11px] text-lavender-text/70">
              Select adventure theme, location, and scenes to automatically compose the scene background description.
            </p>
          </div>
        </div>

        {/* RANDOMIZE WITH AI BUTTON IN HEADER */}
        <button
          type="button"
          onClick={onRandomizeMainScene}
          disabled={loadingScene}
          className="px-3.5 py-2 text-xs font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-lg flex items-center gap-2 transition-all disabled:opacity-50 cursor-pointer shadow-md active:scale-95"
          title="Uses the current scene background text and rewrites it to improve it with AI, locking listboxes"
        >
          {loadingScene ? (
            <RefreshCw size={14} className="animate-spin text-amber-300" />
          ) : (
            <Dices size={14} className="text-amber-300" />
          )}
          <span>{loadingScene ? 'Improving Scene...' : 'Randomize'}</span>
        </button>
      </div>

      {/* 3 LISTBOX CONTROLS: ADVENTURE THEME, LOCATION SETTING & PREDEFINED SCENES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {/* 1. ADVENTURE THEME */}
        <div className={`p-3 rounded-xl border flex flex-col gap-1.5 transition-all ${
          isSceneLocked 
            ? 'bg-lavender-surface/15 border-lavender-border/30 opacity-70' 
            : 'bg-lavender-surface/30 border-lavender-border/50'
        }`}>
          <div className="flex items-center justify-between">
            <label className={`text-xs font-bold flex items-center gap-1.5 ${isSceneLocked ? 'text-lavender-text/60' : 'text-purple-300'}`}>
              <Compass size={14} className={isSceneLocked ? 'text-lavender-text/50' : 'text-purple-400'} />
              Adventure Theme
            </label>
            {isSceneLocked && <span title="Read-only while locked"><Lock size={12} className="text-amber-400/80" /></span>}
          </div>
          <select
            value={selectedAdventure}
            onChange={(e) => onSelectAdventure(e.target.value)}
            disabled={isSceneLocked}
            className={`w-full bg-lavender-bg border border-lavender-border rounded-lg p-2 text-xs font-semibold focus:outline-none focus:border-lavender-accent ${
              isSceneLocked 
                ? 'cursor-not-allowed opacity-60 text-lavender-text/50 border-lavender-border/30' 
                : 'text-lavender-accent cursor-pointer hover:border-lavender-accent/60'
            }`}
          >
            {sortedAdventures.map((adv) => (
              <option key={adv.id} value={adv.id}>
                {adv.label}
              </option>
            ))}
          </select>
          <span className="text-[10px] text-lavender-text/60 italic truncate">
            {isSceneLocked ? 'Read-only (Unlock to change)' : 'Context and storyline domain'}
          </span>
        </div>

        {/* 2. LOCATION SETTING */}
        <div className={`p-3 rounded-xl border flex flex-col gap-1.5 transition-all ${
          isSceneLocked 
            ? 'bg-lavender-surface/15 border-lavender-border/30 opacity-70' 
            : 'bg-lavender-surface/30 border-lavender-border/50'
        }`}>
          <div className="flex items-center justify-between">
            <label className={`text-xs font-bold flex items-center gap-1.5 ${isSceneLocked ? 'text-lavender-text/60' : 'text-blue-300'}`}>
              <MapPin size={14} className={isSceneLocked ? 'text-lavender-text/50' : 'text-blue-400'} />
              Location Setting
            </label>
            {isSceneLocked && <span title="Read-only while locked"><Lock size={12} className="text-amber-400/80" /></span>}
          </div>
          <select
            value={selectedLocation}
            onChange={(e) => onSelectLocation(e.target.value)}
            disabled={isSceneLocked}
            className={`w-full bg-lavender-bg border border-lavender-border rounded-lg p-2 text-xs font-medium focus:outline-none focus:border-lavender-accent truncate ${
              isSceneLocked 
                ? 'cursor-not-allowed opacity-60 text-lavender-text/50 border-lavender-border/30' 
                : 'text-lavender-text cursor-pointer hover:border-lavender-accent/60'
            }`}
          >
            {sortedLocations.map((loc) => (
              <option key={loc.id} value={loc.id}>
                {loc.label}
              </option>
            ))}
          </select>
          <span className="text-[10px] text-lavender-text/60 italic truncate">
            {isSceneLocked ? 'Read-only (Unlock to change)' : (currLoc?.description || 'Specific setting within theme')}
          </span>
        </div>

        {/* 3. PREDEFINED SCENES LISTBOX */}
        <div className={`p-3 rounded-xl border flex flex-col gap-1.5 transition-all ${
          isSceneLocked 
            ? 'bg-lavender-surface/15 border-lavender-border/30 opacity-70' 
            : 'bg-lavender-surface/30 border-lavender-border/50'
        }`}>
          <div className="flex items-center justify-between">
            <label className={`text-xs font-bold flex items-center gap-1.5 ${isSceneLocked ? 'text-lavender-text/60' : 'text-emerald-300'}`}>
              <Film size={14} className={isSceneLocked ? 'text-lavender-text/50' : 'text-emerald-400'} />
              Scenes
            </label>
            {isSceneLocked && <span title="Read-only while locked"><Lock size={12} className="text-amber-400/80" /></span>}
          </div>
          <select
            value={selectedPredefinedScene}
            onChange={(e) => {
              const sId = e.target.value;
              const found = availableScenes.find(s => s.id === sId);
              onSelectPredefinedScene(sId, found?.text || '');
            }}
            disabled={isSceneLocked}
            className={`w-full bg-lavender-bg border border-lavender-border rounded-lg p-2 text-xs font-medium focus:outline-none focus:border-lavender-accent truncate ${
              isSceneLocked 
                ? 'cursor-not-allowed opacity-60 text-lavender-text/50 border-lavender-border/30' 
                : 'text-lavender-text cursor-pointer hover:border-lavender-accent/60'
            }`}
          >
            {availableScenes.map((sc) => (
              <option key={sc.id} value={sc.id}>
                {sc.label}
              </option>
            ))}
          </select>
          <span className="text-[10px] text-lavender-text/60 italic truncate">
            {isSceneLocked ? 'Read-only (Unlock to change)' : 'Predefined scene template library'}
          </span>
        </div>
      </div>

      {/* MAIN SCENE TEXTAREA WITH RANDOMIZE BUTTON AND LOCK CHECKBOX */}
      <div className="bg-lavender-surface/30 p-4 rounded-xl border border-lavender-border/60 space-y-3 flex-1 flex flex-col min-h-0">
        {/* TEXTBOX TOOLBAR */}
        <div className="flex items-center justify-between flex-wrap gap-2 pb-1 border-b border-lavender-border/30">
          <div className="flex items-center gap-2">
            <label className="text-xs font-bold text-lavender-accent flex items-center gap-1.5">
              <Wand2 size={14} className="text-purple-400" />
              <span>Scene Background Description</span>
            </label>
            <span className="text-[10px] text-lavender-text/60 hidden sm:inline">
              (Editable directly)
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* LOCK CHECKBOX */}
            <label 
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-lavender-bg border border-lavender-border/60 text-xs font-semibold cursor-pointer hover:border-lavender-accent/60 transition-colors select-none"
              title="When locked, listboxes are read-only. Unlocking allows listboxes to update the description."
            >
              <input
                type="checkbox"
                checked={isSceneLocked}
                onChange={(e) => onToggleSceneLocked(e.target.checked)}
                className="h-3.5 w-3.5 rounded border-lavender-border text-amber-500 focus:ring-amber-400 cursor-pointer accent-amber-500"
              />
              <span className={`flex items-center gap-1 text-[11px] ${isSceneLocked ? 'text-amber-300 font-bold' : 'text-lavender-text/80'}`}>
                {isSceneLocked ? <Lock size={12} className="text-amber-400" /> : <Unlock size={12} className="text-lavender-text/50" />}
                <span>Lock</span>
              </span>
            </label>

            {/* RANDOMIZE BUTTON */}
            <button
              type="button"
              onClick={onRandomizeMainScene}
              disabled={loadingScene}
              className="px-3 py-1 bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95 disabled:opacity-50"
              title="Rewrites and improves current textbox description with AI and enables Lock"
            >
              {loadingScene ? (
                <RefreshCw size={12} className="animate-spin text-amber-300" />
              ) : (
                <Dices size={12} className="text-amber-300" />
              )}
              <span>{loadingScene ? 'Rewriting...' : 'Randomize'}</span>
            </button>
          </div>
        </div>

        {/* TEXTAREA WITH ALWAYS-EDITABLE CAPABILITY */}
        <div className="relative flex-1 flex flex-col min-h-[160px]">
          <textarea
            value={typeof mainSceneText === 'string' ? mainSceneText : (mainSceneText ? String(mainSceneText) : '')}
            onChange={(e) => onChangeMainSceneText(e.target.value)}
            placeholder="Describe the overall background environment setting, furniture, architecture, landscape, and ambient props..."
            rows={7}
            className="w-full flex-1 bg-lavender-bg border border-lavender-border rounded-lg p-3 text-xs md:text-sm text-lavender-text focus:outline-none focus:border-lavender-accent resize-y min-h-[140px] overflow-y-auto leading-relaxed pr-10"
          />
          {mainSceneText && (
            <button
              type="button"
              onClick={onCopyMainScene}
              className="absolute right-3 top-3 p-1.5 bg-lavender-surface/80 hover:bg-lavender-surface text-lavender-text hover:text-lavender-accent border border-lavender-border/60 rounded-md transition-colors cursor-pointer shadow-sm"
              title="Copy scene text"
            >
              {copiedMainScene ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            </button>
          )}
        </div>

        {/* LOCK STATUS HELPER FOOTER */}
        <div className="flex items-center justify-between text-[10px] text-lavender-text/60 px-1">
          <span>
            {isSceneLocked 
              ? '🔒 Lock enabled: Listboxes are read-only. Textarea is editable. Uncheck Lock to sync with listbox changes.'
              : '🔓 Unlocked: Selecting Adventure Theme, Location, or Scene will update this description.'}
          </span>
        </div>
      </div>

      {/* HELPFUL TIPS CARD */}
      <div className="p-3 bg-indigo-950/20 rounded-xl border border-indigo-500/20 text-xs text-indigo-200/80 flex items-start gap-2.5">
        <HelpCircle size={16} className="text-indigo-400 shrink-0 mt-0.5" />
        <div className="space-y-1 text-[11px]">
          <span className="font-semibold text-indigo-300 block">Scene Composition &amp; Lock Behavior</span>
          <p>
            When unlocked, changing any of the 3 listboxes automatically combines their rich descriptions into the text box above. Clicking <strong className="text-purple-300">Randomize</strong> uses the current text and asks AI to rewrite and polish it into an immersive description while automatically locking the listboxes. You can edit the text directly at any time.
          </p>
        </div>
      </div>
    </div>
  );
};
