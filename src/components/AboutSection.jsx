import { Award, Shield, Users, Clock } from 'lucide-react';
import '../pages/About.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section bg-ivory">
      
      <div className="section-padding">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          <div style={{ position: 'relative' }}>
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
              <img 
                src="/clinic-interior.jpg" 
                alt="State-of-the-art premium dental clinic interior at The DentalBrace Clinic Bathinda — modern dental treatment room with advanced equipment on Bibi Wala Road Punjab" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '500px' }}
              />
            </div>
          </div>
          
          <div className="about-text-content">
            <span className="section-badge">Our Story</span>
            <h2 className="heading-primary mt-4">Setting the Gold Standard in Dentistry</h2>
            <p className="about-subtitle text-secondary text-lg mt-6 leading-relaxed">
              Founded with a vision to bring world-class dental care to Bathinda, our clinic combines AIIMS-trained expertise with cutting-edge digital technology to deliver painless, precise, and permanent results.
            </p>
            
            <div className="mission-list mt-8" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="flex items-start gap-4">
                <Shield size={28} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-primary">Ethical Practice</h3>
                  <p className="text-secondary mt-1">Transparent treatments prioritizing your long-term health.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users size={28} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-primary">Patient-First Philosophy</h3>
                  <p className="text-secondary mt-1">Tailored to your clinical needs, aesthetic goals, and comfort.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Award size={28} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-primary">Clinical Excellence</h3>
                  <p className="text-secondary mt-1">Specialists trained at India's premier institutes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutSection;
