'use client';

import React, { useState } from 'react';
import Preloader from '../components/Preloader';
import ScrollProgressBar from '../components/ScrollProgressBar';
import CustomCursor from '../components/CustomCursor';
import Navbar from '../components/Navbar';
import RingScrollRunway from '../components/RingScrollRunway';
import CraftsmanshipSection from '../components/CraftsmanshipSection';
import ProcessQuoteSection from '../components/ProcessQuoteSection';
import MaterialsSection from '../components/MaterialsSection';
import PrivateViewingModal from '../components/PrivateViewingModal';
import AtelierFooter from '../components/AtelierFooter';

export default function AtelierHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCandlelight, setIsCandlelight] = useState(true);
  const [preloadedImages, setPreloadedImages] = useState([]);

  const handlePreloadComplete = (images) => {
    setPreloadedImages(images);
  };

  const toggleCandlelight = () => {
    setIsCandlelight(prev => !prev);
  };

  return (
    <main className={isCandlelight ? 'candlelight-mode-active' : ''}>
      {/* 1. Frame Preloader (38 frames with percentage counter) */}
      <Preloader onPreloadComplete={handlePreloadComplete} />

      {/* 2. Scroll Progress Bar in Champagne Gold Gradient */}
      <ScrollProgressBar />

      {/* 3. Custom Cursor with 48px Scaling Ring on CTA Hover */}
      <CustomCursor />

      {/* 4. Atelier Navigation Bar */}
      <Navbar 
        onOpenModal={() => setIsModalOpen(true)}
        isCandlelight={isCandlelight}
        onToggleCandlelight={toggleCandlelight}
      />

      {/* 5. Hero Scroll Runway: Sticky Canvas with Mandatory Gold Glow & 4 Text Sections */}
      <RingScrollRunway 
        onOpenModal={() => setIsModalOpen(true)}
        preloadedImages={preloadedImages}
      />

      {/* 6. Craftsmanship Section: 3 Artisanal Columns */}
      <CraftsmanshipSection />

      {/* 7. Process Quote Section: Maître Joaillier Candlelit Sanctuary */}
      <ProcessQuoteSection />

      {/* 8. Materials Section: 3 Exact Cards (100% Conflict-Free Diamonds / 18K Hallmarked Gold / 0% Compromise) */}
      <MaterialsSection onOpenModal={() => setIsModalOpen(true)} />

      {/* 9. Atelier Footer */}
      <AtelierFooter onOpenModal={() => setIsModalOpen(true)} />

      {/* 10. Private Viewing Reservation Modal */}
      <PrivateViewingModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
