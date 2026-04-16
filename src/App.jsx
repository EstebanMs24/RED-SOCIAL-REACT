import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Importamos componentes de Layout
import Navbar from './components/Navbar'
import LeftColumn from './components/LeftColumn'
import MiddleColumn from './components/MiddleColumn' // Este será nuestro "Home"
import RightColumn from './components/RightColumn'
import Footer from './components/Footer'

// Importamos las nuevas Páginas
import Chat from './pages/Chat'
import Configuracion from './pages/Configuracion'
import Grupos from './pages/Grupos'
import Login from './pages/Login'
import Perfil from './pages/Perfil'
import Registro from './pages/Registro'

export default function App() {
  return (
    <>
      {/* Barra de navegacion fija */}
      <Navbar />

      <div className="w3-container w3-content" style={{ maxWidth: "1400px", marginTop: "80px" }}>
        <div className="w3-row">
          
          {/* Columna Izquierda fija */}
          <LeftColumn />

          {/* ÁREA DINÁMICA: Aquí es donde cambian las páginas */}
          <Routes>
            <Route path="/" element={<MiddleColumn />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/grupos" element={<Grupos />} />
            <Route path="/configuracion" element={<Configuracion />} />
          </Routes>

          {/* Columna Derecha fija */}
          <RightColumn />

        </div>
      </div>

      <br />
      <Footer />
    </>
  )
}