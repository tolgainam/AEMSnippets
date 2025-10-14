/**
 * Design Token Integration for 3D Product Card
 * Maps design system tokens to component styles
 */

import { brandTokens, typographyTokens } from '../../../tokens/designTokens';

export type Brand3D = 'iqos' | 'zyn' | 'veev';
export type Theme3D = 'light' | 'dark';

/**
 * Get brand-specific styling based on design tokens
 */
export const getBrandStyles = (brand: Brand3D = 'iqos', theme: Theme3D = 'light') => {
  const brandToken = brandTokens[brand];

  // Define light/dark theme variations
  const themeColors = theme === 'light' ? {
    titleColor: brandToken.primary.dark,
    messageColor: brandToken.tints.dark85,
    buttonBackground: brandToken.primary.main,
    buttonColor: brandToken.primary.light,
    navButtonColor: brandToken.primary.dark,
    overlayBackground: 'rgba(255, 255, 255, 0.9)',
  } : {
    titleColor: brandToken.primary.light,
    messageColor: brandToken.tints.dark30,
    buttonBackground: brandToken.primary.main,
    buttonColor: brandToken.primary.dark,
    navButtonColor: brandToken.primary.light,
    overlayBackground: 'rgba(0, 0, 0, 0.8)',
  };

  return {
    // Typography colors
    ...themeColors,

    // Font families
    titleFontFamily: brandToken.typography.fontFamily.heading,
    messageFontFamily: brandToken.typography.fontFamily.body,

    // Font weights
    titleFontWeight: String(brandToken.typography.fontWeight.bold),
    messageFontWeight: String(brandToken.typography.fontWeight.regular),

    // Border radius
    buttonBorderRadius: `${brandToken.buttonRadius}px`,
  };
};

/**
 * Get responsive typography size from design tokens
 */
export const getTypographySize = (
  token: 'fs1' | 'fs2' | 'fs3' | 'fs4' | 'body1' | 'body2' | 'body3',
  breakpoint: '390px (XS)' | '1536px (XL)' | '1920px (XL)' = '1536px (XL)'
): string => {
  const sizes = typographyTokens.size[token] as Record<string, string>;
  return sizes[breakpoint];
};

/**
 * Get responsive line height from design tokens
 */
export const getTypographyLineHeight = (
  token: 'fs1' | 'fs2' | 'fs3' | 'fs4' | 'body1' | 'body2' | 'body3',
  breakpoint: '390px (XS)' | '1536px (XL)' | '1920px (XL)' = '1536px (XL)'
): string => {
  const lineHeights = typographyTokens.lineHeight[token] as Record<string, string>;
  return lineHeights[breakpoint];
};

/**
 * Get brand gradient background
 */
export const getBrandGradient = (brand: Brand3D = 'iqos'): string => {
  const brandToken = brandTokens[brand];

  // Create brand-specific gradients
  return `linear-gradient(135deg, ${brandToken.primary.main} 0%, ${brandToken.primary.dark} 100%)`;
};

/**
 * Apply brand styles to a style config object
 */
export const applyBrandStyles = (
  brand: Brand3D,
  theme: Theme3D = 'light',
  customStyles?: Record<string, any>
) => {
  const brandStyles = getBrandStyles(brand, theme);
  const gradient = getBrandGradient(brand);

  return {
    background: gradient,
    ...brandStyles,
    ...customStyles, // Allow custom overrides
  };
};
