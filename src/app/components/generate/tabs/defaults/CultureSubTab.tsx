import React from 'react';
import { Globe, Compass, Landmark } from 'lucide-react';
import { AppDefaults } from '../../../../../types';

interface CultureSubTabProps {
  appDefaults: AppDefaults;
  setAppDefaults: React.Dispatch<React.SetStateAction<AppDefaults>>;
}

export const CultureSubTab: React.FC<CultureSubTabProps> = ({
  appDefaults,
  setAppDefaults
}) => {
  const continents = [
    { key: 'continentAfrica', label: 'Africa', flag: '🌍', desc: 'Sub-Saharan & Pan-African rhythmic traditions and call-and-response vocal structures.' },
    { key: 'continentAntarctica', label: 'Antarctica', flag: '🇦🇶', desc: 'Polar ambient stillness, echoing glacial reverberation, and austere isolation themes.' },
    { key: 'continentAsia', label: 'Asia', flag: '🌏', desc: 'Silk Road instruments, pentatonic scales, microtonal vocal inflections, and eastern drones.' },
    { key: 'continentEurope', label: 'Europe', flag: '🇪🇺', desc: 'Folk ballads, polyphonic choir arrangements, ancient woodwinds, and troubadour storytelling.' },
    { key: 'continentNorthAmerica', label: 'North America', flag: '🌎', desc: 'Appalachian acoustic folk, indigenous drum circles, bluesy modal inflections, and coastal roots.' },
    { key: 'continentSouthAmerica', label: 'South America', flag: '🇦🇷', desc: 'Andean panpipes, charango string arpeggios, syncopated afro-latino percussion, and forest rhythms.' },
    { key: 'continentOceania', label: 'Oceania / Australia', flag: '🇦🇺', desc: 'Pacific island polyphony, customary chant, didgeridoo drones, and customary ocean faring songs.' }
  ] as const;

  const majorCultures = [
    { key: 'cultureEuropean', label: 'European Culture', flag: '🏰', desc: 'Chanson, Celtic, Nordic, and continental chamber folk harmonics.' },
    { key: 'cultureIndian', label: 'Indian / South Asian Culture', flag: '🇮🇳', desc: 'Raga-inspired scales, sitar/tanpura drones, tabla rhythms, and ornamental vocal taans.' },
    { key: 'cultureAboriginal', label: 'Aboriginal / Indigenous Australian', flag: '🪃', desc: 'Yidaki (didgeridoo) drones, clapsticks, songline storytelling, and earth connection.' },
    { key: 'cultureNativeAmerican', label: 'Native American / Indigenous Americas', flag: '🪶', desc: 'Flute melodies, ceremonial frame drum pulses, honor songs, and nature reverences.' },
    { key: 'cultureEastAsian', label: 'East Asian Culture', flag: '⛩️', desc: 'Guzheng, Koto, Shakuhachi woodwinds, pentatonic harmonies, and minimalist poetic cadence.' },
    { key: 'cultureMiddleEastern', label: 'Middle Eastern / Arabic Culture', flag: '🕌', desc: 'Oud improvisations, Maqam scales, Nay flute, darbuka percussion, and microtonal vocal ornamentation.' },
    { key: 'cultureAfrican', label: 'African / Sub-Saharan Culture', flag: '🪘', desc: 'Kora harps, djembe drum polyrhythms, mbira thumb pianos, and layered community choruses.' },
    { key: 'cultureLatinAmerican', label: 'Latin American / Hispanic Culture', flag: '🪇', desc: 'Spanish nylon guitar, mariachi brass, cumbia/samba rhythms, and passionate lyrical drama.' },
    { key: 'culturePolynesian', label: 'Polynesian / Pasifika Culture', flag: '🌺', desc: 'Ukulele, log drum beats, rich island choir harmonies, and oceanic chant traditions.' },
    { key: 'cultureCelticNordic', label: 'Celtic & Nordic Culture', flag: '🎻', desc: 'Hardanger fiddles, tin whistles, bodhrán drums, joik vocalizations, and fjord ballads.' },
    { key: 'cultureSlavic', label: 'Slavic & Balkan Culture', flag: '🪗', desc: 'Close-interval vocal harmonies, odd time signature folk dances, accordion, and gusle strings.' },
    { key: 'cultureCaribbean', label: 'Caribbean Culture', flag: '🌴', desc: 'Steel pans, reggae basslines, calypso syncopation, and sunny tropical acoustic grooves.' }
  ] as const;

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="flex items-center gap-2 mb-1">
        <span className="h-1.5 w-1.5 rounded-full bg-lavender-accent animate-pulse" />
        <h3 className="text-xs font-black uppercase tracking-wider text-lavender-accent/90 flex items-center gap-1.5">
          <Globe size={14} className="text-cyan-400" /> Cultural & Continental Background
        </h3>
      </div>
      <p className="text-[11px] text-lavender-text/60 leading-relaxed font-medium">
        Select one or more continents and major global cultures to determine the cultural background, traditional instruments, vocal accents, and storytelling motifs for the song.
      </p>

      {/* CONTINENTS SECTION */}
      <div className="space-y-2">
        <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-lavender-accent flex items-center gap-1.5">
          <Compass size={13} className="text-amber-400" /> Continents (Geographic Origins)
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {continents.map((item) => (
            <label
              key={item.key}
              className="flex items-start gap-3 p-2.5 rounded-xl border border-lavender-border/30 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all"
            >
              <input
                type="checkbox"
                checked={!!appDefaults[item.key as keyof AppDefaults]}
                onChange={(e) =>
                  setAppDefaults((prev) => ({
                    ...prev,
                    [item.key]: e.target.checked
                  }))
                }
                className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
              />
              <div className="min-w-0">
                <span className="text-xs font-extrabold text-lavender-text block flex items-center gap-1.5">
                  <span>{item.flag}</span> {item.label}
                </span>
                <p className="text-[9.5px] text-lavender-text/50 mt-0.5 leading-snug font-medium">
                  {item.desc}
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* MAJOR CULTURES SECTION */}
      <div className="space-y-2 pt-2 border-t border-lavender-border/20">
        <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-lavender-accent flex items-center gap-1.5">
          <Landmark size={13} className="text-emerald-400" /> Major World Cultures
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {majorCultures.map((item) => (
            <label
              key={item.key}
              className="flex items-start gap-3 p-2.5 rounded-xl border border-lavender-border/30 bg-lavender-surface/10 hover:bg-lavender-surface/20 cursor-pointer transition-all"
            >
              <input
                type="checkbox"
                checked={!!appDefaults[item.key as keyof AppDefaults]}
                onChange={(e) =>
                  setAppDefaults((prev) => ({
                    ...prev,
                    [item.key]: e.target.checked
                  }))
                }
                className="mt-0.5 accent-lavender-accent h-4 w-4 shrink-0 rounded"
              />
              <div className="min-w-0">
                <span className="text-xs font-extrabold text-lavender-text block flex items-center gap-1.5">
                  <span>{item.flag}</span> {item.label}
                </span>
                <p className="text-[9.5px] text-lavender-text/50 mt-0.5 leading-snug font-medium">
                  {item.desc}
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
