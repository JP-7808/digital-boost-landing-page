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
    
    // Track page view
    ReactGA.pageview(location.pathname + location.search);
    console.log("GA Pageview tracked: ", location.pathname + location.search);

    // Custom Dimensions Example (Tracking device type)
    const deviceType = window.innerWidth <= 768 ? 'Mobile' : 'Desktop';
    ReactGA.set({ dimension1: deviceType });

    // track time to load the page
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

  }, [location]);

  return null; 
};

function App() {
  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/contact' element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
