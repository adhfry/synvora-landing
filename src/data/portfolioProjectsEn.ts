// English translations of portfolio project copy, keyed by project id.
// Kept as a separate lookup table (rather than duplicating every field
// inline in portfolioProjects.ts) so the Indonesian data file stays the
// single source of truth for IDs, links, team, status, and year - only
// the prose is translated here.
export interface PortfolioProjectEn {
  categories: string[];
  shortDescription: string;
  problem: string;
  solution: string;
  role: string;
  overview: string;
  features: string[];
  benefits: string[];
  coolFeatures: string[];
}

export const portfolioProjectsEn: Record<string, PortfolioProjectEn> = {
  synctappy: {
    categories: ['SaaS', 'NFC & QR', 'Product'],
    shortDescription: 'An NFC and QR digital engagement platform: smart business profiles, dynamic links, review generation, and analytics in one product.',
    problem: 'Businesses need an easy way for customers to reach a business profile, link, or review form, without installing any app.',
    solution: 'NFC and QR touchpoints (cards, stickers, countertop stands) that open a profile/link page instantly, with dynamic links, analytics, and campaigns.',
    role: 'Built, owned, and operated directly by the SYNVORA team as our own product, not a client project.',
    overview:
      'Synctappy is a SaaS product owned by SYNVORA that combines NFC and QR for digital engagement: smart business profiles reachable with a single tap or scan with no app required, dynamic links that can be redirected without reprinting any card or sticker, review generation, tap/scan/click analytics, and scheduled campaigns and promotions. A 14-day free trial is open today; paid plans (Basic, Pro, Premium) are still "coming soon," with final pricing announced at launch.',
    features: [
      'NFC and QR touchpoints that open a page with no app required',
      'Multi-link smart profile with a primary call-to-action',
      "Dynamic link: redirect a link's destination without reprinting cards or stickers",
      'Review generation to collect customer reviews',
      'Tap, scan, and click analytics',
      'Scheduled campaigns and promotions',
    ],
    benefits: [
      'Customers can reach a business profile or link instantly with one tap or scan',
      'A link’s destination can be changed any time without replacing the physical card or sticker',
      'A free 14-day trial is available before committing to a subscription',
    ],
    coolFeatures: [
      'Hardware (countertop stand, NFC card, sticker tag) and the digital platform are designed as a single experience',
      'Available in both Indonesian and English',
    ],
  },
  'aira-artificial-intelligence-response-banjir': {
    categories: ['Information Systems', 'AI', 'Government', 'IoT'],
    shortDescription: 'A flood monitoring, risk analysis, and early-warning platform for Sumenep Regency, built on Computer Vision, IoT sensors, weather data, and GIS.',
    problem: 'On-the-ground flood conditions often reach local government, field officers, and residents too late for them to act quickly.',
    solution: 'A flood monitoring and early-warning platform built on Computer Vision, IoT sensors, weather data, and GIS in a single integrated dashboard.',
    role: 'Initiated and built entirely by the SYNVORA team as a self-directed initiative, not a commissioned project.',
    overview:
      'AIRA (Artificial Intelligence Response Banjir) is a flood monitoring, risk analysis, and early-warning platform for Sumenep Regency. AIRA combines five system layers: field data sources (CCTV, water level sensors, rainfall sensors, weather data, GIS, officer reports), edge/IoT for real-time data acquisition, AI processing (Computer Vision, Time-Series AI, a Risk Analysis Engine, and a Rule & Decision Engine), a cloud platform for dashboards and history, and outputs including early warnings, officer verification, and incident documentation. Its spatial foundation comes from real research: a joint field survey by BRIDA Sumenep and ITS (2026), a drainage study by Resmani, Andawayanti & Cahya (2017), and the PSPK 3 UKWMS (2024) proceedings, with coordinate accuracy traceable to its source.',
    features: [
      'Computer Vision-based CCTV monitoring (YOLOv10) to detect flooding and rising water levels',
      'IoT sensor integration: real-time water level, rainfall, and device-condition monitoring',
      'AI-based weather data and flood risk prediction (LSTM) for the next few hours',
      'Interactive GIS-based map with flood-prone area layers and multi-source risk analysis',
      'Multi-channel early warnings: dashboard, WhatsApp Gateway, email, and public siren integration',
      'Incident management and reporting: automatic logging, officer verification, and data export',
    ],
    benefits: [
      'Gives local government a single command dashboard to coordinate BPBD, agencies, and sub-districts during a flood',
      'Speeds up field officer verification and response with real-time priority locations and routes',
      'Gives residents earlier warnings and evacuation routes, instead of only information after a flood has already happened',
    ],
    coolFeatures: [
      'A channel-vs-river water level model calculates backwater (Δ = river water level − channel water level) based on the backwater influence length from the 2017 study, not assumption',
      'Every monitoring coordinate has a traceable accuracy label (official data, research, OSM, or directory), not points drawn arbitrarily on a map',
    ],
  },
  'agrivita-smart-storage': {
    categories: ['Agriculture', 'IoT'],
    shortDescription: 'A smart post-harvest storage bunker powered by IoT sensors and solar energy, turning a passive warehouse into a monitored space with automatic ventilation.',
    problem: 'Harvest storage warehouses are typically passive and manually inspected, so commodity damage is only discovered after it’s already visible.',
    solution: 'A smart storage bunker built on IoT sensors and solar power, with automatic ventilation and early warnings on storage conditions.',
    role: 'Initiated and built entirely by the SYNVORA team as a self-directed initiative with farmers in East Lenteng; the physical prototype was field-tested together with the Innovillage team from Uniba Madura.',
    overview:
      'AgriVita turns a passive harvest storage warehouse into a smart bunker monitored by sensors, automatically controlled, solar-powered, and logged to the cloud, to reduce post-harvest loss. The concept was piloted with farmers in East Lenteng, Sumenep, an area of roughly 405 hectares with about 7,315 residents, most of whom work in farming. AgriVita is built on a 5-layer architecture (Physical, Sensing, Edge/Control, Cloud/Application, Human/Operational) with temperature-humidity sensors (DHT22), air-quality indication (MQ-135), and bunker fill-level estimation (HC-SR04). Its physical prototype, AgriBunker, was field-deployed on February 24, 2025 by the Innovillage team from Universitas Bahaudin Mudhary Madura (Uniba Madura).',
    features: [
      'Real-time monitoring of temperature, humidity, air quality, and bunker fill level on a web & mobile dashboard',
      'Tiered early warnings (Info, Warning, Critical) with debounce so notifications aren’t overwhelming',
      'Automatic ventilation: a rule engine turns on fans when conditions cross a threshold, or operators can control it manually based on access rights',
      'Time-series history and analytics for daily patterns, alarm frequency, and storage-quality evaluation',
      'Solar power with panel, charge controller, and battery, plus energy status monitoring',
      'Offline-first: the edge device keeps reading sensors and running local rules when the internet drops, then syncs once it’s back',
    ],
    benefits: [
      'Reduces harvest loss from humidity, uncontrolled temperature, pests, and poor air circulation that used to only be checked manually',
      'The bunker keeps running even far from a stable power grid, thanks to solar power and offline-first mode',
      'Time-series history enables an objective storage-quality evaluation, instead of a guess from occasional spot checks',
    ],
    coolFeatures: [
      'Five system intelligence levels are designed to grow in stages, from simple Monitoring up to Predictive, so the bunker can evolve as historical data accumulates',
      'The rule engine distinguishes sensor failure from a valid extreme reading, so false alarms don’t overwhelm the operator',
    ],
  },
  'jos-job-opportunity-sumenep': {
    categories: ['Information Systems', 'Community'],
    shortDescription: 'A centralized public job listing aggregator for Sumenep Regency and the wider Madura region, with transparent Rule-Based Matching job recommendations.',
    problem: 'Job listings in Sumenep are scattered across many different platforms, making it hard for job seekers, especially in the island sub-districts, to find them.',
    solution: 'A job-listing aggregator portal pulling from various public and government sources, with transparent Rule-Based Matching recommendations.',
    role: 'Initiated and built entirely by the SYNVORA team as a self-directed initiative, not a commissioned project.',
    overview:
      'JOS (Job Opportunity Sumenep) is a web-based job listing aggregator that pulls listings from various public sources (such as Glints, JobStreet, KitaLulus, Pintarnya) and official government sources (Disnaker Sumenep), then presents them in one structured, searchable portal built specifically for residents of Sumenep and the wider Madura region. JOS is not a job marketplace: every listing still points applicants to its original source page; JOS only acts as a search engine and aggregator.',
    features: [
      'An automated Python-based web scraper that pulls data from 7 public and government sources on a schedule',
      'Search and filter listings by location, position, education, experience, skills, job type, and source',
      'Smart Job Matching: a transparent rule-based match score (not an AI black box) from skills, education, location, experience, interest, and age',
      'A complete job-seeker profile: education, experience, skills, location, and job preferences',
      'Saved Jobs to bookmark listings and reopen them without searching again',
      'An administrator dashboard: listing statistics, scraping-source management, manual sync, and a system activity log',
    ],
    benefits: [
      'Centralizes listing information that used to be scattered across many sites into one Sumenep-specific portal',
      'Reaches job seekers in Sumenep’s mainland and island sub-districts equally',
      '100% free and with no middleman, still pointing applicants straight to the official source',
    ],
    coolFeatures: [
      'Every match score can be answered with "Why?" — the weighting behind each criterion (skills 30%, education 20%, location 20%, experience 15%, interest 10%, age 5%) is shown transparently to the user',
      'A modular, per-source scraper design means a new listing source can be added without touching the core system',
    ],
  },
  'belajar-bahasa-madura': {
    categories: ['Education'],
    shortDescription: 'A digital platform for learning, looking up, and translating the Madurese language in structured stages, installable as an app and usable fully offline.',
    problem: 'The Madurese language is at risk of erosion from a lack of structured digital learning tools accessible to younger generations.',
    solution: 'A dictionary, translator, and tiered Madurese-learning platform that works offline as an installable PWA.',
    role: 'Initiated and built entirely by the SYNVORA team as a self-directed initiative, not a commissioned project.',
    overview:
      "BBM (Belajar Bahasa Madura) is a single platform for learning, looking up, and translating the Madurese language, used together in classrooms or studied independently at home. Its material is organized in tiers following the authentic curriculum: from letters & spelling, syllables, words, up through sentences and speech-level register (Ondhâghen Basa, from Enjâ'-Iyâ, Engghi-Enten, to Engghi-Bhunten), a defining feature of Madurese speech etiquette. BBM can be installed as an app (PWA) and keeps working with no internet connection, suited to schools with limited connectivity.",
    features: [
      'An Indonesian-Madurese digital dictionary with word classes and example sentences, KBBI-style',
      'Two-way Indonesian-Madurese translation',
      'Automatic syllable splitting to help with spelling and reading',
      'An automatic root-word parser, breaking down affixed words without relying on a static dictionary lookup',
      'A tiered learning path (letters, syllables, words, sentences & speech-level register) with quizzes and progress that unlocks in stages',
      'Language Lab (TTS), an admin tool to record and curate a Madurese voice corpus by letter/syllable/word/sentence',
      'Multi-role user management: students, university students, teachers, lecturers, and general users',
    ],
    benefits: [
      'Supports preserving the Madurese language in the hands of younger generations',
      'Can be installed as an app and keeps working without an internet connection',
      'Accessible to all ages, with large tap targets, clear contrast, and navigation that works from elementary students to senior teachers',
    ],
    coolFeatures: [
      'Language Lab (TTS) builds an authentic Madurese voice corpus in a structured way, a foundation toward Madurese text-to-speech',
      'The automatic root-word parser breaks down affixed words on its own, rather than just matching against a word list',
    ],
  },
  'sep-smart-event-sumenep': {
    categories: ['Government', 'Information Systems', 'AI'],
    shortDescription: 'An impact-based decision-support platform and official public calendar for regional events in Sumenep, SYNVORA’s entry at the 2026 Regional Innovation Awards.',
    problem: 'There was no consistent way to measure and compare the impact of regional cultural/tourism events year over year.',
    solution: 'A decision-support platform based on impact scoring (economic & digital enthusiasm) that doubles as an official public event calendar.',
    role: 'Initiated and built by the SYNVORA team as a self-directed initiative, submitted to BRIDA Sumenep Regency’s 2026 Regional Innovation Awards (Anugerah Inovasi Daerah).',
    overview:
      'SEP (Smart Event Sumenep) is a decision-support platform for regional events that doubles as an official public calendar. Every event, from Kerapan Sapi (bull races) and Petik Laut to the Tong-Tong Music Festival and Madura Culture Fest, is logged per annual edition so its impact can be compared consistently year over year, while residents get a single reliable, official source of event information. SEP is a community-category innovation SYNVORA submitted to the 2026 Regional Innovation Awards (Anugerah Inovasi Daerah/AID) held by BRIDA Sumenep Regency. SEP is currently still a prototype/submission and doesn’t yet have a live public link.',
    features: [
      'An Economic Score from visitor volume, out-of-town visitor spending, and SME revenue growth',
      'A Digital Enthusiasm Score from operator-curated TikTok activity (volume and sentiment)',
      'Visitor estimation from venue video using YOLOv8 (counting only, no face recognition)',
      'A self-service public survey via QR code with margin of error as an accuracy measure',
      'A 3x3 strategy matrix with recommendations traceable back to their data sources',
      'An official public calendar with full agenda details, galleries, maps, and RSVP',
    ],
    benefits: [
      'Consistent, data-based impact evaluation across events, rather than assumptions',
      'A single official event information source for residents, replacing word-of-mouth that’s often inconsistent',
      'Honest about its data: when the data is weak, the system states it needs further evaluation rather than forcing a recommendation',
    ],
    coolFeatures: [
      'Combines computer vision (YOLOv8) with Indonesian/Madurese sentiment analysis (IndoBERTweet) to read event impact holistically',
      'Every recommendation can be answered with "Why?", traceable down to its scoring components and original data source',
    ],
  },
  'ds-studio': {
    categories: ['Website', 'Small Business'],
    shortDescription: 'The official website for DS Studio, a photo and videography studio in Sumenep, with a category-based portfolio gallery, booking flow, and FAQ.',
    problem: "DS Studio had no official digital channel to showcase its portfolio and explain its services, so prospective clients had to ask the same questions over and over in chat before booking.",
    solution: 'A one-page website with a category-based portfolio gallery, service descriptions, a 4-step booking flow, and an FAQ, routing prospective clients straight to WhatsApp to continue the transaction.',
    role: 'Design and development of the website for DS Studio.',
    overview:
      'The official website for DS Studio, a photo and videography studio in Sumenep, Madura. The site presents nine service categories (wedding & akad nikah, prewedding, graduation, maternity & seven-month pregnancy, portrait & personal branding, studio couple & family photos, event & institutional documentation, video documentation, and digital invitations), a category-based portfolio gallery, an About page, a Cara Booking (how to book) flow, an FAQ, and direct contact via WhatsApp and Instagram.',
    features: [
      'Portfolio gallery with Wedding, Prewedding, Graduation, Maternity, Portrait, Studio, and Event categories',
      'Descriptions of 9 service categories, from wedding & akad nikah to digital invitations',
      '4-step booking flow: WhatsApp chat, pick a package, lock in the schedule, session & receive results',
      'An FAQ page answering common questions about location, pricing, outdoor shoots, and service area',
      'A studio location map and direct contact buttons for WhatsApp and Instagram',
    ],
    benefits: [
      'Prospective clients can see the portfolio and understand the service scope before contacting the studio',
      'A clear booking flow cuts down on repeated questions over WhatsApp',
      'A responsive design that works well on mobile, the primary device of prospective clients',
    ],
    coolFeatures: [
      'A floating WhatsApp button visible on every page to speed up contact',
      "An FAQ written from prospective clients' real questions about location, pricing, and service area, not a generic list",
    ],
  },
  'labkesda-sumenep': {
    categories: ['Website', 'Government'],
    shortDescription: 'The official website for UPTD Labkesda Sumenep (the regional health laboratory), with online registration and service information.',
    problem: 'Residents had no official channel to view regional health laboratory services and register for a test without visiting in person.',
    solution: 'The official UPTD Labkesda Sumenep website with online registration, service information, and a public complaints channel.',
    role: 'Design, development, and launch of the website for UPTD Labkesda Sumenep.',
    overview:
      'The official website of UPTD Laboratorium Kesehatan Daerah (the regional health laboratory) of Sumenep Regency, designed as the primary information and registration channel for laboratory testing services to the public.',
    features: [
      'Online registration for laboratory tests',
      'Service type and pricing information',
      'Institutional profile and organizational structure',
      'Activity gallery and latest news',
      'A public contact and complaints form',
    ],
    benefits: [
      'A responsive design accessible on any device',
      'Clear, well-structured information navigation',
      'Integrated with the institution’s official visual identity',
    ],
    coolFeatures: [
      'An online registration flow that cuts down physical queues',
      'Real-time service information updates',
    ],
  },
  produli: {
    categories: ['Website', 'Health'],
    shortDescription: 'A preventive health platform built on laboratory data, with automatic risk analysis and real-time visit monitoring.',
    problem: 'Medical staff struggled to consistently monitor Prolanis (chronic disease management) program participants because test data was scattered and recorded manually.',
    solution: 'A dashboard that turns laboratory data into automatic risk analysis and real-time participant visit monitoring.',
    role: 'Design and development of the Produli dashboard for UPTD Labkesda Sumenep.',
    overview:
      'A preventive health platform that helps medical staff monitor participants in the Prolanis (chronic disease management) program, built on laboratory data.',
    features: [
      'An automatic health risk analysis dashboard',
      'Real-time participant visit monitoring',
      'Integrated patient test history',
      'Routine check-up schedule notifications',
    ],
    benefits: [
      'Helps with early detection of participants’ health risks',
      'Reduces manual record-keeping work for medical staff',
      'Centralized data, easily accessible to the medical team',
    ],
    coolFeatures: [
      'Automatic risk analysis built on laboratory data',
      'Visualized patient health trends over time',
    ],
  },
  silacare: {
    categories: ['Website', 'Mobile App'],
    shortDescription: 'A patient digital portal (hybrid web app/PWA) for viewing lab test history, online queueing, and free test registration.',
    problem: 'Patients had to visit the laboratory in person just to ask about test history, join a queue, or register.',
    solution: 'A patient digital portal (hybrid web app/PWA) for test history, online queueing, and free test registration.',
    role: 'Design and development of the SiLACARE portal as a hybrid web app/PWA for UPTD Labkesda Sumenep.',
    overview:
      'A patient digital portal, built as a hybrid web app/PWA, that lets the public access health laboratory services without visiting in person just to ask a question or register. It can be opened directly in a browser or installed like an app on a phone.',
    features: [
      'Digital laboratory test history',
      'An online queueing system',
      'Free test registration',
      'Notifications once test results are ready',
    ],
    benefits: [
      'Reduces wait times at the laboratory location',
      'Access to health history whenever needed',
      'A faster, more transparent registration process',
    ],
    coolFeatures: [
      'Online queueing directly integrated with the laboratory schedule',
      'Automatic notifications as soon as test results are available',
    ],
  },
  'kancana-brida': {
    categories: ['Website', 'Government', 'AI'],
    shortDescription: 'An AI chatbot for Sumenep Regency’s Regional Research and Innovation Agency (BRIDA), helping residents get research and innovation information quickly.',
    problem: 'Residents struggled to get information about regional research and innovation programs quickly outside of service hours.',
    solution: 'An AI-based chatbot answering questions about regional research and innovation 24/7 on BRIDA Sumenep Regency’s official site.',
    role: 'Design and development of the Kancana chatbot for BRIDA Sumenep Regency.',
    overview:
      'An AI-based chatbot for Sumenep Regency’s Regional Research and Innovation Agency (BRIDA), helping the public get information about regional research and innovation programs quickly and interactively.',
    features: [
      'Automated AI-based Q&A',
      'Regional research and innovation program information',
      'Real-time responses available 24/7',
      'An easy-to-use conversational interface',
    ],
    benefits: [
      'Speeds up public access to information',
      'Reduces manual information-service workload',
      'Available any time, not bound to office hours',
    ],
    coolFeatures: [
      'Powered by AI for natural language understanding',
      'Instant responses with no need to wait for a staff member',
    ],
  },
};
