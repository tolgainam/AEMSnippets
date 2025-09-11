import React, { useState } from 'react';
import { GlassText } from '../components/GlassText';
import { typographyTokens, BrandName } from '../tokens/designTokens';

interface ConfigState {
  text: string;
  variant: 'glass' | 'glass-light' | 'glass-dark' | 'glass-heavy' | 'glass-subtle' | 'liquidGlass';
  fontSizeToken: string;
  fontFamily: string;
  textAlign: 'left' | 'center' | 'right';
  brand: BrandName;
  theme: 'light' | 'dark';
  rounded: 'default' | 'pill' | 'square' | 'rounded';
  animate: boolean;
  animationDuration: string;
  glassMode: 'text' | 'background';
}

const DemoApp: React.FC = () => {
  const [config, setConfig] = useState<ConfigState>({
    text: 'Glass Typography Effect',
    variant: 'glass',
    fontSizeToken: 'poster',
    fontFamily: '',
    textAlign: 'center',
    brand: 'iqos',
    theme: 'light',
    rounded: 'default',
    animate: false,
    animationDuration: '3s',
    glassMode: 'text',
  });

  const getResponsiveFontSizes = (fontSizeKey: string) => {
    const fontSizeData = typographyTokens.size[fontSizeKey as keyof typeof typographyTokens.size];
    if (typeof fontSizeData === 'object') {
      const mobile = fontSizeData['390px (XS)'] || '16px';
      const desktop = fontSizeData['1536px (XL)'] || mobile;
      return { mobile, desktop };
    }
    return { mobile: '16px', desktop: '16px' };
  };

  const generateEmbedUrl = () => {
    const params = new URLSearchParams({
      text: config.text,
      variant: config.variant,
      fontSizeToken: config.fontSizeToken,
      fontFamily: config.fontFamily,
      textAlign: config.textAlign,
      brand: config.brand,
      theme: config.theme,
      rounded: config.rounded,
      animate: config.animate.toString(),
      animationDuration: config.animationDuration,
    });

    return `${window.location.origin}/AEMSnippets/glassTypography/embed.html?${params.toString()}`;
  };

  const generateEmbedCode = () => {
    const embedUrl = generateEmbedUrl();
    return `<iframe src="${embedUrl}" width="600" height="300" frameborder="0" style="border: none;"></iframe>`;
  };

  const handleBrandChange = (brand: BrandName) => {
    setConfig(prev => ({
      ...prev,
      brand,
      fontFamily: '',
    }));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', fontFamily: 'Arial, sans-serif', color: 'white' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '40px', color: 'white' }}>
          AEM Snippets - Glass Typography
        </h1>
        
        <div style={{ 
          marginBottom: '40px', 
          textAlign: 'center', 
          minHeight: '200px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          background: `
            linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%), 
            linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%), 
            linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%), 
            linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%),
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
            linear-gradient(135deg, #667eea 0%, #764ba2 100%)
          `,
          backgroundSize: '30px 30px, 30px 30px, 30px 30px, 30px 30px, 200px 200px, 200px 200px, 100% 100%',
          backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px, 0 0, 0 0, 0 0',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: 'inset 0 0 100px rgba(255, 255, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <GlassText
            variant={config.variant}
            fontSizeToken={config.fontSizeToken}
            fontFamily={config.fontFamily}
            textAlign={config.textAlign}
            brand={config.brand}
            theme={config.theme}
            rounded={config.rounded}
            animate={config.animate}
            animationDuration={config.animationDuration}
            glassMode={config.glassMode}
          >
            {config.text}
          </GlassText>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', padding: '20px', borderRadius: '12px' }}>
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
              <label style={{ display: 'block', marginBottom: '5px' }}>Text:</label>
              <input
                type="text"
                value={config.text}
                onChange={(e) => setConfig(prev => ({ ...prev, text: e.target.value }))}
                style={{ width: '100%', padding: '8px', fontSize: '16px' }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Glass Variant:</label>
              <select
                value={config.variant}
                onChange={(e) => setConfig(prev => ({ ...prev, variant: e.target.value as ConfigState['variant'] }))}
                style={{ width: '100%', padding: '8px' }}
              >
                <option value="glass">Glass</option>
                <option value="glass-light">Glass Light</option>
                <option value="glass-dark">Glass Dark</option>
                <option value="glass-heavy">Glass Heavy</option>
                <option value="glass-subtle">Glass Subtle</option>
                <option value="liquidGlass">Liquid Glass</option>
              </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Font Size (Responsive):</label>
              <select
                value={config.fontSizeToken}
                onChange={(e) => setConfig(prev => ({ ...prev, fontSizeToken: e.target.value }))}
                style={{ width: '100%', padding: '8px' }}
              >
                {Object.keys(typographyTokens.size).map((key) => {
                  const { mobile, desktop } = getResponsiveFontSizes(key);
                  return (
                    <option key={key} value={key}>
                      {key.toUpperCase()} (📱{mobile} 💻{desktop})
                    </option>
                  );
                })}
              </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Rounded:</label>
              <select
                value={config.rounded}
                onChange={(e) => setConfig(prev => ({ ...prev, rounded: e.target.value as ConfigState['rounded'] }))}
                style={{ width: '100%', padding: '8px' }}
              >
                <option value="default">Default</option>
                <option value="rounded">Rounded</option>
                <option value="pill">Pill</option>
                <option value="square">Square</option>
              </select>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Text Alignment:</label>
              <select
                value={config.textAlign}
                onChange={(e) => setConfig(prev => ({ ...prev, textAlign: e.target.value as 'left' | 'center' | 'right' }))}
                style={{ width: '100%', padding: '8px' }}
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
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

          <div style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', padding: '20px', borderRadius: '12px' }}>
            <h3>Usage</h3>
            
            <div style={{ marginBottom: '30px' }}>
              <h4>As npm package:</h4>
              <pre style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', padding: '10px', borderRadius: '4px', overflow: 'auto', fontSize: '12px' }}>
{`npm install aem-snippets

import { GlassText } from 'aem-snippets/glassTypography';

<GlassText
  variant="${config.variant}"
  fontSizeToken="${config.fontSizeToken}"
  brand="${config.brand}"
  theme="${config.theme}"
  textAlign="${config.textAlign}"
  rounded="${config.rounded}"
  animate={${config.animate}}
  animationDuration="${config.animationDuration}"
>
  ${config.text}
</GlassText>`}
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
                style={{ 
                  marginTop: '10px', 
                  padding: '8px 16px', 
                  backgroundColor: '#007bff', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '4px', 
                  cursor: 'pointer' 
                }}
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
                style={{ 
                  marginTop: '10px', 
                  padding: '8px 16px', 
                  backgroundColor: '#28a745', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '4px', 
                  cursor: 'pointer' 
                }}
              >
                Copy AEM Embed URL
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoApp;