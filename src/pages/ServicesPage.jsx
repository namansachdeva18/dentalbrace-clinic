import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Stethoscope, Scissors } from 'lucide-react';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    {
      title: "Cosmetic Dentistry",
      icon: <Sparkles size={32} className="text-accent" />,
      services: [
        { name: "Smile Makeover", slug: "smile-makeover" },
        { name: "Dental Veneers", slug: "veneers" },
        { name: "Teeth Whitening", slug: "teeth-whitening" }
      ]
    },
    {
      title: "Implantology",
      icon: <Stethoscope size={32} className="text-accent" />,
      services: [
        { name: "Dental Implants", slug: "dental-implants" },
        { name: "All-on-4 Implants", slug: "all-on-4" }
      ]
    },
    {
      title: "Orthodontics",
      icon: <Scissors size={32} className="text-accent" />,
      services: [
        { name: "Invisalign", slug: "invisalign" },
        { name: "Metal Braces", slug: "braces" }
      ]
    }
  ];

  return (
    <motion.div 
      className="services-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ minHeight: '100vh', paddingBottom: '4rem' }}
    >
      <Helmet>
        <title>Dental Treatments in Bathinda — Invisalign, Implants, Veneers | The DentalBrace</title>
        <meta name="description" content="Explore all dental treatments at The DentalBrace Clinic Bathinda — Invisalign clear aligners, full mouth dental implants, All-on-4, porcelain veneers, digital smile design, teeth whitening, metal &amp; ceramic braces. AIIMS-trained specialists." />
        <meta name="keywords" content="dental treatments Bathinda, Invisalign Bathinda, dental implants Bathinda, veneers Bathinda, smile designing Bathinda, teeth whitening Bathinda, braces Bathinda, All-on-4 Bathinda, root canal Bathinda" />
        <link rel="canonical" href="https://www.thedentalbrace.com/services" />
        <meta property="og:title" content="Dental Treatments in Bathinda | Invisalign Implants Veneers — The DentalBrace" />
        <meta property="og:description" content="Complete range of premium dental services in Bathinda — Invisalign, dental implants, smile makeover, veneers &amp; more by AIIMS-trained specialists." />
        <meta property="og:url" content="https://www.thedentalbrace.com/services" />
        <meta property="og:image" content="https://www.thedentalbrace.com/hero-image.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="bg-secondary section-padding pt-32 text-center">
        <div className="container">
          <span className="section-badge">Treatments</span>
          <h1 className="heading-primary">Premium Dental Services</h1>
          <p className="text-secondary max-w-2xl mx-auto mt-4">
            Advanced clinical expertise combined with digital precision to offer you the best dental care possible.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {categories.map((cat, i) => (
            <div key={i} className="service-category-card glass shadow-soft p-8 rounded-lg hover-elevate">
              <div style={{ marginBottom: '1.5rem' }}>{cat.icon}</div>
              <h2 className="heading-secondary mb-4">{cat.title}</h2>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {cat.services.map((service, j) => (
                  <li key={j}>
                    <Link to={`/treatments/${service.slug}`} className="text-secondary hover:text-accent" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)', transition: 'color 0.3s ease' }}>
                      {service.name} <ArrowRight size={16} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default ServicesPage;
