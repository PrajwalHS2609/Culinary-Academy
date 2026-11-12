import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, ChefHat, Sparkles } from 'lucide-react';

interface NavbarProps {
  onBookClick: (classId?: string) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick, activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'classes', label: 'Cooking Classes' },
    { id: 'experience', label: 'Our Story' },
    { id: 'chefs', label: 'Instructors' },
    { id: 'studio', label: 'The Studio' },
    { id: 'schedule', label: 'Upcoming Calendar' },
    { id: 'pricing', label: 'Packages' },
    { id: 'faq', label: 'FAQ' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Announcement Bar */}
      {showAnnouncement && (
        <div className="bg-[#252525] text-[#FAF5EC] text-xs py-2 px-4 border-b border-[#FAF5EC]/10">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 mx-auto sm:mx-0">
              <span className="text-[#C5A46D] font-medium tracking-wide">SPRING MASTERCLASSES</span>
              <span aria-hidden="true" className="opacity-40">·</span>
              <span className="text-stone-300">Weekend Masterclasses & Evening Ateliers now open for enrolment</span>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <button
                onClick={() => onNavigate('schedule')}
                className="text-[#C5A46D] hover:text-[#FAF5EC] underline decoration-[#C5A46D]/60 underline-offset-4 text-xs font-medium cursor-pointer transition-colors"
              >
                View Live Calendar
              </button>
              <button
                onClick={() => setShowAnnouncement(false)}
                className="text-stone-400 hover:text-stone-200 text-xs p-0.5"
                aria-label="Dismiss announcement"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Bar Contract: Zone 1 (Wordmark) - Zone 2 (Nav Links) - Zone 3 (1 Primary Action) */}
      <div className={`w-full transition-colors duration-200 border-b ${isScrolled ? 'bg-[#FAF5EC]/95 backdrop-blur-md border-[#252525]/10 shadow-xs' : 'bg-[#FAF5EC] border-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
          
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => handleNavClick('hero')}
            className="text-xl sm:text-2xl font-serif tracking-tight text-[#252525] hover:text-[#66734A] transition-colors whitespace-nowrap shrink-0 text-left cursor-pointer"
          >
            Vance Culinary Academy
          </button>

          {/* Zone 2: 4–5 concise single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#252525]/80">
            {navLinks.slice(0, 5).map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer pb-0.5 border-b-2 ${
                  activeSection === link.id
                    ? 'text-[#252525] border-[#C66B45] font-semibold'
                    : 'border-transparent hover:text-[#252525] hover:border-[#252525]/30'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onBookClick()}
              className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#C66B45] rounded-md hover:bg-[#a95633] active:scale-[0.99] transition-all shadow-xs cursor-pointer whitespace-nowrap shrink-0"
            >
              Book a Class
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#252525] hover:text-[#C66B45] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF5EC] border-b border-[#252525]/10 px-6 py-5 shadow-lg">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left py-2 text-base font-serif transition-colors ${
                  activeSection === link.id ? 'text-[#C66B45] font-bold' : 'text-[#252525]/80 hover:text-[#252525]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-[#252525]/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 text-center text-xs font-semibold tracking-wider uppercase text-white bg-[#C66B45] rounded-md hover:bg-[#a95633] transition-colors"
              >
                Reserve Your Cooking Station
              </button>
              <p className="text-center text-xs text-[#252525]/60 mt-1">
                San Francisco Studio · Max 8 Students per Cohort
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
