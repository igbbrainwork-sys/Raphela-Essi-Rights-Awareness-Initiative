import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { PageRoute } from '../../types';
import {
  Scale,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Heart,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Lock,
  Globe
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentPage, siteSettings, subscribeNewsletter } = useData();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterConsent, setNewsletterConsent] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterConsent) return;
    const success = subscribeNewsletter(newsletterEmail, '', ['General Updates', 'Legal Rights Bulletins']);
    if (success) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const handleNav = (route: PageRoute, targetId?: string) => {
    setCurrentPage(route, targetId);
  };

  return (
    <footer className="bg-[#0B1E36] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Community Alert Section */}
        <div className="bg-[#122844] rounded-2xl p-6 sm:p-8 mb-16 border border-slate-700/60 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 text-amber-300 text-xs font-semibold mb-3 border border-amber-500/20">
                <Mail className="w-3.5 h-3.5" />
                <span>Stay Informed & Empowered</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-white tracking-tight">
                Receive Human Rights & Legal Alerts
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Get notified of community legal clinics, simplified rights handbooks, advocacy campaigns, and citizen protections directly in your inbox.
              </p>
            </div>

            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="p-4 rounded-xl bg-emerald-900/40 border border-emerald-500/40 text-emerald-200 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <p className="text-sm font-medium">
                    Thank you! You are subscribed to Raphela Essi human rights updates.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      className="flex-1 px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                    />
                    <button
                      type="submit"
                      disabled={!newsletterConsent}
                      className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-[#0B1E36] font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                    >
                      <span>Subscribe</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <label className="flex items-start gap-2 text-xs text-slate-400 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={newsletterConsent}
                      onChange={(e) => setNewsletterConsent(e.target.checked)}
                      className="mt-0.5 rounded border-slate-700 text-amber-500 focus:ring-amber-400"
                    />
                    <span>
                      I agree to receive human-rights updates and educational materials. I understand I can unsubscribe anytime in line with the Nigeria Data Protection Act (NDPA).
                    </span>
                  </label>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* 4 Main Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: NGO Identity & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-[#0B1E36] font-bold shadow-md">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <span className="font-bold text-lg text-white tracking-tight block leading-none">
                  RAPHELA ESSI
                </span>
                <span className="text-xs text-amber-400 font-semibold">
                  Rights Awareness Initiative
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              A credible Nigerian Non-Governmental Organization committed to educating citizens about their fundamental rights, strengthening access to justice, protecting vulnerable populations, and advancing human dignity and equality.
            </p>

            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Statutory Registration & Transparency</span>
              </div>
              <p className="font-mono text-[10px] text-amber-300/80">
                CAC Status: {siteSettings.cacRegistrationNumber}
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links & Core Hubs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-sans">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Our Organization
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('our-work')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Thematic Areas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('programmes')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Programmes & Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('know-your-rights')}
                  className="hover:text-white transition-colors text-amber-300 font-semibold cursor-pointer flex items-center gap-1"
                >
                  <span>Know Your Rights Hub</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('news')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  News & Impact Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('events')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Events & Legal Clinics
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('resources')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Resource Library & Guides
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Get Involved & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-sans">
              Get Involved
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <button
                  onClick={() => handleNav('donate')}
                  className="hover:text-white transition-colors text-emerald-400 font-semibold cursor-pointer flex items-center gap-1"
                >
                  <Heart className="w-3.5 h-3.5" />
                  <span>Support / Donate</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('get-involved', 'volunteer-form')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Volunteer With Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('get-involved', 'partner-section')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Partner For Impact
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('get-involved')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Become a Youth Rights Advocate
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('get-help')}
                  className="hover:text-white transition-colors text-red-400 font-semibold cursor-pointer"
                >
                  Report a Rights Concern
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact Helpdesk
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Referral Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-sans">
              Headquarters & Desk
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{siteSettings.officeAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{siteSettings.phoneHotline}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{siteSettings.officialEmail}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono text-amber-300/90">{siteSettings.domain || 'rerai.org'}</span>
              </div>
              <div className="pt-2 text-[11px] text-slate-400 border-t border-slate-800">
                <p className="font-semibold text-slate-300">Office Hours:</p>
                <p>{siteSettings.officeHours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal, Safeguarding, Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span>© 2026 Raphela Essi Rights Awareness Initiative. All Rights Reserved.</span>
            <button
              onClick={() => handleNav('privacy-safeguarding', 'privacy')}
              className="hover:text-amber-300 transition-colors underline decoration-slate-600"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleNav('privacy-safeguarding', 'safeguarding')}
              className="hover:text-amber-300 transition-colors underline decoration-slate-600"
            >
              Safeguarding Policy
            </button>
            <button
              onClick={() => handleNav('privacy-safeguarding', 'terms')}
              className="hover:text-amber-300 transition-colors underline decoration-slate-600"
            >
              Terms of Use
            </button>
            <button
              onClick={() => handleNav('privacy-safeguarding', 'complaints')}
              className="hover:text-amber-300 transition-colors underline decoration-slate-600"
            >
              Complaints & Whistleblowing
            </button>
          </div>

          <div className="text-[11px] text-slate-400 text-center md:text-right max-w-md">
            <span className="text-amber-400/90 font-medium">Educational Disclaimer:</span> The materials on this website are for public rights awareness and civic education, not individualized legal advice.
          </div>
        </div>
      </div>
    </footer>
  );
};
