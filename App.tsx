
import React from 'react';
import { HashRouter, Routes, Route, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import ResumeWebPage from './pages/ResumeWebPage';
import ChangelogPage from './pages/ChangelogPage';
import { InfoSidebarProvider } from './contexts/InfoSidebarContext';
import { ClipboardPanelProvider } from './contexts/ClipboardPanelContext';

const Layout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo(0, 0);
    } else {
      navigate(path);
    }
  };

  return (
    <InfoSidebarProvider>
      <ClipboardPanelProvider>
        <div className="bg-darkest-bg text-light-text">
          <Header onNavigate={handleNavigate} />
          <main>
            <Outlet />
          </main>
          <Footer onNavigate={handleNavigate} />
        </div>
      </ClipboardPanelProvider>
    </InfoSidebarProvider>
  );
};

const SubPageLayout: React.FC = () => {
  return (
    <InfoSidebarProvider>
      <ClipboardPanelProvider>
        <Outlet />
      </ClipboardPanelProvider>
    </InfoSidebarProvider>
  );
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route element={<SubPageLayout />}>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumeWebPage />} />
          <Route path="/changelog" element={<ChangelogPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
