/**
 * Configuration types for 3D Product Card
 */

export interface Keyframe {
  /** Frame number in the animation timeline */
  frame: number;
  /** Title text for this keyframe */
  title: string;
  /** Message/description text for this keyframe */
  message: string;
  /** Button configuration */
  button?: {
    text: string;
    url: string;
  };
  /** Camera settings for this keyframe - supports responsive mobile/desktop configs */
  camera?: {
    position?: [number, number, number] | {
      mobile?: [number, number, number];
      desktop?: [number, number, number];
    };
    target?: [number, number, number] | {
      mobile?: [number, number, number];
      desktop?: [number, number, number];
    };
    fov?: number | {
      mobile?: number;
      desktop?: number;
    };
    zoom?: number | {
      mobile?: number;
      desktop?: number;
    };
    rotation?: [number, number, number]; // Euler angles in radians [x, y, z]
  };
}

export interface AnimationConfig {
  /** Total number of frames in the animation */
  totalFrames: number;
  /** Frames per second for playback */
  fps?: number;
}

export interface CameraConfig {
  /** Camera position [x, y, z] - single position or responsive breakpoints */
  position?: [number, number, number] | {
    mobile?: [number, number, number];
    desktop?: [number, number, number];
  };
  /** Camera field of view - single value or responsive breakpoints */
  fov?: number | {
    mobile?: number;
    desktop?: number;
  };
  /** Camera zoom multiplier - single value or responsive breakpoints */
  zoom?: number | {
    mobile?: number;
    desktop?: number;
  };
  /** Camera target/look-at point [x, y, z] - single target or responsive breakpoints */
  target?: [number, number, number] | {
    mobile?: [number, number, number];
    desktop?: [number, number, number];
  };
}

export interface StyleConfig {
  /** Brand to use from design system (auto-applies colors, fonts, etc.) */
  brand?: 'iqos' | 'zyn' | 'veev';
  /** Theme variation (light or dark) */
  theme?: 'light' | 'dark';

  /** Title typography preset from design tokens */
  titleTypography?: 'h1' | 'h2' | 'h3' | 'h4';
  /** Message typography preset from design tokens */
  messageTypography?: 'body1' | 'body2' | 'body3';

  /** Background color or gradient (overrides brand default) */
  background?: string;
  /** Title text color (overrides brand default) */
  titleColor?: string;
  /** Title font size (overrides typography preset) */
  titleFontSize?: string;
  /** Title font weight (overrides brand default) */
  titleFontWeight?: string;
  /** Title font family (overrides brand default) */
  titleFontFamily?: string;
  /** Message text color (overrides brand default) */
  messageColor?: string;
  /** Message font size (overrides typography preset) */
  messageFontSize?: string;
  /** Message font family (overrides brand default) */
  messageFontFamily?: string;
  /** Button background color (overrides brand default) */
  buttonBackground?: string;
  /** Button text color (overrides brand default) */
  buttonColor?: string;
  /** Button border radius (overrides brand default) */
  buttonBorderRadius?: string;
  /** Navigation button color (overrides brand default) */
  navButtonColor?: string;
  /** Content overlay position: 'left', 'right', 'center', 'bottom' */
  overlayPosition?: 'left' | 'right' | 'center' | 'bottom';
  /** Content overlay background (overrides brand default) */
  overlayBackground?: string;
}

export interface ProductCard3DConfig {
  /** Path to the GLB model file */
  modelPath: string;
  /** Animation configuration */
  animation: AnimationConfig;
  /** Array of keyframes with content */
  keyframes: Keyframe[];
  /** Camera configuration */
  camera?: CameraConfig;
  /** Style configuration */
  style?: StyleConfig;
}

export interface ProductCard3DProps {
  /** Configuration object */
  config: ProductCard3DConfig;
  /** Width of the card */
  width?: string | number;
  /** Height of the card */
  height?: string | number;
  /** Callback when animation state changes */
  onAnimationChange?: (currentKeyframe: number, isPlaying: boolean) => void;
  /** Callback when button is clicked */
  onButtonClick?: (url: string) => void;
  /** Enable orbit controls for manual camera adjustment */
  enableOrbitControls?: boolean;
}
