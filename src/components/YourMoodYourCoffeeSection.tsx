import React from 'react';
import { MOOD_OPTIONS, COFFEE_COLLECTION, CoffeeItem } from '../data/coffeeData';
import { ArrowRight, Sparkles, Coffee } from 'lucide-react';

interface YourMoodYourCoffeeSectionProps {
  selectedMoodId: string;
  onMeetCoffee: (coffee: CoffeeItem) => void;
  onBrowseAll: () => void;
}

export const YourMoodYourCoffeeSection: React.FC<YourMoodYourCoffeeSectionProps> = ({
  selectedMoodId,
  onMeetCoffee,
  onBrowseAll,
}) => {
  const currentMood =
    MOOD_OPTIONS.find((m) => m.id === selectedMoodId) || MOOD_OPTIONS[0];
  const matchedCoffee =
    COFFEE_COLLECTION.find((c) => c.id === currentMood.coffeeId) || COFFEE_COLLECTION[0];

  return (
    <section id="recommended-coffee" className="py-24 border-t border-[#2D201C]/10 bg-[#F5EFE6] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B97849] font-semibold mb-3">
              <span>Your Matched Cup</span>
              <span aria-hidden="true">·</span>
              <span>Pairing Experience</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2D201C] font-normal tracking-tight">
              MADE FOR THE WAY YOU FEEL.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#2D201C]/70 max-w-md">
            Every mood carries its own chemistry. Here is the handcrafted cup curated for your current headspace.
          </p>
        </div>

        {/* Featured Recommendation Showcase Container */}
        <div className="relative border border-[#2D201C]/15 bg-[#FFF9F1] shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left: Large High-Fidelity Dedicated Coffee Image */}
            <div className="lg:col-span-6 relative aspect-4/3 sm:aspect-16/11 lg:aspect-auto min-h-[380px] lg:min-h-[520px] overflow-hidden bg-[#2D201C]/5">
              <img
                key={matchedCoffee.id}
                src={matchedCoffee.image}
                alt={matchedCoffee.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-700 ease-out hover:scale-103"
              />

              {/* Mood Overlay Badge (Unboxed text with border accent) */}
              <div className="absolute top-6 left-6 z-10 bg-[#2D201C]/85 backdrop-blur-md text-[#FFF9F1] px-4 py-2 border-l-2 border-[#B97849]">
                <span className="text-[11px] uppercase tracking-widest text-[#FFF9F1]/70 block">
                  Chosen Feeling
                </span>
                <span className="font-serif text-base font-medium">
                  {currentMood.name}
                </span>
              </div>

              {/* Temperature & Origin tag */}
              <div className="absolute bottom-6 left-6 text-xs text-[#FFF9F1] bg-black/60 backdrop-blur-xs px-3 py-1.5 flex items-center gap-2">
                <span>{matchedCoffee.temp} Serving</span>
                <span aria-hidden="true">·</span>
                <span>{matchedCoffee.origin}</span>
              </div>
            </div>

            {/* Right: Detailed Emotional Pairing & Flavour Notes */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
              <div>
                {/* Header metadata */}
                <div className="flex items-center justify-between pb-6 border-b border-[#2D201C]/10 text-xs text-[#2D201C]/60 mb-8">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-semibold text-[#2D201C]">
                      Cup № {matchedCoffee.number}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="uppercase tracking-wider font-semibold text-[#B97849]">
                      {matchedCoffee.category} Series
                    </span>
                  </div>
                  <span className="italic font-serif text-[#2D201C]/80">
                    {currentMood.feeling}
                  </span>
                </div>

                {/* Coffee Title */}
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D201C] font-normal tracking-tight mb-6">
                  {matchedCoffee.name}
                </h3>

                {/* Original Emotional Copy */}
                <blockquote className="font-serif italic text-xl sm:text-2xl text-[#2D201C]/90 leading-snug mb-8 border-l border-[#B97849]/40 pl-5">
                  “{matchedCoffee.emotionalCopy}”
                </blockquote>

                {/* Flavour Notes (Zero-pill unboxed clean text) */}
                <div className="space-y-3 mb-10">
                  <span className="text-xs uppercase tracking-widest text-[#2D201C]/50 font-semibold block">
                    Flavour Profile & Notes
                  </span>
                  <p className="text-base font-medium text-[#2D201C]">
                    {matchedCoffee.flavourProfile}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[#2D201C]/75 pt-1">
                    {matchedCoffee.flavourNotes.map((note, i) => (
                      <React.Fragment key={note}>
                        <span>{note}</span>
                        {i < matchedCoffee.flavourNotes.length - 1 && (
                          <span aria-hidden="true" className="text-[#B97849]">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 border-t border-[#2D201C]/10 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onMeetCoffee(matchedCoffee)}
                  className="group px-7 py-3.5 bg-[#2D201C] text-[#FFF9F1] text-xs uppercase tracking-widest font-semibold hover:bg-[#B97849] transition-all duration-200 flex items-center gap-3 cursor-pointer shadow-sm active:translate-y-0.5"
                >
                  <span>Meet Your Coffee</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={onBrowseAll}
                  className="px-6 py-3.5 text-xs uppercase tracking-widest text-[#2D201C]/70 hover:text-[#2D201C] font-semibold transition-colors cursor-pointer"
                >
                  Browse all 18 Coffees
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
