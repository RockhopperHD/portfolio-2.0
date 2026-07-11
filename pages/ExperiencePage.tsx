import React, { useEffect, useMemo, useState } from 'react';
import SubPageLayout from './SubPageLayout';
import { CLIPBOARD_CONTENTS, MY_WORK_ITEMS } from '../constants';
import { useClipboardPanel } from '../contexts/ClipboardPanelContext';
import { WorkItem } from '../types';

type ViewMode = 'timeline' | 'list';

const ExperiencePage: React.FC = () => {
    const [viewMode, setViewMode] = useState<ViewMode>('timeline');
    const { openClipboard } = useClipboardPanel();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [viewMode]);

    const items = useMemo(
        () => [...MY_WORK_ITEMS].sort((a, b) => b.timelineOrder - a.timelineOrder),
        []
    );
    const timelineSections = useMemo(() => {
        return items.reduce<{ season: string; year: string; items: WorkItem[] }[]>((sections, item) => {
            const previous = sections[sections.length - 1];
            if (previous && previous.season === item.season && previous.year === item.year) {
                previous.items.push(item);
            } else {
                sections.push({ season: item.season, year: item.year, items: [item] });
            }
            return sections;
        }, []);
    }, [items]);

    const openItemInfo = (item: WorkItem) => {
        const content = CLIPBOARD_CONTENTS.find(entry => entry.id === item.clipboardId);
        if (content) openClipboard(content.content);
    };

    const circleRoleTargets: Record<string, string> = {
        'Staff Writer': 'circle-staff-writer',
        'Co-Features Editor': 'circle-co-features-editor',
        'Editor-in-Chief': 'circle-editor-in-chief',
    };

    const jumpToTimelineItem = (timelineId: string) => {
        document.getElementById(timelineId)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    const renderTitle = (title: string) => {
        const publication = 'Marist Circle';
        const index = title.indexOf(publication);

        if (index === -1) return title;

        return (
            <>
                {title.slice(0, index)}
                <em>{publication}</em>
                {title.slice(index + publication.length)}
            </>
        );
    };

    const InfoButton = ({ item, variant = 'default' }: { item: WorkItem; variant?: 'default' | 'award' | 'education' }) => (
        <button
            onClick={() => openItemInfo(item)}
            aria-label={`More information about ${item.title}`}
            title={`More information about ${item.title}`}
            className={`shrink-0 w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all hover:scale-105 ${variant === 'award' ? 'border-[#f6c75b] text-[#f6c75b] hover:bg-[#f6c75b] hover:text-dark-text' : variant === 'education' ? 'border-[#8ab4f8] text-[#8ab4f8] hover:bg-[#8ab4f8] hover:text-dark-text' : 'border-emphasis text-emphasis hover:bg-emphasis hover:text-dark-text'}`}
        >
            <i className="fas fa-circle-info text-base"></i>
        </button>
    );

    const ActivityCard = ({ item, listView = false }: { item: WorkItem; listView?: boolean }) => {
        const isAward = item.category === 'Academic Recognition';
        const isEducationMilestone = item.category === 'Education';

        if ((isAward || isEducationMilestone) && !listView) {
            return (
                <article className={`w-full sm:w-fit max-w-xl border px-5 py-4 sm:px-6 sm:py-5 rounded-2xl shadow-custom-light flex items-center gap-4 ${isAward ? 'border-[#f6c75b]/70 bg-[#3d3322]' : 'border-[#8ab4f8]/70 bg-[#223044]'}`}>
                    {isAward && (
                        <span className="w-11 h-11 rounded-full border-2 border-[#f6c75b] text-[#f6c75b] flex items-center justify-center shrink-0" aria-hidden="true">
                            <i className="fa-solid fa-star text-base"></i>
                        </span>
                    )}
                    {isEducationMilestone && (
                        <span className="w-11 h-11 rounded-full border-2 border-[#8ab4f8] text-[#8ab4f8] flex items-center justify-center shrink-0" aria-hidden="true">
                            <i className="fa-solid fa-graduation-cap text-base"></i>
                        </span>
                    )}
                    <div className="min-w-0">
                        <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs uppercase tracking-[0.12em] font-bold ${isAward ? 'border-[#f6c75b]/70 text-[#f6c75b]' : 'border-[#8ab4f8]/70 text-[#8ab4f8]'}`}>{isAward ? 'Award' : 'Education milestone'}</span>
                        <h3 className="font-bold text-light-text text-lg mt-1">{renderTitle(item.title)}</h3>
                    </div>
                    <InfoButton item={item} variant={isAward ? 'award' : 'education'} />
                </article>
            );
        }

        return (
            <article id={item.timelineId} className={`bg-soft-gray-bg border border-medium-gray-bg rounded-2xl shadow-custom-light scroll-mt-8 ${listView ? 'p-5 sm:p-6 grid grid-cols-[1fr_auto] gap-4 sm:gap-6 items-start' : 'p-5 flex gap-4 sm:gap-5 items-start'}`}>
                <div className="min-w-0 flex-1">
                    <span className="inline-flex rounded-full border border-emphasis-darker/70 bg-light-bg px-2.5 py-1 text-xs uppercase tracking-[0.1em] text-emphasis font-bold mb-3">{item.category}</span>
                    <h3 className="text-lg sm:text-xl font-bold text-light-text leading-tight">{renderTitle(item.title)}</h3>
                    <p className="text-sm text-light-text/80 mt-2 leading-relaxed">{item.desc}</p>
                    {item.progression && (
                        <div className="mt-4 flex flex-wrap items-center gap-2" aria-label={`${item.title} role progression`}>
                            {item.progression.map((role, index) => (
                                <React.Fragment key={role}>
                                    {index > 0 && <span className="text-emphasis text-sm" aria-hidden="true">→</span>}
                                    <button
                                        type="button"
                                        onClick={() => jumpToTimelineItem(circleRoleTargets[role])}
                                        className={`px-2.5 py-1 rounded-full border text-xs font-bold transition-colors hover:border-emphasis ${role === item.title.split(': ').pop() ? 'border-emphasis bg-emphasis text-dark-text' : 'border-medium-gray-bg text-light-text/80 hover:text-emphasis'}`}
                                        title={`Jump to ${role}`}
                                    >
                                        {role}
                                    </button>
                                </React.Fragment>
                            ))}
                        </div>
                    )}
                    {listView && <p className="text-xs text-light-text/60 mt-3 font-semibold">{item.season} {item.year}</p>}
                </div>
                <InfoButton item={item} />
            </article>
        );
    };

    return (
        <SubPageLayout title="Portfolio" subtitle="A chronological record of education, EdTech work, research, projects, leadership, and recognition.">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
                <p className="text-light-text/80 text-center sm:text-left">
                    You're viewing as a <span className="font-bold text-light-text">{viewMode}</span>.
                </p>
                <button
                    onClick={() => setViewMode(currentView => currentView === 'timeline' ? 'list' : 'timeline')}
                    className="text-emphasis font-bold underline underline-offset-4 hover:text-emphasis-darker transition-colors"
                >
                    {viewMode === 'timeline' ? 'View as a list' : 'View as a timeline'} <i className="fa-solid fa-arrow-right ml-1 text-xs"></i>
                </button>
            </div>

            {viewMode === 'timeline' ? (
                <section key="timeline-view" aria-label="Portfolio timeline" className="relative">
                    <div className="hidden md:block absolute left-[12rem] top-4 bottom-4 w-px bg-medium-gray-bg"></div>
                    <div className="space-y-9">
                        {timelineSections.map((section, sectionIndex) => (
                            <div key={`timeline-section-${section.season}-${section.year}-${sectionIndex}`} className="grid md:grid-cols-[10rem_1.5rem_minmax(0,1fr)] gap-4 md:gap-5 items-start">
                                <div className="md:text-right pt-1 flex md:block items-baseline justify-between border-b border-medium-gray-bg/50 pb-2 md:border-0 md:pb-0">
                                    <span className="block text-xl font-bold text-light-text">{section.season}</span>
                                    <span className="block text-emphasis font-bold">{section.year}</span>
                                </div>
                                <div className="hidden md:flex justify-center pt-2 relative z-10">
                                    <span className="w-5 h-5 bg-dark-gray-bg border-4 border-emphasis rounded-full"></span>
                                </div>
                                <div className="space-y-4">
                                    {section.items.map((item, itemIndex) => <ActivityCard key={`timeline-item-${sectionIndex}-${itemIndex}-${item.title}`} item={item} />)}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ) : (
                <section key="list-view" aria-label="Portfolio list" className="space-y-4">
                    {items.map((item, index) => <ActivityCard key={`list-item-${index}-${item.title}`} item={item} listView />)}
                </section>
            )}
        </SubPageLayout>
    );
};

export default ExperiencePage;
