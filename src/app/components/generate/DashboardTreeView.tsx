import React from 'react';
import { Check } from 'lucide-react';
import { TabId, TabDefinition, ChildTabDefinition, DefaultsSubTabId } from './types';

interface DashboardTreeViewProps {
  tabsList: TabDefinition[];
  tabChildren: Record<TabId, ChildTabDefinition[]>;
  activeTabId: TabId;
  setActiveTabId: (id: TabId) => void;
  expandedNodes: Record<TabId, boolean>;
  setExpandedNodes: React.Dispatch<React.SetStateAction<Record<TabId, boolean>>>;
  enabledTabs: Record<string, boolean>;
  toggleTabEnabled: (id: string) => void;
  getTabSelectionCount: (tabId: TabId) => number;
  getChildSelectionCount: (tabId: TabId, subId: string) => number;
  
  // Subtab state setters
  defaultsSubTab: DefaultsSubTabId;
  setDefaultsSubTab: (subId: DefaultsSubTabId) => void;
  promptSubTab: string;
  setPromptSubTab: (subId: string) => void;
  accentToneSubTab: string;
  setAccentToneSubTab: (subId: string) => void;
  composerSubTab: string;
  setComposerSubTab: (subId: string) => void;
  singersSubTab: string;
  setSingersSubTab: (subId: string) => void;
  musicTheorySubTab: string;
  setMusicTheorySubTab: (subId: string) => void;
  structureSubTab: string;
  setStructureSubTab: (subId: string) => void;
  poeticsSubTab: string;
  setPoeticsSubTab: (subId: string) => void;
  slidersSubTab: string;
  setSlidersSubTab: (subId: string) => void;
}

export const DashboardTreeView: React.FC<DashboardTreeViewProps> = ({
  tabsList,
  tabChildren,
  activeTabId,
  setActiveTabId,
  expandedNodes,
  setExpandedNodes,
  enabledTabs,
  toggleTabEnabled,
  getTabSelectionCount,
  getChildSelectionCount,
  defaultsSubTab,
  setDefaultsSubTab,
  promptSubTab,
  setPromptSubTab,
  accentToneSubTab,
  setAccentToneSubTab,
  composerSubTab,
  setComposerSubTab,
  singersSubTab,
  setSingersSubTab,
  musicTheorySubTab,
  setMusicTheorySubTab,
  structureSubTab,
  setStructureSubTab,
  poeticsSubTab,
  setPoeticsSubTab,
  slidersSubTab,
  setSlidersSubTab
}) => {
  return (
    <div className="w-[28vw] max-w-[270px] min-w-[215px] bg-black/30 border-r border-lavender-border/40 overflow-y-auto p-3 flex flex-col gap-1.5 select-none shrink-0 h-full">
      <span className="text-[10px] font-extrabold text-lavender-accent uppercase tracking-widest px-2 mb-2 block border-b border-lavender-border/30 pb-1.5 shrink-0">
        Dashboard Options
      </span>

      <div className="space-y-2 flex-1 overflow-y-auto pr-0.5 custom-scrollbar">
        {tabsList.map((tab) => {
          const isActive = tab.id === activeTabId;
          const isParentEnabled = !!enabledTabs[tab.id];
          const isExpanded = true;
          const children = tabChildren[tab.id] || [];
          const hasChildren = children.length > 0;
          const canDisable = tab.id !== 'prompt';

          const selectParent = () => {
            setActiveTabId(tab.id);
            if (hasChildren) {
              const topChildSubId = children[0].subId;
              if (tab.id === 'vocalAccentTone') setAccentToneSubTab(topChildSubId);
              else if (tab.id === 'composer') setComposerSubTab(topChildSubId);
              else if (tab.id === 'singers') setSingersSubTab(topChildSubId);
              else if (tab.id === 'musicTheory') setMusicTheorySubTab(topChildSubId);
              else if (tab.id === 'structure') setStructureSubTab(topChildSubId);
              else if (tab.id === 'poetics') setPoeticsSubTab(topChildSubId);
              else if (tab.id === 'sliders') setSlidersSubTab(topChildSubId);
              else if (tab.id === 'defaults') setDefaultsSubTab(topChildSubId as DefaultsSubTabId);
              else if (tab.id === 'prompt') setPromptSubTab(topChildSubId);
            }
          };

          return (
            <div key={tab.id} className="flex flex-col">
              {/* Parent Node Row */}
              <div className="group flex items-center justify-between gap-1 w-full relative">
                {/* Only show checkbox if node has NO child options */}
                {!hasChildren && (
                  <input
                    type="checkbox"
                    checked={!canDisable ? true : isParentEnabled}
                    disabled={!canDisable}
                    onChange={(e) => {
                      e.stopPropagation();
                      if (canDisable) toggleTabEnabled(tab.id);
                    }}
                    className="w-3.5 h-3.5 rounded border-lavender-border/50 accent-lavender-accent shrink-0 cursor-pointer disabled:opacity-50"
                    title={canDisable ? (isParentEnabled ? 'Disable node' : 'Enable node') : 'Core parameter (always active)'}
                  />
                )}

                {/* Tab selection label button */}
                <button
                  type="button"
                  onClick={selectParent}
                  className={`flex-1 text-left px-2 py-1.5 rounded-lg text-[11.5px] transition-all flex items-center gap-1.5 truncate cursor-pointer ${
                    isActive
                      ? 'bg-lavender-accent text-black font-extrabold shadow'
                      : 'hover:bg-lavender-surface/50 text-lavender-text/80'
                  }`}
                >
                  <span
                    className={`shrink-0 ${
                      isActive
                        ? 'text-black'
                        : isParentEnabled
                        ? 'text-green-400'
                        : 'text-lavender-text/45'
                    }`}
                  >
                    {tab.icon}
                  </span>
                  <div className="min-w-0 pr-1 select-none flex-1 flex items-center justify-between gap-1">
                    <span
                      className={`block truncate ${
                        isActive
                          ? 'font-black'
                          : isParentEnabled
                          ? 'text-green-400/90 font-extrabold'
                          : 'font-bold'
                      }`}
                    >
                      {tab.label.replace(/^\d+\.\s*/, '')}
                    </span>
                    {(() => {
                      const count = getTabSelectionCount(tab.id);
                      if (count > 0) {
                        return (
                          <span
                            className={`px-1.5 py-0.5 text-[9px] font-black rounded-full shrink-0 ${
                              isActive
                                ? 'bg-black/35 text-lavender-accent border border-black/10'
                                : isParentEnabled
                                ? 'bg-green-500/20 text-green-300 border border-green-500/25'
                                : 'bg-lavender-accent/15 text-lavender-accent'
                            }`}
                          >
                            {count}
                          </span>
                        );
                      }
                      return null;
                    })()}
                  </div>
                </button>
              </div>

              {/* Child Nodes List */}
              {isExpanded && children.length > 0 && (() => {
                const sortedChildren = [...children].sort((a, b) => a.label.localeCompare(b.label));
                return (
                  <div className="ml-6 pl-2 border-l border-lavender-border/20 flex flex-col mt-1 mb-1.5 select-none font-medium space-y-0.5">
                    {sortedChildren.map((child, idx) => {
                      let isActiveChild = false;
                      if (activeTabId === tab.id) {
                        if (tab.id === 'vocalAccentTone') isActiveChild = accentToneSubTab === child.subId;
                        else if (tab.id === 'composer') isActiveChild = composerSubTab === child.subId;
                        else if (tab.id === 'singers') isActiveChild = singersSubTab === child.subId;
                        else if (tab.id === 'musicTheory') isActiveChild = musicTheorySubTab === child.subId;
                        else if (tab.id === 'structure') isActiveChild = structureSubTab === child.subId;
                        else if (tab.id === 'poetics') isActiveChild = poeticsSubTab === child.subId;
                        else if (tab.id === 'sliders') isActiveChild = slidersSubTab === child.subId;
                        else if (tab.id === 'defaults') isActiveChild = defaultsSubTab === child.subId;
                        else if (tab.id === 'prompt') isActiveChild = promptSubTab === child.subId;
                      }

                      const isChildEnabled = !!enabledTabs[child.subId];

                      const selectChild = () => {
                        setActiveTabId(tab.id);
                        if (tab.id === 'vocalAccentTone') setAccentToneSubTab(child.subId);
                        else if (tab.id === 'composer') setComposerSubTab(child.subId);
                        else if (tab.id === 'singers') setSingersSubTab(child.subId);
                        else if (tab.id === 'musicTheory') setMusicTheorySubTab(child.subId);
                        else if (tab.id === 'structure') setStructureSubTab(child.subId);
                        else if (tab.id === 'poetics') setPoeticsSubTab(child.subId);
                        else if (tab.id === 'sliders') setSlidersSubTab(child.subId);
                        else if (tab.id === 'defaults') setDefaultsSubTab(child.subId as DefaultsSubTabId);
                        else if (tab.id === 'prompt') setPromptSubTab(child.subId);
                      };

                      return (
                        <div
                          key={child.subId}
                          className={`group/child flex items-center justify-between gap-1.5 py-0.5 px-1 rounded transition-all ${
                            isActiveChild ? 'bg-lavender-surface/30' : 'hover:bg-lavender-surface/10'
                          }`}
                        >
                          {/* Checkbox for Child Node */}
                          <input
                            type="checkbox"
                            checked={isChildEnabled}
                            onChange={(e) => {
                              e.stopPropagation();
                              toggleTabEnabled(child.subId);
                            }}
                            className="w-3 h-3 rounded border-lavender-border/50 accent-lavender-accent shrink-0 cursor-pointer"
                            title={isChildEnabled ? 'Disable option subnode' : 'Enable option subnode'}
                          />

                          {/* Child Label & Connector */}
                          <button
                            type="button"
                            onClick={selectChild}
                            className={`flex-1 text-left py-0.5 text-[10.5px] transition-all flex items-center gap-1 shrink-0 cursor-pointer min-w-0 ${
                              isActiveChild
                                ? 'text-lavender-accent font-extrabold'
                                : isChildEnabled
                                ? 'text-green-300 font-semibold'
                                : 'text-lavender-text/55 hover:text-white font-medium'
                            }`}
                          >
                            <span className="text-lavender-border/30 group-hover/child:text-lavender-accent/40 font-mono text-[9px] select-none shrink-0">
                              {idx === sortedChildren.length - 1 ? '└' : '├'}
                            </span>
                            <span className="truncate flex-1 min-w-0">{child.label}</span>
                            {(() => {
                              const childCount = getChildSelectionCount(tab.id, child.subId);
                              if (childCount > 0) {
                                return (
                                  <span
                                    className={`px-1 text-[8.5px] font-bold rounded shrink-0 ${
                                      isActiveChild
                                        ? 'bg-lavender-accent/25 text-lavender-accent'
                                        : 'bg-lavender-surface text-lavender-text/50 border border-lavender-border/10'
                                    }`}
                                  >
                                    {childCount}
                                  </span>
                                );
                              }
                              return null;
                            })()}
                            {isActiveChild && (
                              <span className="w-1 h-1 rounded-full bg-lavender-accent shadow-sm shadow-lavender-accent shrink-0 ml-0.5" />
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                );
              })()}
            </div>
          );
        })}
      </div>
    </div>
  );
};
