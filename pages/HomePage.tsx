import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import HighlightsCarousel from '../components/HighlightsCarousel';

const RotatingResumePreview = () => {
    const highlights = [
        { role: "AI Information Creator", org: "Marist University", desc: "Consulted faculty and created resources guiding responsible AI usage." },
        { role: "Artificial Intelligence Intern", org: "Smile and Learn (Spain)", desc: "Deployed AI tools and engineered educational chatbots for language learning." },
        { role: "Published Researcher", org: "INTED (Spain)", desc: "Presented exploratory paper on AI and note-taking to an international audience." },
        { role: "Substitute Teaching Assistant", org: "Rockland BOCES", desc: "Coordinated and facilitated lessons for neurodivergent students during full-day sessions." },
        { role: "Co-Features Editor", org: "The Marist Circle", desc: "Authored 15+ articles, pitched stories, and mentored junior writers at the university newspaper." },
        { role: "Honors Student", org: "Marist University", desc: "Adolescent Ed & Spanish major, Applied AI minor. 3.9 GPA." }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % highlights.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-56 md:h-64 w-full max-w-md md:max-w-lg overflow-hidden rounded-xl mx-auto md:mx-0 shadow-2xl">
            {highlights.map((item, idx) => {
                const isActive = idx === currentIndex;
                const isPrev = idx === (currentIndex - 1 + highlights.length) % highlights.length;
                return (
                    <div
                        key={idx}
                        className={`absolute inset-0 bg-medium-gray-bg border border-emphasis/50 rounded-xl p-8 shadow-lg transition-all duration-700 ease-in-out flex flex-col justify-center
                        ${isActive ? 'opacity-100 transform translate-y-0 scale-100 z-10' :
                                isPrev ? 'opacity-0 transform -translate-y-8 scale-95 z-0' :
                                    'opacity-0 transform translate-y-8 scale-95 z-0'}`}
                    >
                        <h4 className="text-emphasis font-bold text-2xl mb-2">{item.role}</h4>
                        <div className="text-light-text font-semibold text-sm md:text-base mb-4 uppercase tracking-wider">{item.org}</div>
                        <p className="text-light-text/90 text-base md:text-lg leading-relaxed">{item.desc}</p>
                    </div>
                );
            })}
        </div>
    );
};

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    const handleViewPdf = () => {
        window.open('/OwenWhelan_Resume.pdf', '_blank');
    }

    return (
        <div>
            <div className="bg-dark-gray-bg py-10 px-4 sm:px-6" style={{ backgroundImage: "repeating-linear-gradient( 45deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.02) 10px, transparent 10px, transparent 20px )" }}>
                <div className="bg-soft-gray-bg text-light-text p-6 sm:p-8 rounded-lg text-center font-normal text-base sm:text-lg shadow-lg max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
                    I care a lot about how people learn — and I've spent most of my time building at the intersection of AI, language, and education to figure it out. Come see what I've been up to.
                </div>
            </div>

            <main>
                <section id="resume-section" className="content-section bg-dark-gray-bg shadow-custom-medium pt-8">
                    <SectionLabel title="Résumé" />
                    <div className="section-content max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 p-8 md:p-16">

                        {/* LEFT: Rotating Preview */}
                        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                            <RotatingResumePreview />
                        </div>

                        {/* RIGHT: Prominent Buttons */}
                        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-8">
                            <div className="max-w-lg">
                                <h3 className="text-4xl md:text-5xl font-extrabold text-light-text mb-6">
                                    Get to Know Me
                                </h3>
                                <p className="text-xl text-light-text/80 leading-relaxed mb-8">
                                    You can take a look at my résumé directly here on the website, or you can click below to view, export, and print the PDF version.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
                                <button onClick={() => navigate('/resume')} className="button-style button-style-large flex-1 justify-center py-5 text-xl">
                                    <i className="fa-solid fa-file-lines text-2xl"></i> Web Résumé
                                </button>
                                <button onClick={handleViewPdf} className="button-style button-style-large flex-1 justify-center py-5 text-xl">
                                    <i className="fa-solid fa-file-pdf text-2xl"></i> View PDF
                                </button>
                            </div>
                        </div>

                    </div>
                </section>

                <div className="relative w-full bg-light-bg text-light-text py-2 overflow-hidden whitespace-nowrap border-y border-black cursor-pointer group" onClick={() => navigate('/skills')}>
                    <div className="flex w-max animate-scroll-left group-hover:[animation-play-state:paused]">
                        {[...Array(10)].map((_, i) => (
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
                display: inline-flex; align-items: center; gap: 10px;
                font-size: 1rem; line-height: 1.4; font-weight: 700;
                border: 2px solid #e88d52;
                background: linear-gradient(135deg, #FFCC99, #f5a673);
                color: #121212;
                text-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
                box-shadow: 0 2px 4px rgba(0,0,0,0.2);
              }
              .button-style-large {
                padding: 16px 20px;
                font-size: 1.15rem;
                border-radius: 30px;
                box-shadow: 0 4px 6px rgba(0,0,0,0.25);
              }
              .button-style:hover {
                transform: scale(1.03);
                box-shadow: 0 4px 8px rgba(0,0,0,0.3);
              }
              .button-style-large:hover {
                transform: scale(1.03);
                box-shadow: 0 6px 12px rgba(0,0,0,0.35);
              }
               .button-style:active { transform: scale(0.98); }
               
                @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                .animate-scroll-left { animation: scroll-left 200s linear infinite; }
            `}</style>
        </div>
    );
};

export default HomePage;