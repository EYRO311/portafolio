import React from 'react';
import Scrollspy from 'react-scrollspy';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Usa este en lugar de HashLink para rutas completas

<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <div className="navbar-logo">MiLogo</div>
</motion.div>

function Navbar() {
  return (
    
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">MiLogo</Link>
        </div>
        <Scrollspy
          items={['hero', 'projects', 'Music']}
          currentClassName="active"
          className="navbar-links"
          offset={-100}
        >
          <li><a href="#hero">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#Music">Music</a></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/about">Sobre mí</Link></li>
        </Scrollspy>

        <div className="navbar-icons">
          <a href="https://github.com/tuusuario" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:tuemail@dominio.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;