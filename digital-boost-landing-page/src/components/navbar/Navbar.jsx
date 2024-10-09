import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    // State to manage the open/close status of the mobile menu
    const [isOpen, setIsOpen] = useState(false);

    // Toggles the menu open/close state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Scrolls smoothly to the contact section
    const handleScroll = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h2 className='ritz'>RITZ Media World</h2>
            </div>
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="">Services</Link></li>
                    <li><Link to="">About Us</Link></li>
                    {/* Link to contact section triggers smooth scroll */}
                    <li><Link to="" onClick={handleScroll}>Contact Us</Link></li>
                </ul>
            </div>
            {/* Menu toggle button for mobile view */}
            <div className="navbar-toggle" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    );
};

export default Navbar;
