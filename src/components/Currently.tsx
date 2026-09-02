import React from 'react';
import { motion } from 'motion/react';
import { CURRENTLY_DATA } from '../data/content';
import { Cpu, Eye, Sparkles, BookMarked } from 'lucide-react';

export const Currently: React.FC = () => {
  return (
    <section
      id="currently-section"
      className="relative py-24 sm:py-36 px-6 sm:px-12 lg:px-16 max-w-7xl mx-auto border-t border-[#1A1A1A]"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#888888]">
            ACTIVE PURSUITS
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-[0.08em] text-[#E6E1D6] uppercase">
            What I'm into right now
          </h2>
        </div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#888888]">
          CURRENT CYCLE
        </p>
      </div>

      {/* 4 Facets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 1. EXPLORING */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className="p-6 sm:p-8 bg-[#141414] border border-[#1A1A1A] flex flex-col justify-between space-y-6 group hover:border-[#2A2A2A]"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#888888] font-bold flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-[#E6E1D6]" />
                EXPLORING
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#E6E1D6] border border-white/10 px-2 py-0.5 bg-black/40">
                {CURRENTLY_DATA.exploring.statusBadge}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#E6E1D6] tracking-wide">
              {CURRENTLY_DATA.exploring.title}
            </h3>
            <p className="text-sm text-[#888888] leading-relaxed">
              {CURRENTLY_DATA.exploring.detail}
            </p>
          </div>
        </motion.div>

        {/* 2. CREATING */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className="p-6 sm:p-8 bg-[#141414] border border-[#1A1A1A] flex flex-col justify-between space-y-6 group hover:border-[#2A2A2A]"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#888888] font-bold flex items-center gap-2">
                <Eye className="w-3.5 h-3.5 text-[#E6E1D6]" />
                CREATING
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#E6E1D6] border border-white/10 px-2 py-0.5 bg-black/40">
                {CURRENTLY_DATA.creating.statusBadge}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#E6E1D6] tracking-wide">
              {CURRENTLY_DATA.creating.title}
            </h3>
            <p className="text-sm text-[#888888] leading-relaxed">
              {CURRENTLY_DATA.creating.detail}
            </p>
          </div>
        </motion.div>

        {/* 3. LEARNING */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className="p-6 sm:p-8 bg-[#141414] border border-[#1A1A1A] flex flex-col justify-between space-y-6 group hover:border-[#2A2A2A]"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#888888] font-bold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#E6E1D6]" />
                LEARNING
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#E6E1D6] border border-white/10 px-2 py-0.5 bg-black/40">
                {CURRENTLY_DATA.learning.statusBadge}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#E6E1D6] tracking-wide">
              {CURRENTLY_DATA.learning.title}
            </h3>
            <p className="text-sm text-[#888888] leading-relaxed">
              {CURRENTLY_DATA.learning.detail}
            </p>
          </div>
        </motion.div>

        {/* 4. READING */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className="p-6 sm:p-8 bg-[#141414] border border-[#1A1A1A] flex flex-col justify-between space-y-6 group hover:border-[#2A2A2A]"
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#888888] font-bold flex items-center gap-2">
                <BookMarked className="w-3.5 h-3.5 text-[#E6E1D6]" />
                READING
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#E6E1D6] border border-white/10 px-2 py-0.5 bg-black/40">
                {CURRENTLY_DATA.reading.statusBadge}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-editorial italic text-[#E6E1D6] tracking-wide">
              "{CURRENTLY_DATA.reading.title}"
            </h3>
            <p className="text-[11px] uppercase tracking-[0.15em] text-[#888888]">
              BY {CURRENTLY_DATA.reading.author.toUpperCase()}
            </p>
            <p className="text-sm text-[#888888] leading-relaxed">
              {CURRENTLY_DATA.reading.note}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
