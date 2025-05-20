import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "../utils/ThemeContext";

function ParticlesBackground() {
  const { darkMode } = useTheme();

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
          color: { value: "transparent" },
        },
        particles: {
          color: { value: darkMode ? "#000000" : "#ffffff" },
          links: {
            enable: true,
            color: darkMode ? "#00aaff" : "#888888",
            distance: 150,
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            outModes: { default: "bounce" },
          },
          number: {
            value: 50,
            density: { enable: true, area: 800 },
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBackground;
