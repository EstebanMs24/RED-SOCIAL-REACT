import React, { useState } from 'react'

// useState aqui se usa para el acordeon:
// guarda cual seccion esta abierta ('Demo1', 'Demo2', 'Demo3' o null si ninguna)

export default function LeftColumn() {

  const [seccionAbierta, setSeccionAbierta] = useState(null)
  const [alertaVisible, setAlertaVisible] = useState(true)

  // Si la seccion ya esta abierta y la vuelves a pulsar, la cierra (null)
  // Si es diferente, abre la nueva
  const toggleSeccion = (seccion) => {
    setSeccionAbierta(seccionAbierta === seccion ? null : seccion)
  }

  return (
    <div className="w3-col m3">

      {/* Tarjeta de perfil */}
      <div className="w3-card w3-round w3-white">
        <div className="w3-container">
          <h4 className="w3-center">Mi Perfil</h4>
          <p className="w3-center">
            <img
              src="https://img.freepik.com/vector-premium/nino-esta-sentado-escritorio-computadora-portatil-codigo-palabra-el_1177960-38395.jpg?semt=ais_hybrid&w=740&q=80"
              className="w3-circle"
              style={{ height: "106px", width: "106px" }}
              alt="Avatar"
            />
          </p>
          <hr />
          <p><i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i> Desarrollador Web</p>
          <p><i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i> Medellin, CO</p>
          <p><i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i> 24 de Octubre, 1992</p>
        </div>
      </div>
      <br />

      {/* Acordeon: Groups / Events / Photos */}
      <div className="w3-card w3-round">
        <div className="w3-white">

          <button onClick={() => toggleSeccion('Demo1')} className="w3-button w3-block w3-theme-l1 w3-left-align">
            <i className="fa fa-circle-o-notch fa-fw w3-margin-right"></i> Mis Grupos
          </button>
          {/* Solo muestra el contenido si seccionAbierta === 'Demo1' */}
          {seccionAbierta === 'Demo1' && (
            <>
              <div className="w3-container"><p>Cocina</p></div>
              <div className="w3-container"><p>Futbol</p></div>
              <div className="w3-container"><p>Musica</p></div>
              <div className="w3-container"><p>Gimnasio</p></div>


            </>
          )}

          <button onClick={() => toggleSeccion('Demo2')} className="w3-button w3-block w3-theme-l1 w3-left-align">
            <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i> Mis Eventos
          </button>
          {seccionAbierta === 'Demo2' && (
            <>
              <div className="w3-container"><p>Reuniones</p></div> 
              <div className="w3-container"><p>Conferencias</p></div>
              <div className="w3-container"><p>Fiestas</p></div>
              
            </>
          )}

          <button onClick={() => toggleSeccion('Demo3')} className="w3-button w3-block w3-theme-l1 w3-left-align">
            <i className="fa fa-users fa-fw w3-margin-right"></i> Mis Fotos
          </button>
          {seccionAbierta === 'Demo3' && (
            <div className="w3-container">
              <div className="w3-row-padding"><br />
                <div className="w3-half"><img src="https://media.istockphoto.com/id/529682972/es/foto/joven-archer-capacitaci%C3%B3n-con-el-arco.jpg?s=612x612&w=0&k=20&c=YWCFfzYN4pOrvSY7o3qCawYHkKQGbtk4SUXxDfLlv_w=" style={{ width: "100%" }} className="w3-margin-bottom" alt="Lights" /></div>
                <div className="w3-half"><img src="https://media.istockphoto.com/id/2075297835/es/foto/%C3%A1guila-calva-a-punto-de-sumergirse-en-el-agua-con-la-captura-en-su-garra.jpg?s=612x612&w=0&k=20&c=FoDhY3xjYqQF6HxKzXj-zYk-pE2VlRyCZk8QozFmbrA=" style={{ width: "100%" }} className="w3-margin-bottom" alt="Nature" /></div>
                <div className="w3-half"><img src="https://motollopis.es/wp-content/uploads/2021/09/GSXR1000-1024x676.jpg" style={{ width: "100%" }} className="w3-margin-bottom" alt="Mountains" /></div>
                <div className="w3-half"><img src="https://www.univision.com/_next/image?url=https%3A%2F%2Fst1.uvnimg.com%2Fd4%2F4a%2F006304a74db4902c0b4d8d8026c8%2Fchevrolet-corvette-c8-stingray-2020-1280-08.jpg&w=1280&q=75" style={{ width: "100%" }} className="w3-margin-bottom" alt="Forest" /></div>
                <div className="w3-half"><img src="https://www.w3schools.com/w3images/nature.jpg" style={{ width: "100%" }} className="w3-margin-bottom" alt="Nature" /></div>
                <div className="w3-half"><img src="https://www.w3schools.com/w3images/snow.jpg" style={{ width: "100%" }} className="w3-margin-bottom" alt="Snow" /></div>
              </div>
            </div>
          )}

        </div>
      </div>
      <br />

      {/* Intereses */}
      <div className="w3-card w3-round w3-white w3-hide-small">
        <div className="w3-container">
          <p>Intereses</p>
          <p>
            <span className="w3-tag w3-small w3-theme-d5">News</span>{' '}
            <span className="w3-tag w3-small w3-theme-d4">W3Schools</span>{' '}
            <span className="w3-tag w3-small w3-theme-d3">Labels</span>{' '}
            <span className="w3-tag w3-small w3-theme-d2">Games</span>{' '}
            <span className="w3-tag w3-small w3-theme-d1">Friends</span>{' '}
            <span className="w3-tag w3-small w3-theme">Games</span>{' '}
            <span className="w3-tag w3-small w3-theme-l1">Friends</span>{' '}
            <span className="w3-tag w3-small w3-theme-l2">Food</span>{' '}
            <span className="w3-tag w3-small w3-theme-l3">Design</span>{' '}
            <span className="w3-tag w3-small w3-theme-l4">Art</span>{' '}
            <span className="w3-tag w3-small w3-theme-l5">Photos</span>
          </p>
        </div>
      </div>
      <br />

      {/* Caja de alerta - se oculta al hacer click en X */}
      {alertaVisible && (
        <div className="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small">
          <span onClick={() => setAlertaVisible(false)} className="w3-button w3-theme-l3 w3-display-topright">
            <i className="fa fa-remove"></i>
          </span>
          <p><strong>¡Hola!</strong></p>
          <p>La gente está viendo tu perfil. Descubre quién.</p>
        </div>
      )}

    </div>
  )
}
