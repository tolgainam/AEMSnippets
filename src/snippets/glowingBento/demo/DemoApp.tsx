import React, { useState } from 'react';
import { GlowingBento, BentoTile } from '../components/GlowingBento';
import { BrandName, TypographySize } from '../../../tokens/designTokens';

interface TileConfig extends BentoTile {
  id: number;
}

const defaultTiles: TileConfig[] = [
  {
    id: 1,
    title: 'Analytics',
    description: 'Track user behavior',
    label: 'Insights',
    backgroundColor: '#060010'
  },
  {
    id: 2,
    title: 'Dashboard',
    description: 'Centralized data view',
    label: 'Overview',
    backgroundColor: '#060010'
  },
  {
    id: 3,
    title: 'Collaboration',
    description: 'Work together seamlessly',
    label: 'Teamwork',
    backgroundColor: '#060010'
  },
  {
    id: 4,
    title: 'Automation',
    description: 'Streamline workflows',
    label: 'Efficiency',
    backgroundColor: '#060010'
  },
  {
    id: 5,
    title: 'Integration',
    description: 'Connect favorite tools',
    label: 'Connectivity',
    backgroundColor: '#060010'
  },
  {
    id: 6,
    title: 'Security',
    description: 'Enterprise-grade protection',
    label: 'Protection',
    backgroundColor: '#060010'
  }
];

interface ConfigState {
  textAutoHide: boolean;
  enableStars: boolean;
  enableSpotlight: boolean;
  enableBorderGlow: boolean;
  disableAnimations: boolean;
  spotlightRadius: number;
  particleCount: number;
  enableTilt: boolean;
  glowColor: string;
  clickEffect: boolean;
  enableMagnetism: boolean;
  brand: BrandName;
  theme: 'light' | 'dark';
}

const GlowingBentoDemo: React.FC = () => {
  const [tiles, setTiles] = useState<TileConfig[]>(defaultTiles);
  const [config, setConfig] = useState<ConfigState>({
    textAutoHide: true,
    enableStars: true,
    enableSpotlight: true,
    enableBorderGlow: true,
    disableAnimations: false,
    spotlightRadius: 300,
    particleCount: 12,
    enableTilt: false,
    glowColor: '132, 0, 255',
    clickEffect: true,
    enableMagnetism: true,
    brand: 'iqos',
    theme: 'dark'
  });

  const [editingTile, setEditingTile] = useState<number | null>(null);
  const [importText, setImportText] = useState<string>('');
  const [importError, setImportError] = useState<string>('');
  const [showNpmPackage, setShowNpmPackage] = useState<boolean>(false);
  const [showIframeEmbed, setShowIframeEmbed] = useState<boolean>(false);
  const [showAemEmbed, setShowAemEmbed] = useState<boolean>(false);
  const [showPreview, setShowPreview] = useState<boolean>(false);

  const updateTile = (id: number, updates: Partial<BentoTile>) => {
    setTiles(prev => prev.map(tile => tile.id === id ? { ...tile, ...updates } : tile));
  };

  const generateEmbedUrl = () => {
    const params = new URLSearchParams({
      tiles: JSON.stringify(tiles.map(({ id, ...rest }) => rest)),
      textAutoHide: config.textAutoHide.toString(),
      enableStars: config.enableStars.toString(),
      enableSpotlight: config.enableSpotlight.toString(),
      enableBorderGlow: config.enableBorderGlow.toString(),
      spotlightRadius: config.spotlightRadius.toString(),
      particleCount: config.particleCount.toString(),
      enableTilt: config.enableTilt.toString(),
      glowColor: config.glowColor,
      clickEffect: config.clickEffect.toString(),
      enableMagnetism: config.enableMagnetism.toString(),
      brand: config.brand,
      theme: config.theme
    });

    return `${window.location.origin}/AEMSnippets/glowingBento/embed.html?${params.toString()}`;
  };

  const generateEmbedCode = () => {
    const embedUrl = generateEmbedUrl();
    return `<iframe src="${embedUrl}" width="100%" height="600" frameborder="0" style="border: none;"></iframe>`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const exportConfiguration = () => {
    const exportData = {
      tiles: tiles,
      config: config
    };
    return JSON.stringify(exportData, null, 2);
  };

  const importConfiguration = (jsonText: string) => {
    try {
      setImportError('');
      const data = JSON.parse(jsonText);

      // Validate the structure
      if (!data.tiles || !Array.isArray(data.tiles)) {
        throw new Error('Invalid format: tiles array is missing');
      }
      if (!data.config || typeof data.config !== 'object') {
        throw new Error('Invalid format: config object is missing');
      }

      // Apply the configuration
      setTiles(data.tiles);
      setConfig(data.config);
      setImportText('');
      alert('Configuration imported successfully!');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Invalid JSON format';
      setImportError(errorMessage);
      alert(`Import failed: ${errorMessage}`);
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>AEM Snippets - GlowingBento</h1>

      <div style={{ marginBottom: '40px' }}>
        <GlowingBento
          tiles={tiles}
          textAutoHide={config.textAutoHide}
          enableStars={config.enableStars}
          enableSpotlight={config.enableSpotlight}
          enableBorderGlow={config.enableBorderGlow}
          disableAnimations={config.disableAnimations}
          spotlightRadius={config.spotlightRadius}
          particleCount={config.particleCount}
          enableTilt={config.enableTilt}
          glowColor={config.glowColor}
          clickEffect={config.clickEffect}
          enableMagnetism={config.enableMagnetism}
          brand={config.brand}
          theme={config.theme}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <div>
          <h3>Global Configuration</h3>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Brand:</label>
            <select
              value={config.brand}
              onChange={(e) => setConfig(prev => ({ ...prev, brand: e.target.value as BrandName }))}
              style={{ width: '100%', padding: '8px' }}
            >
              <option value="iqos">IQOS</option>
              <option value="veev">VEEV</option>
              <option value="zyn">ZYN</option>
            </select>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Theme:</label>
            <select
              value={config.theme}
              onChange={(e) => setConfig(prev => ({ ...prev, theme: e.target.value as 'light' | 'dark' }))}
              style={{ width: '100%', padding: '8px' }}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Number of Tiles (3-6):</label>
            <input
              type="range"
              min="3"
              max="6"
              value={tiles.length}
              onChange={(e) => {
                const newCount = parseInt(e.target.value);
                if (newCount > tiles.length) {
                  // Add tiles
                  const newTiles = [...tiles];
                  for (let i = tiles.length; i < newCount; i++) {
                    newTiles.push({
                      id: i + 1,
                      title: `Feature ${i + 1}`,
                      description: `Description for feature ${i + 1}`,
                      label: `Label ${i + 1}`,
                      backgroundColor: '#060010'
                    });
                  }
                  setTiles(newTiles);
                } else if (newCount < tiles.length) {
                  // Remove tiles
                  setTiles(tiles.slice(0, newCount));
                }
              }}
              style={{ width: '100%' }}
            />
            <span>{tiles.length} tiles</span>
          </div>

          <hr style={{ margin: '30px 0', border: 'none', borderTop: '2px solid #e0e0e0' }} />

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={config.enableStars}
                onChange={(e) => setConfig(prev => ({ ...prev, enableStars: e.target.checked }))}
                style={{ marginRight: '8px' }}
              />
              Enable Star Particles
            </label>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={config.enableSpotlight}
                onChange={(e) => setConfig(prev => ({ ...prev, enableSpotlight: e.target.checked }))}
                style={{ marginRight: '8px' }}
              />
              Enable Spotlight Effect
            </label>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={config.enableBorderGlow}
                onChange={(e) => setConfig(prev => ({ ...prev, enableBorderGlow: e.target.checked }))}
                style={{ marginRight: '8px' }}
              />
              Enable Border Glow
            </label>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={config.textAutoHide}
                onChange={(e) => setConfig(prev => ({ ...prev, textAutoHide: e.target.checked }))}
                style={{ marginRight: '8px' }}
              />
              Auto-hide Long Text
            </label>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={config.enableTilt}
                onChange={(e) => setConfig(prev => ({ ...prev, enableTilt: e.target.checked }))}
                style={{ marginRight: '8px' }}
              />
              Enable 3D Tilt Effect
            </label>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={config.clickEffect}
                onChange={(e) => setConfig(prev => ({ ...prev, clickEffect: e.target.checked }))}
                style={{ marginRight: '8px' }}
              />
              Enable Click Ripple Effect
            </label>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={config.enableMagnetism}
                onChange={(e) => setConfig(prev => ({ ...prev, enableMagnetism: e.target.checked }))}
                style={{ marginRight: '8px' }}
              />
              Enable Magnetic Effect
            </label>
          </div>

          <hr style={{ margin: '30px 0', border: 'none', borderTop: '1px solid #392e4e' }} />

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Spotlight Radius:</label>
            <input
              type="range"
              min="100"
              max="600"
              value={config.spotlightRadius}
              onChange={(e) => setConfig(prev => ({ ...prev, spotlightRadius: parseInt(e.target.value) }))}
              style={{ width: '100%' }}
            />
            <span>{config.spotlightRadius}px</span>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Particle Count:</label>
            <input
              type="range"
              min="0"
              max="30"
              value={config.particleCount}
              onChange={(e) => setConfig(prev => ({ ...prev, particleCount: parseInt(e.target.value) }))}
              style={{ width: '100%' }}
            />
            <span>{config.particleCount}</span>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Glow Color (RGB):</label>
            <input
              type="text"
              value={config.glowColor}
              onChange={(e) => setConfig(prev => ({ ...prev, glowColor: e.target.value }))}
              placeholder="e.g., 132, 0, 255"
              style={{ width: '100%', padding: '8px' }}
            />
            <small style={{ color: '#666', display: 'block', marginTop: '5px' }}>Format: R, G, B (e.g., 132, 0, 255)</small>
          </div>
        </div>

        <div>
          <h3>Tile Configuration</h3>

          {tiles.map((tile) => (
            <div key={tile.id} style={{ marginBottom: '30px', padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
              <h4 style={{ marginTop: 0 }}>Tile {tile.id}: {tile.title}</h4>

              {editingTile === tile.id ? (
                <>
                  <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Label:</label>
                    <input
                      type="text"
                      value={tile.label}
                      onChange={(e) => updateTile(tile.id, { label: e.target.value })}
                      style={{ width: '100%', padding: '6px' }}
                    />
                  </div>

                  <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Title:</label>
                    <input
                      type="text"
                      value={tile.title}
                      onChange={(e) => updateTile(tile.id, { title: e.target.value })}
                      style={{ width: '100%', padding: '6px' }}
                    />
                  </div>

                  <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Description:</label>
                    <textarea
                      value={tile.description}
                      onChange={(e) => updateTile(tile.id, { description: e.target.value })}
                      style={{ width: '100%', padding: '6px', minHeight: '60px' }}
                    />
                  </div>

                  <hr style={{ margin: '15px 0', border: 'none', borderTop: '1px solid #ddd' }} />

                  <h5 style={{ marginTop: '10px', marginBottom: '10px', fontSize: '14px', fontWeight: 600 }}>Text Styles</h5>

                  <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Label Style:</label>
                    <select
                      value={tile.labelStyle || ''}
                      onChange={(e) => updateTile(tile.id, { labelStyle: e.target.value as TypographySize || undefined })}
                      style={{ width: '100%', padding: '6px' }}
                    >
                      <option value="">Default</option>
                      <option value="poster">Poster</option>
                      <option value="h1">H1</option>
                      <option value="h2">H2</option>
                      <option value="h3">H3</option>
                      <option value="h4">H4</option>
                      <option value="h5">H5</option>
                      <option value="h6">H6</option>
                      <option value="fs1">FS1</option>
                      <option value="fs2">FS2</option>
                      <option value="fs3">FS3</option>
                      <option value="fs4">FS4</option>
                      <option value="fs5">FS5</option>
                      <option value="fs6">FS6</option>
                      <option value="body1">Body 1</option>
                      <option value="body2">Body 2</option>
                      <option value="body3">Body 3</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Title Style:</label>
                    <select
                      value={tile.titleStyle || ''}
                      onChange={(e) => updateTile(tile.id, { titleStyle: e.target.value as TypographySize || undefined })}
                      style={{ width: '100%', padding: '6px' }}
                    >
                      <option value="">Default</option>
                      <option value="poster">Poster</option>
                      <option value="h1">H1</option>
                      <option value="h2">H2</option>
                      <option value="h3">H3</option>
                      <option value="h4">H4</option>
                      <option value="h5">H5</option>
                      <option value="h6">H6</option>
                      <option value="fs1">FS1</option>
                      <option value="fs2">FS2</option>
                      <option value="fs3">FS3</option>
                      <option value="fs4">FS4</option>
                      <option value="fs5">FS5</option>
                      <option value="fs6">FS6</option>
                      <option value="body1">Body 1</option>
                      <option value="body2">Body 2</option>
                      <option value="body3">Body 3</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Description Style:</label>
                    <select
                      value={tile.descriptionStyle || ''}
                      onChange={(e) => updateTile(tile.id, { descriptionStyle: e.target.value as TypographySize || undefined })}
                      style={{ width: '100%', padding: '6px' }}
                    >
                      <option value="">Default</option>
                      <option value="poster">Poster</option>
                      <option value="h1">H1</option>
                      <option value="h2">H2</option>
                      <option value="h3">H3</option>
                      <option value="h4">H4</option>
                      <option value="h5">H5</option>
                      <option value="h6">H6</option>
                      <option value="fs1">FS1</option>
                      <option value="fs2">FS2</option>
                      <option value="fs3">FS3</option>
                      <option value="fs4">FS4</option>
                      <option value="fs5">FS5</option>
                      <option value="fs6">FS6</option>
                      <option value="body1">Body 1</option>
                      <option value="body2">Body 2</option>
                      <option value="body3">Body 3</option>
                    </select>
                  </div>

                  <hr style={{ margin: '15px 0', border: 'none', borderTop: '1px solid #ddd' }} />

                  <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Background Color:</label>
                    <input
                      type="text"
                      value={tile.backgroundColor || ''}
                      onChange={(e) => updateTile(tile.id, { backgroundColor: e.target.value, backgroundImage: '', backgroundGradient: '' })}
                      placeholder="#060010"
                      style={{ width: '100%', padding: '6px' }}
                    />
                  </div>

                  <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Background Gradient:</label>
                    <input
                      type="text"
                      value={tile.backgroundGradient || ''}
                      onChange={(e) => updateTile(tile.id, { backgroundGradient: e.target.value, backgroundColor: '', backgroundImage: '' })}
                      placeholder="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                      style={{ width: '100%', padding: '6px' }}
                    />
                  </div>

                  <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Background Image URL:</label>
                    <input
                      type="text"
                      value={tile.backgroundImage || ''}
                      onChange={(e) => updateTile(tile.id, { backgroundImage: e.target.value, backgroundColor: '', backgroundGradient: '' })}
                      placeholder="https://example.com/image.jpg"
                      style={{ width: '100%', padding: '6px' }}
                    />
                  </div>

                  {tile.backgroundImage && (
                    <>
                      <div style={{ marginBottom: '10px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Horizontal Position:</label>
                        <select
                          value={tile.backgroundPositionX || 'center'}
                          onChange={(e) => updateTile(tile.id, { backgroundPositionX: e.target.value as 'left' | 'center' | 'right' })}
                          style={{ width: '100%', padding: '6px' }}
                        >
                          <option value="left">Left</option>
                          <option value="center">Center</option>
                          <option value="right">Right</option>
                        </select>
                      </div>

                      <div style={{ marginBottom: '10px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Vertical Position:</label>
                        <select
                          value={tile.backgroundPositionY || 'center'}
                          onChange={(e) => updateTile(tile.id, { backgroundPositionY: e.target.value as 'top' | 'center' | 'bottom' })}
                          style={{ width: '100%', padding: '6px' }}
                        >
                          <option value="top">Top</option>
                          <option value="center">Center</option>
                          <option value="bottom">Bottom</option>
                        </select>
                      </div>
                    </>
                  )}

                  <button
                    onClick={() => setEditingTile(null)}
                    style={{ padding: '6px 12px', backgroundColor: '#007bff', color: '#ffffff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
                  >
                    Done Editing
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setEditingTile(tile.id)}
                  style={{ padding: '6px 12px', backgroundColor: '#007bff', color: '#ffffff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Edit Tile
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <h3>Import/Export Configuration</h3>

        <div style={{ marginBottom: '30px' }}>
          <h4>Export Configuration:</h4>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
            Copy your current configuration as JSON text to save or share it.
          </p>
          <textarea
            value={exportConfiguration()}
            readOnly
            style={{
              width: '100%',
              height: '150px',
              padding: '10px',
              fontFamily: 'monospace',
              fontSize: '12px',
              marginBottom: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
          <button
            onClick={() => copyToClipboard(exportConfiguration())}
            style={{
              padding: '8px 16px',
              backgroundColor: '#28a745',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Copy Configuration
          </button>
        </div>

        <div>
          <h4>Import Configuration:</h4>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
            Paste a previously exported configuration to restore all settings.
          </p>
          <textarea
            value={importText}
            onChange={(e) => setImportText(e.target.value)}
            placeholder="Paste your configuration JSON here..."
            style={{
              width: '100%',
              height: '150px',
              padding: '10px',
              fontFamily: 'monospace',
              fontSize: '12px',
              marginBottom: '10px',
              border: importError ? '2px solid #dc3545' : '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
          {importError && (
            <div style={{
              padding: '10px',
              backgroundColor: '#f8d7da',
              color: '#721c24',
              borderRadius: '4px',
              marginBottom: '10px',
              fontSize: '14px'
            }}>
              Error: {importError}
            </div>
          )}
          <button
            onClick={() => importConfiguration(importText)}
            disabled={!importText.trim()}
            style={{
              padding: '8px 16px',
              backgroundColor: !importText.trim() ? '#ccc' : '#007bff',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              cursor: !importText.trim() ? 'not-allowed' : 'pointer'
            }}
          >
            Import Configuration
          </button>
        </div>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h3>Usage</h3>

        <div style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '8px', padding: '15px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: showNpmPackage ? '15px' : '0' }}>
            <h4 style={{ margin: 0 }}>As npm package:</h4>
            <button
              onClick={() => setShowNpmPackage(!showNpmPackage)}
              style={{
                padding: '6px 12px',
                backgroundColor: '#f5f5f5',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              {showNpmPackage ? '▼ Collapse' : '▶ Expand'}
            </button>
          </div>
          {showNpmPackage && (
            <>
              <pre style={{ backgroundColor: '#f5f5f5', padding: '15px', borderRadius: '8px', overflow: 'auto', fontSize: '14px' }}>
{`npm install aem-snippets

import { GlowingBento } from 'aem-snippets/glowingBento';

<GlowingBento
  tiles={${JSON.stringify(tiles.map(({ id, ...rest }) => rest), null, 2)}}
  textAutoHide={${config.textAutoHide}}
  enableStars={${config.enableStars}}
  enableSpotlight={${config.enableSpotlight}}
  enableBorderGlow={${config.enableBorderGlow}}
  spotlightRadius={${config.spotlightRadius}}
  particleCount={${config.particleCount}}
  enableTilt={${config.enableTilt}}
  glowColor="${config.glowColor}"
  clickEffect={${config.clickEffect}}
  enableMagnetism={${config.enableMagnetism}}
  brand="${config.brand}"
  theme="${config.theme}"
/>`}
              </pre>
              <button
                onClick={() => copyToClipboard(`import { GlowingBento } from 'aem-snippets/glowingBento';\n\n<GlowingBento\n  tiles={${JSON.stringify(tiles.map(({ id, ...rest }) => rest), null, 2)}}\n  textAutoHide={${config.textAutoHide}}\n  enableStars={${config.enableStars}}\n  enableSpotlight={${config.enableSpotlight}}\n  enableBorderGlow={${config.enableBorderGlow}}\n  spotlightRadius={${config.spotlightRadius}}\n  particleCount={${config.particleCount}}\n  enableTilt={${config.enableTilt}}\n  glowColor="${config.glowColor}"\n  clickEffect={${config.clickEffect}}\n  enableMagnetism={${config.enableMagnetism}}\n  brand="${config.brand}"\n  theme="${config.theme}"\n/>`)}
                style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#ffffff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Copy Code
              </button>
            </>
          )}
        </div>

        <div style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '8px', padding: '15px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: showIframeEmbed ? '15px' : '0' }}>
            <h4 style={{ margin: 0 }}>As iframe embed:</h4>
            <button
              onClick={() => setShowIframeEmbed(!showIframeEmbed)}
              style={{
                padding: '6px 12px',
                backgroundColor: '#f5f5f5',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              {showIframeEmbed ? '▼ Collapse' : '▶ Expand'}
            </button>
          </div>
          {showIframeEmbed && (
            <>
              <textarea
                value={generateEmbedCode()}
                readOnly
                style={{ width: '100%', height: '100px', padding: '10px', fontFamily: 'monospace', fontSize: '12px', marginBottom: '10px' }}
              />
              <button
                onClick={() => copyToClipboard(generateEmbedCode())}
                style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#ffffff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Copy Embed Code
              </button>
            </>
          )}
        </div>

        <div style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '8px', padding: '15px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: showAemEmbed ? '15px' : '0' }}>
            <h4 style={{ margin: 0 }}>AEM Embed:</h4>
            <button
              onClick={() => setShowAemEmbed(!showAemEmbed)}
              style={{
                padding: '6px 12px',
                backgroundColor: '#f5f5f5',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              {showAemEmbed ? '▼ Collapse' : '▶ Expand'}
            </button>
          </div>
          {showAemEmbed && (
            <>
              <textarea
                value={generateEmbedUrl()}
                readOnly
                style={{ width: '100%', height: '60px', padding: '10px', fontFamily: 'monospace', fontSize: '12px', marginBottom: '10px' }}
              />
              <button
                onClick={() => copyToClipboard(generateEmbedUrl())}
                style={{ padding: '8px 16px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
              >
                Copy AEM Embed URL
              </button>
            </>
          )}
        </div>

        <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: showPreview ? '15px' : '0' }}>
            <h4 style={{ margin: 0 }}>Preview iframe:</h4>
            <button
              onClick={() => setShowPreview(!showPreview)}
              style={{
                padding: '6px 12px',
                backgroundColor: '#f5f5f5',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              {showPreview ? '▼ Collapse' : '▶ Expand'}
            </button>
          </div>
          {showPreview && (
            <div
              style={{ border: '1px solid #ddd', borderRadius: '4px' }}
              dangerouslySetInnerHTML={{ __html: generateEmbedCode() }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GlowingBentoDemo;
