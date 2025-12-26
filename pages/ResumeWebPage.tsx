
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
                    Innovative honors student merging language, education, and AI to build tools that empower learners and educators worldwide. Driven by curiosity, collaboration, and a passion for shaping the future of learning through technology.
                </p>

                {/* Work Experience */}
                <SectionHeader title="Work Experience" />
                <Entry title="Smile & Learn, AINARA" pills={['Part Time Internship', 'Fall 2025']} location="MADRID, SPAIN">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Developed and deployed multiple Al tools to streamline educational content, including a game creation engine
                            for educators and 4+ tools for aligning lessons to Spanish/American/CEFR standards</li>
                        <li>Created a new personality for AINARA’s AI chatbot, prioritizing coding and an educational tone</li>
                        <li>Designed a comprehensive Spanish learning curriculum (Pre-A1 to B2) integrating activities and strategies</li>
                    </ul>
                </Entry>
                <Entry title="Marist University Digital Education/IT Team Member" pills={['Full Time Work', 'Summer 2025']} location="POUGHKEEPSIE, NEW YORK">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Created 8+ resources for faculty and students to understand artificial intelligence and responsible, efficient use</li>
                        <li>Contacted, coordinated, interviewed, and edited video of 8 faculty members about their use of generative AI</li>
                    </ul>
                </Entry>
                <Entry title="Rockland BOCES Substitute Teaching Assistant" pills={['Contract Work', '2025']} location="CLARKSTOWN, NEW YORK">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Assisted full-time teachers in instructing neurodivergent students during full, 6-hour instructional days</li>
                    </ul>
                </Entry>

                {/* Educational Experience */}
                <SectionHeader title="Educational Experience" />
                <Entry title="Marist University, Honors Student" pills={['2023 - Present', '3.9 GPA']} location="POUGHKEEPSIE, NEW YORK">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Major in Adolescent Education/Spanish, minor in applied AI, expected bachelor's/master's in 2027/2028</li>
                    </ul>
                </Entry>
                <Entry title="Universidad Carlos III de Madrid International School" pills={['Fall 2025']} location="MADRID, SPAIN">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Studying abroad opportunity living with host family, studying in Spanish-only classes</li>
                    </ul>
                </Entry>

                {/* Research and Presentational Experience */}
                <SectionHeader title="Research and Presentational Experience" />
                <Entry title="Publication for International Technology, Education and Development (INTED)" pills={['2025']} location="VALENCIA, SPAIN">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Presented to exploratory research and paper on AI and note-taking international audience of 30+ academics</li>
                    </ul>
                </Entry>
                <Entry title="Marist+AI Academic Group" pills={['2024 - Present']} location="POUGHKEEPSIE, NEW YORK">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Collaborated with faculty to develop an AI framework at Marist with an internal and external presence</li>
                    </ul>
                </Entry>
                <Entry title="ALOUD Conference" pills={["2025"]} location="POUGHKEEPSIE, NEW YORK">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Developed a language-learning video game for K-12 teachers with 2 modes and 4 languages</li>
                    </ul>
                </Entry>
                <Entry title="CURSCA & Hudson Valley AI Summit" pills={["2025"]} location="POUGHKEEPSIE, NEW YORK">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Facilitated discussion and presented poster research</li>
                    </ul>
                </Entry>

                {/* Extracurriculars */}
                <SectionHeader title="Extracurriculars" />
                <Entry title="Marist Circle" pills={['2023 - Present']} location="POUGHKEEPSIE, NEW YORK">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Total authorship of 15+ articles with editing and writing experience, mentored and guided other writers</li>
                        <li><strong>Co-Features Editor</strong> (2024-2025): Edited up to 3 articles per issue, continued writing, distribution</li>
                        <li><strong>Staff Writer</strong> (2023-2024): Pitched stories, coordinated team assignments, assisted in cross-campus distribution</li>
                    </ul>
                </Entry>
                <Entry title="Marist Games Society - Subcommittee Leader" pills={['2024-Present']} location="POUGHKEEPSIE, NEW YORK AND VIRTUAL">
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Coordinating and helping new students integrate into gaming groups, leading and coordination of own group</li>
                    </ul>
                </Entry>

                {/* Awards */}
                <SectionHeader title="Awards" />
                <div className="space-y-1">
                    <div className="flex justify-between items-baseline flex-wrap">
                        <p>Dean's List, Marist University (2024, 2025; 4x)</p>
                        <span className="text-xs font-mono text-light-text/90 font-bold text-right pl-4 flex-shrink-0">POUGHKEEPSIE, NEW YORK</span>
                    </div>
                    <div className="flex justify-between items-baseline flex-wrap">
                        <p>Sigma Delta Pi Spanish Honors Society, Marist University (2024)</p>
                        <span className="text-xs font-mono text-light-text/90 font-bold text-right pl-4 flex-shrink-0">POUGHKEEPSIE, NEW YORK</span>
                    </div>
                    <div className="flex justify-between items-baseline flex-wrap">
                        <p>New York State Seal of Biliteracy (Spanish) (2023)</p>
                        <span className="text-xs font-mono text-light-text/90 font-bold text-right pl-4 flex-shrink-0">NANUET, NEW YORK</span>
                    </div>
                    <div className="flex justify-between items-baseline flex-wrap">
                        <p>National Honors Society (2023)</p>
                        <span className="text-xs font-mono text-light-text/90 font-bold text-right pl-4 flex-shrink-0">NANUET, NEW YORK</span>
                    </div>
                </div>

                {/* Other Skills */}
                <SectionHeader title="Other Skills" />
                <SkillItem title="Productivity Software">
                    Advanced formatting in the Google Suite, Microsoft Suite, and Notion. Website building and deployment using AI tools.
                </SkillItem>
                <SkillItem title="Generative Artificial Intelligence">
                    Strong knowledge of prominent AI tools and innovative applications, such as coding with AI and managing coding projects alongside AI tools. Deployed a variety of interactive projects developed with AI, including personal websites, educational games, and other tools.
                </SkillItem>
                <SkillItem title="Creative work">
                    Graphic design (Photoshop, Canva) of infographics and informational documents. Capable in digital illustration and icon design. Experience in creating templates, educational materials, and functional graphics.
                </SkillItem>
                <SkillItem title="Spanish">
                    Conversational, written, and professional communication of the Spanish language. Understanding and knowledge of CEFR and ACTFL language learning standards.
                </SkillItem>
            </div>
        </SubPageLayout>
    );
};

export default ResumeWebPage;
