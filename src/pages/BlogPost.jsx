import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Clock, Share2, ChevronRight } from 'lucide-react';
import './BlogPost.css';

// ─── SEO-Optimized Blog Articles Data ──────────────────────────────────────
const blogArticles = {
  'invisalign-vs-braces': {
    title: 'Invisalign vs. Traditional Braces: Which is Right for You in Bathinda?',
    metaTitle: 'Invisalign vs Braces Bathinda | Best Orthodontist Dr. Sandeep Kumar',
    metaDesc: 'Deciding between Invisalign and traditional braces? Learn the pros, cons, costs, and timeline from Bathinda\'s top Invisalign provider, Dr. Sandeep Kumar (Ex-AIIMS).',
    date: 'July 12, 2026',
    readTime: '6 min read',
    category: 'Orthodontics',
    author: 'Dr. Sandeep Kumar',
    authorRole: 'Consultant Orthodontist & Aligners Expert',
    image: '/images/indian_patient_smiling.png',
    content: `
      <p class="lead">Choosing the right orthodontic treatment is a significant decision. If you're looking to straighten your teeth in Bathinda, you're likely weighing two main options: traditional metal or ceramic braces, and clear aligners like Invisalign. Both achieve stunning results, but they suit different lifestyles and needs.</p>

      <h2>The Rise of Clear Aligners in Punjab</h2>
      <p>For decades, traditional braces were the only reliable method for correcting misaligned teeth, overbites, and gaps. However, with the advent of digital dentistry, clear aligners—specifically <strong>Invisalign</strong>—have revolutionised orthodontic care. At The DentalBrace Clinic in Bathinda, we've successfully treated over 5,500 cases, giving us deep insights into which system works best for our patients.</p>

      <h2>Invisalign: The Invisible Revolution</h2>
      <p>Invisalign uses a series of custom-made, clear plastic trays (aligners) that fit snugly over your teeth. Every 1 to 2 weeks, you switch to a new set, gradually moving your teeth into their ideal positions.</p>
      
      <h3>Pros of Invisalign:</h3>
      <ul>
        <li><strong>Aesthetics:</strong> They are virtually invisible. Most people won't even notice you're wearing them, making them perfect for adults and working professionals in Bathinda.</li>
        <li><strong>Comfort:</strong> Smooth plastic means no sharp metal brackets or wires to cut your cheeks or lips.</li>
        <li><strong>No Food Restrictions:</strong> Because you remove them to eat, you can still enjoy your favourite Punjabi foods—from makki di roti to crispy pakoras—without fear of breaking a bracket.</li>
        <li><strong>Better Oral Hygiene:</strong> You can brush and floss normally without navigating around wires.</li>
      </ul>

      <h3>Cons of Invisalign:</h3>
      <ul>
        <li><strong>Compliance is Key:</strong> You <em>must</em> wear them for 20-22 hours a day. If you forget to put them back in, your treatment will stall.</li>
        <li><strong>Not for Severe Cases:</strong> While Invisalign can treat complex cases today, extremely severe jaw misalignments might still require traditional braces.</li>
      </ul>

      <h2>Traditional Braces: The Reliable Standard</h2>
      <p>Traditional braces consist of metal or ceramic brackets glued to your teeth, connected by a wire that is periodically tightened by your orthodontist to apply pressure.</p>

      <h3>Pros of Braces:</h3>
      <ul>
        <li><strong>Highly Effective:</strong> They can fix virtually any orthodontic issue, no matter how severe.</li>
        <li><strong>Zero Compliance Issues:</strong> Because they are glued on, you don't have to remember to wear them. They are working 24/7.</li>
        <li><strong>Cost-Effective:</strong> Traditional metal braces are generally the most affordable orthodontic option available in Bathinda.</li>
      </ul>

      <h3>Cons of Braces:</h3>
      <ul>
        <li><strong>Visibility:</strong> Even tooth-coloured ceramic braces are somewhat noticeable.</li>
        <li><strong>Food Restrictions:</strong> Hard, sticky, or chewy foods can break brackets or bend wires.</li>
        <li><strong>Maintenance:</strong> Brushing and flossing require special tools and extra time.</li>
      </ul>

      <h2>Cost Comparison in Bathinda</h2>
      <p>Generally, traditional metal braces are the most budget-friendly option. Ceramic braces cost slightly more. Invisalign is a premium product and carries a higher price tag due to the advanced 3D scanning and proprietary SmartTrack material. However, at The DentalBrace Clinic, we offer flexible EMI options to make all treatments accessible.</p>

      <h2>The Verdict: Which Should You Choose?</h2>
      <p>If you have the discipline to wear aligners 22 hours a day and prioritise aesthetics and comfort, <strong>Invisalign</strong> is undoubtedly the superior choice. If you have a highly complex bite issue, a tighter budget, or prefer a "set it and forget it" approach, <strong>traditional braces</strong> remain an excellent, reliable option.</p>

      <div class="cta-box">
        <h3>Ready to Transform Your Smile?</h3>
        <p>The best way to know which treatment is right for you is through a professional assessment. Book a consultation with Dr. Sandeep Kumar (Ex-AIIMS), Bathinda's leading Invisalign provider.</p>
        <a href="/#book" class="btn btn-primary">Book Consultation</a>
      </div>
    `
  },
  'dental-implants-cost-bathinda': {
    title: 'Dental Implants in Bathinda: Cost, Procedure, and Lifespan',
    metaTitle: 'Dental Implants Cost Bathinda | Best Implantologist Dr. Ritu Saneja',
    metaDesc: 'Discover everything about dental implants in Bathinda. Learn about costs, the painless procedure, and why Dr. Ritu Saneja (Gold Medalist) is the top choice.',
    date: 'June 28, 2026',
    readTime: '8 min read',
    category: 'Implantology',
    author: 'Dr. Ritu Saneja',
    authorRole: 'Consultant Prosthodontist & Implantologist',
    image: '/images/my-contact-photo.jpg',
    content: `
      <p class="lead">Losing a tooth can affect everything from your confidence to how you chew your food. Historically, the only options were removable dentures or filing down adjacent healthy teeth for a bridge. Today, dental implants are the undisputed gold standard for tooth replacement.</p>

      <h2>What is a Dental Implant?</h2>
      <p>A dental implant isn't just a fake tooth; it's an artificial tooth <em>root</em>. It's a small titanium screw surgically placed into your jawbone. Once it fuses with the bone (a process called osseointegration), a custom-made crown is attached to the top. The result? A tooth that looks, feels, and functions exactly like the one you lost.</p>

      <h2>The Dental Implant Procedure at The DentalBrace</h2>
      <p>Many patients in Bathinda worry that getting a dental implant will be painful or complicated. Under the expert care of Dr. Ritu Saneja (MDS Gold Medalist, Ex-AIIMS), the process is highly streamlined and completely painless.</p>

      <ol>
        <li><strong>3D CBCT Scanning:</strong> Before any surgery, we take a 3D scan of your jaw. This allows us to assess your bone density and plan the exact angle and depth of the implant digitally. No guesswork.</li>
        <li><strong>Implant Placement:</strong> Under local anaesthesia, the titanium implant is placed into the jawbone. This typically takes just 45 minutes, and you will feel absolutely no pain.</li>
        <li><strong>Healing (Osseointegration):</strong> Over the next 3 to 6 months, your jawbone will grow around the titanium implant, locking it permanently in place.</li>
        <li><strong>Crown Placement:</strong> Once healed, a digital scan (no messy putty!) is taken to design your final crown. We use premium Zirconia crowns for maximum strength and a flawless, natural appearance.</li>
      </ol>

      <h2>How Much Do Dental Implants Cost in Bathinda?</h2>
      <p>The cost of a dental implant varies based on several factors, including the brand of the titanium implant (e.g., Osstem, Nobel Biocare, Straumann) and the type of crown used. Generally, implant treatments in Bathinda are highly cost-effective compared to metro cities, without compromising on world-class quality.</p>
      <p>While the initial cost is higher than a dental bridge or denture, an implant is a one-time investment. Because it preserves your jawbone and doesn't damage adjacent teeth, it saves you from costly dental problems down the road.</p>

      <h2>How Long Do Implants Last?</h2>
      <p>This is the best part: with proper oral hygiene (brushing, flossing, and regular dental checkups), the titanium implant itself can last a <strong>lifetime</strong>. The crown attached to it experiences daily wear and tear from chewing and typically lasts 15 to 20 years before needing replacement.</p>

      <h2>Are You a Candidate?</h2>
      <p>Most adults in good general health are excellent candidates for dental implants. Even if you have been told you don't have enough bone, advanced techniques like bone grafting or All-on-4 full-mouth implants make treatment possible.</p>

      <div class="cta-box">
        <h3>Restore Your Smile Permanently</h3>
        <p>Don't let missing teeth hold you back. Dr. Ritu Saneja has successfully placed over 5,000 implants. Schedule your consultation today to get a personalised treatment plan and cost breakdown.</p>
        <a href="/#book" class="btn btn-primary">Book Consultation</a>
      </div>
    `
  },
  'digital-smile-design': {
    title: 'How Digital Smile Design is Revolutionizing Cosmetic Dentistry',
    metaTitle: 'Digital Smile Design Bathinda | Smile Makeover | The DentalBrace',
    metaDesc: 'Discover Digital Smile Design (DSD) at The DentalBrace Clinic Bathinda. Preview your perfect smile makeover before treatment with Dr. Ritu Saneja.',
    date: 'June 15, 2026',
    readTime: '5 min read',
    category: 'Digital Dentistry',
    author: 'Dr. Ritu Saneja',
    authorRole: 'Consultant Prosthodontist & Cosmetic Dentist',
    image: '/images/indian_dentist_consultation.png',
    content: `
      <p class="lead">Imagine buying a custom-tailored suit or a designer dress without ever seeing a sketch or a fitting. You wouldn't do it. Yet, for decades, patients underwent cosmetic dentistry hoping the final result would match the smile they had in their heads. <strong>Digital Smile Design (DSD)</strong> has changed everything.</p>

      <h2>What is Digital Smile Design?</h2>
      <p>Digital Smile Design is a cutting-edge protocol that allows dentists to plan, design, and most importantly, <em>show</em> you your new smile before any physical treatment begins. At The DentalBrace Clinic, we are proud to be pioneers of DSD in Bathinda.</p>
      <p>It’s not just about teeth; it’s about facial harmony. DSD takes into account your facial proportions, lip symmetry, gum line, and even your personality to design a smile that looks completely natural and uniquely yours.</p>

      <h2>The DSD Workflow: From Vision to Reality</h2>
      <p>Getting a smile makeover with DSD is an exciting, collaborative process:</p>

      <ol>
        <li><strong>Digital Records:</strong> We start by taking a series of high-resolution photographs and videos of your face while you speak and smile. We also take a highly precise 3D intraoral scan of your teeth—no uncomfortable putty impressions required.</li>
        <li><strong>Facial Analysis & Design:</strong> Using specialised software, Dr. Ritu Saneja analyses the relationship between your teeth, gums, lips, and face. She then digitally designs your new smile, selecting the perfect tooth shapes, lengths, and shades to complement your features.</li>
        <li><strong>The Digital Preview:</strong> You are presented with a digital mockup. You can see "before and after" photos of your own face, showing exactly what you will look like once treatment is finished.</li>
        <li><strong>The Motivational Mockup (Test Drive):</strong> We print a 3D model of your new smile and create a temporary, removable acrylic version. We place this directly over your teeth in the clinic. You can look in the mirror, talk, and see your new smile in real life before committing to any permanent changes.</li>
        <li><strong>Precision Execution:</strong> Once you approve the design, we execute the treatment plan—which may include porcelain veneers, composite bonding, teeth whitening, or gum contouring. Because everything is digitally planned, the final result is 100% predictable.</li>
      </ol>

      <h2>Why Choose DSD for Your Smile Makeover?</h2>
      <ul>
        <li><strong>No Surprises:</strong> You know exactly what you're paying for and what you're going to get.</li>
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

const BlogPost = () => {
  const { id } = useParams();
  const article = blogArticles[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  // Structured Data for SEO (Article Schema)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "image": [
      `https://www.thedentalbrace.com${article.image}`
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

  return (
    <motion.div 
      className="blog-post-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>{article.metaTitle}</title>
        <meta name="description" content={article.metaDesc} />
        <link rel="canonical" href={`https://www.thedentalbrace.com/blog/${id}`} />
        <meta property="og:title" content={article.metaTitle} />
        <meta property="og:description" content={article.metaDesc} />
        <meta property="og:image" content={`https://www.thedentalbrace.com${article.image}`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.thedentalbrace.com/blog/${id}`} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      {/* Article Header */}
      <section className="bg-secondary pt-32 pb-16 px-4">
        <div className="container max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/blog" className="back-link">
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
          
          <div className="author-box">
            <div className="author-avatar">
              <User size={24} color="var(--accent-color)" />
            </div>
            <div className="author-info">
              <strong>{article.author}</strong>
              <span>{article.authorRole}</span>
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
                <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.thedentalbrace.com/blog/${id}`} target="_blank" rel="noopener noreferrer" className="share-btn fb">Facebook</a>
                <a href={`https://twitter.com/intent/tweet?url=https://www.thedentalbrace.com/blog/${id}&text=${encodeURIComponent(article.title)}`} target="_blank" rel="noopener noreferrer" className="share-btn tw">Twitter</a>
                <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(article.title + " https://www.thedentalbrace.com/blog/" + id)}`} target="_blank" rel="noopener noreferrer" className="share-btn wa">WhatsApp</a>
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
                  <Link to={`/blog/${key}`} key={key} className="related-card glass shadow-soft">
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
    </motion.div>
  );
};

export default BlogPost;
