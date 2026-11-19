import React, { useState, useRef, useEffect, useMemo } from 'react';
import { 
  Wand2, ChevronDown, ChevronRight, Search, X, Sparkles, ShieldAlert, 
  Sun, TreePine, Users, Camera, Palette, ArrowRight, Check, Plus
} from 'lucide-react';
import { 
  REMIX_SUGGESTION_CATEGORIES, 
  RemixSuggestionItem, 
  RemixSuggestionCategory,
  SUGGESTION_CLEAN_REORGANIZE,
  SUGGESTION_FIX_WAN_SAFETY
} from '../../../constants/remixSuggestions';

interface RemixSuggestionsDropdownProps {
  onSelectSuggestion: (suggestion: RemixSuggestionItem, applyImmediately?: boolean) => void;
  disabled?: boolean;
}

export const RemixSuggestionsDropdown: React.FC<RemixSuggestionsDropdownProps> = ({
  onSelectSuggestion,
  disabled = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    essential: true,
    wardrobe_reduction: true
  });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filter suggestion items based on search query
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return REMIX_SUGGESTION_CATEGORIES;

    return REMIX_SUGGESTION_CATEGORIES.map(cat => {
      const catMatches = cat.title.toLowerCase().includes(query);
      const matchedItems = cat.items.filter(item => 
        item.label.toLowerCase().includes(query) || 
        item.command.toLowerCase().includes(query) ||
        (item.description && item.description.toLowerCase().includes(query)) ||
        catMatches
      );
      return {
        ...cat,
        items: matchedItems
      };
    }).filter(cat => cat.items.length > 0);
  }, [searchQuery]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, 50);
    }
  }, [isOpen]);

  // Auto expand all when searching
  useEffect(() => {
    if (searchQuery.trim()) {
      const all: Record<string, boolean> = {};
      for (const cat of REMIX_SUGGESTION_CATEGORIES) {
        all[cat.id] = true;
      }
      setExpandedCategories(all);
    }
  }, [searchQuery]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleCategory = (catId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [catId]: !prev[catId]
    }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    for (const cat of REMIX_SUGGESTION_CATEGORIES) {
      all[cat.id] = true;
    }
    setExpandedCategories(all);
  };

  const collapseAll = () => {
    setExpandedCategories({});
  };

  const handlePick = (item: RemixSuggestionItem, applyImmediately: boolean) => {
    onSelectSuggestion(item, applyImmediately);
    setIsOpen(false);
    setSearchQuery('');
  };

  const renderCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wand2':
        return <Wand2 size={13} className="text-purple-400 shrink-0" />;
      case 'Sun':
        return <Sun size={13} className="text-amber-400 shrink-0" />;
      case 'TreePine':
        return <TreePine size={13} className="text-emerald-400 shrink-0" />;
      case 'Users':
        return <Users size={13} className="text-blue-400 shrink-0" />;
      case 'Camera':
        return <Camera size={13} className="text-indigo-400 shrink-0" />;
      case 'Palette':
        return <Palette size={13} className="text-pink-400 shrink-0" />;
      default:
        return <Sparkles size={13} className="text-purple-400 shrink-0" />;
    }
  };

  const totalSuggestions = useMemo(() => {
    return REMIX_SUGGESTION_CATEGORIES.reduce((acc, c) => acc + c.items.length, 0);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full">
      {/* TRIGGER BUTTON */}
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`w-full flex items-center justify-between gap-2 px-3 py-2 bg-lavender-bg border rounded-md text-xs font-semibold transition-all cursor-pointer select-none text-left shadow-xs ${
          isOpen
            ? 'border-purple-400 ring-1 ring-purple-400/30'
            : 'border-lavender-border hover:border-purple-400/70'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        title="Browse Prompt Modification Suggestions (Clean, WAN Safety Fix, Wardrobe Reduction, Lighting, Settings...)"
      >
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <div className="p-1 rounded bg-purple-950/60 border border-purple-500/40 text-purple-300 shrink-0">
            <Wand2 size={13} />
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-[10px] font-medium text-purple-300/80">
              Prompt Suggestions Library ({totalSuggestions} items)
            </span>
            <span className="text-xs font-bold text-lavender-accent truncate">
              Select suggestion to add or apply...
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 shrink-0 text-lavender-text/50">
          <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-purple-400' : ''}`} />
        </div>
      </button>

      {/* SUGGESTIONS TREEVIEW DROPDOWN MENU */}
      {isOpen && (
        <div className="absolute z-50 left-0 md:right-0 md:left-auto top-full mt-1.5 w-full md:w-[480px] max-h-[440px] flex flex-col bg-lavender-surface border border-purple-500/50 rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-100">
          {/* SEARCH & QUICK CONTROLS */}
          <div className="p-2 border-b border-lavender-border/70 bg-lavender-bg/95 flex flex-col gap-1.5 shrink-0">
            <div className="relative flex items-center">
              <Search size={13} className="absolute left-2.5 text-lavender-text/50 pointer-events-none" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search suggestions (e.g. WAN fix, bikini, sunset, barefoot...)"
                className="w-full pl-8 pr-7 py-1.5 text-xs bg-lavender-surface/90 rounded border border-lavender-border text-lavender-text placeholder:text-lavender-text/40 focus:outline-none focus:border-purple-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 text-lavender-text/40 hover:text-lavender-text cursor-pointer p-0.5"
                >
                  <X size={12} />
                </button>
              )}
            </div>

            <div className="flex items-center justify-between text-[10px] text-lavender-text/60 px-0.5">
              <span>{filteredCategories.reduce((acc, curr) => acc + curr.items.length, 0)} suggestions available</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={expandAll}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  Expand All
                </button>
                <span>•</span>
                <button
                  type="button"
                  onClick={collapseAll}
                  className="hover:text-purple-300 transition-colors cursor-pointer"
                >
                  Collapse All
                </button>
              </div>
            </div>
          </div>

          {/* HIERARCHICAL TREE VIEW LIST (SCROLLABLE) */}
          <div 
            className="h-[340px] max-h-[50vh] min-h-[160px] overflow-y-auto overflow-x-hidden p-2 custom-scrollbar flex flex-col gap-1.5 overscroll-contain"
            style={{ WebkitOverflowScrolling: 'touch' }}
            onWheel={(e) => e.stopPropagation()}
          >
            {filteredCategories.length === 0 ? (
              <div className="p-4 text-center text-xs text-lavender-text/50 italic">
                No suggestions found matching &quot;{searchQuery}&quot;
              </div>
            ) : (
              filteredCategories.map(category => {
                const isExpanded = !!expandedCategories[category.id];

                return (
                  <div key={category.id} className="rounded border border-lavender-border/50 overflow-hidden bg-lavender-bg/40 shrink-0">
                    {/* CATEGORY HEADER / TREE BRANCH */}
                    <button
                      type="button"
                      onClick={() => toggleCategory(category.id)}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 text-left text-xs font-bold transition-colors cursor-pointer ${
                        category.id === 'essential'
                          ? 'bg-purple-950/60 text-purple-200 hover:bg-purple-900/70 border-b border-purple-500/30'
                          : 'bg-lavender-surface/60 text-lavender-text/90 hover:bg-lavender-surface hover:text-purple-300'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 min-w-0 flex-1">
                        {isExpanded ? (
                          <ChevronDown size={13} className="text-purple-400 shrink-0" />
                        ) : (
                          <ChevronRight size={13} className="text-lavender-text/50 shrink-0" />
                        )}
                        {renderCategoryIcon(category.iconName)}
                        <span className="truncate">{category.title}</span>
                      </div>

                      <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded-full bg-lavender-bg border border-lavender-border/60 text-lavender-text/60 shrink-0 ml-1.5">
                        {category.items.length}
                      </span>
                    </button>

                    {/* CATEGORY ITEMS */}
                    {isExpanded && (
                      <div className="py-1 px-1 bg-lavender-bg/95 flex flex-col gap-1 border-t border-lavender-border/30">
                        {category.items.map(item => {
                          const isClean = item.label === SUGGESTION_CLEAN_REORGANIZE;
                          const isWanFix = item.label === SUGGESTION_FIX_WAN_SAFETY;

                          return (
                            <div
                              key={item.id}
                              className={`group flex items-center justify-between gap-2 p-1.5 rounded text-left transition-all ${
                                isWanFix
                                  ? 'bg-amber-950/30 hover:bg-amber-950/60 border border-amber-500/40'
                                  : isClean
                                  ? 'bg-indigo-950/30 hover:bg-indigo-950/60 border border-indigo-500/40'
                                  : 'bg-lavender-surface/40 hover:bg-lavender-surface/90 border border-lavender-border/30 hover:border-purple-500/40'
                              }`}
                            >
                              <div className="flex flex-col min-w-0 flex-1">
                                <div className="flex items-center gap-1.5">
                                  <span className={`text-xs font-semibold leading-tight ${
                                    isWanFix ? 'text-amber-200' : isClean ? 'text-indigo-200' : 'text-lavender-accent'
                                  }`}>
                                    {item.label}
                                  </span>
                                  {item.badge && (
                                    <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded uppercase ${
                                      item.badge === 'WAN Fix'
                                        ? 'bg-amber-500 text-black'
                                        : 'bg-purple-600 text-white'
                                    }`}>
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                {item.description && (
                                  <span className="text-[10px] text-lavender-text/60 line-clamp-1 mt-0.5">
                                    {item.description}
                                  </span>
                                )}
                              </div>

                              <div className="flex items-center gap-1 shrink-0">
                                {/* INSERT TO COMMAND */}
                                <button
                                  type="button"
                                  onClick={() => handlePick(item, false)}
                                  className="px-2 py-1 text-[10px] font-semibold text-purple-200 bg-purple-950/70 hover:bg-purple-900/90 rounded border border-purple-500/40 transition-colors cursor-pointer flex items-center gap-1"
                                  title="Add to AI Remix Command text box"
                                >
                                  <Plus size={11} />
                                  <span>Add</span>
                                </button>

                                {/* APPLY IMMEDIATELY */}
                                <button
                                  type="button"
                                  onClick={() => handlePick(item, true)}
                                  className="px-2 py-1 text-[10px] font-bold text-white bg-purple-600 hover:bg-purple-500 rounded transition-colors cursor-pointer flex items-center gap-1 shadow-xs"
                                  title="Apply this remix suggestion immediately"
                                >
                                  <Wand2 size={11} />
                                  <span>Apply</span>
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};
