import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import TreatmentTemplate from '../pages/TreatmentTemplate';
import About from '../pages/About';
import ContactPage from '../pages/ContactPage';
import FAQPage from '../pages/FAQPage';
import DrSandeepPage from '../pages/DrSandeepPage';
import DrRituPage from '../pages/DrRituPage';
import GalleryPage from '../pages/GalleryPage';
import ServicesPage from '../pages/ServicesPage';
import Blog from '../pages/Blog';
import BlogPost from '../pages/BlogPost';
import NotFound from '../pages/NotFound';

const AppLayout = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* ── Core Pages ──────────────────────────────── */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />

            {/* ── Doctor Profile Pages ─────────────────────── */}
            <Route path="/doctors/dr-sandeep-kumar" element={<DrSandeepPage />} />
            <Route path="/doctors/dr-ritu-saneja" element={<DrRituPage />} />

            {/* ── Treatment Pages ─────────────────────────── */}
            <Route path="/treatments/:slug" element={<TreatmentTemplate />} />
            {/* Catch-all → 404 Page (Fixes Soft 404 Error) */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
