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
  };

  return (
    <div className="relative min-h-screen bg-[#3D003D] text-white overflow-x-hidden overflow-y-auto">
      
      {/* Vignette Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none z-10" />

      {/* Floating Pixel Particles */}
      <PixelParticles />

      {/* Hero Section */}
      <div className="relative z-20">
        <Hero setSection={toggleSection} />
      </div>

      {/* Sections appear closer to Hero, but not overlapping */}
      <div className="relative z-10 -mt-24">
        {section === 'projects' && <Projects />}
        {section === 'education' && <Education />}
        {section === 'skills' && <Skills />}
      </div>
    </div>
  );
}
