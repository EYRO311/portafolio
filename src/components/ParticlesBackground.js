// src/components/ParticlesBackground.js
import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: '#000' },
        particles: {
          color: { value: '#ffffff' },
          number: { value: 30 },
          opacity: { value: 0.1 },
          size: { value: 1.5 },
          move: { enable: true, speed: 0.3 },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
          },
        },
      }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
      }}
    />
  );
}

export default ParticlesBackground;
