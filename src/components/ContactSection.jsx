import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, User, Stethoscope, MessageSquare, Navigation, Loader2, CheckCircle2 } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "47caca69-8b06-48fb-a428-1cc00e6b99ec",
          subject: "New Contact Request from Website",
          from_name: "DentalBrace Website Contact",
          Name: formData.name,
          Phone: formData.phone,
          Treatment: formData.treatment || 'Not specified',
          Message: formData.message || 'No message provided'
        }),
      });
      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: '', phone: '', treatment: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000); // Reset after 5 seconds
      } else {
        alert("Something went wrong. Please try calling us instead.");
      }
    } catch (error) {
      alert("Something went wrong. Please try calling us instead.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" style={{ position: 'relative', width: '100%', minHeight: '800px', display: 'flex', alignItems: 'center' }}>
      
      {/* Background Map */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
        <iframe 
          src="https://maps.google.com/maps?q=The+DentalBrace+Clinic,+Bibi+Wala+Road,+Bathinda&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'contrast(1.1) opacity(0.8)' }} 
          allowFullScreen="" 
          loading="lazy" 
          title="Clinic Location"
        ></iframe>
        {/* Overlay to ensure readability */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(255, 249, 241, 0.6)', backdropFilter: 'blur(4px)' }}></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '4rem 0' }}>
        <div className="text-center mb-12">
          <span className="section-badge" style={{ backgroundColor: 'white', boxShadow: 'var(--shadow-sm)' }}>Get in Touch</span>
          <h2 className="heading-primary mt-4" style={{ color: 'var(--text-primary)', textShadow: '0 2px 10px rgba(255,255,255,0.8)' }}>We're Here for Your Smile</h2>
          <p className="max-w-2xl mx-auto mt-4" style={{ color: 'var(--text-primary)', fontWeight: '500', textShadow: '0 1px 4px rgba(255,255,255,0.8)' }}>
            Visit our premium facility or book an appointment online. We are ready to assist you.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'stretch', maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Left Panel: Contact Info (Navy Theme) */}
          <div className="contact-info p-8" style={{ 
            backgroundColor: '#0F3D3E', 
            color: 'white',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
            display: 'flex', flexDirection: 'column'
          }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '2rem', color: '#FFF9F1' }}>Clinic Details</h3>
            
            <ul className="contact-list" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', flexGrow: 1 }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <MapPin color="var(--accent-color)" size={28} className="flex-shrink-0 mt-1" />
                <div>
                  <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.25rem', color: '#FFF9F1' }}>Address</strong>
                  <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>Bibi Wala Road, Opp. HP Petrol Pump,<br/>Near LIC Office, BATHINDA</p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <Phone color="var(--accent-color)" size={28} className="flex-shrink-0 mt-1" />
                <div>
                  <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.25rem', color: '#FFF9F1' }}>Phone / Emergency</strong>
                  <a href="tel:7496849392" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '1.1rem', letterSpacing: '0.5px' }}>74968-49392</a>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <Mail color="var(--accent-color)" size={28} className="flex-shrink-0 mt-1" />
                <div>
                  <strong style={{ fontSize: '1.1rem', display: 'block', marginBottom: '0.25rem', color: '#FFF9F1' }}>Email</strong>
                  <a href="mailto:thedentalbrace2019@gmail.com" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>thedentalbrace2019@gmail.com</a>
                </div>
              </li>
            </ul>

            <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="https://api.whatsapp.com/send/?phone=917496849392&text=Hi%21%20I%20would%20like%20to%20book%20an%20appointment%20at%20The%20DentalBrace%20Clinic." style={{ 
                display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem',
                width: '100%', padding: '1rem', 
                backgroundColor: '#25D366', color: 'white', 
                borderRadius: 'var(--radius-md)', fontWeight: 'bold', 
                textDecoration: 'none', transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}
              >
                <MessageSquare size={20} /> Chat on WhatsApp
              </a>
              
              <a href="https://maps.app.goo.gl/uksfFySwX9RL5uu56?g_st=iw" target="_blank" rel="noopener noreferrer" style={{ 
                display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem',
                width: '100%', padding: '1rem', 
                backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', 
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 'var(--radius-md)', fontWeight: 'bold', 
                textDecoration: 'none', transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; }}
              >
                <Navigation size={20} /> Get Directions to Clinic
              </a>
            </div>
          </div>

          {/* Right Panel: Contact Form (Ivory Theme) */}
          <div className="contact-form-container p-8" style={{ 
            backgroundColor: '#FFF9F1', 
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
            border: '1px solid rgba(255,255,255,0.5)'
          }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '2rem', color: 'var(--text-primary)' }}>Request Appointment</h3>
            <form className="contact-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              <div style={{ position: 'relative' }}>
                <User size={18} style={{ color: 'var(--text-secondary)', position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{ width: '100%', padding: '1.1rem 1rem 1.1rem 44px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)', backgroundColor: 'white', color: 'var(--text-primary)', outline: 'none', transition: 'all 0.3s ease' }} 
                  onFocus={(e) => { e.target.style.borderColor = 'var(--accent-color)'; e.target.style.boxShadow = '0 0 0 3px rgba(245, 130, 32, 0.1)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(0,0,0,0.1)'; e.target.style.boxShadow = 'none'; }}
                  required 
                />
              </div>

              <div style={{ position: 'relative' }}>
                <Phone size={18} style={{ color: 'var(--text-secondary)', position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  style={{ width: '100%', padding: '1.1rem 1rem 1.1rem 44px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)', backgroundColor: 'white', color: 'var(--text-primary)', outline: 'none', transition: 'all 0.3s ease' }} 
                  onFocus={(e) => { e.target.style.borderColor = 'var(--accent-color)'; e.target.style.boxShadow = '0 0 0 3px rgba(245, 130, 32, 0.1)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(0,0,0,0.1)'; e.target.style.boxShadow = 'none'; }}
                  required 
                />
              </div>

              <div style={{ position: 'relative' }}>
                <Stethoscope size={18} style={{ color: 'var(--text-secondary)', position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                <select 
                  value={formData.treatment}
                  onChange={(e) => setFormData({...formData, treatment: e.target.value})}
                  style={{ width: '100%', padding: '1.1rem 1rem 1.1rem 44px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)', backgroundColor: 'white', color: 'var(--text-primary)', outline: 'none', transition: 'all 0.3s ease', appearance: 'none', cursor: 'pointer' }}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--accent-color)'; e.target.style.boxShadow = '0 0 0 3px rgba(245, 130, 32, 0.1)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(0,0,0,0.1)'; e.target.style.boxShadow = 'none'; }}
                >
                  <option value="">Select Treatment</option>
                  <option value="Dental Implants">Dental Implants</option>
                  <option value="Braces / Invisalign">Braces / Invisalign</option>
                  <option value="General Checkup">General Checkup</option>
                  <option value="Emergency">Emergency</option>
                </select>
              </div>

              <div style={{ position: 'relative' }}>
                <MessageSquare size={18} style={{ color: 'var(--text-secondary)', position: 'absolute', left: '16px', top: '1.25rem' }} />
                <textarea 
                  placeholder="How can we help you?" 
                  rows="4" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  style={{ width: '100%', padding: '1.1rem 1rem 1.1rem 44px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)', backgroundColor: 'white', color: 'var(--text-primary)', outline: 'none', transition: 'all 0.3s ease', resize: 'vertical' }}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--accent-color)'; e.target.style.boxShadow = '0 0 0 3px rgba(245, 130, 32, 0.1)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(0,0,0,0.1)'; e.target.style.boxShadow = 'none'; }}
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting || isSuccess}
                style={{ 
                  display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem',
                  width: '100%', padding: '1.1rem', marginTop: '0.5rem',
                  backgroundColor: isSuccess ? '#10B981' : 'var(--accent-color)', 
                  color: 'white', 
                  border: 'none', borderRadius: 'var(--radius-md)', 
                  fontWeight: 'bold', fontSize: '1rem', 
                  cursor: (isSubmitting || isSuccess) ? 'default' : 'pointer',
                  transition: 'all 0.3s ease',
                  opacity: isSubmitting ? 0.7 : 1
                }}
                onMouseEnter={e => { if(!isSubmitting && !isSuccess) e.currentTarget.style.backgroundColor = '#e07015' }}
                onMouseLeave={e => { if(!isSubmitting && !isSuccess) e.currentTarget.style.backgroundColor = 'var(--accent-color)' }}
              >
                {isSubmitting ? (
                  <><Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> Sending...</>
                ) : isSuccess ? (
                  <><CheckCircle2 size={18} /> Request Sent!</>
                ) : (
                  <><Calendar size={18} /> Submit Request</>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
