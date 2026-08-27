import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import {
  Scale,
  Shield,
  Lock,
  AlertTriangle,
  FileText,
  PhoneCall,
  CheckCircle2,
  ExternalLink,
  Upload,
  UserX,
  HelpCircle,
  Clock,
  EyeOff
} from 'lucide-react';
import { HelpRequestCategory } from '../types';

export const GetHelpView: React.FC = () => {
  const { submitSupportRequest, addToast, referralAgencies } = useData();

  // Form State
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredContact, setPreferredContact] = useState<'phone' | 'email' | 'whatsapp' | 'no-direct-contact'>('whatsapp');
  const [category, setCategory] = useState<HelpRequestCategory>('unlawful-arrest-detention');
  const [urgency, setUrgency] = useState<'low' | 'medium' | 'high' | 'critical'>('medium');
  const [state, setState] = useState('Abuja FCT');
  const [lga, setLga] = useState('');
  const [description, setDescription] = useState('');
  const [consentSafeguarding, setConsentSafeguarding] = useState(false);

  // Success State
  const [submittedTicketRef, setSubmittedTicketRef] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !consentSafeguarding) {
      addToast('error', 'Missing Information', 'Please complete all required fields and accept the safeguarding consent.');
      return;
    }

    const ref = submitSupportRequest({
      isAnonymous,
      fullName: isAnonymous ? 'Anonymous Reporter' : fullName,
      email: isAnonymous ? 'anonymous@safeguard.ng' : email,
      phone: isAnonymous ? 'N/A' : phone,
      preferredContact: isAnonymous ? 'no-direct-contact' : preferredContact,
      category,
      urgency,
      state,
      lga,
      description,
      hasDocuments: false,
      consentGiven: consentSafeguarding
    });

    setSubmittedTicketRef(ref);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Top Banner */}
      <section className="bg-[#0B1E36] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-semibold border border-red-500/30">
            <Shield className="w-3.5 h-3.5" />
            <span>Confidential Intake & Incident Triage</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white tracking-tight">
            Get Help, Report a Violation & Legal Referrals
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            If you, a loved one, or a community member are experiencing unlawful detention, extortion, domestic abuse, or a fundamental human rights violation, submit a confidential case report or contact our verified statutory referral directory.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs text-amber-300 bg-amber-500/10 px-3.5 py-1.5 rounded-lg border border-amber-500/20">
              <Lock className="w-4 h-4" />
              <span>100% Confidential & Anonymous Option Available</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-300 bg-emerald-500/10 px-3.5 py-1.5 rounded-lg border border-emerald-500/20">
              <CheckCircle2 className="w-4 h-4" />
              <span>Free Pro-Bono Referral Assessment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Legal Directory */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Column 1: Intake Form (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                  Step 1 of 1: Secure Case Submission
                </span>
                <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-[#0B1E36] mt-1">
                  Confidential Incident Reporting Form
                </h2>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  All reports are triaged by our human rights lawyers and safeguarding caseworkers under strict "Do No Harm" protocols.
                </p>
              </div>

              {submittedTicketRef ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 space-y-4 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-700 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-950 font-serif-heading">
                    Report Logged Successfully
                  </h3>
                  <div className="p-4 rounded-xl bg-white border border-emerald-200 inline-block space-y-1">
                    <span className="text-xs text-slate-500 uppercase tracking-wider block">Your Confidential Ticket Ref:</span>
                    <span className="text-xl font-mono font-bold text-blue-950 tracking-wider">
                      {submittedTicketRef}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed max-w-md mx-auto">
                    Please keep this tracking reference in a secure place. If you opted for contact, our duty caseworker will review your report within 24 to 48 hours.
                  </p>
                  <button
                    onClick={() => setSubmittedTicketRef(null)}
                    className="px-5 py-2.5 rounded-xl bg-[#0B1E36] hover:bg-slate-800 text-white text-xs font-bold cursor-pointer"
                  >
                    Submit Another Report
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-slate-800 text-xs sm:text-sm">
                  {/* Anonymous Switch */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div className="space-y-0.5 pr-4">
                      <span className="font-bold text-xs text-[#0B1E36] flex items-center gap-1.5">
                        <EyeOff className="w-4 h-4 text-slate-500" />
                        <span>Submit Anonymously?</span>
                      </span>
                      <p className="text-[11px] text-slate-500">
                        Hide your name and personal contact details from caseworkers.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isAnonymous}
                        onChange={(e) => setIsAnonymous(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
                    </label>
                  </div>

                  {!isAnonymous && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required={!isAnonymous}
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Chinelo Okonkwo"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required={!isAnonymous}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+234 800 000 0000"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                        />
                      </div>
                    </div>
                  )}

                  {!isAnonymous && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="chinelo@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Preferred Safe Contact Mode
                        </label>
                        <select
                          value={preferredContact}
                          onChange={(e) => setPreferredContact(e.target.value as any)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none bg-white"
                        >
                          <option value="whatsapp">WhatsApp Message</option>
                          <option value="phone">Direct Phone Call</option>
                          <option value="email">Email</option>
                          <option value="no-direct-contact">Do Not Contact (Log Only)</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Violation Category & Urgency */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Violation Category *
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value as HelpRequestCategory)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none bg-white font-medium"
                      >
                        <option value="unlawful-arrest-detention">Unlawful Arrest, Bail Demand & Police Detention</option>
                        <option value="violence-abuse-vapp">Gender-Based Violence, Domestic Abuse & VAPP</option>
                        <option value="child-protection">Child Protection, Abuse & Exploitation</option>
                        <option value="tenancy-unlawful-eviction">Unlawful Eviction & Tenant Rights</option>
                        <option value="workplace-rights">Workplace Exploitation & Unpaid Wages</option>
                        <option value="discrimination">Marginalization & Discrimination</option>
                        <option value="community-dispute">Community Rights & Land Grievance</option>
                        <option value="legal-referral">Pro-Bono Legal Advice & Court Triage</option>
                        <option value="general-inquiry">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Urgency Level *
                      </label>
                      <select
                        value={urgency}
                        onChange={(e) => setUrgency(e.target.value as any)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none bg-white"
                      >
                        <option value="low">Low (General guidance / information)</option>
                        <option value="medium">Medium (Ongoing dispute / advisory)</option>
                        <option value="high">High (Threat of eviction / imminent hearing)</option>
                        <option value="critical">Critical Emergency (Active detention / immediate physical threat)</option>
                      </select>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        State Where Incident Occurred *
                      </label>
                      <input
                        type="text"
                        required
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        placeholder="e.g. Abuja FCT, Lagos, Rivers"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        LGA / Town (Optional)
                      </label>
                      <input
                        type="text"
                        value={lga}
                        onChange={(e) => setLga(e.target.value)}
                        placeholder="e.g. Bwari, Ikeja, Port Harcourt"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Detailed Description */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Incident Summary & Specific Details *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Please describe clearly what occurred: who is involved, names of police stations/parties (if known), dates, and what assistance is urgently required..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>

                  {/* Safeguarding & Legal Notice */}
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="consentSafeguarding"
                        required
                        checked={consentSafeguarding}
                        onChange={(e) => setConsentSafeguarding(e.target.checked)}
                        className="mt-0.5 rounded border-slate-300 text-amber-600 focus:ring-amber-500 cursor-pointer"
                      />
                      <label htmlFor="consentSafeguarding" className="text-[11px] text-amber-950 leading-relaxed cursor-pointer font-medium">
                        I confirm this information is provided in good faith for human rights triage and referral under the Nigeria Data Protection Act (NDPA 2023). I understand Raphela Essi provides pro-bono literacy and statutory referral coordination, and does not automatically constitute private court retained counsel.
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Submit Incident for Review</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Emergency Referrals Directory (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-[#0B1E36] text-white border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm border-b border-slate-800 pb-3">
                <PhoneCall className="w-4 h-4" />
                <span>Statutory Helplines & Emergency Services</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                If someone is in acute physical danger or under illegal custodial torture, contact statutory emergency bodies immediately:
              </p>

              <div className="space-y-3 text-xs">
                {referralAgencies.map((agency, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 space-y-1.5 hover:border-amber-400/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white text-xs">{agency.name} ({agency.acronym})</span>
                      <span className="text-[10px] text-amber-300 font-mono">{agency.coverage}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{agency.mandate}</p>
                    <div className="flex items-center gap-2 pt-1 font-mono text-emerald-400 font-bold">
                      <PhoneCall className="w-3 h-3" />
                      <span>{agency.phone} {agency.tollFree && `• Toll-Free: ${agency.tollFree}`}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
