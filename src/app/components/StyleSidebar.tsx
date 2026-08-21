import React from 'react';

interface StyleSidebarProps {
  onSelectSinger?: (singerId: string) => void;
}

export const StyleSidebar: React.FC<StyleSidebarProps> = ({ onSelectSinger }) => {
  return (
    <aside className="w-[16vw] border-l border-lavender-border bg-lavender-bg flex flex-col h-full overflow-hidden shrink-0 select-none">
      {/* Fannie de Jong Section */}
      <div 
        onClick={() => onSelectSinger?.('fannie')}
        className="flex-1 relative group overflow-hidden border-b border-lavender-border cursor-pointer"
        title="Click to view Fannie de Jong profile and details"
      >
        <img 
          src="/singers/Fannie_de_Jong.jpg" 
          alt="Fannie de Jong" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent flex flex-col justify-end p-3.5 group-hover:bg-black/20 transition-colors">
          <h3 className="font-extrabold text-base tracking-wide text-lavender-text mb-0 font-sans drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:text-lavender-accent transition-colors">
            Fannie de Jong
          </h3>
          <p className="font-mono text-[10px] font-semibold tracking-wider text-lavender-accent drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] uppercase">
            Mezzo-Soprano &middot; Drums
          </p>
        </div>
      </div>

      {/* Emma Vermeer Section */}
      <div 
        onClick={() => onSelectSinger?.('emma')}
        className="flex-1 relative group overflow-hidden cursor-pointer"
        title="Click to view Emma Vermeer profile and details"
      >
        <img 
          src="/singers/Emma_Vermeer.jpg" 
          alt="Emma Vermeer" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent flex flex-col justify-end p-3.5 group-hover:bg-black/20 transition-colors">
          <h3 className="font-extrabold text-base tracking-wide text-lavender-text mb-0 font-sans drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:text-lavender-accent transition-colors">
            Emma Vermeer
          </h3>
          <p className="font-mono text-[10px] font-semibold tracking-wider text-lavender-accent drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] uppercase">
            Contralto &middot; Synthesizers
          </p>
        </div>
      </div>
    </aside>
  );
};

