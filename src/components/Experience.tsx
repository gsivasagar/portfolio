import React from 'react';
import { motion } from 'framer-motion';
import { jobs } from '../data';

const Experience: React.FC = () => (
  <section id="experience" className="screen">
    <h3 className="section-title">Experience</h3>
    <p className="section-hint exp-hint">Swipe sideways</p>
    <div className="carousel exp-carousel" tabIndex={0} aria-label="Work experience">
      {jobs.map((job) => (
        <motion.article key={job.company} className="exp-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="exp-logo" aria-hidden="true">{job.company.split(' ').map((w) => w[0]).slice(0, 2).join('')}</div>
          <h4>{job.role}</h4>
          <p className="exp-company">{job.company}</p>
          <p className="exp-date">{job.period} · {job.place}</p>
          <ul className="badge-row">{job.tech.map((t) => <li key={t} className="badge">{t}</li>)}</ul>
          <ul className="exp-points">{job.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Experience;
