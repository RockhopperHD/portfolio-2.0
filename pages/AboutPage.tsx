
import React, { useEffect } from 'react';
import SubPageLayout from './SubPageLayout';

const AboutPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <SubPageLayout title="About Me" subtitle="Education, language, responsible technology, and the creative work that connects them.">
            <div className="bg-gradient-to-br from-emphasis to-emphasis-darker text-dark-text p-6 rounded-lg text-center text-lg font-semibold mx-auto mb-8 shadow-lg border border-emphasis-darker">
                <p className="text-dark-text [text-shadow:0_1px_1px_rgba(255,255,255,0.2)]">
                    I am a New York educator-in-training who enjoys turning research, language, and technology into useful learning experiences.
                </p>
            </div>

            <div className="space-y-6">
                <h3 className="text-2xl font-semibold border-b border-medium-gray-bg pb-2">Education and technology</h3>
                <p>My studies and professional work sit at the intersection of education, language, and technology. I am especially interested in how well-designed resources and learning tools can make complex ideas clearer for students and educators.</p>
                
                <h3 className="text-2xl font-semibold border-b border-medium-gray-bg pb-2">Why education</h3>
                <p>Education shapes how people understand their opportunities and their communities. I am drawn to work that helps learners improve and gives educators practical support. Creating reference materials, explaining a project to a group, and translating an idea into an activity are recurring parts of my academic and professional experience.</p>
                
                <h3 className="text-2xl font-semibold border-b border-medium-gray-bg pb-2">Spanish and communication</h3>
                <p>Spanish has expanded how I communicate and how I understand culture, both in New York and during my semester in Madrid. It also informs the language-learning curriculum and tools I build. In English, my journalism, research, and instructional writing have taught me to adjust structure and tone for different audiences while keeping the message clear.</p>
                
                <h3 className="text-2xl font-semibold border-b border-medium-gray-bg pb-2">Responsible AI</h3>
                <p>I approach AI as a tool that requires judgment, transparency, and review. My foundation in writing, organization, and research guides when I use it, how I evaluate its output, and what I choose to publish. I am always glad to discuss the decisions behind my AI-assisted work.</p>
                
                <h3 className="text-2xl font-semibold border-b border-medium-gray-bg pb-2">Creativity beyond work</h3>
                <p>Outside school and work, I draw, write, and play games with friends. Those interests keep me experimenting with visual design, narrative, and community-building. Orange is still my favorite color, ducks remain a recurring theme, and my go-to fun fact is that I have an identical twin brother.</p>
            </div>
        </SubPageLayout>
    );
};

export default AboutPage;
