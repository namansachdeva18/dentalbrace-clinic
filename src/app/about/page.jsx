'use client';
import { useEffect } from 'react';
import Image from 'next/image';

import { Award, Shield, Users, ArrowRight, GraduationCap, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import Link from 'next/link';
import './About.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-wrapper">
      

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero__content">
            <span className="section-badge fade-in">Our Heritage</span>
            <h1 className="heading-primary fade-in" style={{ animationDelay: '0.1s' }}>
              Setting the Gold Standard in <span>Dentistry</span>
            </h1>
            <p className="about-subtitle fade-in" style={{ animationDelay: '0.2s' }}>
              Founded with a vision to bring <strong className="text-accent font-bold">world-class dental care</strong> to <strong className="text-primary font-bold">Bathinda</strong> and the broader Malwa region, our clinic combines <strong className="text-primary font-bold">BHU &amp; AIIMS-trained expertise</strong> with <strong className="text-accent font-bold">cutting-edge digital technology</strong>. We proudly serve patients from Bathinda, Mansa, Muktsar, Faridkot, Rampura Phul, Talwandi Sabo, and Mandi Dabwali, delivering <strong className="text-primary font-bold">painless, precise, and permanent</strong> results.
            </p>
            <div className="about-hero__stats fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="about-stat">
                <span className="about-stat-number">10+</span>
                <span className="about-stat-label">Years of Trust</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">50k+</span>
                <span className="about-stat-label">Happy Patients</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">100%</span>
                <span className="about-stat-label">Sterilization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="about-image-break container fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="about-image-wrapper glass shadow-lg">
           <Image
             src="/doctors-combined.webp"
             alt="Dr. Sandeep Kumar and Dr. Ritu Saneja, expert dental specialists and founders of The DentalBrace Clinic Bathinda Punjab"
             className="about-main-img"
             width={800}
             height={600}
             style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
             sizes="(max-width: 768px) 100vw, 50vw"
             priority={true}
           />
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="mission-vision section-padding bg-cream">
        <div className="container">
          <div className="text-center mb-16">
             <h2 className="heading-secondary">What Drives Us Every Day</h2>
             <p className="text-secondary max-w-2xl mx-auto">We don't just fix teeth; we restore confidence, function, and health. Our core pillars reflect our commitment to your smile.</p>
          </div>
          
          <div className="mission-grid">
            <div className="mission-card glass hover-elevate">
              <div className="mission-icon-wrap">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Uncompromising Ethics</h3>
              <p className="text-secondary">We recommend only what you truly need. Transparency, honesty, and ethical care are the foundation of our practice.</p>
            </div>
            
            <div className="mission-card glass hover-elevate">
              <div className="mission-icon-wrap">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Patient-First Philosophy</h3>
              <p className="text-secondary">Every treatment plan is tailored to your clinical needs, aesthetic goals, and personal comfort. We treat patients, not just teeth.</p>
            </div>

            <div className="mission-card glass hover-elevate">
              <div className="mission-icon-wrap">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Clinical Excellence</h3>
              <p className="text-secondary">Led by specialists from India's premier institutes (AIIMS & BHU), we maintain strict international sterilization protocols.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Standards of Excellence (Why Choose Us) */}
      <section className="about-standards-section section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-badge">Why Choose DentalBrace</span>
            <h2 className="heading-secondary mt-4">The Standards That Set Us Apart</h2>
            <p className="text-secondary max-w-2xl mx-auto mt-4">
              We go beyond standard dentistry. Every aspect of your care is engineered for safety, comfort, and uncompromising clinical outcomes.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            <div className="glass p-8 rounded-lg hover-elevate" style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'rgba(245,130,32,0.1)', color: 'var(--accent-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <GraduationCap size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>BHU &amp; AIIMS Specialists</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                Your treatment is directly led by MDS specialists trained at India's premier institutes (BHU Varanasi &amp; AIIMS New Delhi) — zero delegation to inexperienced trainees.
              </p>
            </div>

            <div className="glass p-8 rounded-lg hover-elevate" style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'rgba(245,130,32,0.1)', color: 'var(--accent-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Sparkles size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>100% 3D Digital Precision</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                No messy, gag-inducing putty impressions. We use state-of-the-art iTero 3D intraoral scanners for 100% digital accuracy and instant smile previews.
              </p>
            </div>

            <div className="glass p-8 rounded-lg hover-elevate" style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'rgba(245,130,32,0.1)', color: 'var(--accent-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <ShieldCheck size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>6-Step Sterilization Guarantee</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                Strict adherence to international Class-B autoclaving protocols. Every instrument pouch is individually vacuum-sealed and opened right before your eyes.
              </p>
            </div>

            <div className="glass p-8 rounded-lg hover-elevate" style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'rgba(245,130,32,0.1)', color: 'var(--accent-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <HeartHandshake size={28} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Ethical &amp; Painless Care</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
                Transparent pricing with no hidden charges, clear explanations before any procedure, and computerized painless local anesthesia for total comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta glass shadow-lg bg-navy text-center">
        <div className="container">
          <h2 className="heading-secondary text-white mb-6">Ready to Experience the Difference?</h2>
          <p className="text-white mb-8 max-w-2xl mx-auto" style={{ opacity: 0.9 }}>
            Join thousands of happy patients who have entrusted us with their smiles.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
             <Link href="/contact" className="btn btn-primary">Book Consultation <ArrowRight size={18} /></Link>
             <Link href="/gallery" className="btn btn-outline" style={{ background: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>View Results</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
