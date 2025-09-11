import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import GradientTypographyDemo from './snippets/gradientTypography/demo/DemoApp';
import './App.css';

const snippets = [
  {
    id: 'gradientTypography',
    name: 'Gradient Typography',
    path: '/gradientTypography',
    component: GradientTypographyDemo,
    description: 'Beautiful gradient text effects with brand tokens and animations'
  }
  // Future snippets will be added here
];

const NavigationBar: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="snippet-nav">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/" className="brand-link">AEM Snippets</Link>
        </div>
        <div className="nav-items">
          {snippets.map(snippet => (
            <Link
              key={snippet.id}
              to={snippet.path}
              className={`nav-item ${location.pathname === snippet.path ? 'active' : ''}`}
            >
              {snippet.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

const HomePage: React.FC = () => (
  <div className="home-page">
    <div className="home-container">
      <h1>AEM Snippets</h1>
      <p className="home-subtitle">A collection of reusable AEM components and snippets</p>
      
      <div className="snippets-grid">
        {snippets.map(snippet => (
          <Link key={snippet.id} to={snippet.path} className="snippet-card">
            <h3>{snippet.name}</h3>
            <p>{snippet.description}</p>
            <span className="snippet-card-arrow">→</span>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router basename="/AEMSnippets">
      <div className="app">
        <NavigationBar />
        <main className="app-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {snippets.map(snippet => (
              <Route
                key={snippet.id}
                path={snippet.path}
                element={<snippet.component />}
              />
            ))}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;