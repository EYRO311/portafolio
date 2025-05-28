import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';
import './Proyectos.css';
import { useTheme } from "../utils/ThemeContext";

function Proyectos() {
  const { darkMode } = useTheme();

  return (
    <section id="proyectos" className={`projects-section ${darkMode ? "dark" : "light"}`}>

      <motion.div
        className='project-grid'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <div className={`project-card ${darkMode ? "dark" : "light"}`}>
          <iframe
            src="/path-to-your-pdf.pdf"
            title="PDF Preview"
            className="project-preview"
          />
          <div className="project-info">
            <h3>Reporte Técnico</h3>
            <p>Documento elaborado para presentar análisis y resultados técnicos.</p>
            <div className="project-skills">
              <span>LaTeX</span>
              <span>Python</span>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className={`project-card ${darkMode ? "dark" : "light"}`}>
          <iframe
            src="https://www.elite-coach.com.mx/"
            title="Website Preview"
            className="project-preview"
          />
          <div className="project-info">
            <h3>Landing Page</h3>
            <p>Participación como frontend y backend mejorando UX.</p>
            <div className="project-skills">
              <span>React</span>
              <span>Node.js</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Proyectos;
