import React from 'react';
import { createRoot } from 'react-dom/client';
import EmbedApp from './EmbedApp';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<EmbedApp />);
}
