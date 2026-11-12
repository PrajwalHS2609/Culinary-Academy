import React from 'react';
import { PRICING_PACKAGES, PricingPackage } from '../data/academyData';
import { Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface PricingSectionProps {
  onSelectPackage: (pkg: PricingPackage) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="pricing" className="w-full bg-[#FAF5EC] py-16 lg:py-24 border-b border-[#252525]/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-medium tracking-widest text-[#66734A] uppercase">
            <span>Transparent Investment</span>
            <span aria-hidden="true" className="text-[#C66B45]">·</span>
            <span>All-Inclusive Fees</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#252525] text-balance">
            Choose the Learning Experience <br />
            <span className="italic font-normal text-[#C66B45]">That Suits You.</span>
          </h2>

          <p className="text-base text-[#252525]/75 leading-relaxed">
            All ingredients, wine pairings, take-home aprons, and recipe dossiers are included in your enrolment fee. Never any hidden surcharge.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-lg p-6 lg:p-7 flex flex-col justify-between border transition-all ${
                pkg.isPopular
                  ? 'bg-[#FFFFFF] border-[#C66B45] shadow-md relative'
                  : 'bg-[#FFFFFF] border-[#252525]/10 shadow-xs hover:border-[#252525]/30'
              }`}
            >
              <div>
                {/* Popular Marker without garish pill badge */}
                {pkg.isPopular && (
                  <div className="text-xs font-semibold text-[#C66B45] uppercase tracking-wider mb-2">
                    Most Popular Immersion
                  </div>
                )}

                <h3 className="text-xl font-serif text-[#252525] font-semibold">
                  {pkg.name}
                </h3>
                <p className="text-xs text-[#252525]/60 mt-0.5">
                  {pkg.subtitle}
                </p>

                {/* Price Display */}
                <div className="py-5 border-b border-[#252525]/10 my-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-serif text-[#252525] font-bold tabular-nums">
                      ${pkg.price}
                    </span>
                    <span className="text-xs text-[#252525]/60">USD</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#66734A] mt-1">
                    <span>{pkg.duration}</span>
                    <span aria-hidden="true">·</span>
                    <span>{pkg.format}</span>
                  </div>
                </div>

                {/* Inclusions */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#252525]">
                    Package Inclusions:
                  </span>
                  <ul className="space-y-2 text-xs text-[#252525]/80">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check size={14} className="text-[#66734A] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Policy & CTA */}
              <div className="pt-6 mt-6 border-t border-[#252525]/10 space-y-4">
                <p className="text-[11px] text-[#252525]/60 leading-tight">
                  <span className="font-semibold text-[#252525]/75">Policy: </span>
                  {pkg.bookingConditions}
                </p>

                <button
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full py-3 text-xs font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                    pkg.isPopular
                      ? 'bg-[#C66B45] text-white hover:bg-[#a95633]'
                      : 'bg-[#252525] text-white hover:bg-[#3a3a3a]'
                  }`}
                >
                  Enrol in Package
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Gift Cards / Corporate Strip */}
        <div className="mt-12 p-6 bg-[#FFFFFF] rounded-lg border border-[#252525]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <ShieldCheck size={20} className="text-[#66734A] shrink-0" />
            <div>
              <span className="font-serif font-semibold text-sm text-[#252525] block">
                Looking for Culinary Gift Certificates?
              </span>
              <p className="text-[#252525]/70">
                Give an unforgettable hands-on kitchen experience. Valid for 18 months across all workshop categories.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectPackage(PRICING_PACKAGES[0])}
            className="px-4 py-2 border border-[#252525]/30 rounded text-[#252525] hover:bg-[#FAF5EC] whitespace-nowrap font-medium transition-colors cursor-pointer"
          >
            Gift a Culinary Class
          </button>
        </div>

      </div>
    </section>
  );
};
