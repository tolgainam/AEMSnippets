import React from 'react';
import { EnhancedWaves } from './EnhancedWaves';
import { BrandName, createThemeTokens } from '../../../tokens/designTokens';
import '../styles/waveGen.css';

export interface WaveGenProps {
  amplitude?: number;
  colors?: string[];
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
  brand?: BrandName;
  theme?: 'light' | 'dark';
  backgroundColor?: string;
  backgroundGradient?: string;
  position?: 'top' | 'bottom';
  opacity?: number;
  turbulence?: number;
  amplitudeVariation?: number;
  lineWidth?: number;
}

export const WaveGen: React.FC<WaveGenProps> = ({
  amplitude = 20,
  colors = ['#FF6AC6', '#436EDB', '#FF6AC6'],
  height = '150px',
  className = '',
  style = {},
  brand = 'iqos',
  theme = 'light',
  backgroundColor,
  backgroundGradient,
  position = 'bottom',
  opacity = 1,
  turbulence = 0,
  amplitudeVariation = 0,
  lineWidth = 2,
}) => {
  // Get theme tokens for this brand
  const themeTokens = createThemeTokens(brand);
  const currentTheme = themeTokens[theme];

  // Determine background styling
  const getBackgroundStyle = () => {
    if (backgroundGradient) {
      return {
        background: backgroundGradient
      };
    } else if (backgroundColor) {
      return {
        backgroundColor: backgroundColor
      };
    } else {
      return {
        backgroundColor: currentTheme.background.primary
      };
    }
  };

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: typeof height === 'number' ? `${height}px` : height,
    overflow: 'hidden',
    ...getBackgroundStyle(),
    ...style
  };

  const wavesContainerStyle: React.CSSProperties = {
    position: 'absolute',
    [position]: 0,
    left: 0,
    right: 0,
    opacity: opacity,
    pointerEvents: 'none',
  };

  return (
    <div
      className={`wave-gen-container ${className}`.trim()}
      style={containerStyle}
    >
      <div style={wavesContainerStyle}>
        <EnhancedWaves
          amplitude={amplitude}
          colors={colors}
          turbulence={turbulence}
          amplitudeVariation={amplitudeVariation}
          lineWidth={lineWidth}
        />
      </div>
    </div>
  );
};

export default WaveGen;
