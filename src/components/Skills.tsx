import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
    const skillCategories = [
        {
            title: "Core Engineering",
            skills: [
                { name: "React.js", url: "https://react.dev/" },
                { name: "Next.js", url: "https://nextjs.org/" },
                { name: "TypeScript", url: "https://www.typescriptlang.org/" },
                { name: "JavaScript (ES6+)", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
                { name: "Python", url: "https://www.python.org/" },
                { name: "Node.js", url: "https://nodejs.org/" }
            ]
        },
        {
            title: "AI Integration",
            skills: [
                { name: "LangGraph", url: "https://langchain-ai.github.io/langgraph/" },
                { name: "Vector Databases", url: "https://www.pinecone.io/learn/vector-database/" },
                { name: "ChromaDB", url: "https://www.trychroma.com/" },
                { name: "Gemini API", url: "https://ai.google.dev/" },
                { name: "Local LLMs (Ollama)", url: "https://ollama.com/" }
            ]
        },
        {
            title: "Backend & Data",
            skills: [
                { name: "FastAPI", url: "https://fastapi.tiangolo.com/" },
                { name: "PostgreSQL", url: "https://www.postgresql.org/" },
                { name: "MongoDB", url: "https://www.mongodb.com/" },
                { name: "RESTful API", url: "https://aws.amazon.com/what-is/restful-api/" },
                { name: "WebSockets", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" },
                { name: "Supabase", url: "https://supabase.com/" }
            ]
        },
        {
            title: "Architecture & DevOps",
            skills: [
                { name: "Microservices", url: "https://aws.amazon.com/microservices/" },
                { name: "Docker", url: "https://www.docker.com/" },
                { name: "CI/CD", url: "https://about.gitlab.com/topics/ci-cd/" },
                { name: "OAuth", url: "https://oauth.net/" },
                { name: "JWT", url: "https://jwt.io/" },
                { name: "Vercel", url: "https://vercel.com/" }
            ]
        }
    ];

    return (
        <section id="skills" className="section">
            <div className="mobile-section-header">Skills</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                    >
                        <h3 style={{
                            fontSize: '1rem',
                            color: 'var(--text-primary)',
                            marginBottom: '1rem',
                            fontWeight: 600
                        }}>
                            {category.title}
                        </h3>

                        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            {category.skills.map((skill, sIdx) => (
                                <li key={sIdx}>
                                    <a
                                        href={skill.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="badge hover-badge"
                                    >
                                        {skill.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
