import { Award, Shield, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import '../pages/About.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section bg-ivory">
      
      <div className="section-padding">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          <motion.div 
            style={{ position: 'relative' }}
            className="gpu-accelerated"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6 }}
          >
            <div 
              style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                right: '20px',
                bottom: '20px',
                backgroundColor: 'rgba(245, 130, 32, 0.1)',
                borderRadius: 'var(--radius-lg)',
                zIndex: 0
              }}
            ></div>
            <div className="about-image-container" style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', zIndex: 1 }}>
              <picture>
                <source srcSet="/clinic-interior.webp" type="image/webp" />
                <img 
                  src="/clinic-interior.jpg" 
                  alt="State-of-the-art premium dental clinic interior at The DentalBrace Clinic Bathinda — modern dental treatment room with advanced equipment on Bibi Wala Road Punjab" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '500px' }}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-text-content gpu-accelerated"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="section-badge">Our Story</span>
            <h2 className="heading-primary mt-4">Setting the Gold Standard in Dentistry</h2>
            <p className="about-subtitle text-secondary text-lg mt-6 leading-relaxed">
              Founded with a vision to bring world-class dental care to <strong className="text-accent font-bold">Bathinda</strong>, our clinic combines <strong className="text-primary font-bold">AIIMS-trained expertise</strong> with cutting-edge digital technology to deliver <strong className="text-primary font-bold">painless, precise, and permanent</strong> results.
            </p>
            
            <div className="mission-list mt-8" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <motion.div className="flex items-start gap-4" whileHover={{ x: 10 }}>
                <Shield size={28} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-primary">Ethical Practice</h3>
                  <p className="text-secondary mt-1">Transparent treatments prioritizing your long-term health.</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-4" whileHover={{ x: 10 }}>
                <Users size={28} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-primary">Patient-First Philosophy</h3>
                  <p className="text-secondary mt-1">Tailored to your clinical needs, aesthetic goals, and comfort.</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start gap-4" whileHover={{ x: 10 }}>
                <Award size={28} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-primary">Clinical Excellence</h3>
                  <p className="text-secondary mt-1">Specialists trained at <strong className="text-primary font-bold">India's premier institutes</strong>.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* GEO Statistics Banner */}
      <div className="bg-primary text-white py-12 mt-16 shadow-soft" style={{ backgroundColor: 'var(--primary-color)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div>
              <div className="text-4xl font-bold text-accent mb-2"><AnimatedCounter target={10} suffix="+" /></div>
              <p className="text-gray-300 font-medium">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2"><AnimatedCounter target={10000} suffix="+" /></div>
              <p className="text-gray-300 font-medium">Smiles Transformed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2"><AnimatedCounter target={5500} suffix="+" /></div>
              <p className="text-gray-300 font-medium">Invisalign Cases</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2"><AnimatedCounter target={5000} suffix="+" /></div>
              <p className="text-gray-300 font-medium">Implants Placed</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutSection;
