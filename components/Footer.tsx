
import React from 'react';

interface FooterProps {
    onNavigate: (path: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
    return (
        <footer id="page-footer" className="bg-[#1a1a1a] text-light-text py-10 px-5 md:px-10 text-center text-shadow-lg border-t border-black">
            <div className="max-w-3xl mx-auto text-left mb-8">
                <p>If I strike you as someone to talk to about what you do or how I could help, you can contact me at one of the links below.</p>
                <p>I'm open to projects about AI, technology, education, and all the like -- or just to chat. :)</p>
            </div>
            <div className="flex justify-center gap-5 flex-wrap mb-4">
                <a href="https://www.linkedin.com/in/owen-whelan-605966296/" target="_blank" rel="noopener noreferrer" className="footer-button">
                    <span className="button-main-label">LinkedIn</span>
                    <span className="button-sub-label">Professional network & updates</span>
                </a>
                <a href="mailto:owen.whelan1@marist.edu" className="footer-button">
                    <span className="button-main-label">Academic Email</span>
                    <span className="button-sub-label">University-related inquiries</span>
                </a>
                <a href="mailto:owenw2023@gmail.com" className="footer-button">
                    <span className="button-main-label">General Email</span>
                    <span className="button-sub-label">Comments, questions or information</span>
                </a>
            </div>
            <div className="my-5 text-center">
                <p>Academic: <span className="font-mono bg-dark-gray-bg px-2 py-1 rounded text-sm border border-medium-gray-bg">owen.whelan1@marist.edu</span></p>
                <p>General: <span className="font-mono bg-dark-gray-bg px-2 py-1 rounded text-sm border border-medium-gray-bg mt-2 inline-block">owenw2023@gmail.com</span></p>
            </div>
            <button onClick={() => onNavigate('/changelog')} className="button-style mt-6">
                View Website Changelog
            </button>
            <p className="text-sm text-medium-gray-bg mt-4">Last major updates made in November 2025, last minor changes in January 2026.</p>
            <p className="text-xs text-medium-gray-bg italic mt-6">This site was coded with AI and augmented with my knowledge of HTML and graphic design. I did the "vibe coding" process and then deployed the website myself.</p>
            {/* FIX: Removed non-standard 'jsx' prop from the style tag. */}
            <style>{`
              .footer-button {
                padding: 10px 22px; font-size: 1rem; width: 280px; min-width: 280px;
                flex-direction: column; text-align: center; line-height: 1.3; gap: 2px;
                cursor: pointer; border-radius: 25px; transition: all 0.2s ease;
                display: inline-flex; align-items: center; justify-content: center;
                border: 2px solid #e88d52;
                background: linear-gradient(135deg, #FFCC99, #f5a673);
                color: #121212;
                text-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
                box-shadow: 0 2px 4px rgba(0,0,0,0.2);
              }
              .footer-button:hover { transform: scale(1.03); box-shadow: 0 4px 8px rgba(0,0,0,0.3); }
              .footer-button:active { transform: scale(0.98); }
              .button-main-label { display: block; font-weight: 600; }
              .button-sub-label { font-size: 0.8em; font-style: italic; color: #553c20; font-weight: 400; display: block; }
              .button-style {
                cursor: pointer; padding: 10px 18px; border-radius: 25px;
                transition: background 0.3s ease, transform 0.1s ease, border-color 0.2s ease, box-shadow 0.2s ease;
                display: inline-flex; align-items: center; justify-content: center; gap: 8px;
                font-size: 1rem; line-height: 1.4; font-weight: 600;
                border: 2px solid #e88d52;
                background: linear-gradient(135deg, #FFCC99, #f5a673);
                color: #121212;
                text-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
                box-shadow: 0 2px 4px rgba(0,0,0,0.2);
              }
              .button-style:hover { transform: scale(1.03); box-shadow: 0 4px 8px rgba(0,0,0,0.3); }
              .button-style:active { transform: scale(0.98); }
            `}</style>
        </footer>
    );
}

export default Footer;
