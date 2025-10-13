export type WaveMode = 'simple' | 'advanced';

export type WaveType = 'sine' | 'cosine' | 'layered' | 'organic';

export type FillMode = 'fill' | 'stroke' | 'both';

export type EasingFunction = 'linear' | 'ease-in-out' | 'elastic' | 'bounce';

export type BlendMode = 'normal' | 'multiply' | 'screen' | 'overlay';

export interface FlickerConfig {
  enabled: boolean;
  speed: number; // 0-2
  intensity: number; // 0-1
}

export interface PulsateConfig {
  enabled: boolean;
  speed: number; // 0-2
  range: [number, number]; // [min, max] amplitude multiplier
}

export interface GlowConfig {
  enabled: boolean;
  blur: number; // 0-20
  color: string;
}

export interface ShadowConfig {
  enabled: boolean;
  offset: [number, number]; // [x, y]
  blur: number; // 0-20
  color: string;
}

export interface WaveLayer {
  amplitude: number;
  frequency: number;
  phase: number;
  opacity: number;
  color: string;
  speed: number;
  strokeWidth?: number;
}

export interface AdvancedWaveProps {
  // Core properties
  waveType: WaveType;
  strokeWidth: number; // 1-20
  speed: number; // 0.1-2.0
  points: number; // 50-500 (path resolution)
  frequency: number; // 1-5
  phaseShift: number; // 0-360

  // Visual styling
  fillMode: FillMode;
  strokeDashArray?: string;
  mirror: boolean;
  gradientAngle: number; // 0-360

  // Animation effects
  flicker: FlickerConfig;
  pulsate: PulsateConfig;
  reverse: boolean;
  easing: EasingFunction;

  // Distortion
  turbulence: number; // 0-1
  amplitudeVariation: number; // 0-1
  frequencyModulation: number; // 0-1

  // Layering
  layers: WaveLayer[];
  blendMode: BlendMode;

  // Effects
  glow: GlowConfig;
  shadow: ShadowConfig;
}
