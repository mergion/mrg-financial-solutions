
import React from 'react';
import { Check, Clock, DollarSign, ShieldCheck } from 'lucide-react';

const TrustFeature = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 glass-card animate-fade-in">
      <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-mrg-primary/10 text-mrg-primary mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-mrg-primary mb-3">{title}</h3>
      <p className="text-mrg-gray">{description}</p>
    </div>
  );
};

const Trust = () => {
  const features = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Competitive Rates",
      description: "Access funding with rates that work for your business needs and growth plans."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Fast Approvals",
      description: "Quick application review and funding processes to get capital when you need it."
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "Flexible Terms",
      description: "Customizable repayment options that align with your business cash flow."
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Trusted Experts",
      description: "Work with experienced advisors who understand your industry challenges."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-mrg-secondary/5">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-block px-4 py-1 bg-mrg-secondary/10 text-mrg-secondary rounded-full mb-4">
              <span className="text-sm font-medium">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-mrg-primary mb-4">
              Building Success Through Trusted Financial Partnerships
            </h2>
            <p className="text-mrg-gray mb-8">
              At RTM Holdings, we understand that every business has unique financial needs. Our approach combines industry expertise with personalized service to help you secure the right funding solution.
            </p>
            
            <div className="flex flex-col space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="rounded-full bg-mrg-primary/10 p-1">
                    <Check className="h-4 w-4 text-mrg-primary" />
                  </div>
                </div>
                <p className="ml-3 text-mrg-gray">Over 15 years of experience in business financing</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="rounded-full bg-mrg-primary/10 p-1">
                    <Check className="h-4 w-4 text-mrg-primary" />
                  </div>
                </div>
                <p className="ml-3 text-mrg-gray">$500M+ in funding facilitated for businesses</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="rounded-full bg-mrg-primary/10 p-1">
                    <Check className="h-4 w-4 text-mrg-primary" />
                  </div>
                </div>
                <p className="ml-3 text-mrg-gray">Industry-leading approval rates and client satisfaction</p>
              </div>
            </div>
            
            <div className="mt-8">
              <a href="#contact" className="primary-btn">
                Partner With Us
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <TrustFeature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
