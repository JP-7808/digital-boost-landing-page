import './hero.css';
import React from 'react';
import ReactGA from 'react-ga';

const Hero = (props) => {
    // Scrolls smoothly to the contact section and tracks the click event in Google Analytics
    const handleScroll = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });

            // Track the click event in Google Analytics
            ReactGA.event({
                category: 'CTA',
                action: 'Click',
                label: 'Get Started Button'
            });
        }
    };

    return (
        <section className="hero" data-aos={props['data-aos']}>
            <div className="hero-content">
                <h1>The Digital Boost</h1>
                <p>Maximize your business potential with our comprehensive digital marketing package. Increased brand visibility Reaching a larger audience online, improving brand recognition and awareness.</p>
                {/* Button triggers scroll to contact section */}
                <button className="cta-btn" onClick={handleScroll}>Get Started</button> 
            </div>
        </section>
    );
}

export default Hero;
