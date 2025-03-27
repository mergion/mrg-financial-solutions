
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
    if (!favicon) {
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.href = '/lovable-uploads/2a59b822-e85a-4b48-959a-7d946546e494.png';
      document.head.appendChild(newFavicon);
    } else {
      favicon.setAttribute('href', '/lovable-uploads/2a59b822-e85a-4b48-959a-7d946546e494.png');
    }
    
    // Update title
    document.title = 'MRG Holdings | Financial Solutions for Business Growth';
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
