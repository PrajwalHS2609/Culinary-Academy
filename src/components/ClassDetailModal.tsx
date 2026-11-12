import React from 'react';
import { CookingClass } from '../data/academyData';
import { X, Clock, Users, Award, Check, Sparkles, Utensils, Calendar } from 'lucide-react';

interface ClassDetailModalProps {
  cookingClass: CookingClass | null;
  onClose: () => void;
  onBookClass: (classId: string) => void;
}

export const ClassDetailModal: React.FC<ClassDetailModalProps> = ({
  cookingClass,
  onClose,
  onBookClass,
}) => {
  if (!cookingClass) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#FAF5EC] rounded-lg max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-[#252525]/20 shadow-2xl relative my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-stone-500 hover:text-stone-900 bg-white/80 hover:bg-white rounded-full transition-colors cursor-pointer"
          aria-label="Close details"
        >
          <X size={20} />
        </button>

        {/* Hero Image in Modal */}
        <div className="relative h-64 sm:h-72 overflow-hidden bg-stone-200">
          <img
            src={cookingClass.image}
            alt={cookingClass.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="text-xs font-mono uppercase tracking-wider text-[#C5A46D] block mb-1">
              {cookingClass.categoryLabel}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-white leading-tight">
              {cookingClass.title}
            </h2>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center gap-4 py-3 border-y border-[#252525]/10 text-xs text-[#252525]/80">
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-[#66734A]" />
              <span>{cookingClass.duration}</span>
            </div>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <div className="flex items-center gap-1.5">
              <Users size={14} className="text-[#66734A]" />
              <span>Max {cookingClass.maxStudents} Students</span>
            </div>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <div className="flex items-center gap-1.5">
              <Award size={14} className="text-[#66734A]" />
              <span>{cookingClass.skillLevel} Level</span>
            </div>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <div className="flex items-center gap-1.5">
              <Utensils size={14} className="text-[#66734A]" />
              <span>{cookingClass.format}</span>
            </div>
          </div>

          {/* Long Narrative Description */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#66734A]">
              Course Overview & Intent
            </h3>
            <p className="text-sm text-[#252525]/85 leading-relaxed font-normal">
              {cookingClass.longDescription}
            </p>
          </div>

          {/* Skills Acquired & Menu Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            
            <div className="p-4 rounded-md bg-white border border-[#252525]/10 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#252525] flex items-center gap-1.5">
                <Sparkles size={14} className="text-[#C66B45]" />
                <span>Techniques You Will Master</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-[#252525]/80">
                {cookingClass.skillsAcquired.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check size={13} className="text-[#66734A] shrink-0 mt-0.5" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-md bg-white border border-[#252525]/10 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#252525] flex items-center gap-1.5">
                <Utensils size={14} className="text-[#66734A]" />
                <span>Workshop Menu Prepared</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-[#252525]/80">
                {cookingClass.menuHighlights.map((dish, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C66B45] shrink-0 mt-1.5" />
                    <span className="font-medium text-[#252525]">{dish}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Studio Equipment & Schedule */}
          <div className="p-4 rounded-md bg-[#FAF5EC] border border-[#252525]/10 text-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[#252525]">Lead Instructor:</span>
              <span className="text-[#66734A] font-medium">{cookingClass.instructor}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[#252525]">Typical Schedule:</span>
              <span className="text-[#252525]/70">{cookingClass.schedule}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-[#252525]">Equipment Provided:</span>
              <span className="text-[#252525]/70">{cookingClass.equipmentProvided.join(', ')}</span>
            </div>
          </div>

          {/* Bottom Actions Bar */}
          <div className="pt-4 border-t border-[#252525]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-[#252525]/60 block">Registration Fee</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-serif font-bold text-[#252525] tabular-nums">
                  ${cookingClass.price}
                </span>
                <span className="text-xs text-[#252525]/60">USD per student (all-inclusive)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#252525] hover:bg-stone-200 rounded transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onBookClass(cookingClass.id);
                }}
                className="w-1/2 sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#C66B45] hover:bg-[#a95633] text-white rounded transition-colors cursor-pointer shadow-xs"
              >
                Book This Class
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
