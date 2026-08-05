'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2, Phone, Activity, Clock, ShieldCheck, ArrowLeft, ArrowRight } from 'lucide-react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import { AutoLinker } from '@/components/AutoLinker';
import TreatmentSnapshot from '@/components/TreatmentSnapshot';
import ClinicalTransparency from '@/components/ClinicalTransparency';
import ContinueExploring from '@/components/ContinueExploring';
import './TreatmentTemplate.css';
import treatmentData from '@/data';

// ─── Component ─────────────────────────────────────────────────────────────────
const TreatmentTemplate = ({ params }) => {
  const slug = params?.id || params?.slug;
  const data = treatmentData[slug] || treatmentData['smile-designing'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  };

  const sameAsMap = {
    'invisalign': 'https://www.wikidata.org/wiki/Q5130635',
    'dental-implants': 'https://en.wikipedia.org/wiki/Dental_implant',
    'all-on-4': 'https://en.wikipedia.org/wiki/All-on-4',
    'braces': 'https://en.wikipedia.org/wiki/Dental_braces',
    'root-canal': 'https://en.wikipedia.org/wiki/Root_canal_treatment',
    'teeth-whitening': 'https://en.wikipedia.org/wiki/Tooth_whitening',
    'veneers': 'https://en.wikipedia.org/wiki/Veneer_(dentistry)',
    'dental-crown-bridge': 'https://en.wikipedia.org/wiki/Crown_(dentistry)'
  };

  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": data.title,
    "description": data.overview,
    "procedureType": "SurgicalProcedure",
    "preparation": "Consultation and 3D digital scanning required.",
    "followup": data.recovery,
    ...(sameAsMap[slug] ? { "sameAs": sameAsMap[slug] } : {}),
    "provider": {
      "@type": "Dentist",
      "name": "The DentalBrace Clinic & Implant Centre",
      "url": "https://www.thedentalbrace.com",
      "telephone": "+917496849392",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "196, Bibi Wala Rd, near LIC Building, opposite Petrol Pump, Kamla Nehru Colony",
        "addressLocality": "Bathinda",
        "addressRegion": "Punjab",
        "postalCode": "151001",
        "addressCountry": "IN"
      },
      "areaServed": [
        { "@type": "City", "name": "Bathinda" },
        { "@type": "City", "name": "Mansa" },
        { "@type": "City", "name": "Muktsar" },
        { "@type": "City", "name": "Faridkot" },
        { "@type": "City", "name": "Kotkapura" },
        { "@type": "City", "name": "Rampura Phul" },
        { "@type": "City", "name": "Talwandi Sabo" },
        { "@type": "City", "name": "Maur" },
        { "@type": "City", "name": "Raman" },
        { "@type": "City", "name": "Mandi Dabwali" }
      ]
    }
  };

  // Dentist (LocalBusiness) schema — Google-supported type for aggregateRating rich results
  const clinicRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "The DentalBrace Clinic & Implant Centre",
    "url": "https://www.thedentalbrace.com",
    "telephone": "+917496849392",
    "image": "https://www.thedentalbrace.com/hero-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "196, Bibi Wala Rd, near LIC Building, opposite Petrol Pump, Kamla Nehru Colony",
      "addressLocality": "Bathinda",
      "addressRegion": "Punjab",
      "postalCode": "151001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.210994",
      "longitude": "74.945475"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "124"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.thedentalbrace.com/" },
      { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://www.thedentalbrace.com/services" },
      { "@type": "ListItem", "position": 3, "name": data.title, "item": `https://www.thedentalbrace.com/treatments/${slug}` }
    ]
  };

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": data.title,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".faq-accordion-a", ".sidebar-content"]
    }
  };

  return (
    <div className="page-wrapper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicRatingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      {/* Hero Banner */}
      <div className="treatment-hero-banner">
        <div className="container">
          <Link href="/" className="treatment-back-link">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <p className="treatment-hero-eyebrow">The DentalBrace Clinic, Bathinda</p>
          <h1 className="treatment-hero-title">{data.title}</h1>
          <p className="treatment-hero-subtitle">{data.subtitle}</p>
          <div className="mt-4 mb-6 inline-flex items-center gap-3" style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.5rem 1rem', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.2)', marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
            <ShieldCheck size={16} style={{ color: 'var(--accent-color)' }} />
            <span className="text-sm font-medium" style={{ color: 'white' }}>Medically Reviewed By
              <Link href={data.doctor === 'Dr. Sandeep Kumar' ? '/doctors/dr-sandeep-kumar' : '/doctors/dr-ritu-saneja'} style={{ marginLeft: '0.25rem', fontWeight: 'bold', color: 'var(--accent-color)', textDecoration: 'none' }}>
                {data.doctor}
              </Link>
            </span>
          </div>
          <div className="treatment-hero-meta">
            <span><Clock size={16} color="var(--accent-color)" /> <strong style={{ color: 'white', fontWeight: '600' }}>Duration:</strong> {data.duration}</span>
            <span><Activity size={16} color="var(--accent-color)" /> <strong style={{ color: 'white', fontWeight: '600' }}>Recovery:</strong> {data.recovery}</span>
            <span><ShieldCheck size={16} color="var(--accent-color)" /> <strong style={{ color: 'white', fontWeight: '600' }}>Expert:</strong> {data.doctor}</span>
          </div>
          <a href="/#book" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Book Consultation <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container treatment-grid">

          <div className="treatment-main">

            {/* Treatment Snapshot */}
            <TreatmentSnapshot data={data} />

            {/* Overview */}
            <div className="page-wrapper">
              <h2 className="heading-secondary">What is {data.title.split(' in ')[0]}?</h2>
              <p className="text-secondary text-lg leading-relaxed"><AutoLinker text={data.overview} /></p>
            </div>

            {/* Before & After Slots */}
            {data.beforeAfterSlots && (
              <div className="page-wrapper">
                <h2 className="heading-secondary">Before & After Results</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                  {Array.from({ length: data.beforeAfterSlots }).map((_, idx) => (
                    <BeforeAfterSlider
                      key={idx}
                      beforeImage={`/images/${slug}_${idx + 1}_before.jpg`}
                      afterImage={`/images/${slug}_${idx + 1}_after.jpg`}
                      beforeAlt={`Patient before ${data.title} at The DentalBrace Clinic Bathinda`}
                      afterAlt={`Patient after ${data.title} at The DentalBrace Clinic Bathinda`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Symptoms & Ideal Candidate */}
            <div className="treatment-section symptoms-grid">
              <div className="page-wrapper">
                <h3 className="section-title"><Activity color="var(--accent-color)" /> Signs You Need This Treatment</h3>
                <ul className="symptoms-list text-secondary" style={{ listStyle: 'none', padding: 0 }}>
                  {data.symptoms.map((s, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                      <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>✓</span> <span><AutoLinker text={s} /></span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Limitations */}
              {data.limitations && data.limitations.length > 0 && !data.limitations[0].startsWith('None') && (
                <div className="treatment-section">
                  <h2 className="heading-secondary">Possible Limitations</h2>
                  <ul className="benefits-grid">
                    {data.limitations.map((limitation, i) => (
                      <li key={i} className="benefit-item glass p-4 rounded-md" style={{ borderColor: 'rgba(239, 68, 68, 0.2)' }}>
                        <Activity size={24} className="flex-shrink-0" style={{ color: '#ef4444' }} />
                        <span className="font-medium text-primary">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="page-wrapper">
                <h3 className="section-title"><ShieldCheck color="var(--accent-color)" /> Ideal Candidate</h3>
                <p className="text-secondary"><AutoLinker text={data.idealFor} /></p>
              </div>

              {data.notIdealFor && !data.notIdealFor.startsWith('N/A') && (
                <div className="page-wrapper" style={{ marginTop: '1.5rem' }}>
                  <h3 className="section-title"><Activity style={{ color: '#ef4444' }} /> Not Recommended For</h3>
                  <p className="text-secondary"><AutoLinker text={data.notIdealFor} /></p>
                </div>
              )}
            </div>

            {/* Benefits */}
            <div className="treatment-section">
              <h2 className="heading-secondary">Key Benefits</h2>
              <ul className="benefits-grid">
                {data.benefits.map((benefit, i) => (
                  <li key={i} className="benefit-item glass p-4 rounded-md">
                    <CheckCircle2 size={24} color="var(--accent-color)" className="flex-shrink-0" />
                    <span className="font-medium text-primary">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process Timeline */}
            <div className="page-wrapper">
              <h2 className="heading-secondary">Step-by-Step Process</h2>
              <div className="process-timeline">
                {data.process.map((step, i) => (
                  <div key={i} className="page-wrapper">
                    <span className="step-number" style={{ backgroundColor: 'var(--accent-color)', color: 'white', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '50%', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{step.step}</span>
                    <h4 className="text-xl font-bold mb-2"><AutoLinker text={step.title} /></h4>
                    <p className="text-secondary"><AutoLinker text={step.desc} /></p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recovery & Longevity */}
            {data.recoveryTimeline && (
              <div className="treatment-section glass p-6 rounded-lg mt-8 mb-8 border border-border-color">
                <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2"><Activity color="var(--accent-color)" size={20} /> Recovery & Expectations</h3>
                <p className="text-secondary mb-4"><strong style={{ color: 'var(--accent-color)' }}>Timeline:</strong> <AutoLinker text={data.recoveryTimeline} /></p>
                {data.successFactors && <p className="text-secondary mb-4"><strong style={{ color: 'var(--accent-color)' }}>Success Factors:</strong> {data.successFactors.join(', ')}</p>}
                {data.whenToVisit && <p className="text-secondary mb-4"><strong style={{ color: 'var(--accent-color)' }}>When to Consult:</strong> <AutoLinker text={data.whenToVisit} /></p>}
                {data.appointmentCount && <p className="text-secondary"><strong style={{ color: 'var(--accent-color)' }}>Appointments:</strong> <AutoLinker text={data.appointmentCount} /></p>}
              </div>
            )}

            {/* Expert Advice */}
            {data.doctorRecommendation && (
              <div style={{ 
                marginTop: '3rem', 
                marginBottom: '3rem', 
                backgroundColor: 'var(--bg-ivory, #faf8f4)',
                borderRadius: '16px',
                padding: '2.5rem',
                border: '1px solid rgba(0,0,0,0.05)',
                position: 'relative',
                boxShadow: '0 10px 30px rgba(0,0,0,0.03)'
              }}>
                <div style={{ position: 'absolute', top: '-20px', left: '2.5rem', backgroundColor: 'var(--accent-color)', color: 'white', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', fontFamily: 'serif', fontStyle: 'italic', boxShadow: '0 4px 10px rgba(245, 130, 32, 0.3)', paddingTop: '10px' }}>
                  &quot;
                </div>
                <blockquote style={{ margin: 0, marginTop: '0.5rem' }}>
                  <p style={{ fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: '1.8', fontWeight: '500' }}>
                    <AutoLinker text={data.doctorRecommendation} />
                  </p>
                </blockquote>
                <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1.25rem', borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: '1.5rem' }}>
                  <img 
                    src={data.doctor === 'Dr. Ritu Saneja' ? '/dr-ritu.jpg' : '/dr-sandeep.jpg'} 
                    alt={data.doctor} 
                    style={{ width: '65px', height: '65px', borderRadius: '50%', objectFit: 'cover', border: '3px solid white', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
                  />
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--text-primary)' }}>{data.doctor}</strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '700' }}>Specialist Orthodontist</span>
                  </div>
                </div>
              </div>
            )}

            {/* Clinical Transparency (Financial & Risks) */}
            <ClinicalTransparency data={data} />

            {/* FAQs */}
            <div className="page-wrapper">
              <h2 className="heading-secondary">Frequently Asked Questions</h2>
              <div className="faq-main-list">
                {data.faqs.map((faq, i) => (
                  <details key={i} className="faq-accordion">
                    <summary className="faq-accordion-q"><span><AutoLinker text={faq.q} /></span></summary>
                    <p className="faq-accordion-a"><AutoLinker text={faq.a} /></p>
                  </details>
                ))}
              </div>
            </div>

            {/* Semantic Knowledge Panel */}
            <ContinueExploring data={data} currentSlug={slug} />
          </div>

          <aside className="treatment-sidebar">
            {/* Quick Facts */}
            <div style={{
              backgroundColor: '#fffcfc',
              borderRadius: '16px',
              border: '1px solid rgba(245, 130, 32, 0.15)',
              padding: '2rem',
              boxShadow: '0 8px 30px rgba(245, 130, 32, 0.04)',
              marginBottom: '2rem'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-primary)', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '1rem', marginBottom: '1.5rem', marginTop: 0 }}>At a Glance</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {data.treatmentSnapshot && Object.entries(data.treatmentSnapshot).map(([key, value]) => (
                  <div key={key}>
                    <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>{key.replace(/([A-Z])/g, ' $1').trim()}</strong>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontWeight: '600', color: 'var(--text-primary)' }}><CheckCircle2 size={16} color="var(--accent-color)" style={{ flexShrink: 0 }} /> <span>{value}</span></div>
                  </div>
                ))}
                {!data.treatmentSnapshot && (
                  <>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>Duration</strong>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontWeight: '600', color: 'var(--text-primary)' }}><Clock size={16} color="var(--accent-color)" style={{ flexShrink: 0 }} /> <span>{data.duration}</span></div>
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>Recovery</strong>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontWeight: '600', color: 'var(--text-primary)' }}><Activity size={16} color="var(--accent-color)" style={{ flexShrink: 0 }} /> <span>{data.recovery}</span></div>
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>Specialist</strong>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem', fontWeight: '600', color: 'var(--text-primary)' }}><ShieldCheck size={16} color="var(--accent-color)" style={{ flexShrink: 0 }} /> <span>{data.doctor}</span></div>
                    </div>
                  </>
                )}
                {data.technologyUsed && (
                  <div style={{ marginTop: '0.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                    <strong style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Technology</strong>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: '500' }}>
                      {Array.isArray(data.technologyUsed) ? data.technologyUsed.map(t => <span key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--accent-color)' }}></span>{t}</span>) : data.technologyUsed}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTA */}
            <div style={{
              backgroundColor: 'var(--primary-dark)',
              borderRadius: '16px',
              padding: '2rem',
              color: 'white',
              textAlign: 'center',
              boxShadow: '0 8px 30px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'white', margin: '0 0 0.75rem 0' }}>Ready to get started?</h3>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', margin: '0 0 1.5rem 0', lineHeight: '1.5' }}>Book a consultation with our specialists today.</p>
              <a href="/#book" className="btn btn-primary w-full" style={{ display: 'block', textAlign: 'center', padding: '1rem', borderRadius: '8px', fontWeight: 'bold' }}>Book Now</a>
              <a href="tel:7496849392" className="btn w-full" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem', backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.3)', color: 'white', padding: '0.8rem', borderRadius: '8px', transition: 'background-color 0.2s' }}>
                <Phone size={16} />
                +91 74968-49392
              </a>
            </div>

          </aside>
        </div>
      </section>
    </div>
  );
};

export default TreatmentTemplate;
