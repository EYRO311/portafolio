import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from '../src/components/Sidebar';
import SobreMi from '../src/components/Sobremi';
import Proyectos from '../src/components/Proyectos';
import Navbar from '../src/components/Navbar';
import SpotifyPlayer from '../src/components/SpotifyPlayer';
import Skills from './components/skills';
import Hero from './components/Hero';

import './App.css';

function App() {
  return (
    <Router>
      <div className="animated-noise"></div>
      <Navbar />
      <Sidebar />
      <Routes>
        {/* ✅ Ruta principal con Hero */}
        <Route
          path="/"
          element={
            <div className="main-content">
              <section id="hero"><Hero /></section>
              <section id="projects"><Proyectos /></section>
              <section id="Music"><SpotifyPlayer /></section>
            </div>
          }
        />

        {/* ✅ Otras páginas */}
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<SobreMi />} />
      </Routes>

      <footer style={{ padding: "20px", textAlign: "center", color: "#888" }}>
        © 2025 TuNombre. Hecho con React.
      </footer>
    </Router>
  );
}

export default App;
