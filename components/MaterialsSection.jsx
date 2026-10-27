'use client';

import React from 'react';

export default function MaterialsSection({ onOpenModal }) {
  const cards = [
    {
      title: '100% Conflict-Free Diamonds',
      tag: 'ETHICAL PROVENANCE',
      description: 'Unearthed strictly from certified operations complying with the System of Warranties and Kimberley Process. Each rough crystal is assigned an immutable digital chain-of-custody passport, guaranteeing conflict-free provenance from underground volcanic pipe to our workbench.',
      highlights: [
        'Kimberley Process Certified',
        'Laser-Inscribed GIA Dossier',
        'Zero Child or Forced Labor',
        'Environmental Restoration Fund',
      ],
    },
    {
      title: '18K Hallmarked Gold',
      tag: 'NOBLE METALLURGY',
      description: 'Refined in small crucible batches using 750‰ pure elemental gold, enriched with pure palladium and recycled copper to formulate our signature champagne hue. Each ring is stamped with the official French eagle head assay hallmark at the Bureau de Garantie.',
      highlights: [
        '750/1000 Elemental Purity',
        'Official French Eagle Hallmark',
        'Palladium-Infused Resilience',
        'Hypoallergenic & Nickel-Free',
      ],
    },
    {
      title: '0% Compromise',
      tag: 'ATELIER COVENANT',
      description: 'We reject industrial cadence. A single master jeweler is entrusted with your ring from initial billet forging to final buffer inspection. If an axis deviates by even two microns under stereoscopic examination, the piece is unhesitatingly melted and begun anew.',
      highlights: [
        'Single Artisan Responsibility',
        '2-Micron Maximum Tolerance',
        'Over 60 Hours of Benchwork',
        'Lifetime Atelier Concierge',
      ],
    },
  ];

  return (
    <section 
      id="materials" 
      style={{
        padding: '9rem 2rem',
        backgroundColor: 'var(--bg-noir)',
        position: 'relative',
        zIndex: 5,
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 5.5rem auto' }}>
          <div className="eyebrow-luxury" style={{ marginBottom: '1.2rem' }}>
            Uncompromising Provenance
          </div>
          <h2 
            className="heading-display text-gold-gradient"
            style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              marginBottom: '1.4rem',
            }}
          >
            Noble Materials, Pure Conviction
          </h2>
          <p 
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: '1.2rem',
              color: 'var(--text-champagne)',
              lineHeight: 1.6,
              fontWeight: 300,
            }}
          >
            True luxury whispers through integrity. Three steadfast commitments engraved into every solitary creation that emerges from our doors.
          </p>
        </div>

        {/* 3 Material Cards */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.2rem',
          }}
        >
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="atelier-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Badge Tag */}
                <div 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.4rem 0.9rem',
                    background: 'rgba(212, 175, 55, 0.08)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    borderRadius: '1px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.66rem',
                    letterSpacing: '0.2em',
                    color: 'var(--gold-champagne)',
                    textTransform: 'uppercase',
                    marginBottom: '1.8rem',
                  }}
                >
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--gold-champagne)' }} />
                  {card.tag}
                </div>

                {/* Exact Specified Title */}
                <h3 
                  className="font-serif-italic"
                  style={{
                    fontSize: '1.95rem',
                    color: 'var(--text-ivory)',
                    marginBottom: '1.4rem',
                    fontWeight: 400,
                    lineHeight: 1.2,
                  }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p 
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    lineHeight: 1.7,
                    color: 'var(--text-muted)',
                    marginBottom: '2.5rem',
                    fontWeight: 300,
                  }}
                >
                  {card.description}
                </p>
              </div>

              {/* Highlights List */}
              <div 
                style={{
                  borderTop: '1px solid var(--gold-border)',
                  paddingTop: '1.5rem',
                }}
              >
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {card.highlights.map((h, hIdx) => (
                    <li 
                      key={hIdx} 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.78rem',
                        color: 'var(--text-champagne)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      <span 
                        style={{
                          width: '12px',
                          height: '1px',
                          background: 'var(--gold-champagne)',
                          opacity: 0.7,
                        }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Call to Action */}
        <div 
          style={{
            marginTop: '4.5rem',
            textAlign: 'center',
            padding: '3rem 2rem',
            background: 'linear-gradient(180deg, rgba(212, 175, 55, 0.05) 0%, transparent 100%)',
            border: '1px solid rgba(212, 175, 55, 0.15)',
            borderRadius: '2px',
          }}
        >
          <div 
            className="font-serif-italic"
            style={{
              fontSize: '1.6rem',
              color: 'var(--text-ivory)',
              marginBottom: '1rem',
            }}
          >
            Every ring is personally certified by our Master Lapidary.
          </div>
          <p 
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              maxWidth: '580px',
              margin: '0 auto 1.8rem auto',
              lineHeight: 1.6,
            }}
          >
            Schedule a private consultation at our Place Vendôme atelier or request an encrypted provenance dossier.
          </p>
          <button 
            type="button"
            className="btn-gold-luxury"
            onClick={onOpenModal}
          >
            Inquire About Allocation
          </button>
        </div>
      </div>
    </section>
  );
}
