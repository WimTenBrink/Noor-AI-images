/**
 * @license
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { Header } from './app/components/Header';
import { InstrumentSidebar } from './app/components/InstrumentSidebar';
import { StyleSidebar } from './app/components/StyleSidebar';
import { MainPanel } from './app/components/MainPanel';
import { StatusBar } from './app/components/StatusBar';
import { JobDialog } from './app/components/JobDialog';
import { LogDialog } from './app/components/LogDialog';
import { HelpDialog } from './app/components/HelpDialog';
import { useNoorApp } from './app/hooks/useNoorApp';
import { useLogs } from './app/hooks/useLogs';
import { TextView } from './app/components/TextView';
import { TreeView } from './app/components/TreeView';
import { ImageView } from './app/components/ImageView';
import { SingerDialog } from './app/components/SingerDialog';
import { PortraitDialog } from './app/components/PortraitDialog';
import { ContentDialog } from './app/components/ContentDialog';
import { WardrobeDialog } from './app/components/WardrobeDialog';
import { CulinaryDialog } from './app/components/CulinaryDialog';
import { FarmDialog } from './app/components/FarmDialog';
import { DoubleFailedDialog } from './app/components/DoubleFailedDialog';
import { X } from 'lucide-react';
import { TooltipProvider } from './app/components/Tooltip';

export default function App() {
  const {
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
    onStepChanged
  } = useNoorApp();

  const { logs } = useLogs();

  const renderCenterContent = () => {
    if (viewItem) {
      return (
        <div className="flex-1 flex flex-col overflow-hidden bg-black/50 relative">
          <div className="p-4 border-b border-lavender-border flex justify-between items-center bg-lavender-bg/80">
            <h2 className="text-xl font-bold text-lavender-accent">{viewItem.name}</h2>
            <button 
              onClick={() => setViewItem(null)}
              className="p-2 hover:bg-lavender-surface rounded text-red-500 cursor-pointer"
              title="Close View"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-auto">
            {viewItem.type === 'image' && <ImageView src={viewItem.content} />}
            {viewItem.type === 'json' && <TreeView data={viewItem.content} isRoot />}
            {viewItem.type === 'xml' && <TreeView data={viewItem.content} isRoot />}
            {viewItem.type === 'text' && <TextView content={viewItem.content} />}
          </div>
        </div>
      );
    }

    return (
      <MainPanel 
        targetStep={targetStep}
        onStepChanged={onStepChanged}
        resetTrigger={resetTrigger}
        onShowSinger={(sId) => handleSelectSingerFromSidebar(sId)}
      />
    );
  };

  return (
    <TooltipProvider>
      <div className="flex flex-col h-screen overflow-hidden bg-lavender-bg text-lavender-text selection:bg-lavender-accent selection:text-lavender-bg">
        <Header 
          onAction={handleAction} 
        />
        
        <main className="flex-1 flex overflow-hidden">
          <InstrumentSidebar 
            onSelectSinger={handleSelectSingerFromSidebar}
          />
          
          {renderCenterContent()}
          
          <StyleSidebar 
            onSelectSinger={handleSelectSingerFromSidebar}
          />
        </main>

        <StatusBar onShowJob={setActiveJob} />

        {/* Global Dialogs */}
        <JobDialog 
          job={activeJob} 
          onClose={() => setActiveJob(null)} 
        />
        
        <LogDialog 
          isOpen={showLogs} 
          onClose={() => setShowLogs(false)} 
          logs={logs} 
        />
        
        {helpContent && (
          <HelpDialog 
            isOpen={!!helpContent} 
            onClose={() => setHelpContent(null)} 
            title={helpContent.title} 
            content={helpContent.content} 
            filename={helpContent.filename}
            filePath={helpContent.filePath}
          />
        )}

        <SingerDialog 
          isOpen={!!selectedSinger} 
          onClose={() => setSelectedSinger(null)} 
          singer={selectedSinger} 
        />

        <PortraitDialog
          isOpen={showPortrait}
          onClose={() => setShowPortrait(false)}
          type={activePortraitType}
          prompts={portraitPrompts[activePortraitType]}
          onRegenerate={handleGeneratePortraits}
        />

        <ContentDialog
          isOpen={showContentSettings}
          onClose={() => setShowContentSettings(false)}
          topics={forbiddenTopics}
          onToggle={handleToggleForbiddenTopic}
        />

        <WardrobeDialog
          isOpen={showWardrobe}
          onClose={() => setShowWardrobe(false)}
        />

        <CulinaryDialog
          isOpen={showCulinary}
          onClose={() => setShowCulinary(false)}
        />

        <FarmDialog
          isOpen={showFarm}
          onClose={() => setShowFarm(false)}
        />

        <DoubleFailedDialog
          job={doubleFailedJob}
          onClose={() => setDoubleFailedJob(null)}
        />
      </div>
    </TooltipProvider>
  );
}
