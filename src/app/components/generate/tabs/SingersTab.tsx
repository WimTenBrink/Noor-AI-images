import React, { useState } from 'react';
import { Check, Mic, Music, Search } from 'lucide-react';
import { HeaderBanner } from '../HeaderBanner';
import { SINGERS } from '../../../../constants/singers';
import { ALL_INSTRUMENTS } from '../../../../constants/instruments';

export const DEFAULT_SINGER_INSTRUMENTS: Record<string, string> = {
  miranda: 'Fender Jazz Bass',
  annelies: 'Acoustic Guitar',
  fannie: 'Bodhrán',
  emma: 'Synthesizer'
};

interface SingersTabProps {
  singersSubTab: string;
  setSingersSubTab: (subId: string) => void;
  selectedBand: string;
  setSelectedBand: (band: string) => void;
  selectedLead: string;
  setSelectedLead: (lead: string) => void;
  leadSingingPercentage: number;
  setLeadSingingPercentage: (val: number) => void;
  singerInstruments?: Record<string, string>;
  setSingerInstruments?: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  onOptionChange?: () => void;
}

export const SingersTab: React.FC<SingersTabProps> = ({
  singersSubTab,
  selectedBand,
  setSelectedBand,
  selectedLead,
  setSelectedLead,
  leadSingingPercentage,
  setLeadSingingPercentage,
  singerInstruments = DEFAULT_SINGER_INSTRUMENTS,
  setSingerInstruments,
  onOptionChange
}) => {
  const [activeSingerModal, setActiveSingerModal] = useState<string | null>(null);
  const [searchFilter, setSearchFilter] = useState('');

  // Parse active main singers list from selectedBand string (e.g. "miranda,annelies,fannie,emma")
  const activeMainSingers = selectedBand && selectedBand.length > 0
    ? selectedBand.split(',').filter(Boolean)
    : ['miranda', 'annelies', 'fannie', 'emma'];

  const toggleMainSinger = (singerId: string) => {
    let updated: string[];
    if (activeMainSingers.includes(singerId)) {
      if (activeMainSingers.length > 1) {
        updated = activeMainSingers.filter(id => id !== singerId);
      } else {
        updated = activeMainSingers; // Keep at least one
      }
    } else {
      updated = [...activeMainSingers, singerId];
    }
    setSelectedBand(updated.join(','));
    if (onOptionChange) onOptionChange();
  };

  const selectAllMainSingers = () => {
    setSelectedBand('miranda,annelies,fannie,emma');
    if (onOptionChange) onOptionChange();
  };

  const assignSingerInstrument = (singerId: string, instName: string) => {
    if (setSingerInstruments) {
      setSingerInstruments(prev => ({ ...prev, [singerId]: instName }));
    }
    if (onOptionChange) onOptionChange();
  };

  return (
    <div className="space-y-4 animate-fade-in">
      {/* 1. BAND ENSEMBLE FORMATION (MAIN PARTS SELECTION) */}
      {singersSubTab === 'bandFormation' && (
        <div className="space-y-3">
          <HeaderBanner
            title="Band Ensemble Formation - Main Parts"
            desc="Select which band singers perform the main lead and featured vocal parts."
          />

          <div className="flex items-center justify-between bg-black/30 p-2.5 rounded-2xl border border-lavender-border/20 mb-2">
            <span className="text-xs font-bold text-lavender-text/80">
              Active Main Vocal Performers: <span className="text-lavender-accent font-black">{activeMainSingers.length} of 4</span>
            </span>
            <button
              type="button"
              onClick={selectAllMainSingers}
              className="text-[10.5px] font-bold text-lavender-accent hover:underline bg-lavender-accent/15 px-2.5 py-1 rounded-xl border border-lavender-accent/30 cursor-pointer"
            >
              Select All 4 Singers
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {SINGERS.map((singer) => {
              const isSelected = activeMainSingers.includes(singer.id);
              return (
                <div
                  key={singer.id}
                  onClick={() => toggleMainSinger(singer.id)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                    isSelected
                      ? 'bg-lavender-accent/20 border-lavender-accent text-white shadow-lg'
                      : 'bg-black/40 border-lavender-border/25 hover:bg-lavender-surface/10 text-lavender-text/70 opacity-60'
                  }`}
                >
                  <div className="relative shrink-0">
                    <img
                      src={singer.photo}
                      alt={singer.name}
                      className={`w-12 h-12 rounded-xl object-cover border ${
                        isSelected ? 'border-lavender-accent' : 'border-lavender-border/30 grayscale'
                      }`}
                    />
                    <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black border ${
                      isSelected ? 'bg-lavender-accent text-black border-black' : 'bg-black/80 text-lavender-text/40 border-lavender-border/30'
                    }`}>
                      {isSelected ? <Check size={12} /> : '+'}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between gap-1">
                      <span className={`text-xs ${isSelected ? 'font-black text-white' : 'font-extrabold text-lavender-text'}`}>
                        {singer.name}
                      </span>
                      <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold shrink-0 ${
                        isSelected ? 'bg-lavender-accent/25 text-lavender-accent border border-lavender-accent/40' : 'bg-black/50 text-lavender-text/50'
                      }`}>
                        {singer.role}
                      </span>
                    </div>

                    <p className="text-[10px] text-lavender-text/60 line-clamp-2 leading-relaxed">
                      {singer.description}
                    </p>

                    <span className="text-[9.5px] font-bold text-emerald-400 block pt-0.5">
                      {isSelected ? '✓ Performs Main Part' : '⚪ Backing / Choir Harmony Only'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. PRIMARY LEAD VOCALIST */}
      {singersSubTab === 'leadVocalist' && (
        <div className="space-y-3">
          <HeaderBanner
            title="Primary Lead Vocalist"
            desc="Assign primary lead vocal responsibilities."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
            {SINGERS.map((m) => {
              const isSelected = selectedLead === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => {
                    setSelectedLead(m.id);
                    if (onOptionChange) onOptionChange();
                  }}
                  className={`text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                    isSelected
                      ? 'bg-lavender-accent/20 border-lavender-accent text-white shadow-lg'
                      : 'bg-black/40 border-lavender-border/25 hover:bg-lavender-surface/10 text-lavender-text/80'
                  }`}
                >
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="w-11 h-11 rounded-xl object-cover border border-lavender-border/30 shrink-0"
                  />
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black">{m.name}</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-lavender-accent/15 text-lavender-accent font-bold">
                        {m.role}
                      </span>
                    </div>
                    <p className="text-[10px] text-lavender-text/50 leading-snug line-clamp-2">
                      {m.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. INDIVIDUAL SINGER INSTRUMENTS */}
      {singersSubTab === 'individualInstruments' && (
        <div className="space-y-4">
          <HeaderBanner
            title="Individual Singer Main Instruments"
            desc="Select the main instrument performed by each individual singer from the master instrument catalog."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SINGERS.map((singer) => {
              const currentInstrument = singerInstruments[singer.id] || DEFAULT_SINGER_INSTRUMENTS[singer.id] || 'Acoustic Guitar';
              const isOpen = activeSingerModal === singer.id;

              return (
                <div
                  key={singer.id}
                  className="bg-black/40 border border-lavender-border/25 rounded-2xl p-4 space-y-3 shadow-md hover:border-lavender-accent/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={singer.photo}
                        alt={singer.name}
                        className="w-12 h-12 rounded-xl object-cover border border-lavender-border/30 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-xs font-black text-white truncate">{singer.name}</span>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-lavender-accent/15 text-lavender-accent font-bold shrink-0">
                            {singer.role}
                          </span>
                        </div>
                        <p className="text-[10px] text-lavender-text/60 line-clamp-1">{singer.description}</p>
                      </div>
                    </div>

                    {/* Assigned Instrument Box */}
                    <div className="bg-black/60 p-2.5 rounded-xl border border-lavender-border/20 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-7 h-7 rounded-lg bg-lavender-accent/15 border border-lavender-accent/30 flex items-center justify-center shrink-0">
                          <Music size={14} className="text-lavender-accent" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[9px] text-lavender-text/50 uppercase font-bold block">Primary Instrument:</span>
                          <span className="text-xs font-black text-emerald-400 truncate block">
                            {currentInstrument}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setActiveSingerModal(isOpen ? null : singer.id);
                          setSearchFilter('');
                        }}
                        className="text-[10.5px] font-extrabold px-3 py-1.5 rounded-xl bg-lavender-accent/20 text-lavender-accent border border-lavender-accent/40 hover:bg-lavender-accent hover:text-black transition-all cursor-pointer shrink-0"
                      >
                        {isOpen ? 'Close Selection' : 'Change Instrument'}
                      </button>
                    </div>
                  </div>

                  {/* Searchable Instrument Dropdown Picker */}
                  {isOpen && (
                    <div className="bg-lavender-surface/15 p-3 rounded-2xl border border-lavender-accent/40 space-y-2 mt-2 animate-fade-in shadow-xl">
                      <div className="relative">
                        <Search size={12} className="absolute left-2.5 top-2 text-lavender-text/50" />
                        <input
                          type="text"
                          placeholder="Search instrument..."
                          value={searchFilter}
                          onChange={(e) => setSearchFilter(e.target.value)}
                          className="w-full bg-black/70 border border-lavender-border/40 rounded-xl pl-7 pr-3 py-1 text-[11px] text-white focus:outline-none focus:border-lavender-accent"
                          autoFocus
                        />
                      </div>

                      {/* Filtered Instrument List */}
                      <div className="max-h-52 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
                        {ALL_INSTRUMENTS.filter((inst) =>
                          inst.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
                          inst.description.toLowerCase().includes(searchFilter.toLowerCase()) ||
                          (inst.groups && inst.groups.some(g => g.toLowerCase().includes(searchFilter.toLowerCase())))
                        ).map((inst) => {
                          const isSelected = currentInstrument === inst.name;
                          return (
                            <button
                              key={inst.name}
                              type="button"
                              onClick={() => {
                                assignSingerInstrument(singer.id, inst.name);
                                setActiveSingerModal(null);
                                setSearchFilter('');
                              }}
                              className={`w-full text-left p-2 rounded-xl border transition-all flex items-center justify-between text-[11px] cursor-pointer ${
                                isSelected
                                  ? 'bg-lavender-accent text-black font-extrabold border-lavender-accent shadow'
                                  : 'bg-black/50 hover:bg-lavender-surface/30 text-lavender-text border-lavender-border/20'
                              }`}
                            >
                              <div className="min-w-0 pr-2">
                                <span className="block font-black truncate">{inst.name}</span>
                                <span className={`text-[9px] block truncate ${isSelected ? 'text-black/70 font-semibold' : 'text-lavender-text/50'}`}>
                                  {inst.description}
                                </span>
                              </div>
                              {isSelected && <Check size={14} className="shrink-0 text-black" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. VOCAL MIX SHARE */}
      {singersSubTab === 'vocalMix' && (
        <div className="space-y-3 bg-lavender-surface/10 border border-lavender-border/30 rounded-2xl p-4">
          <HeaderBanner
            title="Lead Singing Share Percentage"
            desc="Balance lead solo lines versus collective band chorus harmonies."
          />
          <div className="flex items-center justify-between gap-4 pt-3">
            <span className="text-xs font-bold text-lavender-text">Lead Vocalist Solos:</span>
            <input
              type="range"
              min={10}
              max={90}
              value={leadSingingPercentage}
              onChange={(e) => {
                setLeadSingingPercentage(parseInt(e.target.value, 10));
                if (onOptionChange) onOptionChange();
              }}
              className="flex-1 accent-lavender-accent cursor-pointer"
            />
            <span className="text-sm font-black text-lavender-accent">{leadSingingPercentage}%</span>
          </div>
          <p className="text-[10px] text-lavender-text/50 text-right">
            Remaining ({100 - leadSingingPercentage}%) allocated to band choir harmonies & backing vocals.
          </p>
        </div>
      )}
    </div>
  );
};

