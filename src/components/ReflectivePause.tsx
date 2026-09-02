import React from 'react';
import { motion } from 'motion/react';
import { REFLECTIVE_PAUSE_DATA } from '../data/content';

export const ReflectivePause: React.FC = () => {
  return (
    <section
      id="reflective-pause-section"
      className="relative min-h-[60vh] sm:min-h-[75vh] flex flex-col justify-center items-center px-6 sm:px-12 py-32 bg-[#0A0A0A] border-y border-[#1A1A1A] overflow-hidden select-none"
    >
      {/* Background dark radial aura */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(230, 225, 214, 0.03) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-3xl text-center space-y-10 sm:space-y-14 relative z-10">
        
        {/* The Question */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#888888] mb-4">
            INQUIRY
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-light font-editorial text-[#E6E1D6] tracking-tight">
            {REFLECTIVE_PAUSE_DATA.question}
          </h2>
        </motion.div>

        {/* The Pause & Realization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="space-y-4"
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-editorial italic text-[#E6E1D6] opacity-90 font-light">
            "{REFLECTIVE_PAUSE_DATA.pause}"
          </p>
          <p className="text-xs uppercase tracking-[0.25em] text-[#888888] pt-2">
            {REFLECTIVE_PAUSE_DATA.conclusion}
          </p>
        </motion.div>

        {/* Quiet Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="text-xs text-[#888888] opacity-50 max-w-md mx-auto leading-relaxed pt-6 border-t border-[#1A1A1A]"
        >
          {REFLECTIVE_PAUSE_DATA.subtext}
        </motion.p>

      </div>
    </section>
  );
};
