import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
    { "@type": "CollegeOrUniversity", "name": "Banaras Hindu University (BHU) Varanasi — MDS Prosthodontics (Gold Medalist)" },
    { "@type": "CollegeOrUniversity", "name": "AIIMS Delhi — Ex-Resident" },
    { "@type": "CollegeOrUniversity", "name": "PGIMER Chandigarh — Ex-Resident" },
    { "@type": "CollegeOrUniversity", "name": "AIIMS Bathinda — Ex-Senior Resident" }
  ],
  "knowsAbout": ["Dental Implants", "All-on-4", "Full Mouth Rehabilitation", "Smile Makeover", "Veneers", "Zirconia Crowns", "Prosthodontics", "Composite Bonding", "Teeth Whitening"]
};

const DrRituPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
      <Helmet>
        <title>Dr. Ritu Saneja — Gold Medalist Implantologist Bathinda | Prosthodontist | The DentalBrace</title>
        <meta name="description" content="Dr. Ritu Saneja — MDS Gold Medalist (Prosthodontics, BHU), Ex-Resident AIIMS Delhi & PGIMER. 5000+ implants placed. Best implantologist & prosthodontist in Bathinda. Book consultation." />
        <meta name="keywords" content="Dr Ritu Saneja implantologist Bathinda, best implantologist Bathinda, prosthodontist Bathinda, dental implants specialist Bathinda, AIIMS trained implantologist" />
        <link rel="canonical" href="https://www.thedentalbrace.com/doctors/dr-ritu-saneja" />
        <script type="application/ld+json">{JSON.stringify(drRituSchema)}</script>
      </Helmet>

      {/* Hero */}
      <div className="doctor-hero-banner doctor-hero-ritu">
        <div className="container">
          <Link to="/" className="treatment-back-link"><ArrowRight size={14} style={{ transform: 'rotate(180deg)' }} /> Back to Home</Link>
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
              <picture>
                <source srcSet="/dr-ritu.webp" type="image/webp" />
                <img src="/dr-ritu.jpg" alt="Dr. Ritu Saneja — Gold Medalist Implantologist in Bathinda, MDS Prosthodontics BHU, Ex-Resident AIIMS Delhi PGIMER Chandigarh" fetchPriority="high" decoding="async" />
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
              <h2 className="heading-secondary">About Dr. Ritu Saneja</h2>
              <p className="text-secondary text-lg leading-relaxed">
                Dr. Ritu Saneja is a <strong className="text-accent font-bold">Gold Medalist</strong> prosthodontist and implantologist who has transformed thousands of smiles through her exceptional clinical precision and artistic sensibility. She completed her MDS in Prosthodontics from <strong className="text-primary font-bold">Banaras Hindu University (BHU) Varanasi</strong> with the highest distinction — earning the <strong className="text-accent font-bold">Gold Medal</strong> — and trained at three of India's most prestigious institutions: <strong className="text-accent font-bold">AIIMS Delhi, PGIMER Chandigarh, and AIIMS Bathinda</strong>.
              </p>
              <p className="text-secondary text-lg leading-relaxed mt-4">
                With <strong className="text-accent font-bold">over 5,000 implants placed</strong>, Dr. Ritu is one of the most experienced implantologists in <strong className="font-bold text-primary">Punjab</strong>. Her expertise spans the full spectrum of prosthodontic care — from single-tooth implants to complex full-arch rehabilitations (All-on-4, All-on-6), porcelain veneers, zirconia crowns, <strong className="text-primary font-bold">smile makeovers, and Digital Smile Design</strong>.
              </p>
              <p className="text-secondary text-lg leading-relaxed mt-4">
                Patients fly from across India — and travel from abroad — specifically to have their implants and smile makeovers done by Dr. Ritu, placing her among the elite implantologists of the country. Her hallmark is treating every case as a unique work of art, delivering results that are both clinically perfect and aesthetically stunning.
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
                  { icon: <Medal size={20} />, label: 'MDS — Prosthodontics & Crown & Bridge (Gold Medalist)', detail: 'Banaras Hindu University (BHU) Varanasi — Highest distinction' },
                  { icon: <GraduationCap size={20} />, label: 'BDS — Bachelor of Dental Surgery', detail: 'Recognized Dental Institution, India' },
                  { icon: <Award size={20} />, label: 'Ex-Resident — AIIMS Delhi', detail: "India's premier medical institution for post-graduate implantology training" },
                  { icon: <Award size={20} />, label: 'Ex-Resident — PGIMER Chandigarh', detail: 'Post-Graduate Institute of Medical Education & Research' },
                  { icon: <Award size={20} />, label: 'Ex-Senior Resident — AIIMS Bathinda', detail: 'Senior clinical residency in prosthodontics & implantology' },
                  { icon: <Star size={20} />, label: '5000+ Implants Placed', detail: 'Most experienced implantologist in Bathinda district & surrounding areas' },
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
              <h3 className="cta-title">Book with Dr. Ritu</h3>
              <p className="cta-subtitle">Book your consultation today. Get a personalized treatment plan from a Gold Medalist.</p>
              <a href="/#book" className="btn btn-primary w-full" style={{ display: 'block', textAlign: 'center' }}>Book Appointment</a>
              <a href="tel:7496849392" className="btn btn-outline w-full" style={{ display: 'block', textAlign: 'center', marginTop: '0.75rem' }}>
                <Phone size={14} style={{ display: 'inline', marginRight: '0.4rem' }} /> +91 74968-49392
              </a>
            </div>
            <div className="sidebar-card glass shadow-lg">
              <h3 className="sidebar-title">Meet Our Other Specialist</h3>
              <Link to="/doctors/dr-sandeep-kumar" className="other-doctor-card">
                <picture>
                  <source srcSet="/dr-sandeep.webp" type="image/webp" />
                  <img src="/dr-sandeep.jpg" alt="Dr. Sandeep Kumar — Consultant Orthodontist and Invisalign Specialist at The DentalBrace Clinic Bathinda Punjab" loading="lazy" decoding="async" />
                </picture>
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
    </motion.div>
  );
};

export default DrRituPage;
