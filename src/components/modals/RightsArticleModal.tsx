import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import {
  X,
  Scale,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  HelpCircle,
  Share2,
  Printer,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  FileText
} from 'lucide-react';

export const RightsArticleModal: React.FC = () => {
  const { selectedArticle, setSelectedArticle, setCurrentPage, addToast } = useData();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  if (!selectedArticle) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: selectedArticle.title,
        text: selectedArticle.summary,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${selectedArticle.title} - ${window.location.href}`);
      addToast('info', 'Link Copied', 'Guide summary and link copied to clipboard.');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#0B1E36] text-white p-6 sm:p-8 relative shrink-0">
          <button
            onClick={() => setSelectedArticle(null)}
            className="absolute top-5 right-5 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 p-2 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            <Scale className="w-4 h-4" />
            <span>{selectedArticle.categoryLabel}</span>
            <span>•</span>
            <span>{selectedArticle.readTime}</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif-heading font-bold text-white tracking-tight leading-snug">
            {selectedArticle.title}
          </h2>

          <div className="mt-3 flex items-center gap-2 text-xs text-slate-300 bg-slate-900/50 p-2.5 rounded-lg border border-slate-700/60 inline-flex max-w-full">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="truncate">
              <strong>Statutory Legal Basis:</strong> {selectedArticle.legalBasis}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 text-slate-800 text-sm leading-relaxed">
          {/* Summary */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-amber-950 font-medium">
            <p className="text-sm sm:text-base leading-relaxed">{selectedArticle.summary}</p>
          </div>

          {/* Section 1: What You Should Know */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center font-bold text-xs">
                1
              </div>
              <h3 className="text-lg font-bold text-[#0B1E36]">What You Should Know (Your Rights)</h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {selectedArticle.whatYouShouldKnow.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-slate-700 font-medium text-xs sm:text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: What You Can Do (Actionable Steps) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xs">
                2
              </div>
              <h3 className="text-lg font-bold text-[#0B1E36]">What You Can Do (Step-by-Step Actions)</h3>
            </div>
            <div className="space-y-2.5">
              {selectedArticle.whatYouCanDo.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-200">
                  <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-slate-700 text-xs sm:text-sm leading-normal">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Where To Get Help */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-xs">
                3
              </div>
              <h3 className="text-lg font-bold text-[#0B1E36]">Where To Get Help (Verified Contacts)</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedArticle.whereToGetHelp.map((agency, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900 text-white border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-emerald-400" />
                    <h4 className="font-bold text-sm text-white">{agency.agency}</h4>
                  </div>
                  <p className="text-xs font-mono text-amber-300 bg-slate-800/80 px-2 py-1 rounded inline-block">
                    {agency.contact}
                  </p>
                  <p className="text-xs text-slate-300 leading-snug">{agency.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs Accordion */}
          {selectedArticle.faqs.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-[#0B1E36] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-blue-700" />
                <span>Frequently Asked Questions</span>
              </h3>
              <div className="space-y-2">
                {selectedArticle.faqs.map((faq, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-3.5 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold text-slate-800"
                    >
                      <span>{faq.question}</span>
                      {openFaqIndex === idx ? (
                        <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                      )}
                    </button>
                    {openFaqIndex === idx && (
                      <div className="p-4 bg-white text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Important Educational Disclaimer */}
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-300/80 flex items-start gap-3 text-xs text-slate-600">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p>
              <strong>Notice & Disclaimer:</strong> The information provided in this educational guide is prepared by Raphela Essi Rights Awareness Initiative for general civic enlightenment and constitutional awareness. It does not constitute formal individualized legal representation. For specific criminal defence or civil proceedings, consult a qualified legal practitioner or reach out to our referral helpdesk.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="px-3.5 py-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Guide</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-lg bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setSelectedArticle(null);
                setCurrentPage('get-help');
              }}
              className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Report a Related Concern</span>
            </button>
            <button
              onClick={() => setSelectedArticle(null)}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
