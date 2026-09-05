'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { X, Tag } from 'lucide-react';
import { CAMPAIGN_CONFIG, isCampaignActive } from '@/data/campaignConfig';
import WeddingLeadForm from './WeddingLeadForm';

/**
 * CampaignPopup
 *
 * Universal site-wide popup form:
 * - Appears after 2.5s delay or scroll threshold
 * - Can be triggered programmatically via window.openOfferPopup() or 'open_offer_popup' event
 * - Shows the verified high-converting 20% OFF Smile Makeover Lead Form
 * - Shown once per session (dismissable via X, Escape key, or clicking backdrop)
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

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'campaign_popup_view', {
        campaign_name: CAMPAIGN_CONFIG.CAMPAIGN_NAME,
      });
    }
  }, [triggered]);

  // Global trigger listener
  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener('open_offer_popup', handleOpen);
    window.addEventListener('open_campaign_popup', handleOpen);
    window.openOfferPopup = handleOpen;

    return () => {
      window.removeEventListener('open_offer_popup', handleOpen);
      window.removeEventListener('open_campaign_popup', handleOpen);
      delete window.openOfferPopup;
    };
  }, []);

  useEffect(() => {
    if (!isCampaignActive()) return;

    // Trigger automatically on site open (2.5 seconds delay for smooth load)
    let timer = setTimeout(show, 2500);

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

    setTimeout(() => closeRef.current?.focus(), 50);

    const onKey = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem('campaign_popup_dismissed', '1');
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
          background: 'rgba(15, 23, 25, 0.72)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          zIndex: 9000,
          animation: prefersReducedMotion ? 'none' : 'fadeOverlay 0.25s ease forwards',
        }}
      />

      {/* Modal Card matching reference screenshot */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-heading"
        aria-describedby="popup-desc"
        className="campaign-popup-card"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9001,
          background: '#ffffff',
          borderRadius: '26px',
          padding: '1.6rem 1.45rem 1.35rem',
          width: 'min(92vw, 440px)',
          maxHeight: '94vh',
          overflowY: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          boxShadow: '0 24px 70px rgba(0, 0, 0, 0.38), 0 0 0 1px rgba(184, 129, 61, 0.15)',
          animation: prefersReducedMotion ? 'none' : 'slideUp 0.28s cubic-bezier(0.2, 0.9, 0.3, 1) forwards',
          boxSizing: 'border-box',
        }}
      >
        {/* Floating circular close button (top right) */}
        <button
          ref={closeRef}
          onClick={handleClose}
          aria-label="Close offer popup"
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            background: '#ffffff',
            border: '1px solid #e7e0d6',
            borderRadius: '50%',
            width: '34px',
            height: '34px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#6e655d',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            transition: 'all 0.18s ease',
            zIndex: 10,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.color = '#2E1F1B';
            e.currentTarget.style.borderColor = '#b8813d';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.color = '#6e655d';
            e.currentTarget.style.borderColor = '#e7e0d6';
          }}
        >
          <X size={17} />
        </button>

        {/* Header Content */}
        <div style={{ textAlign: 'center', marginBottom: '0.85rem', paddingTop: '0.1rem' }}>
          {/* Badge: EXCLUSIVE SEASONAL OFFER */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: '#1d1711',
            border: '1px solid rgba(220, 168, 88, 0.45)',
            borderRadius: '9999px',
            padding: '5px 14px',
            marginBottom: '0.65rem',
            boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
          }}>
            <Tag size={13} color="#f3be6c" />
            <span style={{
              fontSize: '0.68rem',
              fontWeight: 800,
              color: '#f3be6c',
              letterSpacing: '0.6px',
              textTransform: 'uppercase',
            }}>
              Exclusive Seasonal Offer
            </span>
          </div>

          {/* Heading: Claim 20% OFF Your Smile Makeover */}
          <h2
            id="popup-heading"
            style={{
              color: '#211c19',
              fontSize: 'clamp(1.35rem, 4.5vw, 1.55rem)',
              fontWeight: 800,
              lineHeight: 1.22,
              margin: '0 0 0.4rem',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.3px',
            }}
          >
            Claim <span style={{ color: '#D47A22' }}>20% OFF</span> Your Smile Makeover
          </h2>

          <p
            id="popup-desc"
            style={{
              fontSize: '0.84rem',
              color: '#736b63',
              lineHeight: 1.45,
              margin: '0 auto',
              maxWidth: '360px',
            }}
          >
            Lock in your priority consultation and 20% seasonal voucher on select aesthetic &amp; smile packages. Fill out the quick details below:
          </p>
        </div>

        {/* Universal Wedding / Smile Lead Form */}
        <div className="popup-form-wrapper" style={{ marginTop: '0.65rem' }}>
          <WeddingLeadForm
            source="universal_website_popup"
            compactMode={true}
          />
        </div>
      </div>

      {/* Keyframe styles */}
      <style>{`
        .campaign-popup-card::-webkit-scrollbar {
          display: none;
        }
        @keyframes fadeOverlay {
          from { opacity: 0 }
          to   { opacity: 1 }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translate(-50%, calc(-50% + 22px)) scale(0.97) }
          to   { opacity: 1; transform: translate(-50%, -50%) scale(1) }
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
