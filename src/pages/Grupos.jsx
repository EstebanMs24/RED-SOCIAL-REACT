import React from 'react';

const Grupos = () => {
  const misGrupos = [
    { id: 1, nombre: "Desarrolladores React", miembros: "2.5k", imagen: "https://www.w3schools.com/w3images/avatar3.png" },
    { id: 2, nombre: "Moteros Medellín", miembros: "800", imagen: "https://www.w3schools.com/w3images/avatar1.png" },
    { id: 3, nombre: "Coleccionistas Retro", miembros: "1.2k", imagen: "https://www.w3schools.com/w3images/avatar5.png" }
  ];

  return (
    <div className="w3-col m7">
      <div className="w3-container w3-card w3-white w3-round w3-margin-bottom">
        <h2 className="w3-padding-16">Mis Grupos</h2>
      </div>

      {misGrupos.map((grupo) => (
        <div key={grupo.id} className="w3-container w3-card w3-white w3-round w3-margin-bottom w3-padding-16">
          <div className="w3-row">
            <div className="w3-col s3 m2">
              <img src={grupo.imagen} alt="Grupo" className="w3-circle" style={{ width: '50px' }} />
            </div>
            <div className="w3-col s6 m8">
              <h4 style={{ margin: 0 }}>{grupo.nombre}</h4>
              <p className="w3-opacity" style={{ margin: 0 }}>{grupo.miembros} miembros</p>
            </div>
            <div className="w3-col s3 m2">
              <button className="w3-button w3-theme-d1 w3-round w3-small">Ver</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grupos;