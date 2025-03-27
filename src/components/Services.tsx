
import React from 'react';
import { ArrowRight } from 'lucide-react';

type ServiceProps = {
  title: string;
  description: string;
  delay: number;
};

const ServiceCard = ({ title, description, delay }: ServiceProps) => {
  return (
    <div className="service-card animate-fade-in" style={{ animationDelay: `${delay}s` }}>
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-text">{description}</p>
      <a href="#contact" className="inline-flex items-center text-mrg-secondary hover:text-mrg-primary transition-colors mt-auto">
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "SBA Loans",
      description: "Government-guaranteed financing solutions to foster expansion and sustainable growth for your enterprise.",
      delay: 0.1,
    },
    {
      title: "Term Loans",
      description: "Secure long-term capital with predictable payments designed for substantial business investments.",
      delay: 0.2,
    },
    {
      title: "Business Line of Credit",
      description: "Revolving funding access that provides essential financial flexibility for operational agility.",
      delay: 0.3,
    },
    {
      title: "Working Capital",
      description: "Immediate liquidity solutions to optimize cash flow and facilitate day-to-day operations.",
      delay: 0.4,
    },
    {
      title: "Equipment Financing",
      description: "Strategic acquisition options for critical business machinery with favorable payment structures.",
      delay: 0.5,
    },
    {
      title: "Invoice Factoring",
      description: "Transform outstanding client invoices into instant cash flow to strengthen your financial position.",
      delay: 0.6,
    },
  ];

  return (
    <section id="services" className="py-24 bg-mrg-light relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-mrg-secondary/5 pointer-events-none"></div>
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-1 bg-mrg-secondary/10 text-mrg-secondary rounded-full mb-4">
            <span className="text-sm font-medium">Our Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-mrg-primary mb-4">
            Financial Solutions Tailored to Your Business Needs
          </h2>
          <p className="text-mrg-gray max-w-2xl mx-auto">
            Choose from our comprehensive range of funding options designed to help your business thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
