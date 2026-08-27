import {
  RightsArticle,
  ProgrammeProject,
  ImpactStory,
  ArticlePost,
  EventItem,
  ResourceItem,
  LeadershipProfile,
  ReferralAgency,
  SiteSettings,
  SupportRequest,
  DonationRecord,
  VolunteerApplication
} from '../types';

export const INITIAL_SITE_SETTINGS: SiteSettings = {
  organizationName: 'Raphela Essi Rights Awareness Initiative',
  tagline: 'Know Your Rights. Protect Your Dignity. Empower Your Community.',
  domain: 'rerai.org',
  websiteUrl: 'https://rerai.org',
  cacRegistrationNumber: '[INSERT CAC REGISTRATION NUMBER - CAC/IT/NO: PENDING VERIFICATION]',
  officialEmail: 'info@rerai.org',
  supportEmail: 'help@rerai.org',
  legalEmail: 'legal@rerai.org',
  ethicsEmail: 'ethics@rerai.org',
  phoneHotline: '+234 (0) 800-RIGHTS-NG [INSERT VERIFIED HOTLINE]',
  emergencyHelpline: '+234 (0) 812-345-6789 [24/7 RAPID REFERRAL]',
  officeAddress: 'Suite 4B, Human Rights Advocacy House, Central Business District, Abuja, FCT, Nigeria [OFFICIAL ADDRESS]',
  officeHours: 'Monday – Friday: 8:30 AM – 5:00 PM WAT',
  bankDetails: {
    bankName: 'Guaranty Trust Bank / Zenith Bank Nigeria [OFFICIAL NGO ACCOUNT]',
    accountName: 'Raphela Essi Rights Awareness Initiative',
    accountNumber: '[INSERT OFFICIAL 10-DIGIT NUBAN ACCOUNT NUMBER]',
    sortCode: '058152062'
  },
  socialLinks: {
    facebook: 'https://facebook.com/rerai_ng',
    x: 'https://x.com/rerai_ng',
    instagram: 'https://instagram.com/rerai_ng',
    linkedin: 'https://linkedin.com/company/rerai-ng',
    youtube: 'https://youtube.com/@rerai_ng'
  }
};

export const INITIAL_RIGHTS_ARTICLES: RightsArticle[] = [
  {
    id: 'rights-police-encounter',
    title: 'Your Fundamental Rights During Police Encounters & Stop-and-Search',
    category: 'arrest-police',
    categoryLabel: 'Police & Law Enforcement',
    summary: 'A plain-language guide on your constitutional protections when stopped by law enforcement officers on Nigerian roads or public spaces.',
    legalBasis: 'Section 35 & 36, Constitution of the Federal Republic of Nigeria 1999 (as amended); Nigerian Police Act 2020 (Sections 49-54).',
    whatYouShouldKnow: [
      'Police officers must identify themselves and state the specific lawful reason for stopping or questioning you.',
      'Stop-and-search must be based on reasonable suspicion of unlawful possession or crime, not arbitrary profiling based on your dress, hairstyle, laptop, or phone ownership.',
      'Section 37 of the 1999 Constitution guarantees your right to privacy: A police officer CANNOT search your mobile phone or private digital messages without a valid judicial warrant or clear reasonable suspicion linked to an active felony.',
      'Bail is FREE by law in Nigeria (Police Act 2020, Section 62). Extortion for bail is an illegal and punishable offence.'
    ],
    whatYouCanDo: [
      'Remain calm and respectful; do not physically resist even if an officer is unruly, to protect your physical safety.',
      'Politely request the officer’s name, force number, and station attached.',
      'Ask calmly: "Officer, am I under arrest or am I free to go?"',
      'If searching your vehicle or bag, stand where you can observe everything being touched to prevent evidence planting.',
      'Note the patrol vehicle number, time, location, and witness details.',
      'Report extortion or harassment immediately to the Police Complaint Response Unit (CRU) or our referral helpdesk.'
    ],
    whereToGetHelp: [
      {
        agency: 'Police Complaint Response Unit (CRU)',
        contact: '+234 805 700 0001 / +234 805 700 0002 / WhatsApp: +234 805 700 0003',
        description: 'Official Nigeria Police monitoring desk for immediate intervention against rogue officers.'
      },
      {
        agency: 'National Human Rights Commission (NHRC)',
        contact: 'Toll-Free: 6472 / +234 903 000 0864',
        description: 'Statutory body for investigating state actor abuses and unlawful detentions.'
      },
      {
        agency: 'Raphela Essi Rapid Helpdesk',
        contact: 'help@rerai.org',
        description: 'Documentation, peer assistance, and legal aid referral support.'
      }
    ],
    faqs: [
      {
        question: 'Can the police detain me for more than 24 or 48 hours without court arraignment?',
        answer: 'No. Section 35(5) of the 1999 Constitution mandates that any arrested person must be brought before a court of competent jurisdiction within 24 hours (where a court is within a 40km radius) or 48 hours (in other cases), or granted administrative bail.'
      },
      {
        question: 'Can a person be arrested in place of a suspect (Proxy Arrest)?',
        answer: 'Absolutely NO. Section 36 of the Police Act 2020 and Section 7 of the Administration of Criminal Justice Act (ACJA) 2015 strictly prohibit the arrest of a relative, spouse, or friend in place of a suspect.'
      }
    ],
    readTime: '6 min read',
    lastUpdated: 'August 2026'
  },
  {
    id: 'rights-womens-vapp',
    title: 'Protection from Domestic Violence, Sexual Assault & Harassment (VAPP Act)',
    category: 'womens-rights',
    categoryLabel: 'Women & Girls',
    summary: 'Understanding the Violence Against Persons (Prohibition) Act and state protection mechanisms against gender-based violence, harmful traditional practices, and domestic abuse.',
    legalBasis: 'Violence Against Persons (Prohibition) Act (VAPP) 2015; Convention on the Elimination of All Forms of Discrimination Against Women (CEDAW).',
    whatYouShouldKnow: [
      'Physical battery, emotional abuse, economic deprivation, stalking, and domestic abuse are criminal offences punishable by imprisonment under the VAPP Act.',
      'Survivors have a legal right to protection orders restraining perpetrators from approaching their residence, workplace, or children.',
      'Harmful traditional practices such as forced female genital mutilation (FGM) and forceful eviction of widows from their homes are illegal and carry severe criminal penalties.',
      'Seeking help is your absolute fundamental human right; cultural or family pressure cannot nullify criminal liability.'
    ],
    whatYouCanDo: [
      'If in immediate physical danger, move to a safe public space or trusted shelter immediately.',
      'Seek emergency medical attention at a certified hospital or Sexual Assault Referral Centre (SARC) within 72 hours for critical medical care and clinical evidence preservation.',
      'Document evidence: save text messages, voicemails, threatening notes, photographs of injuries, or witness contacts.',
      'Contact a specialized legal aid organization like FIDA Nigeria or our Rapid Referral Desk.'
    ],
    whereToGetHelp: [
      {
        agency: 'FIDA Nigeria (International Federation of Women Lawyers)',
        contact: '+234 708 899 6960 / info@fida.org.ng',
        description: 'Pro-bono legal support and court representation for women and children.'
      },
      {
        agency: 'NAPTIP Gender & Anti-Trafficking Helpline',
        contact: 'Toll-Free: 0800-2255-627847 / +234 703 000 0203',
        description: 'Federal agency handling violence against persons, exploitation, and survivor shelter.'
      },
      {
        agency: 'National Sexual Assault Referral Centres (SARC Network)',
        contact: 'Free emergency medical & psychological triage across all Nigerian states.',
        description: 'Confidential clinical care and trauma counseling.'
      }
    ],
    faqs: [
      {
        question: 'Does the VAPP Act protect only women?',
        answer: 'While women and children are statistically disproportionately affected, the VAPP Act uses gender-neutral language and protects all persons against sexual, emotional, and physical violence regardless of gender.'
      },
      {
        question: 'Is domestic violence a "private family matter"?',
        answer: 'No. Nigerian statutory law classifies assault, grievous bodily harm, and domestic violence as crimes against the State, not private domestic disagreements.'
      }
    ],
    readTime: '8 min read',
    lastUpdated: 'August 2026'
  },
  {
    id: 'rights-child-protection',
    title: 'Child Rights, Protection from Child Labour & Educational Entitlements',
    category: 'children-youth',
    categoryLabel: 'Children & Youth',
    summary: 'The statutory rights of every child in Nigeria to free basic education, parental care, protection from early marriage, and freedom from hazardous labour.',
    legalBasis: 'Child’s Rights Act (CRA) 2003; Universal Basic Education (UBE) Act 2004; African Charter on the Rights and Welfare of the Child.',
    whatYouShouldKnow: [
      'Every child has a guaranteed right to free, compulsory universal basic education from primary through junior secondary school.',
      'No child under 18 may be betrothed, forced into marriage, or subjected to sexual abuse or exploitative child labour.',
      'Corporal punishment or physical cruelty that inflicts grievous bodily harm is illegal under child safeguarding statutes.',
      'The "Best Interests of the Child" principle is the paramount standard in all legal, administrative, and family proceedings.'
    ],
    whatYouCanDo: [
      'Report instances of child neglect, out-of-school school-age children being used as hawkers during school hours, or child physical abuse to social welfare services or NHRC.',
      'Work with local community leaders and PTAs to advocate for safe child-friendly learning environments.',
      'Contact our Child Protection focal team for guidance on safe reporting protocols.'
    ],
    whereToGetHelp: [
      {
        agency: 'Ministry of Women Affairs and Social Development (Child Desk)',
        contact: '+234 9 291 7622',
        description: 'State and federal child protection officers and foster custody intervention.'
      },
      {
        agency: 'National Human Rights Commission (Child Rights Directorate)',
        contact: 'Toll-free: 6472',
        description: 'Investigating child abuse, trafficking, and denied access to education.'
      }
    ],
    faqs: [
      {
        question: 'Can a landlord or employer seize a child’s services for parental debt?',
        answer: 'No. Child servitude and debt bondage are severe federal felonies under the Child’s Rights Act and NAPTIP statutes.'
      }
    ],
    readTime: '5 min read',
    lastUpdated: 'August 2026'
  },
  {
    id: 'rights-tenants-housing',
    title: 'Tenant Rights & Protection Against Unlawful Eviction in Nigeria',
    category: 'tenants-housing',
    categoryLabel: 'Housing & Tenancy',
    summary: 'Your legal protections against arbitrary rent hikes, lockouts, removal of roof/doors, and unlawful eviction without statutory notices.',
    legalBasis: 'Recovery of Premises Acts / Tenancy Laws of Nigerian States; Lagos State Tenancy Law 2011; FCT Recovery of Premises Act.',
    whatYouShouldKnow: [
      'A landlord CANNOT unilaterally eject a tenant, remove roofs, disconnect water/electricity, or lock gates without a valid court judgment.',
      'Statutory notices to quit are mandatory before court eviction: Yearly tenant = 6 months notice; Half-yearly = 3 months notice; Monthly = 1 month notice (unless agreed otherwise in writing).',
      'After the Notice to Quit expires, the landlord must still serve a 7-day "Notice of Owner’s Intention to Apply to Court to Recover Possession".',
      'Self-help eviction is a criminal offence and exposes the landlord to heavy civil damages in court.'
    ],
    whatYouCanDo: [
      'Always insist on a written tenancy agreement and demand signed receipts for every rental payment made.',
      'If facing unlawful lockout or threat of forceful eviction, report immediately to the Citizens Mediation Centre (CMC) or Legal Aid Council.',
      'Take photos or video evidence if a landlord damages your property or locks your entrance.'
    ],
    whereToGetHelp: [
      {
        agency: 'Citizens’ Mediation Centre (CMC)',
        contact: 'info@cmc.lagosstate.gov.ng / State Ministry of Justice',
        description: 'Free mediation and dispute settlement between landlords and tenants.'
      },
      {
        agency: 'Legal Aid Council of Nigeria',
        contact: '+234 800 534 2524',
        description: 'Pro-bono legal counsel for low-income citizens facing eviction.'
      }
    ],
    faqs: [
      {
        question: 'Can my landlord increase rent without notice during an active lease?',
        answer: 'No. Rent review must follow the terms of the tenancy agreement or be mutually negotiated prior to renewal.'
      }
    ],
    readTime: '7 min read',
    lastUpdated: 'August 2026'
  },
  {
    id: 'rights-workers-labour',
    title: 'Workplace Rights, Fair Wages & Protection from Unfair Dismissal',
    category: 'workers-labour',
    categoryLabel: 'Labour & Workplace',
    summary: 'Understanding statutory rights under the Nigerian Labour Act regarding contracts, minimum wage, workplace safety, and unlawful termination.',
    legalBasis: 'Nigerian Labour Act (Cap L1 LFN 2004); National Minimum Wage Act; Trade Unions Act; Section 254C of the 1999 Constitution (National Industrial Court).',
    whatYouShouldKnow: [
      'Every employee is entitled to a written contract of employment within 3 months of starting work specifying wages, hours, and termination terms.',
      'Workers have a right to a safe working environment free from hazardous exposure without proper protective gear.',
      'Female workers are entitled to mandatory paid maternity leave (at least 12 weeks with at least 50% wages by statutory minimum).',
      'Unlawful termination without due notice or compensation can be contested at the National Industrial Court of Nigeria (NICN).'
    ],
    whatYouCanDo: [
      'Keep copies of appointment letters, pay slips, staff handbook, and performance reviews.',
      'Consult a union representative or human rights labour advocate if facing discrimination or unpaid accrued wages.'
    ],
    whereToGetHelp: [
      {
        agency: 'Federal Ministry of Labour and Employment',
        contact: '+234 9 523 7000',
        description: 'Statutory mediation of labour disputes and industrial inspections.'
      },
      {
        agency: 'National Industrial Court Alternative Dispute Resolution (ADR) Centre',
        contact: 'www.nicn.gov.ng',
        description: 'Specialized court forum for workplace rights enforcement.'
      }
    ],
    faqs: [
      {
        question: 'Can an employer withhold my salary as a disciplinary punishment?',
        answer: 'No. Section 5 of the Labour Act strictly limits wage deductions to legally sanctioned statutory contributions (e.g., tax, pension) and prohibits arbitrary punitive pay withholding.'
      }
    ],
    readTime: '6 min read',
    lastUpdated: 'August 2026'
  },
  {
    id: 'rights-digital-privacy',
    title: 'Digital Rights, Data Protection & Freedom from Online Harassment',
    category: 'digital-privacy',
    categoryLabel: 'Digital Rights & Privacy',
    summary: 'Your rights under the Nigeria Data Protection Act 2023 against unlawful data scraping, predatory loan app blackmail, and online privacy violations.',
    legalBasis: 'Nigeria Data Protection Act (NDPA) 2023; Cybercrimes (Prohibition, Prevention, etc.) Act 2015; Section 37 of 1999 Constitution.',
    whatYouShouldKnow: [
      'Organizations cannot collect, process, or share your personal data without your explicit lawful consent or valid statutory mandate.',
      'Digital loan apps are strictly prohibited by the NDPC and FCCPC from contacting your phonebook contacts or sending defamatory messages.',
      'You have the "Right to Erasure" (Right to be Forgotten) and the right to rectify false data held by commercial banks or digital platforms.'
    ],
    whatYouCanDo: [
      'Never grant invasive contact or gallery permissions to untrusted mobile loan applications.',
      'File formal complaints against defamatory loan recovery agencies directly with the FCCPC and NDPC.',
      'Report cyber-bullying, non-consensual image sharing, and identity theft to law enforcement cybercrime desks.'
    ],
    whereToGetHelp: [
      {
        agency: 'Nigeria Data Protection Commission (NDPC)',
        contact: 'info@ndpc.gov.ng / +234 803 000 0000',
        description: 'Regulatory enforcement for data breaches, digital harassment, and privacy violations.'
      },
      {
        agency: 'Federal Competition & Consumer Protection Commission (FCCPC)',
        contact: 'contact@fccpc.gov.ng / 0803 333 4444',
        description: 'Action against predatory loan apps and unconscionable debt recovery practices.'
      }
    ],
    faqs: [
      {
        question: 'Can a company sell my phone number or email to marketers without my consent?',
        answer: 'No. Under the NDPA 2023, unauthorized transmission or sale of personal data attracts severe financial penalties for data controllers.'
      }
    ],
    readTime: '5 min read',
    lastUpdated: 'August 2026'
  }
];

export const INITIAL_PROGRAMMES: ProgrammeProject[] = [
  {
    id: 'proj-community-clinics',
    title: 'Grassroots Legal Literacy & Civic Education Clinics',
    type: 'current-project',
    summary: 'Delivering mobile community-level rights sensitization and open legal clinics across underserved peri-urban and rural communities.',
    fullDescription: 'Our flagship grassroots initiative brings volunteer lawyers, social workers, and human rights educators directly into town halls, community market squares, and youth centres. We translate complex constitutional provisions into local dialects, distribute pocket guides on police encounter protocols, and provide free preliminary legal advisory triage.',
    thematicArea: 'Legal & Civic Literacy',
    location: 'Abuja (FCT), Nasarawa, Niger, and Kaduna States',
    targetBeneficiaries: 'Community members, market traders, youth groups, and vulnerable residents',
    status: 'Active',
    imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
    startDate: 'January 2025',
    impactHighlight: 'Over 45 grassroots community sessions held; empowering citizens with practical knowledge of bail rights and police encounter safety.',
    goals: [
      'Empower 10,000+ community members with basic constitutional rights knowledge',
      'Distribute 15,000 vernacular "Know Your Rights" pocket guides',
      'Establish 12 community paralegal referral focal points'
    ]
  },
  {
    id: 'proj-women-dignity',
    title: 'Dignity & Justice for Vulnerable Women & Girls',
    type: 'current-project',
    summary: 'Strengthening protection pathways, shelter referrals, and pro-bono legal aid for survivors of domestic violence and sexual assault.',
    fullDescription: 'Working in close synergy with FIDA Nigeria, state Ministry of Women Affairs desks, and verified Sexual Assault Referral Centres (SARCs), this initiative supports survivors through compassionate emergency guidance, protection order filing assistance, and trauma-informed referral services.',
    thematicArea: 'Women & Girls Protection',
    location: 'National Referral Network with Focus in North-Central & South-West Nigeria',
    targetBeneficiaries: 'Women, adolescent girls, and survivors of gender-based violence',
    status: 'Active',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    startDate: 'March 2025',
    impactHighlight: 'Supported 120+ women and girls in accessing verified medical referral, shelter networks, and pro-bono mediation.',
    goals: [
      'Provide rapid legal referral for 250+ survivors annually',
      'Conduct 20 community dialogues with traditional rulers on eliminating harmful practices',
      'Train 50 community health workers on VAPP Act reporting protocols'
    ]
  },
  {
    id: 'proj-youth-civic-voice',
    title: 'Youth Civic Voice & Peaceful Advocacy Incubator',
    type: 'current-project',
    summary: 'Equipping young Nigerians and students with digital advocacy skills, ethical civic engagement principles, and constitutional knowledge.',
    fullDescription: 'An interactive capacity-building fellowship designed for tertiary students, youth corps members, and community organizers. Fellows learn public interest advocacy, constructive engagement with democratic institutions, freedom of expression safeguards, and non-violent civic participation.',
    thematicArea: 'Children & Youth Empowerment',
    location: 'University Campuses and Youth Development Hubs',
    targetBeneficiaries: 'Youth aged 18-30, student union leaders, civic tech advocates',
    status: 'Active',
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    startDate: 'July 2025',
    impactHighlight: 'Graduated 3 cohorts of 180 youth human rights peer educators active across 12 institutions.',
    goals: [
      'Train 500 youth peer advocates across Nigerian states',
      'Host 6 annual inter-campus civic rights debate symposiums',
      'Foster constructive youth-police dialogue roundtables'
    ]
  },
  {
    id: 'proj-pre-trial-detention',
    title: 'Access to Justice & Pre-Trial Detention Monitoring Outreach',
    type: 'completed-project',
    summary: 'Collaborative initiative auditing custodial detention conditions and facilitating bail intervention for indigent minor offenders.',
    fullDescription: 'In partnership with volunteer bar advocates and the Legal Aid Council, our team conducted structured visits to detention centres to identify indigent individuals held beyond statutory remand limits without trial for petty infractions, securing lawful administrative release or expedited court hearing.',
    thematicArea: 'Access to Justice',
    location: 'Kuje Custodial Centre & Suleja Custodial Outposts',
    targetBeneficiaries: 'Indigent detainees, awaiting-trial persons held for petty civil or minor infractions',
    status: 'Completed',
    imageUrl: 'https://images.unsplash.com/photo-1453733197781-7040d049f57d?auto=format&fit=crop&w=1200&q=80',
    startDate: 'June 2024',
    endDate: 'December 2024',
    impactHighlight: 'Successfully reviewed 64 awaiting-trial cases; secured bail and family reunification for 28 indigent persons.',
    goals: [
      'Document procedural delays in petty offender remand cases',
      'Provide pro-bono representation for awaiting-trial detainees',
      'Publish policy memo on implementing ACJA Section 34 custodial oversight'
    ]
  }
];

export const INITIAL_IMPACT_STORIES: ImpactStory[] = [
  {
    id: 'story-1',
    title: 'From Arbitrary Detention to Reclaimed Dignity',
    summary: 'How a 24-year-old student falsely detained during an unlawful mass raid was released without illegal bail payments through prompt legal referral.',
    fullStory: 'During an evening patrol sweep in a commercial district, "Emeka" (name anonymized to protect identity and safety) was stopped with several other young men returning from evening classes. Despite showing valid university identification, they were taken to a local division and demanded payment for bail. Emeka’s sibling reached out to the Raphela Essi emergency helpdesk. Our duty officer connected the family with a registered pro-bono counsel from our referral panel, who cited Section 62 of the Police Act 2020 and engaged the DPO. Within 6 hours, Emeka was released unconditionally without paying a single kobo.',
    location: 'Bwari Area Council, FCT Abuja',
    thematicArea: 'Police Accountability & Bail Rights',
    isAnonymized: true,
    consentConfirmed: true,
    imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80',
    datePublished: 'May 2026',
    impactOutcome: 'Unconditional release secured in under 6 hours; family empowered on constitutional bail provisions.'
  },
  {
    id: 'story-2',
    title: 'Halting an Illegal Midnight Eviction of a Widow and Her Children',
    summary: 'Preventing self-help property destruction and securing mediated tenancy tenure for a mother facing aggressive eviction.',
    fullStory: '"Mrs. B" (anonymized for safeguarding), a widow raising three young children, received sudden threats of immediate lockout after her landlord arbitrarily increased rent by 150% without statutory notice. When the caretaker began removing the roofing sheets, neighbours alerted our Community Outreach desk. We immediately intervened by serving a formal letter of warning detailing Section 44 of the Tenancy Law and facilitated a mediation session at the Citizens Mediation Centre. The caretaker replaced the removed fixtures, and a fair 6-month relocation grace period was mutually agreed upon in writing.',
    location: 'Mararaba, Nasarawa Border Community',
    thematicArea: 'Tenancy & Housing Protection',
    isAnonymized: true,
    consentConfirmed: true,
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    datePublished: 'April 2026',
    impactOutcome: 'Illegal eviction halted; roofing repaired by caretaker; peaceful 6-month transition grace secured.'
  },
  {
    id: 'story-3',
    title: 'Restoring a Young Girl’s Right to Schooling and Protection',
    summary: 'Community paralegal intervention rescuing an 11-year-old from domestic servitude and reintegrating her into primary education.',
    fullStory: 'Through an anonymous tip submitted via our "Report a Concern" platform, our safeguarding focal officer investigated reports of a young girl subjected to extreme domestic labour and denied access to basic schooling. Collaborating with the National Human Rights Commission and Child Protection officers, the child was safely removed from the abusive environment and enrolled into a public primary school under kinship foster care.',
    location: 'Kubwa Community, Abuja',
    thematicArea: 'Child Rights & Safeguarding',
    isAnonymized: true,
    consentConfirmed: true,
    imageUrl: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?auto=format&fit=crop&w=800&q=80',
    datePublished: 'March 2026',
    impactOutcome: 'Child safely removed from hazardous labour and reintegrated into full-time formal education.'
  }
];

export const INITIAL_ARTICLES: ArticlePost[] = [
  {
    id: 'art-know-your-rights-2026',
    title: 'Understanding the Police Act 2020: 7 Crucial Rights Every Nigerian Should Know',
    category: 'Human Rights',
    author: 'Legal Advocacy Unit',
    authorRole: 'Programme Directorate',
    publishedDate: 'August 14, 2026',
    readingTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&q=80',
    summary: 'A clear review of statutory milestones in the Police Act 2020 that curb arbitrary arrests, proxy detentions, and extortion.',
    content: [
      'The Nigeria Police Act 2020 replaced the outdated 1943 statute and introduced sweeping provisions aimed at aligning law enforcement procedures with constitutional human rights standards.',
      'Key amongst these is the explicit ban on proxy arrests (Section 36) — the unlawful practice of arresting an innocent relative or spouse when a suspect is unavailable.',
      'Furthermore, the Act makes it mandatory for the police to maintain a central criminal registry, record arrest statements with electronic audio-visual equipment or in the presence of legal counsel, and notify the suspect’s family within hours of arrest.',
      'Knowledge is the first line of defence. When citizens know the law, they are equipped to hold institutions accountable with calm confidence and dignity.'
    ],
    tags: ['Police Act', 'Human Rights', 'Constitutional Law', 'Citizen Rights'],
    isFeatured: true
  },
  {
    id: 'art-vapp-act-community-action',
    title: 'Breaking the Culture of Silence: Why VAPP Act Domestication Saves Lives',
    category: 'Women & Girls',
    author: 'Gender & Social Inclusion Desk',
    authorRole: 'Senior Rights Officer',
    publishedDate: 'July 28, 2026',
    readingTime: '6 min read',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80',
    summary: 'Examining how grassroots awareness of the Violence Against Persons (Prohibition) Act empowers survivors to seek protection without social stigma.',
    content: [
      'For decades, survivors of domestic violence and sexual assault were pressured into silence by community norms that treated grave crimes as "private family disagreements".',
      'The VAPP Act 2015 provides a comprehensive statutory shield, criminalizing not only physical abuse but also emotional abandonment, forceful eviction of spouses, and harmful widowhood practices.',
      'Our recent community dialogues across rural settlements reveal that when women and traditional leaders are educated on the law, reporting rates increase and deterrence improves significantly.'
    ],
    tags: ['VAPP Act', 'Gender Justice', 'Child Protection', 'Community Advocacy'],
    isFeatured: false
  },
  {
    id: 'art-ndpa-data-privacy-nigeria',
    title: 'Defending Your Digital Dignity: What the Nigeria Data Protection Act Means for You',
    category: 'Policy & Law',
    author: 'Civic Tech & Digital Rights Team',
    authorRole: 'Research Fellow',
    publishedDate: 'July 10, 2026',
    readingTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
    summary: 'How aggressive loan app defamation and unconsented data harvesting violate fundamental privacy laws and how victims can take action.',
    content: [
      'In our hyper-connected digital economy, personal data privacy is directly linked to human dignity and freedom from harassment.',
      'The Nigeria Data Protection Act (NDPA) 2023 established strict penalties for entities that harvest phone contacts without express permission or use defamatory debt recovery methods.',
      'Citizens must know they have enforceable rights to demand the deletion of their records and file regulatory complaints that trigger institutional sanctions.'
    ],
    tags: ['Digital Rights', 'Privacy', 'NDPA 2023', 'Consumer Protection'],
    isFeatured: false
  }
];

export const INITIAL_EVENTS: EventItem[] = [
  {
    id: 'event-1',
    title: 'National Town Hall on Police-Citizen Relations & Bail Transparency',
    type: 'Town Hall',
    date: 'September 18, 2026',
    time: '10:00 AM – 2:00 PM WAT',
    location: 'National Centre for Women Development / Zoom Hybrid, Abuja',
    isVirtual: false,
    virtualLink: 'https://zoom.us/j/raphelaessi-townhall',
    summary: 'A constructive dialogue bringing together community leaders, civil society advocates, NBA representatives, and the Police Complaints Response Unit.',
    description: 'Join us for an impactful stakeholders session focused on demystifying bail rights, curbing unlawful detentions, and fostering mutual trust and accountability between law enforcement officers and youth communities.',
    speakers: [
      {
        name: 'Barrister Amina Bello',
        role: 'Pro-Bono Human Rights Litigator',
        organization: 'Citizens Legal Aid Coalition'
      },
      {
        name: 'ACP O. Adeyemi',
        role: 'Community Engagement Representative',
        organization: 'Police Public Relations Directorate'
      },
      {
        name: 'Raphela Essi Executive Director',
        role: 'Moderator & Rights Advocate',
        organization: 'Raphela Essi Rights Awareness Initiative'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
    rsvpCount: 142,
    maxAttendees: 250,
    isOpenForRegistration: true
  },
  {
    id: 'event-2',
    title: 'Free Community Legal Clinic & Rights Literacy Outreach',
    type: 'Legal Aid Clinic',
    date: 'October 03, 2026',
    time: '9:00 AM – 3:30 PM WAT',
    location: 'Dei-Dei Community Town Hall, Abuja FCT',
    isVirtual: false,
    summary: 'One-on-one confidential legal advice, tenancy mediation, and free human rights educational resources for community residents.',
    description: 'Volunteer lawyers will provide free legal triage on tenancy disputes, unlawful workplace dismissal, family support matters, and police encounter concerns. Translators in Hausa, Yoruba, Igbo, and Pidgin will be on site.',
    speakers: [
      {
        name: 'Volunteer Legal Panel',
        role: 'Duty Counsel Team',
        organization: 'Raphela Essi Pro-Bono Network'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80',
    rsvpCount: 88,
    maxAttendees: 150,
    isOpenForRegistration: true
  },
  {
    id: 'event-3',
    title: 'Webinar: Digital Rights, Cyber Harassment & Personal Data Protection',
    type: 'Webinar',
    date: 'October 22, 2026',
    time: '4:00 PM – 5:30 PM WAT',
    location: 'Virtual Broadcast via YouTube & Zoom',
    isVirtual: true,
    virtualLink: 'https://zoom.us/j/digital-rights-webinar',
    summary: 'Expert panel on combating online gender-based violence, aggressive digital lenders, and protecting personal online privacy.',
    description: 'An interactive digital masterclass guiding participants on practical legal and technical remedies when personal data is compromised or used to intimidate.',
    speakers: [
      {
        name: 'Tunde Olatunji, Esq.',
        role: 'Data Privacy Compliance Specialist',
        organization: 'Digital Rights Forum Nigeria'
      }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
    rsvpCount: 210,
    isOpenForRegistration: true
  }
];

export const INITIAL_RESOURCES: ResourceItem[] = [
  {
    id: 'res-1',
    title: 'Nigerian Citizens Pocket Guide to Police Encounters & Bail Rights',
    category: 'Citizens Guide',
    description: 'A pocket-sized handbook explaining Section 35 & 36 constitutional safeguards, stop-and-search protocols, phone privacy, and emergency complaint numbers.',
    fileFormat: 'PDF',
    fileSize: '1.8 MB',
    publicationDate: 'June 2026',
    downloadCount: 1420,
    coverImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=400&q=80',
    language: 'English (With Hausa, Yoruba, Igbo, Pidgin summaries)'
  },
  {
    id: 'res-2',
    title: 'Tenancy Laws in Nigeria: What Every Landlord & Tenant Must Know',
    category: 'Legal Handbook',
    description: 'Detailed practical breakdown of statutory notice periods, recovery of premises court process, rent payment receipts, and illegal eviction penalties.',
    fileFormat: 'PDF',
    fileSize: '2.4 MB',
    publicationDate: 'May 2026',
    downloadCount: 980,
    coverImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80',
    language: 'English'
  },
  {
    id: 'res-3',
    title: 'VAPP Act Simplified: A Grassroots Guide on Gender-Based Violence Protection',
    category: 'Factsheet',
    description: 'Easy-to-understand explanation of protective court orders, Sexual Assault Referral Centres (SARCs), and survivor safeguarding procedures.',
    fileFormat: 'PDF',
    fileSize: '1.2 MB',
    publicationDate: 'March 2026',
    downloadCount: 750,
    coverImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    language: 'English & Vernacular'
  },
  {
    id: 'res-4',
    title: '2025/2026 Access to Justice & Pre-Trial Detention Status Report',
    category: 'Annual Report',
    description: 'Comprehensive research paper analyzing awaiting-trial overcrowding, administrative bail bottlenecks, and grassroots civic awareness outcomes.',
    fileFormat: 'PDF',
    fileSize: '4.1 MB',
    publicationDate: 'January 2026',
    downloadCount: 430,
    coverImage: 'https://images.unsplash.com/photo-1453733197781-7040d049f57d?auto=format&fit=crop&w=400&q=80',
    language: 'English'
  }
];

export const INITIAL_LEADERSHIP: LeadershipProfile[] = [
  {
    id: 'lead-1',
    name: 'Raphela Essi [FOUNDER / EXECUTIVE DIRECTOR]',
    role: 'Founder & Executive Director',
    category: 'Executive Leadership',
    bio: 'Dedicated human rights advocate and community organizer with extensive experience in legal literacy, women and child protection, and grassroots civic engagement across Nigeria.',
    expertise: ['Human Rights Law', 'Community Mobilization', 'Strategic Advocacy', 'Social Protection'],
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    isPlaceholder: true
  },
  {
    id: 'lead-2',
    name: '[BOARD CHAIRPERSON - TO BE CONFIRMED]',
    role: 'Chairperson, Board of Trustees',
    category: 'Board of Trustees',
    bio: 'Senior legal practitioner and governance specialist providing fiduciary oversight, policy direction, and institutional transparency.',
    expertise: ['Corporate Governance', 'Rule of Law', 'Public Interest Litigation'],
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    isPlaceholder: true
  },
  {
    id: 'lead-3',
    name: '[HEAD OF LEGAL & ADVOCACY - TO BE CONFIRMED]',
    role: 'Head of Legal Aid & Policy Advocacy',
    category: 'Legal & Policy Team',
    bio: 'Bar advocate specialized in constitutional rights, criminal justice reform, and coordination of our nationwide pro-bono referral attorney network.',
    expertise: ['Criminal Justice Reform', 'Litigation', 'Paralegal Training'],
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    isPlaceholder: true
  },
  {
    id: 'lead-4',
    name: '[COMMUNITY PROGRAMMES DIRECTOR - TO BE CONFIRMED]',
    role: 'Director of Community Outreaches',
    category: 'Executive Leadership',
    bio: 'Experienced field coordinator managing town hall sensitization clinics, youth fellowships, and multilingual grassroots educational distribution.',
    expertise: ['Community Engagement', 'Youth Development', 'Civic Education'],
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    isPlaceholder: true
  }
];

export const INITIAL_REFERRAL_AGENCIES: ReferralAgency[] = [
  {
    name: 'National Human Rights Commission',
    acronym: 'NHRC Nigeria',
    mandate: 'Statutory mandate to investigate human rights violations, police brutality, unlawful detention, and discrimination.',
    phone: '+234 903 000 0864',
    tollFree: '6472',
    email: 'info@nhrc.gov.ng',
    address: '19 Aguiyi Ironsi Street, Maitama, Abuja',
    coverage: 'National (36 States & FCT)',
    website: 'https://nhrc.gov.ng'
  },
  {
    name: 'Legal Aid Council of Nigeria',
    acronym: 'LACON',
    mandate: 'Provides free legal assistance and court representation for indigent citizens facing criminal prosecution or civil rights abuses.',
    phone: '+234 800 534 2524',
    email: 'info@legalaidcouncil.gov.ng',
    address: 'Federal Secretariat Complex, Phase 1, Shehu Shagari Way, Abuja',
    coverage: 'All State Capitals and Zonal Offices',
    website: 'https://legalaidcouncil.gov.ng'
  },
  {
    name: 'National Agency for the Prohibition of Trafficking in Persons',
    acronym: 'NAPTIP',
    mandate: 'Enforces the VAPP Act, investigates human trafficking, child labour, forced marriage, and gender-based violence with safe shelters.',
    phone: '+234 703 000 0203',
    tollFree: '0800-2255-627847',
    email: 'contact@naptip.gov.ng',
    address: 'Muritala Muhammed Way, Wuse Zone 5, Abuja',
    coverage: 'Nationwide Rapid Response Desks',
    website: 'https://naptip.gov.ng'
  },
  {
    name: 'International Federation of Women Lawyers',
    acronym: 'FIDA Nigeria',
    mandate: 'Pro-bono legal support, court representation, and mediation specifically for vulnerable women and children.',
    phone: '+234 708 899 6960',
    email: 'info@fida.org.ng',
    address: 'FIDA National Secretariat, Abuja',
    coverage: 'All 36 States + FCT Chapters',
    website: 'https://fida.org.ng'
  },
  {
    name: 'Police Complaint Response Unit',
    acronym: 'Police CRU',
    mandate: '24/7 internal oversight body receiving citizen complaints of police extortion, brutality, and misconduct for disciplinary intervention.',
    phone: '+234 805 700 0001',
    tollFree: 'WhatsApp: +234 805 700 0003',
    email: 'cru@npf.gov.ng',
    address: 'Force Headquarters, Louis Edet House, Abuja',
    coverage: 'Nationwide Tracking',
    website: 'https://npf.gov.ng/cru'
  }
];

export const INITIAL_SUPPORT_REQUESTS: SupportRequest[] = [
  {
    id: 'case-101',
    ticketCode: 'REQ-2026-0042',
    fullName: 'Anonymized Citizen A',
    isAnonymous: false,
    email: 'citizen.support@example.com',
    phone: '+234 803 123 4567',
    state: 'FCT Abuja',
    lga: 'Municipal',
    category: 'unlawful-arrest-detention',
    urgency: 'high',
    description: 'My cousin was arrested at a roadside market without explanation 3 days ago. The division is requesting an informal payment of ₦80,000 for administrative bail.',
    preferredContact: 'phone',
    hasDocuments: true,
    documentName: 'police_station_slip.pdf',
    consentGiven: true,
    status: 'in-progress',
    assignedStaff: 'Barrister Amina (Duty Counsel)',
    submittedAt: '2026-08-25T14:20:00Z',
    updatedAt: '2026-08-26T09:15:00Z',
    internalNotes: [
      {
        id: 'note-1',
        author: 'Duty Officer',
        authorRole: 'Intake Officer',
        timestamp: '2026-08-25 15:30',
        note: 'Intake triage completed. Case verified with family. Escalated to FCT Pro-Bono panel lead.'
      },
      {
        id: 'note-2',
        author: 'Barrister Amina',
        authorRole: 'Duty Counsel',
        timestamp: '2026-08-26 09:15',
        note: 'Contacted DPO; served formal legal notification citing Section 62 Police Act. Bail process initiated without illegal fees.'
      }
    ]
  },
  {
    id: 'case-102',
    ticketCode: 'REQ-2026-0043',
    isAnonymous: true,
    state: 'Lagos',
    lga: 'Ikeja',
    category: 'violence-abuse-vapp',
    urgency: 'critical',
    description: 'Seeking confidential shelter and protection advice for a sister facing repeated physical violence from her spouse. Needs safe transport and protection order info.',
    preferredContact: 'whatsapp',
    hasDocuments: false,
    consentGiven: true,
    status: 'referred',
    assignedStaff: 'Safeguarding Focal Lead',
    submittedAt: '2026-08-26T18:00:00Z',
    updatedAt: '2026-08-27T08:00:00Z',
    internalNotes: [
      {
        id: 'note-3',
        author: 'Safeguarding Lead',
        authorRole: 'Safeguarding Officer',
        timestamp: '2026-08-27 08:00',
        note: 'Connected anonymously with Lagos State Domestic and Sexual Violence Agency (DSVA) rapid response helpline and vetted emergency safe shelter.'
      }
    ]
  },
  {
    id: 'case-103',
    ticketCode: 'REQ-2026-0044',
    fullName: 'Kehinde O.',
    isAnonymous: false,
    email: 'kehinde.o@example.com',
    phone: '+234 812 987 6543',
    state: 'Ogun',
    lga: 'Abeokuta South',
    category: 'tenancy-unlawful-eviction',
    urgency: 'medium',
    description: 'Landlord locked main water supply and removed gate following an unjustified sudden rent hike. Rent was paid up to date till next month.',
    preferredContact: 'email',
    hasDocuments: true,
    documentName: 'tenancy_receipt_2025.jpg',
    consentGiven: true,
    status: 'new',
    submittedAt: '2026-08-27T06:30:00Z',
    updatedAt: '2026-08-27T06:30:00Z',
    internalNotes: []
  }
];

export const INITIAL_DONATIONS: DonationRecord[] = [
  {
    id: 'don-01',
    transactionRef: 'REF-TX-892100',
    donorName: 'Anonymous Supporter',
    isAnonymous: true,
    email: 'supporter@community.org',
    amount: 50000,
    currency: 'NGN',
    frequency: 'one-time',
    cause: 'Legal Aid & Clinic Outreach',
    paymentMethod: 'Paystack',
    status: 'Successful',
    timestamp: '2026-08-26T11:20:00Z',
    receiptNumber: 'REC-2026-0891'
  },
  {
    id: 'don-02',
    transactionRef: 'REF-TX-892101',
    donorName: 'Dr. Chidi Okafor',
    isAnonymous: false,
    email: 'c.okafor@foundation.ng',
    amount: 150000,
    currency: 'NGN',
    frequency: 'monthly',
    cause: 'Women & Children Protection Fund',
    paymentMethod: 'Bank Transfer',
    status: 'Successful',
    timestamp: '2026-08-25T16:45:00Z',
    receiptNumber: 'REC-2026-0892'
  },
  {
    id: 'don-03',
    transactionRef: 'REF-TX-892102',
    donorName: 'Global Human Rights Ally',
    isAnonymous: true,
    email: 'advocate.global@gmail.com',
    amount: 100,
    currency: 'USD',
    frequency: 'one-time',
    cause: 'Community Rights Education Materials',
    paymentMethod: 'Flutterwave',
    status: 'Successful',
    timestamp: '2026-08-24T09:10:00Z',
    receiptNumber: 'REC-2026-0893'
  }
];

export const INITIAL_VOLUNTEERS: VolunteerApplication[] = [
  {
    id: 'vol-1',
    fullName: 'Chisom Eze, Esq.',
    email: 'chisom.eze@legalmail.com',
    phone: '+234 802 334 4556',
    state: 'Abuja FCT',
    city: 'Garki',
    areasOfInterest: ['Legal/Research', 'Community Outreach'],
    professionalBackground: 'Legal Practitioner with 4 years post-call litigation and public interest experience.',
    skills: ['Legal Drafting', 'Client Counseling', 'Constitutional Law', 'Mediation'],
    availability: '4-8 hours/week',
    motivation: 'Passionate about using legal training to protect low-income citizens from unlawful detention and educate grassroots communities.',
    appliedAt: '2026-08-24T10:15:00Z',
    status: 'Approved'
  },
  {
    id: 'vol-2',
    fullName: 'Fatima Abubakar',
    email: 'fatima.abubakar@gmail.com',
    phone: '+234 813 556 7788',
    state: 'Kaduna',
    city: 'Kaduna North',
    areasOfInterest: ['Media & Communications', 'Youth Engagement'],
    professionalBackground: 'Mass Communication graduate and community radio content creator.',
    skills: ['Vernacular Radio Broadcasting (Hausa)', 'Graphic Design', 'Social Media Advocacy'],
    availability: '4-8 hours/week',
    motivation: 'Committed to translating human rights materials into accessible local language audio guides.',
    appliedAt: '2026-08-25T14:30:00Z',
    status: 'Approved'
  }
];
