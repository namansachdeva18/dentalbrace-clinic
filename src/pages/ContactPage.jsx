import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Calendar, MessageSquare, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', treatment: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "47caca69-8b06-48fb-a428-1cc00e6b99ec",
          subject: "New Contact Request from Website (Contact Page)",
          from_name: "DentalBrace Website Contact",
          Name: formData.name,
          Phone: formData.phone,
          Email: formData.email || 'Not provided',
          Treatment: formData.treatment || 'Not specified',
          Message: formData.message || 'No message provided'
        }),
      });
      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: '', phone: '', email: '', treatment: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
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
    <motion.div 
      className="contact-page-modern"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Contact The DentalBrace Clinic Bathinda — Book Appointment | +91 74968-49392</title>
        <meta name="description" content="Contact The DentalBrace Clinic & Implant Centre, Bibi Wala Road, Bathinda, Punjab. Call +91 74968-49392 or email thedentalbrace2019@gmail.com." />
        <link rel="canonical" href="https://www.thedentalbrace.com/contact" />
        <meta property="og:title" content="Contact The DentalBrace Clinic Bathinda — Book Appointment" />
        <meta property="og:description" content="Contact The DentalBrace Clinic & Implant Centre, Bibi Wala Road, Bathinda, Punjab. Call +91 74968-49392 to book your consultation." />
        <meta property="og:url" content="https://www.thedentalbrace.com/contact" />
      </Helmet>

      {/* Hero Section */}
      <section className="contact-hero relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-secondary z-0"></div>
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 z-0 bg-pattern" style={{ backgroundImage: 'radial-gradient(var(--accent-color) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container relative z-10 text-center text-primary">
          <motion.span 
            className="section-badge mx-auto bg-white text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Get in Touch
          </motion.span>
          <motion.h1 
            className="heading-primary text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Let's Start Your <span className="text-accent">Smile Journey</span>
          </motion.h1>
          <motion.p 
            className="max-w-2xl mx-auto text-secondary text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Our specialists are here to answer your questions and provide the highest standard of dental care in Bathinda.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="contact-main section-padding -mt-10 relative z-20">
        <div className="container">
          <div className="contact-grid">
            
            {/* Left Side: Contact Info & Image */}
            <div className="contact-info-col">
              <div className="contact-image-card shadow-soft rounded-2xl overflow-hidden mb-8 relative">
                <img src="/images/my-contact-photo.jpg" alt="The DentalBrace Clinic Reception" className="w-full h-64 object-cover" onError={(e) => { e.target.src = "/images/premium_indian_clinic_interior.png" }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">State-of-the-Art Facility</h3>
                  <p className="text-sm text-gray-200">Designed for your ultimate comfort.</p>
                </div>
              </div>

              <div className="contact-details-cards">
                <div className="detail-card glass shadow-soft">
                  <div className="icon-wrapper bg-accent-light text-accent">
                    <MapPin size={24} />
                  </div>
                  <div className="detail-content">
                    <h4>Visit Us</h4>
                    <p>Bibi Wala Road, Bathinda<br/>Punjab 151001, India</p>
                    <span className="text-xs text-accent font-semibold uppercase tracking-wider mt-2 block">Free Patient Parking</span>
                  </div>
                </div>

                <div className="detail-card glass shadow-soft">
                  <div className="icon-wrapper bg-accent-light text-accent">
                    <Phone size={24} />
                  </div>
                  <div className="detail-content">
                    <h4>Call Us</h4>
                    <p><a href="tel:7496849392" className="hover:text-accent transition-colors">+91 74968-49392</a></p>
                    <span className="text-xs text-red-500 font-semibold uppercase tracking-wider mt-2 block flex items-center gap-1">
                      <Clock size={12} /> 24/7 Emergency Line
                    </span>
                  </div>
                </div>

                <div className="detail-card glass shadow-soft">
                  <div className="icon-wrapper bg-accent-light text-accent">
                    <Clock size={24} />
                  </div>
                  <div className="detail-content">
                    <h4>Working Hours</h4>
                    <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a href="https://api.whatsapp.com/send/?phone=917496849392" target="_blank" rel="noopener noreferrer" className="whatsapp-cta mt-8 shadow-soft">
                <div className="wa-icon">
                  <MessageSquare size={24} />
                </div>
                <div className="wa-text">
                  <span className="font-bold text-gray-900 block">Have a quick question?</span>
                  <span className="text-sm text-gray-600">Chat with us directly on WhatsApp</span>
                </div>
                <ArrowRight className="wa-arrow text-gray-400" />
              </a>
            </div>

            {/* Right Side: Contact Form */}
            <div className="contact-form-col glass shadow-soft rounded-2xl p-8 lg:p-10">
              <div className="form-header mb-8">
                <h2 className="heading-secondary text-2xl mb-2">Request an Appointment</h2>
                <p className="text-secondary text-sm">Fill out the form below and our front desk will call you to confirm your preferred time slot.</p>
              </div>

              <form className="modern-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="input-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                  </div>
                  <div className="input-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="+91 00000-00000" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
                  </div>
                </div>
                
                <div className="input-group">
                  <label htmlFor="email">Email Address (Optional)</label>
                  <input type="email" id="email" placeholder="john@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>

                <div className="input-group">
                  <label htmlFor="treatment">What are you looking for?</label>
                  <div className="select-wrapper">
                    <select id="treatment" value={formData.treatment} onChange={(e) => setFormData({...formData, treatment: e.target.value})} required>
                      <option value="" disabled>Select a treatment...</option>
                      <option value="implants">Dental Implants</option>
                      <option value="invisalign">Invisalign / Clear Aligners</option>
                      <option value="braces">Braces</option>
                      <option value="smile">Smile Makeover / Veneers</option>
                      <option value="general">General Checkup / Cleaning</option>
                      <option value="pain">Tooth Pain / Emergency</option>
                    </select>
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="message">Additional Details</label>
                  <textarea id="message" rows="4" placeholder="Tell us briefly about your dental concern..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting || isSuccess}
                  className={`btn w-full flex justify-center items-center gap-2 mt-6 text-lg py-4 ${isSuccess ? 'bg-green-500 text-white' : 'btn-primary'}`} 
                  style={{ width: '100%', justifyContent: 'center', backgroundColor: isSuccess ? '#10B981' : undefined, color: isSuccess ? 'white' : undefined, cursor: (isSubmitting || isSuccess) ? 'default' : 'pointer', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? (
                    <><Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} /> Sending...</>
                  ) : isSuccess ? (
                    <><CheckCircle2 size={20} /> Request Sent!</>
                  ) : (
                    <><Calendar size={20} /> Book Consultation (₹200/-)</>
                  )}
                </button>
                <p className="text-center text-xs text-gray-500 mt-4" style={{ textAlign: 'center' }}>Your information is kept strictly confidential.</p>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section py-20 bg-cream">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="heading-secondary">Find Us in Bathinda</h2>
            <p className="text-secondary mt-2">Conveniently located on Bibi Wala Road with free patient parking.</p>
          </div>
          <div className="map-wrapper glass shadow-soft rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(0,0,0,0.05)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.0!2d74.945475!3d30.210994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDEyJzM5LjYiTiA3NMKwNTYnNDMuNyJF!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, display: 'block', filter: 'grayscale(0.4) contrast(1.05) sepia(0.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The DentalBrace Clinic Location"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
