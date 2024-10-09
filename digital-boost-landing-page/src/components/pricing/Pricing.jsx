import React from 'react';
import './pricing.css';

const pricingPlans = [
    {
        title: 'Basic',
        price: '$99/month',
        features: ['Social Media Marketing', 'SEO Optimization', 'Email Support'],
        link: '/contact',
    },
    {
        title: 'Standard',
        price: '$199/month',
        features: ['Everything in Basic', 'PPC Management', '24/7 Support'],
        link: '/contact',
        isPopular: true, 
    },
    {
        title: 'Premium',
        price: '$299/month',
        features: ['Everything in Standard', 'Content Creation', 'Dedicated Account Manager'],
        link: '/contact',
    },
];

const Pricing = (props) => {
    
    const handleScroll = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="pricing-section" data-aos={props['data-aos']}>
            <h2 className="pricing-title">Our Pricing Plans</h2>
            <div className="pricing-container">
                {pricingPlans.map((plan, index) => (
                    <div key={index} className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}>
                        <h3 className="plan-title">{plan.title}</h3>
                        <p className="plan-price">{plan.price}</p>
                        <ul className="plan-features">
                            {plan.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                        <button  className={`plan-cta ${plan.isPopular ? 'popular-cta' : ''}`}  onClick={handleScroll}>
                            Get Started
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;
