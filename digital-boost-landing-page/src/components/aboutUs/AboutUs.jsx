import React from "react";
import "./aboutUs.css";

const AboutUs = (props) => {
  return (
    <section className="about-us" data-aos={props['data-aos']}>
      <div className="container">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
          Welcome to Jaya Digital, your trusted partner in digital marketing.
          We specialize in **SEO, Social Media Strategy, and Paid Ad Management**, helping
          small and medium businesses grow their online presence.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              To empower businesses with cutting-edge marketing solutions and data-driven strategies.
            </p>
          </div>

          <div className="about-card">
            <h3>Why Choose Us?</h3>
            <p>
              We offer personalized strategies, expert guidance, and measurable results to drive your success.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              To be a global leader in digital marketing, helping businesses grow with innovation and creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
