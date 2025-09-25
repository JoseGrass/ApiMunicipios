import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Home from './Home'
import Informativa from './Informativa'
import Favoritos from './Favoritos'
import Original from './Original'
import Detalle from './Detalle'

function App() {
 
  return (
    <>
      <Router>

        <nav className="c-menu">
          <Link to="/">Home</Link>
          <Link to="/Informativa">Informativa</Link>
          <Link to="/Original">Original</Link>
          <Link to="/Favoritos">Favoritos</Link>
        </nav>


      <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/Informativa" element={<Informativa /> } />
          <Route path="/original" element={<Original /> } />
          <Route path="/Favoritos" element={<Favoritos /> } />
          <Route path="/Detalle/:depto/:municipio" element={<Detalle /> } />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
