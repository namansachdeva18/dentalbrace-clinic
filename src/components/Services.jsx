import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Sparkles, Activity, Shield, Smile, ScanFace, Stethoscope, Brain, Gem, Droplets, Baby, Wind, Zap } from 'lucide-react';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: 2,
    title: 'Invisalign & Clear Aligners',
    description: <><strong className="text-accent font-semibold">Bathinda's most experienced Invisalign provider</strong>.<br/><strong className="text-accent font-semibold">Dr. Sandeep Kumar</strong> has completed <strong className="text-accent font-semibold">5,500+ braces &amp; aligner treatments</strong> — straighten your teeth without anyone knowing.</>,
    icon: <Smile size={32} />,
    featured: true,
    href: '#book'
  },
  {
    id: 7,
    title: 'Full Mouth Implants (FMR)',
    description: <><strong className="text-accent font-semibold">Dr. Ritu Saneja</strong> — <strong className="text-accent font-semibold">5,000+ implants placed</strong>.<br/><strong className="text-accent font-semibold">All-on-4, All-on-6, and Full Mouth Rehabilitation</strong> using premium titanium implants and zirconia crowns.</>,
    icon: <Shield size={32} />,
    featured: true,
    href: '#book'
  },
  {
    id: 1,
    title: 'Dental Implants',
    description: <><strong className="text-accent font-semibold">Permanent, natural-looking replacement</strong> for missing teeth using <strong className="text-accent font-semibold">premium titanium implants</strong> with a near 99% success rate.</>,
    icon: <Shield size={32} />,
    href: '#book'
  },
  {
    id: 8,
    title: 'Dentofacial Orthopedics',
    description: <><strong className="text-accent font-semibold">Jaw growth correction</strong> and alignment for children & teens. <strong className="text-accent font-semibold">Early intervention</strong> for underbites, overbites, and jaw discrepancies.</>,
    icon: <Brain size={32} />,
    href: '/treatments/dentofacial-orthopedics'
  },
  {
    id: 3,
    title: 'Smile Makeover',
    description: <><strong className="text-accent font-semibold">Customised cosmetic treatments</strong> — veneers, teeth whitening, composite bonding, and gum contouring — <strong className="text-accent font-semibold">designed digitally</strong> for your face.</>,
    icon: <Sparkles size={32} />,
    href: '#book'
  },
  {
    id: 4,
    title: 'Digital Dentistry',
    description: <><strong className="text-accent font-semibold">Advanced 3D intraoral scanning</strong> and precise digital planning for accurate treatments with <strong className="text-accent font-semibold">no impressions needed</strong>.</>,
    icon: <ScanFace size={32} />,
    href: '#book'
  },
  {
    id: 5,
    title: 'Root Canal Treatment',
    description: <><strong className="text-accent font-semibold">Painless, single-visit</strong> root canal procedures using rotary endodontics — save your natural tooth with <strong className="text-accent font-semibold">zero discomfort</strong>.</>,
    icon: <Activity size={32} />,
    href: '/treatments/root-canal'
  },
  {
    id: 6,
    title: 'General Dentistry',
    description: <><strong className="text-accent font-semibold">Comprehensive dental care</strong> including checkups, cleaning, fillings, and extractions for the <strong className="text-accent font-semibold">whole family</strong>.</>,
    icon: <Stethoscope size={32} />,
    href: '#book'
  },
  {
    id: 9,
    title: 'Teeth Whitening',
    description: <><strong className="text-accent font-semibold">Professional LED & laser whitening</strong> — up to 8 shades brighter in a single 60-minute session. <strong className="text-accent font-semibold">Safe, painless, and long-lasting</strong> results by Dr. Ritu Saneja.</>,
    icon: <Zap size={32} />,
    href: '/treatments/teeth-whitening'
  },
  {
    id: 10,
    title: 'Dental Veneers',
    description: <><strong className="text-accent font-semibold">Ultra-thin porcelain or composite veneers</strong> for a Hollywood smile in just 2 visits. <strong className="text-accent font-semibold">Designed digitally with DSD</strong> so you preview your result before treatment begins.</>,
    icon: <Gem size={32} />,
    href: '/treatments/veneers'
  },
  {
    id: 11,
    title: 'Dental Crown & Bridge',
    description: <><strong className="text-accent font-semibold">Premium full-zirconia crowns</strong> and fixed bridges that restore strength, function, and natural appearance. Designed with <strong className="text-accent font-semibold">3D scanning</strong> — no putty impressions.</>,
    icon: <Shield size={32} />,
    href: '/treatments/dental-crown-bridge'
  },
  {
    id: 12,
    title: 'Kids Dentistry',
    description: <><strong className="text-accent font-semibold">Gentle, fear-free dental care</strong> for children aged 2–16. Cavity treatment, fluoride sealants, and <strong className="text-accent font-semibold">early orthodontic screening</strong> in a welcoming, child-friendly environment.</>,
    icon: <Baby size={32} />,
    href: '/treatments/kids-dentistry'
  },
  {
    id: 13,
    title: 'Gum Treatment & Scaling',
    description: <><strong className="text-accent font-semibold">Stop bleeding gums permanently</strong> with professional scaling, polishing, and periodontitis therapy. Healthy gums are the <strong className="text-accent font-semibold">foundation of a healthy smile</strong>.</>,
    icon: <Droplets size={32} />,
    href: '/treatments/gum-treatment'
  },
  {
    id: 14,
    title: 'Wisdom Tooth Removal',
    description: <><strong className="text-accent font-semibold">Painless surgical extraction</strong> of impacted or infected wisdom teeth — completed in a <strong className="text-accent font-semibold">single same-day appointment</strong> with minimal post-operative discomfort.</>,
    icon: <Wind size={32} />,
    href: '/treatments/wisdom-tooth-removal'
  },
  {
    id: 15,
    title: 'Composite Bonding',
    description: <><strong className="text-accent font-semibold">Fix chipped, gapped, or stained teeth</strong> in 90 minutes — <strong className="text-accent font-semibold">no drilling, no injections</strong>. An affordable cosmetic solution with immediate visible results.</>,
    icon: <Sparkles size={32} />,
    href: '/treatments/composite-bonding'
  },
  {
    id: 16,
    title: 'Maxillofacial Prosthetics',
    description: <><strong className="text-accent font-semibold">Advanced rehabilitation</strong> for oral and facial defects — restoring function, speech, and aesthetics with <strong className="text-accent font-semibold">custom prostheses in Bathinda</strong> by <strong className="text-accent font-semibold">Dr. Ritu Saneja</strong>.</>,
    icon: <ScanFace size={32} />,
    featured: true,
    href: '/treatments/maxillofacial-prosthetics'
  }
];

const Services = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

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

      // Cool individual card animations that trigger sequentially as scrolled (Perfect for mobile)
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        
        gsap.set(card, { transformPerspective: 1200 });
        gsap.fromTo(card,
          { 
            y: 60, 
            opacity: 0, 
            scale: 0.95, 
            rotationX: -10 
          },
          {
            scrollTrigger: {
              trigger: card,
              start: "top 85%", // Trigger exactly when this specific card comes into view
              once: true,
            },
            y: 0,
            opacity: 1,
            scale: 1,
            rotationX: 0,
            duration: 0.9,
            ease: "expo.out"
          }
        );
      });
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
            From Invisalign clear aligners to full mouth implants — led by <strong className="text-accent font-semibold">BHU &amp; AIIMS-trained orthodontists &amp; prosthodontists</strong> with <strong className="text-accent font-semibold">50k+ transformed smiles</strong>.
          </p>
        </div>

        {/* Featured Treatments — Invisalign & Implants */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="service-card service-card-featured glass gpu-accelerated"
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
              {service.href.startsWith('/') ? (
                <Link to={service.href} className="service-link text-accent font-semibold flex items-center gap-2" style={{ textDecoration: 'none' }}>
                  Learn More <ArrowRight size={16} />
                </Link>
              ) : (
                <a href={service.href} className="service-link text-accent font-semibold flex items-center gap-2" style={{ textDecoration: 'none' }}>
                  Learn More <ArrowRight size={16} />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Regular Treatments Grid */}
        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {regularServices.map((service) => (
            <div
              key={service.id}
              className="service-card glass gpu-accelerated"
              ref={addToCards}
              style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column' }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title text-xl font-bold mb-3 text-primary">{service.title}</h3>
              <p className="service-desc text-secondary mb-6 leading-relaxed" style={{ flexGrow: 1 }}>{service.description}</p>
              {service.href.startsWith('/') ? (
                <Link to={service.href} className="service-link text-accent font-semibold flex items-center gap-2" style={{ textDecoration: 'none' }}>
                  Learn More <ArrowRight size={16} />
                </Link>
              ) : (
                <a href={service.href} className="service-link text-accent font-semibold flex items-center gap-2" style={{ textDecoration: 'none' }}>
                  Learn More <ArrowRight size={16} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

