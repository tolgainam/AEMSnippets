import React from 'react'
import ReactDOM from 'react-dom/client'
import ContentStackEmbedApp from './EmbedApp'
import '../styles/contentStack.css'
import '../../../index.css'
import '../../../tokens/designTokens.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContentStackEmbedApp />
  </React.StrictMode>,
)