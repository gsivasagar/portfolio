import React, { useState } from 'react';
import { links } from '../data';

const Contact: React.FC = () => {
  const [f, setF] = useState({ name: '', email: '', subject: '', message: '' });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Hi, my name is ${f.name}${f.email ? ` (${f.email})` : ''}.\n\n${f.message}`;
    window.location.href = `${links.email}?subject=${encodeURIComponent(f.subject)}&body=${encodeURIComponent(body)}`;
  };
  return (
    <section id="contact" className="screen contact">
      <h3 className="section-title">Contact</h3>
      <div className="contact-inner">
        <h4>Hiring for backend or AI? <span className="u">Let’s talk.</span></h4>
        <p className="contact-line">sivasagar1909@gmail.com · Hyderabad, India</p>
        <form onSubmit={submit}>
          <div className="row">
            <input aria-label="Name" placeholder="Name" value={f.name} onChange={set('name')} required />
            <input aria-label="Email" placeholder="Email" type="email" value={f.email} onChange={set('email')} />
          </div>
          <input aria-label="Subject" placeholder="Subject" value={f.subject} onChange={set('subject')} required />
          <textarea aria-label="Message" placeholder="Message" rows={4} value={f.message} onChange={set('message')} required />
          <button type="submit" className="send">Open in my email app</button>
          <p className="form-note">This opens your email app with the message filled in. Nothing is sent from this page.</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
