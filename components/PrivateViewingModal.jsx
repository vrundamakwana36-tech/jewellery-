'use client';

import React, { useState } from 'react';

export default function PrivateViewingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    salon: 'Paris · Place Vendôme',
    date: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [reservationId, setReservationId] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedId = 'PV-' + Math.floor(100000 + Math.random() * 900000);
    setReservationId(generatedId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 20000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(5, 4, 3, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: '#0E0C0B',
          border: '1px solid var(--gold-border-bright)',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(212, 175, 55, 0.15)',
          maxWidth: '580px',
          width: '100%',
          padding: 'clamp(2rem, 5vw, 3.2rem)',
          position: 'relative',
          borderRadius: '2px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          type="button"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            fontSize: '1.5rem',
            cursor: 'pointer',
            lineHeight: 1,
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold-champagne)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
        >
          ✕
        </button>

        {!submitted ? (
          <div>
            <div className="eyebrow-luxury" style={{ marginBottom: '0.8rem' }}>
              By Appointment Only
            </div>
            <h2 
              className="heading-display text-gold-gradient"
              style={{
                fontSize: '2.2rem',
                marginBottom: '0.8rem',
              }}
            >
              Request Private Viewing
            </h2>
            <p 
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: 'var(--text-champagne)',
                marginBottom: '2rem',
                lineHeight: 1.5,
              }}
            >
              Please enter your details below. Our Maître Joaillier will contact you within twenty-four hours to coordinate your salon reception.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <label 
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '0.4rem',
                  }}
                >
                  Full Name
                </label>
                <input 
                  type="text" 
                  name="fullName"
                  required
                  placeholder="e.g. Lady Vivienne Montgomery"
                  value={formData.fullName}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--gold-border)',
                    borderRadius: '1px',
                    color: 'var(--text-ivory)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label 
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="vivienne@montgomery.co"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--gold-border)',
                      borderRadius: '1px',
                      color: 'var(--text-ivory)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                  />
                </div>
                <div>
                  <label 
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Salon Reception
                  </label>
                  <select 
                    name="salon"
                    value={formData.salon}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      backgroundColor: '#12100E',
                      border: '1px solid var(--gold-border)',
                      borderRadius: '1px',
                      color: 'var(--text-ivory)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.84rem',
                      outline: 'none',
                    }}
                  >
                    <option value="Paris · Place Vendôme">Paris · Place Vendôme</option>
                    <option value="London · New Bond Street">London · New Bond Street</option>
                    <option value="New York · Fifth Avenue">New York · Fifth Avenue</option>
                    <option value="Private Atelier Courier">Private Atelier Courier</option>
                  </select>
                </div>
              </div>

              <div>
                <label 
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '0.4rem',
                  }}
                >
                  Preferred Date
                </label>
                <input 
                  type="date" 
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--gold-border)',
                    borderRadius: '1px',
                    color: 'var(--text-ivory)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label 
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.68rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '0.4rem',
                  }}
                >
                  Notes or Custom Inscription
                </label>
                <textarea 
                  name="notes"
                  rows={3}
                  placeholder="Include any specific carat or finger size preferences..."
                  value={formData.notes}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--gold-border)',
                    borderRadius: '1px',
                    color: 'var(--text-ivory)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    outline: 'none',
                    resize: 'none',
                  }}
                />
              </div>

              <button 
                type="submit"
                className="btn-gold-luxury"
                style={{ marginTop: '0.8rem', width: '100%' }}
              >
                Confirm Appointment Request
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div 
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                border: '1px solid var(--gold-champagne)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                color: 'var(--gold-champagne)',
                fontSize: '1.8rem',
              }}
            >
              ✓
            </div>
            <div className="eyebrow-luxury" style={{ marginBottom: '0.8rem' }}>
              Invitation Recorded
            </div>
            <h2 
              className="heading-display text-gold-gradient"
              style={{
                fontSize: '2.2rem',
                marginBottom: '1rem',
              }}
            >
              Receipt Folio Confirmed
            </h2>
            <p 
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.15rem',
                color: 'var(--text-champagne)',
                marginBottom: '1.8rem',
                lineHeight: 1.6,
              }}
            >
              Thank you, {formData.fullName}. Your private viewing dossier has been cataloged under registration <strong>{reservationId}</strong>. A confidential confirmation has been dispatched to <em>{formData.email}</em>.
            </p>
            <button 
              type="button"
              className="btn-gold-luxury"
              onClick={handleReset}
            >
              Return to Atelier
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
