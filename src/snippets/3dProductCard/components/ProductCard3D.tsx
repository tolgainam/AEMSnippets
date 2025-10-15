import React, { useState, useEffect, useCallback, useMemo, useRef, useImperativeHandle, forwardRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene3D } from './Scene3D';
import { ContentOverlay } from './ContentOverlay';
import { NavigationControls } from './NavigationControls';
import type { ProductCard3DProps, Keyframe } from '../types/config';
import { useDesignTokens } from '../hooks/useDesignTokens';
import { useResponsiveCamera } from '../hooks/useResponsiveCamera';
import { interpolateCamera } from '../utils/easing';
import './ProductCard3D.css';

export interface ProductCard3DHandle {
  captureCamera: () => {
    position: [number, number, number];
    target: [number, number, number];
    fov: number;
    zoom: number;
  } | null;
  jumpToKeyframe: (index: number) => void;
}

export const ProductCard3D = forwardRef<ProductCard3DHandle, ProductCard3DProps>(({
  config,
  width = '100%',
  height = '600px',
  onAnimationChange,
  onButtonClick,
  enableOrbitControls = false
}, ref) => {
  const [currentKeyframeIndex, setCurrentKeyframeIndex] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Destructure config early so we can use these in hooks
  const { animation, keyframes, modelPath, camera, style } = config;

  // Ref to store camera capture function from Scene3D
  const cameraCaptureRef = useRef<(() => {
    position: [number, number, number];
    target: [number, number, number];
    fov: number;
    zoom: number;
  } | null) | null>(null);

  // Animate to a specific frame
  const animateToFrame = useCallback((targetFrame: number, onComplete?: () => void) => {
    setIsPlaying(true);
    const startFrame = currentFrame;
    const frameDiff = targetFrame - startFrame;
    const fps = animation.fps || 30;
    const duration = Math.abs(frameDiff) / fps * 1000; // in ms
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const frame = startFrame + frameDiff * progress;
      setCurrentFrame(Math.round(frame));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsPlaying(false);
        if (onComplete) onComplete();
      }
    };

    requestAnimationFrame(animate);
  }, [currentFrame, animation.fps]);

  // Expose methods to parent
  useImperativeHandle(ref, () => ({
    captureCamera: () => {
      if (cameraCaptureRef.current) {
        return cameraCaptureRef.current();
      }
      return null;
    },
    jumpToKeyframe: (index: number) => {
      console.log('[ProductCard3D] jumpToKeyframe called with index:', index);
      if (index >= 0 && index < keyframes.length) {
        setCurrentKeyframeIndex(index);
        animateToFrame(keyframes[index].frame);
      }
    }
  }), [keyframes, animateToFrame]);

  // Determine if mobile based on width
  const widthNum = typeof width === 'number' ? width : parseInt(width as string) || 0;
  const isMobileSize = widthNum <= 768;

  // Apply design tokens to styles with responsive typography
  const mergedStyle = useDesignTokens(style, isMobileSize);

  // Get responsive camera position/target (pass isMobileSize for iframe embeds)
  const responsiveCamera = useResponsiveCamera(camera, isMobileSize);

  // Get current keyframe
  const currentKeyframe: Keyframe | null = keyframes[currentKeyframeIndex] || null;

  // Initialize to first keyframe on mount
  useEffect(() => {
    if (keyframes.length > 0 && currentFrame === 0) {
      setCurrentFrame(keyframes[0].frame);
    }
  }, []);  // Only run once on mount

  // Notify parent of animation changes
  useEffect(() => {
    if (onAnimationChange) {
      onAnimationChange(currentKeyframeIndex, isPlaying);
    }
  }, [currentKeyframeIndex, isPlaying, onAnimationChange]);

  // Navigate to previous keyframe
  const handlePrevious = useCallback(() => {
    if (currentKeyframeIndex > 0) {
      const newIndex = currentKeyframeIndex - 1;
      const prevKeyframe = keyframes[newIndex];

      // Update index immediately to show new content
      setCurrentKeyframeIndex(newIndex);

      // Then animate to the frame
      animateToFrame(prevKeyframe.frame);
    }
  }, [currentKeyframeIndex, keyframes, animateToFrame]);

  // Navigate to next keyframe
  const handleNext = useCallback(() => {
    if (currentKeyframeIndex < keyframes.length - 1) {
      const newIndex = currentKeyframeIndex + 1;
      const nextKeyframe = keyframes[newIndex];

      // Update index immediately to show new content
      setCurrentKeyframeIndex(newIndex);

      // Then animate to the frame
      animateToFrame(nextKeyframe.frame);
    }
  }, [currentKeyframeIndex, keyframes, animateToFrame]);

  const containerStyle: React.CSSProperties = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    background: mergedStyle.background !== undefined ? mergedStyle.background : '#1a1a1a',
  };

  // Memoize handleLoad to prevent re-renders
  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // Helper to resolve responsive camera values (including primitives like number)
  const resolveResponsiveValue = <T,>(value: T | { mobile?: T; desktop?: T } | undefined, fallback: T): T => {
    if (value === undefined) return fallback;
    if (typeof value === 'number') return value as T;
    if (Array.isArray(value)) return value as T;
    if (typeof value === 'object' && value !== null && ('mobile' in value || 'desktop' in value)) {
      const resolved = (isMobileSize ? (value as any).mobile : (value as any).desktop);
      return resolved !== undefined ? resolved : fallback;
    }
    // If it's a primitive value (number, string, etc), return it directly
    if (value !== null && value !== undefined) return value as T;
    return fallback;
  };

  // Get camera for a specific keyframe with fallback to global settings
  const getKeyframeCamera = useCallback((kf: Keyframe | null) => {
    const kfPosition = kf?.camera?.position;
    const kfTarget = kf?.camera?.target;
    const kfFov = kf?.camera?.fov;
    const kfZoom = kf?.camera?.zoom;

    return {
      position: resolveResponsiveValue(kfPosition, responsiveCamera.position),
      target: resolveResponsiveValue(kfTarget, responsiveCamera.target),
      fov: resolveResponsiveValue(kfFov, responsiveCamera.fov),
      zoom: resolveResponsiveValue(kfZoom, 1),
      rotation: kf?.camera?.rotation || [0, 0, 0] as [number, number, number],
    };
  }, [responsiveCamera, isMobileSize]);

  // Interpolate camera between keyframes based on current frame
  const effectiveCamera = useMemo(() => {
    // Find the two keyframes we're between
    let prevKeyframeIndex = 0;
    let nextKeyframeIndex = 0;

    for (let i = 0; i < keyframes.length; i++) {
      if (keyframes[i].frame <= currentFrame) {
        prevKeyframeIndex = i;
      }
      if (keyframes[i].frame >= currentFrame && nextKeyframeIndex === 0) {
        nextKeyframeIndex = i;
      }
    }

    const prevKeyframe = keyframes[prevKeyframeIndex];
    const nextKeyframe = keyframes[nextKeyframeIndex];

    // If we're exactly on a keyframe or before the first one
    if (prevKeyframeIndex === nextKeyframeIndex || currentFrame <= prevKeyframe.frame) {
      const camera = getKeyframeCamera(prevKeyframe);
      return {
        ...camera,
        isMobile: responsiveCamera.isMobile,
      };
    }

    // Calculate interpolation progress between the two keyframes
    const frameDiff = nextKeyframe.frame - prevKeyframe.frame;
    const progress = (currentFrame - prevKeyframe.frame) / frameDiff;

    // Get camera settings for both keyframes
    const fromCamera = getKeyframeCamera(prevKeyframe);
    const toCamera = getKeyframeCamera(nextKeyframe);

    // Interpolate between them with easing
    const interpolated = interpolateCamera(fromCamera, toCamera, progress);

    return {
      ...interpolated,
      isMobile: responsiveCamera.isMobile,
    };
  }, [currentFrame, keyframes, responsiveCamera, getKeyframeCamera]);

  // Memoize Scene3D to prevent unnecessary re-renders
  const scene3D = useMemo(() => (
    <Scene3D
      modelPath={modelPath}
      currentFrame={currentFrame}
      totalFrames={animation.totalFrames}
      camera={effectiveCamera}
      onLoad={handleLoad}
      enableOrbitControls={enableOrbitControls}
      cameraCaptureRef={cameraCaptureRef}
    />
  ), [modelPath, currentFrame, animation.totalFrames, effectiveCamera, handleLoad, enableOrbitControls]);

  return (
    <div className={`product-card-3d ${isMobileSize ? 'product-card-3d--mobile' : ''}`} style={containerStyle}>
      <Canvas
        className="product-card-3d__canvas"
        gl={{ antialias: true, alpha: true }}
        shadows
        key={modelPath} // Only remount if model path changes
      >
        {scene3D}
      </Canvas>

      {isLoaded && (
        <>
          <ContentOverlay
            keyframe={currentKeyframe}
            style={mergedStyle}
            onButtonClick={onButtonClick}
          />

          {keyframes.length > 1 && (
            <NavigationControls
              currentKeyframe={currentKeyframeIndex}
              totalKeyframes={keyframes.length}
              onPrevious={handlePrevious}
              onNext={handleNext}
              style={mergedStyle}
            />
          )}
        </>
      )}

      {!isLoaded && (
        <div className="product-card-3d__loader">
          <div className="loader-spinner" />
          <p>Loading 3D Model...</p>
        </div>
      )}
    </div>
  );
});

ProductCard3D.displayName = 'ProductCard3D';

export type { ProductCard3DProps };
