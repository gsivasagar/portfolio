import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => (
  <section id="about" className="screen about">
    <h3 className="section-title">About</h3>
    <motion.div className="about-inner" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
      <img className="about-photo" src={`${import.meta.env.BASE_URL}about.jpg`} alt="Siva Sagar standing in front of tea hills" width={360} height={480} loading="lazy" />
      <div className="about-copy">
        <h4>Here is a <span className="u">little</span> background</h4>
        <p>
          I’m a backend and AI engineer. I graduated in Computer Science from Andhra University in 2024 and I’m now a
          software engineering intern at ArcStream Technologies in Hyderabad. There I write the Python and FastAPI
          backend for Pulse, a platform that finds personal data in customer databases and acts on it under approved rules.
        </p>
        <p>
          I like systems where a wrong answer has a cost: retries that must not apply twice, rules that must not guess,
          and model output that needs checking. On my own projects I measure before I claim.
        </p>
        <p>
          Outside work I practise data structures and algorithms in Java and read about system design. I’m looking for
          backend, full-stack or AI engineering roles in Bengaluru, Hyderabad or remote.
        </p>
      </div>
    </motion.div>
  </section>
);

export default About;
