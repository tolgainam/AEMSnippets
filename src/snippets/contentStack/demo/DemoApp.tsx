import React, { useState, useCallback } from 'react';
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
    itemDistance: 100,
    itemScale: 0.03,
    itemStackDistance: 30,
    stackPosition: '20%',
    scaleEndPosition: '10%',
    baseScale: 0.85,
    rotationAmount: 0,
    blurAmount: 0,
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

  const handleConfigChange = (key: string, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const handleCardChange = (index: number, field: keyof CardData, value: any) => {
    setCards(prev => prev.map((card, i) =>
      i === index ? { ...card, [field]: value } : card
    ));
  };

  const handleStackComplete = useCallback(() => {
    console.log('Stack scrolling completed!');
  }, []);

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

    const code = `<iframe
  src="${embedUrl}"
  width="100%"
  height="${config.height}"
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
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '600' }}>Layout</h3>

          <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
            Item Distance: {config.itemDistance}px
            <input
              type="range"
              min="50"
              max="200"
              value={config.itemDistance}
              onChange={(e) => handleConfigChange('itemDistance', parseInt(e.target.value))}
              style={{ width: '100%', marginTop: '0.5rem' }}
            />
          </label>

          <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
            Stack Distance: {config.itemStackDistance}px
            <input
              type="range"
              min="10"
              max="60"
              value={config.itemStackDistance}
              onChange={(e) => handleConfigChange('itemStackDistance', parseInt(e.target.value))}
              style={{ width: '100%', marginTop: '0.5rem' }}
            />
          </label>

          <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
            Stack Position: {config.stackPosition}
            <select
              value={config.stackPosition}
              onChange={(e) => handleConfigChange('stackPosition', e.target.value)}
              style={{ width: '100%', marginTop: '0.5rem', padding: '0.5rem' }}
            >
              <option value="10%">10%</option>
              <option value="15%">15%</option>
              <option value="20%">20%</option>
              <option value="25%">25%</option>
              <option value="30%">30%</option>
            </select>
          </label>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '600' }}>Animation</h3>

          <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
            Scale Factor: {config.itemScale.toFixed(3)}
            <input
              type="range"
              min="0.01"
              max="0.08"
              step="0.005"
              value={config.itemScale}
              onChange={(e) => handleConfigChange('itemScale', parseFloat(e.target.value))}
              style={{ width: '100%', marginTop: '0.5rem' }}
            />
          </label>

          <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
            Base Scale: {config.baseScale.toFixed(2)}
            <input
              type="range"
              min="0.7"
              max="0.95"
              step="0.05"
              value={config.baseScale}
              onChange={(e) => handleConfigChange('baseScale', parseFloat(e.target.value))}
              style={{ width: '100%', marginTop: '0.5rem' }}
            />
          </label>

          <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
            Rotation: {config.rotationAmount}°
            <input
              type="range"
              min="0"
              max="5"
              value={config.rotationAmount}
              onChange={(e) => handleConfigChange('rotationAmount', parseInt(e.target.value))}
              style={{ width: '100%', marginTop: '0.5rem' }}
            />
          </label>

          <label style={{ display: 'block', marginBottom: '1rem', fontSize: '0.875rem' }}>
            Blur Amount: {config.blurAmount}px
            <input
              type="range"
              min="0"
              max="5"
              value={config.blurAmount}
              onChange={(e) => handleConfigChange('blurAmount', parseInt(e.target.value))}
              style={{ width: '100%', marginTop: '0.5rem' }}
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
            Card Theme
            <select
              value={config.cardTheme}
              onChange={(e) => handleConfigChange('cardTheme', e.target.value)}
              style={{ width: '100%', marginTop: '0.5rem', padding: '0.5rem' }}
            >
              <option value="default">Default</option>
              <option value="dark">Dark</option>
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
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
        </div>
      </div>

      {/* Preview */}
      <div style={{ flex: 1, position: 'relative' }}>
        <ContentStack
          itemDistance={config.itemDistance}
          itemScale={config.itemScale}
          itemStackDistance={config.itemStackDistance}
          stackPosition={config.stackPosition}
          scaleEndPosition={config.scaleEndPosition}
          baseScale={config.baseScale}
          rotationAmount={config.rotationAmount}
          blurAmount={config.blurAmount}
          brand={config.brand}
          height={config.height}
          onStackComplete={handleStackComplete}
        >
          {cards.map((card, index) => (
            <ContentStackItem
              key={index}
              className={config.cardTheme !== 'default' ? config.cardTheme : undefined}
              backgroundImage={card.hasBackgroundImage ? card.backgroundImage : undefined}
              backgroundPosition={card.backgroundPosition}
              backgroundSize={card.backgroundSize}
              hasButton={card.hasButton}
              buttonText={card.buttonText}
              buttonUrl={card.buttonUrl}
            >
              <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                {card.title}
              </h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', margin: 0 }}>
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