import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  PageRoute,
  RightsArticle,
  ProgrammeProject,
  ImpactStory,
  ArticlePost,
  EventItem,
  EventRegistration,
  ResourceItem,
  VolunteerApplication,
  DonationRecord,
  LeadershipProfile,
  ReferralAgency,
  SiteSettings,
  SupportRequest,
  CaseStatus,
  NewsletterSubscriber
} from '../types';
import {
  INITIAL_SITE_SETTINGS,
  INITIAL_RIGHTS_ARTICLES,
  INITIAL_PROGRAMMES,
  INITIAL_IMPACT_STORIES,
  INITIAL_ARTICLES,
  INITIAL_EVENTS,
  INITIAL_RESOURCES,
  INITIAL_LEADERSHIP,
  INITIAL_REFERRAL_AGENCIES,
  INITIAL_SUPPORT_REQUESTS,
  INITIAL_DONATIONS,
  INITIAL_VOLUNTEERS
} from '../data/initialData';

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'Super Admin' | 'Legal / Case Officer' | 'Communications Lead';
}

interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  message: string;
}

interface DataContextType {
  currentPage: PageRoute;
  setCurrentPage: (page: PageRoute, targetId?: string) => void;
  targetAnchor?: string;
  
  // Site Settings
  siteSettings: SiteSettings;
  updateSiteSettings: (settings: Partial<SiteSettings>) => void;

  // Rights Articles
  rightsArticles: RightsArticle[];
  selectedArticle: RightsArticle | null;
  setSelectedArticle: (art: RightsArticle | null) => void;
  addRightsArticle: (art: Omit<RightsArticle, 'id'>) => void;
  updateRightsArticle: (id: string, art: Partial<RightsArticle>) => void;
  deleteRightsArticle: (id: string) => void;

  // Support Requests / Cases
  supportRequests: SupportRequest[];
  submitSupportRequest: (data: Omit<SupportRequest, 'id' | 'ticketCode' | 'status' | 'submittedAt' | 'updatedAt' | 'internalNotes'>) => string;
  updateCaseStatus: (caseId: string, status: CaseStatus) => void;
  assignStaffToCase: (caseId: string, staffName: string) => void;
  addCaseNote: (caseId: string, note: string) => void;

  // Programmes & Projects
  programmes: ProgrammeProject[];
  selectedProgramme: ProgrammeProject | null;
  setSelectedProgramme: (prog: ProgrammeProject | null) => void;
  addProgramme: (prog: Omit<ProgrammeProject, 'id'>) => void;
  updateProgramme: (id: string, prog: Partial<ProgrammeProject>) => void;

  // Impact Stories
  impactStories: ImpactStory[];
  selectedStory: ImpactStory | null;
  setSelectedStory: (story: ImpactStory | null) => void;

  // News & Articles
  articles: ArticlePost[];
  selectedNewsArticle: ArticlePost | null;
  setSelectedNewsArticle: (art: ArticlePost | null) => void;
  addNewsArticle: (art: Omit<ArticlePost, 'id' | 'publishedDate'>) => void;
  deleteNewsArticle: (id: string) => void;

  // Events & Registration
  events: EventItem[];
  selectedEvent: EventItem | null;
  setSelectedEvent: (event: EventItem | null) => void;
  eventRegistrations: EventRegistration[];
  registerForEvent: (eventId: string, fullName: string, email: string, phone: string, org?: string) => boolean;
  addEvent: (event: Omit<EventItem, 'id' | 'rsvpCount'>) => void;

  // Resources
  resources: ResourceItem[];
  incrementDownload: (resourceId: string) => void;
  addResource: (res: Omit<ResourceItem, 'id' | 'downloadCount' | 'publicationDate'>) => void;

  // Volunteers
  volunteers: VolunteerApplication[];
  submitVolunteerApplication: (data: Omit<VolunteerApplication, 'id' | 'appliedAt' | 'status'>) => void;
  updateVolunteerStatus: (id: string, status: VolunteerApplication['status']) => void;

  // Donations
  donations: DonationRecord[];
  activeReceipt: DonationRecord | null;
  setActiveReceipt: (receipt: DonationRecord | null) => void;
  processDonation: (data: Omit<DonationRecord, 'id' | 'transactionRef' | 'status' | 'timestamp' | 'receiptNumber'>) => DonationRecord;

  // Leadership & Referrals
  leadership: LeadershipProfile[];
  referralAgencies: ReferralAgency[];

  // Newsletter
  subscribers: NewsletterSubscriber[];
  subscribeNewsletter: (email: string, name?: string, topics?: string[]) => boolean;

  // Admin Auth
  currentUser: AdminUser | null;
  loginAdmin: (role?: 'Super Admin' | 'Legal / Case Officer' | 'Communications Lead') => void;
  logoutAdmin: () => void;

  // Toast notifications
  toasts: ToastMessage[];
  addToast: (type: ToastMessage['type'], title: string, message: string) => void;
  removeToast: (id: string) => void;

  // Quick Safe Exit (for victims)
  triggerQuickSafeExit: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPageState] = useState<PageRoute>('home');
  const [targetAnchor, setTargetAnchor] = useState<string | undefined>(undefined);

  // Load from local storage or defaults
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem('raphela_settings');
    return saved ? JSON.parse(saved) : INITIAL_SITE_SETTINGS;
  });

  const [rightsArticles, setRightsArticles] = useState<RightsArticle[]>(() => {
    const saved = localStorage.getItem('raphela_rights_articles');
    return saved ? JSON.parse(saved) : INITIAL_RIGHTS_ARTICLES;
  });

  const [selectedArticle, setSelectedArticle] = useState<RightsArticle | null>(null);

  const [supportRequests, setSupportRequests] = useState<SupportRequest[]>(() => {
    const saved = localStorage.getItem('raphela_cases');
    return saved ? JSON.parse(saved) : INITIAL_SUPPORT_REQUESTS;
  });

  const [programmes, setProgrammes] = useState<ProgrammeProject[]>(() => {
    const saved = localStorage.getItem('raphela_programmes');
    return saved ? JSON.parse(saved) : INITIAL_PROGRAMMES;
  });

  const [selectedProgramme, setSelectedProgramme] = useState<ProgrammeProject | null>(null);
  const [impactStories] = useState<ImpactStory[]>(INITIAL_IMPACT_STORIES);
  const [selectedStory, setSelectedStory] = useState<ImpactStory | null>(null);

  const [articles, setArticles] = useState<ArticlePost[]>(() => {
    const saved = localStorage.getItem('raphela_articles');
    return saved ? JSON.parse(saved) : INITIAL_ARTICLES;
  });
  const [selectedNewsArticle, setSelectedNewsArticle] = useState<ArticlePost | null>(null);

  const [events, setEvents] = useState<EventItem[]>(() => {
    const saved = localStorage.getItem('raphela_events');
    return saved ? JSON.parse(saved) : INITIAL_EVENTS;
  });
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const [eventRegistrations, setEventRegistrations] = useState<EventRegistration[]>(() => {
    const saved = localStorage.getItem('raphela_event_rsvps');
    return saved ? JSON.parse(saved) : [];
  });

  const [resources, setResources] = useState<ResourceItem[]>(() => {
    const saved = localStorage.getItem('raphela_resources');
    return saved ? JSON.parse(saved) : INITIAL_RESOURCES;
  });

  const [volunteers, setVolunteers] = useState<VolunteerApplication[]>(() => {
    const saved = localStorage.getItem('raphela_volunteers');
    return saved ? JSON.parse(saved) : INITIAL_VOLUNTEERS;
  });

  const [donations, setDonations] = useState<DonationRecord[]>(() => {
    const saved = localStorage.getItem('raphela_donations');
    return saved ? JSON.parse(saved) : INITIAL_DONATIONS;
  });

  const [activeReceipt, setActiveReceipt] = useState<DonationRecord | null>(null);

  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>(() => {
    const saved = localStorage.getItem('raphela_subscribers');
    return saved ? JSON.parse(saved) : [];
  });

  const [currentUser, setCurrentUser] = useState<AdminUser | null>(() => {
    const saved = localStorage.getItem('raphela_admin_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Persist modifications
  useEffect(() => {
    localStorage.setItem('raphela_settings', JSON.stringify(siteSettings));
  }, [siteSettings]);

  useEffect(() => {
    localStorage.setItem('raphela_cases', JSON.stringify(supportRequests));
  }, [supportRequests]);

  useEffect(() => {
    localStorage.setItem('raphela_rights_articles', JSON.stringify(rightsArticles));
  }, [rightsArticles]);

  useEffect(() => {
    localStorage.setItem('raphela_programmes', JSON.stringify(programmes));
  }, [programmes]);

  useEffect(() => {
    localStorage.setItem('raphela_articles', JSON.stringify(articles));
  }, [articles]);

  useEffect(() => {
    localStorage.setItem('raphela_events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('raphela_event_rsvps', JSON.stringify(eventRegistrations));
  }, [eventRegistrations]);

  useEffect(() => {
    localStorage.setItem('raphela_resources', JSON.stringify(resources));
  }, [resources]);

  useEffect(() => {
    localStorage.setItem('raphela_volunteers', JSON.stringify(volunteers));
  }, [volunteers]);

  useEffect(() => {
    localStorage.setItem('raphela_donations', JSON.stringify(donations));
  }, [donations]);

  useEffect(() => {
    localStorage.setItem('raphela_subscribers', JSON.stringify(subscribers));
  }, [subscribers]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('raphela_admin_user', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('raphela_admin_user');
    }
  }, [currentUser]);

  const addToast = (type: ToastMessage['type'], title: string, message: string) => {
    const id = 'toast-' + Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, type, title, message }]);
    setTimeout(() => {
      removeToast(id);
    }, 5500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const setCurrentPage = (page: PageRoute, targetId?: string) => {
    setCurrentPageState(page);
    setTargetAnchor(targetId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (targetId) {
      setTimeout(() => {
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const updateSiteSettings = (settings: Partial<SiteSettings>) => {
    setSiteSettings((prev) => ({ ...prev, ...settings }));
    addToast('success', 'Settings Updated', 'Organization configuration has been saved.');
  };

  const addRightsArticle = (art: Omit<RightsArticle, 'id'>) => {
    const newArt: RightsArticle = {
      ...art,
      id: 'rights-' + Date.now()
    };
    setRightsArticles((prev) => [newArt, ...prev]);
    addToast('success', 'Guide Published', 'New Know Your Rights guide is now live.');
  };

  const updateRightsArticle = (id: string, art: Partial<RightsArticle>) => {
    setRightsArticles((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...art } : item))
    );
    addToast('success', 'Guide Updated', 'Changes have been saved successfully.');
  };

  const deleteRightsArticle = (id: string) => {
    setRightsArticles((prev) => prev.filter((item) => item.id !== id));
    addToast('info', 'Guide Removed', 'The guide has been deleted.');
  };

  const submitSupportRequest = (
    data: Omit<SupportRequest, 'id' | 'ticketCode' | 'status' | 'submittedAt' | 'updatedAt' | 'internalNotes'>
  ): string => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const ticketCode = `REQ-2026-${randomNum}`;
    const newCase: SupportRequest = {
      ...data,
      id: 'case-' + Date.now(),
      ticketCode,
      status: 'new',
      submittedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      internalNotes: []
    };
    setSupportRequests((prev) => [newCase, ...prev]);
    addToast(
      'success',
      'Report Submitted Privately',
      `Your confidential ticket code is ${ticketCode}. Our safeguarding desk has received your request.`
    );
    return ticketCode;
  };

  const updateCaseStatus = (caseId: string, status: CaseStatus) => {
    setSupportRequests((prev) =>
      prev.map((c) =>
        c.id === caseId
          ? {
              ...c,
              status,
              updatedAt: new Date().toISOString(),
              internalNotes: [
                ...c.internalNotes,
                {
                  id: 'note-' + Date.now(),
                  author: currentUser?.name || 'Authorized Staff',
                  authorRole: currentUser?.role || 'Officer',
                  timestamp: new Date().toLocaleString(),
                  note: `Case status changed to "${status.toUpperCase().replace('-', ' ')}"`
                }
              ]
            }
          : c
      )
    );
    addToast('info', 'Case Status Updated', `Case ${caseId} is now marked as ${status}.`);
  };

  const assignStaffToCase = (caseId: string, staffName: string) => {
    setSupportRequests((prev) =>
      prev.map((c) =>
        c.id === caseId
          ? {
              ...c,
              assignedStaff: staffName,
              updatedAt: new Date().toISOString(),
              internalNotes: [
                ...c.internalNotes,
                {
                  id: 'note-' + Date.now(),
                  author: currentUser?.name || 'Supervisor',
                  authorRole: currentUser?.role || 'Admin',
                  timestamp: new Date().toLocaleString(),
                  note: `Assigned case to ${staffName}`
                }
              ]
            }
          : c
      )
    );
    addToast('success', 'Staff Assigned', `Case assigned to ${staffName}.`);
  };

  const addCaseNote = (caseId: string, noteText: string) => {
    setSupportRequests((prev) =>
      prev.map((c) =>
        c.id === caseId
          ? {
              ...c,
              updatedAt: new Date().toISOString(),
              internalNotes: [
                ...c.internalNotes,
                {
                  id: 'note-' + Date.now(),
                  author: currentUser?.name || 'Staff Officer',
                  authorRole: currentUser?.role || 'Duty Desk',
                  timestamp: new Date().toLocaleString(),
                  note: noteText
                }
              ]
            }
          : c
      )
    );
    addToast('success', 'Note Added', 'Internal safeguarding note recorded.');
  };

  const addProgramme = (prog: Omit<ProgrammeProject, 'id'>) => {
    const newProg: ProgrammeProject = {
      ...prog,
      id: 'prog-' + Date.now()
    };
    setProgrammes((prev) => [newProg, ...prev]);
    addToast('success', 'Project Published', 'Programme added to registry.');
  };

  const updateProgramme = (id: string, prog: Partial<ProgrammeProject>) => {
    setProgrammes((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...prog } : item))
    );
    addToast('success', 'Project Updated', 'Programme details saved.');
  };

  const addNewsArticle = (art: Omit<ArticlePost, 'id' | 'publishedDate'>) => {
    const newArticle: ArticlePost = {
      ...art,
      id: 'art-' + Date.now(),
      publishedDate: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    };
    setArticles((prev) => [newArticle, ...prev]);
    addToast('success', 'Article Published', 'News post published to public feed.');
  };

  const deleteNewsArticle = (id: string) => {
    setArticles((prev) => prev.filter((a) => a.id !== id));
    addToast('info', 'Article Removed', 'News article has been removed.');
  };

  const registerForEvent = (
    eventId: string,
    fullName: string,
    email: string,
    phone: string,
    organization?: string
  ): boolean => {
    const event = events.find((e) => e.id === eventId);
    if (!event) return false;

    const registration: EventRegistration = {
      id: 'rsvp-' + Date.now(),
      eventId,
      eventTitle: event.title,
      fullName,
      email,
      phone,
      organization,
      registeredAt: new Date().toISOString()
    };

    setEventRegistrations((prev) => [registration, ...prev]);
    setEvents((prev) =>
      prev.map((e) => (e.id === eventId ? { ...e, rsvpCount: e.rsvpCount + 1 } : e))
    );
    addToast(
      'success',
      'RSVP Confirmed!',
      `You are registered for "${event.title}". Details have been prepared for ${email}.`
    );
    return true;
  };

  const addEvent = (event: Omit<EventItem, 'id' | 'rsvpCount'>) => {
    const newEvent: EventItem = {
      ...event,
      id: 'event-' + Date.now(),
      rsvpCount: 0
    };
    setEvents((prev) => [newEvent, ...prev]);
    addToast('success', 'Event Created', 'Upcoming event posted to website calendar.');
  };

  const incrementDownload = (resourceId: string) => {
    setResources((prev) =>
      prev.map((r) => (r.id === resourceId ? { ...r, downloadCount: r.downloadCount + 1 } : r))
    );
    addToast('success', 'Download Started', 'Preparing document for safe offline reading.');
  };

  const addResource = (res: Omit<ResourceItem, 'id' | 'downloadCount' | 'publicationDate'>) => {
    const newRes: ResourceItem = {
      ...res,
      id: 'res-' + Date.now(),
      downloadCount: 1,
      publicationDate: new Date().toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
      })
    };
    setResources((prev) => [newRes, ...prev]);
    addToast('success', 'Resource Published', 'Educational resource added to public repository.');
  };

  const submitVolunteerApplication = (
    data: Omit<VolunteerApplication, 'id' | 'appliedAt' | 'status'>
  ) => {
    const newVol: VolunteerApplication = {
      ...data,
      id: 'vol-' + Date.now(),
      appliedAt: new Date().toISOString(),
      status: 'Pending'
    };
    setVolunteers((prev) => [newVol, ...prev]);
    addToast(
      'success',
      'Volunteer Application Received',
      'Thank you for standing for human dignity. Our volunteer coordinator will reach out to you.'
    );
  };

  const updateVolunteerStatus = (id: string, status: VolunteerApplication['status']) => {
    setVolunteers((prev) =>
      prev.map((v) => (v.id === id ? { ...v, status } : v))
    );
    addToast('info', 'Volunteer Status Updated', `Application status changed to ${status}.`);
  };

  const processDonation = (
    data: Omit<DonationRecord, 'id' | 'transactionRef' | 'status' | 'timestamp' | 'receiptNumber'>
  ): DonationRecord => {
    const randomRef = 'REF-TX-' + Math.floor(100000 + Math.random() * 900000);
    const receiptNumber = 'REC-2026-' + Math.floor(1000 + Math.random() * 9000);
    const newRecord: DonationRecord = {
      ...data,
      id: 'don-' + Date.now(),
      transactionRef: randomRef,
      status: 'Successful',
      timestamp: new Date().toISOString(),
      receiptNumber
    };
    setDonations((prev) => [newRecord, ...prev]);
    setActiveReceipt(newRecord);
    addToast(
      'success',
      'Donation Successful',
      `Thank you for advancing justice and community rights! Receipt #${receiptNumber} generated.`
    );
    return newRecord;
  };

  const subscribeNewsletter = (email: string, name?: string, topics: string[] = ['All Rights Updates']): boolean => {
    if (subscribers.some((s) => s.email.toLowerCase() === email.toLowerCase())) {
      addToast('info', 'Already Subscribed', 'This email is already on our newsletter list.');
      return false;
    }
    const newSub: NewsletterSubscriber = {
      id: 'sub-' + Date.now(),
      email,
      name,
      topics,
      status: 'Active',
      subscribedAt: new Date().toISOString()
    };
    setSubscribers((prev) => [newSub, ...prev]);
    addToast(
      'success',
      'Subscription Confirmed',
      'You are now subscribed to Raphela Essi community alerts and legal education bulletins.'
    );
    return true;
  };

  const loginAdmin = (role: 'Super Admin' | 'Legal / Case Officer' | 'Communications Lead' = 'Super Admin') => {
    const user: AdminUser = {
      id: 'admin-' + Date.now(),
      name: role === 'Super Admin' ? 'Executive Director Desk' : role === 'Legal / Case Officer' ? 'Barrister Amina (Duty Counsel)' : 'Communications Officer',
      email: role === 'Super Admin' ? 'director@rerai.org' : role === 'Legal / Case Officer' ? 'legal@rerai.org' : 'desk@rerai.org',
      role
    };
    setCurrentUser(user);
    addToast('success', 'Admin Authenticated', `Logged in as ${user.name} (${role}).`);
  };

  const logoutAdmin = () => {
    setCurrentUser(null);
    addToast('info', 'Logged Out', 'Admin session ended securely.');
  };

  const triggerQuickSafeExit = () => {
    // Immediate emergency escape for vulnerable individuals (e.g. domestic violence survivors)
    // Instantly redirects to neutral benign site (Google / BBC Weather)
    window.location.replace('https://www.google.com/search?q=weather+today');
  };

  return (
    <DataContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        targetAnchor,
        siteSettings,
        updateSiteSettings,
        rightsArticles,
        selectedArticle,
        setSelectedArticle,
        addRightsArticle,
        updateRightsArticle,
        deleteRightsArticle,
        supportRequests,
        submitSupportRequest,
        updateCaseStatus,
        assignStaffToCase,
        addCaseNote,
        programmes,
        selectedProgramme,
        setSelectedProgramme,
        addProgramme,
        updateProgramme,
        impactStories,
        selectedStory,
        setSelectedStory,
        articles,
        selectedNewsArticle,
        setSelectedNewsArticle,
        addNewsArticle,
        deleteNewsArticle,
        events,
        selectedEvent,
        setSelectedEvent,
        eventRegistrations,
        registerForEvent,
        addEvent,
        resources,
        incrementDownload,
        addResource,
        volunteers,
        submitVolunteerApplication,
        updateVolunteerStatus,
        donations,
        activeReceipt,
        setActiveReceipt,
        processDonation,
        leadership: INITIAL_LEADERSHIP,
        referralAgencies: INITIAL_REFERRAL_AGENCIES,
        subscribers,
        subscribeNewsletter,
        currentUser,
        loginAdmin,
        logoutAdmin,
        toasts,
        addToast,
        removeToast,
        triggerQuickSafeExit
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
