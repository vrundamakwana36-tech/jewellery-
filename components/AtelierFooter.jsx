'use client';

import React from 'react';

export default function AtelierFooter({ onOpenModal }) {
  return (
    <footer 
      style={{
        backgroundColor: '#060504',
        borderTop: '1px solid rgba(212, 175, 55, 0.15)',
        padding: '7rem 2rem 3rem 2rem',
        position: 'relative',
        zIndex: 5,
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Upper Footer Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3.5rem',
            marginBottom: '5rem',
          }}
        >
          {/* Col 1: Maison Monogram */}
          <div>
            <div 
              className="font-serif-italic"
              style={{
                fontSize: '1.9rem',
                color: 'var(--gold-champagne)',
                marginBottom: '0.8rem',
              }}
            >
              Maison d’Or
            </div>
            <p 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.82rem',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                marginBottom: '1.5rem',
                fontWeight: 300,
              }}
            >
              Haute Joaillerie Atelier crafting singular high-jewelry masterworks since 1892. Each diamond ring sculpted in quiet candlelight by a single master hand.
            </p>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.68rem',
                letterSpacing: '0.18em',
                color: 'var(--gold-warm)',
                textTransform: 'uppercase',
              }}
            >
              <span>⚜</span>
              <span>French Bureau de Garantie N° 8492</span>
            </div>
          </div>

          {/* Col 2: Salons */}
          <div>
            <div 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--gold-champagne)',
                marginBottom: '1.5rem',
              }}
            >
              Private Salons
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <div style={{ color: 'var(--text-ivory)', fontSize: '0.86rem', fontFamily: 'var(--font-sans)' }}>Paris · Place Vendôme</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.76rem', fontFamily: 'var(--font-sans)', marginTop: '0.2rem' }}>14 Place Vendôme, 75001 Paris</div>
              </div>
              <div>
                <div style={{ color: 'var(--text-ivory)', fontSize: '0.86rem', fontFamily: 'var(--font-sans)' }}>London · Mayfair</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.76rem', fontFamily: 'var(--font-sans)', marginTop: '0.2rem' }}>24 New Bond Street, W1S 2RP</div>
              </div>
              <div>
                <div style={{ color: 'var(--text-ivory)', fontSize: '0.86rem', fontFamily: 'var(--font-sans)' }}>New York · Manhattan</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.76rem', fontFamily: 'var(--font-sans)', marginTop: '0.2rem' }}>712 Fifth Avenue, NY 10019</div>
              </div>
            </div>
          </div>

          {/* Col 3: Curated Provenance */}
          <div>
            <div 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--gold-champagne)',
                marginBottom: '1.5rem',
              }}
            >
              Certifications
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', fontFamily: 'var(--font-sans)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <li>· Kimberley Process System of Warranties</li>
              <li>· Responsible Jewellery Council (RJC) Certified</li>
              <li>· Gemological Institute of America (GIA) Accredited</li>
              <li>· 18K 750 French Eagle Head Hallmark</li>
              <li>· Carbon Neutral Atelier Protocol</li>
            </ul>
          </div>

          {/* Col 4: Private Ledger */}
          <div>
            <div 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--gold-champagne)',
                marginBottom: '1.5rem',
              }}
            >
              Private Ledger
            </div>
            <p 
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                marginBottom: '1.2rem',
              }}
            >
              Receive confidential notices on newly unlocked solitaire allocations and private atelier viewings.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input 
                type="email" 
                placeholder="salon@clientele.com" 
                style={{
                  flex: 1,
                  padding: '0.65rem 0.8rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--gold-border)',
                  color: 'var(--text-ivory)',
                  fontSize: '0.8rem',
                  outline: 'none',
                }}
              />
              <button 
                type="button" 
                className="btn-gold-luxury"
                style={{ padding: '0.65rem 1rem', fontSize: '0.7rem' }}
                onClick={() => alert('Your invitation has been submitted to the Maître Joaillier.')}
              >
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div 
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            paddingTop: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.74rem',
            color: 'var(--text-dim)',
          }}
        >
          <div>
            © {new Date().getFullYear()} Maison d’Or Joaillerie S.A. Tous droits réservés.
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <span style={{ cursor: 'pointer' }} onClick={onOpenModal}>Atelier Protocol</span>
            <span style={{ cursor: 'pointer' }} onClick={onOpenModal}>Ethical Charter</span>
            <span style={{ cursor: 'pointer' }} onClick={onOpenModal}>Confidentiality</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
