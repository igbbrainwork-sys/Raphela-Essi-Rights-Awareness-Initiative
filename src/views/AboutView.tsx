import React from 'react';
import { useData } from '../context/DataContext';
import {
  Scale,
  Shield,
  Heart,
  Users,
  Target,
  Sparkles,
  Award,
  CheckCircle2,
  Lock,
  Building,
  FileText,
  Mail,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

export const AboutView: React.FC = () => {
  const { siteSettings, leadership, setCurrentPage } = useData();

  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      {/* Header Banner */}
      <section className="bg-[#0B1E36] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
            <Scale className="w-3.5 h-3.5" />
            <span>About Our NGO</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white tracking-tight">
            Advancing Human Dignity, Equality & Access to Justice
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Raphela Essi Rights Awareness Initiative is a Nigerian non-governmental organization dedicated to empowering communities through legal literacy, protecting vulnerable citizens, and fostering institutional accountability.
          </p>
        </div>
      </section>

      {/* Section 1: Who We Are & Our Story */}
      <section id="who-we-are" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
              Founding Purpose & Heritage
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#0B1E36] leading-tight">
              Bridging the Divide Between the Law and Everyday People
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              In many communities across Nigeria, citizens frequently face unlawful detentions, arbitrary extortion, domestic violence, and denied fundamental rights simply because legal provisions remain inaccessible, complex, and intimidating.
            </p>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Raphela Essi Rights Awareness Initiative was established to break this barrier. We believe that <strong>knowledge of one’s rights is the most potent shield against injustice</strong>. By translating constitutional law into everyday dialogue, partnering with pro-bono advocates, and standing with marginalized groups, we build community resilience from the grassroots up.
            </p>

            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-950 text-xs sm:text-sm font-medium">
              "When an ordinary citizen understands their constitutional protections, fear diminishes, dignity is restored, and community power is awakened."
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                alt="Human rights workshop and community advocacy forum"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B1E36] to-transparent p-6 text-white">
                <p className="font-bold text-sm">Grassroots Legal Empowerment Outreach</p>
                <p className="text-xs text-slate-300">Empowering women and young people with constitutional awareness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Vision, Mission & Core Values */}
      <section id="vision-values" className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1E36]">Our Vision</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                A just, egalitarian Nigerian society where every citizen—regardless of gender, socioeconomic status, age, or background—understands their rights, lives in freedom and dignity, and possesses equal access to transparent justice and social protection.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1E36]">Our Mission</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                To educate, advocate, and empower grassroots communities through simplified legal education, rapid pro-bono referral pathways, youth mentorship, and constructive policy engagement that protects the vulnerable and holds institutions accountable.
              </p>
            </div>
          </div>

          {/* 9 Core Values */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif-heading font-bold text-[#0B1E36]">
                Our Guiding Principles & Core Values
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                The ethical framework anchoring all our community programmes and institutional engagements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: 'Human Dignity',
                  desc: 'We affirm that every human being possesses an inherent right to respect, bodily integrity, and honor.'
                },
                {
                  title: 'Equality & Non-Discrimination',
                  desc: 'We champion equal protection of the law for all persons regardless of gender, ethnicity, or creed.'
                },
                {
                  title: 'Justice & Rule of Law',
                  desc: 'We believe no one is above the law and every citizen deserves fair, swift, and unhindered access to courts.'
                },
                {
                  title: 'Integrity & Ethics',
                  desc: 'We operate with unyielding truthfulness, transparency, and high moral standards in all engagements.'
                },
                {
                  title: 'Inclusion',
                  desc: 'We prioritize persons with disabilities, widows, vulnerable youth, and marginalized grassroots voices.'
                },
                {
                  title: 'Accountability',
                  desc: 'We maintain open governance, programmatic transparency, and responsibility to the public.'
                },
                {
                  title: 'Compassion',
                  desc: 'We approach survivors of rights violations with empathy, trauma-informed care, and utmost confidentiality.'
                },
                {
                  title: 'Community Empowerment',
                  desc: 'We build local capacity so communities can advocate for themselves and resolve disputes peacefully.'
                },
                {
                  title: 'Transparency',
                  desc: 'We ensure clear financial reporting, ethical fundraising, and honest programmatic impact metrics.'
                }
              ].map((val, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
                  <h4 className="font-bold text-sm text-[#0B1E36] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{val.title}</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Leadership & Advisory Team */}
      <section id="leadership" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
            Organizational Governance
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#0B1E36]">
            Leadership & Advisory Team
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Dedicated practitioners, advocates, and governance trustees providing strategic oversight and fiduciary accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="p-5 space-y-3">
                <div className="w-20 h-20 rounded-full bg-slate-100 border-2 border-amber-400/60 overflow-hidden mx-auto shadow-inner">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="text-center space-y-1">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-900">
                    {member.category}
                  </span>
                  <h3 className="font-bold text-sm text-[#0B1E36] leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-xs text-amber-700 font-medium">{member.role}</p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed text-center">
                  {member.bio}
                </p>

                {member.isPlaceholder && (
                  <div className="p-2 rounded bg-slate-50 border border-slate-200 text-[10px] text-slate-500 font-mono text-center">
                    [PROFILE / BIO PENDING OFFICIAL CONFIRMATION]
                  </div>
                )}
              </div>

              <div className="p-3 bg-slate-50 border-t border-slate-100 text-center">
                <div className="flex flex-wrap justify-center gap-1">
                  {member.expertise.map((exp, idx) => (
                    <span key={idx} className="text-[10px] bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-600">
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Governance, Statutory Registration & Transparency */}
      <section id="governance" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
            <div>
              <h3 className="font-bold text-lg text-[#0B1E36]">Statutory Governance & Compliance Disclosure</h3>
              <p className="text-xs text-slate-500">Committed to absolute transparency under Nigerian and international NGO guidelines.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
            <div className="space-y-1.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 block text-sm">CAC Incorporated Trustees</span>
              <p className="text-slate-600">
                Registered under the Companies and Allied Matters Act (CAMA) with the Corporate Affairs Commission (CAC) Nigeria.
              </p>
              <p className="font-mono text-[11px] text-amber-800 font-semibold mt-2">
                CAC Reg: {siteSettings.cacRegistrationNumber}
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 block text-sm">Data Protection & Privacy (NDPA 2023)</span>
              <p className="text-slate-600">
                Fully compliant with the Nigeria Data Protection Act 2023 and safeguarding mandates protecting vulnerable intake submissions.
              </p>
            </div>

            <div className="space-y-1.5 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 block text-sm">Audited Financial Reporting</span>
              <p className="text-slate-600">
                Annual financial statements and project impact audits are independently reviewed and made available to institutional donors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
