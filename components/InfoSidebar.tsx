
import React from 'react';

interface InfoSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const InfoSidebar: React.FC<InfoSidebarProps> = ({ isOpen, onClose, children }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 w-full max-w-sm h-full bg-light-bg text-light-text shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-5 pt-16 h-full overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-3xl font-bold text-light-text hover:text-white transition-colors"
            title="Close"
          >
            &times;
          </button>
          <div className="prose-styles">
            {children}
          </div>
        </div>
      </div>
      {/* FIX: Removed non-standard 'jsx' prop from the style tag. */}
       <style>{`
        .prose-styles h4 {
            margin-top: 0;
            margin-bottom: 1rem;
            color: #e0e0e0;
            border-bottom: 1px solid #5e5e5e;
            padding-bottom: 0.5rem;
            font-size: 1.25rem;
            font-weight: 600;
        }
        .prose-styles p, .prose-styles ul {
            margin-bottom: 0.75rem;
            font-size: 0.95em;
            line-height: 1.6;
        }
        .prose-styles ul {
            list-style: disc;
            margin-left: 1.25rem;
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

export default InfoSidebar;