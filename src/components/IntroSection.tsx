import React from 'react';
import { ArrowRight, Flame, Compass, HeartHandshake, Sparkles } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface IntroSectionProps {
  onLearnMore: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="experience" className="w-full bg-[#FFFFFF] py-16 lg:py-24 border-b border-[#252525]/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Split-Screen Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Studio Photo Showcase */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden border border-[#252525]/10 bg-stone-100 shadow-sm">
              <img
                src={IMAGES.studio}
                alt="Inside the sunlit Vance Culinary Academy kitchen studio with marble prep islands and copper hoods"
                referrerPolicy="no-referrer"
                className="w-full h-[420px] sm:h-[500px] object-cover"
              />
              <div className="p-4 bg-[#FAF5EC] border-t border-[#252525]/10 flex items-center justify-between text-xs text-[#252525]/80">
                <span className="font-serif italic">San Francisco Arts Quarter Studio</span>
                <span className="font-mono text-[#66734A]">8 Individual Marble Stations</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Principles */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-[#66734A] uppercase">
              <span>Teaching Philosophy</span>
              <span aria-hidden="true" className="text-[#C66B45]">·</span>
              <span>The Vance Pedagogy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#252525] leading-tight text-balance">
              Where Passion for Food <br />
              <span className="italic font-normal text-[#66734A]">Becomes a Skill.</span>
            </h2>

            <p className="text-base text-[#252525]/80 leading-relaxed">
              Most cooking tutorials teach you to follow a sequence of steps blindly. At Vance Culinary Academy, we believe real cooking begins when you close the cookbook. 
            </p>

            <p className="text-base text-[#252525]/80 leading-relaxed">
              Founded by former Michelin-starred executive chef Elena Vance, our studio replaces intimidating culinary jargon with intuitive sensory training: understanding the sizzle pitch of a pan, the elasticity of gluten under your palms, and the delicate equilibrium of acid, salt, fat, and heat.
            </p>

            {/* 3 Core Philosophical Pillars */}
            <div className="pt-2 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-[#FAF5EC] text-[#C66B45] shrink-0 border border-[#252525]/5">
                  <Flame size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#252525]">Technique-First Learning</h3>
                  <p className="text-xs text-[#252525]/70 mt-0.5 leading-normal">
                    Master heat management, emulsification, and pan deglazing rather than memorizing isolated recipes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-[#FAF5EC] text-[#66734A] shrink-0 border border-[#252525]/5">
                  <Compass size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#252525]">Uncompromising Ingredients</h3>
                  <p className="text-xs text-[#252525]/70 mt-0.5 leading-normal">
                    We cook exclusively with organic Northern California produce, single-estate olive oils, and heritage grains.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-[#FAF5EC] text-[#C5A46D] shrink-0 border border-[#252525]/5">
                  <HeartHandshake size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#252525]">Intimate Cohort Guidance</h3>
                  <p className="text-xs text-[#252525]/70 mt-0.5 leading-normal">
                    Strict caps of 8 students per chef ensure individual attention, live correction, and real confidence.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#252525] hover:text-[#C66B45] border-b-2 border-[#252525] hover:border-[#C66B45] pb-1 transition-colors cursor-pointer"
              >
                <span>Discover Our Complete Story & Method</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
