import React, { useState, useMemo, useEffect } from 'react';
import SubPageLayout from './SubPageLayout';
import { MY_WORK_ITEMS } from '../constants';
import { CLIPBOARD_CONTENTS } from '../constants';
import { useClipboardPanel } from '../contexts/ClipboardPanelContext';
// FIX: Import WorkItem type for explicit prop typing.
import { WorkItem } from '../types';

const MyWorkPage: React.FC = () => {
  const [sortByYear, setSortByYear] = useState(false);
  const { openClipboard } = useClipboardPanel();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = useMemo(() => MY_WORK_ITEMS.filter(item => item.type === 'project').sort((a, b) => b.year.localeCompare(a.year)), []);
  const extras = useMemo(() => MY_WORK_ITEMS.filter(item => item.type === 'extra').sort((a, b) => b.year.localeCompare(a.year)), []);
  const sortedAll = useMemo(() => [...MY_WORK_ITEMS].sort((a, b) => b.year.localeCompare(a.year)), []);

  // FIX: Define a props interface and use React.FC to correctly type the component, resolving issues with the 'key' prop.
  interface GalleryItemProps {
    item: WorkItem;
  }

  const GalleryItem: React.FC<GalleryItemProps> = ({ item }) => {
    const handleInfoClick = () => {
        const content = CLIPBOARD_CONTENTS.find(c => c.id === item.clipboardId);
        if (content) {
            openClipboard(content.content);
        }
    }
    
    return (
      <div className="bg-soft-gray-bg p-4 rounded-lg border border-medium-gray-bg shadow-lg flex flex-col text-center relative">
        <span className="absolute top-2 left-2 bg-emphasis text-dark-text px-2 py-0.5 rounded-full text-xs font-bold">{item.displayYear || item.year}</span>
        <button onClick={handleInfoClick} className="absolute top-2 right-2 bg-emphasis text-dark-text w-6 h-6 rounded-full flex items-center justify-center hover:bg-emphasis-darker transition-all transform hover:scale-110">
          <i className="fas fa-circle-info text-sm"></i>
        </button>
        <div className="w-24 h-24 bg-light-bg rounded-lg flex items-center justify-center mx-auto my-4 text-emphasis-darkest">
          <i className={`${item.icon} text-4xl`}></i>
        </div>
        <h4 className="text-lg font-bold text-light-text mb-2">{item.title}</h4>
        <p className="text-sm text-light-text/90 flex-grow mb-2">{item.desc}</p>
      </div>
    );
  };
  
  const SectionHeader = ({ icon, text }: { icon: string; text:string }) => (
    <h2 className="text-3xl font-bold text-light-text mt-10 mb-5 border-b-2 border-emphasis-darkest pb-3 flex items-center">
      <i className={`fa-solid ${icon} mr-4`}></i>
      {text}
    </h2>
  );

  return (
    <SubPageLayout title="My Work" subtitle="A collection of projects, awards, and publications.">
      <div className="flex justify-center items-center my-8 gap-3">
        <span className={`font-semibold transition-colors ${!sortByYear ? 'text-light-text' : 'text-medium-gray-bg'}`}>Sort by Category</span>
        <label className="relative inline-block w-14 h-8">
          <input type="checkbox" checked={sortByYear} onChange={() => setSortByYear(!sortByYear)} className="opacity-0 w-0 h-0" />
          <span className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-all duration-300 ${sortByYear ? 'bg-emphasis-darkest' : 'bg-medium-gray-bg'}`}>
            <span className={`absolute content-[''] h-6 w-6 left-1 bottom-1 bg-white rounded-full transition-all duration-300 ${sortByYear ? 'transform translate-x-6' : ''}`}></span>
          </span>
        </label>
        <span className={`font-semibold transition-colors ${sortByYear ? 'text-light-text' : 'text-medium-gray-bg'}`}>Sort by Year</span>
      </div>

      {sortByYear ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedAll.map(item => <GalleryItem key={item.title} item={item} />)}
        </div>
      ) : (
        <>
          <section>
            <SectionHeader icon="fa-rocket" text="Projects" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map(item => <GalleryItem key={item.title} item={item} />)}
            </div>
          </section>
          <section>
            <SectionHeader icon="fa-photo-film" text="Extras" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {extras.map(item => <GalleryItem key={item.title} item={item} />)}
            </div>
          </section>
        </>
      )}
    </SubPageLayout>
  );
};

export default MyWorkPage;