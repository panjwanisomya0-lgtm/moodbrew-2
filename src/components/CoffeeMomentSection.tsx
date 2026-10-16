import React from 'react';

export const CoffeeMomentSection: React.FC = () => {
  return (
    <section className="relative py-32 bg-[#2D201C] text-[#FFF9F1] overflow-hidden">
      {/* Background Atmosphere Image with High-Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/mood_coffee_moment_1792162188907.jpg"
          alt="Quiet coffee moment beside an old European cafe window in morning sunlight"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-105"
        />
        <div className="absolute inset-0 bg-radial from-transparent via-[#2D201C]/50 to-[#2D201C]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center justify-center">
        
        <span className="text-xs uppercase tracking-[0.35em] text-[#B9CFD8] font-semibold mb-6">
          A Little Coffee Moment
        </span>

        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#FFF9F1] mb-8 leading-[1.1] text-balance max-w-4xl">
          TAKE A MOMENT. MAKE IT YOURS.
        </h2>

        <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-[#FFF9F1]/85 max-w-2xl leading-relaxed font-light mb-12">
          “Not every moment needs a plan. Sometimes, a good cup is enough.”
        </p>

        {/* Minimal Typographic Ornament */}
        <div className="flex items-center gap-4 text-[#FFF9F1]/40 text-xs tracking-widest uppercase">
          <span className="w-12 h-px bg-[#FFF9F1]/30" />
          <span>Sip · Breathe · Be Present</span>
          <span className="w-12 h-px bg-[#FFF9F1]/30" />
        </div>

      </div>
    </section>
  );
};
