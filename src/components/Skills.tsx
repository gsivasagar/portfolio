import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills, type Skill } from '../data';

const iconUrls = import.meta.glob('../assets/skills/*.svg', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
const iconFor = (slug?: string) => (slug ? iconUrls[`../assets/skills/${slug}.svg`] : undefined);

const Skills: React.FC = () => {
  const [active, setActive] = useState<Skill | null>(null);
  return (
    <section id="skills" className="screen">
      <h3 className="section-title">Skills</h3>
      <p className="section-hint">Hover or tap a skill to see where I used it</p>
      <div className="skill-grid">
        {skills.map((s, i) => {
          const url = iconFor(s.icon);
          return (
            <motion.button
              type="button"
              key={s.name}
              className="skill"
              aria-label={`${s.name}: ${s.used}`}
              onMouseEnter={() => setActive(s)}
              onFocus={() => setActive(s)}
              onClick={() => setActive(s)}
              onMouseLeave={() => setActive(null)}
              onBlur={() => setActive(null)}
              initial={{ opacity: 0, x: i % 2 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 5) * 0.05 }}
            >
              {url ? <img src={url} alt="" className="skill-logo" /> : <span className="skill-name">{s.name}</span>}
            </motion.button>
          );
        })}
      </div>
      <p className="skill-caption" aria-live="polite">
        {active ? <><strong>{active.name}</strong> · {active.used}</> : ' '}
      </p>
    </section>
  );
};

export default Skills;
