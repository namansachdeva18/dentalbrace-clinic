'use client';
import { useState, useRef } from 'react';
import { CheckCircle2, Loader2, Phone, MessageCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { CAMPAIGN_CONFIG } from '@/data/campaignConfig';

const TREATMENT_OPTIONS = [
  { value: '', label: 'Select Treatment of Interest' },
  { value: 'Dental Implants', label: 'Dental Implants' },
  { value: 'Full Mouth Rehabilitation', label: 'Full Mouth Rehabilitation' },
  { value: 'Invisalign / Clear Aligners', label: 'Invisalign / Clear Aligners' },
  { value: 'Traditional Braces', label: 'Traditional Braces' },
  { value: 'Smile Makeover', label: 'Smile Makeover' },
  { value: 'Dental Veneers', label: 'Dental Veneers' },
  { value: 'Zirconia / Porcelain Crowns', label: 'Zirconia / Porcelain Crowns' },
  { value: 'Root Canal Treatment', label: 'Root Canal Treatment' },
  { value: 'Other / General Enquiry', label: 'Other / General Enquiry' },
];

const CALLBACK_OPTIONS = [
  { value: '', label: 'Preferred Callback Time (Optional)' },
  { value: 'Morning (9am–12pm)', label: 'Morning (9am–12pm)' },
  { value: 'Afternoon (12pm–4pm)', label: 'Afternoon (12pm–4pm)' },
  { value: 'Evening (4pm–8pm)', label: 'Evening (4pm–8pm)' },
];

// Enhanced phone validation (Indian mobile: 10 digits, starting 6-9, prevents repetitive digits)
const isValidPhone = (phone) => {
  const cleaned = phone.replace(/[\s\-+()]/g, '').replace(/^91/, '').replace(/^0/, '');
  if (!/^[6-9]\d{9}$/.test(cleaned)) return false;
  if (/^([0-9])\1{9}$/.test(cleaned)) return false; // Reject 9999999999, 8888888888, etc.
  return true;
};

// Input field style factory
const inputStyle = (error) => ({
  width: '100%',
  padding: '0.85rem 1rem',
  borderRadius: '12px',
  border: `1.5px solid ${error ? '#e53e3e' : '#EFE7DA'}`,
  fontSize: '0.95rem',
  color: '#2E1F1B',
  background: '#ffffff',
  outline: 'none',
  transition: 'border-color 0.2s ease',
  fontFamily: 'inherit',
});

const labelStyle = {
  display: 'block',
  fontWeight: 600,
  fontSize: '0.88rem',
  color: '#2E1F1B',
  marginBottom: '0.4rem',
};

/**
 * CampaignLeadForm
 *
 * Props:
 * - compact: boolean — render a more compact layout for sidebar/widget use
 * - source: string — identifies where the form is embedded (for analytics)
 */
const CampaignLeadForm = ({ compact = false, source = 'campaign_page' }) => {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', treatment: '', callback: '', consent: false, botcheck: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const submitLock = useRef(false); // Prevent double-submit

  // Capture UTM params from URL on mount
  const getUtmParams = () => {
    if (typeof window === 'undefined') return {};
    const p = new URLSearchParams(window.location.search);
    return {
      utm_source: p.get('utm_source') || 'direct',
      utm_medium: p.get('utm_medium') || '',
      utm_campaign: p.get('utm_campaign') || '',
      utm_content: p.get('utm_content') || '',
      utm_term: p.get('utm_term') || '',
    };
  };

  const validate = () => {
    const e = {};
    const nameTrim = form.name.trim();
    if (!nameTrim || nameTrim.length < 3 || nameTrim.toLowerCase() === 'test') e.name = 'Please enter a valid full name.';
    if (!form.phone.trim()) e.phone = 'Mobile number is required.';
    else if (!isValidPhone(form.phone)) e.phone = 'Enter a valid 10-digit Indian mobile number.';
    if (!form.treatment) e.treatment = 'Please select a treatment of interest.';
    if (!form.consent) e.consent = 'Please confirm your consent to be contacted.';
    return e;
  };

  const handleChange = (field, value) => {
    setForm(f => ({ ...f, [field]: value }));
    if (errors[field]) setErrors(e => ({ ...e, [field]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    if (submitLock.current) return; // Prevent double-submission
    submitLock.current = true;
    setIsSubmitting(true);
    setSubmitError('');

    // Analytics: form start → submit
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'campaign_form_submit', {
        campaign_name: CAMPAIGN_CONFIG.CAMPAIGN_NAME,
        treatment_interest: form.treatment,
        source,
      });
    }

    const utmParams = getUtmParams();

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '47caca69-8b06-48fb-a428-1cc00e6b99ec',
          subject: `🦷 Campaign Lead — ${form.treatment} — ${CAMPAIGN_CONFIG.CAMPAIGN_NAME}`,
          from_name: 'DentalBrace Campaign Form',
          'Patient Name': form.name.trim(),
          'Mobile Number': form.phone.trim(),
          'Email': form.email.trim() || 'Not provided',
          'Treatment Interest': form.treatment,
          'Preferred Callback Time': form.callback || 'Not specified',
          botcheck: form.botcheck, // Honeypot field for Web3Forms spam prevention
          'Campaign': CAMPAIGN_CONFIG.CAMPAIGN_NAME,
          'Campaign End Date': CAMPAIGN_CONFIG.EXPIRY_DISPLAY,
          'Form Source': source,
          'Timestamp': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          ...utmParams,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'campaign_form_success', {
            campaign_name: CAMPAIGN_CONFIG.CAMPAIGN_NAME,
            treatment_interest: form.treatment,
          });
        }
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      setSubmitError('Submission failed. Please call us directly at +91 74968-49392.');
      submitLock.current = false;
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── SUCCESS STATE ──────────────────────────────────────────────────
  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        style={{ textAlign: 'center', padding: compact ? '2rem 1rem' : '3rem 1.5rem' }}
      >
        <div style={{
          width: '70px', height: '70px', borderRadius: '50%',
          background: 'rgba(16, 185, 129, 0.1)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 1.25rem',
        }}>
          <CheckCircle2 size={36} color="#10B981" />
        </div>
        <h3 style={{ fontWeight: 800, fontSize: '1.4rem', color: '#0F3D3E', marginBottom: '0.75rem' }}>
          Enquiry Received!
        </h3>
        <p style={{ color: '#6B6B6B', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
          Thank you, <strong style={{ color: '#2E1F1B' }}>{form.name}</strong>. Our team at The DentalBrace Clinic
          will contact you to confirm your consultation and discuss your campaign eligibility.
        </p>
        <p style={{ fontSize: '0.8rem', color: '#6B6B6B', marginBottom: '2rem', fontStyle: 'italic' }}>
          Please note: The applicable campaign benefit will be confirmed by the clinic before treatment.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="tel:7496849392"
            onClick={() => window.gtag?.('event', 'phone_click', { source: 'form_success' })}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '0.7rem 1.4rem', background: '#0F3D3E', color: '#fff', borderRadius: '9999px', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}
          >
            <Phone size={16} /> Call Clinic
          </a>
          <a
            href={`https://api.whatsapp.com/send/?phone=917496849392&text=${encodeURIComponent('Hi! I just submitted an enquiry for the dental care offer. My name is ' + form.name + '.')}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => window.gtag?.('event', 'whatsapp_click', { source: 'form_success' })}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '0.7rem 1.4rem', background: '#25D366', color: '#fff', borderRadius: '9999px', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>
      </div>
    );
  }

  // ── FORM STATE ─────────────────────────────────────────────────────
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Campaign lead generation form"
      style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}
    >
      {!compact && (
        <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.75rem)', fontWeight: 800, color: '#0F3D3E', marginBottom: '0.4rem' }}>
            {CAMPAIGN_CONFIG.CTA_PRIMARY}
          </h2>
          <p style={{ color: '#6B6B6B', fontSize: '0.92rem', lineHeight: 1.55 }}>
            Submit your details and our team will contact you to confirm treatment eligibility
            and consultation availability.
          </p>
        </div>
      )}

      {/* Honeypot Field (Hidden from users, catches bots) */}
      <input 
        type="checkbox" 
        name="botcheck" 
        className="hidden" 
        style={{ display: 'none' }} 
        checked={form.botcheck}
        onChange={e => handleChange('botcheck', e.target.checked)}
        tabIndex="-1"
        autoComplete="off"
      />

      {/* Name */}
      <div>
        <label htmlFor="cf-name" style={labelStyle}>Full Name <span aria-label="required" style={{ color: '#e53e3e' }}>*</span></label>
        <input
          id="cf-name"
          type="text"
          autoComplete="name"
          placeholder="e.g., Gurpreet Singh"
          value={form.name}
          onChange={e => handleChange('name', e.target.value)}
          required
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'cf-name-err' : undefined}
          style={inputStyle(errors.name)}
          onFocus={e => { e.target.style.borderColor = '#0F3D3E'; }}
          onBlur={e => { e.target.style.borderColor = errors.name ? '#e53e3e' : '#EFE7DA'; }}
        />
        {errors.name && <p id="cf-name-err" role="alert" style={{ color: '#e53e3e', fontSize: '0.8rem', marginTop: '0.3rem' }}>{errors.name}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="cf-phone" style={labelStyle}>Mobile Number <span aria-label="required" style={{ color: '#e53e3e' }}>*</span></label>
        <input
          id="cf-phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="10-digit mobile number"
          value={form.phone}
          onChange={e => handleChange('phone', e.target.value.replace(/[^0-9+\-\s()]/g, ''))}
          required
          aria-required="true"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'cf-phone-err' : undefined}
          style={inputStyle(errors.phone)}
          onFocus={e => { e.target.style.borderColor = '#0F3D3E'; }}
          onBlur={e => { e.target.style.borderColor = errors.phone ? '#e53e3e' : '#EFE7DA'; }}
        />
        {errors.phone && <p id="cf-phone-err" role="alert" style={{ color: '#e53e3e', fontSize: '0.8rem', marginTop: '0.3rem' }}>{errors.phone}</p>}
      </div>

      {/* Treatment */}
      <div>
        <label htmlFor="cf-treatment" style={labelStyle}>Treatment of Interest <span aria-label="required" style={{ color: '#e53e3e' }}>*</span></label>
        <select
          id="cf-treatment"
          value={form.treatment}
          onChange={e => handleChange('treatment', e.target.value)}
          required
          aria-required="true"
          aria-invalid={!!errors.treatment}
          aria-describedby={errors.treatment ? 'cf-treatment-err' : undefined}
          style={{ ...inputStyle(errors.treatment), cursor: 'pointer' }}
          onFocus={e => { e.target.style.borderColor = '#0F3D3E'; }}
          onBlur={e => { e.target.style.borderColor = errors.treatment ? '#e53e3e' : '#EFE7DA'; }}
        >
          {TREATMENT_OPTIONS.map(o => (
            <option key={o.value} value={o.value} disabled={!o.value}>{o.label}</option>
          ))}
        </select>
        {errors.treatment && <p id="cf-treatment-err" role="alert" style={{ color: '#e53e3e', fontSize: '0.8rem', marginTop: '0.3rem' }}>{errors.treatment}</p>}
      </div>

      {/* Email (optional) */}
      <div>
        <label htmlFor="cf-email" style={labelStyle}>Email Address <span style={{ color: '#6B6B6B', fontWeight: 400 }}>(Optional)</span></label>
        <input
          id="cf-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="your@email.com"
          value={form.email}
          onChange={e => handleChange('email', e.target.value)}
          style={inputStyle(false)}
          onFocus={e => { e.target.style.borderColor = '#0F3D3E'; }}
          onBlur={e => { e.target.style.borderColor = '#EFE7DA'; }}
        />
      </div>

      {/* Callback time (optional) */}
      <div>
        <label htmlFor="cf-callback" style={labelStyle}>Preferred Callback Time <span style={{ color: '#6B6B6B', fontWeight: 400 }}>(Optional)</span></label>
        <select
          id="cf-callback"
          value={form.callback}
          onChange={e => handleChange('callback', e.target.value)}
          style={{ ...inputStyle(false), cursor: 'pointer' }}
          onFocus={e => { e.target.style.borderColor = '#0F3D3E'; }}
          onBlur={e => { e.target.style.borderColor = '#EFE7DA'; }}
        >
          {CALLBACK_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>

      {/* Consent */}
      <div>
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer' }}>
          <input
            type="checkbox"
            id="cf-consent"
            checked={form.consent}
            onChange={e => handleChange('consent', e.target.checked)}
            aria-required="true"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? 'cf-consent-err' : undefined}
            style={{ marginTop: '3px', width: '18px', height: '18px', accentColor: '#0F3D3E', flexShrink: 0 }}
          />
          <span style={{ fontSize: '0.82rem', color: '#6B6B6B', lineHeight: 1.5 }}>
            I agree to be contacted by The DentalBrace Clinic regarding my enquiry.
            I have read the{' '}
            <a href="/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#0F3D3E', textDecoration: 'underline' }}>
              Privacy Policy
            </a>.
            <span aria-label="required" style={{ color: '#e53e3e' }}> *</span>
          </span>
        </label>
        {errors.consent && <p id="cf-consent-err" role="alert" style={{ color: '#e53e3e', fontSize: '0.8rem', marginTop: '0.3rem' }}>{errors.consent}</p>}
      </div>

      {/* Server error */}
      {submitError && (
        <div role="alert" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.75rem 1rem', background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '10px', fontSize: '0.88rem', color: '#B91C1C' }}>
          <AlertCircle size={16} /> {submitError}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
        style={{
          width: '100%',
          padding: '1rem',
          background: isSubmitting ? '#ccc' : '#F58220',
          color: '#ffffff',
          border: 'none',
          borderRadius: '9999px',
          fontSize: '1.05rem',
          fontWeight: 700,
          cursor: isSubmitting ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          transition: 'background 0.2s ease',
          fontFamily: 'inherit',
        }}
        onMouseEnter={e => { if (!isSubmitting) e.currentTarget.style.background = '#E87413'; }}
        onMouseLeave={e => { if (!isSubmitting) e.currentTarget.style.background = '#F58220'; }}
      >
        {isSubmitting
          ? <><Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} /> Submitting...</>
          : <>{CAMPAIGN_CONFIG.CTA_FORM} <ArrowRight size={18} /></>
        }
      </button>

      {/* Disclaimer */}
      <p style={{ fontSize: '0.75rem', color: '#9CA3AF', lineHeight: 1.5, textAlign: 'center', marginTop: '0.25rem' }}>
        {CAMPAIGN_CONFIG.DISCLAIMER}
      </p>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
      `}</style>
    </form>
  );
};

export default CampaignLeadForm;
