import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// --- DATA ---
const personalInfo = {
  name: "Siva Sagar",
  headline: "Backend & AI/ML Developer",
  summary: "A results-driven Computer Science graduate specializing in backend engineering and applied AI. Proven ability to architect and deploy full-stack applications with a focus on machine learning integration, including fine-tuning large language models and developing interactive user experiences. Eager to apply expertise in Python, AI/ML frameworks, and system design to build innovative software solutions.",
  profile_pic: "https://github.com/gsivasagar.png",
  socials: {
    linkedin: "https://linkedin.com/in/gsivasagar",
    github: "https://github.com/gsivasagar",
    email: "mailto:sivasagar1909@gmail.com"
  }
};

const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "JavaScript"]
  },
  {
    category: "Frameworks/Libraries",
    items: ["TensorFlow", "Ollama", "React", "Tailwind CSS", "Streamlit", "Flask"]
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "ChromaDB", "SQLite"]
  },
  {
    category: "AI/ML",
    items: ["Model Training", "Transformers", "CNNs", "Sentence Transformers"]
  },
  {
    category: "Dev Tools",
    items: ["RESTful APIs", "Git", "Docker", "Chrome Extension APIs"]
  }
];

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "HPCL ISC - Hyderabad",
    date: "Nov 2022 - Dec 2022",
    description: [
      "Built backend modules for product catalog, authentication, and user accounts.",
      "Provided secure web features for search, order processing, and role-based authentication.",
      "Enabled instant inventory updates, lowering stock discrepancies during pilot deployment.",
      "Partnered with three interns to deliver an inventory management system with internal tracking of 50+ products."
    ]
  }
];

const projects = [
  {
    title: "AI-Powered Exam Q&A Generator",
    description: "Architected an interactive Streamlit UI for PDF ingestion, semantic search using ChromaDB, and quiz generation with automated scoring. Fine-tuned TinyLlama with synthetic datasets for offline, low-latency inference.",
    tags: ["TinyLlama", "Transformers", "ChromaDB", "Streamlit", "Python"],
    link: "https://github.com/gsivasagar"
  },
  {
    title: "LeetCode AI Assistant",
    description: "Developed a Chrome extension integrating Google Gemini API to deliver hints, pseudocode, and code feedback for over 100+ LeetCode problems. Implemented context-aware chat functionality to improve user efficiency.",
    tags: ["TypeScript", "React", "TailwindCSS", "Chrome Extension API", "Gemini API"],
    link: "https://github.com/gsivasagar"
  },
  {
    title: "Mock Interview AI",
    description: "Designed a browser-based mock interview tool using Google Gemini API, simulating 4+ interview types. Delivered AI voice interaction and feedback, and automated personalized question generation from uploaded resumes.",
    tags: ["React", "TypeScript", "TailwindCSS", "WebSpeech API", "WebRTC"],
    link: "https://github.com/gsivasagar"
  }
];

// --- SVG ICONS ---
const GithubIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
);

const LinkedinIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
);

const EmailIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Email</title><path d="M24 5.457v13.909c0 .905-.732 1.636-1.636 1.636h-3.819V11.79L12 16.533 5.455 11.79v9.212H1.636C.732 21 .001 20.27.001 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);


// --- COMPONENTS ---
const Header = () => (
  <header className="header">
    <div className="container">
      <nav className="nav">
        <a href="#" className="nav-logo">{personalInfo.name}</a>
        <ul className="nav-links">
          <li className="nav-link"><a href="#about">About</a></li>
          <li className="nav-link"><a href="#skills">Skills</a></li>
          <li className="nav-link"><a href="#experience">Experience</a></li>
          <li className="nav-link"><a href="#projects">Projects</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section id="home" className="container hero">
    <div className="hero-content">
      <h1>Hi, I'm {personalInfo.name.split(' ')[0]}</h1>
      <p className="hero-subtitle">{personalInfo.headline}</p>
      <p className="hero-summary">{personalInfo.summary}</p>
      <div className="hero-socials">
        <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /></a>
        <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
        <a href={personalInfo.socials.email} aria-label="Email"><EmailIcon /></a>
      </div>
    </div>
    <div className="hero-image-container">
      <img src={personalInfo.profile_pic} alt={personalInfo.name} className="hero-image"/>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills">
    <div className="container">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map(skillGroup => (
          <div key={skillGroup.category} className="skill-category">
            <h3>{skillGroup.category}</h3>
            <ul className="skill-list">
              {skillGroup.items.map(item => <li key={item} className="skill-item">{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience">
    <div className="container">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map(exp => (
          <div key={exp.company} className="timeline-item">
            <div className="timeline-dot"></div>
            <p className="timeline-date">{exp.date}</p>
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <p className="company">{exp.company}</p>
              <ul>
                {exp.description.map((point, i) => <li key={i}>{point}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects">
    <div className="container">
      <h2>Personal Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.title} className="project-card">
            <div className="project-card-header">
              <h3>{project.title}</h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`Link to ${project.title}`}>
                <GithubIcon />
              </a>
            </div>
            <p>{project.description}</p>
            <ul className="project-tags">
              {project.tags.map(tag => <li key={tag} className="project-tag">{tag}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-socials">
        <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /></a>
        <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
        <a href={personalInfo.socials.email} aria-label="Email"><EmailIcon /></a>
      </div>
      <p className="footer-copyright">&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
    </div>
  </footer>
);


function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);