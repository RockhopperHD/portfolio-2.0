import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SubPageLayout from './SubPageLayout';

interface ResumeEntryProps {
    id?: string;
    title: React.ReactNode;
    location: string;
    dates: string;
    children: React.ReactNode;
}

const ResumeWebPage: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        const targetId = location.hash.slice(1);
        if (targetId) {
            setTimeout(() => document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
        } else {
            window.scrollTo(0, 0);
        }
    }, [location.hash]);

    const SectionHeader = ({ title }: { title: string }) => (
        <div className="mt-12 mb-5 flex items-center gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-light-text">{title}</h2>
            <div className="h-px bg-emphasis/60 flex-1"></div>
        </div>
    );

    const Entry = ({ id, title, location, dates, children }: ResumeEntryProps) => (
        <article id={id} className="scroll-mt-8 py-6 border-b border-medium-gray-bg/70 last:border-b-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-light-text leading-tight">{title}</h3>
                    <p className="mt-2 text-base sm:text-lg font-semibold text-emphasis">{dates}</p>
                </div>
                <p className="text-sm font-bold tracking-wide text-light-text/75 sm:text-right sm:max-w-64">{location}</p>
            </div>
            <ul className="mt-5 space-y-2 text-base sm:text-lg text-light-text/90 leading-relaxed">{children}</ul>
        </article>
    );

    return (
        <SubPageLayout title="Resume" subtitle="Experience, research, and education at a glance.">
            <div className="bg-soft-gray-bg p-5 sm:p-8 lg:p-10 rounded-2xl shadow-lg border border-medium-gray-bg font-sans">
                <header className="pb-7 border-b-2 border-emphasis">
                    <h1 className="text-4xl sm:text-5xl font-bold text-light-text">Owen Whelan</h1>
                    <p className="mt-3 text-lg sm:text-xl text-light-text/85 max-w-3xl">B.A. candidate in Adolescent Education &amp; Spanish with an Applied AI minor, expected Spring 2027.</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5 text-base sm:text-lg">
                        <a href="mailto:owenw2023@gmail.com" className="text-emphasis hover:text-emphasis-darker underline underline-offset-4">owenw2023@gmail.com</a>
                        <a href="mailto:owen.whelan1@marist.edu" className="text-emphasis hover:text-emphasis-darker underline underline-offset-4">owen.whelan1@marist.edu</a>
                        <a href="https://www.owenwhelan.com" className="text-emphasis hover:text-emphasis-darker underline underline-offset-4" target="_blank" rel="noreferrer">owenwhelan.com</a>
                    </div>
                </header>

                <SectionHeader title="Work Experience" />
                <Entry id="precollege-ta" title="Marist University Pre-College - Teaching Assistant, AI Literacy" dates="Summer Session, 2026" location="POUGHKEEPSIE, NEW YORK"><li>Directed AI literacy lessons and supported classroom management.</li><li>Facilitated multiple interactive, hands-on workshops.</li></Entry>
                <Entry id="digital-education" title="Marist University Digital Education - AI Information Creator & Consultant" dates="Full-Time Employee, Summer 2025 - Part-Time Student Employee, 2026-Present" location="POUGHKEEPSIE, NEW YORK"><li>Created 8+ resources guiding faculty and students on responsible, efficient AI use.</li><li>Produced eight faculty videos discussing their generative AI use from start to finish.</li><li>Worked directly on university software cataloging.</li></Entry>
                <Entry id="smile-learn" title="Smile and Learn - AI & BeBilingual Intern" dates="Part-Time Internship, Fall 2025" location="MADRID, SPAIN"><li>Built a game engine and 4+ AI tools for CEFR-aligned learning.</li><li>Shaped AINARA's education-focused, coding-capable personality.</li><li>Designed Pre-A1 to B2 Spanish curriculum with targeted learning strategies.</li></Entry>
                <Entry id="boces-ta" title="Rockland BOCES Substitute Teaching Assistant" dates="Contract Work, 2025" location="CLARKSTOWN, NEW YORK"><li>Coordinated and facilitated full-day lessons with teachers for neurodivergent students.</li></Entry>

                <SectionHeader title="Research & Presentation Experience" />
                <Entry id="inted" title="INTED Publication & Presentation" dates="2024-2025 - Presented March 2025" location="VALENCIA, SPAIN"><li>Published and presented AI note-taking research to an international audience of 30+ academics.</li></Entry>
                <Entry id="marist-ai" title="Marist+AI Academic Group" dates="2024-2026" location="POUGHKEEPSIE, NEW YORK"><li>Co-developed comprehensive internal and external AI frameworks with faculty.</li></Entry>
                <Entry id="academic-conferences" title="Conferences & Projects" dates="2025" location="POUGHKEEPSIE, NEW YORK"><li><strong>ALOUD:</strong> Built a language-learning video game and explained its development process to local teachers.</li><li><strong>CURSCA & Hudson Valley AI Summit:</strong> Presented poster research to students and faculty.</li></Entry>

                <SectionHeader title="Education" />
                <Entry id="marist-university" title="Marist University, Honors Student" dates="Full-Time Student, Fall 2023-Spring 2027 - Semester Abroad, Fall 2025" location="POUGHKEEPSIE, NEW YORK & MADRID, SPAIN"><li>B.A. candidate in Adolescent Education & Spanish; Applied AI minor; 3.9 GPA.</li><li>Studied abroad at Universidad Carlos III de Madrid, earning a 9.56/10 average.</li></Entry>

                <SectionHeader title="Extracurricular Experience" />
                <Entry id="marist-circle" title={<>Editor-in-Chief, <em>Marist Circle</em></>} dates="Part-Time Club, 2023-Present" location="POUGHKEEPSIE, NEW YORK"><li>Authored 30 solo and co-bylined articles and mentored junior writers.</li><li>Progressed from Staff Writer to Co-Features Editor to Editor-in-Chief.</li></Entry>

                <SectionHeader title="Awards" />
                <div className="grid sm:grid-cols-2 gap-4">
                    {[["Dean's List", '6x, 2024-2026'], ['Sigma Delta Pi', '2024'], ['NYS Seal of Biliteracy (Spanish)', '2023'], ['National Honor Society', '2023']].map(([award, date]) => <div key={award} className="bg-[#3d3322] border border-[#f6c75b]/60 rounded-xl px-5 py-4"><p className="text-lg font-bold text-light-text">{award}</p><p className="mt-1 text-sm font-semibold text-[#f6c75b]">{date}</p></div>)}
                </div>

                <SectionHeader title="Skills" />
                <div className="flex flex-wrap gap-3">
                    {['Generative AI', 'Graphic Design', 'Software Development & Deployment', 'Communication', 'Problem Solving', 'Adaptability', 'Feedback & Collaboration'].map(skill => <span key={skill} className="rounded-full bg-light-bg border border-medium-gray-bg px-4 py-2 text-base font-semibold text-light-text">{skill}</span>)}
                </div>
            </div>
        </SubPageLayout>
    );
};

export default ResumeWebPage;
