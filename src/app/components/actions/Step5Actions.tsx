import React, { useMemo } from 'react';
import { 
  Zap, Copy, Check, Sparkles, AlertCircle, Play
} from 'lucide-react';
import { SINGERS_DETAILED } from '../../../constants/singersDetailed';
import { ACTION_GROUPS, ActionGroup, getActionGroupById, getActionsForGroup, ActionItem } from '../../../constants/actionGroups';

interface Step5ActionsProps {
  enabledChars: Record<string, boolean>;
  actions: Record<string, string>;
  selectedActionGroup: string;
  onSelectActionGroup: (groupId: string) => void;
  onSelectCharacterAction: (singerId: string, actionText: string) => void;
  onChangeCharacterActionText: (singerId: string, text: string) => void;
  copiedSingerId: string | null;
  onCopyCharacterAction: (singerId: string, text: string) => void;
}

const SINGER_BADGES: Record<string, { avatar: string; border: string; bg: string; text: string }> = {
  miranda: { avatar: '🎸', border: 'border-purple-500/40', bg: 'bg-purple-950/30', text: 'text-purple-300' },
  annelies: { avatar: '🎻', border: 'border-indigo-500/40', bg: 'bg-indigo-950/30', text: 'text-indigo-300' },
  fannie: { avatar: '🥁', border: 'border-rose-500/40', bg: 'bg-rose-950/30', text: 'text-rose-300' },
  emma: { avatar: '🎹', border: 'border-amber-500/40', bg: 'bg-amber-950/30', text: 'text-amber-300' },
  senna: { avatar: '🎙️', border: 'border-emerald-500/40', bg: 'bg-emerald-950/30', text: 'text-emerald-300' }
};

const DEFAULT_SIGNATURES: Record<string, string[]> = {
  miranda: [
    'Stretching hamstrings and calves with graceful flexibility against a wooden fence.',
    'Holding acoustic guitar poised with pick in hand, smiling warmly.',
    'Jogging along the gravel path with athletic posture and windblown blonde hair.'
  ],
  annelies: [
    'Running with an energetic, athletic stride and focused athletic posture.',
    'Tuning violin pegs with careful concentration and poised bow.',
    'Stretching arms overhead under the open sky with radiant smile.'
  ],
  fannie: [
    'Dribbling a vintage leather soccer ball with agile, nimble footwork.',
    'Spinning drumsticks between fingers with playful tomboy grin.',
    'Leaping enthusiastically over a low pasture ditch with athletic bounce.'
  ],
  emma: [
    'Performing a dynamic martial high kick with poised balance in the open air.',
    'Resting fingers poised across keyboard keys with calm thoughtful expression.',
    'Stretching in deep martial arts lunge pose with grounded poise.'
  ],
  senna: [
    'Taking candid portrait photographs of friends with a vintage rangefinder camera.',
    'Holding audio recorder and notepad, laughing cheerfully mid-conversation.',
    'Framing a scenic wide landscape shot through telephoto camera viewfinder.'
  ]
};

export const Step5Actions: React.FC<Step5ActionsProps> = ({
  enabledChars,
  actions,
  selectedActionGroup,
  onSelectActionGroup,
  onSelectCharacterAction,
  onChangeCharacterActionText,
  copiedSingerId,
  onCopyCharacterAction
}) => {
  const activeSingers = SINGERS_DETAILED.filter(s => enabledChars[s.id]);
  const currActionGroup = getActionGroupById(selectedActionGroup);

  // Dynamically sort action groups at runtime
  const sortedActionGroups = useMemo(() => {
    return [...ACTION_GROUPS].sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  // Dynamically sort group action presets at runtime
  const groupActions = useMemo(() => {
    const raw = getActionsForGroup(selectedActionGroup);
    return [...raw].sort((a, b) => (a.label || a.name).localeCompare(b.label || b.name));
  }, [selectedActionGroup]);

  return (
    <div className="flex-1 flex flex-col space-y-4 min-h-0 overflow-y-auto pr-1">
      {/* HEADER & GLOBAL ACTION GROUP SELECTOR */}
      <div className="p-3 bg-lavender-surface/50 border border-lavender-border/70 rounded-xl flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-950/60 border border-amber-500/40 flex items-center justify-center text-amber-300">
            <Zap size={18} />
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-bold text-lavender-accent uppercase tracking-wider">
              Character Poses &amp; Actions ({activeSingers.length} Active)
            </h3>
            <p className="text-[11px] text-lavender-text/70">
              Assign specific physical poses, gestures, or band interactions per active character.
            </p>
          </div>
        </div>

        {/* ACTION GROUP SELECTOR */}
        <div className="flex items-center gap-2 min-w-0">
          <label className="text-xs font-bold text-amber-300 flex items-center gap-1 shrink-0 whitespace-nowrap">
            <Zap size={14} className="text-amber-400" />
            <span>Action Group:</span>
          </label>
          <select
            value={selectedActionGroup}
            onChange={(e) => onSelectActionGroup(e.target.value)}
            className="px-3 py-1.5 bg-lavender-bg border border-amber-500/40 text-amber-200 rounded-lg text-xs font-semibold focus:outline-none focus:border-amber-400 cursor-pointer shadow-sm"
          >
            {sortedActionGroups.map(group => (
              <option key={group.id} value={group.id}>
                {group.icon} {group.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {activeSingers.length === 0 ? (
        <div className="p-8 text-center bg-lavender-surface/20 rounded-xl border border-lavender-border/40 space-y-2">
          <AlertCircle size={28} className="mx-auto text-amber-400" />
          <h4 className="text-xs font-bold text-lavender-accent">No Active Characters</h4>
          <p className="text-[11px] text-lavender-text/70">
            Please return to Characters and enable at least one character to assign poses.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {activeSingers.map(singer => {
            const badge = SINGER_BADGES[singer.id] || { avatar: '👤', border: 'border-lavender-border', bg: 'bg-lavender-surface', text: 'text-lavender-text' };
            const currentActionText = actions[singer.id] || '';
            const signatures = DEFAULT_SIGNATURES[singer.id] || [];

            return (
              <div
                key={singer.id}
                className={`p-3.5 rounded-xl border space-y-2.5 bg-lavender-surface/30 ${badge.border} shadow-sm flex flex-col justify-between`}
              >
                {/* CHARACTER HEADER */}
                <div className="flex items-center justify-between pb-2 border-b border-lavender-border/30">
                  <div className="flex items-center gap-2">
                    <span className="text-xl p-1 rounded bg-lavender-bg border border-lavender-border/50">{badge.avatar}</span>
                    <div>
                      <div className={`text-xs font-bold ${badge.text}`}>
                        {singer.name}
                      </div>
                      <div className="text-[10px] text-lavender-text/60 font-medium">
                        {singer.role}
                      </div>
                    </div>
                  </div>

                  {currentActionText && (
                    <button
                      type="button"
                      onClick={() => onCopyCharacterAction(singer.id, currentActionText)}
                      className="p-1 px-2 text-[11px] font-medium text-lavender-text/80 hover:text-lavender-accent hover:bg-lavender-surface rounded flex items-center gap-1 border border-lavender-border/50 cursor-pointer transition-colors"
                      title="Copy character action"
                    >
                      {copiedSingerId === singer.id ? (
                        <>
                          <Check size={12} className="text-emerald-400" />
                          <span className="text-emerald-300">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* PRESET QUICK-LOAD DROPDOWN */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-amber-300 flex items-center justify-between">
                    <span>Preset Pose / Gesture ({currActionGroup?.name || 'Group'}):</span>
                    <span className="text-[10px] text-lavender-text/50">
                      {groupActions.length} presets
                    </span>
                  </label>
                  <select
                    onChange={(e) => {
                      if (e.target.value) {
                        onSelectCharacterAction(singer.id, e.target.value);
                      }
                    }}
                    defaultValue=""
                    className="w-full bg-lavender-bg border border-lavender-border rounded-lg p-2 text-xs font-medium text-lavender-text focus:outline-none focus:border-amber-400 cursor-pointer hover:border-amber-400/60 truncate"
                  >
                    <option value="" disabled>⚡ Choose from {currActionGroup?.name || 'presets'}...</option>
                    {groupActions.map((act) => (
                      <option key={act.id} value={act.actionText || act.prompt || act.description}>
                        {act.label || act.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* ACTION TEXTAREA */}
                <div className="space-y-1 flex-1 flex flex-col">
                  <label className="text-[11px] font-bold text-lavender-accent">
                    Action Description:
                  </label>
                  <textarea
                    value={currentActionText}
                    onChange={(e) => onChangeCharacterActionText(singer.id, e.target.value)}
                    placeholder={`Describe ${singer.name}'s physical pose, athletic motion, stance, expression, or activity...`}
                    rows={3}
                    className="w-full flex-1 bg-lavender-bg border border-lavender-border rounded-lg p-2.5 text-xs text-lavender-text focus:outline-none focus:border-lavender-accent resize-y min-h-[70px] leading-relaxed"
                  />
                </div>

                {/* SIGNATURE ACTIONS CHIPS */}
                <div className="pt-1 space-y-1">
                  <span className="text-[10px] text-lavender-text/60 font-semibold uppercase tracking-wider block">
                    Signature Poses:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {signatures.map((sig, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => onSelectCharacterAction(singer.id, sig)}
                        className="text-[10px] px-2 py-0.5 rounded bg-lavender-bg hover:bg-lavender-border text-lavender-text/80 hover:text-lavender-accent border border-lavender-border/60 transition-colors text-left truncate max-w-full cursor-pointer"
                        title={sig}
                      >
                        {sig.slice(0, 45)}...
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
