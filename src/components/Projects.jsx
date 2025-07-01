import { useState, useEffect } from 'react';

export default function Projects() {
  const [expanded, setExpanded] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalImage ? 'hidden' : '';
  }, [modalImage]);

  const projects = [
    {
      name: "BlockBreaker",
      icon: "blockbreakerIcon.png",
      image: "block_icon.png",
      description: "A classic brick-breaking arcade game with cool music and responsive controls.",
      features: [
        "Retro pixel-art visual style",
        "Power-ups like multi-ball and speed boost",
        "Highscore Tracking"
        
      ],
      screenshots: ["block_1.png", "block_2.png", "block_3.png"],
      video: "https://youtu.be/your_blockbreaker_video",
      github: "https://github.com/gouthamdevs/blockbreaker"
    },
    {
      name: "Ninja Frog",
      icon: "NinjafrogIcon.png",
      image: "Ninjafrog.png",
      description: "A 2D plaformer with enemies and combat.",
      features: [
        "Enemies with simple ai",
        "Collectibles",
        "Level Progression"
      ],
      screenshots: ["ninjafrog-1.png", "ninjafrog-2.png", "ninjafrog-3.png"],
      video: "https://youtu.be/your_pixelclash_video",
      github: "https://github.com/gouthamdevs/ninja_frog"
    },
    {
      name: "Roll Ball 3D",
      icon: "rollballIcon.png",
      image: "rollball.jpeg",
      description: "A physics-based 3D ball rolling game where players collect objects to win.",
      features: [
        "Collectible system with animated pick-ups and real-time score tracking.",
        "AI enemy that follows player.",
      ],
      screenshots: ["rollball-1.png", "rollball-2.png", "rollball-3.png"],
      video: "https://youtu.be/your_dungeonrush_video",
      github: "https://github.com/gouthamdevs/RollBall"
    },
    {
      name: "Drive Master",
      icon: "drivemasterIcon.png",
      image: "drivemaster.png",
      description: "Simple two player racing game.",
      features: [
        "AUtomatically spawned traffic",
        "Separate controls for each player",
        "Splitscreen mode"
      ],
      screenshots: ["drivemaster-1.png", "drivemaster-2.png", "drivemaster-3.png"],
      video: "https://youtu.be/your_turbotanks_video",
      github: "https://github.com/gouthamdevs/DriveMasters"
    }
  ];

  const toggleExpand = (index) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative -mt-72 pt-32 pb-20 px-6 text-white z-10">
      {/* Divider Line */}
      <div className="flex justify-center mb-10">
        <hr className="w-[60rem] border-gray-400" />
      </div>

      <h2 className="text-3xl font-bold text-center mb-12 font-arcade">Projects</h2>

      {/* Horizontal Icons */}
      <div className="flex flex-wrap justify-center gap-10 mb-12">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className="cursor-pointer text-center"
            onClick={() => toggleExpand(index)}
          >
            <img
              src={`/assets/${project.image}`}
              alt={project.name}
              className="w-32 h-32 object-cover rounded-full border-2 border-white hover:shadow-[0_0_15px_white] transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Expanded Section */}
      {expanded !== null && (
        <div className="mt-4 bg-white/10 backdrop-blur-md p-6 rounded-lg text-left w-[90vw] md:w-[40rem] mx-auto">
          {/* Icon at the top */}
          <div className="flex justify-center mb-2">
            <img
              src={`/assets/${projects[expanded].icon}`}
              alt={`${projects[expanded].name} Icon`}
              className="w-48 h-48 object-contain"
            />
          </div>

          {/* Description */}
          <p className="text-sm md:text-lg font-orbitron glow-text text-center mt-[-50px] mb-3">
            {projects[expanded].description}
          </p>

          {/* Features */}
          <ul className="list-disc text-md font-orbitron text-gray-300 mb-4 px-6">
            {projects[expanded].features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>

          {/* Screenshots */}
          <div className="flex gap-4 mb-4 justify-center flex-wrap">
            {projects[expanded].screenshots.map((shot, i) => (
              <img
                key={i}
                src={`/assets/${shot}`}
                alt={`Screenshot ${i + 1}`}
                className="w-48 h-28 object-cover rounded cursor-pointer hover:scale-105 transition"
                onClick={() => setModalImage(`/assets/${shot}`)}
              />
            ))}
          </div>

          {/* Links */}
          <div className="text-pink-400 space-x-4 text-center">
            <a href={projects[expanded].video} className="underline" target="_blank" rel="noopener noreferrer">
              Gameplay Video
            </a>
            <a href={projects[expanded].github} className="underline" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      )}

      {/* Modal for fullscreen image */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center"
          onClick={() => setModalImage(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={modalImage}
              alt="Expanded Screenshot"
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
            />
            <button
              className="absolute top-3 right-3 text-white text-3xl font-bold bg-black/70 rounded-full px-2 pb-1 hover:bg-black"
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
