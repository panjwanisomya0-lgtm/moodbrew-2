import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#2D201C] text-[#FFF9F1] pt-20 pb-12 border-t border-[#FFF9F1]/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Footer Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-16 border-b border-[#FFF9F1]/10">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#FFF9F1] mb-4">
              GOOD MOOD. GOOD COFFEE. SEE YOU SOON.
            </h2>
            <p className="font-serif italic text-lg sm:text-xl text-[#FFF9F1]/70 font-light">
              “Whatever today feels like, there’s a cup for it.”
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest font-semibold text-[#FFF9F1]/75">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#B9CFD8] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('discover-mood')}
              className="hover:text-[#B9CFD8] transition-colors cursor-pointer"
            >
              Discover Your Mood
            </button>
            <button
              onClick={() => onNavigate('collection')}
              className="hover:text-[#B9CFD8] transition-colors cursor-pointer"
            >
              Coffee Collection
            </button>
            <button
              onClick={() => onNavigate('mood-letter')}
              className="hover:text-[#B9CFD8] transition-colors cursor-pointer"
            >
              The MOOD LETTER
            </button>
            <button
              onClick={() => onNavigate('story')}
              className="hover:text-[#B9CFD8] transition-colors cursor-pointer"
            >
              Our Story
            </button>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#FFF9F1]/50 font-normal">
          <div className="flex items-center gap-2">
            <span className="font-serif font-semibold tracking-wider text-[#FFF9F1]/80">MOODBREW</span>
            <span aria-hidden="true">·</span>
            <span>There’s a cup for the feeling.</span>
          </div>

          <div>
            <span>© {new Date().getFullYear()} MOODBREW Atelier. All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
