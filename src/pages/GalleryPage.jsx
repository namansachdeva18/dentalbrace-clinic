import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import PatientGallery from '../components/PatientGallery';

const GalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--bg-light)' }}
    >
      <Helmet>
        <title>Smile Gallery & Patient Reviews | The DentalBrace Bathinda</title>
        <meta 
          name="description" 
          content="View our patient gallery and before/after photos at The DentalBrace Clinic Bathinda. Real results for Invisalign, Dental Implants, Braces, and Smile Makeovers." 
        />
        <meta 
          name="keywords" 
          content="dental clinic reviews bathinda, patient gallery dentist bathinda, smile makeover before after bathinda, invisalign results bathinda" 
        />
        <link rel="canonical" href="https://www.thedentalbrace.com/gallery" />
      </Helmet>
      
      <PatientGallery />
    </motion.div>
  );
};

export default GalleryPage;
