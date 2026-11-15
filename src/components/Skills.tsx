import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills: React.FC = () => (
  <section id="skills" className="screen">
    <h3 className="section-title">Skills</h3>
    <p className="section-hint">Hover or tap a skill to see where I used it</p>
    <div className="skill-grid">
      {skills.map((s, i) => (
        <motion.button
          type="button"
          key={s.name}
          className="skill"
          initial={{ opacity: 0, x: i % 2 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: (i % 5) * 0.05 }}
        >
          <span className="skill-name">{s.name}</span>
          <span className="skill-used">{s.used}</span>
        </motion.button>
      ))}
    </div>
  </section>
);

export default Skills;
