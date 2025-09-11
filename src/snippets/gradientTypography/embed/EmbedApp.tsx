import React, { useEffect, useState } from 'react';
import { GradientText } from '../components/GradientText';
import { BrandName } from '../tokens/designTokens';

interface EmbedConfig {
  text: string;
  colors: string[];
  direction: string;
  fontSizeToken: string;
  fontFamily: string;
  animate: boolean;
  animationDuration: string;
  shadow: 'none' | 'subtle' | 'medium' | 'hard';
  glow: boolean;
  brand: BrandName;
}

const EmbedApp: React.FC = () => {
  const [config, setConfig] = useState<EmbedConfig>({
    text: 'Gradient Text',
    colors: ['#ff6b6b', '#4ecdc4', '#45b7d1'],
    direction: 'to right',
    fontSizeToken: 'h1',
    fontFamily: '',
    animate: false,
    animationDuration: '3s',
    shadow: 'none',
    glow: false,
    brand: 'iqos',
  });

  useEffect(() => {
    // Parse URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    
    const newConfig: Partial<EmbedConfig> = {};
    
    if (urlParams.has('text')) {
      newConfig.text = decodeURIComponent(urlParams.get('text') || '');
    }
    
    if (urlParams.has('colors')) {
      try {
        newConfig.colors = JSON.parse(decodeURIComponent(urlParams.get('colors') || ''));
      } catch (e) {
        // If JSON parsing fails, try comma-separated values
        newConfig.colors = decodeURIComponent(urlParams.get('colors') || '').split(',');
      }
    }
    
    if (urlParams.has('direction')) {
      newConfig.direction = decodeURIComponent(urlParams.get('direction') || '');
    }
    
    if (urlParams.has('fontSizeToken')) {
      newConfig.fontSizeToken = urlParams.get('fontSizeToken') || 'h1';
    }
    
    if (urlParams.has('brand')) {
      newConfig.brand = urlParams.get('brand') as BrandName || 'iqos';
    }
    
    if (urlParams.has('fontFamily')) {
      newConfig.fontFamily = decodeURIComponent(urlParams.get('fontFamily') || '');
    }
    
    if (urlParams.has('animate')) {
      newConfig.animate = urlParams.get('animate') === 'true';
    }
    
    if (urlParams.has('animationDuration')) {
      newConfig.animationDuration = urlParams.get('animationDuration') || '';
    }
    
    if (urlParams.has('shadow')) {
      newConfig.shadow = urlParams.get('shadow') as 'none' | 'subtle' | 'medium' | 'hard' || 'none';
    }
    
    if (urlParams.has('glow')) {
      newConfig.glow = urlParams.get('glow') === 'true';
    }
    
    setConfig(prevConfig => ({ ...prevConfig, ...newConfig }));
  }, []);

  return (
    <div style={{
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      margin: 0,
      background: 'transparent'
    }}>
      <GradientText
        colors={config.colors}
        direction={config.direction}
        fontSizeToken={config.fontSizeToken}
        fontFamily={config.fontFamily}
        animate={config.animate}
        animationDuration={config.animationDuration}
        shadow={config.shadow}
        glow={config.glow}
        brand={config.brand}
      >
        {config.text}
      </GradientText>
    </div>
  );
};

export default EmbedApp;