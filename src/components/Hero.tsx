
import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-mrg-light pt-20">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-mrg-primary to-mrg-secondary opacity-10"></div>
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-grid-pattern bg-repeat opacity-5"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 py-20 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 animate-fade-in">
            <div className="inline-block px-4 py-1 bg-mrg-secondary/10 text-mrg-secondary rounded-full mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-sm font-medium">Financial Solutions for Growing Businesses</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-mrg-primary mb-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Unlock Capital for Your <span className="text-gradient">Business Growth</span>
            </h1>
            
            <p className="text-lg md:text-xl text-mrg-gray mb-8 max-w-xl animate-slide-up" style={{ animationDelay: '0.6s' }}>
              MRG Holdings provides tailored financial solutions to help businesses like yours thrive and expand. Access the funding you need with competitive terms.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <a href="#services" className="primary-btn">
                Explore Solutions
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-mrg-primary text-mrg-primary hover:bg-mrg-primary/10 h-12 px-6 py-3">
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-fade-in-slow" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-mrg-primary to-mrg-secondary rounded-2xl blur opacity-30 animate-pulse"></div>
              <div className="relative glass-card overflow-hidden rounded-2xl">
                <img 
                  src="/lovable-uploads/f617c57a-be5a-4020-8b7b-200991a4e800.png" 
                  alt="Business Growth" 
                  className="w-full h-auto object-cover rounded-xl shadow-lg transition-all duration-700 hover:scale-105" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-mrg-primary animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-mrg-secondary animate-bounce-subtle" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
