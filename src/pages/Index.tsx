
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Calculator from '../components/Calculator';
import Trust from '../components/Trust';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  // Set favicon programmatically
  useEffect(() => {
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.setAttribute('href', '/lovable-uploads/ff85c20f-c431-426c-b4e0-177ab4ef9b2f.png');
    } else {
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.href = '/lovable-uploads/ff85c20f-c431-426c-b4e0-177ab4ef9b2f.png';
      document.head.appendChild(newFavicon);
    }
    
    // Update title
    document.title = 'RTM Holdings | Financial Solutions for Business Growth';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Calculator />
      <Trust />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
