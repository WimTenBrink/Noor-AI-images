import React from 'react';
import { Sparkles, Heart, Shield, Flame, Compass, Users } from 'lucide-react';
import { AppDefaults } from '../../../../../types';

interface ThemeSubTabProps {
  appDefaults: AppDefaults;
  setAppDefaults: React.Dispatch<React.SetStateAction<AppDefaults>>;
}

export const ThemeSubTab: React.FC<ThemeSubTabProps> = ({
  appDefaults,
  setAppDefaults
}) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center gap-2 mb-2">
        <span className="h-1.5 w-1.5 rounded-full bg-lavender-accent animate-pulse" />
        <h3 className="text-xs font-black uppercase tracking-wider text-lavender-accent/90">
          Theme & Cultural Identity
        </h3>
      </div>
      <p className="text-[11px] text-lavender-text/60 leading-relaxed font-medium mb-3">
        Configure the band's thematic identity, regional heritage, worldview filters, and character dynamics.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* Dutch & Frisian Folk Culture */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.dutchFolkCulture || false}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, dutchFolkCulture: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Compass size={14} className="text-amber-400" /> Dutch & Frisian Folk Heritage
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Integrates Abcoude polder imagery, Frisian maritime folklore, wind-swept dike references, and cozy Dutch 'gezelligheid'.
            </p>
          </div>
        </label>

        {/* Nordic & Celtic Fusion */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.nordicCelticFusion || false}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, nordicCelticFusion: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Sparkles size={14} className="text-cyan-400" /> Nordic & Celtic Folk Fusion
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Combines Scandinavian joik vocalizations, Scottish Highland bagpipes, and Irish bodhrán rhythms into acoustic arrangements.
            </p>
          </div>
        </label>

        {/* Eco-Feminism & Nature Mysticism */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.ecoFeminism || false}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, ecoFeminism: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Flame size={14} className="text-emerald-400" /> Eco-Feminism & Nature Mysticism
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Lyrics honor earth preservation, botanical wisdom, sacred rivers, and matriarchal connection to natural elements.
            </p>
          </div>
        </label>

        {/* Sapphic / Lesbian Themes */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.sapphic}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, sapphic: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Heart size={14} className="text-rose-400" /> Sapphic / Lesbian Themes
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Enforces female-centered romance, sapphic partnerships, and matriarchal family bonds as default thematic focus.
            </p>
          </div>
        </label>

        {/* Paganism */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.pagan}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, pagan: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Shield size={14} className="text-purple-400" /> Active Pagan Worldview
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Incorporate active ancient pagan deities, sacred altars, amulets, and seasonal solstice rituals into song backstories.
            </p>
          </div>
        </label>

        {/* Barefoot Naturism */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.barefootNaturism}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, barefootNaturism: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Users size={14} className="text-indigo-400" /> Barefoot Naturism Element
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Depict singers as comfortably barefoot studio artists with earthy, uninhibited connections to nature and stage floors.
            </p>
          </div>
        </label>

        {/* No Men or Kids */}
        <label className="flex items-start gap-3 p-3 rounded-xl border border-lavender-border/40 hover:border-lavender-accent/50 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all">
          <input
            type="checkbox"
            checked={appDefaults.noMenOrKids}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, noMenOrKids: e.target.checked }))}
            className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
          />
          <div>
            <span className="text-xs font-bold text-lavender-text block flex items-center gap-1.5">
              <Shield size={14} className="text-amber-400" /> Strict All-Female Space
            </span>
            <p className="text-[10px] text-lavender-text/50 mt-0.5 leading-relaxed font-semibold">
              Omit all male names, pronouns, and child references to maintain a strictly female-focused narrative space.
            </p>
          </div>
        </label>
      </div>
    </div>
  );
};
