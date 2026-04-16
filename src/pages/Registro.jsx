import React from 'react';
import { Link } from 'react-router-dom';

const Registro = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registrando usuario...");
  };

  return (
    <div className="w3-theme-l5" style={{ minHeight: '100vh', paddingTop: '50px' }}>
      {/* Contenedor principal */}
      <div className="w3-container w3-content" style={{ maxWidth: '600px', marginTop: '50px' }}>
        <div className="w3-card-4 w3-round-xlarge w3-white">
          
          <div className="w3-container w3-theme-d2 w3-round-xlarge w3-padding-16">
            <h2 className="w3-center">Crear una cuenta</h2>
          </div>

          <form className="w3-container w3-padding-24" onSubmit={handleRegister}>
            <div className="w3-row-section">
              <div className="w3-half w3-container w3-padding-small">
                <label><i className="fa fa-user"></i> Nombre</label>
                <input className="w3-input w3-border w3-round" type="text" placeholder="Ej: Juan" required />
              </div>
              <div className="w3-half w3-container w3-padding-small">
                <label><i className="fa fa-user"></i> Apellido</label>
                <input className="w3-input w3-border w3-round" type="text" placeholder="Ej: Pérez" required />
              </div>
            </div>

            <div className="w3-section w3-padding-small">
              <label><i className="fa fa-envelope"></i> Correo electrónico</label>
              <input className="w3-input w3-border w3-round" type="email" placeholder="tu@email.com" required />
            </div>

            <div className="w3-section w3-padding-small">
              <label><i className="fa fa-lock"></i> Contraseña</label>
              <input className="w3-input w3-border w3-round" type="password" placeholder="Mínimo 8 caracteres" required />
            </div>

            <div className="w3-section w3-padding-small">
              <label><i className="fa fa-lock"></i> Confirmar Contraseña</label>
              <input className="w3-input w3-border w3-round" type="password" placeholder="Repite tu contraseña" required />
            </div>

            <div className="w3-section w3-padding-small">
              <button className="w3-button w3-theme-d2 w3-round w3-block w3-section">
                <i className="fa fa-user-plus"></i> Registrarme
              </button>
            </div>

            <p className="w3-center">
              ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registro;