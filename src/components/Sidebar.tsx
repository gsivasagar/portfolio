import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Sidebar: React.FC = () => {
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-30% 0px -70% 0px' } // Trigger active state a bit early when scrolling down
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' }
    ];

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            // scroll to element
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <aside className="sidebar">
            <div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 style={{
                        fontSize: '3rem',
                        fontWeight: 800,
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.025em',
                        marginBottom: '0.5rem'
                    }}>
                        <a href="/">Siva Sagar</a>
                    </h1>
                    <h2 style={{
                        fontSize: '1.125rem',
                        fontWeight: 500,
                        color: 'var(--text-primary)',
                        marginBottom: '1rem'
                    }}>
                        Independent Software Consultant
                    </h2>
                    <p style={{
                        color: 'var(--text-secondary)',
                        maxWidth: '300px',
                        marginBottom: '4rem',
                        lineHeight: 1.5
                    }}>
                        I build fault-tolerant microservices, resilient data pipelines, and engaging digital experiences.
                    </p>

                    {/* Desktop Navigation */}
                    <nav style={{ display: 'none' }} className="lg-nav">
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                                        onClick={(e) => handleClick(e, item.id)}
                                    >
                                        <span className="nav-indicator"></span>
                                        <span>{item.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Inline CSS to handle desktop nav visibility to avoid writing more media queries */}
                    <style dangerouslySetInnerHTML={{
                        __html: `
            @media (min-width: 1024px) {
              .lg-nav { display: block !important; }
            }
          `}} />

                </motion.div>
            </div>

            <motion.ul
                className="mt-8 flex items-center gap-6"
                style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                aria-label="Social media"
            >
                <li>
                    <a href="https://github.com/gsivasagar" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '1.5rem', height: '1.5rem' }}>
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/gsivasagar" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '1.5rem', height: '1.5rem' }}>
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="mailto:gsivasagar@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Email">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '1.5rem', height: '1.5rem' }}>
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </a>
                </li>
            </motion.ul>
        </aside>
    );
};

export default Sidebar;
