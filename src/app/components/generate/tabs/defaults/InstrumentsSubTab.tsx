import React from 'react';
import { Sparkles, Disc, Music, CloudRain, Volume2, Wind, Radio, Zap, Flame } from 'lucide-react';
import { AppDefaults } from '../../../../../types';

interface InstrumentsSubTabProps {
  appDefaults: AppDefaults;
  setAppDefaults: React.Dispatch<React.SetStateAction<AppDefaults>>;
}

export const InstrumentsSubTab: React.FC<InstrumentsSubTabProps> = ({
  appDefaults,
  setAppDefaults
}) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center gap-2 mb-2">
        <span className="h-1.5 w-1.5 rounded-full bg-lavender-accent animate-pulse" />
        <h3 className="text-xs font-black uppercase tracking-wider text-lavender-accent/90">
          Core Instruments & Barn Studio Environment
        </h3>
      </div>

      {/* Barnyard Animal Ambience Selector */}
      <div className="bg-lavender-surface/15 border border-lavender-border/30 rounded-2xl p-4 space-y-2 mb-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-extrabold text-lavender-text flex items-center gap-1.5">
            <Sparkles size={14} className="text-amber-400" /> Barnyard Animal Ambience
          </span>
          <span className="text-[9px] px-2 py-0.5 rounded bg-lavender-accent/15 text-lavender-accent font-black">
            Rustic Soundscape
          </span>
        </div>
        <p className="text-[10px] text-lavender-text/60 leading-relaxed">
          Select background farm animal sounds recorded around the Abcoude converted barn studio during performances:
        </p>
        <select
          value={appDefaults.barnAnimalSounds || 'none'}
          onChange={(e) => setAppDefaults((prev) => ({ ...prev, barnAnimalSounds: e.target.value as any }))}
          className="w-full bg-black/60 border border-lavender-border/50 text-lavender-text rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-lavender-accent transition-all cursor-pointer font-medium"
        >
          <option value="none" className="bg-lavender-bg text-lavender-text">None (Quiet Studio Atmosphere)</option>
          <option value="goats" className="bg-lavender-bg text-lavender-text">Goats (Gentle bleating in background)</option>
          <option value="sheep" className="bg-lavender-bg text-lavender-text">Sheep (Soft baas in background)</option>
          <option value="cows" className="bg-lavender-bg text-lavender-text">Cows (Distant mooing & cowbells)</option>
          <option value="chickens" className="bg-lavender-bg text-lavender-text">Chickens (Rustic clucking & wing rustling)</option>
          <option value="pigs" className="bg-lavender-bg text-lavender-text">Pigs (Playful grunts)</option>
          <option value="roosters" className="bg-lavender-bg text-lavender-text">Roosters (Early morning crowing)</option>
          <option value="horses" className="bg-lavender-bg text-lavender-text">Horses (Soft whinnies & hooves)</option>
          <option value="ducks" className="bg-lavender-bg text-lavender-text">Ducks (Gentle pond quacking)</option>
          <option value="all-farm-animals" className="bg-lavender-bg text-lavender-text">All Farm Animals (Lively rustic barnyard soundscape)</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* Steelpan Drums */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={!!appDefaults.steelpanDrums}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, steelpanDrums: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Disc size={14} className="text-amber-400" /> Steelpan Drums
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Tuned metal steelpan drums creating bright, tropical ringing percussive melodies.
            </p>
          </div>
        </label>

        {/* Bagpipes */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.bagpipes}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, bagpipes: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Music size={14} className="text-cyan-400" /> Great Highland Bagpipes
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Celtic drone accompaniment and soaring high pipe melodies.
            </p>
          </div>
        </label>

        {/* Crwth */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.crwth}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, crwth: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Disc size={14} className="text-indigo-400" /> Ancient Welsh Crwth
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Bowed six-string lyre adding archaic Welsh harmonics.
            </p>
          </div>
        </label>

        {/* Didgeridoo */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={!!appDefaults.didgeridoo}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, didgeridoo: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Wind size={14} className="text-orange-400" /> Primitive Didgeridoo
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Indigenous Australian hollow wind instrument producing deep subterranean drone overtones.
            </p>
          </div>
        </label>

        {/* Bullroarer */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={!!appDefaults.bullroarer}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, bullroarer: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Radio size={14} className="text-amber-500" /> Whirled Bullroarer
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Primitive whirled aerophone blade creating low, atmospheric roaring wind textures.
            </p>
          </div>
        </label>

        {/* Paleolithic Bone Flute */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={!!appDefaults.boneFlute}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, boneFlute: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Wind size={14} className="text-emerald-400" /> Paleolithic Bone Flute
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Prehistoric hollow carved bone flute delivering eerie, atmospheric wind whistles.
            </p>
          </div>
        </label>

        {/* Resonant Log Drum */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={!!appDefaults.logDrum}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, logDrum: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Flame size={14} className="text-yellow-500" /> Resonant Log Drum
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Primitive hollowed wooden trunk slit drum providing deep, earthy percussive pulses.
            </p>
          </div>
        </label>

        {/* Ancient Jaw Harp */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={!!appDefaults.jawHarp}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, jawHarp: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Zap size={14} className="text-rose-400" /> Ancient Jaw Harp
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Mouth-resonated reed instrument delivering bouncing, rubbery overtone drone rhythms.
            </p>
          </div>
        </label>

        {/* Stone Lithophone */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={!!appDefaults.stoneLithophone}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, stoneLithophone: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Sparkles size={14} className="text-purple-400" /> Stone Lithophone
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Primitive tuned stone slabs struck with mallets for crystalline rock chime resonances.
            </p>
          </div>
        </label>

        {/* Barn Recording Studio */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.barnStudio}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, barnStudio: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Sparkles size={14} className="text-amber-400" /> Abcoude Barn Studio Resonance
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Simulates warm acoustics, high timber ceilings, and cozy studio atmosphere.
            </p>
          </div>
        </label>

        {/* Rain on Roof */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.barnRainRoof || false}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, barnRainRoof: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <CloudRain size={14} className="text-blue-400" /> Gentle Rain on Tin Roof
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Ambient polder rainfall pattering softly on the barn roof during recording sessions.
            </p>
          </div>
        </label>

        {/* Acoustic Only */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.acousticOnly}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, acousticOnly: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Volume2 size={14} className="text-emerald-400" /> Acoustic-Only Instruments
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Strips heavy synthesizers and electric guitars in favor of pure unplugged acoustic strings.
            </p>
          </div>
        </label>
      </div>
    </div>
  );
};

