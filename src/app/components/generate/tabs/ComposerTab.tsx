import React, { useMemo } from 'react';
import { HeaderBanner } from '../HeaderBanner';
import { GroupedOptionTree, GroupedOptionCategory } from '../GroupedOptionTree';
import { STYLES } from '../../../../constants/styles';
import { ALL_INSTRUMENTS } from '../../../../constants/instruments';

interface ComposerTabProps {
  composerSubTab: string;
  setComposerSubTab: (subId: string) => void;
  dialogSelectedStyles: string[];
  setDialogSelectedStyles: React.Dispatch<React.SetStateAction<string[]>>;
  dialogSelectedInstruments: string[];
  setDialogSelectedInstruments: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ComposerTab: React.FC<ComposerTabProps> = ({
  composerSubTab,
  dialogSelectedStyles,
  setDialogSelectedStyles,
  dialogSelectedInstruments,
  setDialogSelectedInstruments
}) => {
  // Convert STYLES into GroupedOptionCategories for tree view
  const styleCategories: GroupedOptionCategory[] = useMemo(() => {
    return STYLES.map((cat) => ({
      id: cat.type.toLowerCase().replace(/[^a-z0-9]/g, '_'),
      name: cat.type,
      description: `${cat.substyles.length} genres & substyles`,
      items: cat.substyles.map((sub) => ({
        id: sub.name,
        name: sub.name,
        description: sub.description
      }))
    }));
  }, []);

  // Convert ALL_INSTRUMENTS into GroupedOptionCategories for tree view
  const instrumentCategories: GroupedOptionCategory[] = useMemo(() => {
    const groupsMap: Record<string, typeof ALL_INSTRUMENTS> = {};

    ALL_INSTRUMENTS.forEach((inst) => {
      const primaryGroup = inst.groups && inst.groups.length > 0 ? inst.groups[0] : 'General Instruments';
      if (!groupsMap[primaryGroup]) groupsMap[primaryGroup] = [];
      // avoid duplicates in same primary group
      if (!groupsMap[primaryGroup].some((i) => i.name === inst.name)) {
        groupsMap[primaryGroup].push(inst);
      }
    });

    return Object.entries(groupsMap).map(([groupName, items]) => ({
      id: groupName.toLowerCase().replace(/[^a-z0-9]/g, '_'),
      name: groupName,
      description: `${items.length} instruments`,
      items: items.map((inst) => ({
        id: inst.name,
        name: inst.name,
        description: inst.description,
        tag: inst.acoustic ? 'Acoustic' : undefined
      }))
    }));
  }, []);

  const toggleStyle = (styleName: string) => {
    setDialogSelectedStyles((prev) =>
      prev.includes(styleName) ? prev.filter((s) => s !== styleName) : [...prev, styleName]
    );
  };

  const toggleInstrument = (instName: string) => {
    setDialogSelectedInstruments((prev) =>
      prev.includes(instName) ? prev.filter((i) => i !== instName) : [...prev, instName]
    );
  };

  return (
    <div className="space-y-4 animate-fade-in">
      {composerSubTab === 'styles' && (
        <div className="space-y-3">
          <HeaderBanner
            title="Genre Styles & Core Grooves Configuration"
            desc="Explore and enable musical genres, microgenres, and rhythmic grooves organized in a hierarchical tree."
          />
          <GroupedOptionTree
            categories={styleCategories}
            selectedIds={dialogSelectedStyles}
            onSelect={toggleStyle}
            selectionMode="multiple"
            placeholderSearch="Search music genres (e.g. Synthpop, Black MIDI, Bardcore, Trap, Chanson)..."
          />
        </div>
      )}

      {composerSubTab === 'instruments' && (
        <div className="space-y-3">
          <HeaderBanner
            title="Band Instruments & Backing Tracks"
            desc="Select acoustic, folk, ancient, and electric band instruments structured by instrument family."
          />
          <GroupedOptionTree
            categories={instrumentCategories}
            selectedIds={dialogSelectedInstruments}
            onSelect={toggleInstrument}
            selectionMode="multiple"
            placeholderSearch="Search backing instruments (e.g. Bagpipes, Bodhrán, Crwth, Synthesizer, Cello)..."
          />
        </div>
      )}
    </div>
  );
};
