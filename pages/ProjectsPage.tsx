import React, { useState } from 'react';
import SubPageLayout from './SubPageLayout';

interface ProjectData {
    title: string;
    year: string;
    subtitle: string;
    description: string[];
    buttonText: string;
    buttonLink: string;
    images: string[];
}

const projects: ProjectData[] = [
    {
        title: "Flashcardsish",
        year: "2025 - Ongoing",
        subtitle: "A flashcards app for the rest of us",
        description: [
            "Flashcardsish is everything I wanted in a Flashcards app and more. I had used Quizlet and Knowt in the past to great lengths, but decided to add on where I thought they felt short. This started with the simple addition of the “Year” field which then expanded into Custom Fields, the program’s signature feature. Flashcardsish supports downloading your sets, offline use, cloud syncing with Google OAuth, and so much more.",
            "Flashcardsish is my current ongoing project that forms based on user feedback, my own experiences, and updates in the education sphere. Flashcardsish features graphic design choices I made, honed UX features, and an interface you’ll actually want to study with. I accept feedback actively and have future plans to continue improving it."
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
        title: "Connectionsish",
        year: "2025",
        subtitle: "A simple copy of a game with QoL updates and sharing",
        description: [
            "Connectionsish, based off of *Connections,* is a game-app that allows you to create and share custom Connections-esque puzzles. I used Connectionsish to play the game with friends and published it with anyone to use, where you can send puzzles as codes or links. It’s lightweight and to the point.",
            "Connectionsish also features quality of life changes I thought were missing from the game: a “drawer” for previously wrong answers, the ability to keep playing after you lose, and more detailed score sharing. I used Connectionsish to establish my UX skills, try something new, and make a proof-of-concept for deploying AI websites like it."
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
                                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700 ease-out"
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
