import React, { useMemo } from 'react';
import { HeaderBanner } from '../HeaderBanner';
import { GroupedOptionTree, GroupedOptionCategory } from '../GroupedOptionTree';

interface IntentEnergyTabProps {
  isEnabled: boolean;
  selectedFocusGroup: string;
  setSelectedFocusGroup: (group: string) => void;
}

export const IntentEnergyTab: React.FC<IntentEnergyTabProps> = ({
  isEnabled,
  selectedFocusGroup,
  setSelectedFocusGroup
}) => {
  const categories: GroupedOptionCategory[] = useMemo(() => [
    {
      id: 'dance_umbrella',
      name: "The 'Dance' Umbrella",
      description: 'High Energy & Movement',
      items: [
        { id: 'club_electronic', name: 'Club & Electronic', tag: 'House, Techno, Trance, DnB', description: 'Upbeat, repetitive, synthesised tempos for high-energy dance floors.' },
        { id: 'urban_street', name: 'Urban & Street', tag: 'Hip-Hop, Trap, Reggaeton', description: 'Heavy bass, rhythmic delivery, driving urban street momentum.' },
        { id: 'retro_dance', name: 'Retro Dance', tag: 'Disco, Funk, Synthwave', description: 'Groovy, nostalgic, organic basslines with energetic rhythm guitars.' },
        { id: 'rock_heavy_beats', name: 'Rock & Heavy Beats', tag: 'Hard Rock, Punk, Synth Metal', description: 'Aggressive tempo, high distortion, driving drum beats.' },
        { id: 'festive_carnival', name: 'Festive & Carnival', tag: 'Samba, Soca, Eurodance', description: 'Polyrhythmic, highly celebratory, syncopated festival rhythms.' }
      ]
    },
    {
      id: 'brain_umbrella',
      name: "The 'Brain' Umbrella",
      description: 'Focus & Productivity',
      items: [
        { id: 'minimalist_ambient', name: 'Minimalist Ambient', tag: 'Lo-Fi, Chillhop, Drone', description: 'Predictable rhythms, cozy, comforting vibe for deep work.' },
        { id: 'acoustic_focus', name: 'Acoustic Focus', tag: 'Piano, Fingerstyle, Neo-Classical', description: 'Organic, intellectual, stimulating without being distracting.' },
        { id: 'neuro_music', name: 'Neuro-Music', tag: 'Binaural, Synth Drones, Noise', description: 'Scientific, deeply repetitive patterns for deep-work focus.' },
        { id: 'nature_blend', name: 'Nature Blend', tag: 'Rain, Forest Birds, Soft Chords', description: 'Natural field recordings mixed with harmonic backings.' },
        { id: 'symphonic_focus', name: 'Symphonic Focus', tag: 'Baroque, Harpsichord, Lute', description: 'Highly structured, mathematical, memory-enhancing patterns.' }
      ]
    },
    {
      id: 'chill_umbrella',
      name: "The 'Chill' Umbrella",
      description: 'Relaxation & Wind-Down',
      items: [
        { id: 'cinematic_atmospheric', name: 'Cinematic & Atmospheric', tag: 'Post-Rock, Ambient, Dream Pop', description: 'Spacious, slow-building, emotional soundscapes.' },
        { id: 'organic_chill', name: 'Organic Chill', tag: 'Acoustic Folk, Bossa Nova, Smooth Jazz', description: 'Warm, breezy, easy-listening melodies.' },
        { id: 'meditation_wellness', name: 'Meditation & Wellness', tag: 'Singing Bowls, New Age, Drone', description: 'Purely sonic texture with no defined tempo for deep relaxation.' },
        { id: 'spiritual_chant', name: 'Spiritual & Chant', tag: 'Gregorian, Mantras, Drone Chords', description: 'Resonant, ancient, sacred, slowing respiratory rate.' },
        { id: 'lullaby_slumber', name: 'Lullaby & Slumber', tag: 'Music Box, Celeste, Soft Harp', description: 'Extremely quiet, slow tempo, high-frequency gentle tones.' }
      ]
    },
    {
      id: 'feelings_umbrella',
      name: "The 'Feelings' Umbrella",
      description: 'Emotional & Narrative',
      items: [
        { id: 'raw_angsty', name: 'Raw & Angsty', tag: 'Grunge, Indie Rock, Alternative, Punk', description: 'Guitars, raw vocals, high emotional friction and vulnerability.' },
        { id: 'soulful_roots', name: 'Soulful & Roots', tag: 'Blues, Soul, Gospel, Country', description: 'Expressive vocals, organic instruments, heritage-driven melodies.' },
        { id: 'epic_dramatic', name: 'Epic & Dramatic', tag: 'Film Score, Dark Synth, Symphonic Metal', description: 'Grand, cinematic, powerful storytelling without words.' },
        { id: 'nostalgic_bittersweet', name: 'Nostalgic & Bitter-Sweet', tag: 'French Chanson, Chamber Pop, Ballad', description: 'Reflective, melancholic, narrative-oriented songcraft.' },
        { id: 'cinematic_scifi', name: 'Cinematic Sci-Fi', tag: 'Vangelis Synths, Horn Swells', description: 'Awe-inspiring, space-ambient cosmic journey.' }
      ]
    }
  ], []);

  return (
    <div className="space-y-4 animate-fade-in">
      <HeaderBanner
        title="Intent & Energy Focus Umbrellas"
        desc="Select from 20 specialized focus umbrellas organized by Energy Category on the left tree menu."
        targetId="intentEnergy"
        isEnabled={isEnabled}
      />

      <GroupedOptionTree
        categories={categories}
        selectedIds={selectedFocusGroup}
        onSelect={(id) => setSelectedFocusGroup(id === selectedFocusGroup ? '' : id)}
        selectionMode="single"
        placeholderSearch="Search focus umbrellas (e.g., Lo-Fi, Groove, Ambient, Chill, Sci-Fi)..."
      />
    </div>
  );
};
