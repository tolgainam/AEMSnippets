import React, { useEffect, useState } from 'react';
import { ProductCard3D } from '../components/ProductCard3D';
import type { ProductCard3DConfig } from '../types/config';
import './EmbedApp.css';

const EmbedApp: React.FC = () => {
  const [config, setConfig] = useState<ProductCard3DConfig | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Get config from URL parameter
      const params = new URLSearchParams(window.location.search);
      const configParam = params.get('config');

      if (!configParam) {
        setError('No configuration provided. Please add ?config=<encoded-json> to the URL.');
        return;
      }

      // Decode and parse the configuration
      const decodedConfig = decodeURIComponent(configParam);
      const parsedConfig: ProductCard3DConfig = JSON.parse(decodedConfig);

      // Validate required fields
      if (!parsedConfig.modelPath) {
        setError('Invalid configuration: modelPath is required');
        return;
      }

      if (!parsedConfig.animation) {
        setError('Invalid configuration: animation settings are required');
        return;
      }

      if (!parsedConfig.keyframes || parsedConfig.keyframes.length === 0) {
        setError('Invalid configuration: at least one keyframe is required');
        return;
      }

      setConfig(parsedConfig);
    } catch (err) {
      setError(`Failed to parse configuration: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }
  }, []);

  if (error) {
    return (
      <div className="embed-error">
        <div className="embed-error__content">
          <h2>Configuration Error</h2>
          <p>{error}</p>
          <details>
            <summary>How to use this embed</summary>
            <p>
              Add a <code>config</code> parameter to the URL with a URL-encoded JSON configuration.
            </p>
            <p>Example:</p>
            <pre>
              ?config=%7B%22modelPath%22%3A%22...%22%2C%22animation%22%3A%7B...%7D%7D
            </pre>
          </details>
        </div>
      </div>
    );
  }

  if (!config) {
    return (
      <div className="embed-loading">
        <div className="loader-spinner" />
        <p>Loading configuration...</p>
      </div>
    );
  }

  return (
    <div className="embed-container">
      <ProductCard3D
        config={config}
        width="100%"
        height="100vh"
        onButtonClick={(url) => {
          window.parent.postMessage({ type: 'buttonClick', url }, '*');
        }}
      />
    </div>
  );
};

export default EmbedApp;
