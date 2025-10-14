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
        setError('No configuration provided. Please add ?config=<base64-encoded-json> to the URL.');
        return;
      }

      // Decode from Base64 and parse the configuration
      let jsonString: string;
      try {
        // Try Base64 decoding first (new format)
        jsonString = atob(configParam);
      } catch {
        // Fallback to direct JSON parsing for backward compatibility (old format)
        jsonString = configParam;
      }

      const parsedConfig: ProductCard3DConfig = JSON.parse(jsonString);

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
              Add a <code>config</code> parameter to the URL with a Base64-encoded JSON configuration.
            </p>
            <p>Example:</p>
            <pre>
              ?config=eyJtb2RlbFBhdGgiOiIuLi4iLCJhbmltYXRpb24iOnsuLi59fQ==
            </pre>
            <p>Use the configurator's "Generate Embed Code" button to create the correct URL automatically.</p>
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
