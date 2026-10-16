/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DiscoverMoodSection } from './components/DiscoverMoodSection';
import { YourMoodYourCoffeeSection } from './components/YourMoodYourCoffeeSection';
import { SignatureCollectionSection } from './components/SignatureCollectionSection';
import { CoffeeMomentSection } from './components/CoffeeMomentSection';
import { StorySection } from './components/StorySection';
import { MoodLetterSection } from './components/MoodLetterSection';
import { MoodJournalSection } from './components/MoodJournalSection';
import { FindYourMomentSection } from './components/FindYourMomentSection';
import { Footer } from './components/Footer';
import { CoffeeDetailModal } from './components/CoffeeDetailModal';
import { CoffeeItem, COFFEE_COLLECTION } from './data/coffeeData';

export default function App() {
  const [selectedMoodId, setSelectedMoodId] = useState<string>('slow-morning');
  const [activeCoffeeModal, setActiveCoffeeModal] = useState<CoffeeItem | null>(null);
  const [savedCoffeeIds, setSavedCoffeeIds] = useState<string[]>(['01']);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleSave = (coffeeId: string) => {
    setSavedCoffeeIds((prev) =>
      prev.includes(coffeeId) ? prev.filter((id) => id !== coffeeId) : [...prev, coffeeId]
    );
  };

  const handleMoodSelect = (moodId: string) => {
    setSelectedMoodId(moodId);
    // Smooth scroll directly to the recommendation section so the visitor sees their matched cup
    const el = document.getElementById('recommended-coffee');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#2D201C] selection:bg-[#B97849]/20 selection:text-[#2D201C]">
      {/* Universal Top Bar */}
      <Navbar onNavigate={handleNavigate} />

      <main>
        {/* 1. Hero Section */}
        <HeroSection
          onFindMood={() => handleNavigate('discover-mood')}
          onExploreCollection={() => handleNavigate('collection')}
        />

        {/* 2. Discover Your Mood */}
        <DiscoverMoodSection
          selectedMoodId={selectedMoodId}
          onSelectMood={handleMoodSelect}
        />

        {/* 3. Your Mood, Your Coffee */}
        <YourMoodYourCoffeeSection
          selectedMoodId={selectedMoodId}
          onMeetCoffee={(coffee) => setActiveCoffeeModal(coffee)}
          onBrowseAll={() => handleNavigate('collection')}
        />

        {/* 4. The Signature Collection — 18 Coffees */}
        <SignatureCollectionSection
          onSelectCoffee={(coffee) => setActiveCoffeeModal(coffee)}
        />

        {/* 5. A Little Coffee Moment */}
        <CoffeeMomentSection />

        {/* 6. The MOODBREW Story */}
        <StorySection />

        {/* 7. The MOOD LETTER — Signature Interactive Feature */}
        <MoodLetterSection />

        {/* 8. The Mood Journal */}
        <MoodJournalSection />

        {/* 9. Find Your Moment */}
        <FindYourMomentSection
          onFindMood={() => handleNavigate('discover-mood')}
          onExploreCollection={() => handleNavigate('collection')}
        />
      </main>

      {/* 10. Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Tasting Notes Modal */}
      <CoffeeDetailModal
        coffee={activeCoffeeModal}
        onClose={() => setActiveCoffeeModal(null)}
        isSaved={activeCoffeeModal ? savedCoffeeIds.includes(activeCoffeeModal.id) : false}
        onToggleSave={handleToggleSave}
      />
    </div>
  );
}
