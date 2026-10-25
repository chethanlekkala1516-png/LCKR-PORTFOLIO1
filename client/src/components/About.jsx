import React from 'react';
import { personalInfo, aboutData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section-wrap content-section about-section">
      <div className="section-heading reveal">
        <div className="eyebrow">
          <span className="eyebrow-line" aria-hidden="true" />
          <span>A LITTLE ABOUT ME</span>
        </div>
        <h2>
          Building my way into <span className="gradient-text">software engineering.</span>
        </h2>
        <p>
          First-year student with an eagerness to understand computer systems from algorithms to user interfaces.
        </p>
      </div>

      <div className="about-editorial-grid">
        <div className="about-photo-column reveal">
          <div className="about-portrait-card">
            <div className="about-portrait-frame">
              <img 
                src={personalInfo.assets.profilePhoto} 
                alt={`${personalInfo.name} working on development`} 
                className="about-portrait-img"
              />
              <div className="portrait-glow" aria-hidden="true" />
            </div>
            <div className="about-portrait-meta">
              <span className="portrait-meta-tag">NIAT · ANNAMACHARYA UNIVERSITY</span>
              <span className="portrait-meta-title">IoT & Blockchain Major</span>
              <span className="portrait-meta-loc">Mydukur, Kadapa, AP</span>
            </div>
          </div>
        </div>

        <div className="about-content-column">
          <div className="about-lead reveal">
            <span className="quote-mark" aria-hidden="true">“</span>
            <p>
              I believe the most effective way to truly grasp technology is to <span className="text-bright">build things by hand</span> and understand how they work under the hood.
            </p>
          </div>

          <div className="about-narrative reveal">
            {aboutData.bioParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="about-principles-grid reveal">
            {aboutData.principles.map((p, idx) => (
              <div className="principle-card" key={idx}>
                <div className="principle-number">0{idx + 1}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="about-actions-row reveal">
            <a 
              className="button button-secondary" 
              href={personalInfo.assets.resumePdf} 
              download="Chethan_Kumar_Reddy_Resume.pdf"
              target="_blank" 
              rel="noreferrer"
            >
              <span>Download Full Resume</span> <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="#contact">
              Let's connect & collaborate <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>

      <div className="academic-cards-row reveal">
        <div className="academic-header">
          <span className="academic-badge">VERIFIED ACADEMIC FOUNDATIONS</span>
          <span className="academic-sub">Real milestones from secondary to undergraduate education</span>
        </div>
        <div className="academic-cards-grid">
          {aboutData.academicHighlights.map((item, idx) => (
            <div className="academic-card" key={idx}>
              <span className="academic-label">{item.label}</span>
              <div className="academic-val">{item.value}</div>
              <p className="academic-sub-text">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
