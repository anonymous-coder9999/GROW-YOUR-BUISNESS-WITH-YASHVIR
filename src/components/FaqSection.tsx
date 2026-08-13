import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, Sparkles } from 'lucide-react';
import { FAQ_DATA } from '../data/faqData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappUrl = "https://wa.me/919394389413?text=Hi%20GROWUP!%20I%20have%20a%20question%20about%20your%20services.";

  return (
    <section id="faq" className="py-20 relative bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-cyan-900 mb-4 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-600 animate-pulse" />
            <span>Got Questions? We Have Answers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-zinc-900 tracking-tight">
            Frequently Asked{' '}
            <span className="text-cyan-700">
              Questions
            </span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-zinc-200 overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-zinc-900 hover:text-black transition-colors"
                >
                  <span className={`font-heading ${isOpen ? 'text-cyan-800' : ''}`}>{faq.question}</span>
                  <div className={`p-1.5 rounded-xl bg-zinc-100 border border-zinc-200 transition-transform duration-200 ${isOpen ? 'rotate-180 text-cyan-800' : 'text-zinc-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-zinc-600 font-medium leading-relaxed border-t border-zinc-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Ask on WhatsApp Banner */}
        <div className="mt-12 bg-zinc-50 rounded-3xl p-6 border border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-md">
          <div>
            <h4 className="text-sm font-bold text-zinc-900">Have a custom query not listed here?</h4>
            <p className="text-xs text-emerald-700 font-semibold mt-0.5">Speak directly with our team on WhatsApp (9394389413).</p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all flex items-center gap-2 shadow-xs shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-white" />
            <span className="tracking-wide">Ask on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
