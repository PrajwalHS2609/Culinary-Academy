import React, { useState } from 'react';
import { ACADEMY_CHEFS, Chef } from '../data/academyData';
import { Award, BookOpen, Quote, Sparkles } from 'lucide-react';

export const ChefsSection: React.FC = () => {
  const [selectedChefId, setSelectedChefId] = useState<string>(ACADEMY_CHEFS[0].id);

  const activeChef = ACADEMY_CHEFS.find((c) => c.id === selectedChefId) || ACADEMY_CHEFS[0];

  return (
    <section id="chefs" className="w-full bg-[#FAF5EC] py-16 lg:py-24 border-b border-[#252525]/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-4 mb-16">
          <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-[#66734A] uppercase">
            <span>Faculty & Mentors</span>
            <span aria-hidden="true" className="text-[#C66B45]">·</span>
            <span>Master Chef Educators</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#252525] leading-tight text-balance">
            Learn from People Who <br />
            <span className="italic font-normal text-[#C66B45]">Live and Breathe Food.</span>
          </h2>

          <p className="text-base text-[#252525]/75 leading-relaxed">
            Our instructors are not cookbook celebrities; they are seasoned culinary professionals dedicated to the craft of teaching.
          </p>
        </div>

        {/* Editorial Chef Selector Strip */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 scrollbar-none border-b border-[#252525]/10">
          {ACADEMY_CHEFS.map((chef) => (
            <button
              key={chef.id}
              onClick={() => setSelectedChefId(chef.id)}
              className={`px-4 py-2.5 text-xs font-medium rounded-md whitespace-nowrap transition-all cursor-pointer ${
                selectedChefId === chef.id
                  ? 'bg-[#252525] text-[#FAF5EC] font-semibold shadow-xs'
                  : 'bg-[#FFFFFF] text-[#252525]/70 hover:text-[#252525] border border-[#252525]/10'
              }`}
            >
              Chef {chef.name}
            </button>
          ))}
        </div>

        {/* Featured Editorial Spotlight for Selected Chef */}
        <div className="bg-[#FFFFFF] rounded-lg border border-[#252525]/10 p-8 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Chef Portrait Frame */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-lg overflow-hidden border border-[#252525]/10 bg-stone-100 shadow-xs">
                <img
                  src={activeChef.portrait}
                  alt={`Executive Chef ${activeChef.name} at Vance Culinary Academy`}
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] sm:h-[480px] object-cover"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="text-xs font-mono text-[#66734A] tracking-wide">
                  {activeChef.experience}
                </span>
              </div>
            </div>

            {/* Chef Dossier & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <span className="text-xs font-medium tracking-wider uppercase text-[#C66B45] block">
                  {activeChef.role}
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif text-[#252525] mt-1">
                  Chef {activeChef.name}
                </h3>
                <p className="text-xs text-[#252525]/60 mt-1">
                  Specialty: {activeChef.specialty}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#252525]/85 leading-relaxed">
                {activeChef.bio}
              </p>

              {/* Teaching Philosophy Blockquote */}
              <div className="p-5 rounded-md bg-[#FAF5EC] border border-[#252525]/10 relative">
                <Quote size={20} className="text-[#C5A46D] mb-2 opacity-60" />
                <p className="text-sm font-serif italic text-[#252525] leading-relaxed">
                  "{activeChef.teachingPhilosophy}"
                </p>
                <span className="text-[11px] font-medium uppercase tracking-wider text-[#66734A] block mt-2">
                  Teaching Philosophy
                </span>
              </div>

              {/* Accolades & Signature Dish */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-md border border-[#252525]/10 bg-white">
                  <div className="flex items-center gap-1.5 font-semibold text-[#252525] mb-2 uppercase tracking-wide">
                    <Award size={14} className="text-[#C66B45]" />
                    <span>Credentials & Honors</span>
                  </div>
                  <ul className="space-y-1.5 text-[#252525]/75">
                    {activeChef.accolades.map((acc, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#66734A]" />
                        <span>{acc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-md border border-[#252525]/10 bg-white">
                  <div className="flex items-center gap-1.5 font-semibold text-[#252525] mb-2 uppercase tracking-wide">
                    <BookOpen size={14} className="text-[#66734A]" />
                    <span>Signature Master Dish</span>
                  </div>
                  <p className="text-sm font-serif text-[#252525] italic mb-1">
                    {activeChef.signatureDish}
                  </p>
                  <p className="text-[11px] text-[#252525]/60">
                    Taught in seasonal masterclasses and private tasting atelier cohorts.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
