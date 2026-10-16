import React from 'react';
import { ArrowUpRight, Compass, Clock, MapPin, Coffee } from 'lucide-react';

interface FindYourMomentSectionProps {
  onFindMood: () => void;
  onExploreCollection: () => void;
}

export const FindYourMomentSection: React.FC<FindYourMomentSectionProps> = ({
  onFindMood,
  onExploreCollection,
}) => {
  return (
    <section className="py-24 border-t border-[#2D201C]/10 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Banner Container */}
        <div className="border border-[#2D201C]/15 bg-[#FFF9F1] p-8 sm:p-14 lg:p-16 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B97849] font-semibold mb-4">
                <span>The Invitation</span>
                <span aria-hidden="true">·</span>
                <span>Your Next Cup</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2D201C] font-normal tracking-tight mb-6 leading-[1.12]">
                YOUR NEXT LITTLE COFFEE MOMENT STARTS HERE.
              </h2>

              <p className="text-base sm:text-lg text-[#2D201C]/80 leading-relaxed font-normal mb-8 max-w-xl">
                Whether you have twenty hurried minutes before a meeting or a quiet Saturday morning with nowhere else to be, there’s a cup crafted for the way you feel.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onFindMood}
                  className="px-7 py-3.5 bg-[#2D201C] text-[#FFF9F1] text-xs uppercase tracking-widest font-semibold hover:bg-[#B97849] transition-all duration-200 cursor-pointer shadow-sm active:translate-y-0.5"
                >
                  Find Your Mood
                </button>
                <button
                  onClick={onExploreCollection}
                  className="px-7 py-3.5 border border-[#2D201C]/30 text-[#2D201C] text-xs uppercase tracking-widest font-semibold hover:border-[#2D201C] hover:bg-[#2D201C]/5 transition-all duration-200 cursor-pointer"
                >
                  Explore Collection
                </button>
              </div>
            </div>

            {/* Right: Concept Atelier Details (Clearly labeled concept notes) */}
            <div className="lg:col-span-5 bg-[#F5EFE6] border border-[#2D201C]/10 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#2D201C]/10 text-xs text-[#2D201C]/60 mb-6">
                  <span className="uppercase tracking-widest font-semibold text-[#B97849]">
                    Concept Atelier Note
                  </span>
                  <span>Flagship Concept</span>
                </div>

                <h3 className="font-serif text-2xl text-[#2D201C] font-normal mb-4">
                  The Mindful Tasting Bar
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-[#2D201C]/75 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#B97849] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#2D201C] font-medium">Concept Tasting Room</strong>
                      <span>Artisanal Coffee & Emotional Pairing Lab</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#B97849] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#2D201C] font-medium">Brewing Rituals</strong>
                      <span>Slow Mornings from 07:30 · Evening Affogatos till 22:00</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Coffee className="w-4 h-4 text-[#B97849] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-[#2D201C] font-medium">The Barista Promise</strong>
                      <span>Single-estate beans, hand-steamed oat & dairy, zero rush</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#2D201C]/10 text-[11px] text-[#2D201C]/50 italic">
                *Fictional concept café created for the MOODBREW brand experience.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
