'use client';

import React, { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 38;

export default function RingScrollRunway({ onOpenModal, preloadedImages }) {
  const runwayRef = useRef(null);
  const canvasRef = useRef(null);
  
  const [scrollPct, setScrollPct] = useState(0);
  const currentFrameRef = useRef(0);
  const targetFrameRef = useRef(0);
  const rafId = useRef(null);
  const imagesRef = useRef([]);

  // Store loaded images
  useEffect(() => {
    if (preloadedImages && preloadedImages.length > 0) {
      imagesRef.current = preloadedImages;
    } else {
      // Fallback load
      const imgs = [];
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        const frameNum = String(i).padStart(3, '0');
        img.src = `/frames/frame_${frameNum}.png`;
        imgs.push(img);
      }
      imagesRef.current = imgs;
    }
  }, [preloadedImages]);

  // Canvas drawing function with High DPI support
  const renderFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const safeIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(frameIndex)));
    const img = imagesRef.current[safeIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    // Compute contain aspect ratio with subtle margin
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = width / height;

    let drawWidth, drawHeight, offsetX, offsetY;

    // Use containment with graceful breathing room
    if (canvasAspect > imgAspect) {
      drawHeight = height * 0.88;
      drawWidth = drawHeight * imgAspect;
    } else {
      drawWidth = width * 0.88;
      drawHeight = drawWidth / imgAspect;
    }

    offsetX = (width - drawWidth) / 2;
    offsetY = (height - drawHeight) / 2;

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    ctx.restore();
  };

  // Scroll listener tracking exact progress within runway
  useEffect(() => {
    const handleScroll = () => {
      if (!runwayRef.current) return;
      const rect = runwayRef.current.getBoundingClientRect();
      const maxScroll = rect.height - window.innerHeight;
      if (maxScroll <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / maxScroll));
      
      setScrollPct(progress);
      targetFrameRef.current = progress * (TOTAL_FRAMES - 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation frame loop for smooth scrubbing physics
  useEffect(() => {
    const loop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.005) {
        currentFrameRef.current += diff * 0.14; // smooth ease
        renderFrame(currentFrameRef.current);
      } else {
        renderFrame(targetFrameRef.current);
      }
      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    const handleResize = () => {
      renderFrame(currentFrameRef.current);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Helper to calculate opacity and transform for each narrative section
  // Section 1: 0% - 22%
  // Section 2: 26% - 48%
  // Section 3: 52% - 74%
  // Section 4: 78% - 100%
  const getSectionState = (start, end) => {
    const fadeInWindow = 0.04;
    const fadeOutWindow = 0.04;
    
    let opacity = 0;
    let translateY = 20;

    if (scrollPct >= start && scrollPct <= end) {
      if (scrollPct < start + fadeInWindow) {
        const factor = (scrollPct - start) / fadeInWindow;
        opacity = factor;
        translateY = 20 * (1 - factor);
      } else if (scrollPct > end - fadeOutWindow) {
        const factor = (end - scrollPct) / fadeOutWindow;
        opacity = factor;
        translateY = -20 * (1 - factor);
      } else {
        opacity = 1;
        translateY = 0;
      }
    } else if (scrollPct < start) {
      opacity = 0;
      translateY = 25;
    } else if (scrollPct > end) {
      opacity = 0;
      translateY = -25;
    }

    return {
      opacity,
      transform: `translateY(${translateY}px)`,
      pointerEvents: opacity > 0.6 ? 'auto' : 'none',
      visibility: opacity > 0.01 ? 'visible' : 'hidden',
      transition: 'opacity 0.25s ease-out, transform 0.25s ease-out',
    };
  };

  return (
    <section 
      ref={runwayRef} 
      className="ring-scroll-runway" 
      id="deconstruction"
      style={{
        position: 'relative',
        height: '460vh',
        backgroundColor: 'var(--bg-noir)',
      }}
    >
      {/* Sticky Viewport Container */}
      <div 
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* =========================================================================
            MANDATORY SPEC: WARM CHAMPAGNE-GOLD RADIAL GLOW BEHIND CANVAS
            radial-gradient rgba(212,175,55,0.07) at center (non-negotiable)
            ========================================================================= */}
        <div 
          className="canvas-gold-glow-mandatory" 
          aria-hidden="true" 
        />

        {/* High Definition Interactive Canvas */}
        <canvas 
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        {/* Ambient Vignette Overlay for candlelit atelier depth */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, transparent 30%, rgba(9, 8, 7, 0.45) 75%, rgba(9, 8, 7, 0.85) 100%)',
            pointerEvents: 'none',
            zIndex: 3,
          }}
          aria-hidden="true"
        />

        {/* Narrative Overlays (4 text sections with exact scroll percentages and Cormorant Garamond italic typography) */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 10,
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
        >
          {/* -------------------------------------------------------------
              SECTION 1: 0% - 22% Scroll
              "The Solitaire"
              ------------------------------------------------------------- */}
          <div 
            style={{
              position: 'absolute',
              maxWidth: '680px',
              textAlign: 'center',
              ...getSectionState(0.0, 0.22),
            }}
          >
            <div className="eyebrow-luxury" style={{ marginBottom: '1.2rem' }}>
              Haute Joaillerie · Pièce Unique
            </div>
            <h1 
              className="heading-display text-gold-gradient"
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 4.6rem)',
                marginBottom: '1.4rem',
              }}
            >
              The Solitaire
            </h1>
            <p 
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
                lineHeight: 1.6,
                color: 'var(--text-champagne)',
                marginBottom: '2rem',
                fontWeight: 300,
              }}
            >
              Born from the quiet mastery of our Parisian atelier. A singular 3.50-carat internally flawless diamond cradled in warm 18-karat champagne gold, capturing the sacred stillness of candlelight.
            </p>

            {/* Spec Pills */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.5rem',
                flexWrap: 'wrap',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.74rem',
                letterSpacing: '0.2em',
                color: 'var(--gold-light)',
                textTransform: 'uppercase',
                marginBottom: '2.5rem',
              }}
            >
              <span style={{ borderBottom: '1px solid var(--gold-border)', paddingBottom: '4px' }}>3.50 Carats</span>
              <span style={{ color: 'var(--gold-champagne)' }}>·</span>
              <span style={{ borderBottom: '1px solid var(--gold-border)', paddingBottom: '4px' }}>Color D Flawless</span>
              <span style={{ color: 'var(--gold-champagne)' }}>·</span>
              <span style={{ borderBottom: '1px solid var(--gold-border)', paddingBottom: '4px' }}>Atelier 6-Prong</span>
            </div>

            {/* Subtle Scroll Cue */}
            <div 
              style={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.7rem',
                letterSpacing: '0.25em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                opacity: 0.85,
              }}
            >
              <span>Scroll to Deconstruct</span>
              <div 
                style={{
                  width: '1px',
                  height: '24px',
                  background: 'linear-gradient(to bottom, var(--gold-champagne), transparent)',
                  animation: 'candleFlicker 2s infinite ease-in-out',
                }}
              />
            </div>
          </div>

          {/* -------------------------------------------------------------
              SECTION 2: 26% - 48% Scroll
              "Fifty-Eight Facets of Light"
              ------------------------------------------------------------- */}
          <div 
            style={{
              position: 'absolute',
              maxWidth: '560px',
              left: 'clamp(2rem, 8vw, 8rem)',
              textAlign: 'left',
              ...getSectionState(0.26, 0.48),
            }}
          >
            <div className="eyebrow-luxury" style={{ marginBottom: '1rem' }}>
              Optical Precision · 0.01mm
            </div>
            <h2 
              className="heading-display text-gold-gradient"
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                marginBottom: '1.2rem',
              }}
            >
              Fifty-Eight Facets of Light
            </h2>
            <p 
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
                lineHeight: 1.6,
                color: 'var(--text-champagne)',
                marginBottom: '1.8rem',
                fontWeight: 300,
              }}
            >
              Calculated to achieve maximum total internal reflection. Hand-polished over forty hours using diamond dust laps, capturing candle flame and starlight with unmatched fire and scintillation.
            </p>

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--gold-border)',
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.68rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  Refractive Index
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--gold-champagne)', marginTop: '0.2rem' }}>
                  2.417
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.68rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  Symmetry Grade
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--gold-champagne)', marginTop: '0.2rem' }}>
                  Ideal
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------
              SECTION 3: 52% - 74% Scroll
              "Sculpted 18K Champagne Gold"
              ------------------------------------------------------------- */}
          <div 
            style={{
              position: 'absolute',
              maxWidth: '560px',
              right: 'clamp(2rem, 8vw, 8rem)',
              textAlign: 'right',
              ...getSectionState(0.52, 0.74),
            }}
          >
            <div className="eyebrow-luxury" style={{ marginBottom: '1rem', justifyContent: 'flex-end' }}>
              The Metallurgy · 750‰
            </div>
            <h2 
              className="heading-display text-gold-gradient"
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                marginBottom: '1.2rem',
              }}
            >
              Sculpted 18K Champagne Gold
            </h2>
            <p 
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
                lineHeight: 1.6,
                color: 'var(--text-champagne)',
                marginBottom: '1.8rem',
                fontWeight: 300,
              }}
            >
              Blended in our private foundry with trace palladium and warm copper to yield our signature champagne hue. Hand-forged to cradle the stone with whisper-thin prongs engineered for eternal security.
            </p>

            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--gold-border)',
                direction: 'rtl',
              }}
            >
              <div style={{ direction: 'ltr', textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.68rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  Noble Alloy
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--gold-champagne)', marginTop: '0.2rem' }}>
                  18K 750‰
                </div>
              </div>
              <div style={{ direction: 'ltr', textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.68rem', letterSpacing: '0.2em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  Profile
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--gold-champagne)', marginTop: '0.2rem' }}>
                  Micro-Bevel
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------
              SECTION 4: 78% - 100% Scroll
              "A Legacy in Solitude"
              ------------------------------------------------------------- */}
          <div 
            style={{
              position: 'absolute',
              maxWidth: '680px',
              textAlign: 'center',
              ...getSectionState(0.78, 1.0),
            }}
          >
            <div className="eyebrow-luxury" style={{ marginBottom: '1.2rem' }}>
              L'Œuvre Unique · Atelier Ledger
            </div>
            <h2 
              className="heading-display text-gold-gradient"
              style={{
                fontSize: 'clamp(2.8rem, 5.5vw, 4.4rem)',
                marginBottom: '1.4rem',
              }}
            >
              A Legacy in Solitude
            </h2>
            <p 
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
                lineHeight: 1.6,
                color: 'var(--text-champagne)',
                marginBottom: '2.5rem',
                fontWeight: 300,
              }}
            >
              A bespoke creation requiring six weeks of solitary concentration by a single maître joaillier. Individually numbered, hallmarked, and accompanied by the private ledger of its creation.
            </p>

            {/* Action CTA */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.2rem', flexWrap: 'wrap' }}>
              <button 
                type="button"
                className="btn-gold-luxury"
                onClick={onOpenModal}
              >
                Request Private Viewing
              </button>
              <a 
                href="#craftsmanship" 
                className="btn-ghost-luxury"
              >
                Discover The Craft
              </a>
            </div>
          </div>
        </div>

        {/* Small Progress Indicator Bottom-Right */}
        <div 
          style={{
            position: 'absolute',
            bottom: '2rem',
            right: '2.5rem',
            zIndex: 20,
            fontFamily: 'var(--font-sans)',
            fontSize: '0.72rem',
            letterSpacing: '0.25em',
            color: 'var(--gold-champagne)',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '0.8rem',
          }}
        >
          <span style={{ color: 'var(--text-muted)' }}>DECONSTRUCTION</span>
          <span>{Math.round(scrollPct * 100)}%</span>
        </div>
      </div>
    </section>
  );
}
