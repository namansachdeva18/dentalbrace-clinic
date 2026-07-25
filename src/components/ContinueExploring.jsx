import React from 'react';
import Link from 'next/link';
import { ArrowRight, Activity, Cpu, Stethoscope, BookOpen, Clock, Calendar, CheckCircle2 } from 'lucide-react';

const ContinueExploring = ({ data, currentSlug }) => {
  // Topic Clusters map to determine which cluster the current slug belongs to
  const clusters = {
    orthodontics: ['invisalign', 'braces', 'dentofacial-orthopedics', 'kids-dentistry'],
    implants: ['dental-implants', 'all-on-4', 'dental-crown-bridge'],
    smileMakeover: ['smile-makeover', 'veneers', 'teeth-whitening', 'composite-bonding', 'smile-designing', 'gum-treatment'],
    general: ['root-canal', 'wisdom-tooth-removal', 'digital-dentistry', 'maxillofacial-prosthetics']
  };

  // Determine the active cluster
  let activeClusterKey = 'general';
  for (const [key, slugs] of Object.entries(clusters)) {
    if (slugs.includes(currentSlug)) {
      activeClusterKey = key;
      break;
    }
  }

  // Fallback to cluster siblings if relatedTreatments is sparse
  const clusterSiblings = clusters[activeClusterKey].filter(slug => slug !== currentSlug);
  const relatedTreatments = data.relatedTreatments?.length > 0 ? data.relatedTreatments : clusterSiblings;

  // Formatting helpers
  const formatSlugToTitle = (slug) => {
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  // Safe lowercasing for condition slugs
  const getConditionSlug = (conditionName) => conditionName.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  return (
    <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      
      {/* Travel & Appointment Logistics Panel */}
      {data.travelLogistics && (
        <div style={{
          backgroundColor: '#fffcfc',
          borderRadius: '16px',
          padding: '2rem',
          border: '1px solid rgba(245, 130, 32, 0.15)',
          boxShadow: '0 8px 24px rgba(245, 130, 32, 0.04)'
        }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '0 0 1.5rem 0' }}>
            <Calendar color="var(--accent-color)" size={24} /> Appointment & Treatment Logistics
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            <div style={{ backgroundColor: 'white', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.04)' }}>
              <span style={{ color: 'var(--accent-color)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                <Clock size={18} /> Consultation
              </span>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{data.travelLogistics.consultation}</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.04)' }}>
              <span style={{ color: 'var(--accent-color)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                <Calendar size={18} /> Visits Required
              </span>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{data.travelLogistics.visitsRequired}</p>
            </div>
            <div style={{ backgroundColor: 'white', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.04)' }}>
              <span style={{ color: 'var(--accent-color)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                <CheckCircle2 size={18} /> Follow Up
              </span>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{data.travelLogistics.followUp}</p>
            </div>
          </div>
        </div>
      )}

      {/* Semantic Knowledge Panel */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '2rem',
        border: '1px solid rgba(0,0,0,0.06)',
        boxShadow: '0 8px 30px rgba(0,0,0,0.04)'
      }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '0 0 2rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '1rem' }}>
          <BookOpen color="var(--accent-color)" size={28} /> Explore Related Care
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
          
          {/* Semantic Column 1: Problems & Conditions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {data.relatedConditions && data.relatedConditions.length > 0 && (
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 0 1rem 0' }}>
                  <Activity size={18} color="#f87171" /> Conditions Treated
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {data.relatedConditions.map((condition, i) => {
                    const cSlug = getConditionSlug(condition);
                    const hasPage = ['malocclusion', 'edentulism', 'periodontitis', 'diastema', 'pericoronitis'].includes(cSlug);
                    return hasPage ? (
                      <Link key={i} href={`/conditions/${cSlug}`} style={{ display: 'inline-block', backgroundColor: '#fef2f2', border: '1px solid #fee2e2', fontSize: '0.85rem', padding: '0.35rem 1rem', borderRadius: '9999px', color: '#b91c1c', textDecoration: 'none', transition: 'background-color 0.2s' }}>
                        {condition}
                      </Link>
                    ) : (
                      <span key={i} style={{ display: 'inline-block', backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', fontSize: '0.85rem', padding: '0.35rem 1rem', borderRadius: '9999px', color: 'var(--text-secondary)' }}>
                        {condition}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {data.patientProblems && data.patientProblems.length > 0 && (
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 0 1rem 0' }}>
                  <Activity size={18} color="#f87171" /> Common Problems We Solve
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {data.patientProblems.map((problem, i) => (
                    <li key={i} style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem', lineHeight: '1.5' }}>
                      <span style={{ color: 'var(--accent-color)', marginTop: '2px', fontWeight: 'bold' }}>•</span> {problem}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {relatedTreatments && relatedTreatments.length > 0 && (
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 0 1rem 0' }}>
                  <ArrowRight size={18} color="var(--accent-color)" /> Related Treatments
                </h4>
                <ul style={{ listStyle: 'none', padding: '0 0 0 1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {relatedTreatments.map(slug => (
                    <li key={slug}>
                      <Link href={`/treatments/${slug}`} style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: '600', borderBottom: '1px solid transparent', transition: 'border-color 0.2s' }}>
                        {formatSlugToTitle(slug)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Semantic Column 2: Doctors & Technology */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {data.doctor && (
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 0 1rem 0' }}>
                  <Stethoscope size={18} color="var(--accent-color)" /> Treating Specialist
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', backgroundColor: '#faf8f4', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.04)' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', border: '2px solid white', boxShadow: '0 4px 10px rgba(0,0,0,0.08)', flexShrink: 0 }}>
                    <img src={data.doctor === 'Dr. Ritu Saneja' ? '/dr-ritu.jpg' : '/dr-sandeep.jpg'} alt={data.doctor} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <Link href={data.doctor === 'Dr. Ritu Saneja' ? '/doctors/dr-ritu-saneja' : '/doctors/dr-sandeep-kumar'} style={{ fontWeight: '700', color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.1rem', display: 'block' }}>
                      {data.doctor}
                    </Link>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: '0.25rem 0 0 0', fontWeight: '500' }}>
                      {data.doctor === 'Dr. Ritu Saneja' ? 'Prosthodontist & Implantologist' : 'Orthodontist (Ex-AIIMS)'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {data.technologyUsed && data.technologyUsed.length > 0 && (
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 0 1rem 0' }}>
                  <Cpu size={18} color="var(--accent-color)" /> Clinical Technology
                </h4>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                  {(Array.isArray(data.technologyUsed) ? data.technologyUsed : [data.technologyUsed]).map((tech, i) => (
                    <li key={i} style={{ paddingLeft: '0.25rem' }}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueExploring;
