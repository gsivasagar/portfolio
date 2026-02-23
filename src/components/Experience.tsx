import React from 'react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
    const projects = [
        {
            title: "Financial Investment Analysis Platform (Bull vs. Bear)",
            role: "Backend & Systems Architect",
            period: "Oct 2025 — Feb 2026",
            description: "Architected a data-driven financial dashboard utilizing a multi-agent LangGraph orchestration engine to aggregate live market data from external APIs. Engineered robust microservices containerized with Docker, processing 500+ distinct financial metrics per session for real-time investment analysis.",
            link: "https://bull-vs-bear-ipb1b0dvw-siva-sagars-projects.vercel.app/",
            tech: ["Python", "FastAPI", "LangGraph", "Docker", "React"]
        },
        {
            title: "Enterprise Subscription Management System",
            role: "Lead Full-Stack Engineer",
            period: "Jun 2025 — Sep 2025",
            description: "Developed a secure, customer-facing portal automating account provisioning, complex billing continuous cycles, and subscription lifecycle tracking for 100+ enterprise accounts. Implemented robust Node.js cron jobs for automated state management and Google OAuth for zero-trust authentication.",
            link: "https://subscription-management-dashboard-git-main-siva-sagars-projects.vercel.app/",
            tech: ["Node.js", "Express.js", "MySQL", "React", "OAuth"]
        },
        {
            title: "Smart Bookmark Platform",
            role: "Full-Stack Developer",
            period: "Feb 2025 — May 2025",
            description: "Engineered a highly responsive, serverless bookmarking application featuring real-time, multi-device synchronization via WebSocket event streams. Configured strict Row Level Security (RLS) policies within Supabase to isolate data for a 500+ multi-tenant active user base while leveraging Optimistic UI for zero-latency interactions.",
            link: "https://member-berries-og6qgveo7-siva-sagars-projects.vercel.app/",
            tech: ["Next.js", "Supabase", "Tailwind CSS", "WebSockets"]
        },
        {
            title: "Enterprise Exam & Quiz Generator",
            role: "AI & Data Engineer",
            period: "Nov 2024 — Jan 2025",
            description: "Built a sophisticated Retrieval-Augmented Generation (RAG) pipeline to ingest massive PDF document repositories and generate contextual assessments. Deployed a fine-tuned TinyLlama model paired with ChromaDB for highly accurate semantic search and automated analytical scoring.",
            link: "https://exam-q-a-generator-ml8ost5r2xjygiv92bbmq5.streamlit.app/",
            tech: ["Python", "ChromaDB", "LLMs", "Streamlit", "SQLite"]
        },
        {
            title: "Interactive Mock Interview Platform",
            role: "Frontend Engineer",
            period: "Aug 2024 — Oct 2024",
            description: "Developed a browser-based, low-latency voice interview simulator leveraging WebRTC and WebSpeech APIs to establish seamless, cross-browser audio streaming. Integrated the Gemini API to construct dynamic, resume-aware questioning algorithms for unlimited practice sessions.",
            link: "https://ai-mock-interview-lac-six.vercel.app",
            tech: ["React", "TypeScript", "WebRTC", "Gemini API"]
        },
        {
            title: "LeetCode AI Assistant",
            role: "Independent Developer",
            period: "May 2024 — Jul 2024",
            description: "Engineered a resilient Chrome Extension utilizing React and TypeScript to inject contextual, non-blocking UI overlays directly into the DOM. Integrated the Gemini API to supply multi-language algorithmic generation and real-time step-by-step debugging feedback without disrupting the underlying web application state.",
            link: "https://leetcode-assistant-six.vercel.app/",
            tech: ["React", "TypeScript", "Chrome Extension API", "Gemini API"]
        }
    ];

    return (
        <section id="experience" className="section">
            <div className="mobile-section-header">Experience</div>

            <div className="hover-group" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="hover-card"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        {/* Left side: Date (Desktop) or top (Mobile) */}
                        <div style={{
                            flex: '0 0 130px',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            color: 'var(--text-muted)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            marginTop: '0.25rem'
                        }}>
                            {project.period}
                        </div>

                        {/* Right side: Content */}
                        <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '1rem', fontWeight: 500, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                                >
                                    {project.role} · {project.title}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: '1rem', height: '1rem', marginLeft: '0.1rem', marginTop: '0.1rem', transition: 'transform 0.2s', transform: 'translateY(-1px) translateX(1px)' }}>
                                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </h3>

                            <p style={{ fontSize: '0.875rem', marginTop: '0.5rem', marginBottom: '1rem', lineHeight: 1.5 }}>
                                {project.description}
                            </p>

                            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {project.tech.map((t, i) => (
                                    <li key={i} className="badge">{t}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
