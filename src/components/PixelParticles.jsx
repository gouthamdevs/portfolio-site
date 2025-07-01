import React, { useEffect, useRef } from 'react';

export default function PixelParticles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const totalSmall = 40;
    const totalLarge = 10;

    // Small pixels
    for (let i = 0; i < totalSmall; i++) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel-particle';
      const size = 6 + Math.random() * 4; // 6px to 10px
      pixel.style.width = `${size}px`;
      pixel.style.height = `${size}px`;
      pixel.style.left = `${Math.random() * 100}%`;
      pixel.style.top = `${Math.random() * 100}%`;
      pixel.style.animationDuration = `${8 + Math.random() * 6}s`; // 8–14s
      pixel.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(pixel);
    }

    // Larger pixels
    for (let i = 0; i < totalLarge; i++) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel-particle large-pixel';
      const size = 12 + Math.random() * 4; // 12px to 16px
      pixel.style.width = `${size}px`;
      pixel.style.height = `${size}px`;
      pixel.style.left = `${Math.random() * 100}%`;
      pixel.style.top = `${Math.random() * 100}%`;
      pixel.style.animationDuration = `${12 + Math.random() * 4}s`; // slower: 12–16s
      pixel.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(pixel);
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
}
