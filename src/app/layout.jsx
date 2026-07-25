import '../index.css';
import '../App.css';
import '../mobile.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TransitionWrapper from './TransitionWrapper';
import { Outfit, Inter } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  title: 'Best Invisalign & Dental Implants in Bathinda | The DentalBrace Clinic',
  description: "The DentalBrace — Bathinda's #1 clinic for Invisalign Clear Aligners, Full Mouth Dental Implants, Smile Makeovers & Dentofacial Orthopedics. AIIMS-trained specialists Dr. Sandeep Kumar & Dr. Ritu Saneja. 5000+ braces & aligner cases. 3000+ implants placed. Consultation at a nominal ₹200/-. 196, Bibi Wala Rd, near LIC Building, opposite Petrol Pump, Kamla Nehru Colony, Bathinda, Punjab.",
  alternates: {
    canonical: 'https://thedentalbrace.com/',
  },
  icons: {
    icon: '/favicon-logo.png',
    apple: '/favicon-logo.png',
  },
  themeColor: '#F58220',
  openGraph: {
    type: 'website',
    url: 'https://thedentalbrace.com/',
    title: 'Best Invisalign & Dental Implants Clinic in Bathinda | The DentalBrace',
    description: '5000+ braces & aligner cases. 3000+ implants placed. AIIMS-trained Dr. Sandeep Kumar (Orthodontist) & Dr. Ritu Saneja (Gold Medalist Implantologist). Book your consultation today (just ₹200/-) in Bathinda, Punjab.',
    images: [
      {
        url: 'https://thedentalbrace.com/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The DentalBrace Clinic and Implant Centre, 196, Bibi Wala Rd Bathinda — Dr. Sandeep Kumar Orthodontist and Dr. Ritu Saneja Implantologist',
      },
    ],
    siteName: 'The DentalBrace Clinic & Implant Centre',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@thedentalbrace',
    title: 'Best Invisalign & Dental Implants in Bathinda | The DentalBrace',
    description: "Bathinda's most experienced orthodontist & implantologist team. AIIMS-trained. 10k+ transformed smiles. Consultation at a nominal ₹200/-.",
    images: ['https://thedentalbrace.com/hero-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="twitter:image:alt" content="The DentalBrace Clinic exterior Bathinda Punjab" />
      </head>
      <body className={`${outfit.variable} ${inter.variable}`} suppressHydrationWarning>
        <Header />
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <TransitionWrapper>
            {children}
          </TransitionWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
