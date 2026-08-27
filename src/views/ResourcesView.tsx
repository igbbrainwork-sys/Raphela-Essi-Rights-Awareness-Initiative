import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import {
  Download,
  FileText,
  BookOpen,
  Search,
  CheckCircle2,
  Globe,
  Sparkles,
  Shield,
  Layers
} from 'lucide-react';
import { ResourceItem } from '../types';

export const ResourcesView: React.FC = () => {
  const { resources, incrementDownload } = useData();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('all');

  const filteredResources = resources.filter((res) => {
    const matchesFormat = selectedFormat === 'all' || res.fileFormat.toLowerCase() === selectedFormat.toLowerCase();
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFormat && matchesSearch;
  });

  const handleDownload = (item: ResourceItem) => {
    incrementDownload(item.id);
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      {/* Top Banner */}
      <section className="bg-[#0B1E36] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Open Civic Knowledge Repository</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif-heading font-bold text-white tracking-tight">
            Resource Library, Toolkits & Legal Handbooks
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Free, printable human rights handbooks, paralegal training toolkits, policy research whitepapers, and simplified statutory cheat-sheets.
          </p>

          {/* Search bar */}
          <div className="max-w-xl pt-2">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search publications, toolkits, vernacular guides..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Format filter */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
          {['all', 'pdf', 'infographic', 'docx'].map((fmt) => (
            <button
              key={fmt}
              onClick={() => setSelectedFormat(fmt)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer capitalize ${
                selectedFormat === fmt
                  ? 'bg-blue-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {fmt === 'all' ? 'All Publications' : `${fmt.toUpperCase()} Documents`}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded bg-blue-50 text-blue-900 text-[11px] font-bold">
                    {res.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 font-medium">
                    {res.fileFormat} • {res.fileSize}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold text-base text-[#0B1E36] leading-snug">
                    {res.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {res.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-slate-400" />
                    <span>Languages: {res.language}</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Published: {res.publicationDate} • {res.downloadCount} Downloads
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Free Civic Access</span>
                </span>

                <button
                  onClick={() => handleDownload(res)}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-[#0B1E36] text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
