import React, { useState, useCallback, useEffect } from 'react';
import { ContentStack, ContentStackItem } from '../components/ContentStack';
import { Brand, BrandName } from '../../../tokens/designTokens';

interface CardData {
  title: string;
  content: string;
  backgroundImage: string;
  backgroundPosition: 'top' | 'left' | 'right' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
  backgroundSize: 'cover' | 'contain';
  hasBackgroundImage: boolean;
  hasButton: boolean;
  buttonText: string;
  buttonUrl: string;
}

const ContentStackDemo: React.FC = () => {
  const [config, setConfig] = useState({
    brand: 'iqos' as BrandName,
    height: '100vh',
    cardTheme: 'default'
  });

  const [cards, setCards] = useState<CardData[]>([
    {
      title: "Welcome to Content Stack",
      content: "This is a scroll-activated content stack component that creates engaging, layered animations as users scroll through your content. Perfect for storytelling and progressive disclosure.",
      backgroundImage: "",
      backgroundPosition: "center",
      backgroundSize: "cover",
      hasBackgroundImage: false,
      hasButton: true,
      buttonText: "Get Started",
      buttonUrl: "https://example.com"
    },
    {
      title: "Smooth Animations",
      content: "Each card smoothly scales and positions as you scroll, creating a dynamic stacking effect. The animation is performance-optimized and works great on both desktop and mobile devices.",
      backgroundImage: "",
      backgroundPosition: "center",
      backgroundSize: "cover",
      hasBackgroundImage: false,
      hasButton: false,
      buttonText: "Learn More",
      buttonUrl: "#"
    },
    {
      title: "Customizable Design",
      content: "Customize the appearance with different themes, brand colors, and spacing options. The component integrates seamlessly with your design system and brand tokens.",
      backgroundImage: "",
      backgroundPosition: "center",
      backgroundSize: "cover",
      hasBackgroundImage: false,
      hasButton: true,
      buttonText: "Customize",
      buttonUrl: "https://example.com/customize"
    },
    {
      title: "Brand Integration",
      content: "Built with brand token support for consistent styling across your applications. Switch between different brand themes to match your visual identity.",
      backgroundImage: "",
      backgroundPosition: "center",
      backgroundSize: "cover",
      hasBackgroundImage: false,
      hasButton: false,
      buttonText: "View Brands",
      buttonUrl: "#"
    },
    {
      title: "Performance Focused",
      content: "Optimized for smooth scrolling performance with proper transform and filter management. Uses hardware acceleration and efficient update cycles.",
      backgroundImage: "",
      backgroundPosition: "center",
      backgroundSize: "cover",
      hasBackgroundImage: false,
      hasButton: true,
      buttonText: "See Performance",
      buttonUrl: "https://example.com/performance"
    }
  ]);

  const [embedCode, setEmbedCode] = useState('');
  const [showEmbed, setShowEmbed] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const [generatedSeed, setGeneratedSeed] = useState('');

  const handleConfigChange = (key: string, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const handleCardChange = (index: number, field: keyof CardData, value: any) => {
    setCards(prev => prev.map((card, i) =>
      i === index ? { ...card, [field]: value } : card
    ));
  };

  // Default card template for new cards
  const createNewCard = (): CardData => ({
    title: `New Card ${cards.length + 1}`,
    content: "Add your content here. Customize this card to tell your story with engaging text that connects with your audience.",
    backgroundImage: "",
    backgroundPosition: "center",
    backgroundSize: "cover",
    hasBackgroundImage: false,
    hasButton: false,
    buttonText: "Learn More",
    buttonUrl: "#"
  });

  const addCard = () => {
    if (cards.length < 6) {
      setCards(prev => [...prev, createNewCard()]);
    }
  };

  const removeCard = () => {
    if (cards.length > 3) {
      setCards(prev => prev.slice(0, -1));
      // Reset active card if it was the last one
      if (activeCardIndex !== null && activeCardIndex >= cards.length - 1) {
        setActiveCardIndex(cards.length > 1 ? cards.length - 2 : null);
      }
    }
  };

  const handleStackComplete = useCallback(() => {
    console.log('Stack scrolling completed!');
  }, []);

  // Save configuration to URL seed
  const generateSeed = useCallback(() => {
    const configData = {
      config,
      cards
    };
    const seed = btoa(JSON.stringify(configData));
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('seed', seed);
    return { url: currentUrl.toString(), seed };
  }, [config, cards]);

  // Load configuration from URL seed
  const loadFromSeed = useCallback((seed: string) => {
    try {
      const configData = JSON.parse(atob(seed));
      if (configData.config && configData.cards) {
        setConfig(configData.config);
        setCards(configData.cards);
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
      if (key !== 'height') { // height is handled separately in embed
        params.set(key, String(value));
      }
    });

    // Add card data to URL params
    params.set('cardsData', JSON.stringify(cards));

    const embedUrl = `${window.location.origin}${window.location.pathname.replace(/\/[^/]*$/, '')}/contentStack/embed.html?${params.toString()}`;

    const code = `<!-- Content Stack Embed -->
<iframe
  src="${embedUrl}"
  width="100%"
  height="600"
  frameBorder="0"
  style="border: none; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);"
  title="Content Stack"
></iframe>`;

    setEmbedCode(code);
    setShowEmbed(true);
  }, [config, cards]);

  const generateEmbedUrl = useCallback(() => {
    const params = new URLSearchParams();

    Object.entries(config).forEach(([key, value]) => {
      if (key !== 'height') { // height is handled separately in embed
        params.set(key, String(value));
      }
    });

    // Add card data to URL params
    params.set('cardsData', JSON.stringify(cards));

    return `${window.location.origin}/AEMSnippets/contentStack/embed.html?${params.toString()}`;
  }, [config, cards]);

  const copyToClipboard = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
  }, []);


  const brandOptions = Object.keys(Brand) as BrandName[];

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Controls Panel */}
      <div style={{
        width: '350px',
        padding: '2rem',
        borderRight: '1px solid #e1e5e9',
        overflowY: 'auto',
        background: '#fafbfc'
      }}>
        <h2 style={{ margin: '0 0 2rem 0', fontSize: '1.5rem', fontWeight: 'bold' }}>
          Content Stack
        </h2>


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
            Card Theme
            <select
              value={config.cardTheme}
              onChange={(e) => handleConfigChange('cardTheme', e.target.value)}
              style={{ width: '100%', marginTop: '0.5rem', padding: '0.5rem' }}
            >
              <option value="default">Default Light</option>
              <option value="dark">Dark</option>
              <option value="accent">Accent</option>
            </select>
          </label>

          <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
            Height
            <select
              value={config.height}
              onChange={(e) => handleConfigChange('height', e.target.value)}
              style={{ width: '100%', marginTop: '0.5rem', padding: '0.5rem' }}
            >
              <option value="100vh">Full Height (100vh)</option>
              <option value="600px">600px</option>
              <option value="800px">800px</option>
              <option value="1000px">1000px</option>
            </select>
          </label>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '600' }}>Card Customization</h3>

          {/* Card Count Controls */}
          <div style={{
            marginBottom: '1rem',
            padding: '1rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '6px',
            border: '1px solid #e1e5e9'
          }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>
              Number of Cards: {cards.length} (Min: 3, Max: 6)
            </label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={removeCard}
                disabled={cards.length <= 3}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: cards.length <= 3 ? '#e9ecef' : '#dc3545',
                  color: cards.length <= 3 ? '#6c757d' : 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '0.875rem',
                  cursor: cards.length <= 3 ? 'not-allowed' : 'pointer'
                }}
              >
                ➖ Remove Card
              </button>
              <button
                onClick={addCard}
                disabled={cards.length >= 6}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: cards.length >= 6 ? '#e9ecef' : '#28a745',
                  color: cards.length >= 6 ? '#6c757d' : 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '0.875rem',
                  cursor: cards.length >= 6 ? 'not-allowed' : 'pointer'
                }}
              >
                ➕ Add Card
              </button>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>
              Select Card to Edit:
            </label>
            <select
              value={activeCardIndex ?? ''}
              onChange={(e) => setActiveCardIndex(e.target.value ? parseInt(e.target.value) : null)}
              style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
            >
              <option value="">Choose a card...</option>
              {cards.map((card, index) => (
                <option key={index} value={index}>
                  Card {index + 1}: {card.title.substring(0, 20)}...
                </option>
              ))}
            </select>
          </div>

          {activeCardIndex !== null && (
            <div style={{
              border: '1px solid #e1e5e9',
              borderRadius: '6px',
              padding: '1rem',
              backgroundColor: '#f8f9fa'
            }}>
              <h4 style={{ margin: '0 0 1rem 0', fontSize: '0.9rem', fontWeight: '600' }}>
                Editing Card {activeCardIndex + 1}
              </h4>

              <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
                Title:
                <input
                  type="text"
                  value={cards[activeCardIndex].title}
                  onChange={(e) => handleCardChange(activeCardIndex, 'title', e.target.value)}
                  style={{
                    width: '100%',
                    marginTop: '0.5rem',
                    padding: '0.5rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px'
                  }}
                />
              </label>

              <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
                Content:
                <textarea
                  value={cards[activeCardIndex].content}
                  onChange={(e) => handleCardChange(activeCardIndex, 'content', e.target.value)}
                  rows={3}
                  style={{
                    width: '100%',
                    marginTop: '0.5rem',
                    padding: '0.5rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    resize: 'vertical'
                  }}
                />
              </label>

              <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
                <input
                  type="checkbox"
                  checked={cards[activeCardIndex].hasBackgroundImage}
                  onChange={(e) => handleCardChange(activeCardIndex, 'hasBackgroundImage', e.target.checked)}
                  style={{ marginRight: '0.5rem' }}
                />
                Enable Background Image
              </label>

              {cards[activeCardIndex].hasBackgroundImage && (
                <>
                  <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
                    Background Image URL:
                    <input
                      type="url"
                      value={cards[activeCardIndex].backgroundImage}
                      onChange={(e) => handleCardChange(activeCardIndex, 'backgroundImage', e.target.value)}
                      placeholder="https://example.com/image.jpg"
                      style={{
                        width: '100%',
                        marginTop: '0.5rem',
                        padding: '0.5rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px'
                      }}
                    />
                  </label>

                  <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
                    Background Position:
                    <select
                      value={cards[activeCardIndex].backgroundPosition}
                      onChange={(e) => handleCardChange(activeCardIndex, 'backgroundPosition', e.target.value as any)}
                      style={{
                        width: '100%',
                        marginTop: '0.5rem',
                        padding: '0.5rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px'
                      }}
                    >
                      <option value="center">Center</option>
                      <option value="top">Top</option>
                      <option value="bottom">Bottom</option>
                      <option value="left">Left</option>
                      <option value="right">Right</option>
                      <option value="topleft">Top Left</option>
                      <option value="topright">Top Right</option>
                      <option value="bottomleft">Bottom Left</option>
                      <option value="bottomright">Bottom Right</option>
                    </select>
                  </label>

                  <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
                    Background Size:
                    <select
                      value={cards[activeCardIndex].backgroundSize}
                      onChange={(e) => handleCardChange(activeCardIndex, 'backgroundSize', e.target.value as any)}
                      style={{
                        width: '100%',
                        marginTop: '0.5rem',
                        padding: '0.5rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px'
                      }}
                    >
                      <option value="cover">Cover (fill entire area)</option>
                      <option value="contain">Contain (fit entire image)</option>
                    </select>
                  </label>
                </>
              )}

              <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
                <input
                  type="checkbox"
                  checked={cards[activeCardIndex].hasButton}
                  onChange={(e) => handleCardChange(activeCardIndex, 'hasButton', e.target.checked)}
                  style={{ marginRight: '0.5rem' }}
                />
                Enable Button
              </label>

              {cards[activeCardIndex].hasButton && (
                <>
                  <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
                    Button Text:
                    <input
                      type="text"
                      value={cards[activeCardIndex].buttonText}
                      onChange={(e) => handleCardChange(activeCardIndex, 'buttonText', e.target.value)}
                      style={{
                        width: '100%',
                        marginTop: '0.5rem',
                        padding: '0.5rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px'
                      }}
                    />
                  </label>

                  <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
                    Button URL:
                    <input
                      type="url"
                      value={cards[activeCardIndex].buttonUrl}
                      onChange={(e) => handleCardChange(activeCardIndex, 'buttonUrl', e.target.value)}
                      placeholder="https://example.com"
                      style={{
                        width: '100%',
                        marginTop: '0.5rem',
                        padding: '0.5rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px'
                      }}
                    />
                  </label>
                </>
              )}
            </div>
          )}
        </div>

        <div style={{ borderTop: '1px solid #e1e5e9', paddingTop: '1rem' }}>
          <button
            onClick={generateEmbedCode}
            style={{
              width: '100%',
              padding: '0.75rem',
              background: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: 'pointer',
              marginBottom: '1rem'
            }}
          >
            Generate Embed Code
          </button>

          {showEmbed && (
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>
                Embed Code:
              </label>
              <div style={{ position: 'relative' }}>
                <textarea
                  value={embedCode}
                  readOnly
                  style={{
                    width: '100%',
                    height: '120px',
                    padding: '0.75rem',
                    fontSize: '0.75rem',
                    fontFamily: 'monospace',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    resize: 'none'
                  }}
                />
                <button
                  onClick={() => copyToClipboard(embedCode)}
                  style={{
                    position: 'absolute',
                    top: '0.5rem',
                    right: '0.5rem',
                    padding: '0.25rem 0.5rem',
                    background: '#f8f9fa',
                    border: '1px solid #d1d5db',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    cursor: 'pointer'
                  }}
                >
                  Copy
                </button>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>
                  AEM Embed URL:
                </label>
                <div style={{ position: 'relative' }}>
                  <textarea
                    value={generateEmbedUrl()}
                    readOnly
                    style={{
                      width: '100%',
                      height: '80px',
                      padding: '0.75rem',
                      fontSize: '0.75rem',
                      fontFamily: 'monospace',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      resize: 'none'
                    }}
                  />
                  <button
                    onClick={() => copyToClipboard(generateEmbedUrl())}
                    style={{
                      position: 'absolute',
                      top: '0.5rem',
                      right: '0.5rem',
                      padding: '0.25rem 0.5rem',
                      background: '#28a745',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      cursor: 'pointer'
                    }}
                  >
                    Copy AEM URL
                  </button>
                </div>
              </div>
            </div>
          )}

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
                Generate and copy a seed URL that contains all your current settings and card configurations.
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
                        // Extract seed from URL if it's a full URL
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
                      // Extract seed from URL if it's a full URL
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
      </div>

      {/* Preview */}
      <div style={{ flex: 1, position: 'relative' }}>
        <ContentStack
          brand={config.brand}
          height={config.height}
          onStackComplete={handleStackComplete}
        >
          {cards.map((card, index) => (
            <ContentStackItem
              key={index}
              backgroundImage={card.hasBackgroundImage ? card.backgroundImage : undefined}
              backgroundPosition={card.backgroundPosition}
              backgroundSize={card.backgroundSize}
              hasButton={card.hasButton}
              buttonText={card.buttonText}
              buttonUrl={card.buttonUrl}
              brand={config.brand}
              cardTheme={config.cardTheme}
            >
              <h2 className="text-h3" style={{
                fontWeight: 'bold',
                marginBottom: '1rem'
              }}>
                {card.title}
              </h2>
              <p className="text-fs6" style={{
                margin: 0
              }}>
                {card.content}
              </p>
            </ContentStackItem>
          ))}
        </ContentStack>
      </div>
    </div>
  );
};

export default ContentStackDemo;