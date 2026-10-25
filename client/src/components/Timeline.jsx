import React from 'react';
import { journeyData } from '../data/portfolioData';

export default function Timeline() {
  return (
    <section id="journey" className="section-wrap content-section journey-section">
      <div className="section-heading reveal">
        <div className="eyebrow">
          <span className="eyebrow-line" aria-hidden="true" />
          <span>EDUCATION & ROADMAP</span>
        </div>
        <h2>
          Academic path & <span className="gradient-text">journey.</span>
        </h2>
        <p>
          Tracing my academic background, technical workshops, and upcoming targets as a first-year Computer Science undergraduate.
        </p>
      </div>

      <div className="timeline-container">
        <div className="timeline-spine" aria-hidden="true" />

        {journeyData.map((item, index) => (
          <div 
            className={`timeline-item reveal ${item.verified ? 'is-verified' : 'is-goal'}`} 
            key={index}
          >
            <div className="timeline-dot-wrapper">
              <span className={`timeline-dot ${item.verified ? 'dot-verified' : 'dot-goal'}`} />
            </div>

            <div className="timeline-content-card">
              <div className="timeline-card-header">
                <span className="timeline-year">{item.year}</span>
                <span className={`timeline-badge ${item.verified ? 'badge-verified' : 'badge-goal'}`}>
                  {item.status.toUpperCase()}
                </span>
              </div>

              <h3 className="timeline-title">{item.title}</h3>
              <div className="timeline-institution">{item.institution}</div>
              <p className="timeline-desc">{item.description}</p>

              {item.certificateLink && (
                <div className="timeline-link-wrapper">
                  <a 
                    href={item.certificateLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="timeline-action-link"
                  >
                    View Verified Certificate <span aria-hidden="true">↗</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
