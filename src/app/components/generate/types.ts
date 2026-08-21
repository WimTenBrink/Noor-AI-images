import React from 'react';
import { AppDefaults } from '../../../types';

export type TabId = 
  | 'defaults'
  | 'prompt'
  | 'intentEnergy'
  | 'vocalAccentTone'
  | 'composer'
  | 'singers'
  | 'musicTheory'
  | 'structure'
  | 'poetics'
  | 'sliders';

export type DefaultsSubTabId = 
  | 'band'
  | 'culture'
  | 'theme'
  | 'beliefs'
  | 'concertPerformance'
  | 'audience'
  | 'coreInstruments'
  | 'lyricalStyle';

export interface TabDefinition {
  id: TabId;
  label: string;
  details?: string;
  icon: React.ReactNode;
}

export interface ChildTabDefinition {
  subId: string;
  label: string;
}

export interface GenerateDialogProps {
  isOpen: boolean;
  onClose: () => void;
  appDefaults?: AppDefaults;
  setAppDefaults?: React.Dispatch<React.SetStateAction<AppDefaults>>;
  onConfirm?: (...args: any[]) => void;
  onGenerateSong?: (promptPayload: any) => void;
  [key: string]: any;
}
