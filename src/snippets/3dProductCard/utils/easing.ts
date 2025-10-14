/**
 * Easing functions for smooth animations
 */

export type EasingFunction = (t: number) => number;

/**
 * Linear easing - no acceleration
 */
export const easeLinear: EasingFunction = (t) => t;

/**
 * Ease In Quad - accelerating from zero velocity
 */
export const easeInQuad: EasingFunction = (t) => t * t;

/**
 * Ease Out Quad - decelerating to zero velocity
 */
export const easeOutQuad: EasingFunction = (t) => t * (2 - t);

/**
 * Ease In Out Quad - acceleration until halfway, then deceleration
 */
export const easeInOutQuad: EasingFunction = (t) =>
  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

/**
 * Ease In Cubic - accelerating from zero velocity
 */
export const easeInCubic: EasingFunction = (t) => t * t * t;

/**
 * Ease Out Cubic - decelerating to zero velocity
 */
export const easeOutCubic: EasingFunction = (t) => (--t) * t * t + 1;

/**
 * Ease In Out Cubic - smooth acceleration and deceleration
 */
export const easeInOutCubic: EasingFunction = (t) =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

/**
 * Ease In Out Sine - smooth sinusoidal easing
 */
export const easeInOutSine: EasingFunction = (t) =>
  -(Math.cos(Math.PI * t) - 1) / 2;

/**
 * Default easing function for camera movements
 */
export const easeCameraDefault = easeInOutCubic;

/**
 * Lerp (Linear Interpolation) between two values
 */
export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

/**
 * Interpolate between two 3D vectors with easing
 */
export function lerpVector3(
  start: [number, number, number],
  end: [number, number, number],
  t: number,
  easingFn: EasingFunction = easeCameraDefault
): [number, number, number] {
  const easedT = easingFn(t);
  return [
    lerp(start[0], end[0], easedT),
    lerp(start[1], end[1], easedT),
    lerp(start[2], end[2], easedT),
  ];
}

/**
 * Get interpolated camera settings between two keyframes
 */
export function interpolateCamera(
  fromCamera: {
    position: [number, number, number];
    target: [number, number, number];
    fov: number;
    zoom: number;
    rotation?: [number, number, number];
  },
  toCamera: {
    position: [number, number, number];
    target: [number, number, number];
    fov: number;
    zoom: number;
    rotation?: [number, number, number];
  },
  progress: number,
  easingFn: EasingFunction = easeCameraDefault
) {
  const easedProgress = easingFn(progress);

  // Default rotation if not specified
  const fromRotation = fromCamera.rotation || [0, 0, 0];
  const toRotation = toCamera.rotation || [0, 0, 0];

  return {
    position: lerpVector3(fromCamera.position, toCamera.position, progress, easingFn),
    target: lerpVector3(fromCamera.target, toCamera.target, progress, easingFn),
    fov: lerp(fromCamera.fov, toCamera.fov, easedProgress),
    zoom: lerp(fromCamera.zoom, toCamera.zoom, easedProgress),
    rotation: lerpVector3(fromRotation, toRotation, progress, easingFn),
  };
}
