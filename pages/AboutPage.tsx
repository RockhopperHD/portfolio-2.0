
import React, { useEffect } from 'react';
import SubPageLayout from './SubPageLayout';

const AboutPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <SubPageLayout title="About Me" subtitle="A little bit about my values and interests.">
            <div className="bg-gradient-to-br from-emphasis to-emphasis-darker text-dark-text p-6 rounded-lg text-center text-lg font-semibold mx-auto mb-8 shadow-lg border border-emphasis-darker">
                <p className="text-dark-text [text-shadow:0_1px_1px_rgba(255,255,255,0.2)]">
                    From New York, I’m participating in the communities I find myself in by utilizing my dedicated interests and advanced skills in technology, language, and the world.
                </p>
            </div>

            <div className="space-y-6">
                <h3 className="text-2xl font-semibold border-b border-medium-gray-bg pb-2">What’s up with you?</h3>
                <p>The education and technology spheres have defined a good part of my life. I pride myself in using technology daily to its full capacity to get things done, not only efficiently but in new ways that challenge the past. I’m dedicating my studies and work to their intersection, while grounding it in my interest and passion for language. I do it because I believe in it!</p>
                
                <h3 className="text-2xl font-semibold border-b border-medium-gray-bg pb-2">So why education?</h3>
                <p>Why *not* education? Across cultures and people, almost everyone goes through some kind of education, whether it’s formal school or not. The systems I went through as a student changed who I am a lot, and I have a lot of ideas on what I think the future of education should look like. I also have a genuine motivation to see people improve and am passionate to explain and talk about things I make. Creating resources for other people to reference and talking about it to a group is a natural strong suit for me.</p>
                
                <h3 className="text-2xl font-semibold border-b border-medium-gray-bg pb-2">So why Spanish?</h3>
                <p>Spanish is a critical skill in today’s world, especially if you live in the United States. I’ve found that my Spanish skills — built from the ground up in my public New York school — have been so useful in daily interactions and professional settings. I think everyone should know at least some. Not to mention it’s an elegant, strong language, and learning it has changed a lot about how I view the world. You also pick up cultural competency and expand your worldview — neat!</p>
                <p>I also work a lot with English, too; I believe a lot in the voice of the student and the educator, shown through my journalism work. I'm an expert an analyzing texts and producing written materials about them or a topic I've researched. Speaking of research, I use a variety of tools to find, cite, and most importantly evaluate sources for my work. My writing style is modern, persuasive, and (proudly) mine.</p>
                
                <h3 className="text-2xl font-semibold border-b border-medium-gray-bg pb-2">Do you just AI everything?</h3>
                <p>Noooooooo. I never <i>need</i> to use it, and consider myself lucky to have built super important skills — writing, organizing, prioritizing — on my own without it as I went through school. I don’t use AI to write things like this paragraph you’re reading; it’s supposed to be my voice, after all. If I do use AI, I try to make it clear at least somewhere, like how on the footer of my main page I mention that the code Is AI even though the text is my own work. If I can't say it was mine, I don't put my name on it.</p>
                <p>I’m open for contact if you’d like to ask me more about where and how I use AI and where I see it going. For the record, I do have a disclaimer in the footer of this site that the *code* was AI generated, but the voice is all me.</p>
                
                <h3 className="text-2xl font-semibold border-b border-medium-gray-bg pb-2">For Fun</h3>
                <p>I draw (honing those graphic design skills!), write, and play games online with friends. I’ve learned a lot from communicating both in person and online. My favorite color is orange (obviously) and I’m infamous among my friends for liking ducks. My go-to fun fact is that I have an identical twin brother.</p>
            </div>
        </SubPageLayout>
    );
};

export default AboutPage;
