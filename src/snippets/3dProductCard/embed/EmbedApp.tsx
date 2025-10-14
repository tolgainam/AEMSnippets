import React, { useEffect, useState } from 'react';
import { ProductCard3D } from '../components/ProductCard3D';
import type { ProductCard3DConfig } from '../types/config';
import './EmbedApp.css';

const EmbedApp: React.FC = () => {
  const [config, setConfig] = useState<ProductCard3DConfig | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const configParam = params.get('config');

      let parsedConfig: ProductCard3DConfig;

      // Method 1: Check if individual config parameters are provided (AEM Key/Value approach)
      const modelPath = params.get('modelPath');
      const animationFrames = params.get('animationFrames') || params.get('totalFrames');
      const animationFps = params.get('animationFps') || params.get('fps');

      if (modelPath) {
        // Build config from individual URL parameters
        parsedConfig = {
          modelPath,
          animation: {
            totalFrames: animationFrames ? parseInt(animationFrames) : 360,
            fps: animationFps ? parseInt(animationFps) : 30
          },
          keyframes: [],
          camera: {
            position: [0, 0, 5],
            fov: 50,
            target: [0, 0, 0]
          },
          style: {
            brand: (params.get('brand') as any) || 'iqos',
            theme: (params.get('theme') as any) || 'dark',
            titleTypography: params.get('titleTypography') as any,
            messageTypography: params.get('messageTypography') as any,
            overlayPosition: (params.get('overlayPosition') as any) || 'right'
          }
        };

        // Parse keyframes from URL parameters (keyframe0, keyframe1, etc.)
        let i = 0;
        while (params.has(`keyframe${i}`)) {
          try {
            const kfJson = params.get(`keyframe${i}`);
            if (kfJson) {
              const kf = JSON.parse(kfJson);
              parsedConfig.keyframes.push(kf);
            }
          } catch {
            console.warn(`Invalid keyframe${i}, skipping`);
          }
          i++;
        }

        // If no keyframes found, add a default one
        if (parsedConfig.keyframes.length === 0) {
          parsedConfig.keyframes.push({
            frame: 0,
            title: params.get('title') || 'Welcome',
            message: params.get('message') || 'Configure your 3D product showcase'
          });
        }
      }
      // Method 2: Single config parameter (Base64 or JSON)
      else if (configParam) {
        let jsonString: string;
        try {
          // Try Base64 decoding first
          jsonString = atob(configParam);
        } catch {
          // Fallback to direct JSON parsing
          jsonString = configParam;
        }
        parsedConfig = JSON.parse(jsonString);
      }
      // Method 3: No config at all - show error
      else {
        setError('No configuration provided. Add either ?config=<base64> or individual parameters like ?modelPath=...&title=...');
        return;
      }

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

            <h4>Method 1: Individual Parameters (Recommended for AEM)</h4>
            <p>Pass configuration as separate URL parameters:</p>
            <pre>{`?modelPath=/path/to/model.glb
&title=Welcome
&message=Your message here
&brand=iqos
&theme=dark`}</pre>

            <h4>Method 2: Single Config Parameter</h4>
            <p>Pass entire configuration as Base64-encoded JSON:</p>
            <pre>
              ?config=eyJtb2RlbFBhdGgiOi...
            </pre>

            <p>Use the configurator's "Generate Embed Code" button to create the correct URL automatically.</p>

            <h4>Available Parameters:</h4>
            <ul>
              <li><code>modelPath</code> - Path to GLB file (required)</li>
              <li><code>title</code> - Main title text</li>
              <li><code>message</code> - Description text</li>
              <li><code>brand</code> - iqos, zyn, or veev</li>
              <li><code>theme</code> - light or dark</li>
              <li><code>animationFrames</code> - Total animation frames (default: 360)</li>
              <li><code>animationFps</code> - Frames per second (default: 30)</li>
              <li><code>keyframe0</code>, <code>keyframe1</code>, etc. - JSON keyframe objects</li>
            </ul>
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
