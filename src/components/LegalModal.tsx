import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-[#FAF5EC] rounded-lg max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-[#252525]/20 shadow-2xl p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-stone-500 hover:text-stone-900 rounded-full hover:bg-stone-200 transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {type === 'privacy' ? (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#66734A]">
              <ShieldCheck size={14} />
              <span>Academy Privacy Policy</span>
            </div>

            <h3 className="text-2xl font-serif text-[#252525]">
              Privacy & Student Data Standards
            </h3>

            <p className="text-xs text-[#252525]/60 font-mono">
              Last updated: Autumn 2026
            </p>

            <div className="space-y-3 text-xs text-[#252525]/80 leading-relaxed pt-2">
              <p>
                At Vance Culinary Academy, we respect your personal privacy. Information collected during enrollment (name, contact numbers, email address, dietary restrictions, and allergies) is utilized strictly to provide a safe kitchen atelier experience and facilitate educational communications.
              </p>
              <h4 className="text-sm font-semibold text-[#252525] pt-2">Allergy & Dietary Information</h4>
              <p>
                Medical dietary and allergy notes are shared confidentially with your workshop chef instructor solely to ensure safe ingredient station preparation and cross-contamination prevention.
              </p>
              <h4 className="text-sm font-semibold text-[#252525] pt-2">No 3rd-Party Data Selling</h4>
              <p>
                We never rent, sell, or disclose student records, emails, or phone numbers to external marketing brokers or third parties.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#66734A]">
              <ShieldCheck size={14} />
              <span>Academy Terms & Policies</span>
            </div>

            <h3 className="text-2xl font-serif text-[#252525]">
              Enrollment Terms & Conditions
            </h3>

            <p className="text-xs text-[#252525]/60 font-mono">
              Last updated: Autumn 2026
            </p>

            <div className="space-y-3 text-xs text-[#252525]/80 leading-relaxed pt-2">
              <h4 className="text-sm font-semibold text-[#252525]">Cancellation & Rescheduling</h4>
              <p>
                Individual masterclasses may be rescheduled or refunded up to 72 hours prior to scheduled class start time. Due to advance ingredient sourcing and strict 8-student station caps, cancellations within 72 hours are non-refundable, but tickets may be transferred to an alternate guest.
              </p>
              <h4 className="text-sm font-semibold text-[#252525] pt-2">Studio Safety & Attire</h4>
              <p>
                For your safety, closed-toe footwear is mandatory in all teaching kitchens. Vance Culinary Academy provides custom cotton aprons, sanitized cut-gloves, and professional cutlery.
              </p>
              <h4 className="text-sm font-semibold text-[#252525] pt-2">Age Requirements</h4>
              <p>
                Standard evening masterclasses and wine-pairing ateliers are reserved for students aged 18 and older. Designated family workshops welcome youths aged 10+ accompanied by a registered adult guardian.
              </p>
            </div>
          </div>
        )}

        <div className="pt-6 mt-4 border-t border-[#252525]/10 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-[#252525] text-white rounded hover:bg-[#3a3a3a]"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
