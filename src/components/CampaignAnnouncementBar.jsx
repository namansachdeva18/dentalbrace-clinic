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
      className="cab-root"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .cab-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 1100;
          min-height: 44px;
          background: linear-gradient(90deg, #072223 0%, #0F3D3E 38%, #144f50 62%, #092829 100%);
          border-bottom: 1px solid rgba(245, 130, 32, 0.38);
          box-shadow: 0 4px 20px rgba(7, 34, 35, 0.45);
          color: #FFF9F1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 7px 18px;
          font-family: var(--font-heading, 'Outfit', sans-serif);
          overflow: hidden;
        }

        /* Subtle animated ambient light beam */
        .cab-root::before {
          content: '';
          position: absolute;
          top: 0;
          left: -60%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), rgba(245, 130, 32, 0.12), transparent);
          transform: skewX(-25deg);
          animation: cabShimmer 6s infinite ease-in-out;
          pointer-events: none;
        }

        @keyframes cabShimmer {
          0% { left: -60%; opacity: 0; }
          20% { opacity: 1; }
          45% { left: 130%; opacity: 0; }
          100% { left: 130%; opacity: 0; }
        }

        .cab-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          flex-wrap: nowrap;
          max-width: 1380px;
          margin: 0 auto;
          padding-right: 32px;
          position: relative;
          z-index: 1;
        }

        /* Innovative Glowing Pill Badge */
        .cab-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: linear-gradient(135deg, rgba(245, 130, 32, 0.22) 0%, rgba(245, 130, 32, 0.12) 100%);
          border: 1px solid rgba(245, 130, 32, 0.6);
          color: #FFA542;
          font-size: 0.73rem;
          font-weight: 800;
          padding: 3px 10px;
          border-radius: 9999px;
          letter-spacing: 0.6px;
          white-space: nowrap;
          flex-shrink: 0;
          box-shadow: 0 0 14px rgba(245, 130, 32, 0.22);
          text-transform: uppercase;
        }

        .cab-badge-icon {
          color: #FFB35C;
          animation: cabPulse 2.4s infinite ease-in-out;
        }

        @keyframes cabPulse {
          0%, 100% { transform: scale(1) rotate(0deg); filter: drop-shadow(0 0 2px #F58220); }
          50% { transform: scale(1.18) rotate(12deg); filter: drop-shadow(0 0 6px #FFA542); }
        }

        .cab-text-group {
          font-size: 0.84rem;
          line-height: 1.35;
          color: #E6F0EE;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          white-space: nowrap;
          letter-spacing: 0.15px;
        }

        .cab-text-group strong {
          color: #FFFFFF;
          font-weight: 700;
        }

        .cab-highlight {
          color: #FFAA47;
          font-weight: 700;
        }

        .cab-dot {
          color: rgba(230, 240, 238, 0.35);
          font-size: 0.8rem;
          margin: 0 2px;
        }

        /* Innovative CTA Button: The DentalBrace Warm Orange with Subtle Sheen */
        .cab-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, #F58220 0%, #D86A08 100%);
          color: #FFFFFF;
          padding: 5px 16px;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          box-shadow: 0 2px 10px rgba(245, 130, 32, 0.38), 0 0 0 1px rgba(255, 255, 255, 0.15) inset;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
        }

        .cab-btn::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          transform: skewX(-20deg);
          transition: left 0.5s ease;
        }

        .cab-btn:hover {
          background: linear-gradient(135deg, #FF9133 0%, #E87413 100%);
          transform: translateY(-1px) scale(1.02);
          box-shadow: 0 4px 16px rgba(245, 130, 32, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.3) inset;
          color: #FFFFFF;
        }

        .cab-btn:hover::after {
          left: 140%;
        }

        .cab-btn-arrow {
          transition: transform 0.2s ease;
        }

        .cab-btn:hover .cab-btn-arrow {
          transform: translateX(2px);
        }

        /* Close Button */
        .cab-close {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 50%;
          color: rgba(230, 240, 238, 0.75);
          cursor: pointer;
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          transition: all 0.2s ease;
          z-index: 2;
        }

        .cab-close:hover {
          background: rgba(255, 255, 255, 0.18);
          color: #FFFFFF;
          border-color: rgba(245, 130, 32, 0.5);
          transform: translateY(-50%) scale(1.08);
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
          .cab-root {
            padding: 6px 10px;
          }
          .cab-wrapper {
            gap: 7px;
            padding-right: 28px;
            width: 100%;
            justify-content: space-between;
          }
          .cab-text-group {
            font-size: 0.73rem;
            white-space: normal;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            line-height: 1.25;
          }
          .cab-badge {
            font-size: 0.65rem;
            padding: 2px 7px;
          }
          .cab-btn {
            font-size: 0.72rem;
            padding: 4px 11px;
            gap: 3px;
          }
        }
      `}} />

      <div className="cab-wrapper">
        <span className="cab-badge">
          <Sparkles size={12} className="cab-badge-icon" /> 20% OFF
        </span>

        <span className="cab-text-group">
          <strong>{CAMPAIGN_CONFIG.HEADLINE}:</strong>{' '}
          <span className="cab-highlight">{CAMPAIGN_CONFIG.DISCOUNT_LINE}</span>
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
          <ArrowRight size={13} className="cab-btn-arrow" />
        </Link>
      </div>

      <button
        onClick={handleDismiss}
        aria-label="Dismiss announcement"
        className="cab-close"
      >
        <X size={14} />
      </button>
    </aside>
  );
};

export default CampaignAnnouncementBar;
