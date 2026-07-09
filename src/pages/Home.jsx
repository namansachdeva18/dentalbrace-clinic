import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import FAQSection from '../components/FAQSection';
import AboutSection from '../components/AboutSection';
import Services from '../components/Services';
import Specialists from '../components/Specialists';
import PremiumSections from '../components/PremiumSections';
import WhyUs from '../components/WhyUs';
import ContactSection from '../components/ContactSection';
import InvisalignHero from '../components/InvisalignHero';
import ImplantsHero from '../components/ImplantsHero';
import SmileMakeover from '../components/SmileMakeover';
import Testimonials from '../components/Testimonials';
import TreatmentNavigator from '../components/TreatmentNavigator';
import SmartBooking from '../components/SmartBooking';
import PatientGallery from '../components/PatientGallery';
import ClinicGallery from '../components/ClinicGallery';

const Home = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Dentist",
        "name": "The DentalBrace Clinic & Implant Centre",
        "image": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1600",
        "@id": "https://thedentalbrace.com/#dentist",
        "url": "https://thedentalbrace.com",
        "telephone": "+917496849392",
        "priceRange": "₹₹₹",
        "description": "Bathinda's #1 clinic for Invisalign Clear Aligners, Full Mouth Dental Implants, Smile Makeovers & Dentofacial Orthopedics. AIIMS-trained specialists. 3000+ braces & aligner cases. 3000+ implants placed.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bibi Wala Road, Opp. HP Petrol Pump, Near LIC Office",
          "addressLocality": "Bathinda",
          "addressRegion": "Punjab",
          "postalCode": "151001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 30.210994,
          "longitude": 74.945475
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "350",
          "bestRating": "5"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Dental Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Invisalign Clear Aligners Bathinda" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Mouth Dental Implants Bathinda" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Smile Makeover Bathinda" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dentofacial Orthopedics Bathinda" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "All-on-4 Implants Bathinda" } }
          ]
        },
        "employee": [
          {
            "@type": "Person",
            "name": "Dr. Sandeep Kumar",
            "jobTitle": "Consultant Orthodontist",
            "description": "BDS, MDS (Orthodontics) - BHU Varanasi. Ex Resident - AIIMS New Delhi. 3000+ braces & aligner cases. Bathinda's leading Invisalign provider.",
            "knowsAbout": ["Invisalign", "Clear Aligners", "Invisible Braces", "Dentofacial Orthopedics", "Damon Braces"]
          },
          {
            "@type": "Person",
            "name": "Dr. Ritu Saneja",
            "jobTitle": "Consultant Prosthodontist & Implantologist",
            "description": "MDS (Gold Medalist), BDS, MDS (Prosthodontics) - BHU Varanasi. Ex-Resident - AIIMS Delhi, PGIMER Chandigarh. Ex-Senior Resident - AIIMS Bathinda. 3000+ implants placed.",
            "knowsAbout": ["Dental Implants", "All-on-4", "Full Mouth Rehabilitation", "Smile Makeover", "Veneers", "Zirconia Crowns"]
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://thedentalbrace.com/#webpage",
        "url": "https://thedentalbrace.com/",
        "name": "Best Invisalign & Dental Implants Clinic in Bathinda | The DentalBrace",
        "description": "Bathinda's #1 Invisalign provider & implant clinic. 3000+ braces & aligner cases by Dr. Sandeep Kumar. 3000+ implants by Dr. Ritu Saneja. Book consultation (just ₹200/-)."
      },
      { "@type": "Review", "itemReviewed": { "@type": "Dentist", "name": "The DentalBrace Clinic" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Priya Sharma" }, "reviewBody": "Got my Invisalign done by Dr. Sandeep Kumar and honestly it changed my life! I was always conscious of my teeth but now I smile at everyone. The aligners were completely invisible — my own family didn't notice until I told them. Best orthodontist in Bathinda by far!" },
      { "@type": "Review", "itemReviewed": { "@type": "Dentist", "name": "The DentalBrace Clinic" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Rohit Malhotra" }, "reviewBody": "Dr. Ritu Saneja placed 3 dental implants for me and the experience was completely painless. She explained the entire process in advance so there were no surprises. The implants look and feel exactly like my natural teeth. It's been 8 months and they are perfect." },
      { "@type": "Review", "itemReviewed": { "@type": "Dentist", "name": "The DentalBrace Clinic" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Simran Kaur" }, "reviewBody": "Got a complete smile makeover — veneers and professional whitening — by Dr. Ritu Saneja. She is a Gold Medalist and her precision is evident in every detail. My teeth went from something I hid to my favourite feature. The digital preview before treatment was amazing!" },
      { "@type": "Review", "itemReviewed": { "@type": "Dentist", "name": "The DentalBrace Clinic" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Arjun Bhatia" }, "reviewBody": "I travelled all the way from Ludhiana specifically to see Dr. Sandeep Kumar for clear aligners — worth every kilometer. He has done 3000+ cases and the confidence he brings is unmatched. My teeth are perfectly straight now and treatment finished 2 months earlier than planned!" },
      { "@type": "Review", "itemReviewed": { "@type": "Dentist", "name": "The DentalBrace Clinic" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Neha Gupta" }, "reviewBody": "My mother had All-on-4 full mouth implants done by Dr. Ritu. She hadn't smiled properly in years due to missing teeth. After the procedure she can eat anything and her confidence is completely restored. The entire DentalBrace team was compassionate throughout. Truly life-changing." },
      { "@type": "Review", "itemReviewed": { "@type": "Dentist", "name": "The DentalBrace Clinic" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Manpreet Singh" }, "reviewBody": "Dr. Sandeep is simply the best orthodontist in Bathinda — I checked multiple clinics before choosing The DentalBrace. The digital technology they use is incredible and checkups were always on time. My 14-month smile transformation exceeded every expectation." },
      { "@type": "Review", "itemReviewed": { "@type": "Dentist", "name": "The DentalBrace Clinic" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Kavita Rani" }, "reviewBody": "Came from Barnala for professional teeth whitening at The DentalBrace. Dr. Ritu did the treatment and my teeth went 8 shades brighter in a single session! No sensitivity afterwards. The clinic is absolutely premium — feels like a five-star experience. Will keep coming back!" },
      { "@type": "Review", "itemReviewed": { "@type": "Dentist", "name": "The DentalBrace Clinic" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Gurpreet Kaur" }, "reviewBody": "Came from Mansa to get invisible braces from Dr. Sandeep. Heard about him through a friend and I'm so glad I came. Zero pain throughout the treatment. The clinic is hygienic, the staff is warm, and Dr. Sandeep explains everything patiently. 5 stars isn't enough!" },
      { "@type": "Review", "itemReviewed": { "@type": "Dentist", "name": "The DentalBrace Clinic" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Amit Verma" }, "reviewBody": "Came from Chandigarh for full mouth rehabilitation by Dr. Ritu Saneja. Multiple implants, crowns, and cosmetic work — all planned and executed flawlessly in a coordinated treatment plan. The digital planning they showed me beforehand matched the final result exactly. Exceptional." },
      { "@type": "Review", "itemReviewed": { "@type": "Dentist", "name": "The DentalBrace Clinic" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Pooja Batra" }, "reviewBody": "Always wanted a perfect smile and Dr. Ritu made it a reality with porcelain veneers. She spent time understanding exactly what I wanted and the digital mockup was very reassuring. The veneers are so natural-looking that people compliment my teeth without knowing I have them!" },
      { "@type": "Review", "itemReviewed": { "@type": "Dentist", "name": "The DentalBrace Clinic" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Harpreet Singh" }, "reviewBody": "My son had a jaw alignment problem that other doctors said would need surgery. Dr. Sandeep Kumar treated it with dentofacial orthopedics over 18 months. No surgery needed and his jaw corrected beautifully. We drove from Faridkot every month and never regretted it." },
      { "@type": "Review", "itemReviewed": { "@type": "Dentist", "name": "The DentalBrace Clinic" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Sunita Devi" }, "reviewBody": "Had a single tooth implant done after a tooth extraction. Was terrified but Dr. Ritu Saneja put me completely at ease. The procedure was over before I knew it and there was no post-procedure pain. The implant has integrated perfectly and feels completely natural." },
      { "@type": "Review", "itemReviewed": { "@type": "Dentist", "name": "The DentalBrace Clinic" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Vikram Arora" }, "reviewBody": "As a working professional, I needed something discreet. Dr. Sandeep recommended Invisalign and it was perfect. Not a single colleague noticed I was undergoing orthodontic treatment for 12 months. The results are stunning. Best Invisalign provider in Punjab!" },
      { "@type": "Review", "itemReviewed": { "@type": "Dentist", "name": "The DentalBrace Clinic" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Anjali Sharma" }, "reviewBody": "Wanted something less visible than metal braces and Dr. Sandeep suggested ceramic braces. They blended in so naturally! The treatment was comfortable, affordable, and the results are fantastic. My confidence has completely transformed. Thank you DentalBrace team!" },
      { "@type": "Review", "itemReviewed": { "@type": "Dentist", "name": "The DentalBrace Clinic" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Ramesh Kumar" }, "reviewBody": "Drove from Amritsar for All-on-6 full arch implants. Dr. Ritu is simply the best implantologist in Punjab. She has done 3000+ implants and the expertise shows in every step. Complete jaw reconstruction done over 4 appointments. Life-changing results at a fair price." },
      { "@type": "Review", "itemReviewed": { "@type": "Dentist", "name": "The DentalBrace Clinic" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Deepika Singh" }, "reviewBody": "Got aligners for my 16-year-old daughter. Dr. Sandeep was so patient with her — explained everything in a way she understood and kept her engaged. She wore them consistently because she trusted him. Her smile today is absolutely beautiful. Highly recommend for teenagers!" },
      { "@type": "Review", "itemReviewed": { "@type": "Dentist", "name": "The DentalBrace Clinic" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Sukhbir Kaur" }, "reviewBody": "Had chipped front teeth that made me very self-conscious. Dr. Ritu did composite bonding in a single 90-minute appointment and my teeth look completely natural now. No drilling, no injections, no pain. I cannot stop smiling! Came from Muktsar and 100% worth it." },
      { "@type": "Review", "itemReviewed": { "@type": "Dentist", "name": "The DentalBrace Clinic" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Meena Aggarwal" }, "reviewBody": "Got a digital smile design done before my wedding. Dr. Ritu showed me a preview of my new smile before any treatment began — and the final result matched it exactly! Veneers, whitening, and gum contouring all done together. I looked stunning on my wedding day. Forever grateful." },
      { "@type": "Review", "itemReviewed": { "@type": "Dentist", "name": "The DentalBrace Clinic" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Jaspreet Kaur" }, "reviewBody": "Got lingual braces (placed behind the teeth) done by Dr. Sandeep. Literally nobody could tell I was wearing braces for 16 months. Ideal for professionals. His expertise with lingual braces is exceptional — very few doctors in Punjab even offer this. Remarkable results." },
      { "@type": "Review", "itemReviewed": { "@type": "Dentist", "name": "The DentalBrace Clinic" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Tarun Mehta" }, "reviewBody": "Had an implant and zirconia crown placed by Dr. Ritu Saneja. Came from Ludhiana because a colleague who is a doctor himself recommended her. Her precision and attention to detail is world-class. The crown matches my other teeth perfectly. Best implantologist in Bathinda — no doubt." }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Best Invisalign &amp; Dental Implants Clinic in Bathinda | The DentalBrace</title>
        <meta name="description" content="Bathinda's #1 Invisalign provider & implant clinic. 3000+ braces & aligner cases by Dr. Sandeep Kumar. 3000+ implants by Dr. Ritu Saneja (Gold Medalist). Consultation at a nominal ₹200/-." />
        <meta name="keywords" content="Invisalign Bathinda, Clear Aligners Bathinda, Dental Implants Bathinda, Best Orthodontist Bathinda, Smile Makeover Bathinda, Full Mouth Implants Bathinda, Dentofacial Orthopedics Bathinda" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <main id="top">
        {/* 1. Hero */}
        <div id="home"><Hero /></div>

        {/* 2. Treatment Navigator (Icon Grid) */}
        <TreatmentNavigator />

        {/* 2. Invisalign Showcase — Dr. Sandeep's flagship */}
        <InvisalignHero />

        {/* 3. Treatments Grid — with Featured Invisalign & Implants cards */}
        <div id="treatments"><Services /></div>

        {/* 4. Implants Showcase — Dr. Ritu's flagship */}
        <ImplantsHero />

        {/* 5. Digital Dentistry & Before/After */}
        <div id="digital"><PremiumSections /></div>

        {/* 6. Specialists — with animated counters & badges */}
        <div id="specialists"><Specialists /></div>

        {/* 7. About / Timeline */}
        <div id="about"><AboutSection /></div>

        {/* 8. Smile Makeover */}
        <div id="smile-makeover"><SmileMakeover /></div>

        {/* 9. Patient Gallery — Real treatment photos */}
        <PatientGallery />

        {/* 10. Clinic Gallery — 3D rotating tour */}
        <ClinicGallery />

        {/* 11. Testimonials — Google Reviews */}
        <Testimonials />

        {/* 10. Smart Booking Widget */}
        <SmartBooking />

        {/* 11. FAQ — with Invisalign & Implant questions */}
        <div id="faq"><FAQSection /></div>

        {/* 12. Contact + Map */}
        <ContactSection />
      </main>
    </motion.div>
  );
};

export default Home;

