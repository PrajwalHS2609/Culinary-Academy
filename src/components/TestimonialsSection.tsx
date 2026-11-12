import React from 'react';
import { TESTIMONIALS } from '../data/academyData';
import { Quote, Star, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 lg:py-24 border-b border-[#252525]/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-4 mb-14">
          <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-[#66734A] uppercase">
            <span>Verified Student Voices</span>
            <span aria-hidden="true" className="text-[#C66B45]">·</span>
            <span>Real Kitchen Outcomes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#252525] text-balance">
            Stories from Our <br />
            <span className="italic font-normal text-[#66734A]">Cooking Community.</span>
          </h2>

          <p className="text-base text-[#252525]/75 leading-relaxed">
            Read how home cooks, amateur enthusiasts, and career changers transformed their kitchen confidence at Vance.
          </p>
        </div>

        {/* Editorial Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-lg bg-[#FAF5EC] border border-[#252525]/10 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Rating & Course Attended (Unboxed quiet metadata) */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-[#C5A46D]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[#66734A] font-medium">{t.date}</span>
                </div>

                <p className="text-base sm:text-lg font-serif italic text-[#252525] leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              {/* Attribution and Real Kitchen Outcome */}
              <div className="pt-4 border-t border-[#252525]/10 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-[#252525]">{t.name}</h4>
                    <p className="text-xs text-[#252525]/60">{t.role}</p>
                  </div>
                  <span className="text-xs text-[#66734A] italic">{t.course}</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#C66B45]">
                  <CheckCircle size={13} className="shrink-0" />
                  <span>Verified Outcome: {t.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
