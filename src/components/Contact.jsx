import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        <div className="contact-header text-center">
          <span className="section-badge">Get in Touch</span>
          <h2 className="heading-primary">Ready for your new smile?</h2>
          <p className="contact-subtitle">
            Book your consultation today and take the first step towards perfect oral health.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info glass shadow-soft hover-elevate">
            <h3>Clinic Information</h3>
            <div className="info-list">
              <div className="info-item">
                <div className="info-icon text-accent"><MapPin size={24} /></div>
                <div>
                  <h4>Location</h4>
                  <p>Bibi Wala Road, Bathinda, Punjab</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon text-accent"><Phone size={24} /></div>
                <div>
                  <h4>Phone</h4>
                  <p><a href="tel:7496849392">+91 74968-49392</a></p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon text-accent"><Mail size={24} /></div>
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:thedentalbrace2019@gmail.com">thedentalbrace2019@gmail.com</a></p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon text-accent"><Clock size={24} /></div>
                <div>
                  <h4>Working Hours</h4>
                  <p>Mon - Sat: 9:00 AM - 8:00 PM<br/>Sun: By Appointment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container shadow-soft">
            <h3>Book an Appointment</h3>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="+91 XXXXX XXXXX" required />
              </div>
              <div className="form-group">
                <label htmlFor="service">Interested In</label>
                <select id="service" required>
                  <option value="">Select a treatment</option>
                  <option value="implants">Dental Implants</option>
                  <option value="braces">Invisible Braces</option>
                  <option value="smile">Smile Designing</option>
                  <option value="general">General Checkup</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message (Optional)</label>
                <textarea id="message" rows="4" placeholder="Tell us how we can help..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-submit">
                <Calendar size={20} /> Request Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
