import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import LandingPage from './pages/landingPage/LandingPage';
import ContactForm from './components/contactForm/ContactForm';

const GA_MEASUREMENT_ID = 'G-WSBQT2W7JW'; // Replace with your actual measurement ID

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize(GA_MEASUREMENT_ID);
    
    // Track page view
    ReactGA.pageview(location.pathname + location.search);
    console.log("GA Pageview tracked: ", location.pathname + location.search);
  }, [location]);

  return null; // No UI rendered for this component
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
