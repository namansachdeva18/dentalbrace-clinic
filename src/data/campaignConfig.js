/**
 * CAMPAIGN CONFIGURATION — Single Source of Truth
 * 
 * COMPLIANCE NOTE: Before enabling the promotional discount language publicly,
 * the clinic must verify that this offer structure is permitted under applicable
 * dental professional/advertising regulations in India and Punjab state rules.
 *
 * To disable the campaign: set CAMPAIGN_ACTIVE = false
 * To disable only the discount language: set SHOW_DISCOUNT = false
 */

export const CAMPAIGN_CONFIG = {
  // ─── Master Switch ───────────────────────────────────────────────
  // Set to false to completely hide all campaign UI (announcement bar, popup, hero badge)
  CAMPAIGN_ACTIVE: true,

  // ─── Discount Language Switch ─────────────────────────────────────
  // Set to false to hide "Up to 20% OFF" language while keeping the campaign structure
  // ⚠️  COMPLIANCE: Only set to true after clinic has confirmed offer is permitted under
  // applicable dental advertising regulations in India.
  SHOW_DISCOUNT: true,

  // ─── Offer Expiry ─────────────────────────────────────────────────
  // Campaign expires at end of September 30, 2026 (India Standard Time = UTC+5:30)
  EXPIRY_DATE: new Date('2026-09-30T23:59:59+05:30'),
  EXPIRY_DISPLAY: '30 September 2026',

  // ─── Campaign Identity ─────────────────────────────────────────────
  CAMPAIGN_NAME: 'wedding_season_dental_offer',
  CAMPAIGN_URL: '/wedding-season-dental-offer-bathinda',

  // ─── Copy Strings ─────────────────────────────────────────────────
  HEADLINE: 'Wedding Season Special',
  DISCOUNT_LINE: '20% OFF Camera-Ready Smile Makeovers & Clear Aligners',
  BONUS_LINE: 'Perfect Smiles for Brides, Grooms & Families',
  VALIDITY_LINE: 'Limited Wedding Slots · Valid Till 30 September 2026',
  CTA_PRIMARY: 'Claim 20% Offer',
  CTA_SECONDARY: 'Book Consultation',
  CTA_FORM: 'Check My Eligibility',

  // ─── Disclaimer (must match actual clinic policy) ─────────────────
  DISCLAIMER: 'Offer eligibility, applicable treatments and final treatment pricing are subject to clinical assessment and clinic terms. Please confirm the applicable campaign benefit with the clinic before proceeding with treatment.',

  // ─── Popup Timing ─────────────────────────────────────────────────
  // Delay before popup appears (ms). Default: 10 seconds
  POPUP_DELAY_MS: 10000,
  // Minimum scroll % before popup can appear (alternative trigger)
  POPUP_SCROLL_THRESHOLD: 40,
};

/**
 * Returns true if the campaign is currently active and not expired.
 */
export function isCampaignActive() {
  if (!CAMPAIGN_CONFIG.CAMPAIGN_ACTIVE) return false;
  return new Date() < CAMPAIGN_CONFIG.EXPIRY_DATE;
}
