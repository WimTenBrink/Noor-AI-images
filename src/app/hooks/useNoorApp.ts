import { useState, useCallback } from 'react';
import { Job, LibraryItem, PortraitPrompts, PortraitType, ForbiddenTopics } from '../../types';
import { useJobQueue } from './useJobQueue';
import { useLogs } from './useLogs';
import { GENERATE_PORTRAITS_PROMPT } from '../../constants/prompts';
import { SYSTEM_INSTRUCTIONS_PORTRAITS } from '../../constants/instructions';
import { SINGERS } from '../../constants/singers';
import { THE_BAND_MD } from '../../constants/the_band';
import { SENNA_BAKKER_MD, THE_MAGAZINE_MD } from '../../constants/press';
import { SYSTEM_INSTRUCTIONS_MD, MANUAL_MD, CODE_OVERVIEW_MD } from '../../constants/help';
import { 
  downloadSingerActionSceneSchema,
  downloadSingersDetailedSchema,
  downloadWardrobesSchema,
  downloadWardrobesJson,
  downloadFarmhouseSchema,
  downloadLogsSchema,
  downloadJobsSchema,
  SCHEMA_HELP_SONG_MD,
  SCHEMA_HELP_COVER_ART_MD,
  SCHEMA_HELP_VIDEO_PROMPTS_MD,
  SCHEMA_HELP_LOGS_MD,
  SCHEMA_HELP_JOBS_MD,
  SCHEMA_HELP_INSTRUCTIONS_MD,
  SCHEMA_HELP_DASHBOARD_OPTIONS_MD,
  SCHEMA_VERSION_HISTORY_OVERVIEW_MD,
  SCHEMA_HELP_SINGERS_DETAILED_MD,
  SCHEMA_HELP_WARDROBES_MD,
  SCHEMA_HELP_FARMHOUSE_MD
} from '../../constants/jsonSchemas';
import { SingerDialogItem } from '../components/SingerDialog';

// Helper function to download static json files from public folder
async function downloadPublicJson(path: string, defaultFilename: string) {
  try {
    const response = await fetch(path);
    const data = await response.json();
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = defaultFilename;
    a.click();
    URL.revokeObjectURL(url);
  } catch (err) {
    console.error(`Failed downloading ${defaultFilename}:`, err);
  }
}

export function useNoorApp() {
  const { jobs, addJob } = useJobQueue();
  const { logs, log } = useLogs();

  // Navigation & Dialog States
  const [activeJob, setActiveJob] = useState<Job | null>(null);
  const [showLogs, setShowLogs] = useState(false);
  const [showPortrait, setShowPortrait] = useState(false);
  const [activePortraitType, setActivePortraitType] = useState<PortraitType>('Face');
  const [showWardrobe, setShowWardrobe] = useState(false);
  const [showCulinary, setShowCulinary] = useState(false);
  const [showFarm, setShowFarm] = useState(false);
  const [doubleFailedJob, setDoubleFailedJob] = useState<Job | null>(null);
  const [selectedSinger, setSelectedSinger] = useState<SingerDialogItem | null>(null);
  const [helpContent, setHelpContent] = useState<{ title: string; content: string; filename: string; filePath?: string } | null>(null);
  const [showContentSettings, setShowContentSettings] = useState(false);
  const [viewItem, setViewItem] = useState<LibraryItem | null>(null);

  // Main Action Studio navigation
  const [targetStep, setTargetStep] = useState<number | null>(null);
  const [resetTrigger, setResetTrigger] = useState<number>(0);

  // Content Filters
  const [forbiddenTopics, setForbiddenTopics] = useState<ForbiddenTopics>(() => {
    try {
      const saved = localStorage.getItem('noor_forbidden_topics');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return {
      barefoot: false,
      naturism: false,
      farm: false,
      singers: false
    };
  });

  const handleToggleForbiddenTopic = (key: keyof ForbiddenTopics) => {
    setForbiddenTopics(prev => {
      const updated: ForbiddenTopics = { ...prev, [key]: !prev[key] };
      try {
        localStorage.setItem('noor_forbidden_topics', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  // Portrait Prompts State
  const [portraitPrompts, setPortraitPrompts] = useState<Record<PortraitType, { miranda: { wan: string; sdxl: string }; annelies: { wan: string; sdxl: string }; fannie: { wan: string; sdxl: string }; emma: { wan: string; sdxl: string } }>>(() => {
    try {
      const saved = localStorage.getItem('noor_portrait_prompts');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return {
      Face: {
        miranda: { wan: '', sdxl: '' },
        annelies: { wan: '', sdxl: '' },
        fannie: { wan: '', sdxl: '' },
        emma: { wan: '', sdxl: '' }
      },
      Torso: {
        miranda: { wan: '', sdxl: '' },
        annelies: { wan: '', sdxl: '' },
        fannie: { wan: '', sdxl: '' },
        emma: { wan: '', sdxl: '' }
      },
      Body: {
        miranda: { wan: '', sdxl: '' },
        annelies: { wan: '', sdxl: '' },
        fannie: { wan: '', sdxl: '' },
        emma: { wan: '', sdxl: '' }
      }
    };
  });

  const handleGeneratePortraits = (type: PortraitType) => {
    const promptStr = GENERATE_PORTRAITS_PROMPT(type, 'Prompts for portrait photo study');
    addJob({
      name: `Generate ${type.toUpperCase()} Photo Prompts`,
      priority: 'normal',
      type: 'prompt',
      data: {
        type,
        prompt: promptStr,
        systemInstruction: SYSTEM_INSTRUCTIONS_PORTRAITS
      },
      action: async () => {
        const response = await fetch('/api/gemini/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: promptStr, systemInstruction: SYSTEM_INSTRUCTIONS_PORTRAITS })
        });
        if (!response.ok) {
          throw new Error(`Failed generating ${type} portraits`);
        }
        const data = await response.json();
        setPortraitPrompts(prev => {
          const updated = { ...prev, [type]: data };
          try {
            localStorage.setItem('noor_portrait_prompts', JSON.stringify(updated));
          } catch {
            // ignore
          }
          return updated;
        });
        return data;
      }
    });
  };

  // Handle Header & Action Menu Calls
  const handleAction = useCallback((action: string) => {
    // Step navigation
    if (action.startsWith('step-')) {
      const stepNum = parseInt(action.replace('step-', ''), 10);
      if (stepNum >= 1 && stepNum <= 8) {
        setTargetStep(stepNum);
        return;
      }
    }

    if (action === 'reset-scene') {
      setResetTrigger(prev => prev + 1);
      return;
    }

    // JSON datasets and schemas
    if (action === 'farmhouse-json') {
      downloadPublicJson('/farmhouse.json', 'farmhouse.json');
      log('info', 'Downloaded Farmhouse Dataset');
      return;
    }
    if (action === 'schema-farmhouse') {
      downloadFarmhouseSchema();
      log('info', 'Downloaded Farmhouse Schema');
      return;
    }
    if (action === 'singers-detailed-json') {
      downloadPublicJson('/singers_detailed.json', 'singers_detailed.json');
      log('info', 'Downloaded Singers Detailed Dataset');
      return;
    }
    if (action === 'schema-singers-detailed') {
      downloadSingersDetailedSchema();
      log('info', 'Downloaded Singers Detailed Schema');
      return;
    }
    if (action === 'wardrobes-json') {
      downloadWardrobesJson();
      log('info', 'Downloaded Wardrobes Dataset');
      return;
    }
    if (action === 'schema-wardrobes') {
      downloadWardrobesSchema();
      log('info', 'Downloaded Wardrobes Schema');
      return;
    }
    if (action === 'schema-singer-action-scene') {
      downloadSingerActionSceneSchema();
      log('info', 'Downloaded Action Scene Schema');
      return;
    }
    if (action === 'schema-logs') {
      downloadLogsSchema();
      log('info', 'Downloaded Logs Schema');
      return;
    }
    if (action === 'schema-jobs') {
      downloadJobsSchema();
      log('info', 'Downloaded Jobs Schema');
      return;
    }

    // Help for schemas
    if (action === 'schema-version-history' || action === 'help-schema-history') {
      setHelpContent({
        title: 'JSON Schemas & Version History',
        content: SCHEMA_VERSION_HISTORY_OVERVIEW_MD,
        filename: 'SCHEMA_VERSION_HISTORY.md',
        filePath: '/markdown/schemas/schema_version_history_overview.md'
      });
      return;
    }
    if (action === 'help-schema-singer-action-scene' || action === 'help-schema-song') {
      setHelpContent({
        title: 'Singer Action Scene Schema Help',
        content: SCHEMA_HELP_SONG_MD,
        filename: 'SCHEMA_SINGER_ACTION_SCENE.md',
        filePath: '/markdown/schemas/schema_song.md'
      });
      return;
    }
    if (action === 'help-schema-singers-detailed') {
      setHelpContent({
        title: 'Singers Detailed Dataset Schema Help',
        content: SCHEMA_HELP_SINGERS_DETAILED_MD,
        filename: 'SCHEMA_SINGERS_DETAILED.md',
        filePath: '/markdown/schemas/schema_singers_detailed.md'
      });
      return;
    }
    if (action === 'help-schema-wardrobes') {
      setHelpContent({
        title: 'Wardrobes Dataset Schema Help',
        content: SCHEMA_HELP_WARDROBES_MD,
        filename: 'SCHEMA_WARDROBES.md',
        filePath: '/markdown/schemas/schema_wardrobes.md'
      });
      return;
    }
    if (action === 'help-schema-farmhouse') {
      setHelpContent({
        title: 'Farmhouse Tree Dataset Schema Help',
        content: SCHEMA_HELP_FARMHOUSE_MD,
        filename: 'SCHEMA_FARMHOUSE.md',
        filePath: '/markdown/schemas/schema_farmhouse.md'
      });
      return;
    }
    if (action === 'help-schema-logs') {
      setHelpContent({
        title: 'System Logs JSON Schema Help',
        content: SCHEMA_HELP_LOGS_MD,
        filename: 'SCHEMA_LOGS.md',
        filePath: '/markdown/schemas/schema_logs.md'
      });
      return;
    }
    if (action === 'help-schema-jobs') {
      setHelpContent({
        title: 'AI Jobs Queue JSON Schema Help',
        content: SCHEMA_HELP_JOBS_MD,
        filename: 'SCHEMA_JOBS.md',
        filePath: '/markdown/schemas/schema_jobs.md'
      });
      return;
    }
    if (action.startsWith('help-schema-')) {
      setHelpContent({
        title: 'JSON Schemas Documentation',
        content: SCHEMA_VERSION_HISTORY_OVERVIEW_MD,
        filename: 'JSON_SCHEMAS.md',
        filePath: '/markdown/schemas/schema_version_history_overview.md'
      });
      return;
    }

    // Singers Menu
    if (action === 'the-band') {
      setSelectedSinger({
        name: 'The Band Noor!',
        bioContent: THE_BAND_MD,
        bioPath: '/markdown/the_band.md',
        photo: '/singers/Miranda_Noor.jpg'
      });
      return;
    }
    if (action === 'senna-bakker') {
      setSelectedSinger({
        name: 'Senna Bakker - Lead Reporter',
        bioContent: SENNA_BAKKER_MD,
        bioPath: '/markdown/senna_bakker.md',
        photo: '/singers/Senna_Bakker.jpg'
      });
      return;
    }
    if (action === 'the-magazine') {
      setSelectedSinger({
        name: 'Dutch Noise Chronicles',
        bioContent: THE_MAGAZINE_MD,
        bioPath: '/markdown/the_magazine.md',
        photo: '/singers/Annelies_Brink.jpg'
      });
      return;
    }
    if (action === 'wardrobe') {
      setShowWardrobe(true);
      return;
    }
    if (action === 'culinary') {
      setShowCulinary(true);
      return;
    }
    if (action === 'farm') {
      setShowFarm(true);
      return;
    }
    if (action === 'singer-miranda') {
      const singer = SINGERS.find(s => s.id === 'miranda');
      if (singer) setSelectedSinger({ name: singer.name, bioPath: singer.bioPath || '/markdown/singers/Miranda_Noor.md', photo: singer.photo });
      return;
    }
    if (action === 'singer-annelies') {
      const singer = SINGERS.find(s => s.id === 'annelies');
      if (singer) setSelectedSinger({ name: singer.name, bioPath: singer.bioPath || '/markdown/singers/Annelies_Brink.md', photo: singer.photo });
      return;
    }
    if (action === 'singer-fannie') {
      const singer = SINGERS.find(s => s.id === 'fannie');
      if (singer) setSelectedSinger({ name: singer.name, bioPath: singer.bioPath || '/markdown/singers/Fannie_de_Jong.md', photo: singer.photo });
      return;
    }
    if (action === 'singer-emma') {
      const singer = SINGERS.find(s => s.id === 'emma');
      if (singer) setSelectedSinger({ name: singer.name, bioPath: singer.bioPath || '/markdown/singers/Emma_Vermeer.md', photo: singer.photo });
      return;
    }
    if (action === 'singer-face') {
      setActivePortraitType('Face');
      setShowPortrait(true);
      return;
    }
    if (action === 'singer-torso') {
      setActivePortraitType('Torso');
      setShowPortrait(true);
      return;
    }
    if (action === 'singer-body') {
      setActivePortraitType('Body');
      setShowPortrait(true);
      return;
    }

    // Settings Menu
    if (action === 'api-key') {
      const current = localStorage.getItem('noor_gemini_api_key') || '';
      const input = prompt('Enter your Google Gemini API Key:', current);
      if (input !== null) {
        localStorage.setItem('noor_gemini_api_key', input.trim());
        log('info', 'Updated Gemini API Key');
      }
      return;
    }
    if (action === 'content-settings') {
      setShowContentSettings(true);
      return;
    }
    if (action === 'logs') {
      setShowLogs(true);
      return;
    }
    if (action === 'clear') {
      if (confirm('Clear workspace and restore all default settings?')) {
        localStorage.clear();
        window.location.reload();
      }
      return;
    }

    // Help Menu
    if (action === 'system-instructions') {
      setHelpContent({
        title: 'System Instructions',
        content: SYSTEM_INSTRUCTIONS_MD,
        filename: 'SYSTEM_INSTRUCTIONS.md',
        filePath: '/markdown/system_instructions.md'
      });
      return;
    }
    if (action === 'manual') {
      setHelpContent({
        title: 'User Manual',
        content: MANUAL_MD,
        filename: 'MANUAL.md',
        filePath: '/markdown/manual.md'
      });
      return;
    }
    if (action === 'code-overview') {
      setHelpContent({
        title: 'Code Overview & Architecture',
        content: CODE_OVERVIEW_MD,
        filename: 'CODE_OVERVIEW.md',
        filePath: '/markdown/code_overview.md'
      });
      return;
    }
  }, [log]);

  // Select Singer helper from sidebars
  const handleSelectSingerFromSidebar = (singerId: string) => {
    const singer = SINGERS.find(s => s.id === singerId);
    if (singer) {
      setSelectedSinger({
        name: singer.name,
        bioPath: singer.bioPath,
        photo: singer.photo
      });
    }
  };

  return {
    jobs,
    activeJob,
    setActiveJob,
    showLogs,
    setShowLogs,
    showPortrait,
    setShowPortrait,
    activePortraitType,
    portraitPrompts,
    handleGeneratePortraits,
    showWardrobe,
    setShowWardrobe,
    showCulinary,
    setShowCulinary,
    showFarm,
    setShowFarm,
    doubleFailedJob,
    setDoubleFailedJob,
    selectedSinger,
    setSelectedSinger,
    helpContent,
    setHelpContent,
    showContentSettings,
    setShowContentSettings,
    forbiddenTopics,
    handleToggleForbiddenTopic,
    viewItem,
    setViewItem,
    targetStep,
    resetTrigger,
    handleAction,
    handleSelectSingerFromSidebar,
    onStepChanged: () => setTargetStep(null)
  };
}
