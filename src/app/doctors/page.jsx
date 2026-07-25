'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, GraduationCap, Award, Star } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Sandeep Kumar',
    slug: 'dr-sandeep-kumar',
    title: 'Consultant Orthodontist & Certified Invisalign Provider',
    qualifications: 'BDS · MDS (Orthodontics) — BHU Varanasi',
    training: 'Ex-Resident — AIIMS New Delhi',
    photo: '/dr-sandeep',
    stats: [
      { num: '5500+', label: 'Braces & Aligner Cases' },
      { num: '10+', label: 'Years Experience' },
    ],
    specialties: ['Invisalign Clear Aligners', 'Metal & Ceramic Braces', 'Dentofacial Orthopedics', 'Kids Orthodontics'],
    gradient: 'linear-gradient(135deg, #0d2b2b 0%, #1a3a3a 100%)',
  },
  {
    name: 'Dr. Ritu Saneja',
    slug: 'dr-ritu-saneja',
    title: 'Consultant Prosthodontist & Implantologist',
    qualifications: 'BDS · MDS (Prosthodontics — Gold Medalist) — BHU Varanasi',
    training: 'Ex-Resident — AIIMS Delhi, PGIMER Chandigarh · Ex-Senior Resident — AIIMS Bathinda',
    photo: '/dr-ritu',
    stats: [
      { num: '5000+', label: 'Implants Placed' },
      { num: '10+', label: 'Years Experience' },
    ],
    specialties: ['Full Mouth Dental Implants', 'All-on-4 / All-on-6', 'Maxillofacial Prosthetics', 'Smile Makeover & Veneers'],
    gradient: 'linear-gradient(135deg, #1a1428 0%, #2d1f45 100%)',
  },
];

const DoctorsPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section style={{
        background: 'var(--bg-secondary, #f5f3ef)',
        padding: 'calc(var(--header-height, 100px) + 60px) 0 60px',
        textAlign: 'center',
      }}>
        <div className="container">
          <span className="section-badge" style={{ margin: '0 auto 1rem' }}>Our Specialists</span>
          <h1 className="heading-primary">
            Meet the <span className="text-accent">Experts</span> Behind Your Smile
          </h1>
          <p className="text-secondary max-w-2xl mx-auto" style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
            AIIMS-trained dental specialists with a combined 20+ years of experience and over 10,000 transformed smiles across Bathinda and Punjab.
          </p>
        </div>
      </section>

      {/* Doctor Cards */}
      <section className="section-padding">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {doctors.map((doc, index) => (
            <div
              key={doc.slug}
              className="glass shadow-lg"
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
              }}
            >
              {/* Hero Banner */}
              <div style={{
                background: doc.gradient,
                padding: '3rem 2.5rem',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '2rem',
                alignItems: 'center',
                position: 'relative',
              }}>
                {/* Subtle accent glow */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'radial-gradient(ellipse at 30% 60%, rgba(245,130,32,0.08) 0%, transparent 60%)',
                  pointerEvents: 'none',
                }} />

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 1fr) 260px',
                  gap: '2.5rem',
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 1,
                }}
                className="doctor-listing-grid"
                >
                  {/* Text Content */}
                  <div>
                    <p style={{
                      fontSize: '0.78rem', fontWeight: 700,
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'var(--accent-color)', marginBottom: '0.75rem',
                    }}>
                      {doc.title}
                    </p>
                    <h2 style={{
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: '0.5rem',
                    }}>
                      {doc.name}
                    </h2>
                    <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)', marginBottom: '0.25rem' }}>
                      <GraduationCap size={14} style={{ display: 'inline', marginRight: '0.4rem', verticalAlign: 'text-bottom' }} />
                      {doc.qualifications}
                    </p>
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem' }}>
                      <Award size={14} style={{ display: 'inline', marginRight: '0.4rem', verticalAlign: 'text-bottom' }} />
                      {doc.training}
                    </p>

                    {/* Stats */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginBottom: '1.5rem' }}>
                      {doc.stats.map((s, i) => (
                        <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                          <span style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--accent-color)', lineHeight: 1 }}>{s.num}</span>
                          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)', marginTop: '0.25rem' }}>{s.label}</span>
                        </div>
                      ))}
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--accent-color)', lineHeight: 1 }}>5★</span>
                        <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.55)', marginTop: '0.25rem' }}>Google Rating</span>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                      <Link href={`/doctors/${doc.slug}`} className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                        View Full Profile <ArrowRight size={16} />
                      </Link>
                      <a href="tel:7496849392" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.25)' }}>
                        <Phone size={15} /> +91 74968-49392
                      </a>
                    </div>
                  </div>

                  {/* Photo */}
                  <div style={{
                    borderRadius: '18px', overflow: 'hidden',
                    maxHeight: '380px', boxShadow: '0 24px 48px rgba(0,0,0,0.3)',
                  }}>
                    <picture>
                      <source srcSet={`${doc.photo}.webp`} type="image/webp" />
                      <img
                        src={`${doc.photo}.jpg`}
                        alt={`${doc.name} — ${doc.title} at The DentalBrace Clinic Bathinda`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                      />
                    </picture>
                  </div>
                </div>
              </div>

              {/* Specialties Strip */}
              <div style={{
                padding: '1.5rem 2.5rem',
                background: 'white',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.6rem',
                alignItems: 'center',
              }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginRight: '0.5rem' }}>
                  Specializes in:
                </span>
                {doc.specialties.map((s, i) => (
                  <span key={i} style={{
                    padding: '0.4rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    background: 'var(--bg-ivory, #faf8f4)',
                    color: 'var(--text-primary)',
                    border: '1px solid rgba(0,0,0,0.06)',
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0c2727 0%, #1a3a3a 100%)',
        padding: '5rem 0',
        textAlign: 'center',
      }}>
        <div className="container">
          <h2 className="heading-secondary" style={{ color: '#fff', marginBottom: '1rem' }}>
            Ready to Transform Your Smile?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.05rem' }}>
            Book a consultation with our AIIMS-trained specialists today. Experience premium dental care in Bathinda.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/#book" className="btn btn-primary">Book Appointment <ArrowRight size={16} /></a>
            <Link href="/contact" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Responsive grid fix */}
      <style>{`
        @media (max-width: 768px) {
          .doctor-listing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default DoctorsPage;
