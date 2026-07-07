import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Loader.css';

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    try {
      const tl = gsap.timeline({
        onComplete: onComplete
      });

      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" });
      
      tl.to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      })
      .to(lineRef.current, {
        scaleX: 1,
        duration: 0.6,
        ease: "power2.inOut"
      })
      .to(logoRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in"
      }, "+=0.1")
      .to(loaderRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut"
      });
    } catch (e) {
      // If GSAP fails on any device, immediately call onComplete
      // so the app never stays invisible
      onComplete();
    }
  }, [onComplete]);

  return (
    <div className="loader-container" ref={loaderRef}>
      <div className="loader-content">
        <div className="loader-logo" ref={logoRef} style={{ opacity: 0, transform: 'translateY(20px)' }}>
          <img src="/logo.png" alt="The DentalBrace Clinic Logo" className="loader-logo-img" />
          <h2>The DentalBrace</h2>
          <p>Clinic & Implant Centre</p>
        </div>
        <div className="loader-line-container">
          <div className="loader-line" ref={lineRef}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
