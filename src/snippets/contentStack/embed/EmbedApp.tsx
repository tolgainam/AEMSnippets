import React, { useEffect, useState } from 'react';
import { ContentStack, ContentStackItem } from '../components/ContentStack';
import { BrandName } from '../../../tokens/designTokens';

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

interface EmbedConfig {
  itemDistance: number;
  itemScale: number;
  itemStackDistance: number;
  stackPosition: string;
  scaleEndPosition: string;
  baseScale: number;
  rotationAmount: number;
  blurAmount: number;
  brand: BrandName;
  cardTheme: string;
}

const ContentStackEmbedApp: React.FC = () => {
  const [config, setConfig] = useState<EmbedConfig>({
    itemDistance: 120,
    itemScale: 0.03,
    itemStackDistance: 24,
    stackPosition: '15%',
    scaleEndPosition: '10%',
    baseScale: 0.95,
    rotationAmount: 0,
    blurAmount: 0,
    brand: 'iqos',
    cardTheme: 'default'
  });

  const defaultCards: CardData[] = [
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
  ];

  const [cards, setCards] = useState<CardData[]>(defaultCards);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const newConfig: Partial<EmbedConfig> = {};

    // Parse URL parameters
    const itemDistance = urlParams.get('itemDistance');
    if (itemDistance) newConfig.itemDistance = parseInt(itemDistance);

    const itemScale = urlParams.get('itemScale');
    if (itemScale) newConfig.itemScale = parseFloat(itemScale);

    const itemStackDistance = urlParams.get('itemStackDistance');
    if (itemStackDistance) newConfig.itemStackDistance = parseInt(itemStackDistance);

    const stackPosition = urlParams.get('stackPosition');
    if (stackPosition) newConfig.stackPosition = stackPosition;

    const scaleEndPosition = urlParams.get('scaleEndPosition');
    if (scaleEndPosition) newConfig.scaleEndPosition = scaleEndPosition;

    const baseScale = urlParams.get('baseScale');
    if (baseScale) newConfig.baseScale = parseFloat(baseScale);

    const rotationAmount = urlParams.get('rotationAmount');
    if (rotationAmount) newConfig.rotationAmount = parseInt(rotationAmount);

    const blurAmount = urlParams.get('blurAmount');
    if (blurAmount) newConfig.blurAmount = parseInt(blurAmount);

    const brand = urlParams.get('brand');
    if (brand) newConfig.brand = brand as BrandName;


    const cardTheme = urlParams.get('cardTheme');
    if (cardTheme) newConfig.cardTheme = cardTheme;

    // Parse cards data
    const cardsData = urlParams.get('cardsData');
    if (cardsData) {
      try {
        const parsedCards = JSON.parse(decodeURIComponent(cardsData)) as CardData[];
        setCards(parsedCards);
      } catch (error) {
        console.warn('Failed to parse cards data:', error);
      }
    }

    if (Object.keys(newConfig).length > 0) {
      setConfig(prev => ({ ...prev, ...newConfig }));
    }
  }, []);


  return (
    <div style={{ width: '100%', height: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
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
        height="100vh"
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
  );
};

export default ContentStackEmbedApp;