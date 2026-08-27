import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { PageRoute } from '../../types';
import { QuickSafeExitButton } from '../common/QuickSafeExitButton';
import {
  Scale,
  Menu,
  X,
  ChevronDown,
  PhoneCall,
  Shield,
  HeartHandshake,
  AlertCircle,
  Lock,
  BookOpen,
  Users,
  Briefcase,
  Layers,
  FileText,
  Calendar,
  Sparkles
} from 'lucide-react';

export const Header: React.FC = () => {
  const { currentPage, setCurrentPage, siteSettings, currentUser } = useData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [workDropdown, setWorkDropdown] = useState(false);

  const handleNav = (route: PageRoute, targetId?: string) => {
    setCurrentPage(route, targetId);
    setMobileMenuOpen(false);
    setAboutDropdown(false);
    setWorkDropdown(false);
  };

  const isActive = (route: PageRoute) => currentPage === route;

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Banner: Emergency Helpline, Quick Safe Exit & Trust Notice */}
      <div className="bg-[#0B1E36] text-slate-200 text-xs px-4 py-1.5 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="hidden md:flex items-center gap-1.5 text-amber-300 font-medium">
              <Scale className="w-3.5 h-3.5" />
              <span>{siteSettings.tagline}</span>
            </span>
            <div className="flex items-center gap-1 text-slate-300">
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-medium text-slate-200">Helpline:</span>
              <a href="tel:6472" className="hover:text-emerald-400 font-semibold underline decoration-emerald-500/40">
                NHRC 6472 (Toll-Free)
              </a>
              <span className="text-slate-500 hidden sm:inline">|</span>
              <span className="hidden sm:inline text-slate-300">Rapid Desk: {siteSettings.supportEmail}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            {/* Admin Portal quick link */}
            <button
              onClick={() => handleNav('admin')}
              className={`flex items-center gap-1 text-[11px] px-2 py-0.5 rounded transition-colors ${
                currentUser
                  ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-700/50'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Restricted Staff & Admin Portal"
            >
              <Lock className="w-3 h-3" />
              <span>{currentUser ? `${currentUser.role.split(' ')[0]}` : 'Staff Portal'}</span>
            </button>

            {/* Quick Safe Exit button */}
            <QuickSafeExitButton />
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
            aria-label="Raphela Essi Rights Awareness Initiative Home"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B1E36] to-[#1E3A8A] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200 border border-blue-900/30">
              <Scale className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base sm:text-lg tracking-tight text-[#0B1E36] leading-none group-hover:text-blue-900 transition-colors">
                  RAPHELA ESSI
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200/60">
                  NGO
                </span>
              </div>
              <p className="text-[11px] sm:text-xs font-semibold text-slate-600 tracking-normal leading-tight mt-0.5">
                Rights Awareness Initiative
              </p>
              <p className="text-[9px] text-slate-500 font-medium hidden md:block">
                Advocacy • Justice • Protection • Empowerment
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-[13.5px] font-medium text-slate-700">
            {/* Home */}
            <button
              onClick={() => handleNav('home')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                isActive('home')
                  ? 'text-[#0B1E36] font-bold bg-slate-100'
                  : 'hover:text-[#0B1E36] hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            {/* About Us Dropdown */}
            <div className="relative" onMouseLeave={() => setAboutDropdown(false)}>
              <button
                onClick={() => handleNav('about')}
                onMouseEnter={() => setAboutDropdown(true)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                  isActive('about')
                    ? 'text-[#0B1E36] font-bold bg-slate-100'
                    : 'hover:text-[#0B1E36] hover:bg-slate-50'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {aboutDropdown && (
                <div className="absolute top-full left-0 w-60 py-2 bg-white rounded-xl shadow-xl border border-slate-100 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => handleNav('about', 'who-we-are')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-[#0B1E36] text-xs font-medium flex items-center gap-2"
                  >
                    <Users className="w-3.5 h-3.5 text-blue-600" />
                    <span>Who We Are & Our Story</span>
                  </button>
                  <button
                    onClick={() => handleNav('about', 'vision-values')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-[#0B1E36] text-xs font-medium flex items-center gap-2"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Vision, Mission & Core Values</span>
                  </button>
                  <button
                    onClick={() => handleNav('about', 'leadership')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-[#0B1E36] text-xs font-medium flex items-center gap-2"
                  >
                    <Briefcase className="w-3.5 h-3.5 text-slate-600" />
                    <span>Board & Advisory Leadership</span>
                  </button>
                  <button
                    onClick={() => handleNav('about', 'governance')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-[#0B1E36] text-xs font-medium flex items-center gap-2"
                  >
                    <Shield className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Governance & Transparency</span>
                  </button>
                </div>
              )}
            </div>

            {/* Our Work Dropdown */}
            <div className="relative" onMouseLeave={() => setWorkDropdown(false)}>
              <button
                onClick={() => handleNav('our-work')}
                onMouseEnter={() => setWorkDropdown(true)}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                  isActive('our-work')
                    ? 'text-[#0B1E36] font-bold bg-slate-100'
                    : 'hover:text-[#0B1E36] hover:bg-slate-50'
                }`}
              >
                <span>Our Work</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>

              {workDropdown && (
                <div className="absolute top-full left-0 w-64 py-2 bg-white rounded-xl shadow-xl border border-slate-100 animate-in fade-in slide-in-from-top-2 duration-150">
                  <button
                    onClick={() => handleNav('our-work', 'work-human-rights')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium"
                  >
                    Human Rights Education
                  </button>
                  <button
                    onClick={() => handleNav('our-work', 'work-access-justice')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium"
                  >
                    Access to Justice & Bail Rights
                  </button>
                  <button
                    onClick={() => handleNav('our-work', 'work-women-girls')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium"
                  >
                    Women & Girls Protection (VAPP)
                  </button>
                  <button
                    onClick={() => handleNav('our-work', 'work-children-youth')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium"
                  >
                    Children & Youth Rights
                  </button>
                  <button
                    onClick={() => handleNav('our-work', 'work-community-empowerment')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 text-xs font-medium"
                  >
                    Grassroots Community Empowerment
                  </button>
                </div>
              )}
            </div>

            {/* Programmes & Projects */}
            <button
              onClick={() => handleNav('programmes')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                isActive('programmes')
                  ? 'text-[#0B1E36] font-bold bg-slate-100'
                  : 'hover:text-[#0B1E36] hover:bg-slate-50'
              }`}
            >
              Programmes & Projects
            </button>

            {/* KNOW YOUR RIGHTS HUB (Highlighted Primary Hub) */}
            <button
              onClick={() => handleNav('know-your-rights')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-all cursor-pointer ${
                isActive('know-your-rights')
                  ? 'bg-blue-900 text-white font-semibold shadow-xs'
                  : 'text-blue-900 bg-blue-50/90 hover:bg-blue-100/90 font-semibold'
              }`}
            >
              <BookOpen className="w-4 h-4 text-amber-500" />
              <span>Know Your Rights</span>
            </button>

            {/* News & Stories */}
            <button
              onClick={() => handleNav('news')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                isActive('news')
                  ? 'text-[#0B1E36] font-bold bg-slate-100'
                  : 'hover:text-[#0B1E36] hover:bg-slate-50'
              }`}
            >
              News & Stories
            </button>

            {/* Events */}
            <button
              onClick={() => handleNav('events')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                isActive('events')
                  ? 'text-[#0B1E36] font-bold bg-slate-100'
                  : 'hover:text-[#0B1E36] hover:bg-slate-50'
              }`}
            >
              Events
            </button>

            {/* Resources */}
            <button
              onClick={() => handleNav('resources')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                isActive('resources')
                  ? 'text-[#0B1E36] font-bold bg-slate-100'
                  : 'hover:text-[#0B1E36] hover:bg-slate-50'
              }`}
            >
              Resources
            </button>

            {/* Get Involved */}
            <button
              onClick={() => handleNav('get-involved')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                isActive('get-involved')
                  ? 'text-[#0B1E36] font-bold bg-slate-100'
                  : 'hover:text-[#0B1E36] hover:bg-slate-50'
              }`}
            >
              Get Involved
            </button>
          </nav>

          {/* Action CTAs: Report a Concern & Donate */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              onClick={() => handleNav('get-help')}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 transition-colors cursor-pointer"
            >
              <AlertCircle className="w-3.5 h-3.5 text-red-600" />
              <span>Get Help / Report</span>
            </button>

            <button
              onClick={() => handleNav('donate')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#0F766E] hover:bg-[#0D655E] shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <HeartHandshake className="w-4 h-4 text-amber-300" />
              <span>Support Our Work</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleNav('get-help')}
              className="px-2.5 py-1.5 rounded-md text-[11px] font-bold text-red-700 bg-red-50 border border-red-200"
            >
              Get Help
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            <button
              onClick={() => handleNav('know-your-rights')}
              className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-blue-50 text-blue-900 font-bold text-xs"
            >
              <BookOpen className="w-4 h-4 text-blue-700" />
              <span>Rights Hub</span>
            </button>
            <button
              onClick={() => handleNav('donate')}
              className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-emerald-600 text-white font-bold text-xs"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Support / Donate</span>
            </button>
          </div>

          <div className="space-y-1 text-sm font-medium text-slate-700">
            <button
              onClick={() => handleNav('home')}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50"
            >
              Home
            </button>
            <button
              onClick={() => handleNav('about')}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50"
            >
              About Us (Mission, Story & Leadership)
            </button>
            <button
              onClick={() => handleNav('our-work')}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50"
            >
              Our Work & Thematic Focus Areas
            </button>
            <button
              onClick={() => handleNav('programmes')}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50"
            >
              Programmes, Projects & Campaigns
            </button>
            <button
              onClick={() => handleNav('get-help')}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-red-50 text-red-700 font-semibold"
            >
              Get Help / Report a Rights Concern
            </button>
            <button
              onClick={() => handleNav('news')}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50"
            >
              News & Community Stories
            </button>
            <button
              onClick={() => handleNav('events')}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50"
            >
              Events & Community Outreaches
            </button>
            <button
              onClick={() => handleNav('resources')}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50"
            >
              Resource Library & Handbooks
            </button>
            <button
              onClick={() => handleNav('get-involved')}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50"
            >
              Get Involved (Volunteer & Partner)
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50"
            >
              Contact Us & Office Directory
            </button>
            <button
              onClick={() => handleNav('privacy-safeguarding')}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-slate-50 text-slate-500 text-xs"
            >
              Safeguarding, Privacy & Whistleblowing
            </button>
            <button
              onClick={() => handleNav('admin')}
              className="w-full text-left px-3 py-2 rounded-md bg-slate-900 text-slate-200 text-xs font-semibold mt-2"
            >
              Staff / Admin Portal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
