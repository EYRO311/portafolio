import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

function SobreMi() {
  return (
    <motion.div
      id="sobre-mi"
      className="card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      variants={fadeInUp}
    >
      <h2>Sobre mí</h2>
      <p>Texto descriptivo de mis conocimientos de programación y símbolos de conocimiento</p>
    </motion.div>
  );
}

export default SobreMi;
