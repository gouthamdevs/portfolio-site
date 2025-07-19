import { useState } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import PixelParticles from './components/PixelParticles';

export default function App() {
  const [section, setSection] = useState(null);

  const toggleSection = (target) => {
    setSection((prev) => (prev === target ? null : target));
    setTimeout(() => {
      document.getElementById('section-container')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="relative bg-[#3D003D] text-white overflow-x-hidden overflow-y-auto min-h-screen">

      {/* 🌌 GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />
        <PixelParticles />
      </div>

      {/* 📌 STICKY NAVBAR */}
      <nav className="sticky top-0 z-20 bg-[#3D003D]/90 backdrop-blur-md flex justify-center gap-4 py-2 border-b border-white/10">
        <button onClick={() => toggleSection('projects')} className="text-sm font-arcade hover:text-pink-400 transition">
          Projects
        </button>
        <button onClick={() => toggleSection('education')} className="text-sm font-arcade hover:text-pink-400 transition">
          Education
        </button>
        <button onClick={() => toggleSection('skills')} className="text-sm font-arcade hover:text-pink-400 transition">
          Skills
        </button>
      </nav>

      {/* 🚀 MAIN CONTENT */}
      <div className="relative z-10">
        <Hero setSection={toggleSection} />
        <div id="section-container">
          {section === 'projects' && <Projects />}
          {section === 'education' && <Education />}
          {section === 'skills' && <Skills />}
        </div>
      </div>

    </div>
  );
}
