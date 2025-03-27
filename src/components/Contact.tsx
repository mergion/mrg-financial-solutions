
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Building, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const faqs = [
    {
      question: "How Can I Get Funded?",
      answer: "Getting funded is simple. Fill out our quick online application, submit the required documentation, and our financial experts will guide you through the entire process. We'll match you with the best financing solution for your business needs."
    },
    {
      question: "Who Is Eligible?",
      answer: "Businesses operating for 6+ months with a checking account and at least $10K in monthly revenue can qualify for funding from $10K to $5M."
    },
    {
      question: "Will My Credit Be Affected?",
      answer: "Our initial funding assessment involves only a soft credit inquiry, which doesn't impact your credit score. A hard credit check will only be conducted with your explicit permission when proceeding with certain financing options."
    },
    {
      question: "What Are The Costs?",
      answer: "Our financing solutions come with transparent and competitive rates based on your business profile, funding amount, and selected products. We provide a detailed breakdown of all costs before you sign any agreement."
    },
    {
      question: "How Long Does It Take?",
      answer: "After completing the application and providing required documentation, many clients receive funding within 24-72 hours. More complex financing packages, like SBA loans, may require additional processing time."
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-mrg-secondary/5 to-white pointer-events-none"></div>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-in">
            <div className="inline-block px-4 py-1 bg-mrg-secondary/10 text-mrg-secondary rounded-full mb-4">
              <span className="text-sm font-medium">Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-mrg-primary mb-6">
              Everything You Need to Know
            </h2>
            <p className="text-mrg-gray mb-8">
              Find answers to common questions about our financing solutions. If you don't see what you're looking for, our team is ready to help.
            </p>
            
            <Accordion type="single" collapsible className="w-full mb-8">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-mrg-primary font-medium text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-mrg-gray">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-8">
              <a href="#" className="primary-btn">
                Apply For Funding
              </a>
            </div>
          </div>
          
          <div className="glass-card p-8 animate-fade-in relative overflow-hidden">
            <img 
              src="/lovable-uploads/450ceb4a-79ff-4f87-be58-af25678b69b2.png" 
              alt="Financial District" 
              className="w-full h-auto rounded-lg shadow-lg mb-8"
            />
            
            <h3 className="text-2xl font-semibold text-mrg-primary mb-6">Get In Touch</h3>
            
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
