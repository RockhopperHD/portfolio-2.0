import React, { useState } from 'react';
import SubPageLayout from './SubPageLayout';

interface ProjectData {
    title: string;
    year: string;
    subtitle: string;
    whatIBuilt: string;
    description: string[];
    buttonText: string;
    buttonLink: string;
    images: string[];
    imageFit?: 'cover' | 'contain';
}

const projects: ProjectData[] = [
    {
        title: "Flashcardsish",
        year: "2025 - Ongoing",
        subtitle: "A study tool for learners who need more structure than a standard term-and-definition set",
        whatIBuilt: "A feedback-informed flashcard web app with custom fields, offline use, downloadable sets, and Google OAuth cloud syncing.",
        description: [
            "After using Quizlet and Knowt, I wanted a flashcard system that could capture context beyond a term and definition. I designed Flashcardsish around a Year field that expanded into Custom Fields, giving learners more control over how each study set is organized.",
            "I continue to develop the product from user feedback, my own study experience, and changes in education technology. My role covers product direction, UX and visual decisions, feature development, and deployment."
        ],
        buttonText: "Try it",
        buttonLink: "https://flashcardsish.owenwhelan.com",
        images: [
            "/photos/flashcardsish1.png",
            "/photos/flashcardsish2.png",
            "/photos/flashcardsish3.png",
            "/photos/flashcardsish4.png",
        ]
    },
    {
        title: "Iquan",
        year: "2026",
        subtitle: "A quick icon editor for people who need one focused change without opening a full design suite",
        whatIBuilt: "A browser-based icon maker with PNG export and portable icon codes for use in other applications.",
        description: [
            "I built Iquan for people making small icons or emojis for documents and chat tools. It addresses a narrow image-editing problem: making a quick visual change without the setup and complexity of a full image editor.",
            "For the 2026 Codex Creator Challenge, I designed and developed PNG export alongside a code-based format that lets users carry their icons into other applications."
        ],
        buttonText: "View Iquan",
        buttonLink: "https://iquan.owenwhelan.com",
        images: [
            "/photos/iquan1.png",
            "/photos/iquan2.png",
            "/photos/iquan3.png",
            "/photos/iquan4.png",
        ],
        imageFit: 'contain'
    },
    {
        title: "Connectionsish",
        year: "2025",
        subtitle: "An original community puzzle-building tool inspired by Connections",
        whatIBuilt: "A lightweight web app for creating, playing, and sharing custom category puzzles through links or portable codes.",
        description: [
            "I built Connectionsish for friends and other puzzle fans who wanted to create and exchange their own category puzzles. Inspired by *Connections*, the app supports puzzle creation, play, and sharing through either a link or a compact code.",
            "I also designed interaction changes for community play: a drawer for previous incorrect answers, an option to continue after a loss, and more detailed score sharing. The project became a practical exercise in UX, lightweight publishing, and deployment."
        ],
        buttonText: "Check it Out",
        buttonLink: "https://rockhopperhd.github.io/connectionsish/",
        images: [
            "/photos/connectionsish1.png",
            "/photos/connectionsish2.png",
            "/photos/connectionsish3.png",
            "/photos/connectionsish4.png",
        ]
    }
];

const ProjectsPage: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <SubPageLayout title="Projects" subtitle="Self-built, self-directed work">
            <div className="flex flex-col gap-24">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center lg:items-start p-8 sm:p-12 rounded-3xl border border-light-text/10 hover:border-emphasis/50 transition-all duration-500 bg-light-text/5 backdrop-blur-md shadow-xl group">
                        {/* Text Content */}
                        <div className="flex-1 w-full flex flex-col">
                            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                                <h2 className="text-4xl sm:text-5xl font-bold text-emphasis tracking-tight drop-shadow-sm">{project.title}</h2>
                                <span className="text-lg text-gray-500 font-medium font-mono whitespace-nowrap">({project.year})</span>
                            </div>
                            <p className="text-xl text-gray-300 font-light tracking-wide">{project.subtitle}</p>
                            <p className="mt-4 text-sm sm:text-base text-light-text/90 max-w-2xl">
                                <span className="font-bold text-emphasis">What I built:</span> {project.whatIBuilt}
                            </p>

                            <div className="w-48 h-1 bg-emphasis/30 rounded-full my-6"></div>

                            <div className="space-y-3 mb-10 text-gray-300 leading-relaxed text-lg max-w-2xl">
                                {project.description.map((paragraph, i) => (
                                    <p key={i} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*(.*?)\*/g, '<i>$1</i>') }}></p>
                                ))}
                            </div>

                            <div className="w-full max-w-2xl flex justify-center">
                                <a
                                    href={project.buttonLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-emphasis text-darkest-bg px-10 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-emphasis-darker hover:shadow-emphasis/20 hover:scale-105 transition-all duration-300 transform active:scale-95 inline-block text-center"
                                >
                                    {project.buttonText}
                                </a>
                            </div>
                        </div>

                        {/* Photo Grid */}
                        <div className="flex-1 w-full max-w-2xl grid grid-cols-2 gap-4 sm:gap-6 pt-4">
                            {project.images.map((img, i) => (
                                <div
                                    key={i}
                                    className="aspect-square rounded-2xl overflow-hidden cursor-pointer hover:opacity-100 opacity-100 transition-all duration-300 shadow-lg border border-transparent hover:border-emphasis/30 group-hover:shadow-2xl"
                                    onClick={() => setSelectedImage(img)}
                                >
                                    <img
                                        src={img}
                                        alt={`Project ${index + 1} photo ${i + 1}`}
                                        className={`w-full h-full ${project.imageFit === 'contain' ? 'object-contain bg-[#eef6ff]' : 'object-cover'} transform hover:scale-110 transition-transform duration-700 ease-out`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-in fade-in duration-200"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
                        <img
                            src={selectedImage}
                            alt="Full header"
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        />
                        <button
                            className="absolute -top-12 right-0 text-white/50 hover:text-white text-4xl font-light transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </SubPageLayout>
    );
};

export default ProjectsPage;
