
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SubPageLayout from './SubPageLayout';
import { SOFTWARE_SKILLS } from '../constants';

const SkillsPage: React.FC = () => {
    const [focusedSkill, setFocusedSkill] = useState<string | null>(null);
    const resumeAnchors: Record<string, string> = {
        'INTED': 'inted',
        'CURSCA': 'academic-conferences',
        'Digital Ed Intern': 'digital-education',
        'University Work': 'digital-education',
        'Marist Circle': 'marist-circle',
        'Abroad': 'marist-university',
        'Smile & Learn': 'smile-learn',
        'ALOUD': 'academic-conferences',
        'BOCES TA': 'boces-ta',
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const selectedSkill = SOFTWARE_SKILLS.find(s => s.name === focusedSkill);

    const SectionHeader = ({ icon, text }: { icon: string; text: string }) => (
        <h2 className="text-3xl font-bold text-light-text mt-12 mb-6 border-b-2 border-emphasis-darkest pb-3 flex items-center">
            <i className={`fa-solid ${icon} mr-4`}></i>
            {text}
        </h2>
    );

    const Pill = ({ text }: { text: string }) => (
        <Link to={`/resume#${resumeAnchors[text] ?? 'marist-university'}`} className="pill">{text === 'Marist Circle' ? <em>{text}</em> : text}</Link>
    );

    return (
        <SubPageLayout title="My Skills" subtitle="Tools and capabilities demonstrated through education, EdTech, research, and communication work.">
            <div>
                <SectionHeader icon="fa-screwdriver-wrench" text="Software & Technology" />
                <p className="text-center text-light-text mb-6">Click or hover over a category to see the tools, audiences, and work behind it.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                    <div className="bg-soft-gray-bg p-6 rounded-lg border border-medium-gray-bg shadow-lg">
                        <h4 className="text-xl font-bold mb-4 text-center">Software</h4>
                        <div className="flex flex-col gap-3">
                            {SOFTWARE_SKILLS.map(skill => (
                                <div
                                    key={skill.name}
                                    onMouseEnter={() => setFocusedSkill(skill.name)}
                                    onClick={() => setFocusedSkill(skill.name)}
                                    className={`bg-dark-gray-bg border border-medium-gray-bg rounded-lg p-3 font-semibold text-center cursor-pointer transition-all duration-150 transform hover:scale-105 ${focusedSkill === skill.name ? 'bg-emphasis text-dark-text border-emphasis-darker scale-105' : ''}`}
                                >
                                    {skill.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-dark-gray-bg p-6 rounded-lg border border-medium-gray-bg shadow-lg flex flex-col justify-start min-h-[300px] transition-all duration-300">
                        {selectedSkill ? (
                            <>
                                <h4 className="text-xl font-bold mb-1">{selectedSkill.title}</h4>
                                <p className="text-sm text-emphasis italic mb-3">{selectedSkill.subtitle}</p>
                                <p className="text-light-text text-left flex-grow">{selectedSkill.description}</p>
                            </>
                        ) : (
                            <div className="flex-grow flex items-center justify-center">
                                <p className="text-medium-gray-bg italic">Hover or tap a software from the list to preview details here.</p>
                            </div>
                        )}
                    </div>
                </div>

                <SectionHeader icon="fa-comments" text="Communication Skills" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-soft-gray-bg p-6 rounded-lg border border-medium-gray-bg shadow-lg">
                        <h4 className="text-xl font-bold mb-4">English</h4>
                        <ul className="list-none p-0 space-y-3">
                            <li className="flex items-center gap-2 flex-wrap"><i className="fa-solid fa-check text-emphasis"></i><span className="font-bold">Academic Writing</span><Pill text="INTED" /><Pill text="CURSCA" /></li>
                            <li className="flex items-center gap-2 flex-wrap"><i className="fa-solid fa-check text-emphasis"></i><span className="font-bold">Interviewing &amp; Coordination</span><Pill text="Digital Ed Intern" /></li>
                            <li className="flex items-center gap-2 flex-wrap"><i className="fa-solid fa-check text-emphasis"></i><span className="font-bold">Faculty-facing resources</span><Pill text="University Work" /></li>
                            <li className="flex items-center gap-2 flex-wrap"><i className="fa-solid fa-check text-emphasis"></i><span className="font-bold">Journalism writing and editing</span><Pill text="Marist Circle" /></li>
                        </ul>
                        <p className="text-sm text-light-text/80 mt-4">Clear prose, editing for structure, and audience-aware tone across academic, journalistic, and instructional contexts.</p>
                    </div>
                    <div className="bg-soft-gray-bg p-6 rounded-lg border border-medium-gray-bg shadow-lg">
                        <h4 className="text-xl font-bold mb-4">Spanish</h4>
                        <ul className="list-none p-0 space-y-3">
                            <li className="flex items-center gap-2 flex-wrap"><i className="fa-solid fa-check text-emphasis"></i><span className="font-bold">Time abroad: interpersonal communication</span><Pill text="Abroad" /></li>
                            <li className="flex items-center gap-2 flex-wrap"><i className="fa-solid fa-check text-emphasis"></i><span className="font-bold">Pre-A1 to B2 curriculum design</span><Pill text="Smile & Learn" /></li>
                            <li className="flex items-center gap-2 flex-wrap"><i className="fa-solid fa-check text-emphasis"></i><span className="font-bold">Self-directed tools for learning</span><Pill text="ALOUD" /></li>
                        </ul>
                        <p className="text-sm text-light-text/80 mt-4">Spanish used in study-abroad coursework, an internship in Madrid, curriculum design, and language-learning projects.</p>
                    </div>
                    <div className="bg-soft-gray-bg p-6 rounded-lg border border-medium-gray-bg shadow-lg md:col-span-2">
                        <h4 className="text-xl font-bold mb-3">Audience-aware communication</h4>
                        <p className="mb-4">I adapt content for faculty resources, student support, academic presentations, journalism, and cross-cultural work in Spanish and English.</p>
                        <div className="flex gap-2 flex-wrap">
                            <Pill text="BOCES TA" /> <Pill text="Marist Circle" /> <Pill text="Abroad" /> <Pill text="University Work" />
                        </div>
                    </div>
                </div>

                <SectionHeader icon="fa-compass" text="Leadership & Collaboration" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-soft-gray-bg p-6 rounded-lg border border-medium-gray-bg shadow-lg">
                        <h4 className="text-xl font-bold mb-3"><i className="fa-solid fa-user-tie mr-2"></i>Editorial leadership</h4>
                        <p>At the <em>Marist Circle</em>, I progressed from Staff Writer to Co-Features Editor to Editor-in-Chief, editing articles, coordinating assignments, and mentoring junior writers.</p>
                    </div>
                    <div className="bg-soft-gray-bg p-6 rounded-lg border border-medium-gray-bg shadow-lg">
                        <h4 className="text-xl font-bold mb-3"><i className="fa-solid fa-flask mr-2"></i>Iterative development</h4>
                        <p>I prototype and refine learning tools through user feedback, classroom needs, and documented design decisions, including Flashcardsish and the Smile &amp; Learn game creator.</p>
                    </div>
                </div>
                <p className="text-center text-light-text my-6">Across editorial, classroom, and project work, I contribute directly while making room for feedback, different audiences, and shared decisions.</p>
                <div className="bg-soft-gray-bg p-6 rounded-lg border border-emphasis shadow-lg" style={{ background: 'linear-gradient(180deg, rgba(255,204,153,.12), rgba(255,204,153,.05))' }}>
                    <h4 className="text-xl font-bold mb-3"><i className="fa-solid fa-pencil mr-2"></i>Process design</h4>
                    <p>I can work within an established workflow or propose a clearer format, tool, or template. When I adapt a process, I explain the reasoning and document how others can use it.</p>
                </div>
            </div>
            {/* FIX: Removed non-standard 'jsx' prop from the style tag. */}
            <style>{`
                .pill {
                    display: inline-block;
                    background: #e88d52;
                    color: #121212;
                    padding: 4px 10px;
                    border-radius: 16px;
                    font-size: .8rem;
                    font-weight: 600;
                    white-space: nowrap;
                    transition: background .15s ease, transform .15s ease;
                }
                .pill:hover {
                    background: #FFCC99;
                    transform: translateY(-1px);
                }
             `}</style>
        </SubPageLayout>
    );
};

export default SkillsPage;
