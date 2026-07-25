import React from 'react';
import Link from 'next/link';
import { AlertCircle, CheckCircle, Info, Stethoscope, ShieldAlert } from 'lucide-react';

const TreatmentSnapshot = ({ data }) => {
  if (!data.quickAnswer) return null;

  const formatSlugToTitle = (slug) => {
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div style={{
      backgroundColor: 'var(--bg-ivory, #faf8f4)',
      borderRadius: '16px',
      border: '1px solid rgba(0,0,0,0.06)',
      padding: '2.5rem',
      boxShadow: '0 8px 30px rgba(0,0,0,0.03)',
      margin: '3rem 0'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '2rem',
        paddingBottom: '1rem',
        borderBottom: '1px solid rgba(0,0,0,0.06)'
      }}>
        <div style={{
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          backgroundColor: 'rgba(245, 130, 32, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--accent-color)'
        }}>
          <Info size={24} />
        </div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-primary)', margin: 0 }}>Treatment Snapshot</h2>
      </div>

      {/* Extractive Definition */}
      <div style={{ marginBottom: '2.5rem' }}>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', fontWeight: '500', lineHeight: '1.8', margin: 0 }}>
          <strong style={{ color: 'var(--accent-color)', fontWeight: '800' }}>{data.quickAnswer.split(' ')[0]}</strong> {data.quickAnswer.substring(data.quickAnswer.indexOf(' ') + 1)}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {/* Reasons to Choose (Pros) */}
        {data.reasonsToChoose && data.reasonsToChoose.length > 0 && (
          <div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <CheckCircle color="#16a34a" size={22} /> Why Patients Choose This
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {data.reasonsToChoose.map((reason, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  <span style={{ color: '#16a34a', marginTop: '2px', fontWeight: 'bold' }}>•</span> {reason}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* When to Avoid (Cons / Contraindications) */}
        {data.whenToAvoid && (
          <div style={{
            backgroundColor: '#fffcfc',
            padding: '1.5rem',
            borderRadius: '12px',
            border: '1px solid rgba(239, 68, 68, 0.15)',
            boxShadow: '0 4px 15px rgba(239, 68, 68, 0.03)'
          }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <ShieldAlert color="#ef4444" size={22} /> When To Consider Alternatives
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', margin: '0 0 1.25rem 0' }}>
              {data.whenToAvoid}
            </p>
            
            {data.alternatives && data.alternatives.length > 0 && (
              <div style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.75rem' }}>Compare Alternatives:</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {data.alternatives.map(alt => (
                    <Link key={alt} href={`/treatments/${alt}`} style={{ display: 'inline-block', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', color: 'var(--text-primary)', fontSize: '0.8rem', fontWeight: '600', padding: '0.35rem 1rem', borderRadius: '9999px', textDecoration: 'none', transition: 'all 0.2s' }}>
                      {formatSlugToTitle(alt)}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Maintenance Protocol */}
      {data.maintenance && (
        <div style={{
          marginTop: '2.5rem',
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '12px',
          border: '1px solid rgba(0,0,0,0.06)',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1rem',
          boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
        }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(245, 130, 32, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--accent-color)' }}>
            <Stethoscope size={20} />
          </div>
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)', margin: '0 0 0.25rem 0' }}>Post-Treatment Maintenance</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5' }}>
              {data.maintenance}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TreatmentSnapshot;
