
import React, { useEffect } from 'react';
import SubPageLayout from './SubPageLayout';

const ResumeWebPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
        <div className="mt-6 mb-3">
            <h2 className="text-lg font-bold tracking-widest text-light-text uppercase">{title}</h2>
            <div className="border-b-2 border-emphasis w-full"></div>
        </div>
    );

    const Entry: React.FC<{ title: string; pills?: string[]; location: string; children: React.ReactNode }> = ({ title, pills, location, children }) => (
        <div className="mb-4">
            <div className="flex justify-between items-baseline flex-wrap gap-y-1">
                <h3 className="text-md font-bold text-light-text">
                    {title}
                </h3>
                <span className="text-xs font-mono text-light-text/90 font-bold text-right pl-4 flex-shrink-0">{location}</span>
            </div>
            {pills && pills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-1">
                    {pills.map((pill, index) => (
                        <span key={index} className="bg-medium-gray-bg text-light-text px-2 py-0.5 rounded-full text-xs font-semibold">{pill}</span>
                    ))}
                </div>
            )}
            <div className="pl-4 mt-2 text-light-text/90">
                {children}
            </div>
        </div>
    );

    const SkillItem: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
        <div className="flex items-start mt-2">
            <span className="text-emphasis-darker mr-3 mt-1 transform rotate-45 text-sm">◆</span>
            <div>
                <span className="font-bold">{title}:</span> {children}
            </div>
        </div>
    );

    return (
        <SubPageLayout title="Résumé" subtitle="A detailed overview of my professional and academic experience.">
            <div className="bg-soft-gray-bg p-6 sm:p-8 rounded-lg shadow-lg border border-medium-gray-bg font-sans">
                {/* Header */}
                <div className="text-center border-b-4 pb-4 mb-4" style={{ borderColor: '#FFCC99' }}>
                    <h1 className="text-4xl font-bold">Owen Whelan</h1>
                    <div className="flex justify-center gap-x-6 gap-y-1 flex-wrap mt-2">
                        <a href="mailto:owenw2023@gmail.com" className="text-light-text hover:text-emphasis transition-colors">owenw2023@gmail.com</a>
                        <a href="mailto:owen.whelan1@marist.edu" className="text-light-text hover:text-emphasis transition-colors">owen.whelan1@marist.edu</a>
                    </div>
                </div>

                {/* Summary */}
                <p className="text-center my-4">
                    Honors student merging language, education, and AI to build global learning tools. Passionate about shaping the future of EdTech through curiosity and collaboration.
                </p>

                {/* Work Experience */}
                <SectionHeader title="Work Experience" />
                <Entry title="Smile and Learn Intern: Artificial Intelligence & BeBilingual Teams" pills={['Part Time Internship', 'Fall 2025']} location="MADRID, SPAIN">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Deployed AI tools to streamline content, including a game engine and 4+ tools aligning lessons to Spanish, American, and CEFR standards</li>
                        <li>Engineered AINARA chatbot personality, prioritizing coding capabilities and an educational tone</li>
                        <li>Designed comprehensive Pre-A1 to B2 Spanish curriculum integrating targeted learning strategies</li>
                    </ul>
                </Entry>
                <Entry title="Marist University Digital Education/IT Team Member" pills={['Full Time Work', 'Summer 2025']} location="POUGHKEEPSIE, NEW YORK">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Created 8+ resources guiding faculty and students on responsible, efficient AI usage</li>
                        <li>Coordinated, interviewed, and edited video features of 8 faculty members regarding their generative AI use</li>
                    </ul>
                </Entry>
                <Entry title="Rockland BOCES Substitute Teaching Assistant" pills={['Contract Work', '2025']} location="CLARKSTOWN, NEW YORK">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Assisted teachers instructing neurodivergent students during full-day sessions</li>
                    </ul>
                </Entry>

                {/* Educational Experience */}
                <SectionHeader title="Educational Experience" />
                <Entry title="Marist University, Honors Student" pills={['Full Time Student', 'Fall 2023 - Spring 2027']} location="POUGHKEEPSIE, NEW YORK and MADRID, SPAIN">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Major in adolescent education & Spanish, minor in Applied Al (B.A./M.A. expected 2027/2028), 3.9 GPA</li>
                        <li>Semester Abroad: Universidad Carlos III de Madrid (Fall 2025); completed 16-hr/wk internship and coursework entirely in Spanish</li>
                    </ul>
                </Entry>

                {/* Research and Presentational Experience */}
                <SectionHeader title="Research and Presentation Experience" />
                <Entry title="Publication for International Technology, Education and Development (INTED)" pills={['Project from Winter 2024 to Spring 2025', 'Presented in March 2025']} location="VALENCIA, SPAIN">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Presented exploratory paper on AI and note-taking to an international audience of 30+ academics</li>
                    </ul>
                </Entry>
                <Entry title="Marist+AI Academic Group" pills={['2024 - 2025']} location="POUGHKEEPSIE, NEW YORK">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Collaborated with faculty to develop a comprehensive internal and external AI framework</li>
                    </ul>
                </Entry>
                <Entry title="Other Academic Conferences" pills={["Various"]} location="POUGHKEEPSIE, NEW YORK">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>ALOUD (2025): Developed a language-learning video game for K–12 teachers with 2 modes and 4 languages</li>
                        <li>CURSCA (2025) & Hudson Valley AI Summit (2025): Facilitated discussion and presented poster research</li>
                    </ul>
                </Entry>

                {/* Extracurricular Experience */}
                <SectionHeader title="Extracurricular Experience" />
                <Entry title="Student Newspaper, the Marist Circle" pills={['2023 - Present']} location="POUGHKEEPSIE, NEW YORK">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Authored 15+ articles and mentored junior writers on editing and composition</li>
                        <li><strong>Co-Features Editor</strong> (2024 - Present): Edited up to 3 articles per issue, continued writing, distribution</li>
                        <li><strong>Staff Writer</strong> (2023 - 2024): Pitched stories, coordinated assignments, and assisted with campus distribution</li>
                    </ul>
                </Entry>

                {/* Awards */}
                <SectionHeader title="Awards" />
                <div className="space-y-1">
                    <div className="flex justify-between items-baseline flex-wrap">
                        <p>Dean’s List, Marist University (2024, 2025; 4x)</p>
                        <span className="text-xs font-mono text-light-text/90 font-bold text-right pl-4 flex-shrink-0">POUGHKEEPSIE, NEW YORK</span>
                    </div>
                    <div className="flex justify-between items-baseline flex-wrap">
                        <p>Sigma Delta Pi Spanish Honors Society, Marist University (2024)</p>
                        <span className="text-xs font-mono text-light-text/90 font-bold text-right pl-4 flex-shrink-0">POUGHKEEPSIE, NEW YORK</span>
                    </div>
                    <div className="flex justify-between items-baseline flex-wrap">
                        <p>New York State Seal of Biliteracy (Spanish) and National Honors Society (2023)</p>
                        <span className="text-xs font-mono text-light-text/90 font-bold text-right pl-4 flex-shrink-0">NANUET, NEW YORK</span>
                    </div>
                </div>

                {/* Other Skills */}
                <SectionHeader title="Other Skills" />
                <p className="mt-2 text-light-text/90">
                    Generative artificial intelligence, graphic design, productivity software, development and deployment of software tools. Communicative, quick, and innovative. Open-minded to learning new tools and ideas. Enjoys and accepts challenges involving learning and developing new solutions. Readily accepts & applies feedback.
                </p>
            </div>
        </SubPageLayout>
    );
};

export default ResumeWebPage;
