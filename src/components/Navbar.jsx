import React, { useState } from 'react'
import { Link } from 'react-router-dom' // Importamos Link para la navegación

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <div className="w3-top">
      {/* Barra de navegación principal */}
      <div className="w3-bar w3-theme-d2 w3-left-align w3-large">

        {/* Botón hamburguesa - Móvil */}
        <button
          className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"
          onClick={() => setMenuAbierto(!menuAbierto)}
          style={{ background: 'none', border: 'none' }}
        >
          <i className="fa fa-bars"></i>
        </button>

        {/* Logo - Va al Inicio (/) */}
        <Link to="/" className="w3-bar-item w3-button w3-padding-large w3-theme-d4">
          <i className="fa fa-home w3-margin-right"></i>Logo
        </Link>

        {/* Iconos del menú - Escritorio */}
        <Link to="/" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Noticias">
          <i className="fa fa-globe"></i>
        </Link>
        
        <Link to="/perfil" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Mi cuenta">
          <i className="fa fa-user"></i>
        </Link>

        <Link to="/chat" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Mensajes">
          <i className="fa fa-envelope"></i>
        </Link>

        {/* Notificaciones (Dropdown) */}
        <div className="w3-dropdown-hover w3-hide-small">
          <button className="w3-button w3-padding-large" title="Notificaciones">
            <i className="fa fa-bell"></i>
            <span className="w3-badge w3-right w3-small w3-green">3</span>
          </button>
          <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{ width: "300px" }}>
            <span className="w3-bar-item w3-button">Nueva solicitud de amistad</span>
            <span className="w3-bar-item w3-button">John Doe publicó en tu muro</span>
            <span className="w3-bar-item w3-button">A Jane le gusta tu post</span>
          </div>
        </div>

        {/* Botón de Configuración (Agregado para usar tu ruta) */}
        <Link to="/configuracion" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Ajustes">
          <i className="fa fa-cog"></i>
        </Link>

        {/* Avatar del usuario */}
        <Link to="/perfil" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="Mi perfil">
          <img src="https://www.w3schools.com/w3images/avatar2.png" className="w3-circle" style={{ height: "23px", width: "23px" }} alt="Avatar" />
        </Link>

      </div>

      {/* Menú móvil */}
      {menuAbierto && (
        <div className="w3-bar-block w3-theme-d2 w3-large">
          <Link to="/" className="w3-bar-item w3-button w3-padding-large" onClick={() => setMenuAbierto(false)}>Inicio</Link>
          <Link to="/grupos" className="w3-bar-item w3-button w3-padding-large" onClick={() => setMenuAbierto(false)}>Grupos</Link>
          <Link to="/chat" className="w3-bar-item w3-button w3-padding-large" onClick={() => setMenuAbierto(false)}>Mensajes</Link>
          <Link to="/perfil" className="w3-bar-item w3-button w3-padding-large" onClick={() => setMenuAbierto(false)}>Mi Perfil</Link>
        </div>
      )}
    </div>
  )
}