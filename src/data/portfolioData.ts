import { Project, TechCategory, TimelineMilestone, StatMetric } from '@/types';

export const PERSONAL_INFO = {
  name: 'Ubaid Quazi',
  title: 'CS (Data Science) Engineering Student & Full-Stack Developer',
  shortBio:
    'Computer Science \u2013 Data Science Engineering student passionate about building modern web applications, AI-powered systems, computer vision projects, and practical software products.',
  statusBadge: 'AVAILABLE FOR OPPORTUNITIES',
  githubUrl: 'https://github.com/ubaidq01',
  linkedinUrl: 'https://www.linkedin.com/in/ubaid-quazi-88585a252/',
  email: 'ubaidquazi8@gmail.com',
  location: 'India',
  heroHeading: "Hi, I'm Ubaid Quazi.",
  heroSubheading: 'I Build Digital Experiences & Intelligent Systems.',
  heroDescription:
    'Computer Science \u2013 Data Science Engineering student and developer focused on building modern web applications, AI-powered systems, and practical software solutions.',
};

export const STATS: StatMetric[] = [
  {
    label: 'Architecture & Craft',
    value: 'Full-Stack',
    description: 'Specialized in modern Next.js, Node.js, and serverless architectures.',
  },
  {
    label: 'Core Focus',
    value: 'AI & Vision',
    description: 'On-device neural inference, computer vision, and real-time models.',
  },
  {
    label: 'Software Delivery',
    value: 'Production Ready',
    description: 'Built scalable systems like tournament management platforms with active users.',
  },
  {
    label: 'Development Ethos',
    value: 'Open Source',
    description: 'Active learner, building in public and contributing to modern developer tooling.',
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'aitm-badminton-championship',
    title: 'AITM Badminton Championship 2026',
    subtitle: 'Full-Stack Tournament Registration & Management Platform',
    tagline: 'End-to-end player registration, automated payment verification, college ID authentication, and administrative bracket control.',
    description:
      'A full-stack tournament registration and management platform with player registration, payment verification, college ID verification, admin dashboard, and tournament management functionality.',
    category: 'Full-Stack Web App',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    highlights: [
      'Team & individual registration workflow with dynamic roster validation',
      'Digital payment receipt and transaction verification pipeline',
      'College institutional ID verification to enforce player eligibility',
      'Comprehensive real-time admin dashboard for bracket and draw control',
      'Automated registration status tracking and notification feedback'
    ],
    overview:
      'A comprehensive, production-grade tournament portal engineered for the AITM Badminton Championship 2026. Prior to this platform, organizing sports tournaments suffered from fragmented Google Sheets, unverified payment screenshots in chat groups, and difficult eligibility audits. This platform automates the entire lifecycle from student enrollment to draw administration.',
    problem:
      'Manual registration processes created severe logistical bottlenecks: duplicate entries, fraudulent payment claims, unvalidated student IDs, and chaotic match scheduling under heavy deadline traffic.',
    solution:
      'Architected an event management web platform using Next.js App Router and Supabase. The system provides role-based authentication, an intuitive multi-step registration wizard, file upload handling with bucket security for ID cards & transaction slips, and an organizer control center.',
    challenges:
      'Ensuring low latency during peak registration deadlines, maintaining atomic transactions for team slots, and designing a bulletproof verification review queue for organizers.',
    githubUrl: 'https://github.com/ubaidq01/aitm-badminton-championship-2026',
    liveUrl: 'https://aitm-badminton-championship-2026.vercel.app/',
    accentColor: '#00D9FF',
    stats: [
      { label: 'Role', value: 'Lead Full-Stack Developer' },
      { label: 'Stack', value: 'Next.js + Supabase' },
      { label: 'Status', value: 'Live & Operational' },
    ],
  },
  {
    id: 'fixit',
    title: 'FixIt',
    subtitle: 'Campus & Community Issue Reporting and Resolution Platform',
    tagline: 'A centralized platform streamlining civic complaint reporting, automated priority triage, and administrative maintenance dispatch.',
    description:
      'A full-stack issue tracking and maintenance management platform engineered to report, categorize, and track campus infrastructure issues from submission to resolution.',
    category: 'Full-Stack Web & Systems',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
    highlights: [
      'Multi-category issue reporting with geolocation tagging and photo evidence uploads',
      'Automated priority classification triage based on infrastructure severity and urgency',
      'Administrative dispatch workflow assigning tasks to specialized maintenance units',
      'Real-time ticket lifecycle tracking (Submitted \u2192 Triaged \u2192 In Progress \u2192 Resolved)',
      'Resolution verification with before/after status updates and closure feedback audit'
    ],
    overview:
      'FixIt is a comprehensive issue management system designed to eliminate unorganized campus grievances and delayed repairs. Traditional reporting methods relied on scattered manual complaint registers or lost emails, resulting in prolonged downtime for campus utilities and broken infrastructure. FixIt streamlines the entire lifecycle into an accountable, transparent, digital resolution pipeline.',
    problem:
      'Campus infrastructure issues (damaged lab equipment, electrical faults, plumbing leaks, and IT outages) were documented in disconnected manual logs. Administration lacked visibility into recurring failure points, response times were slow, and students had zero visibility into resolution progress.',
    solution:
      'Architected a centralized reporting portal featuring authenticated user submissions with image attachments and severity tagging. Built an administrative command dashboard featuring real-time ticket triage, automated assignment routing to maintenance supervisors, and an audit trail ensuring timely issue resolution.',
    challenges:
      'Preventing duplicate reports for high-visibility public issues, designing an efficient state machine for ticket transitions, and maintaining responsive performance across mobile devices for field technicians.',
    githubUrl: '',
    liveUrl: '',
    accentColor: '#FF7A00',
    stats: [
      { label: 'Architecture', value: 'Full-Stack Issue Tracking' },
      { label: 'Triage System', value: 'Priority-Based Queuing' },
      { label: 'Verification', value: 'Evidence Photo Audit' },
    ],
  },
  {
    id: 'blackout',
    title: 'Blackout',
    subtitle: '2D Multiplayer Social Deduction & Meltdown Survival Game',
    tagline: '8-player top-down multiplayer game set in the compromised Asterion Research Facility. Built in Godot Engine 4 with GDScript.',
    description:
      'A 2D top-down multiplayer social deduction game where 7 crew members repair facility systems and investigate clues while 1 hidden impostor triggers blackouts and sabotages the core.',
    category: 'Multiplayer Game Development',
    technologies: ['Godot Engine 4', 'GDScript', 'Multiplayer Networking', '2D Shaders', 'Game Design'],
    highlights: [
      'Co-op multiplayer game being developed collaboratively with friends in Godot Engine 4',
      'Member 4 Role: Client Interaction & Mini-Game Programmer (station inputs & task mechanics)',
      'Dual-phase gameplay: normal operations, remote blackout power cuts, emergency meetings, and 5-minute meltdown climax',
      'Pure social deduction mechanics based on physical clues, missing files, and broken relays',
      'Active work-in-progress with dedicated modular architecture and multiplayer state synchronization'
    ],
    overview:
      'Blackout is an ambitious 2D top-down multiplayer social deduction and survival game set in the compromised Asterion Research Facility. Built collaboratively with a team of friends using Godot Engine 4 and GDScript, 7 loyal crew members must complete daily maintenance tasks and solve distributed recovery systems, while 1 covert Impostor triggers facility-wide blackouts to steal classified research files and induce a core meltdown.',
    problem:
      'Many multiplayer party games suffer from repetitive mechanics or reliance on automated game-assisted lie detectors, missing the tension of true physical evidence investigation and high-stakes cooperative survival.',
    solution:
      'Collaboratively engineering a multi-phase game loop combining physical station interactions, dynamic darkness lighting shaders, interactive crew mini-games, and a tense 5-minute final Meltdown phase. As Member 4 on the development team, responsible for client-side interaction architecture, crew maintenance mini-games, and interactive station inputs.',
    challenges:
      'Ensuring smooth client-side input responsiveness, syncing interactive task state with the authoritative game server, and designing engaging mini-games that balance difficulty under time pressure.',
    githubUrl: 'https://github.com/ABUBAK3R-K/Blackout',
    liveUrl: '',
    accentColor: '#8B7CFF',
    stats: [
      { label: 'Role', value: 'Client Interaction & Mini-Games' },
      { label: 'Engine', value: 'Godot 4 + GDScript' },
      { label: 'Status', value: 'In Active Development' },
    ],
  },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    description: 'Core programming languages used for systems, scripting, and web applications.',
    skills: [
      { name: 'Python', description: 'Data structures, AI/ML pipelines, OpenCV, Flask', highlight: true },
      { name: 'TypeScript', description: 'Type-safe scalable frontends and server runtimes', highlight: true },
      { name: 'JavaScript', description: 'Modern ES6+, DOM manipulation, asynchronous patterns', highlight: true },
      { name: 'Java', description: 'Object-oriented software engineering, backend architecture' },
      { name: 'C++', description: 'High-performance algorithms, data structures, systems' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Building responsive, modern, and high-performance user interfaces.',
    skills: [
      { name: 'Next.js', description: 'App Router, Server Components, SSR/SSG, optimizations', highlight: true },
      { name: 'React', description: 'Component architecture, custom hooks, state management', highlight: true },
      { name: 'Tailwind CSS', description: 'Design systems, responsive utilities, dark mode' },
      { name: 'HTML5', description: 'Semantic structure, accessible markup, SEO standards' },
      { name: 'CSS3', description: 'Modern layouts, flexbox, grid, keyframe animations' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    description: 'Developing server runtimes, REST APIs, and application services.',
    skills: [
      { name: 'Node.js', description: 'Event-driven backend services and API servers', highlight: true },
      { name: 'Express', description: 'Modular routing, middleware, authentication flows' },
      { name: 'Flask', description: 'Lightweight Python microservices and model serving' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    description: 'Relational and document storage solutions for scalable applications.',
    skills: [
      { name: 'Supabase', description: 'PostgreSQL, Row Level Security, Auth, Realtime', highlight: true },
      { name: 'MongoDB', description: 'NoSQL document storage, flexible schema design' },
      { name: 'MySQL', description: 'Relational data modeling, ACID transactions, queries' },
    ],
  },
  {
    id: 'ai-cv',
    title: 'AI / Computer Vision',
    description: 'Machine learning, deep learning, and browser-accelerated vision perception.',
    skills: [
      { name: 'PyTorch', description: 'Neural network training, loss optimization, models', highlight: true },
      { name: 'OpenCV', description: 'Image filtering, contour detection, visual feature extraction', highlight: true },
      { name: 'ONNX', description: 'Cross-platform model interchange & browser inference', highlight: true },
      { name: 'WebGPU', description: 'Hardware-accelerated shader computing in web browsers', highlight: true },
      { name: 'TensorFlow', description: 'Machine learning workflows and model architectures' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    description: 'Developer tooling, version control, and production deployment.',
    skills: [
      { name: 'Git', description: 'Version control, branching strategies, collaborative workflows', highlight: true },
      { name: 'GitHub', description: 'Code hosting, CI/CD actions, open source collaboration', highlight: true },
      { name: 'VS Code', description: 'Primary IDE, debugging, productivity extensions' },
      { name: 'Vercel', description: 'Continuous deployment, serverless edge hosting' },
      { name: 'Linux', description: 'Bash scripting, server environments, command-line tooling' },
    ],
  },
];

export const TIMELINE: TimelineMilestone[] = [
  {
    period: 'Ongoing Journey',
    category: 'CS & Data Science Engineering',
    title: 'Computer Science \u2013 Data Science Engineering Student',
    subtitle: 'Data Science, Core Systems & Algorithmic Foundations',
    description:
      'Pursuing an engineering degree in Computer Science specializing in Data Science. Grounded in mathematical foundations, statistical learning, machine learning pipelines, and core systems (Data Structures & Algorithms, Object-Oriented Software Design in Java/C++, Database Systems, and Operating Systems).',
    tags: ['Data Science', 'Machine Learning', 'Algorithms', 'Data Structures', 'Python', 'C++'],
    iconType: 'code',
  },
  {
    period: 'Full-Stack Engineering',
    category: 'Production Systems',
    title: 'AITM Badminton Championship Platform',
    subtitle: 'Scalable Tournament Management Architecture',
    description:
      'Architected and deployed a comprehensive registration and bracket management web platform utilizing Next.js, TypeScript, Tailwind CSS, and Supabase with automated verification workflows.',
    tags: ['Next.js', 'Supabase', 'PostgreSQL', 'TypeScript', 'Tailwind CSS'],
    iconType: 'rocket',
  },
  {
    period: 'AI & Edge Exploration',
    category: 'Machine Learning & Vision',
    title: 'On-Device Computer Vision & Security',
    subtitle: 'Browser-Based Inference & Quishing Detection Systems',
    description:
      'Engineered an in-browser vision agent utilizing ONNX Runtime Web and WebGPU for zero-server inference, and developed a machine learning QR code phishing detection pipeline using OpenCV and ensemble classifiers.',
    tags: ['ONNX', 'WebGPU', 'OpenCV', 'PyTorch', 'Machine Learning'],
    iconType: 'brain',
  },
  {
    period: 'Continuous Growth',
    category: 'Open Source & Innovation',
    title: 'Building in Public & Developer Tools',
    subtitle: 'Exploring the Intersection of AI and the Modern Web',
    description:
      'Actively exploring on-device intelligence, interactive UI design, performant microservices, and contributing open source code on GitHub.',
    tags: ['Open Source', 'GitHub', 'Modern Web', 'Edge AI'],
    iconType: 'terminal',
  },
];

export const AI_FOCUS_AREAS = [
  {
    title: 'On-Device Browser AI',
    description: 'Eliminating cloud latency and preserving privacy by executing quantized neural models directly on the client using WebGPU and ONNX.',
    badge: 'Edge Acceleration',
  },
  {
    title: 'Computer Vision Systems',
    description: 'Transforming raw pixels into actionable perception with OpenCV, neural feature extractors, and geometric anomaly detection.',
    badge: 'Visual Intelligence',
  },
  {
    title: 'Applied Machine Learning',
    description: 'Developing practical classifiers, gradient boosted ensembles, and deep neural nets focused on concrete, real-world utility.',
    badge: 'Pragmatic ML',
  },
  {
    title: 'Modern Web Architectures',
    description: 'Building snappy, accessible, and reactive user interfaces that seamlessly present complex model outputs with maximum clarity.',
    badge: 'Full-Stack Delivery',
  },
];
