import './hero.css';
import React from 'react';
import ReactGA from 'react-ga';

const Hero = (props) => {
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
                <button className="cta-btn" onClick={handleScroll}>Get Started</button> {/* Smooth scroll */}
            </div>
        </section>
    );
}

export default Hero;
