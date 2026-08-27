import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import {
  Layers,
  MapPin,
  Calendar,
  CheckCircle2,
  Users,
  Target,
  ArrowRight,
  Filter,
  Sparkles,
  Lock
} from 'lucide-react';

export const ProgrammesView: React.FC = () => {
  const { programmes, setSelectedProgramme, impactStories, setSelectedStory, setCurrentPage } = useData();
  const [filterType, setFilterType] = useState<string>('all');

  const filteredProgrammes = programmes.filter((prog) => {
    if (filterType === 'all') return true;
    return prog.type === filterType;
  });

  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      {/* Header Banner */}
      <section className="bg-[#0B1E36] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
            Impact in Action
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white tracking-tight">
            Programmes, Projects & Community Interventions
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Explore our active field initiatives, completed access-to-justice projects, youth fellowships, and real-life community transformation stories.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Filter By Programme Type:
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Interventions' },
              { id: 'current-project', label: 'Active Projects' },
              { id: 'completed-project', label: 'Completed Projects' },
              { id: 'community-intervention', label: 'Community Clinics' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  filterType === tab.id
                    ? 'bg-[#0B1E36] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {filteredProgrammes.map((prog) => (
            <div
              key={prog.id}
              onClick={() => setSelectedProgramme(prog)}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <img
                  src={prog.imageUrl}
                  alt={prog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0B1E36]/90 text-amber-300 backdrop-blur-xs">
                    {prog.thematicArea}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      prog.status === 'Active'
                        ? 'bg-emerald-700 text-white'
                        : 'bg-slate-700 text-slate-200'
                    }`}
                  >
                    {prog.status}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-red-500" />
                    <span>{prog.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1E36] group-hover:text-blue-900 transition-colors leading-snug">
                    {prog.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {prog.summary}
                  </p>
                </div>

                {prog.impactHighlight && (
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 font-medium mt-3">
                    <strong>Milestone:</strong> {prog.impactHighlight}
                  </div>
                )}
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-900">
                <span>View Strategic Objectives & Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stories of Impact Section */}
      <section className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                Survivor-Centered Testimonies
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif-heading font-bold text-[#0B1E36]">
                Stories of Restored Dignity & Justice
              </h2>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
              <Lock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Full Safeguarding Protocol: All names anonymized with informed consent.</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {impactStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between"
              >
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-blue-50 text-blue-900">
                      {story.thematicArea}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">{story.datePublished}</span>
                  </div>

                  <h3 className="font-bold text-base text-[#0B1E36] leading-snug">
                    {story.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "{story.summary}"
                  </p>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans">
                    {story.fullStory}
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200/80 text-xs text-emerald-900">
                    <strong>Intervention Outcome:</strong> {story.impactOutcome}
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-red-500" />
                    {story.location}
                  </span>
                  <span className="font-semibold text-emerald-700">Consent Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-2xl font-serif-heading font-bold text-[#0B1E36]">
          Want to Sponsor a Community Outreach in Your State?
        </h3>
        <p className="text-sm text-slate-600 max-w-xl mx-auto">
          We work with diaspora associations, community development unions, and foundations to bring free legal clinics directly to underserved localities.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <button
            onClick={() => setCurrentPage('get-involved')}
            className="px-6 py-3 rounded-xl bg-[#0B1E36] hover:bg-slate-800 text-white font-bold text-sm cursor-pointer shadow-md"
          >
            Partner With Our Team
          </button>
          <button
            onClick={() => setCurrentPage('donate')}
            className="px-6 py-3 rounded-xl bg-[#0F766E] hover:bg-[#0D655E] text-white font-bold text-sm cursor-pointer shadow-md"
          >
            Donate to Outreach Fund
          </button>
        </div>
      </section>
    </div>
  );
};
