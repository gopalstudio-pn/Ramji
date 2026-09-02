import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const PHOTOS = [
  { src: '/images/gopal-05.webp', alt: 'Gopal Singh outdoors', label: '01 / THE JOURNEY', wide: true },
  { src: '/images/gopal-04.webp', alt: 'Portrait of Gopal Singh', label: '02 / PORTRAIT' },
  { src: '/images/gopal-08.webp', alt: 'Gopal Singh seated outdoors', label: '03 / QUIET MOMENT' },
  { src: '/images/gopal-07.webp', alt: 'Gopal Singh in a black jacket', label: '04 / MOVING FORWARD', wide: true },
  { src: '/images/gopal-03.webp', alt: 'Gopal Singh in red', label: '05 / COLOR & PLACE' },
  { src: '/images/gopal-02.webp', alt: 'Gopal Singh using his phone', label: '06 / EVERYDAY' },
  { src: '/images/gopal-06.webp', alt: 'Gopal Singh sitting on a bench', label: '07 / PAUSE' },
];

export const WorkSection: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (active === null) return;
      if (e.key === 'Escape') setActive(null);
      if (e.key === 'ArrowRight') setActive((active + 1) % PHOTOS.length);
      if (e.key === 'ArrowLeft') setActive((active - 1 + PHOTOS.length) % PHOTOS.length);
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [active]);

  return <section id="work" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32 border-t border-white/10">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
      <div>
        <p className="text-[10px] tracking-[.28em] uppercase text-white/45 mb-3">PERSONAL ARCHIVE</p>
        <h2 className="font-editorial italic text-4xl sm:text-6xl font-light">A few moments<br/>from my journey.</h2>
      </div>
      <p className="max-w-sm text-sm leading-relaxed text-white/55 md:text-right">A personal collection, not stock imagery. More photographs and stories can be added here as this website grows.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      {PHOTOS.map((photo, i) => <motion.button key={photo.src} onClick={() => setActive(i)} whileHover={{y:-3}}
        className={`group relative overflow-hidden bg-[#151515] text-left ${photo.wide ? 'lg:col-span-2' : ''}`}>
        <div className={photo.wide ? 'aspect-[16/10]' : 'aspect-[4/5]'}>
          <img src={photo.src} alt={photo.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/75 to-transparent pt-16">
          <span className="text-[10px] tracking-[.2em] uppercase text-white/80">{photo.label}</span>
        </div>
      </motion.button>)}
    </div>
    <AnimatePresence>
      {active !== null && <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setActive(null)}
        className="fixed inset-0 z-[70] bg-black/95 p-4 sm:p-8 flex items-center justify-center">
        <button onClick={() => setActive(null)} className="absolute right-5 top-5 p-3 text-white/70 hover:text-white" aria-label="Close photo"><X /></button>
        <button onClick={(e)=>{e.stopPropagation();setActive((active-1+PHOTOS.length)%PHOTOS.length)}} className="absolute left-3 sm:left-8 p-3 text-white/70 hover:text-white"><ChevronLeft /></button>
        <button onClick={(e)=>{e.stopPropagation();setActive((active+1)%PHOTOS.length)}} className="absolute right-3 sm:right-8 p-3 text-white/70 hover:text-white"><ChevronRight /></button>
        <motion.img initial={{scale:.97}} animate={{scale:1}} onClick={e=>e.stopPropagation()} src={PHOTOS[active].src} alt={PHOTOS[active].alt}
          className="max-h-[88vh] max-w-[82vw] object-contain shadow-2xl" />
      </motion.div>}
    </AnimatePresence>
  </section>;
};
