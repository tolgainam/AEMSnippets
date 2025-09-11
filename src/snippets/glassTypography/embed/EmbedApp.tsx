import React, { useEffect, useState } from 'react';
import { GlassText } from '../components/GlassText';
import { BrandName } from '../tokens/designTokens';

interface EmbedConfig {
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
}

const EmbedApp: React.FC = () => {
  const [config, setConfig] = useState<EmbedConfig>({
    text: 'Glass Text',
    variant: 'glass',
    fontSizeToken: 'h1',
    fontFamily: '',
    textAlign: 'center',
    brand: 'iqos',
    theme: 'light',
    rounded: 'default',
    animate: false,
    animationDuration: '3s',
  });

  useEffect(() => {
    // Parse URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    
    const newConfig: Partial<EmbedConfig> = {};
    
    if (urlParams.has('text')) {
      newConfig.text = decodeURIComponent(urlParams.get('text') || '');
    }
    
    if (urlParams.has('variant')) {
      newConfig.variant = urlParams.get('variant') as EmbedConfig['variant'] || 'glass';
    }
    
    if (urlParams.has('fontSizeToken')) {
      newConfig.fontSizeToken = urlParams.get('fontSizeToken') || 'h1';
    }
    
    if (urlParams.has('brand')) {
      newConfig.brand = urlParams.get('brand') as BrandName || 'iqos';
    }
    
    if (urlParams.has('theme')) {
      newConfig.theme = urlParams.get('theme') as 'light' | 'dark' || 'light';
    }
    
    if (urlParams.has('fontFamily')) {
      newConfig.fontFamily = decodeURIComponent(urlParams.get('fontFamily') || '');
    }
    
    if (urlParams.has('textAlign')) {
      newConfig.textAlign = urlParams.get('textAlign') as 'left' | 'center' | 'right' || 'center';
    }
    
    if (urlParams.has('rounded')) {
      newConfig.rounded = urlParams.get('rounded') as EmbedConfig['rounded'] || 'default';
    }
    
    if (urlParams.has('animate')) {
      newConfig.animate = urlParams.get('animate') === 'true';
    }
    
    if (urlParams.has('animationDuration')) {
      newConfig.animationDuration = urlParams.get('animationDuration') || '3s';
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
      >
        {config.text}
      </GlassText>
    </div>
  );
};

export default EmbedApp;