import React, { useState } from 'react';
import { ACADEMY_CLASSES } from '../data/academyData';
import { CheckCircle, Clock, MapPin, Mail, Phone, Calendar, ArrowRight, ShieldCheck, Download } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface RegistrationFormProps {
  preselectedClassId?: string;
  onBookSuccess?: () => void;
  onExploreCourses: () => void;
}

export const RegistrationFormSection: React.FC<RegistrationFormProps> = ({
  preselectedClassId,
  onBookSuccess,
  onExploreCourses,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseId: preselectedClassId || ACADEMY_CLASSES[0].id,
    preferredDate: '',
    experienceLevel: 'Beginner',
    format: 'In-Person Studio Atelier',
    guests: '1',
    message: '',
    dietaryNotes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select your preferred date';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API registration call
    setTimeout(() => {
      const code = 'VCA-' + Math.floor(100000 + Math.random() * 900000);
      setConfirmationCode(code);
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onBookSuccess) onBookSuccess();
    }, 600);
  };

  const selectedClass = ACADEMY_CLASSES.find((c) => c.id === formData.courseId) || ACADEMY_CLASSES[0];

  const handleDownloadCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Vance Culinary Academy//EN\nBEGIN:VEVENT\nSUMMARY:${selectedClass.title}\nDESCRIPTION:Vance Culinary Academy session. Station reserved for ${formData.fullName}.\nLOCATION:428 Artisan Lane, San Francisco, CA 94107\nSTATUS:CONFIRMED\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Vance_Culinary_${confirmationCode}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="contact" className="w-full">
      {/* Section 14: Final Conversion CTA Banner */}
      <section className="relative w-full bg-[#252525] text-[#FAF5EC] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src={IMAGES.studio}
            alt="Vance Culinary Studio background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-[#C5A46D] uppercase">
            <span>Your Culinary Journey Begins Here</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#FAF5EC] leading-tight text-balance">
            Ready to Create <br />
            <span className="italic font-normal text-[#C66B45]">Something Delicious?</span>
          </h2>

          <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Discover new flavours, learn practical techniques, and turn your genuine passion for food into a confident lifelong skill.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#registration-form"
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold tracking-wider uppercase bg-[#C66B45] text-white rounded hover:bg-[#a95633] transition-colors"
            >
              Book Your Cooking Class
            </a>
            <button
              onClick={onExploreCourses}
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold tracking-wider uppercase border border-stone-500 text-stone-200 hover:bg-white/10 rounded transition-colors"
            >
              Explore All Courses
            </button>
          </div>
        </div>
      </section>

      {/* Section 15: Contact & Registration Form Section */}
      <section id="registration-form" className="w-full bg-[#FAF5EC] py-16 lg:py-24 border-b border-[#252525]/10">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Academy Details, Hours & Address */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-[#66734A] uppercase">
                  <span>Admissions & Studio Inquiries</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-serif text-[#252525] leading-tight">
                  Enrol or Request <br />
                  <span className="italic font-normal text-[#66734A]">Class Information.</span>
                </h3>

                <p className="text-sm text-[#252525]/75 leading-relaxed">
                  Reserve your individual prep station online. Cohorts are strictly limited to 8 students to guarantee one-on-one chef instruction.
                </p>
              </div>

              {/* Academy Address & Contact Details */}
              <div className="space-y-5 text-xs text-[#252525]/85">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#C66B45] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-sm text-[#252525]">Vance Culinary Academy</span>
                    <span>428 Artisan Lane, Culinary Arts Quarter</span>
                    <span className="block text-[#252525]/60">San Francisco, CA 94107</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-[#66734A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-sm text-[#252525]">Admissions Direct Desk</span>
                    <span>+1 (415) 890-4283</span>
                    <span className="block text-[#252525]/60">Mon–Fri 8:30 AM – 5:30 PM PT</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-[#C5A46D] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-sm text-[#252525]">Electronic Dispatch</span>
                    <span>admissions@vanceculinary.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-[#252525]/50 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-sm text-[#252525]">Studio Operations</span>
                    <span>Tuesday – Sunday: 9:00 AM – 9:30 PM</span>
                    <span className="block text-[#252525]/60">Mondays reserved for facility sanitation & stock curing</span>
                  </div>
                </div>
              </div>

              {/* Trust badge */}
              <div className="p-4 rounded-md bg-[#FFFFFF] border border-[#252525]/10 space-y-1 text-xs">
                <div className="flex items-center gap-1.5 font-semibold text-[#66734A]">
                  <ShieldCheck size={16} />
                  <span>Guaranteed Enrolment Protection</span>
                </div>
                <p className="text-[#252525]/70">
                  Full refund or transfer with 72 hours advance notice. All allergy accommodations honored.
                </p>
              </div>

            </div>

            {/* Right Column: User-Friendly Class Registration Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-lg border border-[#252525]/10 shadow-sm">
                
                {isSubmitted ? (
                  <div className="text-center py-10 space-y-5">
                    <div className="w-14 h-14 bg-[#66734A]/10 text-[#66734A] rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle size={32} />
                    </div>

                    <h4 className="text-2xl font-serif text-[#252525]">
                      Enrolment Received!
                    </h4>

                    <p className="text-xs text-[#252525]/60 font-mono">
                      Reservation Reference: {confirmationCode}
                    </p>

                    <div className="p-5 bg-[#FAF5EC] rounded border border-[#252525]/10 text-left text-xs space-y-2 max-w-md mx-auto">
                      <div className="flex justify-between">
                        <span className="text-[#252525]/60">Guest Name:</span>
                        <span className="font-semibold text-[#252525]">{formData.fullName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#252525]/60">Reserved Class:</span>
                        <span className="font-semibold text-[#252525]">{selectedClass.title}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#252525]/60">Preferred Date:</span>
                        <span className="font-semibold text-[#252525]">{formData.preferredDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#252525]/60">Station Capacity:</span>
                        <span className="font-semibold text-[#66734A]">Confirmed ({formData.guests} student)</span>
                      </div>
                    </div>

                    <p className="text-xs text-[#252525]/75 max-w-sm mx-auto">
                      A detailed confirmation packet with driving directions, station attire suggestions, and chef recipes has been sent to <span className="font-semibold text-[#252525]">{formData.email}</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <button
                        onClick={handleDownloadCalendar}
                        className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#252525] text-white rounded hover:bg-[#3a3a3a] transition-colors"
                      >
                        <Download size={14} />
                        <span>Add to Calendar (.ics)</span>
                      </button>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            fullName: '',
                            email: '',
                            phone: '',
                            courseId: ACADEMY_CLASSES[0].id,
                            preferredDate: '',
                            experienceLevel: 'Beginner',
                            format: 'In-Person Studio Atelier',
                            guests: '1',
                            message: '',
                            dietaryNotes: '',
                          });
                        }}
                        className="px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border border-[#252525]/20 text-[#252525] rounded hover:bg-[#FAF5EC]"
                      >
                        Register Another Student
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    <div>
                      <h4 className="text-xl font-serif text-[#252525]">
                        Reserve Your Cooking Station
                      </h4>
                      <p className="text-xs text-[#252525]/60 mt-0.5">
                        Fill in your details below to lock in your cohort seat.
                      </p>
                    </div>

                    {/* Full Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#252525] mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Eleanor Vance"
                          className={`w-full px-3 py-2 text-xs bg-[#FAF5EC]/40 border rounded-md focus:outline-none focus:border-[#C66B45] ${
                            errors.fullName ? 'border-red-500' : 'border-[#252525]/20'
                          }`}
                        />
                        {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#252525] mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="eleanor@domain.com"
                          className={`w-full px-3 py-2 text-xs bg-[#FAF5EC]/40 border rounded-md focus:outline-none focus:border-[#C66B45] ${
                            errors.email ? 'border-red-500' : 'border-[#252525]/20'
                          }`}
                        />
                        {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Phone & Course Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#252525] mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (415) 000-0000"
                          className={`w-full px-3 py-2 text-xs bg-[#FAF5EC]/40 border rounded-md focus:outline-none focus:border-[#C66B45] ${
                            errors.phone ? 'border-red-500' : 'border-[#252525]/20'
                          }`}
                        />
                        {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#252525] mb-1">
                          Select Course *
                        </label>
                        <select
                          value={formData.courseId}
                          onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                          className="w-full px-3 py-2 text-xs bg-[#FAF5EC]/40 border border-[#252525]/20 rounded-md focus:outline-none focus:border-[#C66B45]"
                        >
                          {ACADEMY_CLASSES.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.title} (${c.price})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Preferred Date & Skill Level */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#252525] mb-1">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className={`w-full px-3 py-2 text-xs bg-[#FAF5EC]/40 border rounded-md focus:outline-none focus:border-[#C66B45] ${
                            errors.preferredDate ? 'border-red-500' : 'border-[#252525]/20'
                          }`}
                        />
                        {errors.preferredDate && <p className="text-[11px] text-red-600 mt-1">{errors.preferredDate}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#252525] mb-1">
                          Experience Level
                        </label>
                        <select
                          value={formData.experienceLevel}
                          onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                          className="w-full px-3 py-2 text-xs bg-[#FAF5EC]/40 border border-[#252525]/20 rounded-md focus:outline-none focus:border-[#C66B45]"
                        >
                          <option value="Beginner">Beginner (Zero experience)</option>
                          <option value="Enthusiast">Enthusiast (Home cook)</option>
                          <option value="Intermediate">Intermediate (Confident basics)</option>
                          <option value="Advanced">Advanced (Aspiring chef)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#252525] mb-1">
                          Number of Students
                        </label>
                        <select
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                          className="w-full px-3 py-2 text-xs bg-[#FAF5EC]/40 border border-[#252525]/20 rounded-md focus:outline-none focus:border-[#C66B45]"
                        >
                          <option value="1">1 Person (Solo Station)</option>
                          <option value="2">2 Persons (Couple / Pair)</option>
                          <option value="3">3 Persons</option>
                          <option value="4">4 Persons (Double Station)</option>
                        </select>
                      </div>
                    </div>

                    {/* Dietary Preferences & Message */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#252525] mb-1">
                          Dietary Preferences / Allergies
                        </label>
                        <input
                          type="text"
                          value={formData.dietaryNotes}
                          onChange={(e) => setFormData({ ...formData, dietaryNotes: e.target.value })}
                          placeholder="e.g. Vegetarian, Gluten-free, Nut allergy"
                          className="w-full px-3 py-2 text-xs bg-[#FAF5EC]/40 border border-[#252525]/20 rounded-md focus:outline-none focus:border-[#C66B45]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#252525] mb-1">
                          Special Requests / Questions
                        </label>
                        <input
                          type="text"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Celebrating an anniversary, gift note, etc."
                          className="w-full px-3 py-2 text-xs bg-[#FAF5EC]/40 border border-[#252525]/20 rounded-md focus:outline-none focus:border-[#C66B45]"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C66B45] hover:bg-[#a95633] rounded-md transition-all cursor-pointer shadow-xs disabled:opacity-50"
                      >
                        {isSubmitting ? 'Processing Enrolment...' : 'Submit Enrolment & Reserve Station'}
                      </button>
                      <p className="text-[11px] text-[#252525]/50 text-center mt-2">
                        🔒 No pre-charge until your station reservation is verified with the chef director.
                      </p>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
