import React, { useState } from 'react';
import { JOURNAL_ENTRIES } from '../data/coffeeData';
import { BookOpen, Quote, ChevronRight } from 'lucide-react';

export const MoodJournalSection: React.FC = () => {
  const [activeEntry, setActiveEntry] = useState(0);

  return (
    <section id="journal" className="py-24 border-t border-[#2D201C]/10 bg-[#FFF9F1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B97849] font-semibold mb-3">
            <span>Everyday Reflections</span>
            <span aria-hidden="true">·</span>
            <span>The Mood Journal</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2D201C] font-normal tracking-tight mb-4">
            LITTLE THOUGHTS FOR THE IN-BETWEEN.
          </h2>
          <p className="text-base sm:text-lg text-[#2D201C]/75 font-normal leading-relaxed">
            Short reflections connected to everyday coffee moments. Pages from an ongoing conversation between life and the cup.
          </p>
        </div>

        {/* Editorial Journal Presentation: Split Index & Reader */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Index Table of Reflections */}
          <div className="lg:col-span-5 flex flex-col justify-between border border-[#2D201C]/15 bg-[#F5EFE6]/80 p-6 sm:p-8">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#2D201C]/10 text-xs text-[#2D201C]/60 mb-6">
                <span className="uppercase tracking-widest font-semibold">Table of Reflections</span>
                <span>Issue 01</span>
              </div>

              <div className="space-y-2">
                {JOURNAL_ENTRIES.map((entry, idx) => {
                  const isActive = activeEntry === idx;
                  return (
                    <button
                      key={entry.title}
                      onClick={() => setActiveEntry(idx)}
                      className={`w-full text-left p-4 transition-all duration-200 cursor-pointer flex items-center justify-between border ${
                        isActive
                          ? 'bg-[#2D201C] text-[#FFF9F1] border-[#2D201C] shadow-sm'
                          : 'bg-[#FFF9F1]/80 text-[#2D201C] border-[#2D201C]/10 hover:border-[#2D201C]/30 hover:bg-white'
                      }`}
                    >
                      <div>
                        <span className={`text-[11px] uppercase tracking-wider block font-mono ${isActive ? 'text-[#B9CFD8]' : 'text-[#B97849]'}`}>
                          № 0{idx + 1} · {entry.theme}
                        </span>
                        <h4 className="font-serif text-lg font-medium mt-0.5">
                          {entry.title}
                        </h4>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-1 text-[#FFF9F1]' : 'text-[#2D201C]/30'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#2D201C]/10 text-xs text-[#2D201C]/60 italic font-serif">
              Read while your cup is still warm.
            </div>
          </div>

          {/* Right Column: Featured Journal Entry Page */}
          <div className="lg:col-span-7 border border-[#2D201C]/15 bg-[#FFF9F1] p-8 sm:p-14 flex flex-col justify-between shadow-md relative overflow-hidden">
            {/* Subtle paper watermark texture */}
            <div className="absolute top-8 right-8 font-mono text-xs text-[#2D201C]/15 pointer-events-none select-none">
              PAGE 0{activeEntry + 1}
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#B97849] font-bold mb-8">
                <span>{JOURNAL_ENTRIES[activeEntry].theme}</span>
                <span aria-hidden="true">/</span>
                <span>Entry {activeEntry + 1} of {JOURNAL_ENTRIES.length}</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#2D201C] font-normal mb-8">
                {JOURNAL_ENTRIES[activeEntry].title}
              </h3>

              <div className="relative mb-10 pl-6 border-l-2 border-[#B97849]">
                <blockquote className="font-serif italic text-2xl sm:text-3xl text-[#2D201C] leading-snug">
                  “{JOURNAL_ENTRIES[activeEntry].quote}”
                </blockquote>
              </div>

              <p className="text-base sm:text-lg text-[#2D201C]/80 leading-relaxed font-normal">
                {JOURNAL_ENTRIES[activeEntry].note}
              </p>
            </div>

            {/* Bottom Footnote */}
            <div className="pt-10 mt-10 border-t border-[#2D201C]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#2D201C]/60">
              <span className="font-mono uppercase tracking-wider">
                Published from the MOODBREW Counter
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveEntry((prev) => (prev > 0 ? prev - 1 : JOURNAL_ENTRIES.length - 1))}
                  className="hover:text-[#2D201C] transition-colors cursor-pointer"
                >
                  ← Previous
                </button>
                <span aria-hidden="true">·</span>
                <button
                  onClick={() => setActiveEntry((prev) => (prev < JOURNAL_ENTRIES.length - 1 ? prev + 1 : 0))}
                  className="hover:text-[#2D201C] transition-colors cursor-pointer"
                >
                  Next Thought →
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
