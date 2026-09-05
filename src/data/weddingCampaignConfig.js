/**
 * WEDDING SEASON SMILE CAMPAIGN CONFIGURATION
 * Single Source of Truth for /wedding-season-dental-offer-bathinda
 *
 * Easy to update, no hardcoded pricing or unverified promises.
 * Gracefully transitions to evergreen mode when expired or set inactive.
 */

export const WEDDING_CAMPAIGN_CONFIG = {
  // Master active switch
  ACTIVE: true,

  // Campaign Identifiers
  ID: 'wedding_season_smile_bathinda',
  SLUG: '/wedding-season-dental-offer-bathinda',
  CANONICAL_URL: 'https://www.thedentalbrace.com/wedding-season-dental-offer-bathinda',

  // Phone and WhatsApp
  PHONE_DISPLAY: '+91 74968-49392',
  PHONE_TEL: '+917496849392',
  WHATSAPP_PHONE: '917496849392',
  WHATSAPP_MESSAGE: 'Hi The DentalBrace, I am interested in the Wedding Season Smile Campaign. I would like to know which dental treatment may be suitable for me.',

  // Clinic Verified Address
  CLINIC_NAME: 'The DentalBrace Clinic & Implant Centre',
  ADDRESS_LINE1: '196, Bibi Wala Road',
  ADDRESS_LINE2: 'Near LIC Building, Opposite Petrol Pump, Kamla Nehru Colony',
  CITY: 'Bathinda',
  STATE: 'Punjab',
  PINCODE: '151001',
  GOOGLE_MAPS_URL: 'https://maps.app.goo.gl/uksfFySwX9RL5uu56',

  // Campaign Messaging
  EYEBROW: 'Wedding Season Smile Campaign · Bathinda',
  H1: "Get Wedding-Ready With a Smile You'll Love",
  SUBTITLE: 'Specialist cosmetic, orthodontic & restorative dental care in Bathinda designed to help you look and feel your absolute best across every photograph, celebration and milestone moment.',

  // Campaign Season Dates (can be updated seasonally)
  SEASON_NAME: 'Wedding Season 2026–2027',
  CAMPAIGN_VALIDITY_DISPLAY: 'Active for Upcoming Wedding Season Bookings',

  // Offer Details (Configurable, compliant, no fake discounts)
  OFFER_TITLE: 'Wedding-Ready Smile Assessment & Priority Planning',
  OFFER_INCLUSIONS: [
    'Comprehensive Smile & Oral Health Clinical Assessment',
    '3D Digital Intraoral Scan & Bite Analysis',
    'Personalized Treatment Timeline & Achievable Milestones Plan',
    'Specialist Guidance by AIIMS & BHU-Trained Doctors',
    'Transparent Treatment Breakdown & Flexible Payment Options'
  ],
  OFFER_ELIGIBILITY: 'Open to brides, grooms, families, wedding guests, as well as general patients seeking smile makeover, aligner, or implant treatments in Bathinda.',
  OFFER_DISCLAIMER: 'All treatment options, required visit schedules, and clinical fees are determined strictly following individual clinical diagnosis and examination by our specialists. Results and timelines vary depending on initial dental health and chosen procedures.',

  // CTA Labels
  CTA_HERO_PRIMARY: 'Book Wedding Smile Consultation',
  CTA_HERO_SECONDARY: 'WhatsApp About My Wedding Smile',
  CTA_FORM_SUBMIT: 'Request My Wedding Smile Consultation',
  CTA_STICKY_BOOK: 'Book Consultation',
  CTA_STICKY_WA: 'WhatsApp',
  CTA_STICKY_CALL: 'Call Clinic',
};

export function isWeddingCampaignActive() {
  return WEDDING_CAMPAIGN_CONFIG.ACTIVE;
}
