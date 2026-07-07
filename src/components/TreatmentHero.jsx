import { Calendar, Phone, MessageCircle, ChevronRight, Activity, Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './TreatmentHero.css';

const TreatmentHero = ({ data }) => {
  return (
    <section 
      className="treatment-hero section-padding" 
      style={{
        backgroundColor: 'var(--bg-navy)',
        backgroundImage: `linear-gradient(to right, rgba(15, 61, 62, 0.95) 0%, rgba(15, 61, 62, 0.8) 50%, rgba(15, 61, 62, 0.4) 100%), url(${data.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container treatment-hero-layout">
        
        {/* Left Content Area */}
        <div className="treatment-hero-content">
          {/* Breadcrumb */}
          <nav className="hero-breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <ChevronRight size={14} className="breadcrumb-separator" />
            <Link to="/treatments" className="breadcrumb-link">Treatments</Link>
            <ChevronRight size={14} className="breadcrumb-separator" />
            <span className="breadcrumb-current">{data.title}</span>
          </nav>

          <h1 className="heading-primary text-white mb-6">{data.title}</h1>
          <p className="hero-intro text-lg opacity-90 mb-8">{data.subtitle}</p>
          
          <div className="hero-cta-group">
            <a href="#book" className="btn btn-primary"><Calendar size={20} /> Book Appointment</a>
            <a href="tel:7496849392" className="btn btn-outline glass text-white"><Phone size={20} /> Call Now</a>
            <a href="https://api.whatsapp.com/send/?phone=917496849392&text=Hi%21%20I%20would%20like%20to%20book%20an%20appointment%20at%20The%20DentalBrace%20Clinic." target="_blank" rel="noreferrer" className="btn btn-whatsapp"><MessageCircle size={20} /> WhatsApp</a>
          </div>
        </div>

        {/* Right Floating Cards Area */}
        <div className="treatment-hero-cards">
          <div className="floating-card glass hover-elevate">
            <div className="card-icon-wrapper"><Clock size={24} className="text-accent" /></div>
            <div className="card-info">
              <span className="card-label">Duration</span>
              <strong className="card-value">{data.duration}</strong>
            </div>
          </div>
          
          <div className="floating-card glass hover-elevate">
            <div className="card-icon-wrapper"><Activity size={24} className="text-accent" /></div>
            <div className="card-info">
              <span className="card-label">Recovery</span>
              <strong className="card-value">{data.recovery}</strong>
            </div>
          </div>
          
          <div className="floating-card glass hover-elevate">
            <div className="card-icon-wrapper"><Zap size={24} className="text-accent" /></div>
            <div className="card-info">
              <span className="card-label">Pain Level</span>
              <strong className="card-value">Minimal to None</strong>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default TreatmentHero;
