import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles, Activity, Shield, Smile, ScanFace, Stethoscope, Brain } from 'lucide-react';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: 2,
    title: 'Invisalign & Clear Aligners',
    description: 'Bathinda\'s most experienced Invisalign provider. Dr. Sandeep Kumar has completed 2,000+ braces & aligner treatments — straighten your teeth without anyone knowing.',
    icon: <Smile size={32} />,
    featured: true,
    href: '#invisalign'
  },
  {
    id: 7,
    title: 'Full Mouth Implants (FMR)',
    description: 'Dr. Ritu Saneja — 500+ implants placed. All-on-4, All-on-6, and Full Mouth Rehabilitation using premium titanium implants and zirconia crowns.',
    icon: <Shield size={32} />,
    featured: true,
    href: '#implants-hero'
  },
  {
    id: 1,
    title: 'Dental Implants',
    description: 'Permanent, natural-looking replacement for missing teeth using premium titanium implants with a near 99% success rate.',
    icon: <Shield size={32} />,
    href: '#implants-hero'
  },
  {
    id: 8,
    title: 'Dentofacial Orthopedics',
    description: 'Jaw growth correction and alignment for children & teens. Early intervention for underbites, overbites, and jaw discrepancies.',
    icon: <Brain size={32} />,
    href: '#book'
  },
  {
    id: 3,
    title: 'Smile Makeover',
    description: 'Customised cosmetic treatments — veneers, teeth whitening, composite bonding, and gum contouring — designed digitally for your face.',
    icon: <Sparkles size={32} />,
    href: '#smile-makeover'
  },
  {
    id: 4,
    title: 'Digital Dentistry',
    description: 'Advanced 3D intraoral scanning and precise digital planning for accurate treatments with no impressions needed.',
    icon: <ScanFace size={32} />,
    href: '#digital'
  },
  {
    id: 5,
    title: 'Root Canal Treatment',
    description: 'Painless, single-visit root canal procedures using rotary endodontics — save your natural tooth with zero discomfort.',
    icon: <Activity size={32} />,
    href: '#book'
  },
  {
    id: 6,
    title: 'General Dentistry',
    description: 'Comprehensive dental care including checkups, cleaning, fillings, and extractions for the whole family.',
    icon: <Stethoscope size={32} />,
    href: '#book'
  }
];

const Services = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, 
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out"
        }
      );

      gsap.fromTo(cardsRef.current, 
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%", // Trigger a bit earlier just in case
            once: true,
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToCards = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const featuredServices = servicesData.filter(s => s.featured);
  const regularServices = servicesData.filter(s => !s.featured);

  return (
    <section className="services section-padding bg-cream" id="services" ref={sectionRef}>
      <div className="container">
        <div className="services-header text-center mb-14" ref={headingRef}>
          <span className="section-badge">Our Expertise</span>
          <h2 className="heading-primary mt-4">Specialist Dental Treatments in Bathinda</h2>
          <p className="services-subtitle text-secondary max-w-2xl mx-auto mt-4">
            From Invisalign clear aligners to full mouth implants — led by AIIMS-trained orthodontists &amp; prosthodontists with 2,500+ cases completed.
          </p>
        </div>

        {/* Featured Treatments — Invisalign & Implants */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="service-card service-card-featured glass"
              ref={addToCards}
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                border: '2px solid var(--accent-color)',
                background: 'linear-gradient(135deg, rgba(245,130,32,0.06) 0%, white 100%)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <span style={{
                position: 'absolute', top: '1rem', right: '1rem',
                background: 'var(--accent-color)', color: 'white',
                fontSize: '0.7rem', fontWeight: '700',
                padding: '0.2rem 0.7rem', borderRadius: 'var(--radius-full)',
                letterSpacing: '0.5px'
              }}>MOST POPULAR</span>

              <div className="service-icon" style={{ marginBottom: '1.25rem' }}>
                {service.icon}
              </div>
              <h3 className="service-title text-xl font-bold mb-3 text-primary">{service.title}</h3>
              <p className="service-desc text-secondary mb-6 leading-relaxed" style={{ flexGrow: 1 }}>{service.description}</p>
              <a href={service.href} className="service-link text-accent font-semibold flex items-center gap-2" style={{ textDecoration: 'none' }}>
                Learn More <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Regular Treatments Grid */}
        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {regularServices.map((service) => (
            <div
              key={service.id}
              className="service-card glass"
              ref={addToCards}
              style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column' }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title text-xl font-bold mb-3 text-primary">{service.title}</h3>
              <p className="service-desc text-secondary mb-6 leading-relaxed" style={{ flexGrow: 1 }}>{service.description}</p>
              <a href={service.href} className="service-link text-accent font-semibold flex items-center gap-2" style={{ textDecoration: 'none' }}>
                Learn More <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

