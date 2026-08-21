import React from 'react';
import { 
  Music, 
  Mic, 
  Wind, 
  Volume2, 
  Sparkles, 
  Bell, 
  Layers, 
  Activity, 
  Flame, 
  Compass, 
  Feather, 
  Sun, 
  Moon, 
  Shield, 
  Zap, 
  Waves
} from 'lucide-react';
import { ALL_INSTRUMENTS } from '../../constants/instruments';

interface InstrumentIconProps {
  name: string;
  groups?: string[];
  size?: number;
  className?: string;
}

export const InstrumentIcon: React.FC<InstrumentIconProps> = ({
  name,
  groups = [],
  size = 14,
  className = ""
}) => {
  // If groups are empty, lookup in ALL_INSTRUMENTS
  let resolvedGroups = [...groups];
  if (resolvedGroups.length === 0) {
    const entry = ALL_INSTRUMENTS.find(i => i.name.toLowerCase() === name.toLowerCase());
    if (entry && entry.groups) {
      resolvedGroups = entry.groups;
    }
  }

  // Let's analyze name first, then groups to determine the style mapping
  const lowerName = name.toLowerCase();
  
  // 1. Direct name matches for specific iconic instruments
  let icon = <Music size={size} />;
  let colorClass = "text-lavender-accent bg-lavender-accent/10 border-lavender-accent/20";

  // Check group or categories
  const primaryGroup = resolvedGroups.length > 0 ? resolvedGroups[0] : "";

  // Mapping rules based on groups or key names
  if (resolvedGroups.includes("Vocal Cues & Styles") || lowerName.includes("vocal") || lowerName.includes("soprano") || lowerName.includes("coo") || lowerName.includes("chant")) {
    icon = <Mic size={size} />;
    colorClass = "text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20";
  } else if (resolvedGroups.includes("Modern Electronic & Synths") || lowerName.includes("synthesizer") || lowerName.includes("synth") || lowerName.includes("keytar") || lowerName.includes("drum machine") || lowerName.includes("mellotron")) {
    icon = <Zap size={size} />;
    colorClass = "text-cyan-400 bg-cyan-500/10 border-cyan-500/20";
  } else if (resolvedGroups.includes("Drums & Deep Skins") || lowerName.includes("drum") || lowerName.includes("bodhrán") || lowerName.includes("tabla") || lowerName.includes("timpani") || lowerName.includes("kick")) {
    icon = <Activity size={size} />;
    colorClass = "text-rose-400 bg-rose-500/10 border-rose-500/20";
  } else if (resolvedGroups.includes("Percussion & Bells") || lowerName.includes("bell") || lowerName.includes("triangle") || lowerName.includes("chimes") || lowerName.includes("castanets") || lowerName.includes("maracas") || lowerName.includes("claves")) {
    icon = <Bell size={size} />;
    colorClass = "text-amber-300 bg-amber-500/10 border-amber-500/20";
  } else if (resolvedGroups.includes("Classical Bowed Strings") || lowerName.includes("violin") || lowerName.includes("viola") || lowerName.includes("cello") || lowerName.includes("bass") || lowerName.includes("fiddle")) {
    icon = <Layers size={size} />; // Plucked/bowed layered
    colorClass = "text-pink-400 bg-pink-500/10 border-pink-500/20";
  } else if (resolvedGroups.includes("Acoustic Plucked Strings") || lowerName.includes("guitar") || lowerName.includes("harp") || lowerName.includes("lute") || lowerName.includes("zither") || lowerName.includes("mandolin") || lowerName.includes("banjo") || lowerName.includes("pipa") || lowerName.includes("bouzouki")) {
    icon = <Layers size={size} />;
    colorClass = "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
  } else if (resolvedGroups.includes("Woodwinds & Free Reeds") || lowerName.includes("flute") || lowerName.includes("oboe") || lowerName.includes("clarinet") || lowerName.includes("bassoon") || lowerName.includes("accordion") || lowerName.includes("whistle") || lowerName.includes("pipes")) {
    icon = <Wind size={size} />;
    colorClass = "text-teal-400 bg-teal-500/10 border-teal-500/20";
  } else if (resolvedGroups.includes("Brass & Fanfare Horns") || lowerName.includes("trumpet") || lowerName.includes("trombone") || lowerName.includes("tuba") || lowerName.includes("horn") || lowerName.includes("carnyx") || lowerName.includes("cornu")) {
    icon = <Volume2 size={size} />;
    colorClass = "text-orange-400 bg-orange-500/10 border-orange-500/20";
  } else if (resolvedGroups.includes("Celtic Heritage") || lowerName.includes("celtic") || lowerName.includes("bagpipes") || lowerName.includes("crwth")) {
    icon = <Feather size={size} />;
    colorClass = "text-green-400 bg-green-500/10 border-green-500/20";
  } else if (resolvedGroups.includes("Norse & Baltic Folk") || lowerName.includes("norse") || lowerName.includes("tagelharpa") || lowerName.includes("bukkehorn") || lowerName.includes("kravik")) {
    icon = <Shield size={size} />;
    colorClass = "text-amber-500 bg-amber-500/10 border-amber-500/20";
  } else if (resolvedGroups.includes("Ancient & Mythological") || lowerName.includes("myth") || lowerName.includes("ancient") || lowerName.includes("glass harmonica")) {
    icon = <Sparkles size={size} />;
    colorClass = "text-indigo-400 bg-indigo-500/10 border-indigo-500/20";
  } else if (resolvedGroups.includes("East Asian Traditional") || lowerName.includes("guzheng") || lowerName.includes("koto") || lowerName.includes("taiko") || lowerName.includes("shamisen")) {
    icon = <Sun size={size} />;
    colorClass = "text-red-400 bg-red-500/10 border-red-500/20";
  } else if (resolvedGroups.includes("Steppe & Mongolian") || lowerName.includes("mongolian") || lowerName.includes("morin khuur") || lowerName.includes("yatga")) {
    icon = <Compass size={size} />;
    colorClass = "text-sky-400 bg-sky-500/10 border-sky-500/20";
  } else if (resolvedGroups.includes("African & Tribal Beats") || lowerName.includes("djembe") || lowerName.includes("kora") || lowerName.includes("kalimba") || lowerName.includes("talking drum")) {
    icon = <Flame size={size} />;
    colorClass = "text-orange-500 bg-orange-500/10 border-orange-500/20";
  } else if (resolvedGroups.includes("Americas & Tribal Winds") || lowerName.includes("native") || lowerName.includes("panpipe") || lowerName.includes("charango")) {
    icon = <Wind size={size} />;
    colorClass = "text-blue-400 bg-blue-500/10 border-blue-500/20";
  } else if (resolvedGroups.includes("Middle Eastern & Indian") || lowerName.includes("oud") || lowerName.includes("darbuka") || lowerName.includes("sitar") || lowerName.includes("ney")) {
    icon = <Moon size={size} />;
    colorClass = "text-violet-400 bg-violet-500/10 border-violet-500/20";
  } else if (resolvedGroups.includes("Caribbean Instruments") || lowerName.includes("caribbean") || lowerName.includes("steel drum") || lowerName.includes("bongos") || lowerName.includes("congas")) {
    icon = <Waves size={size} />;
    colorClass = "text-lime-400 bg-lime-500/10 border-lime-500/20";
  } else if (resolvedGroups.includes("Roman & Mediterranean") || lowerName.includes("roman") || lowerName.includes("lituus") || lowerName.includes("buccina")) {
    icon = <Shield size={size} />;
    colorClass = "text-yellow-500 bg-yellow-500/10 border-yellow-500/20";
  }

  return (
    <span className={`inline-flex items-center justify-center p-1.5 rounded-lg border shadow-sm ${colorClass} ${className}`}>
      {icon}
    </span>
  );
};
