/**
 * Glass Effect Utilities
 * Helper functions and types for applying glass effects
 */

export type GlassVariant = 
  | 'glass'
  | 'glass-light' 
  | 'glass-dark'
  | 'glass-heavy'
  | 'glass-subtle'
  | 'glass-panel'
  | 'glass-button'
  | 'glass-card'
  | 'glass-dock'
  | 'glass-menu'
  | 'glass-liquid-button'
  | 'liquidGlass-wrapper';

export type GlassModifier = 
  | 'glass-rounded'
  | 'glass-pill'
  | 'glass-square'
  | 'glass-no-hover';

export interface GlassProps {
  /** Base glass variant to apply */
  variant?: GlassVariant;
  /** Additional modifiers */
  modifiers?: GlassModifier[];
  /** Disable hover effects */
  noHover?: boolean;
  /** Custom border radius style */
  rounded?: 'default' | 'pill' | 'square' | 'rounded';
}

/**
 * Generate glass effect class names
 */
export const getGlassClasses = ({
  variant = 'glass',
  modifiers = [],
  noHover = false,
  rounded = 'default'
}: GlassProps = {}): string => {
  const classes: string[] = [variant];
  
  // Add rounded modifier
  if (rounded === 'pill') {
    classes.push('glass-pill');
  } else if (rounded === 'square') {
    classes.push('glass-square');
  } else if (rounded === 'rounded') {
    classes.push('glass-rounded');
  }
  
  // Add no-hover modifier
  if (noHover) {
    classes.push('glass-no-hover');
  }
  
  // Add custom modifiers
  classes.push(...modifiers);
  
  return classes.join(' ');
};

/**
 * React hook for glass effect class names
 */
export const useGlass = (props: GlassProps = {}) => {
  return getGlassClasses(props);
};

/**
 * Predefined glass configurations for common use cases
 */
export const glassPresets = {
  // Panels and containers
  panel: { variant: 'glass-panel' as const },
  card: { variant: 'glass-card' as const },
  
  // Interactive elements
  button: { variant: 'glass-button' as const },
  
  // Intensity variants
  subtle: { variant: 'glass-subtle' as const },
  light: { variant: 'glass-light' as const },
  heavy: { variant: 'glass-heavy' as const },
  dark: { variant: 'glass-dark' as const },
  
  // Shape variants
  pillButton: { variant: 'glass-button' as const, rounded: 'pill' as const },
  roundedCard: { variant: 'glass-card' as const, rounded: 'rounded' as const },
  squarePanel: { variant: 'glass-panel' as const, rounded: 'square' as const },
  
  // Static (no hover) variants
  staticPanel: { variant: 'glass-panel' as const, noHover: true },
  staticCard: { variant: 'glass-card' as const, noHover: true },
} as const;

/**
 * Apply glass effect to MUI sx prop
 * This allows integration with Material-UI components
 */
export const createGlassSx = (props: GlassProps = {}) => {
  const className = getGlassClasses(props);
  
  return {
    '&': {
      // Apply the glass classes via CSS class
      [`&.${className.replace(/\s+/g, '.')}`]: {},
    },
  };
};

/**
 * Glass effect CSS-in-JS object for direct styling
 * Use when you need to apply glass effects via sx prop without CSS classes
 */
export const glassStyles = {
  base: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
    transition: 'all 0.3s ease-in-out',
  },
  
  light: {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '12px',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
  },
  
  dark: {
    background: 'rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
  },
  
  heavy: {
    background: 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    borderRadius: '16px',
    boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.5), inset 0 2px 0 rgba(255, 255, 255, 0.5)',
  },
  
  subtle: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    boxShadow: '0 4px 16px 0 rgba(31, 38, 135, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
  },
} as const;