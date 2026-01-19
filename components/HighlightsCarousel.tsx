import React, { useState, useMemo, useCallback } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { PortfolioItem } from '../types';

const HighlightsCarousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredItems = useMemo(() => {
        if (activeFilter === 'all') {
            return PORTFOLIO_ITEMS;
        }
        return PORTFOLIO_ITEMS.filter(item => item.category.includes(activeFilter));
    }, [activeFilter]);

    const handleFilterClick = useCallback((filter: string) => {
        setActiveFilter(filter);
        setActiveIndex(0);
    }, []);

    const goToNext = useCallback(() => {
        setActiveIndex(prevIndex => (prevIndex + 1) % filteredItems.length);
    }, [filteredItems.length]);

    const goToPrev = useCallback(() => {
        setActiveIndex(prevIndex => (prevIndex - 1 + filteredItems.length) % filteredItems.length);
    }, [filteredItems.length]);

    const FilterButton = ({ category, label }: { category: string; label: string }) => (
        <button
            onClick={() => handleFilterClick(category)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${activeFilter === category ? 'bg-emphasis-darkest text-dark-text shadow-inner' : 'bg-medium-gray-bg text-light-text hover:bg-dark-gray-bg'}`}
        >
            {label}
        </button>
    );

    return (
        <div className="w-full flex flex-col items-center py-5">
            <div className="w-full max-w-4xl xl:max-w-6xl 2xl:max-w-7xl px-4 mb-4">
                <p className="text-light-text text-left italic mb-3">Click the arrows to browse my experiences...</p>
                <div className="flex items-center justify-center gap-4 flex-wrap bg-dark-gray-bg/50 p-3 rounded-lg">
                    <span className="font-semibold text-light-text text-sm sm:text-base">Filter:</span>
                    <div className="flex gap-2 flex-wrap justify-center">
                        <FilterButton category="all" label="All" />
                        <FilterButton category="ai-research" label="AI & Research" />
                        <FilterButton category="teaching-mentorship" label="Teaching & Mentorship" />
                        <FilterButton category="leadership-communication" label="Leadership & Communication" />
                    </div>
                </div>
            </div>

            <div className="relative w-full max-w-4xl xl:max-w-6xl 2xl:max-w-7xl h-[450px] xl:h-[550px] 2xl:h-[650px] flex items-center justify-center px-2">
                <button
                    onClick={goToPrev}
                    aria-label="Previous item"
                    className="absolute left-0 sm:-left-4 z-30 bg-medium-gray-bg/80 hover:bg-dark-gray-bg text-light-text rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={filteredItems.length <= 1}
                >
                    <i className="fas fa-chevron-left"></i>
                </button>

                <div className="relative w-full h-full max-w-2xl xl:max-w-3xl 2xl:max-w-4xl flex items-center justify-center" style={{ perspective: '1000px' }}>
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => {
                            let offset = index - activeIndex;
                            const N = filteredItems.length;
                            if (N > 2 && Math.abs(offset) > N / 2) {
                                offset = offset > 0 ? offset - N : offset + N;
                            }

                            const transform = `translateX(${offset * 40}%) scale(${1 - Math.abs(offset) * 0.2}) rotateY(${Math.sign(offset) * -10}deg)`;
                            const opacity = Math.abs(offset) > 1 ? 0 : 1;
                            const zIndex = filteredItems.length - Math.abs(offset);
                            const pointerEvents = activeIndex === index ? 'auto' : 'none';

                            return (
                                <div
                                    key={item.id}
                                    className="absolute w-full h-full max-w-2xl xl:max-w-3xl 2xl:max-w-4xl bg-dark-gray-bg border-2 border-medium-gray-bg rounded-2xl shadow-lg flex flex-col overflow-hidden transition-transform duration-500 ease-out"
                                    style={{ transform, opacity, zIndex, pointerEvents }}
                                >
                                    <div className="flex flex-col h-full">
                                        <div className="flex-grow p-6 sm:p-8 overflow-y-auto">
                                            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-light-text border-b-2 border-medium-gray-bg pb-2 mb-4 flex items-center gap-x-4">
                                                <span className="text-4xl xl:text-5xl">{item.icon}</span>
                                                <span>{item.content.heading}</span>
                                            </h2>
                                            <div className="text-base sm:text-lg xl:text-xl text-light-text/90 space-y-4 prose">
                                                {typeof item.content.description === 'string' ? <p>{item.content.description}</p> : item.content.description}
                                            </div>
                                        </div>
                                        <div className="bg-black/20 p-4 border-t border-medium-gray-bg flex flex-wrap justify-center items-center gap-2">
                                            {item.content.pills.map((pill, pIndex) => (
                                                <span key={pIndex} className="bg-medium-gray-bg text-light-text px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                                                    {pill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="flex items-center justify-center h-full text-center text-medium-gray-bg p-4">
                            <p>No items match the selected filter.</p>
                        </div>
                    )}
                </div>

                <button
                    onClick={goToNext}
                    aria-label="Next item"
                    className="absolute right-0 sm:-right-4 z-30 bg-medium-gray-bg/80 hover:bg-dark-gray-bg text-light-text rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={filteredItems.length <= 1}
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
            {/* FIX: Removed non-standard 'jsx' prop from the style tag. */}
            <style>{`
              .prose p {
                  margin-bottom: 1rem;
              }
            `}</style>
        </div>
    );
};

export default HighlightsCarousel;