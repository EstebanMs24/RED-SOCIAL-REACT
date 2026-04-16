import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Intentando acceder...");
  };

  return (
    <div className="w3-col m7">
      <div className="w3-container w3-card-4 w3-white w3-round-xlarge w3-margin">
        <div className="w3-container w3-theme-d2 w3-round-xlarge w3-margin-top">
          <h2 className="w3-center">Iniciar sesión</h2>
        </div>

        <form className="w3-container w3-padding-24" onSubmit={handleSubmit}>
          <div className="w3-section">
            <label><i className="fa fa-envelope w3-margin-right"></i>Correo electrónico</label>
            <input 
              className="w3-input w3-border w3-round" 
              type="email" 
              placeholder="tu@email.com" 
              required 
            />
          </div>

          <div className="w3-section">
            <label><i className="fa fa-lock w3-margin-right"></i>Contraseña</label>
            <input 
              className="w3-input w3-border w3-round" 
              type="password" 
              placeholder="********" 
              required 
            />
          </div>

          <button className="w3-button w3-theme-d2 w3-round w3-block w3-section w3-padding">
            <i className="fa fa-sign-in"></i> Acceder
          </button>

          <p className="w3-center w3-small">
            <a href="#!">¿Olvidaste tu contraseña?</a>
          </p>
          
          <p className="w3-center w3-small">
            ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;