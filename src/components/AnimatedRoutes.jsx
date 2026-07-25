'use client';
import { usePathname } from 'next/navigation';
import { Routes, Route } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import Home from '@/pages/Home';
import About from '@/pages/About';
import ContactPage from '@/pages/ContactPage';
import FAQPage from '@/pages/FAQPage';
import ServicesPage from '@/pages/ServicesPage';
import TreatmentTemplate from '@/pages/TreatmentTemplate';
// Import other pages as needed

const AnimatedRoutes = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/treatment/:slug" element={<TreatmentTemplate />} />
        {/* Fallback to Home for unfinished routes for now */}
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
