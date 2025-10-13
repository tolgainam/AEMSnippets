import { WaveType, WaveLayer } from '../types/waveTypes';

/**
 * Simple sine wave formula
 * y = amplitude * sin(frequency * x + phase)
 */
export const sineWave = (
  x: number,
  amplitude: number,
  frequency: number,
  phase: number
): number => {
  return amplitude * Math.sin(frequency * x + phase);
};

/**
 * Simple cosine wave formula
 * y = amplitude * cos(frequency * x + phase)
 */
export const cosineWave = (
  x: number,
  amplitude: number,
  frequency: number,
  phase: number
): number => {
  return amplitude * Math.cos(frequency * x + phase);
};

/**
 * Layered waves - combines multiple sine waves
 * y = Σ(amplitude_i * sin(frequency_i * x + phase_i))
 */
export const layeredWave = (
  x: number,
  layers: WaveLayer[],
  timeOffset: number = 0
): number => {
  return layers.reduce((sum, layer) => {
    const phase = layer.phase + (timeOffset * layer.speed);
    return sum + sineWave(x, layer.amplitude, layer.frequency, phase);
  }, 0);
};

/**
 * Organic wave - combines sine and cosine with slight randomness
 */
export const organicWave = (
  x: number,
  amplitude: number,
  frequency: number,
  phase: number,
  seed: number = 0
): number => {
  // Use a combination of sine and cosine for more organic feel
  const primary = sineWave(x, amplitude, frequency, phase);
  const secondary = cosineWave(x, amplitude * 0.3, frequency * 1.5, phase + seed);
  return primary + secondary;
};

/**
 * Add turbulence (noise) to a wave value
 */
export const addTurbulence = (
  y: number,
  x: number,
  turbulence: number,
  time: number
): number => {
  if (turbulence === 0) return y;

  // Simple pseudo-random noise based on position and time
  const noise = Math.sin(x * 10 + time) * Math.cos(x * 7 + time * 0.5);
  return y + (noise * turbulence * 10);
};

/**
 * Apply amplitude variation (breathing effect)
 */
export const applyAmplitudeVariation = (
  amplitude: number,
  time: number,
  variation: number
): number => {
  if (variation === 0) return amplitude;

  const oscillation = Math.sin(time * 0.5) * variation;
  return amplitude * (1 + oscillation);
};

/**
 * Apply frequency modulation
 */
export const applyFrequencyModulation = (
  frequency: number,
  x: number,
  time: number,
  modulation: number
): number => {
  if (modulation === 0) return frequency;

  const mod = Math.sin(time * 0.3 + x * 0.1) * modulation;
  return frequency * (1 + mod);
};

/**
 * Generate SVG path for a wave
 */
export const generateWavePath = (
  width: number,
  height: number,
  waveType: WaveType,
  amplitude: number,
  frequency: number,
  phase: number,
  points: number,
  layers?: WaveLayer[],
  turbulence: number = 0,
  amplitudeVariation: number = 0,
  frequencyModulation: number = 0,
  time: number = 0
): string => {
  const centerY = height / 2;
  const step = width / points;

  let path = `M 0 ${centerY}`;

  // Adjust amplitude with variation
  const adjustedAmplitude = applyAmplitudeVariation(amplitude, time, amplitudeVariation);

  for (let i = 0; i <= points; i++) {
    const x = i * step;
    const normalizedX = (x / width) * Math.PI * 2;

    // Adjust frequency with modulation
    const adjustedFrequency = applyFrequencyModulation(
      frequency,
      normalizedX,
      time,
      frequencyModulation
    );

    let y: number;

    switch (waveType) {
      case 'sine':
        y = sineWave(normalizedX, adjustedAmplitude, adjustedFrequency, phase);
        break;
      case 'cosine':
        y = cosineWave(normalizedX, adjustedAmplitude, adjustedFrequency, phase);
        break;
      case 'layered':
        y = layers ? layeredWave(normalizedX, layers, time) : 0;
        break;
      case 'organic':
        y = organicWave(normalizedX, adjustedAmplitude, adjustedFrequency, phase, time);
        break;
      default:
        y = sineWave(normalizedX, adjustedAmplitude, adjustedFrequency, phase);
    }

    // Add turbulence
    y = addTurbulence(y, normalizedX, turbulence, time);

    path += ` L ${x} ${centerY + y}`;
  }

  return path;
};

/**
 * Get the mathematical formula as a string for display
 */
export const getFormulaString = (
  waveType: WaveType,
  amplitude: number,
  frequency: number,
  layers?: WaveLayer[]
): string => {
  switch (waveType) {
    case 'sine':
      return `y = ${amplitude} × sin(${frequency} × x + φ)`;
    case 'cosine':
      return `y = ${amplitude} × cos(${frequency} × x + φ)`;
    case 'layered':
      if (layers && layers.length > 0) {
        const terms = layers.map((l, i) =>
          `${l.amplitude} × sin(${l.frequency} × x + φ${i})`
        ).join(' + ');
        return `y = ${terms}`;
      }
      return 'y = Σ(A × sin(f × x + φ))';
    case 'organic':
      return `y = ${amplitude} × sin(${frequency} × x + φ) + ${(amplitude * 0.3).toFixed(1)} × cos(${(frequency * 1.5).toFixed(1)} × x + φ)`;
    default:
      return 'y = A × sin(f × x + φ)';
  }
};
