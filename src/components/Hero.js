import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
} from 'react-icons/si';

import './Hero.css';
import ParticlesBackground from './ParticlesBackground';
import ScrollVelocity from './ScrollVelocity';

function Hero() {
  return (
    <section id="hero" className="hero" style={{ position: 'relative' }}>
      <ParticlesBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="intro"
        >
          Hi, I'm <span className="name">Emiliano Yahel Ruiz Oropeza</span>
        </motion.p>

        <TypeAnimation
          sequence={[
            'Software Developer',
            2000,
            '',
            1000,
            'Fullstack Engineer',
            2000,
            '',
            1000,
            'Javascript Specialist',
            2000,
          ]}
          wrapper="h1"
          cursor={true}
          repeat={Infinity}
          className="title"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="description"
        >
          Transforming ideas into functional, scalable, and elegant web solutions <span className="highlight">fullstack</span> development.
        </motion.p>

        <div className="tech-scroll-container">
          <ScrollVelocity
            texts={[
              // Agrupar TODOS los íconos en un mismo array
              <>
                <div className="tech-pair"><SiNodedotjs /></div>
                <div className="tech-pair"><SiHtml5 /></div>
                <div className="tech-pair"><SiNextdotjs /></div>
                <div className="tech-pair"><SiTypescript /></div>
                <div className="tech-pair"><SiCss3 /></div>
                <div className="tech-pair"><SiJavascript /></div>
                {/* Agrega más íconos aquí */}
              </>
            ]}
            velocity={60}
            numCopies={8} // Aumentar para pantallas grandes
            className="tech-icon-scroll"
            scrollerStyle={{ gap: '3rem' }}
          />
        </div>


      </div>
    </section>
  );
}

export default Hero;
