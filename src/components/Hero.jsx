import { TypeAnimation } from 'react-type-animation';
import '@fontsource/press-start-2p';
import '@fontsource/orbitron';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImg from '/assets/profile.jpg';

export default function Hero({ setSection }) {

  const handleToggle = (target) => {
    setSection((prev) => (prev === target ? null : target));
  };

  return (
    <section className="text-center pt-8 pb-6 flex flex-col items-center justify-start px-4 sm:px-6 md:px-12">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 font-arcade">
        Goutham Dev S
      </h1>

      <img
        src={profileImg}
        alt="Goutham"
        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg mb-4"
      />

      <div className="flex justify-center gap-4 sm:gap-6 mb-4 flex-wrap">
        <a href="mailto:gdsdev455@gmail.com" rel="noopener noreferrer">
          <FaEnvelope className="text-white hover:text-pink-300 text-2xl sm:text-3xl transition" />
        </a>
        <a href="https://github.com/gouthamdevs" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white hover:text-pink-300 text-2xl sm:text-3xl transition" />
        </a>
        <a href="https://www.linkedin.com/in/goutham-dev-s-gds" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white hover:text-pink-300 text-2xl sm:text-3xl transition" />
        </a>
      </div>

      <TypeAnimation
        sequence={['Game Developer', 2000, 'Unity | Unreal | Godot', 2000]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-xs sm:text-sm md:text-base font-arcade mb-4"
      />

      <p className="text-xs sm:text-sm md:text-lg max-w-xl mx-auto font-orbitron glow-text text-center mb-4">
        Hi there, and thanks for stopping by! I’m Goutham — a game dev with a passion for turning pixels into playable worlds that are fast, fun, and just a bit chaotic — exactly how games should be.
      </p>

      <div className="flex justify-center gap-4 sm:gap-6 mt-4 flex-wrap">
        <button
          onClick={() => handleToggle('projects')}
          className="min-w-[8rem] px-3 py-2 text-xs sm:text-sm font-arcade border border-white hover:shadow-[0_0_15px_white] transition"
        >
          Projects
        </button>
        <button
          onClick={() => handleToggle('education')}
          className="min-w-[8rem] px-3 py-2 text-xs sm:text-sm font-arcade border border-white hover:shadow-[0_0_15px_white] transition"
        >
          Education
        </button>
        <button
          onClick={() => handleToggle('skills')}
          className="min-w-[8rem] px-3 py-2 text-xs sm:text-sm font-arcade border border-white hover:shadow-[0_0_15px_white] transition"
        >
          Skills
        </button>
      </div>
    </section>
  );
}
