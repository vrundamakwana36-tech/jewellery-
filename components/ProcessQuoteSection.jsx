'use client';

import React from 'react';

export default function ProcessQuoteSection() {
  return (
    <section 
      style={{
        position: 'relative',
        padding: '10rem 2rem',
        backgroundColor: '#080706',
        overflow: 'hidden',
        borderTop: '1px solid rgba(212, 175, 55, 0.12)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.12)',
      }}
    >
      {/* Warm Champagne-Gold Center Ambient Glow for Candlelight Sanctuary */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70vw',
          height: '60vh',
          maxWidth: '800px',
          maxHeight: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.08) 0%, rgba(212, 175, 55, 0.03) 45%, transparent 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      <div 
        style={{
          maxWidth: '960px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Decorative Quote Mark Flourish */}
        <div 
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '6.5rem',
            lineHeight: 0.8,
            color: 'var(--gold-champagne)',
            opacity: 0.35,
            marginBottom: '1rem',
          }}
          aria-hidden="true"
        >
          “
        </div>

        {/* Process Quote in Cormorant Garamond Italic */}
        <blockquote
          className="font-serif-italic"
          style={{
            fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)',
            lineHeight: 1.45,
            color: 'var(--text-champagne)',
            fontWeight: 300,
            marginBottom: '3rem',
            letterSpacing: '0.01em',
          }}
        >
          In the stillness of the atelier, gold is not merely shaped—it is persuaded to surrender to light, until the metal forgets its weight and the diamond forgets the earth.
        </blockquote>

        {/* Author & Atelier Credential */}
        <div 
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.6rem',
          }}
        >
          <div 
            style={{
              width: '40px',
              height: '1px',
              background: 'var(--gold-champagne)',
              opacity: 0.5,
              marginBottom: '0.5rem',
            }}
          />
          <cite 
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'normal',
              fontSize: '1rem',
              letterSpacing: '0.15em',
              color: 'var(--gold-light)',
              textTransform: 'uppercase',
            }}
          >
            Jean-Luc Vane
          </cite>
          <span 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              letterSpacing: '0.22em',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
            }}
          >
            Maître Joaillier · Atelier Place Vendôme
          </span>
        </div>
      </div>
    </section>
  );
}
