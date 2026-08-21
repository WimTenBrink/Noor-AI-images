import React, { useState, useEffect, useMemo } from 'react';
import { Dialog } from './Dialog';
import { SOUND_EFFECTS } from '../../constants/sfx';
import { Volume2, Check, Search, Trash2 } from 'lucide-react';

export const getSfxGroupStyles = (type: string, isActive: boolean) => {
  if (isActive) {
    return {
      badgeClass: 'bg-black/25 text-black border-transparent'
    };
  }
  const lower = type.toLowerCase();
  if (lower.includes('ambient') || lower.includes('pads') || lower.includes('space') || lower.includes('vocal')) {
    return { badgeClass: 'text-sky-400 bg-sky-500/10 border-sky-500/20' };
  }
  if (lower.includes('drum') || lower.includes('percussion') || lower.includes('synth') || lower.includes('electronic')) {
    return { badgeClass: 'text-pink-400 bg-pink-500/10 border-pink-500/20' };
  }
  if (lower.includes('nature') || lower.includes('organic') || lower.includes('water') || lower.includes('animals') || lower.includes('wind')) {
    return { badgeClass: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' };
  }
  if (lower.includes('metallic') || lower.includes('industrial') || lower.includes('foley') || lower.includes('cinematic') || lower.includes('noise')) {
    return { badgeClass: 'text-amber-500 bg-amber-500/10 border-amber-500/20' };
  }
  return { badgeClass: 'text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20' };
};

interface SfxSelectionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (selected: string[]) => void;
  initialSelected: string[];
}

export const SfxSelectionDialog: React.FC<SfxSelectionDialogProps> = ({
  isOpen,
  onClose,
  onSelect,
  initialSelected
}) => {
  const [selectedGroupId, setSelectedGroupId] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [tempSelected, setTempSelected] = useState<string[]>([]);

  // Reset state when opening the dialog
  useEffect(() => {
    if (isOpen) {
      setTempSelected([...initialSelected]);
      setSearchQuery('');
      if (SOUND_EFFECTS.length > 0) {
        setSelectedGroupId(SOUND_EFFECTS[0].type);
      }
    }
  }, [isOpen, initialSelected]);

  const processedGroups = useMemo(() => {
    return [...SOUND_EFFECTS].map(group => ({
      ...group,
      effects: [...group.effects].sort((a, b) => a.name.localeCompare(b.name))
    }));
  }, []);

  const activeGroup = processedGroups.find(g => g.type === selectedGroupId) || processedGroups[0];

  // Global search filtering
  const filteredEffects = useMemo(() => {
    if (searchQuery.trim() === '') {
      return activeGroup?.effects || [];
    }
    const results: { name: string; description: string; groupName: string }[] = [];
    processedGroups.forEach(group => {
      group.effects.forEach(eff => {
        if (
          eff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          eff.description.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          results.push({ ...eff, groupName: group.type });
        }
      });
    });
    return results;
  }, [searchQuery, activeGroup, processedGroups]);

  const handleToggle = (name: string) => {
    setTempSelected(prev =>
      prev.includes(name) ? prev.filter(i => i !== name) : [...prev, name]
    );
  };

  const handleClearAll = () => {
    setTempSelected([]);
  };

  const activeGroupSelectedCount = useMemo(() => {
    if (!activeGroup) return 0;
    return activeGroup.effects.filter(eff => tempSelected.includes(eff.name)).length;
  }, [activeGroup, tempSelected]);

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={() => {
        onSelect(tempSelected);
        onClose();
      }}
      onClear={() => setTempSelected([])}
      clearText="Clear all selected sound effects"
      title="Add Lyric Sound Effects"
      size="full"
      isNested={true}
    >
      <div className="flex flex-col h-full font-sans text-lavender-text">
        {/* Top bar with active counts & actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-3 bg-lavender-surface/20 border border-lavender-border/40 rounded-xl mb-4 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase text-lavender-accent tracking-widest bg-lavender-accent/10 px-2.5 py-1.5 rounded-md border border-lavender-accent/20">
              Selected Effects: {tempSelected.length}
            </span>
            {tempSelected.length > 0 && (
              <span className="text-xs text-lavender-text/50 font-bold truncate max-w-md hidden sm:inline-block">
                ({tempSelected.join(', ')})
              </span>
            )}
          </div>
          {tempSelected.length > 0 && (
            <button
              type="button"
              onClick={handleClearAll}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-red-400 hover:text-red-300 bg-red-950/10 border border-red-900/30 hover:border-red-900/55 rounded-lg transition-all"
            >
              <Trash2 size={13} />
              Clear Selection ({tempSelected.length})
            </button>
          )}
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-1 flex-col md:flex-row gap-5 min-h-0">
          
          {/* Left Sidebar: Effect groups */}
          <div className="w-full md:w-1/4 flex flex-col gap-2 shrink-0 max-h-[220px] md:max-h-none overflow-y-auto pr-1">
            <span className="text-[10px] font-extrabold text-lavender-text/40 uppercase tracking-widest px-2 mb-1">
              Effect Groups
            </span>
            {processedGroups.map(group => {
              const isActive = group.type === selectedGroupId;
              const gCount = group.effects.filter(eff => tempSelected.includes(eff.name)).length;
              const sfxStyles = getSfxGroupStyles(group.type, isActive);

              return (
                <button
                  key={group.type}
                  type="button"
                  onClick={() => {
                    setSelectedGroupId(group.type);
                    setSearchQuery('');
                  }}
                  className={`w-full text-left p-2 rounded-lg border text-xs font-bold transition-all relative flex items-center justify-between cursor-pointer gap-2 ${
                    isActive
                      ? 'bg-lavender-accent/10 border-lavender-accent text-lavender-accent'
                      : 'bg-lavender-surface/40 hover:border-lavender-border/80 border-lavender-border/25 text-lavender-text/80'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <span className={`inline-flex items-center justify-center p-1 rounded-md border text-[10px] shrink-0 ${sfxStyles.badgeClass}`}>
                      <Volume2 size={11} />
                    </span>
                    <span className="truncate">{group.type}</span>
                  </div>
                  {gCount > 0 && (
                    <span className="text-[10px] bg-lavender-accent text-black font-black px-1.5 py-0.5 rounded-full inline-block scale-90">
                      {gCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Main Grid: Sound effects selection */}
          <div className="flex-1 flex flex-col gap-4 min-h-0">
            {/* Search Input */}
            <div className="relative shrink-0">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-lavender-text/40" />
              <input
                type="text"
                placeholder="Search sound effects, groups, descriptions..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-lavender-surface/30 border border-lavender-border/30 rounded-lg text-xs font-bold text-lavender-text placeholder-lavender-text/40 focus:outline-none focus:ring-1 focus:ring-lavender-accent focus:border-lavender-accent"
              />
            </div>

            {/* Selection Grid */}
            <div className="flex-1 overflow-y-auto pr-1">
              {filteredEffects.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center border-2 border-dashed border-lavender-border/10 rounded-xl">
                  <Volume2 size={32} className="text-lavender-text/20 mb-3" />
                  <p className="text-xs font-bold text-lavender-text/50">No sound effects matched your filter</p>
                  <p className="text-[10px] text-lavender-text/30 mt-1">Try refining your search keyword</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pb-2">
                  {filteredEffects.map(eff => {
                    const isSelected = tempSelected.includes(eff.name);
                    const isSearchResult = searchQuery.trim() !== '';
                    const groupName = (eff as any).groupName || activeGroup?.type;
                    const sfxStyles = getSfxGroupStyles(groupName || '', isSelected);
                    const uniqueKey = groupName ? `${groupName}_${eff.name}` : eff.name;

                    return (
                      <button
                        key={uniqueKey}
                        type="button"
                        onClick={() => handleToggle(eff.name)}
                        className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                          isSelected
                            ? 'bg-lavender-accent/15 border-lavender-accent'
                            : 'bg-lavender-surface/30 hover:bg-lavender-surface/50 hover:border-lavender-border/60 border-lavender-border/20'
                        }`}
                      >
                        {/* Custom Checkbox */}
                        <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-all ${
                          isSelected ? 'bg-lavender-accent border-lavender-accent' : 'border-lavender-border/60 bg-transparent'
                        }`}>
                          {isSelected && <Check size={11} className="text-black stroke-[3.5]" />}
                        </div>

                        {/* Name and description text */}
                        <div className="space-y-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className={`inline-flex items-center justify-center p-1 rounded-md border text-[10px] shrink-0 ${sfxStyles.badgeClass}`}>
                              <Volume2 size={11} />
                            </span>
                            <span className={`text-xs font-black truncate ${isSelected ? 'text-lavender-accent' : 'text-lavender-text'}`}>
                              {eff.name}
                            </span>
                            {groupName && (
                              <span className={`text-[9px] uppercase px-1.5 py-0.2 rounded font-extrabold ${sfxStyles.badgeClass}`}>
                                {groupName}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-lavender-text/60 font-semibold leading-relaxed line-clamp-2">
                            {eff.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </Dialog>
  );
};
