import React from 'react';

const Configuracion = () => {
  return (
    <div className="w3-container w3-content" style={{ maxWidth: '800px', marginTop: '80px' }}>
      <div className="w3-card w3-round w3-white">
        <div className="w3-container w3-theme-d2 w3-round">
          <h2 className="w3-padding">Ajustes de Cuenta</h2>
        </div>

        <div className="w3-container w3-padding-24">
          {/* SECCIÓN: Información Personal */}
          <section className="w3-margin-bottom">
            <h4><i className="fa fa-user w3-margin-right"></i>Información Personal</h4>
            <hr />
            <div className="w3-row-padding">
              <div className="w3-half w3-margin-bottom">
                <label>Nombre de usuario</label>
                <input className="w3-input w3-border w3-round" type="text" defaultValue="Usuario_Demo" />
              </div>
              <div className="w3-half w3-margin-bottom">
                <label>Correo Electrónico</label>
                <input className="w3-input w3-border w3-round" type="email" defaultValue="usuario@email.com" />
              </div>
            </div>
          </section>

          {/* SECCIÓN: Seguridad */}
          <section className="w3-margin-bottom">
            <h4><i className="fa fa-lock w3-margin-right"></i>Seguridad</h4>
            <hr />
            <div className="w3-row-padding">
              <div className="w3-col m12 w3-margin-bottom">
                <button className="w3-button w3-theme-l4 w3-border w3-round">
                  Cambiar Contraseña
                </button>
              </div>
            </div>
          </section>

          {/* SECCIÓN: Preferencias */}
          <section className="w3-margin-bottom">
            <h4><i className="fa fa-cog w3-margin-right"></i>Preferencias</h4>
            <hr />
            <div className="w3-container">
              <p>
                <input className="w3-check" type="checkbox" defaultChecked />
                <label className="w3-margin-left">Recibir notificaciones por correo</label>
              </p>
              <p>
                <input className="w3-check" type="checkbox" />
                <label className="w3-margin-left">Perfil público</label>
              </p>
            </div>
          </section>

          {/* BOTONES DE ACCIÓN */}
          <div className="w3-container w3-padding-16 w3-center">
            <button className="w3-button w3-theme-d2 w3-round-large" style={{ width: '200px' }}>
              Guardar Cambios
            </button>
          </div>
          
          <hr />
          
          <div className="w3-container w3-padding-16">
            <button className="w3-button w3-red w3-round w3-right w3-small">
              Eliminar Cuenta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuracion;