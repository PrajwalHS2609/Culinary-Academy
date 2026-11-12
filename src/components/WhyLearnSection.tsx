import React from 'react';
import { ChefHat, Flame, Users, Sparkles, Clock, Compass, ShieldCheck, Heart } from 'lucide-react';

export const WhyLearnSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Experienced Chef Instructors',
      description: 'Learn directly from Michelin-trained mentors and heritage cuisine specialists who live, breathe, and teach food with unpretentious generosity.',
      icon: ChefHat,
    },
    {
      num: '02',
      title: '100% Hands-On Practical Learning',
      description: 'You will never sit through a passive cooking demonstration. From raw prep to finishing sauce reductions, you execute every step at your own station.',
      icon: Flame,
    },
    {
      num: '03',
      title: 'Small-Group Intimacy (Cap 8)',
      description: 'By capping stations at 8 students, our instructors correct your knife posture, pan temperatures, and seasoning balance in real time.',
      icon: Users,
    },
    {
      num: '04',
      title: 'Finest Organic & Heirloom Ingredients',
      description: 'We partner directly with Northern California organic family farms, coastal fisheries, and artisanal millers. You cook with restaurant-grade quality.',
      icon: Sparkles,
    },
    {
      num: '05',
      title: 'Encouraging, Beginner-Friendly Space',
      description: 'Zero kitchen snobbery. We cultivate a warm, supportive studio culture where questions are celebrated and mistakes are natural stepping stones.',
      icon: Heart,
    },
    {
      num: '06',
      title: 'Professional Commercial Environment',
      description: 'Individual induction cooktops, hammered copper cookware, French rolling pins, and Japanese knives replicate a pristine professional brigade.',
      icon: Compass,
    },
    {
      num: '07',
      title: 'Flexible Schedules & Easy Rescheduling',
      description: 'Weekday evening ateliers, Saturday intensives, and Sunday morning pastry labs offer accommodating options for busy professionals.',
      icon: Clock,
    },
    {
      num: '08',
      title: 'Lifelong Technique & Notes Dossier',
      description: 'Every session includes a printed chef’s formula binder, technique notes, wine pairing guides, and ongoing instructor support.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] py-16 lg:py-24 border-b border-[#252525]/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl space-y-4 mb-16">
          <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-[#66734A] uppercase">
            <span>The Vance Distinction</span>
            <span aria-hidden="true" className="text-[#C66B45]">·</span>
            <span>Why Learn With Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#252525] leading-tight text-balance">
            More Than Recipes. <br />
            <span className="italic font-normal text-[#66734A]">Real Culinary Skills.</span>
          </h2>

          <p className="text-base text-[#252525]/75 leading-relaxed">
            A recipe tells you what to do. Technique teaches you why ingredients behave the way they do, freeing you from kitchen uncertainty forever.
          </p>
        </div>

        {/* 8 Distinct Editorial Benefit Cards (2x4 or 4x2 grid with subtle hairline borders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="p-6 rounded-lg bg-[#FAF5EC]/70 border border-[#252525]/10 hover:border-[#66734A]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#252525]/10 mb-4">
                    <span className="font-serif text-lg text-[#66734A] font-semibold">
                      {pillar.num}
                    </span>
                    <Icon size={18} className="text-[#252525]/50 group-hover:text-[#C66B45] transition-colors" />
                  </div>

                  <h3 className="text-base font-semibold text-[#252525] group-hover:text-[#66734A] transition-colors mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-[#252525]/75 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#252525]/5 flex items-center gap-1.5 text-[11px] text-[#66734A] font-medium">
                  <span>Vance Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
