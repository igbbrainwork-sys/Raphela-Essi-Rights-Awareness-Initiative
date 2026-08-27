import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import {
  ShieldCheck,
  Lock,
  LogOut,
  FileText,
  Users,
  Calendar,
  DollarSign,
  Settings,
  Plus,
  Trash2,
  Edit,
  Eye,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Search,
  Filter,
  ArrowRight,
  Printer,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { SupportRequest, CaseStatus, VolunteerApplication } from '../types';

export const AdminView: React.FC = () => {
  const {
    currentUser,
    loginAdmin,
    logoutAdmin,
    supportRequests,
    updateCaseStatus,
    addCaseNote,
    rightsArticles,
    events,
    volunteers,
    updateVolunteerStatus,
    donations,
    setActiveReceipt,
    siteSettings,
    updateSiteSettings,
    addToast
  } = useData();

  // Login form state
  const [loginEmail, setLoginEmail] = useState('admin@rerai.org');
  const [loginPassword, setLoginPassword] = useState('password123');

  // Navigation tab in Admin
  const [activeTab, setActiveTab] = useState<'cases' | 'articles' | 'events' | 'volunteers' | 'donations' | 'settings'>('cases');

  // Case triage filter
  const [caseFilterStatus, setCaseFilterStatus] = useState<string>('all');
  const [selectedCase, setSelectedCase] = useState<SupportRequest | null>(null);
  const [newInternalNote, setNewInternalNote] = useState('');

  // Site settings form state
  const [formSettings, setFormSettings] = useState(siteSettings);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    loginAdmin('Super Admin');
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSiteSettings(formSettings);
  };

  const handleAddNote = () => {
    if (!selectedCase || !newInternalNote.trim()) return;
    addCaseNote(selectedCase.id, newInternalNote.trim());
    setNewInternalNote('');
    // refresh selectedCase
    const updated = supportRequests.find((r) => r.id === selectedCase.id);
    if (updated) setSelectedCase(updated);
  };

  // If not logged in, show sleek login gate
  if (!currentUser) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center p-4 py-16">
        <div className="bg-white w-full max-w-md rounded-3xl border border-slate-200 shadow-2xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-[#0B1E36] text-amber-400 flex items-center justify-center mx-auto shadow-md">
              <Lock className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-serif-heading font-bold text-[#0B1E36]">
              Secretariat Portal
            </h2>
            <p className="text-xs text-slate-500">
              Restricted access for Caseworkers, Legal Officers, and Board Administrators.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-xs sm:text-sm text-slate-800">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Official Email</label>
              <input
                type="email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Access Passcode</label>
              <input
                type="password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#0B1E36] hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md cursor-pointer transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Sign In to Admin Portal</span>
            </button>
          </form>

          {/* Quick Demo Switchers */}
          <div className="pt-4 border-t border-slate-100 space-y-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Quick Role Test Logins:
            </span>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <button
                type="button"
                onClick={() => loginAdmin('Super Admin')}
                className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold cursor-pointer text-left"
              >
                Super Admin
              </button>
              <button
                type="button"
                onClick={() => loginAdmin('Legal / Case Officer')}
                className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold cursor-pointer text-left"
              >
                Case Officer
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Filtered support requests
  const filteredCases = supportRequests.filter((c) => {
    if (caseFilterStatus === 'all') return true;
    return c.status === caseFilterStatus;
  });

  const totalDonationNGN = donations
    .filter((d) => d.currency === 'NGN')
    .reduce((sum, d) => sum + d.amount, 0);

  const totalDonationUSD = donations
    .filter((d) => d.currency === 'USD')
    .reduce((sum, d) => sum + d.amount, 0);

  return (
    <div className="min-h-screen bg-slate-100/60 pb-24">
      {/* Top Admin Header Bar */}
      <div className="bg-[#0B1E36] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-[#0B1E36] flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-white leading-tight">
                Raphela Essi NGO Secretariat Hub
              </h1>
              <p className="text-xs text-amber-300">
                Logged in as: <strong>{currentUser.name}</strong> ({currentUser.role})
              </p>
            </div>
          </div>

          <button
            onClick={logoutAdmin}
            className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-red-950 hover:text-red-300 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-2 overflow-x-auto no-scrollbar border-t border-slate-800/80 pt-2 pb-2">
          {[
            { id: 'cases', label: `Incident Triage (${supportRequests.length})`, icon: FileText },
            { id: 'articles', label: `Rights CMS (${rightsArticles.length})`, icon: BookOpen },
            { id: 'events', label: `Events & RSVPs (${events.length})`, icon: Calendar },
            { id: 'volunteers', label: `Volunteers (${volunteers.length})`, icon: Users },
            { id: 'donations', label: `Donations (${donations.length})`, icon: DollarSign },
            { id: 'settings', label: 'NGO Settings', icon: Settings }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-2 transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-amber-400 text-[#0B1E36] shadow-sm'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Admin Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* TAB 1: CASES & INCIDENT TRIAGE */}
        {activeTab === 'cases' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-[#0B1E36]">Confidential Intake & Rights Cases</h2>
                <p className="text-xs text-slate-500">Triage incoming human rights concerns, log casework notes, and manage legal referrals.</p>
              </div>

              {/* Status Filter */}
              <div className="flex gap-2">
                {['all', 'new', 'under-review', 'referred', 'resolved'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setCaseFilterStatus(st)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold capitalize transition-colors cursor-pointer ${
                      caseFilterStatus === st
                        ? 'bg-blue-900 text-white'
                        : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {st.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* List (5 cols) */}
              <div className="lg:col-span-5 space-y-3">
                {filteredCases.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => setSelectedCase(c)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                      selectedCase?.id === c.id
                        ? 'bg-blue-50/60 border-blue-600 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {c.ticketCode}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                          c.urgency === 'critical' || c.urgency === 'high'
                            ? 'bg-red-100 text-red-700'
                            : c.urgency === 'medium'
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {c.urgency}
                      </span>
                    </div>

                    <h4 className="font-bold text-sm text-[#0B1E36] line-clamp-1">{c.fullName || 'Anonymous'}</h4>
                    <p className="text-xs text-slate-500">{c.category} • {c.state}</p>
                    <p className="text-xs text-slate-600 line-clamp-2 mt-1">{c.description}</p>

                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">{c.submittedAt.split('T')[0]}</span>
                      <span className="font-semibold text-blue-900 capitalize bg-blue-50 px-2 py-0.5 rounded">
                        {c.status.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                ))}

                {filteredCases.length === 0 && (
                  <div className="p-8 bg-white rounded-2xl text-center text-xs text-slate-500 border border-slate-200">
                    No cases match the selected status filter.
                  </div>
                )}
              </div>

              {/* Detail & Action (7 cols) */}
              <div className="lg:col-span-7">
                {selectedCase ? (
                  <div className="p-6 sm:p-8 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                      <div>
                        <span className="text-xs font-mono font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded">
                          {selectedCase.ticketCode}
                        </span>
                        <h3 className="text-lg font-bold text-[#0B1E36] mt-2">
                          {selectedCase.fullName || 'Anonymous Reporter'}
                        </h3>
                        <p className="text-xs text-slate-500">
                          Logged: {new Date(selectedCase.submittedAt).toLocaleString()}
                        </p>
                      </div>

                      <div className="text-right">
                        <label className="block text-[11px] font-bold text-slate-500 mb-1">Update Status:</label>
                        <select
                          value={selectedCase.status}
                          onChange={(e) => {
                            updateCaseStatus(selectedCase.id, e.target.value as CaseStatus);
                            setSelectedCase({ ...selectedCase, status: e.target.value as CaseStatus });
                          }}
                          className="px-3 py-1.5 rounded-xl border border-slate-300 text-xs font-bold bg-white focus:outline-none"
                        >
                          <option value="new">New Report</option>
                          <option value="under-review">Under Legal Review</option>
                          <option value="referred">Referred to Statutory Agency</option>
                          <option value="in-progress">In Progress</option>
                          <option value="resolved">Resolved / Case Closed</option>
                        </select>
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <div>
                        <span className="text-slate-500 block">Phone / Contact:</span>
                        <span className="font-bold text-slate-800">{selectedCase.phone || 'N/A'} ({selectedCase.preferredContact})</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Email:</span>
                        <span className="font-bold text-slate-800">{selectedCase.email || 'N/A'}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Location:</span>
                        <span className="font-bold text-slate-800">{selectedCase.lga || 'N/A'}, {selectedCase.state}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Category:</span>
                        <span className="font-bold text-blue-900">{selectedCase.category}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Urgency:</span>
                        <span className="font-bold text-red-700 uppercase">{selectedCase.urgency}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Anonymity:</span>
                        <span className="font-bold text-slate-700">{selectedCase.isAnonymous ? 'Yes (Protected)' : 'No'}</span>
                      </div>
                    </div>

                    {/* Narrative */}
                    <div className="space-y-2">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700">Incident Narrative:</h4>
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-mono">
                        {selectedCase.description}
                      </div>
                    </div>

                    {/* Internal Notes & Log */}
                    <div className="space-y-3 pt-2 border-t border-slate-100">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700">Caseworker Audit Notes:</h4>
                      <div className="space-y-2 max-h-48 overflow-y-auto">
                        {selectedCase.internalNotes && selectedCase.internalNotes.length > 0 ? (
                          selectedCase.internalNotes.map((note) => (
                            <div key={note.id} className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-950">
                              <span className="font-bold block text-[11px] text-amber-800">{note.author} ({note.timestamp})</span>
                              <span>{note.note}</span>
                            </div>
                          ))
                        ) : (
                          <p className="text-xs text-slate-400 italic">No caseworker notes logged yet.</p>
                        )}
                      </div>

                      <div className="flex gap-2 pt-1">
                        <input
                          type="text"
                          value={newInternalNote}
                          onChange={(e) => setNewInternalNote(e.target.value)}
                          placeholder="Log action (e.g. 'Assigned to FIDA Abuja desk for bail hearing on Monday')..."
                          className="flex-1 px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={handleAddNote}
                          className="px-4 py-2 rounded-xl bg-[#0B1E36] text-white text-xs font-bold cursor-pointer"
                        >
                          Add Note
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-12 bg-white rounded-3xl border border-slate-200 text-center text-slate-400 text-sm">
                    Select a case from the list to view intake details, change status, and log notes.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ARTICLES CMS */}
        {activeTab === 'articles' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-[#0B1E36]">Know Your Rights Educational Hub CMS</h2>
                <p className="text-xs text-slate-500">Manage statutory citations, simplified guides, and FAQs.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rightsArticles.map((art) => (
                <div key={art.id} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                      {art.categoryLabel}
                    </span>
                    <span className="text-[11px] text-slate-400">{art.readTime}</span>
                  </div>
                  <h4 className="font-bold text-sm text-[#0B1E36]">{art.title}</h4>
                  <p className="text-xs text-slate-600 line-clamp-2">{art.summary}</p>
                  <p className="text-[11px] font-mono text-emerald-800">Law: {art.legalBasis}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: EVENTS & RSVPS */}
        {activeTab === 'events' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-[#0B1E36]">Legal Clinics, Town Halls & Events</h2>
                <p className="text-xs text-slate-500">Track community registrations and speaker schedules.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {events.map((ev) => (
                <div key={ev.id} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded">
                      {ev.type}
                    </span>
                    <span className="text-xs font-bold text-emerald-700">{ev.rsvpCount} RSVPs</span>
                  </div>
                  <h4 className="font-bold text-sm text-[#0B1E36]">{ev.title}</h4>
                  <p className="text-xs text-slate-600">{ev.date} • {ev.time}</p>
                  <p className="text-xs text-slate-500">{ev.location}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: VOLUNTEERS */}
        {activeTab === 'volunteers' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[#0B1E36]">Volunteer Applications & Advocates</h2>
              <p className="text-xs text-slate-500">Review volunteer profiles and approve community champions.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {volunteers.map((vol) => (
                <div key={vol.id} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded">
                      {vol.areasOfInterest?.join(', ') || 'Advocate'}
                    </span>
                    <span className={`text-xs font-bold capitalize px-2 py-0.5 rounded ${
                      vol.status === 'Approved' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {vol.status}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-bold text-sm text-[#0B1E36]">{vol.fullName}</h4>
                    <p className="text-xs text-slate-500">{vol.email} • {vol.phone}</p>
                    <p className="text-xs text-slate-500">{vol.professionalBackground} • {vol.city}, {vol.state}</p>
                  </div>

                  <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg italic">
                    "{vol.motivation}"
                  </p>

                  <div className="flex gap-2 pt-2 border-t border-slate-100">
                    <button
                      onClick={() => updateVolunteerStatus(vol.id, 'Approved')}
                      className="px-3 py-1.5 rounded-lg bg-emerald-700 text-white text-xs font-bold cursor-pointer hover:bg-emerald-800"
                    >
                      Approve Volunteer
                    </button>
                    <button
                      onClick={() => updateVolunteerStatus(vol.id, 'Contacted')}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 text-white text-xs font-bold cursor-pointer hover:bg-slate-900"
                    >
                      Mark Contacted
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: DONATIONS LEDGER */}
        {activeTab === 'donations' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#0B1E36] text-white space-y-1">
                <span className="text-xs text-amber-400 font-bold uppercase">Total NGN Contributed</span>
                <div className="text-3xl font-bold font-sans">₦{totalDonationNGN.toLocaleString()}</div>
                <p className="text-xs text-slate-300">Dedicated directly to pro-bono defense & legal literacy</p>
              </div>
              <div className="p-6 rounded-2xl bg-emerald-900 text-white space-y-1">
                <span className="text-xs text-emerald-300 font-bold uppercase">Total USD Contributed</span>
                <div className="text-3xl font-bold font-sans">${totalDonationUSD.toLocaleString()}</div>
                <p className="text-xs text-emerald-200">International partners & diaspora contributions</p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-base text-[#0B1E36]">Official Donations Log</h3>
              <div className="space-y-2">
                {donations.map((d) => (
                  <div key={d.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-slate-900">{d.isAnonymous ? 'Anonymous Donor' : d.donorName}</span>
                      <span className="text-slate-500 block">{d.cause} • {d.paymentMethod}</span>
                    </div>
                    <div className="text-right flex items-center gap-3">
                      <div>
                        <span className="font-bold text-sm text-[#0B1E36]">
                          {d.currency === 'NGN' ? '₦' : '$'}{d.amount.toLocaleString()}
                        </span>
                        <span className="text-[10px] text-slate-400 block font-mono">{d.receiptNumber}</span>
                      </div>
                      <button
                        onClick={() => setActiveReceipt(d)}
                        className="px-3 py-1.5 rounded-lg bg-blue-900 text-white text-xs font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <Printer className="w-3.5 h-3.5 text-amber-400" />
                        <span>Receipt</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: SETTINGS */}
        {activeTab === 'settings' && (
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6 max-w-3xl">
            <h2 className="text-xl font-bold text-[#0B1E36]">Organization Metadata & Bank Details</h2>
            <form onSubmit={handleSaveSettings} className="space-y-4 text-xs sm:text-sm text-slate-800">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Organization Name</label>
                <input
                  type="text"
                  value={formSettings.organizationName}
                  onChange={(e) => setFormSettings({ ...formSettings, organizationName: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">CAC Registration Status</label>
                  <input
                    type="text"
                    value={formSettings.cacRegistrationNumber}
                    onChange={(e) => setFormSettings({ ...formSettings, cacRegistrationNumber: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-mono focus:ring-1 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Helpline Phone</label>
                  <input
                    type="text"
                    value={formSettings.phoneHotline}
                    onChange={(e) => setFormSettings({ ...formSettings, phoneHotline: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Official Domain</label>
                  <input
                    type="text"
                    value={formSettings.domain}
                    onChange={(e) => setFormSettings({ ...formSettings, domain: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-mono focus:ring-1 focus:ring-amber-500 focus:outline-none"
                    placeholder="rerai.org"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Website URL</label>
                  <input
                    type="url"
                    value={formSettings.websiteUrl}
                    onChange={(e) => setFormSettings({ ...formSettings, websiteUrl: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-mono focus:ring-1 focus:ring-amber-500 focus:outline-none"
                    placeholder="https://rerai.org"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Official General Email</label>
                  <input
                    type="email"
                    value={formSettings.officialEmail}
                    onChange={(e) => setFormSettings({ ...formSettings, officialEmail: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Support & Rapid Help Email</label>
                  <input
                    type="email"
                    value={formSettings.supportEmail}
                    onChange={(e) => setFormSettings({ ...formSettings, supportEmail: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Legal & Casework Email</label>
                  <input
                    type="email"
                    value={formSettings.legalEmail || ''}
                    onChange={(e) => setFormSettings({ ...formSettings, legalEmail: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Ethics & Whistleblower Email</label>
                  <input
                    type="email"
                    value={formSettings.ethicsEmail || ''}
                    onChange={(e) => setFormSettings({ ...formSettings, ethicsEmail: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Headquarters Address</label>
                <input
                  type="text"
                  value={formSettings.officeAddress}
                  onChange={(e) => setFormSettings({ ...formSettings, officeAddress: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              <div className="pt-3 border-t border-slate-200">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700 mb-3">Official Bank Account Information:</h4>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Bank Name</label>
                    <input
                      type="text"
                      value={formSettings.bankDetails.bankName}
                      onChange={(e) => setFormSettings({
                        ...formSettings,
                        bankDetails: { ...formSettings.bankDetails, bankName: e.target.value }
                      })}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Account Name</label>
                    <input
                      type="text"
                      value={formSettings.bankDetails.accountName}
                      onChange={(e) => setFormSettings({
                        ...formSettings,
                        bankDetails: { ...formSettings.bankDetails, accountName: e.target.value }
                      })}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Account Number</label>
                    <input
                      type="text"
                      value={formSettings.bankDetails.accountNumber}
                      onChange={(e) => setFormSettings({
                        ...formSettings,
                        bankDetails: { ...formSettings.bankDetails, accountNumber: e.target.value }
                      })}
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-mono"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs cursor-pointer shadow-sm"
              >
                Save Official Settings
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
