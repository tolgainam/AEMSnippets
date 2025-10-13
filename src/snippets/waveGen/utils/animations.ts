import { EasingFunction } from '../types/waveTypes';

/**
 * Easing functions for animations
 */
export const easingFunctions = {
  linear: (t: number): number => t,

  'ease-in-out': (t: number): number => {
    return t < 0.5
      ? 2 * t * t
      : -1 + (4 - 2 * t) * t;
  },

  elastic: (t: number): number => {
    if (t === 0 || t === 1) return t;
    const p = 0.3;
    const s = p / 4;
    return Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
  },

  bounce: (t: number): number => {
    if (t < 1 / 2.75) {
      return 7.5625 * t * t;
    } else if (t < 2 / 2.75) {
      t -= 1.5 / 2.75;
      return 7.5625 * t * t + 0.75;
    } else if (t < 2.5 / 2.75) {
      t -= 2.25 / 2.75;
      return 7.5625 * t * t + 0.9375;
    } else {
      t -= 2.625 / 2.75;
      return 7.5625 * t * t + 0.984375;
    }
  }
};

/**
 * Apply easing function to a value
 */
export const applyEasing = (
  value: number,
  easing: EasingFunction
): number => {
  const easingFn = easingFunctions[easing] || easingFunctions.linear;
  return easingFn(value);
};

/**
 * Calculate flicker opacity
 */
export const calculateFlickerOpacity = (
  time: number,
  speed: number,
  intensity: number,
  baseOpacity: number = 1
): number => {
  if (intensity === 0) return baseOpacity;

  // Use sine wave for smooth flickering
  const flicker = Math.sin(time * speed * Math.PI * 2) * intensity;
  const minOpacity = baseOpacity * (1 - intensity);

  return Math.max(minOpacity, baseOpacity + flicker * (baseOpacity - minOpacity));
};

/**
 * Calculate pulsate amplitude
 */
export const calculatePulsateAmplitude = (
  time: number,
  speed: number,
  range: [number, number],
  baseAmplitude: number
): number => {
  const [min, max] = range;

  // Use sine wave for smooth pulsating
  const oscillation = (Math.sin(time * speed * Math.PI * 2) + 1) / 2; // 0 to 1
  const multiplier = min + (max - min) * oscillation;

  return baseAmplitude * multiplier;
};

/**
 * Create SVG filter for glow effect
 */
export const createGlowFilter = (
  id: string,
  blur: number,
  color: string
): string => {
  return `
    <filter id="${id}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="${blur}" result="blur"/>
      <feFlood flood-color="${color}" flood-opacity="0.5" result="color"/>
      <feComposite in="color" in2="blur" operator="in" result="glow"/>
      <feMerge>
        <feMergeNode in="glow"/>
        <feMergeNode in="glow"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  `;
};

/**
 * Create SVG filter for shadow effect
 */
export const createShadowFilter = (
  id: string,
  offset: [number, number],
  blur: number,
  color: string
): string => {
  const [dx, dy] = offset;
  return `
    <filter id="${id}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="${blur}"/>
      <feOffset dx="${dx}" dy="${dy}" result="offsetblur"/>
      <feFlood flood-color="${color}" flood-opacity="0.5"/>
      <feComposite in2="offsetblur" operator="in"/>
      <feMerge>
        <feMergeNode/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  `;
};

/**
 * Convert degrees to radians
 */
export const degreesToRadians = (degrees: number): number => {
  return (degrees * Math.PI) / 180;
};

/**
 * Create linear gradient with angle
 */
export const createLinearGradient = (
  id: string,
  colors: string[],
  angle: number
): { x1: string; y1: string; x2: string; y2: string; stops: Array<{ offset: string; color: string }> } => {
  const radians = degreesToRadians(angle);
  const x1 = 50 + Math.cos(radians + Math.PI) * 50;
  const y1 = 50 + Math.sin(radians + Math.PI) * 50;
  const x2 = 50 + Math.cos(radians) * 50;
  const y2 = 50 + Math.sin(radians) * 50;

  const stops = colors.map((color, i) => ({
    offset: `${(i / (colors.length - 1)) * 100}%`,
    color
  }));

  return {
    x1: `${x1}%`,
    y1: `${y1}%`,
    x2: `${x2}%`,
    y2: `${y2}%`,
    stops
  };
};

/**
 * Get CSS blend mode string
 */
export const getBlendModeCSS = (blendMode: string): string => {
  return blendMode === 'normal' ? 'normal' : blendMode;
};
