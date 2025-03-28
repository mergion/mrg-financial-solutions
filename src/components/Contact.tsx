
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
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-slate-100 relative">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-100/50 to-white pointer-events-none"></div>
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-800">Get In Touch</h2>
        
        {/* CTA Calculator Card */}
        <div className="mb-20 rounded-xl overflow-hidden bg-gradient-to-r from-[#1a365d] to-[#2a4a73] text-white">
          <div className="px-8 py-16 md:py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 leading-tight">
                Calculate How Much You Qualify For At No Cost!
              </h3>
              <a 
                href="#" 
                className="inline-block bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white font-medium py-4 px-10 rounded-full text-xl transition-all duration-300 shadow-[0_4px_14px_0_rgba(59,130,246,0.4)] hover:shadow-[0_6px_20px_0_rgba(59,130,246,0.65)] hover:translate-y-[-2px]"
              >
                How Much Can I Get?
              </a>
              <p className="mt-8 text-gray-100 text-lg font-light">No SSN Required</p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-0"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 mb-4">
              Need help with something else? Simply send us an email at{" "}
              <a href="mailto:info@rtmholdings.com" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                info@rtmholdings.com
              </a>
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className={`mb-4 rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow ${index === 0 ? 'bg-slate-50' : 'bg-white'}`}
                >
                  <AccordionTrigger className="text-xl font-medium text-left p-6 hover:no-underline hover:bg-slate-50 text-slate-800">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-lg px-6 pb-6 border-t border-slate-100 bg-white">
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
