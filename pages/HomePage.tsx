
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import HighlightsCarousel from '../components/HighlightsCarousel';

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const handleViewPdf = () => {
        window.open('/OwenWhelan_Resume.pdf', '_blank');
    }

    return (
        <div>
            <div className="bg-dark-gray-bg py-10 px-4 sm:px-10" style={{ backgroundImage: "repeating-linear-gradient( 45deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.02) 10px, transparent 10px, transparent 20px )" }}>
                <div className="bg-soft-gray-bg text-light-text p-6 sm:p-8 rounded-lg text-center font-normal text-base sm:text-lg shadow-lg max-w-4xl mx-auto">
                    I'm a motivated, dedicated individual who uses modern technology to research what's new in education and understand the world of language and communication a bit better, for myself and for others.
                </div>
            </div>

            <main>
                <section id="resume-section" className="content-section bg-dark-gray-bg shadow-custom-medium pt-8">
                    <SectionLabel title="Résumé" />
                    <div className="section-content flex flex-col md:flex-row items-center justify-around gap-8 p-5 md:p-10">
                        <div className="w-full md:w-3/5 min-w-[300px]">
                            <div className="bg-medium-gray-bg rounded-lg w-full h-80 flex justify-center items-center overflow-hidden">
                                <iframe src="/OwenWhelan_Resume.pdf" title="Embedded Résumé PDF" className="w-full h-full border-none">
                                    Your browser does not support PDFs. Please download the PDF to view it.
                                </iframe>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 w-full max-w-xs">
                            <button onClick={handleViewPdf} className="button-style w-full justify-center">
                                <i className="fa-solid fa-file-pdf"></i> View Full PDF
                            </button>
                            <button onClick={() => navigate('/resume')} className="button-style w-full justify-center">
                                <i className="fa-solid fa-file-lines"></i> View Web Résumé
                            </button>
                        </div>
                    </div>
                </section>

                <div className="relative w-full bg-light-bg text-light-text py-2 overflow-hidden whitespace-nowrap border-y border-black cursor-pointer group" onClick={() => navigate('/skills')}>
                    <div className="flex w-max animate-scroll-left group-hover:[animation-play-state:paused]">
                        {[...Array(2)].map((_, i) => (
                            <React.Fragment key={i}>
                                <span className="inline-block mx-5 font-medium">AI in Education</span>
                                <span className="inline-block mx-5 font-medium">Spanish</span>
                                <span className="inline-block mx-5 font-medium">Teaching</span>
                                <span className="inline-block mx-5 font-medium">Research</span>
                                <span className="inline-block mx-5 font-medium">Writing</span>
                                <span className="inline-block mx-5 font-medium">Leadership</span>
                                <span className="inline-block mx-5 font-medium">Instructional Technology</span>
                                <span className="inline-block mx-5 font-medium">Curriculum Design</span>
                                <span className="inline-block mx-5 font-medium">Template Building</span>
                                <span className="inline-block mx-5 font-medium">Collaboration</span>
                                <span className="inline-block mx-5 font-medium">Video Creation</span>
                            </React.Fragment>
                        ))}
                    </div>
                     <div className="absolute inset-0 bg-[rgba(85,60,40,0.75)] flex justify-center items-center text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Click for more on my skills
                    </div>
                </div>


                <section id="highlights-section" className="content-section bg-light-bg shadow-custom-medium pt-8">
                    <SectionLabel title="Highlights" />
                    <div className="section-content p-5 md:p-10">
                        <HighlightsCarousel />
                    </div>
                </section>
            </main>
            {/* FIX: Removed non-standard 'jsx' prop from the style tag. */}
            <style>{`
              .button-style {
                cursor: pointer; padding: 10px 18px; border-radius: 25px;
                transition: all 0.2s ease;
                display: inline-flex; align-items: center; gap: 8px;
                font-size: 1rem; line-height: 1.4; font-weight: 600;
                border: 2px solid #e88d52;
                background: linear-gradient(135deg, #FFCC99, #f5a673);
                color: #121212;
                text-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
                box-shadow: 0 2px 4px rgba(0,0,0,0.2);
              }
              .button-style:hover {
                transform: scale(1.03);
                box-shadow: 0 4px 8px rgba(0,0,0,0.3);
              }
               .button-style:active { transform: scale(0.98); }
               
               @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                .animate-scroll-left { animation: scroll-left 40s linear infinite; }
            `}</style>
        </div>
    );
};

export default HomePage;