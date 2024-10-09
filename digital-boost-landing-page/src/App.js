import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import LandingPage from './pages/landingPage/LandingPage';
import ContactForm from './components/contactForm/ContactForm';

const GA_MEASUREMENT_ID = 'G-WSBQT2W7JW'; 

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize(GA_MEASUREMENT_ID);
    
    // Track page view on location change
    ReactGA.pageview(location.pathname + location.search);
    console.log("GA Pageview tracked: ", location.pathname + location.search);

    // Track device type as a custom dimension
    const deviceType = window.innerWidth <= 768 ? 'Mobile' : 'Desktop';
    ReactGA.set({ dimension1: deviceType });

    // Track time taken to load the page
    const startTime = performance.now();
    window.addEventListener('load', () => {
      const loadTime = performance.now() - startTime;
      ReactGA.timing({
        category: 'JS Libraries',
        variable: 'load',
        value: Math.round(loadTime), 
        label: 'Landing Page Load'
      });
    });

  }, [location]); // Effect runs on location change

  return null; // No visual output from this component
};

function App() {
  return (
    <BrowserRouter>
      <AnalyticsTracker /> {/* Track analytics */}
      <Routes>
        <Route path='/' element={<LandingPage />} /> {/* Main landing page route */}
        <Route path='/contact' element={<ContactForm />} /> {/* Contact form route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
