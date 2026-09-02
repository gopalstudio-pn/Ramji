import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface NoteReflection {
  number: string;
  title: string;
  reflection: string;
}

const REFLECTIONS: NoteReflection[] = [
  {
    number: '01',
    title: 'STILL BECOMING',
    reflection: "You don't need the entire path figured out before taking the next step.",
  },
  {
    number: '02',
    title: "CREATE BEFORE YOU'RE READY",
    reflection: 'Sometimes making something imperfect is better than waiting for the perfect moment.',
  },
  {
    number: '03',
    title: 'KEEP LEARNING',
    reflection: "The tools change. Curiosity shouldn't.",
  },
  {
    number: '04',
    title: "DON'T RUSH THE JOURNEY",
    reflection: 'Progress is still progress, even when nobody sees it.',
  },
];

interface NotesSectionProps {
  onSelectNote?: (note: any) => void;
}

export const NotesSection: React.FC<NotesSectionProps> = () => {
  return (
    <section
      id="notes"
      className="relative z-10 py-24 sm:py-32 px-6 sm:px-12 max-w-6xl mx-auto border-t border-[#1A1A1A] bg-[#0A0A0A]"
    >
      {/* Section Header */}
      <div className="space-y-4 mb-14 sm:mb-18">
        <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#888888]">
          NOTES FROM THE JOURNEY
        </p>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-[#E6E1D6] font-editorial italic leading-[1.3] tracking-tight">
          “Things I'm learning along the way.”
        </h2>
      </div>

      {/* 4 Reflections + Photographic Anchor */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: 4 Reflections (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
          {REFLECTIONS.map((item) => (
            <div
              key={item.number}
              className="pt-6 border-t border-[#1A1A1A] space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#E6E1D6] uppercase">
                  {item.title}
                </span>
                <span className="text-[10px] font-mono text-[#888888] tracking-widest">
                  {item.number} //
                </span>
              </div>
              <p className="text-sm text-[#888888] font-normal leading-relaxed">
                {item.reflection}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column: Visual Transition Photo (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] overflow-hidden bg-black border border-[#1A1A1A]">
            <img
              src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1000&q=85"
              alt="Night street illuminated by amber lamp"
              className="w-full h-full object-cover grayscale contrast-[1.08] brightness-[0.85] hover:scale-[1.02] transition-transform duration-700 ease-out"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 left-3">
              <span className="text-[9px] font-mono tracking-widest text-[#888888] bg-black/60 px-2 py-0.5 border border-white/10 backdrop-blur-sm">
                VISUAL NOTE //
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between text-[11px] text-[#888888]">
            <span className="italic font-editorial text-[#E6E1D6]">Solitary street illuminated by amber night lamps.</span>
          </div>
        </div>

      </div>

      {/* Subtle Link for future Notes page */}
      <div className="mt-14 sm:mt-18 pt-8 border-t border-[#1A1A1A] flex items-center justify-between">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#888888]">
          COLLECTED THOUGHTS & OBSERVATIONS
        </span>

        <a
          href="#notes"
          className="group inline-flex items-center gap-1.5 text-xs text-[#E6E1D6] tracking-wider uppercase hover:text-white transition-colors"
        >
          <span>View all notes</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#888888] group-hover:text-[#E6E1D6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
};
