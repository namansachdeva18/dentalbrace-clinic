'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Clock, Calendar, ArrowLeft, User, Share2, ChevronRight, ShieldCheck, CheckCircle2, Phone } from 'lucide-react';
import { blogArticles } from '@/data/blogData';
import './BlogPost.css';

const BlogPost = ({ params }) => {
  const id = params?.id || params?.slug;
  const article = blogArticles[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (() => { redirect("/blog"); return null; })();
  }

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "image": [
      "https://www.thedentalbrace.com" + article.image
    ],
    "datePublished": new Date(article.date).toISOString(),
    "dateModified": new Date(article.date).toISOString(),
    "author": [{
      "@type": "Person",
      "name": article.author,
      "url": article.author === 'Dr. Sandeep Kumar' 
        ? "https://www.thedentalbrace.com/doctors/dr-sandeep-kumar"
        : "https://www.thedentalbrace.com/doctors/dr-ritu-saneja"
    }],
    "publisher": {
      "@type": "Dentist",
      "name": "The DentalBrace Clinic & Implant Centre",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.thedentalbrace.com/logo.webp"
      }
    },
    "description": article.metaDesc
  };

  // FAQ Schema (Rich Snippets for Google SERP)
  const faqSchema = article.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.thedentalbrace.com/" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.thedentalbrace.com/blog" },
      { "@type": "ListItem", "position": 3, "name": article.title, "item": "https://www.thedentalbrace.com/blog/" + id }
    ]
  };

  return (
    <div className="page-wrapper">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      {/* ── Article Header ── */}
      <section className="bg-secondary pt-32 pb-16 px-4" style={{ paddingTop: 'calc(var(--header-height) + 40px)', background: 'linear-gradient(180deg, var(--bg-cream) 0%, var(--bg-ivory) 100%)' }}>
        <div className="container max-w-4xl mx-auto">
          <div className="mb-6">
            <Link href="/blog" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
              <ArrowLeft size={16} /> Back to All Articles
            </Link>
          </div>
          
          <div className="article-meta-top" style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
            <span className="category-badge" style={{ background: 'var(--accent-color)', color: '#ffffff', fontSize: '0.75rem', fontWeight: 700, padding: '0.3rem 0.85rem', borderRadius: '9999px', letterSpacing: '0.5px' }}>
              {article.category}
            </span>
            <div className="meta-details" style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Calendar size={14} /> {article.date}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Clock size={14} /> {article.readTime}</span>
            </div>
          </div>
          
          <h1 className="article-title heading-primary" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.75rem', color: 'var(--text-primary)' }}>
            {article.title}
          </h1>
          
          {/* Author Medically Reviewed Box */}
          <div className="author-box" style={{ background: '#ffffff', padding: '1.25rem 1.5rem', borderRadius: '16px', border: '1px solid var(--border-color)', display: 'inline-flex', alignItems: 'center', gap: '1rem', boxShadow: '0 4px 14px rgba(0,0,0,0.03)' }}>
            <img
              src={article.author === 'Dr. Sandeep Kumar' ? '/dr-sandeep.webp' : '/dr-ritu.webp'}
              alt={article.author}
              style={{ width: '54px', height: '54px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-color)' }}
            />
            <div>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <ShieldCheck size={13} /> Medically Reviewed &amp; Authored By
              </span>
              <Link href={article.author === 'Dr. Sandeep Kumar' ? '/doctors/dr-sandeep-kumar' : '/doctors/dr-ritu-saneja'} style={{ fontWeight: 800, color: 'var(--text-primary)', textDecoration: 'none', fontSize: '1.05rem', display: 'block' }}>
                {article.author}
              </Link>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{article.authorRole}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Banner Image ── */}
      <section className="featured-image-section px-4 -mt-8" style={{ marginTop: '-1.5rem', marginBottom: '2.5rem' }}>
        <div className="container max-w-4xl mx-auto">
          <div className="article-hero-image shadow-soft" style={{ borderRadius: '24px', overflow: 'hidden', maxHeight: '440px', border: '1px solid var(--border-color)' }}>
            <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* ── Article Main Body ── */}
      <section className="article-body-section section-padding px-4" style={{ padding: '1rem 0 4rem' }}>
        <div className="container max-w-3xl mx-auto">
          
          {/* Main Prose HTML Content */}
          <div className="article-content" style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--text-primary)' }} dangerouslySetInnerHTML={{ __html: article.content }} />
          
          {/* FAQ Accordion Section */}
          {article.faqs && article.faqs.length > 0 && (
            <div style={{ marginTop: '3.5rem', paddingTop: '2.5rem', borderTop: '2px solid var(--border-color)' }}>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                Frequently Asked Questions
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {article.faqs.map((faq, idx) => (
                  <details key={idx} style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid var(--border-color)', padding: '1.25rem 1.5rem' }}>
                    <summary style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', cursor: 'pointer', listStyle: 'none' }}>
                      ❓ {faq.q}
                    </summary>
                    <p style={{ marginTop: '0.85rem', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* Share Buttons */}
          <div className="article-footer mt-12 pt-8 border-t border-gray-200" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
            <div className="share-box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <span className="font-semibold text-gray-700 flex items-center gap-2" style={{ fontWeight: 700, fontSize: '0.95rem' }}>
                <Share2 size={18} /> Share this article:
              </span>
              <div className="share-buttons" style={{ display: 'flex', gap: '0.5rem' }}>
                <a href={"https://www.facebook.com/sharer/sharer.php?u=https://www.thedentalbrace.com/blog/" + id} target="_blank" rel="noopener noreferrer" className="share-btn fb" style={{ padding: '0.45rem 1rem', background: '#1877F2', color: '#fff', borderRadius: '9999px', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none' }}>Facebook</a>
                <a href={"https://api.whatsapp.com/send?text=" + encodeURIComponent(article.title + " https://www.thedentalbrace.com/blog/" + id)} target="_blank" rel="noopener noreferrer" className="share-btn wa" style={{ padding: '0.45rem 1rem', background: '#25D366', color: '#fff', borderRadius: '9999px', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none' }}>WhatsApp</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Read Related Articles ── */}
      <section className="bg-cream section-padding px-4" style={{ background: 'var(--bg-cream)', padding: '4rem 0' }}>
        <div className="container max-w-5xl mx-auto">
          <h3 className="heading-secondary text-center mb-8" style={{ textAlign: 'center', marginBottom: '2rem' }}>Related Articles</h3>
          <div className="related-articles-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {Object.keys(blogArticles)
              .filter(key => key !== id)
              .slice(0, 2)
              .map(key => {
                const post = blogArticles[key];
                return (
                  <Link href={"/blog/" + key} key={key} className="related-card glass shadow-soft" style={{ background: '#ffffff', borderRadius: '20px', overflow: 'hidden', textDecoration: 'none', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <span className="text-accent text-xs font-bold uppercase" style={{ color: 'var(--accent-color)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>{post.category}</span>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0.5rem 0 1rem 0', lineHeight: 1.3 }}>{post.title}</h4>
                      <span style={{ color: 'var(--accent-color)', fontSize: '0.88rem', fontWeight: 700, marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        Read Article <ChevronRight size={14} />
                      </span>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
