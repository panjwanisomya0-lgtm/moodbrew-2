import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F5EFE6]/90 backdrop-blur-md border-b border-[#2D201C]/10 py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single element Brand wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="font-serif text-2xl tracking-[0.2em] font-semibold text-[#2D201C] uppercase whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
        >
          MOODBREW
        </a>

        {/* Zone 2: 4-5 concise single-line text links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2D201C]/80">
          <button
            onClick={() => handleLinkClick('discover-mood')}
            className="hover:text-[#2D201C] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 cursor-pointer"
          >
            Discover Mood
          </button>
          <button
            onClick={() => handleLinkClick('collection')}
            className="hover:text-[#2D201C] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 cursor-pointer"
          >
            Coffee Collection
          </button>
          <button
            onClick={() => handleLinkClick('mood-letter')}
            className="hover:text-[#2D201C] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 cursor-pointer"
          >
            The Mood Letter
          </button>
          <button
            onClick={() => handleLinkClick('story')}
            className="hover:text-[#2D201C] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 cursor-pointer"
          >
            Our Story
          </button>
          <button
            onClick={() => handleLinkClick('journal')}
            className="hover:text-[#2D201C] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 cursor-pointer"
          >
            Mood Journal
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button
            onClick={() => handleLinkClick('discover-mood')}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FFF9F1] bg-[#2D201C] rounded-none hover:bg-[#B97849] transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
          >
            Find Your Cup
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#2D201C] focus-visible:outline-2 focus-visible:outline-[#2D201C]"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5EFE6] border-b border-[#2D201C]/10 px-6 py-6 shadow-lg animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4 text-base font-serif">
            <button
              onClick={() => handleLinkClick('discover-mood')}
              className="text-left text-[#2D201C] py-2 border-b border-[#2D201C]/5"
            >
              Discover Mood
            </button>
            <button
              onClick={() => handleLinkClick('collection')}
              className="text-left text-[#2D201C] py-2 border-b border-[#2D201C]/5"
            >
              Coffee Collection
            </button>
            <button
              onClick={() => handleLinkClick('mood-letter')}
              className="text-left text-[#2D201C] py-2 border-b border-[#2D201C]/5"
            >
              The Mood Letter
            </button>
            <button
              onClick={() => handleLinkClick('story')}
              className="text-left text-[#2D201C] py-2 border-b border-[#2D201C]/5"
            >
              Our Story
            </button>
            <button
              onClick={() => handleLinkClick('journal')}
              className="text-left text-[#2D201C] py-2 border-b border-[#2D201C]/5"
            >
              Mood Journal
            </button>
            <button
              onClick={() => handleLinkClick('discover-mood')}
              className="mt-2 text-center py-3 text-xs uppercase tracking-wider font-sans font-semibold bg-[#2D201C] text-[#FFF9F1]"
            >
              Find Your Cup
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
