import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

function ProjectArt({ visualType, tone }) {
  if (visualType === 'portfolio') {
    return (
      <div className={`project-art project-${tone}`}>
        <div className="art-ring ring-one" aria-hidden="true" />
        <div className="art-ring ring-two" aria-hidden="true" />
        <div className="portfolio-preview-graphic">
          <div className="graphic-header">
            <span className="dot dot-r" />
            <span className="dot dot-y" />
            <span className="dot dot-g" />
            <span className="graphic-title">CHETHAN / DEV PORTFOLIO</span>
          </div>
          <div className="graphic-content">
            <div className="graphic-code-line short" />
            <div className="graphic-code-line long" />
            <div className="graphic-code-line mid" />
          </div>
        </div>
        <span className="art-corner corner-one" aria-hidden="true" />
        <span className="art-corner corner-two" aria-hidden="true" />
        <span className="art-coordinates">01 : REACT · EXPRESS</span>
      </div>
    );
  }

  if (visualType === 'tracker') {
    return (
      <div className={`project-art project-${tone}`}>
        <div className="art-ring ring-one" aria-hidden="true" />
        <div className="tracker-preview-graphic">
          <div className="graphic-header">
            <span className="dot dot-v" />
            <span className="graphic-title">STUDYTRACK · DASHBOARD</span>
          </div>
          <div className="tracker-bars">
            <div className="tracker-bar bar-1"><span /></div>
            <div className="tracker-bar bar-2"><span /></div>
            <div className="tracker-bar bar-3"><span /></div>
          </div>
        </div>
        <span className="art-corner corner-one" aria-hidden="true" />
        <span className="art-corner corner-two" aria-hidden="true" />
        <span className="art-coordinates">02 : CONCEPT · STUDY PLANNER</span>
      </div>
    );
  }

  return (
    <div className={`project-art project-${tone}`}>
      <div className="art-ring ring-one" aria-hidden="true" />
      <div className="expense-preview-graphic">
        <div className="graphic-header">
          <span className="dot dot-p" />
          <span className="graphic-title">SMART BILL & EXPENSE</span>
        </div>
        <div className="expense-chart-graphic">
          <svg viewBox="0 0 100 60" className="sparkline-svg" aria-hidden="true">
            <path d="M 5,50 Q 25,20 45,35 T 85,15 T 95,25" fill="none" stroke="currentColor" strokeWidth="2.5" />
          </svg>
        </div>
      </div>
      <span className="art-corner corner-one" aria-hidden="true" />
      <span className="art-corner corner-two" aria-hidden="true" />
      <span className="art-coordinates">03 : PYTHON · DATA CONCEPT</span>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Web Development', 'Python'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-wrap content-section projects-section">
      <div className="section-heading reveal">
        <div className="eyebrow">
          <span className="eyebrow-line" aria-hidden="true" />
          <span>PROJECT GALLERY</span>
        </div>
        <h2>
          Work & <span className="gradient-text">project pipeline.</span>
        </h2>
        <p>
          Showcasing real builds and clear conceptual designs. All planned projects are transparently marked as concepts to be built during my B.Tech journey.
        </p>
      </div>

      <div className="projects-filter-row reveal" role="tablist" aria-label="Project category filters">
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={filter === cat}
            className={`filter-btn ${filter === cat ? 'is-active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, idx) => (
          <article 
            className={`project-card reveal project-${project.badgeTone} ${project.featured ? 'project-card-featured' : ''}`} 
            key={project.id}
          >
            <div className="project-top">
              <span className={`project-status-pill status-${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
                {project.status.toUpperCase()}
              </span>
              <span className="project-category-tag">{project.category}</span>
            </div>

            <ProjectArt visualType={project.visualType} tone={project.badgeTone} />

            <div className="project-content">
              <div className="project-meta-row">
                <span className="project-index">PROJECT 0{idx + 1}</span>
                {project.featured && <span className="featured-pill">FEATURED BUILD</span>}
              </div>

              <h3>{project.title}</h3>
              <p className="project-tagline-text">{project.tagline}</p>
              <p className="project-desc">{project.description}</p>

              <div className="project-stack">
                {project.stack.slice(0, 4).map((item) => (
                  <span key={item}>{item}</span>
                ))}
                {project.stack.length > 4 && <span>+{project.stack.length - 4} more</span>}
              </div>

              <div className="project-links">
                <button 
                  className="btn-details-trigger" 
                  onClick={() => setActiveModalProject(project)}
                  aria-label={`View full details for ${project.title}`}
                >
                  View Details <span>→</span>
                </button>

                {project.github ? (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="project-ext-link"
                    aria-label={`Source code for ${project.title}`}
                  >
                    GITHUB <span>↗</span>
                  </a>
                ) : (
                  <span className="project-pending-label">REPO IN PLANNING</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="project-note reveal">
        <span>NOTE //</span> Planned concepts are listed with problem statements and proposed architectures. They represent my upcoming building roadmap and are not claimed as completed software.
      </div>

      {activeModalProject && (
        <ProjectModal 
          project={activeModalProject} 
          onClose={() => setActiveModalProject(null)} 
        />
      )}
    </section>
  );
}
