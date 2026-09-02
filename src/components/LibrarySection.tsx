import React from 'react';
import { BookOpen, ArrowDownToLine, Eye } from 'lucide-react';

export const LibrarySection: React.FC = () => (
  <section id="library" className="border-t border-white/10 bg-[#0d0d0d]">
    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div>
          <p className="text-[10px] tracking-[.28em] uppercase text-white/45 mb-3">COMING NEXT</p>
          <h2 className="font-editorial italic text-5xl sm:text-7xl font-light">Books &<br/>Library.</h2>
          <p className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-white/60">
            This space is being prepared for books, PDFs, and other long-form work. When new material is ready, visitors will be able to read it online or download it.
          </p>
          <p className="mt-5 text-sm text-white/40">Nothing has been filled with fake content. We’ll add your real books later.</p>
        </div>
        <div className="border border-white/10 p-6 sm:p-8 bg-[#111]">
          <div className="aspect-[16/10] border border-dashed border-white/15 flex flex-col items-center justify-center text-center p-8">
            <div className="w-14 h-14 rounded-full border border-white/15 flex items-center justify-center"><BookOpen className="w-6 h-6 text-white/65"/></div>
            <h3 className="mt-5 text-lg">Your library will live here.</h3>
            <p className="mt-2 text-sm text-white/45 max-w-xs">Each book can have its own cover, description, online reader, and PDF download.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="border border-white/10 p-4 text-center text-xs text-white/55"><Eye className="w-4 h-4 mx-auto mb-2"/>READ ONLINE</div>
            <div className="border border-white/10 p-4 text-center text-xs text-white/55"><ArrowDownToLine className="w-4 h-4 mx-auto mb-2"/>DOWNLOAD PDF</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
