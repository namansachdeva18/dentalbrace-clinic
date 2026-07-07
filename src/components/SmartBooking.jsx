import React, { useState } from 'react';
import { ChevronRight, ArrowRight, CheckCircle2, UserCircle2, CalendarDays, MessageCircle, Send, Loader2 } from 'lucide-react';

const treatments = [
  { id: 'invisalign', label: 'Invisalign / Aligners' },
  { id: 'implants', label: 'Dental Implants' },
  { id: 'smile', label: 'Smile Makeover' },
  { id: 'braces', label: 'Traditional Braces' },
  { id: 'rootcanal', label: 'Root Canal' },
  { id: 'checkup', label: 'General Check-up' },
  { id: 'whitening', label: 'Teeth Whitening' },
  { id: 'emergency', label: 'Emergency Care' }
];

const doctorMap = {
  'invisalign': 'Dr. Sandeep Kumar',
  'braces': 'Dr. Sandeep Kumar',
  'implants': 'Dr. Ritu Saneja',
  'smile': 'Dr. Ritu Saneja',
  'whitening': 'Dr. Ritu Saneja',
  'rootcanal': 'Either Available Doctor',
  'checkup': 'Either Available Doctor',
  'emergency': 'First Available Doctor'
};

const SmartBooking = () => {
  const [step, setStep] = useState(1);
  const [selectedTreatment, setSelectedTreatment] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const recommendedDoctor = selectedTreatment ? doctorMap[selectedTreatment] : '';

  const handleNext = () => setStep(s => Math.min(s + 1, 4));
  const handleBack = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const treatmentLabel = treatments.find(t=>t.id===selectedTreatment)?.label;
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "47caca69-8b06-48fb-a428-1cc00e6b99ec",
          subject: "New Appointment Booking",
          from_name: "DentalBrace Website Booking",
          "Patient Name": patientName,
          "Phone Number": patientPhone,
          "Treatment": treatmentLabel,
          "Date": selectedDate,
          "Time": selectedTime,
          "Recommended Doctor": recommendedDoctor
        }),
      });
      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
      } else {
        alert("Something went wrong. Please try calling us instead.");
      }
    } catch (error) {
      alert("Something went wrong. Please try calling us instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setStep(1);
    setSelectedTreatment(null);
    setSelectedDate('');
    setSelectedTime('');
    setPatientName('');
    setPatientPhone('');
    setIsSuccess(false);
  };

  const steps = ['Treatment', 'Date', 'Details', 'Confirm'];

  return (
    <section id="book" style={{
      backgroundColor: '#0F3D3E',
      padding: '4rem 0',
      color: 'white'
    }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#FFF9F1' }}>
            How Can We Help You Today?
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem' }}>
            Book your free consultation in under 60 seconds.
          </p>
        </div>

        {/* Progress Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3rem', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '12px', left: 0, right: 0, height: '2px', backgroundColor: 'rgba(255,255,255,0.1)', zIndex: 1 }} />
          <div style={{ position: 'absolute', top: '12px', left: 0, width: `${(step - 1) * 33.33}%`, height: '2px', backgroundColor: 'var(--accent-color)', zIndex: 1, transition: 'width 0.3s ease' }} />
          
          {steps.map((label, i) => {
            const isActive = step >= i + 1;
            return (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2 }}>
                <div style={{ 
                  width: '26px', height: '26px', borderRadius: '50%', 
                  backgroundColor: isActive ? 'var(--accent-color)' : '#0F3D3E',
                  border: `2px solid ${isActive ? 'var(--accent-color)' : 'rgba(255,255,255,0.3)'}`,
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  color: isActive ? 'white' : 'transparent',
                  marginBottom: '0.5rem',
                  transition: 'all 0.3s ease'
                }}>
                  {isActive && <CheckCircle2 size={16} />}
                </div>
                <span style={{ fontSize: '0.8rem', color: isActive ? 'white' : 'rgba(255,255,255,0.5)', fontWeight: isActive ? '600' : '400' }}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Step Content Card */}
        <div style={{ 
          backgroundColor: 'white', 
          borderRadius: 'var(--radius-lg)', 
          padding: '2.5rem',
          color: 'var(--text-primary)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        }}>
          
          {/* STEP 1: Treatment */}
          {step === 1 && (
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem', textAlign: 'center' }}>
                Select a Treatment Need
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
                {treatments.map(t => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTreatment(t.id)}
                    style={{
                      padding: '1.25rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: `2px solid ${selectedTreatment === t.id ? 'var(--accent-color)' : 'var(--border-color)'}`,
                      backgroundColor: selectedTreatment === t.id ? 'rgba(245,130,32,0.05)' : 'white',
                      cursor: 'pointer',
                      fontWeight: '600',
                      transition: 'all 0.2s ease',
                      textAlign: 'center',
                      color: selectedTreatment === t.id ? 'var(--accent-color)' : 'var(--text-primary)'
                    }}
                    onMouseEnter={e => { if (selectedTreatment !== t.id) e.currentTarget.style.borderColor = '#ccc'; }}
                    onMouseLeave={e => { if (selectedTreatment !== t.id) e.currentTarget.style.borderColor = 'var(--border-color)'; }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Date & Time */}
          {step === 2 && (
            <div>
              <div style={{ 
                backgroundColor: 'rgba(245,130,32,0.1)', 
                padding: '1rem', 
                borderRadius: 'var(--radius-md)',
                marginBottom: '2rem',
                display: 'flex', alignItems: 'center', gap: '1rem'
              }}>
                <UserCircle2 size={32} color="var(--accent-color)" />
                <div>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Recommended Specialist</p>
                  <p style={{ margin: 0, fontWeight: '700', color: 'var(--text-primary)' }}>{recommendedDoctor}</p>
                </div>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem', textAlign: 'center' }}>
                Pick a Date & Time
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>Date</label>
                  <input 
                    type="date" 
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    style={{ 
                      width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-md)', 
                      border: '1px solid var(--border-color)', outline: 'none'
                    }}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>Time</label>
                  <select 
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    style={{ 
                      width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-md)', 
                      border: '1px solid var(--border-color)', outline: 'none'
                    }}
                  >
                    <option value="">Select Time</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="04:30 PM">04:30 PM</option>
                    <option value="06:00 PM">06:00 PM</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Details */}
          {step === 3 && (
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem', textAlign: 'center' }}>
                Your Details
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    style={{ 
                      width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-md)', 
                      border: '1px solid var(--border-color)', outline: 'none'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="Enter your mobile number"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    style={{ 
                      width: '100%', padding: '0.8rem', borderRadius: 'var(--radius-md)', 
                      border: '1px solid var(--border-color)', outline: 'none'
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Confirm */}
          {step === 4 && (
            <div style={{ textAlign: 'center', padding: '1rem 0' }}>
              {isSuccess ? (
                <div>
                  <div style={{ 
                    width: '64px', height: '64px', borderRadius: '50%', 
                    backgroundColor: '#10B981', color: 'white',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    margin: '0 auto 1.5rem'
                  }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem', color: '#10B981' }}>
                    Booking Confirmed!
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    Thank you, {patientName}. We have received your booking request for {selectedDate} at {selectedTime}. We will call you shortly to confirm your appointment.
                  </p>
                  <button 
                    onClick={handleReset}
                    style={{ 
                      padding: '0.8rem 2rem', 
                      backgroundColor: 'transparent', 
                      color: 'var(--text-primary)', 
                      border: '1px solid var(--border-color)', 
                      borderRadius: 'var(--radius-full)',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Book Another Appointment
                  </button>
                </div>
              ) : (
                <>
                  <div style={{ 
                    width: '64px', height: '64px', borderRadius: '50%', 
                    backgroundColor: 'rgba(245,130,32,0.1)', color: 'var(--accent-color)',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    margin: '0 auto 1.5rem'
                  }}>
                    <CalendarDays size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>
                    Ready to Book
                  </h3>
                  <div style={{ backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '2rem', textAlign: 'left' }}>
                    <p style={{ margin: '0 0 0.5rem 0' }}><strong>Treatment:</strong> {treatments.find(t=>t.id===selectedTreatment)?.label}</p>
                    <p style={{ margin: '0 0 0.5rem 0' }}><strong>Doctor:</strong> {recommendedDoctor}</p>
                    <p style={{ margin: '0 0 0.5rem 0' }}><strong>Date:</strong> {selectedDate}</p>
                    <p style={{ margin: '0 0 0.5rem 0' }}><strong>Time:</strong> {selectedTime}</p>
                    <p style={{ margin: 0 }}><strong>Patient:</strong> {patientName} ({patientPhone})</p>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          {!isSuccess && (
            <div style={{ 
              display: 'flex', 
              justifyContent: step > 1 ? 'space-between' : 'flex-end', 
              marginTop: '2.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-color)'
            }}>
              {step > 1 && (
                <button 
                  onClick={handleBack}
                  disabled={isSubmitting}
                  style={{ 
                    padding: '0.8rem 1.5rem', 
                    backgroundColor: 'transparent', 
                    border: 'none', 
                    color: 'var(--text-secondary)',
                    fontWeight: '600',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.5 : 1
                  }}
                >
                  ← Back
                </button>
              )}
              
              {step < 4 ? (
                <button 
                  onClick={handleNext}
                  disabled={
                    (step === 1 && !selectedTreatment) || 
                    (step === 2 && (!selectedDate || !selectedTime)) ||
                    (step === 3 && (!patientName || !patientPhone)) ||
                    isSubmitting
                  }
                  style={{ 
                    padding: '0.8rem 2rem', 
                    backgroundColor: 'var(--accent-color)', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: 'var(--radius-full)',
                    fontWeight: '700',
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    cursor: 'pointer',
                    opacity: (
                      (step === 1 && !selectedTreatment) || 
                      (step === 2 && (!selectedDate || !selectedTime)) ||
                      (step === 3 && (!patientName || !patientPhone))
                    ) ? 0.5 : 1
                  }}
                >
                  Continue <ArrowRight size={18} />
                </button>
              ) : (
                <button 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  style={{ 
                    padding: '1rem 2rem', 
                    backgroundColor: 'var(--accent-color)',
                    color: 'white', 
                    border: 'none', 
                    borderRadius: 'var(--radius-full)',
                    fontWeight: '700',
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    width: '100%',
                    justifyContent: 'center',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} style={{ animation: 'spin 1s linear infinite' }} /> Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} /> Confirm Booking
                    </>
                  )}
                </button>
              )}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default SmartBooking;
