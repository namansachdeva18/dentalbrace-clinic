import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, GraduationCap, Star, Medal } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import './Specialists.css';

gsap.registerPlugin(ScrollTrigger);

const Specialists = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const addToCards = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section className="specialists section-padding bg-ivory" id="specialists" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16">
          <span className="section-badge">Meet Our Specialists</span>
          <h2 className="heading-primary mt-4">Expert Minds Behind Perfect Smiles</h2>
          <p className="text-secondary max-w-2xl mx-auto mt-4">
            Bathinda's most experienced Orthodontist &amp; Implantologist team — trained at AIIMS &amp; BHU Varanasi.
          </p>
        </div>

        <div className="specialists-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>

          {/* Dr. Sandeep Kumar */}
          <div className="doctor-card glass hover-elevate overflow-hidden flex flex-col gpu-accelerated" style={{ padding: '0', position: 'relative' }} ref={addToCards}>

            {/* #1 Badge */}
            <div style={{
              position: 'absolute', top: '1rem', left: '1rem', zIndex: 10,
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.35rem 0.9rem',
              background: 'var(--accent-color)',
              borderRadius: 'var(--radius-full)',
              color: 'white', fontWeight: '700', fontSize: '0.75rem',
              letterSpacing: '0.5px', boxShadow: '0 4px 12px rgba(245,130,32,0.4)'
            }}>
              <Star size={12} fill="white" /> #1 Invisalign Provider · Bathinda
            </div>

            <div className="doctor-image-wrapper" style={{ height: '350px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
              <img
                src="/dr-sandeep.jpg"
                alt="Dr. Sandeep Kumar — Best Orthodontist in Bathinda, Punjab — MDS Orthodontics BHU Varanasi, Ex-Resident AIIMS New Delhi, Certified Invisalign Provider, specialist in clear aligners braces and jaw correction at The DentalBrace Clinic Bibi Wala Road Bathinda"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
              />
            </div>

            <div className="doctor-info p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-primary mb-1">Dr. Sandeep Kumar</h3>
              <p className="text-accent font-medium mb-1">Consultant Orthodontist</p>
              <p className="text-secondary text-sm mb-5">Best Orthodontist in Bathinda — Invisalign &amp; Clear Aligner Expert</p>

              {/* Animated Stat Pill */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.6rem 1.25rem',
                background: 'rgba(245,130,32,0.1)',
                border: '1px solid rgba(245,130,32,0.2)',
                borderRadius: 'var(--radius-full)',
                marginBottom: '1.5rem', width: 'fit-content'
              }}>
                <Award size={16} style={{ color: 'var(--accent-color)' }} />
                <span style={{ fontWeight: '800', color: 'var(--accent-color)', fontSize: '1.1rem' }}>
                  <AnimatedCounter target={5500} suffix="+" />
                </span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: '500' }}>
                  Braces &amp; Aligner Cases
                </span>
              </div>

              <div className="qualifications flex flex-col gap-3 text-secondary mb-8">
                <div className="flex items-center gap-3"><GraduationCap size={20} className="text-accent" /> BDS, MDS (Orthodontics) - BHU Varanasi</div>
                <div className="flex items-center gap-3"><Star size={20} className="text-accent" /> Ex Resident - AIIMS New Delhi</div>
              </div>

              <div className="specialties-tags flex flex-wrap gap-2 mb-8">
                <span className="bg-cream text-primary px-3 py-1 rounded-full text-sm font-medium border border-border-color">Invisalign</span>
                <span className="bg-cream text-primary px-3 py-1 rounded-full text-sm font-medium border border-border-color">Clear Aligners</span>
                <span className="bg-cream text-primary px-3 py-1 rounded-full text-sm font-medium border border-border-color">Invisible Braces</span>
                <span className="bg-cream text-primary px-3 py-1 rounded-full text-sm font-medium border border-border-color">Dentofacial Orthopedics</span>
                <span className="bg-cream text-primary px-3 py-1 rounded-full text-sm font-medium border border-border-color">Damon Braces</span>
                <span className="bg-cream text-primary px-3 py-1 rounded-full text-sm font-medium border border-border-color">Jaw Correction</span>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexDirection: 'column', marginTop: 'auto' }}>
                <a href="#book" className="btn btn-primary w-full" style={{ textAlign: 'center', display: 'block' }}>
                  Book with Dr. Sandeep
                </a>
                <a href="#invisalign" style={{
                  display: 'block', textAlign: 'center', padding: '0.75rem',
                  color: 'var(--accent-color)', fontWeight: '600', fontSize: '0.9rem',
                  textDecoration: 'none', borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(245,130,32,0.2)',
                  transition: 'all 0.2s ease'
                }}>
                  View Invisalign Results →
                </a>
              </div>
            </div>
          </div>

          {/* Dr. Ritu Saneja */}
          <div className="doctor-card glass hover-elevate overflow-hidden flex flex-col gpu-accelerated" style={{ padding: '0', position: 'relative' }} ref={addToCards}>

            {/* Gold Medalist Badge */}
            <div style={{
              position: 'absolute', top: '1rem', left: '1rem', zIndex: 10,
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.35rem 0.9rem',
              background: 'linear-gradient(135deg, #c9a227, #e8c84e)',
              borderRadius: 'var(--radius-full)',
              color: '#5a3e00', fontWeight: '700', fontSize: '0.75rem',
              letterSpacing: '0.5px', boxShadow: '0 4px 12px rgba(201,162,39,0.4)'
            }}>
              <Medal size={12} /> MDS (Gold Medalist) · BHU Varanasi
            </div>

            <div className="doctor-image-wrapper" style={{ height: '350px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
              <img
                src="/dr-ritu.jpg"
                alt="Dr. Ritu Saneja — Best Implantologist and Prosthodontist in Bathinda, Punjab — Gold Medalist MDS Prosthodontics BHU Varanasi, Ex-Senior Resident AIIMS Bathinda, specialist in full mouth dental implants All-on-4 veneers and smile makeover at The DentalBrace Clinic"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
              />
            </div>

            <div className="doctor-info p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-primary mb-1">Dr. Ritu Saneja</h3>
              <p className="text-accent font-medium mb-1">Consultant Prosthodontist &amp; Implantologist</p>
              <p className="text-secondary text-sm mb-5">Best Implantologist in Bathinda — Full Mouth Rehabilitation Expert</p>

              {/* Animated Stat Pill */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.6rem 1.25rem',
                background: 'rgba(245,130,32,0.1)',
                border: '1px solid rgba(245,130,32,0.2)',
                borderRadius: 'var(--radius-full)',
                marginBottom: '1.5rem', width: 'fit-content'
              }}>
                <Award size={16} style={{ color: 'var(--accent-color)' }} />
                <span style={{ fontWeight: '800', color: 'var(--accent-color)', fontSize: '1.1rem' }}>
                  <AnimatedCounter target={5000} suffix="+" />
                </span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: '500' }}>
                  Implants Placed
                </span>
              </div>

              <div className="qualifications flex flex-col gap-3 text-secondary mb-8">
                <div className="flex items-center gap-3"><GraduationCap size={20} className="text-accent" /> BDS, MDS (Prosthodontics) - BHU Varanasi</div>
                <div className="flex items-center gap-3"><Award size={20} className="text-accent" /> MDS (Gold Medalist)</div>
                <div className="flex items-center gap-3"><Star size={20} className="text-accent" /> Ex-Resident - AIIMS Delhi, PGIMER Chandigarh</div>
                <div className="flex items-center gap-3"><Star size={20} className="text-accent" /> Ex-Senior Resident - AIIMS Bathinda</div>
              </div>

              <div className="specialties-tags flex flex-wrap gap-2 mb-8">
                <span className="bg-cream text-primary px-3 py-1 rounded-full text-sm font-medium border border-border-color">Full Mouth Implants</span>
                <span className="bg-cream text-primary px-3 py-1 rounded-full text-sm font-medium border border-border-color">All-on-4 / All-on-6</span>
                <span className="bg-cream text-primary px-3 py-1 rounded-full text-sm font-medium border border-border-color">Smile Makeover</span>
                <span className="bg-cream text-primary px-3 py-1 rounded-full text-sm font-medium border border-border-color">Veneers</span>
                <span className="bg-cream text-primary px-3 py-1 rounded-full text-sm font-medium border border-border-color">Zirconia Crowns</span>
                <span className="bg-cream text-primary px-3 py-1 rounded-full text-sm font-medium border border-border-color">FMR</span>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexDirection: 'column', marginTop: 'auto' }}>
                <a href="#book" className="btn btn-primary w-full" style={{ textAlign: 'center', display: 'block' }}>
                  Book with Dr. Ritu
                </a>
                <a href="#smile-makeover" style={{
                  display: 'block', textAlign: 'center', padding: '0.75rem',
                  color: 'var(--accent-color)', fontWeight: '600', fontSize: '0.9rem',
                  textDecoration: 'none', borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(245,130,32,0.2)',
                  transition: 'all 0.2s ease'
                }}>
                  View Smile Makeover Results →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialists;

