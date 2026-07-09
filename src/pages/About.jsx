import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, Shield, Users, Clock } from 'lucide-react';
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
        <title>About Us — Dr. Sandeep Kumar &amp; Dr. Ritu Saneja | The DentalBrace Clinic Bathinda</title>
        <meta name="description" content="Learn about The DentalBrace Clinic in Bathinda — led by Dr. Sandeep Kumar (BDS, MDS (Orthodontics) - BHU, Ex-Resident AIIMS) and Dr. Ritu Saneja (MDS (Gold Medalist), BDS, MDS (Prosthodontics) - BHU, Ex-Resident AIIMS/PGIMER, Ex-Senior Resident AIIMS Bathinda). AIIMS-trained specialists delivering premium dental care since 2012 on Bibi Wala Road, Bathinda, Punjab." />
        <meta name="keywords" content="About DentalBrace Bathinda, Dr Sandeep Kumar Orthodontist Bathinda, Dr Ritu Saneja Implantologist Bathinda, AIIMS trained dentist Bathinda, best dental clinic Bathinda about" />
        <link rel="canonical" href="https://www.thedentalbrace.com/about" />
        <meta property="og:title" content="About The DentalBrace Clinic Bathinda — AIIMS-Trained Specialists" />
        <meta property="og:description" content="Meet Dr. Sandeep Kumar (Orthodontist) and Dr. Ritu Saneja (Gold Medalist Implantologist) — Bathinda's most experienced dental specialists at The DentalBrace Clinic." />
        <meta property="og:url" content="https://www.thedentalbrace.com/about" />
        <meta property="og:image" content="https://www.thedentalbrace.com/dr-sandeep.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="about-hero bg-secondary section-padding pt-32 text-center">
        <div className="container">
          <span className="section-badge">Our Story</span>
          <h1 className="heading-primary">Setting the Gold Standard in Dentistry</h1>
          <p className="about-subtitle">
            Founded with a vision to bring world-class dental care to Bathinda, our clinic combines AIIMS-trained expertise with cutting-edge digital technology to deliver painless, precise, and permanent results.
          </p>
        </div>
      </section>

      <section className="mission-vision section-padding">
        <div className="container">
          <div className="mission-grid">
            <div className="glass shadow-soft p-8 rounded-lg text-center hover-elevate">
              <Shield size={40} className="text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-primary">Our Mission</h3>
              <p className="text-secondary">To provide ethical, transparent, and top-tier dental treatments that prioritize patient comfort and long-term oral health over short-term fixes.</p>
            </div>
            
            <div className="glass shadow-soft p-8 rounded-lg text-center hover-elevate">
              <Users size={40} className="text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-primary">Patient-First Philosophy</h3>
              <p className="text-secondary">We treat patients, not just teeth. Every treatment plan is uniquely tailored to your clinical needs, aesthetic goals, and personal comfort.</p>
            </div>

            <div className="glass shadow-soft p-8 rounded-lg text-center hover-elevate">
              <Award size={40} className="text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-primary">Clinical Excellence</h3>
              <p className="text-secondary">Led by specialists trained at India's premier institutes (AIIMS & BHU), we maintain strict international sterilization protocols and utilize only premium materials.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-section section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-secondary">Our Journey of Excellence</h2>
          </div>
          <div className="timeline-wrapper">
            <div className="timeline-item">
              <div className="timeline-date"><Clock size={20} className="text-accent" /> 2012</div>
              <div className="timeline-content glass shadow-soft">
                <h4>Clinic Foundation</h4>
                <p>Established with a single chair and a commitment to ethical dentistry.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date"><Clock size={20} className="text-accent" /> 2016</div>
              <div className="timeline-content glass shadow-soft">
                <h4>Digital Transformation</h4>
                <p>Introduced Bathinda's first comprehensive digital dentistry workflow.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date"><Clock size={20} className="text-accent" /> 2023</div>
              <div className="timeline-content glass shadow-soft">
                <h4>Multi-Specialty Expansion</h4>
                <p>Expanded into a state-of-the-art facility offering comprehensive implantology and aligner treatments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
