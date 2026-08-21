import React, { useState } from 'react';
import { NoorLogo } from './NoorLogo';
import { Settings, HelpCircle, ChevronDown, Sparkles, UserCheck, FileJson } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Tooltip } from './Tooltip';

interface HeaderProps {
  onAction: (action: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onAction
}) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menus = [
    {
      id: 'action',
      label: 'Action',
      icon: <Sparkles size={14} />,
      items: [
        { id: 'step-1', label: 'Characters', tooltipTitle: 'Characters', tooltipContent: 'Select which of the five characters are active in the scene.' },
        { id: 'step-2', label: 'Scene', tooltipTitle: 'Scene & Setting', tooltipContent: 'Configure adventure theme, location, and choose from dozens of predefined scenes.' },
        { id: 'step-3', label: 'Theme', tooltipTitle: 'Atmospheric Theme', tooltipContent: 'Fine-tune lighting, weather conditions, scene mood, and instruments.' },
        { id: 'step-4', label: 'Wardrobe', tooltipTitle: 'Wardrobes & Outfits', tooltipContent: 'Select clothing collections and assign character attire.' },
        { id: 'step-5', label: 'Rating', tooltipTitle: 'Demographics & Rating', tooltipContent: 'Set age categories, tomboy traits, camera framing, and prompt rating.' },
        { id: 'step-6', label: 'Action', tooltipTitle: 'Actions & Poses', tooltipContent: 'Assign specific physical actions, athletic motions, and poses.' },
        { id: 'step-7', label: 'Style', tooltipTitle: 'Style & Medium', tooltipContent: 'Select artistic medium, style presets, and configure scene title.' },
        { id: 'step-8', label: 'Prompt', tooltipTitle: 'Master Prompt', tooltipContent: 'Inspect, filter, and copy inclusive AI prompts for WAN Video, Mage.Space, etc.' },
        { id: 'reset-scene', label: 'Reset to Defaults', tooltipTitle: 'Reset Scene', tooltipContent: 'Clear custom actions and restore default scene settings.' }
      ]
    },
    {
      id: 'json',
      label: 'JSON',
      icon: <FileJson size={14} />,
      items: [
        { id: 'schema-singer-action-scene', label: 'Singer Action Scene Schema (v1.0.0)', helpId: 'help-schema-singer-action-scene', tooltipTitle: 'Action Scene Schema', tooltipContent: 'Download formal JSON Schema for Singer Action Scene generated prompts.' },
        { id: 'singers-detailed-json', label: 'Singers Detailed Dataset (v1.0.0)', tooltipTitle: 'Singers Detailed Dataset', tooltipContent: 'Download complete JSON dataset of all 4 singers with detailed appearance, personality, lifestyle, Face, Prompt, and Body prompts.' },
        { id: 'schema-singers-detailed', label: 'Singers Detailed Schema (v1.0.0)', helpId: 'help-schema-singers-detailed', tooltipTitle: 'Singers Detailed Schema', tooltipContent: 'Download formal JSON Schema for Singers Detailed profiles dataset.' },
        { id: 'wardrobes-json', label: 'Wardrobes Dataset (v1.6.0)', tooltipTitle: 'Wardrobes Dataset', tooltipContent: 'Download complete JSON dataset of all wardrobes and clothing collections for all singers organized by Root / Singer / Event / Clothes.' },
        { id: 'schema-wardrobes', label: 'Wardrobes Schema (v1.6.0)', helpId: 'help-schema-wardrobes', tooltipTitle: 'Wardrobes Schema', tooltipContent: 'Download formal JSON Schema for Singer Wardrobes & Clothing collections.' },
        { id: 'farmhouse-json', label: 'Farmhouse Tree Dataset (v1.0.0)', tooltipTitle: 'Farmhouse Tree Dataset', tooltipContent: 'Download complete tree-structured JSON dataset (/Farm/House/Room/Object) of the farm, rooms, sauna, pool, barn, animals, fields, and garage.' },
        { id: 'schema-farmhouse', label: 'Farmhouse Schema (v1.0.0)', helpId: 'help-schema-farmhouse', tooltipTitle: 'Farmhouse Schema', tooltipContent: 'Download formal JSON Schema for Farmhouse tree dataset.' },
        { id: 'schema-logs', label: 'System Logs Schema (v1.1.0)', helpId: 'help-schema-logs', tooltipTitle: 'Logs JSON Schema', tooltipContent: 'Download formal JSON Schema for Noor log entries.' },
        { id: 'schema-jobs', label: 'AI Jobs Queue Schema (v1.1.0)', helpId: 'help-schema-jobs', tooltipTitle: 'Jobs JSON Schema', tooltipContent: 'Download formal JSON Schema for AI Queue jobs.' }
      ]
    },
    {
      id: 'singers',
      label: 'Singers',
      icon: <UserCheck size={14} />,
      items: [
        { id: 'the-band', label: 'The Band', tooltipTitle: 'Vocal Group', tooltipContent: 'Explore the collective band background and profiles.' },
        { id: 'senna-bakker', label: 'Senna Bakker', tooltipTitle: 'Lead Reporter', tooltipContent: 'Explore the background and profile of our exclusive reporter.' },
        { id: 'the-magazine', label: 'Dutch Noise Chronicles', tooltipTitle: 'Press Spotlight', tooltipContent: 'Learn more about the flagship LGBTIA+ music magazine.' },
        { id: 'wardrobe', label: 'Wardrobe System', tooltipTitle: 'Singer Wardrobe Closets', tooltipContent: 'Browse clothing lists and export wardrobe documentation.' },
        { id: 'culinary', label: 'Culinary Database', tooltipTitle: 'Singer Likes/Dislikes', tooltipContent: 'Browse diets, favorites, and kitchen disaster ratings.' },
        { id: 'farm', label: 'Farm Settings', tooltipTitle: 'Abcoude Farm', tooltipContent: 'Explore the band\'s studio homestead, farmlands, and attic.' },
        { id: 'singer-miranda', label: 'Miranda Noor', tooltipTitle: 'Lead Vocals & Guitar', tooltipContent: "View Miranda's full visual & character profile." },
        { id: 'singer-annelies', label: 'Annelies Brink', tooltipTitle: 'Alto & Rhythm Guitar', tooltipContent: "View Annelies's full visual & character profile." },
        { id: 'singer-fannie', label: 'Fannie de Jong', tooltipTitle: 'Folk Soprano & Drums', tooltipContent: "View Fannie's full visual & character profile." },
        { id: 'singer-emma', label: 'Emma Vermeer', tooltipTitle: 'Whispering Mezzo & Synths', tooltipContent: "View Emma's full visual & character profile." },
        { id: 'singer-face', label: 'Face Photo Prompts', tooltipTitle: 'Portrait Singer', tooltipContent: 'Generate portrait-focused close-up prompts.' },
        { id: 'singer-torso', label: 'Torso Shot Prompts', tooltipTitle: 'Mid-length Singer', tooltipContent: 'Generate mid-shot performance style illustrations.' },
        { id: 'singer-body', label: 'Body Style Prompts', tooltipTitle: 'Fullshot Singer', tooltipContent: 'Generate full-body performer prompts.' }
      ]
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings size={14} />,
      items: [
        { id: 'api-key', label: 'API Key', tooltipTitle: 'Google Gemini Key', tooltipContent: 'Configure your Google Project API Credentials.' },
        { id: 'content-settings', label: 'Content Filters', tooltipTitle: 'Blocked Terms', tooltipContent: 'Specify forbidden topics or words to exclude from generation.' },
        { id: 'logs', label: 'System & API Logs', tooltipTitle: 'Event Logs', tooltipContent: 'Inspect real-time AI requests, responses, and execution logs.' },
        { id: 'clear', label: 'Clear Workspace', tooltipTitle: 'Clear Workspace', tooltipContent: 'Clears the workspace, local storage, queue, and restarts the environment.' }
      ]
    },
    {
      id: 'help',
      label: 'Help',
      icon: <HelpCircle size={14} />,
      items: [
        { id: 'system-instructions', label: 'System Instructions', tooltipTitle: 'System Lore', tooltipContent: 'Instructions to recreate this application.' },
        { id: 'manual', label: 'User Manual', tooltipTitle: 'Manual Guide', tooltipContent: 'A comprehensive operational manual to master Noor prompt generation.' },
        { id: 'code-overview', label: 'Developer Guide', tooltipTitle: 'Code Architecture', tooltipContent: 'Full structures, state hook definitions, and folder schema catalog.' },
        { id: 'schema-version-history', label: 'JSON Schemas & Version History', tooltipTitle: 'JSON Schemas Reference', tooltipContent: 'Version history, evolution, and purpose of all Draft 07 JSON schemas.' }
      ]
    }
  ];

  return (
    <header className="h-11 border-b border-lavender-border bg-lavender-bg flex items-center justify-between px-3 z-50">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <NoorLogo className="w-6 h-6 text-lavender-accent" />
          <h1 className="text-base font-bold tracking-tighter text-lavender-accent">The Band Noor! Artwork</h1>
        </div>

        <nav className="flex items-center gap-1.5">
          {menus.map(menu => (
            <div key={menu.id} className="relative">
              <button 
                onClick={() => setActiveMenu(activeMenu === menu.id ? null : menu.id)}
                className={cn(
                  "flex items-center gap-1.5 px-2 py-1 rounded text-xs font-bold transition-colors cursor-pointer",
                  activeMenu === menu.id ? "bg-lavender-surface text-lavender-accent" : "hover:bg-lavender-surface/50"
                )}
              >
                {menu.icon}
                {menu.label}
                <ChevronDown size={12} className={cn("transition-transform", activeMenu === menu.id && "rotate-180")} />
              </button>

              {activeMenu === menu.id && (
                <div className={cn(
                  "absolute top-full left-0 mt-1 bg-lavender-surface border border-lavender-border rounded shadow-xl py-1 z-50",
                  menu.id === 'json' ? "w-80" : "w-56"
                )}>
                  {menu.items.map(item => (
                    <div key={item.id} className="w-full flex items-center justify-between border-b border-lavender-border/30 last:border-0">
                      <div className="flex-1 min-w-0">
                        <Tooltip title={item.tooltipTitle} content={item.tooltipContent} className="block w-full">
                          <button
                            onClick={() => {
                              onAction(item.id);
                              setActiveMenu(null);
                            }}
                            className="w-full text-left px-3 py-2 text-sm hover:bg-lavender-accent hover:text-lavender-bg transition-colors truncate cursor-pointer"
                          >
                            {item.label}
                          </button>
                        </Tooltip>
                      </div>
                      {'helpId' in item && item.helpId && (
                        <div className="px-1.5 flex-shrink-0">
                          <Tooltip title="Schema Version History" content="View schema version history, evolution, and purpose.">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onAction(item.helpId!);
                                setActiveMenu(null);
                              }}
                              className="px-2 py-1 text-xs text-lavender-accent hover:bg-lavender-accent hover:text-lavender-bg rounded flex items-center gap-1 font-semibold transition-colors"
                            >
                              <HelpCircle size={13} />
                              <span>Help</span>
                            </button>
                          </Tooltip>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {activeMenu && <div className="fixed inset-0 z-40" onClick={() => setActiveMenu(null)} />}
    </header>
  );
};

