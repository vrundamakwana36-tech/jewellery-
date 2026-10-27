'use client';

import React from 'react';

export default function CraftsmanshipSection() {
  const columns = [
    {
      numeral: 'I',
      eyebrow: '0.01mm Optical Rigor',
      title: 'The Lapidary’s Hand',
      description: 'Only 0.02% of gem-quality rough diamonds qualify for our atelier. Every facet is calibrated with laser interferometry to ensure absolute light re-entry and total internal reflection, hand-lapped on boxwood wheels with sub-micron diamond grit.',
      metrics: [
        { label: 'Facet Angle', value: '40.75° Ideal' },
        { label: 'Polish Lap', value: '40 Hours' },
      ],
    },
    {
      numeral: 'II',
      eyebrow: 'Cire Perdue Metallurgy',
      title: 'Lost-Wax Forging',
      description: 'Each setting begins as a hand-carved jeweler’s wax before being cast in molten 18K champagne gold alloyed with trace palladium. Cold-burnished with polished agate to compress the crystalline grain for generational durability.',
      metrics: [
        { label: 'Alloy Fineness', value: '750‰ Pure' },
        { label: 'Cold Burnish', value: 'Manual Agate' },
      ],
    },
    {
      numeral: 'III',
      eyebrow: 'Bureau De Garantie',
      title: 'The Atelier Hallmark',
      description: 'Before departing our Place Vendôme sanctuary, each ring is submitted to the French Bureau de Garantie for hand-struck eagle head assay hallmarking, laser-inscribed with its unique atelier folio number and certified in the permanent registry.',
      metrics: [
        { label: 'Assay Mark', value: 'Eagle Head' },
        { label: 'Ledger Registry', value: 'Lifetime' },
      ],
    },
  ];

  return (
    <section 
      id="craftsmanship" 
      style={{
        padding: '8rem 2rem',
        backgroundColor: 'var(--bg-noir)',
        position: 'relative',
        zIndex: 5,
        borderTop: '1px solid rgba(212, 175, 55, 0.12)',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 5rem auto' }}>
          <div className="eyebrow-luxury" style={{ marginBottom: '1.2rem' }}>
            Artisanal Mastery
          </div>
          <h2 
            className="heading-display text-gold-gradient"
            style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              marginBottom: '1.4rem',
            }}
          >
            The Art of the Maître Joaillier
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
            Where century-old Parisian tradition converges with optical physics. Every gesture executed in candlelight, guided by decades of generational touch.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {columns.map((col, idx) => (
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
                {/* Roman Numeral Header */}
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.8rem',
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.8rem',
                      color: 'var(--gold-champagne)',
                      opacity: 0.85,
                    }}
                  >
                    {col.numeral}
                  </span>
                  <span 
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {col.eyebrow}
                  </span>
                </div>

                {/* Column Title in Cormorant Garamond Italic */}
                <h3 
                  className="font-serif-italic"
                  style={{
                    fontSize: '1.85rem',
                    color: 'var(--text-ivory)',
                    marginBottom: '1.2rem',
                    fontWeight: 400,
                  }}
                >
                  {col.title}
                </h3>

                {/* Column Description */}
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
                  {col.description}
                </p>
              </div>

              {/* Metrics Row */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid var(--gold-border)',
                }}
              >
                {col.metrics.map((m, mIdx) => (
                  <div key={mIdx}>
                    <div 
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.18em',
                        color: 'var(--text-dim)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {m.label}
                    </div>
                    <div 
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.05rem',
                        color: 'var(--gold-champagne)',
                        marginTop: '0.3rem',
                      }}
                    >
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
