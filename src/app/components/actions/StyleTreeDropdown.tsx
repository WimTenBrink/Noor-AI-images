import React, { useState, useRef, useEffect, useMemo } from 'react';
import { 
  Palette, ChevronDown, ChevronRight, Check, Search, X, Sparkles, Folder, FolderOpen
} from 'lucide-react';
import { 
  IMAGE_STYLE_CATEGORIES, 
  IMAGE_STYLES, 
  getImageStyleById, 
  getCategoryForStyleId,
  ImageStyleCategory, 
  ImageStyleOption 
} from '../../../constants/imageStyles';

interface StyleTreeDropdownProps {
  selectedStyleId?: string;
  onSelectStyle: (styleId: string, category: string) => void;
  disabled?: boolean;
}

export const StyleTreeDropdown: React.FC<StyleTreeDropdownProps> = ({
  selectedStyleId = 'photo_realistic',
  onSelectStyle,
  disabled = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const currentStyle = useMemo(() => {
    return getImageStyleById(selectedStyleId);
  }, [selectedStyleId]);

  const currentCategory = useMemo(() => {
    return getCategoryForStyleId(selectedStyleId);
  }, [selectedStyleId]);

  // Group and sort all styles by category
  const groupedStyles = useMemo(() => {
    const sortedCategories = [...IMAGE_STYLE_CATEGORIES].sort((a, b) => a.localeCompare(b));
    const map: Record<string, ImageStyleOption[]> = {};

    for (const cat of sortedCategories) {
      const stylesInCat = IMAGE_STYLES.filter(s => s.category === cat).sort((a, b) => a.label.localeCompare(b.label));
      if (stylesInCat.length > 0) {
        map[cat] = stylesInCat;
      }
    }
    return map;
  }, []);

  // Filter styles based on search query
  const filteredGroupedStyles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return groupedStyles;

    const result: Record<string, ImageStyleOption[]> = {};
    for (const [cat, styles] of Object.entries(groupedStyles)) {
      const catMatches = cat.toLowerCase().includes(query);
      const matchedStyles = styles.filter(s => 
        s.label.toLowerCase().includes(query) || 
        s.promptModifier.toLowerCase().includes(query) ||
        catMatches
      );

      if (matchedStyles.length > 0) {
        result[cat] = matchedStyles;
      }
    }
    return result;
  }, [groupedStyles, searchQuery]);

  // Expand category of the currently selected style when dropdown opens
  useEffect(() => {
    if (isOpen) {
      setExpandedCategories(prev => ({
        ...prev,
        [currentCategory]: true
      }));
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, 50);
    }
  }, [isOpen, currentCategory]);

  // Auto-expand all matching categories when user searches
  useEffect(() => {
    if (searchQuery.trim()) {
      const allMatchingCats: Record<string, boolean> = {};
      for (const cat of Object.keys(filteredGroupedStyles)) {
        allMatchingCats[cat] = true;
      }
      setExpandedCategories(allMatchingCats);
    }
  }, [searchQuery, filteredGroupedStyles]);

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

  const toggleCategory = (cat: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [cat]: !prev[cat]
    }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    for (const cat of Object.keys(groupedStyles)) {
      all[cat] = true;
    }
    setExpandedCategories(all);
  };

  const collapseAll = () => {
    setExpandedCategories({});
  };

  const handleSelect = (style: ImageStyleOption) => {
    onSelectStyle(style.id, style.category);
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <div ref={dropdownRef} className="relative w-full">
      {/* TRIGGER BUTTON */}
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`w-full flex items-center justify-between gap-2 px-3 py-2 bg-lavender-bg border rounded-md text-xs font-semibold transition-all cursor-pointer select-none text-left shadow-xs ${
          isOpen
            ? 'border-emerald-400 ring-1 ring-emerald-400/30'
            : 'border-lavender-border hover:border-emerald-400/70'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        title="Select Artistic Category & Visual Style Preset (Combined Treeview)"
      >
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <div className="p-1 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 shrink-0">
            <Palette size={13} />
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-[10px] font-medium text-emerald-300/80 truncate">
              {currentCategory}
            </span>
            <span className="text-xs font-bold text-lavender-accent truncate">
              {currentStyle?.label || 'Select Art Style'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 shrink-0 text-lavender-text/50">
          <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-emerald-400' : ''}`} />
        </div>
      </button>

      {/* TREEVIEW DROPDOWN MENU */}
      {isOpen && (
        <div className="absolute z-50 left-0 top-full mt-1.5 w-full md:w-[420px] max-h-[440px] flex flex-col bg-lavender-surface border border-emerald-500/50 rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-100">
          {/* SEARCH & QUICK CONTROLS */}
          <div className="p-2 border-b border-lavender-border/70 bg-lavender-bg/95 flex flex-col gap-1.5 shrink-0">
            <div className="relative flex items-center">
              <Search size={13} className="absolute left-2.5 text-lavender-text/50 pointer-events-none" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search styles, mediums, artists..."
                className="w-full pl-8 pr-7 py-1.5 text-xs bg-lavender-surface/90 rounded border border-lavender-border text-lavender-text placeholder:text-lavender-text/40 focus:outline-none focus:border-emerald-400"
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
              <span>{Object.values(filteredGroupedStyles).reduce((acc, curr) => acc + curr.length, 0)} visual styles</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={expandAll}
                  className="hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  Expand All
                </button>
                <span>•</span>
                <button
                  type="button"
                  onClick={collapseAll}
                  className="hover:text-emerald-300 transition-colors cursor-pointer"
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
            {Object.keys(filteredGroupedStyles).length === 0 ? (
              <div className="p-4 text-center text-xs text-lavender-text/50 italic">
                No styles found matching &quot;{searchQuery}&quot;
              </div>
            ) : (
              Object.entries(filteredGroupedStyles).map(([categoryName, styles]) => {
                const isExpanded = !!expandedCategories[categoryName];
                const hasSelectedStyle = styles.some(s => s.id === selectedStyleId);

                return (
                  <div key={categoryName} className="rounded border border-lavender-border/40 overflow-hidden bg-lavender-bg/40 shrink-0">
                    {/* CATEGORY HEADER / TREE BRANCH */}
                    <button
                      type="button"
                      onClick={() => toggleCategory(categoryName)}
                      className={`w-full flex items-center justify-between px-2.5 py-1.5 text-left text-xs font-bold transition-colors cursor-pointer ${
                        hasSelectedStyle
                          ? 'bg-emerald-950/40 text-emerald-300 hover:bg-emerald-950/60'
                          : 'bg-lavender-surface/50 text-lavender-text/90 hover:bg-lavender-surface hover:text-emerald-300'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 min-w-0 flex-1">
                        {isExpanded ? (
                          <ChevronDown size={13} className="text-emerald-400 shrink-0" />
                        ) : (
                          <ChevronRight size={13} className="text-lavender-text/50 shrink-0" />
                        )}
                        {isExpanded ? (
                          <FolderOpen size={13} className="text-emerald-400/90 shrink-0" />
                        ) : (
                          <Folder size={13} className="text-lavender-text/60 shrink-0" />
                        )}
                        <span className="truncate">{categoryName}</span>
                      </div>

                      <span className="text-[10px] font-semibold px-1.5 py-0.2 rounded-full bg-lavender-bg border border-lavender-border/60 text-lavender-text/60 shrink-0 ml-1.5">
                        {styles.length}
                      </span>
                    </button>

                    {/* CATEGORY CHILDREN (STYLES LEAVES) */}
                    {isExpanded && (
                      <div className="py-0.5 px-1 bg-lavender-bg/90 flex flex-col gap-0.5 border-t border-lavender-border/30">
                        {styles.map(style => {
                          const isSelected = style.id === selectedStyleId;

                          return (
                            <button
                              key={style.id}
                              type="button"
                              onClick={() => handleSelect(style)}
                              className={`w-full flex items-center justify-between gap-2 px-2.5 py-1 rounded text-left text-xs transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-emerald-600 text-white font-bold shadow-xs'
                                  : 'text-lavender-text/80 hover:bg-lavender-surface hover:text-emerald-300'
                              }`}
                            >
                              <div className="flex items-center gap-1.5 min-w-0 flex-1">
                                <Sparkles size={11} className={isSelected ? 'text-white' : 'text-lavender-text/40'} />
                                <span className="truncate">{style.label}</span>
                              </div>

                              {isSelected && (
                                <Check size={13} className="text-white shrink-0" />
                              )}
                            </button>
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
