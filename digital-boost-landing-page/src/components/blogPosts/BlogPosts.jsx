import React from 'react';
import './blogPosts.css';

// Sample blog post data including title, date, description, and link
const blogPosts = [
  {
    title: 'How Digital Marketing Can Transform Your Business',
    date: 'October 5, 2024',
    description: 'Learn the key digital marketing strategies that can help small and medium businesses grow online.',
    link: '#'
  },
  {
    title: 'The Ultimate Guide to SEO in 2024',
    date: 'September 25, 2024',
    description: 'Boost your website’s visibility with these actionable SEO tips.',
    link: '#'
  },
  {
    title: 'Why Social Media is Essential for Business Growth',
    date: 'August 30, 2024',
    description: 'Discover why social media marketing is crucial for your business and how to use it effectively.',
    link: '#'
  }
];

const BlogPosts = (props) => {
  return (
    <section className="bonus-section" data-aos={props['data-aos']}>
      <div className="container">
        <h2 className="section-title">Latest Blog Posts</h2>
        <div className="blog-container">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <h3>{post.title}</h3>
              <p className="blog-date">{post.date}</p>
              <p>{post.description}</p>
              <a href={post.link} className="read-more">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
