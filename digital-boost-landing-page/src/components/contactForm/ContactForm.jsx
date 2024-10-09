import React, { useState } from 'react';
import axios from 'axios';
import './contactForm.css'; 
import digitalBoost from '../../photos/digitalBoost.webp';
import ReactGA from 'react-ga'; 
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ContactForm = () => {
    // State to manage form data and submission status
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); 

    // Handles input field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handles form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); 

        try {
            const response = await axios.post('https://digital-boost-landing-page-backend.onrender.com/api/contact/submit', formData);
            console.log('Form submitted:', response.data);
            setStatus('Message sent successfully!');

            // Track form submission in Google Analytics
            ReactGA.event({
                category: 'Form',
                action: 'Submit',
                label: 'Contact Form'
            });

            // Reset form fields
            setFormData({
                name: '',
                companyName: '',
                email: '',
                phoneNumber: '',
                message: ''
            });
        } catch (error) {
            console.error('There was an error submitting the form:', error.response ? error.response.data : error.message);
            setStatus('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false); 
        }
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                {/* Image section */}
                <div className="contact-image">
                    <LazyLoadImage src={digitalBoost} alt="img" />
                </div>

                {/* Contact form section */}
                <div className="contact-form-container">
                    <h1 className="contact-form-title">Contact Us</h1>
                    <p>We’d love to hear from you! Please fill out the form below.</p>

                    <div className="form-container">
                        <h2>Get in Touch</h2>

                        <form className="contactForm" onSubmit={handleSubmit}>
                            {/* Input fields for user data */}
                            <div className="input-group">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    placeholder="Company Name"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>

                        {status && <p className="status-message">{status}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
