'use client';
import { useState, useRef } from 'react';
import { CheckCircle2, Loader2, Phone, MessageCircle, AlertCircle, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { WEDDING_CAMPAIGN_CONFIG } from '@/data/weddingCampaignConfig';

const TREATMENT_OPTIONS = [
  { value: '', label: 'Select Preferred Treatment *' },
  { value: 'Smile Makeover (Veneers / Multi-treatment)', label: 'Smile Makeover (Comprehensive Aesthetic Plan)' },
  { value: 'Teeth Whitening & Stain Removal', label: 'Teeth Whitening & Stain Removal' },
  { value: 'Invisalign & Clear Aligners', label: 'Invisalign / Clear Aligners' },
  { value: 'Porcelain & E-max Veneers', label: 'Dental Veneers' },
  { value: 'Dental Implants & Tooth Replacement', label: 'Dental Implants (Single or Multiple)' },
  { value: 'Full Mouth Rehabilitation', label: 'Full Mouth Rehabilitation' },
  { value: 'Dental Crowns & Bridges', label: 'Dental Crowns / Bridges' },
  { value: 'Professional Dental Cleaning & Polishing', label: 'Professional Cleaning & Polishing' },
  { value: 'Not Sure / Need Specialist Guidance', label: 'Not Sure — Need Specialist Guidance' },
];

const isValidPhone = (phone) => {
  const cleaned = phone.replace(/[\s\-+()]/g, '').replace(/^91/, '').replace(/^0/, '');
  if (!/^[6-9]\d{9}$/.test(cleaned)) return false;
  if (/^([0-9])\1{9}$/.test(cleaned)) return false;
  return true;
};

const inputBaseStyle = (hasError) => ({
  width: '100%',
  padding: '0.9rem 1.1rem',
  borderRadius: '14px',
  border: `1.5px solid ${hasError ? '#e53e3e' : '#EFE7DA'}`,
  fontSize: '0.95rem',
  color: '#2E1F1B',
  backgroundColor: '#FFFFFF',
  outline: 'none',
  transition: 'all 0.25s ease',
  fontFamily: 'inherit',
});

export default function WeddingLeadForm({
  source = 'wedding_campaign_page',
  customTitle,
  customSubtitle,
  customBadge,
  initialRole = '',
  initialTreatment = '',
  compactMode = false,
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: initialTreatment,
    botcheck: false,
    website_url_honeypot: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState('');
  const submitLock = useRef(false);
  const formLoadTime = useRef(Date.now());

  const getUtmParams = () => {
    if (typeof window === 'undefined') return {};
    const p = new URLSearchParams(window.location.search);
    return {
      utm_source: p.get('utm_source') || 'direct',
      utm_medium: p.get('utm_medium') || '',
      utm_campaign: p.get('utm_campaign') || 'wedding_season_smile',
      utm_content: p.get('utm_content') || '',
      utm_term: p.get('utm_term') || '',
    };
  };

  const validate = () => {
    const errs = {};
    const nameTrim = formData.name.trim();
    if (!nameTrim || nameTrim.length < 3 || nameTrim.toLowerCase() === 'test') {
      errs.name = 'Please enter your full name.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Mobile number is required.';
    } else if (!isValidPhone(formData.phone)) {
      errs.phone = 'Please enter a valid 10-digit Indian mobile number.';
    }
    if (!formData.treatment) {
      errs.treatment = 'Please select your preferred treatment.';
    }
    return errs;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    // Spam Protection 1: Check hidden honeypot
    if (formData.website_url_honeypot || formData.botcheck) {
      // Silently fake success for spam bots without hitting endpoint
      setIsSuccess(true);
      return;
    }

    // Spam Protection 2: Minimum interaction timer (prevents headless automated scripts)
    const timeElapsedMs = Date.now() - formLoadTime.current;
    if (timeElapsedMs < 1200) {
      setServerError('Please take a moment before submitting.');
      return;
    }

    if (submitLock.current) return;
    submitLock.current = true;
    setIsSubmitting(true);
    setServerError('');

    // Analytics: form submit event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'wedding_form_submit', {
        campaign_name: WEDDING_CAMPAIGN_CONFIG.ID,
        treatment: formData.treatment,
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
          subject: `💍 Smile Consultation Lead — ${formData.name.trim()} — ${formData.treatment}`,
          from_name: 'The DentalBrace Campaign',
          'Patient Name': formData.name.trim(),
          'Mobile Number': formData.phone.trim(),
          'Preferred Treatment': formData.treatment,
          botcheck: formData.botcheck,
          Campaign: WEDDING_CAMPAIGN_CONFIG.ID,
          'Campaign Page': 'Wedding Season Smile & Premium Dental Care Bathinda',
          FormSource: source,
          Timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          ...utmParams,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'wedding_form_success', {
            campaign_name: WEDDING_CAMPAIGN_CONFIG.ID,
            treatment: formData.treatment,
          });
        }
      } else {
        throw new Error('Submission response error');
      }
    } catch {
      setServerError('Could not submit form. Please tap below to message directly on WhatsApp or call us.');
      submitLock.current = false;
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    const waText = encodeURIComponent(
      `Hi The DentalBrace, I just requested a Smile Consultation for ${formData.name}. Preferred Treatment: ${formData.treatment}.`
    );
    return (
      <div className="wedding-form-success" role="status" aria-live="polite">
        <div className="wedding-form-success__icon">
          <CheckCircle2 size={40} color="#10B981" />
        </div>
        <h3 className="wedding-form-success__title">Consultation Request Received!</h3>
        <p className="wedding-form-success__msg">
          Thank you, <strong>{formData.name}</strong>. Our dental coordination team at The DentalBrace Bathinda will connect with you shortly to schedule your appointment.
        </p>
        <div className="wedding-form-success__disclaimer">
          <ShieldCheck size={16} />
          <span>All consultation advice and treatment steps will be tailored specifically to your clinical examination.</span>
        </div>
        <div className="wedding-form-success__actions">
          <a
            href={`https://api.whatsapp.com/send/?phone=${WEDDING_CAMPAIGN_CONFIG.WHATSAPP_PHONE}&text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ background: '#25D366' }}
            onClick={() => window.gtag?.('event', 'whatsapp_click', { source: 'wedding_form_success_button' })}
          >
            <MessageCircle size={18} /> Connect on WhatsApp Now
          </a>
          <a
            href={`tel:${WEDDING_CAMPAIGN_CONFIG.PHONE_TEL}`}
            className="btn btn-outline"
            onClick={() => window.gtag?.('event', 'phone_click', { source: 'wedding_form_success_button' })}
          >
            <Phone size={18} /> Call Clinic Directly
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="wedding-lead-form"
      aria-label="Smile Consultation Booking Form"
    >
      {/* Spam Honeypot fields */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: 'none' }}
        checked={formData.botcheck}
        onChange={(e) => handleChange('botcheck', e.target.checked)}
        tabIndex="-1"
        autoComplete="off"
      />
      <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
        <label htmlFor="wcf-website-hp">Leave this empty</label>
        <input
          id="wcf-website-hp"
          type="text"
          name="website_url_honeypot"
          value={formData.website_url_honeypot}
          onChange={(e) => handleChange('website_url_honeypot', e.target.value)}
          tabIndex="-1"
          autoComplete="off"
        />
      </div>

      {!compactMode && (
        <div className="wedding-form-header">
          <span className="wedding-form-badge">
            {customBadge || (
              <>
                <HeartHandshake size={14} /> Priority Consultation
              </>
            )}
          </span>
          <h3 className="wedding-form-title">{customTitle || 'Schedule Your Consultation'}</h3>
          <p className="wedding-form-subtitle">
            {customSubtitle ||
              'Fill in your quick details below and our clinic team will contact you to confirm your slot.'}
          </p>
        </div>
      )}

      {/* 1. Full Name */}
      <div className="form-field">
        <label htmlFor="wcf-name" className="form-label">
          Full Name <span className="req">*</span>
        </label>
        <input
          id="wcf-name"
          type="text"
          autoComplete="name"
          placeholder="e.g. Jasleen Kaur / Vikram Sharma"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          required
          aria-required="true"
          aria-invalid={!!errors.name}
          style={inputBaseStyle(errors.name)}
          onFocus={(e) => {
            if (!errors.name) e.target.style.borderColor = '#0F3D3E';
          }}
          onBlur={(e) => {
            if (!errors.name) e.target.style.borderColor = '#EFE7DA';
          }}
        />
        {errors.name && <p className="form-error" role="alert">{errors.name}</p>}
      </div>

      {/* 2. Mobile Number */}
      <div className="form-field">
        <label htmlFor="wcf-phone" className="form-label">
          Mobile Number <span className="req">*</span>
        </label>
        <input
          id="wcf-phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="10-digit mobile number"
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.target.value.replace(/[^0-9+\-\s()]/g, ''))}
          required
          aria-required="true"
          aria-invalid={!!errors.phone}
          style={inputBaseStyle(errors.phone)}
          onFocus={(e) => {
            if (!errors.phone) e.target.style.borderColor = '#0F3D3E';
          }}
          onBlur={(e) => {
            if (!errors.phone) e.target.style.borderColor = '#EFE7DA';
          }}
        />
        {errors.phone && <p className="form-error" role="alert">{errors.phone}</p>}
      </div>

      {/* 3. Preferred Treatment */}
      <div className="form-field">
        <label htmlFor="wcf-treatment" className="form-label">
          Preferred Treatment <span className="req">*</span>
        </label>
        <select
          id="wcf-treatment"
          value={formData.treatment}
          onChange={(e) => handleChange('treatment', e.target.value)}
          required
          aria-required="true"
          aria-invalid={!!errors.treatment}
          style={{ ...inputBaseStyle(errors.treatment), cursor: 'pointer' }}
        >
          {TREATMENT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={!opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.treatment && <p className="form-error" role="alert">{errors.treatment}</p>}
      </div>

      {/* Server Error */}
      {serverError && (
        <div className="form-server-error" role="alert">
          <AlertCircle size={18} />
          <span>{serverError}</span>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="wedding-form-submit-btn"
        onClick={() => {
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'form_start', { form_name: 'wedding_lead_form' });
          }
        }}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={20} className="spin-animate" /> Booking Consultation...
          </>
        ) : (
          <>
            {WEDDING_CAMPAIGN_CONFIG.CTA_FORM_SUBMIT} <ArrowRight size={18} />
          </>
        )}
      </button>

      {/* Privacy note */}
      <p className="wedding-form-privacy-note">
        🔒 Confidential &amp; secure · No spam · Clinic visits at 196, Bibi Wala Road, Bathinda
      </p>
    </form>
  );
}
