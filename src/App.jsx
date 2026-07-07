import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Loader from './components/Loader';
import AppLayout from './components/AppLayout';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  // Safety net: if Loader's GSAP animation fails on slow mobile devices,
  // force show the app after 3 seconds so the screen is never permanently blank.
  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(safetyTimer);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.overflowX = 'hidden';
    }
  }, [loading]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>The DentalBrace Clinic & Implant Centre | Best Dentist in Bathinda</title>
        <meta name="description" content="Expert dental care in Bathinda for Braces, Implants, and Smile Makeovers. Painless and personalized treatments by experienced MDS doctors. Book an appointment today!" />
        <meta name="keywords" content="dentist in Bathinda, dental clinic in Bathinda, braces treatment in Bathinda, root canal treatment in Bathinda, dental implants in Bathinda, cosmetic dentist Bathinda" />
        <meta property="og:title" content="The DentalBrace Clinic & Implant Centre | Best Dentist in Bathinda" />
        <meta property="og:description" content="Expert dental care in Bathinda for Braces, Implants, and Smile Makeovers. Book an appointment today!" />
      </Helmet>
      
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      <div className="app-container" style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease-in' }}>
        <Router>
          <AppLayout />
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;

