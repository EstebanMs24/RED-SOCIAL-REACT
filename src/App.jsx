import React from 'react'

// Importamos cada componente desde la carpeta components/
// El nombre despues de "import" es el que usaremos como etiqueta JSX (<Navbar />, etc.)
import Navbar from './components/Navbar'
import LeftColumn from './components/LeftColumn'
import MiddleColumn from './components/MiddleColumn'
import RightColumn from './components/RightColumn'
import Footer from './components/Footer'


// App es el componente RAIZ: ensambla todos los demas componentes
// Es equivalente al <body> de tu plantilla HTML original
export default function App() {
  return (
    <>
      {/* Barra de navegacion fija en la parte superior */}
      <Navbar />
    

      {/* Contenedor principal con las 3 columnas */}
      <div className="w3-container w3-content" style={{ maxWidth: "1400px", marginTop: "80px" }}>
        <div className="w3-row">
          <LeftColumn />
          <MiddleColumn />
          <RightColumn />
        </div>
      </div>

      <br />

      {/* Pie de pagina */}
      <Footer />
    </>
  )
}
