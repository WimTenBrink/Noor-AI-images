import React, { useState, useEffect } from 'react';
import { Dialog } from './Dialog';
import { MarkdownView } from './MarkdownView';
import { Home, Leaf, Mic2, Heart, Trees, Wheat, Tractor, Bed, Bath, Gamepad, Database, Flower2, RefreshCw, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';
import { ABCOUDE_FARM_MD } from '../../constants/help';

interface FarmDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FarmDialog: React.FC<FarmDialogProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'interactive' | 'document'>('interactive');
  const [farmDoc, setFarmDoc] = useState<string>(ABCOUDE_FARM_MD);

  useEffect(() => {
    if (isOpen) {
      fetch('/markdown/abcoude_farm.md', { cache: 'no-cache' })
        .then(res => {
          if (res.ok) return res.text();
          throw new Error('Failed to load live markdown');
        })
        .then(text => setFarmDoc(text))
        .catch(() => setFarmDoc(ABCOUDE_FARM_MD));
    }
  }, [isOpen]);

  return (
    <Dialog
      isOpen={isOpen}
      onClose={onClose}
      title="Noor Farm Sanctuary"
      size="full"
    >
      <div className="w-full h-full flex flex-col bg-lavender-bg text-lavender-text font-sans">
        {/* Navigation Tabs */}
        <div className="flex justify-between items-center px-6 py-4 bg-lavender-surface/60 border-b border-lavender-border">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('interactive')}
              className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${
                activeTab === 'interactive'
                  ? 'bg-lavender-accent text-lavender-bg shadow-md'
                  : 'hover:bg-lavender-surface text-lavender-text/70'
              }`}
            >
              Farm Sanctuary Overview
            </button>
            <button
              onClick={() => setActiveTab('document')}
              className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${
                activeTab === 'document'
                  ? 'bg-lavender-accent text-lavender-bg shadow-md'
                  : 'hover:bg-lavender-surface text-lavender-text/70'
              }`}
            >
              System Initialization Document
            </button>
          </div>
          <div className="text-xs font-mono text-lavender-text/40">
            SECURE REPOSITORY // KATJE B.V.
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-hidden p-6">
          {activeTab === 'document' ? (
            <div className="w-full h-full p-4 overflow-auto">
              <div className="max-w-4xl mx-auto bg-lavender-surface border border-lavender-border rounded-xl shadow-lg h-full overflow-hidden">
                <MarkdownView content={farmDoc} filename="Abcoude_Farm_Description" />
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="h-full grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto"
            >
              <div className="bg-lavender-surface p-6 rounded-xl border border-lavender-border shadow-inner space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-3 text-lavender-accent">
                    <Home size={24} /> Homestead & Studio
                </h3>
                <ul className="space-y-4 text-sm text-lavender-text/80">
                  <li className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center p-2 rounded-lg border text-xs shrink-0 text-pink-400 bg-pink-500/10 border-pink-500/20">
                      <Bed size={15} />
                    </span>
                    <span>Five bedrooms (2 for residents, 3 for guests)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center p-2 rounded-lg border text-xs shrink-0 text-sky-400 bg-sky-500/10 border-sky-500/20">
                      <Bath size={15} />
                    </span>
                    <span>Wellness wing with home spa and sauna</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center p-2 rounded-lg border text-xs shrink-0 text-purple-400 bg-purple-500/10 border-purple-500/20">
                      <Gamepad size={15} />
                    </span>
                    <span>Gaming entertainment room (4 systems)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center p-2 rounded-lg border text-xs shrink-0 text-emerald-400 bg-emerald-500/10 border-emerald-500/20">
                      <Mic2 size={15} />
                    </span>
                    <span>Dedicated sound studio barn with high-end recording gear</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center p-2 rounded-lg border text-xs shrink-0 text-amber-500 bg-amber-500/10 border-amber-500/20">
                      <Leaf size={15} />
                    </span>
                    <span>Attic for creative crafting materials</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center p-2 rounded-lg border text-xs shrink-0 text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20">
                      <Database size={15} />
                    </span>
                    <span>Server cellar</span>
                  </li>
                </ul>
              </div>

              <div className="bg-lavender-surface p-6 rounded-xl border border-lavender-border shadow-inner space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-3 text-lavender-accent">
                    <Trees size={24} /> Farmlands & Life
                </h3>
                <ul className="space-y-4 text-sm text-lavender-text/80">
                  <li className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center p-2 rounded-lg border text-xs shrink-0 text-amber-500 bg-amber-500/10 border-amber-500/20">
                      <Tractor size={15} />
                    </span>
                    <span>12 Lakenvelder sheep & 6 dwarf goats</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center p-2 rounded-lg border text-xs shrink-0 text-green-400 bg-green-500/10 border-green-500/20">
                      <Trees size={15} />
                    </span>
                    <span>Orchard (apples, walnuts)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center p-2 rounded-lg border text-xs shrink-0 text-yellow-500 bg-yellow-500/10 border-yellow-500/20">
                      <Wheat size={15} />
                    </span>
                    <span>Rotation: potatoes, grains, spinach</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center p-2 rounded-lg border text-xs shrink-0 text-orange-400 bg-orange-500/10 border-orange-500/20">
                      <Leaf size={15} />
                    </span>
                    <span>Greenhouse (paprika, tomatoes)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center p-2 rounded-lg border text-xs shrink-0 text-pink-400 bg-pink-500/10 border-pink-500/20">
                      <Flower2 size={15} />
                    </span>
                    <span>Wildflower conservation areas</span>
                  </li>
                  <li className="flex items-center gap-3 text-red-400 font-bold">
                    <span className="inline-flex items-center justify-center p-2 rounded-lg border text-xs shrink-0 text-red-400 bg-red-500/10 border-red-500/20">
                      <AlertTriangle size={15} />
                    </span>
                    <span>Alert: Miranda is forbidden to enter farmlands</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </Dialog>
  );
};
