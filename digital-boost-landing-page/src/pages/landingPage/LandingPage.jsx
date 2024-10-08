import React, { useEffect } from 'react';
import './landingPage.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import ReactGA from 'react-ga';
import Hero from '../../components/hero/Hero';
import Navbar from '../../components/navbar/Navbar';
import Features from '../../components/features/Features';
import CaseStudies from '../../components/caseStudies/CaseStudies';
import Pricing from '../../components/pricing/Pricing';
import ContactForm from '../../components/contactForm/ContactForm';
import BlogPosts from '../../components/blogPosts/BlogPosts';
import FaqSection from '../../components/faqSection/FaqSection';

const LandingPage = () => {
  const GA_MEASUREMENT_ID = 'G-WSBQT2W7JW';

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: true,
    });

    // Initialize Google Analytics
    ReactGA.initialize(GA_MEASUREMENT_ID);

    // Track the initial pageview
    ReactGA.pageview(window.location.pathname);
    console.log("GA Pageview tracked: ", window.location.pathname + window.location.search);
  }, []);

  // Function to track button click
  const trackButtonClick = () => {
    ReactGA.event({
      category: 'User',
      action: 'Clicked Test Button',
    });
    console.log('Button click tracked');
  };

  return (
    <div>
      <Navbar />
      <Hero data-aos="fade-in" />
      <Features data-aos="fade-up" />
      <CaseStudies data-aos="fade-right" />
      <Pricing data-aos="fade-left" />
      <div id="contact" data-aos="fade-up">
        <ContactForm />
      </div>
      <BlogPosts data-aos="fade-in" />
      <FaqSection data-aos="zoom-in" />

      {/* Button for testing GA event tracking */}
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <button onClick={trackButtonClick}>Test GA Event</button>
      </div>
    </div>
  );
};

export default LandingPage;
