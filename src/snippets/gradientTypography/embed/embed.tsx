import React from 'react';
import ReactDOM from 'react-dom/client';
import EmbedApp from './EmbedApp';
import './embed.css';
import '../styles/fonts.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <EmbedApp />
  </React.StrictMode>,
);