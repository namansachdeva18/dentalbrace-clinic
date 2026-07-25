'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Clock, Calendar, ArrowLeft, User, Share2, ChevronRight } from 'lucide-react';
import './BlogPost.css';

// Using the same blogData structure as before, wrapped inside the component or kept as a constant
const blogArticles = {
  'invisible-braces-cost-bathinda': {
    title: 'Invisible Braces (Invisalign) Cost in Bathinda: A Complete 2026 Guide',
    date: 'January 15, 2026',
    author: 'Dr. Sandeep Kumar',
    authorRole: 'Consultant Orthodontist (Ex-AIIMS)',
    readTime: '6 min read',
    category: 'Orthodontics',
    image: '/images/invisalign-aligner-tray.jpg',
    metaDesc: 'Wondering about the cost of invisible braces in Bathinda? Learn about Invisalign pricing, EMI options, and why Dr. Sandeep Kumar is the top choice.',
    content: `
      <h2>The Rise of Invisible Braces in Punjab</h2>
      <p>Gone are the days when straightening your teeth meant enduring years of metal wires and brackets. Today, clear aligners (most notably Invisalign) have revolutionized orthodontic treatment. At The DentalBrace Clinic in Bathinda, we've seen a massive surge in adults and teenagers opting for invisible braces.</p>
      
      <h2>What Factors Influence the Cost?</h2>
      <p>The cost of invisible braces isn't one-size-fits-all. It depends on several critical factors:</p>
      <ul>
        <li><strong>Case Complexity:</strong> Minor crowding takes fewer aligners and less time than severe bite issues.</li>
        <li><strong>Brand of Aligners:</strong> Invisalign (USA) is the premium standard with the most predictable results. We also offer high-quality Indian aligner brands (like Flash or Illusion) which are more budget-friendly.</li>
        <li><strong>Doctor's Expertise:</strong> An orthodontist trained at premier institutes like AIIMS brings superior diagnostic skills. Dr. Sandeep Kumar has successfully treated over 5,500 cases, ensuring your treatment is planned perfectly from day one.</li>
      </ul>

      <h2>Average Cost Breakdown in Bathinda (2026)</h2>
      <p>While an exact quote requires a clinical consultation and 3D scan, here is a general pricing guide:</p>
      <ul>
        <li><strong>Basic Indian Aligners:</strong> ₹50,000 – ₹80,000</li>
        <li><strong>Advanced Indian Aligners:</strong> ₹80,000 – ₹1,20,000</li>
        <li><strong>Invisalign (Comprehensive):</strong> ₹1,50,000 – ₹3,50,000+</li>
      </ul>

      <div class="highlight-box">
        <strong>Did You Know?</strong> We offer flexible 0% interest EMI options starting at just ₹5,000/month, making world-class Invisalign treatment affordable for everyone in Bathinda and surrounding regions.
      </div>

      <h2>Why Choose The DentalBrace Clinic?</h2>
      <p>We are a certified Invisalign provider. We utilize advanced intraoral scanners (no messy impressions!) to show you a 3D simulation of your final smile before treatment even begins.</p>

      <div class="cta-box">
        <h3>Ready for a Straighter Smile?</h3>
        <p>Book a consultation with Dr. Sandeep Kumar today and get your customized 3D smile simulation.</p>
        <a href="/contact" class="btn btn-primary">Book Consultation</a>
      </div>
    `
  },
  'dental-implants-vs-dentures': {
    title: 'Dental Implants vs Dentures: Which is the Best Option for You?',
    date: 'January 28, 2026',
    author: 'Dr. Ritu Saneja',
    authorRole: 'Implantologist & Prosthodontist (Gold Medalist)',
    readTime: '5 min read',
    category: 'Implants',
    image: '/images/dental-implant-structure.jpg',
    metaDesc: 'Missing teeth? Compare dental implants and dentures. Discover why Dr. Ritu Saneja recommends implants for a permanent, natural-feeling solution.',
    content: `
      <h2>The Dilemma of Missing Teeth</h2>
      <p>Losing teeth can severely impact your confidence, speech, and ability to eat. When it comes to replacing them, patients usually face a choice between traditional dentures and modern dental implants.</p>

      <h2>Traditional Dentures: The Old Standard</h2>
      <p>Dentures have been around for centuries. While modern materials have made them look better, they still sit on top of the gums. This often leads to slipping while talking or eating, sore spots, and the need for messy adhesives. More importantly, dentures do not stimulate the jawbone, leading to bone loss over time and a "sunken" facial appearance.</p>

      <h2>Dental Implants: The Modern Miracle</h2>
      <p>A dental implant is a titanium post surgically placed into the jawbone, acting as an artificial tooth root. A custom-made crown is then attached to it.</p>
      <ul>
        <li><strong>Permanent & Secure:</strong> They are fixed in your mouth. You brush them like natural teeth.</li>
        <li><strong>Preserves Jawbone:</strong> Implants stimulate the bone, preventing bone loss and preserving your facial structure.</li>
        <li><strong>100% Chewing Power:</strong> Eat apples, nuts, and steaks without worry.</li>
      </ul>

      <h2>The All-on-4 / All-on-6 Solution</h2>
      <p>If you are missing all your teeth, you don't need an implant for every single tooth. At The DentalBrace Clinic, Dr. Ritu Saneja specializes in "Full Mouth Rehabilitation" using 4 or 6 implants to support a complete set of fixed, permanent teeth.</p>

      <div class="highlight-box">
        <strong>Expert Tip:</strong> While the initial cost of implants is higher than dentures, they are a one-time investment that can last a lifetime with proper care, making them more cost-effective in the long run.
      </div>

      <div class="cta-box">
        <h3>Restore Your Smile and Confidence</h3>
        <p>Consult with Dr. Ritu Saneja, our Gold Medalist Implantologist, to see if you are a candidate for dental implants.</p>
        <a href="/contact" class="btn btn-primary">Schedule Implant Consultation</a>
      </div>
    `
  },
  'digital-smile-design-bathinda': {
    title: 'Digital Smile Design: See Your New Smile Before Treatment',
    date: 'February 10, 2026',
    author: 'Dr. Ritu Saneja',
    authorRole: 'Prosthodontist & Aesthetic Dentist',
    readTime: '4 min read',
    category: 'Cosmetic Dentistry',
    image: '/images/smile-makeover-patient.jpg',
    metaDesc: 'Discover Digital Smile Design at The DentalBrace Clinic, Bathinda. Co-design your perfect smile with Dr. Ritu Saneja and see the results before treatment starts.',
    content: `
      <h2>What if you could test-drive your smile?</h2>
      <p>In the past, cosmetic dentistry involved a bit of guesswork. You explained what you wanted, the dentist did their best, and you hoped the final veneers or crowns looked good. Not anymore.</p>
      <p>With Digital Smile Design (DSD) at The DentalBrace Clinic, we remove the guesswork completely.</p>

      <h2>How Digital Smile Design Works</h2>
      <ol>
        <li><strong>Digital Scanning & Photography:</strong> We take high-resolution photos, videos of your facial expressions, and a 3D digital scan of your teeth.</li>
        <li><strong>Facial Analysis:</strong> We analyze your facial symmetry, lip line, and eye alignment. The perfect smile isn't just about white teeth; it's about teeth that harmonize with your unique face.</li>
        <li><strong>Digital Simulation:</strong> Using advanced software, Dr. Ritu Saneja designs your new teeth. We can adjust the shape, length, and color digitally.</li>
        <li><strong>The "Mock-Up":</strong> We create a temporary resin version of your new smile and place it over your teeth. You can look in the mirror, take photos, and literally test-drive your new smile before we even touch your natural teeth!</li>
      </ol>

      <h2>Why Our Patients Love It</h2>
      <ul>
        <li><strong>Total Predictability:</strong> You know exactly what you are paying for.</li>
        <li><strong>Co-Author Your Smile:</strong> You get to be part of the design process. If you want the teeth slightly shorter or a different shade of white, we adjust it digitally before starting.</li>
        <li><strong>Minimally Invasive:</strong> Because we plan digitally, we only remove the absolute minimum amount of tooth structure necessary to achieve the result.</li>
      </ul>

      <h2>A New Standard in Bathinda</h2>
      <p>Cosmetic dentistry requires both scientific precision and artistic vision. By combining Dr. Ritu Saneja's Gold Medalist expertise with Digital Smile Design technology, The DentalBrace Clinic ensures your smile makeover isn't just an improvement—it's perfection.</p>

      <div class="cta-box">
        <h3>See Your New Smile Today</h3>
        <p>Curious about how you would look with a perfect smile? Book a Digital Smile Design consultation at our clinic in Bathinda.</p>
        <a href="/contact" class="btn btn-primary">Contact Us to Book</a>
      </div>
    `
  }
};

const BlogPost = ({ params }) => {
  const id = params.id;
  const article = blogArticles[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (() => { redirect("/blog"); return null; })();
  }

  // Structured Data for SEO (Article Schema)
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
        "url": "https://www.thedentalbrace.com/about"
      }],
    "publisher": {
      "@type": "Organization",
      "name": "The DentalBrace Clinic",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.thedentalbrace.com/logo.png"
      }
    },
    "description": article.metaDesc
  };

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

      {/* Article Header */}
      <section className="bg-secondary pt-32 pb-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/blog" className="back-link">
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </div>
          
          <div className="article-meta-top">
            <span className="category-badge">{article.category}</span>
            <div className="meta-details">
              <span><Calendar size={14} /> {article.date}</span>
              <span><Clock size={14} /> {article.readTime}</span>
            </div>
          </div>
          
          <h1 className="article-title heading-primary">{article.title}</h1>
          
          <div className="author-box" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="author-avatar" style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--accent-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <User size={24} color="var(--accent-color)" />
              </div>
              <div className="author-info">
                <strong className="text-xs text-gray-500 uppercase tracking-wider" style={{ display: 'block', marginBottom: '0.2rem' }}>Medically Written & Reviewed By</strong>
                <div>
                  <Link href={article.author === 'Dr. Sandeep Kumar' ? '/doctors/dr-sandeep-kumar' : '/doctors/dr-ritu-saneja'} className="font-bold text-gray-900 hover:text-accent transition-colors" style={{ display: 'block', fontSize: '1.1rem' }}>
                    {article.author}
                  </Link>
                  <span className="text-sm text-gray-600">{article.authorRole}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="featured-image-section px-4 -mt-8">
        <div className="container max-w-4xl mx-auto">
          <div className="article-hero-image shadow-soft">
            <img src={article.image} alt={article.title} onError={(e) => { if(e.target.src.includes('my-contact-photo.jpg')) e.target.src = "/images/premium_indian_clinic_interior.png" }} />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="article-body-section section-padding px-4">
        <div className="container max-w-3xl mx-auto">
          
          <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
          
          <div className="article-footer mt-12 pt-8 border-t border-gray-200">
            <div className="share-box">
              <span className="font-semibold text-gray-700 flex items-center gap-2">
                <Share2 size={18} /> Share this article:
              </span>
              <div className="share-buttons">
                <a href={"https://www.facebook.com/sharer/sharer.php?u=https://www.thedentalbrace.com/blog/" + id} target="_blank" rel="noopener noreferrer" className="share-btn fb">Facebook</a>
                <a href={"https://twitter.com/intent/tweet?url=https://www.thedentalbrace.com/blog/" + id + "&text=" + encodeURIComponent(article.title)} target="_blank" rel="noopener noreferrer" className="share-btn tw">Twitter</a>
                <a href={"https://api.whatsapp.com/send?text=" + encodeURIComponent(article.title + " https://www.thedentalbrace.com/blog/" + id)} target="_blank" rel="noopener noreferrer" className="share-btn wa">WhatsApp</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Read Next Section */}
      <section className="bg-cream section-padding px-4">
        <div className="container max-w-5xl mx-auto">
          <h3 className="heading-secondary text-center mb-8">Related Articles</h3>
          <div className="related-articles-grid">
            {Object.keys(blogArticles)
              .filter(key => key !== id)
              .slice(0, 2)
              .map(key => {
                const post = blogArticles[key];
                return (
                  <Link href={"/blog/" + key} key={key} className="related-card glass shadow-soft">
                    <img src={post.image} alt={post.title} className="related-img" />
                    <div className="related-content">
                      <span className="text-accent text-xs font-bold uppercase">{post.category}</span>
                      <h4 className="mt-2 font-bold text-gray-900 leading-tight">{post.title}</h4>
                      <span className="read-more-link mt-4 flex items-center gap-1 text-sm font-semibold text-accent">
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
