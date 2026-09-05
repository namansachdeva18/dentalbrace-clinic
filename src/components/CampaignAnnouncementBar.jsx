'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import { CAMPAIGN_CONFIG, isCampaignActive } from '@/data/campaignConfig';

/**
 * CampaignAnnouncementBar
 *
 * - Styled to match the requested premium top banner:
 *   Rich dark bronze/brown tone, vibrant 20% OFF pill, clear typography,
 *   golden CTA button with hover effect, and dismiss control.
 */
const CampaignAnnouncementBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isCampaignActive()) return;

    // Use current campaign key so updates re-appear
    const dismissed = sessionStorage.getItem(`campaign_bar_dismissed_${CAMPAIGN_CONFIG.CAMPAIGN_NAME}`);
    if (!dismissed) setVisible(true);

    const onKey = (e) => {
      if (e.key === 'Escape') handleDismiss();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

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
    sessionStorage.setItem(`campaign_bar_dismissed_${CAMPAIGN_CONFIG.CAMPAIGN_NAME}`, '1');
  };

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
    <aside
      id="campaign-announcement-bar"
      role="banner"
      aria-label="Limited-time dental care offer"
      style={{
        background: 'linear-gradient(90deg, #2b1f17 0%, #3a2b20 50%, #2b1f17 100%)',
        borderBottom: '1px solid rgba(229, 168, 85, 0.25)',
        color: '#f8f5ee',
        padding: '8px 16px',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 1100,
        minHeight: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .cab-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: nowrap;
          max-width: 1350px;
          margin: 0 auto;
          padding-right: 28px;
        }
        .cab-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(229, 168, 85, 0.18);
          border: 1px solid rgba(229, 168, 85, 0.45);
          color: #f7ba63;
          font-size: 0.74rem;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: 6px;
          letter-spacing: 0.5px;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .cab-text-group {
          font-size: 0.84rem;
          line-height: 1.35;
          color: #eedcc6;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }
        .cab-text-group strong {
          color: #fce7cf;
          font-weight: 700;
        }
        .cab-dot {
          color: rgba(238, 220, 198, 0.4);
          font-size: 0.8rem;
          margin: 0 1px;
        }
        .cab-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, #d89b47 0%, #be812e 100%);
          color: #1a120c;
          padding: 5px 16px;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(0,0,0,0.25);
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .cab-btn:hover {
          background: linear-gradient(135deg, #e4a856 0%, #ce8f38 100%);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(216, 155, 71, 0.4);
          color: #120c08;
        }
        .cab-close {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          color: rgba(238, 220, 198, 0.6);
          cursor: pointer;
          padding: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          transition: color 0.2s ease;
        }
        .cab-close:hover {
          color: #ffffff;
        }

        @media (max-width: 1100px) {
          .cab-validity {
            display: none;
          }
        }
        @media (max-width: 860px) {
          .cab-bonus {
            display: none;
          }
        }
        @media (max-width: 600px) {
          #campaign-announcement-bar {
            padding: 6px 12px;
          }
          .cab-wrapper {
            gap: 8px;
            padding-right: 22px;
            width: 100%;
            justify-content: space-between;
          }
          .cab-text-group {
            font-size: 0.74rem;
            white-space: normal;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            line-height: 1.25;
          }
          .cab-badge {
            font-size: 0.68rem;
            padding: 2px 6px;
          }
          .cab-btn {
            font-size: 0.72rem;
            padding: 4px 10px;
            gap: 3px;
          }
        }
      `}} />

      <div className="cab-wrapper">
        <span className="cab-badge">
          <Sparkles size={11} /> 20% OFF
        </span>

        <span className="cab-text-group">
          <strong>{CAMPAIGN_CONFIG.HEADLINE}:</strong> {CAMPAIGN_CONFIG.DISCOUNT_LINE}
          <span className="cab-dot cab-bonus">•</span>
          <span className="cab-bonus">{CAMPAIGN_CONFIG.BONUS_LINE}</span>
          <span className="cab-dot cab-validity">•</span>
          <span className="cab-validity">{CAMPAIGN_CONFIG.VALIDITY_LINE}</span>
        </span>

        <Link
          href={CAMPAIGN_CONFIG.CAMPAIGN_URL}
          onClick={handleCtaClick}
          className="cab-btn"
        >
          <span>{CAMPAIGN_CONFIG.CTA_PRIMARY}</span>
          <ArrowRight size={13} />
        </Link>
      </div>

      <button
        onClick={handleDismiss}
        aria-label="Dismiss announcement"
        className="cab-close"
      >
        <X size={15} />
      </button>
    </aside>
  );
};

export default CampaignAnnouncementBar;
