import { Star, ExternalLink, BadgeCheck } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const reviewsRow1 = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Bathinda',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    date: 'March 2024',
    treatment: 'Invisalign',
    reviewText: 'Got my Invisalign done by Dr. Sandeep Kumar and honestly it changed my life! I was always conscious of my teeth but now I smile at everyone. The aligners were completely invisible — my own family didn\'t notice until I told them. Best orthodontist in Bathinda by far!',
    doctorTreated: 'Dr. Sandeep Kumar',
  },
  {
    id: 2,
    name: 'Rohit Malhotra',
    location: 'Bathinda',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    date: 'January 2024',
    treatment: 'Dental Implants',
    reviewText: 'Dr. Ritu Saneja placed 3 dental implants for me and the experience was completely painless. She explained the entire process in advance so there were no surprises. The implants look and feel exactly like my natural teeth. It\'s been 8 months and they are perfect.',
    doctorTreated: 'Dr. Ritu Saneja',
  },
  {
    id: 3,
    name: 'Simran Kaur',
    location: 'Bathinda',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    date: 'April 2024',
    treatment: 'Smile Makeover',
    reviewText: 'Got a complete smile makeover — veneers and professional whitening — by Dr. Ritu Saneja. She is a Gold Medalist and her precision is evident in every detail. My teeth went from something I hid to my favourite feature. The digital preview before treatment was amazing!',
    doctorTreated: 'Dr. Ritu Saneja',
  },
  {
    id: 4,
    name: 'Arjun Bhatia',
    location: 'Ludhiana',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    date: 'February 2024',
    treatment: 'Clear Aligners',
    reviewText: 'I travelled all the way from Ludhiana specifically to see Dr. Sandeep Kumar for clear aligners — worth every kilometer. He has done 3000+ cases and the confidence he brings is unmatched. My teeth are perfectly straight now and treatment finished 2 months earlier than planned!',
    doctorTreated: 'Dr. Sandeep Kumar',
  },
  {
    id: 5,
    name: 'Neha Gupta',
    location: 'Bathinda',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    date: 'May 2024',
    treatment: 'All-on-4 Implants',
    reviewText: 'My mother had All-on-4 full mouth implants done by Dr. Ritu. She hadn\'t smiled properly in years due to missing teeth. After the procedure she can eat anything and her confidence is completely restored. The entire DentalBrace team was compassionate throughout. Truly life-changing.',
    doctorTreated: 'Dr. Ritu Saneja',
  },
  {
    id: 6,
    name: 'Manpreet Singh',
    location: 'Bathinda',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    date: 'June 2024',
    treatment: 'Metal Braces',
    reviewText: 'Dr. Sandeep is simply the best orthodontist in Bathinda — I checked multiple clinics before choosing The DentalBrace. The digital technology they use is incredible and checkups were always on time. My 14-month smile transformation exceeded every expectation.',
    doctorTreated: 'Dr. Sandeep Kumar',
  },
  {
    id: 7,
    name: 'Kavita Rani',
    location: 'Barnala',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    date: 'July 2024',
    treatment: 'Teeth Whitening',
    reviewText: 'Came from Barnala for professional teeth whitening at The DentalBrace. Dr. Ritu did the treatment and my teeth went 8 shades brighter in a single session! No sensitivity afterwards. The clinic is absolutely premium — feels like a five-star experience. Will keep coming back!',
    doctorTreated: 'Dr. Ritu Saneja',
  },
  {
    id: 8,
    name: 'Gurpreet Kaur',
    location: 'Mansa',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    date: 'August 2024',
    treatment: 'Invisible Braces',
    reviewText: 'Came from Mansa to get invisible braces from Dr. Sandeep. Heard about him through a friend and I\'m so glad I came. Zero pain throughout the treatment. The clinic is hygienic, the staff is warm, and Dr. Sandeep explains everything patiently. 5 stars isn\'t enough!',
    doctorTreated: 'Dr. Sandeep Kumar',
  },
  {
    id: 9,
    name: 'Amit Verma',
    location: 'Chandigarh',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    date: 'September 2024',
    treatment: 'Full Mouth Rehabilitation',
    reviewText: 'Came from Chandigarh for full mouth rehabilitation by Dr. Ritu Saneja. Multiple implants, crowns, and cosmetic work — all planned and executed flawlessly in a coordinated treatment plan. The digital planning they showed me beforehand matched the final result exactly. Exceptional.',
    doctorTreated: 'Dr. Ritu Saneja',
  },
  {
    id: 10,
    name: 'Pooja Batra',
    location: 'Bathinda',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    date: 'October 2024',
    treatment: 'Veneers',
    reviewText: 'Always wanted a perfect smile and Dr. Ritu made it a reality with porcelain veneers. She spent time understanding exactly what I wanted and the digital mockup was very reassuring. The veneers are so natural-looking that people compliment my teeth without knowing I have them!',
    doctorTreated: 'Dr. Ritu Saneja',
  }
];

const reviewsRow2 = [
  {
    id: 11,
    name: 'Harpreet Singh',
    location: 'Faridkot',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    date: 'November 2023',
    treatment: 'Dentofacial Orthopedics',
    reviewText: 'My son had a jaw alignment problem that other doctors said would need surgery. Dr. Sandeep Kumar treated it with dentofacial orthopedics over 18 months. No surgery needed and his jaw corrected beautifully. We drove from Faridkot every month and never regretted it.',
    doctorTreated: 'Dr. Sandeep Kumar',
  },
  {
    id: 12,
    name: 'Sunita Devi',
    location: 'Bathinda',
    avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    date: 'December 2023',
    treatment: 'Single Tooth Implant',
    reviewText: 'Had a single tooth implant done after a tooth extraction. Was terrified but Dr. Ritu Saneja put me completely at ease. The procedure was over before I knew it and there was no post-procedure pain. The implant has integrated perfectly and feels completely natural.',
    doctorTreated: 'Dr. Ritu Saneja',
  },
  {
    id: 13,
    name: 'Vikram Arora',
    location: 'Patiala',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    date: 'January 2024',
    treatment: 'Invisalign',
    reviewText: 'As a working professional, I needed something discreet. Dr. Sandeep recommended Invisalign and it was perfect. Not a single colleague noticed I was undergoing orthodontic treatment for 12 months. The results are stunning. Best Invisalign provider in Punjab!',
    doctorTreated: 'Dr. Sandeep Kumar',
  },
  {
    id: 14,
    name: 'Anjali Sharma',
    location: 'Bathinda',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    date: 'February 2024',
    treatment: 'Ceramic Braces',
    reviewText: 'Wanted something less visible than metal braces and Dr. Sandeep suggested ceramic braces. They blended in so naturally! The treatment was comfortable, affordable, and the results are fantastic. My confidence has completely transformed. Thank you DentalBrace team!',
    doctorTreated: 'Dr. Sandeep Kumar',
  },
  {
    id: 15,
    name: 'Ramesh Kumar',
    location: 'Amritsar',
    avatar: 'https://images.unsplash.com/photo-1566492031525-87838d61cecc?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    date: 'March 2024',
    treatment: 'All-on-6 Implants',
    reviewText: 'Drove from Amritsar for All-on-6 full arch implants. Dr. Ritu is simply the best implantologist in Punjab. She has done 3000+ implants and the expertise shows in every step. Complete jaw reconstruction done over 4 appointments. Life-changing results at a fair price.',
    doctorTreated: 'Dr. Ritu Saneja',
  },
  {
    id: 16,
    name: 'Deepika Singh',
    location: 'Bathinda',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    date: 'April 2024',
    treatment: 'Teen Aligners',
    reviewText: 'Got aligners for my 16-year-old daughter. Dr. Sandeep was so patient with her — explained everything in a way she understood and kept her engaged. She wore them consistently because she trusted him. Her smile today is absolutely beautiful. Highly recommend for teenagers!',
    doctorTreated: 'Dr. Sandeep Kumar',
  },
  {
    id: 17,
    name: 'Sukhbir Kaur',
    location: 'Muktsar',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    date: 'May 2024',
    treatment: 'Composite Bonding',
    reviewText: 'Had chipped front teeth that made me very self-conscious. Dr. Ritu did composite bonding in a single 90-minute appointment and my teeth look completely natural now. No drilling, no injections, no pain. I cannot stop smiling! Came from Muktsar and 100% worth it.',
    doctorTreated: 'Dr. Ritu Saneja',
  },
  {
    id: 18,
    name: 'Meena Aggarwal',
    location: 'Bathinda',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    date: 'June 2024',
    treatment: 'Digital Smile Design',
    reviewText: 'Got a digital smile design done before my wedding. Dr. Ritu showed me a preview of my new smile before any treatment began — and the final result matched it exactly! Veneers, whitening, and gum contouring all done together. I looked stunning on my wedding day. Forever grateful.',
    doctorTreated: 'Dr. Ritu Saneja',
  },
  {
    id: 19,
    name: 'Jaspreet Kaur',
    location: 'Bathinda',
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    date: 'July 2024',
    treatment: 'Lingual Braces',
    reviewText: 'Got lingual braces (placed behind the teeth) done by Dr. Sandeep. Literally nobody could tell I was wearing braces for 16 months. Ideal for professionals. His expertise with lingual braces is exceptional — very few doctors in Punjab even offer this. Remarkable results.',
    doctorTreated: 'Dr. Sandeep Kumar',
  },
  {
    id: 20,
    name: 'Tarun Mehta',
    location: 'Ludhiana',
    avatar: 'https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=150&auto=format&fit=crop',
    rating: 5,
    date: 'August 2024',
    treatment: 'Implant Crown',
    reviewText: 'Had an implant and zirconia crown placed by Dr. Ritu Saneja. Came from Ludhiana because a colleague who is a doctor himself recommended her. Her precision and attention to detail is world-class. The crown matches my other teeth perfectly. Best implantologist in Bathinda — no doubt.',
    doctorTreated: 'Dr. Ritu Saneja',
  }
];

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const StarRating = ({ rating, size = 16 }) => (
  <div style={{ display: 'flex', gap: '2px' }}>
    {[1, 2, 3, 4, 5].map(s => (
      <Star
        key={s}
        size={size}
        fill={s <= rating ? '#FBBC05' : 'transparent'}
        color={s <= rating ? '#FBBC05' : '#ccc'}
        strokeWidth={1.5}
      />
    ))}
  </div>
);

const ReviewCard = ({ review }) => (
  <article
    style={{
      background: 'white',
      borderRadius: 'var(--radius-lg)',
      padding: '2rem',
      boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
      height: '100%',
      minWidth: '400px',
      maxWidth: '400px',
      position: 'relative',
      overflow: 'hidden'
    }}
    itemScope
    itemType="https://schema.org/Review"
  >
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
      background: 'var(--accent-color)'
    }} />

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
        <img
          src={review.avatar}
          alt={`${review.name} — ${review.treatment} patient at The DentalBrace Bathinda`}
          style={{
            width: '52px', height: '52px', borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid rgba(245,130,32,0.2)'
          }}
          itemProp="author"
        />
        <div>
          <div style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '1rem' }} itemProp="author">{review.name}</div>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{review.location}</div>
        </div>
      </div>
      <GoogleIcon />
    </div>

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <StarRating rating={review.rating} />
        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '500' }}>{review.rating}.0</span>
      </div>
      <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{review.date}</span>
    </div>

    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
      padding: '0.3rem 0.85rem',
      background: 'rgba(245,130,32,0.1)',
      border: '1px solid rgba(245,130,32,0.2)',
      borderRadius: 'var(--radius-full)',
      color: 'var(--accent-color)',
      fontSize: '0.78rem', fontWeight: '700',
      width: 'fit-content'
    }}>
      <BadgeCheck size={12} /> {review.treatment}
    </span>

    <blockquote
      style={{
        margin: 0, padding: 0,
        color: 'var(--text-secondary)',
        fontSize: '0.95rem',
        lineHeight: '1.75',
        fontStyle: 'italic',
        flexGrow: 1
      }}
      itemProp="reviewBody"
    >
      "{review.reviewText}"
    </blockquote>

    <div style={{
      display: 'flex', alignItems: 'center', gap: '0.5rem',
      paddingTop: '1rem',
      borderTop: '1px solid var(--border-color)'
    }}>
      <div style={{
        width: '8px', height: '8px', borderRadius: '50%',
        background: 'var(--accent-color)'
      }} />
      <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: '500' }}>
        Treated by <strong style={{ color: 'var(--text-primary)' }}>{review.doctorTreated}</strong>
      </span>
    </div>
  </article>
);

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      aria-label="Patient Reviews — The DentalBrace Bathinda"
      style={{
        background: 'var(--bg-ivory)',
        padding: 'var(--section-padding-desktop) 0',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ marginBottom: '3.5rem' }}>
        <div style={{ textAlign: 'center' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.4rem 1.25rem',
            background: 'rgba(245, 130, 32, 0.1)',
            border: '1px solid rgba(245, 130, 32, 0.25)',
            borderRadius: 'var(--radius-full)',
            color: 'var(--accent-color)',
            fontWeight: '700', fontSize: '0.85rem',
            letterSpacing: '1.5px', textTransform: 'uppercase',
            marginBottom: '1.25rem'
          }}>
            <GoogleIcon /> Verified Google Reviews
          </span>

          <h2 style={{
            fontSize: 'clamp(1.9rem, 4vw, 2.75rem)',
            fontWeight: '800',
            color: 'var(--text-primary)',
            lineHeight: '1.2',
            marginBottom: '1rem'
          }}>
            What Our Patients Say
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '550px', margin: '0 auto 2rem' }}>
            Real stories from real patients in Bathinda. Over <strong>350+ verified Google reviews</strong> and counting.
          </p>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '1.5rem',
            padding: '1rem 2rem',
            background: 'white',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
            border: '1px solid var(--border-color)'
          }}
          itemScope itemType="https://schema.org/AggregateRating"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <GoogleIcon />
              <span style={{ fontWeight: '700', color: '#555', fontSize: '0.9rem' }}>Google</span>
            </div>
            <div style={{ width: '1px', height: '32px', background: 'var(--border-color)' }} />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--text-primary)', lineHeight: 1 }} itemProp="ratingValue">5.0</span>
                <StarRating rating={5} size={18} />
              </div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '0.2rem' }}>
                Based on <span itemProp="reviewCount">350</span>+ reviews
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="marquee-container" style={{ position: 'relative' }}>
        
        {/* Row 1 - Left to Right */}
        <div className="marquee-row">
          <div className="marquee-track track-left">
            {[...reviewsRow1, ...reviewsRow1].map((review, idx) => (
              <ReviewCard key={`row1-${idx}`} review={review} />
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="marquee-row" style={{ marginTop: '2rem' }}>
          <div className="marquee-track track-right">
            {[...reviewsRow2, ...reviewsRow2].map((review, idx) => (
              <ReviewCard key={`row2-${idx}`} review={review} />
            ))}
          </div>
        </div>

      </div>

      <div className="container">
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <a
            href="https://share.google/IjLrpZOU9W83dtITe"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.9rem 2rem',
              background: 'white',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--text-primary)',
              fontWeight: '600', textDecoration: 'none',
              fontSize: '0.95rem',
              boxShadow: '0 4px 16px rgba(0,0,0,0.07)',
              transition: 'all 0.2s ease',
              marginRight: '1rem'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.07)'; }}
          >
            <GoogleIcon /> View All Google Reviews <ExternalLink size={15} />
          </a>

          <a
            href="#book"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.9rem 2rem',
              background: 'var(--accent-color)',
              borderRadius: 'var(--radius-full)',
              color: 'white',
              fontWeight: '700', textDecoration: 'none',
              fontSize: '0.95rem',
              boxShadow: '0 4px 20px rgba(245,130,32,0.35)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'none'}
          >
            Join Our Happy Patients →
          </a>
        </div>
      </div>

      <style>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          padding: 1rem 0;
        }

        .marquee-row {
          width: 100vw;
          overflow: hidden;
        }

        .marquee-track {
          display: flex;
          gap: 2rem;
          width: max-content;
        }

        .track-left {
          animation: scrollLeft 50s linear infinite;
        }

        .track-right {
          animation: scrollRight 50s linear infinite;
        }

        .marquee-container:hover .track-left,
        .marquee-container:hover .track-right {
          animation-play-state: paused;
        }

        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 1rem)); }
        }

        @keyframes scrollRight {
          from { transform: translateX(calc(-50% - 1rem)); }
          to { transform: translateX(0); }
        }

        @media (max-width: 768px) {
          .track-left, .track-right {
            animation-duration: 50s; /* Slower, more readable speed */
          }
          article {
            min-width: 290px !important;
            max-width: 290px !important;
            padding: 1.5rem !important; /* Slightly less padding on mobile */
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
