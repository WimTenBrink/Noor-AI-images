import React, { useState, useEffect } from 'react';
import { Dialog } from './Dialog';
import { MarkdownView } from './MarkdownView';
import { WARDROBE_MD } from '../../constants/wardrobe';
import wardrobesData from '../../../public/wardrobes.json';
import { getSortedSingerEvents } from '../../lib/wardrobesHelper';
import { Copy, Check, Palette, Sparkles, Footprints, Shirt } from 'lucide-react';
import { motion } from 'motion/react';

interface WardrobeDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WardrobeDialog: React.FC<WardrobeDialogProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'interactive' | 'document'>('interactive');
  const [selectedMember, setSelectedMember] = useState<string>('fannie');
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});
  const [wardrobeDoc, setWardrobeDoc] = useState<string>(WARDROBE_MD);

  useEffect(() => {
    if (isOpen) {
      fetch('/markdown/wardrobe.md', { cache: 'no-cache' })
        .then(res => {
          if (res.ok) return res.text();
          throw new Error('Failed to load live markdown');
        })
        .then(text => setWardrobeDoc(text))
        .catch(() => setWardrobeDoc(WARDROBE_MD));
    }
  }, [isOpen]);

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStates(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopiedStates(prev => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const members = [
    { id: 'miranda', name: 'Miranda Noor', avatar: '🌊', color: 'from-blue-600/30 to-blue-500/10 border-blue-500/30' },
    { id: 'annelies', name: 'Annelies Brink', avatar: '☀️', color: 'from-emerald-600/30 to-emerald-500/10 border-emerald-500/30' },
    { id: 'fannie', name: 'Fannie de Jong', avatar: '🦨', color: 'from-purple-600/30 to-purple-500/10 border-purple-500/30' },
    { id: 'emma', name: 'Emma Vermeer', avatar: '🌿', color: 'from-red-600/30 to-red-500/10 border-red-500/30' },
    { id: 'senna', name: 'Senna Bakker', avatar: '🎙️', color: 'from-amber-600/30 to-amber-500/10 border-amber-500/30' }
  ];

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title="Noor Wardrobe System"
      size="full"
    >
      <div className="w-full h-full flex flex-col bg-lavender-bg text-lavender-text font-sans">
        {/* Navigation Tabs */}
        <div className="flex justify-between items-center px-4 py-2 bg-lavender-surface/60 border-b border-lavender-border">
          <div className="flex gap-1.5">
            <button
              onClick={() => setActiveTab('interactive')}
              className={`px-3.5 py-1.5 rounded-full font-bold text-xs transition-all ${
                activeTab === 'interactive'
                  ? 'bg-lavender-accent text-lavender-bg shadow-md'
                  : 'hover:bg-lavender-surface text-lavender-text/70'
              }`}
            >
              Interactive Closets
            </button>
            <button
              onClick={() => setActiveTab('document')}
              className={`px-3.5 py-1.5 rounded-full font-bold text-xs transition-all ${
                activeTab === 'document'
                  ? 'bg-lavender-accent text-lavender-bg shadow-md'
                  : 'hover:bg-lavender-surface text-lavender-text/70'
              }`}
            >
              System Initialization Document
            </button>
          </div>
          <div className="text-[10px] font-mono text-lavender-text/40">
            SECURE REPOSITORY // KATJE B.V.
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-hidden">
          {activeTab === 'document' ? (
            <div className="w-full h-full p-3 overflow-auto">
              <div className="max-w-4xl mx-auto bg-lavender-surface border border-lavender-border rounded-lg shadow-lg h-full overflow-hidden">
                <MarkdownView content={wardrobeDoc} filename="Noor_Quartet_Wardrobe_System" />
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col md:flex-row p-4 gap-4 overflow-hidden">
              {/* Member Selector Left Panel */}
              <div className="w-full md:w-1/4 flex flex-col gap-2 overflow-y-auto">
                <h3 className="text-xs font-semibold tracking-widest text-lavender-accent uppercase px-2 mb-1">Quartet Members</h3>
                {members.map(member => (
                  <button
                    key={member.id}
                    onClick={() => setSelectedMember(member.id)}
                    className={`p-3 rounded-lg text-left border transition-all flex items-center gap-3.5 ${
                      selectedMember === member.id
                        ? `bg-gradient-to-r ${member.color} border-lavender-accent text-lavender-accent font-bold scale-[1.01] shadow-md`
                        : 'bg-lavender-surface border-lavender-border hover:bg-lavender-surface/80 hover:scale-[1.005]'
                    }`}
                  >
                    <span className={`w-10 h-10 flex items-center justify-center rounded-lg border text-xl shrink-0 transition-all ${
                      selectedMember === member.id ? 'bg-black/20 border-lavender-accent' : 'bg-lavender-bg border-lavender-border/40'
                    }`}>
                      {member.avatar}
                    </span>
                    <div>
                      <div className="text-base leading-tight">{member.name}</div>
                      <div className="text-[10px] text-lavender-text/50 font-mono mt-0.5 capitalize">{member.id} wardrobe active</div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Selected Closet Detail View */}
              <div className="flex-1 bg-lavender-surface border border-lavender-border rounded-xl p-4 overflow-y-auto shadow-inner">
                {(() => {
                  const singerData = wardrobesData.singers.find(s => s.id === selectedMember);
                  const currentMember = members.find(m => m.id === selectedMember);
                  if (!singerData) return null;

                  const copyIdColor = `${selectedMember}-palette`;

                  return (
                    <motion.div
                      key={selectedMember}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="flex justify-between items-start border-b border-lavender-border/60 pb-3">
                        <div>
                          <h2 className="text-xl font-extrabold text-lavender-accent tracking-tight">{currentMember?.name}</h2>
                          <p className="text-[10px] font-mono text-lavender-text/50 uppercase mt-0.5">Role: {singerData.role}</p>
                        </div>
                        
                        {/* Palette Display */}
                        <div className="flex items-center gap-1.5 bg-lavender-surface border border-lavender-border px-2 py-1 rounded-md text-[11px] leading-none">
                          <Palette size={12} className="text-lavender-accent animate-pulse" />
                          <span className="font-mono text-lavender-text/80">{singerData.palette}</span>
                          <button
                            onClick={() => handleCopyText(copyIdColor, singerData.palette)}
                            className="p-1 hover:bg-lavender-surface rounded text-lavender-text/40 hover:text-lavender-accent ml-1.5"
                            title="Copy Palette"
                          >
                            {copiedStates[copyIdColor] ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
                          </button>
                        </div>
                      </div>

                      {/* Wardrobe Grid Events */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {getSortedSingerEvents(selectedMember).map((ev, evIdx) => {
                          const isBarefoot = ev.footwear.toLowerCase().includes('barefoot');
                          return (
                            <div key={ev.event || evIdx} className="bg-lavender-bg border border-lavender-border/40 p-3.5 rounded-lg space-y-2 shadow-md relative group">
                              <div className="flex justify-between items-center border-b border-lavender-border/20 pb-1.5">
                                <h4 className="text-xs font-bold tracking-wider text-lavender-accent uppercase flex items-center gap-1.5">
                                  <Shirt size={13} />
                                  {ev.title}
                                </h4>
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 border ${
                                  isBarefoot
                                    ? 'bg-emerald-950/40 text-emerald-300 border-emerald-500/30'
                                    : 'bg-amber-950/40 text-amber-300 border-amber-500/30'
                                }`}>
                                  <Footprints size={11} />
                                  {ev.footwear}
                                </span>
                              </div>

                              <ul className="space-y-2 pt-1">
                                {ev.clothes.map((piece, pieceIdx) => {
                                  const copyKey = `${selectedMember}-${ev.event}-${pieceIdx}`;
                                  const fullText = `${piece.color} ${piece.name} - ${piece.description}`;
                                  return (
                                    <li key={pieceIdx} className="flex justify-between items-start text-xs border-b border-lavender-border/10 pb-1.5 hover:border-lavender-accent/30 transition-colors">
                                      <div>
                                        <div className="font-semibold text-lavender-text">
                                          <span className="text-lavender-accent font-bold mr-1">[{piece.color}]</span>
                                          {piece.name}
                                        </div>
                                        <div className="text-[11px] text-lavender-text/60 mt-0.5 leading-normal">{piece.description}</div>
                                      </div>
                                      <button
                                        onClick={() => handleCopyText(copyKey, fullText)}
                                        className="p-1 hover:bg-lavender-surface rounded text-lavender-text/30 hover:text-lavender-accent transition-colors shrink-0 ml-2"
                                        title="Copy piece details"
                                      >
                                        {copiedStates[copyKey] ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
                                      </button>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  );
                })()}
              </div>
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
};
