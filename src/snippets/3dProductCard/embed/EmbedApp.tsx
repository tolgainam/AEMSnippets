import React, { useEffect, useState } from 'react';
import { ProductCard3D } from '../components/ProductCard3D';
import type { ProductCard3DConfig } from '../types/config';
import './EmbedApp.css';
import sampleModel from '../assets/eagle.glb?url';

const EmbedApp: React.FC = () => {
  const [config, setConfig] = useState<ProductCard3DConfig | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [containerSize, setContainerSize] = useState<{ width: number; height: number }>({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 600
  });

  // Handle window resize for responsive behavior
  // In an iframe, window.innerWidth/innerHeight reflects the iframe's size
  useEffect(() => {
    const updateSize = () => {
      setContainerSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Set initial size
    updateSize();

    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

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
        // Parse camera parameters
        const cameraX = params.get('cameraX');
        const cameraY = params.get('cameraY');
        const cameraZ = params.get('cameraZ');
        const targetX = params.get('targetX');
        const targetY = params.get('targetY');
        const targetZ = params.get('targetZ');
        const fov = params.get('fov');

        // Build config from individual URL parameters
        parsedConfig = {
          modelPath,
          animation: {
            totalFrames: animationFrames ? parseInt(animationFrames) : 360,
            fps: animationFps ? parseInt(animationFps) : 30
          },
          keyframes: [],
          camera: {
            position: [
              cameraX ? parseFloat(cameraX) : 0,
              cameraY ? parseFloat(cameraY) : 0,
              cameraZ ? parseFloat(cameraZ) : 5
            ],
            fov: fov ? parseInt(fov) : 50,
            target: [
              targetX ? parseFloat(targetX) : 0,
              targetY ? parseFloat(targetY) : 0,
              targetZ ? parseFloat(targetZ) : 0
            ]
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

      // Replace placeholder model path with local dev model for development/testing
      if (parsedConfig.modelPath && (
        parsedConfig.modelPath.includes('your-cdn.com') ||
        parsedConfig.modelPath.includes('example.com') ||
        parsedConfig.modelPath === 'https://your-cdn.com/path/to/model.glb'
      )) {
        console.log('[EmbedApp] Replacing placeholder model path with local dev model');
        parsedConfig.modelPath = sampleModel;
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
              <li><code>overlayPosition</code> - left, right, center, or bottom</li>
              <li><code>animationFrames</code> - Total animation frames (default: 360)</li>
              <li><code>animationFps</code> - Frames per second (default: 30)</li>
              <li><code>cameraX</code>, <code>cameraY</code>, <code>cameraZ</code> - Camera position (defaults: 0, 0, 5)</li>
              <li><code>targetX</code>, <code>targetY</code>, <code>targetZ</code> - Camera target (defaults: 0, 0, 0)</li>
              <li><code>fov</code> - Field of view (default: 50)</li>
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

  // Check if debug mode is enabled via URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const debugMode = urlParams.get('debug') === 'true';

  return (
    <div className="embed-container">
      <ProductCard3D
        config={config}
        width={containerSize.width}
        height={containerSize.height}
        onButtonClick={(url) => {
          window.parent.postMessage({ type: 'buttonClick', url }, '*');
        }}
        onAnimationChange={(keyframeIndex, isPlaying) => {
          if (debugMode) {
            console.log('[EmbedApp] Animation change:', { keyframeIndex, isPlaying });
            const keyframe = config.keyframes[keyframeIndex];
            if (keyframe) {
              console.log('[EmbedApp] Current keyframe:', {
                frame: keyframe.frame,
                title: keyframe.title,
                camera: keyframe.camera
              });
            }
          }
        }}
      />

      {debugMode && (
        <div className="debug-overlay">
          <div className="debug-panel">
            <h3>🐛 Debug Info</h3>
            <div className="debug-info">
              <strong>Container:</strong> {containerSize.width}x{containerSize.height}<br />
              <strong>Is Mobile:</strong> {containerSize.width <= 768 ? 'Yes (≤768px)' : 'No (>768px)'}<br />
              <strong>Breakpoint:</strong> {containerSize.width <= 768 ? 'Mobile' : 'Desktop'}<br />
              <strong>Keyframes:</strong> {config.keyframes.length}<br />
              <strong>Model:</strong> {config.modelPath.split('/').pop()}<br />
              <strong>Base Camera (Defaults):</strong><br />
              <span style={{ fontSize: '10px', marginLeft: '10px' }}>
                Position: {JSON.stringify(config.camera?.position)}<br />
                Target: {JSON.stringify(config.camera?.target)}<br />
                FOV: {JSON.stringify(config.camera?.fov)}<br />
                Zoom: {JSON.stringify(config.camera?.zoom)}
              </span>
            </div>
            <div className="debug-keyframes">
              <strong>Keyframe Cameras:</strong>
              {config.keyframes.map((kf, i) => (
                <details key={i} style={{ marginTop: '8px' }}>
                  <summary>Frame {kf.frame}: {kf.title}</summary>
                  <pre style={{ fontSize: '10px', overflow: 'auto', maxHeight: '150px' }}>
                    {JSON.stringify(kf.camera || 'No camera override', null, 2)}
                  </pre>
                </details>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmbedApp;
