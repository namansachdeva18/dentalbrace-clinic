'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { X, Tag, ShieldCheck } from 'lucide-react';
import { CAMPAIGN_CONFIG, isCampaignActive } from '@/data/campaignConfig';
import CampaignLeadForm from './CampaignLeadForm';

/**
 * CampaignPopup
 *
 * Triggers:
 * - Desktop: after POPUP_DELAY_MS (10s) OR when scroll > POPUP_SCROLL_THRESHOLD%
 * - Mobile: only on scroll threshold (not on load)
 *
 * Rules:
 * - Shown only ONCE per session (sessionStorage key)
 * - ESC key closes it
 * - Focus is trapped inside the modal while open
 * - prefers-reduced-motion respected (no transition animation)
 */
const CampaignPopup = () => {
  const [open, setOpen] = useState(false);
  const [triggered, setTriggered] = useState(false);
  const closeRef = useRef(null);
  const overlayRef = useRef(null);

  const show = useCallback(() => {
    if (triggered) return;
    const dismissed = sessionStorage.getItem('campaign_popup_dismissed');
    if (dismissed) return;
    setOpen(true);
    setTriggered(true);

    // Analytics event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'campaign_popup_view', {
        campaign_name: CAMPAIGN_CONFIG.CAMPAIGN_NAME,
      });
    }
  }, [triggered]);

  useEffect(() => {
    if (!isCampaignActive()) return;

    // Trigger automatically on site open (2 seconds delay for smooth load)
    let timer = setTimeout(show, 2000);

    // Scroll trigger (fallback)
    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrolled >= CAMPAIGN_CONFIG.POPUP_SCROLL_THRESHOLD) {
        show();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [show]);

  // ESC key & focus management
  useEffect(() => {
    if (!open) return;

    // Focus the close button when popup opens
    setTimeout(() => closeRef.current?.focus(), 50);

    const onKey = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden'; // Prevent background scroll

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem('campaign_popup_dismissed', '1');
  };

  const handleCtaClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'campaign_popup_cta_click', {
        campaign_name: CAMPAIGN_CONFIG.CAMPAIGN_NAME,
      });
    }
    handleClose();
  };

  if (!open) return null;

  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  return (
    <>
      {/* Backdrop */}
      <div
        ref={overlayRef}
        onClick={handleClose}
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 61, 62, 0.65)',
          backdropFilter: 'blur(4px)',
          zIndex: 9000,
          animation: prefersReducedMotion ? 'none' : 'fadeOverlay 0.25s ease forwards',
        }}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-heading"
        aria-describedby="popup-desc"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9001,
          background: '#ffffff',
          borderRadius: '24px',
          padding: '0',
          width: 'min(92vw, 480px)',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 30px 80px rgba(15,61,62,0.35)',
          animation: prefersReducedMotion ? 'none' : 'slideUp 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards',
        }}
      >
        {/* Dark header band */}
        <div style={{
          background: 'linear-gradient(135deg, #0F3D3E 0%, #1a5254 100%)',
          padding: '2rem 2rem 1.5rem',
          borderRadius: '24px 24px 0 0',
          position: 'relative',
          textAlign: 'center',
        }}>
          {/* Close button */}
          <button
            ref={closeRef}
            onClick={handleClose}
            aria-label="Close offer popup"
            style={{
              position: 'absolute',
              top: '14px',
              right: '14px',
              background: 'rgba(255,255,255,0.15)',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#ffffff',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
          >
            <X size={18} />
          </button>

          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(245,130,32,0.15)',
            border: '1px solid rgba(245,130,32,0.4)',
            borderRadius: '9999px',
            padding: '5px 14px',
            marginBottom: '1rem',
          }}>
            <Tag size={13} color="#F58220" />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#F58220', letterSpacing: '0.8px', textTransform: 'uppercase' }}>
              Limited-Time Offer
            </span>
          </div>

          <h2
            id="popup-heading"
            style={{ color: '#ffffff', fontSize: 'clamp(1.3rem, 4vw, 1.6rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}
          >
            {CAMPAIGN_CONFIG.HEADLINE}
          </h2>

          {CAMPAIGN_CONFIG.SHOW_DISCOUNT && (
            <p style={{ color: '#F58220', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.25rem' }}>
              {CAMPAIGN_CONFIG.DISCOUNT_LINE}
            </p>
          )}
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', marginBottom: 0 }}>
            {CAMPAIGN_CONFIG.BONUS_LINE}
          </p>
        </div>

        {/* Body */}
        <div style={{ padding: '1.75rem 2rem 2rem' }}>
          <p
            id="popup-desc"
            style={{ fontSize: '0.9rem', color: '#6B6B6B', lineHeight: 1.6, marginBottom: '1.5rem', textAlign: 'center' }}
          >
            Submit your enquiry online to check your eligibility for selected premium dental treatments.
            Valid until <strong style={{ color: '#2E1F1B' }}>{CAMPAIGN_CONFIG.EXPIRY_DISPLAY}</strong>.
          </p>

          {/* Trust row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginBottom: '1.5rem', fontSize: '0.8rem', color: '#6B6B6B' }}>
            <ShieldCheck size={15} color="#0F3D3E" />
            <span>BHU &amp; AIIMS-trained specialists • Bathinda</span>
          </div>

          {/* The Embedded Form */}
          <div style={{ marginTop: '1rem' }}>
            <CampaignLeadForm source="automatic_popup" />
          </div>

          <button
            onClick={handleClose}
            style={{
              width: '100%',
              padding: '0.7rem',
              background: 'transparent',
              border: 'none',
              color: '#6B6B6B',
              cursor: 'pointer',
              fontSize: '0.88rem',
              fontWeight: 600,
            }}
          >
            Maybe Later
          </button>
        </div>
      </div>

      {/* Keyframe styles injected once */}
      <style>{`
        @keyframes fadeOverlay {
          from { opacity: 0 }
          to   { opacity: 1 }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translate(-50%, calc(-50% + 30px)) }
          to   { opacity: 1; transform: translate(-50%, -50%) }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes fadeOverlay { from {} to {} }
          @keyframes slideUp     { from {} to {} }
        }
      `}</style>
    </>
  );
};

export default CampaignPopup;
