import React from 'react';

interface HeaderProps {
    onNavigate: (path: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
    
    const handleContactClick = () => {
        const footer = document.getElementById('page-footer');
        footer?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <header className="bg-[#1a1a1a] shadow-custom-light sticky top-0 w-full z-50 min-h-[85px] flex items-center justify-between px-4 md:px-8 py-2 flex-col sm:flex-row gap-2">
            <div className="flex items-center justify-between w-full sm:w-auto flex-col sm:flex-row gap-4">
                <button onClick={() => onNavigate('/')} className="text-3xl font-bold text-light-text hover:text-emphasis transition-colors">Owen Whelan</button>
                <div className="flex gap-2 items-center flex-wrap justify-center">
                    <button onClick={() => onNavigate('/about')} className="nav-button" title="About Me">
                        <i className="fa-solid fa-user-astronaut"></i>
                        <span className="nav-button-label">About</span>
                    </button>
                    <button onClick={() => onNavigate('/skills')} className="nav-button" title="Skills">
                        <i className="fa-solid fa-atom"></i>
                        <span className="nav-button-label">Skills</span>
                    </button>
                    <button onClick={() => onNavigate('/my-work')} className="nav-button" title="My Work">
                        <i className="fa-solid fa-rocket"></i>
                        <span className="nav-button-label">My Work</span>
                    </button>
                    <button onClick={() => onNavigate('/resume')} className="nav-button" title="Résumé (Web)">
                        <i className="fa-solid fa-file-lines"></i>
                        <span className="nav-button-label">Résumé</span>
                    </button>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <button onClick={handleContactClick} className="bg-gradient-to-br from-emphasis to-emphasis-darker text-dark-text font-semibold py-2 px-5 rounded-full flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-transform">
                    <i className="fa-solid fa-envelope"></i>
                    <span className="hidden md:inline">Get in Touch</span>
                </button>
            </div>
            {/* FIX: Removed non-standard 'jsx' prop from the style tag. */}
            <style>{`
              .nav-button {
                width: auto; min-width: 60px; height: 55px;
                padding: 5px 8px; border-radius: 10px; gap: 2px;
                background: linear-gradient(135deg, #e0e0e0, #cccccc);
                border: 2px solid #5e5e5e; cursor: pointer;
                transition: background 0.3s ease, border-color 0.2s ease, transform 0.1s ease, box-shadow 0.2s ease;
                display: flex; flex-direction: column; justify-content: center; align-items: center;
                color: #121212; box-shadow: 0 1px 3px rgba(0,0,0,0.2); text-align: center;
              }
              .nav-button:hover {
                background: linear-gradient(135deg, #ffffff, #dcdcdc); border-color: #1e1e1e;
                transform: scale(1.04); box-shadow: 0 4px 9px rgba(0,0,0,0.35);
              }
              .nav-button:active {
                transform: scale(0.97); background: linear-gradient(135deg, #cccccc, #e0e0e0);
                box-shadow: inset 0 1px 2px rgba(0,0,0,0.2);
              }
              .nav-button i { font-size: 1.2rem; line-height: 1; color: #000000; margin-bottom: 1px; }
              .nav-button .nav-button-label { font-size: 0.65rem; line-height: 1.1; font-weight: 600; color: #121212; }
            `}</style>
        </header>
    );
}

export default Header;