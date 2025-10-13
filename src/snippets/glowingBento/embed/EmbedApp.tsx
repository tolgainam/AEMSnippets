import React, { useEffect, useState } from 'react';
import { GlowingBento, BentoTile } from '../components/GlowingBento';
import { BrandName } from '../../../tokens/designTokens';

interface EmbedConfig {
  tiles: BentoTile[];
  textAutoHide: boolean;
  enableStars: boolean;
  enableSpotlight: boolean;
  enableBorderGlow: boolean;
  disableAnimations: boolean;
  spotlightRadius: number;
  particleCount: number;
  enableTilt: boolean;
  glowColor: string;
  clickEffect: boolean;
  enableMagnetism: boolean;
  brand: BrandName;
  theme: 'light' | 'dark';
}

const defaultTiles: BentoTile[] = [
  {
    title: 'Analytics',
    description: 'Track user behavior',
    label: 'Insights',
    backgroundColor: '#060010'
  },
  {
    title: 'Dashboard',
    description: 'Centralized data view',
    label: 'Overview',
    backgroundColor: '#060010'
  },
  {
    title: 'Collaboration',
    description: 'Work together seamlessly',
    label: 'Teamwork',
    backgroundColor: '#060010'
  },
  {
    title: 'Automation',
    description: 'Streamline workflows',
    label: 'Efficiency',
    backgroundColor: '#060010'
  },
  {
    title: 'Integration',
    description: 'Connect favorite tools',
    label: 'Connectivity',
    backgroundColor: '#060010'
  },
  {
    title: 'Security',
    description: 'Enterprise-grade protection',
    label: 'Protection',
    backgroundColor: '#060010'
  }
];

const EmbedApp: React.FC = () => {
  const [config, setConfig] = useState<EmbedConfig>({
    tiles: defaultTiles,
    textAutoHide: true,
    enableStars: true,
    enableSpotlight: true,
    enableBorderGlow: true,
    disableAnimations: false,
    spotlightRadius: 300,
    particleCount: 12,
    enableTilt: false,
    glowColor: '132, 0, 255',
    clickEffect: true,
    enableMagnetism: true,
    brand: 'iqos',
    theme: 'dark'
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    const newConfig: Partial<EmbedConfig> = {};

    if (urlParams.has('tiles')) {
      try {
        newConfig.tiles = JSON.parse(decodeURIComponent(urlParams.get('tiles') || ''));
      } catch (e) {
        console.error('Failed to parse tiles parameter');
      }
    }

    if (urlParams.has('textAutoHide')) {
      newConfig.textAutoHide = urlParams.get('textAutoHide') === 'true';
    }

    if (urlParams.has('enableStars')) {
      newConfig.enableStars = urlParams.get('enableStars') === 'true';
    }

    if (urlParams.has('enableSpotlight')) {
      newConfig.enableSpotlight = urlParams.get('enableSpotlight') === 'true';
    }

    if (urlParams.has('enableBorderGlow')) {
      newConfig.enableBorderGlow = urlParams.get('enableBorderGlow') === 'true';
    }

    if (urlParams.has('disableAnimations')) {
      newConfig.disableAnimations = urlParams.get('disableAnimations') === 'true';
    }

    if (urlParams.has('spotlightRadius')) {
      newConfig.spotlightRadius = parseInt(urlParams.get('spotlightRadius') || '300');
    }

    if (urlParams.has('particleCount')) {
      newConfig.particleCount = parseInt(urlParams.get('particleCount') || '12');
    }

    if (urlParams.has('enableTilt')) {
      newConfig.enableTilt = urlParams.get('enableTilt') === 'true';
    }

    if (urlParams.has('glowColor')) {
      newConfig.glowColor = decodeURIComponent(urlParams.get('glowColor') || '132, 0, 255');
    }

    if (urlParams.has('clickEffect')) {
      newConfig.clickEffect = urlParams.get('clickEffect') === 'true';
    }

    if (urlParams.has('enableMagnetism')) {
      newConfig.enableMagnetism = urlParams.get('enableMagnetism') === 'true';
    }

    if (urlParams.has('brand')) {
      newConfig.brand = urlParams.get('brand') as BrandName || 'iqos';
    }

    if (urlParams.has('theme')) {
      newConfig.theme = urlParams.get('theme') as 'light' | 'dark' || 'dark';
    }

    setConfig(prevConfig => ({ ...prevConfig, ...newConfig }));
  }, []);

  return (
    <div style={{
      margin: 0,
      padding: '20px',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#0a0014',
      overflow: 'auto'
    }}>
      <GlowingBento
        tiles={config.tiles}
        textAutoHide={config.textAutoHide}
        enableStars={config.enableStars}
        enableSpotlight={config.enableSpotlight}
        enableBorderGlow={config.enableBorderGlow}
        disableAnimations={config.disableAnimations}
        spotlightRadius={config.spotlightRadius}
        particleCount={config.particleCount}
        enableTilt={config.enableTilt}
        glowColor={config.glowColor}
        clickEffect={config.clickEffect}
        enableMagnetism={config.enableMagnetism}
        brand={config.brand}
        theme={config.theme}
      />
    </div>
  );
};

export default EmbedApp;
