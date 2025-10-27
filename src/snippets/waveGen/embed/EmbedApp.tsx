import React, { useEffect, useState } from 'react';
import { WaveGen } from '../components/WaveGen';
import { BrandName } from '../../../tokens/designTokens';

interface EmbedConfig {
  amplitude: number;
  colors: string[];
  height: string;
  backgroundColor: string;
  backgroundGradient: string;
  opacity: number;
  brand: BrandName;
  theme: 'light' | 'dark';
  turbulence: number;
  amplitudeVariation: number;
  lineWidth: number;
  speed: number;
  gradientDirection: 'horizontal' | 'vertical';
}

const EmbedApp: React.FC = () => {
  const [config, setConfig] = useState<EmbedConfig>({
    amplitude: 20,
    colors: ['#FF6AC6', '#436EDB', '#FF6AC6'],
    height: '200px',
    backgroundColor: '',
    backgroundGradient: '',
    opacity: 1,
    brand: 'iqos',
    theme: 'light',
    turbulence: 0,
    amplitudeVariation: 0,
    lineWidth: 2,
    speed: 1,
    gradientDirection: 'horizontal',
  });

  useEffect(() => {
    // Parse URL parameters
    const urlParams = new URLSearchParams(window.location.search);

    const newConfig: Partial<EmbedConfig> = {};

    if (urlParams.has('amplitude')) {
      newConfig.amplitude = parseInt(urlParams.get('amplitude') || '20');
    }

    if (urlParams.has('colors')) {
      try {
        newConfig.colors = JSON.parse(decodeURIComponent(urlParams.get('colors') || ''));
      } catch (e) {
        // If JSON parsing fails, try comma-separated values
        newConfig.colors = decodeURIComponent(urlParams.get('colors') || '').split(',');
      }
    }

    if (urlParams.has('height')) {
      newConfig.height = decodeURIComponent(urlParams.get('height') || '200px');
    }

    if (urlParams.has('backgroundColor')) {
      newConfig.backgroundColor = decodeURIComponent(urlParams.get('backgroundColor') || '');
    }

    if (urlParams.has('backgroundGradient')) {
      newConfig.backgroundGradient = decodeURIComponent(urlParams.get('backgroundGradient') || '');
    }

    if (urlParams.has('opacity')) {
      newConfig.opacity = parseFloat(urlParams.get('opacity') || '1');
    }

    if (urlParams.has('brand')) {
      newConfig.brand = urlParams.get('brand') as BrandName || 'iqos';
    }

    if (urlParams.has('theme')) {
      newConfig.theme = urlParams.get('theme') as 'light' | 'dark' || 'light';
    }

    if (urlParams.has('turbulence')) {
      newConfig.turbulence = parseFloat(urlParams.get('turbulence') || '0');
    }

    if (urlParams.has('amplitudeVariation')) {
      newConfig.amplitudeVariation = parseFloat(urlParams.get('amplitudeVariation') || '0');
    }

    if (urlParams.has('lineWidth')) {
      newConfig.lineWidth = parseInt(urlParams.get('lineWidth') || '2');
    }

    if (urlParams.has('speed')) {
      newConfig.speed = parseFloat(urlParams.get('speed') || '1');
    }

    if (urlParams.has('gradientDirection')) {
      newConfig.gradientDirection = urlParams.get('gradientDirection') as 'horizontal' | 'vertical' || 'horizontal';
    }

    setConfig(prevConfig => ({ ...prevConfig, ...newConfig }));
  }, []);

  return (
    <div style={{
      margin: 0,
      padding: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    }}>
      <WaveGen
        amplitude={config.amplitude}
        colors={config.colors}
        height={config.height}
        backgroundColor={config.backgroundColor}
        backgroundGradient={config.backgroundGradient}
        opacity={config.opacity}
        brand={config.brand}
        theme={config.theme}
        turbulence={config.turbulence}
        amplitudeVariation={config.amplitudeVariation}
        lineWidth={config.lineWidth}
        speed={config.speed}
        gradientDirection={config.gradientDirection}
      />
    </div>
  );
};

export default EmbedApp;
