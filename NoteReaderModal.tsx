import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Note } from '../types';
import { X, Clock, Calendar, Bookmark, Share2, Check, ArrowLeft } from 'lucide-react';

interface NoteReaderModalProps {
  note: Note | null;
  onClose: () => void;
}

export const NoteReaderModal: React.FC<NoteReaderModalProps> = ({ note, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!note) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const totalHeight = target.scrollHeight - target.clientHeight;
    if (totalHeight > 0) {
      setScrollProgress((target.scrollTop / totalHeight) * 100);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-6 md:p-10 overflow-hidden">
        
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 20 }}
          transition={{ duration: 0.35 }}
          className="relative w-full max-w-4xl h-full sm:h-auto sm:max-h-[90vh] bg-[#141414] border border-[#1A1A1A] shadow-2xl flex flex-col z-10 text-[#E6E1D6] overflow-hidden"
        >
          {/* Scroll Progress Bar */}
          <div className="w-full h-0.5 bg-[#1A1A1A] sticky top-0 left-0 right-0 z-30">
            <div
              className="h-full bg-[#E6E1D6] transition-all duration-150 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>

          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-[#1A1A1A] bg-[#141414]/95 backdrop-blur-sm z-20">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#888888] hover:text-[#E6E1D6] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>RETURN TO NOTES</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2 text-[#888888] hover:text-[#E6E1D6] hover:bg-white/5 rounded-full transition-colors flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em]"
                title="Copy Link"
              >
                {copied ? <Check className="w-4 h-4 text-[#E6E1D6]" /> : <Share2 className="w-4 h-4" />}
                <span className="hidden sm:inline">{copied ? 'COPIED' : 'SHARE'}</span>
              </button>

              <button
                id="close-note-reader-btn"
                onClick={onClose}
                className="p-2 text-[#888888] hover:text-[#E6E1D6] hover:bg-white/5 rounded-full transition-colors"
                aria-label="Close reader"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Reader Area */}
          <div
            onScroll={handleScroll}
            className="flex-1 overflow-y-auto px-6 sm:px-14 py-10 sm:py-12 space-y-10"
          >
            {/* Note Meta */}
            <div className="space-y-4 border-b border-[#1A1A1A] pb-8">
              <div className="flex flex-wrap items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-[#888888]">
                <span className="text-[#E6E1D6] px-2.5 py-0.5 bg-black/40 border border-white/10 uppercase">
                  {note.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {note.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {note.readTime}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold font-editorial text-[#E6E1D6] leading-[1.2]">
                {note.title}
              </h1>

              <p className="text-lg text-[#888888] font-light leading-relaxed italic font-editorial">
                "{note.excerpt}"
              </p>
            </div>

            {/* Note Body */}
            <div className="space-y-6 text-base sm:text-lg text-[#888888] leading-relaxed font-normal">
              <p className="font-medium text-[#E6E1D6]">
                {note.content.intro}
              </p>

              {note.content.bodyParagraphs.map((paragraph, index) => (
                <p key={index} className="text-[#888888] leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Pull Quote */}
              {note.content.pullQuote && (
                <div className="my-10 p-6 sm:p-8 bg-[#0A0A0A] border border-[#1A1A1A]">
                  <p className="text-xl sm:text-2xl font-editorial italic text-[#E6E1D6] leading-snug">
                    "{note.content.pullQuote}"
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#888888] opacity-60 mt-3">
                    — GOPAL SINGH, {note.date}
                  </p>
                </div>
              )}

              {/* Key Takeaways */}
              {note.content.takeaways && (
                <div className="mt-10 p-6 sm:p-8 bg-[#0A0A0A] border border-[#1A1A1A] space-y-4">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#E6E1D6]">
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>KEY TAKEAWAYS & PRACTICES</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-[#888888]">
                    {note.content.takeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-[#E6E1D6] select-none">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Note Footer */}
            <div className="pt-10 border-t border-[#1A1A1A] flex flex-col sm:flex-row sm:items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#888888] gap-4">
              <div className="flex items-center gap-2">
                <span>TAGS:</span>
                {note.tags.map((t, idx) => (
                  <span key={idx} className="text-[#888888] bg-[#0A0A0A] px-2 py-0.5 border border-[#1A1A1A]">
                    #{t}
                  </span>
                ))}
              </div>

              <span>STILL BECOMING · ESSAY NO. {note.id.toUpperCase()}</span>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
