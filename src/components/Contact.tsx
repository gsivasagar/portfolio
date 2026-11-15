import React, { useState } from 'react';
import { links } from '../data';

const EMAIL = 'sivasagar1909@gmail.com';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };
  return (
    <section id="contact" className="screen contact">
      <h3 className="section-title">Contact</h3>
      <div className="contact-inner">
        <h4>Hiring for backend or AI? <span className="u">Let’s talk.</span></h4>
        <p className="contact-line">Email is the fastest way to reach me.</p>
        <a className="contact-email" href={links.email}>{EMAIL}</a>
        <div className="contact-actions">
          <button type="button" className="send" onClick={copy} aria-live="polite">{copied ? 'Copied ✓' : 'Copy email'}</button>
          <a className="pill" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="pill" href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="pill" href={links.resume} target="_blank" rel="noopener noreferrer">Résumé</a>
        </div>
        <p className="contact-line">Hyderabad, India · open to Bengaluru, Hyderabad and remote</p>
      </div>
    </section>
  );
};

export default Contact;
