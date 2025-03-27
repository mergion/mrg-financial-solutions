
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

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
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Get In Touch</h2>
        
        {/* CTA Calculator Card */}
        <div className="mb-20 rounded-3xl bg-[#0a3d1a] text-white py-16 px-8 text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-12 max-w-4xl mx-auto leading-tight">
            Calculate How Much You Qualify For At No Cost!
          </h3>
          <a href="#" className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold py-4 px-8 rounded-full text-xl transition-colors">
            How Much Can I Get?
          </a>
          <p className="mt-10 text-lg">No SSN Required</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#003b1a]">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mb-4">
              Need help with something else? Simply send us an email at{" "}
              <a href="mailto:info@mrgholdings.com" className="text-[#22c55e] hover:underline">
                info@mrgholdings.com
              </a>
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-xl font-medium text-left py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-lg pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
