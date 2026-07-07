import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "What is a dental implant?", a: "A dental implant is a titanium post surgically positioned into the jawbone beneath the gum line that allows your dentist to mount replacement teeth or a bridge into that area." },
  { q: "How long do implants last?", a: "With proper care and maintenance, dental implants can last a lifetime. They are a permanent solution for missing teeth." },
  { q: "Are clear aligners really invisible?", a: "Clear aligners are made of virtually invisible polyurethane plastic, making them very difficult to notice compared to traditional metal braces." },
  { q: "Does a root canal hurt?", a: "With modern anesthesia and techniques, a root canal is typically no more painful than getting a routine dental filling." },
  { q: "How often should I get a dental cleaning?", a: "We recommend professional dental cleanings every 6 months to maintain optimal oral health and prevent gum disease." },
  { q: "Do you offer emergency dental services?", a: "Yes, we prioritize emergency cases such as severe toothaches, broken teeth, or trauma. Please call us immediately." }
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className="faq-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ minHeight: '100vh', paddingBottom: '4rem' }}
    >
      <Helmet>
        <title>Frequently Asked Questions | The DentalBrace Clinic</title>
        <meta name="description" content="Find answers to common questions about dental implants, braces, root canals, and general dentistry at The DentalBrace Clinic in Bathinda." />
      </Helmet>

      <section className="bg-secondary section-padding pt-32 text-center">
        <div className="container">
          <span className="section-badge">Patient Resources</span>
          <h1 className="heading-primary">Frequently Asked Questions</h1>
          <p className="text-secondary max-w-2xl mx-auto mt-4">
            Everything you need to know about our premium dental treatments.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="faq-accordion" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="faq-item glass shadow-soft rounded-lg"
                style={{ overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)' }}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{ 
                    width: '100%', padding: '1.5rem', display: 'flex', 
                    justifyContent: 'space-between', alignItems: 'center',
                    background: 'transparent', border: 'none', cursor: 'pointer',
                    textAlign: 'left', fontWeight: '600', fontSize: '1.1rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  {faq.q}
                  <ChevronDown 
                    style={{ 
                      transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }} 
                  />
                </button>
                <div 
                  style={{ 
                    maxHeight: openIndex === i ? '200px' : '0', 
                    overflow: 'hidden', 
                    transition: 'max-height 0.3s ease',
                    padding: openIndex === i ? '0 1.5rem 1.5rem' : '0 1.5rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default FAQPage;
