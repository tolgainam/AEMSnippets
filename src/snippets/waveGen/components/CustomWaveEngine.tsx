import React, { useEffect, useState, useRef } from 'react';
import {
  AdvancedWaveProps,
} from '../types/waveTypes';
import {
  generateWavePath,
  getFormulaString,
} from '../utils/waveFormulas';
import {
  calculateFlickerOpacity,
  calculatePulsateAmplitude,
  createGlowFilter,
  createShadowFilter,
  createLinearGradient,
  getBlendModeCSS,
} from '../utils/animations';

interface CustomWaveEngineProps extends Partial<AdvancedWaveProps> {
  width?: string | number;
  height?: string | number;
  amplitude: number;
  colors: string[];
  className?: string;
  style?: React.CSSProperties;
  showFormula?: boolean;
}

export const CustomWaveEngine: React.FC<CustomWaveEngineProps> = ({
  width = '100%',
  height = '200px',
  amplitude,
  colors,
  className = '',
  style = {},
  showFormula = false,
  // Advanced props with defaults
  waveType = 'sine',
  strokeWidth = 2,
  speed = 0.3,
  points = 100,
  frequency = 2,
  phaseShift = 0,
  fillMode = 'fill',
  strokeDashArray,
  mirror = false,
  gradientAngle = 0,
  flicker = { enabled: false, speed: 1, intensity: 0.3 },
  pulsate = { enabled: false, speed: 1, range: [0.8, 1.2] },
  reverse = false,
  turbulence = 0,
  amplitudeVariation = 0,
  frequencyModulation = 0,
  layers = [],
  blendMode = 'normal',
  glow = { enabled: false, blur: 10, color: colors[0] || '#ffffff' },
  shadow = { enabled: false, offset: [2, 2], blur: 4, color: 'rgba(0,0,0,0.3)' },
}) => {
  const [time, setTime] = useState(0);
  const animationRef = useRef<number>();
  const svgRef = useRef<SVGSVGElement>(null);

  // Animation loop
  useEffect(() => {
    let startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = (currentTime - startTime) / 1000; // Convert to seconds
      const direction = reverse ? -1 : 1;
      setTime(elapsed * speed * direction);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed, reverse]);

  // Get SVG dimensions
  const svgWidth = svgRef.current?.clientWidth || 800;
  const svgHeight = typeof height === 'number' ? height : parseInt(String(height)) || 200;

  // Calculate current amplitude with pulsate effect
  const currentAmplitude = pulsate.enabled
    ? calculatePulsateAmplitude(time, pulsate.speed, pulsate.range, amplitude)
    : amplitude;

  // Calculate current opacity with flicker effect
  const currentOpacity = flicker.enabled
    ? calculateFlickerOpacity(time, flicker.speed, flicker.intensity, 1)
    : 1;

  // Generate phase with time
  const currentPhase = (phaseShift * Math.PI) / 180 + time;

  // Generate main wave path
  const wavePath = generateWavePath(
    svgWidth,
    svgHeight,
    waveType,
    currentAmplitude,
    frequency,
    currentPhase,
    points,
    waveType === 'layered' ? layers : undefined,
    turbulence,
    amplitudeVariation,
    frequencyModulation,
    time
  );

  // Close the path for filled mode
  const closedPath = fillMode === 'fill' || fillMode === 'both'
    ? `${wavePath} L ${svgWidth} ${svgHeight} L 0 ${svgHeight} Z`
    : wavePath;

  // Create gradient
  const gradientId = `wave-gradient-${Math.random().toString(36).substr(2, 9)}`;
  const glowFilterId = `glow-${Math.random().toString(36).substr(2, 9)}`;
  const shadowFilterId = `shadow-${Math.random().toString(36).substr(2, 9)}`;

  const gradient = createLinearGradient(gradientId, colors, gradientAngle);

  // Determine filters
  const filters: string[] = [];
  if (glow.enabled) filters.push(`url(#${glowFilterId})`);
  if (shadow.enabled) filters.push(`url(#${shadowFilterId})`);

  // Render layers if in layered mode
  const renderLayers = () => {
    if (waveType !== 'layered' || layers.length === 0) return null;

    return layers.map((layer, index) => {
      const layerPhase = (layer.phase * Math.PI) / 180 + time * layer.speed;
      const layerPath = generateWavePath(
        svgWidth,
        svgHeight,
        'sine',
        layer.amplitude,
        layer.frequency,
        layerPhase,
        points,
        undefined,
        turbulence * 0.5, // Reduce turbulence for layers
        0,
        0,
        time
      );

      const layerClosedPath = fillMode === 'fill' || fillMode === 'both'
        ? `${layerPath} L ${svgWidth} ${svgHeight} L 0 ${svgHeight} Z`
        : layerPath;

      return (
        <path
          key={`layer-${index}`}
          d={layerClosedPath}
          fill={fillMode === 'stroke' ? 'none' : layer.color}
          stroke={fillMode === 'fill' ? 'none' : layer.color}
          strokeWidth={layer.strokeWidth || strokeWidth}
          opacity={layer.opacity * currentOpacity}
          style={{ mixBlendMode: getBlendModeCSS(blendMode) as any }}
        />
      );
    });
  };

  const containerStyle: React.CSSProperties = {
    width,
    height,
    overflow: 'hidden',
    position: 'relative',
    ...style,
  };

  return (
    <div className={`custom-wave-engine ${className}`.trim()} style={containerStyle}>
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient definition */}
          <linearGradient id={gradientId} x1={gradient.x1} y1={gradient.y1} x2={gradient.x2} y2={gradient.y2}>
            {gradient.stops.map((stop, i) => (
              <stop key={i} offset={stop.offset} stopColor={stop.color} />
            ))}
          </linearGradient>

          {/* Glow filter */}
          {glow.enabled && (
            <g dangerouslySetInnerHTML={{ __html: createGlowFilter(glowFilterId, glow.blur, glow.color) }} />
          )}

          {/* Shadow filter */}
          {shadow.enabled && (
            <g dangerouslySetInnerHTML={{ __html: createShadowFilter(shadowFilterId, shadow.offset, shadow.blur, shadow.color) }} />
          )}
        </defs>

        {/* Render layers first (background) */}
        {renderLayers()}

        {/* Main wave path */}
        <path
          d={closedPath}
          fill={fillMode === 'stroke' ? 'none' : `url(#${gradientId})`}
          stroke={fillMode === 'fill' ? 'none' : `url(#${gradientId})`}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDashArray}
          opacity={currentOpacity}
          filter={filters.length > 0 ? filters.join(' ') : undefined}
          style={{ mixBlendMode: getBlendModeCSS(blendMode) as any }}
        />

        {/* Mirror effect */}
        {mirror && (
          <path
            d={closedPath}
            fill={fillMode === 'stroke' ? 'none' : `url(#${gradientId})`}
            stroke={fillMode === 'fill' ? 'none' : `url(#${gradientId})`}
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDashArray}
            opacity={currentOpacity * 0.5}
            transform={`scale(1, -1) translate(0, -${svgHeight})`}
          />
        )}
      </svg>

      {/* Formula display */}
      {showFormula && (
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '12px',
          }}
        >
          {getFormulaString(waveType, currentAmplitude, frequency, layers)}
        </div>
      )}
    </div>
  );
};

export default CustomWaveEngine;
