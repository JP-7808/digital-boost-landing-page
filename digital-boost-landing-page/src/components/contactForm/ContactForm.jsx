import React, { useState } from 'react';
import axios from 'axios';
import './contactForm.css'; // Ensure you have the correct styles
import digitalBoost from '../../photos/digitalBoost.webp';
import ReactGA from 'react-ga'; // Import ReactGA

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/contact/submit', formData);
            console.log('Form submitted:', response.data);
            setStatus('Message sent successfully!');

            // Google Analytics event tracking for form submission
            ReactGA.event({
                category: 'Form',
                action: 'Submit',
                label: 'Contact Form'
            });

            setFormData({
                name: '',
                companyName: '',
                email: '',
                phoneNumber: '',
                message: ''
            });
        } catch (error) {
            console.error('There was an error submitting the form:', error);
            setStatus('Failed to send message. Please try again.');
        }
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                {/* First half with image */}
                <div className="contact-image">
                    <img src={digitalBoost} alt="Contact" />
                </div>

                {/* Second half with contact form */}
                <div className="contact-form-container">
                    <h1 className="contact-form-title">Contact Us</h1>
                    <p>We’d love to hear from you! Please fill out the form below.</p>

                    <div className="form-container">
                        <h2>Get in Touch</h2>

                        <form className="contactForm" onSubmit={handleSubmit}>
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
                            <button type="submit">Send Message</button>
                        </form>

                        {status && <p className="status-message">{status}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
