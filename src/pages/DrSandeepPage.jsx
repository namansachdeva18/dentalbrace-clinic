import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  "worksFor": {
    "@type": "Dentist",
    "name": "The DentalBrace Clinic & Implant Centre",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bibi Wala Road",
      "addressLocality": "Bathinda",
      "addressRegion": "Punjab",
      "postalCode": "151001",
      "addressCountry": "IN"
    }
  },
  "alumniOf": [
    { "@type": "CollegeOrUniversity", "name": "Banaras Hindu University (BHU) Varanasi — MDS Orthodontics" },
    { "@type": "CollegeOrUniversity", "name": "AIIMS New Delhi — Ex-Resident" }
  ],
  "knowsAbout": ["Invisalign", "Clear Aligners", "Ceramic Braces", "Lingual Braces", "Dentofacial Orthopedics", "Damon Braces", "Orthodontics"],
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "MDS Orthodontics & Dentofacial Orthopedics — BHU Varanasi" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "certification", "name": "Certified Invisalign Provider" }
  ]
};

const DrSandeepPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
      <Helmet>
        <title>Dr. Sandeep Kumar — Best Orthodontist in Bathinda | Invisalign Specialist | The DentalBrace</title>
        <meta name="description" content="Dr. Sandeep Kumar — MDS Orthodontics (BHU Varanasi), Ex-Resident AIIMS New Delhi. Best orthodontist in Bathinda with 5500+ braces & Invisalign cases. Book consultation at ₹200/-." />
        <meta name="keywords" content="Dr Sandeep Kumar orthodontist Bathinda, best orthodontist Bathinda, Invisalign specialist Bathinda, braces doctor Bathinda, AIIMS trained orthodontist Bathinda" />
        <link rel="canonical" href="https://www.thedentalbrace.com/doctors/dr-sandeep-kumar" />
        <script type="application/ld+json">{JSON.stringify(drSandeepSchema)}</script>
      </Helmet>

      {/* Hero */}
      <div className="doctor-hero-banner">
        <div className="container">
          <Link to="/" className="treatment-back-link"><ArrowRight size={14} style={{ transform: 'rotate(180deg)' }} /> Back to Home</Link>
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

            <motion.div 
              className="doctor-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="heading-secondary">About Dr. Sandeep Kumar</h2>
              <p className="text-secondary text-lg leading-relaxed">
                Dr. Sandeep Kumar is <strong className="text-primary font-bold">Bathinda's most experienced orthodontist</strong>, with over a decade of specialized practice in braces, clear aligners, and dentofacial orthopedics. He completed his MDS in Orthodontics & Dentofacial Orthopedics from <strong className="text-accent font-bold">Banaras Hindu University (BHU) Varanasi</strong> — one of India's most prestigious dental institutions — and further refined his expertise as a resident at <strong className="text-accent font-bold">AIIMS New Delhi</strong>, the country's premier medical institute.
              </p>
              <p className="text-secondary text-lg leading-relaxed mt-4">
                A <strong className="text-primary font-bold">certified Invisalign provider</strong>, Dr. Sandeep has completed <strong className="text-accent font-bold">over 5,500 braces and aligner cases</strong> — making him one of the most experienced aligner specialists in <strong className="font-bold text-primary">Punjab</strong>. His deep understanding of facial growth patterns and bite mechanics allows him to deliver not just straight teeth, but a perfectly balanced smile that complements your face.
              </p>
              <p className="text-secondary text-lg leading-relaxed mt-4">
                Patients travel from Ludhiana, Amritsar, Faridkot, Mansa, and even abroad to seek treatment from him — a testament to the trust and results he delivers consistently.
              </p>
            </motion.div>

            <motion.div 
              className="doctor-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="heading-secondary">Qualifications & Training</h2>
              <div className="qual-list">
                {[
                  { icon: <GraduationCap size={20} />, label: 'MDS — Orthodontics & Dentofacial Orthopedics', detail: 'Banaras Hindu University (BHU) Varanasi' },
                  { icon: <GraduationCap size={20} />, label: 'BDS — Bachelor of Dental Surgery', detail: 'Recognized Dental Institution, India' },
                  { icon: <Award size={20} />, label: 'Ex-Resident — AIIMS New Delhi', detail: "India's #1 medical institute for post-graduate dental training" },
                  { icon: <Award size={20} />, label: 'Certified Invisalign Provider', detail: 'Internationally certified by Align Technology' },
                  { icon: <Star size={20} />, label: '5500+ Braces & Aligner Cases', detail: 'Most experienced orthodontist in Bathinda district' },
                ].map((q, i) => (
                  <motion.div 
                    key={i} 
                    className="qual-item glass"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <span className="qual-icon">{q.icon}</span>
                    <div>
                      <strong className="qual-label text-primary">{q.label}</strong>
                      <p className="qual-detail text-secondary">{q.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

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
                  <Link key={t.slug} to={`/treatments/${t.slug}`} className="related-treatment-card">
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
              <p className="cta-subtitle">Consultation at a nominal ₹200/-. Get a personalized treatment plan.</p>
              <a href="/#book" className="btn btn-primary w-full" style={{ display: 'block', textAlign: 'center' }}>Book Appointment</a>
              <a href="tel:7496849392" className="btn btn-outline w-full" style={{ display: 'block', textAlign: 'center', marginTop: '0.75rem' }}>
                <Phone size={14} style={{ display: 'inline', marginRight: '0.4rem' }} /> +91 74968-49392
              </a>
            </div>
            <div className="sidebar-card glass shadow-lg">
              <h3 className="sidebar-title">Meet Our Other Specialist</h3>
              <Link to="/doctors/dr-ritu-saneja" className="other-doctor-card">
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
    </motion.div>
  );
};

export default DrSandeepPage;
