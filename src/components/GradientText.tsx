import React from 'react';
import { Brand, BrandName } from '../tokens/designTokens';

export interface GradientTextProps {
  children: React.ReactNode;
  colors?: string[];
  direction?: string;
  fontSize?: string;
  fontFamily?: string;
  animate?: boolean;
  animationDuration?: string;
  className?: string;
  style?: React.CSSProperties;
  brand?: BrandName;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  colors = ['#ff6b6b', '#4ecdc4', '#45b7d1'],
  direction = 'to right',
  fontSize = '2rem',
  fontFamily = 'inherit',
  animate = false,
  animationDuration = '3s',
  className = '',
  style = {},
  brand = 'iqos',
}) => {
  const brandTokens = Brand[brand];
  // Use brand font family unless a specific font is provided
  const effectiveFontFamily = fontFamily === 'inherit' || !fontFamily ? brandTokens.typography.fontFamily.heading : fontFamily;
  const fontWeight = brandTokens.typography.fontWeight.bold;
  const gradientColors = colors.join(', ');
  const uniqueId = Math.random().toString(36).substr(2, 9);
  
  const baseStyles: React.CSSProperties = {
    fontSize,
    fontWeight,
    fontFamily: effectiveFontFamily,
    display: 'inline-block',
    ...style,
  };

  const cssClass = `gradient-text-${uniqueId}`;
  
  const gradientCSS = `
    .${cssClass} {
      background: linear-gradient(${direction}, ${gradientColors});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
      ${animate ? `
        background-size: 200% 200%;
        animation: gradientShift-${uniqueId} ${animationDuration} ease infinite;
      ` : ''}
    }
    
    @supports not (-webkit-background-clip: text) {
      .${cssClass} {
        color: ${colors[0] || '#000'};
        background: none;
        -webkit-text-fill-color: initial;
      }
    }
    
    ${animate ? `
      @keyframes gradientShift-${uniqueId} {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    ` : ''}
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: gradientCSS }} />
      <span className={`${cssClass} ${className}`.trim()} style={baseStyles}>
        {children}
      </span>
    </>
  );
};

export default GradientText;