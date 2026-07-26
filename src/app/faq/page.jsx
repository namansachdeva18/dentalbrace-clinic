'use client';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  // Invisalign & Braces
  { category: 'Invisalign', q: "How much does Invisalign cost in Bathinda?", a: "Invisalign costs vary by case complexity. At The DentalBrace Clinic Bathinda, Dr. Sandeep Kumar offers transparent pricing with 0% interest EMI options. Book a consultation (₹200/-) for your personalised quote." },
  { category: 'Invisalign', q: "Is Invisalign better than traditional metal braces?", a: "Invisalign is often preferred for its near-invisibility, comfort, and removability. Dr. Sandeep Kumar has completed 5,500+ aligner cases and will recommend the best option based on your case severity." },
  { category: 'Invisalign', q: "How long does Invisalign treatment take in Bathinda?", a: "Most Invisalign treatments are completed in 12–18 months in Bathinda. Mild cases can be done in as little as 6 months. You'll wear each set of aligners for 1–2 weeks before progressing to the next tray." },
  { category: 'Invisalign', q: "Are clear aligners really invisible?", a: "Yes. Clear aligners are made of virtually invisible polyurethane plastic. When worn, most people won't notice them at all — making them ideal for working professionals and adults in Bathinda." },
  { category: 'Invisalign', q: "Can I eat normally with Invisalign?", a: "Yes! You simply remove the aligners before eating or drinking anything other than plain water, so there are absolutely no food restrictions during your Invisalign treatment." },
  // Implants
  { category: 'Implants', q: "Are dental implants painful in Bathinda?", a: "Implants are placed under local anesthesia, so you feel zero pain during the procedure. Mild soreness for 2–3 days after is normal. Dr. Ritu Saneja has placed 5,000+ implants with an exceptional comfort record." },
  { category: 'Implants', q: "How long do dental implants last?", a: "With proper care and maintenance, dental implants can last a lifetime. The titanium post fuses permanently with your jawbone, while the crown on top typically lasts 15–20 years." },
  { category: 'Implants', q: "What is All-on-4 dental implant treatment?", a: "All-on-4 is a revolutionary technique where a full arch of teeth (12–14 teeth) is supported on just 4 strategically placed implants. It's a faster and more cost-effective solution than replacing each tooth individually and often avoids the need for bone grafting." },
  { category: 'Implants', q: "What is the cost of dental implants in Bathinda?", a: "Dental implants at The DentalBrace Clinic Bathinda start from ₹25,000 per implant, which includes the titanium fixture and the zirconia crown. We offer phased payment plans and health financing options. Book a CBCT scan consultation for an exact quote." },
  { category: 'Implants', q: "What if I don't have enough bone for an implant?", a: "If your jawbone is too thin or short, a bone grafting or sinus lift procedure can rebuild the volume required prior to placing the implant. Dr. Ritu Saneja specializes in these complex cases." },
  // Treatments
  { category: 'Treatments', q: "What is Dentofacial Orthopedics?", a: "Dentofacial Orthopedics focuses on guiding the growth and development of the jaw and facial bones, primarily in children and teenagers. Early intervention with devices like expanders and headgear can prevent the need for surgery later in life. Dr. Sandeep Kumar is a specialist in this area." },
  { category: 'Treatments', q: "Does a root canal hurt?", a: "With modern rotary endodontics and local anesthesia, a root canal treatment at The DentalBrace Clinic is typically no more painful than getting a routine dental filling. Most patients are surprised by how comfortable it is." },
  { category: 'Treatments', q: "What treatments are included in a Smile Makeover?", a: "A Smile Makeover at The DentalBrace Clinic typically combines porcelain veneers, teeth whitening, composite bonding, and gum contouring. Dr. Ritu uses Digital Smile Design (DSD) to preview your results digitally before any permanent changes are made." },
  { category: 'Treatments', q: "How long do porcelain veneers last?", a: "With excellent oral hygiene and a custom nightguard to protect them from grinding, high-quality porcelain veneers can last 10 to 15 years or longer." },
  // General
  { category: 'General', q: "How often should I get a dental cleaning?", a: "We recommend professional dental cleanings every 6 months to maintain optimal oral health and prevent gum disease. Regular scaling prevents the tartar buildup that causes bleeding gums and bad breath." },
  { category: 'General', q: "Do you offer emergency dental services in Bathinda?", a: "Yes, we prioritize emergency cases such as severe toothaches, broken teeth, knocked-out teeth, or trauma. Please call us immediately at +91 74968-49392. We are available Mon–Sat, 9AM–8PM." },
  { category: 'General', q: "What is the consultation fee at The DentalBrace Clinic?", a: "The consultation fee at The DentalBrace Clinic is a nominal ₹200/-. This includes a full dental examination and a customized treatment plan by our AIIMS-trained specialists." },
  // Payment
  { category: 'Payment & Insurance', q: "Do you accept dental insurance?", a: "We accept most major dental insurance plans. Please contact our front desk with your insurer's details to verify your specific coverage before your appointment." },
  { category: 'Payment & Insurance', q: "Are EMI or financing options available for dental treatment?", a: "Yes, we offer flexible 0% interest EMI options for major treatments including full mouth rehabilitation, Invisalign, and dental implants. We accept Bajaj Finserv Health Cards and other financing options." },
];

const categories = ["All", "Invisalign", "Implants", "Treatments", "General", "Payment & Insurance"];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // FAQPage Schema for Google rich results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="page-wrapper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-secondary section-padding pt-32 text-center">
        <div className="container">
          <span className="section-badge">Patient Resources</span>
          <h1 className="heading-primary">Frequently Asked Questions</h1>
          <p className="text-secondary max-w-2xl mx-auto mt-4">
            Everything you need to know about our premium dental treatments in Bathinda.
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
                      transition: 'transform 0.3s ease',
                      flexShrink: 0,
                      marginLeft: '1rem',
                      color: 'var(--accent-color)'
                    }}
                  />
                </button>
                <div
                  style={{
                    maxHeight: openIndex === i ? '300px' : '0',
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
    </div>
  );
};

export default FAQPage;

