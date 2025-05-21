import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import SobreMi from './components/Sobremi';
import Proyectos from './components/Proyectos';
import Navbar from './components/Navbar';
import SpotifyPlayer from './components/SpotifyPlayer';
import Skills from './components/skills';
import Hero from './components/Hero';
import ParticlesBackground from './components/ParticlesBackground';
import { useTheme } from "./utils/ThemeContext";

function AppContainer() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <ParticlesBackground darkMode={darkMode} />
      <Router>
        <div className="content-wrapper">
          <Navbar />
          <Sidebar />
          <Routes>
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
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<SobreMi />} />
          </Routes>

          <footer style={{ padding: "20px", textAlign: "center", color: "#888" }}>
            © 2025 EYRO. Hecho con React.
          </footer>
        </div>  
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </Router>
    </div>
  );
}

export default AppContainer;