import React, { useState, useContext } from 'react'
import { PostContext } from '../context/PostContext'

// ── Componente interno: representa UN comentario individual ────────────────
// No se exporta porque solo se usa dentro de este archivo
function Comment({ comment }) {

  // useContext: obtiene addReply del PostContext para guardar respuestas
  const { addReply } = useContext(PostContext)

  // useState: like del comentario (independiente por cada instancia de Comment)
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(0)

  // useState: controla si el input de respuesta está visible
  const [showReply, setShowReply] = useState(false)
  const [replyText, setReplyText] = useState('')

  const handleLike = () => {
    if (liked) {
      setLikes(prev => prev - 1)
      setLiked(false)
    } else {
      setLikes(prev => prev + 1)
      setLiked(true)
    }
  }

  const handleReplySubmit = (e) => {
    e.preventDefault()
    if (!replyText.trim()) return
    addReply(comment.id, replyText.trim()) // guarda la respuesta via contexto
    setReplyText('')
    setShowReply(false)
  }

  return (
    <div className="mb-3">

      {/* Comentario principal */}
      <div className="d-flex gap-2 align-items-start">
        <img
          src="https://www.w3schools.com/w3images/avatar5.png"
          alt={comment.author}
          className="rounded-circle flex-shrink-0"
          style={{ width: 34, height: 34, objectFit: 'cover' }}
        />
        <div className="flex-grow-1">

          {/* Burbuja del comentario */}
          <div className="bg-light rounded-4 px-3 py-2" style={{ display: 'inline-block', maxWidth: '100%' }}>
            <div className="fw-semibold small">{comment.author}</div>
            <div className="small">{comment.text}</div>
          </div>

          {/* Acciones: Me gusta · Responder */}
          <div className="d-flex gap-3 small ms-2 mt-1">
            <span
              className={liked ? 'text-primary fw-semibold' : 'text-muted'}
              style={{ cursor: 'pointer' }}
              onClick={handleLike}
            >
              Me gusta{likes > 0 ? ` · ${likes}` : ''}
            </span>
            <span
              className="text-muted"
              style={{ cursor: 'pointer' }}
              onClick={() => setShowReply(prev => !prev)}
            >
              Responder
            </span>
          </div>

          {/* Input para escribir una respuesta (aparece al clicar Responder) */}
          {showReply && (
            <form onSubmit={handleReplySubmit} className="d-flex gap-2 align-items-center mt-1 ms-2">
              <img
                src="https://www.w3schools.com/w3images/avatar2.png"
                alt="yo"
                className="rounded-circle flex-shrink-0"
                style={{ width: 28, height: 28, objectFit: 'cover' }}
              />
              <input
                type="text"
                className="form-control form-control-sm rounded-pill"
                placeholder="Escribe una respuesta..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                autoFocus
              />
            </form>
          )}

          {/* Respuestas del comentario (hilo de respuestas) */}
          {comment.replies && comment.replies.map((reply, i) => (
            <div key={i} className="d-flex gap-2 align-items-start mt-2 ms-3">
              <img
                src="https://www.w3schools.com/w3images/avatar2.png"
                alt={reply.author}
                className="rounded-circle flex-shrink-0"
                style={{ width: 28, height: 28, objectFit: 'cover' }}
              />
              <div className="bg-light rounded-4 px-3 py-2" style={{ display: 'inline-block' }}>
                <div className="fw-semibold small">{reply.author}</div>
                <div className="small">{reply.text}</div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

// ── Componente principal exportado ────────────────────────────────────────
// Usa useContext para leer el array "comments" del PostContext
// y renderiza un componente <Comment> por cada elemento
export default function ListComments() {

  // useContext: obtenemos los comentarios desde el PostContext
  const { comments } = useContext(PostContext)

  // Si no hay comentarios, no renderiza nada (null = componente vacío)
  if (comments.length === 0) return null

  return (
    <div className="mb-1">
      {comments.map((comment) => (
        // key={comment.id} es obligatorio cuando usamos .map() en React
        // Ayuda a React a identificar qué elemento cambió, se agregó o se eliminó
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  )
}
