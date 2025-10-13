import React, { useState } from 'react';
import { WaveGen } from '../components/WaveGen';
import { Brand, BrandName } from '../../../tokens/designTokens';

interface ConfigState {
  amplitude: number;
  colors: string[];
  height: string;
  backgroundColor: string;
  backgroundGradient: string;
  opacity: number;
  brand: BrandName;
  theme: 'light' | 'dark';
  turbulence: number;
  amplitudeVariation: number;
  lineWidth: number;
  speed: number;
}

const WaveGenDemo: React.FC = () => {
  const [config, setConfig] = useState<ConfigState>({
    amplitude: 20,
    colors: ['#FF6AC6', '#436EDB', '#FF6AC6'],
    height: '200px',
    backgroundColor: '',
    backgroundGradient: '',
    opacity: 1,
    brand: 'iqos',
    theme: 'light',
    turbulence: 0,
    amplitudeVariation: 0,
    lineWidth: 2,
    speed: 1,
  });

  const [newColor, setNewColor] = useState('#FF6AC6');
  const [colorInputType, setColorInputType] = useState<'brand' | 'hex'>('hex');
  const [selectedBrandColor, setSelectedBrandColor] = useState('');

  const getBrandColors = (brand: BrandName) => {
    const brandData = Brand[brand];
    return {
      ...brandData.primary,
      ...brandData.tints,
      ...brandData.global,
    };
  };

  const generateEmbedUrl = () => {
    const params = new URLSearchParams({
      amplitude: config.amplitude.toString(),
      colors: JSON.stringify(config.colors),
      height: config.height,
      backgroundColor: config.backgroundColor,
      backgroundGradient: config.backgroundGradient,
      opacity: config.opacity.toString(),
      brand: config.brand,
      theme: config.theme,
      turbulence: config.turbulence.toString(),
      amplitudeVariation: config.amplitudeVariation.toString(),
      lineWidth: config.lineWidth.toString(),
      speed: config.speed.toString(),
    });

    return `${window.location.origin}/AEMSnippets/waveGen/embed.html?${params.toString()}`;
  };

  const generateEmbedCode = () => {
    const embedUrl = generateEmbedUrl();
    const height = parseInt(config.height) || 200;
    return `<iframe src="${embedUrl}" width="100%" height="${height}" frameborder="0" style="border: none;"></iframe>`;
  };

  const handleBrandChange = (brand: BrandName) => {
    setConfig(prev => ({
      ...prev,
      brand,
    }));
  };

  const addBrandColor = () => {
    if (selectedBrandColor) {
      const brandColors = getBrandColors(config.brand);
      const colorValue = brandColors[selectedBrandColor as keyof typeof brandColors];
      if (colorValue) {
        setConfig(prev => ({
          ...prev,
          colors: [...prev.colors, colorValue]
        }));
      }
    }
  };

  const addHexColor = () => {
    setConfig(prev => ({
      ...prev,
      colors: [...prev.colors, newColor]
    }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const addColor = () => {
    if (colorInputType === 'brand') {
      addBrandColor();
    } else {
      addHexColor();
    }
  };

  const removeColor = (index: number) => {
    setConfig(prev => ({
      ...prev,
      colors: prev.colors.filter((_, i) => i !== index)
    }));
  };

  const updateColor = (index: number, color: string) => {
    setConfig(prev => ({
      ...prev,
      colors: prev.colors.map((c, i) => i === index ? color : c)
    }));
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>AEM Snippets - WaveGen</h1>

      <div style={{ marginBottom: '40px' }}>
        <WaveGen
          amplitude={config.amplitude}
          colors={config.colors}
          height={config.height}
          backgroundColor={config.backgroundColor}
          backgroundGradient={config.backgroundGradient}
          opacity={config.opacity}
          brand={config.brand}
          theme={config.theme}
          turbulence={config.turbulence}
          amplitudeVariation={config.amplitudeVariation}
          lineWidth={config.lineWidth}
          speed={config.speed}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <div>
          <h3>Configuration</h3>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Brand:</label>
            <select
              value={config.brand}
              onChange={(e) => handleBrandChange(e.target.value as BrandName)}
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
            <label style={{ display: 'block', marginBottom: '5px' }}>Wave Amplitude:</label>
            <input
              type="range"
              min="10"
              max="100"
              value={config.amplitude}
              onChange={(e) => setConfig(prev => ({ ...prev, amplitude: parseInt(e.target.value) }))}
              style={{ width: '100%' }}
            />
            <span>{config.amplitude}</span>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Wave Colors:</label>
            {config.colors.map((color, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                <input
                  type="color"
                  value={color}
                  onChange={(e) => updateColor(index, e.target.value)}
                  style={{ marginRight: '10px' }}
                />
                <input
                  type="text"
                  value={color}
                  onChange={(e) => updateColor(index, e.target.value)}
                  style={{ flex: 1, padding: '4px', marginRight: '10px' }}
                />
                <button onClick={() => removeColor(index)} style={{ padding: '4px 8px' }}>Remove</button>
              </div>
            ))}
            <div style={{ marginTop: '10px' }}>
              <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                  <input
                    type="radio"
                    name="colorInputType"
                    value="brand"
                    checked={colorInputType === 'brand'}
                    onChange={(e) => setColorInputType(e.target.value as 'brand' | 'hex')}
                    style={{ marginRight: '5px' }}
                  />
                  Brand Colors
                </label>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="radio"
                    name="colorInputType"
                    value="hex"
                    checked={colorInputType === 'hex'}
                    onChange={(e) => setColorInputType(e.target.value as 'brand' | 'hex')}
                    style={{ marginRight: '5px' }}
                  />
                  HEX Color
                </label>
              </div>

              {colorInputType === 'brand' ? (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <select
                    value={selectedBrandColor}
                    onChange={(e) => setSelectedBrandColor(e.target.value)}
                    style={{ flex: 1, padding: '4px', marginRight: '10px' }}
                  >
                    <option value="">Select a brand color...</option>
                    {Object.entries(getBrandColors(config.brand)).map(([key, color]) => (
                      <option key={key} value={key}>
                        {key.charAt(0).toUpperCase() + key.slice(1)} ({color})
                      </option>
                    ))}
                  </select>
                  <button onClick={addColor} style={{ padding: '4px 8px' }}>Add</button>
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="color"
                    value={newColor}
                    onChange={(e) => setNewColor(e.target.value)}
                    style={{ marginRight: '10px' }}
                  />
                  <input
                    type="text"
                    value={newColor}
                    onChange={(e) => setNewColor(e.target.value)}
                    style={{ flex: 1, padding: '4px', marginRight: '10px' }}
                  />
                  <button onClick={addColor} style={{ padding: '4px 8px' }}>Add</button>
                </div>
              )}
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Height:</label>
            <input
              type="text"
              value={config.height}
              onChange={(e) => setConfig(prev => ({ ...prev, height: e.target.value }))}
              placeholder="e.g., 200px, 50vh"
              style={{ width: '100%', padding: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Background Color:</label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="color"
                value={config.backgroundColor || '#ffffff'}
                onChange={(e) => setConfig(prev => ({ ...prev, backgroundColor: e.target.value, backgroundGradient: '' }))}
                style={{ marginRight: '10px' }}
              />
              <input
                type="text"
                value={config.backgroundColor}
                onChange={(e) => setConfig(prev => ({ ...prev, backgroundColor: e.target.value, backgroundGradient: '' }))}
                placeholder="e.g., #ffffff or transparent"
                style={{ flex: 1, padding: '8px' }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Background Gradient (overrides color):</label>
            <input
              type="text"
              value={config.backgroundGradient}
              onChange={(e) => setConfig(prev => ({ ...prev, backgroundGradient: e.target.value }))}
              placeholder="e.g., linear-gradient(to right, #ff6b6b, #4ecdc4)"
              style={{ width: '100%', padding: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Wave Opacity:</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={config.opacity}
              onChange={(e) => setConfig(prev => ({ ...prev, opacity: parseFloat(e.target.value) }))}
              style={{ width: '100%' }}
            />
            <span>{config.opacity}</span>
          </div>

          <hr style={{ margin: '30px 0', border: 'none', borderTop: '2px solid #e0e0e0' }} />

          <h4 style={{ marginBottom: '15px', color: '#007bff' }}>Enhanced Effects</h4>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Line Thickness:</label>
            <input
              type="range"
              min="1"
              max="10"
              value={config.lineWidth}
              onChange={(e) => setConfig(prev => ({ ...prev, lineWidth: parseInt(e.target.value) }))}
              style={{ width: '100%' }}
            />
            <span>{config.lineWidth}px</span>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Turbulence (noise/distortion):</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={config.turbulence}
              onChange={(e) => setConfig(prev => ({ ...prev, turbulence: parseFloat(e.target.value) }))}
              style={{ width: '100%' }}
            />
            <span>{config.turbulence.toFixed(2)}</span>
            <small style={{ display: 'block', color: '#666', marginTop: '5px' }}>
              Adds random noise to create chaotic wave patterns
            </small>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Amplitude Variation (breathing):</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={config.amplitudeVariation}
              onChange={(e) => setConfig(prev => ({ ...prev, amplitudeVariation: parseFloat(e.target.value) }))}
              style={{ width: '100%' }}
            />
            <span>{config.amplitudeVariation.toFixed(2)}</span>
            <small style={{ display: 'block', color: '#666', marginTop: '5px' }}>
              Makes waves pulsate/breathe in and out
            </small>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Animation Speed:</label>
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={config.speed}
              onChange={(e) => setConfig(prev => ({ ...prev, speed: parseFloat(e.target.value) }))}
              style={{ width: '100%' }}
            />
            <span>{config.speed.toFixed(1)}x</span>
            <small style={{ display: 'block', color: '#666', marginTop: '5px' }}>
              Controls how fast the waves animate
            </small>
          </div>
        </div>

        <div>
          <h3>Usage</h3>

          <div style={{ marginBottom: '30px' }}>
            <h4>As npm package:</h4>
            <pre style={{ backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '4px', overflow: 'auto' }}>
{`npm install aem-snippets

import { WaveGen } from 'aem-snippets/waveGen';

<WaveGen
  amplitude={${config.amplitude}}
  colors={${JSON.stringify(config.colors)}}
  height="${config.height}"
  backgroundColor="${config.backgroundColor}"
  backgroundGradient="${config.backgroundGradient}"
  opacity={${config.opacity}}
  brand="${config.brand}"
  theme="${config.theme}"
  turbulence={${config.turbulence}}
  amplitudeVariation={${config.amplitudeVariation}}
  lineWidth={${config.lineWidth}}
  speed={${config.speed}}
/>`}
            </pre>
          </div>

          <div>
            <h4>As iframe embed:</h4>
            <textarea
              value={generateEmbedCode()}
              readOnly
              style={{ width: '100%', height: '100px', padding: '10px', fontFamily: 'monospace', fontSize: '12px' }}
            />
            <button
              onClick={() => copyToClipboard(generateEmbedCode())}
              style={{ marginTop: '10px', padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Copy Embed Code
            </button>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h4>AEM Embed:</h4>
            <textarea
              value={generateEmbedUrl()}
              readOnly
              style={{ width: '100%', height: '60px', padding: '10px', fontFamily: 'monospace', fontSize: '12px' }}
            />
            <button
              onClick={() => copyToClipboard(generateEmbedUrl())}
              style={{ marginTop: '10px', padding: '8px 16px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Copy AEM Embed URL
            </button>
          </div>

          <div style={{ marginTop: '30px' }}>
            <h4>Preview iframe:</h4>
            <div
              style={{ border: '1px solid #ddd', borderRadius: '4px' }}
              dangerouslySetInnerHTML={{ __html: generateEmbedCode() }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaveGenDemo;
