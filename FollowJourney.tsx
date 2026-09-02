import React from 'react';
import { Instagram, Youtube, Facebook, MessageCircle, Mail, Video, ArrowUpRight } from 'lucide-react';

const SOCIALS = [
  ['Instagram','https://www.instagram.com/gopalsingh.pn?igsi=bzZrZ2pxMXZ4NTdo',Instagram],
  ['YouTube','https://youtube.com/@gopalsingh-rr6yi',Youtube],
  ['TikTok','https://www.tiktok.com/@gopalsingh_pn?_r=1&_t=ZS-996UkYVRlnY',Video],
  ['Facebook','https://www.facebook.com/share/1BruyKJRTw/',Facebook],
] as const;

export const FollowJourney: React.FC = () => (
  <section id="connect" className="border-t border-white/10 bg-[#f1eee7] text-[#101010]">
    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28">
      <div className="max-w-3xl">
        <p className="text-[10px] tracking-[.28em] uppercase text-black/45 mb-4">STAY CONNECTED</p>
        <h2 className="font-editorial italic text-5xl sm:text-7xl font-light leading-[.95]">Follow the journey.</h2>
        <p className="mt-6 text-base sm:text-xl leading-relaxed text-black/65 max-w-2xl">See what I’m creating, learning, and exploring. The easiest way to keep up with me is through my social channels.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-12">
        {SOCIALS.map(([name,url,Icon]) => <a key={name} href={url} target="_blank" rel="noopener noreferrer"
          className="group flex items-center justify-between border border-black/15 bg-white/40 px-5 py-5 hover:bg-black hover:text-white transition-colors">
          <span className="flex items-center gap-3 text-sm font-medium"><Icon className="w-5 h-5"/>{name}</span><ArrowUpRight className="w-4 h-4"/>
        </a>)}
      </div>
      <div className="mt-10 pt-8 border-t border-black/15 flex flex-col sm:flex-row gap-3">
        <a href="mailto:gopalsingh.pn@gmail.com" className="inline-flex items-center justify-center gap-3 bg-black text-white px-6 py-4 text-xs font-semibold tracking-[.16em] uppercase hover:bg-black/80">
          <Mail className="w-4 h-4"/> Email Gopal
        </a>
        <a href="https://wa.me/9779707727608" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 border border-black/25 px-6 py-4 text-xs font-semibold tracking-[.16em] uppercase hover:bg-black/5">
          <MessageCircle className="w-4 h-4"/> WhatsApp
        </a>
      </div>
    </div>
  </section>
);
