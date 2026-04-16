import React from 'react';

const Perfil = () => {
  return (
    <div className="w3-container w3-content" style={{ maxWidth: '1200px', marginTop: '80px' }}>
      <div className="w3-row-padding">
        
        {/* COLUMNA IZQUIERDA: Info del Usuario */}
        <div className="w3-col m4">
          <div className="w3-card w3-round w3-white">
            <div className="w3-container">
              <h4 className="w3-center">Mi Perfil</h4>
              <p className="w3-center">
                <img src="https://www.w3schools.com/w3images/avatar3.png" className="w3-circle" style={{ height: '106px', width: '106px' }} alt="Avatar" />
              </p>
              <hr />
              <p><i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i> Diseñador / Desarrollador</p>
              <p><i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> Medellín, Colombia</p>
              <p><i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> 1 de abril</p>
            </div>
          </div>
          <br />

          {/* Intereses (Opcional, muy común en redes sociales) */}
          <div className="w3-card w3-round w3-white w3-hide-small">
            <div className="w3-container">
              <p>Intereses</p>
              <p>
                <span className="w3-tag w3-small w3-theme-d5 w3-margin-bottom w3-margin-right w3-round">React</span>
                <span className="w3-tag w3-small w3-theme-d3 w3-margin-bottom w3-margin-right w3-round">Motos</span>
                <span className="w3-tag w3-small w3-theme-d2 w3-margin-bottom w3-margin-right w3-round">Fútbol Retro</span>
                <span className="w3-tag w3-small w3-theme-d1 w3-margin-bottom w3-margin-right w3-round">Videojuegos</span>
              </p>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: Muro o Publicaciones Propias */}
        <div className="w3-col m8">
          <div className="w3-row-padding">
            <div className="w3-col m12">
              <div className="w3-card w3-round w3-white">
                <div className="w3-container w3-padding">
                  <h6 className="w3-opacity">¿Qué estás pensando?</h6>
                  <p contentEditable="true" className="w3-border w3-padding w3-round">Estado de ánimo...</p>
                  <button type="button" className="w3-button w3-theme w3-round"><i className="fa fa-pencil"></i>  Publicar</button> 
                </div>
              </div>
            </div>
          </div>

          {/* Ejemplo de una publicación propia */}
          <div className="w3-container w3-card w3-white w3-round w3-margin"><br />
            <img src="https://www.w3schools.com/w3images/avatar3.png" alt="Avatar" className="w3-left w3-circle w3-margin-right" style={{ width: '60px' }} />
            <span className="w3-right w3-opacity">1 min</span>
            <h4>Mi Usuario</h4><br />
            <hr className="w3-clear" />
            <p>¡Acabo de actualizar las rutas de mi proyecto de red social en React! 🚀</p>
            <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom w3-round"><i className="fa fa-thumbs-up"></i>  Me gusta</button> 
            <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom w3-round"><i className="fa fa-comment"></i>  Comentar</button> 
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Perfil;