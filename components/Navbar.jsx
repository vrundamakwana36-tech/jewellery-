'use client';

import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenModal, isCandlelight, onToggleCandlelight }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Soft harmonic acoustic chime using Web Audio API
  const playHarmonicChime = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      const freqs = [528, 660, 792]; // Solfeggio gold harmony
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        gain.gain.setValueAtTime(0.04 / (idx + 1), ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.8);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.12);
        osc.stop(ctx.currentTime + 3.0);
      });
    } catch (e) {
      console.log('Audio disabled or not allowed yet');
    }
  };

  const handleToggleSound = () => {
    const nextState = !isSoundOn;
    setIsSoundOn(nextState);
    if (nextState) {
      playHarmonicChime();
    }
  };

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 500,
        transition: 'background-color 0.4s ease, border-color 0.4s ease, padding 0.4s ease',
        backgroundColor: isScrolled ? 'rgba(9, 8, 7, 0.88)' : 'transparent',
        borderBottom: isScrolled ? '1px solid rgba(212, 175, 55, 0.15)' : '1px solid transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        padding: isScrolled ? '1rem 2.5rem' : '1.8rem 2.5rem',
      }}
    >
      <div 
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Atelier Logo / Brand */}
        <a 
          href="#"
          style={{
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span 
            className="font-serif-italic"
            style={{
              fontSize: '1.45rem',
              color: 'var(--gold-champagne)',
              letterSpacing: '0.08em',
              fontWeight: 400,
            }}
          >
            Maison d’Or
          </span>
          <span 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.62rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginTop: '-2px',
            }}
          >
            Atelier Place Vendôme
          </span>
        </a>

        {/* Navigation Anchors */}
        <nav 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.5rem',
          }}
          className="desktop-nav"
        >
          <a 
            href="#deconstruction" 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.74rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--text-champagne)',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold-champagne)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-champagne)'}
          >
            Deconstruction
          </a>
          <a 
            href="#craftsmanship" 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.74rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--text-champagne)',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold-champagne)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-champagne)'}
          >
            Craftsmanship
          </a>
          <a 
            href="#materials" 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.74rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--text-champagne)',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold-champagne)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-champagne)'}
          >
            Materials
          </a>
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
          {/* Candlelight Ambience Toggle */}
          <button 
            type="button"
            onClick={onToggleCandlelight}
            title="Toggle Candlelight Atmosphere"
            aria-label="Toggle Candlelight Atmosphere"
            style={{
              background: isCandlelight ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
              border: '1px solid var(--gold-border)',
              borderRadius: '2px',
              padding: '0.55rem 0.85rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: isCandlelight ? 'var(--gold-light)' : 'var(--text-muted)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.68rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
            }}
          >
            <span style={{ fontSize: '0.9rem' }}>🕯️</span>
            <span className="hide-on-mobile">{isCandlelight ? 'Candlelight' : 'Atelier'}</span>
          </button>

          {/* Sound Ambience Toggle */}
          <button 
            type="button"
            onClick={handleToggleSound}
            title="Toggle Atelier Chime"
            aria-label="Toggle Sound"
            style={{
              background: isSoundOn ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
              border: '1px solid var(--gold-border)',
              borderRadius: '2px',
              padding: '0.55rem 0.85rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: isSoundOn ? 'var(--gold-light)' : 'var(--text-muted)',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.68rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
            }}
          >
            <span>{isSoundOn ? '🔔' : '🔕'}</span>
            <span className="hide-on-mobile">Chime</span>
          </button>

          {/* Reserve CTA */}
          <button 
            type="button"
            className="btn-gold-luxury"
            onClick={onOpenModal}
            style={{ padding: '0.65rem 1.4rem', fontSize: '0.72rem' }}
          >
            Private Viewing
          </button>
        </div>
      </div>
    </header>
  );
}
