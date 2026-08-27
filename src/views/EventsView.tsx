import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Video,
  Ticket,
  ArrowRight,
  Filter,
  CheckCircle2
} from 'lucide-react';

export const EventsView: React.FC = () => {
  const { events, setSelectedEvent } = useData();
  const [filterType, setFilterType] = useState<string>('all');

  const filteredEvents = events.filter((ev) => {
    if (filterType === 'all') return true;
    if (filterType === 'Virtual') return ev.isVirtual;
    if (filterType === 'Physical') return !ev.isVirtual;
    return ev.type.toLowerCase().includes(filterType.toLowerCase());
  });

  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      {/* Top Banner */}
      <section className="bg-[#0B1E36] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
            <Calendar className="w-3.5 h-3.5" />
            <span>Community Gatherings & Training</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white tracking-tight">
            Events, Legal Clinics & Public Town Halls
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Join our pro-bono legal literacy clinics, youth rights roundtables, human-rights day celebrations, and stakeholder webinars. All events are free of charge.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Filter bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Filter Events:
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Gatherings' },
              { id: 'Legal Clinic', label: 'Pro-Bono Legal Clinics' },
              { id: 'Town Hall', label: 'Community Town Halls' },
              { id: 'Webinar', label: 'Virtual Webinars' },
              { id: 'Youth Roundtable', label: 'Youth Roundtables' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  filterType === tab.id
                    ? 'bg-blue-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              onClick={() => setSelectedEvent(event)}
              className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200">
                    {event.type}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    {event.rsvpCount} Registered
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0B1E36] group-hover:text-blue-900 transition-colors leading-snug">
                  {event.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {event.summary}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="font-semibold text-slate-800">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {event.isVirtual ? (
                      <>
                        <Video className="w-4 h-4 text-indigo-600 shrink-0" />
                        <span className="text-indigo-900 font-medium">Virtual / Zoom Hybrid</span>
                      </>
                    ) : (
                      <>
                        <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-900">
                <span className="flex items-center gap-1">
                  <Ticket className="w-4 h-4 text-amber-500" />
                  <span>Free RSVP / Speaker Bios</span>
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
