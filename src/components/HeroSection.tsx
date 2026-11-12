import React from 'react';
import { ArrowRight, Calendar, Sparkles, Award, Users, Utensils } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface HeroSectionProps {
  onExploreClasses: () => void;
  onBookConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClasses,
  onBookConsultation,
}) => {
  return (
    <section className="relative w-full bg-[#FAF5EC] pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-[#252525]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Asymmetric Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quiet Unboxed Kicker */}
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-[#66734A] uppercase">
              <span>Boutique Culinary Academy</span>
              <span aria-hidden="true" className="text-[#C66B45]">·</span>
              <span>San Francisco Arts District</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#252525] leading-[1.12] tracking-tight text-balance">
              Discover the <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#C66B45]">Art of Cooking.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#252525]/80 leading-relaxed max-w-xl font-normal">
              Learn new techniques, explore exciting flavours, and build genuine confidence in the kitchen with expert-led, hands-on cooking classes designed for every skill level.
            </p>

            {/* Supporting Line */}
            <p className="text-sm text-[#252525]/60 italic">
              From beginner-friendly lessons to advanced culinary workshops.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onExploreClasses}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#252525] rounded-md hover:bg-[#3a3a3a] transition-all shadow-sm cursor-pointer whitespace-nowrap"
              >
                <span>Explore Our Classes</span>
                <ArrowRight size={15} />
              </button>

              <button
                onClick={onBookConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-[#252525] bg-transparent border border-[#252525]/30 rounded-md hover:bg-[#252525]/5 hover:border-[#252525] transition-all cursor-pointer whitespace-nowrap"
              >
                Book a Free Consultation
              </button>
            </div>

            {/* Quiet Trust Bar */}
            <div className="pt-4 border-t border-[#252525]/10 flex flex-wrap items-center gap-6 text-xs text-[#252525]/70">
              <div className="flex items-center gap-1.5">
                <Utensils size={14} className="text-[#66734A]" />
                <span>Dedicated individual marble stations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users size={14} className="text-[#66734A]" />
                <span>Maximum 8 students per chef</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Editorial Photography Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden border border-[#252525]/10 bg-stone-200 shadow-md">
              <img
                src={IMAGES.hero}
                alt="Master Chef coaching adult students in the sunlit Vance Culinary Academy studio kitchen"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover hover:scale-[1.01] transition-transform duration-700"
              />

              {/* Measured Scrim & Subtle Caption */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium tracking-wide uppercase text-[#C5A46D]">
                      Studio Kitchen Atelier · Station 04
                    </p>
                    <p className="text-sm font-serif text-stone-100">
                      Classical French Saucier & Vegetable Fabrication
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-stone-300">100% Hands-On</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Asymmetrical Decorative Stamp Frame */}
            <div className="hidden xl:block absolute -bottom-5 -left-6 bg-[#FFFFFF] border border-[#252525]/10 p-4 rounded-md shadow-sm max-w-xs">
              <p className="text-xs font-serif italic text-[#66734A]">
                “Technique over recipes. Freedom over repetition.”
              </p>
              <p className="text-[11px] font-medium tracking-wide uppercase text-[#252525]/60 mt-1">
                Executive Chef Elena Vance
              </p>
            </div>
          </div>

        </div>

        {/* Full-Width Key Metrics Strip Placed Below Hero Split */}
        <div className="mt-14 pt-10 border-t border-[#252525]/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-3xl sm:text-4xl font-serif text-[#252525] tabular-nums">8</div>
            <div className="text-xs font-medium uppercase tracking-wider text-[#66734A] mt-1">Student Cap</div>
            <p className="text-xs text-[#252525]/70 mt-0.5">Individual prep stations guaranteed</p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-serif text-[#252525] tabular-nums">100%</div>
            <div className="text-xs font-medium uppercase tracking-wider text-[#66734A] mt-1">Hands-on Practice</div>
            <p className="text-xs text-[#252525]/70 mt-0.5">Zero passive cooking demonstrations</p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-serif text-[#252525] tabular-nums">12</div>
            <div className="text-xs font-medium uppercase tracking-wider text-[#66734A] mt-1">Master Instructors</div>
            <p className="text-xs text-[#252525]/70 mt-0.5">Michelin & heritage kitchen backgrounds</p>
          </div>

          <div>
            <div className="text-3xl sm:text-4xl font-serif text-[#252525] tabular-nums">4.96</div>
            <div className="text-xs font-medium uppercase tracking-wider text-[#66734A] mt-1">Verified Rating</div>
            <p className="text-xs text-[#252525]/70 mt-0.5">From 1,420+ academy graduates</p>
          </div>
        </div>

      </div>
    </section>
  );
};
