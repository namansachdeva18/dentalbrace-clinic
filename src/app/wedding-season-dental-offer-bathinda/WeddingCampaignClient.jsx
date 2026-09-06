'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Sparkles, ShieldCheck, Star, Award, Phone, MessageCircle, ArrowRight,
  ChevronRight, Calendar, Clock, CheckCircle2, Heart, Users, MapPin,
  Smile, Gem, Crown, Activity, Layers, Stethoscope, AlertCircle, ArrowUpRight,
  Tag, Gift, X
} from 'lucide-react';
import { WEDDING_CAMPAIGN_CONFIG } from '@/data/weddingCampaignConfig';
import WeddingLeadForm from '@/components/WeddingLeadForm';
import DoctorsIntro from '@/components/DoctorsIntro';
import Testimonials from '@/components/Testimonials';
import './WeddingCampaignPage.css';

// ── Verified Treatment Cards ──────────────────────────────────────────
const WEDDING_TREATMENTS = [
  {
    id: 'smile-makeover',
    title: 'Smile Makeover',
    desc: 'Comprehensive aesthetic smile design harmonized with your facial symmetry, lips, and personal goals for weddings.',
    candidate: 'Ideal for: Multi-concern smile rejuvenation before wedding functions',
    href: '/treatments/smile-makeover',
    icon: <Sparkles size={26} strokeWidth={1.75} />,
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening & Polishing',
    desc: 'In-clinic professional whitening to gently remove coffee, tea, and tobacco stains for a luminous, camera-ready smile.',
    candidate: 'Ideal for: Brides, grooms, and family wanting noticeable radiance quickly',
    href: '/treatments/teeth-whitening',
    icon: <Smile size={26} strokeWidth={1.75} />,
  },
  {
    id: 'porcelain-veneers',
    title: 'Dental Veneers (E-max)',
    desc: 'Ultra-thin, custom ceramic shells designed to correct stubborn discoloration, slight gaps, and worn edges with lifelike translucency.',
    candidate: 'Ideal for: Chipped, uneven, or deeply discolored teeth',
    href: '/treatments/veneers',
    icon: <Gem size={26} strokeWidth={1.75} />,
  },
  {
    id: 'clear-aligners',
    title: 'Invisalign & Clear Aligners',
    desc: 'Discreet orthodontic alignment with 3D digital planning by Ex-AIIMS Orthodontist Dr. Sandeep Kumar. Virtually invisible in person.',
    candidate: 'Ideal for: Crooked teeth or spacing with advance planning',
    href: '/treatments/invisalign',
    icon: <Sparkles size={26} strokeWidth={1.75} />,
  },
  {
    id: 'dental-crowns',
    title: 'Zirconia & Ceramic Crowns',
    desc: 'High-strength, natural-looking crowns restoring damaged or root-canal treated teeth with flawless aesthetics and biting strength.',
    candidate: 'Ideal for: Broken, heavily filled, or aged dental restorations',
    href: '/treatments/dental-crown-bridge',
    icon: <Crown size={26} strokeWidth={1.75} />,
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    desc: 'Permanent titanium tooth replacement performed by Gold Medalist Dr. Ritu Saneja. Eat, laugh, and smile with complete confidence.',
    candidate: 'Ideal for: Replacing missing teeth permanently before the celebrations',
    href: '/treatments/dental-implants',
    icon: <Layers size={26} strokeWidth={1.75} />,
  },
  {
    id: 'full-mouth-rehab',
    title: 'Full Mouth Rehabilitation',
    desc: 'Complete functional and cosmetic reconstruction for patients with multiple missing, severely worn, or collapsed bites.',
    candidate: 'Ideal for: Parents of the couple needing comprehensive oral restoration',
    href: '/treatments/all-on-4',
    icon: <Activity size={26} strokeWidth={1.75} />,
  },
  {
    id: 'cleaning-polishing',
    title: 'Dental Cleaning & Gum Care',
    desc: 'Ultrasonic calculus removal, deep stain elimination, and gum health optimization for fresh breath and clean wedding smiles.',
    candidate: 'Ideal for: Essential baseline prep for every bride, groom, and wedding guest',
    href: '/treatments/gum-treatment',
    icon: <Stethoscope size={26} strokeWidth={1.75} />,
  },
];

// ── Smart Intent Pathways ─────────────────────────────────────────────
const INTENT_PATHWAYS = [
  {
    tag: 'Brightness & Glow',
    goal: 'I want a brighter, cleaner smile',
    solution: 'In-office Teeth Whitening & Ultrasonic Polishing',
    timeline: 'Fast turnaround: 1–2 visits before events',
    href: '/treatments/teeth-whitening',
  },
  {
    tag: 'Alignment & Symmetry',
    goal: 'I want straighter teeth without ugly metal',
    solution: 'Invisalign Clear Aligners & 3D iTero Digital Simulation',
    timeline: 'Planned advance care: Start early for best results',
    href: '/treatments/invisalign',
  },
  {
    tag: 'Missing or Broken Teeth',
    goal: 'I have damaged or missing teeth',
    solution: 'Zirconia Crowns, Bridges, or Guided Dental Implants',
    timeline: 'Multi-stage restorative care with durable aesthetics',
    href: '/treatments/dental-implants',
  },
  {
    tag: 'Complete Redesign',
    goal: 'I want a complete smile transformation',
    solution: 'Custom Smile Makeover & Digital Smile Design (DSD)',
    timeline: 'Comprehensive assessment to co-design your dream smile',
    href: '/treatments/smile-makeover',
  },
];

// ── Wedding Specific FAQs ─────────────────────────────────────────────
const WEDDING_FAQS = [
  {
    q: 'What dental treatments can help improve my smile before a wedding?',
    a: 'Depending on your personal dental condition and timeline, treatments can range from rapid in-office teeth whitening and ultrasonic polishing to porcelain veneers, cosmetic composite bonding, clear aligners (Invisalign), zirconia crowns, and dental implants. During your consultation at The DentalBrace Bathinda, our specialists examine your oral health and recommend what is realistic and most beneficial before your event.',
  },
  {
    q: 'How long before my wedding should I visit the clinic in Bathinda?',
    a: 'We strongly advise scheduling your initial consultation as early as possible. If you need teeth alignment with clear aligners or complex dental implants, starting 6 to 12 months in advance is ideal. For cosmetic veneers and smile makeovers, 1 to 2 months provides comfortable planning. For routine cleaning and professional teeth whitening, visiting 2 to 4 weeks prior ensures maximum brilliance without last-minute rushing.',
  },
  {
    q: 'Can I whiten my teeth right before my wedding celebrations?',
    a: 'Yes! In-clinic professional teeth whitening delivers noticeable brightening in a single 60–90 minute session. We generally recommend scheduling your whitening appointment 2 to 3 weeks before wedding festivities begin. This gives your teeth time to settle comfortably, avoids temporary sensitivity during celebrations, and locks in your freshest shade for photography.',
  },
  {
    q: 'Are clear aligners (Invisalign) suitable if my wedding is in a few months?',
    a: 'Yes, clear aligners are completely transparent and removable, making them very discreet for social occasions. If your wedding is 4–6 months away, significant alignment improvement can often be visible in wedding photos even if full treatment continues afterward. Furthermore, clear aligners can simply be removed during wedding ceremonies and photo sessions.',
  },
  {
    q: 'Can chipped, uneven, or spaced teeth be corrected before the wedding?',
    a: 'Yes. Minor chips, small gaps, and irregular tooth edges can often be corrected with composite bonding or ultra-thin porcelain veneers. Dr. Ritu Saneja, our Gold Medalist Prosthodontist, meticulously crafts natural-looking restorations that blend seamlessly with your adjacent natural teeth.',
  },
  {
    q: 'What does a Wedding Smile Makeover consultation include?',
    a: 'Your consultation at The DentalBrace includes a clinical examination of teeth and gums, photographic analysis, 3D intraoral digital scanning, and an honest discussion regarding what can be realistically achieved before your wedding date. We show you digital previews where applicable and provide a clear timeline with transparent fees.',
  },
  {
    q: 'Can parents of the bride or groom receive dental treatment before the wedding?',
    a: 'Absolutely. Parents frequently look forward to smiling proudly in family portraits. We regularly assist parents with dental implants, fixed zirconia bridges, full-mouth rehabilitation, or replacement of aged, discolored dentures so they can eat banquet meals and smile with complete comfort.',
  },
  {
    q: 'How much does a wedding smile treatment cost in Bathinda?',
    a: 'Dental treatment costs vary based on individual clinical requirements—for example, whether you need single-session teeth cleaning and whitening, custom porcelain veneers, clear aligners, or dental implants. We provide transparent, itemized treatment estimates during your consultation without hidden charges, and flexible interest-free EMI plans are available.',
  },
  {
    q: 'Can I get these treatments if I am not getting married or attending a wedding?',
    a: 'Yes, absolutely! While this campaign highlights timelines for brides, grooms, and wedding families, all treatments—including Invisalign, teeth whitening, veneers, zirconia crowns, and dental implants—are available for any patient seeking routine, cosmetic, or restorative dental excellence at The DentalBrace Bathinda.',
  },
  {
    q: 'Where is The DentalBrace Clinic located in Bathinda?',
    a: 'The clinic is located at 196, Bibi Wala Road, Near LIC Building, opposite the Petrol Pump, Kamla Nehru Colony, Bathinda, Punjab — 151001. We welcome patients from Bathinda, Mansa, Muktsar, Faridkot, Rampura Phul, and surrounding Malwa regions.',
  },
  {
    q: 'How can I book a Wedding Smile Consultation?',
    a: 'You can submit the confidential consultation form on this page, call us directly at +91 74968-49392, or tap the WhatsApp button. Our team will promptly confirm your preferred date and time.',
  },
];

// ── Structured Data Schema ────────────────────────────────────────────
const getWeddingSchema = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${WEDDING_CAMPAIGN_CONFIG.CANONICAL_URL}#webpage`,
      url: WEDDING_CAMPAIGN_CONFIG.CANONICAL_URL,
      name: 'Wedding Smile & Premium Dental Care in Bathinda | The DentalBrace',
      description: 'Prepare your smile for wedding season in Bathinda with AIIMS & BHU-trained dental specialists at The DentalBrace. Teeth whitening, Invisalign, veneers, dental implants, and smile makeovers.',
      inLanguage: 'en-IN',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thedentalbrace.com/' },
          { '@type': 'ListItem', position: 2, name: 'Wedding Smile Campaign', item: WEDDING_CAMPAIGN_CONFIG.CANONICAL_URL },
        ],
      },
    },
    {
      '@type': 'Dentist',
      '@id': 'https://www.thedentalbrace.com/#dentist',
      name: WEDDING_CAMPAIGN_CONFIG.CLINIC_NAME,
      url: 'https://www.thedentalbrace.com',
      telephone: WEDDING_CAMPAIGN_CONFIG.PHONE_TEL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '196, Bibi Wala Road, near LIC Building, opposite Petrol Pump, Kamla Nehru Colony',
        addressLocality: 'Bathinda',
        addressRegion: 'Punjab',
        postalCode: '151001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 30.210994,
        longitude: 74.945475,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '20:00',
        },
      ],
      priceRange: '₹₹',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '350',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: WEDDING_FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    },
  ],
});

export default function WeddingCampaignClient() {
  const [showStickyBar, setShowStickyBar] = useState(true);
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [modalConfig, setModalConfig] = useState(null);

  const openRoleModal = (role = 'Consultation', title, subtitle) => {
    const roleKey = role || 'Consultation';
    setModalConfig({
      role: roleKey,
      title: title || 'Book Your Smile Consultation',
      subtitle: subtitle || 'Schedule your personalized assessment with our AIIMS & BHU-trained specialists in Bathinda.',
      source: `role_button_${String(roleKey).toLowerCase().replace(/[^a-z0-9]/g, '_')}`,
    });
    setShowOfferModal(true);
    window.gtag?.('event', 'role_modal_click', { role: roleKey });
  };

  const handleCloseModal = () => {
    setShowOfferModal(false);
    setModalConfig(null);
  };

  // Allow global triggers to open the modal directly on this page
  useEffect(() => {
    const handleGlobalOpen = (e) => {
      const config = e?.detail;
      if (config) {
        openRoleModal(config.role || 'Consultation', config.title, config.subtitle);
      } else {
        openRoleModal('Consultation');
      }
    };

    window.addEventListener('open_offer_popup', handleGlobalOpen);
    window.addEventListener('open_campaign_popup', handleGlobalOpen);

    return () => {
      window.removeEventListener('open_offer_popup', handleGlobalOpen);
      window.removeEventListener('open_campaign_popup', handleGlobalOpen);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Track campaign page view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'campaign_page_view', {
        campaign_name: WEDDING_CAMPAIGN_CONFIG.ID,
        page_location: window.location.href,
      });
    }

    // Scroll depth tracking
    const trackedDepths = new Set();
    const handleScrollDepth = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      [25, 50, 75, 90].forEach((depth) => {
        if (scrollPercent >= depth && !trackedDepths.has(depth)) {
          trackedDepths.add(depth);
          window.gtag?.('event', `scroll_${depth}`, {
            campaign_name: WEDDING_CAMPAIGN_CONFIG.ID,
          });
        }
      });
    };

    window.addEventListener('scroll', handleScrollDepth, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollDepth);
    };
  }, []);

  const encodedWaMsg = encodeURIComponent(WEDDING_CAMPAIGN_CONFIG.WHATSAPP_MESSAGE);

  return (
    <div className="page-wrapper wedding-campaign-page">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getWeddingSchema()) }}
      />

      {/* ── Sticky Mobile CTA Bar ──────────────────────────────────── */}
      <div
        className="wcp-mobile-sticky-bar"
        style={{ transform: showStickyBar ? 'translateY(0)' : 'translateY(120%)' }}
        role="region"
        aria-label="Quick contact bar"
      >
        <div className="wcp-mobile-sticky-bar__inner">
          <a
            href={`https://api.whatsapp.com/send/?phone=${WEDDING_CAMPAIGN_CONFIG.WHATSAPP_PHONE}&text=${encodedWaMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="wcp-sticky-btn wcp-sticky-btn--wa"
            onClick={() => window.gtag?.('event', 'whatsapp_click', { source: 'mobile_sticky_cta' })}
          >
            <MessageCircle size={17} /> {WEDDING_CAMPAIGN_CONFIG.CTA_STICKY_WA}
          </a>
          <button
            type="button"
            className="wcp-sticky-btn wcp-sticky-btn--book"
            onClick={() => {
              window.gtag?.('event', 'hero_cta_click', { source: 'mobile_sticky_cta' });
              openRoleModal('Consultation');
            }}
          >
            <Calendar size={16} /> {WEDDING_CAMPAIGN_CONFIG.CTA_STICKY_BOOK}
          </button>
          <a
            href={`tel:${WEDDING_CAMPAIGN_CONFIG.PHONE_TEL}`}
            className="wcp-sticky-btn wcp-sticky-btn--call"
            onClick={() => window.gtag?.('event', 'phone_click', { source: 'mobile_sticky_cta' })}
          >
            <Phone size={15} /> Call
          </a>
        </div>
      </div>

      {/* ── 1. HERO SECTION ────────────────────────────────────────── */}
      <section className="wcp-hero" aria-label="Wedding smile campaign hero">
        <div className="container wcp-hero__inner">
          <div className="wcp-hero__content">
            <div className="wcp-campaign-badge">
              <Sparkles size={15} /> {WEDDING_CAMPAIGN_CONFIG.EYEBROW}
            </div>

            <h1 className="wcp-hero__h1">
              Get Wedding-Ready With a <span>Smile You'll Love</span>
            </h1>

            <p className="wcp-hero__subtext">
              {WEDDING_CAMPAIGN_CONFIG.SUBTITLE}
            </p>

            <div className="wcp-hero__ctas">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  window.gtag?.('event', 'hero_cta_click', { location: 'hero_primary' });
                  openRoleModal('Consultation');
                }}
              >
                {WEDDING_CAMPAIGN_CONFIG.CTA_HERO_PRIMARY} <ArrowRight size={18} />
              </button>

              <a
                href={`https://api.whatsapp.com/send/?phone=${WEDDING_CAMPAIGN_CONFIG.WHATSAPP_PHONE}&text=${encodedWaMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="wcp-btn-wa"
                onClick={() => window.gtag?.('event', 'whatsapp_click', { source: 'hero_secondary' })}
              >
                <MessageCircle size={19} /> {WEDDING_CAMPAIGN_CONFIG.CTA_HERO_SECONDARY}
              </a>

              <a
                href={`tel:${WEDDING_CAMPAIGN_CONFIG.PHONE_TEL}`}
                className="btn btn-outline"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#ffffff', background: 'transparent' }}
                onClick={() => window.gtag?.('event', 'phone_click', { source: 'hero_phone' })}
              >
                <Phone size={17} /> {WEDDING_CAMPAIGN_CONFIG.PHONE_DISPLAY}
              </a>
            </div>

            {/* Trust Micro-bar */}
            <div className="wcp-hero__trust-strip">
              <div className="wcp-trust-item">
                <ShieldCheck size={16} color="#F58220" />
                <span><strong>BHU &amp; Ex-AIIMS</strong> Specialists</span>
              </div>
              <div className="wcp-trust-item">
                <Star size={16} fill="#F58220" color="#F58220" />
                <span><strong>5.0★</strong> Google Rating (350+ Reviews)</span>
              </div>
              <div className="wcp-trust-item">
                <Award size={16} color="#F58220" />
                <span><strong>Gold Medalist</strong> Prosthodontist</span>
              </div>
              <div className="wcp-trust-item wcp-trust-item--highlight">
                <Sparkles size={15} color="#10B981" />
                <span><strong>Open to Everyone:</strong> Wedding &amp; General Dental Patients</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Clinic Confidence Overlay */}
          <div className="wcp-hero__visual">
            <div className="wcp-hero__card-wrap">
              <Image
                src="/images/wedding_smile_hero.jpg"
                alt="Radiant, healthy wedding smile consultation at The DentalBrace Clinic in Bathinda"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="wcp-hero__overlay-pill">
                <div className="wcp-overlay-pill__icon">
                  <Sparkles size={22} />
                </div>
                <div className="wcp-overlay-pill__text">
                  <h4>Your Wedding. Your Photos. Your Smile.</h4>
                  <p>Comprehensive smile assessment and digital treatment planning at 196, Bibi Wala Road, Bathinda.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. SECTION: WEDDING DESIRE & PROBLEM ────────────────────── */}
      <section className="wcp-desire-section" aria-labelledby="desire-heading">
        <div className="container">
          <div className="wcp-desire-grid">
            <div className="wcp-desire-img-wrap">
              <Image
                src="/images/wedding_couple_smile.jpg"
                alt="Confident Indian couple smiling happily during wedding celebration in Bathinda"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className="wcp-desire-text">
              <span className="section-badge">Wedding-Ready Confidence</span>
              <h2 id="desire-heading" className="cp-section-heading mt-4">
                Your Smile Will Be in Almost Every Wedding Photo.
              </h2>
              <p className="cp-section-subheading" style={{ marginBottom: '1.5rem' }}>
                Your wedding albums and celebration videos will preserve these memories for generations. When camera lights flash across ceremonies, portraits, and candid moments, you deserve to smile with spontaneous, effortless ease.
              </p>

              <div className="wcp-concern-cards">
                <div className="wcp-concern-card">
                  <div className="wcp-concern-card__icon">
                    <Sparkles size={18} />
                  </div>
                  <div className="wcp-concern-card__text">
                    <h4>Yellow or Dull Teeth</h4>
                    <p>Gentle, powerful in-clinic whitening removes stubborn stains before wedding functions.</p>
                  </div>
                </div>

                <div className="wcp-concern-card">
                  <div className="wcp-concern-card__icon">
                    <Smile size={18} />
                  </div>
                  <div className="wcp-concern-card__text">
                    <h4>Crooked Teeth or Gaps</h4>
                    <p>Invisalign clear aligners or discreet cosmetic bonding planned around your timeline.</p>
                  </div>
                </div>

                <div className="wcp-concern-card">
                  <div className="wcp-concern-card__icon">
                    <Gem size={18} />
                  </div>
                  <div className="wcp-concern-card__text">
                    <h4>Chipped or Uneven Edges</h4>
                    <p>Precision porcelain veneers or composite artistry for balanced tooth contours.</p>
                  </div>
                </div>

                <div className="wcp-concern-card">
                  <div className="wcp-concern-card__icon">
                    <Layers size={18} />
                  </div>
                  <div className="wcp-concern-card__text">
                    <h4>Missing or Damaged Teeth</h4>
                    <p>Permanent dental implants and zirconia crowns that look and bite like natural teeth.</p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  window.gtag?.('event', 'desire_cta_click', { location: 'desire_section' });
                  openRoleModal('Consultation');
                }}
              >
                Plan My Wedding-Ready Smile <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SECTION: TREATMENTS ──────────────────────────────────── */}
      <section className="wcp-treatments-section" aria-labelledby="treatments-heading">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
            <span className="section-badge">Cosmetic · Orthodontic · Restorative</span>
            <h2 id="treatments-heading" className="cp-section-heading mt-4">
              Specialist Dental Treatments for Everyone
            </h2>
            <p className="cp-section-subheading" style={{ margin: '0 auto' }}>
              Designed for wedding-ready perfection, yet available to all patients. We combine artistic cosmetic dentistry with gold-standard restorative and orthodontic science in Bathinda.
            </p>
          </div>

          {/* Non-Wedding Availability Callout Banner */}
          <div className="wcp-open-access-banner">
            <Sparkles size={18} className="wcp-open-access-banner__icon" />
            <div className="wcp-open-access-banner__text">
              <strong>Not attending a wedding?</strong> You can still avail every treatment listed below! All cosmetic, aligner, whitening, implant, and restorative services are fully available for everyday smile transformations and regular patients.
            </div>
          </div>

          <div className="wcp-treatments-grid">
            {WEDDING_TREATMENTS.map((t) => (
              <Link
                key={t.id}
                href={t.href}
                className="wcp-treatment-card"
                onClick={() => window.gtag?.('event', 'treatment_click', { treatment: t.title })}
              >
                <div className="wcp-treatment-card__icon-box">
                  {t.icon}
                </div>
                <h3 className="wcp-treatment-card__title">{t.title}</h3>
                <p className="wcp-treatment-card__desc">{t.desc}</p>
                <div className="wcp-treatment-card__candidate">
                  {t.candidate}
                </div>
                <div className="wcp-treatment-card__cta">
                  Explore Treatment <ArrowRight size={15} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SECTION: SMART INTENT PATHWAYS ───────────────────────── */}
      <section className="wcp-intent-section" aria-labelledby="intent-heading">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <span className="section-badge">Treatment Guidance</span>
            <h2 id="intent-heading" className="cp-section-heading mt-4">
              Not Sure What You Need? Choose Your Goal.
            </h2>
            <p className="cp-section-subheading" style={{ margin: '0 auto' }}>
              Select the pathway that matches your primary wedding smile priority.
            </p>
          </div>

          <div className="wcp-intent-grid">
            {INTENT_PATHWAYS.map((p, idx) => (
              <div key={idx} className="wcp-intent-card">
                <span className="wcp-intent-card__tag">{p.tag}</span>
                <h3 className="wcp-intent-card__goal">"{p.goal}"</h3>
                <p className="wcp-intent-card__rec">
                  <strong>Recommended:</strong> {p.solution}
                  <br />
                  <span style={{ fontSize: '0.8rem', color: '#888', marginTop: '0.4rem', display: 'block' }}>
                    {p.timeline}
                  </span>
                </p>
                <Link
                  href={p.href}
                  className="wcp-intent-card__btn"
                  onClick={() => window.gtag?.('event', 'intent_click', { goal: p.goal })}
                >
                  Learn About This Option <ArrowUpRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SECTION: BRIDE / GROOM / FAMILY / GENERAL PATIENTS ─── */}
      <section className="wcp-roles-section" aria-labelledby="roles-heading">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
            <span className="section-badge">Personalized Care for Everyone</span>
            <h2 id="roles-heading" className="cp-section-heading mt-4">
              Tailored Smiles for Wedding Celebrations &amp; General Patients
            </h2>
            <p className="cp-section-subheading" style={{ margin: '0 auto' }}>
              Whether you are preparing for an upcoming wedding, attending as a guest, or simply seeking comprehensive smile rejuvenation, our specialists provide personalized cosmetic, orthodontic, and restorative care.
            </p>
          </div>

          <div className="wcp-roles-grid">
            {/* For the Bride */}
            <div className="wcp-role-card">
              <div className="wcp-role-card__header">
                <div className="wcp-role-card__icon">
                  <Heart size={26} />
                </div>
                <h3 className="wcp-role-card__title">For the Bride</h3>
              </div>
              <p className="wcp-role-card__desc">
                For a glowing, luminous smile that radiates across high-definition portrait photography, bridal entry, and reception festivities.
              </p>
              <ul className="wcp-role-card__list">
                <li><CheckCircle2 size={16} /> In-office teeth whitening and polishing</li>
                <li><CheckCircle2 size={16} /> Digital smile makeover &amp; veneers</li>
                <li><CheckCircle2 size={16} /> Discreet clear aligners for teeth straightening</li>
                <li><CheckCircle2 size={16} /> Chipped tooth contouring and composite bonding</li>
              </ul>
              <button
                type="button"
                onClick={() => openRoleModal('Bride', 'Plan Your Bridal Smile Consultation', 'Personalized aesthetic assessment, whitening, and smile makeover options for the bride.')}
                className="btn btn-outline"
                style={{ width: '100%', cursor: 'pointer' }}
              >
                Plan Bridal Consultation
              </button>
            </div>

            {/* For the Groom */}
            <div className="wcp-role-card">
              <div className="wcp-role-card__header">
                <div className="wcp-role-card__icon">
                  <Smile size={26} />
                </div>
                <h3 className="wcp-role-card__title">For the Groom</h3>
              </div>
              <p className="wcp-role-card__desc">
                A sharp, confident, and natural smile designed for effortless confidence throughout wedding ceremonies and stage photography.
              </p>
              <ul className="wcp-role-card__list">
                <li><CheckCircle2 size={16} /> Deep tea, coffee, and tobacco stain removal</li>
                <li><CheckCircle2 size={16} /> Fast-acting professional laser teeth whitening</li>
                <li><CheckCircle2 size={16} /> Gap closure and bite alignment</li>
                <li><CheckCircle2 size={16} /> Natural dental crowns for cracked teeth</li>
              </ul>
              <button
                type="button"
                onClick={() => openRoleModal('Groom', 'Plan Your Groom Smile Consultation', 'Laser whitening, stain removal, and alignment options tailored for the groom.')}
                className="btn btn-outline"
                style={{ width: '100%', cursor: 'pointer' }}
              >
                Plan Groom Consultation
              </button>
            </div>

            {/* For the Family */}
            <div className="wcp-role-card">
              <div className="wcp-role-card__header">
                <div className="wcp-role-card__icon">
                  <Users size={26} />
                </div>
                <h3 className="wcp-role-card__title">For Parents &amp; Family</h3>
              </div>
              <p className="wcp-role-card__desc">
                Restorative and implant dental care for parents and extended family preparing to celebrate and feast with complete comfort.
              </p>
              <ul className="wcp-role-card__list">
                <li><CheckCircle2 size={16} /> Permanent dental implants for missing molars</li>
                <li><CheckCircle2 size={16} /> Full mouth dental reconstruction</li>
                <li><CheckCircle2 size={16} /> Replacement of old, loose, or stained bridges</li>
                <li><CheckCircle2 size={16} /> Comprehensive oral health checkup</li>
              </ul>
              <button
                type="button"
                onClick={() => openRoleModal('Parent of Bride/Groom', 'Plan Family Dental Consultation', 'Permanent implants, crowns, and oral health care for parents & family.')}
                className="btn btn-outline"
                style={{ width: '100%', cursor: 'pointer' }}
              >
                Plan Family Consultation
              </button>
            </div>

            {/* For General Patients / Event Smiles */}
            <div className="wcp-role-card wcp-role-card--highlight">
              <div className="wcp-role-card__header">
                <div className="wcp-role-card__icon" style={{ background: 'rgba(15, 61, 62, 0.1)', color: '#0F3D3E' }}>
                  <Sparkles size={26} />
                </div>
                <div>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#F58220', fontWeight: 700, display: 'block' }}>
                    Open To All
                  </span>
                  <h3 className="wcp-role-card__title">General Smile Patients</h3>
                </div>
              </div>
              <p className="wcp-role-card__desc">
                Not attending a wedding? You can still access all featured treatments for everyday confidence, professional milestones, or delayed dental rehabilitation.
              </p>
              <ul className="wcp-role-card__list">
                <li><CheckCircle2 size={16} /> Routine or complex dental consultations</li>
                <li><CheckCircle2 size={16} /> Invisalign &amp; adult orthodontics</li>
                <li><CheckCircle2 size={16} /> Single or multiple dental implants</li>
                <li><CheckCircle2 size={16} /> Long-term preventative &amp; aesthetic dentistry</li>
              </ul>
              <button
                type="button"
                onClick={() => openRoleModal('Other / Personal Smile Transformation', 'General Dental Consultation', 'Schedule your clinical examination with our AIIMS & BHU-trained specialists in Bathinda.')}
                className="btn btn-primary"
                style={{ width: '100%', cursor: 'pointer' }}
              >
                Book General Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. SECTION: WHY START EARLY & TIMELINE ──────────────────── */}
      <section className="wcp-why-early-section" aria-labelledby="early-heading">
        <div className="container">
          <div className="wcp-early-grid">
            <div>
              <span className="section-badge" style={{ background: 'rgba(245,130,32,0.15)', borderColor: 'rgba(245,130,32,0.35)', color: '#F58220' }}>
                <Clock size={14} /> Planning Matters
              </span>
              <h2 id="early-heading" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#ffffff', margin: '1rem 0', lineHeight: 1.2 }}>
                Don't Leave Your Smile Preparation Until the Last Moment.
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                Wedding calendars fill up quickly with shopping, venue visits, and family gatherings. Certain dental treatments involve diagnostic planning, custom laboratory fabrication, or biological healing time. Consulting early allows our specialists to recommend what is realistically achievable for your wedding date.
              </p>
            </div>

            <div className="wcp-early-reasons">
              <div className="wcp-early-reason-item">
                <Calendar className="wcp-early-reason-item__icon" size={24} />
                <div>
                  <h4>Individual Diagnostic Evaluation</h4>
                  <p>Every mouth is unique. A clinical evaluation reveals whether simple cosmetic polish or comprehensive bite alignment will produce the best aesthetic outcome.</p>
                </div>
              </div>

              <div className="wcp-early-reason-item">
                <Clock className="wcp-early-reason-item__icon" size={24} />
                <div>
                  <h4>Healing and Laboratory Precision</h4>
                  <p>Custom zirconia crowns, porcelain veneers, and dental implants require meticulous dental laboratory craftsmanship to achieve natural brilliance.</p>
                </div>
              </div>

              <div className="wcp-early-reason-item">
                <CheckCircle2 className="wcp-early-reason-item__icon" size={24} />
                <div>
                  <h4>Zero Stress Before Ceremonies</h4>
                  <p>Completing dental care weeks before major functions guarantees zero sensitivity and total peace of mind on your wedding day.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 5-Step Treatment Timeline */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#F58220', fontWeight: 700 }}>
              The Wedding Smile Journey
            </span>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginTop: '0.5rem' }}>
              How Your Wedding Smile Consultation Works
            </h3>
          </div>

          <div className="wcp-timeline-steps">
            <div className="wcp-timeline-step">
              <span className="wcp-timeline-step__badge">STEP 1</span>
              <h4 className="wcp-timeline-step__title">Consultation &amp; 3D Scan</h4>
              <p className="wcp-timeline-step__desc">
                Comprehensive clinical assessment, digital iTero intraoral scan, and photographic evaluation of your smile.
              </p>
            </div>

            <div className="wcp-timeline-step">
              <span className="wcp-timeline-step__badge">STEP 2</span>
              <h4 className="wcp-timeline-step__title">Personalized Plan</h4>
              <p className="wcp-timeline-step__desc">
                Your specialist presents transparent treatment options, appointment milestones, and achievable outcomes before your wedding.
              </p>
            </div>

            <div className="wcp-timeline-step">
              <span className="wcp-timeline-step__badge">STEP 3</span>
              <h4 className="wcp-timeline-step__title">Specialist Care</h4>
              <p className="wcp-timeline-step__desc">
                Gentle, pain-free treatment execution using state-of-the-art digital dental technology and premium materials.
              </p>
            </div>

            <div className="wcp-timeline-step">
              <span className="wcp-timeline-step__badge">STEP 4</span>
              <h4 className="wcp-timeline-step__title">Final Polish &amp; Prep</h4>
              <p className="wcp-timeline-step__desc">
                Final aesthetic review, high-gloss tooth polishing, and protective care so your smile gleams under celebration lights.
              </p>
            </div>

            <div className="wcp-timeline-step">
              <span className="wcp-timeline-step__badge">STEP 5</span>
              <h4 className="wcp-timeline-step__title">Wedding-Ready Smile</h4>
              <p className="wcp-timeline-step__desc">
                Step into your wedding functions with genuine, spontaneous confidence in every photograph and celebration.
              </p>
            </div>
          </div>

          <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', marginTop: '2rem', fontStyle: 'italic' }}>
            Note: Clinical timelines vary depending on treatment requirements and individual health factors. Fixed timelines are never guaranteed without doctor examination.
          </p>
        </div>
      </section>

      {/* ── 7. DOCTORS & SPECIALISTS TRUST SECTION ─────────────────── */}
      <div style={{ background: 'var(--bg-cream)', padding: '1rem 0' }}>
        <DoctorsIntro />
      </div>

      {/* ── 8. SECTION: REAL PATIENT EXPERIENCES (SOCIAL PROOF) ─────── */}
      <Testimonials />


      {/* ── 10. SECTION: FAQ ────────────────────────────────────────── */}
      <section className="wcp-faq-section" aria-labelledby="faq-heading">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto' }}>
            <span className="section-badge">Clear Answers</span>
            <h2 id="faq-heading" className="cp-section-heading mt-4">
              Wedding Season Dental Care FAQs
            </h2>
            <p className="cp-section-subheading" style={{ margin: '0 auto' }}>
              Common questions about treatment timelines, cosmetic options, and consultations in Bathinda.
            </p>
          </div>

          <div className="wcp-faq-container">
            {WEDDING_FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="wcp-faq-item"
                onToggle={(e) => {
                  if (e.currentTarget.open) {
                    window.gtag?.('event', 'faq_expand', { question: faq.q });
                  }
                }}
              >
                <summary className="wcp-faq-question">
                  <span>{faq.q}</span>
                  <span className="wcp-faq-indicator" aria-hidden="true">+</span>
                </summary>
                <p className="wcp-faq-answer">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. SECTION: CLINIC LOCATION & LOCAL SEO TRUST ──────────── */}
      <section className="wcp-location-section" aria-labelledby="location-heading">
        <div className="container">
          <div className="wcp-location-layout">
            <div className="wcp-location-card">
              <div className="wcp-location-header">
                <span className="section-badge wcp-location-badge">
                  <span className="wcp-pulse-beacon" aria-hidden="true" />
                  Visit Our Clinic
                </span>
                <span className="wcp-location-status">
                  <Clock size={13} /> Mon – Sat: 9AM – 8PM
                </span>
              </div>

              <h2 id="location-heading" className="wcp-location-title">
                The DentalBrace Clinic &amp; Implant Centre
              </h2>

              <div className="cp-location__address">
                <div className="cp-location__address-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <strong>{WEDDING_CAMPAIGN_CONFIG.ADDRESS_LINE1}</strong>
                  <p>{WEDDING_CAMPAIGN_CONFIG.ADDRESS_LINE2}, {WEDDING_CAMPAIGN_CONFIG.CITY} — {WEDDING_CAMPAIGN_CONFIG.PINCODE}</p>
                </div>
              </div>

              <div className="cp-location__ctas">
                <a
                  href={WEDDING_CAMPAIGN_CONFIG.GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wcp-map-cta-btn"
                >
                  <MapPin size={16} /> Get Directions
                </a>
                <a
                  href={`tel:${WEDDING_CAMPAIGN_CONFIG.PHONE_TEL}`}
                  className="wcp-call-cta-btn"
                  onClick={() => window.gtag?.('event', 'phone_click', { source: 'wedding_location' })}
                >
                  <Phone size={15} /> Call Clinic
                </a>
              </div>

              <div className="wcp-location-connectivity">
                <span>🚗 On-site parking · Easy access from Mansa, Muktsar, Faridkot &amp; Kotkapura</span>
              </div>
            </div>

            <div className="cp-location__map">
              <div className="cp-location__map-badge">
                <MapPin size={13} /> Bibi Wala Road Clinic
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.123!2d74.9454!3d30.2109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3914f9e0a0000001%3A0x0!2sThe+DentalBrace+Clinic+and+Implant+Centre!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The DentalBrace Clinic 196 Bibi Wala Road Bathinda Punjab Map"
              />
            </div>
          </div>
        </div>
      </section>



      {/* ── Floating Animated 'Claim 20% OFF' Offer Button ── */}
      <aside aria-label="Special Offer">
        <button
          type="button"
          className="wcp-floating-offer-badge"
          onClick={() => {
            setShowOfferModal(true);
            window.gtag?.('event', 'floating_offer_click', { offer: '20_percent_off' });
          }}
          aria-label="Claim 20% OFF Wedding Offer"
        >
          <span className="wcp-floating-offer-badge__pulse" aria-hidden="true" />
          <span className="wcp-floating-offer-badge__icon">
            <Gift size={18} />
          </span>
          <span className="wcp-floating-offer-badge__text">
            <strong>Claim 20% OFF</strong>
            <small>Limited Slots</small>
          </span>
        </button>
      </aside>

      {/* ── Offer / Consultation Modal Overlay with Form ── */}
      {showOfferModal && (
        <div
          className="wcp-offer-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="wcp-modal-offer-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleCloseModal();
          }}
        >
          <div className="wcp-offer-modal-card">
            <button
              type="button"
              className="wcp-offer-modal-close"
              onClick={handleCloseModal}
              aria-label="Close form"
            >
              <X size={20} />
            </button>

            <div className="wcp-offer-modal-header">
              <span className="wcp-offer-modal-tag">
                <Tag size={13} /> {modalConfig ? 'Priority Wedding Booking' : 'Exclusive Seasonal Offer'}
              </span>
              <h2 id="wcp-modal-offer-title" className="wcp-offer-modal-heading">
                {modalConfig ? modalConfig.title : (
                  <>Claim <span>20% OFF</span> Your Smile Makeover</>
                )}
              </h2>
              <p className="wcp-offer-modal-subtext">
                {modalConfig
                  ? modalConfig.subtitle
                  : 'Lock in your priority consultation and 20% seasonal voucher on select aesthetic & smile packages. Fill out the quick details below:'}
              </p>
            </div>

            <div className="wcp-offer-modal-body">
              <WeddingLeadForm
                key={modalConfig ? modalConfig.role : 'default_offer'}
                source={modalConfig ? modalConfig.source : 'floating_20_percent_offer_modal'}
                initialRole={modalConfig ? modalConfig.role : ''}
                compactMode={true}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
