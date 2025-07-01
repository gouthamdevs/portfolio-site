import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import '@fontsource/press-start-2p';
import '@fontsource/orbitron';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero({ setSection }) {
  return (
    <section className="text-center pt-12 pb-20 min-h-screen flex flex-col items-center justify-start">
      <div className="mt-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 font-arcade">Goutham dev S</h1>

        <div className="flex justify-center mb-2">
          <img
            src="/assets/profile.jpg"
            alt="Goutham"
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-4">
          <a href="mailto:gdsdev455@gmail.com" rel="noopener noreferrer">
            <FaEnvelope className="text-white hover:text-pink-300 text-3xl transition" />
          </a>
          <a href="https://github.com/gouthamdevs" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white hover:text-pink-300 text-3xl transition" />
          </a>
          <a href="https://www.linkedin.com/in/goutham-dev-s-5916a7256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-pink-300 text-3xl transition" />
          </a>
        </div>

        <TypeAnimation
          sequence={['Game Developer', 2000, 'Unity | Unreal | Godot', 2000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xs md:text-base font-arcade mb-6"
        />

        <div className="flex flex-col items-center my-6 px-6">
          <hr className="w-[60rem] border-gray-400 mb-3" />
          <p className="text-sm md:text-lg max-w-4xl font-orbitron glow-text text-center my-3">
            Hi there, and thanks for stopping by! I’m Goutham — a game dev with a passion for turning pixels into playable worlds that are fast, fun, and just a bit chaotic — exactly how games should be.
          </p>
          <hr className="w-[60rem] border-gray-400 mt-3" />
        </div>

        <div className="flex justify-center gap-6 mt-4 flex-wrap">
          <button
            onClick={() => setSection('projects')}
            className="w-36 px-3 py-1.5 text-xs text-white font-arcade border border-white hover:shadow-[0_0_15px_white] transition"
          >
            Projects
          </button>
          <button
            onClick={() => setSection('education')}
            className="w-36 px-3 py-1.5 text-xs text-white font-arcade border border-white hover:shadow-[0_0_15px_white] transition"
          >
            Education
          </button>
          <button
            onClick={() => setSection('skills')}
            className="w-36 px-3 py-1.5 text-xs text-white font-arcade border border-white hover:shadow-[0_0_15px_white] transition"
          >
            Skills
          </button>
        </div>
      </div>
    </section>
  );
}
