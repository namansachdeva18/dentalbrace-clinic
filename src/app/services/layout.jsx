export const metadata = {
  title: 'All Dental Treatments in Bathinda — Invisalign, Implants, Veneers & More | The DentalBrace',
  description: 'Explore all dental treatments at The DentalBrace Clinic Bathinda — Invisalign clear aligners, full mouth dental implants, All-on-4, porcelain veneers, smile makeover, digital smile design, teeth whitening, metal & ceramic braces. AIIMS-trained specialists. Book at ₹200/-.',
  alternates: {
    canonical: 'https://thedentalbrace.com/services',
  },
  openGraph: {
    title: 'All Dental Treatments in Bathinda — Invisalign, Implants, Veneers | The DentalBrace Clinic',
    description: 'Complete dental services at The DentalBrace Clinic Bathinda. Orthodontics, Prosthodontics, Cosmetic Dentistry & General Dentistry by AIIMS-trained specialists.',
    url: 'https://thedentalbrace.com/services',
    images: [
      {
        url: 'https://thedentalbrace.com/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dental Treatments at The DentalBrace Clinic Bathinda — Invisalign, Implants, Smile Makeover',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Dental Treatments in Bathinda | The DentalBrace Clinic',
    description: 'Invisalign, Implants, All-on-4, Veneers & More. AIIMS-trained specialists in Bathinda, Punjab.',
    images: ['https://thedentalbrace.com/hero-image.jpg'],
  },
};

export default function Layout({ children }) {
  return children;
}
