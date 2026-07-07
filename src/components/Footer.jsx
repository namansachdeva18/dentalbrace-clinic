import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-secondary text-primary">
      <div className="container footer-container">
        
        <div className="footer-col brand-col">
          <div className="footer-logo" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <img src="/logo.png" alt="The DentalBrace Clinic and Implant Centre Bathinda — official logo, best dental clinic in Bathinda Punjab India" style={{ height: '48px', width: 'auto' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="logo-text">The DentalBrace</span>
              <span className="logo-subtext">Clinic & Implant Centre</span>
            </div>
          </div>
          <p className="footer-desc">
            Bathinda's leading multi-specialty dental centre offering premium care with state-of-the-art digital dentistry. Your smile is our passion.
          </p>
          <div className="social-links">
            <a 
              href="https://www.instagram.com/thedentalbrace_bathinda?igsh=MWhxaXNpejU5bjFhdw==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link instagram-link" 
              aria-label="Instagram"
              title="Follow us on Instagram"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="22" 
                height="22" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Treatments</h4>
          <ul className="footer-links">
            <li><a href="#services">Dental Implants</a></li>
            <li><a href="#services">Invisible Braces</a></li>
            <li><a href="#services">Smile Designing</a></li>
            <li><a href="#services">Root Canal</a></li>
            <li><a href="#services">Full Mouth Rehab</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#specialists">Our Specialists</a></li>
            <li><a href="#gallery">Smile Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h4 className="footer-heading">Get in Touch</h4>
          <ul className="footer-contact-list">
            <li>
              <MapPin size={20} className="text-accent" />
              <span>Bibi Wala Road, Bathinda, Punjab</span>
            </li>
            <li>
              <Phone size={20} className="text-accent" />
              <a href="tel:7496849392">+91 74968-49392</a>
            </li>
            <li>
              <Mail size={20} className="text-accent" />
              <a href="mailto:thedentalbrace2019@gmail.com">thedentalbrace2019@gmail.com</a>
            </li>
            <li>
              <Clock size={20} className="text-accent" />
              <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} The DentalBrace Clinic & Implant Centre. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
