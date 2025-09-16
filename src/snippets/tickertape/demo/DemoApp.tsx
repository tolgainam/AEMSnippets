import React, { useState, useCallback, useEffect } from 'react';
import { Tickertape } from '../components/Tickertape';
import { BrandName } from '../../../tokens/designTokens';

interface TickertapeConfig {
  text: string;
  brand: BrandName;
  theme: 'light' | 'dark';
  fontSize: 'text-poster' | 'text-h1' | 'text-h2' | 'text-h3' | 'text-h4' | 'text-h5' | 'text-h6';
  speed: number;
  height: string;
  pauseOnHover: boolean;
  backgroundColor: string;
  backgroundGradient: string;
  backgroundImage: string;
  hasBorder: boolean;
  borderColor: string;
  textColor: string;
}

const TickertapeDemo: React.FC = () => {
  const [config, setConfig] = useState<TickertapeConfig>({
    text: 'Breaking News: This is a sample ticker tape message scrolling from right to left continuously.',
    brand: 'iqos' as BrandName,
    theme: 'light',
    fontSize: 'text-h6',
    speed: 50,
    height: '60px',
    pauseOnHover: true,
    backgroundColor: '',
    backgroundGradient: '',
    backgroundImage: '',
    hasBorder: false,
    borderColor: '#000000',
    textColor: ''
  });

  const [embedCode, setEmbedCode] = useState('');
  const [showEmbed, setShowEmbed] = useState(false);
  const [generatedSeed, setGeneratedSeed] = useState('');

  const brandOptions: BrandName[] = ['iqos', 'zyn', 'veev'];
  const fontSizeOptions = [
    { value: 'text-h6', label: 'Heading 6' },
    { value: 'text-h5', label: 'Heading 5' },
    { value: 'text-h4', label: 'Heading 4' },
    { value: 'text-h3', label: 'Heading 3' },
    { value: 'text-h2', label: 'Heading 2' },
    { value: 'text-h1', label: 'Heading 1' },
    { value: 'text-poster', label: 'Poster' }
  ];

  const heightOptions = [
    { value: '40px', label: 'Compact (40px)' },
    { value: '60px', label: 'Standard (60px)' },
    { value: '80px', label: 'Large (80px)' },
    { value: '100px', label: 'XL (100px)' }
  ];

  const handleConfigChange = (key: keyof TickertapeConfig, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  // Save configuration to URL seed
  const generateSeed = useCallback(() => {
    const configData = { config };
    const seed = btoa(JSON.stringify(configData));
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('seed', seed);
    return { url: currentUrl.toString(), seed };
  }, [config]);

  // Load configuration from URL seed
  const loadFromSeed = useCallback((seed: string) => {
    try {
      const configData = JSON.parse(atob(seed));
      if (configData.config) {
        setConfig(configData.config);
        return true;
      }
    } catch (error) {
      console.error('Failed to load configuration from seed:', error);
    }
    return false;
  }, []);

  // Check for seed in URL on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const seed = urlParams.get('seed');
    if (seed) {
      const loaded = loadFromSeed(seed);
      if (loaded) {
        console.log('Configuration loaded from URL seed');
      } else {
        console.warn('Invalid seed in URL');
      }
    }
  }, [loadFromSeed]);

  const generateEmbedCode = useCallback(() => {
    const params = new URLSearchParams();

    Object.entries(config).forEach(([key, value]) => {
      if (value !== '' && value !== null && value !== undefined) {
        params.append(key, String(value));
      }
    });

    const embedUrl = `${window.location.origin}${window.location.pathname.replace(/\/[^/]*$/, '')}/tickertape/embed.html?${params.toString()}`;

    const code = `<!-- Tickertape Embed -->
<iframe
  src="${embedUrl}"
  width="100%"
  height="${config.height}"
  frameBorder="0"
  style="border: none; border-radius: 8px;"
  title="Tickertape"
></iframe>`;

    setEmbedCode(code);
  }, [config]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('✅ Copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
      alert('❌ Failed to copy to clipboard');
    });
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Controls Panel */}
      <div style={{
        width: '400px',
        padding: '2rem',
        backgroundColor: '#f8f9fa',
        borderRight: '1px solid #e1e5e9',
        overflowY: 'auto',
        maxHeight: '100vh'
      }}>
        <h2 style={{ margin: '0 0 2rem 0', fontSize: '1.5rem', fontWeight: 'bold' }}>
          Tickertape
        </h2>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '600' }}>Content</h3>

          <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
            Ticker Text
            <textarea
              value={config.text}
              onChange={(e) => handleConfigChange('text', e.target.value)}
              style={{
                width: '100%',
                minHeight: '80px',
                marginTop: '0.5rem',
                padding: '0.5rem',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '0.875rem',
                resize: 'vertical'
              }}
              placeholder="Enter your ticker tape message..."
            />
          </label>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '600' }}>Styling</h3>

          <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
            Brand
            <select
              value={config.brand}
              onChange={(e) => handleConfigChange('brand', e.target.value)}
              style={{ width: '100%', marginTop: '0.5rem', padding: '0.5rem' }}
            >
              {brandOptions.map(brand => (
                <option key={brand} value={brand}>
                  {brand.toUpperCase()}
                </option>
              ))}
            </select>
          </label>

          <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
            Theme
            <select
              value={config.theme}
              onChange={(e) => handleConfigChange('theme', e.target.value)}
              style={{ width: '100%', marginTop: '0.5rem', padding: '0.5rem' }}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>

          <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
            Font Size
            <select
              value={config.fontSize}
              onChange={(e) => handleConfigChange('fontSize', e.target.value)}
              style={{ width: '100%', marginTop: '0.5rem', padding: '0.5rem' }}
            >
              {fontSizeOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
            Height
            <select
              value={config.height}
              onChange={(e) => handleConfigChange('height', e.target.value)}
              style={{ width: '100%', marginTop: '0.5rem', padding: '0.5rem' }}
            >
              {heightOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
            Text Color
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.5rem' }}>
              <input
                type="color"
                value={config.textColor || '#000000'}
                onChange={(e) => handleConfigChange('textColor', e.target.value)}
                style={{
                  width: '50px',
                  height: '40px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px'
                }}
              />
              <input
                type="text"
                value={config.textColor}
                onChange={(e) => handleConfigChange('textColor', e.target.value)}
                placeholder="Auto or #000000"
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '0.875rem'
                }}
              />
            </div>
          </label>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '600' }}>Background</h3>

          <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
            Background Color
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.5rem' }}>
              <input
                type="color"
                value={config.backgroundColor || '#ffffff'}
                onChange={(e) => handleConfigChange('backgroundColor', e.target.value)}
                style={{
                  width: '50px',
                  height: '40px',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px'
                }}
              />
              <input
                type="text"
                value={config.backgroundColor}
                onChange={(e) => handleConfigChange('backgroundColor', e.target.value)}
                placeholder="#ffffff or transparent"
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '0.875rem'
                }}
              />
            </div>
          </label>

          <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
            Background Gradient (overrides color)
            <input
              type="text"
              value={config.backgroundGradient}
              onChange={(e) => handleConfigChange('backgroundGradient', e.target.value)}
              placeholder="linear-gradient(45deg, #ff6b6b, #4ecdc4)"
              style={{
                width: '100%',
                marginTop: '0.5rem',
                padding: '0.5rem',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '0.875rem'
              }}
            />
          </label>

          <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
            Scrolling Image URL (replaces text with repeating images)
            <input
              type="text"
              value={config.backgroundImage}
              onChange={(e) => handleConfigChange('backgroundImage', e.target.value)}
              placeholder="https://example.com/image.jpg"
              style={{
                width: '100%',
                marginTop: '0.5rem',
                padding: '0.5rem',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '0.875rem'
              }}
            />
          </label>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '600' }}>Border</h3>

          <label style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1rem',
            fontSize: '0.875rem',
            cursor: 'pointer'
          }}>
            <input
              type="checkbox"
              checked={config.hasBorder}
              onChange={(e) => handleConfigChange('hasBorder', e.target.checked)}
              style={{ marginRight: '0.5rem' }}
            />
            Enable Border
          </label>

          {config.hasBorder && (
            <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
              Border Color
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.5rem' }}>
                <input
                  type="color"
                  value={config.borderColor}
                  onChange={(e) => handleConfigChange('borderColor', e.target.value)}
                  style={{
                    width: '50px',
                    height: '40px',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px'
                  }}
                />
                <input
                  type="text"
                  value={config.borderColor}
                  onChange={(e) => handleConfigChange('borderColor', e.target.value)}
                  placeholder="#000000"
                  style={{
                    flex: 1,
                    padding: '0.5rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    fontSize: '0.875rem'
                  }}
                />
              </div>
            </label>
          )}
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '600' }}>Animation</h3>

          <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
            Speed: {config.speed} px/s
            <input
              type="range"
              min="10"
              max="200"
              value={config.speed}
              onChange={(e) => handleConfigChange('speed', parseInt(e.target.value))}
              style={{ width: '100%', marginTop: '0.5rem' }}
            />
          </label>

          <label style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '1rem',
            fontSize: '0.875rem',
            cursor: 'pointer'
          }}>
            <input
              type="checkbox"
              checked={config.pauseOnHover}
              onChange={(e) => handleConfigChange('pauseOnHover', e.target.checked)}
              style={{ marginRight: '0.5rem' }}
            />
            Pause on Hover
          </label>
        </div>

        {/* Embed Code Generation */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '600' }}>Embed Code</h3>

          <button
            onClick={() => {
              generateEmbedCode();
              setShowEmbed(true);
            }}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '0.875rem',
              fontWeight: '500',
              cursor: 'pointer',
              marginBottom: '1rem'
            }}
          >
            🔗 Generate Embed Code
          </button>

          {showEmbed && (
            <div style={{
              border: '1px solid #e1e5e9',
              borderRadius: '6px',
              padding: '1rem',
              backgroundColor: '#f8f9fa'
            }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>
                Embed Code:
              </label>
              <textarea
                value={embedCode}
                readOnly
                style={{
                  width: '100%',
                  height: '120px',
                  padding: '0.5rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontFamily: 'monospace',
                  backgroundColor: 'white'
                }}
              />
              <button
                onClick={() => copyToClipboard(embedCode)}
                style={{
                  marginTop: '0.5rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  cursor: 'pointer'
                }}
              >
                📋 Copy Code
              </button>
            </div>
          )}
        </div>

        {/* Save/Load Configuration */}
        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #e1e5e9' }}>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '600' }}>Save & Load Configuration</h3>

          <div style={{ marginBottom: '1rem' }}>
            <button
              onClick={() => {
                const { url, seed } = generateSeed();
                setGeneratedSeed(seed);
                copyToClipboard(url);
              }}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                backgroundColor: '#17a2b8',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: 'pointer',
                marginBottom: '0.5rem'
              }}
            >
              🌱 Create Seed
            </button>
            <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0 0 1rem 0', lineHeight: '1.4' }}>
              Generate and copy a seed URL that contains all your current settings.
            </p>

            {generatedSeed && (
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>
                  Generated Seed:
                </label>
                <textarea
                  value={generatedSeed}
                  readOnly
                  style={{
                    width: '100%',
                    minHeight: '60px',
                    padding: '0.5rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontFamily: 'monospace',
                    backgroundColor: '#f9fafb',
                    resize: 'vertical'
                  }}
                />
              </div>
            )}
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>
              Load from URL or Seed:
            </label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="text"
                placeholder="Paste configuration URL or seed here..."
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '0.875rem'
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const input = e.currentTarget;
                    const value = input.value.trim();
                    if (value) {
                      let seed = value;
                      if (value.includes('seed=')) {
                        const urlParams = new URLSearchParams(value.split('?')[1] || '');
                        seed = urlParams.get('seed') || value;
                      }

                      const loaded = loadFromSeed(seed);
                      if (loaded) {
                        input.value = '';
                        alert('✅ Configuration loaded successfully!');
                      } else {
                        alert('❌ Invalid configuration data. Please check your URL or seed.');
                      }
                    }
                  }
                }}
              />
              <button
                onClick={(e) => {
                  const input = (e.currentTarget.previousElementSibling as HTMLInputElement);
                  const value = input.value.trim();
                  if (value) {
                    let seed = value;
                    if (value.includes('seed=')) {
                      const urlParams = new URLSearchParams(value.split('?')[1] || '');
                      seed = urlParams.get('seed') || value;
                    }

                    const loaded = loadFromSeed(seed);
                    if (loaded) {
                      input.value = '';
                      alert('✅ Configuration loaded successfully!');
                    } else {
                      alert('❌ Invalid configuration data. Please check your URL or seed.');
                    }
                  }
                }}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '0.875rem',
                  cursor: 'pointer'
                }}
              >
                Load
              </button>
            </div>
            <p style={{ fontSize: '0.75rem', color: '#6b7280', margin: '0.5rem 0 0 0', lineHeight: '1.4' }}>
              Press Enter or click Load to apply the configuration.
            </p>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div style={{ flex: 1, position: 'relative', minHeight: '100vh', overflow: 'auto', minWidth: 0 }}>
        <div style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          padding: '2rem',
          backgroundColor: 'white',
          borderBottom: '1px solid #e1e5e9'
        }}>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.25rem', fontWeight: '600' }}>
            Live Preview
          </h3>
          <Tickertape
            text={config.text}
            brand={config.brand}
            theme={config.theme}
            fontSize={config.fontSize}
            speed={config.speed}
            height={config.height}
            pauseOnHover={config.pauseOnHover}
            backgroundColor={config.backgroundColor}
            backgroundGradient={config.backgroundGradient}
            backgroundImage={config.backgroundImage}
            hasBorder={config.hasBorder}
            borderColor={config.borderColor}
            textColor={config.textColor}
          />
        </div>

        <div style={{ padding: '2rem', maxWidth: '100%', boxSizing: 'border-box' }}>
          <div style={{
            padding: '2rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            border: '1px solid #e1e5e9',
            maxWidth: '100%',
            boxSizing: 'border-box'
          }}>
            <h4 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '600' }}>
              Usage Example
            </h4>
            <pre style={{
              backgroundColor: 'white',
              padding: '1rem',
              borderRadius: '4px',
              overflow: 'auto',
              fontSize: '0.875rem',
              border: '1px solid #d1d5db',
              margin: 0,
              maxWidth: '100%',
              width: '100%',
              boxSizing: 'border-box',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word'
            }}>
{`<Tickertape
  text="${config.text.substring(0, 50)}..."
  brand="${config.brand}"
  theme="${config.theme}"
  fontSize="${config.fontSize}"
  speed={${config.speed}}
  height="${config.height}"
  pauseOnHover={${config.pauseOnHover}}
  ${config.backgroundColor ? `backgroundColor="${config.backgroundColor}"` : ''}
  ${config.backgroundGradient ? `backgroundGradient="${config.backgroundGradient}"` : ''}
  ${config.backgroundImage ? `backgroundImage="${config.backgroundImage}"` : ''}
  ${config.hasBorder ? `hasBorder={${config.hasBorder}}` : ''}
  ${config.hasBorder ? `borderColor="${config.borderColor}"` : ''}
  ${config.textColor ? `textColor="${config.textColor}"` : ''}
/>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TickertapeDemo;