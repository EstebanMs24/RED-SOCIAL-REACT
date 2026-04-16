import React, { useState } from 'react';

const Chat = () => {
  // Estado simple para el mensaje que el usuario escribe
  const [mensaje, setMensaje] = useState("");

  const enviarMensaje = (e) => {
    e.preventDefault();
    console.log("Mensaje enviado:", mensaje);
    setMensaje(""); // Limpia el input después de enviar
  };

  return (
    <div className="w3-container w3-content" style={{ maxWidth: '1200px', marginTop: '80px' }}>
      <div className="w3-row">
        
        {/* COLUMNA IZQUIERDA: Lista de Chats/Amigos */}
        <div className="w3-col m4 l3">
          <div className="w3-card w3-white w3-round">
            <div className="w3-container w3-padding w3-theme-d2">
              <h4>Mis Chats</h4>
            </div>
            <div className="w3-container w3-padding-16">
              {/* Ejemplo de contacto */}
              <div className="w3-bar w3-button w3-border-bottom">
                <img src="https://www.w3schools.com/w3images/avatar2.png" className="w3-bar-item w3-circle w3-hide-small" style={{width:'60px'}} alt="Avatar" />
                <div className="w3-bar-item">
                  <span className="w3-large">Amigo 1</span><br />
                  <span>En línea</span>
                </div>
              </div>
              <div className="w3-bar w3-button w3-border-bottom">
                <img src="https://www.w3schools.com/w3images/avatar5.png" className="w3-bar-item w3-circle w3-hide-small" style={{width:'60px'}} alt="Avatar" />
                <div className="w3-bar-item">
                  <span className="w3-large">Amigo 2</span><br />
                  <span>Visto hace 10 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: Ventana de Mensajes */}
        <div className="w3-col m8 l9">
          <div className="w3-container w3-margin-left">
            <div className="w3-card w3-white w3-round">
              
              {/* Cabecera del chat actual */}
              <div className="w3-container w3-padding w3-theme-l1">
                <h4>Chat con Amigo 1</h4>
              </div>

              {/* Área de mensajes (scrollable) */}
              <div className="w3-container w3-padding-16" style={{ height: '400px', overflowY: 'scroll', backgroundColor: '#f1f1f1' }}>
                <div className="w3-container w3-card w3-white w3-round w3-margin-bottom" style={{ width: '70%', float: 'left' }}>
                  <p>Hola, ¿cómo va el proyecto de React?</p>
                </div>
                
                <div className="w3-container w3-card w3-theme-l4 w3-round w3-margin-bottom" style={{ width: '70%', float: 'right' }}>
                  <p>¡Va excelente! Ya configuré las rutas.</p>
                </div>
              </div>

              {/* Input de texto */}
              <form className="w3-container w3-padding-16 w3-border-top" onSubmit={enviarMensaje}>
                <div className="w3-row">
                  <div className="w3-col s10">
                    <input 
                      className="w3-input w3-border w3-round" 
                      type="text" 
                      placeholder="Escribe un mensaje..." 
                      value={mensaje}
                      onChange={(e) => setMensaje(e.target.value)}
                    />
                  </div>
                  <div className="w3-col s2">
                    <button className="w3-button w3-theme-d2 w3-round w3-right" type="submit">
                      <i className="fa fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Chat;