
import React, { createContext, useState, useContext, useCallback } from 'react';
import InfoSidebar from '../components/InfoSidebar';

interface SidebarContextType {
  openSidebar: (content: React.ReactNode) => void;
  closeSidebar: () => void;
}

const InfoSidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useInfoSidebar = () => {
  const context = useContext(InfoSidebarContext);
  if (!context) {
    throw new Error('useInfoSidebar must be used within an InfoSidebarProvider');
  }
  return context;
};

interface InfoSidebarProviderProps {
  children: React.ReactNode;
}

export const InfoSidebarProvider: React.FC<InfoSidebarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode>(null);

  const openSidebar = useCallback((newContent: React.ReactNode) => {
    setContent(newContent);
    setIsOpen(true);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <InfoSidebarContext.Provider value={{ openSidebar, closeSidebar }}>
      {children}
      <InfoSidebar isOpen={isOpen} onClose={closeSidebar}>
        {content}
      </InfoSidebar>
    </InfoSidebarContext.Provider>
  );
};
