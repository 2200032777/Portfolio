import React from 'react';
import './Services.css';
import arrow_icon from '../../assets/arrow_icon.svg';

const capabilities = [
  {
    title: 'AI & Machine Learning',
    description: 'Designing predictive, classification, and computer vision models using PyTorch, Scikit-Learn, and deep learning workflows.',
    icon: '🤖',
  },
  {
    title: 'Full-Stack Engineering',
    description: 'Developing dynamic web applications with React, Node, and REST APIs — from concept to production.',
    icon: '🛠️',
  },
  {
    title: 'Cloud & DevOps',
    description: 'AWS-certified: expertise in automated deployments, serverless architecture, and CI/CD pipelines with Docker and GitHub Actions.',
    icon: '☁️',
  }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-title">
        <h1><span className="glow-text">My Capabilities</span></h1>
      </div>

      <div className="services-grid">
        {capabilities.map((cap, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{cap.icon}</div>
            <h2>{cap.title}</h2>
            <p>{cap.description}</p>
            <div className="service-link">
              <span>Explore</span>
              <img src={arrow_icon} alt="arrow icon" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
