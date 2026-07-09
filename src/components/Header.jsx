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
              <a href="#top" className="nav-link" onClick={handleNavClick}>Home</a>
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
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ marginBottom: '2px' }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          WhatsApp
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
