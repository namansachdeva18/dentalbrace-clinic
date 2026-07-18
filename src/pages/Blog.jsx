import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Blog.css';

const blogPosts = [
  {
    id: 'invisalign-vs-braces',
    title: 'Invisalign vs. Traditional Braces: Which is Right for You?',
    excerpt: 'Discover the key differences between clear aligners and metal braces, including treatment time, cost, and comfort. Make an informed decision for your smile.',
    date: 'July 12, 2026',
    category: 'Orthodontics',
    author: 'Dr. Sandeep Kumar',
    image: '/images/indian_patient_smiling.png'
  },
  {
    id: 'dental-implants-cost-bathinda',
    title: 'Dental Implants in Bathinda: Cost, Procedure, and Lifespan',
    excerpt: 'Everything you need to know about getting dental implants in Punjab. Learn why implants are the gold standard for replacing missing teeth.',
    date: 'June 28, 2026',
    category: 'Implantology',
    author: 'Dr. Ritu Saneja',
    image: '/images/my-contact-photo.jpg'
  },
  {
    id: 'digital-smile-design',
    title: 'How Digital Smile Design is Revolutionizing Cosmetic Dentistry',
    excerpt: 'Preview your perfect smile before treatment even begins. Explore how 3D scanning and digital workflows are changing the face of modern dentistry.',
    date: 'June 15, 2026',
    category: 'Digital Dentistry',
    author: 'Dr. Ritu Saneja',
    image: '/images/indian_dentist_consultation.png'
  }
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className="blog-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Dental Blog & Patient Education | The DentalBrace Bathinda</title>
        <meta name="description" content="Read our latest articles on oral health, Invisalign, dental implants, and smile makeovers. Expert advice from Bathinda's leading MDS dentists." />
        <link rel="canonical" href="https://www.thedentalbrace.com/blog" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-secondary section-padding text-center relative overflow-hidden" style={{ paddingTop: 'calc(var(--header-height) + 60px)' }}>
        <div className="container relative z-10">
          <span className="section-badge mb-4 mx-auto" style={{ display: 'flex', width: 'fit-content' }}>
            <BookOpen size={16} /> Patient Education Hub
          </span>
          <h1 className="heading-primary mt-2">
            Insights for a <span className="text-accent">Healthier Smile</span>
          </h1>
          <p className="text-secondary max-w-2xl mx-auto mt-4">
            Expert articles, treatment guides, and the latest in digital dentistry from the specialists at The DentalBrace Clinic.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-ivory)' }}>
        <div className="container">
          <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {blogPosts.map((post) => (
              <div key={post.id} className="blog-card glass rounded-xl overflow-hidden shadow-soft" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="blog-image-wrapper" style={{ height: '220px', overflow: 'hidden' }}>
                  <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { if(e.target.src.includes('my-contact-photo.jpg')) e.target.src = "/images/premium_indian_clinic_interior.png" }} />
                </div>
                <div className="blog-content p-6 flex flex-col flex-grow">
                  <div className="blog-meta flex items-center justify-between text-xs font-semibold uppercase tracking-wider mb-3">
                    <span className="text-accent">{post.category}</span>
                    <span className="text-gray-500 flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  </div>
                  <h2 className="heading-secondary text-xl mb-3 leading-tight">{post.title}</h2>
                  <p className="text-secondary text-sm mb-6 flex-grow">{post.excerpt}</p>
                  
                  <div className="blog-footer flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                    <span className="text-xs font-semibold text-gray-700">By {post.author}</span>
                    <Link to={`/blog/${post.id}`} className="text-accent font-semibold text-sm flex items-center gap-1 group">
                      Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;
