import React, { useState } from 'react'

// useState es un "hook" de React que permite guardar y cambiar datos dentro del componente.
// Aqui lo usamos para saber si el menu movil esta abierto o cerrado.

export default function Navbar() {

  // menuAbierto: variable que guarda true (abierto) o false (cerrado)
  // setMenuAbierto: funcion para cambiar el valor de menuAbierto
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <div className="w3-top">

      {/* Barra de navegacion principal */}
      <div className="w3-bar w3-theme-d2 w3-left-align w3-large">

        {/* Boton hamburguesa - solo visible en pantallas pequeñas */}
        <a
          className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"
          href="#"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          <i className="fa fa-bars"></i>
        </a>

        {/* Logo */}
        <a href="#" className="w3-bar-item w3-button w3-padding-large w3-theme-d4">
          <i className="fa fa-home w3-margin-right"></i>Logo
        </a>

        {/* Iconos del menu - ocultos en movil */}
        <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Noticias">
          <i className="fa fa-globe"></i>
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Mi cuenta">
          <i className="fa fa-user"></i>
        </a>
        <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Mensajes">
          <i className="fa fa-envelope"></i>
        </a>

        {/* Notificaciones con dropdown */}
        <div className="w3-dropdown-hover w3-hide-small">
          <button className="w3-button w3-padding-large" title="Notificaciones">
            <i className="fa fa-bell"></i>
            <span className="w3-badge w3-right w3-small w3-green">3</span>
          </button>
          <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{ width: "300px" }}>
            <a href="#" className="w3-bar-item w3-button">One new friend request</a>
            <a href="#" className="w3-bar-item w3-button">John Doe posted on your wall</a>
            <a href="#" className="w3-bar-item w3-button">Jane likes your post</a>
          </div>
        </div>

        {/* Avatar del usuario */}
        <a href="#" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="Mi perfil">
          <img src="https://www.w3schools.com//w3images/avatar2.png" className="w3-circle" style={{ height: "23px", width: "23px" }} alt="Avatar" />
        </a>

      </div>

      {/* Menu movil: solo se muestra si menuAbierto es true */}
      {menuAbierto && (
        <div className="w3-bar-block w3-theme-d2 w3-large">
          <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 1</a>
          <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 2</a>
          <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 3</a>
          <a href="#" className="w3-bar-item w3-button w3-padding-large">My Profile</a>
        </div>
      )}

    </div>
  )
}
