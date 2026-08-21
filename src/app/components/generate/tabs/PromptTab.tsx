import React from 'react';
import { Quote, Sparkles, Image, Music } from 'lucide-react';
import { HeaderBanner } from '../HeaderBanner';
import { InspirationSubTab } from './InspirationSubTab';
import { ImageInspirationSubTab } from './ImageInspirationSubTab';

interface PromptTabProps {
  promptSubTab: string;
  setPromptSubTab: (subId: string) => void;
  instructions: string;
  setInstructions: (val: string) => void;
  suggestedTitle: string;
  setSuggestedTitle: (val: string) => void;
  exactTitle: boolean;
  setExactTitle: (val: boolean) => void;
  imageDescription: string;
  setImageDescription: (val: string) => void;
  imageSeriousness: number;
  setImageSeriousness: (val: number) => void;
  musicInspiration: string;
  setMusicInspiration: (val: string) => void;
  selectedInspirationArtists: string[];
  setSelectedInspirationArtists: React.Dispatch<React.SetStateAction<string[]>>;
  dialogSelectedStyles: string[];
  setDialogSelectedStyles: React.Dispatch<React.SetStateAction<string[]>>;
  dialogSelectedInstruments: string[];
  setDialogSelectedInstruments: React.Dispatch<React.SetStateAction<string[]>>;
  selectedEmotions: string[];
  setSelectedEmotions: React.Dispatch<React.SetStateAction<string[]>>;
  selectedLead: string;
  setSelectedLead: (val: string) => void;
  selectedMusicalKey: string;
  setSelectedMusicalKey: (val: string) => void;
  selectedTimeSignature: string;
  setSelectedTimeSignature: (val: string) => void;
  sliderTempoBpm: number;
  setSliderTempoBpm: (val: number) => void;
  setSliderSapphic: (val: number) => void;
  setIsEnabledSapphic: (val: boolean) => void;
  setSliderWittyness: (val: number) => void;
  setIsEnabledWittyness: (val: boolean) => void;
  setSliderWeirdness: (val: number) => void;
  setIsEnabledWeirdness: (val: boolean) => void;
  setSliderLoudness: (val: number) => void;
  setIsEnabledLoudness: (val: boolean) => void;
  setSliderEpic: (val: number) => void;
  setIsEnabledEpic: (val: boolean) => void;
  setSliderComplexity: (val: number) => void;
  setIsEnabledComplexity: (val: boolean) => void;
  setSliderRepetitiveness: (val: number) => void;
  setIsEnabledRepetitiveness: (val: boolean) => void;
  setSliderHarmonics: (val: number) => void;
  setIsEnabledHarmonics: (val: boolean) => void;
  setSliderReverb: (val: number) => void;
  setIsEnabledReverb: (val: boolean) => void;
  setIsEnabledTempo: (val: boolean) => void;
  onAddJob: (
    name: string,
    priority: 'low' | 'normal' | 'high',
    prompt: string,
    apiKey: string,
    generationSettings?: any,
    systemInstruction?: string,
    imageBase64?: string,
    imageMimeType?: string,
    isImageJob?: boolean
  ) => string;
  isAnalyzingImage?: boolean;
  onGenerateSong?: () => void;
}

export const PromptTab: React.FC<PromptTabProps> = ({
  promptSubTab,
  instructions,
  setInstructions,
  suggestedTitle,
  setSuggestedTitle,
  exactTitle,
  setExactTitle,
  imageDescription,
  setImageDescription,
  imageSeriousness,
  setImageSeriousness,
  musicInspiration,
  setMusicInspiration,
  selectedInspirationArtists,
  setSelectedInspirationArtists,
  dialogSelectedStyles,
  setDialogSelectedStyles,
  dialogSelectedInstruments,
  setDialogSelectedInstruments,
  selectedEmotions,
  setSelectedEmotions,
  selectedLead,
  setSelectedLead,
  selectedMusicalKey,
  setSelectedMusicalKey,
  selectedTimeSignature,
  setSelectedTimeSignature,
  sliderTempoBpm,
  setSliderTempoBpm,
  setSliderSapphic,
  setIsEnabledSapphic,
  setSliderWittyness,
  setIsEnabledWittyness,
  setSliderWeirdness,
  setIsEnabledWeirdness,
  setSliderLoudness,
  setIsEnabledLoudness,
  setSliderEpic,
  setIsEnabledEpic,
  setSliderComplexity,
  setIsEnabledComplexity,
  setSliderRepetitiveness,
  setIsEnabledRepetitiveness,
  setSliderHarmonics,
  setIsEnabledHarmonics,
  setSliderReverb,
  setIsEnabledReverb,
  setIsEnabledTempo,
  onAddJob,
  isAnalyzingImage,
  onGenerateSong
}) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <HeaderBanner
        title="Lyrics Guidelines & Prompts"
        desc="Construct titles, lyrics instructions, drop visual inspirations, and artist style cues."
      />

      <div className="space-y-4">
        {promptSubTab === 'inspiration' && (
          <InspirationSubTab
            selectedArtists={selectedInspirationArtists}
            setSelectedArtists={setSelectedInspirationArtists}
          />
        )}

        {promptSubTab === 'imageToSong' && (
          <ImageInspirationSubTab
            imageDescription={imageDescription}
            setImageDescription={setImageDescription}
            imageSeriousness={imageSeriousness}
            setImageSeriousness={setImageSeriousness}
            suggestedTitle={suggestedTitle}
            setSuggestedTitle={setSuggestedTitle}
            instructions={instructions}
            setInstructions={setInstructions}
            dialogSelectedStyles={dialogSelectedStyles}
            setDialogSelectedStyles={setDialogSelectedStyles}
            dialogSelectedInstruments={dialogSelectedInstruments}
            setDialogSelectedInstruments={setDialogSelectedInstruments}
            selectedEmotions={selectedEmotions}
            setSelectedEmotions={setSelectedEmotions}
            selectedLead={selectedLead}
            setSelectedLead={setSelectedLead}
            selectedMusicalKey={selectedMusicalKey}
            setSelectedMusicalKey={setSelectedMusicalKey}
            selectedTimeSignature={selectedTimeSignature}
            setSelectedTimeSignature={setSelectedTimeSignature}
            sliderTempoBpm={sliderTempoBpm}
            setSliderTempoBpm={setSliderTempoBpm}
            setSliderSapphic={setSliderSapphic}
            setIsEnabledSapphic={setIsEnabledSapphic}
            setSliderWittyness={setSliderWittyness}
            setIsEnabledWittyness={setIsEnabledWittyness}
            setSliderWeirdness={setSliderWeirdness}
            setIsEnabledWeirdness={setIsEnabledWeirdness}
            setSliderLoudness={setSliderLoudness}
            setIsEnabledLoudness={setIsEnabledLoudness}
            setSliderEpic={setSliderEpic}
            setIsEnabledEpic={setIsEnabledEpic}
            setSliderComplexity={setSliderComplexity}
            setIsEnabledComplexity={setIsEnabledComplexity}
            setSliderRepetitiveness={setSliderRepetitiveness}
            setIsEnabledRepetitiveness={setIsEnabledRepetitiveness}
            setSliderHarmonics={setSliderHarmonics}
            setIsEnabledHarmonics={setIsEnabledHarmonics}
            setSliderReverb={setSliderReverb}
            setIsEnabledReverb={setIsEnabledReverb}
            setIsEnabledTempo={setIsEnabledTempo}
            onAddJob={onAddJob}
            isAnalyzing={isAnalyzingImage}
            onGenerateSong={onGenerateSong}
          />
        )}

        {promptSubTab === 'suggestedTitle' && (
          <div className="space-y-3 bg-lavender-surface/10 border border-lavender-border/30 rounded-2xl p-4">
            <h4 className="text-xs font-bold text-lavender-accent uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles size={14} /> Suggested Song Title
            </h4>
            <p className="text-[11px] text-lavender-text/60">
              Enter a title prompt or mandate the exact title for the song generator.
            </p>
            <input
              type="text"
              value={suggestedTitle}
              onChange={(e) => setSuggestedTitle(e.target.value)}
              placeholder="e.g., Whispers Over the Abcoude Dike"
              className="w-full bg-black/60 border border-lavender-border/50 text-lavender-text rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-lavender-accent font-bold"
            />
            <label className="flex items-center gap-2 cursor-pointer pt-1">
              <input
                type="checkbox"
                checked={exactTitle}
                onChange={(e) => setExactTitle(e.target.checked)}
                className="accent-lavender-accent h-3.5 w-3.5 rounded cursor-pointer"
              />
              <span className="text-xs text-lavender-text font-bold">Enforce Exact Title (Do not let AI modify words)</span>
            </label>
          </div>
        )}

        {promptSubTab === 'lyrics' && (
          <div className="space-y-3 bg-lavender-surface/10 border border-lavender-border/30 rounded-2xl p-4">
            <h4 className="text-xs font-bold text-lavender-accent uppercase tracking-wider flex items-center gap-1.5">
              <Quote size={14} /> Custom Lyrics Directives & Instructions
            </h4>
            <p className="text-[11px] text-lavender-text/60">
              Provide custom narrative instructions, verse themes, or lyrical rules for the AI composer.
            </p>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Enter custom song guidelines, verse themes, or chorus instructions..."
              className="w-full h-36 bg-black/60 border border-lavender-border/50 text-lavender-text rounded-xl p-3 text-xs focus:outline-none focus:border-lavender-accent font-mono leading-relaxed"
            />
          </div>
        )}

        {promptSubTab === 'artistImpression' && (
          <div className="space-y-3 bg-lavender-surface/10 border border-lavender-border/30 rounded-2xl p-4">
            <h4 className="text-xs font-bold text-lavender-accent uppercase tracking-wider flex items-center gap-1.5">
              <Music size={14} /> Artist Impression & Musical Reference Ideas
            </h4>
            <p className="text-[11px] text-lavender-text/60">
              Mention artists, iconic albums, or musical arrangements as creative inspiration.
            </p>
            <textarea
              value={musicInspiration}
              onChange={(e) => setMusicInspiration(e.target.value)}
              placeholder="e.g., Acoustic Fleetwood Mac warmth meets First Aid Kit harmonies with a subtle Portishead trip-hop bassline..."
              className="w-full h-28 bg-black/60 border border-lavender-border/50 text-lavender-text rounded-xl p-3 text-xs focus:outline-none focus:border-lavender-accent font-mono"
            />
          </div>
        )}
      </div>
    </div>
  );
};
