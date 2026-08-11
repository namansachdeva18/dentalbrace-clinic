import '../index.css';
import '../App.css';
import '../mobile.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TransitionWrapper from './TransitionWrapper';
import CampaignAnnouncementBar from '@/components/CampaignAnnouncementBar';
import CampaignPopup from '@/components/CampaignPopup';
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
  metadataBase: new URL('https://www.thedentalbrace.com'),
  title: 'Best Invisalign & Dental Implants in Bathinda | The DentalBrace Clinic',
  description: "The DentalBrace — Bathinda's #1 clinic for Invisalign Clear Aligners, Full Mouth Dental Implants, Smile Makeovers & Dentofacial Orthopedics. AIIMS-trained specialists Dr. Sandeep Kumar & Dr. Ritu Saneja. 5,500+ braces & aligner cases. 5,000+ implants placed. 196, Bibi Wala Rd, Bathinda, Punjab.",
  alternates: {
    canonical: 'https://www.thedentalbrace.com/',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: 'https://www.thedentalbrace.com/',
    title: 'Best Invisalign & Dental Implants Clinic in Bathinda | The DentalBrace',
    description: '5,500+ braces & aligner cases. 5,000+ implants placed. AIIMS-trained Dr. Sandeep Kumar (Orthodontist) & Dr. Ritu Saneja (Gold Medalist Implantologist). Book your consultation today in Bathinda, Punjab.',
    images: [
      {
        url: 'https://www.thedentalbrace.com/hero-image.jpg',
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
    description: "Bathinda's most experienced orthodontist & implantologist team. AIIMS-trained. 10,000+ transformed smiles.",
    images: ['https://www.thedentalbrace.com/hero-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
};

export const viewport = {
  themeColor: '#F58220',
};

export default function RootLayout({ children }) {
  const globalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.thedentalbrace.com/#website",
        "url": "https://www.thedentalbrace.com",
        "name": "The DentalBrace Clinic & Implant Centre",
        "description": "Bathinda's #1 dental clinic for Invisalign, Dental Implants, Smile Makeovers & Dentofacial Orthopedics. AIIMS-trained specialists.",
        "publisher": { "@id": "https://www.thedentalbrace.com/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.thedentalbrace.com/blog?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": "Organization",
        "@id": "https://www.thedentalbrace.com/#organization",
        "name": "The DentalBrace Clinic & Implant Centre",
        "url": "https://www.thedentalbrace.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.thedentalbrace.com/logo.webp",
          "width": 175,
          "height": 175
        },
        "image": "https://www.thedentalbrace.com/hero-image.jpg",
        "telephone": "+917496849392",
        "email": "info@thedentalbrace.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "196, Bibi Wala Road, near LIC Building, opposite Petrol Pump, Kamla Nehru Colony",
          "addressLocality": "Bathinda",
          "addressRegion": "Punjab",
          "postalCode": "151001",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://www.instagram.com/thedentalbrace_bathinda?igsh=MWhxaXNpejU5bjFhdw==",
          "https://www.google.com/maps/place/The+DentalBrace+Clinic+and+Implant+Centre",
          "https://www.justdial.com/Bhatinda/The-DentalBrace-Clinic-Implant-Centre-Near-Lic-Office-Bibi-Wala/0164P1643STD200732_BZDET"
        ]
      }
    ]
  };

  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.web3forms.com" />
        {/* Geo/Local SEO meta tags */}
        <meta name="geo.region" content="IN-PB" />
        <meta name="geo.placename" content="Bathinda, Punjab, India" />
        <meta name="geo.position" content="30.210994;74.945475" />
        <meta name="ICBM" content="30.210994, 74.945475" />
        {/* hreflang */}
        <link rel="alternate" hrefLang="en-IN" href="https://www.thedentalbrace.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.thedentalbrace.com/" />
        {/* Global Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }} />
        <meta name="twitter:image:alt" content="The DentalBrace Clinic exterior Bathinda Punjab" />
      </head>
      <body className={`${outfit.variable} ${inter.variable}`} suppressHydrationWarning>
        {/* Campaign announcement bar — renders above fixed header, zero CLS */}
        <CampaignAnnouncementBar />
        <Header />
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingTop: 'var(--announcement-height, 0px)' }}>
          <TransitionWrapper>
            {children}
          </TransitionWrapper>
        </main>
        <Footer />
        {/* Campaign popup — once-per-session, scroll/time triggered */}
        <CampaignPopup />
      </body>
    </html>
  );
}
