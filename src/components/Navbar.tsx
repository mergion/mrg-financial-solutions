
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/6f300202-3773-4961-ac73-134610b95392.png" 
              alt="RTM Holdings Logo" 
              className="h-10" 
            />
          </Link>
        </div>
        
        <nav className={`hidden md:flex items-center space-x-8`}>
          <Link to="/" className="nav-link font-medium">Home</Link>
          <a href="#services" className="nav-link font-medium">Services</a>
          <a href="#about" className="nav-link font-medium">About</a>
          <a href="#contact" className="nav-link font-medium">FAQ</a>
        </nav>
        
        <div className="hidden md:block">
          <a href="#contact" className="primary-btn">Get Started</a>
        </div>
        
        <button 
          className="md:hidden text-mrg-primary" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="nav-link font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <a href="#services" className="nav-link font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#about" className="nav-link font-medium py-2" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#contact" className="nav-link font-medium py-2" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <a href="#contact" className="primary-btn text-center" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
