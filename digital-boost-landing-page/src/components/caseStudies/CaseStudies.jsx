import React from 'react';
import './caseStudies.css';
import socialMediaEngagment from '../../photos/socialMediaEngagment.jpeg';
import organicTraffic from '../../photos/organicTraffic.jpg';
import paidAdCampaigns from '../../photos/paidAdCampaigns.jpg';
import {LazyLoadImage} from 'react-lazy-load-image-component';


const caseStudiesData = [
    {
        id: 1,
        clientName: 'Dynamic Corporation',
        description: 'Dynamic Corporation increased its social media engagement by 50% after we implemented a new strategy.',
        result: '50% increase in social media engagement',
        image: socialMediaEngagment, 
    },
    {
        id: 2,
        clientName: 'Jaya Ltd',
        description: 'Jaya Limited saw a 30% increase in organic traffic after our SEO optimizations.',
        result: '30% increase in organic traffic',
        image: organicTraffic, 
    },
    {
        id: 3,
        clientName: 'Surya Inc',
        description: 'Surya Inc successfully managed paid ad campaigns that delivered a 200% ROI.',
        result: '200% ROI on paid ad campaigns',
        image: paidAdCampaigns, 
    },
];

const CaseStudies = (props) => {
    return (
        <div className="case-studies" data-aos={props['data-aos']}>
            <h1>Case Studies</h1>
            <div className="case-studies-container">
                {caseStudiesData.map((study) => (
                    <div className="case-study-card" key={study.id}>
                        <LazyLoadImage src={study.image} alt={study.clientName}  className="case-study-image"  />
                        <div className="case-study-info">
                            <h3>{study.clientName}</h3>
                            <p>{study.description}</p>
                            <strong>{study.result}</strong>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CaseStudies;
