import React, { useMemo } from 'react';
import { HeaderBanner } from '../HeaderBanner';
import { GroupedOptionTree, GroupedOptionCategory } from '../GroupedOptionTree';
import { NATIONALITIES } from '../../../utils/nationalities';
import { SONG_EMOTIONS } from '../../../utils/emotions';

interface VocalAccentToneTabProps {
  accentToneSubTab: string;
  setAccentToneSubTab: (subId: string) => void;
  selectedDialects: string[];
  setSelectedDialects: React.Dispatch<React.SetStateAction<string[]>>;
  selectedEmotions: string[];
  setSelectedEmotions: React.Dispatch<React.SetStateAction<string[]>>;
}

export const VocalAccentToneTab: React.FC<VocalAccentToneTabProps> = ({
  accentToneSubTab,
  selectedDialects,
  setSelectedDialects,
  selectedEmotions,
  setSelectedEmotions
}) => {
  // Prepare grouped categories for Regional Dialects
  const nationalityCategories: GroupedOptionCategory[] = useMemo(() => {
    const groupsMap: Record<string, typeof NATIONALITIES> = {};
    NATIONALITIES.forEach((nat) => {
      const groups = nat.regionGroups && nat.regionGroups.length > 0
        ? nat.regionGroups
        : [nat.regionGroup || nat.continent || 'Global'];
      
      groups.forEach((groupName) => {
        if (!groupsMap[groupName]) groupsMap[groupName] = [];
        if (!groupsMap[groupName].some((item) => item.id === nat.id)) {
          groupsMap[groupName].push(nat);
        }
      });
    });

    return Object.entries(groupsMap).map(([groupName, items]) => ({
      id: groupName.toLowerCase().replace(/[^a-z0-9]/g, '_'),
      name: groupName,
      description: `${items.length} regional dialects and accents`,
      items: items.map((nat) => ({
        id: nat.id,
        name: nat.name,
        description: nat.description,
        flag: nat.flag,
        tag: nat.continent
      }))
    }));
  }, []);

  // Prepare grouped categories for Track Emotions
  const emotionCategories: GroupedOptionCategory[] = useMemo(() => {
    const groupsMap: Record<string, typeof SONG_EMOTIONS> = {};
    SONG_EMOTIONS.forEach((emo) => {
      const cat = emo.category || 'General Emotions';
      if (!groupsMap[cat]) groupsMap[cat] = [];
      groupsMap[cat].push(emo);
    });

    return Object.entries(groupsMap).map(([catName, items]) => ({
      id: catName.toLowerCase().replace(/[^a-z0-9]/g, '_'),
      name: catName,
      items: items.map((emo) => ({
        id: emo.id,
        name: emo.name,
        description: emo.description
      }))
    }));
  }, []);

  const toggleDialect = (id: string) => {
    setSelectedDialects((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  const toggleEmotion = (id: string) => {
    setSelectedEmotions((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-4 animate-fade-in">
      {accentToneSubTab === 'accent' && (
        <div className="space-y-3">
          <HeaderBanner
            title="Regional Dialect & Accent Constraints"
            desc="Select up to 4 regional dialects or vocal inflections from the tree navigation menu on the left."
          />
          <GroupedOptionTree
            categories={nationalityCategories}
            selectedIds={selectedDialects}
            onSelect={toggleDialect}
            selectionMode="multiple"
            maxSelections={4}
            placeholderSearch="Search regional dialects (e.g. Scottish, Gaelic, Cajun, Yodel, Patois)..."
          />
        </div>
      )}

      {accentToneSubTab === 'emotion' && (
        <div className="space-y-3">
          <HeaderBanner
            title="Track Emotion Coloring"
            desc="Colors singing performance, vocal tension, speed, and emotional styling using the left category tree."
          />
          <GroupedOptionTree
            categories={emotionCategories}
            selectedIds={selectedEmotions}
            onSelect={toggleEmotion}
            selectionMode="multiple"
            placeholderSearch="Search track emotions (e.g. Joyful, Melancholic, Fiery, Dreamy)..."
          />
        </div>
      )}
    </div>
  );
};
