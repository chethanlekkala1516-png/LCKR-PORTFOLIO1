import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = personalInfo.heroPhrases;

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayText(phrases[0]);
      return;
    }

    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, phrases]);

  return (
    <section id="home" className="hero section-wrap">
      <div className="hero-copy">
        <div className="availability reveal">
          <span className="status-pulse" aria-hidden="true" />
          <span>{personalInfo.status.toUpperCase()}</span>
        </div>

        <p className="hero-kicker reveal">HELLO, WORLD. I'M</p>

        <h1 className="hero-title reveal">
          Chethan
          <span className="title-second">
            Kumar Reddy<span className="neon-period">.</span>
          </span>
        </h1>

        <div className="hero-typewriter-container reveal" aria-live="polite">
          <span className="role-line" aria-hidden="true" />
          <span className="typewriter-text">{displayText}</span>
          <span className="typewriter-cursor" aria-hidden="true">|</span>
        </div>

        <p className="hero-description reveal">
          First-year Computer Science student specializing in <strong>IoT & Blockchain Technology</strong> at <strong>NIAT at Annamacharya University</strong>. 
          Curious builder focused on learning fundamentals, writing clean code, and turning ideas into real-world software.
        </p>

        <div className="hero-actions reveal">
          <a className="button button-primary" href="#projects">
            Explore My Work <span aria-hidden="true">↘</span>
          </a>
          <a 
            className="button button-secondary" 
            href={personalInfo.assets.resumePdf} 
            download="Chethan_Kumar_Reddy_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Download resume PDF"
          >
            <span className="button-icon" aria-hidden="true">↓</span> Download Resume
          </a>
          <a className="button button-ghost" href="#contact">
            <span className="button-icon" aria-hidden="true">✳</span> Get In Touch
          </a>
        </div>

        <div className="hero-socials reveal">
          <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn Profile">
            LINKEDIN <span aria-hidden="true">↗</span>
          </a>
          <a href={personalInfo.socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub Profile">
            GITHUB <span aria-hidden="true">↗</span>
          </a>
          <span className="social-divider" aria-hidden="true" />
          <span className="location-label">
            <span className="tiny-dot" aria-hidden="true" /> INDIA · IST (BATCH 2026–2030)
          </span>
        </div>
      </div>

      <div className="hero-visual reveal" aria-label="Chethan Kumar Reddy profile visual with orbital accents">
        <div className="visual-topline">
          <span>PORTRAIT & SYSTEMS</span>
          <span>BATCH 2026–2030</span>
        </div>

        <div className="orbit-scene">
          <div className="orbit orbit-a" aria-hidden="true" />
          <div className="orbit orbit-b" aria-hidden="true" />
          <div className="orbit orbit-c" aria-hidden="true" />

          <div className="orbit-core profile-core">
            <img 
              src={personalInfo.assets.profilePhoto} 
              alt="Chethan Kumar Reddy Lekkala portrait" 
              loading="eager"
            />
            <span className="profile-badge-status" title="Active student builder" />
          </div>

          <div className="orbit-node node-a" aria-hidden="true" />
          <div className="orbit-node node-b" aria-hidden="true" />
          <div className="orbit-node node-c" aria-hidden="true" />
          <div className="orbit-cross cross-a" aria-hidden="true">+</div>
          <div className="orbit-cross cross-b" aria-hidden="true">+</div>

          <div className="orbit-label label-a">
            FOUNDATION<br /><b>→ PRACTICE</b>
          </div>
          <div className="orbit-label label-b">
            BUILD /<br /><b>IMPROVE</b>
          </div>
        </div>

        <div className="visual-footer">
          <span>AUTHENTIC PORTFOLIO</span>
          <span className="visual-eq" aria-hidden="true">◈ &nbsp; ◌ &nbsp; ◈</span>
        </div>
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to About section">
        <span className="scroll-track" aria-hidden="true" />
        <span>SCROLL TO EXPLORE</span>
      </a>

      <div className="hero-index" aria-hidden="true">
        STUDENT DEVELOPER · 2026
      </div>
    </section>
  );
}
