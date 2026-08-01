'use client';
import { useEffect } from 'react';
import Image from 'next/image';


import Link from 'next/link';
import { AutoLinker } from '@/components/AutoLinker';
import { GraduationCap, Award, Star, Medal, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import './DoctorProfile.css';

const drRituSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Ritu Saneja",
  "jobTitle": "Consultant Prosthodontist & Implantologist",
  "description": "MDS Gold Medalist (Prosthodontics) — BHU Varanasi. Ex-Resident AIIMS Delhi & PGIMER Chandigarh. Ex-Senior Resident AIIMS Bathinda. 5000+ implants placed. Bathinda's leading implantologist.",
  "image": "https://www.thedentalbrace.com/dr-ritu.jpg",
  "telephone": "+917496849392",
  "url": "https://www.thedentalbrace.com/doctors/dr-ritu-saneja",
  "medicalSpecialty": [
    { "@type": "MedicalSpecialty", "name": "Prosthodontics", "sameAs": "https://en.wikipedia.org/wiki/Prosthodontics" },
    { "@type": "MedicalSpecialty", "name": "Implantology", "sameAs": "https://en.wikipedia.org/wiki/Dental_implant" }
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
    { "@type": "CollegeOrUniversity", "name": "AIIMS Delhi", "sameAs": "https://www.wikidata.org/wiki/Q426189" },
    { "@type": "CollegeOrUniversity", "name": "PGIMER Chandigarh" },
    { "@type": "CollegeOrUniversity", "name": "AIIMS Bathinda" }
  ],
  "knowsAbout": ["Dental Implants", "All-on-4", "Full Mouth Rehabilitation", "Smile Makeover", "Veneers", "Zirconia Crowns", "Prosthodontics", "Composite Bonding", "Teeth Whitening"],
  "memberOf": [
    { "@type": "Organization", "name": "Indian Dental Association (IDA)" },
    { "@type": "Organization", "name": "Indian Prosthodontic Society (IPS)" }
  ]
};

const DrRituPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="page-wrapper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(drRituSchema) }} />
      

      {/* Hero */}
      <div className="doctor-hero-banner doctor-hero-ritu">
        <div className="container">
          <Link href="/" className="treatment-back-link"><ArrowRight size={14} style={{ transform: 'rotate(180deg)' }} /> Back to Home</Link>
          <div className="doctor-hero-grid">
            <div className="doctor-hero-text">
              <p className="doctor-hero-eyebrow">Consultant Prosthodontist & Implantologist — The DentalBrace Clinic, Bathinda</p>
              <h1 className="doctor-hero-name">Dr. Ritu Saneja</h1>
              <p className="doctor-hero-qual">BDS · MDS Prosthodontics <strong style={{ color: 'var(--accent-color)' }}>(Gold Medalist)</strong> — BHU Varanasi</p>
              <p className="doctor-hero-qual-line">Ex-Resident — AIIMS Delhi & PGIMER Chandigarh · Ex-Sr. Resident — AIIMS Bathinda</p>
              <div className="doctor-hero-stats">
                <div className="doctor-hero-stat"><span className="stat-num">5000+</span><span className="stat-label">Implants Placed</span></div>
                <div className="doctor-hero-stat"><span className="stat-num">10+</span><span className="stat-label">Years Experience</span></div>
                <div className="doctor-hero-stat"><span className="stat-num">🥇</span><span className="stat-label">Gold Medalist</span></div>
              </div>
              <div className="doctor-hero-ctas">
                <a href="/#book" className="btn btn-primary">Book with Dr. Ritu <ArrowRight size={16} /></a>
                <a href="tel:7496849392" className="btn btn-outline"><Phone size={15} /> +91 74968-49392</a>
              </div>
            </div>
            <div className="doctor-hero-photo">
              <Image
                src="/dr-ritu.webp"
                alt="Dr. Ritu Saneja — Gold Medalist Implantologist in Bathinda, MDS Prosthodontics BHU, Ex-Resident AIIMS Delhi PGIMER Chandigarh"
                priority={true}
                width={380}
                height={480}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container doctor-content-grid">
          <div className="doctor-main">

            <div className="page-wrapper">
              <h2 className="heading-secondary">About Dr. Ritu Saneja</h2>
              <p className="text-secondary text-lg leading-relaxed mt-4">
                <AutoLinker text={"Dr. Ritu Saneja is a highly esteemed Prosthodontist and Implantologist, renowned for her unparalleled precision in complex full mouth rehabilitations, digital smile designing, and advanced implant prosthetics. She earned her MDS from PGIMER Chandigarh and completed her Senior Residency at the prestigious AIIMS New Delhi, making her one of the most rigorously trained dental specialists in Punjab."} />
              </p>
              <p className="text-secondary text-lg leading-relaxed mt-4">
                <AutoLinker text={"As a Gold Medalist in her field, Dr. Ritu brings a level of academic and clinical excellence that is rarely found outside metropolitan centers. She specializes in restoring missing or completely broken down teeth using world-class Titanium implants, All-on-4 systems, and highly aesthetic Zirconia and E-max restorations."} />
              </p>
              <p className="text-secondary text-lg leading-relaxed mt-4">
                <AutoLinker text={"Her philosophy marries the science of biomechanics with the art of facial aesthetics, ensuring that every crown, veneer, or denture she creates functions flawlessly and looks indistinguishable from natural teeth."} />
              </p>
            </div>

            <div className="page-wrapper">
              <h2 className="heading-secondary">Qualifications & Training</h2>
              <div className="qual-list">
                {[
                  { icon: <Medal size={20} />, label: 'MDS — Prosthodontics & Crown & Bridge (Gold Medalist)', detail: 'Banaras Hindu University (BHU) Varanasi — Highest distinction' },
                  { icon: <GraduationCap size={20} />, label: 'BDS — Bachelor of Dental Surgery', detail: 'Recognized Dental Institution, India' },
                  { icon: <Award size={20} />, label: 'Ex-Resident — AIIMS Delhi', detail: "India's premier medical institution for post-graduate implantology training" },
                  { icon: <Award size={20} />, label: 'Ex-Resident — PGIMER Chandigarh', detail: 'Post-Graduate Institute of Medical Education & Research' },
                  { icon: <Award size={20} />, label: 'Ex-Senior Resident — AIIMS Bathinda', detail: 'Senior clinical residency in prosthodontics & implantology' },
                  { icon: <Star size={20} />, label: '5000+ Implants Placed', detail: 'Most experienced implantologist in Bathinda district & surrounding areas' },
                  { icon: <Award size={20} />, label: 'Professional Memberships', detail: 'Indian Dental Association (IDA), Indian Prosthodontic Society (IPS)' },
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
                {['Dental Implants (Single & Multiple)', 'All-on-4 Full Arch Implants', 'All-on-6 Full Arch Implants', 'Full Mouth Rehabilitation', 'Porcelain Veneers', 'Digital Smile Design (DSD)', 'Zirconia Crowns & Bridges', 'Teeth Whitening (LED/Laser)', 'Composite Bonding', 'Gum Treatment & Contouring', 'Root Canal Treatment', 'Wisdom Tooth Removal'].map((s, i) => (
                  <li key={i} className="spec-item"><CheckCircle2 size={18} /> {s}</li>
                ))}
              </ul>
            </div>

            <div className="doctor-section">
              <h2 className="heading-secondary">Treatments by Dr. Ritu Saneja</h2>
              <div className="related-treatments">
                {[
                  { label: 'Dental Implants', slug: 'dental-implants' },
                  { label: 'All-on-4 Implants', slug: 'all-on-4' },
                  { label: 'Smile Makeover', slug: 'smile-makeover' },
                  { label: 'Dental Veneers', slug: 'veneers' },
                  { label: 'Teeth Whitening', slug: 'teeth-whitening' },
                  { label: 'Composite Bonding', slug: 'composite-bonding' },
                  { label: 'Root Canal Treatment', slug: 'root-canal' },
                  { label: 'Dental Crown & Bridge', slug: 'dental-crown-bridge' },
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
              <h3 className="cta-title">Book with Dr. Ritu</h3>
              <p className="cta-subtitle">Book your consultation today. Get a personalized treatment plan from a Gold Medalist.</p>
              <a href="/#book" className="btn btn-primary w-full" style={{ display: 'block', textAlign: 'center' }}>Book Appointment</a>
              <a href="tel:7496849392" className="btn btn-outline w-full" style={{ display: 'block', textAlign: 'center', marginTop: '0.75rem' }}>
                <Phone size={14} style={{ display: 'inline', marginRight: '0.4rem' }} /> +91 74968-49392
              </a>
            </div>
            <div className="sidebar-card glass shadow-lg">
              <h3 className="sidebar-title">Meet Our Other Specialist</h3>
              <Link href="/doctors/dr-sandeep-kumar" className="other-doctor-card">
                <Image
                  src="/dr-sandeep.webp"
                  alt="Dr. Sandeep Kumar — Consultant Orthodontist and Invisalign Specialist at The DentalBrace Clinic Bathinda Punjab"
                  width={200}
                  height={200}
                  style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '50%' }}
                  sizes="120px"
                />
                <div>
                  <strong>Dr. Sandeep Kumar</strong>
                  <p>Consultant Orthodontist & Invisalign Specialist</p>
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

export default DrRituPage;
