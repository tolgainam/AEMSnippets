/**
 * Debug utility to inspect GLB model contents
 */
export const debugGLTF = (scene: any, animations: any[]) => {
  console.group('🔍 GLB Model Debug Info');

  console.log('Scene:', scene);
  console.log('Has animations:', animations.length > 0);
  console.log('Animation count:', animations.length);

  if (animations.length > 0) {
    animations.forEach((anim, index) => {
      console.log(`Animation ${index}:`, {
        name: anim.name,
        duration: anim.duration,
        tracks: anim.tracks.length,
        trackNames: anim.tracks.map((t: any) => t.name)
      });
    });
  } else {
    console.warn('⚠️ No animations found in GLB file');
    console.log('This model is static. The snippet will work but without embedded animations.');
  }

  // Scene hierarchy
  console.log('Scene hierarchy:');
  scene.traverse((child: any) => {
    if (child.isMesh) {
      console.log('  Mesh:', child.name || 'unnamed', {
        geometry: child.geometry,
        material: child.material
      });
    }
  });

  console.groupEnd();
};
