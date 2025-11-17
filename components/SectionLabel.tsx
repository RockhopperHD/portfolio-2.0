
import React from 'react';

interface SectionLabelProps {
  title: string;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ title }) => {
  return (
    <div className="flex justify-start mt-6 mb-4 relative z-10">
      <div className="inline-flex items-center text-dark-text bg-gradient-to-br from-emphasis to-emphasis-darker text-2xl md:text-3xl font-bold pl-8 pr-12 md:pl-36 md:pr-16 py-2 rounded-r-full shadow-md h-section-label">
        {title}
      </div>
    </div>
  );
};

export default SectionLabel;
