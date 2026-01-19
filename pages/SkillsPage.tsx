
import React, { useState, useEffect } from 'react';
import SubPageLayout from './SubPageLayout';
import { SOFTWARE_SKILLS } from '../constants';

const SkillsPage: React.FC = () => {
    const [focusedSkill, setFocusedSkill] = useState<string | null>(null);

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
        <span className="bg-medium-gray-bg text-light-text px-3 py-1 rounded-full text-sm font-medium">{text}</span>
    );

    return (
        <SubPageLayout title="My Skills" subtitle="A showcase of my technical, communicative, and leadership abilities.">
            <div>
                <SectionHeader icon="fa-screwdriver-wrench" text="Software & Technology" />
                <p className="text-center text-light-text mb-6">Click or hover over a software below to learn more about what I know.</p>

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
                            <li className="flex items-center gap-2 flex-wrap"><i className="fa-solid fa-check text-emphasis"></i><span className="font-bold">Academic Writing</span><span className="pill">INTED</span><span className="pill">CURSCA</span></li>
                            <li className="flex items-center gap-2 flex-wrap"><i className="fa-solid fa-check text-emphasis"></i><span className="font-bold">Interviewing &amp; Coordination</span><span className="pill">Digital Ed Intern</span></li>
                            <li className="flex items-center gap-2 flex-wrap"><i className="fa-solid fa-check text-emphasis"></i><span className="font-bold">Fast &amp; clear communication</span><span className="pill">University Work</span></li>
                            <li className="flex items-center gap-2 flex-wrap"><i className="fa-solid fa-check text-emphasis"></i><span className="font-bold">Journalism writing</span><span className="pill">Marist Circle</span></li>
                        </ul>
                        <p className="text-sm text-light-text/80 mt-4">Clear prose, editing for structure, and audience-aware tone across academic, journalistic, and instructional contexts.</p>
                    </div>
                    <div className="bg-soft-gray-bg p-6 rounded-lg border border-medium-gray-bg shadow-lg">
                        <h4 className="text-xl font-bold mb-4">Spanish</h4>
                        <ul className="list-none p-0 space-y-3">
                            <li className="flex items-center gap-2 flex-wrap"><i className="fa-solid fa-check text-emphasis"></i><span className="font-bold">Time abroad: interpersonal communication</span><span className="pill">Abroad</span></li>
                            <li className="flex items-center gap-2 flex-wrap"><i className="fa-solid fa-check text-emphasis"></i><span className="font-bold">Experience tutoring and teaching</span><span className="pill">Tutoring</span></li>
                            <li className="flex items-center gap-2 flex-wrap"><i className="fa-solid fa-check text-emphasis"></i><span className="font-bold">Self-directed tools for learning</span><span className="pill">ALOUD</span></li>
                        </ul>
                        <p className="text-sm text-light-text/80 mt-4">Practical Spanish experience through study abroad and tutoring; emphasis on clear, respectful interaction.</p>
                    </div>
                    <div className="bg-soft-gray-bg p-6 rounded-lg border border-medium-gray-bg shadow-lg md:col-span-2">
                        <h4 className="text-xl font-bold mb-3">Communicative Basics</h4>
                        <p className="mb-4">My time abroad, in the classroom, and working with people from a variety of backgrounds has given me the ability to communicate appropriately and respond responsibly in a variety of contexts.</p>
                        <div className="flex gap-2 flex-wrap">
                            <Pill text="BOCES TA" /> <Pill text="Marist Circle" /> <Pill text="Abroad" /> <Pill text="University Work" />
                        </div>
                    </div>
                </div>

                <SectionHeader icon="fa-compass" text="Leadership & Mindset" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-soft-gray-bg p-6 rounded-lg border border-medium-gray-bg shadow-lg">
                        <h4 className="text-xl font-bold mb-3"><i className="fa-solid fa-user-tie mr-2"></i>Leader</h4>
                        <p>I have experience leading teams and individuals to success, whether it's through my work at the newspaper or my experience tutoring students. I'm comfortable taking initiative and helping to define the tone or meaning of a group or project.</p>
                    </div>
                    <div className="bg-soft-gray-bg p-6 rounded-lg border border-medium-gray-bg shadow-lg">
                        <h4 className="text-xl font-bold mb-3"><i className="fa-solid fa-flask mr-2"></i>Experimentation</h4>
                        <p>Trying new things is a part of my natural style of development. I look forward to using new tools, adapt quickly, and enjoy the process of creating things that stand out as innovative.</p>
                    </div>
                </div>
                <p className="text-center text-light-text my-6">My mindset as a leader, learner, and team member all follow the principles of being involved and making myself heard while also giving others a voice and seeing things from a variety of lenses.</p>
                <div className="bg-soft-gray-bg p-6 rounded-lg border border-emphasis shadow-lg" style={{ background: 'linear-gradient(180deg, rgba(255,204,153,.12), rgba(255,204,153,.05))' }}>
                    <h4 className="text-xl font-bold mb-3"><i className="fa-solid fa-pencil mr-2"></i>DIY</h4>
                    <p>I'm happy to explain when I think something would work better for me by using a different format, tool, or style. I'm happy to work with people and match their workflows, but I'm also able to tailor things to my needs while explaining why and documenting how along the way.</p>
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
                }
             `}</style>
        </SubPageLayout>
    );
};

export default SkillsPage;