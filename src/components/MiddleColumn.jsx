import React, { useState } from 'react'
import PostCard from './PostCard'

// Datos iniciales fuera del componente: son solo el punto de partida,
// no cambian nunca. La lista "viva" vive dentro del useState de abajo.
const initialPosts = [
  {
    id: 1,
    avatar: "https://www.w3schools.com/w3images/avatar2.png",
    name: "John Doe",
    time: "1 min",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [
      { src: "https://www.w3schools.com/w3images/lights.jpg", alt: "Northern Lights" },
      { src: "https://www.w3schools.com/w3images/nature.jpg", alt: "Nature" }
    ]
  },
  {
    id: 2,
    avatar: "https://www.w3schools.com/w3images/avatar5.png",
    name: "Jane Doe",
    time: "16 min",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: []
  },
  {
    id: 3,
    avatar: "https://www.w3schools.com/w3images/avatar6.png",
    name: "Angie Jane",
    time: "32 min",
    text: "Have you seen this? Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    singleImage: "https://www.w3schools.com/w3images/nature.jpg",
    images: []
  }
]

export default function MiddleColumn() {

  // posts: lista reactiva. Cuando cambia, React vuelve a renderizar la lista.
  const [posts, setPosts] = useState(initialPosts)

  // newText: texto que el usuario escribe en el textarea, controlado por React.
  const [newText, setNewText] = useState('')

  // error: mensaje de validación que aparece si el usuario intenta publicar vacío.
  const [error, setError] = useState('')

  const handlePost = () => {
    // Validación: trim() elimina espacios en blanco al inicio y al final
    if (!newText.trim()) {
      setError('Escribe algo antes de publicar.')
      return   // sale de la función sin hacer nada más
    }

    // Crea el nuevo post y lo agrega AL INICIO del array (más reciente primero)
    const nuevoPost = {
      id: Date.now(),           // id único basado en la hora actual
      avatar: "https://www.w3schools.com/w3images/avatar2.png",
      name: "Yo",
      time: "Ahora",
      text: newText.trim(),
      images: []
    }

    // ...posts copia todos los posts anteriores; el nuevo queda de primero
    setPosts([nuevoPost, ...posts])

    // Limpia el textarea y el mensaje de error
    setNewText('')
    setError('')
  }

  return (
    <div className="w3-col m7">

      {/* ── Caja para escribir un nuevo post ── */}
      <div className="w3-row-padding">
        <div className="w3-col m12">
          <div className="w3-card w3-round w3-white">
            <div className="w3-container w3-padding">
              <h6 className="w3-opacity">Social Media template by w3.css</h6>

              {/* textarea controlado: value={newText} + onChange mantienen sincronizado
                  el texto del input con la variable de estado newText              */}
              <textarea
                className={`w3-border w3-padding w3-block ${error ? 'border-danger' : ''}`}
                rows={2}
                placeholder="¿En qué estás pensando?"
                value={newText}
                onChange={(e) => {
                  setNewText(e.target.value)
                  if (error) setError('') // borra el error al empezar a escribir
                }}
              />

              {/* Mensaje de error: solo aparece cuando error tiene texto */}
              {error && (
                <small className="text-danger">{error}</small>
              )}

              <button
                type="button"
                className="w3-button w3-theme w3-margin-top"
                onClick={handlePost}
              >
                <i className="fa fa-pencil"></i>  Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Renderizamos un PostCard por cada post del array usando .map() */}
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          avatar={post.avatar}
          name={post.name}
          time={post.time}
          text={post.text}
          images={post.images}
          singleImage={post.singleImage}
        />
      ))}

    </div>
  )
}
