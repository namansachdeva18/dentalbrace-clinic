import { Award, CheckCircle, ArrowRight, Star, Medal } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import BeforeAfterSlider from './BeforeAfterSlider';

const ImplantsHero = () => {
  return (
    <section
      id="implants"
      style={{
        background: 'var(--bg-ivory)',
        padding: 'var(--section-padding-desktop) 0',
        position: 'relative',
        overflow: 'hidden'
      }}
      aria-label="Full Mouth Dental Implants in Bathinda"
    >
      {/* Decorative accent shape */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '40%', height: '100%',
        background: 'linear-gradient(to left, rgba(245,130,32,0.04), transparent)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Section Label */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.4rem 1.25rem',
            background: 'rgba(245, 130, 32, 0.1)',
            border: '1px solid rgba(245, 130, 32, 0.25)',
            borderRadius: 'var(--radius-full)',
            color: 'var(--accent-color)',
            fontWeight: '700', fontSize: '0.85rem',
            letterSpacing: '1.5px', textTransform: 'uppercase'
          }}>
            <Medal size={14} />
            Bathinda's Leading Implantologist
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>

          {/* Right: Content (Mobile First) */}
          <div className="implants-content">
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              color: 'var(--text-primary)',
              lineHeight: '1.2',
              marginBottom: '1.5rem'
            }}>
              Missing Teeth?
              <span style={{ color: 'var(--accent-color)', display: 'block' }}>
                Restore Your Confidence.
              </span>
            </h2>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
              From a single missing tooth to a complete full mouth reconstruction, we deliver <strong className="text-accent font-bold">premium dental implants</strong> that <strong className="text-primary font-bold">look, feel and function exactly like natural teeth</strong>.
            </p>

            {/* Stat Counter Row */}
            <div style={{
              display: 'flex', gap: '2.5rem', marginBottom: '2.5rem',
              padding: '1.5rem',
              background: 'white',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div>
                <div style={{ fontSize: '2.25rem', fontWeight: '800', color: 'var(--accent-color)' }}>
                  <AnimatedCounter target={5000} suffix="+" />
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: '500' }}>
                  Implants Placed
                </div>
              </div>
              <div style={{ width: '1px', background: 'var(--border-color)' }} />
              <div>
                <div style={{ fontSize: '2.25rem', fontWeight: '800', color: 'var(--accent-color)' }}>
                  99%
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: '500' }}>
                  Success Rate
                </div>
              </div>
            </div>

            {/* Benefits */}
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2.5rem' }}>
              {[
                '<strong class="text-primary font-bold">Full Mouth Rehabilitation (FMR)</strong> — complete smile reconstruction',
                '<strong class="text-primary font-bold">All-on-4 & All-on-6</strong> implant solutions',
                '<strong class="text-primary font-bold">Zirconia & PFM</strong> crowns on implants',
                '<strong class="text-primary font-bold">Smile Makeovers</strong> — veneers, composites, whitening',
                'Gum contouring & pink aesthetics'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '2px' }} />
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>

            {/* Tech Stack Marquee / List */}
            <div style={{
              display: 'flex', flexDirection: 'column', gap: '0.75rem',
              padding: '1.25rem',
              background: 'var(--bg-cream)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(245, 130, 32, 0.1)',
              marginBottom: '2rem'
            }}>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-secondary)', fontWeight: 'bold' }}>Advanced Implant Technology</span>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: '600' }}><Award size={16} color="var(--accent-color)" /> CBCT 3D Scanning</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: '600' }}><Award size={16} color="var(--accent-color)" /> Digital Guided Surgery</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: '600' }}><Award size={16} color="var(--accent-color)" /> Premium Zirconia</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#book" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                padding: '1rem 2rem',
                background: 'var(--accent-color)',
                color: 'white', borderRadius: 'var(--radius-full)',
                fontWeight: '700', textDecoration: 'none',
                fontSize: '1rem', transition: 'all 0.2s ease',
                boxShadow: '0 4px 20px rgba(245,130,32,0.35)'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}
              >
                Book Implant Consultation <ArrowRight size={18} />
              </a>
              <a href="tel:7496849392" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                padding: '1rem 2rem',
                background: 'transparent',
                color: 'var(--text-primary)', borderRadius: 'var(--radius-full)',
                fontWeight: '600', textDecoration: 'none',
                fontSize: '1rem',
                border: '1px solid var(--border-color)',
                transition: 'all 0.2s ease'
              }}>
                Call Now
              </a>
            </div>
          </div>

          {/* Left: Before/After Slider (Desktop Left, Mobile Second) */}
          <div className="implants-slider">
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{
                color: 'var(--text-secondary)', fontSize: '0.8rem',
                textAlign: 'center', textTransform: 'uppercase', letterSpacing: '1px'
              }}>
                Drag to Compare — Real Patient Results
              </p>
            </div>
            <BeforeAfterSlider
              beforeImage="/images/before_implants_v2.png"
              afterImage="/images/after_implants_v2.png"
              beforeAlt="Indian patient before dental implant treatment at The DentalBrace Clinic Bathinda — multiple missing teeth, decayed teeth requiring full mouth dental implants by Dr. Ritu Saneja"
              afterAlt="Same Indian patient after full mouth dental implants at The DentalBrace Clinic Bathinda by Dr. Ritu Saneja Gold Medalist Prosthodontist — complete natural-looking smile restoration with All-on-4 implants"
            />
            <div style={{
              marginTop: '1.5rem', padding: '1rem 1.5rem',
              background: 'white',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              textAlign: 'center',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                💬 <em>"Dr. Ritu gave me back my smile — the implants look completely natural!"</em>
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', marginTop: '0.5rem' }}>
                {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="var(--accent-color)" color="var(--accent-color)" />)}
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '0.25rem', opacity: 0.6 }}>— Verified Google Review</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImplantsHero;
