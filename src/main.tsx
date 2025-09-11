import React from 'react'
import ReactDOM from 'react-dom/client'
import DemoApp from './snippets/gradientTypography/demo/DemoApp.tsx'
import './index.css'
import './snippets/gradientTypography/styles/fonts.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DemoApp />
  </React.StrictMode>,
)