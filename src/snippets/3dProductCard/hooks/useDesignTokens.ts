/**
 * Hook to apply design tokens to 3D Product Card styles
 */

import { useMemo } from 'react';
import type { StyleConfig } from '../types/config';
import {
  getBrandStyles,
  getBrandGradient,
  getTypographySize,
  type Brand3D,
  type Theme3D,
} from '../utils/designTokens';

/**
 * Merges brand tokens with custom style overrides
 * Priority: custom styles > typography presets > brand defaults
 *
 * @param style - Style configuration
 * @param isMobile - Whether to use mobile typography sizes (390px) vs desktop (1536px)
 */
export const useDesignTokens = (style?: StyleConfig, isMobile?: boolean) => {
  return useMemo(() => {
    const brand: Brand3D = style?.brand || 'iqos';
    const theme: Theme3D = style?.theme || 'light';

    // Determine breakpoint based on mobile/desktop
    const breakpoint = isMobile ? '390px (XS)' : '1536px (XL)';

    // Get brand defaults
    const brandStyles = getBrandStyles(brand, theme);
    const brandGradient = getBrandGradient(brand);

    // Get responsive typography sizes from design tokens
    // Map typography preset names to design token names
    const getResponsiveTitleSize = () => {
      if (!style?.titleTypography) return null;

      // Map preset names (h1, h2, h3, h4) to font size tokens (fs1, fs2, fs3, fs4)
      const tokenMap = {
        h1: 'fs1',
        h2: 'fs2',
        h3: 'fs3',
        h4: 'fs4',
      } as const;

      const token = tokenMap[style.titleTypography as keyof typeof tokenMap];
      return token ? getTypographySize(token, breakpoint) : null;
    };

    const getResponsiveMessageSize = () => {
      if (!style?.messageTypography) return null;

      // Message presets map directly to body tokens
      const token = style.messageTypography as 'body1' | 'body2' | 'body3';
      return getTypographySize(token, breakpoint);
    };

    const titleFontSize = getResponsiveTitleSize();
    const messageFontSize = getResponsiveMessageSize();

    // Build final style object with proper precedence
    const mergedStyles: StyleConfig & {
      titleFontFamily?: string;
      messageFontFamily?: string;
    } = {
      // 1. Brand defaults (lowest priority)
      background: brandGradient,
      ...brandStyles,

      // 2. Custom overrides (medium priority)
      ...style,

      // 3. Responsive typography from design tokens (highest priority)
      // These override any custom font size values when typography preset is set
      ...(titleFontSize && { titleFontSize }),
      ...(messageFontSize && { messageFontSize }),

      // Ensure brand and theme are preserved
      brand,
      theme,
    };

    return mergedStyles;
  }, [style, isMobile]);
};
