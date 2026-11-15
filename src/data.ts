export const links = {
  github: 'https://github.com/gsivasagar',
  linkedin: 'https://www.linkedin.com/in/gsivasagar/',
  email: 'mailto:sivasagar1909@gmail.com',
  resume: `${import.meta.env.BASE_URL}Siva_Sagar_Resume.pdf`,
};

export interface Job {
  company: string;
  role: string;
  period: string;
  place: string;
  bullets: string[];
  tech: string[];
}

export const jobs: Job[] = [
  {
    company: 'ArcStream Technologies',
    role: 'Software Engineering Intern, AI and Backend',
    period: 'May 2026 — Present',
    place: 'Hyderabad',
    bullets: [
      'Wrote the Python and FastAPI backend for Pulse, a platform that reads a customer’s PostgreSQL database (read-only), finds personal data with Presidio, applies approved rules and sends email.',
      'Built ingestion that polls a read-only replica every 5 minutes, 1,000 rows at a time, and remembers where it stopped. Each change gets a stable key, so a retry never applies it twice.',
      'Stored rules as typed JSON with a small evaluator, so users define their own rules without us running their code. A rule that can’t be decided sends nothing.',
      'Added a seeded holdout group (10% by default, adjustable from 5 to 20%) so we can measure whether nudges actually work.',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Presidio'],
  },
  {
    company: 'HPCL Information Systems Centre',
    role: 'Software Engineering Intern',
    period: 'Nov 2022 — Jan 2023',
    place: 'Hyderabad',
    bullets: [
      'Built backend modules for an internal e-commerce application: login, product catalog and inventory.',
      'Rewrote slow SQL queries and transaction code, and wrote JUnit tests as part of a team of three.',
    ],
    tech: ['Java', 'JSP', 'PostgreSQL', 'Tomcat', 'JUnit'],
  },
];

export interface Project {
  title: string;
  blurb: string;
  points: string[];
  tech: string[];
  repo: string;
  demo?: string;
  stat: string;
  statLabel: string;
}

export const projects: Project[] = [
  {
    title: 'QuizForge',
    blurb: 'Turns PDFs, Word and PowerPoint files and web pages into graded quizzes.',
    points: [
      'Four question types, spaced-repetition review, and PDF, Anki and CSV export.',
      'Measured retrieval accuracy (MRR): 0.89 on 8 short notes, but 0.37 on five real papers and textbooks. Hybrid keyword and semantic search raised it to 0.54.',
      'Grading asks the model only which key points an answer covers. The score is computed in code, so reruns agree.',
    ],
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'ChromaDB', 'Gemini'],
    stat: '0.37 → 0.54',
    statLabel: 'retrieval MRR on five real papers, before and after hybrid search',
    repo: 'https://github.com/gsivasagar/Exam-Q-A-generator',
    demo: 'https://exam-q-a-generator-ml8ost5r2xjygiv92bbmq5.streamlit.app/',
  },
  {
    title: 'Bull vs Bear',
    blurb: 'A Bull agent and a Bear agent argue over a stock. A Judge weighs both against live price and news and returns BUY, SELL or HOLD.',
    points: [
      'Volatility forecast tested on 60 stocks over 10 years, scored on a later period the models had not seen. Median error was 39% below a naive guess.',
      'A plain one-year average matched GARCH models on unseen data, so I shipped the simpler one.',
      'Debate time fell from about 23 s to about 7 s (measured with a simulated model) by running both agents in parallel. Live progress over Server-Sent Events.',
    ],
    tech: ['Python', 'FastAPI', 'LangGraph', 'React', 'Docker', 'Gemini'],
    stat: '39% lower',
    statLabel: 'median volatility error vs a naive guess, 60 stocks, unseen period',
    repo: 'https://github.com/gsivasagar/bull-vs-bear',
    demo: 'https://bull-vs-bear.vercel.app/',
  },
  {
    title: 'MemberBerries',
    blurb: 'A bookmark manager with Google sign-in, categories, search, link previews and live sync across devices.',
    points: [
      'Fixed duplicate entries and self-reverting edits by reconciling optimistic UI updates with Supabase Realtime events.',
      'Blocked SSRF in the link-preview route: sign-in required, rate limited, public addresses only, redirects re-checked.',
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Vitest'],
    stat: 'Live sync',
    statLabel: 'across devices with Supabase Realtime',
    repo: 'https://github.com/gsivasagar/MemberBerries',
    demo: 'https://member-berries.vercel.app/',
  },
];

export interface Skill {
  name: string;
  used: string;
  icon?: string;
}

export const skills: Skill[] = [
  { name: 'Python', used: 'Pulse, QuizForge, Bull vs Bear', icon: 'python' },
  { name: 'FastAPI', used: 'Pulse backend, QuizForge API, Bull vs Bear', icon: 'fastapi' },
  { name: 'TypeScript', used: 'QuizForge front end, MemberBerries', icon: 'typescript' },
  { name: 'React', used: 'QuizForge, Bull vs Bear', icon: 'react' },
  { name: 'Next.js', used: 'MemberBerries', icon: 'nextdotjs' },
  { name: 'Java', used: 'HPCL internship, DSA practice', icon: 'openjdk' },
  { name: 'SQL', used: 'Pulse ingestion, HPCL query tuning' },
  { name: 'PostgreSQL', used: 'Pulse, HPCL, MemberBerries', icon: 'postgresql' },
  { name: 'Supabase', used: 'MemberBerries auth and realtime', icon: 'supabase' },
  { name: 'Docker', used: 'Bull vs Bear', icon: 'docker' },
  { name: 'LangGraph', used: 'Bull vs Bear agents', icon: 'langgraph' },
  { name: 'RAG', used: 'QuizForge' },
  { name: 'ChromaDB', used: 'QuizForge retrieval' },
  { name: 'Gemini API', used: 'QuizForge, Bull vs Bear', icon: 'googlegemini' },
  { name: 'JWT Auth', used: 'QuizForge accounts', icon: 'jsonwebtokens' },
  { name: 'SSE', used: 'Bull vs Bear live progress' },
  { name: 'pytest', used: 'QuizForge back-end tests', icon: 'pytest' },
  { name: 'Vitest', used: 'QuizForge, MemberBerries', icon: 'vitest' },
  { name: 'JUnit', used: 'HPCL internship', icon: 'junit5' },
  { name: 'GitHub Actions', used: 'QuizForge CI', icon: 'githubactions' },
];
