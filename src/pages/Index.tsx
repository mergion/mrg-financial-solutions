
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Trust from '../components/Trust';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  // Set favicon programmatically
  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.setAttribute('href', '/lovable-uploads/56fffc33-3582-4b6c-bb56-bfde47fe7de1.png');
    }
    
    // Update title
    document.title = 'RTM Holdings | Financial Solutions for Business Growth';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Trust />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
