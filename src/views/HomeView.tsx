import React from 'react';
import { useData } from '../context/DataContext';
import {
  Scale,
  Shield,
  BookOpen,
  AlertTriangle,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Globe2,
  Lock,
  Calendar,
  Sparkles,
  Heart,
  ChevronRight,
  FileCheck,
  Building,
  GraduationCap
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const {
    setCurrentPage,
    siteSettings,
    rightsArticles,
    setSelectedArticle,
    impactStories,
    events,
    setSelectedEvent
  } = useData();

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0B1E36] text-white pt-12 pb-20 lg:pt-20 lg:pb-32">
        {/* Background authentic humanitarian photography overlay */}
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=2000&q=80"
            alt="Community gathering for legal literacy and rights awareness"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E36] via-[#0B1E36]/90 to-[#0B1E36]/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs sm:text-sm font-semibold border border-amber-500/30">
              <Scale className="w-4 h-4" />
              <span>Raphela Essi Rights Awareness Initiative</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-heading font-bold text-white tracking-tight leading-tight">
              YOUR RIGHTS MATTER.<br />
              <span className="text-amber-400">YOUR VOICE MATTERS.</span><br />
              YOUR DIGNITY MATTERS.
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Raphela Essi Rights Awareness Initiative works to promote human-rights awareness, empower communities, strengthen access to justice, and create pathways for people across Nigeria to understand and exercise their rights.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => setCurrentPage('know-your-rights')}
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0B1E36] font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-5 h-5 text-[#0B1E36]" />
                <span>KNOW YOUR RIGHTS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setCurrentPage('get-involved')}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 transition-all flex items-center gap-2 cursor-pointer backdrop-blur-xs"
              >
                <span>GET INVOLVED</span>
              </button>

              <button
                onClick={() => setCurrentPage('donate')}
                className="px-6 py-3.5 rounded-xl bg-[#0F766E] hover:bg-[#0D655E] text-white font-bold text-sm sm:text-base transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <HeartHandshake className="w-5 h-5 text-amber-300" />
                <span>SUPPORT OUR WORK</span>
              </button>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-300 border-t border-slate-700/60">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>100% Pro-Bono Education & Support Pathways</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-amber-400" />
                <span>Confidential Safeguarding Standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK ACTION SECTION (4 Highly Visible Action Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 lg:-mt-16 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card 1: Know Your Rights */}
          <div
            onClick={() => setCurrentPage('know-your-rights')}
            className="group p-6 rounded-2xl bg-white border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center mb-4 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#0B1E36] mb-1 group-hover:text-blue-900 transition-colors">
                KNOW YOUR RIGHTS
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Learn about your fundamental constitutional protections, police encounter guidelines, and tenant rights.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-900">
              <span>Explore Guides</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Get Help */}
          <div
            onClick={() => setCurrentPage('get-help')}
            className="group p-6 rounded-2xl bg-white border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#0B1E36] mb-1 group-hover:text-amber-700 transition-colors">
                GET HELP
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Find information about seeking free legal referral, verified helplines, and institutional protection desks.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-800">
              <span>Find Assistance</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Report a Concern */}
          <div
            onClick={() => setCurrentPage('get-help')}
            className="group p-6 rounded-2xl bg-white border border-red-200/80 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-900 flex items-center justify-center mb-4 group-hover:bg-red-700 group-hover:text-white transition-colors">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#0B1E36] mb-1 group-hover:text-red-700 transition-colors">
                REPORT A CONCERN
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Share a human-rights concern or abuse case securely and confidentially with optional anonymity.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-red-50 flex items-center justify-between text-xs font-bold text-red-700">
              <span>Confidential Intake</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Support Our Work */}
          <div
            onClick={() => setCurrentPage('donate')}
            className="group p-6 rounded-2xl bg-white border border-emerald-200/80 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center mb-4 group-hover:bg-[#0F766E] group-hover:text-white transition-colors">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#0B1E36] mb-1 group-hover:text-[#0F766E] transition-colors">
                SUPPORT OUR WORK
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Donate, volunteer, partner or sponsor a grassroots civic legal literacy clinic in local communities.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-50 flex items-center justify-between text-xs font-bold text-emerald-800">
              <span>Donate & Partner</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION (Who We Are, Mission, Vision & Core Values) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Who We Are</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#0B1E36] tracking-tight leading-tight">
              Championing Human Dignity, Justice & Community Power
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Raphela Essi Rights Awareness Initiative is a dedicated Nigerian Non-Governmental Organization (NGO) committed to educating people about their fundamental rights, strengthening access to justice, protecting vulnerable populations, and cultivating a culture of equality, accountability, and social responsibility.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <h4 className="font-bold text-sm text-[#0B1E36] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Our Vision</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A society where every individual understands their rights, lives with dignity, and has unfettered access to fair justice and social protection.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <h4 className="font-bold text-sm text-[#0B1E36] flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-blue-600" />
                  <span>Our Mission</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To demystify the law, advocate for marginalized voices, provide rapid referral support, and build resilient, educated communities.
                </p>
              </div>
            </div>

            <button
              onClick={() => setCurrentPage('about')}
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-900 hover:text-blue-700 pt-2 cursor-pointer"
            >
              <span>Read Our Full Story & Governance Structure</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-500">
              Our Core Institutional Values
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: 'Human Dignity', desc: 'Every life is inherently worthy.' },
                { name: 'Equality', desc: 'Equal protection for all persons.' },
                { name: 'Justice', desc: 'Uncompromised rule of law.' },
                { name: 'Integrity', desc: 'Ethical conduct and truth.' },
                { name: 'Inclusion', desc: 'Leaving no marginalized person behind.' },
                { name: 'Accountability', desc: 'Openness to the communities we serve.' },
                { name: 'Compassion', desc: 'Empathetic, survivor-first care.' },
                { name: 'Community Power', desc: 'Grassroots-led empowerment.' },
                { name: 'Transparency', desc: 'Clear reporting & governance.' }
              ].map((val, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-blue-400 transition-colors"
                >
                  <h5 className="font-bold text-xs text-[#0B1E36] leading-tight mb-1">{val.name}</h5>
                  <p className="text-[10px] text-slate-500 leading-tight">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR AREAS OF IMPACT (6 Thematic Columns) */}
      <section className="bg-slate-100/70 py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
              Core Pillars of Work
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#0B1E36]">
              Major Areas of Impact
            </h2>
            <p className="text-sm text-slate-600">
              Targeted, community-grounded interventions addressing systemic rights vulnerabilities across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: GraduationCap,
                title: 'HUMAN RIGHTS EDUCATION',
                desc: 'Translating constitutional provisions and statutory protections into vernacular languages and plain language guides so ordinary citizens know their rights.',
                color: 'blue'
              },
              {
                icon: Scale,
                title: 'ACCESS TO JUSTICE',
                desc: 'Promoting bail transparency, combating unlawful pre-trial detention, and connecting low-income citizens with verified pro-bono legal counsel.',
                color: 'amber'
              },
              {
                icon: Heart,
                title: 'WOMEN & GIRLS',
                desc: 'Advancing protection under the VAPP Act, supporting survivors of domestic abuse, and facilitating safe shelter and clinical support referrals.',
                color: 'rose'
              },
              {
                icon: Users,
                title: 'CHILDREN & YOUTH',
                desc: 'Enforcing the Child’s Rights Act, eliminating exploitative child labour, and training youth civic leaders for constructive democratic engagement.',
                color: 'emerald'
              },
              {
                icon: Building,
                title: 'COMMUNITY EMPOWERMENT',
                desc: 'Organizing grassroots town hall dialogues, paralegal desks, and empowering local leaders to resolve community disputes lawfully.',
                color: 'indigo'
              },
              {
                icon: Globe2,
                title: 'ADVOCACY & POLICY',
                desc: 'Publishing research briefs, engaging legislative institutions, and advocating for systemic police and judicial administrative reforms.',
                color: 'slate'
              }
            ].map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-xl bg-[#0B1E36] text-amber-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base text-[#0B1E36] tracking-tight">
                      {area.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                  <button
                    onClick={() => setCurrentPage('our-work')}
                    className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-blue-900 flex items-center gap-1 hover:text-blue-700 cursor-pointer"
                  >
                    <span>Learn more</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. IMPACT & METRICS SECTION (With transparent verification statement) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B1E36] text-white shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-700 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Measurable Social Impact
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-white mt-1">
                Our Reach Across Grassroots Communities
              </h2>
            </div>
            <div className="text-xs text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-700">
              <span className="text-amber-300 font-semibold">Verification Notice:</span> Metrics updated quarterly in our published annual reports.
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-sans">
                45+
              </div>
              <div className="font-bold text-sm text-slate-200">Communities Engaged</div>
              <p className="text-xs text-slate-400">Town halls and grassroots clinics across FCT, Nasarawa & Kaduna.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-sans">
                12,500+
              </div>
              <div className="font-bold text-sm text-slate-200">Citizens Reached</div>
              <p className="text-xs text-slate-400">Trained on bail rights, police stop-and-search, and VAPP Act.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-sans">
                180+
              </div>
              <div className="font-bold text-sm text-slate-200">Pro-Bono Referrals</div>
              <p className="text-xs text-slate-400">Cases assisted via NHRC, Legal Aid Council, and FIDA network.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-sans">
                15,000+
              </div>
              <div className="font-bold text-sm text-slate-200">Guides Distributed</div>
              <p className="text-xs text-slate-400">Free vernacular pocket handbooks given to market traders & youth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURED CAMPAIGN: "KNOW YOUR RIGHTS. SPEAK UP. SEEK HELP." */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 text-white p-8 sm:p-12 shadow-xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
                Featured Advocacy Campaign
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-white tracking-tight leading-tight">
                KNOW YOUR RIGHTS. SPEAK UP. SEEK HELP.
              </h2>
              <p className="text-sm sm:text-base text-amber-100 leading-relaxed max-w-2xl">
                A nationwide public awareness campaign dismantling fear and misinformation around police encounters, unlawful detention, and gender-based violence. Empowering citizens to stand on constitutional truth.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setCurrentPage('know-your-rights')}
                  className="px-6 py-3 rounded-xl bg-white text-[#0B1E36] font-bold text-sm shadow-md hover:bg-amber-50 transition-colors cursor-pointer"
                >
                  Explore Campaign Resources
                </button>
                <button
                  onClick={() => setCurrentPage('get-help')}
                  className="px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white font-bold text-sm border border-white/20 transition-colors cursor-pointer"
                >
                  Seek Confidential Help
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-md space-y-3">
              <h4 className="font-bold text-sm text-white">Campaign Milestone Target</h4>
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-amber-200">
                  <span>Educational Handbooks Distributed</span>
                  <span className="font-bold">75% (15,000 / 20,000)</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-black/30 overflow-hidden">
                  <div className="h-full bg-white rounded-full w-3/4" />
                </div>
              </div>
              <p className="text-[11px] text-amber-100 leading-tight">
                Targeting distribution across 50 regional transport parks, markets, and university campuses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. STORIES OF IMPACT (Safeguarded & Anonymized) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
              Real Lives Touched
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#0B1E36]">
              Stories of Restored Dignity
            </h2>
          </div>
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>Safeguarding Notice: Identifiers anonymized with consent.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {impactStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="p-6 space-y-3">
                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-blue-900">
                  {story.thematicArea}
                </span>
                <h3 className="font-bold text-base text-[#0B1E36] leading-snug">
                  {story.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{story.summary}"
                </p>
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200/60 text-xs text-emerald-900">
                  <strong>Outcome:</strong> {story.impactOutcome}
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>{story.location}</span>
                <span className="font-mono text-[11px]">{story.datePublished}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. UPCOMING EVENTS & TOWN HALLS */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                Community Engagement
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[#0B1E36]">
                Upcoming Legal Clinics & Town Halls
              </h2>
            </div>
            <button
              onClick={() => setCurrentPage('events')}
              className="text-xs font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
            >
              <span>View All Events</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                      {event.type}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      {event.rsvpCount} Registered
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-[#0B1E36] group-hover:text-blue-900 transition-colors leading-snug">
                    {event.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2">
                    {event.summary}
                  </p>

                  <div className="space-y-1 text-xs text-slate-500 pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-900">
                  <span>Free RSVP / Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TRUST, GOVERNANCE & TRANSPARENCY BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#0B1E36]">Governance & Compliance</h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Strict adherence to non-profit governance, financial transparency, and fiduciary oversight.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-900 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#0B1E36]">Survivor Safeguarding</h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Strict confidentiality and "Do No Harm" protocols for all vulnerable individuals.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-900 flex items-center justify-center shrink-0">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#0B1E36]">Partnership Network</h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Synergizing with NHRC, Legal Aid Council, FIDA, CSOs, and development agencies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
