import { Sparkles, ArrowRight, Star } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import BeforeAfterSlider from './BeforeAfterSlider';

const treatments = [
  {
    title: 'Porcelain Veneers',
    desc: 'Ultra-thin shells that instantly transform chipped, stained or misshapen teeth into a flawless celebrity smile.',
    icon: '✦'
  },
  {
    title: 'Teeth Whitening',
    desc: 'Professional-grade laser whitening that delivers up to 8 shades brighter results in a single sitting.',
    icon: '☀'
  },
  {
    title: 'Composite Bonding',
    desc: 'Same-day, affordable reshaping of teeth using tooth-coloured composite resin — no drilling required.',
    icon: '◈'
  },
  {
    title: 'Gum Contouring',
    desc: 'Laser reshaping of the gum line to reveal more of your teeth and create the perfect smile frame.',
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
            Led by <strong style={{ color: 'white' }}>Dr. Ritu Saneja</strong> — Gold Medalist Prosthodontist — our smile makeovers are designed with digital precision and delivered with artistry.
          </p>
        </div>

        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
          marginBottom: '4rem'
        }}>

          {/* Treatment Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {treatments.map((t, i) => (
              <div
                key={i}
                style={{
                  display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
                  padding: '1.5rem',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.2s ease',
                  cursor: 'default'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(245,130,32,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(245,130,32,0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                }}
              >
                <span style={{
                  width: '44px', height: '44px', borderRadius: 'var(--radius-sm)',
                  background: 'rgba(245,130,32,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent-color)', fontSize: '1.25rem', flexShrink: 0
                }}>
                  {t.icon}
                </span>
                <div>
                  <h3 style={{ color: 'white', fontWeight: '700', fontSize: '1.05rem', marginBottom: '0.4rem' }}>
                    {t.title}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
                    {t.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA */}
            <a href="#book" style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
              padding: '1rem 2rem', marginTop: '0.5rem',
              background: 'var(--accent-color)',
              color: 'white', borderRadius: 'var(--radius-full)',
              fontWeight: '700', textDecoration: 'none',
              fontSize: '1rem', transition: 'all 0.2s ease',
              boxShadow: '0 4px 20px rgba(245,130,32,0.4)'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'none'}
            >
              Book Smile Makeover Consultation <ArrowRight size={18} />
            </a>
          </div>

          {/* Before / After Slider */}
          <div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>
              Drag to Compare — Real Results
            </p>
            <BeforeAfterSlider
              beforeImage="/images/before_makeover_indian.png"
              afterImage="/images/after_makeover_indian.png"
              beforeAlt="Indian patient before cosmetic smile makeover at The DentalBrace Clinic Bathinda — showing stained, discoloured and chipped teeth requiring porcelain veneers and teeth whitening by Dr. Ritu Saneja"
              afterAlt="Same Indian patient after full smile makeover with porcelain veneers and teeth whitening by Dr. Ritu Saneja Gold Medalist Prosthodontist at The DentalBrace Clinic Bathinda — dazzling white perfectly shaped celebrity smile"
            />

            {/* Micro stats */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem'
            }}>
              {[
                { n: 500, suffix: '+', label: 'Implants by Dr. Ritu' },
                { n: 5.0, suffix: '★', label: 'Google Rating' }
              ].map((s, i) => (
                <div key={i} style={{
                  padding: '1rem', textAlign: 'center',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255,255,255,0.08)'
                }}>
                  <div style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--accent-color)' }}>
                    {i === 0 ? <AnimatedCounter target={s.n} suffix={s.suffix} /> : `${s.n}${s.suffix}`}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', marginTop: '0.2rem' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmileMakeover;
