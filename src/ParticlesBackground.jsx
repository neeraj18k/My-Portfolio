import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: -1, // ensures particles stay behind all content
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false }, // turn this off since we manage fullscreen manually
          background: {
            color: "#0d0d0d",
          },
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: {
              value: ["#39ff14", "#00ffff", "#ff00ff", "#ffea00", "#ff6f00"],
            },
            shape: { type: "circle" },
            opacity: { value: 0.7 },
            size: { value: 4 },
            links: {
              enable: true,
              color: "#ffffff",
              distance: 150,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              outMode: "bounce",
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100 },
              push: { quantity: 4 },
            },
          },
        }}
      />
    </div>
  );
}

export default ParticlesBackground;
