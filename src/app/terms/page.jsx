import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service | The DentalBrace Clinic',
  description: 'Terms of Service for The DentalBrace Clinic & Implant Centre. Read the terms governing the use of our website and services.',
};

const TermsOfService = () => {
  return (
    <div className="page-wrapper" style={{ backgroundColor: 'var(--bg-ivory)', minHeight: '100vh', padding: '4rem 0' }}>
      <div className="container" style={{ maxWidth: '800px', backgroundColor: 'white', padding: '3rem', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '2rem', fontSize: '0.9rem' }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <h1 className="heading-primary" style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>Terms of Service</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontStyle: 'italic' }}>Last updated: January 2026</p>
        
        <div className="content" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          
          <section>
            <h2 className="heading-secondary" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>1. Acceptance of Terms</h2>
            <p>By accessing and using the website of The DentalBrace Clinic & Implant Centre, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
          </section>

          <section>
            <h2 className="heading-secondary" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>2. Medical Disclaimer</h2>
            <p>The content provided on this website, including all text, graphics, images, and other material, is for informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your dentist or other qualified health provider with any questions you may have regarding a medical condition.</p>
          </section>

          <section>
            <h2 className="heading-secondary" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>3. Consultations and Appointments</h2>
            <p>Booking an appointment through this website does not establish a doctor-patient relationship until you are evaluated in person by our specialists. We reserve the right to modify or cancel appointments based on clinical urgency and availability, though we will always attempt to provide adequate notice.</p>
          </section>

          <section>
            <h2 className="heading-secondary" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>4. Intellectual Property</h2>
            <p>The site and its original content, features, and functionality are owned by The DentalBrace Clinic & Implant Centre and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. This includes all before and after patient photos.</p>
          </section>

          <section>
            <h2 className="heading-secondary" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>5. Governing Law</h2>
            <p>This Agreement shall be governed and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Bathinda, Punjab.</p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
