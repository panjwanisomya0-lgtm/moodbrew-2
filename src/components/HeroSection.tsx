import React from 'react';
import { ArrowDownRight, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onFindMood: () => void;
  onExploreCollection: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onFindMood,
  onExploreCollection,
}) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        {/* Asymmetrical Editorial 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column: Expressive Typography & Brand Manifesto */}
          <div className="lg:col-span-6 flex flex-col justify-between py-4 lg:py-8 z-10">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B97849] font-semibold mb-6">
                <span>The Mood-Based Coffee Atelier</span>
                <span aria-hidden="true">·</span>
                <span>Est. 2026</span>
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-normal leading-[1.08] tracking-tight text-[#2D201C] text-balance mb-8">
                THERE’S A CUP FOR THE FEELING.
              </h1>

              <p className="text-base sm:text-lg text-[#2D201C]/80 leading-relaxed max-w-xl font-normal mb-10">
                Slow mornings, long days, little celebrations. Whatever today feels like, there’s a coffee for your kind of moment.
              </p>

              {/* Functional CTA Pair */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onFindMood}
                  className="group px-7 py-3.5 bg-[#2D201C] text-[#FFF9F1] text-xs uppercase tracking-widest font-semibold hover:bg-[#B97849] transition-all duration-200 flex items-center gap-3 cursor-pointer shadow-sm active:translate-y-0.5"
                >
                  <span>Find Your Mood</span>
                  <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </button>

                <button
                  onClick={onExploreCollection}
                  className="px-7 py-3.5 border border-[#2D201C]/30 text-[#2D201C] text-xs uppercase tracking-widest font-semibold hover:border-[#2D201C] hover:bg-[#2D201C]/5 transition-all duration-200 cursor-pointer"
                >
                  Explore the Collection
                </button>
              </div>
            </div>

            {/* Editorial Footnote Note */}
            <div className="pt-12 mt-12 border-t border-[#2D201C]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#2D201C]/60">
              <div className="flex items-center gap-2">
                <span className="font-serif italic text-sm text-[#2D201C]">“Your mood. Your moment. Your coffee.”</span>
              </div>
              <div className="flex items-center gap-2">
                <span>18 Signature Cups</span>
                <span aria-hidden="true">·</span>
                <span>Personalized Letters</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Specialty Coffee Editorial Photo */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="w-full relative group">
              {/* Asymmetric Offset Backing */}
              <div className="absolute -inset-2 sm:-inset-4 bg-[#B97849]/10 -rotate-1 rounded-none -z-10 transition-transform group-hover:rotate-0 duration-500" />
              
              <div className="relative overflow-hidden aspect-4/3 sm:aspect-16/11 lg:aspect-4/3 w-full border border-[#2D201C]/10 shadow-lg bg-[#FFF9F1]">
                <img
                  src="/images/hero_moodbrew_coffee_1792162188262.jpg"
                  alt="Specialty latte art on a warm rustic wooden café table in morning sunlight"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
                />
                
                {/* Subtle natural vignette & caption */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#2D201C]/80 via-[#2D201C]/40 to-transparent text-[#FFF9F1] flex items-end justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#B9CFD8]">Morning Light & Honey Oat</span>
                    <p className="font-serif text-lg font-medium">Quiet beginning in the atelier</p>
                  </div>
                  <span className="font-mono text-xs tracking-wider opacity-75">№ 01</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
