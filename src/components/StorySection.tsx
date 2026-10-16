import React from 'react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-28 border-t border-[#2D201C]/10 bg-[#F5EFE6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Distinctive Atelier Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative border border-[#2D201C]/10 bg-[#FFF9F1] shadow-xl overflow-hidden aspect-4/3 sm:aspect-16/11">
              <img
                src="/images/cafe_story_interior_1792162190767.jpg"
                alt="Inside the MOODBREW coffee atelier with warm wood, ceramic cups, and mindful barista craft"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D201C]/40 via-transparent to-transparent" />
            </div>

            {/* Subtle editorial sticker */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[#2D201C] text-[#FFF9F1] p-6 max-w-[220px] shadow-lg border border-[#FFF9F1]/20">
              <span className="text-[10px] uppercase tracking-widest text-[#B97849] font-bold block mb-1">
                The Atelier
              </span>
              <p className="font-serif italic text-sm text-[#FFF9F1]/90">
                Brewed with intention, served with gentleness.
              </p>
            </div>
          </div>

          {/* Right: Editorial Narrative Story */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B97849] font-semibold mb-4">
              <span>Our Philosophy</span>
              <span aria-hidden="true">·</span>
              <span>The MOODBREW Story</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-normal text-[#2D201C] tracking-tight leading-[1.15] mb-8 text-balance">
              COFFEE IS THE CUP. THE MOMENT IS YOURS.
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-[#2D201C]/80 font-normal leading-relaxed">
              <p>
                MOODBREW began with a little thought: <strong className="font-medium text-[#2D201C]">what if choosing coffee felt more personal?</strong>
              </p>
              <p>
                Some days need a gentle beginning. Some need a fresh start. Others call for a little comfort or something unexpected.
              </p>
              <p>
                We believe coffee can become part of those everyday moments. Not just another order, but a small ritual that makes the day feel a little more like yours.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-[#2D201C]/15 flex items-center justify-between">
              <div>
                <p className="font-serif italic text-lg text-[#2D201C]">
                  “Whatever the mood, there’s a cup for the feeling.”
                </p>
                <span className="text-xs uppercase tracking-widest text-[#2D201C]/50 mt-1 block">
                  The MOODBREW Manifesto
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
