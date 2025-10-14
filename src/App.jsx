import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Informativa from './Informativa';
import Favoritos from './Favoritos';
import Original from './Original';
import Detalle from './Detalle';

function App() {
  return (
    <Router>
      {/* Menú fijo */}
      <header className="menu-fixed">
        <nav className="c-menu">
          <div className="menu-logo">📍ColombiaData</div>
          <input type="checkbox" id="menu-toggle" className="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">☰</label>

          <div className="menu-links">
            <Link to="/">Home</Link>
            <Link to="/Informativa">Informativa</Link>
            <Link to="/Original">Original</Link>
            <Link to="/Favoritos">Favoritos</Link>
          </div>
        </nav>
      </header>

      {/* Contenido de la app */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Informativa" element={<Informativa />} />
          <Route path="/Original" element={<Original />} />
          <Route path="/Favoritos" element={<Favoritos />} />
          <Route path="/Detalle/:depto/:municipio" element={<Detalle />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
