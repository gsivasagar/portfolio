import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter } from '../useTypewriter';
import { links } from '../data';

const words = [
  "Hi, the name's Siva Sagar",
  'I build FastAPI backends',
  'I measure AI before I claim it',
  'Open to backend and AI roles',
];

const Hero: React.FC = () => {
  const text = useTypewriter(words);
  return (
    <section id="hero" className="screen hero">
      <div className="circles" aria-hidden="true">
        <span className="ring r1" /><span className="ring r2" /><span className="ring r3" /><span className="ring r4" /><span className="ring r5" />
      </div>
      <motion.img className="avatar" src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Siva Sagar" width={160} height={160} initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} />
      <div className="hero-text">
        <h2 className="eyebrow">Backend and AI Engineer</h2>
        <h1 aria-label={words[0]}>
          <span>{text}</span><span className="cursor" aria-hidden="true">|</span>
        </h1>
        <nav className="hero-nav" aria-label="Sections">
          <a href="#about" className="pill">About</a>
          <a href="#experience" className="pill">Experience</a>
          <a href="#skills" className="pill">Skills</a>
          <a href="#projects" className="pill">Projects</a>
          <a href={links.resume} target="_blank" rel="noopener noreferrer" className="pill pill-solid">Résumé</a>
        </nav>
      </div>
    </section>
  );
};

export default Hero;
