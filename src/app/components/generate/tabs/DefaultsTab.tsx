import React from 'react';
import { AppDefaults } from '../../../../types';
import { DefaultsSubTabId } from '../types';
import { HeaderBanner } from '../HeaderBanner';
import { BandSubTab } from './defaults/BandSubTab';
import { CultureSubTab } from './defaults/CultureSubTab';
import { ThemeSubTab } from './defaults/ThemeSubTab';
import { BeliefsSubTab } from './defaults/BeliefsSubTab';
import { ConcertSubTab } from './defaults/ConcertSubTab';
import { AudienceSubTab } from './defaults/AudienceSubTab';
import { InstrumentsSubTab } from './defaults/InstrumentsSubTab';
import { LyricalStyleSubTab } from './defaults/LyricalStyleSubTab';

interface DefaultsTabProps {
  appDefaults: AppDefaults;
  setAppDefaults: React.Dispatch<React.SetStateAction<AppDefaults>>;
  defaultsSubTab: DefaultsSubTabId;
  setDefaultsSubTab: (subId: DefaultsSubTabId) => void;
}

export const DefaultsTab: React.FC<DefaultsTabProps> = ({
  appDefaults,
  setAppDefaults,
  defaultsSubTab
}) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <HeaderBanner
        title="Defaults & Band Configuration"
        desc="Customize global band dynamics, cultural background, theme, pagan beliefs, live performance, audience, core instruments, and lyrical style."
      />

      {/* Selected Subtab Content */}
      <div className="pt-1">
        {defaultsSubTab === 'band' && (
          <BandSubTab appDefaults={appDefaults} setAppDefaults={setAppDefaults} />
        )}
        {defaultsSubTab === 'culture' && (
          <CultureSubTab appDefaults={appDefaults} setAppDefaults={setAppDefaults} />
        )}
        {defaultsSubTab === 'theme' && (
          <ThemeSubTab appDefaults={appDefaults} setAppDefaults={setAppDefaults} />
        )}
        {defaultsSubTab === 'beliefs' && (
          <BeliefsSubTab appDefaults={appDefaults} setAppDefaults={setAppDefaults} />
        )}
        {defaultsSubTab === 'concertPerformance' && (
          <ConcertSubTab appDefaults={appDefaults} setAppDefaults={setAppDefaults} />
        )}
        {defaultsSubTab === 'audience' && (
          <AudienceSubTab appDefaults={appDefaults} setAppDefaults={setAppDefaults} />
        )}
        {defaultsSubTab === 'coreInstruments' && (
          <InstrumentsSubTab appDefaults={appDefaults} setAppDefaults={setAppDefaults} />
        )}
        {defaultsSubTab === 'lyricalStyle' && (
          <LyricalStyleSubTab appDefaults={appDefaults} setAppDefaults={setAppDefaults} />
        )}
      </div>
    </div>
  );
};
