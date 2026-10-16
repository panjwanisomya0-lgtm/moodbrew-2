import React from 'react';
import { MOOD_OPTIONS, MoodOption } from '../data/coffeeData';
import { ArrowUpRight, Check } from 'lucide-react';

interface DiscoverMoodSectionProps {
  selectedMoodId: string;
  onSelectMood: (moodId: string) => void;
}

export const DiscoverMoodSection: React.FC<DiscoverMoodSectionProps> = ({
  selectedMoodId,
  onSelectMood,
}) => {
  return (
    <section id="discover-mood" className="py-24 border-t border-[#2D201C]/10 bg-[#FFF9F1]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B97849] font-semibold mb-3">
            <span>Emotional Coffee Mapping</span>
            <span aria-hidden="true">·</span>
            <span>Step 01</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2D201C] font-normal tracking-tight text-balance mb-4">
            SO, HOW ARE WE FEELING?
          </h2>
          <p className="text-base sm:text-lg text-[#2D201C]/75 font-normal leading-relaxed">
            Pick the feeling that finds you today. We’ll find the cup that belongs with it.
          </p>
        </div>

        {/* Asymmetrical, Diverse Mood Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          
          {MOOD_OPTIONS.map((mood, idx) => {
            const isSelected = selectedMoodId === mood.id;

            // Varied editorial spans & arrangements
            // 01: md:col-span-7 (wide landscape)
            // 02: md:col-span-5 (portrait side)
            // 03: md:col-span-4 (compact block)
            // 04: md:col-span-4 (center focal)
            // 05: md:col-span-4 (warm block)
            // 06: md:col-span-12 (wide bold feature banner)
            const colSpan =
              idx === 0
                ? 'md:col-span-7'
                : idx === 1
                ? 'md:col-span-5'
                : idx === 2
                ? 'md:col-span-4'
                : idx === 3
                ? 'md:col-span-4'
                : idx === 4
                ? 'md:col-span-4'
                : 'md:col-span-12';

            return (
              <button
                key={mood.id}
                onClick={() => onSelectMood(mood.id)}
                className={`group relative text-left p-6 sm:p-8 transition-all duration-300 border cursor-pointer flex flex-col justify-between ${colSpan} ${
                  isSelected
                    ? 'border-[#2D201C] shadow-md ring-2 ring-[#2D201C]/15 bg-white'
                    : 'border-[#2D201C]/15 bg-[#FFF9F1] hover:border-[#2D201C]/40 hover:bg-white'
                }`}
                style={{
                  borderTopColor: isSelected ? mood.colorHex : undefined,
                  borderTopWidth: isSelected ? '3px' : '1px',
                }}
              >
                {/* Top Row: Editorial Index & Feeling Indicator */}
                <div className="flex items-center justify-between w-full mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs tracking-wider text-[#2D201C]/60">
                      Mood {mood.number}
                    </span>
                    <span aria-hidden="true" className="text-[#2D201C]/30">/</span>
                    <span className="text-xs font-semibold tracking-wider uppercase text-[#2D201C]/80">
                      {mood.colorName}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Visual Color Swatch */}
                    <span
                      className="w-3.5 h-3.5 rounded-full inline-block border border-[#2D201C]/20 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: mood.colorHex }}
                    />
                    {isSelected ? (
                      <span className="w-5 h-5 rounded-full bg-[#2D201C] text-[#FFF9F1] flex items-center justify-center">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </span>
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-[#2D201C]/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#2D201C]" />
                    )}
                  </div>
                </div>

                {/* Main Mood Headline */}
                <div className="my-auto py-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#2D201C] font-normal mb-2 group-hover:text-[#B97849] transition-colors">
                    {mood.name}
                  </h3>
                  <p className="text-sm text-[#2D201C]/75 leading-relaxed">
                    {mood.feeling}
                  </p>
                </div>

                {/* Bottom Row: Subtle Kicker */}
                <div className="pt-6 mt-6 border-t border-[#2D201C]/10 flex items-center justify-between text-xs text-[#2D201C]/60 w-full">
                  <span className="italic font-serif">{mood.tagline}</span>
                  <span className="font-medium text-[#2D201C] group-hover:translate-x-1 transition-transform">
                    {isSelected ? 'Currently Selected' : 'Choose Mood →'}
                  </span>
                </div>
              </button>
            );
          })}

        </div>

      </div>
    </section>
  );
};
