import { Sparkles, ArrowRight, Star } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import BeforeAfterSlider from './BeforeAfterSlider';

const treatments = [
  {
    title: 'Porcelain Veneers',
    desc: <><strong className="text-white font-bold">Ultra-thin shells</strong> that instantly transform chipped, stained or misshapen teeth into a <strong className="text-white font-bold">flawless celebrity smile</strong>.</>,
    icon: '✦'
  },
  {
    title: 'Teeth Whitening',
    desc: <><strong className="text-white font-bold">Professional-grade laser whitening</strong> that delivers up to <strong className="text-white font-bold">8 shades brighter results</strong> in a single sitting.</>,
    icon: '☀'
  },
  {
    title: 'Composite Bonding',
    desc: <><strong className="text-white font-bold">Same-day, affordable reshaping</strong> of teeth using tooth-coloured composite resin — <strong className="text-white font-bold">no drilling required</strong>.</>,
    icon: '◈'
  },
  {
    title: 'Gum Contouring',
    desc: <><strong className="text-white font-bold">Laser reshaping</strong> of the gum line to reveal more of your teeth and create the <strong className="text-white font-bold">perfect smile frame</strong>.</>,
    icon: '❋'
  }
];

const SmileMakeover = () => {
  return (
    <section
      id="smile-makeover"
      aria-label="Smile Makeover Clinic Bathinda"
      style={{
        background: 'linear-gradient(135deg, var(--bg-navy) 0%, #0d3435 100%)',
        padding: 'var(--section-padding-desktop) 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative blob */}
      <div style={{
        position: 'absolute', bottom: '-100px', right: '-100px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'rgba(245, 130, 32, 0.05)', pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.4rem 1.25rem',
            background: 'rgba(245, 130, 32, 0.15)',
            border: '1px solid rgba(245, 130, 32, 0.3)',
            borderRadius: 'var(--radius-full)',
            color: 'var(--accent-color)',
            fontWeight: '700', fontSize: '0.85rem',
            letterSpacing: '1.5px', textTransform: 'uppercase',
            marginBottom: '1.5rem'
          }}>
            <Sparkles size={14} />
            Cosmetic Dentistry · Bathinda
          </span>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800', color: 'white', lineHeight: '1.2',
            marginBottom: '1rem'
          }}>
            Design the Smile
            <span style={{ color: 'var(--accent-color)' }}> You Deserve</span>
          </h2>

          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Our cosmetic smile makeovers are designed with <strong className="text-accent font-bold">digital precision</strong> and delivered with unparalleled artistry to give you the <strong className="text-white font-bold">perfect, confident smile</strong>.
          </p>
        </div>

        {/* Split Editorial Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {/* Left: Stunning Macro Image */}
          <div style={{
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            minHeight: '400px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <picture>
              <source srcSet="/images/new_after_makeover.webp" type="image/webp" />
              <img 
                src="/images/new_after_makeover.png" 
                alt="Cosmetic smile makeover with custom porcelain veneers at The DentalBrace Clinic Bathinda Punjab"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
          
          {/* Right: Treatment Cards Bento Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            alignContent: 'center'
          }}>
            {treatments.map((t, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.03)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.transform = 'none';
              }}
              >
                <span style={{ color: 'var(--accent-color)', fontSize: '1.5rem', display: 'block', marginBottom: '1rem' }}>{t.icon}</span>
                <h3 style={{ color: 'white', fontWeight: '700', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{t.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action and SEO Stats */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'center' }}>
          <a href="#book" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
            padding: '1.25rem 2.5rem',
            background: 'var(--accent-color)',
            color: 'white', borderRadius: 'var(--radius-full)',
            fontWeight: '700', textDecoration: 'none',
            fontSize: '1.1rem', transition: 'all 0.2s ease',
            boxShadow: '0 4px 20px rgba(245,130,32,0.4)'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'none'}
          >
            Book Smile Makeover <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalProcedure",
          "name": "Cosmetic Smile Makeover",
          "procedureType": "CosmeticProcedure",
          "description": "Comprehensive cosmetic dentistry including porcelain veneers, composite bonding, and teeth whitening.",
          "bodyLocation": "Teeth",
          "provider": {
            "@type": "MedicalClinic",
            "name": "The DentalBrace Clinic Bathinda"
          }
        })
      }} />
    </section>
  );
};

export default SmileMakeover;
