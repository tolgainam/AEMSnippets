import React, { useRef, useEffect, useCallback } from 'react';

// Linear interpolation function
const lerp = (a: number, b: number, t: number): number => {
  return a + t * (b - a);
};

// Function to convert a hexadecimal color to RGBA
const hexToRgba = (hex: string, alpha: number = 1): string => {
  if (hex[0] === "#") {
    hex = hex.slice(1);
  }
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export interface EnhancedWavesProps extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
  /** The amplitude of the waveform */
  amplitude?: number;
  /** The colors for the waveform gradient */
  colors?: string[];
  /** Turbulence/noise intensity (0-1) */
  turbulence?: number;
  /** Amplitude variation intensity (0-1) - breathing effect */
  amplitudeVariation?: number;
  /** Line thickness/stroke width */
  lineWidth?: number;
}

export const EnhancedWaves: React.FC<EnhancedWavesProps> = ({
  amplitude = 20,
  colors = ["#436EDB"],
  turbulence = 0,
  amplitudeVariation = 0,
  lineWidth = 2,
  ...props
}) => {
  const amplitudeRef = useRef(amplitude);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const targetAmplitudeRef = useRef(amplitude);

  // Update the target amplitude whenever the amplitude prop changes
  useEffect(() => {
    targetAmplitudeRef.current = amplitude;
  }, [amplitude]);

  // Simple noise function for turbulence
  const noise = useCallback((x: number, time: number): number => {
    // Use combination of sine waves for pseudo-random noise
    return Math.sin(x * 10 + time) * Math.cos(x * 7 + time * 0.5);
  }, []);

  // Function to draw the waveform on the canvas
  const drawWaveform = useCallback((
    ctx: CanvasRenderingContext2D,
    amplitude: number,
    frequency: number,
    color: string | CanvasGradient,
    phase: number = 0,
    turbulenceAmount: number = 0,
    time: number = 0
  ) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();

    // Draw the waveform
    for (let i = 0; i < ctx.canvas.width; i++) {
      // Compute the pinching effect
      const sineWave = Math.sin(Math.PI * (i / ctx.canvas.width));
      const pinch = Math.pow(sineWave, 6);

      // Calculate base y position with sine function and pinch effect
      let y = amplitude * Math.sin(frequency * i + phase) * pinch;

      // Add turbulence/noise if enabled
      if (turbulenceAmount > 0) {
        const noiseValue = noise(i / ctx.canvas.width, time);
        y += noiseValue * turbulenceAmount * 10;
      }

      ctx.lineTo(i, ctx.canvas.height / 2 + y);
    }

    ctx.stroke();
  }, [noise, lineWidth]);

  // Animate the waveform
  useEffect(() => {
    let animationFrameId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (parent) {
      canvas.width = parent.clientWidth;
    }

    const animate = () => {
      const time = Date.now() * 0.0015;

      // Smoothly interpolate amplitude changes
      amplitudeRef.current = lerp(amplitudeRef.current, targetAmplitudeRef.current, 0.1);

      // Create an oscillating effect with amplitude
      // Base oscillation + user-controlled variation
      const baseOscillation = 1 + Math.sin(time) * 0.05;
      const userVariation = amplitudeVariation * Math.sin(time * 0.7) * 0.5;
      const oscillatingAmplitude = amplitudeRef.current * (baseOscillation + userVariation);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Define primary waveforms with their respective amplitudes, frequencies, and colors
      const primaryWaveforms = [
        {
          amplitude: oscillatingAmplitude,
          frequency: 0.02,
          alpha: 0.6,
          speed: 0.001,
        },
        {
          amplitude: oscillatingAmplitude * 0.6,
          frequency: 0.03,
          alpha: 0.4,
          speed: 0.004,
        },
        {
          amplitude: oscillatingAmplitude * 0.3,
          frequency: 0.04,
          alpha: 0.2,
          speed: 0.007,
        },
      ];

      // For each primary waveform, draw the waveform and its surrounding mesh
      for (const primary of primaryWaveforms) {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        const stopIncrement = colors.length > 1 ? 1 / (colors.length - 1) : 0;
        colors.forEach((color, index) => {
          gradient.addColorStop(stopIncrement * index, hexToRgba(color, primary.alpha));
        });

        drawWaveform(
          ctx,
          primary.amplitude,
          primary.frequency,
          gradient,
          Date.now() * primary.speed,
          turbulence,
          time
        );

        // Draw secondary waveforms around the primary waveform (mesh effect)
        for (let i = 0; i < 30; i++) {
          const amp = primary.amplitude - i * 0.1;
          const freq = primary.frequency + i * 0.00025;
          const alpha = primary.alpha * 0.6 - i * 0.01;

          const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
          const stopIncrement = colors.length > 1 ? 1 / (colors.length - 1) : 0;
          colors.forEach((color, index) => {
            gradient.addColorStop(stopIncrement * index, hexToRgba(color, alpha));
          });

          drawWaveform(
            ctx,
            amp,
            freq,
            gradient,
            Date.now() * primary.speed + i * 0.015,
            turbulence * 0.5, // Reduce turbulence for secondary waves
            time
          );
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up the animation frame when the component unmounts
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [colors, drawWaveform, turbulence, amplitudeVariation]);

  // Render the canvas
  return (
    <canvas
      ref={canvasRef}
      width="100%"
      height="auto"
      {...props}
    />
  );
};

export default React.memo(EnhancedWaves);
