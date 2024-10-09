import React from 'react';
import './features.css';
import seo from '../../photos/seo.webp';
import socialMediaStrategy from '../../photos/socialMediaStrategy.jpg';
import PPCManagement from '../../photos/PPCManagement.png';
import contentCreation from '../../photos/contentCreation.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 

const featuresData = [
    {
        title: 'SEO Optimization',
        description: 'Boost your visibility on search engines with our expert SEO services.',
        icon:seo,
    },
    {
        title:'Social Media Strategy',
        description: 'Engage your audience effectively through tailored social media campaigns.',
        icon: socialMediaStrategy,
    },
    {
        title: 'PPC Management',
        description: 'Maximize ROI with our targeted pay-per-click advertising solutions.',
        icon: PPCManagement, 
    },
    {
        title: 'Content Creation',
        description: 'Attract and retain customers with high-quality, engaging content.',
        icon: contentCreation, 
    },
]

const Features = (props) => {
    return (
        <section className='features' data-aos={props['data-aos']}>
            <h2>Our Features</h2>
            <div className='features-container'>
                {featuresData.map((feature, index) => (
                    <div className='feature-card' key={index}>
                        <LazyLoadImage
                            src={feature.icon}
                            alt={feature.title}
                            className='feature-icon'
                            effect='blur'
                        />
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features;