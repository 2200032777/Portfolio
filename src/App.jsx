import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import MyWork from './components/MyWork/MyWork';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
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