'use client';
import './MaxillofacialHero.css';
import { Award, ArrowRight, ShieldCheck, Heart, Phone } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';


const PROSTHESIS_TYPES = [
  { title: 'Maxillary Obturators', desc: 'Restores speech & swallowing after oral cancer surgery or cleft palate' },
  { title: 'Speech Bulbs', desc: 'Improves velopharyngeal insufficiency (hypernasal speech)' },
  { title: 'Orbital & Auricular (Ear) Prostheses', desc: 'Life-like silicone restorations for facial trauma' },
  { title: 'Nasal Prostheses', desc: 'Custom-sculpted to match your exact skin tone and texture' },
  { title: 'Comprehensive Care', desc: 'Psychological & functional rehabilitation support' },
];

const TECH_CHIPS = ['Precision 3D Scanning', 'Medical-Grade Silicone', 'Custom Shade Matching'];

const MaxillofacialHero = () => {
  return (
    <section
      id="maxillofacial-prosthetics"
      className="maxillo-section"
      aria-label="Maxillofacial Prosthetics in Bathinda by Dr. Ritu Saneja"
    >

      {/* ══ HERO BAND ═══════════════════════════════════════════════ */}
      <div className="maxillo-hero-band">

        {/* Background decorations */}
        <div className="maxillo-blob maxillo-blob--tr" />
        <div className="maxillo-blob maxillo-blob--bl" />
        <div className="maxillo-dot-grid" />
        <div className="maxillo-stripe" />

        <div className="container maxillo-hero-inner">

          {/* LEFT: Text */}
          <div className="maxillo-hero-text">
            <span className="maxillo-eyebrow">
              <ShieldCheck size={13} />
              Specialized Rehabilitation &amp; Care
            </span>

            <h2 className="maxillo-hero-heading">
              Maxillofacial Prosthetics
              <span className="maxillo-hero-heading-accent">
                Restoring Life &amp; Confidence.
              </span>
            </h2>

            <p className="maxillo-hero-sub">
              Expert oral &amp; facial rehabilitation by{' '}
              <strong>Dr. Ritu Saneja</strong> — MDS Prosthodontics, Gold Medalist,
              Ex-Resident AIIMS Delhi.
            </p>

            {/* Tech chips */}
            <div className="maxillo-chips">
              {TECH_CHIPS.map(chip => (
                <span key={chip} className="maxillo-chip">
                  <Award size={13} /> {chip}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="maxillo-hero-ctas">
              <a href="/treatments/maxillofacial-prosthetics" className="maxillo-btn-primary">
                Learn More <ArrowRight size={16} />
              </a>
              <a href="tel:7496849392" className="maxillo-btn-outline">
                <Phone size={15} /> Call for Assessment
              </a>
            </div>
          </div>

          {/* RIGHT: Before/After sliders */}
          <div className="maxillo-hero-gallery">
            <p className="maxillo-gallery-label">Transformational Results</p>
            <BeforeAfterSlider
              beforeImage="/images/maxillofacial_1_before.jpg"
              afterImage="/images/maxillofacial_1_after.jpg"
              beforeAlt="Patient before maxillofacial prosthetic treatment by Dr. Ritu Saneja"
              afterAlt="Patient after custom maxillofacial prosthesis by Dr. Ritu Saneja"
            />
            <BeforeAfterSlider
              beforeImage="/images/maxillofacial_2_before.jpg"
              afterImage="/images/maxillofacial_2_after.jpg"
              beforeAlt="Patient before maxillofacial prosthetic treatment by Dr. Ritu Saneja"
              afterAlt="Patient after custom maxillofacial prosthesis by Dr. Ritu Saneja"
            />
          </div>

        </div>

        {/* Wave divider */}
        <div className="maxillo-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 52" preserveAspectRatio="none">
            <path d="M0,52 C360,0 1080,52 1440,26 L1440,52 Z" fill="var(--bg-cream, #faf8f5)" />
          </svg>
        </div>
      </div>
      {/* ══ END HERO BAND ════════════════════════════════════════════ */}

      {/* ══ PROSTHESIS TYPES STRIP ══════════════════════════════════ */}
      <div className="maxillo-types-strip">
        <div className="container">
          <p className="maxillo-types-eyebrow">What We Treat</p>
          <ul className="maxillo-types-grid">
            {PROSTHESIS_TYPES.map((item, i) => (
              <li key={i} className="maxillo-type-card">
                <span className="maxillo-type-icon" aria-hidden="true">
                  <Heart size={15} />
                </span>
                <div>
                  <strong className="maxillo-type-title">{item.title}</strong>
                  <span className="maxillo-type-desc">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* Intro paragraph */}
          <p className="maxillo-intro-text">
            We provide highly specialised{' '}
            <strong>oral and facial rehabilitation</strong> for defects resulting from{' '}
            <strong>cancer surgery, severe trauma, or congenital anomalies</strong> such as cleft
            palate — restoring speech, swallowing, chewing, and facial symmetry.
          </p>
        </div>
      </div>

    </section>
  );
};

export default MaxillofacialHero;
