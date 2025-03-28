
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

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
    <section id="contact" className="py-24 relative">
      {/* Hero Banner Section - Let's Talk About Your Next Move */}
      <div className="w-full bg-[#111827] text-white py-32 mb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
        <div className="absolute inset-0 bg-[url('/lovable-uploads/e3f52500-5b85-4d6c-8db4-5793a52a355e.png')] bg-cover bg-center opacity-60 z-0"></div>
        <div className="container max-w-5xl mx-auto px-4 relative z-20 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Let's talk about<br />your next move
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            If you're looking for measurable impact and sustainable growth, let's start the conversation.
          </p>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-xl py-6 px-10 rounded-md"
            size="lg"
          >
            Book a Call
          </Button>
        </div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4">
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
                <div key={index} className="mb-4 rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white">
                  <h3 className="border-b border-slate-100">
                    <button
                      onClick={(e) => {
                        const content = e.currentTarget.nextElementSibling;
                        const isOpen = content?.classList.contains('block');
                        
                        // Close all other FAQ items
                        document.querySelectorAll('.faq-content').forEach(el => {
                          el.classList.remove('block');
                          el.classList.add('hidden');
                        });
                        
                        document.querySelectorAll('.faq-icon').forEach(el => {
                          el.classList.remove('rotate-180');
                        });
                        
                        // Toggle current FAQ item
                        if (isOpen) {
                          content?.classList.remove('block');
                          content?.classList.add('hidden');
                          e.currentTarget.querySelector('.faq-icon')?.classList.remove('rotate-180');
                        } else {
                          content?.classList.remove('hidden');
                          content?.classList.add('block');
                          e.currentTarget.querySelector('.faq-icon')?.classList.add('rotate-180');
                        }
                      }}
                      className="flex w-full justify-between items-center p-6 text-left text-xl font-medium text-slate-800 hover:bg-slate-50 transition-colors"
                    >
                      {faq.question}
                      <ChevronDown className="h-6 w-6 faq-icon transition-transform duration-200" />
                    </button>
                  </h3>
                  <div className={`faq-content hidden p-6 text-slate-600 text-lg border-t border-slate-100 bg-white`}>
                    {faq.answer}
                  </div>
                </div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
