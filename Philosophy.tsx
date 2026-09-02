import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PHILOSOPHY_PILLARS } from '../data/content';
import { ArrowRight } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<'create' | 'learn' | 'reflect'>('create');

  const activePillar = PHILOSOPHY_PILLARS.find((p) => p.id === activePillarId) || PHILOSOPHY_PILLARS[0];

  return (
    <section
      id="philosophy-section"
      className="relative py-28 sm:py-40 lg:py-48 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[#1A1A1A]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-6">
        <div className="space-y-3">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#888888]">
            CORE RHYTHM
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[0.1em] text-[#E6E1D6] uppercase">
            CREATE · LEARN · REFLECT
          </h2>
        </div>
        <p className="font-editorial italic text-base sm:text-lg text-[#888888] max-w-md">
          "A cyclical framework for turning observation into craft, and craft into understanding."
        </p>
      </div>

      {/* Dynamic Visual Rhythm Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Left Column: Architectural Pillars */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          {PHILOSOPHY_PILLARS.map((pillar) => {
            const isActive = pillar.id === activePillarId;
            return (
              <button
                key={pillar.id}
                id={`philosophy-btn-${pillar.id}`}
                onClick={() => setActivePillarId(pillar.id)}
                className={`group text-left p-6 sm:p-8 border transition-all duration-300 relative focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E6E1D6] ${
                  isActive
                    ? 'bg-[#141414] border-[#2A2A2A]'
                    : 'bg-[#0A0A0A] border-[#1A1A1A] hover:border-[#2A2A2A] hover:bg-[#121212]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-2xl sm:text-3xl font-bold tracking-wider uppercase transition-colors ${
                    isActive ? 'text-[#E6E1D6]' : 'text-[#888888] group-hover:text-[#E6E1D6]'
                  }`}>
                    {pillar.title}
                  </h3>
                  <span className={`text-[10px] uppercase tracking-[0.2em] transition-colors ${
                    isActive ? 'text-[#E6E1D6]' : 'text-[#888888] group-hover:text-[#E6E1D6]'
                  }`}>
                    {isActive ? 'ACTIVE' : 'EXPLORE →'}
                  </span>
                </div>

                <p className="text-sm text-[#888888] leading-relaxed">
                  {pillar.description}
                </p>

                {isActive && (
                  <motion.div
                    layoutId="pillar-active-indicator"
                    className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#E6E1D6]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Column: Deep Narrative Panel */}
        <div className="lg:col-span-7 bg-[#141414] border border-[#1A1A1A] p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <div className="text-[10px] text-[#888888] uppercase tracking-[0.3em]">
                  PERSPECTIVE // {activePillar.title}
                </div>
                <h4 className="text-2xl sm:text-4xl font-editorial italic text-[#E6E1D6] font-light leading-snug">
                  "{activePillar.mindset}"
                </h4>
              </div>

              {/* Sub-facets with clean architectural layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#1A1A1A]">
                {activePillar.facets.map((facet, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#0A0A0A] border border-[#1A1A1A] space-y-1.5"
                  >
                    <div className="text-xs uppercase tracking-[0.15em] font-medium text-[#E6E1D6] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#E6E1D6]" />
                      {facet.label}
                    </div>
                    <p className="text-xs text-[#888888] leading-relaxed">
                      {facet.subtext}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center justify-between text-[10px] tracking-[0.2em] text-[#888888] uppercase border-t border-[#1A1A1A]">
                <span>ONGOING PRACTICE</span>
                <span className="text-[#E6E1D6]">GOPAL SINGH</span>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
