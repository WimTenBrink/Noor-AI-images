import React, { useState, useMemo } from 'react';
import { Search, Check, ChevronRight, ChevronDown, Music, X, Layers, Sparkles, ShieldAlert } from 'lucide-react';
import {
  INSPIRATION_GENRES,
  INSPIRATION_ARTISTS,
  InspirationGenreNode,
  InspirationArtist,
  getArtistsByGenre
} from '../../../data/inspirationData';

interface InspirationSubTabProps {
  selectedArtists: string[];
  setSelectedArtists: React.Dispatch<React.SetStateAction<string[]>>;
}

export const InspirationSubTab: React.FC<InspirationSubTabProps> = ({
  selectedArtists,
  setSelectedArtists
}) => {
  const [selectedGenreId, setSelectedGenreId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedGenres, setExpandedGenres] = useState<Record<string, boolean>>({
    pop: true,
    rock: true,
    metal: true,
    alt: true,
    classic: true,
    folk: true,
    rnb: true,
    jazz: true,
    electronic: true,
    world: true
  });

  // Top level genres
  const topLevelGenres = useMemo(() => {
    return INSPIRATION_GENRES.filter(g => !g.parentId);
  }, []);

  // Map subgenres by parent
  const subGenresMap = useMemo(() => {
    const map: Record<string, InspirationGenreNode[]> = {};
    INSPIRATION_GENRES.forEach(g => {
      if (g.parentId) {
        if (!map[g.parentId]) map[g.parentId] = [];
        map[g.parentId].push(g);
      }
    });
    return map;
  }, []);

  // Filtered artists based on selected genre & search
  const visibleArtists = useMemo(() => {
    return getArtistsByGenre(selectedGenreId, searchQuery);
  }, [selectedGenreId, searchQuery]);

  const toggleGenreExpand = (genreId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedGenres(prev => ({ ...prev, [genreId]: !prev[genreId] }));
  };

  const toggleArtistSelect = (artistId: string) => {
    setSelectedArtists(prev =>
      prev.includes(artistId) ? prev.filter(id => id !== artistId) : [...prev, artistId]
    );
  };

  const selectAllVisible = () => {
    const newIds = visibleArtists.map(a => a.id);
    setSelectedArtists(prev => Array.from(new Set([...prev, ...newIds])));
  };

  const clearAllSelected = () => {
    setSelectedArtists([]);
  };

  // Selected artist objects
  const selectedArtistObjects = useMemo(() => {
    return INSPIRATION_ARTISTS.filter(a => selectedArtists.includes(a.id));
  }, [selectedArtists]);

  return (
    <div className="space-y-4 animate-fade-in">
      {/* Notice Banner */}
      <div className="bg-lavender-accent/10 border border-lavender-accent/30 rounded-xl p-3 text-xs flex items-start gap-2.5">
        <Sparkles size={16} className="text-lavender-accent shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-lavender-accent">
            Inspiration Style Engine
          </p>
          <p className="text-[11px] text-lavender-text/80 leading-relaxed">
            Select iconic artists and bands to steer the musical atmosphere, vocal energy, rhythm, and lyrical themes. 
            <span className="font-bold text-amber-300 ml-1">
              Note: Artist names are used solely as creative style directives and will NEVER appear inside the generated lyrics.
            </span>
          </p>
        </div>
      </div>

      {/* Selected Artists Pills Bar */}
      {selectedArtists.length > 0 && (
        <div className="bg-black/40 border border-lavender-border/40 rounded-xl p-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-lavender-accent uppercase tracking-wider flex items-center gap-1.5">
              <Check size={13} /> Selected Inspirations ({selectedArtists.length})
            </span>
            <button
              type="button"
              onClick={clearAllSelected}
              className="text-[10.5px] font-bold text-red-400 hover:text-red-300 transition-colors"
            >
              Clear All
            </button>
          </div>
          <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto custom-scrollbar pr-1">
            {selectedArtistObjects.map(artist => (
              <span
                key={artist.id}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-lavender-accent/20 text-lavender-accent border border-lavender-accent/40 shadow-sm"
              >
                <span>{artist.name}</span>
                <span className="text-[9px] text-lavender-text/50 uppercase">({artist.type})</span>
                <button
                  type="button"
                  onClick={() => toggleArtistSelect(artist.id)}
                  className="hover:text-white transition-colors ml-0.5 cursor-pointer"
                  title="Remove artist"
                >
                  <X size={12} />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Main Dual-Panel View (Left Treeview, Right Listview) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 h-[420px]">
        {/* Left Treeview Column (5 cols) */}
        <div className="md:col-span-5 bg-black/40 border border-lavender-border/40 rounded-xl flex flex-col overflow-hidden">
          <div className="p-2.5 bg-black/50 border-b border-lavender-border/30 flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-lavender-accent uppercase tracking-wider flex items-center gap-1.5">
              <Layers size={13} /> Music Styles (Tree)
            </span>
            <span className="text-[10px] font-semibold text-lavender-text/50">
              {INSPIRATION_GENRES.length} Categories
            </span>
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar text-xs">
            {/* 'All Genres' Node */}
            <button
              type="button"
              onClick={() => setSelectedGenreId('all')}
              className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center justify-between transition-all cursor-pointer ${
                selectedGenreId === 'all'
                  ? 'bg-lavender-accent text-black font-black'
                  : 'hover:bg-lavender-surface/30 text-lavender-text/80 font-semibold'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Music size={13} />
                <span>All Genres & Styles</span>
              </span>
              <span className="text-[10px] opacity-70 font-mono">
                ({INSPIRATION_ARTISTS.length})
              </span>
            </button>

            {/* Top Level Genres & Subnodes */}
            {topLevelGenres.map(genre => {
              const subNodes = subGenresMap[genre.id] || [];
              const hasSub = subNodes.length > 0;
              const isExpanded = !!expandedGenres[genre.id];
              const isSelected = selectedGenreId === genre.id;

              const artistCount = getArtistsByGenre(genre.id).length;

              return (
                <div key={genre.id} className="space-y-0.5">
                  <div
                    onClick={() => setSelectedGenreId(genre.id)}
                    className={`group w-full px-2.5 py-1.5 rounded-lg flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-lavender-accent text-black font-black'
                        : 'hover:bg-lavender-surface/30 text-lavender-text/80 font-bold'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      {hasSub ? (
                        <button
                          type="button"
                          onClick={(e) => toggleGenreExpand(genre.id, e)}
                          className="p-0.5 hover:text-white shrink-0"
                        >
                          {isExpanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                        </button>
                      ) : (
                        <span className="w-3 shrink-0" />
                      )}
                      <span className="truncate">{genre.label}</span>
                    </div>

                    <span
                      className={`text-[9.5px] font-mono shrink-0 px-1.5 py-0.2 rounded ${
                        isSelected ? 'bg-black/30 text-black font-bold' : 'text-lavender-text/50'
                      }`}
                    >
                      {artistCount}
                    </span>
                  </div>

                  {/* Subnodes */}
                  {hasSub && isExpanded && (
                    <div className="ml-5 pl-2 border-l border-lavender-border/20 space-y-0.5">
                      {subNodes.map(sub => {
                        const isSubSelected = selectedGenreId === sub.id;
                        const subCount = getArtistsByGenre(sub.id).length;

                        return (
                          <button
                            key={sub.id}
                            type="button"
                            onClick={() => setSelectedGenreId(sub.id)}
                            className={`w-full text-left px-2 py-1 rounded-md text-[11px] flex items-center justify-between transition-all cursor-pointer ${
                              isSubSelected
                                ? 'bg-lavender-accent/30 text-lavender-accent font-extrabold border border-lavender-accent/40'
                                : 'hover:bg-lavender-surface/20 text-lavender-text/70 font-medium'
                            }`}
                          >
                            <span className="truncate">├ {sub.label}</span>
                            <span className="text-[9px] font-mono text-lavender-text/40">
                              {subCount}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Listview Column (7 cols) */}
        <div className="md:col-span-7 bg-black/40 border border-lavender-border/40 rounded-xl flex flex-col overflow-hidden">
          {/* Header & Search Bar */}
          <div className="p-2.5 bg-black/50 border-b border-lavender-border/30 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[11px] font-extrabold text-lavender-accent uppercase tracking-wider flex items-center gap-1.5 truncate">
                <Music size={13} /> Artists & Bands ({visibleArtists.length})
              </span>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={selectAllVisible}
                  className="text-[10px] font-bold text-lavender-accent hover:underline cursor-pointer"
                >
                  Select All
                </button>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search size={13} className="absolute left-2.5 top-2.5 text-lavender-text/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search bands or artists (e.g. Roxette, AC/DC, Madonna)..."
                className="w-full bg-black/60 border border-lavender-border/50 text-lavender-text placeholder:text-lavender-text/40 text-xs rounded-lg pl-8 pr-3 py-1.5 focus:outline-none focus:border-lavender-accent"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-2 text-lavender-text/40 hover:text-white"
                >
                  <X size={12} />
                </button>
              )}
            </div>
          </div>

          {/* Listview Content */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1.5 custom-scrollbar">
            {visibleArtists.length === 0 ? (
              <div className="p-6 text-center text-xs text-lavender-text/50">
                No artists found matching your filter or search query.
              </div>
            ) : (
              visibleArtists.map(artist => {
                const isSelected = selectedArtists.includes(artist.id);

                return (
                  <div
                    key={artist.id}
                    onClick={() => toggleArtistSelect(artist.id)}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 ${
                      isSelected
                        ? 'bg-lavender-accent/15 border-lavender-accent/60 shadow-sm'
                        : 'bg-lavender-surface/10 border-lavender-border/25 hover:border-lavender-border/50'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleArtistSelect(artist.id)}
                      onClick={e => e.stopPropagation()}
                      className="mt-0.5 accent-lavender-accent h-3.5 w-3.5 rounded cursor-pointer shrink-0"
                    />

                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between gap-1.5">
                        <span className="font-bold text-xs text-lavender-text truncate">
                          {artist.name}
                        </span>
                        <div className="flex items-center gap-1 shrink-0">
                          {artist.era && (
                            <span className="text-[9px] font-mono text-lavender-text/50 bg-black/40 px-1.5 py-0.5 rounded">
                              {artist.era}
                            </span>
                          )}
                          <span
                            className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded ${
                              artist.type === 'band'
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                            }`}
                          >
                            {artist.type}
                          </span>
                        </div>
                      </div>

                      <p className="text-[10.5px] text-lavender-text/70 line-clamp-2 leading-relaxed">
                        {artist.musicalDirectives}
                      </p>

                      <div className="flex flex-wrap gap-1 pt-0.5">
                        {artist.styleKeywords.map((kw, i) => (
                          <span
                            key={i}
                            className="text-[8.5px] font-mono text-lavender-text/50 bg-black/30 px-1.5 py-0.2 rounded"
                          >
                            #{kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
