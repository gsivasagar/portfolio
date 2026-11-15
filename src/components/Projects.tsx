import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';

const Projects: React.FC = () => (
  <section id="projects" className="screen projects">
    <h3 className="section-title">Projects</h3>
    <p className="section-hint">Scroll sideways</p>
    <div className="band" aria-hidden="true" />
    <div className="carousel proj-carousel" tabIndex={0} aria-label="Projects">
      {projects.map((p, i) => (
        <article key={p.title} className="proj-slide">
          <motion.div className="proj-visual" initial={{ y: -60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
            <span className="proj-stat">{p.stat}</span>
            <span className="proj-statlabel">{p.statLabel}</span>
          </motion.div>
          <div className="proj-copy">
            <h4><span className="u">Project {i + 1}:</span> {p.title}</h4>
            <ul className="badge-row center">{p.tech.map((t) => <li key={t} className="badge">{t}</li>)}</ul>
            <p>{p.blurb}</p>
            <ul className="proj-points">{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
            <p className="proj-links">
              <a href={p.repo} target="_blank" rel="noopener noreferrer">Code ↗</a>
              {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer">Live demo ↗</a>}
            </p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
