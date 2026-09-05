import { WEDDING_CAMPAIGN_CONFIG } from '@/data/weddingCampaignConfig';
import WeddingCampaignClient from './WeddingCampaignClient';

export const viewport = {
  themeColor: '#0F3D3E',
};

export const metadata = {
  title: 'Wedding Smile & Premium Dental Care in Bathinda | The DentalBrace',
  description: 'Prepare your smile for wedding season in Bathinda with AIIMS & BHU-trained dental specialists at The DentalBrace. Teeth whitening, Invisalign, veneers, dental implants, and smile makeovers. Book your consultation today.',
  keywords: 'wedding dental treatment Bathinda, wedding season dental offer Bathinda, wedding smile makeover Bathinda, wedding-ready smile Bathinda, cosmetic dentist Bathinda, best cosmetic dentist in Bathinda, dentist in Bathinda, best dentist in Bathinda, dental clinic in Bathinda, premium dental clinic Bathinda, smile makeover Bathinda, teeth whitening Bathinda, dental veneers Bathinda, dental crowns Bathinda, Invisalign Bathinda, clear aligners Bathinda, orthodontist Bathinda, dental implants Bathinda, best dental implants Bathinda, full mouth rehabilitation Bathinda, teeth cleaning Bathinda, bridal smile makeover Bathinda, groom smile makeover Bathinda',
  alternates: {
    canonical: WEDDING_CAMPAIGN_CONFIG.CANONICAL_URL,
  },
  openGraph: {
    type: 'website',
    url: WEDDING_CAMPAIGN_CONFIG.CANONICAL_URL,
    title: 'Wedding Smile & Premium Dental Care in Bathinda | The DentalBrace',
    description: 'Look and feel your absolute best in every wedding photo. Expert smile makeovers, teeth whitening, clear aligners, and dental implants by Ex-AIIMS & Gold Medalist specialists in Bathinda, Punjab.',
    siteName: 'The DentalBrace Clinic & Implant Centre',
    locale: 'en_IN',
    images: [
      {
        url: 'https://www.thedentalbrace.com/images/wedding_smile_hero.jpg',
        width: 1200,
        height: 675,
        alt: 'Wedding-ready smile consultation at The DentalBrace Clinic in Bathinda Punjab',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Smile & Premium Dental Care in Bathinda | The DentalBrace',
    description: 'Get wedding-ready with a smile you will love. Specialist cosmetic, orthodontic, and implant dentistry in Bathinda.',
    images: ['https://www.thedentalbrace.com/images/wedding_smile_hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WeddingCampaignPage() {
  return <WeddingCampaignClient />;
}
