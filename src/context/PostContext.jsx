import { createContext } from 'react'

// createContext crea un "canal de comunicación" entre componentes
// sin necesidad de pasar props de padre a hijo a hijo (eso se llama prop drilling)
//
// PostContext será usado por:
//   - PostCard     → provee los datos (Provider)
//   - ListComments → lee los comentarios (useContext)
//   - CommentForm  → usa addComment (useContext)
//   - Comment      → usa addReply (useContext)

export const PostContext = createContext(null)
