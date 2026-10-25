import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [cursor, setCursor] = useState({ x: -300, y: -300 });
  const [showCursorGlow, setShowCursorGlow] = useState(false);

  // Active section observer (Scroll Spy)
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'journey', 'certificates', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: '-20% 0px -50% 0px', threshold: [0, 0.15, 0.4] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll reveal animation observer
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  // Desktop pointer ambient glow (disabled on touch devices or reduced motion)
  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isTouch && !prefersReducedMotion) {
      setShowCursorGlow(true);
      const handleMove = (e) => setCursor({ x: e.clientX, y: e.clientY });
      window.addEventListener('pointermove', handleMove, { passive: true });
      return () => window.removeEventListener('pointermove', handleMove);
    }
  }, []);

  return (
    <div className="site-shell">
      {showCursorGlow && (
        <div 
          className="pointer-glow" 
          style={{ left: `${cursor.x}px`, top: `${cursor.y}px` }} 
          aria-hidden="true" 
        />
      )}

      {/* Ambient background accents */}
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="ambient ambient-three" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      {/* Main navigation */}
      <Navbar activeSection={activeSection} />

      {/* Page content */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Certificates />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
