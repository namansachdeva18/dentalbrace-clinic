import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Calendar, Phone, Star, ShieldCheck, HeartPulse, Award, ArrowRight, CheckCircle, Users } from 'lucide-react';
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
        y: '-=10', duration: 4, yoyo: true, repeat: -1, ease: 'sine.inOut', delay: 3.4
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: 5500, suffix: '+', label: 'Braces & Aligner Cases', icon: <HeartPulse size={18} /> },
    { value: 5000, suffix: '+', label: 'Implants Placed', icon: <ShieldCheck size={18} /> },
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
            <span className="hero-title-accent">Clear Aligners (Invisalign), Braces, Dental Implants, Maxillofacial Prosthetics</span>{' '}
            &amp; Smile Makeovers
          </h1>

          {/* Subtext */}
          <p className="hero-subtitle">
            <strong className="text-white font-bold">50k+ transformed smiles</strong> — led by <strong className="text-accent font-bold">BHU &amp; AIIMS-trained specialists</strong>. Comprehensive care ranging from painless cosmetic dentistry to <strong className="text-white font-bold">advanced maxillofacial rehabilitation</strong>. Expert consultations available.
          </p>

          {/* Doctor Credentials */}
          <div className="hero-doctors">
            <div className="hero-doctor-badge">
              <CheckCircle size={20} color="#F58220" />
              <div>
                <strong>Dr. Sandeep Kumar</strong>
                <span>BDS, <strong className="text-accent">MDS (Orthodontics)</strong> - <strong className="text-accent">BHU Varanasi</strong> · Ex Resident - <strong className="text-accent">AIIMS New Delhi</strong></span>
              </div>
            </div>
            <div className="hero-doctor-badge">
              <CheckCircle size={20} color="#F58220" />
              <div>
                <strong>Dr. Ritu Saneja</strong>
                <span>MDS (<strong className="text-accent">Gold Medalist</strong>) · BDS, <strong className="text-accent">MDS (Prosthodontics)</strong> - <strong className="text-accent">BHU Varanasi</strong> · Ex-Resident - <strong className="text-accent">AIIMS Delhi</strong>, <strong className="text-accent">PGIMER Chandigarh</strong> · Ex-Senior Resident - <strong className="text-accent">AIIMS Bathinda</strong></span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a href="#book" className="btn-hero-primary">
              <Calendar size={20} /> Book Consultation <ArrowRight size={18} />
            </a>
            <a href="tel:7496849392" className="btn-hero-outline">
              <Phone size={20} /> 74968-49392
            </a>
          </div>

          {/* Impact Banner */}
          <div className="hero-impact-card">
            <div className="hero-impact-badge">
              <Users size={20} className="hero-impact-icon" />
              <div className="hero-impact-info">
                <span className="hero-impact-label">Community Trust</span>
                <span className="hero-impact-text">Total Patients Impacted &amp; Smiling</span>
              </div>
            </div>
            <div className="hero-impact-divider" />
            <div className="hero-impact-counter">
              <AnimatedCounter target={50000} suffix="+" />
            </div>
          </div>



        </div>
      </div>

      {/* RIGHT — Image Panel */}
      <div className="hero-right" ref={rightRef}>
        <div className="hero-image-wrapper">
          <picture>
            <source srcSet="/hero-image.webp" type="image/webp" />
            <img
              src="/hero-image.jpg?v=3"
              alt="Exterior view of The DentalBrace Clinic and Implant Centre on Bibi Wala Road Bathinda Punjab — showing clinic signboard with Dr. Sandeep Kumar MDS Consultant Orthodontist Ex-AIIMS PGI CHD and Dr. Ritu Saneja MDS Prosthodontist Implantologist Gold Medalist, phone number 74968-49392, premium dental clinic building Bathinda"
              className="hero-image"
              fetchPriority="high"
              decoding="async"
              loading="eager"
            />
          </picture>
          {/* Gradient overlay on bottom */}
          <div className="hero-image-overlay" />
        </div>

        {/* Floating review card */}
        <div className="hero-floating-card gpu-accelerated" ref={floatingCardRef}>
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
