import React, { useState } from 'react';
import { FREQUENTLY_ASKED_QUESTIONS } from '../data/academyData';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

interface FaqSectionProps {
  onContactClick: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onContactClick }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-[#FFFFFF] py-16 lg:py-24 border-b border-[#252525]/10">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-medium tracking-widest text-[#66734A] uppercase">
            <span>Everything You Need to Know</span>
            <span aria-hidden="true" className="text-[#C66B45]">·</span>
            <span>Clarity & Policies</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#252525] text-balance">
            Frequently Asked Questions
          </h2>

          <p className="text-base text-[#252525]/75 leading-relaxed max-w-xl mx-auto">
            Practical answers regarding equipment, skill levels, scheduling, and what to expect on your first day at the studio.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="divide-y divide-[#252525]/10 border-t border-b border-[#252525]/10">
          {FREQUENTLY_ASKED_QUESTIONS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-serif text-[#252525] group-hover:text-[#C66B45] transition-colors">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-[#252525]/50 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#C66B45]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pt-3 pr-6 text-sm text-[#252525]/80 leading-relaxed font-normal">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions footer */}
        <div className="mt-12 text-center space-y-3">
          <p className="text-xs text-[#252525]/70">
            Have a specific dietary restriction or private inquiry not answered here?
          </p>
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C66B45] hover:text-[#a95633] border-b border-[#C66B45] pb-0.5 transition-colors cursor-pointer"
          >
            <MessageSquare size={14} />
            <span>Speak with our Admissions Team</span>
          </button>
        </div>

      </div>
    </section>
  );
};
