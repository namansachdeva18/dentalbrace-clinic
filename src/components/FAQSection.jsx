import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';

const faqs = [
  // Invisalign
  { category: 'Invisalign', q: "How much does Invisalign cost in Bathinda?", a: "The cost of Invisalign in Bathinda varies by the complexity of the case and number of aligners needed. Dr. Sandeep Kumar offers flexible EMI plans starting from competitive prices. Book a consultation for today to get your personalised quote." },
  { category: 'Invisalign', q: "Is Invisalign better than traditional metal braces?", a: "Invisalign is often preferred for its near-invisibility, comfort, and removability. It allows you to eat anything, brush normally, and is virtually undetectable. Dr. Sandeep has completed 5,500+ aligner cases and will recommend the best option for your case." },
  { category: 'Invisalign', q: "How long does Invisalign treatment take in Bathinda?", a: "Most Invisalign treatments are completed in 12–18 months. Mild cases can be done in as little as 6 months. You'll wear each set of aligners for about 1–2 weeks before progressing to the next." },
  { category: 'Invisalign', q: "Are clear aligners really invisible?", a: "Clear aligners are made of virtually invisible polyurethane plastic. When worn, most people won't notice them unless they look very closely — making them ideal for working professionals and adults." },
  // Implants
  { category: 'Implants', q: "Are dental implants painful?", a: "Modern dental implants are placed under local anesthesia, so you won't feel pain during the procedure. Mild soreness for 2–3 days after is normal. Dr. Ritu Saneja has placed 5,000+ implants with an exceptional comfort record." },
  { category: 'Implants', q: "How long do dental implants last?", a: "With proper care, dental implants can last a lifetime. The titanium post fuses with your jawbone permanently, while the crown typically lasts 15–20 years. Regular checkups ensure longevity." },
  { category: 'Implants', q: "What is Full Mouth Rehabilitation (FMR)?", a: "FMR is a comprehensive treatment plan that restores both the function and aesthetics of your entire mouth — typically combining implants, crowns, bridges, and gum therapy. Dr. Ritu specialises in full-arch restorations including All-on-4 and All-on-6." },
  { category: 'Implants', q: "What is All-on-4 dental implants?", a: "All-on-4 is a revolutionary technique where a full arch of teeth (12–14 teeth) is supported on just 4 strategically placed implants. It's a faster and more cost-effective solution than replacing each tooth individually." },
  // Treatments
  { category: 'Treatments', q: "What is Dentofacial Orthopedics?", a: "Dentofacial Orthopedics focuses on guiding the growth and development of the jaw and facial bones, typically in children and teenagers. Early treatment can prevent the need for surgery later. Dr. Sandeep is a specialist in this area." },
  { category: 'Treatments', q: "Does a root canal hurt?", a: "With modern anesthesia and techniques, a root canal is typically no more painful than getting a routine dental filling." },
  { category: 'Treatments', q: "What treatments are included in a Smile Makeover?", a: "A Smile Makeover typically combines porcelain veneers, teeth whitening, composite bonding, and gum contouring. Dr. Ritu uses digital smile design to preview your results before any treatment begins." },
  // General
  { category: 'General', q: "How often should I get a dental cleaning?", a: "We recommend professional dental cleanings every 6 months to maintain optimal oral health and prevent gum disease." },
  { category: 'General', q: "Do you offer emergency dental services?", a: "Yes, we prioritize emergency cases such as severe toothaches, broken teeth, or trauma. Please call us immediately." },
  // Payment
  { category: 'Payment & Insurance', q: "Do you accept dental insurance?", a: "We accept most major dental insurance plans. Please contact our front desk to verify your specific coverage." },
  { category: 'Payment & Insurance', q: "Are EMI or financing options available?", a: "Yes, we offer flexible no-cost EMI options for major treatments like full mouth rehabilitation, Invisalign, and dental implants." }
];

const categories = ["All", "Invisalign", "Implants", "Treatments", "General", "Payment & Insurance"];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="text-center mb-10">
          <span className="section-badge">Patient Resources</span>
          <h2 className="heading-secondary mt-4">Frequently Asked Questions</h2>
          <p className="text-secondary max-w-2xl mx-auto mt-4">
            Everything you need to know about our premium dental treatments.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8" style={{ position: 'relative' }}>
          <Search size={20} className="text-secondary" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
          <input 
            type="text" 
            placeholder="Search questions..." 
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setOpenIndex(null); }}
            style={{
              width: '100%',
              padding: '16px 16px 16px 48px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-ivory)',
              fontSize: '1rem',
              color: 'var(--text-primary)',
              outline: 'none',
              transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
            }}
            onFocus={(e) => { e.target.style.borderColor = 'var(--accent-color)'; e.target.style.boxShadow = '0 0 0 3px rgba(245, 130, 32, 0.1)'; }}
            onBlur={(e) => { e.target.style.borderColor = 'var(--border-color)'; e.target.style.boxShadow = 'none'; }}
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: activeCategory === cat ? 'var(--accent-color)' : 'var(--bg-cream)',
                color: activeCategory === cat ? 'white' : 'var(--text-primary)',
                fontWeight: '600',
                border: activeCategory === cat ? '1px solid var(--accent-color)' : '1px solid var(--border-color)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontSize: '0.9rem'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="faq-accordion" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredFaqs.length > 0 ? filteredFaqs.map((faq, i) => (
            <div 
              key={i} 
              className="faq-item glass hover-elevate"
              style={{ overflow: 'hidden' }}
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
                    color: 'var(--accent-color)'
                  }} 
                />
              </button>
              <div 
                style={{ 
                  maxHeight: openIndex === i ? '200px' : '0', 
                  overflow: 'hidden', 
                  transition: 'max-height 0.3s ease',
                  padding: openIndex === i ? '0 1.5rem 1.5rem' : '0 1.5rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6'
                }}
              >
                {faq.a}
              </div>
            </div>
          )) : (
            <div className="text-center p-8 text-secondary">
              No questions found matching your search.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
