import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className="contact-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Contact The DentalBrace Clinic Bathinda — Book Appointment | +91 74968-49392</title>
        <meta name="description" content="Contact The DentalBrace Clinic & Implant Centre, Bibi Wala Road, Bathinda, Punjab. Call +91 74968-49392 or email thedentalbrace2019@gmail.com. Book a free consultation for Invisalign, dental implants, or smile makeover. Open Mon-Sat 9AM-8PM." />
        <meta name="keywords" content="DentalBrace Bathinda contact, book dental appointment Bathinda, dental clinic Bibi Wala Road Bathinda, dentist phone number Bathinda, emergency dentist Bathinda" />
        <link rel="canonical" href="https://www.thedentalbrace.com/contact" />
        <meta property="og:title" content="Contact The DentalBrace Clinic Bathinda | Book Free Consultation" />
        <meta property="og:description" content="Book your free dental consultation at The DentalBrace Clinic, Bibi Wala Road, Bathinda. Call +91 74968-49392. Open Mon-Sat 9AM-8PM." />
        <meta property="og:url" content="https://www.thedentalbrace.com/contact" />
        <meta property="og:image" content="https://www.thedentalbrace.com/hero-image.jpg" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "The DentalBrace Clinic & Implant Centre",
          "telephone": "+917496849392",
          "email": "thedentalbrace2019@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bibi Wala Road",
            "addressLocality": "Bathinda",
            "addressRegion": "Punjab",
            "postalCode": "151001",
            "addressCountry": "IN"
          },
          "openingHoursSpecification": [
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "09:00", "closes": "20:00" }
          ],
          "url": "https://www.thedentalbrace.com"
        })}</script>
      </Helmet>

      <section className="bg-secondary section-padding pt-32 text-center">
        <div className="container">
          <span className="section-badge">Get in Touch</span>
          <h1 className="heading-primary">We're Here for Your Smile</h1>
          <p className="text-secondary max-w-2xl mx-auto mt-4">
            Whether you need a routine checkup or an advanced full mouth rehabilitation, our team is ready to assist you.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          
          <div className="contact-info glass shadow-soft p-8 rounded-lg">
            <h2 className="heading-secondary mb-6">Clinic Details</h2>
            
            <ul className="contact-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <MapPin className="text-accent" size={24} />
                <div>
                  <strong>Address</strong>
                  <p className="text-secondary mt-1">Bibi Wala Road, Bathinda, Punjab</p>
                  <p className="text-xs text-accent mt-1">Free parking available for patients.</p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <Phone className="text-accent" size={24} />
                <div>
                  <strong>Phone / Emergency</strong>
                  <p className="text-secondary mt-1"><a href="tel:7496849392">+91 74968-49392</a></p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <Mail className="text-accent" size={24} />
                <div>
                  <strong>Email</strong>
                  <p className="text-secondary mt-1"><a href="mailto:thedentalbrace2019@gmail.com">thedentalbrace2019@gmail.com</a></p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <Clock className="text-accent" size={24} />
                <div>
                  <strong>Working Hours</strong>
                  <p className="text-secondary mt-1">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                  <p className="text-secondary">Sunday: Closed (Emergencies Only)</p>
                </div>
              </li>
            </ul>

            <div className="mt-8">
              <a href="https://api.whatsapp.com/send/?phone=917496849392&text=Hi%21%20I%20would%20like%20to%20book%20an%20appointment%20at%20The%20DentalBrace%20Clinic." className="btn btn-primary w-full" style={{ textAlign: 'center', display: 'block', backgroundColor: '#25D366' }}>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="contact-form-container glass shadow-soft p-8 rounded-lg">
            <h2 className="heading-secondary mb-6">Request an Appointment</h2>
            <form className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input type="text" placeholder="Your Name" className="form-input" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)' }} required />
              <input type="tel" placeholder="Phone Number" className="form-input" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)' }} required />
              <select className="form-input" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)' }}>
                <option value="">Select Treatment</option>
                <option value="implants">Dental Implants</option>
                <option value="braces">Braces / Invisalign</option>
                <option value="checkup">General Checkup</option>
                <option value="emergency">Emergency</option>
              </select>
              <textarea placeholder="How can we help you?" rows="4" className="form-input" style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(0,0,0,0.1)' }}></textarea>
              <button type="submit" className="btn btn-primary mt-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={18} /> Submit Request
              </button>
            </form>
          </div>

        </div>
      </section>

      <section className="map-section" aria-label="Find The DentalBrace Clinic on Google Maps">
         <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.0!2d74.945475!3d30.210994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDEyJzM5LjYiTiA3NMKwNTYnNDMuNyJF!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
           width="100%"
           height="450"
           style={{ border: 0, display: 'block' }}
           allowFullScreen
           loading="lazy"
           referrerPolicy="no-referrer-when-downgrade"
           title="The DentalBrace Clinic &amp; Implant Centre — Bibi Wala Road, Bathinda, Punjab — Google Maps"
           aria-label="Google Maps showing location of The DentalBrace Clinic on Bibi Wala Road Bathinda Punjab India"
         />
      </section>
    </motion.div>
  );
};

export default ContactPage;
