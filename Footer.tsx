import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  return (
    <footer id="main-footer" className="w-full py-16 px-6 sm:px-12 border-t border-[#1A1A1A] bg-[#0A0A0A] text-[#888888]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        
        {/* Left Branding & Tagline */}
        <div className="space-y-1">
          <div className="text-xs font-bold tracking-[0.25em] text-[#E6E1D6] uppercase">
            GOPAL SINGH
          </div>
          <div className="text-xs font-editorial italic text-[#888888]">
            Still becoming.
          </div>
        </div>

        {/* Right Copyright & Back to Top */}
        <div className="flex flex-col sm:items-end space-y-2">
          <div className="text-[11px] font-mono text-[#666666]">
            © 2026 Gopal Singh
          </div>
          <button
            id="back-to-top-btn"
            onClick={onScrollToTop}
            className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-[#888888] hover:text-[#E6E1D6] transition-colors focus:outline-none"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
