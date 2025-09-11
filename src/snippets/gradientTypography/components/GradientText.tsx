import React from 'react';
import { Brand, BrandName, typographyTokens } from '../tokens/designTokens';

export interface GradientTextProps {
  children: React.ReactNode;
  colors?: string[];
  direction?: string;
  fontSizeToken: string;
  fontFamily?: string;
  animate?: boolean;
  animationDuration?: string;
  shadow?: 'none' | 'subtle' | 'medium' | 'hard';
  glow?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  className?: string;
  style?: React.CSSProperties;
  brand?: BrandName;
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  colors = ['#ff6b6b', '#4ecdc4', '#45b7d1'],
  direction = 'to right',
  fontSizeToken,
  fontFamily = 'inherit',
  animate = false,
  animationDuration = '3s',
  shadow = 'none',
  glow = false,
  textAlign = 'left',
  className = '',
  style = {},
  brand = 'iqos',
}) => {
  const brandTokens = Brand[brand];
  // Use brand font family unless a specific font is provided
  const effectiveFontFamily = fontFamily === 'inherit' || !fontFamily ? brandTokens.typography.fontFamily.heading : fontFamily;
  const fontWeight = brandTokens.typography.fontWeight.bold;
  
  // Get responsive font sizes from token
  const responsiveFontSizes = typographyTokens.size[fontSizeToken as keyof typeof typographyTokens.size];
  const gradientColors = colors.join(', ');
  const uniqueId = Math.random().toString(36).substr(2, 9);
  
  const baseStyles: React.CSSProperties = {
    fontWeight,
    fontFamily: effectiveFontFamily,
    display: 'inline-block',
    ...style,
  };

  const containerStyles: React.CSSProperties = {
    textAlign,
    width: '100%',
  };

  const cssClass = `gradient-text-${uniqueId}`;
  
  // Generate shadow CSS using Material Design elevation shadows
  const getShadowCSS = () => {
    switch (shadow) {
      case 'subtle':
        // Material elevation 1
        return 'filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.12)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08));';
      case 'medium':
        // Material elevation 4
        return 'filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.14)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.10)) drop-shadow(0 1px 10px rgba(0, 0, 0, 0.06));';
      case 'hard':
        // Material elevation 8
        return 'filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.16)) drop-shadow(0 6px 12px rgba(0, 0, 0, 0.12)) drop-shadow(0 2px 16px rgba(0, 0, 0, 0.08));';
      default:
        return '';
    }
  };

  // Generate glow CSS
  const getGlowFilters = () => {
    if (!glow) return '';
    const firstColor = colors[0] || '#ff6b6b';
    return `drop-shadow(0 0 10px ${firstColor}40) drop-shadow(0 0 20px ${firstColor}30) drop-shadow(0 0 30px ${firstColor}20)`;
  };

  // Combine shadow and glow filters
  const getCombinedFilterCSS = () => {
    const shadowFilters = shadow !== 'none' ? getShadowCSS().replace('filter: ', '').replace(';', '') : '';
    const glowFilters = getGlowFilters();
    
    const allFilters = [shadowFilters, glowFilters].filter(Boolean).join(' ');
    
    return allFilters ? `filter: ${allFilters};` : '';
  };
  
  // Generate responsive font size CSS
  const responsiveFontCSS = responsiveFontSizes ? Object.entries(responsiveFontSizes)
    .filter(([breakpoint]) => ['390px (XS)', '1536px (XL)'].includes(breakpoint))
    .map(([breakpoint, size]) => {
      if (breakpoint === '1536px (XL)') {
        return `@media (min-width: 1536px) {
          .${cssClass} { font-size: ${size}; }
        }`;
      }
      return '';
    }).join('') : '';

  const gradientCSS = `
    .${cssClass} {
      font-size: ${responsiveFontSizes['390px (XS)'] || '16px'};
      background: linear-gradient(${direction}, ${gradientColors});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      color: transparent;
      ${getCombinedFilterCSS()}
      ${animate ? `
        background-size: 200% 200%;
        animation: gradientShift-${uniqueId} ${animationDuration} ease infinite;
      ` : ''}
    }
    
    ${responsiveFontCSS}
    
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
      <div style={containerStyles}>
        <span className={`${cssClass} ${className}`.trim()} style={baseStyles}>
          {children}
        </span>
      </div>
    </>
  );
};

export default GradientText;