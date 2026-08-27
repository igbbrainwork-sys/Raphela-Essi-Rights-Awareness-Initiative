import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import {
  Users,
  HeartHandshake,
  CheckCircle2,
  Building,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Scale
} from 'lucide-react';
import { VolunteerApplication } from '../types';

export const GetInvolvedView: React.FC = () => {
  const { submitVolunteerApplication, addToast } = useData();

  // Volunteer State
  const [vFullName, setVFullName] = useState('');
  const [vEmail, setVEmail] = useState('');
  const [vPhone, setVPhone] = useState('');
  const [vState, setVState] = useState('Abuja FCT');
  const [vCity, setVCity] = useState('Garki');
  const [vOccupation, setVOccupation] = useState('');
  const [vInterestArea, setVInterestArea] = useState('Legal Aid & Court Triage');
  const [vAvailability, setVAvailability] = useState<VolunteerApplication['availability']>('4-8 hours/week');
  const [vMotivation, setVMotivation] = useState('');
  const [vSuccess, setVSuccess] = useState(false);

  // Partner State
  const [pOrgName, setPOrgName] = useState('');
  const [pContactPerson, setPContactPerson] = useState('');
  const [pEmail, setPEmail] = useState('');
  const [pPhone, setPPhone] = useState('');
  const [pType, setPType] = useState('Civil Society / Foundation');
  const [pProposal, setPProposal] = useState('');
  const [pSuccess, setPSuccess] = useState(false);

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vFullName || !vEmail || !vPhone || !vMotivation) {
      addToast('error', 'Missing Fields', 'Please complete all required fields.');
      return;
    }

    submitVolunteerApplication({
      fullName: vFullName,
      email: vEmail,
      phone: vPhone,
      state: vState,
      city: vCity,
      areasOfInterest: [vInterestArea],
      professionalBackground: vOccupation || 'Advocate / Student',
      skills: ['Community Outreach', 'Human Rights Education'],
      availability: vAvailability,
      motivation: vMotivation
    });

    setVSuccess(true);
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pOrgName || !pEmail || !pProposal) {
      addToast('error', 'Missing Information', 'Please complete the organization name, email, and proposal.');
      return;
    }
    setPSuccess(true);
    addToast('success', 'Partnership Inquiry Received', 'Thank you for reaching out to Raphela Essi. Our executive team will respond within 3 business days.');
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Banner */}
      <section className="bg-[#0B1E36] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Join Our Movement for Justice</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white tracking-tight">
            Get Involved: Volunteer, Partner or Advocate
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Real change happens when committed individuals and organizations unite. Join our nationwide network of volunteer legal practitioners, youth advocates, researchers, and institutional allies.
          </p>
        </div>
      </section>

      {/* 3 Main Pathways */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#0B1E36]">Pro-Bono Legal Advocates</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Are you a qualified legal practitioner in Nigeria? Lend your legal voice to assist indigent pre-trial detainees, defend bail statutory rights, and draft rights briefs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#0B1E36]">Youth & Campus Champions</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Lead human-rights clubs in tertiary institutions, organize campus legal roundtables, and facilitate digital rights awareness campaigns across social media.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-[#0B1E36]">Institutional Partners</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Foundations, development agencies, Bar associations, and corporate organizations collaborate with us to co-sponsor clinics and distribute educational handbooks.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section id="volunteer-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-8">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
              Grassroots Volunteer Application
            </span>
            <h2 className="text-2xl font-serif-heading font-bold text-[#0B1E36] mt-1">
              Apply to Volunteer With Raphela Essi
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Join our passionate cohort of changemakers. Selected volunteers receive formal onboarding, safeguarding training, and certificates of community service.
            </p>
          </div>

          {vSuccess ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 space-y-3 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-700 text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-950 font-serif-heading">
                Volunteer Application Received!
              </h3>
              <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed max-w-md mx-auto">
                Thank you for offering your time and skills to advance human dignity in Nigeria. Our volunteer coordination team will review your application and contact you via email/WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleVolunteerSubmit} className="space-y-5 text-slate-800 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={vFullName}
                    onChange={(e) => setVFullName(e.target.value)}
                    placeholder="e.g. Maryam Bello"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={vEmail}
                    onChange={(e) => setVEmail(e.target.value)}
                    placeholder="maryam@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    value={vPhone}
                    onChange={(e) => setVPhone(e.target.value)}
                    placeholder="+234 800 000 0000"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">State of Residence *</label>
                  <input
                    type="text"
                    required
                    value={vState}
                    onChange={(e) => setVState(e.target.value)}
                    placeholder="e.g. Abuja FCT, Lagos, Kaduna"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">City / Town</label>
                  <input
                    type="text"
                    value={vCity}
                    onChange={(e) => setVCity(e.target.value)}
                    placeholder="e.g. Garki, Ikeja, Zaria"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Area of Interest *</label>
                  <select
                    value={vInterestArea}
                    onChange={(e) => setVInterestArea(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none bg-white font-medium"
                  >
                    <option value="Legal Aid & Court Triage">Pro-Bono Legal Advice & Court Triage</option>
                    <option value="Community Rights & Town Hall Educator">Community Rights & Town Hall Educator</option>
                    <option value="Campus & Youth Ambassador">Campus & Youth Ambassador</option>
                    <option value="Digital Media & Storytelling">Digital Media, Design & Storytelling</option>
                    <option value="Legal Research & Policy Drafting">Legal Research & Policy Drafting</option>
                    <option value="Field Clinic Logistics & Organizing">Field Clinic Logistics & Organizing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Weekly Availability *</label>
                  <select
                    value={vAvailability}
                    onChange={(e) => setVAvailability(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none bg-white"
                  >
                    <option value="1-3 hours/week">1-3 hours/week</option>
                    <option value="4-8 hours/week">4-8 hours/week</option>
                    <option value="Weekends only">Weekends only</option>
                    <option value="Project-based / On-call">Project-based / On-call</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Why do you want to volunteer with Raphela Essi? *
                </label>
                <textarea
                  required
                  rows={4}
                  value={vMotivation}
                  onChange={(e) => setVMotivation(e.target.value)}
                  placeholder="Share a brief statement on your background, what motivates your passion for human rights, and what skills you bring..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <Users className="w-4 h-4 text-amber-400" />
                <span>Submit Volunteer Application</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Partner For Impact Section */}
      <section id="partner-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-3xl bg-[#0B1E36] text-white border border-slate-800 shadow-xl space-y-8">
          <div className="border-b border-slate-700 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Institutional Collaboration
            </span>
            <h2 className="text-2xl font-serif-heading font-bold text-white mt-1">
              Partner With Us for Measurable Impact
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              We welcome partnerships with international donor agencies, corporate social responsibility (CSR) initiatives, academic institutions, and community foundations.
            </p>
          </div>

          {pSuccess ? (
            <div className="p-6 rounded-2xl bg-emerald-900/60 border border-emerald-500 text-emerald-200 space-y-2 text-center">
              <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-400" />
              <h3 className="text-xl font-bold text-white">Partnership Proposal Received</h3>
              <p className="text-xs text-slate-300">
                Our Executive Secretariat will review your inquiry and schedule a collaborative consultation.
              </p>
            </div>
          ) : (
            <form onSubmit={handlePartnerSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Organization Name *</label>
                  <input
                    type="text"
                    required
                    value={pOrgName}
                    onChange={(e) => setPOrgName(e.target.value)}
                    placeholder="e.g. Global Rights Foundation"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:ring-1 focus:ring-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Contact Person & Title</label>
                  <input
                    type="text"
                    value={pContactPerson}
                    onChange={(e) => setPContactPerson(e.target.value)}
                    placeholder="e.g. Dr. Jane Eze, Programme Director"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:ring-1 focus:ring-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Official Email *</label>
                  <input
                    type="email"
                    required
                    value={pEmail}
                    onChange={(e) => setPEmail(e.target.value)}
                    placeholder="partnerships@organization.org"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:ring-1 focus:ring-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Official Phone</label>
                  <input
                    type="tel"
                    value={pPhone}
                    onChange={(e) => setPPhone(e.target.value)}
                    placeholder="+234 ..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:ring-1 focus:ring-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Organization Type</label>
                  <select
                    value={pType}
                    onChange={(e) => setPType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:ring-1 focus:ring-amber-400 focus:outline-none"
                  >
                    <option value="Civil Society / Foundation">Civil Society / Foundation</option>
                    <option value="International NGO">International NGO / Donor Agency</option>
                    <option value="Corporate CSR">Corporate CSR Division</option>
                    <option value="Academic Institution">Academic / Research Institution</option>
                    <option value="Government Agency">Statutory / Government Agency</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">Partnership Objectives & Scope *</label>
                <textarea
                  required
                  rows={4}
                  value={pProposal}
                  onChange={(e) => setPProposal(e.target.value)}
                  placeholder="Outline how your organization would like to collaborate (e.g., funding a specific thematic legal clinic, co-authoring policy research, distributing vernacular guides)..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-xs focus:ring-1 focus:ring-amber-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0B1E36] font-bold text-sm shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <Building className="w-4 h-4" />
                <span>Submit Partnership Proposal</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
