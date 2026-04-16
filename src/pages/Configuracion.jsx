import React from 'react';

const Configuracion = () => {
  return (
    <div className="w3-col m7">
      <div className="w3-container w3-card w3-white w3-round w3-margin-bottom">
        <div className="w3-container w3-theme-d2 w3-round w3-margin-top">
          <h2 className="w3-padding">Ajustes</h2>
        </div>

        <div className="w3-container w3-padding-24">
          <section className="w3-margin-bottom">
            <h4><i className="fa fa-user w3-margin-right"></i>Cuenta</h4>
            <hr />
            <label>Nombre de usuario</label>
            <input className="w3-input w3-border w3-round w3-margin-bottom" type="text" defaultValue="Usuario_Demo" />
            <label>Correo</label>
            <input className="w3-input w3-border w3-round" type="email" defaultValue="usuario@email.com" />
          </section>

          <section className="w3-margin-bottom">
            <h4><i className="fa fa-lock w3-margin-right"></i>Seguridad</h4>
            <hr />
            <button className="w3-button w3-theme-l4 w3-border w3-round w3-block">Cambiar Contraseña</button>
          </section>

          <div className="w3-container w3-padding-16 w3-center">
            <button className="w3-button w3-theme-d2 w3-round-large" style={{ width: '100%' }}>Guardar Cambios</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuracion;