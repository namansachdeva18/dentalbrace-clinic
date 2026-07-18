import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Monitor, Camera, Smile, Activity } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';
import './PremiumSections.css';

gsap.registerPlugin(ScrollTrigger);

const PremiumSections = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionsRef.current.forEach((section, index) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            once: true,
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out"
        });
      });
    });
    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="premium-sections">
      {/* Digital Dentistry Section */}
      <section className="premium-feature section-padding bg-ivory gpu-accelerated" ref={addToRefs}>
        <div className="container premium-container">
          <div className="premium-content">
            <span className="section-badge"><Monitor size={16}/> Advanced Technology</span>
            <h2 className="heading-primary">Digital Dentistry</h2>
            <p>
              Experience the future of dental care. Our clinic utilizes <strong className="text-accent font-bold">advanced digital diagnosis</strong> and <strong className="text-primary font-bold">precision planning</strong> tools to ensure maximum comfort, better accuracy, and <strong className="text-primary font-bold">faster treatment times</strong> compared to traditional methods.
            </p>
            <ul className="feature-list">
              <li>✔ Digital 3D Diagnosis</li>
              <li>✔ Precision Treatment Planning</li>
              <li>✔ Enhanced Patient Comfort</li>
            </ul>
          </div>
          <div className="premium-visual" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <img 
              src="/images/digital_dentistry_indian.png" 
              alt="Digital dentistry at The DentalBrace Clinic Bathinda — intraoral scanner and 3D digital treatment planning by Dr. Sandeep Kumar MDS Orthodontics" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '400px' }}
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default PremiumSections;
