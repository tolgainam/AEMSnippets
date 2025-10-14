/**
 * Hook to handle responsive camera positions
 */

import { useState, useEffect } from 'react';
import type { CameraConfig } from '../types/config';

const MOBILE_BREAKPOINT = 768;

/**
 * Determines if position/target is responsive (object) or static (array)
 */
function isResponsive<T>(
  value: T | { mobile?: T; desktop?: T } | undefined
): value is { mobile?: T; desktop?: T } {
  return value !== undefined && !Array.isArray(value) && typeof value === 'object';
}

/**
 * Get the appropriate camera value based on screen size
 */
function getCameraValue<T>(
  value: T | { mobile?: T; desktop?: T } | undefined,
  isMobile: boolean,
  defaultValue: T
): T {
  if (!value) return defaultValue;

  if (isResponsive(value)) {
    if (isMobile && value.mobile) return value.mobile;
    if (!isMobile && value.desktop) return value.desktop;
    // Fallback to desktop if mobile not defined, or mobile if desktop not defined
    return (value.desktop || value.mobile || defaultValue) as T;
  }

  return value as T;
}

/**
 * Hook that returns responsive camera position and target
 */
export const useResponsiveCamera = (camera?: CameraConfig) => {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const position = getCameraValue(
    camera?.position,
    isMobile,
    [0, 0, 5] as [number, number, number]
  );

  const target = getCameraValue(
    camera?.target,
    isMobile,
    [0, 0, 0] as [number, number, number]
  );

  return {
    position,
    target,
    fov: camera?.fov || 50,
    isMobile,
  };
};
