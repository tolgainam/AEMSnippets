import React, { useState } from 'react';
import { GradientText } from '../components/GradientText';
import { Brand, typographyTokens, BrandName } from '../tokens/designTokens';

interface ConfigState {
  text: string;
  colors: string[];
  direction: string;
  fontSize: string;
  fontSizeToken?: string;
  fontFamily: string;
  animate: boolean;
  animationDuration: string;
  brand: BrandName;
}

const DemoApp: React.FC = () => {
  const [config, setConfig] = useState<ConfigState>({
    text: 'Beautiful Gradient Text',
    colors: [Brand.iqos.primary.main, Brand.iqos.tints.dark85, Brand.iqos.primary.dark],
    direction: 'to right',
    fontSize: '40px',
    fontSizeToken: 'poster',
    fontFamily: '',
    animate: false,
    animationDuration: '3s',
    brand: 'iqos',
  });

  const [newColor, setNewColor] = useState('#ff6b6b');
  const [colorInputType, setColorInputType] = useState<'brand' | 'hex'>('brand');
  const [selectedBrandColor, setSelectedBrandColor] = useState('');

  const getBrandColors = (brand: BrandName) => {
    const brandData = Brand[brand];
    return {
      ...brandData.primary,
      ...brandData.tints,
      ...brandData.global,
    };
  };

  const getBreakpointFontSize = (fontSizeKey: string, breakpoint: string = '390px (XS)') => {
    const fontSizeData = typographyTokens.size[fontSizeKey as keyof typeof typographyTokens.size];
    if (typeof fontSizeData === 'object' && fontSizeData[breakpoint as keyof typeof fontSizeData]) {
      return fontSizeData[breakpoint as keyof typeof fontSizeData];
    }
    return '16px';
  };

  const getResponsiveFontSizes = (fontSizeKey: string) => {
    const fontSizeData = typographyTokens.size[fontSizeKey as keyof typeof typographyTokens.size];
    if (typeof fontSizeData === 'object') {
      const mobile = fontSizeData['390px (XS)'] || '16px';
      const desktop = fontSizeData['1536px (XL)'] || mobile;
      return { mobile, desktop };
    }
    return { mobile: '16px', desktop: '16px' };
  };

  const generateEmbedCode = () => {
    const params = new URLSearchParams({
      text: config.text,
      colors: JSON.stringify(config.colors),
      direction: config.direction,
      fontSize: config.fontSize,
      ...(config.fontSizeToken && { fontSizeToken: config.fontSizeToken }),
      fontFamily: config.fontFamily,
      animate: config.animate.toString(),
      animationDuration: config.animationDuration,
      brand: config.brand,
    });

    const embedUrl = `${window.location.origin}/colorTypography/embed.html?${params.toString()}`;
    
    return `<iframe src="${embedUrl}" width="600" height="200" frameborder="0" style="border: none;"></iframe>`;
  };

  const handleBrandChange = (brand: BrandName) => {
    const brandData = Brand[brand];
    setConfig(prev => ({
      ...prev,
      brand,
      fontFamily: '',
      colors: [brandData.primary.main, brandData.tints.dark85, brandData.primary.dark],
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
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Gradient Typography Library</h1>
      
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <GradientText
          colors={config.colors}
          direction={config.direction}
          fontSize={config.fontSize}
          fontSizeToken={config.fontSizeToken}
          fontFamily={config.fontFamily}
          animate={config.animate}
          animationDuration={config.animationDuration}
          brand={config.brand}
        >
          {config.text}
        </GradientText>
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
            <label style={{ display: 'block', marginBottom: '5px' }}>Text:</label>
            <input
              type="text"
              value={config.text}
              onChange={(e) => setConfig(prev => ({ ...prev, text: e.target.value }))}
              style={{ width: '100%', padding: '8px', fontSize: '16px' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Colors:</label>
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
            <label style={{ display: 'block', marginBottom: '5px' }}>Direction:</label>
            <select
              value={config.direction}
              onChange={(e) => setConfig(prev => ({ ...prev, direction: e.target.value }))}
              style={{ width: '100%', padding: '8px' }}
            >
              <option value="to right">To Right</option>
              <option value="to left">To Left</option>
              <option value="to bottom">To Bottom</option>
              <option value="to top">To Top</option>
              <option value="45deg">45 degrees</option>
              <option value="135deg">135 degrees</option>
            </select>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Font Size (Responsive):</label>
            <select
              value={config.fontSizeToken || 'custom'}
              onChange={(e) => {
                if (e.target.value === 'custom') {
                  setConfig(prev => ({ ...prev, fontSizeToken: undefined }));
                } else {
                  const mobileSize = getBreakpointFontSize(e.target.value, '390px (XS)');
                  setConfig(prev => ({ 
                    ...prev, 
                    fontSize: mobileSize,
                    fontSizeToken: e.target.value 
                  }));
                }
              }}
              style={{ width: '100%', padding: '8px' }}
            >
              <option value="custom">Custom</option>
              {Object.keys(typographyTokens.size).map((key) => {
                const { mobile, desktop } = getResponsiveFontSizes(key);
                return (
                  <option key={key} value={key}>
                    {key.toUpperCase()} (📱{mobile} 💻{desktop})
                  </option>
                );
              })}
            </select>
            {!config.fontSizeToken && (
              <input
                type="text"
                value={config.fontSize}
                onChange={(e) => setConfig(prev => ({ ...prev, fontSize: e.target.value }))}
                placeholder="e.g., 2rem, 24px"
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            )}
          </div>


          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                checked={config.animate}
                onChange={(e) => setConfig(prev => ({ ...prev, animate: e.target.checked }))}
                style={{ marginRight: '8px' }}
              />
              Animate
            </label>
          </div>

          {config.animate && (
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Animation Duration:</label>
              <input
                type="text"
                value={config.animationDuration}
                onChange={(e) => setConfig(prev => ({ ...prev, animationDuration: e.target.value }))}
                placeholder="e.g., 3s, 2000ms"
                style={{ width: '100%', padding: '8px' }}
              />
            </div>
          )}
        </div>

        <div>
          <h3>Usage</h3>
          
          <div style={{ marginBottom: '30px' }}>
            <h4>As npm package:</h4>
            <pre style={{ backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '4px', overflow: 'auto' }}>
{`npm install gradient-typography

import { GradientText } from 'gradient-typography';

<GradientText
  colors={${JSON.stringify(config.colors)}}
  direction="${config.direction}"
  fontSize="${config.fontSize}"
  brand="${config.brand}"
  animate={${config.animate}}
  animationDuration="${config.animationDuration}"
>
  ${config.text}
</GradientText>`}
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

export default DemoApp;