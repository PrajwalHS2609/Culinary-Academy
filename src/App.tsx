/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { ClassesSection } from './components/ClassesSection';
import { WhyLearnSection } from './components/WhyLearnSection';
import { ChefsSection } from './components/ChefsSection';
import { LearningJourneySection } from './components/LearningJourneySection';
import { StudioSection } from './components/StudioSection';
import { GallerySection } from './components/GallerySection';
import { ScheduleSection } from './components/ScheduleSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { BlogSection } from './components/BlogSection';
import { RegistrationFormSection } from './components/RegistrationFormSection';
import { Footer } from './components/Footer';
import { ClassDetailModal } from './components/ClassDetailModal';
import { BookingModal } from './components/BookingModal';
import { LegalModal } from './components/LegalModal';
import { CookingClass, PricingPackage, ACADEMY_CLASSES } from './data/academyData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedClassForModal, setSelectedClassForModal] = useState<CookingClass | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingClassId, setBookingClassId] = useState<string | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (classId?: string) => {
    setBookingClassId(classId || ACADEMY_CLASSES[0].id);
    setIsBookingModalOpen(true);
  };

  const handleSelectPackage = (pkg: PricingPackage) => {
    // Maps packages to corresponding classes
    let targetId = ACADEMY_CLASSES[0].id;
    if (pkg.id === 'weekend-immersion') targetId = 'fresh-pasta-masterclass';
    if (pkg.id === 'foundations-program') targetId = 'knife-skills-fundamentals';
    if (pkg.id === 'professional-diploma') targetId = 'professional-culinary-diploma-intensive';
    handleOpenBooking(targetId);
  };

  return (
    <div className="min-h-screen bg-[#FAF5EC] text-[#252525] font-sans antialiased flex flex-col selection:bg-[#C66B45]/20 selection:text-[#252525]">
      
      {/* Sticky Navigation */}
      <Navbar
        onBookClick={() => handleOpenBooking()}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main className="flex-1 w-full">
        {/* Section 1: Hero */}
        <div id="hero">
          <HeroSection
            onExploreClasses={() => handleNavigate('classes')}
            onBookConsultation={() => handleNavigate('contact')}
          />
        </div>

        {/* Section 2: Intro & Teaching Philosophy */}
        <IntroSection onLearnMore={() => handleNavigate('experience')} />

        {/* Section 3: Explore Classes & Courses */}
        <ClassesSection
          onSelectClass={(c) => setSelectedClassForModal(c)}
          onBookClass={(classId) => handleOpenBooking(classId)}
        />

        {/* Section 4: Why Learn With Us */}
        <WhyLearnSection />

        {/* Section 5: Faculty & Master Chefs */}
        <ChefsSection />

        {/* Section 6: Structured Learning Experience */}
        <LearningJourneySection />

        {/* Section 7: Inside the Cooking Studio */}
        <StudioSection />

        {/* Section 8: Student Creations & Food Plating Gallery */}
        <GallerySection />

        {/* Section 9: Upcoming Calendar & Schedule */}
        <ScheduleSection
          onReserveEvent={(eventId, classId) => handleOpenBooking(classId)}
        />

        {/* Section 10: Student Testimonials & Rigor */}
        <TestimonialsSection />

        {/* Section 11: Course Pricing & Learning Packages */}
        <PricingSection onSelectPackage={handleSelectPackage} />

        {/* Section 12: Frequently Asked Questions */}
        <FaqSection onContactClick={() => handleNavigate('contact')} />

        {/* Section 13: Blog & Culinary Inspiration */}
        <BlogSection />

        {/* Section 14 & 15: Final CTA & Class Registration Form */}
        <RegistrationFormSection
          preselectedClassId={bookingClassId}
          onExploreCourses={() => handleNavigate('classes')}
        />
      </main>

      {/* Section 16: Professional Footer */}
      <Footer
        onNavigate={handleNavigate}
        onBookClick={() => handleOpenBooking()}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Class Detail Modal */}
      <ClassDetailModal
        cookingClass={selectedClassForModal}
        onClose={() => setSelectedClassForModal(null)}
        onBookClass={(classId) => handleOpenBooking(classId)}
      />

      {/* Instant Quick Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preselectedClassId={bookingClassId}
      />

      {/* Legal & Privacy Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}
