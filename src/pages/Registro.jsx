import React from 'react';
import { Link } from 'react-router-dom';

const Registro = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registrando usuario...");
  };

  return (
    <div className="w3-col m7">
      <div className="w3-container w3-card-4 w3-white w3-round-xlarge w3-margin">
        <div className="w3-container w3-theme-d2 w3-round-xlarge w3-margin-top">
          <h2 className="w3-center">Crear una cuenta</h2>
        </div>

        <form className="w3-container w3-padding-24" onSubmit={handleRegister}>
          <div className="w3-row-padding">
            <div className="w3-half">
              <label><i className="fa fa-user w3-margin-right"></i>Nombre</label>
              <input className="w3-input w3-border w3-round" type="text" placeholder="Juan" required />
            </div>
            <div className="w3-half">
              <label><i className="fa fa-user w3-margin-right"></i>Apellido</label>
              <input className="w3-input w3-border w3-round" type="text" placeholder="Pérez" required />
            </div>
          </div>

          <div className="w3-section w3-padding">
            <label><i className="fa fa-envelope w3-margin-right"></i>Correo electrónico</label>
            <input className="w3-input w3-border w3-round" type="email" placeholder="tu@email.com" required />
          </div>

          <div className="w3-section w3-padding">
            <label><i className="fa fa-lock w3-margin-right"></i>Contraseña</label>
            <input className="w3-input w3-border w3-round" type="password" placeholder="Mínimo 8 caracteres" required />
          </div>

          <div className="w3-section w3-padding">
            <button className="w3-button w3-theme-d2 w3-round w3-block w3-section w3-padding">
              <i className="fa fa-user-plus"></i> Registrarme
            </button>
          </div>

          <p className="w3-center w3-small">
            ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registro;