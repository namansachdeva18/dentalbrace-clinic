import { Award, CheckCircle, ArrowRight, Star } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import BeforeAfterSlider from './BeforeAfterSlider';

const InvisalignHero = () => {
  return (
    <section
      id="invisalign"
      style={{
        background: 'linear-gradient(135deg, var(--bg-navy) 0%, #0a2829 100%)',
        padding: 'var(--section-padding-desktop) 0',
        position: 'relative',
        overflow: 'hidden'
      }}
      aria-label="Invisalign and Clear Aligners in Bathinda"
    >
      {/* Decorative background blobs */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'rgba(245, 130, 32, 0.06)', pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute', bottom: '-60px', left: '-60px',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'rgba(245, 130, 32, 0.04)', pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Section Label */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.4rem 1.25rem',
            background: 'rgba(245, 130, 32, 0.15)',
            border: '1px solid rgba(245, 130, 32, 0.3)',
            borderRadius: 'var(--radius-full)',
            color: 'var(--accent-color)',
            fontWeight: '700', fontSize: '0.85rem',
            letterSpacing: '1.5px', textTransform: 'uppercase'
          }}>
            <Star size={14} fill="currentColor" />
            Certified Invisalign Provider · Bathinda
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>

          {/* Left: Content */}
          <div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              color: 'white',
              lineHeight: '1.2',
              marginBottom: '1.5rem'
            }}>
              Bathinda's Most Trusted
              <span style={{ color: 'var(--accent-color)', display: 'block' }}>
                Invisalign Provider
              </span>
            </h2>

            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
              Get <strong className="text-white font-bold">straighter teeth without anyone knowing</strong>. Invisible, removable, and comfortable — Invisalign clear aligners are custom-made for your smile by <strong className="text-accent font-bold">Bathinda's leading orthodontic specialists</strong>.
            </p>

            {/* Stat Counter Row */}
            <div style={{
              display: 'flex', gap: '2.5rem', marginBottom: '2.5rem',
              padding: '1.5rem',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <div>
                <div style={{ fontSize: '2.25rem', fontWeight: '800', color: 'var(--accent-color)' }}>
                  <AnimatedCounter target={5500} suffix="+" />
                </div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', fontWeight: '500' }}>
                  Braces &amp; Aligner Cases
                </div>
              </div>
              <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
              <div>
                <div style={{ fontSize: '2.25rem', fontWeight: '800', color: 'var(--accent-color)' }}>
                  10+
                </div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', fontWeight: '500' }}>
                  Years Experience
                </div>
              </div>
            </div>

            {/* Benefits List */}
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2.5rem' }}>
              {[
                <><strong className="text-white font-bold">Nearly invisible</strong> — no one can tell you're wearing them</>,
                <><strong className="text-white font-bold">Removable</strong> for eating, brushing & special occasions</>,
                <><strong className="text-white font-bold">Treats crowding, gaps,</strong> overbites & underbites</>,
                <><strong className="text-white font-bold">Dentofacial orthopedics</strong> for jaw alignment</>,
                <><strong className="text-white font-bold">Faster than traditional braces</strong> in most cases</>
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'rgba(255,255,255,0.8)' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>


            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#book" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                padding: '1rem 2rem',
                background: 'var(--accent-color)',
                color: 'white', borderRadius: 'var(--radius-full)',
                fontWeight: '700', textDecoration: 'none',
                fontSize: '1rem', transition: 'all 0.2s ease',
                boxShadow: '0 4px 20px rgba(245,130,32,0.4)'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}
              >
                Get Invisalign Assessment (today) <ArrowRight size={18} />
              </a>
              <a href="tel:7496849392" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                padding: '1rem 2rem',
                background: 'transparent',
                color: 'white', borderRadius: 'var(--radius-full)',
                fontWeight: '600', textDecoration: 'none',
                fontSize: '1rem',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'all 0.2s ease'
              }}>
                Call Now
              </a>
            </div>
          </div>

          {/* Right: Before/After Slider */}
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Drag to Compare Real Results
              </p>
            </div>
            <BeforeAfterSlider
              beforeImage="/images/before_aligners_v3.jpg"
              afterImage="/images/after_aligners_v3.png"
              beforeAlt="Real patient before Invisalign clear aligner treatment at The DentalBrace Clinic Bathinda — showing crowded overlapping teeth requiring orthodontic correction by Dr. Sandeep Kumar"
              afterAlt="Same real patient after Invisalign treatment by Dr. Sandeep Kumar at The DentalBrace Clinic Bathinda — beautifully straight aligned teeth, certified Invisalign provider result in Bathinda Punjab"
            />
            <div style={{
              marginTop: '1.5rem', padding: '1rem 1.5rem',
              background: 'rgba(245, 130, 32, 0.1)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(245, 130, 32, 0.2)',
              textAlign: 'center'
            }}>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', margin: 0 }}>
                💬 <em>"I got Invisalign done by Dr. Sandeep and it changed my life!"</em>
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', marginTop: '0.5rem' }}>
                {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="var(--accent-color)" color="var(--accent-color)" />)}
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginTop: '0.25rem' }}>— Verified Google Review</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InvisalignHero;
