import React, { useState, useEffect } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// Your name or logo text.
const LOGO_TEXT = "SIDDHARTHA";

const Navbar = () => {
  // State to manage the mobile menu (open or closed).
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // State to control the navbar's visibility on scroll.
  const [visible, setVisible] = useState(true);
  
  // State to store the last scroll position to determine scroll direction.
  const [lastScrollTop, setLastScrollTop] = useState(0);
  
  // State to detect if the user has scrolled down from the top of the page.
  const [isScrolled, setIsScrolled] = useState(false);

  // This effect hook handles all scroll-related logic.
  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      setIsScrolled(scrollTop > 10);

      if (scrollTop > lastScrollTop) {
        setVisible(false); // Scrolling Down
      } else {
        setVisible(true); // Scrolling Up
      }
      
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  // A helper function to close the mobile menu when a link is clicked.
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  
  // This function now just toggles the menu state.
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About Me' },
    { id: 'services', title: 'My Arsenal' },
    { id: 'work', title: 'My Blueprints' },
    { id: 'certifications', title: 'Certifications' },
  ];

  return (
    <div className={`navbar ${!visible ? 'navbar--hidden' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      
      <AnchorLink className='anchor-link logo' href='#home'>
  <span className="logo-text">{LOGO_TEXT}</span>
</AnchorLink>


      {/* --- NEW: CSS-only Hamburger Menu Button --- */}
      {/* This single button replaces both the open and close img tags. */}
      {/* The 'open' class will be added to it when the menu is open to trigger the 'X' animation. */}
      <button 
        className={`nav-mob-toggle ${isMenuOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
        aria-label="Menu" // Important for accessibility
      >
        <div className="hamburger"></div>
      </button>

      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        {/* We no longer need the close image inside the menu */}
        {navLinks.map(link => (
          <li key={link.id}>
            <AnchorLink
              className="anchor-link"
              offset={80}
              href={`#${link.id}`}
              onClick={handleLinkClick}
            >
              <p>{link.title}</p>
            </AnchorLink>
          </li>
        ))}
      </ul>

      <div className="nav-connect">
        <AnchorLink
          className='anchor-link'
          offset={80}
          href='#contact'
          onClick={handleLinkClick}
        >
          Start a Conversation
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;