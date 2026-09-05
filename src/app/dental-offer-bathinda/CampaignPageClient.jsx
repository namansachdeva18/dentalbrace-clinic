'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Tag, ShieldCheck, CheckCircle, ArrowRight, Phone, MessageCircle,
  MapPin, Star, Clock, Award, ChevronRight, GraduationCap, MonitorSmartphone, Target, CreditCard, Sparkles,
  Layers, Activity, Smile, Link2, Wand2, Gem, Crown, Stethoscope
} from 'lucide-react';
import CampaignLeadForm from '@/components/CampaignLeadForm';
import DoctorsIntro from '@/components/DoctorsIntro';
import { CAMPAIGN_CONFIG, isCampaignActive } from '@/data/campaignConfig';
import './CampaignPage.css';

// ── Treatment Cards ───────────────────────────────────────────────────
const TREATMENT_CARDS = [
  {
    icon: <Layers size={28} strokeWidth={1.5} className="tc-icon" />,
    title: 'Dental Implants',
    desc: 'Permanent titanium tooth replacement by Gold Medalist Dr. Ritu Saneja. Single implants, All-on-4, and full-arch rehabilitation.',
    href: '/treatments/dental-implants',
    eligible: true,
  },
  {
    icon: <Activity size={28} strokeWidth={1.5} className="tc-icon" />,
    title: 'Full Mouth Rehabilitation',
    desc: 'Comprehensive reconstruction for patients with multiple missing or damaged teeth. Fixed permanent smile in as little as 1–2 days.',
    href: '/treatments/all-on-4',
    eligible: true,
  },
  {
    icon: <Smile size={28} strokeWidth={1.5} className="tc-icon" />,
    title: 'Invisalign & Clear Aligners',
    desc: 'Virtually invisible orthodontic treatment with 3D iTero digital scanning. Clinically planned by Ex-AIIMS Orthodontist Dr. Sandeep Kumar.',
    href: '/treatments/invisalign',
    eligible: true,
  },
  {
    icon: <Link2 size={28} strokeWidth={1.5} className="tc-icon" />,
    title: 'Traditional Braces',
    desc: 'Metal and ceramic braces with 5,500+ successfully treated cases. Affordable fixed orthodontic treatment in Bathinda.',
    href: '/treatments/braces',
    eligible: true,
  },
  {
    icon: <Wand2 size={28} strokeWidth={1.5} className="tc-icon" />,
    title: 'Smile Makeover',
    desc: 'Complete aesthetic dental transformation using Digital Smile Design — co-designed with you before any treatment begins.',
    href: '/treatments/smile-makeover',
    eligible: true,
  },
  {
    icon: <Gem size={28} strokeWidth={1.5} className="tc-icon" />,
    title: 'Porcelain Veneers',
    desc: 'Ultra-thin E-max ceramic veneers to correct discolouration, gaps, and chips. Natural-looking results with minimal tooth preparation.',
    href: '/treatments/veneers',
    eligible: true,
  },
  {
    icon: <Crown size={28} strokeWidth={1.5} className="tc-icon" />,
    title: 'Zirconia Crowns',
    desc: 'High-strength, natural-looking Zirconia crowns for damaged or root-canal treated teeth. Digital CAD/CAM precision.',
    href: '/treatments/dental-crown-bridge',
    eligible: true,
  },
  {
    icon: <Stethoscope size={28} strokeWidth={1.5} className="tc-icon" />,
    title: 'Other Premium Treatments',
    desc: 'Additional selected treatments may be eligible. Enquire through this page and our team will advise on eligibility.',
    href: '/#treatments',
    eligible: null, // null = "contact to confirm"
  },
];

// ── FAQ Items ─────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'Who is eligible for this offer?',
    a: 'This offer is open to patients who submit an enquiry through this website before proceeding with treatment. Eligibility for specific treatments and the applicable benefit will be confirmed by the clinic team during your consultation.',
  },
  {
    q: 'Which dental treatments are included in the offer?',
    a: 'Selected premium dental treatments including dental implants, full mouth rehabilitation, Invisalign and clear aligners, traditional braces, smile makeovers, porcelain veneers, and zirconia crowns may be eligible. Please note that not every treatment is automatically included — eligibility is subject to clinical assessment.',
  },
  {
    q: 'How do I claim the offer?',
    a: 'Simply submit the enquiry form on this page with your name, mobile number, and treatment of interest. Our team will contact you to confirm your eligibility and schedule a consultation.',
  },
  {
    q: 'Do I need to submit the form before starting treatment?',
    a: 'Yes. To be considered for the campaign benefit, your enquiry must be submitted through this website before any treatment commences. Retroactive applications cannot be accommodated.',
  },
  {
    q: 'Until when is this offer valid?',
    a: `This campaign is valid until ${CAMPAIGN_CONFIG.EXPIRY_DISPLAY}. We recommend enquiring promptly to secure your consultation appointment within the campaign period.`,
  },
  {
    q: 'Does every treatment receive exactly 20% off?',
    a: 'No. The campaign offers up to 20% off on selected premium dental treatments. The exact applicable benefit depends on the specific treatment, case complexity, and clinical assessment. The clinic team will clarify this during your consultation.',
  },
  {
    q: 'Will the clinic confirm eligibility before treatment?',
    a: 'Yes. The final offer eligibility, applicable discount, and treatment plan will be discussed and confirmed by our specialist during your consultation. No commitment is required when submitting an enquiry.',
  },
  {
    q: 'Can I do my initial consultation or progress checkup via online video mode?',
    a: 'Yes! If you are an outstation, busy, or NRI patient, you can request an online video consultation. Our specialists conduct secure video conferences to evaluate your concerns, review aligner progress, and guide treatment before or between in-clinic visits.',
  },
  {
    q: 'Where is The DentalBrace Clinic located in Bathinda?',
    a: '196, Bibi Wala Road, near LIC Building, opposite Petrol Pump, Kamla Nehru Colony, Bathinda, Punjab — 151001. We serve patients from Bathinda, Mansa, Muktsar, Faridkot, Rampura Phul, Talwandi Sabo, and surrounding areas.',
  },
];

// ── Structured Data ───────────────────────────────────────────────────
const getSchema = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.thedentalbrace.com/dental-offer-bathinda#webpage',
      url: 'https://www.thedentalbrace.com/dental-offer-bathinda',
      name: 'Limited-Time Dental Treatment Offer in Bathinda | The DentalBrace',
      description: 'Enquire about our limited-time dental care offer at The DentalBrace Clinic, Bathinda. Selected premium dental treatments. AIIMS-trained specialists.',
      inLanguage: 'en-IN',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thedentalbrace.com/' },
          { '@type': 'ListItem', position: 2, name: 'Dental Offer Bathinda', item: 'https://www.thedentalbrace.com/dental-offer-bathinda' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQS.map(faq => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
    {
      "@type": "SpecialAnnouncement",
      "@id": "https://www.thedentalbrace.com/dental-offer-bathinda#announcement",
      "name": "Limited-Time Dental Care Offer — Up to 20% OFF Selected Treatments",
      "text": "The DentalBrace Clinic & Implant Centre, Bathinda is offering up to 20% OFF on selected premium dental treatments including Dental Implants, Invisalign Clear Aligners, Smile Makeovers, Veneers, and Zirconia Crowns. Submit your enquiry online to check eligibility before treatment. Offer valid until 31 August 2026.",
      "datePosted": "2026-08-01",
      "expires": "2026-08-31",
      "url": "https://www.thedentalbrace.com/dental-offer-bathinda",
      "announcer": {
        "@type": "Dentist",
        "name": "The DentalBrace Clinic & Implant Centre",
        "url": "https://www.thedentalbrace.com"
      }
    },
    {
      "@type": "Offer",
      "name": "Up to 20% OFF Selected Premium Dental Treatments",
      "description": "Limited-time offer on Dental Implants, Invisalign, Smile Makeovers, Veneers and Zirconia Crowns at The DentalBrace Clinic, Bathinda. Eligibility confirmed on consultation.",
      "url": "https://www.thedentalbrace.com/dental-offer-bathinda",
      "priceCurrency": "INR",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "description": "Up to 20% discount on selected treatments"
      },
      "validFrom": "2026-08-01",
      "validThrough": "2026-08-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Dentist",
        "name": "The DentalBrace Clinic & Implant Centre",
        "url": "https://www.thedentalbrace.com",
        "telephone": "+917496849392",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "196, Bibi Wala Road, Kamla Nehru Colony",
          "addressLocality": "Bathinda",
          "addressRegion": "Punjab",
          "postalCode": "151001",
          "addressCountry": "IN"
        }
      }
    }
  ],
});

// ─────────────────────────────────────────────────────────────────────
const CampaignPageClient = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Analytics: campaign page view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'campaign_view', {
        campaign_name: CAMPAIGN_CONFIG.CAMPAIGN_NAME,
        page_location: window.location.href,
      });
    }
  }, []);

  const campaignActive = isCampaignActive();

  return (
    <div className="page-wrapper campaign-page">
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getSchema()) }} />

      {/* ── 1. CAMPAIGN HERO ──────────────────────────────────────── */}
      <section className="cp-hero" aria-label="Campaign offer hero">
        <div className="container cp-hero__inner">

          {/* Left: copy + CTAs */}
          <div className="cp-hero__left">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="cp-breadcrumb">
              <Link href="/">Home</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span aria-current="page">Dental Offer Bathinda</span>
            </nav>

            {/* Badge */}
            <div className="cp-offer-badge" role="note">
              <Tag size={14} aria-hidden="true" />
              {campaignActive ? (
                <span>Campaign Valid Until {CAMPAIGN_CONFIG.EXPIRY_DISPLAY}</span>
              ) : (
                <span>This campaign has ended</span>
              )}
            </div>

            <h1 className="cp-hero__h1">
              {CAMPAIGN_CONFIG.HEADLINE}
            </h1>

            {campaignActive && CAMPAIGN_CONFIG.SHOW_DISCOUNT && (
              <p className="cp-hero__discount">
                {CAMPAIGN_CONFIG.DISCOUNT_LINE}
              </p>
            )}

            <p className="cp-hero__bonus">
              {campaignActive ? CAMPAIGN_CONFIG.BONUS_LINE : 'This campaign has now ended. Our new seasonal campaign is now live below:'}
            </p>

            {/* Wedding Campaign Live Banner */}
            <div style={{
              margin: '1.25rem 0',
              padding: '1.25rem',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(245, 130, 32, 0.2) 0%, rgba(15, 61, 62, 0.6) 100%)',
              border: '1.5px solid rgba(245, 130, 32, 0.6)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#F58220', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.4rem' }}>
                <span>💍 NOW LIVE: WEDDING SEASON SMILE CAMPAIGN</span>
              </div>
              <p style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, margin: '0 0 0.75rem', lineHeight: 1.35 }}>
                Get Wedding-Ready With a Smile You'll Love in Bathinda
              </p>
              <Link
                href="/wedding-season-dental-offer-bathinda"
                className="btn btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', padding: '0.65rem 1.25rem' }}
              >
                View Wedding Campaign &rarr;
              </Link>
            </div>

            {campaignActive && (
              <p className="cp-hero__subtext">
                Submit your enquiry online before starting treatment to <strong style={{color: '#F58220', fontWeight: 700}}>check your eligibility</strong>. Our team will contact you to confirm your consultation and the <strong style={{color: '#F58220', fontWeight: 700}}>applicable offer</strong>.
              </p>
            )}

            <div className="cp-hero__ctas">
              <a
                href="#campaign-form"
                className="btn btn-primary"
                onClick={() => window.gtag?.('event', 'offer_cta_click', { location: 'hero', campaign_name: CAMPAIGN_CONFIG.CAMPAIGN_NAME })}
              >
                {CAMPAIGN_CONFIG.CTA_PRIMARY} <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                href="tel:+917496849392"
                className="btn btn-outline"
                onClick={() => window.gtag?.('event', 'phone_click', { source: 'campaign_hero' })}
              >
                <Phone size={18} aria-hidden="true" /> +91 74968-49392
              </a>
            </div>

            {/* Trust micro-bar */}
            <div className="cp-trust-micro">
              <span><ShieldCheck size={14} /> BHU &amp; AIIMS-Trained</span>
              <span><Star size={14} fill="#F58220" /> 5-Star Google Rating</span>
              <span><Award size={14} /> Gold Medalist Prosthodontist</span>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="cp-hero__right" aria-hidden="true">
            <div className="cp-hero__img-wrap">
              <Image
                src="/hero-image.webp"
                alt="The DentalBrace Clinic & Implant Centre at 196, Bibi Wala Road, Bathinda — Dr. Sandeep Kumar Orthodontist and Dr. Ritu Saneja Implantologist Prosthodontist"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                priority
              />
              <div className="cp-hero__img-overlay" />
              {/* Floating validity badge */}
              {campaignActive && (
                <div className="cp-validity-badge" role="note" aria-label={`Offer valid until ${CAMPAIGN_CONFIG.EXPIRY_DISPLAY}`}>
                  <span className="cp-validity-badge__until">Valid Until</span>
                  <span className="cp-validity-badge__date">{CAMPAIGN_CONFIG.EXPIRY_DISPLAY}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. OFFER EXPLANATION ─────────────────────────────────── */}
      {campaignActive && (
        <section className="cp-offer-section" aria-labelledby="offer-section-heading">
          <div className="container">
            <div className="cp-offer-section__inner">
              <h2 id="offer-section-heading" className="cp-section-heading">
                Your Smile Starts With the Right Consultation
              </h2>
              <p className="cp-section-subheading">
                Explore selected premium dental treatments with our limited-time website enquiry offer.
              </p>

              {/* Offer pills */}
              <div className="cp-offer-pills">
                {CAMPAIGN_CONFIG.SHOW_DISCOUNT && (
                  <div className="cp-offer-pill cp-offer-pill--primary">
                    <span className="cp-offer-pill__value">Up to 20% OFF</span>
                    <span className="cp-offer-pill__label">Selected Premium Dental Treatments</span>
                  </div>
                )}
                <div className="cp-offer-pill cp-offer-pill--secondary">
                  <span className="cp-offer-pill__value">Complimentary</span>
                  <span className="cp-offer-pill__label">Consultation for Eligible Website Enquiries</span>
                </div>
                <div className="cp-offer-pill cp-offer-pill--date">
                  <Clock size={18} aria-hidden="true" />
                  <span className="cp-offer-pill__label">Valid Until <strong>{CAMPAIGN_CONFIG.EXPIRY_DISPLAY}</strong></span>
                </div>
              </div>

              {/* How to claim */}
              <div className="cp-how-to-claim">
                <h3>How to Claim</h3>
                <ol className="cp-how-steps">
                  <li><span>1</span> Submit your enquiry via the form on this page</li>
                  <li><span>2</span> Our team contacts you to confirm eligibility and book your consultation</li>
                  <li><span>3</span> Attend your consultation at our Bathinda clinic</li>
                  <li><span>4</span> The applicable offer is confirmed by the clinic before treatment</li>
                </ol>
              </div>

              {/* Disclaimer — prominently visible */}
              <div className="cp-disclaimer" role="note" aria-label="Important campaign terms">
                <ShieldCheck size={16} aria-hidden="true" />
                <p>{CAMPAIGN_CONFIG.DISCLAIMER}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 3. TREATMENT CARDS ───────────────────────────────────── */}
      <section className="cp-treatments" aria-labelledby="treatments-heading">
        <div className="container">
          <span className="section-badge">Selected Treatment Categories</span>
          <h2 id="treatments-heading" className="cp-section-heading mt-4">
            Premium Dental Treatments in Bathinda
          </h2>
          <p className="cp-section-subheading">
            The DentalBrace Clinic offers a comprehensive range of specialist dental treatments.
            The following categories may be eligible for the campaign offer, subject to clinical assessment.
          </p>

          <div className="cp-treatment-grid">
            {TREATMENT_CARDS.map((card) => (
              <Link key={card.title} href={card.href} className="cp-treatment-card hover-elevate" aria-label={`Learn more about ${card.title}`}>
                <div className="cp-treatment-card__icon" aria-hidden="true">{card.icon}</div>
                <h3 className="cp-treatment-card__title">{card.title}</h3>
                <p className="cp-treatment-card__desc">{card.desc}</p>
                <div className="cp-treatment-card__footer">
                  {card.eligible === true && campaignActive && (
                    <span className="cp-eligible-badge"><CheckCircle size={13} /> May be eligible</span>
                  )}
                  {card.eligible === null && campaignActive && (
                    <span className="cp-contact-badge">Contact to confirm</span>
                  )}
                  <span className="cp-learn-more">Learn More <ChevronRight size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHY CHOOSE THE DENTALBRACE ───────────────────────── */}
      <section className="cp-why-us" aria-labelledby="why-heading">
        <div className="container">
          <span className="section-badge">Why The DentalBrace Clinic</span>
          <h2 id="why-heading" className="cp-section-heading mt-4">
            Bathinda's Most Trusted Dental Specialists
          </h2>

          <div className="cp-why-grid">
            {[
              { icon: <GraduationCap size={32} color="#0F3D3E" />, title: 'AIIMS & BHU Trained', desc: 'Both specialists trained at premier institutions — BHU Varanasi, AIIMS New Delhi, PGIMER Chandigarh, and AIIMS Bathinda.' },
              { icon: <MonitorSmartphone size={32} color="#0F3D3E" />, title: 'Digital Dentistry', desc: '3D iTero intraoral scanning, CBCT guided implant surgery, Digital Smile Design — technology-led precision.' },
              { icon: <Sparkles size={32} color="#0F3D3E" />, title: '5,500+ Aligner Cases', desc: 'Dr. Sandeep Kumar has clinically managed over 5,500 braces and aligner cases with predictable, lasting results.' },
              { icon: <Target size={32} color="#0F3D3E" />, title: '5,000+ Implants Placed', desc: 'Dr. Ritu Saneja — Gold Medalist Prosthodontist — has placed over 5,000 dental implants with advanced guided techniques.' },
              { icon: <MapPin size={32} color="#0F3D3E" />, title: 'Serving All of Malwa Region', desc: 'Conveniently located at 196, Bibi Wala Road, Bathinda — easily accessible from Mansa, Muktsar, Faridkot, Rampura Phul, and beyond.' },
              { icon: <CreditCard size={32} color="#0F3D3E" />, title: 'Flexible EMI Options', desc: 'Interest-free monthly payment plans to make premium dental care accessible for all families in Bathinda and Punjab.' },
            ].map((item, idx) => (
              <div key={item.title} className="cp-why-card hover-elevate group">
                <span className="cp-why-card__num">0{idx + 1}</span>
                <div className="cp-why-card__icon-wrap">
                  {item.icon}
                </div>
                <div className="cp-why-card__content">
                  <h3 className="cp-why-card__title">{item.title}</h3>
                  <p className="cp-why-card__desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. DOCTORS ──────────────────────────────────────────── */}
      <div style={{ background: 'var(--bg-cream)', padding: '2rem 0' }}>
        <DoctorsIntro />
      </div>

      {/* ── 6. LEAD FORM (Main Conversion Section) ──────────────── */}
      <section id="campaign-form" className="cp-form-section" aria-labelledby="form-heading">
        <div className="container">
          <div className="cp-form-wrapper">
            {/* Left: reinforcement copy */}
            <div className="cp-form-left">
              <span className="section-badge" style={{ background: 'rgba(245,130,32,0.15)', borderColor: 'rgba(245,130,32,0.35)' }}>
                <Tag size={13} /> {campaignActive ? 'Submit Before Treatment' : 'Book a Consultation'}
              </span>
              <h2 id="form-heading" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, marginTop: '1rem', color: '#ffffff' }}>
                {campaignActive ? 'Claim Your Dental Care Offer' : 'Book Your Consultation'}
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: '2rem', fontSize: '0.95rem' }}>
                {campaignActive
                  ? 'Submit your details and our team will contact you to confirm treatment eligibility and consultation availability.'
                  : 'Book a consultation with our specialists at The DentalBrace Clinic, Bathinda.'
                }
              </p>

              {/* Reassurance bullets */}
              <ul className="cp-reassurance-list">
                {[
                  'No commitment required to enquire',
                  'Our team calls you to confirm eligibility',
                  '3D digital scanning available',
                  'EMI payment plans available',
                  'Serving Bathinda, Mansa, Muktsar, Faridkot & beyond',
                ].map(item => (
                  <li key={item}><CheckCircle size={15} /> {item}</li>
                ))}
              </ul>

              {/* Clinic contact */}
              <div className="cp-form-contact">
                <a href="tel:+917496849392" className="cp-contact-btn" onClick={() => window.gtag?.('event', 'phone_click', { source: 'campaign_form_sidebar' })}>
                  <Phone size={18} /> +91 74968-49392
                </a>
                <a
                  href={`https://api.whatsapp.com/send/?phone=917496849392&text=${encodeURIComponent('Hi, I would like to enquire about the dental care offer.')}`}
                  className="cp-contact-btn cp-contact-btn--wa"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => window.gtag?.('event', 'whatsapp_click', { source: 'campaign_form_sidebar' })}
                >
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
            </div>

            {/* Right: the form */}
            <div className="cp-form-right" id="campaign-form">
              <div className="cp-form-card">
                <CampaignLeadForm source="campaign_landing_page" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ───────────────────────────────────────────────── */}
      <section className="cp-faq" aria-labelledby="faq-heading">
        <div className="container cp-faq__inner">
          <span className="section-badge">Common Questions</span>
          <h2 id="faq-heading" className="cp-section-heading mt-4">
            Frequently Asked Questions
          </h2>

          <div className="cp-faq-list">
            {FAQS.map((faq, i) => (
              <details key={i} className="cp-faq-item">
                <summary className="cp-faq-item__q">
                  {faq.q}
                  <span className="cp-faq-arrow" aria-hidden="true">+</span>
                </summary>
                <p className="cp-faq-item__a">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. LOCATION / CONTACT ────────────────────────────────── */}
      <section className="cp-location" aria-labelledby="location-heading">
        <div className="container">
          <div className="cp-location__inner">
            <div className="cp-location__info">
              <span className="section-badge">Visit Us</span>
              <h2 id="location-heading" className="cp-section-heading mt-4">
                The DentalBrace Clinic &amp; Implant Centre
              </h2>
              <div className="cp-location__address">
                <MapPin size={18} color="#F58220" />
                <div>
                  <strong>196, Bibi Wala Road</strong><br />
                  Near LIC Building, Opposite Petrol Pump<br />
                  Kamla Nehru Colony, Bathinda, Punjab — 151001
                </div>
              </div>
              <div className="cp-location__hours">
                <Clock size={18} color="#F58220" />
                <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
              </div>

              <div className="cp-location__ctas">
                <a
                  href="https://maps.app.goo.gl/uksfFySwX9RL5uu56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <MapPin size={16} /> Get Directions
                </a>
                <a href="tel:+917496849392" className="btn btn-primary" onClick={() => window.gtag?.('event', 'phone_click', { source: 'campaign_location' })}>
                  <Phone size={16} /> Call Now
                </a>
              </div>

              <p style={{ fontSize: '0.85rem', color: '#6B6B6B', marginTop: '1.5rem' }}>
                Conveniently accessible from Bathinda, Mansa, Muktsar, Faridkot, Rampura Phul, Talwandi Sabo, Maur, and Mandi Dabwali.
              </p>
            </div>

            {/* Map embed */}
            <div className="cp-location__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.123!2d74.9454!3d30.2109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3914f9e0a0000001%3A0x0!2sThe+DentalBrace+Clinic+and+Implant+Centre!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="280"
                style={{ border: 0, borderRadius: '16px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The DentalBrace Clinic location map, 196 Bibi Wala Road Bathinda Punjab"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FINAL CTA ─────────────────────────────────────────── */}
      <section className="cp-final-cta" aria-label="Final call to action">
        <div className="container cp-final-cta__inner">
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: '#ffffff', textAlign: 'center', marginBottom: '0.75rem' }}>
            Ready to Transform Your Smile?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            {campaignActive
              ? `Submit your enquiry today before ${CAMPAIGN_CONFIG.EXPIRY_DISPLAY} to check your eligibility for the campaign.`
              : 'Contact us to book your specialist consultation at The DentalBrace Clinic, Bathinda.'
            }
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#campaign-form" className="btn btn-primary">
              {campaignActive ? CAMPAIGN_CONFIG.CTA_PRIMARY : 'Book a Consultation'} <ArrowRight size={18} />
            </a>
            <a href="tel:+917496849392" className="btn btn-outline" style={{ background: 'transparent', color: '#ffffff', borderColor: 'rgba(255,255,255,0.35)' }}>
              <Phone size={18} /> +91 74968-49392
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CampaignPageClient;
