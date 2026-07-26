import PageClient from './PageClient';
import treatmentData from '@/data';

// ─── Rich, location-optimised metadata per treatment slug ──────────────────────
const treatmentMeta = {
  'invisalign': {
    title: 'Best Invisalign & Clear Aligners in Bathinda | Dr. Sandeep Kumar | The DentalBrace',
    description: 'Get Invisalign clear aligners in Bathinda from Dr. Sandeep Kumar — Certified Invisalign Provider with 5500+ cases. Ex-Resident AIIMS. Virtually invisible, removable braces. Book consultation at ₹200/-.',
    canonical: 'https://thedentalbrace.com/treatments/invisalign',
    ogImage: 'https://thedentalbrace.com/dr-sandeep.jpg',
  },
  'dental-implants': {
    title: 'Dental Implants in Bathinda — Permanent Tooth Replacement | The DentalBrace',
    description: 'Get full mouth dental implants in Bathinda from Dr. Ritu Saneja — Gold Medalist Prosthodontist with 5000+ implants placed. Ex-AIIMS, PGIMER. Titanium implants from ₹25,000. Book today.',
    canonical: 'https://thedentalbrace.com/treatments/dental-implants',
    ogImage: 'https://thedentalbrace.com/dr-ritu.jpg',
  },
  'all-on-4': {
    title: 'All-on-4 Full Mouth Dental Implants in Bathinda | The DentalBrace Clinic',
    description: 'Restore your entire smile with All-on-4 dental implants in Bathinda by Dr. Ritu Saneja — Gold Medalist Implantologist. Permanent fixed teeth in fewer visits. No bone grafting needed in most cases.',
    canonical: 'https://thedentalbrace.com/treatments/all-on-4',
    ogImage: 'https://thedentalbrace.com/dr-ritu.jpg',
  },
  'smile-makeover': {
    title: 'Digital Smile Makeover in Bathinda — Veneers, Aligners & Whitening | The DentalBrace',
    description: 'Transform your smile with a custom Digital Smile Makeover in Bathinda. Combines porcelain veneers, Invisalign, and whitening. Preview your new smile before treatment begins. Book today.',
    canonical: 'https://thedentalbrace.com/treatments/smile-makeover',
    ogImage: 'https://thedentalbrace.com/hero-image.jpg',
  },
  'braces': {
    title: 'Dental Braces in Bathinda — Metal, Ceramic & Damon Braces | The DentalBrace',
    description: 'Get the best dental braces in Bathinda from Dr. Sandeep Kumar (MDS Orthodontics, Ex-AIIMS). We offer metal, ceramic & self-ligating Damon braces for precise, permanent teeth straightening.',
    canonical: 'https://thedentalbrace.com/treatments/braces',
    ogImage: 'https://thedentalbrace.com/dr-sandeep.jpg',
  },
  'veneers': {
    title: 'Porcelain Dental Veneers in Bathinda — Smile Transformation | The DentalBrace',
    description: 'Get ultra-thin E-max porcelain veneers in Bathinda from Dr. Ritu Saneja — Gold Medalist Prosthodontist. Cover chips, stains & gaps. Instant smile transformation. Lasts 10-15 years.',
    canonical: 'https://thedentalbrace.com/treatments/veneers',
    ogImage: 'https://thedentalbrace.com/hero-image.jpg',
  },
  'teeth-whitening': {
    title: 'Professional Teeth Whitening in Bathinda — In-Clinic & Laser | The DentalBrace',
    description: 'Get professional teeth whitening in Bathinda at The DentalBrace Clinic. LED and laser whitening for up to 8 shades brighter in one appointment. Safe, fast & effective. Book today.',
    canonical: 'https://thedentalbrace.com/treatments/teeth-whitening',
    ogImage: 'https://thedentalbrace.com/hero-image.jpg',
  },
  'root-canal': {
    title: 'Painless Root Canal Treatment in Bathinda | The DentalBrace Clinic',
    description: 'Get a painless root canal treatment in Bathinda at The DentalBrace Clinic. Modern rotary endodontics with zero discomfort. Save your natural tooth instead of extraction. Book today.',
    canonical: 'https://thedentalbrace.com/treatments/root-canal',
    ogImage: 'https://thedentalbrace.com/hero-image.jpg',
  },
  'dental-crown-bridge': {
    title: 'Dental Crown & Bridge in Bathinda — Zirconia & Ceramic | The DentalBrace',
    description: 'Get custom zirconia and e.max dental crowns & bridges in Bathinda at The DentalBrace Clinic. Restore broken, decayed, or missing teeth with natural-looking, durable prosthetics.',
    canonical: 'https://thedentalbrace.com/treatments/dental-crown-bridge',
    ogImage: 'https://thedentalbrace.com/hero-image.jpg',
  },
  'dentofacial-orthopedics': {
    title: 'Dentofacial Orthopedics in Bathinda — Jaw Growth Correction | The DentalBrace',
    description: 'Dentofacial Orthopedics in Bathinda by Dr. Sandeep Kumar (AIIMS-trained). Correct jaw growth, overbite & underbite in children and teens. Early treatment prevents surgery later. Book now.',
    canonical: 'https://thedentalbrace.com/treatments/dentofacial-orthopedics',
    ogImage: 'https://thedentalbrace.com/dr-sandeep.jpg',
  },
  'kids-dentistry': {
    title: 'Kids Dentistry & Pediatric Orthodontics in Bathinda | The DentalBrace Clinic',
    description: 'Gentle kids dentistry and early orthodontic intervention in Bathinda for children. Prevent future dental problems with early treatment by Dr. Sandeep Kumar — AIIMS-trained orthodontist.',
    canonical: 'https://thedentalbrace.com/treatments/kids-dentistry',
    ogImage: 'https://thedentalbrace.com/dr-sandeep.jpg',
  },
  'gum-treatment': {
    title: 'Gum Treatment & Scaling in Bathinda — Periodontitis Care | The DentalBrace',
    description: 'Expert gum treatment and deep scaling in Bathinda at The DentalBrace Clinic. Treat bleeding gums, bad breath, and periodontal disease. Healthy gums are the foundation of a healthy smile.',
    canonical: 'https://thedentalbrace.com/treatments/gum-treatment',
    ogImage: 'https://thedentalbrace.com/hero-image.jpg',
  },
  'wisdom-tooth-removal': {
    title: 'Wisdom Tooth Removal in Bathinda — Painless Extraction | The DentalBrace',
    description: 'Painless wisdom tooth extraction in Bathinda at The DentalBrace Clinic. Surgical removal of impacted wisdom teeth by experienced specialists. Minimize pain, prevent infection. Book today.',
    canonical: 'https://thedentalbrace.com/treatments/wisdom-tooth-removal',
    ogImage: 'https://thedentalbrace.com/hero-image.jpg',
  },
  'composite-bonding': {
    title: 'Composite Bonding in Bathinda — Fix Chips & Gaps | The DentalBrace',
    description: 'Affordable composite bonding in Bathinda to fix chipped, gapped or discolored teeth in a single appointment. Natural tooth-colored resin sculpted by cosmetic experts at The DentalBrace Clinic.',
    canonical: 'https://thedentalbrace.com/treatments/composite-bonding',
    ogImage: 'https://thedentalbrace.com/hero-image.jpg',
  },
  'digital-dentistry': {
    title: 'Digital Dentistry in Bathinda — 3D Scanning & CAD/CAM | The DentalBrace',
    description: 'Explore digital dentistry at The DentalBrace Clinic Bathinda. We use 3D iTero intraoral scanning, CBCT imaging, and CAD/CAM milling for the most precise dental treatments available.',
    canonical: 'https://thedentalbrace.com/treatments/digital-dentistry',
    ogImage: 'https://thedentalbrace.com/hero-image.jpg',
  },
  'maxillofacial-prosthetics': {
    title: 'Maxillofacial Prosthetics in Bathinda — Post-Cancer Rehab | The DentalBrace',
    description: 'Specialized maxillofacial prosthetics and post-cancer oral rehabilitation in Bathinda by Dr. Ritu Saneja — Ex-Senior Resident AIIMS Bathinda. Restore function and aesthetics after surgery or trauma.',
    canonical: 'https://thedentalbrace.com/treatments/maxillofacial-prosthetics',
    ogImage: 'https://thedentalbrace.com/hero-image.jpg',
  },
  'smile-designing': {
    title: 'Digital Smile Designing in Bathinda — Preview Your New Smile | The DentalBrace',
    description: 'Experience Digital Smile Design (DSD) in Bathinda at The DentalBrace Clinic. See your new smile before any treatment begins. Combines photography, 3D scanning & aesthetic planning.',
    canonical: 'https://thedentalbrace.com/treatments/smile-designing',
    ogImage: 'https://thedentalbrace.com/hero-image.jpg',
  },
  '3d-intraoral-scanner': {
    title: '3D Intraoral Scanner in Bathinda — No-Putty Impressions | The DentalBrace',
    description: 'We use the iTero 3D intraoral scanner in Bathinda for fast, precise, comfortable dental impressions. No messy putty. Digital scans used for Invisalign, crowns, and implant planning.',
    canonical: 'https://thedentalbrace.com/treatments/3d-intraoral-scanner',
    ogImage: 'https://thedentalbrace.com/hero-image.jpg',
  },
};

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug || resolvedParams.id;
  const meta = treatmentMeta[slug];
  const data = treatmentData[slug];

  // Use data's built-in metaTitle/metaDesc as a fallback, then our map
  const title = meta?.title || data?.metaTitle || `${data?.title || slug} | The DentalBrace Clinic Bathinda`;
  const description = meta?.description || data?.metaDesc || `Learn about ${data?.title || slug} at The DentalBrace Clinic in Bathinda, Punjab. AIIMS-trained specialists. Book consultation at ₹200/-.`;
  const canonical = meta?.canonical || `https://thedentalbrace.com/treatments/${slug}`;
  const ogImage = meta?.ogImage || 'https://thedentalbrace.com/hero-image.jpg';

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [{ url: ogImage, width: 800, height: 800, alt: title }],
      type: 'website',
      siteName: 'The DentalBrace Clinic & Implant Centre',
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  return <PageClient params={resolvedParams} />;
}
