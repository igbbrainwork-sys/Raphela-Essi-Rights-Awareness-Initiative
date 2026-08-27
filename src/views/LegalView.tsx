import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import {
  ShieldCheck,
  Lock,
  FileText,
  AlertTriangle,
  Scale,
  CheckCircle2,
  HelpCircle,
  Mail
} from 'lucide-react';

export const LegalView: React.FC = () => {
  const { currentSubSection, siteSettings } = useData();
  const [activeTab, setActiveTab] = useState<string>(currentSubSection || 'privacy');

  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      {/* Top Banner */}
      <section className="bg-[#0B1E36] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-500/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Governance & Legal Compliance</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white tracking-tight">
            Privacy, Safeguarding & Terms of Use
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Our legal commitments under the Nigeria Data Protection Act (NDPA 2023), survivor safeguarding standards, and constitutional educational terms.
          </p>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4 mb-8">
          {[
            { id: 'privacy', label: 'Privacy Policy (NDPA 2023)' },
            { id: 'safeguarding', label: 'Safeguarding & "Do No Harm"' },
            { id: 'terms', label: 'Terms of Use & Legal Disclaimer' },
            { id: 'complaints', label: 'Complaints & Whistleblowing' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-blue-900 text-white shadow-sm ring-1 ring-blue-700'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Privacy Policy */}
        {activeTab === 'privacy' && (
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6 text-slate-800 text-sm leading-relaxed">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-2xl font-serif-heading font-bold text-[#0B1E36]">
                Data Protection & Privacy Policy
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Effective Date: January 1, 2026 • Compliant with the Nigeria Data Protection Act (NDPA) 2023
              </p>
            </div>

            <div className="space-y-4 text-slate-700">
              <h3 className="font-bold text-base text-[#0B1E36]">1. Overview & Data Controller</h3>
              <p>
                Raphela Essi Rights Awareness Initiative ("the Initiative", "we", "our") is the Data Controller of all personal information submitted via our website and intake helplines. We operate under strict fiduciary, legal, and ethical standards to protect the privacy of victims, advocates, and donors.
              </p>

              <h3 className="font-bold text-base text-[#0B1E36]">2. Information We Collect</h3>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li><strong>Support & Intake Submissions:</strong> Information provided when submitting a rights violation, including incident details, location, and preferred contact mode. Reporters may opt for 100% anonymous submission.</li>
                <li><strong>Volunteer & Partner Inquiries:</strong> Contact details, location, and professional background for civic engagement coordination.</li>
                <li><strong>Donations:</strong> Billing names, emails, and transaction references for statutory receipting. We do not store raw card numbers.</li>
                <li><strong>Newsletter Subscriptions:</strong> Email addresses and explicit opt-in preferences.</li>
              </ul>

              <h3 className="font-bold text-base text-[#0B1E36]">3. Legal Basis & Use of Data</h3>
              <p>
                We process personal data solely on the basis of consent, legitimate non-profit educational and pro-bono referral objectives, and statutory compliance. We strictly <strong>never sell, rent, or monetize personal data</strong>.
              </p>

              <h3 className="font-bold text-base text-[#0B1E36]">4. Confidentiality & Referral Transfers</h3>
              <p>
                Where a survivor or victim authorizes referral to statutory bodies (NHRC, Legal Aid Council, FIDA, Police CRU), data is transmitted through secure encrypted channels.
              </p>

              <h3 className="font-bold text-base text-[#0B1E36]">5. Your Rights as a Data Subject</h3>
              <p>
                Under the NDPA 2023, you retain the right to request access, rectification, or complete erasure of your data from our database at any time by contacting <strong>{siteSettings.officialEmail}</strong>.
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Safeguarding Policy */}
        {activeTab === 'safeguarding' && (
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6 text-slate-800 text-sm leading-relaxed">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-2xl font-serif-heading font-bold text-[#0B1E36]">
                Safeguarding & "Do No Harm" Policy
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Zero Tolerance for Exploitation, Abuse & Re-traumatization
              </p>
            </div>

            <div className="space-y-4 text-slate-700">
              <h3 className="font-bold text-base text-[#0B1E36]">1. Protection of Children & Vulnerable Adults</h3>
              <p>
                Raphela Essi Rights Awareness Initiative maintains zero tolerance for sexual exploitation, abuse, child labor, and gender-based violence. All staff, volunteers, and pro-bono partners are bound by our strict Safeguarding Code of Conduct.
              </p>

              <h3 className="font-bold text-base text-[#0B1E36]">2. Trauma-Informed Survivor Care</h3>
              <p>
                When dealing with survivors of domestic violence, unlawful custodial torture, or sexual assault, our team prioritizes physical safety, dignity, and psychological well-being above public storytelling. No survivor’s real identity or identifying photograph will ever be published without explicit written informed consent.
              </p>

              <h3 className="font-bold text-base text-[#0B1E36]">3. Quick-Exit Mechanism</h3>
              <p>
                For users browsing in unsafe environments (e.g. victims living with abusive partners), our website provides an instant "Quick Safe Exit" button and emergency triple-Escape key trigger that redirects instantly to a neutral weather service.
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Terms of Use */}
        {activeTab === 'terms' && (
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6 text-slate-800 text-sm leading-relaxed">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-2xl font-serif-heading font-bold text-[#0B1E36]">
                Terms of Use & Educational Disclaimer
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Guidelines for Public Use of Our Educational Handbooks & Website
              </p>
            </div>

            <div className="space-y-4 text-slate-700">
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 font-medium text-xs">
                <strong>Crucial Legal Disclaimer:</strong> The articles, infographics, toolkits, and guides published on this platform are for general civic awareness and educational purposes under Nigerian law. They do not constitute formal legal representation or retainership. Consult a qualified legal practitioner or statutory legal aid counsel for individualized court representation.
              </div>

              <h3 className="font-bold text-base text-[#0B1E36]">1. Creative Commons & Fair Use</h3>
              <p>
                Unless otherwise indicated, all "Know Your Rights" handbooks, infographics, and civic educational materials are published under a <strong>Creative Commons Attribution-NonCommercial (CC BY-NC)</strong> license. You are free to print, distribute, and share these in markets, schools, and communities provided no commercial fee is charged.
              </p>

              <h3 className="font-bold text-base text-[#0B1E36]">2. Code of Interaction</h3>
              <p>
                Users agree not to submit fraudulent, defamatory, or maliciously fabricated incident reports into the intake queue.
              </p>
            </div>
          </div>
        )}

        {/* Tab 4: Complaints & Whistleblowing */}
        {activeTab === 'complaints' && (
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6 text-slate-800 text-sm leading-relaxed">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-2xl font-serif-heading font-bold text-[#0B1E36]">
                Complaints, Ethics & Whistleblowing Channel
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Direct, confidential oversight mechanism reporting to the Board of Trustees
              </p>
            </div>

            <div className="space-y-4 text-slate-700">
              <p>
                Raphela Essi Rights Awareness Initiative is dedicated to upholding the highest standards of integrity. If you suspect any financial impropriety, breach of safeguarding protocols, or misconduct by any staff member or volunteer, report directly to our Independent Ethics Desk:
              </p>

              <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-2 border border-slate-800">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  Confidential Ethics Hotline
                </span>
                <p className="font-mono text-emerald-400 font-bold text-base">{siteSettings.ethicsEmail || 'ethics@rerai.org'}</p>
                <p className="text-xs text-slate-300">
                  Submissions to this address bypass general secretariat staff and route directly to the Board Audit & Safeguarding Committee. Whistleblowers are protected from retaliation.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
