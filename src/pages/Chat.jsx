import React, { useState } from 'react';

const Chat = () => {
  const [mensaje, setMensaje] = useState("");

  const enviarMensaje = (e) => {
    e.preventDefault();
    setMensaje("");
  };

  return (
    <div className="w3-col m7">
      <div className="w3-row-padding">
        
        {/* Lista de Chats - Ajustada para el centro */}
        <div className="w3-col m12 l4 w3-margin-bottom">
          <div className="w3-card w3-white w3-round">
            <div className="w3-container w3-padding w3-theme-d2 w3-round">
              <h5 className="w3-center">Mis Chats</h5>
            </div>
            <div className="w3-container w3-padding">
              <div className="w3-bar w3-button w3-border-bottom">
                <img src="https://www.w3schools.com/w3images/avatar2.png" className="w3-bar-item w3-circle w3-hide-small" style={{width:'40px'}} alt="Avatar" />
                <div className="w3-bar-item">
                  <span className="w3-medium">Amigo 1</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ventana de Mensajes */}
        <div className="w3-col m12 l8">
          <div className="w3-card w3-white w3-round">
            <div className="w3-container w3-padding w3-theme-l1 w3-round">
              <h4>Chat con Amigo 1</h4>
            </div>

            <div className="w3-container w3-padding-16" style={{ height: '300px', overflowY: 'scroll', backgroundColor: '#f1f1f1' }}>
              <div className="w3-container w3-card w3-white w3-round w3-margin-bottom" style={{ width: '80%', float: 'left' }}>
                <p>Hola, ¿cómo va el proyecto?</p>
              </div>
              <div className="w3-container w3-card w3-theme-l4 w3-round w3-margin-bottom" style={{ width: '80%', float: 'right' }}>
                <p>¡Va excelente! Ya configuré las rutas.</p>
              </div>
            </div>

            <form className="w3-container w3-padding-16 w3-border-top" onSubmit={enviarMensaje}>
              <div className="w3-row">
                <div className="w3-col s10">
                  <input className="w3-input w3-border w3-round" type="text" placeholder="Escribe..." value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
                </div>
                <div className="w3-col s2">
                  <button className="w3-button w3-theme-d2 w3-round w3-right" type="submit"><i className="fa fa-paper-plane"></i></button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Chat;