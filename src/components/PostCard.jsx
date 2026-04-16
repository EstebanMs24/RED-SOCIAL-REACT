import React, { useState, useEffect } from 'react'
import { PostContext } from '../context/PostContext'
import CommentForm from './commentform'
import ListComments from './listcomments'

// PostCard recibe los datos del post como props y maneja toda la interacción
// PROPS:
//   id          -> identificador único del post (corrige el bug del video)
//   avatar      -> URL de la imagen del avatar
//   name        -> Nombre del usuario
//   time        -> Hace cuanto tiempo se publicó (ej: "1 min")
//   text        -> Texto principal del post
//   images      -> (opcional) Array de imágenes [{src, alt}, ...]
//   singleImage -> (opcional) URL de imagen grande

export default function PostCard({ id, avatar, name, time, text, images, singleImage }) {

  // ── useState ─────────────────────────────────────────────────────────────
  // Cada llamada a useState crea una variable reactiva:
  //   [valorActual, funcionParaCambiarlo] = useState(valorInicial)

  // Cantidad de likes y si el usuario ya dio like a este post
  const [likes, setLikes] = useState(0)
  const [liked, setLiked] = useState(false)

  // Controla si el panel de comentarios está abierto (true) o cerrado (false)
  const [showComments, setShowComments] = useState(false)

  // Array con todos los comentarios del post
  const [comments, setComments] = useState([])

  // Controla el mensaje temporal del botón Compartir
  const [shared, setShared] = useState(false)

  // ── useEffect ────────────────────────────────────────────────────────────
  // useEffect(función, [dependencias])
  // React ejecuta la función cada vez que alguna dependencia del array cambia.
  // Aquí: cuando "likes" cambia, actualiza el título de la pestaña del navegador.
  useEffect(() => {
    if (likes > 0) {
      document.title = `👍 ${likes} Me gusta - Red Social`
    } else {
      document.title = 'Red Social React'
    }
  }, [likes]) // <- [likes] = "solo ejecuta esto cuando 'likes' cambie"

  // ── Funciones manejadoras ────────────────────────────────────────────────

  const handleLike = () => {
    if (liked) {
      setLikes(prev => prev - 1)  // prev es el valor anterior, más seguro que likes - 1
      setLiked(false)
    } else {
      setLikes(prev => prev + 1)
      setLiked(true)
    }
  }

  const handleShare = () => {
    setShared(true)
    setTimeout(() => setShared(false), 2000) // vuelve al texto original después de 2s
  }

  // Agrega un nuevo comentario al array (la llamará CommentForm via Context)
  const addComment = (commentText) => {
    setComments(prev => [
      ...prev,
      {
        id: Date.now(), // Date.now() genera un número único basado en la hora actual
        author: 'Tú',
        text: commentText,
        replies: []
      }
    ])
  }

  // Agrega una respuesta a un comentario específico buscándolo por su id
  const addReply = (commentId, replyText) => {
    setComments(prev =>
      prev.map(c =>
        c.id === commentId
          ? { ...c, replies: [...c.replies, { author: 'Tú', text: replyText }] }
          : c
      )
    )
  }

  return (
    // PostContext.Provider "envuelve" los hijos y les da acceso a los valores
    // Cualquier componente dentro puede leer estos datos con useContext(PostContext)
    <PostContext.Provider value={{ postId: id, comments, addComment, addReply }}>

      {/* Usamos la tarjeta Bootstrap (card) como base, igual a post.jsx */}
      <div className="card mb-3 shadow-sm">

        {/* ── CABECERA: avatar + nombre + tiempo ── */}
        <div className="card-body pb-2">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <img
                src={avatar}
                alt={name}
                className="rounded-circle"
                style={{ width: 46, height: 46, objectFit: 'cover' }}
              />
              <div>
                <div className="fw-bold" style={{ lineHeight: 1.2 }}>{name}</div>
                <small className="text-muted">
                  {time} · <i className="fa fa-globe" title="Público"></i>
                </small>
              </div>
            </div>
            {/* Icono de opciones (tres puntos) */}
            <i className="fa fa-ellipsis-h text-muted" style={{ cursor: 'pointer' }}></i>
          </div>
        </div>

        {/* ── CUERPO: texto e imágenes del post ── */}
        <div className="card-body pt-0 pb-2">
          <p className="card-text mb-2">{text}</p>

          {/* Imagen grande: solo aparece si la prop singleImage tiene valor */}
          {singleImage && (
            <img
              src={singleImage}
              className="img-fluid w-100"
              alt="Imagen del post"
              style={{ borderRadius: 8, maxHeight: 400, objectFit: 'cover' }}
            />
          )}

          {/* Galería 2 columnas: solo aparece si el array images tiene elementos */}
          {images && images.length > 0 && (
            <div className="row g-1 mt-1">
              {images.map((img, i) => (
                <div key={i} className="col-6">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="img-fluid w-100"
                    style={{ borderRadius: 8, objectFit: 'cover', maxHeight: 200 }}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── CONTADORES: muestra cuántos likes y comentarios hay ──
            Solo aparece si hay al menos 1 like o 1 comentario         */}
        {(likes > 0 || comments.length > 0) && (
          <div className="card-body pt-0 pb-1">
            <div className="d-flex justify-content-between">
              {likes > 0 && (
                <span className="text-muted small">
                  <span
                    className="text-white bg-primary rounded-circle d-inline-flex align-items-center justify-content-center me-1"
                    style={{ width: 18, height: 18, fontSize: 10 }}
                  >
                    <i className="fa fa-thumbs-up"></i>
                  </span>
                  {likes}
                </span>
              )}
              {comments.length > 0 && (
                <span
                  className="text-muted small ms-auto"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setShowComments(prev => !prev)}
                >
                  {comments.length} comentario{comments.length !== 1 ? 's' : ''}
                </span>
              )}
            </div>
          </div>
        )}

        {/* ── BOTONES DE ACCIÓN: Me gusta | Comentar | Compartir ── */}
        <div className="card-body py-1">
          <div className="d-flex justify-content-around border-top border-bottom py-1">

            <button
              className={`btn btn-sm d-flex align-items-center gap-1 ${liked ? 'text-primary fw-bold' : 'text-secondary'}`}
              style={{ border: 'none', background: 'none' }}
              onClick={handleLike}
            >
              <i className="fa fa-thumbs-up"></i> Me gusta
            </button>

            <button
              className="btn btn-sm text-secondary d-flex align-items-center gap-1"
              style={{ border: 'none', background: 'none' }}
              onClick={() => setShowComments(prev => !prev)}
            >
              <i className="fa fa-comment"></i> Comentar
            </button>

            <button
              className={`btn btn-sm d-flex align-items-center gap-1 ${shared ? 'text-success fw-bold' : 'text-secondary'}`}
              style={{ border: 'none', background: 'none' }}
              onClick={handleShare}
            >
              <i className="fa fa-share"></i> {shared ? '¡Compartido!' : 'Compartir'}
            </button>

          </div>
        </div>

        {/* ── SECCIÓN DE COMENTARIOS ──
            Se muestra u oculta dependiendo de showComments
            Contiene ListComments y CommentForm que leen datos del PostContext  */}
        {showComments && (
          <div className="card-body pt-2 pb-3">
            <ListComments />
            <CommentForm />
          </div>
        )}

      </div>
    </PostContext.Provider>
  )
}

