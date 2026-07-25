import React from 'react';
import { IndianRupee, CreditCard, ShieldAlert, HeartPulse, Activity } from 'lucide-react';

const ClinicalTransparency = ({ data }) => {
  if (!data.financialData && !data.clinicalRisks) return null;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      margin: '3rem 0'
    }}>
      
      {/* Financial Transparency */}
      {data.financialData && (
        <div style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          border: '1px solid rgba(0,0,0,0.06)',
          padding: '2rem',
          boxShadow: '0 8px 24px rgba(0,0,0,0.03)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.5rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid rgba(0,0,0,0.06)'
          }}>
            <div style={{
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#10B981'
            }}>
              <IndianRupee size={22} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>Cost & Financing</h3>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>Estimated Starting Price</span>
            <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#047857' }}>{data.financialData.startingPrice}</div>
            <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.25rem' }}>*Final cost depends on clinical complexity determined during consultation.</p>
          </div>

          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.75rem' }}>Accepted Payment Options</span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {data.financialData.paymentOptions.map((option, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <CreditCard size={16} color="#9ca3af" /> {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Clinical Risk & Success Data */}
      {data.clinicalRisks && (
        <div style={{
          backgroundColor: '#fffcfc',
          borderRadius: '16px',
          border: '1px solid rgba(239, 68, 68, 0.15)',
          padding: '2rem',
          boxShadow: '0 8px 24px rgba(239, 68, 68, 0.03)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1.5rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid rgba(239, 68, 68, 0.15)'
          }}>
            <div style={{
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#EF4444'
            }}>
              <HeartPulse size={22} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>Clinical Outlook & Risks</h3>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.25rem' }}>Expected Success Rate</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)' }}>
              <Activity size={20} color="var(--accent-color)" /> {data.clinicalRisks.successRate}
            </div>
          </div>

          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#f87171', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.75rem' }}>
              <ShieldAlert size={14} /> Potential Complications
            </span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {data.clinicalRisks.complications.map((risk, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  <span style={{ color: '#f87171', marginTop: '2px' }}>•</span> {risk}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '1rem', fontStyle: 'italic', lineHeight: '1.5' }}>
              All medical procedures carry inherent risks. We utilize digital planning to minimize these, but patient compliance is mandatory for success.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};

export default ClinicalTransparency;
