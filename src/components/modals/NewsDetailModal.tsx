import React from 'react';
import { useData } from '../../context/DataContext';
import {
  X,
  Calendar,
  Clock,
  User,
  Tag,
  Share2,
  Bookmark
} from 'lucide-react';

export const NewsDetailModal: React.FC = () => {
  const { selectedNewsArticle, setSelectedNewsArticle, addToast } = useData();

  if (!selectedNewsArticle) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: selectedNewsArticle.title,
        text: selectedNewsArticle.summary,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${selectedNewsArticle.title} - ${window.location.href}`);
      addToast('info', 'Link Copied', 'Article link copied to clipboard.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header with image */}
        <div className="relative h-64 sm:h-72 w-full bg-slate-900 shrink-0">
          <img
            src={selectedNewsArticle.imageUrl}
            alt={selectedNewsArticle.title}
            className="w-full h-full object-cover opacity-85"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

          <button
            onClick={() => setSelectedNewsArticle(null)}
            className="absolute top-4 right-4 text-white bg-slate-900/70 hover:bg-slate-900 p-2 rounded-full transition-colors cursor-pointer shadow-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-5 left-6 right-6 text-white space-y-2">
            <span className="inline-block px-2.5 py-1 rounded bg-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider">
              {selectedNewsArticle.category}
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif-heading font-bold text-white tracking-tight leading-snug">
              {selectedNewsArticle.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-amber-400" />
                {selectedNewsArticle.author} ({selectedNewsArticle.authorRole})
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-blue-400" />
                {selectedNewsArticle.publishedDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                {selectedNewsArticle.readingTime}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 flex-1 text-slate-800 text-sm sm:text-base leading-relaxed">
          <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-amber-500 text-slate-800 italic font-serif">
            "{selectedNewsArticle.summary}"
          </div>

          <div className="space-y-4 text-slate-700 leading-relaxed font-sans text-sm sm:text-[15px]">
            {selectedNewsArticle.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-slate-400" />
            {selectedNewsArticle.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <button
            onClick={handleShare}
            className="px-3.5 py-2 rounded-lg bg-white border border-slate-300 text-slate-700 text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs hover:bg-slate-100"
          >
            <Share2 className="w-4 h-4" />
            <span>Share Article</span>
          </button>
          <button
            onClick={() => setSelectedNewsArticle(null)}
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
