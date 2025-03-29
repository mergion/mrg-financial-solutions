
import React, { useState } from 'react';
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
    <section id="contact" className="relative">
      {/* Hero Banner Section - Let's Talk About Your Next Move */}
      <div className="w-full bg-mrg-primary text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-mrg-primary to-mrg-secondary/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('/lovable-uploads/e3f52500-5b85-4d6c-8db4-5793a52a355e.png')] bg-cover bg-center opacity-40 z-0"></div>
        <div className="container max-w-5xl mx-auto px-4 relative z-20 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Ready to secure<br />your business funding?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Whether you need working capital, equipment financing, or growth funds, our team is ready to help you access the right funding solution.
          </p>
          <Button 
            className="bg-white text-mrg-primary hover:bg-mrg-light hover:text-mrg-secondary text-xl py-6 px-10 rounded-md font-bold transition-all duration-300"
            size="lg"
          >
            Apply For Funding
          </Button>
        </div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 mt-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-mrg-primary">
              Frequently Asked Questions
            </h2>
            <p className="text-mrg-gray mb-4">
              Need help with something else? Simply send us an email at{" "}
              <a href="mailto:info@rtmholdings.com" className="text-mrg-secondary hover:text-mrg-primary hover:underline transition-colors">
                info@rtmholdings.com
              </a>
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white">
                  <h3 className="border-b border-slate-100">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="flex w-full justify-between items-center p-6 text-left text-xl font-medium text-mrg-primary hover:bg-slate-50 transition-colors"
                    >
                      {faq.question}
                      <ChevronDown className={`h-6 w-6 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} />
                    </button>
                  </h3>
                  <div 
                    className={`p-6 text-slate-600 text-lg border-t border-slate-100 bg-white transition-all duration-300 ${
                      openIndex === index ? 'block' : 'hidden'
                    }`}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
