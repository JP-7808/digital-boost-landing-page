import React, { useState } from 'react';
import './faqSection.css';

// Array of FAQs with questions and answers
const faqs = [
  {
    question: 'What is included in "The Digital Boost" package?',
    answer: 'The package includes social media marketing, SEO optimization, paid ad management, and more.'
  },
  {
    question: 'How long does it take to see results?',
    answer: 'Results typically start showing within 3-6 months, depending on the industry and competition.'
  },
  {
    question: 'Can I customize the package?',
    answer: 'Yes, we offer tailored solutions depending on your business needs and goals.'
  }
];

const FaqSection = (props) => {
  // State to track the currently active FAQ
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggles the visibility of the answer for the selected FAQ
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" data-aos={props['data-aos']}>
      <h2 className="section-title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <h3>{faq.question}</h3>
            <div className={`answer ${activeIndex === index ? 'show' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
