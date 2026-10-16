import React, { useState, useRef } from 'react';
import { MOOD_LETTERS, MoodLetterMessage } from '../data/coffeeData';
import { RefreshCw, Copy, Check, Download, Heart } from 'lucide-react';

type LetterMood = 'Slow' | 'Overwhelmed' | 'Hopeful' | 'Confident' | 'Nostalgic' | 'In Need of Comfort';

const LETTER_MOODS: LetterMood[] = [
  'Slow',
  'Overwhelmed',
  'Hopeful',
  'Confident',
  'Nostalgic',
  'In Need of Comfort',
];

export const MoodLetterSection: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<LetterMood>('Slow');
  const [letterIndex, setLetterIndex] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [isGeneratingImage, setIsGeneratingImage] = useState<boolean>(false);
  const letterRef = useRef<HTMLDivElement>(null);

  const availableLetters = MOOD_LETTERS[selectedMood] || MOOD_LETTERS['Slow'];
  const currentLetter: MoodLetterMessage = availableLetters[letterIndex % availableLetters.length];

  const handleMoodChange = (mood: LetterMood) => {
    setSelectedMood(mood);
    setLetterIndex(0);
  };

  const handleNextLetter = () => {
    setLetterIndex((prev) => (prev + 1) % availableLetters.length);
  };

  const handleCopy = async () => {
    const textToCopy = `MOODBREW · YOUR MOOD LETTER · NO. ${currentLetter.letterNo}\n\n${currentLetter.salutation}\n\n"${currentLetter.body}"\n\nYour Coffee: ${currentLetter.coffeeName}\nA little reminder: "${currentLetter.reminder}"\n\n— moodbrew.cafe`;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleSaveAsImage = () => {
    setIsGeneratingImage(true);

    try {
      const canvas = document.createElement('canvas');
      canvas.width = 1080;
      canvas.height = 1350;
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        setIsGeneratingImage(false);
        return;
      }

      // Background paper color
      ctx.fillStyle = '#FFF9F1';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle border frame
      ctx.strokeStyle = '#2D201C';
      ctx.lineWidth = 2;
      ctx.strokeRect(60, 60, canvas.width - 120, canvas.height - 120);

      // Inner hairline
      ctx.strokeStyle = '#B97849';
      ctx.lineWidth = 1;
      ctx.strokeRect(76, 76, canvas.width - 152, canvas.height - 152);

      // Header Brand
      ctx.font = '600 24px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#B97849';
      ctx.textAlign = 'center';
      ctx.fillText('MOODBREW ATELIER', canvas.width / 2, 140);

      // Letter metadata
      ctx.font = '400 18px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#7A6B66';
      ctx.fillText(
        `YOUR MOOD LETTER · NO. ${currentLetter.letterNo} · ${currentLetter.mood.toUpperCase()}`,
        canvas.width / 2,
        180
      );

      // Decorative divider
      ctx.strokeStyle = '#2D201C';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2 - 80, 210);
      ctx.lineTo(canvas.width / 2 + 80, 210);
      ctx.stroke();

      // Salutation
      ctx.font = 'italic 500 42px "Cormorant Garamond", Georgia, serif';
      ctx.fillStyle = '#2D201C';
      ctx.textAlign = 'left';
      ctx.fillText(currentLetter.salutation, 140, 310);

      // Body text wrapping
      ctx.font = '400 32px "Cormorant Garamond", Georgia, serif';
      ctx.fillStyle = '#2D201C';

      const words = currentLetter.body.split(' ');
      let line = '';
      let y = 390;
      const maxWidth = canvas.width - 280;
      const lineHeight = 50;

      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
          ctx.fillText(line, 140, y);
          line = words[n] + ' ';
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, 140, y);

      // Paired Coffee Box
      const coffeeBoxY = 740;
      ctx.fillStyle = '#F5EFE6';
      ctx.fillRect(140, coffeeBoxY, canvas.width - 280, 190);
      ctx.strokeStyle = '#2D201C';
      ctx.lineWidth = 1;
      ctx.strokeRect(140, coffeeBoxY, canvas.width - 280, 190);

      ctx.font = '600 16px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#B97849';
      ctx.fillText('YOUR MATCHED CUP', 180, coffeeBoxY + 50);

      ctx.font = '600 36px "Cormorant Garamond", Georgia, serif';
      ctx.fillStyle = '#2D201C';
      ctx.fillText(currentLetter.coffeeName, 180, coffeeBoxY + 105);

      ctx.font = 'italic 20px "Cormorant Garamond", Georgia, serif';
      ctx.fillStyle = '#7A6B66';
      ctx.fillText('Brewed for this exact feeling', 180, coffeeBoxY + 145);

      // Reminder Quote
      const reminderY = 1010;
      ctx.font = '600 16px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#B97849';
      ctx.fillText('A LITTLE REMINDER', 140, reminderY);

      ctx.font = 'italic 500 30px "Cormorant Garamond", Georgia, serif';
      ctx.fillStyle = '#2D201C';
      ctx.fillText(`“${currentLetter.reminder}”`, 140, reminderY + 45);

      // Footer
      ctx.font = '400 16px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#7A6B66';
      ctx.textAlign = 'center';
      ctx.fillText('There’s a cup for the feeling · moodbrew.cafe', canvas.width / 2, 1220);

      // Download
      const link = document.createElement('a');
      link.download = `moodbrew-letter-no-${currentLetter.letterNo}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (e) {
      console.error(e);
    } finally {
      setIsGeneratingImage(false);
    }
  };

  return (
    <section id="mood-letter" className="py-24 border-t border-[#2D201C]/10 bg-[#F5EFE6]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B97849] font-semibold mb-3">
            <span>The Signature Experience</span>
            <span aria-hidden="true">·</span>
            <span>The MOOD LETTER</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2D201C] font-normal tracking-tight mb-4">
            A LITTLE LETTER, JUST FOR YOU.
          </h2>
          <p className="text-base sm:text-lg text-[#2D201C]/75 font-normal leading-relaxed">
            Tell us how today feels. We’ll find a few words and a cup to go with it.
          </p>
        </div>

        {/* Step 1: Mood Selector Tabs (6 choices) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {LETTER_MOODS.map((mood) => {
            const isSelected = selectedMood === mood;
            return (
              <button
                key={mood}
                onClick={() => handleMoodChange(mood)}
                className={`px-5 py-2.5 text-xs uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#2D201C] text-[#FFF9F1] shadow-md ring-1 ring-[#2D201C]'
                    : 'bg-[#FFF9F1] text-[#2D201C]/75 border border-[#2D201C]/15 hover:border-[#2D201C]/40 hover:text-[#2D201C]'
                }`}
              >
                {mood}
              </button>
            );
          })}
        </div>

        {/* Step 2 & 3: The Letter Display (Artisanal Paper Presentation) */}
        <div className="max-w-3xl mx-auto">
          <div
            ref={letterRef}
            className="paper-texture border border-[#2D201C]/20 shadow-2xl p-8 sm:p-14 relative transition-all duration-500"
          >
            {/* Top Stationery Header */}
            <div className="flex items-center justify-between pb-6 border-b border-[#2D201C]/10 text-xs text-[#2D201C]/60 mb-10">
              <div className="flex items-center gap-2">
                <span className="font-mono uppercase tracking-widest text-[#B97849] font-bold">
                  YOUR MOOD LETTER
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-mono font-medium">
                  NO. {currentLetter.letterNo}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] uppercase tracking-wider text-[#2D201C]/60">
                  Mood: {currentLetter.mood}
                </span>
                <span aria-hidden="true">·</span>
                <span className="text-[11px] font-mono opacity-60">
                  {letterIndex + 1}/{availableLetters.length}
                </span>
              </div>
            </div>

            {/* Salutation */}
            <h3 className="font-serif italic text-2xl sm:text-3xl text-[#2D201C] mb-6 font-normal">
              {currentLetter.salutation}
            </h3>

            {/* Letter Body */}
            <p className="font-serif text-xl sm:text-2xl text-[#2D201C]/90 leading-relaxed font-normal mb-10">
              “{currentLetter.body}”
            </p>

            {/* Paired Coffee Inset Box */}
            <div className="my-8 p-5 sm:p-6 bg-[#F5EFE6] border border-[#2D201C]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 overflow-hidden border border-[#2D201C]/15 bg-white">
                  <img
                    src={currentLetter.coffeeImage}
                    alt={currentLetter.coffeeName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#B97849] font-bold block mb-1">
                    Your Coffee
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-[#2D201C] font-medium">
                    {currentLetter.coffeeName}
                  </h4>
                  <p className="text-xs text-[#2D201C]/70 mt-0.5">
                    Hand-paired to match your emotional headspace
                  </p>
                </div>
              </div>

              <div className="text-right sm:border-l sm:border-[#2D201C]/10 sm:pl-6">
                <span className="text-[11px] uppercase tracking-wider text-[#2D201C]/50 block">
                  Craft Recommendation
                </span>
                <span className="text-xs font-semibold text-[#2D201C]">
                  Freshly Brewed
                </span>
              </div>
            </div>

            {/* A Little Reminder */}
            <div className="pt-6 border-t border-[#2D201C]/10 flex items-baseline gap-2">
              <span className="text-xs uppercase tracking-widest text-[#B97849] font-bold shrink-0">
                A Little Reminder:
              </span>
              <p className="font-serif italic text-base sm:text-lg text-[#2D201C]/85">
                “{currentLetter.reminder}”
              </p>
            </div>

            {/* Corner Decorative Watermark Stamp */}
            <div className="mt-8 pt-4 flex items-center justify-between text-[11px] text-[#2D201C]/40 border-t border-[#2D201C]/5 font-mono">
              <span>MOODBREW ATELIER</span>
              <span>THERE’S A CUP FOR THE FEELING</span>
            </div>
          </div>

          {/* Step 4: Explore the Letter Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleNextLetter}
              className="px-5 py-3 bg-[#FFF9F1] border border-[#2D201C]/20 hover:border-[#2D201C] text-[#2D201C] text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-xs active:translate-y-0.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Give Me Another Letter</span>
            </button>

            <button
              onClick={handleCopy}
              className="px-5 py-3 bg-[#FFF9F1] border border-[#2D201C]/20 hover:border-[#2D201C] text-[#2D201C] text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-xs active:translate-y-0.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Letter Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy My Letter</span>
                </>
              )}
            </button>

            <button
              onClick={handleSaveAsImage}
              disabled={isGeneratingImage}
              className="px-5 py-3 bg-[#2D201C] text-[#FFF9F1] hover:bg-[#B97849] text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-xs active:translate-y-0.5 disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isGeneratingImage ? 'Saving...' : 'Save as Image'}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
