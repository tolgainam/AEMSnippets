import React, { useEffect, useState } from 'react';
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

const TickertapeEmbedApp: React.FC = () => {
  const [config, setConfig] = useState<TickertapeConfig>({
    text: 'Breaking News: This is a sample ticker tape message scrolling from right to left continuously.',
    brand: 'iqos',
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

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const newConfig: Partial<TickertapeConfig> = {};

    // Parse URL parameters
    const text = urlParams.get('text');
    if (text) newConfig.text = decodeURIComponent(text);

    const brand = urlParams.get('brand');
    if (brand) newConfig.brand = brand as BrandName;

    const theme = urlParams.get('theme');
    if (theme === 'light' || theme === 'dark') newConfig.theme = theme;

    const fontSize = urlParams.get('fontSize');
    if (fontSize && ['text-poster', 'text-h1', 'text-h2', 'text-h3', 'text-h4', 'text-h5', 'text-h6'].includes(fontSize)) {
      newConfig.fontSize = fontSize as TickertapeConfig['fontSize'];
    }

    const speed = urlParams.get('speed');
    if (speed) newConfig.speed = parseInt(speed);

    const height = urlParams.get('height');
    if (height) newConfig.height = height;

    const pauseOnHover = urlParams.get('pauseOnHover');
    if (pauseOnHover) newConfig.pauseOnHover = pauseOnHover === 'true';

    const backgroundColor = urlParams.get('backgroundColor');
    if (backgroundColor) newConfig.backgroundColor = backgroundColor;

    const backgroundGradient = urlParams.get('backgroundGradient');
    if (backgroundGradient) newConfig.backgroundGradient = decodeURIComponent(backgroundGradient);

    const backgroundImage = urlParams.get('backgroundImage');
    if (backgroundImage) newConfig.backgroundImage = decodeURIComponent(backgroundImage);

    const hasBorder = urlParams.get('hasBorder');
    if (hasBorder) newConfig.hasBorder = hasBorder === 'true';

    const borderColor = urlParams.get('borderColor');
    if (borderColor) newConfig.borderColor = borderColor;

    const textColor = urlParams.get('textColor');
    if (textColor) newConfig.textColor = textColor;

    if (Object.keys(newConfig).length > 0) {
      setConfig(prev => ({ ...prev, ...newConfig }));
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
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
  );
};

export default TickertapeEmbedApp;