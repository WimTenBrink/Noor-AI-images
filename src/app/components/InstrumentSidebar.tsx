import React from 'react';

interface InstrumentSidebarProps {
  onSelectSinger?: (singerId: string) => void;
}

export const InstrumentSidebar: React.FC<InstrumentSidebarProps> = ({ onSelectSinger }) => {
  return (
    <aside className="w-[16vw] border-r border-lavender-border bg-lavender-bg flex flex-col h-full overflow-hidden shrink-0 select-none">
      {/* Miranda Noor Section */}
      <div 
        onClick={() => onSelectSinger?.('miranda')}
        className="flex-1 relative group overflow-hidden border-b border-lavender-border cursor-pointer"
        title="Click to view Miranda Noor profile and details"
      >
        <img 
          src="/singers/Miranda_Noor.jpg" 
          alt="Miranda Noor" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent flex flex-col justify-end p-3.5 group-hover:bg-black/20 transition-colors">
          <h3 className="font-extrabold text-base tracking-wide text-lavender-text mb-0 font-sans drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:text-lavender-accent transition-colors">
            Miranda Noor
          </h3>
          <p className="font-mono text-[10px] font-semibold tracking-wider text-lavender-accent drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] uppercase">
            Soprano &middot; Lead Vocals
          </p>
        </div>
      </div>

      {/* Annelies Brink Section */}
      <div 
        onClick={() => onSelectSinger?.('annelies')}
        className="flex-1 relative group overflow-hidden cursor-pointer"
        title="Click to view Annelies Brink profile and details"
      >
        <img 
          src="/singers/Annelies_Brink.jpg" 
          alt="Annelies Brink" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent flex flex-col justify-end p-3.5 group-hover:bg-black/20 transition-colors">
          <h3 className="font-extrabold text-base tracking-wide text-lavender-text mb-0 font-sans drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:text-lavender-accent transition-colors">
            Annelies Brink
          </h3>
          <p className="font-mono text-[10px] font-semibold tracking-wider text-lavender-accent drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] uppercase">
            Alto &middot; Rhythm Guitar
          </p>
        </div>
      </div>
    </aside>
  );
};

