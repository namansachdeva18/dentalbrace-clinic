'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { AutoLinker } from '@/components/AutoLinker';
import ContinueExploring from '@/components/ContinueExploring';
import { ShieldAlert, Info, ArrowRight, HeartPulse, Stethoscope, AlertTriangle, Activity } from 'lucide-react';
import '@/app/treatments/[id]/TreatmentTemplate.css'; // Reuse treatment CSS

export default function PageClient({ data, slug }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formatSlugToTitle = (slugStr) => {
    return slugStr.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": data.title,
    "description": data.quickOverview,
    "signOrSymptom": data.signsAndSymptoms.map(s => ({ "@type": "MedicalSymptom", "name": s })),
    "possibleTreatment": data.relatedTreatments.map(t => ({
      "@type": "MedicalProcedure",
      "name": formatSlugToTitle(t),
      "url": `https://www.thedentalbrace.com/treatments/${t}`
    }))
  };

  return (
    <div className="page-wrapper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero Section */}
      <div className="treatment-hero-banner" style={{ background: 'linear-gradient(135deg, var(--color-cream) 0%, #f0f7f4 100%)' }}>
        <div className="container">
          <Link href="/" className="treatment-back-link text-primary"><ArrowRight size={14} style={{ transform: 'rotate(180deg)' }} /> Back to Home</Link>
          <div className="treatment-hero-content">
            <p className="treatment-eyebrow text-accent">Medical Condition</p>
            <h1 className="treatment-title text-primary" style={{ fontSize: '3rem', marginBottom: '1rem' }}>{data.title}</h1>
            <p className="text-secondary text-lg max-w-2xl">{data.quickOverview}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-padding bg-white relative">
        <div className="container treatment-content">
          <div className="treatment-main">
            
            {/* Condition Snapshot */}
            <div className="treatment-snapshot my-8 bg-cream/50 rounded-2xl border border-accent/20 p-6 md:p-8 shadow-soft">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Symptoms */}
                <div>
                  <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                    <HeartPulse className="text-red-400" size={20} /> Signs & Symptoms
                  </h3>
                  <ul className="space-y-2">
                    {data.signsAndSymptoms.map((s, i) => (
                      <li key={i} className="flex items-start gap-2 text-secondary text-sm">
                        <span className="text-red-400 mt-1">•</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Causes */}
                <div>
                  <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                    <Info className="text-accent" size={20} /> Possible Causes
                  </h3>
                  <ul className="space-y-2">
                    {data.possibleCauses.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-secondary text-sm">
                        <span className="text-accent mt-1">•</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Medical Guidance */}
            <div className="page-wrapper my-12">
              <h2 className="heading-secondary">Clinical Guidance</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="glass p-6 rounded-xl border border-red-100">
                  <h4 className="font-bold text-primary flex items-center gap-2 mb-2"><ShieldAlert size={18} className="text-red-500"/> If Left Untreated</h4>
                  <p className="text-secondary text-sm leading-relaxed">{data.untreatedConsequences}</p>
                </div>
                
                <div className="glass p-6 rounded-xl border border-yellow-100">
                  <h4 className="font-bold text-primary flex items-center gap-2 mb-2"><AlertTriangle size={18} className="text-yellow-500"/> When to Seek Urgent Care</h4>
                  <p className="text-secondary text-sm leading-relaxed">{data.urgentCare}</p>
                </div>

                <div className="glass p-6 rounded-xl border border-blue-100 md:col-span-2">
                  <h4 className="font-bold text-primary flex items-center gap-2 mb-2"><Stethoscope size={18} className="text-accent"/> Professional Evaluation</h4>
                  <p className="text-secondary text-sm leading-relaxed">
                    <strong>Monitoring:</strong> {data.monitoringGuidance} <br/><br/>
                    <strong>Recommendation:</strong> {data.evaluationRecommendation}
                  </p>
                </div>
              </div>
            </div>

            {/* Treatment Options */}
            <div className="page-wrapper my-12">
              <h2 className="heading-secondary">Treatment Options</h2>
              <p className="text-secondary mb-6">{data.diagnosis}</p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {data.treatmentOptions.map((opt, i) => (
                  <span key={i} className="inline-block bg-accent/10 text-accent font-bold px-4 py-2 rounded-full text-sm">
                    {opt}
                  </span>
                ))}
              </div>
              <p className="text-secondary italic bg-gray-50 p-4 rounded-lg border-l-4 border-accent">
                {data.treatmentComparison}
              </p>
            </div>

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

            <ContinueExploring data={data} currentSlug={slug} />
            
            <div className="mt-12 text-xs text-gray-400 border-t border-gray-100 pt-4">
              <strong>Medical Disclaimer:</strong> {data.medicalDisclaimer}
              {data.scientificReferences && data.scientificReferences.length > 0 && (
                <div className="mt-2"><strong>References:</strong> {data.scientificReferences.join(', ')}</div>
              )}
            </div>

          </div>
          
          <aside className="treatment-sidebar">
            <div className="sidebar-card doctor-cta">
              <h3 className="cta-title">Concerned about {data.title.split(' ')[0]}?</h3>
              <p className="cta-subtitle">Book a clinical evaluation with our specialists today.</p>
              <a href="/#book" className="btn btn-primary w-full" style={{ display: 'block', textAlign: 'center' }}>Book Evaluation</a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
