import React from 'react';
import { Search, BookOpen, UtensilsCrossed, Award } from 'lucide-react';

export const LearningJourneySection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Choose Your Class',
      subtitle: 'Exploration & Readiness',
      description: 'Explore courses based on your palate, interests, and culinary experience. From 3-hour evening pasta workshops to intensive weekend bootcamps.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Learn the Fundamentals',
      subtitle: 'Science & Preparation',
      description: 'Step into your individual marble station. Understand seasonal ingredients, knife ergonomics, station prep (mise en place), and foundational heat mechanics.',
      icon: BookOpen,
    },
    {
      step: '03',
      title: 'Cook Along with Experts',
      subtitle: 'Hands-On Guidance',
      description: 'Practise recipes step-by-step under the live guidance of experienced chefs. Receive immediate tactile feedback on seasoning balance, texture, and timing.',
      icon: UtensilsCrossed,
    },
    {
      step: '04',
      title: 'Create with Confidence',
      subtitle: 'Mastery & Celebration',
      description: 'Plate your dishes with restaurant-level aesthetics, sit down with fellow students in our private tasting salon for wine pairing, and take home lifelong muscle memory.',
      icon: Award,
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-16 lg:py-24 border-b border-[#252525]/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-medium tracking-widest text-[#66734A] uppercase">
            <span>The Student Experience</span>
            <span aria-hidden="true" className="text-[#C66B45]">·</span>
            <span>Structured Mastery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#252525] text-balance">
            From Your First Recipe <br />
            <span className="italic font-normal text-[#66734A]">to Your Signature Dish.</span>
          </h2>

          <p className="text-base text-[#252525]/75 leading-relaxed">
            Every session at Vance is choreographed to take you from unfamiliar ingredients to effortless, instinctive culinary execution.
          </p>
        </div>

        {/* Step-by-Step Horizontal Progression */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-[#FAF5EC]/70 p-6 rounded-lg border border-[#252525]/10 flex flex-col justify-between group hover:border-[#C66B45]/40 transition-all"
              >
                <div>
                  {/* Top Step Number and Icon */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#252525]/10 mb-4">
                    <span className="text-2xl font-serif font-bold text-[#C66B45]">
                      {item.step}
                    </span>
                    <div className="p-2 rounded bg-white text-[#252525] border border-[#252525]/10 group-hover:text-[#66734A] transition-colors">
                      <Icon size={16} />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-[#66734A] uppercase tracking-wider block mb-1">
                    {item.subtitle}
                  </span>

                  <h3 className="text-lg font-serif text-[#252525] mb-2 font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#252525]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#252525]/10 flex items-center justify-between text-[11px] text-[#252525]/60">
                  <span>Phase {idx + 1} of 4</span>
                  <span className="font-medium text-[#66734A]">Hands-On</span>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
