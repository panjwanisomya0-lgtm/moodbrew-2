import React, { useEffect, useState } from 'react';
import { CoffeeItem } from '../data/coffeeData';
import { X, Heart, Share2, Check, Thermometer, MapPin, Sparkles, Utensils } from 'lucide-react';

interface CoffeeDetailModalProps {
  coffee: CoffeeItem | null;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

export const CoffeeDetailModal: React.FC<CoffeeDetailModalProps> = ({
  coffee,
  onClose,
  isSaved,
  onToggleSave,
}) => {
  const [copiedShare, setCopiedShare] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (coffee) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [coffee, onClose]);

  if (!coffee) return null;

  const handleShare = async () => {
    const text = `Discover ${coffee.name} (Mood: ${coffee.mood}) at MOODBREW — "${coffee.emotionalCopy}"`;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    } catch {
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#2D201C]/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative bg-[#FFF9F1] border border-[#2D201C]/20 shadow-2xl max-w-4xl w-full z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-[#FFF9F1]/80 hover:bg-[#FFF9F1] text-[#2D201C] rounded-full border border-[#2D201C]/15 transition-all cursor-pointer shadow-xs"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
          
          {/* Left Column: Coffee Dedicated Photograph */}
          <div className="md:col-span-5 relative aspect-4/3 md:aspect-auto min-h-[300px] md:min-h-[480px] bg-[#2D201C]/10 overflow-hidden">
            <img
              src={coffee.image}
              alt={coffee.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-[#2D201C]/85 text-[#FFF9F1] text-[10px] font-mono tracking-widest px-2.5 py-1">
              № {coffee.number}
            </div>
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-xs text-[#2D201C] text-xs font-semibold px-3 py-1 uppercase tracking-wider">
              {coffee.category} Series
            </div>
          </div>

          {/* Right Column: Tasting Notes & Narrative */}
          <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Header metadata */}
              <div className="flex items-center gap-2 text-xs text-[#B97849] uppercase tracking-wider font-semibold mb-2">
                <span>Mood Association</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#2D201C]">{coffee.mood}</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-[#2D201C] font-normal mb-4">
                {coffee.name}
              </h3>

              {/* Emotional Copy */}
              <blockquote className="font-serif italic text-lg sm:text-xl text-[#2D201C]/85 leading-snug border-l-2 border-[#B97849] pl-4 mb-6">
                “{coffee.emotionalCopy}”
              </blockquote>

              <p className="text-sm text-[#2D201C]/75 leading-relaxed mb-6 font-normal">
                {coffee.description}
              </p>

              {/* Tasting Profile & Notes */}
              <div className="p-4 bg-[#F5EFE6] border border-[#2D201C]/10 mb-6 space-y-2">
                <span className="text-[11px] uppercase tracking-wider font-bold text-[#2D201C]/50 block">
                  Flavour Profile
                </span>
                <p className="text-sm font-semibold text-[#2D201C]">
                  {coffee.flavourProfile}
                </p>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#2D201C]/70 pt-1">
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

              {/* Key Specs */}
              <div className="grid grid-cols-2 gap-4 text-xs text-[#2D201C]/80 pb-6 border-b border-[#2D201C]/10">
                <div className="flex items-center gap-2.5">
                  <Thermometer className="w-4 h-4 text-[#B97849]" />
                  <div>
                    <span className="text-[10px] text-[#2D201C]/50 uppercase tracking-wider block">Serving</span>
                    <span className="font-medium">{coffee.temp} Serving</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B97849]" />
                  <div>
                    <span className="text-[10px] text-[#2D201C]/50 uppercase tracking-wider block">Origin</span>
                    <span className="font-medium">{coffee.origin}</span>
                  </div>
                </div>

                <div className="col-span-2 flex items-center gap-2.5 pt-1">
                  <Utensils className="w-4 h-4 text-[#B97849]" />
                  <div>
                    <span className="text-[10px] text-[#2D201C]/50 uppercase tracking-wider block">Recommended Pairing</span>
                    <span className="font-medium">{coffee.pairing}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Actions */}
            <div className="pt-6 mt-4 flex items-center justify-between gap-4">
              <button
                onClick={() => onToggleSave(coffee.id)}
                className={`px-5 py-2.5 text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-2 border cursor-pointer ${
                  isSaved
                    ? 'bg-[#2D201C] text-[#FFF9F1] border-[#2D201C]'
                    : 'bg-transparent text-[#2D201C] border-[#2D201C]/30 hover:border-[#2D201C]'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current text-[#D5A7A1]' : ''}`} />
                <span>{isSaved ? 'Saved to Tasting List' : 'Save to Tasting List'}</span>
              </button>

              <button
                onClick={handleShare}
                className="px-4 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#2D201C]/70 hover:text-[#2D201C] flex items-center gap-2 cursor-pointer transition-colors"
              >
                {copiedShare ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share Note</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
