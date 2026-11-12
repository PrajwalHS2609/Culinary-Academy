import React, { useState } from 'react';
import { ArrowRight, Check, Heart, Mail, MapPin, Phone, Instagram, Facebook, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onBookClick: () => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onBookClick, onOpenLegal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="w-full bg-[#252525] text-[#FAF5EC] pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-stone-800">
          
          {/* Brand & Introduction */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-2xl font-serif text-[#FAF5EC] tracking-tight">
              Vance Culinary Academy
            </h3>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              A boutique culinary institute in San Francisco dedicated to hands-on kitchen education, technique-driven confidence, and the joy of creating exceptional food.
            </p>

            <div className="pt-2 text-xs text-[#C5A46D] font-mono">
              <span>San Francisco Arts District · Est. 2018</span>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3 text-stone-400">
              <a href="#" className="p-2 rounded bg-stone-800/80 hover:text-white hover:bg-stone-700 transition-colors" aria-label="Instagram">
                <Instagram size={15} />
              </a>
              <a href="#" className="p-2 rounded bg-stone-800/80 hover:text-white hover:bg-stone-700 transition-colors" aria-label="Facebook">
                <Facebook size={15} />
              </a>
              <a href="#" className="p-2 rounded bg-stone-800/80 hover:text-white hover:bg-stone-700 transition-colors" aria-label="YouTube">
                <Youtube size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A46D]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-white transition-colors cursor-pointer">
                  Academy Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('classes')} className="hover:text-white transition-colors cursor-pointer">
                  All Cooking Classes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('experience')} className="hover:text-white transition-colors cursor-pointer">
                  Teaching Philosophy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('chefs')} className="hover:text-white transition-colors cursor-pointer">
                  Master Instructors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('studio')} className="hover:text-white transition-colors cursor-pointer">
                  The Kitchen Studio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors cursor-pointer">
                  Class FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Course Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A46D]">
              Curriculum Tracks
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button onClick={() => onNavigate('classes')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Essential Knife Skills & Fundamentals
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('classes')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Regional Indian Gastronomy & Spices
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('classes')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Artisanal Handmade Italian Pasta
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('classes')} className="hover:text-white transition-colors text-left cursor-pointer">
                  French Pâtisserie & Viennoiserie
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('classes')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Professional Culinary Immersion
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('classes')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Private & Corporate Feasts
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Dispatch */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C5A46D]">
              Culinary Dispatch
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Receive monthly seasonal recipes, kitchen science essays from Chef Vance, and early access to newly released workshop dates.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 bg-stone-800 rounded border border-[#66734A] text-xs text-[#FAF5EC] flex items-center gap-2">
                <Check size={14} className="text-[#66734A]" />
                <span>You're subscribed to the monthly journal.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-stone-800 border border-stone-700 rounded text-stone-100 placeholder-stone-500 focus:outline-none focus:border-[#C66B45]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[#C66B45] text-white rounded text-xs hover:bg-[#a95633] transition-colors cursor-pointer flex items-center"
                    aria-label="Subscribe"
                  >
                    <ArrowRight size={13} />
                  </button>
                </div>
                <span className="text-[10px] text-stone-500 block">
                  No promotional spam. Unsubscribe at any time.
                </span>
              </form>
            )}

            <div className="pt-2">
              <button
                onClick={onBookClick}
                className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-[#252525] bg-[#FAF5EC] rounded hover:bg-white transition-colors cursor-pointer"
              >
                Start Your Culinary Journey
              </button>
            </div>
          </div>

        </div>

        {/* Quiet Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Vance Culinary Academy LLC. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-stone-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-stone-300 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span aria-hidden="true">·</span>
            <a
              href="#contact"
              className="hover:text-stone-300 transition-colors"
            >
              Contact Admissions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
