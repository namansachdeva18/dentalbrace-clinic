'use client';
import { useEffect } from 'react';


import Link from 'next/link';
import { AutoLinker } from '@/components/AutoLinker';
import { GraduationCap, Award, Star, CheckCircle2, ArrowRight, Phone, Calendar } from 'lucide-react';
import './DoctorProfile.css';

const drSandeepSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Sandeep Kumar",
  "jobTitle": "Consultant Orthodontist & Certified Invisalign Provider",
  "description": "BDS, MDS (Orthodontics) - BHU Varanasi. Ex-Resident AIIMS New Delhi. 5500+ braces & aligner cases. Bathinda's leading Invisalign provider and orthodontist.",
  "image": "https://www.thedentalbrace.com/dr-sandeep.jpg",
  "telephone": "+917496849392",
  "url": "https://thedentalbrace.com/doctors/dr-sandeep-kumar",
  "medicalSpecialty": [
    { "@type": "MedicalSpecialty", "name": "Orthodontics", "sameAs": "https://en.wikipedia.org/wiki/Orthodontics" }
  ],
  "worksFor": {
    "@type": "Dentist",
    "name": "The DentalBrace Clinic & Implant Centre",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "196, Bibi Wala Rd, near LIC Building, opposite Petrol Pump, Kamla Nehru Colony",
      "addressLocality": "Bathinda",
      "addressRegion": "Punjab",
      "postalCode": "151001",
      "addressCountry": "IN"
    }
  },
  "alumniOf": [
    { "@type": "CollegeOrUniversity", "name": "Banaras Hindu University (BHU) Varanasi", "sameAs": "https://www.wikidata.org/wiki/Q806085" },
    { "@type": "CollegeOrUniversity", "name": "AIIMS New Delhi", "sameAs": "https://www.wikidata.org/wiki/Q426189" }
  ],
  "knowsAbout": ["Invisalign", "Clear Aligners", "Ceramic Braces", "Lingual Braces", "Dentofacial Orthopedics", "Damon Braces", "Orthodontics"],
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "MDS Orthodontics & Dentofacial Orthopedics — BHU Varanasi" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "Certified Invisalign Provider" }
  ],
  "memberOf": [
    { "@type": "Organization", "name": "Indian Dental Association (IDA)" },
    { "@type": "Organization", "name": "Indian Orthodontic Society (IOS)" }
  ]
};

const DrSandeepPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="page-wrapper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(drSandeepSchema) }} />
      

      {/* Hero */}
      <div className="doctor-hero-banner">
        <div className="container">
          <Link href="/" className="treatment-back-link"><ArrowRight size={14} style={{ transform: 'rotate(180deg)' }} /> Back to Home</Link>
          <div className="doctor-hero-grid">
            <div className="doctor-hero-text">
              <p className="doctor-hero-eyebrow">Consultant Orthodontist — The DentalBrace Clinic, Bathinda</p>
              <h1 className="doctor-hero-name">Dr. Sandeep Kumar</h1>
              <p className="doctor-hero-qual">BDS · MDS (Orthodontics) — BHU Varanasi</p>
              <p className="doctor-hero-qual-line">Ex-Resident — AIIMS New Delhi · Certified Invisalign Provider</p>
              <div className="doctor-hero-stats">
                <div className="doctor-hero-stat"><span className="stat-num">5500+</span><span className="stat-label">Braces & Aligner Cases</span></div>
                <div className="doctor-hero-stat"><span className="stat-num">10+</span><span className="stat-label">Years Experience</span></div>
                <div className="doctor-hero-stat"><span className="stat-num">5★</span><span className="stat-label">Google Rating</span></div>
              </div>
              <div className="doctor-hero-ctas">
                <a href="/#book" className="btn btn-primary">Book with Dr. Sandeep <ArrowRight size={16} /></a>
                <a href="tel:7496849392" className="btn btn-outline"><Phone size={15} /> +91 74968-49392</a>
              </div>
            </div>
            <div className="doctor-hero-photo">
              <picture>
                <source srcSet="/dr-sandeep.webp" type="image/webp" />
                <img src="/dr-sandeep.jpg" alt="Dr. Sandeep Kumar — Best Orthodontist in Bathinda, MDS BHU, Ex-Resident AIIMS New Delhi, Certified Invisalign Provider" fetchPriority="high" decoding="async" />
              </picture>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container doctor-content-grid">
          <div className="doctor-main">

            <div className="page-wrapper">
              <h2 className="heading-secondary">About Dr. Sandeep Kumar</h2>
              <p className="text-secondary text-lg leading-relaxed mt-4">
                <AutoLinker text={"Dr. Sandeep Kumar is Bathinda's most experienced orthodontist, with over a decade of specialized practice in braces, clear aligners, and dentofacial orthopedics. He completed his MDS in Orthodontics & Dentofacial Orthopedics from Banaras Hindu University (BHU) Varanasi — one of India's most prestigious dental institutions — and further refined his expertise as a resident at AIIMS New Delhi, the country's premier medical institute."} />
              </p>
              <p className="text-secondary text-lg leading-relaxed mt-4">
                <AutoLinker text={"A certified Invisalign provider, Dr. Sandeep has completed over 5,500 braces and aligner cases — making him one of the most experienced aligner specialists in Punjab. His deep understanding of facial growth patterns and bite mechanics allows him to deliver not just straight teeth, but a perfectly balanced smile that complements your face."} />
              </p>
              <p className="text-secondary text-lg leading-relaxed mt-4">
                <AutoLinker text={"Patients travel from Ludhiana, Amritsar, Faridkot, Mansa, and even abroad to seek treatment from him — a testament to the trust and results he delivers consistently."} />
              </p>
            </div>

            <div className="page-wrapper">
              <h2 className="heading-secondary">Qualifications & Training</h2>
              <div className="qual-list">
                {[
                  { icon: <GraduationCap size={20} />, label: 'MDS — Orthodontics & Dentofacial Orthopedics', detail: 'Banaras Hindu University (BHU) Varanasi' },
                  { icon: <GraduationCap size={20} />, label: 'BDS — Bachelor of Dental Surgery', detail: 'Recognized Dental Institution, India' },
                  { icon: <Award size={20} />, label: 'Ex-Resident — AIIMS New Delhi', detail: "India's #1 medical institute for post-graduate dental training" },
                  { icon: <Award size={20} />, label: 'Certified Invisalign Provider', detail: 'Internationally certified by Align Technology' },
                  { icon: <Star size={20} />, label: '5500+ Braces & Aligner Cases', detail: 'Most experienced orthodontist in Bathinda district' },
                  { icon: <Award size={20} />, label: 'Professional Memberships', detail: 'Indian Dental Association (IDA), Indian Orthodontic Society (IOS)' },
                ].map((q, i) => (
                  <div key={i} className="page-wrapper">
                    <span className="qual-icon">{q.icon}</span>
                    <div>
                      <strong className="qual-label text-primary">{q.label}</strong>
                      <p className="qual-detail text-secondary">{q.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="doctor-section">
              <h2 className="heading-secondary">Specializations</h2>
              <ul className="specialization-grid">
                {['Invisalign Clear Aligners', 'Metal & Ceramic Braces', 'Lingual (Hidden) Braces', 'Damon Self-Ligating Braces', 'Dentofacial Orthopedics', 'Jaw Growth Correction', 'Early Orthodontic Intervention (Kids)', 'Retainers & Post-Treatment Care'].map((s, i) => (
                  <li key={i} className="spec-item"><CheckCircle2 size={18} /> {s}</li>
                ))}
              </ul>
            </div>

            <div className="doctor-section">
              <h2 className="heading-secondary">Treatments by Dr. Sandeep Kumar</h2>
              <div className="related-treatments">
                {[
                  { label: 'Invisalign & Clear Aligners', slug: 'invisalign' },
                  { label: 'Braces (Metal, Ceramic, Lingual)', slug: 'braces' },
                  { label: 'Kids Dentistry & Early Orthodontics', slug: 'kids-dentistry' },
                  { label: 'Smile Makeover', slug: 'smile-makeover' },
                ].map(t => (
                  <Link key={t.slug} href={`/treatments/${t.slug}`} className="related-treatment-card">
                    {t.label} <ArrowRight size={15} />
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <aside className="doctor-sidebar">
            <div className="sidebar-card doctor-cta">
              <h3 className="cta-title">Book with Dr. Sandeep</h3>
              <p className="cta-subtitle">Book your consultation today. Get a personalized treatment plan.</p>
              <a href="/#book" className="btn btn-primary w-full" style={{ display: 'block', textAlign: 'center' }}>Book Appointment</a>
              <a href="tel:7496849392" className="btn btn-outline w-full" style={{ display: 'block', textAlign: 'center', marginTop: '0.75rem' }}>
                <Phone size={14} style={{ display: 'inline', marginRight: '0.4rem' }} /> +91 74968-49392
              </a>
            </div>
            <div className="sidebar-card glass shadow-lg">
              <h3 className="sidebar-title">Meet Our Other Specialist</h3>
              <Link href="/doctors/dr-ritu-saneja" className="other-doctor-card">
                <picture>
                  <source srcSet="/dr-ritu.webp" type="image/webp" />
                  <img src="/dr-ritu.jpg" alt="Dr. Ritu Saneja — Gold Medalist Prosthodontist and Implantologist at The DentalBrace Clinic Bathinda Punjab" loading="lazy" decoding="async" />
                </picture>
                <div>
                  <strong>Dr. Ritu Saneja</strong>
                  <p>Consultant Prosthodontist & Implantologist</p>
                  <span className="text-accent" style={{ fontSize: '0.85rem', fontWeight: 600 }}>View Profile →</span>
                </div>
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default DrSandeepPage;
