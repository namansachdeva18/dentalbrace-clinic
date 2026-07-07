import React from 'react';
import { Smile, Shield, Sparkles, AlignCenter, Zap, Gem, Activity, Baby, ScanLine, Brain, Layers, Stethoscope } from 'lucide-react';

const navItems = [
  { id: 1, label: 'Invisalign', icon: <Smile size={40} strokeWidth={1.5} />, href: '#invisalign' },
  { id: 2, label: 'Dental Implants', icon: <Shield size={40} strokeWidth={1.5} />, href: '#implants-hero' },
  { id: 3, label: 'Smile Makeover', icon: <Sparkles size={40} strokeWidth={1.5} />, href: '#smile-makeover' },
  { id: 4, label: 'Braces', icon: <AlignCenter size={40} strokeWidth={1.5} />, href: '#treatments' },
  { id: 5, label: 'Teeth Whitening', icon: <Zap size={40} strokeWidth={1.5} />, href: '#treatments' },
  { id: 6, label: 'Veneers', icon: <Gem size={40} strokeWidth={1.5} />, href: '#treatments' },
  { id: 7, label: 'Root Canal', icon: <Activity size={40} strokeWidth={1.5} />, href: '#treatments' },
  { id: 8, label: 'Kids Dentistry', icon: <Baby size={40} strokeWidth={1.5} />, href: '#book' },
  { id: 9, label: 'Digital Scan', icon: <ScanLine size={40} strokeWidth={1.5} />, href: '#digital' },
  { id: 10, label: 'Dentofacial Ortho', icon: <Brain size={40} strokeWidth={1.5} />, href: '#treatments' },
  { id: 11, label: 'All-on-4', icon: <Layers size={40} strokeWidth={1.5} />, href: '#implants-hero' },
  { id: 12, label: 'General Checkup', icon: <Stethoscope size={40} strokeWidth={1.5} />, href: '#book' },
];

const TreatmentNavigator = () => {
  return (
    <section className="treatment-navigator" style={{
      backgroundColor: '#FFF9F1',
      padding: '3rem 0',
      borderBottom: '1px solid rgba(0,0,0,0.05)'
    }}>
      <div className="container">
        <div className="nav-grid" style={{
          display: 'grid',
          gap: '1rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))'
        }}>
          {navItems.map((item) => (
            <a 
              key={item.id} 
              href={item.href}
              className="nav-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                padding: '1.5rem 0.5rem',
                borderRadius: 'var(--radius-lg)',
                textDecoration: 'none',
                color: 'var(--text-primary)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                border: '1px solid rgba(0,0,0,0.02)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--accent-color)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(245,130,32,0.1)';
                e.currentTarget.querySelector('.nav-icon').style.color = 'var(--accent-color)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.02)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                e.currentTarget.querySelector('.nav-icon').style.color = 'var(--text-primary)';
              }}
            >
              <div 
                className="nav-icon"
                style={{ 
                  color: 'var(--text-primary)', 
                  marginBottom: '0.75rem',
                  transition: 'color 0.2s ease'
                }}
              >
                {item.icon}
              </div>
              <span style={{
                fontSize: '0.85rem',
                fontWeight: '600',
                textAlign: 'center',
                lineHeight: '1.2'
              }}>
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
      
      <style>{`
        @media (min-width: 1024px) {
          .nav-grid { grid-template-columns: repeat(6, 1fr) !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .nav-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 767px) {
          .nav-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .nav-card { padding: 1rem 0.25rem !important; }
          .nav-card span { font-size: 0.75rem !important; }
        }
      `}</style>
    </section>
  );
};

export default TreatmentNavigator;
