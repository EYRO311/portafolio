import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations'; // ajusta si la ruta es distinta

function Skills() {
  return (
    <motion.div
      id="skills"
      className="card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      variants={fadeInUp}
    >
      <h2>Skills</h2>
      <p>JavaScript, React, HTML, CSS, Node.js...</p>
    </motion.div>
  );
}

export default Skills;
