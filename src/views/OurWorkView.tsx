import React from 'react';
import { useData } from '../context/DataContext';
import {
  Scale,
  Shield,
  Heart,
  Users,
  GraduationCap,
  Megaphone,
  Building,
  ArrowRight,
  CheckCircle2,
  Lock,
  Globe2,
  FileCheck
} from 'lucide-react';

export const OurWorkView: React.FC = () => {
  const { setCurrentPage } = useData();

  const workStreams = [
    {
      id: 'work-human-rights',
      title: 'Human Rights Awareness & Education',
      tagline: 'Translating constitutional rights into everyday community understanding.',
      icon: GraduationCap,
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80',
      description: 'We believe that rights can only be protected when they are known. We design and deliver interactive civic education curricula, vernacular infographics, and pocket guides that simplify the 1999 Nigerian Constitution (as amended), fundamental human rights, and citizen entitlements.',
      keyInterventions: [
        'Multi-lingual "Know Your Rights" pocket handbooks in English, Hausa, Yoruba, and Igbo',
        'Radio educational series reaching over 100,000 rural and semi-urban listeners',
        'Market-square rights sensitization sessions for informal sector workers and traders',
        'Digital human rights toolkits for young Nigerians and student advocates'
      ]
    },
    {
      id: 'work-access-justice',
      title: 'Access to Justice & Pre-Trial Detention Reform',
      tagline: 'Defending the indigent, ending illegal bail extortion, and reducing custodial congestion.',
      icon: Scale,
      color: 'amber',
      image: 'https://images.unsplash.com/photo-1453733197781-7040d049f57d?auto=format&fit=crop&w=1000&q=80',
      description: 'Thousands of indigent Nigerians languish in pre-trial detention for minor petty offenses simply due to lack of legal counsel or unlawful bail extortion. We coordinate with volunteer bar advocates to audit custodial holding facilities and facilitate prompt legal defense.',
      keyInterventions: [
        'Pro-bono legal triage and bail intervention for indigent pre-trial detainees',
        'Monitoring enforcement of Section 62 of the Police Act 2020 (Free Bail statutory guarantee)',
        'Partnership with the Legal Aid Council and National Human Rights Commission (NHRC)',
        'Fast-track legal assistance for victims of unlawful arrest and arbitrary detention'
      ]
    },
    {
      id: 'work-women-girls',
      title: 'Protection of Women & Girls (VAPP Act Enforcement)',
      tagline: 'Eliminating gender-based violence, harmful practices, and discrimination.',
      icon: Heart,
      color: 'rose',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
      description: 'Through our dedicated Gender & Safeguarding desk, we support survivors of domestic violence, sexual assault, forced marriage, and widowhood abuse. We collaborate with verified Sexual Assault Referral Centres (SARCs) and law enforcement desks to deliver trauma-informed protection.',
      keyInterventions: [
        'Confidential referral to emergency medical triage and verified safe shelter networks',
        'Assistance in filing civil protection and restraining orders under the VAPP Act',
        'Community dialogues with traditional and religious leaders on ending harmful cultural practices',
        'Empowerment of rural women cooperatives on economic and property inheritance rights'
      ]
    },
    {
      id: 'work-children-youth',
      title: 'Child Rights Protection & Youth Civic Empowerment',
      tagline: 'Safeguarding every child’s future and nurturing ethical youth leadership.',
      icon: Users,
      color: 'emerald',
      image: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?auto=format&fit=crop&w=1000&q=80',
      description: 'Every Nigerian child deserves free universal education, safety from hazardous labour, and protection from abuse. We advocate for full domestication and enforcement of the Child’s Rights Act (CRA) across all states and empower adolescents with civic leadership skills.',
      keyInterventions: [
        'Anonymous reporting intake for child abuse, domestic exploitation, and school denial',
        'Inter-campus youth civic fellowships on peaceful advocacy and digital rights',
        'Advocacy against street hawking during school hours and child marriage',
        'Safe school rights clubs educating pupils on bodily autonomy and reporting abuse'
      ]
    },
    {
      id: 'work-community-empowerment',
      title: 'Community Empowerment & Grassroots Paralegals',
      tagline: 'Building grassroots capacity for peaceful dispute resolution.',
      icon: Building,
      color: 'indigo',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80',
      description: 'True social change begins when community members have the skills and institutional pathways to resolve civil disputes, tenancy disagreements, and land conflicts without falling prey to arbitrary harassment or corruption.',
      keyInterventions: [
        'Training of community paralegals to serve as first-line rights advisors',
        'Community mediation clinics in peri-urban slums and border settlements',
        'Tenancy rights literacy workshops protecting residents from illegal evictions',
        'Strengthening collaboration between community watch associations and statutory oversight desks'
      ]
    },
    {
      id: 'work-advocacy-policy',
      title: 'Policy Advocacy & Institutional Reform',
      tagline: 'Driving systemic legislative and judicial accountability in Nigeria.',
      icon: Megaphone,
      color: 'slate',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80',
      description: 'We conduct evidence-based research and policy dialogues to influence criminal justice reforms, police accountability mechanisms, and data privacy legislation like the Nigeria Data Protection Act (NDPA 2023).',
      keyInterventions: [
        'Publication of annual access to justice and pre-trial detention audits',
        'Stakeholder policy memos submitted to the National Assembly and Ministries of Justice',
        'Public interest litigation and amicus briefs on constitutional rights questions',
        'Campaigns against predatory digital loan apps and unauthorized data harvesting'
      ]
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Banner */}
      <section className="bg-[#0B1E36] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
            Our Thematic Focus Areas
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white tracking-tight">
            How We Drive Sustainable Social Justice
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Discover our six core operational pillars uniting grassroots legal empowerment, survivor-centered protection, pro-bono defense, and national policy advocacy.
          </p>
        </div>
      </section>

      {/* Main Work Streams */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {workStreams.map((stream, idx) => {
          const Icon = stream.icon;
          const isEven = idx % 2 === 0;

          return (
            <div
              key={stream.id}
              id={stream.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              <div className={`lg:col-span-6 space-y-5 ${isEven ? '' : 'lg:order-2'}`}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0B1E36] text-amber-400 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Pillar 0{idx + 1}
                    </span>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif-heading font-bold text-[#0B1E36]">
                      {stream.title}
                    </h2>
                  </div>
                </div>

                <p className="text-sm font-semibold text-amber-800 italic">
                  "{stream.tagline}"
                </p>

                <p className="text-sm text-slate-700 leading-relaxed">
                  {stream.description}
                </p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Key Strategic Interventions:
                  </h4>
                  <div className="space-y-1.5">
                    {stream.keyInterventions.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setCurrentPage('know-your-rights')}
                    className="px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>View Educational Guides</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setCurrentPage('get-help')}
                    className="px-4 py-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold border border-red-200 cursor-pointer"
                  >
                    <span>Report a Related Violation</span>
                  </button>
                </div>
              </div>

              <div className={`lg:col-span-6 ${isEven ? '' : 'lg:order-1'}`}>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                  <img
                    src={stream.image}
                    alt={stream.title}
                    className="w-full h-72 sm:h-96 object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Call to Action Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B1E36] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-white">
              Partner With Us on Human Rights Interventions
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              We collaborate with institutional donors, development agencies, Nigerian Bar Association chapters, and community leaders to scale rights protection.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setCurrentPage('get-involved')}
              className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0B1E36] font-bold text-xs sm:text-sm cursor-pointer shadow-md"
            >
              Become an Institutional Partner
            </button>
            <button
              onClick={() => setCurrentPage('donate')}
              className="px-5 py-3 rounded-xl bg-[#0F766E] hover:bg-[#0D655E] text-white font-bold text-xs sm:text-sm cursor-pointer"
            >
              Sponsor a Programme
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
