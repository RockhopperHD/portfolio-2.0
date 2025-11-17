
import React from 'react';

interface ClipboardPanelProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ClipboardPanel: React.FC<ClipboardPanelProps> = ({ isVisible, onClose, children }) => {
  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 z-[1550] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div
        className={`fixed left-1/2 -translate-x-1/2 w-[90%] max-w-2xl h-auto max-h-[80vh] bg-accent-pale text-light-text rounded-t-2xl shadow-2xl z-[1600] transition-transform duration-400 ease-in-out p-5 pb-12 overflow-y-auto ${isVisible ? 'translate-y-0 bottom-0' : 'translate-y-full bottom-0'}`}
      >
        <div className="prose-styles">
            {children}
        </div>
        <button
          onClick={onClose}
          className="absolute bottom-3 right-4 bg-emphasis hover:bg-emphasis-darker text-dark-text border border-emphasis-darker rounded-full w-8 h-8 flex items-center justify-content text-xl font-bold transition-colors"
          title="Close Clipboard"
        >
          &times;
        </button>
      </div>
      {/* FIX: Removed non-standard 'jsx' prop from the style tag. */}
       <style>{`
        .prose-styles h4 {
            margin-top: 0;
            margin-bottom: 0.75rem;
            border-bottom: 1px solid #5e5e5e;
            padding-bottom: 0.5rem;
            font-size: 1.25rem;
            font-weight: 600;
        }
        .prose-styles p {
            font-size: 0.95em;
            line-height: 1.5;
            margin-bottom: 1rem;
        }
        .prose-styles ul {
            list-style-position: inside;
            padding-left: 0;
        }
        .prose-styles li {
            margin-bottom: 0.5rem;
        }
        .prose-styles a {
            color: #8ab4f8;
            text-decoration: underline;
        }
        .prose-styles a:hover {
            color: #a7c5f9;
        }
       `}</style>
    </>
  );
};

export default ClipboardPanel;