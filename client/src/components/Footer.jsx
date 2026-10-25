import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-top-row">
        <a className="brand footer-brand" href="#home" aria-label="Chethan home">
          <span className="brand-mark">C<span>.</span></span>
          <span className="brand-name">
            {personalInfo.brandName}<span className="brand-dot">{personalInfo.brandSuffix}</span>
          </span>
        </a>

        <div className="footer-center">
          <span>LEARN CONTINUOUSLY</span>
          <span className="footer-sep" aria-hidden="true">✳</span>
          <span>BUILD AUTHENTICALLY</span>
          <span className="footer-sep" aria-hidden="true">✳</span>
          <span>KEEP GROWING</span>
        </div>

        <a className="back-top" href="#home" onClick={scrollToTop} aria-label="Scroll back to top of page">
          BACK TO TOP <span aria-hidden="true">↑</span>
        </a>
      </div>

      <div className="footer-social-strip">
        <div className="footer-links">
          <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <span className="strip-divider" aria-hidden="true">/</span>
          <a href={personalInfo.socialLinks.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span className="strip-divider" aria-hidden="true">/</span>
          <a href={personalInfo.assets.resumePdf} download="Chethan_Kumar_Reddy_Resume.pdf" target="_blank" rel="noreferrer">
            Resume PDF
          </a>
          <span className="strip-divider" aria-hidden="true">/</span>
          <a href={personalInfo.assets.certificatePdf} target="_blank" rel="noreferrer">
            Workshop Certificate
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {currentYear} LEKKALA CHETHAN KUMAR REDDY · ALL RIGHTS RESERVED</span>
        <span>ENGINEERED WITH REACT · VITE · EXPRESS · ACCESSIBLE CSS</span>
      </div>
    </footer>
  );
}
