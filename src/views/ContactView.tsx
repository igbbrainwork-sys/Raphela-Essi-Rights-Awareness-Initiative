import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Shield,
  HelpCircle,
  AlertTriangle,
  Globe
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const { siteSettings, addToast, setCurrentPage } = useData();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      addToast('error', 'Missing Information', 'Please complete all required fields.');
      return;
    }
    setSent(true);
    addToast('success', 'Message Sent', 'Thank you. A member of our secretariat will respond promptly.');
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Banner */}
      <section className="bg-[#0B1E36] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect with Our Secretariat</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white tracking-tight">
            Contact & Secretariat Helpdesk
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Have an inquiry regarding our civic programmes, partnerships, press releases, or legal literacy resources? Reach out to our team directly.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Column 1: Contact Form (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <h2 className="text-xl font-bold text-[#0B1E36]">
                  Send an Official Inquiry
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Our communications desk responds to all legitimate inquiries within 24 to 48 business hours.
                </p>
              </div>

              {sent ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 space-y-3 text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-xl font-bold font-serif-heading">Message Delivered!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong>{name}</strong>. Your correspondence has been logged and assigned to the relevant department.
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setMessage('');
                    }}
                    className="px-4 py-2 rounded-xl bg-[#0B1E36] text-white text-xs font-bold cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm text-slate-800">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Samuel Danladi"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="samuel@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+234 800 000 0000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Subject / Department</label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none bg-white font-medium"
                      >
                        <option value="General Inquiry">General Public Inquiry</option>
                        <option value="Partnership & Sponsorship">Partnership & Sponsorship</option>
                        <option value="Media & Press Relations">Media & Press Desk</option>
                        <option value="Volunteer Coordination">Volunteer Coordination</option>
                        <option value="Safeguarding / Whistleblowing">Safeguarding & Ethics Desk</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your message here..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-amber-400" />
                    <span>Send Message to Secretariat</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Official Locations & Emergency Advisory (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-5">
              <h3 className="font-bold text-base text-white border-b border-slate-800 pb-3">
                Official Head Office & Directory
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">National Secretariat</span>
                    <p className="text-slate-300">{siteSettings.officeAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Inquiry Hotline</span>
                    <p className="text-slate-300 font-mono">{siteSettings.phoneHotline}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Official Email</span>
                    <p className="text-slate-300 font-mono">{siteSettings.officialEmail}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Official Domain & Portal</span>
                    <p className="text-amber-300 font-mono">{siteSettings.domain || 'rerai.org'}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Operational Hours</span>
                    <p className="text-slate-300">{siteSettings.officeHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* If You Need Human Rights Support Notice */}
            <div className="p-6 rounded-3xl bg-red-50 border border-red-200 space-y-3">
              <div className="flex items-center gap-2 text-red-900 font-bold text-sm">
                <AlertTriangle className="w-5 h-5 text-red-700" />
                <span>Reporting an Active Human Rights Violation?</span>
              </div>
              <p className="text-xs text-red-900 leading-relaxed">
                Do not use the general contact form for urgent human rights complaints or detained persons. Please use our specialized Intake System for immediate tracking and pro-bono review.
              </p>
              <button
                onClick={() => setCurrentPage('get-help')}
                className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-xs cursor-pointer"
              >
                Go to Confidential Intake Form
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
