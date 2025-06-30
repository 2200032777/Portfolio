import React, { useState, useEffect } from 'react';
import './Welcome.css';

const Welcome = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000); // Hide after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="welcome-popup">
      <p>Hey! Thanks for visiting.</p>
    </div>
  );
};

export default Welcome;
