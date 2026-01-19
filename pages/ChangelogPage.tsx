
import React, { useEffect } from 'react';
import SubPageLayout from './SubPageLayout';

// FIX: Define a props interface and use React.FC to correctly type the component, resolving issues with the 'children' prop.
interface ChangelogEntryProps {
  title: string;
  date: string;
  children: React.ReactNode;
}

const ChangelogEntry: React.FC<ChangelogEntryProps> = ({ title, date, children }) => (
  <div className="bg-soft-gray-bg p-5 border-l-4 border-emphasis mb-6 rounded-r-md">
    <h3 className="text-xl font-bold text-emphasis mb-1">{title}</h3>
    <span className="text-sm text-medium-gray-bg italic block mb-3">{date}</span>
    <ul className="list-disc pl-5 space-y-1 text-light-text/90">
      {children}
    </ul>
  </div>
);


const ChangelogPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SubPageLayout title="Website Changelog" subtitle="Recent updates and improvements to the portfolio site.">
      <div>
        <ChangelogEntry title="Portfoliotizing" date="January 18, 2026">
          <li>Changed out a page</li>
          <li>Added a place to see my other ongoing projects</li>
          <li>Updated my résumé and skill pages</li>
        </ChangelogEntry>
        <ChangelogEntry title="General Technical Update" date="November 17, 2025">
          <li>The browser back button works now!</li>
          <li>The highlights drag-and-drop modal was not working great on mobile, so I revamped it so it's more friendly and accessible.</li>
        </ChangelogEntry>
        <ChangelogEntry title="React Migration & Feature Overhaul" date="October 2, 2025">
          <li>The website now uses React and TypeScript, it's not one HTML file.</li>
          <li>Completely redesigned the 'Highlights' section into an interactive, looping carousel of portfolio cards.</li>
          <li>Enriched all portfolio item descriptions with detailed context from the resumé.</li>
          <li>Adjusted text alignment on the Skills page for improved readability as requested.</li>
        </ChangelogEntry>
        <ChangelogEntry title="Content & Layout Overhaul" date="September 17, 2025">
          <li>Updated the site in general with more up-to-date info.</li>
          <li>Merged two pages for ease of access and clarity.</li>
          <li>Made the About Me page more interesting to read.</li>
          <li>Made the skills page more dynamic.</li>
          <li>General graphic design improvements.</li>
        </ChangelogEntry>
        <ChangelogEntry title="Visual Overhaul & New Features" date="June 22, 2025">
          <li>Re-themed the website to dark mode -- easier on the eyes.</li>
          <li>Changed up the font for readability.</li>
          <li>Added this changelog.</li>
          <li>Adjusted some visuals to be smoother to allow for readability.</li>
        </ChangelogEntry>
        <ChangelogEntry title="Initial Launch" date="June 8, 2025">
          <li>The first version of the website was launched, featuring a light theme and the core sections: About, Skills, Projects, Extras, and Résumé.</li>
        </ChangelogEntry>
      </div>
    </SubPageLayout>
  );
};

export default ChangelogPage;