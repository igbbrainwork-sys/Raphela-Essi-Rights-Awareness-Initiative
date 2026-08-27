export type PageRoute = 
  | 'home'
  | 'about'
  | 'our-work'
  | 'programmes'
  | 'know-your-rights'
  | 'get-help'
  | 'news'
  | 'events'
  | 'resources'
  | 'get-involved'
  | 'donate'
  | 'contact'
  | 'privacy-safeguarding'
  | 'admin';

export type RightsCategory = 
  | 'all'
  | 'arrest-police'
  | 'womens-rights'
  | 'children-youth'
  | 'tenants-housing'
  | 'workers-labour'
  | 'digital-privacy'
  | 'access-to-justice'
  | 'civic-protest'
  | 'consumer-rights'
  | 'protection-abuse';

export interface RightsArticle {
  id: string;
  title: string;
  category: RightsCategory;
  categoryLabel: string;
  summary: string;
  legalBasis: string; // e.g. Constitution 1999 (as amended), VAPP Act 2015, Police Act 2020
  whatYouShouldKnow: string[];
  whatYouCanDo: string[];
  whereToGetHelp: {
    agency: string;
    contact: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  readTime: string;
  lastUpdated: string;
}

export type HelpRequestCategory = 
  | 'human-rights-violation'
  | 'unlawful-arrest-detention'
  | 'violence-abuse-vapp'
  | 'child-protection'
  | 'discrimination'
  | 'tenancy-unlawful-eviction'
  | 'workplace-rights'
  | 'community-dispute'
  | 'legal-referral'
  | 'general-inquiry';

export type CaseStatus = 
  | 'new'
  | 'under-review'
  | 'referred'
  | 'in-progress'
  | 'resolved'
  | 'closed';

export interface CaseNote {
  id: string;
  author: string;
  authorRole: string;
  timestamp: string;
  note: string;
}

export interface SupportRequest {
  id: string;
  ticketCode: string;
  fullName?: string;
  isAnonymous: boolean;
  email?: string;
  phone?: string;
  state: string;
  lga?: string;
  category: HelpRequestCategory;
  urgency: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  preferredContact: 'phone' | 'email' | 'whatsapp' | 'no-direct-contact';
  hasDocuments: boolean;
  documentName?: string;
  consentGiven: boolean;
  status: CaseStatus;
  assignedStaff?: string;
  submittedAt: string;
  updatedAt: string;
  internalNotes: CaseNote[];
}

export interface ProgrammeProject {
  id: string;
  title: string;
  type: 'current-project' | 'completed-project' | 'campaign' | 'community-intervention';
  summary: string;
  fullDescription: string;
  thematicArea: string;
  location: string;
  targetBeneficiaries: string;
  status: 'Active' | 'Completed' | 'Upcoming';
  imageUrl: string;
  startDate: string;
  endDate?: string;
  impactHighlight?: string;
  goals: string[];
}

export interface ImpactStory {
  id: string;
  title: string;
  summary: string;
  fullStory: string;
  location: string;
  thematicArea: string;
  isAnonymized: boolean;
  consentConfirmed: boolean;
  imageUrl: string;
  datePublished: string;
  impactOutcome: string;
}

export interface ArticlePost {
  id: string;
  title: string;
  category: 'Human Rights' | 'Advocacy' | 'Community Stories' | 'Women & Girls' | 'Child Rights' | 'Policy & Law' | 'Press Release' | 'Education';
  author: string;
  authorRole: string;
  publishedDate: string;
  readingTime: string;
  imageUrl: string;
  summary: string;
  content: string[];
  tags: string[];
  isFeatured?: boolean;
}

export interface EventItem {
  id: string;
  title: string;
  type: 'Town Hall' | 'Legal Aid Clinic' | 'Community Outreach' | 'Workshop' | 'Webinar' | 'Advocacy Forum';
  date: string;
  time: string;
  location: string;
  isVirtual: boolean;
  virtualLink?: string;
  summary: string;
  description: string;
  speakers: {
    name: string;
    role: string;
    organization: string;
  }[];
  imageUrl: string;
  rsvpCount: number;
  maxAttendees?: number;
  isOpenForRegistration: boolean;
}

export interface EventRegistration {
  id: string;
  eventId: string;
  eventTitle: string;
  fullName: string;
  email: string;
  phone: string;
  organization?: string;
  registeredAt: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'Citizens Guide' | 'Policy Brief' | 'Annual Report' | 'Factsheet' | 'Legal Handbook' | 'Research Paper';
  description: string;
  fileFormat: 'PDF' | 'DOCX' | 'INFOGRAPHIC';
  fileSize: string;
  publicationDate: string;
  downloadCount: number;
  coverImage?: string;
  language: string;
}

export interface VolunteerApplication {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  state: string;
  city: string;
  areasOfInterest: string[];
  professionalBackground: string;
  skills: string[];
  availability: '1-3 hours/week' | '4-8 hours/week' | 'Weekends only' | 'Project-based / On-call';
  motivation: string;
  appliedAt: string;
  status: 'Pending' | 'Approved' | 'Contacted' | 'Archived';
}

export interface PartnerInquiry {
  id: string;
  organizationName: string;
  contactPerson: string;
  email: string;
  phone: string;
  partnerType: 'Corporate' | 'NGO / CSO' | 'Government Agency' | 'Foundation / Donor' | 'Academic / Research' | 'Media';
  interestArea: string;
  message: string;
  submittedAt: string;
}

export interface DonationRecord {
  id: string;
  transactionRef: string;
  donorName: string;
  isAnonymous: boolean;
  email: string;
  phone?: string;
  amount: number;
  currency: 'NGN' | 'USD';
  frequency: 'one-time' | 'monthly';
  cause: 'General Rights Advocacy' | 'Legal Aid & Clinic Outreach' | 'Women & Children Protection Fund' | 'Community Rights Education Materials';
  paymentMethod: 'Paystack' | 'Bank Transfer' | 'Flutterwave' | 'Direct Debit';
  status: 'Successful' | 'Pending' | 'Failed';
  timestamp: string;
  receiptNumber: string;
}

export interface LeadershipProfile {
  id: string;
  name: string;
  role: string;
  category: 'Board of Trustees' | 'Executive Leadership' | 'Advisory Council' | 'Legal & Policy Team';
  bio: string;
  expertise: string[];
  imageUrl: string;
  isPlaceholder: boolean;
}

export interface ReferralAgency {
  name: string;
  acronym: string;
  mandate: string;
  phone: string;
  tollFree?: string;
  email?: string;
  address: string;
  coverage: string;
  website?: string;
}

export interface SiteSettings {
  organizationName: string;
  tagline: string;
  domain: string;
  websiteUrl: string;
  cacRegistrationNumber: string;
  officialEmail: string;
  supportEmail: string;
  legalEmail: string;
  ethicsEmail: string;
  phoneHotline: string;
  emergencyHelpline: string;
  officeAddress: string;
  officeHours: string;
  bankDetails: {
    bankName: string;
    accountName: string;
    accountNumber: string;
    sortCode: string;
  };
  socialLinks: {
    facebook: string;
    x: string;
    instagram: string;
    linkedin: string;
    youtube: string;
  };
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  name?: string;
  subscribedAt: string;
  status: 'Active' | 'Pending Verification';
  topics: string[];
}
