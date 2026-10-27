'use client';

import React, { useEffect, useState } from 'react';

const TOTAL_FRAMES = 38;

export default function Preloader({ onPreloadComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const images = [];

    const updateProgress = () => {
      loadedCount++;
      const currentPct = Math.round((loadedCount / TOTAL_FRAMES) * 100);
      setProgress(currentPct);

      if (loadedCount >= TOTAL_FRAMES) {
        setTimeout(() => {
          setIsDone(true);
          if (onPreloadComplete) onPreloadComplete(images);
        }, 350);
      }
    };

    // Preload each frame sequentially/concurrently into browser cache
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `/frames/frame_${frameNum}.png`;

      img.onload = () => updateProgress();
      img.onerror = () => updateProgress(); // avoid blocking on individual frame glitch

      images.push(img);
    }
  }, [onPreloadComplete]);

  return (
    <div className={`preloader-overlay ${isDone ? 'loaded' : ''}`} aria-hidden={isDone}>
      <div style={{ textAlign: 'center' }}>
        <div className="preloader-monogram font-serif-italic">
          Maison d’Or
        </div>
        <div className="preloader-subtext">
          Atelier Haute Joaillerie · Place Vendôme
        </div>

        <div className="preloader-bar-track">
          <div 
            className="preloader-bar-thumb" 
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="preloader-percentage">
          {progress}% // PREPARING ATELIER
        </div>
      </div>
    </div>
  );
}
