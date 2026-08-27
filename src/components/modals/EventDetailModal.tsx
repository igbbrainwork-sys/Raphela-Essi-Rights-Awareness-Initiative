import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import {
  X,
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  Share2,
  Ticket,
  Video
} from 'lucide-react';

export const EventDetailModal: React.FC = () => {
  const { selectedEvent, setSelectedEvent, registerForEvent } = useData();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [registered, setRegistered] = useState(false);

  if (!selectedEvent) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) return;
    const success = registerForEvent(selectedEvent.id, fullName, email, phone, organization);
    if (success) {
      setRegistered(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#0B1E36] text-white p-6 sm:p-8 relative shrink-0">
          <button
            onClick={() => setSelectedEvent(null)}
            className="absolute top-5 right-5 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 p-2 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block px-2.5 py-1 rounded-md bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-400/30">
            {selectedEvent.type}
          </span>

          <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-white tracking-tight leading-snug">
            {selectedEvent.title}
          </h2>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-200">
            <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-700">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>{selectedEvent.date}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-700">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>{selectedEvent.time}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-700">
              {selectedEvent.isVirtual ? (
                <>
                  <Video className="w-4 h-4 text-blue-400" />
                  <span>Virtual / Hybrid</span>
                </>
              ) : (
                <>
                  <MapPin className="w-4 h-4 text-red-400" />
                  <span>{selectedEvent.location}</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Content & Registration Form */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-800 text-sm">
          {/* Summary */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-700">
            <p className="leading-relaxed">{selectedEvent.description}</p>
          </div>

          {/* Speakers */}
          {selectedEvent.speakers.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-bold text-sm text-[#0B1E36] flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                <span>Featured Speakers & Resource Persons</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedEvent.speakers.map((spk, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <h4 className="font-bold text-slate-900 text-sm">{spk.name}</h4>
                    <p className="text-xs text-blue-700 font-medium">{spk.role}</p>
                    <p className="text-[11px] text-slate-500">{spk.organization}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Registration Section */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0B1E36] text-white border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Ticket className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-base text-white">Free Event Registration & RSVP</h3>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-emerald-900/80 text-emerald-300 border border-emerald-500/40">
                {selectedEvent.rsvpCount} Registered
              </span>
            </div>

            {registered ? (
              <div className="p-5 rounded-xl bg-emerald-950/80 border border-emerald-500 text-emerald-200 space-y-3 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-800 text-emerald-200 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-white">Registration Confirmed!</h4>
                <p className="text-xs leading-relaxed max-w-md mx-auto">
                  Thank you, <strong>{fullName}</strong>. An email confirmation has been issued. Please arrive 15 minutes before start time.
                </p>
                <div className="inline-block p-2 rounded bg-slate-900 text-[11px] font-mono text-amber-300 border border-slate-700">
                  Pass Code: PASS-{Math.random().toString(36).substring(2, 8).toUpperCase()}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Adeola Johnson"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="adeola@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+234 800 000 0000"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Organization / Community (Optional)</label>
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder="e.g. University, Youth Network, Independent"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0B1E36] font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Reserve Free Spot / RSVP</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <button
            onClick={() => {
              navigator.clipboard.writeText(`${selectedEvent.title} - ${selectedEvent.date}`);
            }}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5 cursor-pointer"
          >
            <Share2 className="w-4 h-4" />
            <span>Copy Details</span>
          </button>
          <button
            onClick={() => setSelectedEvent(null)}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
