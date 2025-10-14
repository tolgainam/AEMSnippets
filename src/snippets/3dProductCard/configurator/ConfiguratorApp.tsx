import React, { useState } from 'react';
import { ProductCard3D } from '../components/ProductCard3D';
import type { ProductCard3DConfig, Keyframe } from '../types/config';
import './ConfiguratorApp.css';
import sampleModel from '../assets/sample3d.glb?url';

const DEFAULT_CONFIG: ProductCard3DConfig = {
  modelPath: sampleModel,
  animation: {
    totalFrames: 360,
    fps: 30
  },
  keyframes: [
    {
      frame: 60,
      title: 'Discover Innovation',
      message: 'Experience cutting-edge design and functionality that sets new standards in the industry. Our product combines elegance with performance.',
    },
    {
      frame: 120,
      title: 'Premium Craftsmanship',
      message: 'Every detail is meticulously crafted to perfection. We use only the finest materials and advanced manufacturing techniques.',
    },
    {
      frame: 180,
      title: 'Unmatched Performance',
      message: 'Built to exceed expectations, our product delivers exceptional results in real-world conditions. See the difference quality makes.',
      button: {
        text: 'Learn More',
        url: 'https://example.com/learn-more'
      }
    },
    {
      frame: 240,
      title: 'Designed for You',
      message: 'Thoughtfully engineered with your needs in mind. Intuitive features and seamless integration make every interaction effortless.',
    },
    {
      frame: 300,
      title: 'Get Started Today',
      message: 'Join thousands of satisfied customers who have already made the switch. Transform your experience with our innovative solution.',
      button: {
        text: 'Shop Now',
        url: 'https://example.com/shop'
      }
    },
    {
      frame: 360,
      title: 'The Future is Here',
      message: 'Be part of the next generation. Discover how our technology is reshaping what\'s possible and setting new industry benchmarks.',
    }
  ],
  camera: {
    position: [0, 0, 5],
    fov: 50,
    target: [0, 0, 0]
  },
  style: {
    brand: 'iqos',
    theme: 'dark',
    titleTypography: 'h3',
    messageTypography: 'body2',
    overlayPosition: 'right'
  }
};

export const ConfiguratorApp: React.FC = () => {
  const [config, setConfig] = useState<ProductCard3DConfig>(DEFAULT_CONFIG);
  const [activeTab, setActiveTab] = useState<'model' | 'animation' | 'keyframes' | 'style' | 'usage'>('usage');
  const [selectedKeyframeIndex, setSelectedKeyframeIndex] = useState(0);
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');

  const updateConfig = (updates: Partial<ProductCard3DConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  const updateAnimation = (updates: Partial<ProductCard3DConfig['animation']>) => {
    setConfig(prev => ({
      ...prev,
      animation: { ...prev.animation, ...updates }
    }));
  };

  const updateKeyframe = (index: number, updates: Partial<Keyframe>) => {
    setConfig(prev => ({
      ...prev,
      keyframes: prev.keyframes.map((kf, i) =>
        i === index ? { ...kf, ...updates } : kf
      )
    }));
  };

  const addKeyframe = () => {
    const lastFrame = config.keyframes[config.keyframes.length - 1]?.frame || 0;
    const newFrame = Math.min(lastFrame + 30, config.animation.totalFrames);

    setConfig(prev => ({
      ...prev,
      keyframes: [...prev.keyframes, {
        frame: newFrame,
        title: 'New Keyframe',
        message: 'Add your message here'
      }]
    }));
    setSelectedKeyframeIndex(config.keyframes.length);
  };

  const removeKeyframe = (index: number) => {
    if (config.keyframes.length <= 1) return;

    setConfig(prev => ({
      ...prev,
      keyframes: prev.keyframes.filter((_, i) => i !== index)
    }));
    setSelectedKeyframeIndex(Math.max(0, index - 1));
  };

  const updateStyle = (updates: Partial<ProductCard3DConfig['style']>) => {
    setConfig(prev => ({
      ...prev,
      style: { ...prev.style, ...updates }
    }));
  };

  // Helper to get camera position
  const getCameraPosition = (): [number, number, number] => {
    const pos = config.camera?.position;
    if (!pos) return [0, 0, 5];
    if (Array.isArray(pos)) return pos;
    return [0, 0, 5];
  };

  // Helper to get camera target
  const getCameraTarget = (): [number, number, number] => {
    const target = config.camera?.target;
    if (!target) return [0, 0, 0];
    if (Array.isArray(target)) return target;
    return [0, 0, 0];
  };

  // Helper to set camera position
  const setCameraPosition = (newPos: [number, number, number]) => {
    setConfig(prev => ({
      ...prev,
      camera: { ...prev.camera!, position: newPos }
    }));
  };

  // Helper to set camera target
  const setCameraTarget = (newTarget: [number, number, number]) => {
    setConfig(prev => ({
      ...prev,
      camera: { ...prev.camera!, target: newTarget }
    }));
  };

  // Helpers for keyframe camera based on preview mode
  const getKeyframeCameraPosition = (keyframe: Keyframe): [number, number, number] | undefined => {
    const pos = keyframe.camera?.position;
    if (!pos) return undefined;
    if (Array.isArray(pos)) return pos;
    return pos[previewMode];
  };

  const getKeyframeCameraTarget = (keyframe: Keyframe): [number, number, number] | undefined => {
    const target = keyframe.camera?.target;
    if (!target) return undefined;
    if (Array.isArray(target)) return target;
    return target[previewMode];
  };

  const setKeyframeCameraPosition = (index: number, newPos: [number, number, number] | undefined) => {
    const keyframe = config.keyframes[index];
    const currentPos = keyframe.camera?.position;

    let updatedPosition: any;

    if (newPos === undefined) {
      updatedPosition = undefined;
    } else if (Array.isArray(currentPos)) {
      updatedPosition = {
        mobile: previewMode === 'mobile' ? newPos : currentPos,
        desktop: previewMode === 'desktop' ? newPos : currentPos,
      };
    } else if (currentPos && typeof currentPos === 'object') {
      updatedPosition = {
        ...currentPos,
        [previewMode]: newPos,
      };
    } else {
      updatedPosition = {
        [previewMode]: newPos,
      };
    }

    updateKeyframe(index, {
      camera: {
        ...keyframe.camera,
        position: updatedPosition,
      },
    });
  };

  const setKeyframeCameraTarget = (index: number, newTarget: [number, number, number] | undefined) => {
    const keyframe = config.keyframes[index];
    const currentTarget = keyframe.camera?.target;

    let updatedTarget: any;

    if (newTarget === undefined) {
      updatedTarget = undefined;
    } else if (Array.isArray(currentTarget)) {
      updatedTarget = {
        mobile: previewMode === 'mobile' ? newTarget : currentTarget,
        desktop: previewMode === 'desktop' ? newTarget : currentTarget,
      };
    } else if (currentTarget && typeof currentTarget === 'object') {
      updatedTarget = {
        ...currentTarget,
        [previewMode]: newTarget,
      };
    } else {
      updatedTarget = {
        [previewMode]: newTarget,
      };
    }

    updateKeyframe(index, {
      camera: {
        ...keyframe.camera,
        target: updatedTarget,
      },
    });
  };

  const exportConfig = () => {
    const json = JSON.stringify(config, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '3d-product-card-config.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const importConfig = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target?.result as string);
        setConfig(imported);
      } catch (err) {
        alert('Invalid configuration file');
      }
    };
    reader.readAsText(file);
  };

  const generateEmbedCode = () => {
    // Use Base64 encoding for more compact URLs
    const jsonString = JSON.stringify(config);
    const base64Config = btoa(jsonString);
    const embedUrl = `https://tolgainam.github.io/AEMSnippets/3dProductCard/embed.html?config=${base64Config}`;
    const iframeCode = `<iframe src="${embedUrl}" width="100%" height="600" frameborder="0"></iframe>`;

    navigator.clipboard.writeText(iframeCode);
    alert('Embed code copied to clipboard!');
  };

  const generateAEMKeyValues = () => {
    // Generate AEM-friendly Key/Value pairs
    const lines: string[] = [];

    lines.push('=== AEM iframe Component Configuration ===\n');
    lines.push('Base URL:');
    lines.push('https://tolgainam.github.io/AEMSnippets/3dProductCard/embed.html\n');
    lines.push('Key/Value Pairs:');
    lines.push(`modelPath = ${config.modelPath}`);

    if (config.style?.brand) {
      lines.push(`brand = ${config.style.brand}`);
    }
    if (config.style?.theme) {
      lines.push(`theme = ${config.style.theme}`);
    }
    if (config.style?.overlayPosition) {
      lines.push(`overlayPosition = ${config.style.overlayPosition}`);
    }
    if (config.style?.titleTypography) {
      lines.push(`titleTypography = ${config.style.titleTypography}`);
    }
    if (config.style?.messageTypography) {
      lines.push(`messageTypography = ${config.style.messageTypography}`);
    }
    if (config.animation?.totalFrames) {
      lines.push(`animationFrames = ${config.animation.totalFrames}`);
    }
    if (config.animation?.fps) {
      lines.push(`animationFps = ${config.animation.fps}`);
    }

    // Add keyframes as JSON strings
    config.keyframes.forEach((kf, i) => {
      lines.push(`keyframe${i} = ${JSON.stringify(kf)}`);
    });

    const output = lines.join('\n');
    navigator.clipboard.writeText(output);
    alert('AEM Key/Value pairs copied to clipboard!');
  };

  const selectedKeyframe = config.keyframes[selectedKeyframeIndex];

  return (
    <div className="configurator-app">
      <div className="configurator-header">
        <div className="configurator-header-left">
          <h1>3D Product Card Configurator</h1>
          <p style={{ margin: 0, color: '#666', fontSize: '0.95rem' }}>Interactive 3D product showcase with animated content overlays</p>
        </div>
        <div className="configurator-actions">
          <div className="preview-mode-toggle">
            <button
              className={`preview-mode-btn ${previewMode === 'desktop' ? 'active' : ''}`}
              onClick={() => setPreviewMode('desktop')}
              title="Desktop Preview"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              Desktop
            </button>
            <button
              className={`preview-mode-btn ${previewMode === 'mobile' ? 'active' : ''}`}
              onClick={() => setPreviewMode('mobile')}
              title="Mobile Preview"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
              </svg>
              Mobile
            </button>
          </div>
          <label className="btn btn-secondary">
            <input type="file" accept=".json" onChange={importConfig} style={{ display: 'none' }} />
            Import Config
          </label>
          <button className="btn btn-secondary" onClick={exportConfig}>
            Export Config
          </button>
          <button className="btn btn-primary" onClick={generateAEMKeyValues}>
            Copy AEM Key/Values
          </button>
          <button className="btn btn-primary" onClick={generateEmbedCode}>
            Generate Embed Code
          </button>
        </div>
      </div>

      <div className="configurator-content">
        <div className="configurator-sidebar">
          <div className="configurator-tabs">
            <button
              className={`tab ${activeTab === 'usage' ? 'active' : ''}`}
              onClick={() => setActiveTab('usage')}
            >
              Usage
            </button>
            <button
              className={`tab ${activeTab === 'model' ? 'active' : ''}`}
              onClick={() => setActiveTab('model')}
            >
              Model
            </button>
            <button
              className={`tab ${activeTab === 'animation' ? 'active' : ''}`}
              onClick={() => setActiveTab('animation')}
            >
              Animation
            </button>
            <button
              className={`tab ${activeTab === 'keyframes' ? 'active' : ''}`}
              onClick={() => setActiveTab('keyframes')}
            >
              Keyframes
            </button>
            <button
              className={`tab ${activeTab === 'style' ? 'active' : ''}`}
              onClick={() => setActiveTab('style')}
            >
              Style
            </button>
          </div>

          <div className="configurator-panel">
            {activeTab === 'usage' && (
              <div className="panel-content">
                <div className="form-section">
                  <h3>Get Started</h3>
                  <p>
                    The 3D Product Card snippet allows you to create interactive 3D product showcases with animated content overlays.
                    Use the tabs above to configure your model, animation, keyframes, and styling. Then export your configuration or
                    generate embed code to use it in your projects.
                  </p>
                </div>

                <div className="form-section">
                  <h3>NPM Package Usage</h3>
                  <p>Install the package and import the component in your React application:</p>
                  <div className="code-block">
                    <pre>{`npm install aem-snippets

import { ProductCard3D } from 'aem-snippets';

const config = {
  modelPath: '/path/to/model.glb',
  animation: {
    totalFrames: 360,
    fps: 30
  },
  keyframes: [
    {
      frame: 60,
      title: 'Welcome',
      message: 'Your message here',
      button: {
        text: 'Learn More',
        url: 'https://example.com'
      },
      camera: {
        position: [0, 0, 5],
        target: [0, 0, 0],
        fov: 50,
        zoom: 1.0,
        rotation: [0, 0, 0]
      }
    }
  ],
  camera: {
    position: [0, 0, 5],
    fov: 50,
    target: [0, 0, 0]
  },
  style: {
    brand: 'iqos',
    theme: 'light',
    titleTypography: 'h3',
    messageTypography: 'body2',
    overlayPosition: 'right'
  }
};

<ProductCard3D config={config} width="100%" height="600px" />`}</pre>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Iframe Embed</h3>
                  <p>
                    To embed the 3D Product Card in any website (WordPress, Drupal, etc.), use the "Generate Embed Code" button
                    in the header. This will copy an iframe code with your configuration embedded in the URL.
                  </p>
                  <div className="code-block">
                    <pre>{`<iframe
  src="https://YOUR-DOMAIN.github.io/AEMSnippets/3dProductCard/embed.html?config={...}"
  width="100%"
  height="600"
  frameborder="0">
</iframe>`}</pre>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Configuration Options</h3>
                  <ul style={{ lineHeight: '1.8', color: '#555' }}>
                    <li><strong>Model:</strong> Set the path to your GLB 3D model file and configure the default camera position/angle</li>
                    <li><strong>Animation:</strong> Configure the total frames and FPS for smooth transitions between keyframes</li>
                    <li><strong>Keyframes:</strong> Create multiple keyframes with different content, positions, and camera angles</li>
                    <li><strong>Style:</strong> Use design tokens (brand, theme, typography) or customize colors, fonts, and layout</li>
                    <li><strong>Camera per Keyframe:</strong> Override camera position, target, FOV, zoom, and rotation for each keyframe</li>
                  </ul>
                </div>

                <div className="form-section">
                  <h3>Design Token System</h3>
                  <p>
                    The snippet integrates with the AEM design token system. Select a brand (IQOS, ZYN, VEEV) and theme (light/dark)
                    to automatically apply consistent colors, fonts, and styling. You can also choose typography presets (H1-H4 for titles,
                    Body1-Body3 for messages) or override individual style properties.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'model' && (
              <div className="panel-content">
                <div className="form-section">
                  <h3>Model Settings</h3>
                  <div className="form-group">
                    <label>Model Path (GLB file)</label>
                    <input
                      type="text"
                      value={config.modelPath}
                      onChange={(e) => updateConfig({ modelPath: e.target.value })}
                      placeholder="/path/to/model.glb"
                    />
                    <small>Path to your GLB 3D model file</small>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Camera Settings</h3>
                  <p className="section-description">Configure default camera position. You can override these settings per keyframe in the Keyframes tab.</p>

                  <div className="form-group">
                    <label>Field of View</label>
                    <input
                      type="number"
                      value={config.camera?.fov ?? 50}
                      onChange={(e) => setConfig(prev => ({
                        ...prev,
                        camera: { ...prev.camera!, fov: e.target.value === '' ? 0 : Number(e.target.value) }
                      }))}
                      min="10"
                      max="120"
                    />
                  </div>

                  <h4>Camera Position</h4>
                  <div className="form-row form-row--3col">
                    <div className="form-group">
                      <label>X Axis</label>
                      <input
                        type="number"
                        value={getCameraPosition()[0]}
                        onChange={(e) => {
                          const pos = getCameraPosition();
                          setCameraPosition([e.target.value === '' ? 0 : Number(e.target.value), pos[1], pos[2]]);
                        }}
                        step="0.1"
                      />
                      <small>Left (-) / Right (+)</small>
                    </div>

                    <div className="form-group">
                      <label>Y Axis</label>
                      <input
                        type="number"
                        value={getCameraPosition()[1]}
                        onChange={(e) => {
                          const pos = getCameraPosition();
                          setCameraPosition([pos[0], e.target.value === '' ? 0 : Number(e.target.value), pos[2]]);
                        }}
                        step="0.1"
                      />
                      <small>Down (-) / Up (+)</small>
                    </div>

                    <div className="form-group">
                      <label>Z Axis</label>
                      <input
                        type="number"
                        value={getCameraPosition()[2]}
                        onChange={(e) => {
                          const pos = getCameraPosition();
                          setCameraPosition([pos[0], pos[1], e.target.value === '' ? 0 : Number(e.target.value)]);
                        }}
                        step="0.1"
                      />
                      <small>Close (+) / Far (-)</small>
                    </div>
                  </div>

                  <h4>Camera Target (Look At)</h4>
                  <div className="form-row form-row--3col">
                    <div className="form-group">
                      <label>X Axis</label>
                      <input
                        type="number"
                        value={getCameraTarget()[0]}
                        onChange={(e) => {
                          const target = getCameraTarget();
                          setCameraTarget([e.target.value === '' ? 0 : Number(e.target.value), target[1], target[2]]);
                        }}
                        step="0.1"
                      />
                      <small>Target point on X axis</small>
                    </div>

                    <div className="form-group">
                      <label>Y Axis</label>
                      <input
                        type="number"
                        value={getCameraTarget()[1]}
                        onChange={(e) => {
                          const target = getCameraTarget();
                          setCameraTarget([target[0], e.target.value === '' ? 0 : Number(e.target.value), target[2]]);
                        }}
                        step="0.1"
                      />
                      <small>Target point on Y axis</small>
                    </div>

                    <div className="form-group">
                      <label>Z Axis</label>
                      <input
                        type="number"
                        value={getCameraTarget()[2]}
                        onChange={(e) => {
                          const target = getCameraTarget();
                          setCameraTarget([target[0], target[1], e.target.value === '' ? 0 : Number(e.target.value)]);
                        }}
                        step="0.1"
                      />
                      <small>Target point on Z axis</small>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'animation' && (
              <div className="panel-content">
                <h3>Animation Settings</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Total Frames</label>
                    <input
                      type="number"
                      value={config.animation.totalFrames}
                      onChange={(e) => updateAnimation({ totalFrames: e.target.value === '' ? 1 : Number(e.target.value) })}
                      min="1"
                    />
                    <small>Total number of frames in the animation timeline</small>
                  </div>

                  <div className="form-group">
                    <label>FPS (Frames Per Second)</label>
                    <input
                      type="number"
                      value={config.animation.fps || 30}
                      onChange={(e) => updateAnimation({ fps: e.target.value === '' ? 30 : Number(e.target.value) })}
                      min="1"
                      max="60"
                    />
                    <small>Animation playback speed for transitions between keyframes</small>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'keyframes' && (
              <div className="panel-content">
                <div className="keyframes-section">
                  <div className="keyframes-list-horizontal">
                    {config.keyframes.map((kf, index) => (
                      <button
                        key={index}
                        className={`keyframe-chip ${selectedKeyframeIndex === index ? 'active' : ''}`}
                        onClick={() => setSelectedKeyframeIndex(index)}
                      >
                        {kf.frame}
                      </button>
                    ))}
                    <button className="keyframe-chip keyframe-chip--add" onClick={addKeyframe}>
                      +
                    </button>
                  </div>
                </div>

                {selectedKeyframe && (
                  <div className="keyframe-editor-full">
                    <h3>Edit Keyframe</h3>
                    <div className="form-group">
                      <label>Frame Number</label>
                      <input
                        type="number"
                        value={selectedKeyframe.frame}
                        onChange={(e) => updateKeyframe(selectedKeyframeIndex, { frame: Number(e.target.value) })}
                        min="0"
                        max={config.animation.totalFrames}
                      />
                    </div>

                    <div className="form-group">
                      <label>Title</label>
                      <input
                        type="text"
                        value={selectedKeyframe.title}
                        onChange={(e) => updateKeyframe(selectedKeyframeIndex, { title: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label>Message</label>
                      <textarea
                        value={selectedKeyframe.message}
                        onChange={(e) => updateKeyframe(selectedKeyframeIndex, { message: e.target.value })}
                        rows={4}
                      />
                    </div>

                    <div className="form-group">
                      <label>Button Text (optional)</label>
                      <input
                        type="text"
                        value={selectedKeyframe.button?.text || ''}
                        onChange={(e) => updateKeyframe(selectedKeyframeIndex, {
                          button: e.target.value ? {
                            text: e.target.value,
                            url: selectedKeyframe.button?.url || ''
                          } : undefined
                        })}
                        placeholder="Learn More"
                      />
                    </div>

                    {selectedKeyframe.button?.text && (
                      <div className="form-group">
                        <label>Button URL</label>
                        <input
                          type="text"
                          value={selectedKeyframe.button.url}
                          onChange={(e) => updateKeyframe(selectedKeyframeIndex, {
                            button: {
                              text: selectedKeyframe.button!.text,
                              url: e.target.value
                            }
                          })}
                          placeholder="https://example.com"
                        />
                      </div>
                    )}

                    <div className="form-section">
                      <h4>Camera Settings (Optional) <span style={{ fontWeight: 'normal', color: '#667eea' }}>({previewMode})</span></h4>
                      <p className="form-help">Override camera position/angle for this keyframe on {previewMode}. Use the Desktop/Mobile switch above to configure each separately.</p>

                      <div className="form-group">
                        <label>Field of View</label>
                        <input
                          type="number"
                          value={selectedKeyframe.camera?.fov ?? ''}
                          onChange={(e) => updateKeyframe(selectedKeyframeIndex, {
                            camera: {
                              ...selectedKeyframe.camera,
                              fov: e.target.value === '' ? undefined : Number(e.target.value)
                            }
                          })}
                          placeholder="50"
                          min="10"
                          max="120"
                        />
                      </div>

                      <div className="form-group">
                        <label>Zoom</label>
                        <input
                          type="number"
                          value={selectedKeyframe.camera?.zoom ?? ''}
                          onChange={(e) => updateKeyframe(selectedKeyframeIndex, {
                            camera: {
                              ...selectedKeyframe.camera,
                              zoom: e.target.value === '' ? undefined : Number(e.target.value)
                            }
                          })}
                          placeholder="1.0"
                          step="0.1"
                          min="0.1"
                          max="10"
                        />
                        <small>Camera zoom multiplier (1.0 = normal)</small>
                      </div>

                      <h5>Camera Position</h5>
                      <div className="form-row form-row--3col">
                        <div className="form-group">
                          <label>X Axis</label>
                          <input
                            type="number"
                            value={getKeyframeCameraPosition(selectedKeyframe)?.[0] ?? ''}
                            onChange={(e) => {
                              const currentPos = getKeyframeCameraPosition(selectedKeyframe) || [0, 0, 5];
                              const newPos: [number, number, number] = [
                                e.target.value === '' ? 0 : Number(e.target.value),
                                currentPos[1],
                                currentPos[2]
                              ];
                              setKeyframeCameraPosition(selectedKeyframeIndex, newPos);
                            }}
                            placeholder="0"
                            step="0.1"
                          />
                          <small>Left (-) / Right (+)</small>
                        </div>

                        <div className="form-group">
                          <label>Y Axis</label>
                          <input
                            type="number"
                            value={getKeyframeCameraPosition(selectedKeyframe)?.[1] ?? ''}
                            onChange={(e) => {
                              const currentPos = getKeyframeCameraPosition(selectedKeyframe) || [0, 0, 5];
                              const newPos: [number, number, number] = [
                                currentPos[0],
                                e.target.value === '' ? 0 : Number(e.target.value),
                                currentPos[2]
                              ];
                              setKeyframeCameraPosition(selectedKeyframeIndex, newPos);
                            }}
                            placeholder="0"
                            step="0.1"
                          />
                          <small>Down (-) / Up (+)</small>
                        </div>

                        <div className="form-group">
                          <label>Z Axis</label>
                          <input
                            type="number"
                            value={getKeyframeCameraPosition(selectedKeyframe)?.[2] ?? ''}
                            onChange={(e) => {
                              const currentPos = getKeyframeCameraPosition(selectedKeyframe) || [0, 0, 5];
                              const newPos: [number, number, number] = [
                                currentPos[0],
                                currentPos[1],
                                e.target.value === '' ? 0 : Number(e.target.value)
                              ];
                              setKeyframeCameraPosition(selectedKeyframeIndex, newPos);
                            }}
                            placeholder="5"
                            step="0.1"
                          />
                          <small>Close (+) / Far (-)</small>
                        </div>
                      </div>

                      <h5>Camera Target</h5>
                      <div className="form-row form-row--3col">
                        <div className="form-group">
                          <label>X Axis</label>
                          <input
                            type="number"
                            value={getKeyframeCameraTarget(selectedKeyframe)?.[0] ?? ''}
                            onChange={(e) => {
                              const currentTarget = getKeyframeCameraTarget(selectedKeyframe) || [0, 0, 0];
                              const newTarget: [number, number, number] = [
                                e.target.value === '' ? 0 : Number(e.target.value),
                                currentTarget[1],
                                currentTarget[2]
                              ];
                              setKeyframeCameraTarget(selectedKeyframeIndex, newTarget);
                            }}
                            placeholder="0"
                            step="0.1"
                          />
                        </div>

                        <div className="form-group">
                          <label>Y Axis</label>
                          <input
                            type="number"
                            value={getKeyframeCameraTarget(selectedKeyframe)?.[1] ?? ''}
                            onChange={(e) => {
                              const currentTarget = getKeyframeCameraTarget(selectedKeyframe) || [0, 0, 0];
                              const newTarget: [number, number, number] = [
                                currentTarget[0],
                                e.target.value === '' ? 0 : Number(e.target.value),
                                currentTarget[2]
                              ];
                              setKeyframeCameraTarget(selectedKeyframeIndex, newTarget);
                            }}
                            placeholder="0"
                            step="0.1"
                          />
                        </div>

                        <div className="form-group">
                          <label>Z Axis</label>
                          <input
                            type="number"
                            value={getKeyframeCameraTarget(selectedKeyframe)?.[2] ?? ''}
                            onChange={(e) => {
                              const currentTarget = getKeyframeCameraTarget(selectedKeyframe) || [0, 0, 0];
                              const newTarget: [number, number, number] = [
                                currentTarget[0],
                                currentTarget[1],
                                e.target.value === '' ? 0 : Number(e.target.value)
                              ];
                              setKeyframeCameraTarget(selectedKeyframeIndex, newTarget);
                            }}
                            placeholder="0"
                            step="0.1"
                          />
                        </div>
                      </div>

                      <h5>Camera Rotation</h5>
                      <div className="form-row form-row--3col">
                        <div className="form-group">
                          <label>X Axis (Pitch)</label>
                          <input
                            type="number"
                            value={selectedKeyframe.camera?.rotation?.[0] ?? ''}
                            onChange={(e) => {
                              const rotation = selectedKeyframe.camera?.rotation || [undefined, undefined, undefined];
                              updateKeyframe(selectedKeyframeIndex, {
                                camera: {
                                  ...selectedKeyframe.camera,
                                  rotation: [
                                    e.target.value === '' ? undefined : Number(e.target.value),
                                    rotation[1],
                                    rotation[2]
                                  ] as any
                                }
                              });
                            }}
                            placeholder="0"
                            step="0.1"
                          />
                          <small>Rotation in radians</small>
                        </div>

                        <div className="form-group">
                          <label>Y Axis (Yaw)</label>
                          <input
                            type="number"
                            value={selectedKeyframe.camera?.rotation?.[1] ?? ''}
                            onChange={(e) => {
                              const rotation = selectedKeyframe.camera?.rotation || [undefined, undefined, undefined];
                              updateKeyframe(selectedKeyframeIndex, {
                                camera: {
                                  ...selectedKeyframe.camera,
                                  rotation: [
                                    rotation[0],
                                    e.target.value === '' ? undefined : Number(e.target.value),
                                    rotation[2]
                                  ] as any
                                }
                              });
                            }}
                            placeholder="0"
                            step="0.1"
                          />
                          <small>Rotation in radians</small>
                        </div>

                        <div className="form-group">
                          <label>Z Axis (Roll)</label>
                          <input
                            type="number"
                            value={selectedKeyframe.camera?.rotation?.[2] ?? ''}
                            onChange={(e) => {
                              const rotation = selectedKeyframe.camera?.rotation || [undefined, undefined, undefined];
                              updateKeyframe(selectedKeyframeIndex, {
                                camera: {
                                  ...selectedKeyframe.camera,
                                  rotation: [
                                    rotation[0],
                                    rotation[1],
                                    e.target.value === '' ? undefined : Number(e.target.value)
                                  ] as any
                                }
                              });
                            }}
                            placeholder="0"
                            step="0.1"
                          />
                          <small>Rotation in radians</small>
                        </div>
                      </div>
                    </div>

                    {config.keyframes.length > 1 && (
                      <div className="form-section" style={{ borderTop: '2px solid #e0e0e0', paddingTop: '1.5rem', marginTop: '2rem' }}>
                        <button
                          className="btn btn-danger"
                          onClick={() => removeKeyframe(selectedKeyframeIndex)}
                          style={{ width: '100%' }}
                        >
                          Delete Keyframe {selectedKeyframe.frame}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'style' && (
              <div className="panel-content">
                <div className="form-section">
                  <h3>Design Tokens</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Brand</label>
                      <select
                        value={config.style?.brand || 'iqos'}
                        onChange={(e) => updateStyle({ brand: e.target.value as any })}
                      >
                        <option value="iqos">IQOS</option>
                        <option value="zyn">ZYN</option>
                        <option value="veev">VEEV</option>
                      </select>
                      <small>Auto-applies brand colors, fonts, and styling</small>
                    </div>

                    <div className="form-group">
                      <label>Theme</label>
                      <select
                        value={config.style?.theme || 'light'}
                        onChange={(e) => updateStyle({ theme: e.target.value as any })}
                      >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                      </select>
                      <small>Light or dark theme variation</small>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Title Typography</label>
                      <select
                        value={config.style?.titleTypography || ''}
                        onChange={(e) => updateStyle({ titleTypography: e.target.value as any || undefined })}
                      >
                        <option value="">Default</option>
                        <option value="h1">H1 (64px)</option>
                        <option value="h2">H2 (56px)</option>
                        <option value="h3">H3 (42px)</option>
                        <option value="h4">H4 (32px)</option>
                      </select>
                      <small>Typography preset from design tokens</small>
                    </div>

                    <div className="form-group">
                      <label>Message Typography</label>
                      <select
                        value={config.style?.messageTypography || ''}
                        onChange={(e) => updateStyle({ messageTypography: e.target.value as any || undefined })}
                      >
                        <option value="">Default</option>
                        <option value="body1">Body 1 (16px)</option>
                        <option value="body2">Body 2 (14px)</option>
                        <option value="body3">Body 3 (12px)</option>
                      </select>
                      <small>Typography preset from design tokens</small>
                    </div>
                  </div>

                  <h4>Colors</h4>
                  <div className="form-row form-row--3col">
                    <div className="form-group form-group--color">
                      <label>Title</label>
                      <input
                        type="color"
                        value={config.style?.titleColor || '#ffffff'}
                        onChange={(e) => updateStyle({ titleColor: e.target.value })}
                      />
                    </div>

                    <div className="form-group form-group--color">
                      <label>Message</label>
                      <input
                        type="color"
                        value={config.style?.messageColor || '#f0f0f0'}
                        onChange={(e) => updateStyle({ messageColor: e.target.value })}
                      />
                    </div>

                    <div className="form-group form-group--color">
                      <label>Nav Button</label>
                      <input
                        type="color"
                        value={config.style?.navButtonColor || '#ffffff'}
                        onChange={(e) => updateStyle({ navButtonColor: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row form-row--3col">
                    <div className="form-group form-group--color">
                      <label>Button BG</label>
                      <input
                        type="color"
                        value={config.style?.buttonBackground || '#ffffff'}
                        onChange={(e) => updateStyle({ buttonBackground: e.target.value })}
                      />
                    </div>

                    <div className="form-group form-group--color">
                      <label>Button Text</label>
                      <input
                        type="color"
                        value={config.style?.buttonColor || '#667eea'}
                        onChange={(e) => updateStyle({ buttonColor: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Layout</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Background (Override)</label>
                      <input
                        type="text"
                        value={config.style?.background || ''}
                        onChange={(e) => updateStyle({ background: e.target.value })}
                        placeholder="linear-gradient(...) or #000000"
                      />
                      <small>Leave empty to use brand gradient</small>
                    </div>

                    <div className="form-group">
                      <label>Overlay Position</label>
                      <select
                        value={config.style?.overlayPosition || 'right'}
                        onChange={(e) => updateStyle({ overlayPosition: e.target.value as any })}
                      >
                        <option value="left">Left</option>
                        <option value="right">Right</option>
                        <option value="center">Center</option>
                        <option value="bottom">Bottom</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Overlay Background (Override)</label>
                    <input
                      type="text"
                      value={config.style?.overlayBackground || ''}
                      onChange={(e) => updateStyle({ overlayBackground: e.target.value })}
                      placeholder="rgba(0, 0, 0, 0.7)"
                    />
                    <small>Leave empty to use brand default</small>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={`configurator-preview configurator-preview--${previewMode}`}>
          <ProductCard3D
            config={config}
            width={previewMode === 'mobile' ? '390px' : '1408px'}
            height={previewMode === 'mobile' ? '667px' : '700px'}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfiguratorApp;
