import { createRoot } from 'react-dom/client';
import EmbedApp from './EmbedApp';
import '../../../styles/fonts.css';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<EmbedApp />);
}