import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

function Contacto() {
  return (
    <motion.div
      id="contacto"
      className="card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      variants={fadeInUp}
    >
      <h2>Contacto</h2>
      <p>Email: tuemail@example.com</p>
    </motion.div>
  );
}

export default Contacto;
