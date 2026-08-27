import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import {
  Scale,
  Search,
  BookOpen,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  AlertCircle,
  HelpCircle,
  Sparkles,
  FileText
} from 'lucide-react';
import { RightsCategory } from '../types';

export const KnowYourRightsView: React.FC = () => {
  const { rightsArticles, setSelectedArticle, setCurrentPage } = useData();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories: { id: string; label: string }[] = [
    { id: 'all', label: 'All Legal Guides' },
    { id: 'arrest-police', label: 'Police & Stop-and-Search' },
    { id: 'bail-detention', label: 'Bail & Custodial Detention' },
    { id: 'domestic-violence', label: 'Domestic Abuse & VAPP Act' },
    { id: 'tenant-rights', label: 'Tenancy & Housing Eviction' },
    { id: 'child-rights', label: 'Child Rights & Child Labour' },
    { id: 'data-privacy', label: 'Digital Privacy & Loan Apps (NDPA)' },
    { id: 'workplace-rights', label: 'Labor & Workplace Protection' }
  ];

  const filteredArticles = rightsArticles.filter((art) => {
    const matchesCategory = selectedCategory === 'all' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.legalBasis.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.keywords.some((kw) => kw.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-14 sm:space-y-20 pb-20">
      {/* Top Banner */}
      <section className="bg-[#0B1E36] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
            <Scale className="w-3.5 h-3.5" />
            <span>Public Legal Education Hub</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white tracking-tight">
            KNOW YOUR RIGHTS: Plain Language Legal Handbooks
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Demystifying Nigerian law so ordinary citizens can stand on constitutional truth. Clear, statutory-backed guides on police encounters, bail, domestic protection, tenant defense, and data privacy.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl pt-2">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search rights by topic (e.g. 'bail is free', 'search phone', 'landlord notice', 'loan apps')..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-900 placeholder-slate-500 text-sm shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills & Quick Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 pb-3 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-blue-900 text-white shadow-sm ring-1 ring-blue-700'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-2.5 py-1 rounded bg-amber-50 text-amber-900 font-bold text-[11px] border border-amber-200">
                    {article.categoryLabel}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">
                    {article.readTime}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-[#0B1E36] group-hover:text-blue-900 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>

                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-[11px] text-slate-700 flex items-start gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="line-clamp-2">
                    <strong>Law:</strong> {article.legalBasis}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-900">
                <span>Read Full Step-by-Step Guide</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="p-12 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
            <HelpCircle className="w-10 h-10 text-slate-400 mx-auto" />
            <h4 className="font-bold text-base text-slate-700">No matching rights guides found</h4>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              We could not find an educational guide matching your query. Try different keywords or contact our legal inquiry desk.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 rounded-lg bg-blue-900 text-white text-xs font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Quick Rights Rules Reference Strip (Essential cheat-sheet) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-[#0B1E36] text-white space-y-6 shadow-xl">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Pocket Rights Cheat-Sheet
            </span>
            <h2 className="text-xl sm:text-2xl font-serif-heading font-bold text-white">
              3 Golden Rules Every Citizen Must Memorize
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase font-mono">Rule 1 • Police Encounters</span>
              <h4 className="font-bold text-sm text-white">No Arbitrary Phone Searches</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Section 37 of the 1999 Constitution guarantees privacy. Police officers cannot randomly search your smartphone, banking apps, or chats without a formal search warrant.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-emerald-400 uppercase font-mono">Rule 2 • Bail at Police Stations</span>
              <h4 className="font-bold text-sm text-white">Bail is Statutorily Free</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Section 62 of Police Act 2020 explicitly forbids demanding or collecting money for bail. Demanding cash for administrative bail is an illegal extortion offense.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <span className="text-xs font-bold text-rose-400 uppercase font-mono">Rule 3 • Right to Legal Representation</span>
              <h4 className="font-bold text-sm text-white">Right to Remain Silent</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Section 35(2) of Constitution guarantees your right to remain silent until your lawyer or representative is physically present during any statement writing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Need Immediate Assistance Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-bold text-lg text-amber-950">
              Facing an Active Human-Rights Violation?
            </h3>
            <p className="text-xs sm:text-sm text-amber-900">
              Submit a confidential incident intake or contact our pro-bono referral partner directory.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setCurrentPage('get-help')}
              className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-md flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Report Incident / Get Help</span>
            </button>
            <button
              onClick={() => setCurrentPage('resources')}
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-amber-100/50 text-slate-800 font-bold text-xs sm:text-sm border border-amber-300 cursor-pointer"
            >
              Download PDF Handbooks
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
