import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-secondary text-primary">
      <div className="container footer-container">
        
        <div className="footer-col brand-col">
          <div className="footer-logo" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <Link to="/">
              <picture>
                <source srcSet="/logo.webp" type="image/webp" />
                <img src="/logo.png" alt="The DentalBrace Clinic and Implant Centre Bathinda — official logo, best dental clinic in Bathinda Punjab India" style={{ height: '48px', width: 'auto' }} loading="lazy" />
              </picture>
            </Link>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="logo-text">The DentalBrace</span>
              <span className="logo-subtext">Clinic & Implant Centre</span>
            </div>
          </div>
          <p className="footer-desc text-sm">
            Bathinda's leading multi-specialty dental centre. Proudly serving patients from Bathinda, Mansa, Sri Muktsar Sahib, Faridkot, Barnala, and across Punjab with premium digital dentistry.
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

        {/* Treatments Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Treatments</h4>
          <ul className="footer-links">
            <li><Link to="/treatments/dental-implants">Dental Implants</Link></li>
            <li><Link to="/treatments/invisalign">Invisalign & Aligners</Link></li>
            <li><Link to="/treatments/smile-makeover">Smile Makeover</Link></li>
            <li><Link to="/treatments/root-canal">Root Canal</Link></li>
            <li><Link to="/treatments/all-on-4">All-on-4 Implants</Link></li>
            <li><Link to="/treatments/teeth-whitening">Teeth Whitening</Link></li>
            <li><Link to="/treatments/veneers">Dental Veneers</Link></li>
            <li><Link to="/treatments/braces">Braces</Link></li>
          </ul>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/doctors/dr-sandeep-kumar">Dr. Sandeep Kumar</Link></li>
            <li><Link to="/doctors/dr-ritu-saneja">Dr. Ritu Saneja</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><a href="/#book">Book Appointment</a></li>
            <li><Link to="/gallery">Smile Gallery</Link></li>
            <li><Link to="/blog">Blog & Patient Hub</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
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
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/faq">FAQs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
