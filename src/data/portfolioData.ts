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
    liveUrl: 'https://aitm-badminton-2026.vercel.app',
    accentColor: '#00D9FF',
    stats: [
      { label: 'Role', value: 'Lead Full-Stack Developer' },
      { label: 'Stack', value: 'Next.js + Supabase' },
      { label: 'Status', value: 'Live & Operational' },
    ],
  },
  {
    id: 'browser-vision-agent',
    title: 'On-Device Browser Vision Agent',
    subtitle: 'Client-Side Real-Time Visual Perception Engine',
    tagline: 'Zero-latency computer vision agent running lightweight neural networks locally in web browsers using WebGPU and ONNX.',
    description:
      'An AI/browser vision project focused on lightweight visual perception directly on the device using technologies such as ONNX and WebGPU.',
    category: 'Edge AI & Computer Vision',
    technologies: ['AI / ML', 'Computer Vision', 'ONNX Runtime Web', 'WebGPU', 'JavaScript', 'TypeScript'],
    highlights: [
      'Zero server dependency with 100% local client-side model execution',
      'Hardware-accelerated tensor operations via WebGPU & WebAssembly kernels',
      'Real-time video feed analysis achieving 30+ FPS on consumer laptops',
      'Privacy-first design: no images or camera feeds ever leave the user device',
      'Dynamic model quantization for seamless cross-platform performance'
    ],
    overview:
      'A pioneering computer vision solution that brings intelligent perception directly into client browsers. By utilizing ONNX Runtime Web and modern WebGPU compute shaders, the application analyzes visual input locally in real time without incurring server GPU hosting bills or transmitting private video streams.',
    problem:
      'Traditional cloud vision architectures require continuous video frame streaming to remote servers. This introduces network lag (150-500ms), prohibitive cloud compute expenses, and severe user privacy vulnerabilities.',
    solution:
      'Constructed a client-side execution pipeline utilizing quantized neural vision models deployed through ONNX Runtime Web with WebGPU backends. Shaders process raw video frame textures directly in the browser graphics pipeline.',
    challenges:
      'Managing browser memory limitations, balancing model size versus detection precision, and handling cross-browser variations in WebGPU support gracefully.',
    githubUrl: 'https://github.com/ubaidq01/on-device-browser-vision-agent',
    liveUrl: 'https://browser-vision-agent.vercel.app',
    accentColor: '#38BDF8',
    stats: [
      { label: 'Inference', value: 'Local WebGPU' },
      { label: 'Latency', value: '< 20ms' },
      { label: 'Privacy', value: '100% Client-Side' },
    ],
  },
  {
    id: 'fake-qr-code-detection',
    title: 'Fake QR Code Detection',
    subtitle: 'AI-Based Physical & Digital Quishing Countermeasure',
    tagline: 'Intelligent security system analyzing visual print anomalies, physical sticker tampering, and malicious redirect vectors.',
    description:
      'An AI-based system designed to identify potentially fake or suspicious QR codes using machine learning and computer vision techniques.',
    category: 'AI & Cybersecurity',
    technologies: ['Python', 'Machine Learning', 'Computer Vision', 'OpenCV', 'Gradient Boosting', 'Neural Networks'],
    highlights: [
      'Dual-layer inspection: physical image tampering detection + URL heuristic risk analysis',
      'Computer vision edge and resolution disparity algorithms to uncover physical sticker overlays',
      'Machine learning model ensemble (Gradient Boosting & CNNs) classifying anomaly features',
      'Real-time confidence scoring identifying deceptive and malicious QR payloads',
      'OpenCV pipeline compensating for perspective distortion, specular highlights, and camera noise'
    ],
    overview:
      'A specialized security project tackling the surge in physical QR phishing attacks (quishing). The system blends computer vision forensics with predictive machine learning models to detect whether a QR code is counterfeit, pasted over a legitimate target, or pointing to a credential-harvesting trap.',
    problem:
      'Malicious actors frequently paste deceptive QR code stickers over genuine parking meters, restaurant menus, and payment displays. Normal scanners blindly decode the URL, exposing unsuspecting users to financial loss and phishing.',
    solution:
      'Developed an end-to-end Python pipeline. OpenCV performs morphological edge detection and texture gradient checks around code borders to detect physical sticker overlays. The decoded content is concurrently assessed by a trained Gradient Boosting classifier to evaluate domain entropy and phishing signatures.',
    challenges:
      'Accurately distinguishing between legitimate wear-and-tear or environmental lighting anomalies and calculated physical sticker attacks without generating false positives.',
    githubUrl: 'https://github.com/ubaidq01/fake-qr-code-detection',
    liveUrl: '',
    accentColor: '#60A5FA',
    stats: [
      { label: 'Domain', value: 'Computer Vision & ML' },
      { label: 'Target', value: 'Quishing Prevention' },
      { label: 'Core Engine', value: 'OpenCV + Ensemble' },
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
