import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, Phone, Activity, Clock, ShieldCheck } from 'lucide-react';
import TreatmentHero from '../components/TreatmentHero';
import './TreatmentTemplate.css';

// Extended Mock data simulating CMS
const treatmentData = {
  'smile-designing': {
    title: 'Digital Smile Designing',
    subtitle: 'Precision crafted aesthetics for a flawless smile.',
    image: 'https://images.unsplash.com/photo-1598256989800-fea5f610279c?q=80&w=2000&auto=format&fit=crop',
    overview: 'Digital Smile Design (DSD) is a revolutionary approach in cosmetic dentistry that allows us to design and preview your ideal smile before any physical treatment begins.',
    symptoms: ['Chipped or worn teeth', 'Gaps between teeth', 'Discoloration', 'Asymmetrical smile'],
    idealFor: 'Patients looking for a complete, predictable cosmetic overhaul of their smile.',
    benefits: ['Preview final results instantly', 'Customized to your facial proportions', 'Minimally invasive approach', 'High predictability'],
    technology: '3D Intraoral Scanners, CAD/CAM Milling, High-Res Photography',
    duration: '2-3 Sessions',
    recovery: 'Immediate',
    process: [
      { step: 1, title: 'Digital Scanning', desc: 'We take high-resolution 3D scans of your mouth.' },
      { step: 2, title: 'Smile Design', desc: 'Our experts design your new smile digitally.' },
      { step: 3, title: 'Mockup & Approval', desc: 'You "test drive" the physical mockup in your mouth.' },
      { step: 4, title: 'Final Delivery', desc: 'The permanent restorations are bonded securely.' }
    ],
    faqs: [
      { q: 'Is it painful?', a: 'No, it is a minimally invasive and virtually painless procedure.' },
      { q: 'How long does it last?', a: 'With proper care, a smile makeover can last for 10-15 years.' }
    ]
  }
};

const TreatmentTemplate = () => {
  const { slug } = useParams();
  const data = treatmentData[slug] || treatmentData['smile-designing']; // Fallback for demo

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Dynamic Schema Generation
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": data.title,
    "procedureType": "SurgicalProcedure",
    "bodyLocation": "Mouth",
    "description": data.overview
  };

  return (
    <motion.div 
      className="treatment-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>{data.title} in Bathinda | The DentalBrace Clinic</title>
        <meta name="description" content={data.overview} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <TreatmentHero data={data} />

      <section className="section-padding bg-white">
        <div className="container treatment-grid">
          
          <div className="treatment-main">
            {/* 2. Overview */}
            <div className="treatment-section">
              <h2 className="heading-secondary">Treatment Overview</h2>
              <p className="text-secondary text-lg leading-relaxed">{data.overview}</p>
            </div>

            {/* 3. Symptoms & Ideal Candidate */}
            <div className="treatment-section symptoms-grid">
               <div className="glass shadow-soft p-6 rounded-lg">
                 <h3 className="section-title"><Activity className="text-accent"/> Common Symptoms</h3>
                 <ul className="symptoms-list text-secondary">
                   {data.symptoms.map((s, i) => <li key={i}>• {s}</li>)}
                 </ul>
               </div>
               <div className="glass shadow-soft p-6 rounded-lg">
                 <h3 className="section-title"><ShieldCheck className="text-accent"/> Ideal Candidate</h3>
                 <p className="text-secondary">{data.idealFor}</p>
               </div>
            </div>

            {/* 4. Benefits */}
            <div className="treatment-section">
              <h2 className="heading-secondary">Key Benefits</h2>
              <ul className="benefits-grid">
                {data.benefits.map((benefit, i) => (
                  <li key={i} className="benefit-item glass p-4 rounded-md">
                    <CheckCircle2 size={24} className="text-accent flex-shrink-0" /> 
                    <span className="font-medium text-primary">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. Treatment Process Timeline */}
            <div className="treatment-section">
              <h2 className="heading-secondary">Step-by-Step Process</h2>
              <div className="process-timeline">
                {data.process.map((step, i) => (
                   <div key={i} className="timeline-step">
                     <span className="step-number">{step.step}</span>
                     <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                     <p className="text-secondary">{step.desc}</p>
                   </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <aside className="treatment-sidebar">
            
            {/* 6. Quick Facts */}
            <div className="sidebar-card glass shadow-lg">
              <h3 className="sidebar-title">At a Glance</h3>
              <div className="sidebar-content">
                <div className="fact-item">
                  <strong className="fact-label">Duration</strong>
                  <div className="fact-value"><Clock size={18} className="text-accent"/> {data.duration}</div>
                </div>
                <div className="fact-item">
                  <strong className="fact-label">Recovery</strong>
                  <div className="fact-value"><Activity size={18} className="text-accent"/> {data.recovery}</div>
                </div>
                <div className="fact-item">
                  <strong className="fact-label">Technology Used</strong>
                  <p className="fact-value-text mt-1">{data.technology}</p>
                </div>
              </div>
            </div>

            {/* 7. FAQs */}
            <div className="sidebar-card glass shadow-lg">
              <h3 className="sidebar-title border-none">Treatment FAQs</h3>
              <div className="faq-list">
                {data.faqs.map((faq, i) => (
                  <div key={i} className="faq-item">
                    <strong className="faq-q">{faq.q}</strong>
                    <p className="faq-a">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 8. Doctor CTA */}
            <div className="sidebar-card doctor-cta">
              <h3 className="cta-title">Ready to transform your smile?</h3>
              <p className="cta-subtitle">Book a consultation with our AIIMS trained specialists today.</p>
              <a href="#book" className="btn btn-primary w-full">Book Now</a>
            </div>

          </aside>
        </div>
      </section>
    </motion.div>
  );
};

export default TreatmentTemplate;
