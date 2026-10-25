import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Domains' },
    { id: 'programming', label: 'Programming' },
    { id: 'web', label: 'Web Tech' },
    { id: 'backend', label: 'Backend / Data' },
    { id: 'tools', label: 'Tools & Workflow' },
    { id: 'interests', label: 'Key Interests' }
  ];

  const filteredGroups = selectedCategory === 'all'
    ? skillsData
    : skillsData.filter(g => g.id === selectedCategory);

  return (
    <section id="skills" className="section-wrap content-section skills-section">
      <div className="section-heading reveal">
        <div className="eyebrow">
          <span className="eyebrow-line" aria-hidden="true" />
          <span>TECHNICAL TOOLKIT</span>
        </div>
        <h2>
          Skills & <span className="gradient-text">learning roadmap.</span>
        </h2>
        <p>
          An honest, transparent view of the technologies I use and those I am actively learning. No artificial proficiency percentages.
        </p>
      </div>

      <div className="skills-filter-row reveal" role="tablist" aria-label="Skills category filters">
        {categories.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={selectedCategory === cat.id}
            className={`filter-btn ${selectedCategory === cat.id ? 'is-active' : ''}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {filteredGroups.map((group, groupIdx) => (
          <article className="skill-card reveal" key={group.id || groupIdx}>
            <div className="skill-card-top">
              <span className="skill-index">0{groupIdx + 1}</span>
              <span className="skill-symbol" aria-hidden="true">
                {['⌘', '◇', '⌁', '⚡', '◈'][groupIdx % 5]}
              </span>
            </div>

            <div className="skill-group-header">
              <h3>{group.category}</h3>
              <p className="skill-group-summary">{group.summary}</p>
            </div>

            <div className="skill-items-list">
              {group.items.map((item, itemIdx) => (
                <div className="skill-pill-item" key={itemIdx}>
                  <div className="skill-name-row">
                    <span className="skill-pill-name">{item.name}</span>
                    <span className="skill-pill-level">{item.level}</span>
                  </div>
                  <span className={`skill-status-tag tag-${item.level.toLowerCase()}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="skill-card-line" aria-hidden="true" />
          </article>
        ))}
      </div>

      <div className="learning-strip reveal">
        <span className="learning-icon" aria-hidden="true">✳</span>
        <span>
          <strong>CURRENT FOCUS:</strong> Deepening Python logic & building scalable web prototypes with React and Express.
        </span>
        <span className="strip-right">
          ALWAYS IN BETA <span className="status-pulse" aria-hidden="true" />
        </span>
      </div>
    </section>
  );
}
