import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Calendar, Phone, Star, ShieldCheck, HeartPulse, Award, ArrowRight, CheckCircle } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const floatingCardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left content reveal — stagger children
      gsap.fromTo(leftRef.current.children,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
      );

      // Right image reveal
      gsap.fromTo(rightRef.current,
        { scale: 1.06, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.3 }
      );

      // Floating card — gentle rise in, then ultra-slow breathe
      gsap.fromTo(floatingCardRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.8, ease: 'power2.out', delay: 1.6 }
      );
      gsap.to(floatingCardRef.current, {
        y: '-=5', duration: 7, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 3.4
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: 3000, suffix: '+', label: 'Braces & Aligner Cases', icon: <HeartPulse size={18} /> },
    { value: 3000, suffix: '+', label: 'Implants Placed', icon: <ShieldCheck size={18} /> },
    { value: 5.0, suffix: '★', label: 'Google Rating', icon: <Star size={18} />, isDecimal: true },
    { value: 10, suffix: '+', label: 'Years Experience', icon: <Award size={18} /> },
  ];

  return (
    <section className="hero" id="home" ref={heroRef}>

      {/* LEFT — Dark Navy Panel */}
      <div className="hero-left">
        <div className="hero-left-inner" ref={leftRef}>

          {/* Badge */}
          <div className="hero-badge">
            <span className="live-dot"></span>
            Bathinda's #1 Orthodontic &amp; Implant Centre
          </div>

          {/* Main Headline */}
          <h1 className="hero-title">
            Bathinda's Most Trusted Specialists for{' '}
            <span className="hero-title-accent">Clear Aligners (Invisalign), Braces, Dental Implants</span>{' '}
            &amp; Smile Makeovers
          </h1>

          {/* Subtext */}
          <p className="hero-subtitle">
            10k+ transformed smiles — led by AIIMS-trained specialists. Consultation at a nominal ₹200/-. Painless, precise, and permanent dental care.
          </p>

          {/* Doctor Credentials */}
          <div className="hero-doctors">
            <div className="hero-doctor-badge">
              <CheckCircle size={16} color="#F58220" />
              <div>
                <strong>Dr. Sandeep Kumar</strong>
                <span>BDS, MDS (Orthodontics) - BHU Varanasi · Ex Resident - AIIMS New Delhi</span>
              </div>
            </div>
            <div className="hero-doctor-badge">
              <CheckCircle size={16} color="#F58220" />
              <div>
                <strong>Dr. Ritu Saneja</strong>
                <span>MDS (Gold Medalist) · BDS, MDS (Prosthodontics) - BHU Varanasi · Ex-Resident - AIIMS Delhi, PGIMER Chandigarh · Ex-Senior Resident - AIIMS Bathinda</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#book" className="btn-hero-primary">
              <Calendar size={20} /> Book Consultation @ just ₹200/- <ArrowRight size={18} />
            </a>
            <a href="tel:7496849392" className="btn-hero-outline">
              <Phone size={20} /> 74968-49392
            </a>
          </div>

          {/* Stat Chips */}
          <div className="hero-stats-row">
            {stats.map((s, i) => (
              <div key={i} className="hero-stat-chip">
                <span className="hero-stat-icon">{s.icon}</span>
                <span className="hero-stat-value">
                  {s.isDecimal
                    ? s.value
                    : <AnimatedCounter target={s.value} suffix={s.suffix} />
                  }
                  {s.isDecimal ? s.suffix : ''}
                </span>
                <span className="hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* RIGHT — Image Panel */}
      <div className="hero-right" ref={rightRef}>
        <div className="hero-image-wrapper">
          <img
            src="/hero-image.jpg"
            alt="Exterior view of The DentalBrace Clinic and Implant Centre on Bibi Wala Road Bathinda Punjab — showing clinic signboard with Dr. Sandeep Kumar MDS Consultant Orthodontist Ex-AIIMS PGI CHD and Dr. Ritu Saneja MDS Prosthodontist Implantologist Gold Medalist, phone number 74968-49392, premium dental clinic building Bathinda"
            className="hero-image"
            fetchpriority="high"
            decoding="async"
          />
          {/* Gradient overlay on bottom */}
          <div className="hero-image-overlay" />
        </div>

        {/* Floating review card */}
        <div className="hero-floating-card" ref={floatingCardRef}>
          <div className="hero-floating-stars">
            {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="#F58220" color="#F58220" />)}
          </div>
          <p className="hero-floating-quote">
            "I was nervous about getting braces, but Dr. Sandeep made it so easy. The results are amazing!"
          </p>
          <div className="hero-floating-patient">
            <div className="hero-floating-avatar" style={{backgroundColor: '#e3f2fd', color: '#1976d2'}}>M</div>
            <span>Manpreet K. · Verified Google Review</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
