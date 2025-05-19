import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('open', open);
  }, [open]);

  return (
    <>
      <div className="burger" onClick={() => setOpen(!open)}>
        <span className="burger-icon"></span>
      </div>
      <div className="menu">
        <div className="sidebar-logo">
          <a href="#home">MiLogo</a>
        </div>
          <nav>
            <Link to="/skills" onClick={() => setOpen(false)}>Skills</Link>
            <Link to="/about" onClick={() => setOpen(false)}>Sobre mí</Link>
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <a href="#projects" onClick={() => setOpen(false)}>Proyectos</a>
            <a href="#Music" onClick={() => setOpen(false)}>Contacto</a>
          </nav>
      </div>
    </>
  );
}

export default Sidebar;
