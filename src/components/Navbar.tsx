import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'work', label: 'PHOTOS' },
    { id: 'library', label: 'BOOKS' },
    { id: 'about', label: 'ABOUT' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#1A1A1A] shadow-lg shadow-black/30'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Moniker / Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleLinkClick('hero')}
            className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E6E1D6]"
          >
            <span className="text-sm sm:text-base font-semibold tracking-[0.25em] uppercase text-[#E6E1D6] group-hover:text-white transition-colors">
              GS
            </span>
            <span className="h-3 w-[1px] bg-[#2A2A2A]" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#888888] group-hover:text-[#E6E1D6] transition-colors">
              {scrolled ? 'GOPAL SINGH' : 'DIGITAL SPACE'}
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-10 text-[11px] font-semibold tracking-[0.2em] uppercase" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-all duration-200 relative py-1 focus:outline-none focus-visible:text-[#E6E1D6] ${
                  activeSection === link.id
                    ? 'text-[#E6E1D6] opacity-100'
                    : 'text-[#E6E1D6] opacity-70 hover:opacity-100'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[#E6E1D6]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}

            <div className="h-3 w-[1px] bg-[#2A2A2A]" />

            <button
              id="connect-nav-btn"
              onClick={() => handleLinkClick('connect')}
              className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#888888] hover:text-[#E6E1D6] transition-colors flex items-center gap-1"
            >
              CONNECT
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#E6E1D6] hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E6E1D6]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col justify-between p-8 pt-28 md:hidden border-b border-[#1A1A1A]"
          >
            <div className="space-y-6">
              <p className="text-[10px] tracking-[0.3em] text-[#888888] uppercase">
                Navigation
              </p>
              <div className="flex flex-col space-y-5">
                {navLinks.map((link, idx) => (
                  <button
                    key={link.id}
                    id={`mobile-link-${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className="text-2xl font-editorial tracking-wide text-left text-[#E6E1D6] hover:text-white transition-colors flex items-center justify-between"
                  >
                    <span>0{idx + 1} — {link.label}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#888888]" />
                  </button>
                ))}
                <button
                  id="mobile-link-connect"
                  onClick={() => handleLinkClick('connect')}
                  className="text-2xl font-editorial tracking-wide text-left text-[#E6E1D6] hover:text-white transition-colors flex items-center justify-between pt-2 border-t border-[#1A1A1A]"
                >
                  <span>04 — CONNECT</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-[#1A1A1A]">
              <p className="text-xs tracking-[0.25em] text-[#888888] uppercase">
                CREATE · LEARN · REFLECT
              </p>
              <p className="font-editorial italic text-sm text-[#888888]">
                "Still becoming."
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
