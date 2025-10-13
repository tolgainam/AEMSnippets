import React, { useState } from 'react';
import { GlowingBento, BentoTile } from '../components/GlowingBento';
import { BrandName } from '../../../tokens/designTokens';

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

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#0a0014', minHeight: '100vh', color: '#ffffff' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>AEM Snippets - GlowingBento</h1>

      <div style={{ marginBottom: '40px', backgroundColor: '#1a0a2e', padding: '20px', borderRadius: '10px' }}>
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
        <div style={{ backgroundColor: '#1a0a2e', padding: '20px', borderRadius: '10px' }}>
          <h3>Global Configuration</h3>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Brand:</label>
            <select
              value={config.brand}
              onChange={(e) => setConfig(prev => ({ ...prev, brand: e.target.value as BrandName }))}
              style={{ width: '100%', padding: '8px', backgroundColor: '#2a1a3e', color: '#ffffff', border: '1px solid #392e4e', borderRadius: '4px' }}
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
              style={{ width: '100%', padding: '8px', backgroundColor: '#2a1a3e', color: '#ffffff', border: '1px solid #392e4e', borderRadius: '4px' }}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

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
              style={{ width: '100%', padding: '8px', backgroundColor: '#2a1a3e', color: '#ffffff', border: '1px solid #392e4e', borderRadius: '4px' }}
            />
            <small style={{ color: '#999', display: 'block', marginTop: '5px' }}>Format: R, G, B (e.g., 132, 0, 255)</small>
          </div>
        </div>

        <div style={{ backgroundColor: '#1a0a2e', padding: '20px', borderRadius: '10px' }}>
          <h3>Tile Configuration</h3>

          {tiles.map((tile) => (
            <div key={tile.id} style={{ marginBottom: '30px', padding: '15px', backgroundColor: '#2a1a3e', borderRadius: '8px' }}>
              <h4 style={{ marginTop: 0 }}>Tile {tile.id}: {tile.title}</h4>

              {editingTile === tile.id ? (
                <>
                  <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Label:</label>
                    <input
                      type="text"
                      value={tile.label}
                      onChange={(e) => updateTile(tile.id, { label: e.target.value })}
                      style={{ width: '100%', padding: '6px', backgroundColor: '#1a0a2e', color: '#ffffff', border: '1px solid #392e4e', borderRadius: '4px' }}
                    />
                  </div>

                  <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Title:</label>
                    <input
                      type="text"
                      value={tile.title}
                      onChange={(e) => updateTile(tile.id, { title: e.target.value })}
                      style={{ width: '100%', padding: '6px', backgroundColor: '#1a0a2e', color: '#ffffff', border: '1px solid #392e4e', borderRadius: '4px' }}
                    />
                  </div>

                  <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Description:</label>
                    <textarea
                      value={tile.description}
                      onChange={(e) => updateTile(tile.id, { description: e.target.value })}
                      style={{ width: '100%', padding: '6px', backgroundColor: '#1a0a2e', color: '#ffffff', border: '1px solid #392e4e', borderRadius: '4px', minHeight: '60px' }}
                    />
                  </div>

                  <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Background Color:</label>
                    <input
                      type="text"
                      value={tile.backgroundColor || ''}
                      onChange={(e) => updateTile(tile.id, { backgroundColor: e.target.value, backgroundImage: '', backgroundGradient: '' })}
                      placeholder="#060010"
                      style={{ width: '100%', padding: '6px', backgroundColor: '#1a0a2e', color: '#ffffff', border: '1px solid #392e4e', borderRadius: '4px' }}
                    />
                  </div>

                  <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Background Gradient:</label>
                    <input
                      type="text"
                      value={tile.backgroundGradient || ''}
                      onChange={(e) => updateTile(tile.id, { backgroundGradient: e.target.value, backgroundColor: '', backgroundImage: '' })}
                      placeholder="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                      style={{ width: '100%', padding: '6px', backgroundColor: '#1a0a2e', color: '#ffffff', border: '1px solid #392e4e', borderRadius: '4px' }}
                    />
                  </div>

                  <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontSize: '14px' }}>Background Image URL:</label>
                    <input
                      type="text"
                      value={tile.backgroundImage || ''}
                      onChange={(e) => updateTile(tile.id, { backgroundImage: e.target.value, backgroundColor: '', backgroundGradient: '' })}
                      placeholder="https://example.com/image.jpg"
                      style={{ width: '100%', padding: '6px', backgroundColor: '#1a0a2e', color: '#ffffff', border: '1px solid #392e4e', borderRadius: '4px' }}
                    />
                  </div>

                  <button
                    onClick={() => setEditingTile(null)}
                    style={{ padding: '6px 12px', backgroundColor: '#667eea', color: '#ffffff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
                  >
                    Done Editing
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setEditingTile(tile.id)}
                  style={{ padding: '6px 12px', backgroundColor: '#764ba2', color: '#ffffff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Edit Tile
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '40px', backgroundColor: '#1a0a2e', padding: '20px', borderRadius: '10px' }}>
        <h3>Usage</h3>

        <div style={{ marginBottom: '30px' }}>
          <h4>As npm package:</h4>
          <pre style={{ backgroundColor: '#2a1a3e', padding: '15px', borderRadius: '8px', overflow: 'auto', fontSize: '14px' }}>
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
            style={{ padding: '8px 16px', backgroundColor: '#667eea', color: '#ffffff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
          >
            Copy Code
          </button>
        </div>

        <div>
          <h4>As iframe embed:</h4>
          <pre style={{ backgroundColor: '#2a1a3e', padding: '15px', borderRadius: '8px', overflow: 'auto', fontSize: '14px' }}>
            {generateEmbedCode()}
          </pre>
          <button
            onClick={() => copyToClipboard(generateEmbedCode())}
            style={{ padding: '8px 16px', backgroundColor: '#667eea', color: '#ffffff', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
          >
            Copy Embed Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlowingBentoDemo;
