import React from 'react';

export const AboutSection: React.FC = () => (
  <section id="about" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32 border-t border-white/10">
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      <div className="lg:col-span-5 order-2 lg:order-1">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#151515]">
          <img src="/images/gopal-04.webp" alt="Gopal Singh" loading="lazy" className="w-full h-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/75 to-transparent pt-20">
            <p className="text-[10px] tracking-[.24em] uppercase text-white/75">GOPAL SINGH · PERSONAL ARCHIVE</p>
          </div>
        </div>
      </div>
      <div className="lg:col-span-7 order-1 lg:order-2">
        <p className="text-[10px] tracking-[.28em] uppercase text-white/45 mb-4">ABOUT ME</p>
        <h2 className="font-editorial italic text-5xl sm:text-7xl font-light leading-[.95]">Curious by nature.<br/>Still learning.</h2>
        <div className="mt-8 space-y-5 max-w-2xl text-base sm:text-lg leading-relaxed text-white/65">
          <p>I’m Gopal Singh. This website is a personal space to share the work, ideas, photographs, and experiences that matter to me.</p>
          <p>I’m interested in learning, creating, exploring new possibilities, and documenting the journey as honestly as I can. I don’t want this site to feel like a finished résumé. It should grow with me.</p>
        </div>
        <div className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-2">
          {['CREATE','LEARN','EXPLORE','REFLECT'].map((x,i)=><div key={x} className="border border-white/10 px-4 py-3 text-[10px] tracking-[.16em] text-white/65">{String(i+1).padStart(2,'0')} · {x}</div>)}
        </div>
      </div>
    </div>
  </section>
);
