import React from 'react';
import { ArrowRight, BuildingIcon, BadgeDollarSignIcon, CreditCardIcon } from 'lucide-react';

type ServiceProps = {
  title: string;
  description: string;
  delay: number;
  icon?: React.ComponentType<any>;
};

const ServiceCard = ({ title, description, delay, icon: Icon }: ServiceProps) => {
  return (
    <div className="service-card animate-fade-in" style={{ animationDelay: `${delay}s` }}>
      {Icon && <Icon className="w-8 h-8 text-mrg-secondary mb-4" />}
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
      icon: BuildingIcon
    },
    {
      title: "Term Loans",
      description: "Secure long-term capital with predictable payments designed for substantial business investments.",
      delay: 0.2,
      icon: BadgeDollarSignIcon
    },
    {
      title: "Business Line of Credit",
      description: "Revolving funding access that provides essential financial flexibility for operational agility.",
      delay: 0.3,
      icon: CreditCardIcon
    },
    {
      title: "Working Capital",
      description: "Immediate liquidity solutions to optimize cash flow and facilitate day-to-day operations.",
      delay: 0.4,
      icon: BadgeDollarSignIcon
    },
    {
      title: "Equipment Financing",
      description: "Strategic acquisition options for critical business machinery with favorable payment structures.",
      delay: 0.5,
      icon: BuildingIcon
    },
    {
      title: "Invoice Factoring",
      description: "Transform outstanding client invoices into instant cash flow to strengthen your financial position.",
      delay: 0.6,
      icon: CreditCardIcon
    },
    {
      title: "High-Ticket Credit Repair",
      description: "Comprehensive credit restoration services for both personal and business credit profiles.",
      delay: 0.7,
      icon: CreditCardIcon
    },
    {
      title: "Business Credit Building",
      description: "Strategic programs to establish and strengthen your business credit profile.",
      delay: 0.8,
      icon: BuildingIcon
    },
    {
      title: "ERC/R&D Tax Credit Recovery",
      description: "Expert assistance in identifying and claiming eligible tax credits for your business growth.",
      delay: 0.9,
      icon: BadgeDollarSignIcon
    }
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
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
