import React, { useEffect, useState } from 'react';
import { Dialog } from './Dialog';
import { MarkdownView } from './MarkdownView';

interface HelpDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  filename?: string;
  filePath?: string;
}

export const HelpDialog: React.FC<HelpDialogProps> = ({ isOpen, onClose, title, content, filename, filePath }) => {
  const [liveContent, setLiveContent] = useState<string>(content);

  useEffect(() => {
    if (isOpen) {
      if (filePath) {
        fetch(filePath, { cache: 'no-cache' })
          .then(res => {
            if (res.ok) return res.text();
            throw new Error(`Failed to load ${filePath}`);
          })
          .then(text => setLiveContent(text))
          .catch(() => setLiveContent(content));
      } else {
        setLiveContent(content);
      }
    }
  }, [isOpen, filePath, content]);

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title={title} size="full">
      <MarkdownView content={liveContent} filename={filename || title} />
    </Dialog>
  );
};
