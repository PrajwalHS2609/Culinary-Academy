import React, { useState } from 'react';
import { UPCOMING_SCHEDULE, UpcomingEvent } from '../data/academyData';
import { Calendar, Clock, User, AlertCircle, ArrowRight } from 'lucide-react';

interface ScheduleSectionProps {
  onReserveEvent: (eventId: string, classId: string) => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onReserveEvent }) => {
  const [filterPeriod, setFilterPeriod] = useState<'all' | 'weekend' | 'evening'>('all');

  const filteredEvents = UPCOMING_SCHEDULE.filter((evt) => {
    if (filterPeriod === 'weekend') return evt.date.includes('Saturday') || evt.date.includes('Sunday');
    if (filterPeriod === 'evening') return evt.time.includes('PM');
    return true;
  });

  return (
    <section id="schedule" className="w-full bg-[#FAF5EC] py-16 lg:py-24 border-b border-[#252525]/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-[#66734A] uppercase">
              <span>Live Studio Calendar</span>
              <span aria-hidden="true" className="text-[#C66B45]">·</span>
              <span>Real-Time Availability</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#252525] text-balance">
              Something Delicious <br />
              <span className="italic font-normal text-[#C66B45]">Is Coming Up.</span>
            </h2>
          </div>

          {/* Schedule Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-md border border-[#252525]/10">
            <button
              onClick={() => setFilterPeriod('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                filterPeriod === 'all' ? 'bg-[#252525] text-white shadow-xs' : 'text-[#252525]/70 hover:text-[#252525]'
              }`}
            >
              All Upcoming Sessions
            </button>
            <button
              onClick={() => setFilterPeriod('weekend')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                filterPeriod === 'weekend' ? 'bg-[#252525] text-white shadow-xs' : 'text-[#252525]/70 hover:text-[#252525]'
              }`}
            >
              Weekend Intensives
            </button>
            <button
              onClick={() => setFilterPeriod('evening')}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer ${
                filterPeriod === 'evening' ? 'bg-[#252525] text-white shadow-xs' : 'text-[#252525]/70 hover:text-[#252525]'
              }`}
            >
              Evening Ateliers
            </button>
          </div>
        </div>

        {/* Editorial Event Listings Table / List */}
        <div className="bg-[#FFFFFF] rounded-lg border border-[#252525]/10 overflow-hidden shadow-xs divide-y divide-[#252525]/10">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="p-6 lg:p-8 hover:bg-[#FAF5EC]/40 transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              {/* Left Column: Date and Timing Lockup */}
              <div className="flex items-start gap-5 lg:w-1/4">
                <div className="p-3 rounded bg-[#FAF5EC] border border-[#252525]/10 text-center min-w-[76px] shrink-0">
                  <span className="text-[11px] font-mono uppercase text-[#66734A] block">
                    {event.date.split(',')[0]}
                  </span>
                  <span className="text-xl font-serif font-bold text-[#252525] block">
                    {event.date.split(',')[1]}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-[#252525]/75">
                    <Clock size={13} className="text-[#66734A]" />
                    <span>{event.time}</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#252525]/60 block">
                    {event.format}
                  </span>
                </div>
              </div>

              {/* Center Column: Title, Instructor, Skill Level */}
              <div className="lg:w-2/4 space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#252525]/60">
                  <span>{event.skillLevel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{event.duration}</span>
                  <span aria-hidden="true">·</span>
                  <span>Individual Cooking Station</span>
                </div>

                <h3 className="text-lg sm:text-xl font-serif text-[#252525]">
                  {event.title}
                </h3>

                <p className="text-xs text-[#66734A]">
                  Guided by <span className="font-semibold">{event.instructor}</span>
                </p>
              </div>

              {/* Right Column: Pricing, Seat Availability & CTA */}
              <div className="lg:w-1/4 flex items-center justify-between lg:justify-end gap-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#252525]/10">
                <div className="text-left lg:text-right">
                  <span className="text-2xl font-serif font-semibold text-[#252525] tabular-nums block">
                    ${event.price}
                  </span>
                  
                  {/* Seat urgency badge without pill candy */}
                  <div className="flex items-center gap-1 text-xs text-[#C66B45] font-medium mt-0.5">
                    <span>{event.availableSeats} of {event.totalSeats} seats open</span>
                  </div>
                </div>

                <button
                  onClick={() => onReserveEvent(event.id, event.classId)}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C66B45] hover:bg-[#a95633] rounded-md transition-all cursor-pointer whitespace-nowrap shadow-xs"
                >
                  Reserve Spot
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Private Atelier Callout */}
        <div className="mt-8 p-6 bg-[#FFFFFF] rounded-lg border border-[#252525]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            <span className="font-serif font-semibold text-sm text-[#252525] block">
              Seeking a custom date or private cohort?
            </span>
            <p className="text-[#252525]/70 mt-0.5">
              We arrange bespoke studio buyouts, team offsites, and anniversary ateliers on Monday and Thursday evenings.
            </p>
          </div>
          <button
            onClick={() => onReserveEvent('custom-private', 'weekend-family-corporate')}
            className="px-4 py-2 border border-[#252525]/30 rounded text-[#252525] hover:bg-[#FAF5EC] whitespace-nowrap font-medium transition-colors cursor-pointer"
          >
            Inquire for Private Booking
          </button>
        </div>

      </div>
    </section>
  );
};
