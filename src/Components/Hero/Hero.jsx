import React from 'react';
import './Hero.css';
import profileImg from '../../assets/about_profile.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
// Assuming CanvasScene is a component you have for the background
// import CanvasScene from './CanvasScene'; // Uncomment if you have this component

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* === CanvasScene as Background Layer === */}
      {/* If CanvasScene is purely background, it might be better placed here or even in a parent component
          or given absolute positioning in CSS so it doesn't affect flex layout.
          For now, I'll assume it's meant to be a sibling and also centered. */}
      {/* <CanvasScene /> */} {/* Assuming CanvasScene component exists and is imported */}

      {/* === Foreground Content - NOW DIRECTLY UNDER HERO === */}
      <div className="hero-image-wrapper" aria-label="Siddhartha's Digital Profile Image">
        <img
          src={profileImg}
          alt="Siddhartha's avatar, depicted with a digital, futuristic aesthetic."
          className="hero-profile-cyber"
        />
      </div>

      <h1 className="hero-title">
        <span className="glitch-effect" aria-hidden="true">ACCESS_GRANTED:</span>{' '}
        <span className="static-text">I'm Siddhartha,</span>{' '}
        <span className="neon-highlight">a digital architect</span> from the <span className="network-tag">[IN] Network</span>.
      </h1>

      <p className="hero-description" aria-live="polite">
        <span className="terminal-prefix">&gt;&gt; RUNNING_DIAGNOSTICS...</span><br /><br />
        <span className="terminal-line">// System logs indicate proficiency in crafting engaging, responsive web interfaces</span><br />
        <span className="terminal-line">// Focused on user-module interaction protocols and data-driven decision intelligence</span><br />
        <span className="terminal-line">// Capable of deploying machine learning models for anomaly resolution in live data environments</span>
      </p>

      <div className="hero-action">
        <AnchorLink className="cyber-button primary-button" offset={50} href="#contact">
          <span className="button-text">INITIATE_COMMS</span>
          <span className="button-border-glow"></span>
        </AnchorLink>
        <a
          href="https://drive.google.com/file/d/1BlSwID1wqmEv56QcwJjoY7DD22CDzrmX/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="cyber-button secondary-button"
        >
          <span className="button-text">Chinthapatla_Siddhartha_Resume.pdf
</span>
          <span className="button-border-glow"></span>
        </a>
      </div>
    </section>
  );
};

export default Hero;