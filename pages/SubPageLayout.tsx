
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface SubPageLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const SubPageLayout: React.FC<SubPageLayoutProps> = ({ title, subtitle, children }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-dark-gray-bg text-light-text min-h-screen p-4 sm:p-6">
      <button
        onClick={() => navigate('/')}
        className="absolute top-6 left-4 sm:left-8 bg-emphasis text-dark-text px-4 py-2 text-base font-semibold rounded-full border-2 border-emphasis-darker hover:bg-emphasis-darker transition-all duration-200 hover:scale-105 active:scale-95 z-10"
      >
        &larr; Back
      </button>
      <h1 className="text-3xl sm:text-4xl font-bold text-center mt-12 sm:mt-8 mb-4 text-light-text">{title}</h1>
      <p className="text-center text-light-text mb-8 font-normal">{subtitle}</p>
      <div className="max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default SubPageLayout;