import React, { useEffect } from 'react';
import './landingPage.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

import Hero from '../../components/hero/Hero';
import Navbar from '../../components/navbar/Navbar';
import Features from '../../components/features/Features';
import CaseStudies from '../../components/caseStudies/CaseStudies';
import Pricing from '../../components/pricing/Pricing';
import ContactForm from '../../components/contactForm/ContactForm';
import BlogPosts from '../../components/blogPosts/BlogPosts';
import FaqSection from '../../components/faqSection/FaqSection';

const LandingPage = () => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 2500, // Animation duration in milliseconds
      once: true, // Animation happens only once
    });
  }, []);

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
