import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import MyWork from './Components/MyWork/MyWork';
import Certifications from './Components/Certifications/Certifications';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Welcome from './Components/Welcome/Welcome'; // Corrected path to lowercase 'c'
import { useScrollSpy } from './hooks/useScrollSpy'; 

const App = () => {
  // Define the IDs of your sections in the order they appear
  const sectionIds = ['home', 'about', 'services', 'work', 'certifications', 'contact'];
  
  // Use the hook to get the ID of the currently active section
  const activeSection = useScrollSpy(sectionIds, { threshold: 0.5 });

  return (
    <div>
      <Welcome /> {/* <-- PLACE IT HERE */}

      {/* Pass the dynamic activeSection ID to the Navbar */}
      <Navbar activeSection={activeSection} />

      {/* The rest of your portfolio sections */}
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