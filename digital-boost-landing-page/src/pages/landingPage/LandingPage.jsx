import React, { useEffect } from 'react';
import './landingPage.css';
import AOS from 'aos'; // AOS for animations on scroll
import 'aos/dist/aos.css';
import ReactGA from 'react-ga'; // Import ReactGA for event tracking
import Hero from '../../components/hero/Hero';
import Navbar from '../../components/navbar/Navbar';
import Features from '../../components/features/Features';
import CaseStudies from '../../components/caseStudies/CaseStudies';
import Pricing from '../../components/pricing/Pricing';
import ContactForm from '../../components/contactForm/ContactForm';
import BlogPosts from '../../components/blogPosts/BlogPosts';
import FaqSection from '../../components/faqSection/FaqSection';

const LandingPage = () => {

  // Scroll Depth Tracking
  useEffect(() => {
    AOS.init({ duration: 2500, once: true }); // Initialize AOS

    // Function to track scroll depth
    const handleScroll = () => {
      const scrollDepth = Math.floor((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);

      // Trigger GA event at specific scroll depths (25%, 50%, 75%, 100%)
      if (scrollDepth >= 25) {
        ReactGA.event({
          category: 'User Engagement',
          action: 'Scrolled 25% of the page',
          label: 'Landing Page'
        });
      }
      if (scrollDepth >= 50) {
        ReactGA.event({
          category: 'User Engagement',
          action: 'Scrolled 50% of the page',
          label: 'Landing Page'
        });
      }
      if (scrollDepth >= 75) {
        ReactGA.event({
          category: 'User Engagement',
          action: 'Scrolled 75% of the page',
          label: 'Landing Page'
        });
      }
      if (scrollDepth >= 100) {
        ReactGA.event({
          category: 'User Engagement',
          action: 'Scrolled 100% of the page',
          label: 'Landing Page'
        });
      }
    };

    // Attach the scroll listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the scroll listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []); // Effect runs once on component mount

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
    </div>
  );
};

export default LandingPage;
