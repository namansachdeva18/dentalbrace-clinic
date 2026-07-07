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
            start: "top 80%",
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
      <section className="premium-feature section-padding" ref={addToRefs}>
        <div className="container premium-container">
          <div className="premium-content">
            <span className="section-badge"><Monitor size={16}/> Advanced Technology</span>
            <h2 className="heading-primary">Digital Dentistry</h2>
            <p>
              Experience the future of dental care. Our clinic utilizes advanced digital diagnosis and precision planning tools to ensure maximum comfort, better accuracy, and faster treatment times compared to traditional methods.
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

      {/* Invisalign Section */}
      <section className="premium-feature section-padding" style={{ backgroundColor: 'var(--bg-cream)' }} ref={addToRefs}>
        <div className="container premium-container reverse">
          <div className="premium-content">
            <span className="section-badge"><Smile size={16}/> Clear Aligners</span>
            <h2 className="heading-primary">Invisalign & Clear Aligners</h2>
            <p>
              Achieve a perfect smile discreetly. Invisalign treatment typically begins with a 3D digital scan and personalized treatment planning. Clear aligners are removable, nearly invisible, and customized for each patient.
            </p>
            <div className="treatment-steps" style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', marginTop: '2rem' }}>
              {/* Connecting Line */}
              <div style={{ position: 'absolute', top: '15px', left: '20px', right: '20px', height: '2px', backgroundColor: 'var(--border-color)', zIndex: 0 }}></div>
              
              <div className="timeline-step" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }}>
                <span style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginBottom: '0.5rem' }}>1</span> 
                <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>Consultation</span>
              </div>
              <div className="timeline-step" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }}>
                <span style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginBottom: '0.5rem' }}>2</span> 
                <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>3D Scan</span>
              </div>
              <div className="timeline-step" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }}>
                <span style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginBottom: '0.5rem' }}>3</span> 
                <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>Custom Aligners</span>
              </div>
              <div className="timeline-step" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }}>
                <span style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'var(--accent-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginBottom: '0.5rem' }}>4</span> 
                <span style={{ fontSize: '0.875rem', fontWeight: '600' }}>Beautiful Smile</span>
              </div>
            </div>
          </div>
          <div className="premium-visual">
            <BeforeAfterSlider 
              beforeImage="/images/before_aligners_indian.png"
              afterImage="/images/after_aligners_indian.png"
              beforeAlt="Indian patient before Invisalign treatment showing crowded and misaligned teeth — before clear aligner therapy at The DentalBrace Clinic Bathinda"
              afterAlt="Same Indian patient after Invisalign treatment at The DentalBrace Clinic Bathinda — perfectly straight white teeth, smile transformation by Dr. Sandeep Kumar Orthodontist"
            />
          </div>
        </div>
      </section>

      {/* Full Mouth Rehab Section */}
      <section className="premium-feature section-padding" ref={addToRefs}>
        <div className="container premium-container">
          <div className="premium-content">
            <span className="section-badge"><Activity size={16}/> Complete Restoration</span>
            <h2 className="heading-primary">Full Mouth Rehabilitation</h2>
            <p>
              Restore the health, function, and aesthetics of your smile. We use digital planning alongside implants, crowns, and bridges to reconstruct smiles affected by missing, broken, or severely worn teeth.
            </p>
            <ul className="feature-list">
              <li>✔ Improved Chewing Function</li>
              <li>✔ Natural Appearance Restored</li>
              <li>✔ Confidence Rebuilt</li>
            </ul>
          </div>
          <div className="premium-visual">
            <BeforeAfterSlider 
              beforeImage="/images/before_rehab_indian.png"
              afterImage="/images/after_rehab_indian.png"
              beforeAlt="Indian patient before full mouth rehabilitation at The DentalBrace Clinic Bathinda — missing, decayed and damaged teeth requiring complete oral restoration"
              afterAlt="Same patient after full mouth rehabilitation by Dr. Ritu Saneja Implantologist at The DentalBrace Clinic Bathinda — beautiful natural-looking complete smile with dental implants and crowns"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiumSections;
