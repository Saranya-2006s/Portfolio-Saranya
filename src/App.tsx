import React, { useState, useEffect } from 'react';
import { initialPortfolioData } from './data/defaultData';
import { PortfolioData } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { InteractiveResume } from './components/InteractiveResume';
import { CustomizeDrawer } from './components/CustomizeDrawer';
import { AiAssistantModal } from './components/AiAssistantModal';
import { Sparkles } from 'lucide-react';

export default function App() {
  // Local storage state initialization
  const [portfolioData, setPortfolioData] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem('portfolio_app_data');
      if (saved) {
        const parsed = JSON.parse(saved);
        // If cached data contains old mock projects or old name, reset to initial portfolio data
        if (
          parsed.profile?.name === 'Saranya Sasikumar' || 
          parsed.projects?.some((p: any) => p.title?.includes('OmniFlow') || p.title?.includes('CloudPulse')) ||
          !parsed.profile?.avatarUrl?.includes('saranya_official_photo') ||
          !parsed.profile?.leetcodeUrl?.includes('Saranya_Sasikumar') ||
          !parsed.profile?.resumeUrl?.includes('drive.google.com')
        ) {
          localStorage.removeItem('portfolio_app_data');
          return initialPortfolioData;
        }
        return parsed;
      }
    } catch (err) {
      console.error('Failed to load portfolio data from storage:', err);
    }
    return initialPortfolioData;
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const savedTheme = localStorage.getItem('portfolio_theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  const [activeSection, setActiveSection] = useState<string>('about');
  const [resumeOpen, setResumeOpen] = useState(false);
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);

  // Sync dark mode class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [isDarkMode]);

  // Persist portfolio data to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('portfolio_app_data', JSON.stringify(portfolioData));
    } catch (err) {
      console.error('Failed to save portfolio data:', err);
    }
  }, [portfolioData]);

  // Scroll section observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResetDefault = () => {
    setPortfolioData(initialPortfolioData);
    localStorage.removeItem('portfolio_app_data');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      
      {/* Navigation Header */}
      <Navbar
        profile={portfolioData.profile}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onOpenCustomize={() => setCustomizeOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        onOpenAiAssistant={() => setAiAssistantOpen(true)}
        activeSection={activeSection}
      />

      {/* Hero Header Section */}
      <main>
        <Hero
          profile={portfolioData.profile}
          onOpenAiAssistant={() => setAiAssistantOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
          onUpdateAvatar={(url) =>
            setPortfolioData((prev) => ({
              ...prev,
              profile: {
                ...prev.profile,
                avatarUrl: url,
              },
            }))
          }
        />

        {/* About Section */}
        <About
          profile={portfolioData.profile}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Filterable Projects & Case Studies */}
        <Projects projects={portfolioData.projects} />

        {/* Skill Proficiency Matrix */}
        <Skills skills={portfolioData.skills} />

        {/* Work Experience Timeline & Education */}
        <Experience
          experiences={portfolioData.experiences}
          education={portfolioData.education}
          certifications={portfolioData.certifications}
        />

        {/* Direct Contact & Inquiry Form */}
        <Contact profile={portfolioData.profile} />
      </main>

      {/* Footer */}
      <Footer profile={portfolioData.profile} />

      {/* Modals & Customizer Drawers */}
      {resumeOpen && (
        <InteractiveResume
          data={portfolioData}
          onClose={() => setResumeOpen(false)}
        />
      )}

      {customizeOpen && (
        <CustomizeDrawer
          portfolioData={portfolioData}
          setPortfolioData={setPortfolioData}
          isOpen={customizeOpen}
          onClose={() => setCustomizeOpen(false)}
          onResetDefault={handleResetDefault}
        />
      )}

      {aiAssistantOpen && (
        <AiAssistantModal
          portfolioData={portfolioData}
          isOpen={aiAssistantOpen}
          onClose={() => setAiAssistantOpen(false)}
        />
      )}

      {/* Floating AI Assistant Trigger Button (Bottom Right) */}
      <button
        onClick={() => setAiAssistantOpen(true)}
        className="fixed bottom-6 right-6 z-30 flex items-center gap-2 px-4 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer group"
      >
        <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
        <span className="hidden sm:inline">Ask AI Portfolio Assistant</span>
        <span className="sm:hidden">Ask AI</span>
      </button>

    </div>
  );
}
