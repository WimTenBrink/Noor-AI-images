import React, { useEffect, useState } from 'react';
import { Dialog } from './Dialog';
import { MarkdownView } from './MarkdownView';

export interface SingerDialogItem {
  name: string;
  photo: string;
  bioPath?: string;
  bioContent?: string;
  description?: string;
}

interface SingerDialogProps {
  isOpen: boolean;
  onClose: () => void;
  singer: SingerDialogItem | null;
}

export const SingerDialog: React.FC<SingerDialogProps> = ({ isOpen, onClose, singer }) => {
  const [bio, setBio] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && singer) {
      if (singer.bioPath && singer.bioPath.endsWith('.md')) {
        setLoading(true);
        fetch(singer.bioPath, { cache: 'no-cache' })
          .then(res => {
            if (res.ok) return res.text();
            throw new Error(`HTTP ${res.status}`);
          })
          .then(text => {
            setBio(text);
            setLoading(false);
          })
          .catch(err => {
            console.warn('Falling back to bundled bioContent:', err);
            setBio(singer.bioContent || singer.description || 'Biography loaded.');
            setLoading(false);
          });
      } else if (singer.bioContent) {
        setBio(singer.bioContent);
        setLoading(false);
      } else {
        setBio(singer.description || singer.bioPath || 'No biography details available.');
        setLoading(false);
      }
    }
  }, [isOpen, singer]);

  if (!singer) return null;

  return (
    <Dialog 
      isOpen={isOpen} 
      onClose={onClose} 
      title={singer.name}
      size="large"
    >
      <div className="flex flex-col md:flex-row gap-6 p-4 h-full overflow-y-auto">
        <div className="w-full md:w-1/3 flex flex-col items-center gap-4 shrink-0">
          <img 
            src={singer.photo} 
            alt={singer.name} 
            className="w-48 h-48 md:w-full md:h-auto aspect-square object-cover rounded-xl border border-lavender-border shadow-lg"
          />
          <h3 className="text-xl font-bold text-lavender-accent text-center">{singer.name}</h3>
        </div>
        <div className="w-full md:w-2/3 flex flex-col min-h-0">
          {loading ? (
            <div className="flex items-center justify-center p-8 text-lavender-text/70">
              Loading biography...
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto pr-2">
              <MarkdownView content={bio} />
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
};
