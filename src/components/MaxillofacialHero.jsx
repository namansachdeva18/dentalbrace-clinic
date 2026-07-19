import { Award, CheckCircle, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

const MaxillofacialHero = () => {
  return (
    <section
      id="maxillofacial-prosthetics"
      style={{
        background: 'var(--bg-white)',
        padding: 'var(--section-padding-desktop) 0',
        position: 'relative',
        overflow: 'hidden'
      }}
      aria-label="Maxillofacial Prosthetics in Bathinda by Dr. Ritu Saneja"
    >
      {/* Decorative accent shape */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: '40%', height: '100%',
        background: 'linear-gradient(to right, rgba(245,130,32,0.03), transparent)',
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
            <ShieldCheck size={14} />
            Specialized Rehabilitation & Care
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>

          {/* Left: Content (Mobile First) */}
          <article className="maxillofacial-content">
            <header>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '800',
                color: 'var(--text-primary)',
                lineHeight: '1.2',
                marginBottom: '1.5rem'
              }}>
                Maxillofacial Prosthetics
                <span style={{ color: 'var(--accent-color)', display: 'block' }}>
                  Restoring Life & Confidence.
                </span>
              </h2>
            </header>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
              We provide highly specialized <strong className="text-accent font-bold">oral and facial rehabilitation</strong> for defects resulting from <strong className="text-primary font-bold">cancer surgery, severe trauma, or congenital anomalies (like cleft palate)</strong>. Under the expert care of Dr. Ritu Saneja (MDS Prosthodontics, Gold Medalist, Ex-Resident AIIMS Delhi), we craft custom prostheses that restore speech, swallowing, chewing, and facial symmetry.
            </p>

            {/* Benefits / Prosthesis Types */}
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2.5rem' }}>
              {[
                '<strong class="text-primary font-bold">Maxillary Obturators</strong> — restores speech and swallowing after oral cancer surgery or cleft palate',
                '<strong class="text-primary font-bold">Speech Bulbs</strong> — improves velopharyngeal insufficiency (hypernasal speech)',
                '<strong class="text-primary font-bold">Orbital (Eye) & Auricular (Ear) Prostheses</strong> — life-like silicone restorations for facial trauma',
                '<strong class="text-primary font-bold">Nasal Prostheses</strong> — custom-sculpted to match your exact skin tone and texture',
                'Comprehensive psychological and functional rehabilitation'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                  <Heart size={18} style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '2px' }} />
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
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-secondary)', fontWeight: 'bold' }}>Advanced Prosthetic Technology</span>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: '600' }}><Award size={16} color="var(--accent-color)" /> Precision 3D Scanning</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: '600' }}><Award size={16} color="var(--accent-color)" /> Medical-Grade Silicone</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: '600' }}><Award size={16} color="var(--accent-color)" /> Custom Shade Matching</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="/treatments/maxillofacial-prosthetics" style={{
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
                Learn More <ArrowRight size={18} />
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
                Call for Assessment
              </a>
            </div>
          </article>

          {/* Right: Empty Before/After Slots */}
          <div className="maxillofacial-gallery" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ marginBottom: '0.5rem' }}>
              <p style={{
                color: 'var(--text-secondary)', fontSize: '0.8rem',
                textAlign: 'center', textTransform: 'uppercase', letterSpacing: '1px'
              }}>
                Transformational Results
              </p>
            </div>
            
            {/* Slot 1 Slider */}
            <BeforeAfterSlider
              beforeImage="/images/maxillofacial_1_before.jpg"
              afterImage="/images/maxillofacial_1_after.jpg"
              beforeAlt="Patient before maxillofacial prosthetic treatment by Dr. Ritu Saneja"
              afterAlt="Patient after custom maxillofacial prosthesis by Dr. Ritu Saneja"
            />

            {/* Slot 2 Slider */}
            <BeforeAfterSlider
              beforeImage="/images/maxillofacial_2_before.jpg"
              afterImage="/images/maxillofacial_2_after.jpg"
              beforeAlt="Patient before maxillofacial prosthetic treatment by Dr. Ritu Saneja"
              afterAlt="Patient after custom maxillofacial prosthesis by Dr. Ritu Saneja"
            />
            
          </div>

        </div>
      </div>
    </section>
  );
};

export default MaxillofacialHero;
