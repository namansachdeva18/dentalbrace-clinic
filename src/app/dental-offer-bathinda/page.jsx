import { CAMPAIGN_CONFIG } from '@/data/campaignConfig';

export const viewport = {
  themeColor: '#F58220',
};

export const metadata = {
  title: 'Up to 20% OFF Dental Treatments in Bathinda | Limited-Time Offer | The DentalBrace',
  description: 'Limited-time dental care offer at The DentalBrace Clinic, Bathinda. Up to 20% OFF selected premium treatments — Dental Implants, Invisalign, Braces, Veneers. AIIMS-trained specialists. Submit your enquiry to check eligibility. Offer valid until 31 August 2026.',
  keywords: 'dental offer Bathinda, dental discount Punjab, cheap dental implants Bathinda, Invisalign offer Bathinda, dental treatment offer Punjab, best dentist Bathinda discount',
  alternates: {
    canonical: 'https://www.thedentalbrace.com/dental-offer-bathinda',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.thedentalbrace.com/dental-offer-bathinda',
    title: 'Up to 20% OFF Dental Treatments in Bathinda | The DentalBrace Clinic',
    description: 'AIIMS-trained dental specialists in Bathinda, Punjab. Limited-time offer on Dental Implants, Invisalign, Smile Makeovers & more. Dr. Sandeep Kumar & Dr. Ritu Saneja. Valid until 31 August 2026.',
    siteName: 'The DentalBrace Clinic & Implant Centre',
    images: [{
      url: 'https://www.thedentalbrace.com/hero-image.jpg',
      width: 1200,
      height: 630,
      alt: 'The DentalBrace Clinic & Implant Centre, Bathinda — Limited-Time Dental Care Offer Up to 20% OFF',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Up to 20% OFF Dental Treatments in Bathinda | The DentalBrace',
    description: 'Premium dental treatments in Bathinda, Punjab. Limited-time offer on Implants, Invisalign, Braces & more. BHU & AIIMS-trained specialists.',
    images: ['https://www.thedentalbrace.com/hero-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import CampaignPageClient from './CampaignPageClient';

export default function CampaignPage() {
  return <CampaignPageClient />;
}
