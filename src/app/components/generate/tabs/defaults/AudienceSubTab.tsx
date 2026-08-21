import React from 'react';
import { Users, Heart, Sparkles, Radio, Repeat } from 'lucide-react';
import { AppDefaults } from '../../../../../types';

interface AudienceSubTabProps {
  appDefaults: AppDefaults;
  setAppDefaults: React.Dispatch<React.SetStateAction<AppDefaults>>;
}

export const AudienceSubTab: React.FC<AudienceSubTabProps> = ({
  appDefaults,
  setAppDefaults
}) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center gap-2 mb-2">
        <span className="h-1.5 w-1.5 rounded-full bg-lavender-accent animate-pulse" />
        <h3 className="text-xs font-black uppercase tracking-wider text-lavender-accent/90">
          Audience Reactions & Spectator Soundscapes
        </h3>
      </div>
      <p className="text-[11px] text-lavender-text/60 leading-relaxed font-medium mb-3">
        Enable ambient spectator crowd effects for live concert and intimate barn performances.
      </p>

      {/* Main Audience Interaction Master Toggle */}
      <div className="bg-lavender-surface/15 border border-lavender-border/40 rounded-2xl p-4 space-y-3">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={appDefaults.audienceInteraction}
            onChange={(e) => setAppDefaults((prev) => ({ ...prev, audienceInteraction: e.target.checked }))}
            className="accent-lavender-accent h-4 w-4 rounded"
          />
          <span className="text-xs font-extrabold text-lavender-text flex items-center gap-1.5">
            <Users size={14} className="text-amber-400" /> Enable Audience Presence Soundscape
          </span>
        </label>
        <p className="text-[10.5px] text-lavender-text/60 leading-relaxed font-medium pl-7">
          When enabled, spectator sound cues are embedded into performance audio tags and intro/outro arrangements.
        </p>

        {appDefaults.audienceInteraction && (
          <div className="pt-3 border-t border-lavender-border/20 grid grid-cols-1 md:grid-cols-2 gap-2.5 pl-2 animate-fade-in">
            <label className="flex items-center gap-2.5 p-2 rounded-xl border border-lavender-border/30 bg-black/40 hover:bg-lavender-surface/10 cursor-pointer text-xs font-bold text-lavender-text">
              <input
                type="checkbox"
                checked={appDefaults.audienceClapping || false}
                onChange={(e) => setAppDefaults((prev) => ({ ...prev, audienceClapping: e.target.checked }))}
                className="accent-lavender-accent h-3.5 w-3.5 rounded"
              />
              Rhythmic Hand Clapping
            </label>

            <label className="flex items-center gap-2.5 p-2 rounded-xl border border-lavender-border/30 bg-black/40 hover:bg-lavender-surface/10 cursor-pointer text-xs font-bold text-lavender-text">
              <input
                type="checkbox"
                checked={appDefaults.audienceStomping || false}
                onChange={(e) => setAppDefaults((prev) => ({ ...prev, audienceStomping: e.target.checked }))}
                className="accent-lavender-accent h-3.5 w-3.5 rounded"
              />
              Wooden Floor Foot Stomping
            </label>

            <label className="flex items-center gap-2.5 p-2 rounded-xl border border-lavender-border/30 bg-black/40 hover:bg-lavender-surface/10 cursor-pointer text-xs font-bold text-lavender-text">
              <input
                type="checkbox"
                checked={appDefaults.audienceCheering || false}
                onChange={(e) => setAppDefaults((prev) => ({ ...prev, audienceCheering: e.target.checked }))}
                className="accent-lavender-accent h-3.5 w-3.5 rounded"
              />
              Enthusiastic Spectator Cheering
            </label>

            <label className="flex items-center gap-2.5 p-2 rounded-xl border border-lavender-border/30 bg-black/40 hover:bg-lavender-surface/10 cursor-pointer text-xs font-bold text-lavender-text">
              <input
                type="checkbox"
                checked={appDefaults.audienceSinging || false}
                onChange={(e) => setAppDefaults((prev) => ({ ...prev, audienceSinging: e.target.checked }))}
                className="accent-lavender-accent h-3.5 w-3.5 rounded"
              />
              Crowd Singing Along
            </label>

            <label className="flex items-center gap-2.5 p-2 rounded-xl border border-lavender-border/30 bg-black/40 hover:bg-lavender-surface/10 cursor-pointer text-xs font-bold text-lavender-text">
              <input
                type="checkbox"
                checked={appDefaults.audienceHumming || false}
                onChange={(e) => setAppDefaults((prev) => ({ ...prev, audienceHumming: e.target.checked }))}
                className="accent-lavender-accent h-3.5 w-3.5 rounded"
              />
              Soft Collective Humming
            </label>

            <label className="flex items-center gap-2.5 p-2 rounded-xl border border-lavender-border/30 bg-black/40 hover:bg-lavender-surface/10 cursor-pointer text-xs font-bold text-lavender-text">
              <input
                type="checkbox"
                checked={appDefaults.audienceSingsChorus || false}
                onChange={(e) => setAppDefaults((prev) => ({ ...prev, audienceSingsChorus: e.target.checked }))}
                className="accent-lavender-accent h-3.5 w-3.5 rounded"
              />
              Crowd Chorus Takeover
            </label>

            <label className="flex items-center gap-2.5 p-2 rounded-xl border border-lavender-border/30 bg-black/40 hover:bg-lavender-surface/10 cursor-pointer text-xs font-bold text-lavender-text">
              <input
                type="checkbox"
                checked={appDefaults.audienceWhistling || false}
                onChange={(e) => setAppDefaults((prev) => ({ ...prev, audienceWhistling: e.target.checked }))}
                className="accent-lavender-accent h-3.5 w-3.5 rounded"
              />
              Melodic Audience Whistling
            </label>

            <label className="flex items-center gap-2.5 p-2 rounded-xl border border-lavender-border/30 bg-black/40 hover:bg-lavender-surface/10 cursor-pointer text-xs font-bold text-lavender-text">
              <input
                type="checkbox"
                checked={appDefaults.audienceGasps || false}
                onChange={(e) => setAppDefaults((prev) => ({ ...prev, audienceGasps: e.target.checked }))}
                className="accent-lavender-accent h-3.5 w-3.5 rounded"
              />
              Collective Gasps & Awe
            </label>

            <label className="flex items-center gap-2.5 p-2 rounded-xl border border-lavender-border/30 bg-black/40 hover:bg-lavender-surface/10 cursor-pointer text-xs font-bold text-lavender-text">
              <input
                type="checkbox"
                checked={appDefaults.audienceCallResponse || false}
                onChange={(e) => setAppDefaults((prev) => ({ ...prev, audienceCallResponse: e.target.checked }))}
                className="accent-lavender-accent h-3.5 w-3.5 rounded"
              />
              Crowd Call-and-Response Echo
            </label>
          </div>
        )}
      </div>
    </div>
  );
};
