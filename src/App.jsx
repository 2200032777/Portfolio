import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Certifications from './Components/Certifications/Certifications';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { useScrollSpy } from './hooks/useScrollSpy'; // Import the hook

const App = () => {
  // Define the IDs of your sections in the order they appear
  const sectionIds = ['home', 'about', 'services', 'work', 'certifications', 'contact'];
  
  // Use the hook to get the ID of the currently active section
  // The options mean a section is "active" when it's 50% visible
  const activeSection = useScrollSpy(sectionIds, { threshold: 0.5 });

  return (
    <div>
      {/* Pass the dynamic activeSection ID to the Navbar */}
      <Navbar activeSection={activeSection} />

      <div id='home'><Hero /></div>
      <div id='about'><About /></div>
      <div id='services'><Services /></div>
      <div id='work'><MyWork /></div>
      <div id='certifications'><Certifications /></div>
      <div id='contact'><Contact /></div>
      
      <Footer />
    </div>
  );
};

export default App;