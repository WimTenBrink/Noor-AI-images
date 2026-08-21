import React, { useState, useMemo, useEffect } from 'react';
import { Search, Check, Folder, FolderOpen, AlertCircle, Sparkles } from 'lucide-react';

export interface GroupedOptionItem {
  id: string;
  name: string;
  description?: string;
  flag?: string;
  tag?: string;
  subtext?: string;
}

export interface GroupedOptionCategory {
  id: string;
  name: string;
  description?: string;
  icon?: React.ReactNode;
  items: GroupedOptionItem[];
}

export interface GroupedOptionTreeProps {
  categories: GroupedOptionCategory[];
  selectedIds: string | string[]; // string for single-select, string[] for multi-select
  onSelect: (id: string) => void;
  selectionMode?: 'single' | 'multiple';
  maxSelections?: number; // e.g., max 4 selections allowed
  title?: string;
  placeholderSearch?: string;
}

export const GroupedOptionTree: React.FC<GroupedOptionTreeProps> = ({
  categories,
  selectedIds,
  onSelect,
  selectionMode = 'multiple',
  maxSelections,
  placeholderSearch = 'Search options...'
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCatId, setActiveCatId] = useState<string>(() => categories[0]?.id || '');
  const [warningMsg, setWarningMsg] = useState<string | null>(null);

  // Sync active category if current activeCatId is invalid
  useEffect(() => {
    if (categories.length > 0 && (!activeCatId || !categories.some((c) => c.id === activeCatId))) {
      setActiveCatId(categories[0].id);
    }
  }, [categories, activeCatId]);

  const selectedArray = useMemo(() => {
    if (Array.isArray(selectedIds)) return selectedIds;
    return selectedIds ? [selectedIds] : [];
  }, [selectedIds]);

  const activeCategory = useMemo(() => {
    return categories.find((c) => c.id === activeCatId) || categories[0] || { id: '', name: 'All Options', items: [] };
  }, [categories, activeCatId]);

  // Dynamically sort categories alphabetically upon display
  const sortedCategories = useMemo(() => {
    return [...categories].sort((a, b) => a.name.localeCompare(b.name));
  }, [categories]);

  // Filter & dynamically sort items in active category alphabetically upon display
  const filteredActiveItems = useMemo(() => {
    if (!activeCategory || !activeCategory.items) return [];
    let itemsList = activeCategory.items;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      itemsList = itemsList.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          (item.description && item.description.toLowerCase().includes(q)) ||
          (item.tag && item.tag.toLowerCase().includes(q)) ||
          (item.subtext && item.subtext.toLowerCase().includes(q))
      );
    }
    return [...itemsList].sort((a, b) => a.name.localeCompare(b.name));
  }, [activeCategory, searchQuery]);

  const handleItemClick = (itemId: string) => {
    const isAlreadySelected = selectedArray.includes(itemId);

    if (!isAlreadySelected && selectionMode === 'multiple' && maxSelections && selectedArray.length >= maxSelections) {
      setWarningMsg(`Maximum limit reached (${maxSelections} selections allowed). Deselect an option first.`);
      setTimeout(() => setWarningMsg(null), 3500);
      return;
    }

    setWarningMsg(null);
    onSelect(itemId);
  };

  return (
    <div className="flex flex-col space-y-2">
      {/* Warning banner when exceeding max selection count */}
      {warningMsg && (
        <div className="bg-amber-500/20 border border-amber-500/50 text-amber-200 text-xs px-3 py-2 rounded-xl flex items-center justify-between animate-fade-in shadow-md">
          <span className="flex items-center gap-2 font-bold">
            <AlertCircle size={14} className="text-amber-400 shrink-0" />
            {warningMsg}
          </span>
          <button
            type="button"
            onClick={() => setWarningMsg(null)}
            className="text-[10px] bg-amber-500/30 hover:bg-amber-500/50 px-2 py-0.5 rounded text-amber-100 font-black cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Main 2-Panel Side-by-Side Tree View Container */}
      <div className="flex flex-col md:flex-row bg-black/50 border border-lavender-border/30 rounded-2xl overflow-hidden min-h-[420px] max-h-[55vh] shadow-2xl">
        {/* LEFT COLUMN: Tree Nodes / Category Selector */}
        <div className="w-full md:w-64 bg-black/60 border-r border-lavender-border/20 flex flex-col shrink-0">
          <div className="p-3 border-b border-lavender-border/20 bg-lavender-surface/10 flex items-center justify-between">
            <span className="text-[11px] font-black uppercase text-lavender-accent tracking-wider flex items-center gap-1.5">
              <Folder size={13} /> Tree Categories
            </span>
            <span className="text-[10px] text-lavender-text/50 font-mono font-bold">
              {categories.length} Nodes
            </span>
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
            {sortedCategories.map((category) => {
              const isActive = category.id === activeCatId;
              const selectedInCat = category.items.filter((it) => selectedArray.includes(it.id));

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => {
                    setActiveCatId(category.id);
                    setWarningMsg(null);
                  }}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-lavender-accent/20 border border-lavender-accent text-white shadow-md font-bold'
                      : 'hover:bg-lavender-surface/15 border border-transparent text-lavender-text/75'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0 pr-1">
                    <span className="shrink-0 text-lavender-accent">
                      {isActive ? <FolderOpen size={14} /> : <Folder size={14} />}
                    </span>
                    <span className="text-xs truncate">{category.name}</span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {selectedInCat.length > 0 && (
                      <span className="px-1.5 py-0.5 text-[9px] font-black rounded-full bg-lavender-accent text-black">
                        {selectedInCat.length}
                      </span>
                    )}
                    <span className="text-[9.5px] text-lavender-text/40 font-mono">
                      ({category.items.length})
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: Options List for Active Tree Node */}
        <div className="flex-1 flex flex-col bg-black/30 overflow-hidden">
          {/* Top Search & Active Category Header */}
          <div className="p-3 border-b border-lavender-border/20 bg-black/40 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-xs font-black text-white flex items-center gap-1.5 truncate">
                <Sparkles size={13} className="text-lavender-accent shrink-0" />
                {activeCategory.name}
              </span>
              {maxSelections && (
                <span className="px-2 py-0.5 text-[10px] font-extrabold rounded-md bg-lavender-accent/20 text-lavender-accent border border-lavender-accent/30 shrink-0">
                  {selectedArray.length} / {maxSelections} Max
                </span>
              )}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-60">
              <Search size={13} className="absolute left-2.5 top-2.5 text-lavender-text/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={placeholderSearch}
                className="w-full bg-black/70 border border-lavender-border/40 text-lavender-text text-xs rounded-xl pl-7 pr-3 py-1.5 focus:outline-none focus:border-lavender-accent font-medium placeholder:text-lavender-text/30"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1.5 text-[9px] text-lavender-text/50 hover:text-white bg-lavender-surface/30 px-1 py-0.5 rounded cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Options Items Grid / List */}
          <div className="flex-1 overflow-y-auto p-3 custom-scrollbar">
            {filteredActiveItems.length === 0 ? (
              <div className="p-8 text-center text-xs text-lavender-text/40 italic">
                {searchQuery
                  ? `No options found matching "${searchQuery}" in ${activeCategory.name}.`
                  : 'No options available in this category.'}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {filteredActiveItems.map((item) => {
                  const isSelected = selectedArray.includes(item.id);

                  return (
                    <div
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={`group flex items-start gap-2.5 p-3 rounded-xl border transition-all cursor-pointer select-none ${
                        isSelected
                          ? 'bg-lavender-accent/20 border-lavender-accent text-white shadow-md'
                          : 'bg-black/40 border-lavender-border/25 hover:bg-lavender-surface/15 text-lavender-text/80'
                      }`}
                    >
                      {/* Selection Box / Radio Button */}
                      <div className="pt-0.5 shrink-0">
                        {selectionMode === 'single' ? (
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                              isSelected
                                ? 'border-lavender-accent bg-lavender-accent'
                                : 'border-lavender-border/60 bg-black/60'
                            }`}
                          >
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                          </div>
                        ) : (
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                              isSelected
                                ? 'border-lavender-accent bg-lavender-accent text-black'
                                : 'border-lavender-border/60 bg-black/60'
                            }`}
                          >
                            {isSelected && <Check size={11} strokeWidth={3.5} />}
                          </div>
                        )}
                      </div>

                      {/* Item Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {item.flag && <span className="text-sm">{item.flag}</span>}
                          <span
                            className={`text-xs ${
                              isSelected ? 'font-black text-white' : 'font-extrabold text-lavender-text/90'
                            }`}
                          >
                            {item.name}
                          </span>
                          {item.tag && (
                            <span className="px-1.5 py-0.2 text-[8.5px] font-bold rounded bg-lavender-surface/40 text-lavender-accent border border-lavender-accent/20">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-[10px] text-lavender-text/60 leading-relaxed mt-1 line-clamp-2">
                            {item.description}
                          </p>
                        )}
                        {item.subtext && (
                          <span className="text-[9px] text-lavender-accent/70 font-mono block mt-1">
                            {item.subtext}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
