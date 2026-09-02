import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroProps { onExploreClick: () => void; }

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => (
  <section id="hero-section" className="relative min-h-[100svh] flex items-end overflow-hidden bg-[#0a0a0a]">
    <div className="absolute inset-0">
      <img src="/images/gopal-01.webp" alt="Gopal Singh" className="h-full w-full object-cover object-[center_25%] sm:object-[center_18%]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/35" />
    </div>
    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-10 sm:pb-14">
      <motion.p initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.7}}
        className="text-[11px] sm:text-xs uppercase tracking-[.32em] text-white/70 mb-6">GOPAL SINGH · PERSONAL WEBSITE</motion.p>
      <motion.h1 initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.9,delay:.12}}
        className="max-w-4xl font-editorial italic font-light tracking-tight text-6xl sm:text-8xl lg:text-[9rem] leading-[.86]">
        Still<br/>becoming.
      </motion.h1>
      <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.28}}
        className="mt-8 sm:mt-10 max-w-xl">
        <p className="text-base sm:text-xl leading-relaxed text-white/75">A personal space for my work, ideas, photographs, and the things I’m learning along the way.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <button onClick={onExploreClick} className="inline-flex items-center gap-2 bg-[#f2efe8] text-black px-5 py-3 text-xs font-semibold tracking-[.16em] uppercase hover:bg-white transition-colors">
            Explore my world <ArrowDown className="w-4 h-4" />
          </button>
          <a href="#connect" className="inline-flex items-center gap-2 border border-white/30 px-5 py-3 text-xs font-semibold tracking-[.16em] uppercase hover:bg-white/10 transition-colors">
            Connect <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);
