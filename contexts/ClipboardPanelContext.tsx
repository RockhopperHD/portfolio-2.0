
import React, { createContext, useState, useContext, useCallback } from 'react';
import ClipboardPanel from '../components/ClipboardPanel';

interface ClipboardContextType {
  openClipboard: (content: React.ReactNode) => void;
  closeClipboard: () => void;
}

const ClipboardPanelContext = createContext<ClipboardContextType | undefined>(undefined);

export const useClipboardPanel = () => {
  const context = useContext(ClipboardPanelContext);
  if (!context) {
    throw new Error('useClipboardPanel must be used within a ClipboardPanelProvider');
  }
  return context;
};

interface ClipboardPanelProviderProps {
    children: React.ReactNode;
}

export const ClipboardPanelProvider: React.FC<ClipboardPanelProviderProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);

  const openClipboard = useCallback((newContent: React.ReactNode) => {
    setContent(newContent);
    setIsVisible(true);
  }, []);

  const closeClipboard = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <ClipboardPanelContext.Provider value={{ openClipboard, closeClipboard }}>
      {children}
      <ClipboardPanel isVisible={isVisible} onClose={closeClipboard}>
        {content}
      </ClipboardPanel>
    </ClipboardPanelContext.Provider>
  );
};
