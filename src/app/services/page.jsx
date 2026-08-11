'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  SmilePlus, Stethoscope, Sparkles, Wrench, Monitor,
  ArrowRight, ShieldCheck, CheckCircle2, Star, Award, Phone, Calendar
} from 'lucide-react';
import './Services.css';

const ServicesPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    {
      id: 'ortho',
      title: 'Orthodontics & Aligners',
      subtitle: '4 Specialized Procedures',
      icon: <SmilePlus size={28} />,
      services: [
        { name: 'Invisalign & Clear Aligners', slug: 'invisalign', tag: 'Virtually Invisible · Certified Provider' },
        { name: 'Traditional Dental Braces', slug: 'braces', tag: 'Metal, Ceramic & Damon Braces' },
        { name: 'Dentofacial Orthopedics', slug: 'dentofacial-orthopedics', tag: 'Jaw Growth & Bite Correction' },
        { name: 'Kids Dentistry', slug: 'kids-dentistry', tag: 'Gentle Pediatric & Early Ortho' },
      ]
    },
    {
      id: 'implants',
      title: 'Implantology & Prosthetics',
      subtitle: '3 Specialized Procedures',
      icon: <Stethoscope size={28} />,
      services: [
        { name: 'Dental Implants', slug: 'dental-implants', tag: 'Titanium & Zirconia Permanent Teeth' },
        { name: 'All-on-4 / All-on-6 Implants', slug: 'all-on-4', tag: 'Full Mouth Fixed Teeth' },
        { name: 'Maxillofacial Prosthetics', slug: 'maxillofacial-prosthetics', tag: 'Post-Cancer & Trauma Rehab' },
      ]
    },
    {
      id: 'cosmetic',
      title: 'Cosmetic Dentistry',
      subtitle: '5 Specialized Procedures',
      icon: <Sparkles size={28} />,
      services: [
        { name: 'Digital Smile Makeover', slug: 'smile-makeover', tag: 'Custom Smile Transformation' },
        { name: 'Porcelain Dental Veneers', slug: 'veneers', tag: 'E-max Ultra-Thin Porcelain' },
        { name: 'Professional Teeth Whitening', slug: 'teeth-whitening', tag: 'Up to 8 Shades Brighter' },
        { name: 'Composite Bonding', slug: 'composite-bonding', tag: 'Fix Chips & Gaps in 1 Visit' },
        { name: 'Digital Smile Design', slug: 'smile-designing', tag: '3D Preview Before Treatment' },
      ]
    },
    {
      id: 'general',
      title: 'General & Restorative',
      subtitle: '4 Specialized Procedures',
      icon: <Wrench size={28} />,
      services: [
        { name: 'Painless Root Canal', slug: 'root-canal', tag: 'Rotary Endodontics · Tooth Saving' },
        { name: 'Dental Crown & Bridge', slug: 'dental-crown-bridge', tag: 'Zirconia & E.max Prosthetics' },
        { name: 'Gum Treatment & Scaling', slug: 'gum-treatment', tag: 'Laser Periodontal Care' },
        { name: 'Wisdom Tooth Removal', slug: 'wisdom-tooth-removal', tag: 'Painless Surgical Extraction' },
      ]
    },
    {
      id: 'digital',
      title: 'Digital Dentistry',
      subtitle: '2 Specialized Technologies',
      icon: <Monitor size={28} />,
      services: [
        { name: 'Digital Dentistry Overview', slug: 'digital-dentistry', tag: '3D Scanning & CAD/CAM Workflow' },
        { name: '3D Intraoral Scanner', slug: '3d-intraoral-scanner', tag: 'iTero No-Putty Impressions' },
      ]
    },
  ];

  const filterTabs = [
    { id: 'all', label: 'All Services (18)' },
    { id: 'ortho', label: 'Orthodontics' },
    { id: 'implants', label: 'Implants & Rehab' },
    { id: 'cosmetic', label: 'Cosmetic' },
    { id: 'general', label: 'General & RCT' },
    { id: 'digital', label: 'Digital Tech' },
  ];

  const filteredCategories = activeFilter === 'all'
    ? categories
    : categories.filter(c => c.id === activeFilter);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Dental Treatments and Services at The DentalBrace Clinic",
    "description": "Comprehensive list of premium dental treatments including Invisalign, Dental Implants, Braces, and Smile Makeovers.",
    "itemListElement": categories.flatMap(cat => cat.services).map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": service.name,
      "url": `https://www.thedentalbrace.com/treatments/${service.slug}`
    }))
  };

  return (
    <div className="services-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      
      {/* ── 1. Hero Section ── */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero__header">
            <span className="services-hero__badge">
              <ShieldCheck size={14} /> Comprehensive Clinical Portfolio
            </span>
            <h1 className="services-hero__title">
              World-Class <span>Dental Services</span> in Bathinda
            </h1>
            <p className="services-hero__subtitle">
              From invisible aligners and full-mouth dental implants to 3D digital smile design — delivered by AIIMS &amp; BHU-trained specialists.
            </p>

            <div className="services-hero__stats">
              <div className="services-hero__stat-pill">
                <Star size={15} /> <span><strong>5,500+</strong> Aligner &amp; Braces Cases</span>
              </div>
              <div className="services-hero__stat-pill">
                <Award size={15} /> <span><strong>5,000+</strong> Implants Placed</span>
              </div>
              <div className="services-hero__stat-pill">
                <ShieldCheck size={15} /> <span><strong>BHU &amp; AIIMS</strong> Specialists</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Sticky Filter Bar ── */}
      <div className="services-filter-bar">
        <div className="container">
          <div className="services-filter-bar__list">
            {filterTabs.map(tab => (
              <button
                key={tab.id}
                className={`services-filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. Services Grid ── */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {filteredCategories.map((cat) => (
              <div key={cat.id} className="service-category-card">
                
                {/* Category Header */}
                <div className="service-category-header">
                  <div className="service-category-icon-wrap">
                    {cat.icon}
                  </div>
                  <div>
                    <h2 className="service-category-title">{cat.title}</h2>
                    <span className="service-category-count">{cat.subtitle}</span>
                  </div>
                </div>

                {/* Service Item Links */}
                <ul className="service-item-list">
                  {cat.services.map((service) => (
                    <li key={service.slug}>
                      <Link href={`/treatments/${service.slug}`} className="service-item-link">
                        <div className="service-item-info">
                          <span className="service-item-name">{service.name}</span>
                          <span className="service-item-tag">{service.tag}</span>
                        </div>
                        <div className="service-item-arrow">
                          <ArrowRight size={15} />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Featured Flagship Treatments Banner ── */}
      <section className="services-featured-section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="services-hero__badge" style={{ background: 'rgba(255,255,255,0.1)', color: '#ffa855', borderColor: 'rgba(255,255,255,0.2)' }}>
              Flagship Clinical Specialties
            </span>
            <h2 className="heading-secondary text-white mt-2">What We Are Most Renowned For</h2>
          </div>

          <div className="services-featured-grid">
            
            {/* Flagship 1: Invisalign */}
            <div className="featured-service-card">
              <div>
                <span className="featured-service-badge">#1 Aligner Provider in Bathinda</span>
                <h3 className="featured-service-title">Invisalign &amp; Clear Aligners</h3>
                <p className="featured-service-desc">
                  Virtually invisible, removable aligners designed digitally for precise teeth straightening without metal wires.
                </p>
                <ul className="featured-service-bullets">
                  <li className="featured-service-bullet">
                    <CheckCircle2 size={16} /> <span>Led by Dr. Sandeep Kumar (Ex-AIIMS, 5500+ Cases)</span>
                  </li>
                  <li className="featured-service-bullet">
                    <CheckCircle2 size={16} /> <span>3D iTero Digital Outcome Simulator included</span>
                  </li>
                  <li className="featured-service-bullet">
                    <CheckCircle2 size={16} /> <span>Flexible No-Cost EMI plans available</span>
                  </li>
                </ul>
              </div>
              <Link href="/treatments/invisalign" className="featured-service-cta">
                Explore Invisalign Details <ArrowRight size={16} />
              </Link>
            </div>

            {/* Flagship 2: Dental Implants */}
            <div className="featured-service-card">
              <div>
                <span className="featured-service-badge">Gold Medalist Implantologist</span>
                <h3 className="featured-service-title">Dental Implants &amp; All-on-4</h3>
                <p className="featured-service-desc">
                  Permanent, natural-looking tooth replacements — from single tooth implants to full mouth rehabilitation in a single day.
                </p>
                <ul className="featured-service-bullets">
                  <li className="featured-service-bullet">
                    <CheckCircle2 size={16} /> <span>Led by Dr. Ritu Saneja (MDS Gold Medalist, 5000+ Implants)</span>
                  </li>
                  <li className="featured-service-bullet">
                    <CheckCircle2 size={16} /> <span>Guided 3D CBCT Implant Surgery</span>
                  </li>
                  <li className="featured-service-bullet">
                    <CheckCircle2 size={16} /> <span>Lifetime Warranty options on Zirconia Crowns</span>
                  </li>
                </ul>
              </div>
              <Link href="/treatments/dental-implants" className="featured-service-cta">
                Explore Dental Implants <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. Bottom Trust CTA Section ── */}
      <section className="services-trust-cta">
        <div className="container">
          <div className="services-trust-cta__box">
            <h2 className="services-trust-cta__title">
              Not Sure Which Treatment You Need?
            </h2>
            <p className="services-trust-cta__desc">
              Schedule a comprehensive 3D digital consultation with our BHU &amp; AIIMS-trained specialists at The DentalBrace Clinic.
            </p>
            <div className="services-trust-cta__actions">
              <a href="/dental-offer-bathinda#campaign-form" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={18} /> Book Consultation @ ₹200
              </a>
              <a href="tel:7496849392" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={18} /> +91 74968-49392
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
