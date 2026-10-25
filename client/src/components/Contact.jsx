import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ type: '', text: '' });
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);

  const updateForm = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const copyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(personalInfo.email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = personalInfo.email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const submitForm = async (event) => {
    event.preventDefault();

    if (form.name.trim().length < 2) {
      setFormStatus({ type: 'error', text: 'Please provide a name of at least 2 characters.' });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setFormStatus({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }
    if (form.message.trim().length < 10) {
      setFormStatus({ type: 'error', text: 'Message must be at least 10 characters long.' });
      return;
    }

    setSending(true);
    setFormStatus({ type: '', text: '' });

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || 'Could not send message. Please try again.');
      }

      setFormStatus({
        type: 'success',
        text: result.message || 'Message received! Thank you for reaching out.'
      });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      const isNetworkError = error.message.includes('Failed to fetch') || error.name === 'TypeError';
      setFormStatus({
        type: 'error',
        text: isNetworkError
          ? 'Backend API is currently unreachable. You can contact me directly at ' + personalInfo.email
          : error.message
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-wrap content-section contact-section">
      <div className="section-heading reveal">
        <div className="eyebrow">
          <span className="eyebrow-line" aria-hidden="true" />
          <span>GET IN TOUCH</span>
        </div>
        <h2>
          Let's talk code & <span className="gradient-text">opportunities.</span>
        </h2>
        <p>
          Whether you have an internship role, an open-source collaboration, a hackathon project, or just advice for a first-year student — I would love to hear from you.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-aside reveal">
          <div className="contact-availability">
            <span className="status-pulse" aria-hidden="true" />
            <span>AVAILABLE FOR COLLABORATION</span>
          </div>

          <h3>
            Good things start with a <span className="gradient-text">hello.</span>
          </h3>

          <p>
            I am eager to learn from experienced developers, contribute to real-world software projects, and explore opportunities that accelerate my growth.
          </p>

          <div className="contact-direct-card">
            <span className="direct-card-label">DIRECT EMAIL ADDRESS</span>
            <div className="direct-email-row">
              <a className="contact-email" href={personalInfo.socialLinks.email}>
                {personalInfo.email}
              </a>
              <button 
                type="button" 
                className="btn-copy-email" 
                onClick={copyEmail}
                aria-label="Copy email address to clipboard"
                title="Copy email address"
              >
                {copied ? '✓ Copied' : '📋 Copy'}
              </button>
            </div>
          </div>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <span className="info-icon" aria-hidden="true">📍</span>
              <div>
                <strong>Location:</strong>
                <p>{personalInfo.location}</p>
              </div>
            </div>
            <div className="contact-info-item">
              <span className="info-icon" aria-hidden="true">🎓</span>
              <div>
                <strong>Current Status:</strong>
                <p>1st Year B.Tech (2026–2030), NIAT at Annamacharya University</p>
              </div>
            </div>
          </div>

          <div className="contact-social-row">
            <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={personalInfo.socialLinks.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </div>

        <form className="contact-form reveal" onSubmit={submitForm} noValidate>
          <div className="form-heading">
            <span>01 — SEND A DIRECT MESSAGE</span>
            <span className="form-star" aria-hidden="true">✳</span>
          </div>

          <div className="form-row">
            <label>
              YOUR NAME <span className="required-star">*</span>
              <input
                name="name"
                value={form.name}
                onChange={updateForm}
                placeholder="e.g. Alex Smith"
                required
                minLength={2}
                maxLength={80}
                disabled={sending}
              />
            </label>

            <label>
              EMAIL ADDRESS <span className="required-star">*</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={updateForm}
                placeholder="alex@company.com"
                required
                maxLength={254}
                disabled={sending}
              />
            </label>
          </div>

          <label>
            SUBJECT <span className="optional">(OPTIONAL)</span>
            <input
              name="subject"
              value={form.subject}
              onChange={updateForm}
              placeholder="Internship / Mentorship / Question"
              maxLength={120}
              disabled={sending}
            />
          </label>

          <label>
            YOUR MESSAGE <span className="required-star">*</span>
            <textarea
              name="message"
              value={form.message}
              onChange={updateForm}
              placeholder="Hi Chethan, I came across your portfolio and wanted to discuss..."
              required
              minLength={10}
              maxLength={3000}
              rows={5}
              disabled={sending}
            />
          </label>

          {formStatus.text && (
            <div 
              className={`form-status ${formStatus.type}`} 
              role="status" 
              aria-live="polite"
            >
              {formStatus.type === 'success' ? '✓ ' : '⚠ '}
              {formStatus.text}
            </div>
          )}

          <button 
            className="button button-primary submit-button" 
            type="submit" 
            disabled={sending}
          >
            {sending ? 'TRANSMITTING MESSAGE…' : 'SEND MESSAGE'} <span aria-hidden="true">↗</span>
          </button>

          <p className="form-privacy">
            Privacy Assurance: Your contact information is never shared or added to mailing lists.
          </p>
        </form>
      </div>
    </section>
  );
}
