import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | The DentalBrace Clinic',
  description: 'Privacy Policy for The DentalBrace Clinic & Implant Centre, Bathinda. Learn how we protect your medical and personal information.',
};

const PrivacyPolicy = () => {
  return (
    <div className="page-wrapper" style={{ backgroundColor: 'var(--bg-ivory)', minHeight: '100vh', padding: '4rem 0' }}>
      <div className="container" style={{ maxWidth: '800px', backgroundColor: 'white', padding: '3rem', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '2rem', fontSize: '0.9rem' }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <h1 className="heading-primary" style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontStyle: 'italic' }}>Last updated: January 2026</p>
        
        <div className="content" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
          
          <section>
            <h2 className="heading-secondary" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>1. Introduction</h2>
            <p>Welcome to The DentalBrace Clinic & Implant Centre. We respect your privacy and are committed to protecting your personal and medical data. This Privacy Policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) or our clinic, and tell you about your privacy rights.</p>
          </section>

          <section>
            <h2 className="heading-secondary" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>2. The Data We Collect About You</h2>
            <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier, marital status, title, date of birth and gender.</li>
              <li><strong>Contact Data:</strong> includes billing address, home address, email address and telephone numbers.</li>
              <li><strong>Medical & Health Data:</strong> includes your medical history, dental records, X-rays, 3D scans, and treatment notes required to provide you with safe and effective dental care.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
            </ul>
          </section>

          <section>
            <h2 className="heading-secondary" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>3. How We Use Your Personal Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you (i.e., providing dental treatment).</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>
          </section>

          <section>
            <h2 className="heading-secondary" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>4. Data Security</h2>
            <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal and medical data to those employees, agents, contractors and other third parties who have a clinical or business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.</p>
          </section>

          <section>
            <h2 className="heading-secondary" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>5. Data Retention</h2>
            <p>We will only retain your personal data for as long as necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. By law we have to keep basic information about our patients (including Contact, Identity, Financial and Transaction Data) for legal and clinical liability purposes.</p>
          </section>

          <section>
            <h2 className="heading-secondary" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: 'var(--bg-ivory)', borderRadius: '8px' }}>
              <strong>The DentalBrace Clinic & Implant Centre</strong><br/>
              196, Bibi Wala Rd, near LIC Building, opposite Petrol Pump, Kamla Nehru Colony, Bathinda, Punjab 151001, India<br/>
              Phone: <a href="tel:+917496849392" style={{ color: 'var(--accent-color)', textDecoration: 'underline' }}>+91 74968-49392</a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
