import React, { useState } from 'react';
import { COFFEE_COLLECTION, CoffeeItem } from '../data/coffeeData';
import { Sparkles, Eye, ArrowUpRight } from 'lucide-react';

interface SignatureCollectionSectionProps {
  onSelectCoffee: (coffee: CoffeeItem) => void;
}

type FilterCategory = 'All' | 'Comfort' | 'Refresh' | 'Focus' | 'Indulgence' | 'Adventure';

export const SignatureCollectionSection: React.FC<SignatureCollectionSectionProps> = ({
  onSelectCoffee,
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');

  const categories: FilterCategory[] = [
    'All',
    'Comfort',
    'Refresh',
    'Focus',
    'Indulgence',
    'Adventure',
  ];

  const filteredCoffees =
    activeFilter === 'All'
      ? COFFEE_COLLECTION
      : COFFEE_COLLECTION.filter((c) => c.category === activeFilter);

  return (
    <section id="collection" className="py-24 border-t border-[#2D201C]/10 bg-[#FFF9F1]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header & Description */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B97849] font-semibold mb-3">
              <span>The Signature Collection</span>
              <span aria-hidden="true">·</span>
              <span>18 Handcrafted Cups</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2D201C] font-normal tracking-tight mb-4">
              THE LITTLE THINGS WE BREW.
            </h2>
            <p className="text-base sm:text-lg text-[#2D201C]/75 font-normal leading-relaxed">
              Eighteen different cups. A hundred little moments. Find the one that feels like yours.
            </p>
          </div>

          {/* Filter Bar (Zero-pill, clean segmented control buttons) */}
          <div className="flex flex-wrap items-center gap-2 border-b border-[#2D201C]/15 pb-2">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#2D201C] text-[#FFF9F1] shadow-xs'
                      : 'text-[#2D201C]/65 hover:text-[#2D201C] hover:bg-[#2D201C]/5'
                  }`}
                >
                  {cat === 'All' ? 'All Coffees (18)' : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCoffees.map((coffee, index) => {
            // Give subtle editorial rhythm: feature cards for certain indices
            const isFeatured = index % 5 === 0;

            return (
              <div
                key={coffee.id}
                onClick={() => onSelectCoffee(coffee)}
                className={`group cursor-pointer bg-[#F5EFE6]/60 border border-[#2D201C]/10 flex flex-col justify-between transition-all duration-300 hover:border-[#2D201C]/40 hover:shadow-lg hover:-translate-y-1 ${
                  isFeatured ? 'lg:col-span-1 border-t-2 border-t-[#B97849]' : ''
                }`}
              >
                {/* Image Container with strict 4:3 ratio and zoom effect */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-[#2D201C]/5">
                  <img
                    src={coffee.image}
                    alt={`${coffee.name} - ${coffee.mood}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Top Header unboxed tags */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none">
                    <span className="bg-[#2D201C]/80 backdrop-blur-xs text-[#FFF9F1] text-[10px] font-mono tracking-widest px-2.5 py-1">
                      № {coffee.number}
                    </span>
                    <span className="bg-white/90 backdrop-blur-xs text-[#2D201C] text-[11px] font-medium px-2.5 py-1 tracking-wider uppercase">
                      {coffee.category}
                    </span>
                  </div>

                  {/* Quick Preview overlay on hover */}
                  <div className="absolute inset-0 bg-[#2D201C]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="bg-[#FFF9F1] text-[#2D201C] px-4 py-2 text-xs uppercase tracking-widest font-semibold flex items-center gap-2 shadow-md">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Tasting Notes</span>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Mood tag - clean unboxed typography */}
                    <div className="flex items-center gap-2 text-xs text-[#B97849] font-medium tracking-wider uppercase mb-2">
                      <span>Mood:</span>
                      <span className="font-semibold">{coffee.mood}</span>
                    </div>

                    <h3 className="font-serif text-2xl text-[#2D201C] font-normal group-hover:text-[#B97849] transition-colors mb-2">
                      {coffee.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#2D201C]/75 line-clamp-2 leading-relaxed mb-4">
                      {coffee.description}
                    </p>
                  </div>

                  {/* Flavour Profile & Notes */}
                  <div className="pt-4 border-t border-[#2D201C]/10 text-xs text-[#2D201C]/70">
                    <span className="text-[10px] uppercase tracking-wider text-[#2D201C]/40 font-bold block mb-1">
                      Flavour Notes
                    </span>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 font-medium text-[#2D201C]/80">
                      {coffee.flavourNotes.map((note, i) => (
                        <React.Fragment key={note}>
                          <span>{note}</span>
                          {i < coffee.flavourNotes.length - 1 && (
                            <span aria-hidden="true" className="text-[#B97849]">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Card Footer */}
                <div className="px-6 py-3 bg-[#2D201C]/5 border-t border-[#2D201C]/10 flex items-center justify-between text-xs font-semibold text-[#2D201C]/70 group-hover:text-[#2D201C]">
                  <span>{coffee.temp} Serving</span>
                  <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Explore Cup</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
