import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(progress);
      setScrolled(totalScroll > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'journey', label: 'Journey' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }} 
        aria-hidden="true" 
      />
      <header className={`topbar ${scrolled ? 'topbar-scrolled' : ''}`}>
        <div className="topbar-inner">
          <a className="brand" href="#home" onClick={closeMenu} aria-label={`${personalInfo.name} Home`}>
            <span className="brand-mark">C<span>.</span></span>
            <span className="brand-name">
              {personalInfo.brandName}<span className="brand-dot">{personalInfo.brandSuffix}</span>
            </span>
          </a>

          <button
            className={`menu-toggle ${menuOpen ? 'is-active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`nav-link ${activeSection === id ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              LET'S TALK <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
