import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Importamos componentes de Layout
import Navbar from './components/Navbar'
import LeftColumn from './components/LeftColumn'
import MiddleColumn from './components/MiddleColumn' 
import RightColumn from './components/RightColumn'
import Footer from './components/Footer'

// Importamos las nuevas Páginas
import Login from './pages/Login'
import Registro from './pages/Registro'
import Chat from './pages/Chat'
import Grupos from './pages/Grupos'
import Perfil from './pages/Perfil'
import Configuracion from './pages/Configuracion'

export default function App() {
  return (
    <>
      {/* Barra de navegacion fija */}
      <Navbar />

      <div className="w3-container w3-content" style={{ maxWidth: "1400px", marginTop: "80px" }}>
        <div className="w3-row">
          
          {/* Columna Izquierda fija */}
          <LeftColumn />

          {/* ÁREA DINÁMICA: Aquí cambian los componentes según la URL */}
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



// Este es el link http://localhost:5173/login.html para acceder a la pagina de login, pero no es necesario escribir el .html, con http://localhost:5173/login es suficiente. Lo mismo para las otras paginas, por ejemplo http://localhost:5173/registro para la pagina de registro. 