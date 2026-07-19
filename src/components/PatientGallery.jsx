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
    alt: 'Full Mouth Rehabilitation (FMI) treatment result at The DentalBrace Clinic Bathinda — patient Gurmail Singh from USA showing complete smile reconstruction with dental implants and zirconia crowns by Dr. Ritu Saneja Gold Medalist Prosthodontist, best full mouth rehabilitation clinic in Bathinda Punjab India',  
    label: 'Full Mouth Rehab',
    review: "I traveled from the USA to Bathinda specifically for my Full Mouth Rehabilitation (FMI) at The DentalBrace Clinic. Dr. Ritu Saneja and her team executed my complex full mouth reconstruction using dental implants and zirconia crowns flawlessly. The digital planning, clinical hygiene, and warm patient care were truly world-class. Excellent results!",
    reviewer: "Gurmail Singh (USA)"
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
    alt: 'Invisalign clear aligners orthodontic treatment result at The DentalBrace Clinic Bathinda — patient Dr. Keerat showing perfectly aligned teeth after clear aligner therapy by Dr. Sandeep Kumar MDS Orthodontist, best Invisalign specialist in Bathinda Punjab India',  
    label: 'Invisalign',
    review: "As a healthcare professional, I highly value precision and hygiene. Dr. Sandeep Kumar's expertise in Invisalign completely exceeded my expectations. The digital scanning process was seamless, and my clear aligner treatment in Bathinda was comfortable, discreet, and delivered perfect results!",
    reviewer: "Dr. Keerat"
  },
  { 
    id: 4,  
    src: '/patient-gallery/case-4.jpg', 
    alt: 'Dental veneers and implants treatment result by Dr. Ritu Saneja Gold Medalist Prosthodontist at The DentalBrace Clinic Bathinda — patient Ratandeep Kaur showing stunning smile transformation after cosmetic porcelain veneers and implants, best cosmetic dentistry clinic in Bathinda Punjab India',  
    label: 'Veneers & Implants',
    review: "Getting custom porcelain veneers and dental implants by Dr. Ritu Saneja completely transformed my smile. The digital planning was flawless, and the final results look incredibly natural and bright. Truly the best clinic for cosmetic smile makeovers and implants in Bathinda!",
    reviewer: "Ratandeep Kaur"
  },
  { 
    id: 5,  
    src: '/patient-gallery/case-5.jpg', 
    alt: 'Clear aligners orthodontic treatment result at The DentalBrace Clinic Bathinda — patient Uday P. showing beautifully straight teeth after clear aligner therapy by Dr. Sandeep Kumar MDS Orthodontist, best Invisalign provider in Bathinda Punjab India',  
    label: 'Clear Aligners',
    review: "Dr. Sandeep's clear aligner treatment completely transformed my smile with zero disruption to my daily life. The digital tracking was highly precise, and the aligners were virtually invisible. Truly exceptional orthodontic care in Bathinda!",
    reviewer: "Uday P."
  },
  { 
    id: 6,  
    src: '/patient-gallery/case-6.jpg', 
    alt: 'Maxillary obturator prosthesis treatment result at The DentalBrace Clinic Bathinda — patient Surinder S. showing improved quality of life after specialized prosthodontic rehabilitation by Dr. Ritu Saneja Gold Medalist Prosthodontist, best prosthodontist in Bathinda Punjab India',  
    label: 'Maxillary Obturator',
    review: "After my maxillary surgery, I needed a highly specialized prosthesis. Dr. Ritu Saneja crafted a custom maxillary obturator with absolute precision. Thanks to her exceptional prosthodontic expertise, I am finally able to breathe, eat, and speak properly again. Best prosthodontist in Bathinda!",
    reviewer: "Surinder S."
  },
  { 
    id: 7,  
    src: '/patient-gallery/case-7.jpg', 
    alt: 'Clear aligners orthodontic treatment result at The DentalBrace Clinic Bathinda — patient Piyush showing straight teeth after clear aligner therapy by Dr. Sandeep Kumar MDS Orthodontist, best Invisalign provider in Bathinda Punjab India',  
    label: 'Clear Aligners',
    review: "Choosing The DentalBrace Clinic for my clear aligner treatment was the best decision. Dr. Sandeep Kumar guided me flawlessly through the invisible aligner process. The treatment was extremely comfortable, highly effective, and completely transformed my smile without anyone noticing I was wearing aligners!",
    reviewer: "Piyush"
  },
  { 
    id: 8,  
    src: '/patient-gallery/case-8.jpg', 
    alt: 'Clear aligners orthodontic treatment result at The DentalBrace Clinic Bathinda — patient Dapinder Singh from Australia showing straight teeth after clear aligner therapy by Dr. Sandeep Kumar MDS Orthodontist, best Invisalign provider in Bathinda Punjab India',  
    label: 'Clear Aligners',
    review: "I traveled from Australia to Bathinda specifically for my clear aligner treatment with Dr. Sandeep Kumar. The process was incredibly smooth, and the aligners are so discreet that nobody even notices them. The clinic's international standards of care and Dr. Sandeep's orthodontic expertise are truly world-class. Highly recommended!",
    reviewer: "Dapinder Singh (Australia)"
  },
  { 
    id: 9,  
    src: '/patient-gallery/case-9.jpg', 
    alt: 'All-on-4 full mouth dental implants result at The DentalBrace Clinic Bathinda — patient showing complete arch fixed teeth after All-on-4 implants by Dr. Ritu Saneja Gold Medalist Implantologist, best All-on-4 clinic in Bathinda Punjab',  
    label: 'All-on-4 Implants',
    review: "The All-on-4 implants changed my life. I can eat everything normally now with fixed teeth. Truly a gold standard clinic for implantology.",
    reviewer: "Sushil Khurana"
  },
  { 
    id: 10, 
    src: '/patient-gallery/case-10.jpg', 
    alt: 'Dental implants and complete dentures treatment result at The DentalBrace Clinic Bathinda — patient Usha Rani showing fixed dentures by Dr. Ritu Saneja Gold Medalist Prosthodontist, best dental implants clinic in Bathinda Punjab India', 
    label: 'Implants & Dentures',
    review: "I received dental implants and custom dentures from Dr. Ritu Saneja. The precision of her work is exceptional. My new teeth feel completely natural, and I can eat and speak with total confidence again. Highly recommend The DentalBrace Clinic for anyone needing high-quality implants and dentures in Bathinda!",
    reviewer: "Usha Rani"
  },
];

const PatientGallery = () => {
  const sectionRef  = useRef(null);
  const headingRef  = useRef(null);
  const gridRef     = useRef(null);
  const cardsRef    = useRef([]);

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
              start: 'top 85%', // Trigger just as it comes into view
              once: true,
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

  const openLightbox  = (idx) => { setLightbox(idx); };
  const closeLightbox = ()    => setLightbox(null);
  const navLightbox   = (dir) => {
    setLightbox(prev => (prev + dir + galleryItems.length) % galleryItems.length);
  };

  // ── Lightbox keyboard nav ─────────────────────────────────────────────────
  useEffect(() => {
    if (lightbox === null) return;
    document.body.style.overflow = 'hidden'; // lock scroll

    const handleKey = (e) => {
      if (e.key === 'Escape')     closeLightbox();
      if (e.key === 'ArrowRight') navLightbox(1);
      if (e.key === 'ArrowLeft')  navLightbox(-1);
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = 'auto'; // unlock scroll
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightbox]);

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
                <picture>
                  <source
                    srcSet={item.src.replace(/\.(jpg|jpeg|png)$/i, '.webp')}
                    type="image/webp"
                  />
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    title={`${item.label} — The DentalBrace Clinic Bathinda`}
                    className="pg-img" 
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
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
            <picture>
              <source
                srcSet={galleryItems[lightbox].src.replace(/\.(jpg|jpeg|png)$/i, '.webp')}
                type="image/webp"
              />
              <img
                src={galleryItems[lightbox].src}
                alt={galleryItems[lightbox].alt}
                className="lightbox-img"
                decoding="async"
              />
            </picture>
            
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
