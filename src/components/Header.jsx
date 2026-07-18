import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
              <Link to="/" onClick={handleNavClick} className="logo-link" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <img src="/logo.png" alt="The DentalBrace Clinic and Implant Centre logo — Best Dental Clinic in Bathinda Punjab, Dr. Sandeep Kumar Orthodontist Dr. Ritu Saneja Implantologist" className="logo-img" style={{ height: '80px', width: 'auto', mixBlendMode: 'multiply' }} />
                <div className="logo-text-wrapper" style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className="logo-text">The DentalBrace</span>
                  <span className="logo-subtext">Clinic & Implant Centre</span>
                </div>
              </Link>
            </div>

            <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <div className={`nav-links ${isMenuOpen ? 'open glass' : ''}`}>
              <Link to="/" className="nav-link" onClick={handleNavClick}>Home</Link>
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
                        <Link to="/treatments/root-canal" onClick={handleNavClick}>Root Canal Treatment</Link>
                        <Link to="/treatments/dental-crown-bridge" onClick={handleNavClick}>Dental Crown & Bridge</Link>
                        <Link to="/treatments/gum-treatment" onClick={handleNavClick}>Gum Treatment & Scaling</Link>
                        <Link to="/treatments/wisdom-tooth-removal" onClick={handleNavClick}>Wisdom Tooth Removal</Link>
                        <Link to="/treatments/digital-dentistry" onClick={handleNavClick}>General Checkup</Link>
                      </div>
                      <div className="mega-column">
                        <h4>Orthodontics</h4>
                        <Link to="/treatments/invisalign" onClick={handleNavClick}>Invisalign & Clear Aligners</Link>
                        <Link to="/treatments/braces" onClick={handleNavClick}>Traditional Braces</Link>
                        <Link to="/treatments/kids-dentistry" onClick={handleNavClick}>Kids Dentistry</Link>
                      </div>
                      <div className="mega-column">
                        <h4>Implantology</h4>
                        <Link to="/treatments/dental-implants" onClick={handleNavClick}>Dental Implants</Link>
                        <Link to="/treatments/all-on-4" onClick={handleNavClick}>All-on-4 / All-on-6</Link>
                      </div>
                      <div className="mega-column">
                        <h4>Cosmetic Dentistry</h4>
                        <Link to="/treatments/smile-makeover" onClick={handleNavClick}>Smile Makeover</Link>
                        <Link to="/treatments/veneers" onClick={handleNavClick}>Dental Veneers</Link>
                        <Link to="/treatments/teeth-whitening" onClick={handleNavClick}>Teeth Whitening</Link>
                        <Link to="/treatments/composite-bonding" onClick={handleNavClick}>Composite Bonding</Link>
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
                        <Link to="/treatments/digital-dentistry" onClick={handleNavClick}>Digital Dentistry Overview</Link>
                        <Link to="/treatments/3d-intraoral-scanner" onClick={handleNavClick}>3D Intraoral Scanner</Link>
                        <Link to="/treatments/smile-designing" onClick={handleNavClick}>Digital Smile Design</Link>
                      </div>
                      <div className="mega-column">
                        <div className="mega-promo" style={{background: 'var(--secondary-bg)', padding: '1rem', borderRadius: 'var(--radius-md)'}}>
                          <h4>Experience the Future</h4>
                          <p className="text-secondary text-sm">Our advanced digital workflow ensures precision and comfort.</p>
                          <Link to="/treatments/digital-dentistry" className="text-accent" onClick={handleNavClick} style={{display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.5rem', fontWeight: 600}}>Explore Technology <ArrowRight size={14}/></Link>
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
                          <Link to="/doctors/dr-sandeep-kumar" onClick={handleNavClick}>Dr. Sandeep Kumar — Orthodontist</Link>
                          <Link to="/doctors/dr-ritu-saneja" onClick={handleNavClick}>Dr. Ritu Saneja — Prosthodontist</Link>
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
                          <a href="/#patient-gallery" onClick={handleNavClick}>Patient Gallery</a>
                          <a href="/#clinic-tour" onClick={handleNavClick}>Clinic Tour</a>
                          <a href="/#testimonials" onClick={handleNavClick}>Reviews & Testimonials</a>
                       </div>
                       <div className="mega-column">
                          <a href="/#faq" onClick={handleNavClick}>FAQs</a>
                          <a href="/#book" onClick={handleNavClick}>Book Appointment</a>
                          <a href="/#contact" onClick={handleNavClick}>Contact Us</a>
                       </div>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/about" className="nav-link" onClick={handleNavClick}>About</Link>
              <Link to="/blog" className="nav-link" onClick={handleNavClick}>Blog</Link>
              <Link to="/contact" className="nav-link" onClick={handleNavClick}>Contact</Link>
              
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
