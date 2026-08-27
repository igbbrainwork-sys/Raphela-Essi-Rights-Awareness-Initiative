import React from 'react';
import { useData } from '../../context/DataContext';
import {
  X,
  MapPin,
  Users,
  Target,
  CheckCircle2,
  Calendar,
  Layers,
  HeartHandshake
} from 'lucide-react';

export const ProgrammeDetailModal: React.FC = () => {
  const { selectedProgramme, setSelectedProgramme, setCurrentPage } = useData();

  if (!selectedProgramme) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header image */}
        <div className="relative h-60 sm:h-72 w-full bg-slate-900 shrink-0">
          <img
            src={selectedProgramme.imageUrl}
            alt={selectedProgramme.title}
            className="w-full h-full object-cover opacity-85"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          <button
            onClick={() => setSelectedProgramme(null)}
            className="absolute top-4 right-4 text-white bg-slate-900/80 hover:bg-slate-900 p-2 rounded-full cursor-pointer shadow-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 left-6 right-6 text-white space-y-2">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-600 text-white">
              {selectedProgramme.thematicArea} • {selectedProgramme.status}
            </span>
            <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-white tracking-tight leading-snug">
              {selectedProgramme.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {selectedProgramme.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                Started {selectedProgramme.startDate}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-800 text-sm leading-relaxed">
          <div>
            <h3 className="font-bold text-base text-[#0B1E36] mb-2">Programme Overview</h3>
            <p className="text-slate-700 leading-relaxed">{selectedProgramme.fullDescription}</p>
          </div>

          {/* Key Beneficiaries & Highlight */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="flex items-center gap-2 text-blue-900 font-bold text-xs uppercase tracking-wider">
                <Users className="w-4 h-4 text-blue-600" />
                <span>Target Beneficiaries</span>
              </div>
              <p className="text-xs text-slate-700 font-medium">{selectedProgramme.targetBeneficiaries}</p>
            </div>

            {selectedProgramme.impactHighlight && (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/80 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
                  <Target className="w-4 h-4 text-amber-700" />
                  <span>Impact Milestone</span>
                </div>
                <p className="text-xs text-amber-950 font-medium">{selectedProgramme.impactHighlight}</p>
              </div>
            )}
          </div>

          {/* Goals */}
          {selectedProgramme.goals && selectedProgramme.goals.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-[#0B1E36]">Core Strategic Objectives</h4>
              <div className="space-y-2">
                {selectedProgramme.goals.map((goal, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-700">{goal}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <button
            onClick={() => {
              setSelectedProgramme(null);
              setCurrentPage('donate');
            }}
            className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <HeartHandshake className="w-4 h-4 text-amber-300" />
            <span>Support This Project</span>
          </button>

          <button
            onClick={() => setSelectedProgramme(null)}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
