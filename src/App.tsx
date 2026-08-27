import React, { useEffect } from 'react';
import { DataProvider, useData } from './context/DataContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ToastContainer } from './components/common/ToastContainer';
import { QuickSafeExitButton } from './components/common/QuickSafeExitButton';

// Modals
import { RightsArticleModal } from './components/modals/RightsArticleModal';
import { EventDetailModal } from './components/modals/EventDetailModal';
import { NewsDetailModal } from './components/modals/NewsDetailModal';
import { DonationReceiptModal } from './components/modals/DonationReceiptModal';
import { ProgrammeDetailModal } from './components/modals/ProgrammeDetailModal';

// Views
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { OurWorkView } from './views/OurWorkView';
import { ProgrammesView } from './views/ProgrammesView';
import { KnowYourRightsView } from './views/KnowYourRightsView';
import { GetHelpView } from './views/GetHelpView';
import { NewsView } from './views/NewsView';
import { EventsView } from './views/EventsView';
import { ResourcesView } from './views/ResourcesView';
import { GetInvolvedView } from './views/GetInvolvedView';
import { DonateView } from './views/DonateView';
import { ContactView } from './views/ContactView';
import { LegalView } from './views/LegalView';
import { AdminView } from './views/AdminView';

const MainContent: React.FC = () => {
  const { currentPage, currentSubSection } = useData();

  // Scroll to top on page route switch
  useEffect(() => {
    if (currentSubSection) {
      const element = document.getElementById(currentSubSection);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, currentSubSection]);

  const renderView = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView />;
      case 'about':
        return <AboutView />;
      case 'our-work':
        return <OurWorkView />;
      case 'programmes':
        return <ProgrammesView />;
      case 'know-your-rights':
        return <KnowYourRightsView />;
      case 'get-help':
        return <GetHelpView />;
      case 'news':
        return <NewsView />;
      case 'events':
        return <EventsView />;
      case 'resources':
        return <ResourcesView />;
      case 'get-involved':
        return <GetInvolvedView />;
      case 'donate':
        return <DonateView />;
      case 'contact':
        return <ContactView />;
      case 'privacy-safeguarding':
        return <LegalView />;
      case 'admin':
        return <AdminView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFBF8] text-slate-900 font-sans antialiased selection:bg-amber-200 selection:text-slate-900">
      <Header />
      <main className="flex-1 w-full">
        {renderView()}
      </main>
      <Footer />

      {/* Global Modals */}
      <RightsArticleModal />
      <EventDetailModal />
      <NewsDetailModal />
      <DonationReceiptModal />
      <ProgrammeDetailModal />

      {/* Toast Notifications */}
      <ToastContainer />

      {/* Floating Quick Safe Exit Emergency Button */}
      <QuickSafeExitButton variant="floating" />
    </div>
  );
};

export default function App() {
  return (
    <DataProvider>
      <MainContent />
    </DataProvider>
  );
}
