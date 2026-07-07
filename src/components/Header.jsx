import { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Menu, X, ChevronDown, Search, ArrowRight } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleMouseEnter = (menu) => {
    if(window.innerWidth > 992) setActiveMegaMenu(menu);
  };
  
  const handleMouseLeave = () => {
    if(window.innerWidth > 992) setActiveMegaMenu(null);
  };

  const handleClickMenu = (menu) => {
    if(window.innerWidth <= 992) {
      setActiveMegaMenu(activeMegaMenu === menu ? null : menu);
    }
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setActiveMegaMenu(null);
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled bg-white shadow-soft' : ''}`} onMouseLeave={handleMouseLeave}>
        <div className={`top-bar ${scrolled ? 'hidden' : ''} bg-cream text-secondary`}>
          <div className="container top-bar-content">
            <div className="top-bar-item">
              <MapPin size={16} />
              <span>Bathinda, Punjab</span>
            </div>
            <div className="top-bar-item">
              <Clock size={16} />
              <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
            </div>
            <div className="top-bar-item contact-item hide-on-mobile">
              <Phone size={16} />
              <a href="tel:7496849392" className="font-semibold">+91 74968-49392</a>
            </div>
          </div>
        </div>

        <nav className="main-nav">
          <div className="container nav-content">
            <div className="logo">
              <a href="#top" onClick={handleNavClick} className="logo-link" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <img src="/logo.png" alt="The DentalBrace Clinic and Implant Centre logo — Best Dental Clinic in Bathinda Punjab, Dr. Sandeep Kumar Orthodontist Dr. Ritu Saneja Implantologist" className="logo-img" style={{ height: '80px', width: 'auto', mixBlendMode: 'multiply' }} />
                <div className="logo-text-wrapper" style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className="logo-text">The DentalBrace</span>
                  <span className="logo-subtext">Clinic & Implant Centre</span>
                </div>
              </a>
            </div>

            <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <div className={`nav-links ${isMenuOpen ? 'open glass' : ''}`}>
              <div 
                className="nav-item" 
                onMouseEnter={() => handleMouseEnter('treatments')}
              >
                <span className="nav-link" onClick={() => handleClickMenu('treatments')}>Treatments <ChevronDown size={14} /></span>
                {activeMegaMenu === 'treatments' && (
                  <div className="mega-menu glass shadow-soft">
                    <div className="mega-menu-grid">
                      <div className="mega-column">
                        <h4>General Dentistry</h4>
                        <a href="#treatments" onClick={handleNavClick}>Dental Checkup</a>
                        <a href="#treatments" onClick={handleNavClick}>Dental Cleaning</a>
                        <a href="#treatments" onClick={handleNavClick}>Root Canal Treatment</a>
                        <a href="#treatments" onClick={handleNavClick}>Tooth Extraction</a>
                      </div>
                      <div className="mega-column">
                        <h4>Orthodontics</h4>
                        <a href="#invisalign" onClick={handleNavClick}>Invisalign Aligners</a>
                        <a href="#invisalign" onClick={handleNavClick}>Clear Aligners</a>
                        <a href="#invisalign" onClick={handleNavClick}>Traditional Braces</a>
                      </div>
                      <div className="mega-column">
                        <h4>Implantology</h4>
                        <a href="#implants" onClick={handleNavClick}>Single Tooth Implant</a>
                        <a href="#implants" onClick={handleNavClick}>Full Mouth Implants</a>
                        <a href="#implants" onClick={handleNavClick}>All-on-4 / All-on-6</a>
                      </div>
                      <div className="mega-column">
                        <h4>Cosmetic Dentistry</h4>
                        <a href="#smile-makeover" onClick={handleNavClick}>Smile Makeover</a>
                        <a href="#smile-makeover" onClick={handleNavClick}>Dental Veneers</a>
                        <a href="#smile-makeover" onClick={handleNavClick}>Teeth Whitening</a>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div 
                className="nav-item"
                onMouseEnter={() => handleMouseEnter('digital')}
              >
                <span className="nav-link" onClick={() => handleClickMenu('digital')}>Digital Dentistry <ChevronDown size={14} /></span>
                {activeMegaMenu === 'digital' && (
                  <div className="mega-menu glass shadow-soft">
                    <div className="mega-menu-grid two-col">
                      <div className="mega-column">
                        <a href="#digital" onClick={handleNavClick}>Intraoral Scanner</a>
                        <a href="#digital" onClick={handleNavClick}>Digital Smile Design</a>
                        <a href="#digital" onClick={handleNavClick}>Laser Dentistry</a>
                      </div>
                      <div className="mega-column">
                        <div className="mega-promo" style={{background: 'var(--secondary-bg)', padding: '1rem', borderRadius: 'var(--radius-md)'}}>
                          <h4>Experience the Future</h4>
                          <p className="text-secondary text-sm">Our advanced digital workflow ensures precision and comfort.</p>
                          <a href="#digital" className="text-accent" onClick={handleNavClick} style={{display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.5rem', fontWeight: 600}}>Explore Technology <ArrowRight size={14}/></a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="nav-item" onMouseEnter={() => handleMouseEnter('specialists')}>
                <span className="nav-link" onClick={() => handleClickMenu('specialists')}>Specialists <ChevronDown size={14} /></span>
                {activeMegaMenu === 'specialists' && (
                  <div className="mega-menu glass shadow-soft">
                    <div className="mega-menu-grid two-col">
                       <div className="mega-column">
                          <a href="#specialists" onClick={handleNavClick}>Dr. Sandeep Kumar — Orthodontist</a>
                          <a href="#specialists" onClick={handleNavClick}>Dr. Ritu Saneja — Prosthodontist</a>
                          <a href="#specialists" onClick={handleNavClick}>Meet Our Full Team</a>
                       </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="nav-item" onMouseEnter={() => handleMouseEnter('patients')}>
                 <span className="nav-link" onClick={() => handleClickMenu('patients')}>Patients <ChevronDown size={14} /></span>
                 {activeMegaMenu === 'patients' && (
                  <div className="mega-menu glass shadow-soft">
                    <div className="mega-menu-grid">
                       <div className="mega-column">
                          <a href="#gallery" onClick={handleNavClick}>Patient Gallery</a>
                          <a href="#clinic-gallery" onClick={handleNavClick}>Clinic Tour</a>
                          <a href="#testimonials" onClick={handleNavClick}>Reviews &amp; Testimonials</a>
                       </div>
                       <div className="mega-column">
                          <a href="#faq" onClick={handleNavClick}>FAQs</a>
                          <a href="#book" onClick={handleNavClick}>Book Appointment</a>
                       </div>
                    </div>
                  </div>
                )}
              </div>

              <a href="#about" className="nav-link" onClick={handleNavClick}>About</a>
              <a href="#contact" className="nav-link" onClick={handleNavClick}>Contact</a>
              
              <a href="#book" className="btn btn-primary nav-cta magnetic" onClick={handleNavClick} style={{ whiteSpace: 'nowrap' }}>Book Appointment</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Sticky Bottom Bar */}
      <div className="mobile-bottom-bar">
        <a href="tel:7496849392" className="bottom-bar-item">
          <Phone size={20} /> Call
        </a>
        <a href="https://api.whatsapp.com/send/?phone=917496849392&text=Hi%21%20I%20would%20like%20to%20book%20an%20appointment%20at%20The%20DentalBrace%20Clinic." className="bottom-bar-item text-whatsapp">
          <span style={{fontWeight: 'bold'}}>W</span> WhatsApp
        </a>
        <a href="https://maps.app.goo.gl/uksfFySwX9RL5uu56?g_st=iw" target="_blank" rel="noopener noreferrer" className="bottom-bar-item">
          <MapPin size={20} /> Directions
        </a>
        <a href="#book" className="bottom-bar-item primary-bg">
          Book
        </a>
      </div>
    </>
  );
};

export default Header;
