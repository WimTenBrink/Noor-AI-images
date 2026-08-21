import React, { useState, useMemo } from 'react';
import { Layers, Folder, FolderOpen, Check, Search, Sparkles } from 'lucide-react';
import { HeaderBanner } from '../HeaderBanner';

interface StructureTabProps {
  structureSubTab: string;
  setStructureSubTab: (subId: string) => void;
  selectedStructurePreset: string;
  setSelectedStructurePreset: (preset: string) => void;
  isEnabledStructure: boolean;
}

interface StructurePreset {
  id: string;
  name: string;
  pattern: string;
  description: string;
}

interface StructureCategory {
  category: string;
  icon: string;
  items: StructurePreset[];
}

const SONG_STRUCTURE_CATEGORIES: StructureCategory[] = [
  {
    category: 'Folk, Ballad & Acoustic',
    icon: '🎻',
    items: [
      { id: 'standard', name: 'Standard Pop Ballad', pattern: '[Verse 1] -> [Pre-Chorus] -> [Chorus] -> [Verse 2] -> [Pre-Chorus] -> [Chorus] -> [Bridge] -> [Chorus] -> [Outro]', description: 'Classic radio pop verse-chorus arrangement with pre-chorus tension.' },
      { id: 'folk-ballad', name: 'Storyteller Folk Ballad', pattern: '[Intro] -> [Verse 1] -> [Verse 2] -> [Refrain] -> [Verse 3] -> [Instrumental Break] -> [Verse 4] -> [Outro]', description: 'Traditional acoustic storytelling structure with recurring refrain line.' },
      { id: 'sea-shanty', name: 'Nautical Sea Shanty', pattern: '[Lead Call] -> [Group Chorus] -> [Verse 1] -> [Group Chorus] -> [Verse 2] -> [Group Chorus] -> [Outro]', description: 'Rhythmic maritime vocal work-song with alternating call and unison chorus.' },
      { id: 'aaba-tin-pan', name: 'AABA 32-Bar Classic', pattern: '[Verse A1] -> [Verse A2] -> [Bridge B] -> [Verse A3] -> [Outro Tag]', description: 'Golden-era jazz and folk 32-bar form with a contrasting middle bridge.' },
      { id: 'power-ballad', name: '80s Rock Power Ballad', pattern: '[Soft Acoustic Intro] -> [Verse 1] -> [Building Chorus] -> [Verse 2] -> [Full Band Chorus] -> [Guitar Solo] -> [Key Change Chorus] -> [Outro Fade]', description: 'Dramatic crescendo from intimate acoustic intro to explosive full-band chorus.' }
    ]
  },
  {
    category: 'Classical, Choral & Sacred',
    icon: '⛪',
    items: [
      { id: 'rondeau-refrain', name: 'Classical Rondo (ABACADA)', pattern: '[Refrain A] -> [Verse B] -> [Refrain A] -> [Verse C] -> [Refrain A] -> [Verse D] -> [Refrain A Finale]', description: 'Baroque musical form with a principal theme alternating with contrasting episodes.' },
      { id: 'call-response', name: 'Antiphonal Call & Response', pattern: '[Solo Call] -> [Choir Response] -> [Solo Verse] -> [Choir Chorus] -> [Overlapping Cadence]', description: 'Liturgical antiphonal arrangement with solo line answered by full choir.' },
      { id: 'strophic-hymn', name: 'Strophic Sacred Hymn', pattern: '[Verse 1] -> [Verse 2] -> [Verse 3] -> [Verse 4] -> [Amen Outro]', description: 'Repeated melody for each stanza, common in ancient pagan and Christian hymns.' },
      { id: 'sonata-form', name: 'Symphonic Sonata Allegro', pattern: '[Exposition] -> [Development] -> [Recapitulation] -> [Coda]', description: 'Classical symphonic structure featuring thematic introduction, transformation, and resolution.' },
      { id: 'through-composed', name: 'Through-Composed Narrative', pattern: '[Movement I] -> [Movement II] -> [Movement III] -> [Movement IV] -> [Final Resolving Chord]', description: 'Continuous evolving musical composition without repeating verse/chorus sections.' }
    ]
  },
  {
    category: 'Pagan, Progressive & Blues',
    icon: '🔥',
    items: [
      { id: 'prog-suite', name: 'Progressive Epic Suite', pattern: '[Prelude] -> [Theme A] -> [Instrumental Jam] -> [Theme B] -> [Climax] -> [Fade Out]', description: 'Multi-part epic suite with changing time signatures and virtuoso solos.' },
      { id: 'chant-drone', name: 'Pagan Chant & Drone', pattern: '[Invocational Chant] -> [Building Choir Drone] -> [Lead Solo] -> [Collective Shout] -> [Fade]', description: 'Hypnotic vocal drone baseline with trance-inducing vocal incantations.' },
      { id: 'blues-12bar', name: '12-Bar Blues Strophic', pattern: '[Intro] -> [Stanza 1] -> [Guitar Break] -> [Stanza 2] -> [Harmonica Solo] -> [Stanza 3] -> [Turnaround Outro]', description: 'Standard 12-bar blues progression with solo instrumental turnarounds.' }
    ]
  },
  {
    category: 'Electronic & Modern',
    icon: '⚡',
    items: [
      { id: 'electronic-drop', name: 'EDM Build & Drop', pattern: '[Intro] -> [Build-up] -> [DROP] -> [Breakdown] -> [Build-up 2] -> [DROP 2] -> [Outro]', description: 'High-energy electronic structure with rhythmic tension build-up and explosive drops.' },
      { id: 'hiphop-cypher', name: 'Hip-Hop Verse & Hook', pattern: '[Intro] -> [Verse 1] -> [Hook] -> [Verse 2] -> [Hook] -> [Verse 3] -> [Outro]', description: 'Rhythmic verse delivery interspersed with catchy vocal hook loops.' }
    ]
  }
];

export const StructureTab: React.FC<StructureTabProps> = ({
  selectedStructurePreset,
  setSelectedStructurePreset,
  isEnabledStructure
}) => {
  const [activeCategoryName, setActiveCategoryName] = useState<string>(
    () => SONG_STRUCTURE_CATEGORIES[0].category
  );
  const [searchQuery, setSearchQuery] = useState('');

  // Dynamically sort categories alphabetically upon display
  const sortedCategories = useMemo(() => {
    return [...SONG_STRUCTURE_CATEGORIES].sort((a, b) => a.category.localeCompare(b.category));
  }, []);

  const activeCategory = useMemo(() => {
    return sortedCategories.find(c => c.category === activeCategoryName) || sortedCategories[0];
  }, [sortedCategories, activeCategoryName]);

  // Dynamically sort items under active category alphabetically upon display
  const filteredAndSortedItems = useMemo(() => {
    if (!activeCategory || !activeCategory.items) return [];
    let list = activeCategory.items;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        item =>
          item.name.toLowerCase().includes(q) ||
          item.pattern.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
      );
    }
    return [...list].sort((a, b) => a.name.localeCompare(b.name));
  }, [activeCategory, searchQuery]);

  return (
    <div className="space-y-4 animate-fade-in">
      <HeaderBanner
        title="Song Structure Templates & Presets"
        desc="Choose structural arrangements (Verse-Chorus, Ballad, Prog Suite, Chant) using tree categories on the left and presets list on the right."
        targetId="songStructure"
        isEnabled={isEnabledStructure}
      />

      {/* 2-Panel Tree on Left, List View on Right */}
      <div className="flex flex-col md:flex-row bg-black/50 border border-lavender-border/30 rounded-2xl overflow-hidden min-h-[420px] max-h-[55vh] shadow-2xl">
        {/* LEFT COLUMN: Main Group Tree Nodes */}
        <div className="w-full md:w-64 bg-black/60 border-r border-lavender-border/20 flex flex-col shrink-0">
          <div className="p-3 border-b border-lavender-border/20 bg-lavender-surface/10 flex items-center justify-between">
            <span className="text-[11px] font-black uppercase text-lavender-accent tracking-wider flex items-center gap-1.5">
              <Folder size={13} /> Structure Groups
            </span>
            <span className="text-[10px] text-lavender-text/50 font-mono font-bold">
              {sortedCategories.length} Tree Nodes
            </span>
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar">
            {sortedCategories.map((catGroup) => {
              const isActive = catGroup.category === activeCategory.category;
              const hasActivePreset = catGroup.items.some(item => item.id === selectedStructurePreset);

              return (
                <button
                  key={catGroup.category}
                  type="button"
                  onClick={() => setActiveCategoryName(catGroup.category)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-lavender-accent/20 border border-lavender-accent text-white shadow-md font-bold'
                      : 'hover:bg-lavender-surface/15 border border-transparent text-lavender-text/75'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0 pr-1">
                    <span className="shrink-0 text-lavender-accent text-sm">
                      {isActive ? <FolderOpen size={14} /> : catGroup.icon}
                    </span>
                    <span className="text-xs truncate">{catGroup.category}</span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {hasActivePreset && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shrink-0" title="Selected preset in this group" />
                    )}
                    <span className="text-[9.5px] text-lavender-text/40 font-mono">
                      ({catGroup.items.length})
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: List View for Elements Beneath Selected Tree Node */}
        <div className="flex-1 flex flex-col bg-black/30 overflow-hidden">
          {/* Header & Search */}
          <div className="p-3 border-b border-lavender-border/20 bg-black/40 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-xs font-black text-white flex items-center gap-1.5 truncate">
                <Sparkles size={13} className="text-lavender-accent shrink-0" />
                {activeCategory.icon} {activeCategory.category}
              </span>
              <span className="px-2 py-0.5 text-[10px] font-extrabold rounded-md bg-lavender-accent/20 text-lavender-accent border border-lavender-accent/30 shrink-0">
                {filteredAndSortedItems.length} Presets
              </span>
            </div>

            <div className="relative w-full sm:w-60">
              <Search size={13} className="absolute left-2.5 top-2.5 text-lavender-text/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search presets in group..."
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

          {/* List View of Elements */}
          <div className="flex-1 overflow-y-auto p-3 custom-scrollbar">
            {filteredAndSortedItems.length === 0 ? (
              <div className="p-8 text-center text-xs text-lavender-text/40 italic">
                {searchQuery
                  ? `No presets found matching "${searchQuery}".`
                  : 'No presets available in this structure category.'}
              </div>
            ) : (
              <div className="space-y-2.5">
                {filteredAndSortedItems.map((preset) => {
                  const isSelected = selectedStructurePreset === preset.id;

                  return (
                    <div
                      key={preset.id}
                      onClick={() => setSelectedStructurePreset(preset.id)}
                      className={`group flex flex-col p-3 rounded-xl border transition-all cursor-pointer select-none space-y-2 ${
                        isSelected
                          ? 'bg-lavender-accent/20 border-lavender-accent text-white shadow-md'
                          : 'bg-black/40 border-lavender-border/25 hover:bg-lavender-surface/15 text-lavender-text/80'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Layers size={14} className={isSelected ? 'text-lavender-accent' : 'text-lavender-text/50'} />
                          <span className={`text-xs ${isSelected ? 'font-black text-white' : 'font-extrabold text-lavender-text/90'}`}>
                            {preset.name}
                          </span>
                        </div>

                        {isSelected ? (
                          <span className="flex items-center gap-1 text-[9.5px] font-black bg-lavender-accent text-black px-2 py-0.5 rounded-full shrink-0">
                            <Check size={11} strokeWidth={3} /> Active Selection
                          </span>
                        ) : (
                          <span className="text-[9.5px] text-lavender-text/40 group-hover:text-lavender-accent font-medium shrink-0">
                            Click to select
                          </span>
                        )}
                      </div>

                      <p className="text-[10.5px] text-lavender-text/60 leading-relaxed font-medium pl-5">
                        {preset.description}
                      </p>

                      <div className="bg-black/60 p-2 rounded-lg border border-lavender-border/15 font-mono text-[9.5px] text-lavender-accent/90 leading-relaxed overflow-x-auto custom-scrollbar">
                        {preset.pattern}
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
