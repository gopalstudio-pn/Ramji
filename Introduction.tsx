import React from 'react';
import { motion } from 'motion/react';

export const Introduction: React.FC = () => {
  const pillars = [
    {
      title: 'CREATE',
      description: 'Photography, visual work, AI experiments and digital projects.',
      tag: '01',
    },
    {
      title: 'LEARN',
      description: 'AI, technology, creative tools, editing and new skills.',
      tag: '02',
    },
    {
      title: 'REFLECT',
      description: 'Life lessons, observations, personal notes and ideas.',
      tag: '03',
    },
  ];

  return (
    <section
      id="space"
      className="relative py-24 sm:py-32 px-6 sm:px-12 max-w-5xl mx-auto border-t border-[#1A1A1A]"
    >
      {/* 01 / THE SPACE Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-6 mb-16 sm:mb-20"
      >
        <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#888888]">
          01 / THE SPACE
        </p>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-[#E6E1D6] font-editorial italic leading-[1.3] tracking-tight max-w-3xl">
          “A personal digital world for what I create, explore, learn, and reflect upon.”
        </h2>
      </motion.div>

      {/* CREATE · LEARN · REFLECT Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-8"
      >
        {/* Subtle Section Divider */}
        <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]">
          <h3 className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#E6E1D6] uppercase">
            CREATE · LEARN · REFLECT
          </h3>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#888888] font-mono">
            THREE PILLARS
          </span>
        </div>

        {/* 3 Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {pillars.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg sm:text-xl font-bold tracking-[0.15em] text-[#E6E1D6] uppercase">
                  {item.title}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#888888] font-mono">
                  {item.tag} //
                </span>
              </div>
              <p className="text-sm text-[#888888] leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

