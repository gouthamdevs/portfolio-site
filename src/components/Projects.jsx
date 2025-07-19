import { useState, useEffect } from 'react';
import blockbreakerIcon from '/assets/blockbreakerIcon.png';
import block_icon from '/assets/block_icon.png';
import block_1 from '/assets/block_1.png';
import block_2 from '/assets/block_2.png';
import block_3 from '/assets/block_3.png';
import ninjafrogIcon from '/assets/NinjafrogIcon.png';
import ninjafrog from '/assets/Ninjafrog.png';
import ninjafrog_1 from '/assets/ninjafrog-1.png';
import ninjafrog_2 from '/assets/ninjafrog-2.png';
import ninjafrog_3 from '/assets/ninjafrog-3.png';
import rollballIcon from '/assets/rollballIcon.png';
import rollball from '/assets/rollball.jpeg';
import rollball_1 from '/assets/rollball-1.png';
import rollball_2 from '/assets/rollball-2.png';
import rollball_3 from '/assets/rollball-3.png';
import drivemasterIcon from '/assets/drivemasterIcon.png';
import drivemaster from '/assets/drivemaster.png';
import drivemaster_1 from '/assets/drivemaster-1.png';
import drivemaster_2 from '/assets/drivemaster-2.png';
import drivemaster_3 from '/assets/drivemaster-3.png';

export default function Projects() {
  const [expanded, setExpanded] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    document.body.style.overflow = modalImage ? 'hidden' : '';
  }, [modalImage]);

  const projects = [
    {
      name: 'BlockBreaker',
      icon: blockbreakerIcon,
      image: block_icon,
      description: 'A classic brick-breaking arcade game with cool music and responsive controls.',
      features: [
        'Retro pixel-art visual style',
        'Power-ups like multi-ball and speed boost',
        'Highscore Tracking'
      ],
      screenshots: [block_1, block_2, block_3],
      video: 'https://youtu.be/n4YIC-IjTWU',
      github: 'https://github.com/gouthamdevs/blockbreaker',
    },
    {
      name: 'Ninja Frog',
      icon: ninjafrogIcon,
      image: ninjafrog,
      description: 'A 2D platformer with enemies and combat.',
      features: [
        'Enemies with simple AI',
        'Collectibles',
        'Level progression'
      ],
      screenshots: [ninjafrog_1, ninjafrog_2, ninjafrog_3],
      video: 'https://youtu.be/QcOVlPLHlhs',
      github: 'https://github.com/gouthamdevs/ninja_frog',
    },
    {
      name: 'Roll Ball 3D',
      icon: rollballIcon,
      image: rollball,
      description: 'A physics-based 3D ball rolling game where players collect objects to win.',
      features: [
        'Collectible system with animated pick-ups and real-time score tracking.',
        'AI enemy that follows player.'
      ],
      screenshots: [rollball_1, rollball_2, rollball_3],
      video: 'https://youtu.be/qfk2q84ZnQ0',
      github: 'https://github.com/gouthamdevs/RollBall',
    },
    {
      name: 'Drive Master',
      icon: drivemasterIcon,
      image: drivemaster,
      description: 'Simple two player racing game.',
      features: [
        'Automatically spawned traffic',
        'Separate controls for each player',
        'Splitscreen mode'
      ],
      screenshots: [drivemaster_1, drivemaster_2, drivemaster_3],
    },
  ];

  const toggleExpand = (index) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-20 px-4 sm:px-6 text-white text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 font-arcade">Projects</h2>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
        {projects.map((project, index) => (
          <div key={project.name} className="cursor-pointer" onClick={() => toggleExpand(index)}>
            <img
              src={project.image}
              alt={project.name}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover rounded-full border-2 border-white hover:shadow-[0_0_15px_white] transition duration-300"
            />
          </div>
        ))}
      </div>

      {expanded !== null && (
        <div className="bg-white/10 p-6 rounded-lg max-w-[95vw] sm:max-w-2xl mx-auto">
          <img
            src={projects[expanded].icon}
            alt={`${projects[expanded].name} Icon`}
            className="w-24 sm:w-48 mx-auto mb-4"
          />
          <p className="text-sm sm:text-base font-orbitron glow-text text-center mb-4">
            {projects[expanded].description}
          </p>
         <ul className="list-disc text-left text-sm md:text-base px-4 sm:px-6 mt-4 text-gray-300">
  {projects[expanded].features.map((feature, i) => (
    <li key={i} className="mb-2">{feature}</li>
  ))}
</ul>

<div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4">
  {projects[expanded].screenshots.map((shot, i) => (
    <img
      key={i}
      src={shot}
      alt={`Screenshot ${i + 1}`}
      className="w-[30%] sm:w-24 md:w-32 h-auto object-cover rounded cursor-pointer hover:scale-105 transition"
      onClick={() => setModalImage(shot)}
    />
  ))}
</div>

          <div className="text-pink-400 space-x-4 text-center mt-4">
            {projects[expanded].video && (
              <a href={projects[expanded].video} className="underline" target="_blank" rel="noopener noreferrer">
                Gameplay Video
              </a>
            )}
            {projects[expanded].github && (
              <a href={projects[expanded].github} className="underline" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
          </div>
        </div>
      )}

      {modalImage && (
        <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center" onClick={() => setModalImage(null)}>
          <div onClick={(e) => e.stopPropagation()}>
            <img
              src={modalImage}
              alt="Expanded Screenshot"
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold bg-black/70 rounded-full px-2 pb-1 hover:bg-black"
              onClick={() => setModalImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
