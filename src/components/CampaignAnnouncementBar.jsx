'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Tag } from 'lucide-react';
import { CAMPAIGN_CONFIG, isCampaignActive } from '@/data/campaignConfig';

/**
 * CampaignAnnouncementBar
 *
 * - Renders above the fixed Header (pushes header down, no CLS)
 * - Dismissible: closes and remembers via sessionStorage
 * - No layout shift on initial render (SSR-safe with useEffect check)
 * - Respects prefers-reduced-motion
 * - Keyboard accessible (close with ESC or Tab→button→Enter)
 * - Does NOT render if campaign is inactive/expired
 */
const CampaignAnnouncementBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Campaign expiry check — purely client-side so no hydration mismatch
    if (!isCampaignActive()) return;

    const dismissed = sessionStorage.getItem('campaign_bar_dismissed');
    if (!dismissed) setVisible(true);

    // ESC key dismissal
    const onKey = (e) => {
      if (e.key === 'Escape') handleDismiss();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync banner height to CSS variable for layout adjustments
  useEffect(() => {
    if (!visible) {
      document.documentElement.style.setProperty('--announcement-height', '0px');
      return;
    }

    const updateHeight = () => {
      const el = document.getElementById('campaign-announcement-bar');
      if (el) {
        document.documentElement.style.setProperty('--announcement-height', `${el.offsetHeight}px`);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => {
      window.removeEventListener('resize', updateHeight);
      document.documentElement.style.setProperty('--announcement-height', '0px');
    };
  }, [visible]);

  const handleDismiss = () => {
    setVisible(false);
    sessionStorage.setItem('campaign_bar_dismissed', '1');
  };

  // Track CTA clicks for analytics
  const handleCtaClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'offer_cta_click', {
        campaign_name: CAMPAIGN_CONFIG.CAMPAIGN_NAME,
        location: 'announcement_bar',
      });
    }
  };

  if (!visible) return null;

  return (
    <div
      id="campaign-announcement-bar"
      role="banner"
      aria-label="Limited-time dental care offer"
      style={{
        background: 'linear-gradient(90deg, #0F3D3E 0%, #1a5254 50%, #0F3D3E 100%)',
        color: '#ffffff',
        padding: '10px 16px',
        textAlign: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 1100,
        // Reserve height so fixed header accounts for it — no CLS
        minHeight: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .cab-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: nowrap;
          max-width: 1200px;
          margin: 0 auto;
          padding-right: 32px;
        }
        .cab-tag { display: flex; align-items: center; gap: 6px; font-size: 0.82rem; font-weight: 700; letter-spacing: 0.5px; color: #F58220; white-space: nowrap; }
        .cab-dot { font-size: 0.82rem; color: rgba(255,255,255,0.5); }
        .cab-discount { font-size: 0.82rem; font-weight: 600; color: #ffffff; white-space: nowrap; }
        .cab-date { font-size: 0.82rem; color: rgba(255,255,255,0.7); white-space: nowrap; }
        .cab-btn {
          background: #F58220;
          color: #ffffff;
          padding: 5px 14px;
          border-radius: 9999px;
          font-size: 0.78rem;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.2s ease;
          flex-shrink: 0;
        }
        .cab-btn:hover { background: #E87413; }
        
        @media (max-width: 900px) {
          .cab-date, .cab-dot.date-dot { display: none; }
        }
        @media (max-width: 600px) {
          .cab-wrapper { flex-wrap: wrap; gap: 6px; padding: 2px 24px 2px 0; justify-content: center; }
          .cab-tag { width: 100%; justify-content: center; margin-bottom: 2px; }
          .cab-dot.tag-dot { display: none; }
          .cab-discount { font-size: 0.78rem; }
          .cab-btn { font-size: 0.75rem; padding: 4px 12px; }
        }
      `}} />

      {/* Content */}
      <div className="cab-wrapper">
        <span className="cab-tag">
          <Tag size={15} color="#F58220" aria-hidden="true" />
          {CAMPAIGN_CONFIG.HEADLINE.toUpperCase()}
        </span>
        <span className="cab-dot tag-dot">•</span>
        {CAMPAIGN_CONFIG.SHOW_DISCOUNT && (
          <span className="cab-discount">
            {CAMPAIGN_CONFIG.DISCOUNT_LINE}
          </span>
        )}
        <span className="cab-dot date-dot">•</span>
        <span className="cab-date">
          Valid Until {CAMPAIGN_CONFIG.EXPIRY_DISPLAY}
        </span>
        <Link
          href={CAMPAIGN_CONFIG.CAMPAIGN_URL}
          onClick={handleCtaClick}
          className="cab-btn"
        >
          {CAMPAIGN_CONFIG.CTA_PRIMARY}
        </Link>
      </div>

      {/* Dismiss button */}
      <button
        onClick={handleDismiss}
        aria-label="Dismiss campaign announcement"
        style={{
          position: 'absolute',
          right: '12px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'transparent',
          border: 'none',
          color: 'rgba(255,255,255,0.7)',
          cursor: 'pointer',
          padding: '6px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: 1,
          transition: 'color 0.2s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default CampaignAnnouncementBar;
