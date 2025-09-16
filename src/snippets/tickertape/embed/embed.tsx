import React from 'react'
import ReactDOM from 'react-dom/client'
import EmbedApp from './EmbedApp'
import '../../../index.css'
import '../../../snippets/gradientTypography/styles/fonts.css'
import '../../../tokens/designTokens.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <EmbedApp />
  </React.StrictMode>,
)