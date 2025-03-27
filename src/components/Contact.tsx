
import React from 'react';
import { Building, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-mrg-secondary/5 to-white pointer-events-none"></div>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block px-4 py-1 bg-mrg-secondary/10 text-mrg-secondary rounded-full mb-4">
              <span className="text-sm font-medium">Get In Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-mrg-primary mb-4">
              Ready to Accelerate Your Business Growth?
            </h2>
            <p className="text-mrg-gray mb-8">
              Speak with our financial experts today to find the perfect funding solution for your business needs. We're here to help you succeed.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-mrg-primary/10 text-mrg-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-mrg-primary">Phone</h3>
                  <p className="mt-1 text-mrg-gray">+1 (800) 555-1234</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-mrg-primary/10 text-mrg-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-mrg-primary">Email</h3>
                  <p className="mt-1 text-mrg-gray">info@mrgholdings.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-mrg-primary/10 text-mrg-primary">
                    <Building className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-mrg-primary">Office</h3>
                  <p className="mt-1 text-mrg-gray">123 Financial District<br />New York, NY 10004</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 animate-fade-in">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-mrg-primary">First Name</label>
                  <input 
                    type="text" 
                    className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-mrg-primary">Last Name</label>
                  <input 
                    type="text" 
                    className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-mrg-primary">Email</label>
                <input 
                  type="email" 
                  className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="john.doe@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-mrg-primary">Company</label>
                <input 
                  type="text" 
                  className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="ABC Company"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-mrg-primary">Message</label>
                <textarea 
                  className="flex w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-32"
                  placeholder="Tell us about your business and financial needs..."
                />
              </div>
              
              <button type="submit" className="w-full primary-btn">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
