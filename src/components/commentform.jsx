import React, { useState, useContext } from 'react'
import { PostContext } from '../context/PostContext'

// CommentForm: Input para escribir y enviar un nuevo comentario
//
// No recibe ninguna prop. En su lugar usa useContext para obtener
// la función addComment que vive en PostCard, evitando prop drilling.

export default function CommentForm() {

  // useContext: nos "conectamos" al PostContext y tomamos addComment
  // Es como enchufarse a un tomacorriente: PostCard tiene la corriente,
  // CommentForm solo la usa sin saber cómo funciona por dentro
  const { addComment } = useContext(PostContext)

  // useState: guarda el texto que el usuario está escribiendo en tiempo real
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()          // evita que el formulario recargue la página
    if (!text.trim()) return    // no envía si el texto está vacío o solo espacios
    addComment(text.trim())     // llama la función del contexto → agrega el comentario
    setText('')                 // limpia el campo después de enviar
  }

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 align-items-center mt-2">
      <img
        src="https://www.w3schools.com/w3images/avatar2.png"
        alt="Mi avatar"
        className="rounded-circle flex-shrink-0"
        style={{ width: 34, height: 34, objectFit: 'cover' }}
      />
      {/* value={text} + onChange hacen que el input sea "controlado" por React */}
      <input
        type="text"
        className="form-control form-control-sm rounded-pill"
        placeholder="Escribe un comentario... Presiona Enter para enviar"
        value={text}
        onChange={(e) => setText(e.target.value)} // actualiza el estado text cada vez que el usuario escribe
      />
    </form>
  )
}
