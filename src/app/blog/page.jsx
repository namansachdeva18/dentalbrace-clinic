'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BookOpen, Calendar, ArrowRight, User, ShieldCheck, Search, Sparkles } from 'lucide-react';
import { blogPosts } from '@/data/blogData';
import './Blog.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Orthodontics', 'Implantology', 'Full Mouth Rehab', 'Cosmetic Dentistry', 'Restorative Care', 'Digital Dentistry'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-wrapper">
      
      {/* ── 1. Hero Section ── */}
      <section className="bg-secondary section-padding text-center relative overflow-hidden" style={{ paddingTop: 'calc(var(--header-height) + 50px)', paddingBottom: '3.5rem' }}>
        <div className="container relative z-10">
          <span className="section-badge mb-4 mx-auto" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <BookOpen size={15} /> Dental Health &amp; Education Hub
          </span>
          <h1 className="heading-primary mt-2">
            Patient Guides &amp; <span className="text-accent">Clinical Insights</span>
          </h1>
          <p className="text-secondary max-w-2xl mx-auto mt-4 text-lg">
            Medically reviewed articles on Invisalign, dental implants, smile makeovers, and costs in Bathinda — written directly by BHU &amp; AIIMS-trained specialists.
          </p>

          {/* Search Bar */}
          <div style={{ maxWidth: '540px', margin: '2rem auto 0', position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
            <input
              type="text"
              placeholder="Search treatments, costs, aligners, implants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.9rem 1rem 0.9rem 48px',
                borderRadius: '9999px',
                border: '1px solid var(--border-color)',
                background: '#ffffff',
                fontSize: '0.95rem',
                outline: 'none',
                boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
                color: 'var(--text-primary)'
              }}
            />
          </div>
        </div>
      </section>

      {/* ── 2. Category Filter Bar ── */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid var(--border-color)', padding: '1rem 0', position: 'sticky', top: 'var(--header-height)', zIndex: 100, boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.6rem', overflowX: 'auto', paddingBottom: '0.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: '9999px',
                  border: activeCategory === cat ? '1px solid var(--accent-color)' : '1px solid var(--border-color)',
                  background: activeCategory === cat ? 'var(--accent-color)' : 'var(--bg-ivory)',
                  color: activeCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  whiteSpace: 'nowrap'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. Blog Grid Section ── */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)' }}>
        <div className="container">
          {filteredPosts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <p className="text-secondary text-lg">No articles found matching &quot;{searchQuery}&quot;.</p>
              <button onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} className="btn btn-outline" style={{ marginTop: '1rem' }}>Clear Filters</button>
            </div>
          ) : (
            <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', gap: '2.25rem' }}>
              {filteredPosts.map((post) => (
                <div key={post.id} className="blog-card glass rounded-xl overflow-hidden shadow-soft hover-elevate" style={{ display: 'flex', flexDirection: 'column', background: '#ffffff', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
                  
                  {/* Article Thumbnail Image */}
                  <div className="blog-image-wrapper" style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                    <span style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 2, background: 'rgba(15,61,62,0.9)', color: '#ffffff', fontSize: '0.72rem', fontWeight: 700, padding: '0.3rem 0.8rem', borderRadius: '9999px', letterSpacing: '0.5px', backdropFilter: 'blur(4px)' }}>
                      {post.category}
                    </span>
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    />
                  </div>

                  {/* Body Content */}
                  <div className="blog-content p-6 flex flex-col flex-grow" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Calendar size={13} color="var(--accent-color)" /> {post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.3, marginBottom: '0.75rem' }}>
                      <Link href={`/blog/${post.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-secondary" style={{ fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                      {post.excerpt}
                    </p>
                    
                    {/* Author & CTA Footer */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1rem', marginTop: 'auto' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <User size={14} color="var(--accent-color)" /> {post.author}
                      </span>
                      <Link href={`/blog/${post.id}`} style={{ color: 'var(--accent-color)', fontWeight: 700, fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.25rem', textDecoration: 'none' }}>
                        Read Article <ArrowRight size={14} />
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── 4. Bottom Consultation Lead Gen Banner ── */}
      <section style={{ background: 'var(--bg-navy)', padding: '4.5rem 0', color: '#ffffff', textAlign: 'center' }}>
        <div className="container max-w-3xl mx-auto">
          <span className="section-badge" style={{ background: 'rgba(255,255,255,0.1)', color: '#ffa855', borderColor: 'rgba(255,255,255,0.2)' }}>
            <Sparkles size={14} /> Expert Clinical Guidance
          </span>
          <h2 className="heading-secondary text-white mt-3" style={{ fontSize: '2.2rem' }}>
            Have Specific Questions About Your Dental Health?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', margin: '1rem auto 2rem', maxWidth: '640px' }}>
            Book a 3D digital consultation with Dr. Sandeep Kumar or Dr. Ritu Saneja at The DentalBrace Clinic Bathinda.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/dental-offer-bathinda#campaign-form" className="btn btn-primary">Book Consultation @ ₹200</a>
            <a href="tel:7496849392" className="btn btn-outline" style={{ background: 'transparent', color: '#ffffff', borderColor: 'rgba(255,255,255,0.3)' }}>Call +91 74968-49392</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Blog;
