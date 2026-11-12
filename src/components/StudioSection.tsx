import React, { useState } from 'react';
import { STUDIO_FEATURES } from '../data/academyData';
import { Check, Eye, Maximize2, Sparkles, Utensils } from 'lucide-react';
import { IMAGES } from '../assets/images';

export const StudioSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  return (
    <section id="studio" className="w-full bg-[#FAF5EC] py-16 lg:py-24 border-b border-[#252525]/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-[#66734A] uppercase">
              <span>The Atelier Environment</span>
              <span aria-hidden="true" className="text-[#C66B45]">·</span>
              <span>San Francisco Studio</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#252525] text-balance">
              A Kitchen Designed <br />
              <span className="italic font-normal text-[#C66B45]">for Creativity.</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm text-[#252525]/80 leading-relaxed">
              Designed from the floorboards up for culinary education. Natural skylights, acoustic dampening, individual induction ranges, and commercial ventilation create an airy, unhurried sanctuary for culinary exploration.
            </p>
          </div>
        </div>

        {/* Main Studio Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Studio Image */}
          <div className="lg:col-span-7">
            <div className="relative rounded-lg overflow-hidden border border-[#252525]/10 bg-stone-200 shadow-md">
              <img
                src={IMAGES.studio}
                alt="Architectural photo of the Vance Culinary Academy studio with exposed timber beams and stainless cooking stations"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#FAF5EC]/95 backdrop-blur-xs rounded border border-[#252525]/10 flex items-center justify-between text-xs text-[#252525]">
                <div>
                  <span className="font-serif font-semibold text-sm block">Vance Culinary Atelier</span>
                  <span className="text-[#66734A]">3,200 sq. ft. of professional culinary workspace</span>
                </div>
                <span className="hidden sm:inline font-mono text-[11px] text-[#252525]/60">
                  Open for Tours Tue–Sun
                </span>
              </div>
            </div>
          </div>

          {/* Right: Studio Features List with interactive focus */}
          <div className="lg:col-span-5 space-y-3">
            {STUDIO_FEATURES.map((feature, idx) => (
              <div
                key={idx}
                onClick={() => setActiveFeature(idx)}
                className={`p-4 rounded-lg border transition-all cursor-pointer ${
                  activeFeature === idx
                    ? 'bg-[#FFFFFF] border-[#C66B45] shadow-xs'
                    : 'bg-[#FFFFFF]/60 border-[#252525]/10 hover:bg-[#FFFFFF]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className={`font-mono text-xs mt-0.5 ${activeFeature === idx ? 'text-[#C66B45] font-bold' : 'text-[#252525]/40'}`}>
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className={`text-sm font-semibold ${activeFeature === idx ? 'text-[#252525]' : 'text-[#252525]/80'}`}>
                      {feature.title}
                    </h3>
                    <p className="text-xs text-[#252525]/70 mt-1 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
