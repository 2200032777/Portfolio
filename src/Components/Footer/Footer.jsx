import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-grid-container">
        {/* Left Side: Brand & Info */}
        <div className="footer-brand-info">
          <p className="footer-tagline">Crafting digital experiences that inspire.</p>
          <p className="footer-location">Warangal, India</p>
        </div>

        {/* Middle: Quick Links */}
        <div className="footer-links-group">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#work">My Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right Side: Social Connections */}
        <div className="footer-social-group">
          <h3>Connect</h3>
          <div className="footer-social-icons">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <FaGithub size={32} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <FaLinkedinIn size={32} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
              <FaTwitter size={32} />
            </a>
            <a href="mailto:contact@example.com" aria-label="Send me an email">
              <FaEnvelope size={32} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="footer-bottom-bar">
        <p className="footer-copyright">© {new Date().getFullYear()} Chinthapatla Siddhartha. All rights reserved.</p>
        <div className="footer-legal-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;