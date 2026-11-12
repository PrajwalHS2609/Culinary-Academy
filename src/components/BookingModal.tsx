import React, { useState, useEffect } from 'react';
import { ACADEMY_CLASSES, CookingClass } from '../data/academyData';
import { X, CheckCircle, Calendar, ShieldCheck, Download, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedClassId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedClassId,
}) => {
  const [selectedClassId, setSelectedClassId] = useState<string>(
    preselectedClassId || ACADEMY_CLASSES[0].id
  );

  useEffect(() => {
    if (preselectedClassId) {
      setSelectedClassId(preselectedClassId);
    }
  }, [preselectedClassId]);

  const [date, setDate] = useState('');
  const [students, setStudents] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dietary, setDietary] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmed, setConfirmed] = useState(false);
  const [code, setCode] = useState('');

  if (!isOpen) return null;

  const currentClass = ACADEMY_CLASSES.find((c) => c.id === selectedClassId) || ACADEMY_CLASSES[0];
  const totalPrice = currentClass.price * students;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Full name is required';
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) errs.email = 'Valid email is required';
    if (!phone.trim()) errs.phone = 'Phone number is required';
    if (!date) errs.date = 'Please pick a preferred date';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const refCode = 'VCA-' + Math.floor(100000 + Math.random() * 900000);
    setCode(refCode);
    setConfirmed(true);
  };

  const handleDownloadCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Vance Culinary Academy//EN\nBEGIN:VEVENT\nSUMMARY:${currentClass.title}\nDESCRIPTION:Vance Culinary Academy session. Station reserved for ${name} (${students} guest(s)).\nLOCATION:428 Artisan Lane, San Francisco, CA 94107\nSTATUS:CONFIRMED\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Vance_${code}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-[#FAF5EC] rounded-lg max-w-xl w-full max-h-[92vh] overflow-y-auto border border-[#252525]/20 shadow-2xl relative p-6 sm:p-8 my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-stone-500 hover:text-stone-900 rounded-full hover:bg-stone-200 transition-colors cursor-pointer"
          aria-label="Close booking modal"
        >
          <X size={20} />
        </button>

        {confirmed ? (
          <div className="text-center py-6 space-y-5">
            <div className="w-14 h-14 bg-[#66734A]/10 text-[#66734A] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle size={32} />
            </div>

            <h3 className="text-2xl font-serif text-[#252525]">
              Cooking Station Reserved!
            </h3>

            <p className="text-xs text-[#252525]/60 font-mono">
              Confirmation Reference: <span className="font-bold text-[#252525]">{code}</span>
            </p>

            <div className="p-4 bg-[#FFFFFF] rounded border border-[#252525]/10 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[#252525]/60">Student:</span>
                <span className="font-semibold text-[#252525]">{name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#252525]/60">Masterclass:</span>
                <span className="font-semibold text-[#252525]">{currentClass.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#252525]/60">Station(s):</span>
                <span className="font-semibold text-[#252525]">{students} Student Station(s)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#252525]/60">Session Date:</span>
                <span className="font-semibold text-[#252525]">{date}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#252525]/10">
                <span className="text-[#252525]/60">Total All-Inclusive:</span>
                <span className="font-bold text-sm text-[#252525]">${totalPrice} USD</span>
              </div>
            </div>

            <p className="text-xs text-[#252525]/75 leading-relaxed">
              We have dispatched your comprehensive prep packet and recipe dossier to <span className="font-semibold">{email}</span>. We look forward to welcoming you to the studio!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <button
                onClick={handleDownloadCalendar}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#252525] text-white rounded hover:bg-[#3a3a3a] transition-colors"
              >
                <Download size={14} />
                <span>Download Calendar Entry</span>
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider border border-[#252525]/20 text-[#252525] rounded hover:bg-stone-200"
              >
                Return to Academy
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleConfirm} className="space-y-5">
            <div>
              <span className="text-xs font-medium tracking-wider uppercase text-[#66734A] block">
                Instant Online Enrolment
              </span>
              <h3 className="text-2xl font-serif text-[#252525] mt-0.5">
                Reserve Your Cooking Station
              </h3>
              <p className="text-xs text-[#252525]/65 mt-1">
                San Francisco Studio · Individual induction stations · 8 student cap
              </p>
            </div>

            {/* Course Picker */}
            <div>
              <label className="block text-xs font-medium text-[#252525] mb-1">
                Select Class or Workshop
              </label>
              <select
                value={selectedClassId}
                onChange={(e) => setSelectedClassId(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-white border border-[#252525]/20 rounded-md focus:outline-none focus:border-[#C66B45]"
              >
                {ACADEMY_CLASSES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title} — ${c.price} ({c.duration})
                  </option>
                ))}
              </select>
            </div>

            {/* Date & Guest Count */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#252525] mb-1">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={`w-full px-3 py-2 text-xs bg-white border rounded-md focus:outline-none focus:border-[#C66B45] ${
                    errors.date ? 'border-red-500' : 'border-[#252525]/20'
                  }`}
                />
                {errors.date && <p className="text-[11px] text-red-600 mt-1">{errors.date}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-[#252525] mb-1">
                  Students / Stations
                </label>
                <select
                  value={students}
                  onChange={(e) => setStudents(Number(e.target.value))}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#252525]/20 rounded-md focus:outline-none focus:border-[#C66B45]"
                >
                  <option value={1}>1 Student (${currentClass.price})</option>
                  <option value={2}>2 Students (${currentClass.price * 2})</option>
                  <option value={3}>3 Students (${currentClass.price * 3})</option>
                  <option value={4}>4 Students (${currentClass.price * 4})</option>
                </select>
              </div>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#252525] mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Arthur Pendelton"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-3 py-2 text-xs bg-white border rounded-md focus:outline-none focus:border-[#C66B45] ${
                    errors.name ? 'border-red-500' : 'border-[#252525]/20'
                  }`}
                />
                {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-[#252525] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="arthur@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-3 py-2 text-xs bg-white border rounded-md focus:outline-none focus:border-[#C66B45] ${
                    errors.email ? 'border-red-500' : 'border-[#252525]/20'
                  }`}
                />
                {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Phone & Dietary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#252525] mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (415) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full px-3 py-2 text-xs bg-white border rounded-md focus:outline-none focus:border-[#C66B45] ${
                    errors.phone ? 'border-red-500' : 'border-[#252525]/20'
                  }`}
                />
                {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-[#252525] mb-1">
                  Dietary Accommodations
                </label>
                <input
                  type="text"
                  placeholder="None / Pescatarian / Nut-free"
                  value={dietary}
                  onChange={(e) => setDietary(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#252525]/20 rounded-md focus:outline-none focus:border-[#C66B45]"
                />
              </div>
            </div>

            {/* Price Summary */}
            <div className="p-4 bg-white rounded border border-[#252525]/10 flex items-center justify-between text-xs">
              <div>
                <span className="font-semibold text-[#252525] block">
                  Total Investment ({students} student{students > 1 ? 's' : ''})
                </span>
                <span className="text-[#66734A]">Includes ingredients, equipment, wine & custom apron</span>
              </div>
              <span className="text-2xl font-serif font-bold text-[#252525] tabular-nums">
                ${totalPrice}
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C66B45] hover:bg-[#a95633] rounded-md transition-all cursor-pointer shadow-xs"
            >
              Confirm Station Reservation (${totalPrice})
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-[#252525]/60">
              <ShieldCheck size={13} className="text-[#66734A]" />
              <span>Free cancellation up to 72 hours prior to class</span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
