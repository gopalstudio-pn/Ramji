import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { WorkSection } from './components/WorkSection';
import { LibrarySection } from './components/LibrarySection';
import { AboutSection } from './components/AboutSection';
import { FollowJourney } from './components/FollowJourney';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    const id = sectionId === 'hero' ? 'hero-section' : sectionId;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const ids = ['hero-section', 'space', 'work', 'library', 'about', 'connect'];
    const onScroll = () => {
      const y = window.scrollY + 180;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && y >= el.offsetTop && y < el.offsetTop + el.offsetHeight) {
          setActiveSection(id === 'hero-section' || id === 'space' ? 'hero' : id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-[#f2efe8] font-sans selection:bg-white selection:text-black">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
      <main>
        <Hero onExploreClick={() => scrollToSection('space')} />
        <Introduction />
        <WorkSection />
        <LibrarySection />
        <AboutSection />
        <FollowJourney />
      </main>
      <Footer onScrollToTop={() => scrollToSection('hero')} />
    </div>
  );
}
