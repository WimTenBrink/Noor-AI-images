import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string; // class for the outer wrapper flex container
  containerClassName?: string; // class for the scrollable container itself
}

export const HorizontalScroll: React.FC<HorizontalScrollProps> = ({
  children,
  className = '',
  containerClassName = '',
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      // Use 1.5px tolerance for rounding differences in various browsers/displays
      setCanScrollLeft(scrollLeft > 1.5);
      setCanScrollRight(scrollWidth - clientWidth - scrollLeft > 1.5);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    let observer: ResizeObserver | null = null;
    if (el && typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(() => checkScroll());
      observer.observe(el);
    }
    window.addEventListener('resize', checkScroll);
    return () => {
      window.removeEventListener('resize', checkScroll);
      if (observer) observer.disconnect();
    };
  }, [children]);

  const handleFirst = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const handleLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -220, behavior: 'smooth' });
    }
  };

  const handleRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 220, behavior: 'smooth' });
    }
  };

  const handleLast = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: scrollRef.current.scrollWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className={`flex items-center min-w-0 w-full ${className}`}>
      {/* Four navigation buttons grouped on the left */}
      <div className="flex items-center gap-0.5 bg-black/45 p-1 rounded-lg mr-2 border border-lavender-border/25 shrink-0 select-none shadow-md">
        <button
          type="button"
          onClick={handleFirst}
          disabled={!canScrollLeft}
          className={`p-1 rounded transition-colors flex items-center justify-center ${
            canScrollLeft
              ? 'hover:bg-lavender-accent/20 hover:text-lavender-accent text-lavender-text cursor-pointer'
              : 'text-lavender-text/25 cursor-not-allowed'
          }`}
          title="Scroll to First"
          id="scroll-first-btn"
        >
          <ChevronsLeft size={13} />
        </button>
        <button
          type="button"
          onClick={handleLeft}
          disabled={!canScrollLeft}
          className={`p-1 rounded transition-colors flex items-center justify-center ${
            canScrollLeft
              ? 'hover:bg-lavender-accent/20 hover:text-lavender-accent text-lavender-text cursor-pointer'
              : 'text-lavender-text/25 cursor-not-allowed'
          }`}
          title="Scroll Left"
          id="scroll-left-btn"
        >
          <ChevronLeft size={13} />
        </button>
        <button
          type="button"
          onClick={handleRight}
          disabled={!canScrollRight}
          className={`p-1 rounded transition-colors flex items-center justify-center ${
            canScrollRight
              ? 'hover:bg-lavender-accent/20 hover:text-lavender-accent text-lavender-text cursor-pointer'
              : 'text-lavender-text/25 cursor-not-allowed'
          }`}
          title="Scroll Right"
          id="scroll-right-btn"
        >
          <ChevronRight size={13} />
        </button>
        <button
          type="button"
          onClick={handleLast}
          disabled={!canScrollRight}
          className={`p-1 rounded transition-colors flex items-center justify-center ${
            canScrollRight
              ? 'hover:bg-lavender-accent/20 hover:text-lavender-accent text-lavender-text cursor-pointer'
              : 'text-lavender-text/25 cursor-not-allowed'
          }`}
          title="Scroll to Last"
          id="scroll-last-btn"
        >
          <ChevronsRight size={13} />
        </button>
      </div>

      {/* The scrollable content container */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className={`flex-1 overflow-x-auto no-scrollbar scroll-smooth ${containerClassName}`}
      >
        {children}
      </div>
    </div>
  );
};
