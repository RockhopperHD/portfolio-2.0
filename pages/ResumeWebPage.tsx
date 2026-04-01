
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
        <div className="mb-8">
            <div className="flex justify-between items-baseline flex-wrap gap-y-1">
                <h3 className="text-xl font-bold text-light-text mb-1">
                    {title}
                </h3>
                <span className="text-sm font-mono text-light-text/90 font-bold text-right pl-4 flex-shrink-0">{location}</span>
            </div>
            {pills && pills.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                    {pills.map((pill, index) => (
                        <span key={index} className="bg-medium-gray-bg text-light-text px-2.5 py-0.5 rounded-full text-xs font-semibold">{pill}</span>
                    ))}
                </div>
            )}
            <div className="pl-4 mt-1 text-light-text/90 marker:text-light-text/50">
                {children}
            </div>
        </div>
    );

    return (
        <SubPageLayout title="Résumé" subtitle="The full picture — or skip straight to the PDF.">
            {/* Actions bar */}
            <div className="flex justify-end mb-4">
                <a
                    href="/OwenWhelan_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm border-2 transition-all duration-200 hover:scale-105 active:scale-95"
                    style={{ background: 'linear-gradient(135deg, #FFCC99, #f5a673)', borderColor: '#e88d52', color: '#121212' }}
                >
                    <i className="fa-solid fa-file-pdf"></i> Download PDF
                </a>
            </div>

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
                <p className="text-center my-4 text-light-text/90 italic">
                    Honors student merging language, education, and AI to build global learning tools. Passionate about shaping the future of EdTech through curiosity and collaboration.
                </p>

                {/* Work Experience */}
                <SectionHeader title="Work Experience" />
                <Entry title="Smile and Learn Intern: Artificial Intelligence (AI) & BeBilingual Teams" pills={['Part Time Internship', 'Fall 2025']} location="MADRID, SPAIN">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Deployed AI tools to streamline content, including a game engine and 4+ tools aligning lessons to Spanish, American, and Common European Framework of Reference (CEFR) standards</li>
                        <li>Engineered AINARA chatbot personality, prioritizing coding capabilities and an educational tone</li>
                        <li>Designed comprehensive Pre-A1 to B2 Spanish curriculum integrating targeted learning strategies</li>
                    </ul>
                </Entry>
                <Entry title="Marist University Digital Education: AI Information Creator & Consultant" pills={['Full Time Employee, Summer 2025', 'Part Time Student Employee, 2026 - Present']} location="POUGHKEEPSIE, NEW YORK">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Created 8+ resources guiding faculty and students on responsible, efficient AI usage</li>
                        <li>Coordinated, interviewed, and edited video features of 8 faculty members regarding their generative AI use</li>
                        <li>Post-abroad: Direct work with university software cataloging and the core university experience</li>
                    </ul>
                </Entry>
                <Entry title="Rockland BOCES Substitute Teaching Assistant" pills={['Contract Work', '2025']} location="CLARKSTOWN, NEW YORK">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Directly coordinated and facilitated lessons with teachers for neurodivergent students during full-day sessions</li>
                    </ul>
                </Entry>

                {/* Educational Experience */}
                <SectionHeader title="Education" />
                <Entry title="Marist University, Honors Student" pills={['Full Time Student', 'Fall 2023 - Spring 2027']} location="POUGHKEEPSIE, NEW YORK and MADRID, SPAIN">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Major in adolescent education & Spanish, minor in Applied AI (B.A. in May 2027), 3.9 GPA</li>
                        <li>Semester Abroad: Universidad Carlos III de Madrid (Fall 2025); classwork and internship in Spanish</li>
                    </ul>
                </Entry>

                {/* Research and Presentation Experience */}
                <SectionHeader title="Research & Presentation Experience" />
                <Entry title="Publication for International Technology, Education and Development (INTED)" pills={['2024 - 2025', 'Presented in March 2025']} location="VALENCIA, SPAIN">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Presented exploratory paper on AI and note-taking to an international audience of 30+ academics; published</li>
                    </ul>
                </Entry>
                <Entry title="Marist+AI Artificial Intelligence Academic Group" pills={['2024 - 2026']} location="POUGHKEEPSIE, NEW YORK">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Collaborated with faculty to develop a comprehensive internal and external AI framework</li>
                    </ul>
                </Entry>
                <Entry title="Other Academic Conferences" pills={['2025']} location="POUGHKEEPSIE, NEW YORK">
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>ALOUD (2025):</strong> Developed a language-learning video game for K–12 teachers with 2 modes and 4 languages</li>
                        <li><strong>CURSCA (2025) & Hudson Valley AI Summit (2025):</strong> Facilitated discussion and presented poster research</li>
                    </ul>
                </Entry>

                {/* Extracurricular Experience */}
                <SectionHeader title="Extracurricular Experience" />
                <Entry title="Student Newspaper, the Marist Circle" pills={['Part Time Club', '2023 - Present']} location="POUGHKEEPSIE, NEW YORK">
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
                        <p>Dean's List, Marist University (2024, 2025 | 5x)</p>
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
                <div className="mt-2 space-y-1 text-light-text/90">
                    <div className="flex items-start gap-2">
                        <span className="font-bold" style={{ color: '#FFCC99' }}>→</span>
                        <p>Generative artificial intelligence, graphic design, productivity software, development and deployment of software tools.</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="font-bold" style={{ color: '#FFCC99' }}>→</span>
                        <p>Open-minded to learning new tools and ideas. Enjoys and accepts challenges involving learning and developing new solutions.</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <span className="font-bold" style={{ color: '#FFCC99' }}>→</span>
                        <p>Readily accepts & applies feedback. Communicative, quick, and innovative.</p>
                    </div>
                </div>
            </div>
        </SubPageLayout>
    );
};

export default ResumeWebPage;
