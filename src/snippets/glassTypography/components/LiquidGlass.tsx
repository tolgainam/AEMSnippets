/**
 * LiquidGlass - Advanced glass effect component with SVG distortion
 * Based on macOS-style liquid glass implementation
 */

import React from 'react';

export interface LiquidGlassProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  variant?: 'button' | 'menu' | 'dock' | 'wrapper';
  size?: 'small' | 'medium' | 'large';
}

export const LiquidGlass: React.FC<LiquidGlassProps> = ({
  children,
  className = '',
  onClick,
  style,
  variant = 'wrapper',
  size = 'medium',
}) => {
  const getBaseClass = () => {
    switch (variant) {
      case 'button':
        return 'glass-liquid-button';
      case 'menu':
        return 'glass-menu';
      case 'dock':
        return 'glass-dock';
      default:
        return 'liquidGlass-wrapper';
    }
  };

  const getSizeClass = () => {
    if (variant === 'button') {
      switch (size) {
        case 'small':
          return 'glass-button-small';
        case 'large':
          return 'glass-button-large';
        default:
          return '';
      }
    }
    return '';
  };

  const combinedClassName = [
    getBaseClass(),
    getSizeClass(),
    className
  ].filter(Boolean).join(' ');

  // For full liquid glass effect with layers
  if (variant === 'wrapper') {
    return (
      <>
        {/* SVG Filters */}
        <svg className="glass-svg-filters" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glass-distortion" x="-50%" y="-50%" width="200%" height="200%">
              <feTurbulence
                baseFrequency="0.02"
                numOctaves="3"
                result="noise"
                seed="1"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="8"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>

        <div 
          className={combinedClassName}
          onClick={onClick}
          style={style}
        >
          <div className="liquidGlass-effect" />
          <div className="liquidGlass-tint" />
          <div className="liquidGlass-shine" />
          <div className="liquidGlass-text">
            {children}
          </div>
        </div>
      </>
    );
  }

  // For simpler glass variants
  return (
    <div 
      className={combinedClassName}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
};

// Convenience components for specific variants
export const LiquidGlassButton: React.FC<Omit<LiquidGlassProps, 'variant'>> = (props) => (
  <LiquidGlass {...props} variant="button" />
);

export const LiquidGlassMenu: React.FC<Omit<LiquidGlassProps, 'variant'>> = (props) => (
  <LiquidGlass {...props} variant="menu" />
);

export const LiquidGlassDock: React.FC<Omit<LiquidGlassProps, 'variant'>> = (props) => (
  <LiquidGlass {...props} variant="dock" />
);

export default LiquidGlass;