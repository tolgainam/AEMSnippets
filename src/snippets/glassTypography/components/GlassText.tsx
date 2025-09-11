import React from 'react';
import { Brand, BrandName, typographyTokens, createThemeTokens } from '../tokens/designTokens';
import './glass.css';

export interface GlassTextProps {
  children: React.ReactNode;
  variant?: 'glass' | 'glass-light' | 'glass-dark' | 'glass-heavy' | 'glass-subtle' | 'liquidGlass';
  fontSizeToken: string;
  fontFamily?: string;
  textAlign?: 'left' | 'center' | 'right';
  className?: string;
  style?: React.CSSProperties;
  brand?: BrandName;
  theme?: 'light' | 'dark';
  rounded?: 'default' | 'pill' | 'square' | 'rounded';
  animate?: boolean;
  animationDuration?: string;
}

export const GlassText: React.FC<GlassTextProps> = ({
  children,
  variant = 'glass',
  fontSizeToken,
  fontFamily = 'inherit',
  textAlign = 'center',
  className = '',
  style = {},
  brand = 'iqos',
  theme = 'light',
  rounded = 'default',
  animate = false,
  animationDuration = '3s',
}) => {
  const brandTokens = Brand[brand];
  const themeTokens = createThemeTokens(brand)[theme];
  const effectiveFontFamily = fontFamily === 'inherit' || !fontFamily ? brandTokens.typography.fontFamily.heading : fontFamily;
  const fontWeight = brandTokens.typography.fontWeight.bold;
  
  // Get responsive font sizes from token
  const responsiveFontSizes = typographyTokens.size[fontSizeToken as keyof typeof typographyTokens.size];
  const uniqueId = Math.random().toString(36).substr(2, 9);
  
  const getRoundedClass = () => {
    switch (rounded) {
      case 'pill': return 'glass-pill';
      case 'square': return 'glass-square';
      case 'rounded': return 'glass-rounded';
      default: return '';
    }
  };

  const containerStyles: React.CSSProperties = {
    textAlign,
    width: '100%',
    display: 'inline-block',
  };

  const baseStyles: React.CSSProperties = {
    fontFamily: effectiveFontFamily,
    fontWeight,
    display: 'inline-block',
    ...style,
  };

  // Generate responsive font size CSS
  const responsiveFontCSS = responsiveFontSizes ? Object.entries(responsiveFontSizes)
    .filter(([breakpoint]) => ['390px (XS)', '1536px (XL)'].includes(breakpoint))
    .map(([breakpoint, size]) => {
      if (breakpoint === '1536px (XL)') {
        return `@media (min-width: 1536px) {
          .glass-text-${uniqueId} { font-size: ${size}; }
        }`;
      }
      return '';
    }).join('') : '';

  const animationCSS = animate ? `
    .glass-text-${uniqueId} {
      animation: glassFloat-${uniqueId} ${animationDuration} ease-in-out infinite;
    }
    
    @keyframes glassFloat-${uniqueId} {
      0%, 100% { transform: translateY(0px) scale(1); }
      50% { transform: translateY(-10px) scale(1.02); }
    }
  ` : '';

  // Generate glass text effect CSS based on variant
  const getGlassTextCSS = () => {
    const subtleTextShadow = `
      0 1px 2px rgba(255, 255, 255, 0.2)
    `;
    
    const baseTextShadow = `
      0 1px 3px rgba(255, 255, 255, 0.3),
      0 2px 6px rgba(255, 255, 255, 0.1)
    `;
    
    const heavyTextShadow = `
      0 1px 4px rgba(255, 255, 255, 0.4),
      0 3px 8px rgba(255, 255, 255, 0.2),
      0 5px 12px rgba(255, 255, 255, 0.1)
    `;

    switch (variant) {
      case 'glass-light':
        return `
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.8) 0%, 
            rgba(250, 250, 255, 0.5) 50%, 
            rgba(255, 255, 255, 0.7) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: ${baseTextShadow};
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.05));
        `;
      case 'glass-dark':
        return `
          background: linear-gradient(135deg, 
            rgba(60, 60, 60, 0.8) 0%, 
            rgba(120, 120, 120, 0.6) 50%, 
            rgba(80, 80, 80, 0.9) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: ${subtleTextShadow};
          filter: drop-shadow(0 1px 3px rgba(255, 255, 255, 0.1));
        `;
      case 'glass-heavy':
        return `
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.9) 0%, 
            rgba(220, 220, 255, 0.7) 30%,
            rgba(255, 255, 255, 0.6) 60%, 
            rgba(240, 240, 255, 0.8) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: ${heavyTextShadow};
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        `;
      case 'glass-subtle':
        return `
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.6) 0%, 
            rgba(250, 250, 250, 0.4) 50%, 
            rgba(255, 255, 255, 0.5) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: ${subtleTextShadow};
          filter: drop-shadow(0 0.5px 1px rgba(0, 0, 0, 0.03));
        `;
      case 'liquidGlass':
        return `
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.8) 0%, 
            rgba(200, 220, 255, 0.6) 25%,
            rgba(255, 255, 255, 0.7) 50%,
            rgba(220, 200, 255, 0.5) 75%,
            rgba(255, 255, 255, 0.8) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: ${baseTextShadow};
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08));
          background-size: 200% 200%;
        `;
      default: // 'glass'
        return `
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.7) 0%, 
            rgba(240, 240, 255, 0.5) 50%, 
            rgba(255, 255, 255, 0.6) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: ${baseTextShadow};
          filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.08));
        `;
    }
  };

  const glassCSS = `
    .glass-text-${uniqueId} {
      font-size: ${responsiveFontSizes['390px (XS)'] || '16px'};
      ${getGlassTextCSS()}
      ${animate ? 'transition: all 0.3s ease;' : ''}
    }
    
    /* Fallback for browsers that don't support background-clip: text */
    @supports not (-webkit-background-clip: text) {
      .glass-text-${uniqueId} {
        color: ${themeTokens.content.primary};
        background: none;
        -webkit-text-fill-color: initial;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      }
    }
    
    ${responsiveFontCSS}
    ${animationCSS}
  `;

  // Special handling for liquidGlass with animated background
  if (variant === 'liquidGlass' && animate) {
    const liquidAnimationCSS = `
      @keyframes liquidShift-${uniqueId} {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .glass-text-${uniqueId} {
        animation: liquidShift-${uniqueId} ${animationDuration} ease-in-out infinite;
      }
    `;
    
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: glassCSS + liquidAnimationCSS }} />
        <div style={containerStyles}>
          <span className={`glass-text-${uniqueId} ${className}`.trim()} style={baseStyles}>
            {children}
          </span>
        </div>
      </>
    );
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: glassCSS }} />
      <div style={containerStyles}>
        <span className={`glass-text-${uniqueId} ${className}`.trim()} style={baseStyles}>
          {children}
        </span>
      </div>
    </>
  );
};

export default GlassText;