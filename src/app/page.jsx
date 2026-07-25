export const generateMetadata = () => {
  return {
    title: "Best Invisalign & Dental Implants Clinic in Bathinda | The DentalBrace",
    description: "Bathinda's #1 Invisalign provider & implant clinic. 5500+ braces & aligner cases by Dr. Sandeep Kumar. 5000+ implants by Dr. Ritu Saneja (Gold Medalist). Book your consultation today.",
  };
};



import Hero from '@/components/Hero';
import FAQSection from '@/components/FAQSection';
import AboutSection from '@/components/AboutSection';
import Services from '@/components/Services';
import Specialists from '@/components/Specialists';
import DoctorsIntro from '@/components/DoctorsIntro';
import PremiumSections from '@/components/PremiumSections';
import WhyUs from '@/components/WhyUs';
import ContactSection from '@/components/ContactSection';
import InvisalignHero from '@/components/InvisalignHero';
import ImplantsHero from '@/components/ImplantsHero';
import MaxillofacialHero from '@/components/MaxillofacialHero';
import SmileMakeover from '@/components/SmileMakeover';
import Testimonials from '@/components/Testimonials';
import TreatmentNavigator from '@/components/TreatmentNavigator';
import SmartBooking from '@/components/SmartBooking';
import PatientGallery from '@/components/PatientGallery';
import ClinicGallery from '@/components/ClinicGallery';

const Home = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Dentist", "MedicalClinic"],
        "name": "The DentalBrace Clinic & Implant Centre",
        "image": "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1600",
        "@id": "https://thedentalbrace.com/#dentist",
        "url": "https://thedentalbrace.com",
        "telephone": "+917496849392",
        "priceRange": "₹₹₹",
        "paymentAccepted": "Cash, Credit Card, UPI, EMI",
        "description": "Bathinda's #1 clinic for Invisalign Clear Aligners, Full Mouth Dental Implants, Smile Makeovers & Dentofacial Orthopedics. AIIMS-trained specialists. 5500+ braces & aligner cases. 5000+ implants placed.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "196, Bibi Wala Rd, near LIC Building, opposite Petrol Pump, Kamla Nehru Colony",
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
        "areaServed": [
          { "@type": "City", "name": "Bathinda", "sameAs": "https://en.wikipedia.org/wiki/Bathinda" },
          { "@type": "City", "name": "Mansa", "sameAs": "https://en.wikipedia.org/wiki/Mansa,_Punjab" },
          { "@type": "City", "name": "Muktsar", "sameAs": "https://en.wikipedia.org/wiki/Sri_Muktsar_Sahib" },
          { "@type": "City", "name": "Faridkot", "sameAs": "https://en.wikipedia.org/wiki/Faridkot" },
          { "@type": "City", "name": "Kotkapura", "sameAs": "https://en.wikipedia.org/wiki/Kotkapura" },
          { "@type": "City", "name": "Rampura Phul", "sameAs": "https://en.wikipedia.org/wiki/Rampura_Phul" },
          { "@type": "City", "name": "Talwandi Sabo", "sameAs": "https://en.wikipedia.org/wiki/Talwandi_Sabo" },
          { "@type": "City", "name": "Maur", "sameAs": "https://en.wikipedia.org/wiki/Maur,_India" },
          { "@type": "City", "name": "Raman", "sameAs": "https://en.wikipedia.org/wiki/Raman,_Punjab" },
          { "@type": "City", "name": "Mandi Dabwali", "sameAs": "https://en.wikipedia.org/wiki/Mandi_Dabwali" }
        ],
        "medicalSpecialty": [
          { "@type": "MedicalSpecialty", "name": "Orthodontics", "sameAs": "https://en.wikipedia.org/wiki/Orthodontics" },
          { "@type": "MedicalSpecialty", "name": "Prosthodontics", "sameAs": "https://en.wikipedia.org/wiki/Prosthodontics" },
          { "@type": "MedicalSpecialty", "name": "Implantology", "sameAs": "https://en.wikipedia.org/wiki/Dental_implant" }
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "20:00"
        },
        "sameAs": [
          "https://www.instagram.com/thedentalbrace_bathinda?igsh=MWhxaXNpejU5bjFhdw==",
          "https://www.google.com/maps/place/The+DentalBrace+Clinic+and+Implant+Centre+-+Best+Dentist+in+Bathinda/@30.210994,74.945475,17z"
        ],
        "availableService": [
          { "@type": "MedicalProcedure", "name": "Invisalign Clear Aligners Bathinda", "sameAs": "https://www.wikidata.org/wiki/Q5130635" },
          { "@type": "MedicalProcedure", "name": "Full Mouth Dental Implants Bathinda", "sameAs": "https://www.wikidata.org/wiki/Q144086" },
          { "@type": "MedicalProcedure", "name": "Smile Makeover Bathinda" },
          { "@type": "MedicalProcedure", "name": "Digital Smile Design" },
          { "@type": "MedicalProcedure", "name": "Dentofacial Orthopedics Bathinda" },
          { "@type": "MedicalProcedure", "name": "All-on-4 Implants Bathinda", "sameAs": "https://en.wikipedia.org/wiki/All-on-4" },
          { "@type": "MedicalProcedure", "name": "Teeth Whitening Bathinda" },
          { "@type": "MedicalProcedure", "name": "Dental Veneers Bathinda" },
          { "@type": "MedicalProcedure", "name": "Root Canal Treatment Bathinda", "sameAs": "https://en.wikipedia.org/wiki/Root_canal_treatment" },
          { "@type": "MedicalProcedure", "name": "Dental Crown and Bridge Bathinda" },
          { "@type": "MedicalProcedure", "name": "Kids Dentistry Bathinda" },
          { "@type": "MedicalProcedure", "name": "Gum Treatment Bathinda" },
          { "@type": "MedicalProcedure", "name": "Wisdom Tooth Removal Bathinda" },
          { "@type": "MedicalProcedure", "name": "Composite Bonding Bathinda" },
          { "@type": "MedicalProcedure", "name": "Adult Orthodontics" },
          { "@type": "MedicalProcedure", "name": "Dental Anxiety Management" }
        ],
        "employee": [
          {
            "@type": "Person",
            "name": "Dr. Sandeep Kumar",
            "jobTitle": "Consultant Orthodontist",
            "description": "BDS, MDS (Orthodontics) - BHU Varanasi. Ex Resident - AIIMS New Delhi. 5500+ braces & aligner cases. Bathinda's leading Invisalign provider.",
            "url": "https://thedentalbrace.com/doctors/dr-sandeep-kumar"
          },
          {
            "@type": "Person",
            "name": "Dr. Ritu Saneja",
            "jobTitle": "Consultant Prosthodontist & Implantologist",
            "description": "MDS (Gold Medalist), BDS, MDS (Prosthodontics) - BHU Varanasi. Ex-Resident - AIIMS Delhi, PGIMER Chandigarh. Ex-Senior Resident - AIIMS Bathinda. 5000+ implants placed.",
            "url": "https://thedentalbrace.com/doctors/dr-ritu-saneja"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://thedentalbrace.com/#webpage",
        "url": "https://thedentalbrace.com/",
        "name": "Best Invisalign & Dental Implants Clinic in Bathinda | The DentalBrace",
        "description": "Bathinda's #1 Invisalign provider & implant clinic. 5500+ braces & aligner cases by Dr. Sandeep Kumar. 5000+ implants by Dr. Ritu Saneja. Book consultation."
      }
    ]
  };

  return (
    <div className="page-wrapper">
      

      <main id="top">
        {/* 1. Hero */}
        <div id="home"><Hero /></div>

        {/* 2. Doctors Introduction — smooth intro right after hero */}
        <DoctorsIntro />

        {/* 3. Treatment Navigator (Icon Grid) */}
        <TreatmentNavigator />

        {/* 4. Treatments Grid — Detailed Cards */}
        <div id="treatments"><Services /></div>

        {/* 5. Invisalign Showcase — Dr. Sandeep's flagship */}
        <InvisalignHero />

        {/* 4. Implants Showcase — Dr. Ritu's flagship */}
        <ImplantsHero />

        {/* 4.5 Maxillofacial Prosthetics Showcase */}
        <MaxillofacialHero />

        {/* 5. Digital Dentistry & Before/After */}
        <div id="digital"><PremiumSections /></div>

        {/* 6. Specialists section removed — doctors introduced above after hero to avoid repetition */}

        {/* 7. About / Timeline */}
        <div id="about"><AboutSection /></div>

        {/* 8. Smile Makeover */}
        <div id="smile-makeover"><SmileMakeover /></div>

        {/* 9. Patient Gallery — Real treatment photos */}
        <div id="patient-gallery"><PatientGallery /></div>

        {/* 10. Clinic Gallery — 3D rotating tour */}
        <div id="clinic-tour"><ClinicGallery /></div>

        {/* 11. Testimonials — Google Reviews */}
        <div id="testimonials"><Testimonials /></div>

        {/* 10. Smart Booking Widget */}
        <SmartBooking />

        {/* 11. FAQ — with Invisalign & Implant questions */}
        <div id="faq"><FAQSection /></div>

        {/* 12. Contact + Map */}
        <ContactSection />
      </main>
    </div>
  );
};

export default Home;
