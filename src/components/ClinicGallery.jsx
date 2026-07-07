import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, ChevronLeft, ChevronRight, ImagePlus, Pause, Play } from 'lucide-react';
import './ClinicGallery.css';

gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────────────────────────────────────────────────
   10 clinic photo slots.
   To add a real photo, replace `src: null` with the path, e.g.:
     src: '/clinic/reception.jpg'
   ────────────────────────────────────────────────────────────────── */
const clinicSlides = [
  { id: 1,  src: '/clinic-gallery/clinic-1.jpg', caption: 'Reception & Waiting Lounge',    alt: 'Premium reception and waiting lounge at The DentalBrace Clinic Bibi Wala Road Bathinda — comfortable modern patient waiting area with elegant interior design', hint: 'Premium waiting area' },
  { id: 2,  src: '/clinic-gallery/clinic-2.jpg', caption: 'Dental Treatment Chair',         alt: 'State-of-the-art dental treatment chair and operatory unit at The DentalBrace Clinic Bathinda — advanced computerised dental equipment for painless precision treatment', hint: 'State-of-the-art chair unit' },
  { id: 3,  src: '/clinic-gallery/clinic-3.jpg', caption: 'Digital X-Ray Suite',           alt: 'Digital X-ray and OPG suite at The DentalBrace Clinic Bathinda — advanced RVG dental radiography technology for accurate diagnosis with minimum radiation exposure', hint: 'Advanced imaging technology' },
  { id: 4,  src: '/clinic-gallery/clinic-4.jpg', caption: 'Orthodontics Consultation Room', alt: 'Orthodontics consultation room of Dr. Sandeep Kumar MDS Orthodontist at The DentalBrace Clinic Bathinda — dedicated space for Invisalign clear aligner and braces treatment planning', hint: 'Dr. Sandeep Kumar\'s cabin' },
  { id: 5,  src: '/clinic-gallery/clinic-5.jpg', caption: 'Implantology OT',               alt: 'Sterile implantology operation theatre at The DentalBrace Clinic Bathinda — hospital-grade surgical suite used by Dr. Ritu Saneja for dental implant procedures and oral surgery in Punjab', hint: 'Sterile surgical suite' },
  { id: 6,  src: '/clinic-gallery/clinic-6.jpg', caption: 'Digital Smile Lab',             alt: 'Digital smile design lab at The DentalBrace Clinic Bathinda — iTero intraoral scanner and CAD/CAM design suite for precision cosmetic dentistry smile makeovers and veneer fabrication', hint: 'Intraoral scanner & design suite' },
  { id: 7,  src: '/clinic-gallery/clinic-7.jpg', caption: 'Sterilisation Unit',            alt: 'Hospital-grade autoclave sterilisation unit at The DentalBrace Clinic Bathinda — Class B autoclave and infection control protocol ensuring maximum patient safety and hygiene standards', hint: 'Hospital-grade autoclave zone' },
  { id: 8,  src: '/clinic-gallery/clinic-8.jpg', caption: 'Kids\' Dentistry Area',          alt: 'Child-friendly kids dentistry area at The DentalBrace Clinic Bathinda — specially designed colourful and comfortable treatment room for paediatric dental care making dental visits fun for children', hint: 'Child-friendly treatment space' },
  { id: 9,  src: '/clinic-gallery/clinic-9.jpg', caption: 'Clinic Exterior & Signage',     alt: 'Exterior view and signage of The DentalBrace Clinic and Implant Centre on Bibi Wala Road Bathinda Punjab — landmark dental clinic building easy to locate for patients across Bathinda and surrounding areas', hint: 'Our landmark on Bibi Wala Road' },
  { id: 10, src: '/clinic-gallery/clinic-10.jpg', caption: 'Team at Work',                  alt: 'Dr. Sandeep Kumar and Dr. Ritu Saneja dental team at work performing treatment at The DentalBrace Clinic Bathinda — AIIMS-trained specialist dentists providing expert patient care in Punjab', hint: 'Dr. Sandeep & Dr. Ritu in action' },
];

const TOTAL   = clinicSlides.length;
const AUTO_MS = 3500; // auto-rotate interval (ms)

const ClinicGallery = () => {
  const sectionRef  = useRef(null);
  const headingRef  = useRef(null);
  const trackRef    = useRef(null);
  const dotsRef     = useRef(null);
  const timerRef    = useRef(null);

  const [active,  setActive]  = useState(0);
  const [playing, setPlaying] = useState(true);
  const [entered, setEntered] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  // Touch swipe state
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleImageError = useCallback((id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  }, []);

  /* ── Navigate ────────────────────────────────────────────── */
  const goTo = useCallback((idx) => {
    setActive(((idx % TOTAL) + TOTAL) % TOTAL);
  }, []);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  /* ── Auto-rotate ─────────────────────────────────────────── */
  useEffect(() => {
    if (!playing) return;
    timerRef.current = setInterval(next, AUTO_MS);
    return () => clearInterval(timerRef.current);
  }, [playing, next]);

  /* ── GSAP coverflow update on active change ──────────────── */
  useEffect(() => {
    if (!trackRef.current || !entered) return;

    const cards = trackRef.current.querySelectorAll('.cgal-card');
    cards.forEach((card, i) => {
      const offset = i - active;
      const absOff = Math.abs(offset);
      const sign   = offset < 0 ? -1 : offset > 0 ? 1 : 0;

      gsap.to(card, {
        x:          offset * 310,
        z:          absOff === 0 ? 0 : absOff === 1 ? -120 : -240,
        rotationY:  sign * (absOff === 0 ? 0 : absOff === 1 ? 28 : 40),
        scale:      absOff === 0 ? 1 : absOff === 1 ? 0.82 : 0.65,
        opacity:    absOff === 0 ? 1 : absOff === 1 ? 0.75 : absOff === 2 ? 0.45 : 0,
        zIndex:     10 - absOff,
        duration:   0.6,
        ease:       'power3.out',
        transformOrigin: '50% 50%',
      });
    });

    // Animate dots
    const dots = dotsRef.current?.querySelectorAll('.cgal-dot');
    dots?.forEach((dot, i) => {
      gsap.to(dot, {
        width:   i === active ? 28 : 8,
        opacity: i === active ? 1  : 0.4,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  }, [active, entered]);

  /* ── Entrance animation on scroll ───────────────────────── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
      gsap.fromTo(headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%', once: true }
        }
      );

      // Carousel track
      ScrollTrigger.create({
        trigger: trackRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          setEntered(true);
          gsap.fromTo(trackRef.current,
            { opacity: 0, y: 80 },
            { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out' }
          );
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  /* ── Keyboard nav ────────────────────────────────────────── */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next]);

  /* ── Touch swipe handlers ────────────────────────────────── */
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  
  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  
  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swiped left
      next();
      setPlaying(false);
    }
    if (touchStartX.current - touchEndX.current < -50) {
      // Swiped right
      prev();
      setPlaying(false);
    }
  };

  return (
    <section
      id="clinic-gallery"
      className="cgal-section"
      ref={sectionRef}
      aria-label="Clinic Gallery — The DentalBrace Clinic & Implant Centre Bathinda"
    >
      {/* ── Background decoration ──────────────────────────── */}
      <div className="cgal-bg-glow cgal-bg-glow--left"  />
      <div className="cgal-bg-glow cgal-bg-glow--right" />

      <div className="container">

        {/* ── Heading ────────────────────────────────────────── */}
        <div className="cgal-heading" ref={headingRef}>
          <span className="section-badge">
            <Building2 size={15} /> Tour Our Clinic
          </span>
          <h2 className="heading-primary mt-4">
            Inside The <span className="cgal-accent">DentalBrace</span> Clinic
          </h2>
          <p className="cgal-sub">
            Step inside our premium, hygienic, and technology-forward facility —
            designed to make your dental experience stress-free and exceptional.
          </p>
        </div>

        {/* ── 3D Coverflow Carousel ─────────────────────────── */}
        <div className="cgal-stage">

          {/* Prev button */}
          <button
            className="cgal-nav cgal-nav--prev"
            onClick={() => { prev(); setPlaying(false); }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Track */}
          <div
            className="cgal-track"
            ref={trackRef}
            style={{ perspective: '1000px', touchAction: 'pan-y' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="cgal-inner">
              {clinicSlides.map((slide, i) => (
                <div
                  key={slide.id}
                  className={`cgal-card ${i === active ? 'cgal-card--active' : ''}`}
                  onClick={() => { goTo(i); setPlaying(false); }}
                  style={{
                    zIndex: 10 - Math.abs(i - active),
                    opacity: Math.abs(i - active) > 2 ? 0 : 1,
                  }}
                >
                  {slide.src && !imageErrors[slide.id] ? (
                    <img
                      src={slide.src}
                      alt={slide.alt || slide.caption}
                      className="cgal-img"
                      loading="lazy"
                      onError={() => handleImageError(slide.id)}
                    />
                  ) : (
                    <div className="cgal-placeholder">
                      <div className="cgal-ph-icon">
                        <ImagePlus size={34} />
                      </div>
                      <span className="cgal-ph-num">
                        {String(slide.id).padStart(2, '0')}
                      </span>
                      <span className="cgal-ph-caption">{slide.caption}</span>
                      <span className="cgal-ph-hint">{slide.hint}</span>
                    </div>
                  )}

                  {/* Caption overlay (visible when active) */}
                  <div className="cgal-caption">
                    <span className="cgal-caption-label">{slide.caption}</span>
                    <span className="cgal-caption-num">{slide.id} / {TOTAL}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next button */}
          <button
            className="cgal-nav cgal-nav--next"
            onClick={() => { next(); setPlaying(false); }}
            aria-label="Next photo"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* ── Dots + Controls ────────────────────────────────── */}
        <div className="cgal-controls">

          {/* Dot indicators */}
          <div className="cgal-dots" ref={dotsRef}>
            {clinicSlides.map((_, i) => (
              <button
                key={i}
                className={`cgal-dot ${i === active ? 'cgal-dot--active' : ''}`}
                onClick={() => { goTo(i); setPlaying(false); }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Play/Pause */}
          <button
            className="cgal-playpause"
            onClick={() => setPlaying(p => !p)}
            aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
          >
            {playing
              ? <><Pause size={14} /> Auto-playing</>
              : <><Play  size={14} /> Paused</>
            }
          </button>
        </div>

        {/* ── Caption strip ──────────────────────────────────── */}
        <div className="cgal-strip">
          <span className="cgal-strip-num">{String(active + 1).padStart(2, '0')}</span>
          <span className="cgal-strip-sep" />
          <span className="cgal-strip-label">{clinicSlides[active].caption}</span>
          <span className="cgal-strip-hint">{clinicSlides[active].hint}</span>
        </div>

      </div>
    </section>
  );
};

export default ClinicGallery;
