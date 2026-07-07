import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, ZoomIn, X, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import './PatientGallery.css';

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────────────────────
// Patient Gallery with SEO Optimized Reviews & Premium UI
// ─────────────────────────────────────────────────────────────────────────────
const galleryItems = [
  { 
    id: 1,  
    src: '/patient-gallery/case-1.jpg', 
    alt: 'Invisalign clear aligner treatment result at The DentalBrace Clinic Bathinda — patient Gurpreet S. showing straight aligned teeth after Invisalign by Dr. Sandeep Kumar MDS Orthodontist, before and after smile transformation in Bathinda Punjab',  
    label: 'Invisalign Treatment',
    review: "Dr. Sandeep's Invisalign treatment completely transformed my smile. The process was painless, practically invisible, and perfectly managed. Highly recommend The DentalBrace Clinic for clear aligners in Bathinda!",
    reviewer: "Gurpreet S."
  },
  { 
    id: 2,  
    src: '/patient-gallery/case-2.jpg', 
    alt: 'Dental implant treatment result by Dr. Ritu Saneja Gold Medalist Prosthodontist at The DentalBrace Clinic Bathinda — patient showing natural-looking dental implant replacing missing tooth, best implantologist in Bathinda Punjab',  
    label: 'Dental Implant Case',
    review: "I got my dental implants done by Dr. Ritu. Highly professional, and the results look incredibly natural and function perfectly. Best prosthodontist in the city!",
    reviewer: "Rajesh M."
  },
  { 
    id: 3,  
    src: '/patient-gallery/case-3.jpg', 
    alt: 'Smile makeover result with porcelain veneers at The DentalBrace Clinic Bathinda — patient showing dazzling white perfect smile after cosmetic dentistry by Dr. Ritu Saneja, best smile makeover clinic in Bathinda Punjab India',  
    label: 'Smile Makeover',
    review: "My smile makeover gave me the confidence I lacked for years. The team's digital precision and artistic eye for porcelain veneers is unmatched.",
    reviewer: "Priya K."
  },
  { 
    id: 4,  
    src: '/patient-gallery/case-4.jpg', 
    alt: 'Clear aligner orthodontic treatment result at The DentalBrace Clinic Bathinda — patient showing perfectly straight teeth after clear aligner therapy by Dr. Sandeep Kumar, certified Invisalign and clear aligner specialist Bathinda',  
    label: 'Clear Aligners',
    review: "The clear aligners were amazing. Dr. Sandeep is an exceptional orthodontist who guided me through every step to achieve perfectly straight teeth.",
    reviewer: "Amanjot T."
  },
  { 
    id: 5,  
    src: '/patient-gallery/case-5.jpg', 
    alt: 'Full mouth rehabilitation result at The DentalBrace Clinic Bathinda — patient after complete full mouth rehab with implants crowns and bridges by Dr. Ritu Saneja Gold Medalist Prosthodontist, best full mouth rehabilitation clinic Bathinda Punjab',  
    label: 'Full Mouth Rehab',
    review: "A complex full mouth rehab handled flawlessly. Their expertise in advanced dentistry and patient care shines through in every appointment.",
    reviewer: "Suresh G."
  },
  { 
    id: 6,  
    src: '/patient-gallery/case-6.jpg', 
    alt: 'Metal and ceramic dental braces treatment result at The DentalBrace Clinic Bathinda — patient showing beautifully aligned teeth after braces by Dr. Sandeep Kumar MDS Orthodontist, best orthodontist for braces in Bathinda Punjab',  
    label: 'Braces Case',
    review: "Best braces treatment in Bathinda! My teeth aligned beautifully, and the clinic's hygiene standards are incredibly reassuring.",
    reviewer: "Mehak D."
  },
  { 
    id: 7,  
    src: '/patient-gallery/case-7.jpg', 
    alt: 'Dental treatment before and after result at The DentalBrace Clinic Bathinda — dramatic smile transformation showing crooked to perfect teeth, cosmetic dentistry by AIIMS-trained dental specialists in Bathinda Punjab India',  
    label: 'Before & After',
    review: "The transformation is unbelievable. I can finally smile without hesitation thanks to the premium cosmetic dentistry here.",
    reviewer: "Karan V."
  },
  { 
    id: 8,  
    src: '/patient-gallery/case-8.jpg', 
    alt: 'Zirconia dental crowns and bridges result at The DentalBrace Clinic Bathinda — patient showing natural-looking zirconia crowns by Dr. Ritu Saneja, best zirconia crown specialist in Bathinda Punjab India',  
    label: 'Zirconia Crowns',
    review: "Got Zirconia crowns here. They look exactly like real teeth and feel extremely durable. Excellent craftsmanship and zero discomfort.",
    reviewer: "Harpreet B."
  },
  { 
    id: 9,  
    src: '/patient-gallery/case-9.jpg', 
    alt: 'All-on-4 full mouth dental implants result at The DentalBrace Clinic Bathinda — patient showing complete arch fixed teeth after All-on-4 implants by Dr. Ritu Saneja Gold Medalist Implantologist, best All-on-4 clinic in Bathinda Punjab',  
    label: 'All-on-4 Implants',
    review: "The All-on-4 implants changed my life. I can eat everything normally now with fixed teeth. Truly a gold standard clinic for implantology.",
    reviewer: "Ramesh C."
  },
  { 
    id: 10, 
    src: '/patient-gallery/case-10.jpg', 
    alt: 'Cosmetic smile transformation result at The DentalBrace Clinic Bathinda — patient showing complete aesthetic smile makeover with veneers and whitening by Dr. Ritu Saneja, top cosmetic dentist in Bathinda Punjab India', 
    label: 'Smile Transformation',
    review: "A life-changing experience. The highly aesthetic results and utmost care for patient comfort make them the top dentists in the region.",
    reviewer: "Anita P."
  },
];

const PatientGallery = () => {
  const sectionRef  = useRef(null);
  const headingRef  = useRef(null);
  const gridRef     = useRef(null);
  const cardsRef    = useRef([]);
  cardsRef.current  = [];

  const [lightbox, setLightbox]   = useState(null); // index of open image

  // ── GSAP Entrance Animations ──────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading fade-in
      gsap.fromTo(headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power4.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%', once: true }
        }
      );

      // Trendy Individual Card Scroll Effects (Perfect for Mobile)
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        
        // 1. Entrance animation for the card itself
        gsap.set(card, { transformPerspective: 1200 });
        gsap.fromTo(card,
          { 
            y: 80, 
            opacity: 0, 
            scale: 0.95, 
            rotationX: -15, // 3D tilt away
          },
          {
            y: 0, 
            opacity: 1, 
            scale: 1, 
            rotationX: 0,
            duration: 1.2, 
            ease: 'expo.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 92%', // Trigger just as it comes into view
              end: 'top 50%',
              toggleActions: 'play none none reverse', // Reverses when scrolling back up
            }
          }
        );

        // 2. Parallax effect for the image inside the card
        const img = card.querySelector('.pg-img');
        if (img) {
          gsap.fromTo(img,
            { yPercent: -15, scale: 1.1 },
            {
              yPercent: 15,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom', // Start when card top hits viewport bottom
                end: 'bottom top',   // End when card bottom hits viewport top
                scrub: 1.5,          // Smooth scrubbing
              }
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ── Lightbox keyboard nav ─────────────────────────────────────────────────
  useEffect(() => {
    if (lightbox === null || galleryItems.length === 0) return;

    const handleKey = (e) => {
      if (e.key === 'Escape')     closeLightbox();
      if (e.key === 'ArrowRight') navLightbox(1);
      if (e.key === 'ArrowLeft')  navLightbox(-1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox]);

  const openLightbox  = (idx) => { setLightbox(idx); };
  const closeLightbox = ()    => setLightbox(null);
  const navLightbox   = (dir) => {
    setLightbox(prev => (prev + dir + galleryItems.length) % galleryItems.length);
  };

  const addRef = (el) => { if (el) cardsRef.current.push(el); };

  return (
    <section
      id="gallery"
      className="gallery-section"
      ref={sectionRef}
      aria-label="Patient Treatment Gallery — The DentalBrace Clinic Bathinda"
    >
      {/* ── Background Decoration ──────────────────────────────────────── */}
      <div className="gallery-bg-blob gallery-bg-blob--1" />
      <div className="gallery-bg-blob gallery-bg-blob--2" />

      <div className="container">

        {/* ── Heading ──────────────────────────────────────────────────── */}
        <div className="gallery-heading" ref={headingRef}>
          <span className="section-badge">
            <Camera size={16} /> Real Patients · Real Results
          </span>
          <h2 className="heading-primary mt-4">
            Our Patient <span style={{ color: 'var(--accent-color)' }}>Stories</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto mt-4" style={{ fontSize: '1.1rem' }}>
            Every smile tells a story. See the stunning transformations and read the experiences 
            of our valued patients at The DentalBrace Clinic.
          </p>
        </div>

        {/* ── Grid ─────────────────────────────────────────────────────── */}
        <div className="pg-grid" ref={gridRef}>
          {galleryItems.map((item, idx) => (
            <div
              key={item.id}
              ref={addRef}
              className="pg-card"
              onClick={() => openLightbox(idx)}
              aria-label={`View ${item.label} Review`}
            >
              <div className="pg-img-wrapper">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  title={`${item.label} — The DentalBrace Clinic Bathinda`}
                  className="pg-img" 
                  loading="lazy"
                  decoding="async"
                />
                <div className="pg-overlay">
                  <ZoomIn size={48} className="pg-zoom-icon" />
                </div>
              </div>
              
              <div className="pg-review-content">
                <div className="pg-quote-mark">"</div>
                <div className="pg-stars">
                  <Star size={16} fill="currentColor" strokeWidth={0} />
                  <Star size={16} fill="currentColor" strokeWidth={0} />
                  <Star size={16} fill="currentColor" strokeWidth={0} />
                  <Star size={16} fill="currentColor" strokeWidth={0} />
                  <Star size={16} fill="currentColor" strokeWidth={0} />
                </div>
                <p className="pg-review-text">"{item.review}"</p>
                <div className="pg-reviewer-area">
                  <span className="pg-reviewer-name">{item.reviewer}</span>
                  <span className="pg-label">{item.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── Lightbox ─────────────────────────────────────────────────────── */}
      {lightbox !== null && galleryItems[lightbox] && (
        <div className="lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            <X size={32} />
          </button>

          {galleryItems.length > 1 && (
            <>
              <button
                className="lightbox-nav lightbox-nav--prev"
                onClick={(e) => { e.stopPropagation(); navLightbox(-1); }}
                aria-label="Previous photo"
              >
                <ChevronLeft size={36} />
              </button>
              <button
                className="lightbox-nav lightbox-nav--next"
                onClick={(e) => { e.stopPropagation(); navLightbox(1); }}
                aria-label="Next photo"
              >
                <ChevronRight size={36} />
              </button>
            </>
          )}

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryItems[lightbox].src}
              alt={galleryItems[lightbox].alt}
              className="lightbox-img"
            />
            
            <div className="lightbox-review-panel" onClick={(e) => e.stopPropagation()}>
              <div className="lightbox-stars">
                <Star size={22} fill="currentColor" strokeWidth={0} />
                <Star size={22} fill="currentColor" strokeWidth={0} />
                <Star size={22} fill="currentColor" strokeWidth={0} />
                <Star size={22} fill="currentColor" strokeWidth={0} />
                <Star size={22} fill="currentColor" strokeWidth={0} />
              </div>
              <p className="lightbox-review-text">"{galleryItems[lightbox].review}"</p>
              <div className="lightbox-reviewer-row">
                <span className="lightbox-reviewer-name">{galleryItems[lightbox].reviewer}</span>
                <span className="pg-label" style={{ marginLeft: 'auto', marginRight: '1.5rem' }}>{galleryItems[lightbox].label}</span>
                <span className="lightbox-counter">{lightbox + 1} / {galleryItems.length}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PatientGallery;
