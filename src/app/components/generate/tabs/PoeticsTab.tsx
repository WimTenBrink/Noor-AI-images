import React, { useMemo } from 'react';
import { HeaderBanner } from '../HeaderBanner';
import { GroupedOptionTree, GroupedOptionCategory } from '../GroupedOptionTree';
import { RHYME_TYPES, RHYME_CATEGORIES } from '../../../utils/rhymes';

interface PoeticsTabProps {
  poeticsSubTab: string;
  setPoeticsSubTab: (subId: string) => void;
  selectedRhymeScheme: string;
  setSelectedRhymeScheme: (scheme: string) => void;
}

export const PoeticsTab: React.FC<PoeticsTabProps> = ({
  selectedRhymeScheme,
  setSelectedRhymeScheme
}) => {
  // Convert RHYME_CATEGORIES and RHYME_TYPES into GroupedOptionCategories for tree view
  const rhymeCategories: GroupedOptionCategory[] = useMemo(() => {
    return RHYME_CATEGORIES.map((cat) => {
      const items = RHYME_TYPES.filter((r) => cat.rhymeIds.includes(r.id));
      return {
        id: cat.id,
        name: cat.name,
        description: `${items.length} rhyme schemes & meter models`,
        items: items.map((r) => ({
          id: r.id,
          name: r.name,
          description: r.description
        }))
      };
    });
  }, []);

  return (
    <div className="space-y-4 animate-fade-in">
      <HeaderBanner
        title="Rhyme Schemes & Meter Formats"
        desc="Select classical, subversive, structured, or cultural verse end-rhyme and meter patterns."
      />

      <GroupedOptionTree
        categories={rhymeCategories}
        selectedIds={selectedRhymeScheme}
        onSelect={(id) => setSelectedRhymeScheme(id)}
        selectionMode="single"
        placeholderSearch="Search rhyme schemes (e.g. Perfect, Slant, Mind-Rhyme, Haiku, Sonnet, Haka)..."
      />
    </div>
  );
};
