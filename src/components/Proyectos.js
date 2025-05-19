import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

function Proyectos() {
  return (
    <motion.div
      id="proyectos"
      className="card-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      variants={fadeInUp}
    >
      <div className="card">
        <h3>Proyecto 1</h3>
        <p>Descripción del proyecto 1</p>
      </div>
      <div className="card">
        <h3>Proyecto 2</h3>
        <p>Descripción del proyecto 2</p>
      </div>
    </motion.div>
  );
}

export default Proyectos;
