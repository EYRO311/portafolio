import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function ParticlesBackground({ darkMode }) {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: {
            value: darkMode ? "#ffffff":"#000000",
          },
        },
        particles: {
          number: {
            value: 70,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: darkMode ? "#249be7" : "#249be7",
          },
          links: {
            enable: true,
            color: darkMode ? "#000000" : "#ffffff",
            distance: 100,
            opacity: .8,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            outModes: {
              default: "bounce",
            },
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBackground;