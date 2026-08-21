import React from 'react';
import { HeaderBanner } from '../HeaderBanner';
import { TIME_SIGNATURES, MUSICAL_KEYS, findKeyIndexByName, findKeyByIndex, findTimeSignatureByFraction } from '../../../utils/musicParams';

interface MusicTheoryTabProps {
  musicTheorySubTab: string;
  setMusicTheorySubTab: (subId: string) => void;
  selectedTimeSignature: string;
  setSelectedTimeSignature: (sig: string) => void;
  selectedMusicalKey: string;
  setSelectedMusicalKey: (key: string) => void;
}

export const MusicTheoryTab: React.FC<MusicTheoryTabProps> = ({
  musicTheorySubTab,
  selectedTimeSignature,
  setSelectedTimeSignature,
  selectedMusicalKey,
  setSelectedMusicalKey
}) => {
  // Current indices for sliders
  const currentSigIndex = Math.max(0, TIME_SIGNATURES.findIndex(s => s.fraction === selectedTimeSignature));
  const activeSig = TIME_SIGNATURES[currentSigIndex >= 0 ? currentSigIndex : 0];

  const currentKeyIndex = findKeyIndexByName(selectedMusicalKey);
  const activeKeyName = findKeyByIndex(currentKeyIndex);

  return (
    <div className="space-y-4 animate-fade-in">
      {musicTheorySubTab === 'timeSignature' && (
        <div className="space-y-4">
          <HeaderBanner
            title="Time Signatures & Rhythmic Meter Slider"
            desc="Drag the slider to choose meter signature for rhythm and verse cadence."
          />
          <div className="p-5 bg-black/40 border border-lavender-border/30 rounded-2xl space-y-4">
            <div className="flex items-center justify-between text-xs font-bold text-lavender-text">
              <span className="text-sm font-extrabold text-lavender-accent">
                {activeSig.fraction} — {activeSig.name}
              </span>
              <span className="font-mono text-lavender-accent bg-lavender-surface/50 px-2.5 py-1 rounded-lg border border-lavender-border/30">
                Step {currentSigIndex + 1} of {TIME_SIGNATURES.length}
              </span>
            </div>

            <input
              type="range"
              min={0}
              max={TIME_SIGNATURES.length - 1}
              value={currentSigIndex}
              onChange={(e) => {
                const idx = parseInt(e.target.value, 10);
                setSelectedTimeSignature(TIME_SIGNATURES[idx].fraction);
              }}
              className="w-full accent-lavender-accent cursor-pointer h-2 bg-lavender-surface/30 rounded-lg"
            />

            <div className="p-3 bg-lavender-surface/20 rounded-xl border border-lavender-border/20 text-xs text-lavender-text/80 leading-relaxed">
              <p className="font-bold text-white mb-1">Rhythmic Feel & Metric Properties:</p>
              {activeSig.description}
            </div>
          </div>
        </div>
      )}

      {musicTheorySubTab === 'musicalKey' && (
        <div className="space-y-4">
          <HeaderBanner
            title="Musical Key & Tonal Center Slider"
            desc="Drag the slider to select harmonic key center for melody and vocal range alignment."
          />
          <div className="p-5 bg-black/40 border border-lavender-border/30 rounded-2xl space-y-4">
            <div className="flex items-center justify-between text-xs font-bold text-lavender-text">
              <span className="text-sm font-extrabold text-lavender-accent">
                {activeKeyName}
              </span>
              <span className="font-mono text-lavender-accent bg-lavender-surface/50 px-2.5 py-1 rounded-lg border border-lavender-border/30">
                Key {currentKeyIndex + 1} of {MUSICAL_KEYS.length}
              </span>
            </div>

            <input
              type="range"
              min={0}
              max={MUSICAL_KEYS.length - 1}
              value={currentKeyIndex}
              onChange={(e) => {
                const idx = parseInt(e.target.value, 10);
                setSelectedMusicalKey(MUSICAL_KEYS[idx]);
              }}
              className="w-full accent-lavender-accent cursor-pointer h-2 bg-lavender-surface/30 rounded-lg"
            />

            <div className="p-3 bg-lavender-surface/20 rounded-xl border border-lavender-border/20 text-xs text-lavender-text/80 leading-relaxed">
              <p className="font-bold text-white mb-1">Tonal Characteristic:</p>
              {activeKeyName.includes("Major") ? (
                <span>Bright, open, uplifting major tonality providing warm acoustic resonance and noble clarity.</span>
              ) : (
                <span>Deep, introspective, melancholic minor tonality producing emotional tension and dramatic depth.</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
