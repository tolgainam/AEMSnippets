import React, { useRef, useEffect, useCallback, useMemo } from 'react';

// Linear interpolation function
const lerp = (a: number, b: number, t: number): number => {
  return a + t * (b - a);
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
  /** Animation speed multiplier (0.1-5) */
  speed?: number;
  /** Gradient direction: 'horizontal' or 'vertical' */
  gradientDirection?: 'horizontal' | 'vertical';
}

export const EnhancedWaves: React.FC<EnhancedWavesProps> = ({
  amplitude = 20,
  colors = ["#436EDB"],
  turbulence = 0,
  amplitudeVariation = 0,
  lineWidth = 2,
  speed = 1,
  gradientDirection = 'horizontal',
  ...props
}) => {
  const amplitudeRef = useRef(amplitude);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const targetAmplitudeRef = useRef(amplitude);

  // Cache RGBA color conversions to avoid recalculating every frame
  const rgbaColors = useMemo(() => {
    return colors.map(color => {
      if (color[0] === "#") {
        const hex = color.slice(1);
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return { r, g, b };
      }
      return { r: 0, g: 0, b: 0 };
    });
  }, [colors]);

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

    // Draw the waveform with optimized sampling (every 3 pixels)
    const step = 3;
    for (let i = 0; i < ctx.canvas.width; i += step) {
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

    // Function to update canvas dimensions
    const updateCanvasDimensions = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
      }
    };

    // Set initial dimensions
    updateCanvasDimensions();

    // Add resize listener to handle responsive behavior
    const handleResize = () => {
      updateCanvasDimensions();
    };

    window.addEventListener('resize', handleResize);

    const animate = () => {
      const time = Date.now() * 0.0015 * speed;

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
          speed: 0.001 * speed,
        },
        {
          amplitude: oscillatingAmplitude * 0.6,
          frequency: 0.03,
          alpha: 0.4,
          speed: 0.004 * speed,
        },
        {
          amplitude: oscillatingAmplitude * 0.3,
          frequency: 0.04,
          alpha: 0.2,
          speed: 0.007 * speed,
        },
      ];

      // Calculate time once per frame instead of multiple times
      const currentTime = Date.now();

      // For each primary waveform, draw the waveform and its surrounding mesh
      for (const primary of primaryWaveforms) {
        // Create gradient based on direction
        const gradient = gradientDirection === 'vertical'
          ? ctx.createLinearGradient(0, 0, 0, canvas.height)
          : ctx.createLinearGradient(0, 0, canvas.width, 0);

        const stopIncrement = rgbaColors.length > 1 ? 1 / (rgbaColors.length - 1) : 0;
        rgbaColors.forEach((color, index) => {
          gradient.addColorStop(stopIncrement * index, `rgba(${color.r}, ${color.g}, ${color.b}, ${primary.alpha})`);
        });

        drawWaveform(
          ctx,
          primary.amplitude,
          primary.frequency,
          gradient,
          currentTime * primary.speed,
          turbulence,
          time
        );

        // Draw secondary waveforms around the primary waveform (mesh effect)
        for (let i = 0; i < 10; i++) {
          const amp = primary.amplitude - i * 0.1;
          const freq = primary.frequency + i * 0.00025;
          const alpha = primary.alpha * 0.6 - i * 0.01;

          // Create gradient based on direction
          const gradient = gradientDirection === 'vertical'
            ? ctx.createLinearGradient(0, 0, 0, canvas.height)
            : ctx.createLinearGradient(0, 0, canvas.width, 0);

          const stopIncrement = rgbaColors.length > 1 ? 1 / (rgbaColors.length - 1) : 0;
          rgbaColors.forEach((color, index) => {
            gradient.addColorStop(stopIncrement * index, `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`);
          });

          drawWaveform(
            ctx,
            amp,
            freq,
            gradient,
            currentTime * primary.speed + i * 0.015,
            turbulence * 0.5, // Reduce turbulence for secondary waves
            time
          );
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up the animation frame and resize listener when the component unmounts
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [colors, drawWaveform, turbulence, amplitudeVariation, speed, gradientDirection, rgbaColors]);

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
