/**
 * Portfolio Data Configuration
 * Central source of truth for Chethan Kumar Reddy Lekkala's portfolio.
 * Easily update personal details, skills, projects, and milestones here.
 */

export const personalInfo = {
  name: 'Chethan Kumar Reddy Lekkala',
  shortName: 'Chethan',
  brandName: 'CHEthan',
  brandSuffix: '/DEV',
  role: 'Computer Science Student & Aspiring Software Developer',
  email: 'CHETHANKUMARREDDYLEKKALA@GMAIL.COM',
  phone: '+91 8919775457',
  location: 'Mydukur, Kadapa, Andhra Pradesh, India',
  status: 'Open to Learning & Collaboration',
  educationSummary: 'B.Tech in IoT & Blockchain Technology, NIAT at Annamacharya University (2026–2030)',
  socialLinks: {
    github: 'https://github.com/chethanlekkala1516-png',
    linkedin: 'https://www.linkedin.com/in/chethan-kumar-reddy-lekkala-42320b430/',
    email: 'mailto:CHETHANKUMARREDDYLEKKALA@GMAIL.COM'
  },
  assets: {
    profilePhoto: '/profile-photo.png',
    resumePdf: '/resume.pdf',
    certificatePdf: '/gesture-tech-workshop-certificate.pdf'
  },
  heroPhrases: [
    'Computer Science Student',
    'Aspiring Software Developer',
    'Learning by Building',
    'IoT & Web Tech Enthusiast'
  ]
};

export const aboutData = {
  headline: 'Building strong foundations, one line of code at a time.',
  bioParagraphs: [
    'I am Chethan Kumar Reddy Lekkala, a first-year B.Tech student specializing in IoT and Blockchain Technology at NIAT at Annamacharya University (Batch 2026–2030).',
    'My passion lies in understanding how modern software and connected systems work under the hood. As an aspiring developer, I believe the most effective way to learn is by actively building practical projects, experimenting with clean architectures, and continuously improving based on real feedback.',
    'Currently, I am sharpening my problem-solving skills in Python, mastering modern responsive web development with React and Vite, and exploring backend engineering with Express.js.'
  ],
  academicHighlights: [
    { label: 'Degree', value: 'B.Tech — IoT & Blockchain', sub: 'NIAT, Annamacharya University (2026–2030)' },
    { label: 'Intermediate (XII)', value: '95.6%', sub: 'Sri Chaitanya Junior College, Vijayawada' },
    { label: 'Secondary (X)', value: '95.0%', sub: 'Santiniketan High School, Mydukur' }
  ],
  principles: [
    { title: 'Learn by Doing', desc: 'Code every day and turn theoretical concepts into working prototypes.' },
    { title: 'Clean Architecture', desc: 'Write organized, accessible, and maintainable code from day one.' },
    { title: 'Honest Growth', desc: 'Transparently track what is planned, what is in progress, and what is completed.' }
  ]
};

export const skillsData = [
  {
    category: 'Programming & Logic',
    id: 'programming',
    summary: 'Core algorithmic thinking and foundational languages',
    items: [
      { name: 'Python', status: 'Active Foundation', level: 'Core' },
      { name: 'JavaScript (ES6+)', status: 'Learning & Building', level: 'Intermediate' }
    ]
  },
  {
    category: 'Web Development',
    id: 'web',
    summary: 'Modern frontend design, semantic markup, and responsive UI',
    items: [
      { name: 'HTML5 Semantic', status: 'Solid Foundation', level: 'Core' },
      { name: 'CSS3 / Modern Flex & Grid', status: 'Solid Foundation', level: 'Core' },
      { name: 'React (v18+)', status: 'Active Practice', level: 'Exploring' },
      { name: 'Vite Tooling', status: 'Active Practice', level: 'Exploring' }
    ]
  },
  {
    category: 'Backend & Data (Exploring)',
    id: 'backend',
    summary: 'Server-side fundamentals and REST API development',
    items: [
      { name: 'Node.js', status: 'Exploring', level: 'Foundational' },
      { name: 'Express.js', status: 'Exploring', level: 'Foundational' },
      { name: 'REST APIs & JSON', status: 'Exploring', level: 'Foundational' },
      { name: 'SQLite', status: 'Planned Practice', level: 'Beginner' }
    ]
  },
  {
    category: 'Developer Tools & Workflow',
    id: 'tools',
    summary: 'Source control, modern editors, and developer productivity',
    items: [
      { name: 'Git', status: 'Daily Tool', level: 'Core' },
      { name: 'GitHub', status: 'Daily Tool', level: 'Core' },
      { name: 'VS Code', status: 'Daily Tool', level: 'Core' },
      { name: 'Google Antigravity', status: 'AI Pair Programming', level: 'Active' }
    ]
  },
  {
    category: 'Domains of Interest',
    id: 'interests',
    summary: 'Future engineering specializations and research topics',
    items: [
      { name: 'Internet of Things (IoT)', status: 'Degree Major', level: 'Academic' },
      { name: 'Blockchain Technology', status: 'Degree Major', level: 'Academic' },
      { name: 'Full-Stack Web Apps', status: 'Career Goal', level: 'Pursuing' },
      { name: 'Artificial Intelligence', status: 'Curious Learner', level: 'Exploring' }
    ]
  }
];

export const projectsData = [
  {
    id: 'neon-portfolio',
    title: 'Futuristic Developer Portfolio',
    category: 'Full Stack',
    type: 'PERSONAL SITE',
    status: 'In Progress',
    badgeTone: 'cyan',
    featured: true,
    tagline: 'An advanced, high-performance developer portfolio with client & Express API.',
    problemStatement: 'Aspiring developers need a unique, responsive, accessible platform that authentically showcases their real skills, projects, and education to recruiters without deceptive claims.',
    description: 'Built with React 18, Vite, and custom CSS design systems, integrated with an Express.js backend handling contact rate limiting, validation, and local storage fallback.',
    intendedUsers: 'Recruiters, engineering mentors, hackathon judges, and fellow student developers.',
    stack: ['React 18', 'Vite', 'Express.js', 'CSS3 Variables', 'Helmet', 'Nodemailer'],
    keyFeatures: [
      'Modular React component architecture with clean separation of concerns',
      'Futuristic dark aesthetic with subtle violet/cyan ambient lighting',
      'Real backend contact API with rate-limiting and local JSON persistence fallback',
      'Full keyboard accessibility, focus rings, and prefers-reduced-motion safety',
      'Verified resume download and workshop certificate viewer'
    ],
    github: 'https://github.com/chethanlekkala1516-png',
    demo: '#',
    hasDemo: true,
    visualType: 'portfolio'
  },
  {
    id: 'study-track',
    title: 'StudyTrack — Student Productivity Planner',
    category: 'Web Development',
    type: 'CONCEPT · PLANNED',
    status: 'Planned',
    badgeTone: 'violet',
    featured: false,
    tagline: 'A focused academic dashboard for managing courses, revision intervals, and daily targets.',
    problemStatement: 'First-year college students often struggle with fragmented assignment schedules, unstructured exam preparation, and inconsistent daily habits.',
    description: 'A planned productivity web app designed specifically for B.Tech students. It will organize subjects, schedule pomodoro focus blocks, and visualize study trends over time.',
    intendedUsers: 'Undergraduate students and self-taught learners managing complex course schedules.',
    stack: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Local Storage / SQLite'],
    keyFeatures: [
      'Subject-wise timetable and syllabus completion tracker',
      'Daily goal check-ins and session interval timers',
      'Clean offline-friendly data persistence',
      'Lightweight statistics on daily study consistency'
    ],
    github: '',
    demo: '',
    hasDemo: false,
    visualType: 'tracker'
  },
  {
    id: 'expense-tracker',
    title: 'Smart Bill & Expense Manager',
    category: 'Python',
    type: 'CONCEPT · PLANNED',
    status: 'Planned',
    badgeTone: 'pink',
    featured: false,
    tagline: 'A streamlined budget recording tool to categorize daily expenses and calculate savings.',
    problemStatement: 'Keeping track of day-to-day college expenses and recurring bills is tedious without a clean, automated categorization utility.',
    description: 'A planned beginner-friendly expense utility starting as a Python data handling project, with future evolution toward an Express-backed web dashboard.',
    intendedUsers: 'College students, hostelers, and individuals aiming for transparent monthly budgeting.',
    stack: ['Python', 'Data Handling', 'File I/O / JSON', 'Future: React UI'],
    keyFeatures: [
      'Quick transaction logging with date, tag, and amount',
      'Monthly categorical breakdown (food, books, travel, utilities)',
      'Overdue bill reminder calculations',
      'Exportable summary reports'
    ],
    github: '',
    demo: '',
    hasDemo: false,
    visualType: 'expense'
  }
];

export const journeyData = [
  {
    year: '2026 – 2030',
    title: 'B.Tech in IoT & Blockchain Technology',
    institution: 'NIAT at Annamacharya University',
    status: 'Active Pursuit',
    type: 'education',
    description: 'Currently in the first year of my undergraduate engineering degree. Focusing on computer science foundations, algorithm basics, IoT fundamentals, and modern software development practices.',
    verified: true
  },
  {
    year: '2024 – 2026',
    title: 'Intermediate Education (Class XII) — 95.6%',
    institution: 'Sri Chaitanya Junior College, Vijayawada',
    status: 'Completed',
    type: 'education',
    description: 'Completed higher secondary education with a 95.6% score, developing strong analytical and quantitative foundations in mathematics and science.',
    verified: true
  },
  {
    year: '2024',
    title: 'Secondary School Certificate (Class X) — 95.0%',
    institution: 'Santiniketan High School, Mydukur',
    status: 'Completed',
    type: 'education',
    description: 'Completed secondary schooling with academic distinction (95%), laying the groundwork for STEM and computing interests.',
    verified: true
  },
  {
    year: 'Recent Workshop',
    title: 'Hands-on Gesture-Controlled Technology Workshop',
    institution: 'Specialized Technical Workshop',
    status: 'Verified Participation',
    type: 'workshop',
    description: 'Participated in an intensive hands-on practical workshop exploring gesture sensor technologies and human-computer interaction concepts.',
    certificateLink: '/gesture-tech-workshop-certificate.pdf',
    verified: true
  },
  {
    year: 'Upcoming Milestones',
    title: 'First-Year Engineering Goals',
    institution: 'Self-Driven Milestones (Planned)',
    status: 'Target Goals',
    type: 'milestone',
    description: '1. Master Data Structures and Algorithms in Python. 2. Build and deploy 2 full-stack web applications with authentication. 3. Participate in inter-college hackathons.',
    verified: false
  }
];

export const certificateData = {
  title: 'Hands-on Gesture-Controlled Technology Workshop',
  description: 'Participated in a specialized hands-on technical workshop focused on gesture-controlled systems, sensor integration, and real-time interface control.',
  type: 'Technical Workshop Certificate',
  pdfUrl: '/gesture-tech-workshop-certificate.pdf',
  fileName: 'gesture-tech-workshop-certificate.pdf',
  verified: true
};
