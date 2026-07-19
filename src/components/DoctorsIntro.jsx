import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  GraduationCap, Award, Star, Shield, ArrowRight,
  CheckCircle2, Medal, Stethoscope, Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCounter from './AnimatedCounter';
import './DoctorsIntro.css';

gsap.registerPlugin(ScrollTrigger);

const DoctorsIntro = () => {
  const sectionRef = useRef(null);
  const bannerRef = useRef(null);
  const cardsRef = useRef([]);
  const trustRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Banner slides in from left + photo from right
      gsap.from('.doctors-intro__combined-text', {
        scrollTrigger: { trigger: bannerRef.current, start: 'top 85%', once: true },
        x: -40, opacity: 0, duration: 0.9, ease: 'power3.out',
      });
      gsap.from('.doctors-intro__combined-photo', {
        scrollTrigger: { trigger: bannerRef.current, start: 'top 85%', once: true },
        x: 40, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.1,
      });

      // Cards pop in individually
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.set(card, { transformPerspective: 1200 });
        gsap.fromTo(card,
          { y: 50, opacity: 0, scale: 0.95, rotationX: -10 },
          {
            scrollTrigger: { trigger: card, start: 'top 85%', once: true },
            y: 0, opacity: 1, scale: 1, rotationX: 0,
            duration: 0.8, ease: 'expo.out'
          }
        );
      });

      // Trust strip fades in
      gsap.from(trustRef.current, {
        scrollTrigger: { trigger: trustRef.current, start: 'top 85%', once: true },
        opacity: 0, y: 20, duration: 0.6, ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addCard = (el) => {
    if (el && !cardsRef.current.includes(el)) cardsRef.current.push(el);
  };

  return (
    <section className="doctors-intro" ref={sectionRef} id="our-doctors">
      <div className="container">

        {/* ── Section Header ── */}
        <div className="doctors-intro__header">
          <span className="doctors-intro__eyebrow">
            <Stethoscope size={13} /> Meet The Doctors
          </span>
          <h2 className="doctors-intro__title">
            Specialists Who've <span>Transformed</span><br />
            Thousands of Smiles
          </h2>
          <p className="doctors-intro__subtitle">
            AIIMS-trained experts with 10+ years of combined experience — bringing world-class orthodontic and implant care to Bathinda.
          </p>
        </div>

        {/* ── Combined Banner (Both Doctors Together) ── */}
        <div className="doctors-intro__combined" ref={bannerRef}>
          {/* Left: text */}
          <div className="doctors-intro__combined-text">
            <span className="doctors-intro__combined-tag">
              <Shield size={11} /> Bathinda's Most Trusted Dental Team
            </span>
            <h3 className="doctors-intro__combined-heading">
              Dr. Sandeep Kumar<br />
              &amp; <em>Dr. Ritu Saneja</em>
            </h3>
            <p className="doctors-intro__combined-desc">
              Together, they form a powerhouse duo — one mastering every nuance of teeth alignment &amp; bite correction, the other transforming smiles through world-class implants and prosthodontic artistry.
            </p>

            {/* Key Stats */}
            <div className="doctors-intro__stats-row">
              <div className="doctors-intro__stat">
                <span className="doctors-intro__stat-number"><AnimatedCounter target={5500} suffix="+" /></span>
                <span className="doctors-intro__stat-label">Braces &amp; Aligner Cases</span>
              </div>
              <div className="doctors-intro__stat">
                <span className="doctors-intro__stat-number"><AnimatedCounter target={5000} suffix="+" /></span>
                <span className="doctors-intro__stat-label">Implants Placed</span>
              </div>
              <div className="doctors-intro__stat">
                <span className="doctors-intro__stat-number"><AnimatedCounter target={10} suffix="+" /></span>
                <span className="doctors-intro__stat-label">Years Experience</span>
              </div>
            </div>

            <a href="/#book" className="doctors-intro__combined-cta">
              Book a Consultation <ArrowRight size={16} />
            </a>
          </div>

          {/* Right: photo */}
          <div className="doctors-intro__combined-photo">
            <picture>
              <source srcSet="/doctors-combined.webp" type="image/webp" />
              <img
                src="/doctors-combined.jpg"
                alt="Dr. Sandeep Kumar and Dr. Ritu Saneja — The DentalBrace Clinic Bathinda — Expert Orthodontist and Implantologist duo"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        </div>

        {/* ── Individual Doctor Cards ── */}
        <div className="doctors-intro__cards">

          {/* Dr. Sandeep Kumar */}
          <div className="doctors-intro__card" ref={addCard}>
            <div className="doctors-intro__card-photo-wrap">
              <div className="doctors-intro__card-badge doctors-intro__card-badge--orange">
                <Star size={11} fill="white" /> #1 Invisalign Provider · Bathinda
              </div>
              <picture>
                <source srcSet="/dr-sandeep.webp" type="image/webp" />
                <img
                  src="/dr-sandeep.jpg"
                  alt="Dr. Sandeep Kumar — Best Orthodontist in Bathinda — MDS Orthodontics, AIIMS New Delhi, Invisalign Expert"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <div className="doctors-intro__card-body">
              <h3 className="doctors-intro__card-name">Dr. Sandeep Kumar</h3>
              <p className="doctors-intro__card-role">Consultant Orthodontist &amp; Aligners Expert</p>
              <p className="doctors-intro__card-bio">
                <strong className="text-accent font-bold">Bathinda's most experienced orthodontist</strong> — trained at India's premier institutions. From <strong className="text-primary font-bold">virtually invisible aligners</strong> to complex jaw correction, Dr. Sandeep combines precision science with genuine care.
              </p>

              <div className="doctors-intro__card-quals">
                <div className="doctors-intro__card-qual">
                  <GraduationCap size={14} />
                  <span>BDS, MDS (Orthodontics) — BHU Varanasi</span>
                </div>
                <div className="doctors-intro__card-qual">
                  <Award size={14} />
                  <span>Ex Resident — AIIMS New Delhi</span>
                </div>
                <div className="doctors-intro__card-qual">
                  <CheckCircle2 size={14} />
                  <span>Certified Invisalign Provider</span>
                </div>
              </div>

              <div className="doctors-intro__card-tags">
                <span>Invisalign</span>
                <span>Clear Aligners</span>
                <span>Damon Braces</span>
                <span>Jaw Correction</span>
                <span>Kids Braces</span>
              </div>

              <Link to="/doctors/dr-sandeep-kumar" className="doctors-intro__card-cta">
                View Profile <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Dr. Ritu Saneja */}
          <div className="doctors-intro__card" ref={addCard}>
            <div className="doctors-intro__card-photo-wrap">
              <div className="doctors-intro__card-badge doctors-intro__card-badge--gold">
                <Medal size={11} /> MDS Gold Medalist · BHU Varanasi
              </div>
              <picture>
                <source srcSet="/dr-ritu.webp" type="image/webp" />
                <img
                  src="/dr-ritu.jpg"
                  alt="Dr. Ritu Saneja — Best Implantologist &amp; Prosthodontist in Bathinda — Gold Medalist MDS, AIIMS, PGIMER"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>

            <div className="doctors-intro__card-body">
              <h3 className="doctors-intro__card-name">Dr. Ritu Saneja</h3>
              <p className="doctors-intro__card-role">Consultant Prosthodontist &amp; Implantologist</p>
              <p className="doctors-intro__card-bio">
                A <strong className="text-accent font-bold">Gold Medalist</strong> with <strong className="text-primary font-bold">5000+ implants placed</strong>, Dr. Ritu brings unmatched expertise to <strong className="text-primary font-bold">full-mouth rehabilitation</strong> and smile design. Patients travel from across India and abroad for her precision and artistry.
              </p>

              <div className="doctors-intro__card-quals">
                <div className="doctors-intro__card-qual">
                  <GraduationCap size={14} />
                  <span>BDS, MDS (Prosthodontics) — BHU Varanasi</span>
                </div>
                <div className="doctors-intro__card-qual">
                  <Medal size={14} />
                  <span>MDS Gold Medalist</span>
                </div>
                <div className="doctors-intro__card-qual">
                  <Award size={14} />
                  <span>Ex-Resident — AIIMS Delhi &amp; PGIMER Chandigarh</span>
                </div>
                <div className="doctors-intro__card-qual">
                  <Award size={14} />
                  <span>Ex-Senior Resident — AIIMS Bathinda</span>
                </div>
              </div>

              <div className="doctors-intro__card-tags">
                <span>Full Mouth Implants</span>
                <span>All-on-4</span>
                <span>Smile Makeover</span>
                <span>Veneers</span>
                <span>Zirconia Crowns</span>
              </div>

              <Link to="/doctors/dr-ritu-saneja" className="doctors-intro__card-cta">
                View Profile <ArrowRight size={15} />
              </Link>
            </div>
          </div>

        </div>

        {/* ── Trust Strip ── */}
        <div className="doctors-intro__trust" ref={trustRef}>
          <div className="doctors-intro__trust-item">
            <GraduationCap size={18} />
            <span><strong className="font-bold">AIIMS-Trained</strong> Specialists</span>
          </div>
          <div className="doctors-intro__trust-divider" />
          <div className="doctors-intro__trust-item">
            <Users size={18} />
            <span><strong className="font-bold">10k+</strong> Happy Patients</span>
          </div>
          <div className="doctors-intro__trust-divider" />
          <div className="doctors-intro__trust-item">
            <Star size={18} />
            <span><strong className="font-bold">5★</strong> Google Rating</span>
          </div>
          <div className="doctors-intro__trust-divider" />
          <div className="doctors-intro__trust-item">
            <Shield size={18} />
            <span><strong className="font-bold">10+ Years</strong> of Excellence</span>
          </div>
          <div className="doctors-intro__trust-divider" />
          <div className="doctors-intro__trust-item">
            <CheckCircle2 size={18} />
            <span><strong className="font-bold">Painless</strong>, Ethical Care</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DoctorsIntro;
