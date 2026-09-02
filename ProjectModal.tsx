import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { X, MapPin, Calendar, Camera, Quote, ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
    setZoomed(false);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (project && project.galleryImages.length > 1) {
        if (e.key === 'ArrowRight') {
          setActiveImageIndex((prev) => (prev + 1) % project.galleryImages.length);
        }
        if (e.key === 'ArrowLeft') {
          setActiveImageIndex((prev) => (prev - 1 + project.galleryImages.length) % project.galleryImages.length);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const currentMedia = project.galleryImages[activeImageIndex] || { url: project.coverImage, caption: '' };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-6 md:p-10 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 15 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-6xl min-h-screen sm:min-h-0 sm:max-h-[92vh] bg-[#141414] border border-[#1A1A1A] overflow-y-auto shadow-2xl flex flex-col z-10 text-[#E6E1D6]"
        >
          {/* Top Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#141414]/95 backdrop-blur-sm border-b border-[#1A1A1A]">
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#E6E1D6]">
                {project.categoryLabel}
              </span>
              <span className="text-xs text-[#888888] opacity-40">/</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#888888]">
                {project.year}
              </span>
            </div>

            <button
              id="close-project-modal-btn"
              onClick={onClose}
              className="p-2 text-[#888888] hover:text-[#E6E1D6] hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E6E1D6]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-10 space-y-10">
            
            {/* Header Title */}
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#E6E1D6] font-editorial mb-3">
                {project.title}
              </h2>
              <p className="text-base sm:text-lg text-[#888888] max-w-3xl leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Gallery Image Display */}
            <div className="space-y-4">
              <div className="relative w-full aspect-[16/10] sm:aspect-[21/10] bg-black overflow-hidden border border-[#1A1A1A] flex items-center justify-center">
                <img
                  src={currentMedia.url}
                  alt={currentMedia.caption || project.title}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    zoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
                  }`}
                  onClick={() => setZoomed(!zoomed)}
                  referrerPolicy="no-referrer"
                />

                {/* Navigation arrows if multiple images */}
                {project.galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setActiveImageIndex(
                          (prev) => (prev - 1 + project.galleryImages.length) % project.galleryImages.length
                        )
                      }
                      className="absolute left-4 p-2.5 bg-black/70 border border-white/10 text-[#E6E1D6] hover:bg-black/90 transition-colors"
                      aria-label="Previous image"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveImageIndex((prev) => (prev + 1) % project.galleryImages.length)
                      }
                      className="absolute right-4 p-2.5 bg-black/70 border border-white/10 text-[#E6E1D6] hover:bg-black/90 transition-colors"
                      aria-label="Next image"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </>
                )}

                <button
                  onClick={() => setZoomed(!zoomed)}
                  className="absolute bottom-4 right-4 p-2 bg-black/70 border border-white/10 text-[10px] uppercase tracking-[0.2em] text-[#888888] hover:text-[#E6E1D6] flex items-center gap-1.5"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{zoomed ? 'RESET' : 'INSPECT'}</span>
                </button>
              </div>

              {/* Caption & Indicator */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#888888] gap-2 pt-2">
                <span>{currentMedia.caption || `Frame ${activeImageIndex + 1} of ${project.galleryImages.length}`}</span>
                {project.galleryImages.length > 1 && (
                  <div className="flex items-center gap-2">
                    {project.galleryImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`h-1 transition-all ${
                          idx === activeImageIndex ? 'w-6 bg-[#E6E1D6]' : 'w-2 bg-[#2A2A2A]'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Description & Commentary */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-[#1A1A1A]">
              <div className="lg:col-span-7 space-y-6">
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#888888]">
                  Context & Concept
                </h4>
                <p className="text-base text-[#888888] leading-relaxed">
                  {project.description}
                </p>

                {project.personalThought && (
                  <div className="p-6 bg-[#0A0A0A] border border-[#1A1A1A] space-y-2">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#888888]">
                      <Quote className="w-3.5 h-3.5 text-[#E6E1D6]" />
                      <span>PERSONAL REFLECTION</span>
                    </div>
                    <p className="text-sm font-editorial italic text-[#E6E1D6] leading-relaxed">
                      "{project.personalThought}"
                    </p>
                  </div>
                )}
              </div>

              {/* Technical / Metadata Column */}
              <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-[#1A1A1A] lg:pl-8">
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#888888]">
                  Field Metadata
                </h4>

                <div className="space-y-4 text-xs">
                  {project.location && (
                    <div className="flex items-start justify-between py-2 border-b border-[#1A1A1A]">
                      <span className="text-[#888888] flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        Location
                      </span>
                      <span className="text-[#E6E1D6] text-right">{project.location}</span>
                    </div>
                  )}

                  <div className="flex items-start justify-between py-2 border-b border-[#1A1A1A]">
                    <span className="text-[#888888] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      Timeline
                    </span>
                    <span className="text-[#E6E1D6] text-right">{project.year}</span>
                  </div>

                  {project.techDetails &&
                    project.techDetails.map((detail, idx) => (
                      <div key={idx} className="flex items-start justify-between py-2 border-b border-[#1A1A1A]">
                        <span className="text-[#888888]">{detail.label}</span>
                        <span className="text-[#E6E1D6] text-right">{detail.value}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
