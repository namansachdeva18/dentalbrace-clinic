import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, Shield, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>About Us — The DentalBrace Clinic Bathinda</title>
        <meta name="description" content="Learn about The DentalBrace Clinic in Bathinda — led by Dr. Sandeep Kumar and Dr. Ritu Saneja. AIIMS-trained specialists delivering premium dental care." />
        <link rel="canonical" href="https://www.thedentalbrace.com/about" />
        <meta property="og:title" content="About Us — The DentalBrace Clinic Bathinda" />
        <meta property="og:description" content="Learn about The DentalBrace Clinic in Bathinda — led by Dr. Sandeep Kumar and Dr. Ritu Saneja. AIIMS-trained specialists delivering premium dental care." />
        <meta property="og:url" content="https://www.thedentalbrace.com/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero__content">
            <span className="section-badge fade-in">Our Heritage</span>
            <h1 className="heading-primary fade-in" style={{ animationDelay: '0.1s' }}>
              Setting the Gold Standard in <span>Dentistry</span>
            </h1>
            <p className="about-subtitle fade-in" style={{ animationDelay: '0.2s' }}>
              Founded with a vision to bring world-class dental care to Bathinda, our clinic combines AIIMS-trained expertise with cutting-edge digital technology to deliver painless, precise, and permanent results.
            </p>
            <div className="about-hero__stats fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="about-stat">
                <span className="about-stat-number">10+</span>
                <span className="about-stat-label">Years of Trust</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">10k+</span>
                <span className="about-stat-label">Happy Patients</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">100%</span>
                <span className="about-stat-label">Sterilization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="about-image-break container fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="about-image-wrapper glass shadow-lg">
           <picture>
             <source srcSet="/doctors-combined.webp" type="image/webp" />
             <img src="/doctors-combined.jpg" alt="Dr. Sandeep Kumar and Dr. Ritu Saneja, expert dental specialists and founders of The DentalBrace Clinic Bathinda Punjab" className="about-main-img" loading="lazy" decoding="async" />
           </picture>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="mission-vision section-padding bg-cream">
        <div className="container">
          <div className="text-center mb-16">
             <h2 className="heading-secondary">What Drives Us Every Day</h2>
             <p className="text-secondary max-w-2xl mx-auto">We don't just fix teeth; we restore confidence, function, and health. Our core pillars reflect our commitment to your smile.</p>
          </div>
          
          <div className="mission-grid">
            <div className="mission-card glass hover-elevate">
              <div className="mission-icon-wrap">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Uncompromising Ethics</h3>
              <p className="text-secondary">We recommend only what you truly need. Transparency, honesty, and ethical care are the foundation of our practice.</p>
            </div>
            
            <div className="mission-card glass hover-elevate">
              <div className="mission-icon-wrap">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Patient-First Philosophy</h3>
              <p className="text-secondary">Every treatment plan is tailored to your clinical needs, aesthetic goals, and personal comfort. We treat patients, not just teeth.</p>
            </div>

            <div className="mission-card glass hover-elevate">
              <div className="mission-icon-wrap">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Clinical Excellence</h3>
              <p className="text-secondary">Led by specialists from India's premier institutes (AIIMS & BHU), we maintain strict international sterilization protocols.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="about-timeline-section section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="section-badge">Our Journey</span>
            <h2 className="heading-secondary mt-4">A Decade of Excellence</h2>
          </div>
          
          <div className="about-timeline-wrapper">
            <div className="about-timeline-item">
              <div className="about-timeline-marker">
                <div className="about-timeline-dot"></div>
                <div className="about-timeline-line"></div>
              </div>
              <div className="about-timeline-content glass shadow-soft hover-elevate">
                <div className="about-timeline-date">2012</div>
                <h4>The Foundation</h4>
                <p>Established with a commitment to bring ethical, high-quality specialist dentistry to Bathinda.</p>
              </div>
            </div>
            
            <div className="about-timeline-item">
              <div className="about-timeline-marker">
                <div className="about-timeline-dot"></div>
                <div className="about-timeline-line"></div>
              </div>
              <div className="about-timeline-content glass shadow-soft hover-elevate">
                <div className="about-timeline-date">2016</div>
                <h4>Digital Transformation</h4>
                <p>Introduced advanced digital workflows, shifting from traditional impressions to precise 3D scanning and planning.</p>
              </div>
            </div>
            
            <div className="about-timeline-item">
              <div className="about-timeline-marker">
                <div className="about-timeline-dot"></div>
                <div className="about-timeline-line"></div>
              </div>
              <div className="about-timeline-content glass shadow-soft hover-elevate">
                <div className="about-timeline-date">2023</div>
                <h4>Multi-Specialty Expansion</h4>
                <p>Expanded into a state-of-the-art facility offering comprehensive implantology, aligners, and full-mouth rehabilitation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta glass shadow-lg bg-navy text-center">
        <div className="container">
          <h2 className="heading-secondary text-white mb-6">Ready to Experience the Difference?</h2>
          <p className="text-white mb-8 max-w-2xl mx-auto" style={{ opacity: 0.9 }}>
            Join thousands of happy patients who have entrusted us with their smiles.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
             <Link to="/contact" className="btn btn-primary">Book Consultation <ArrowRight size={18} /></Link>
             <Link to="/gallery" className="btn btn-outline" style={{ background: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>View Results</Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
