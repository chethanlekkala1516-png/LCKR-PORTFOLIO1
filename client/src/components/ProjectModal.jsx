import React, { useEffect } from 'react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-top">
          <div className="modal-badges">
            <span className={`modal-status-pill status-${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
              {project.status.toUpperCase()}
            </span>
            <span className="modal-category">{project.category}</span>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close project modal">
            ✕
          </button>
        </div>

        <div className="modal-body">
          <h3 id="modal-title" className="modal-title">{project.title}</h3>
          <p className="modal-tagline">{project.tagline}</p>

          <div className="modal-section">
            <h4>Problem Statement</h4>
            <p className="modal-text">{project.problemStatement}</p>
          </div>

          <div className="modal-section">
            <h4>Description & Intended Users</h4>
            <p className="modal-text">{project.description}</p>
            <div className="modal-target-users">
              <strong>Target Audience:</strong> {project.intendedUsers}
            </div>
          </div>

          <div className="modal-section">
            <h4>Technology Stack</h4>
            <div className="modal-tech-pills">
              {project.stack.map((tech) => (
                <span key={tech} className="modal-tech-pill">{tech}</span>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <h4>Key Features & Architecture</h4>
            <ul className="modal-features-list">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
          </div>

          <div className="modal-links-row">
            {project.github ? (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="button button-primary"
              >
                View Repository <span>↗</span>
              </a>
            ) : (
              <span className="modal-repo-pending">
                Repository will be published when development begins
              </span>
            )}

            {project.hasDemo && project.demo ? (
              <a 
                href={project.demo} 
                className="button button-secondary"
              >
                Explore Live Demo <span>↗</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
