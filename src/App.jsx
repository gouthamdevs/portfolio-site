import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import PixelParticles from './components/PixelParticles';

export default function App() {
  const [section, setSection] = useState(null);

  // Scroll to section when state changes
  useEffect(() => {
    if (section) {
      const el = document.getElementById('section-container');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [section]);

  return (
    <div className="relative bg-[#3D003D] text-white overflow-x-hidden overflow-y-auto min-h-screen">

      {/* 🌌 GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />
        <PixelParticles />
      </div>

      {/* 🚀 MAIN CONTENT */}
      <div className="relative z-10">
        <Hero setSection={setSection} />
        <div id="section-container">
          {section === 'projects' && <Projects />}
          {section === 'education' && <Education />}
          {section === 'skills' && <Skills />}
        </div>
      </div>

    </div>
  );
}
