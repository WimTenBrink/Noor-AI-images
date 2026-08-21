import React from 'react';

interface HeaderBannerProps {
  title: string;
  desc: string;
  targetId?: string;
  isEnabled?: boolean;
}

export const HeaderBanner: React.FC<HeaderBannerProps> = ({
  title,
  desc
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 bg-lavender-surface/20 border border-lavender-border/40 rounded-xl mb-4 shrink-0 shadow-sm relative">
      <div>
        <h3 className="text-sm font-extrabold text-lavender-accent uppercase tracking-wider flex items-center gap-2">
          {title}
        </h3>
        <p className="text-[11px] text-lavender-text/50 font-medium tracking-tight mt-0.5">{desc}</p>
      </div>
    </div>
  );
};
