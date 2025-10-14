import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface Scene3DProps {
  modelPath: string;
  currentFrame: number;
  totalFrames: number;
  camera?: {
    position: [number, number, number];
    fov: number;
    target: [number, number, number];
    zoom?: number;
    rotation?: [number, number, number];
  };
  onLoad?: () => void;
}

const Scene3DComponent: React.FC<Scene3DProps> = ({
  modelPath,
  currentFrame,
  totalFrames,
  camera,
  onLoad
}) => {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(modelPath);
  const mixer = useRef<THREE.AnimationMixer | null>(null);
  const action = useRef<THREE.AnimationAction | null>(null);
  const [hasAnimations, setHasAnimations] = useState(false);
  const { camera: threeCamera } = useThree();

  // Initialize animation mixer
  useEffect(() => {
    if (scene) {
      if (animations.length > 0) {
        mixer.current = new THREE.AnimationMixer(scene);
        const clip = animations[0];
        const animAction = mixer.current.clipAction(clip);

        // Configure the action to loop seamlessly
        animAction.setLoop(THREE.LoopRepeat, Infinity);
        animAction.clampWhenFinished = false;
        animAction.play();
        animAction.paused = true;

        action.current = animAction;
        setHasAnimations(true);
      } else {
        setHasAnimations(false);
      }

      if (onLoad) {
        onLoad();
      }
    }

    return () => {
      if (mixer.current) {
        mixer.current.stopAllAction();
        mixer.current = null;
      }
      action.current = null;
    };
  }, [scene, animations, onLoad]);

  // Set camera position and rotation
  useEffect(() => {
    if (camera?.position) {
      threeCamera.position.set(...camera.position);
    }
    if (camera?.target) {
      threeCamera.lookAt(new THREE.Vector3(...camera.target));
    }
    // Apply additional rotation after lookAt (adds to the lookAt rotation)
    if (camera?.rotation) {
      threeCamera.rotation.x += camera.rotation[0];
      threeCamera.rotation.y += camera.rotation[1];
      threeCamera.rotation.z += camera.rotation[2];
    }
  }, [camera, threeCamera]);

  // Update animation frame
  useEffect(() => {
    if (!hasAnimations || !mixer.current || !action.current) {
      // For static models, rotate the model based on currentFrame
      if (group.current && !hasAnimations) {
        // Smooth rotation - full 360° rotation across totalFrames
        const rotationY = (currentFrame / totalFrames) * Math.PI * 2;
        group.current.rotation.y = rotationY;
      }
      return;
    }

    // For animated models
    const clip = action.current.getClip();
    const duration = clip.duration;

    // Calculate time with looping - if animation is shorter than totalFrames, it will loop
    const normalizedProgress = (currentFrame % totalFrames) / totalFrames;
    const time = normalizedProgress * duration;

    // Ensure the action is playing but paused at the specific time
    if (!action.current.isRunning()) {
      action.current.reset();
      action.current.play();
    }
    action.current.paused = true;
    action.current.time = time;

    // Force update the mixer
    mixer.current.update(0);

  }, [currentFrame, totalFrames, hasAnimations]);

  // Don't auto-update mixer in the render loop - we control time manually
  useFrame(() => {
    // Intentionally empty - we manually control animation time via currentFrame
  });

  // Enable shadows on the model
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [scene]);

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={camera?.position || [0, 0, 5]}
        fov={camera?.fov || 50}
        zoom={camera?.zoom || 1}
      />

      {/* Ambient light for soft base illumination */}
      <ambientLight intensity={0.5} color="#ffffff" />

      {/* Main key light - soft from top-right */}
      <directionalLight
        position={[5, 8, 5]}
        intensity={0.4}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-bias={-0.0001}
        shadow-radius={10}
      />

      {/* Fill light from left - very soft */}
      <directionalLight
        position={[-5, 3, 2]}
        intensity={0.2}
        color="#b8c6ff"
      />

      {/* Rim/back light for depth */}
      <directionalLight
        position={[0, 2, -5]}
        intensity={0.25}
        color="#fff5e6"
      />

      {/* Accent light from top-left for additional shine */}
      <spotLight
        position={[-6, 6, 3]}
        intensity={0.35}
        angle={Math.PI / 4}
        penumbra={0.5}
        color="#ffffff"
        castShadow={false}
      />

      {/* Ground plane to receive shadows */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2, 0]}
        receiveShadow
      >
        <planeGeometry args={[20, 20]} />
        <shadowMaterial opacity={0.08} />
      </mesh>

      <primitive ref={group} object={scene} />
    </>
  );
};

// Export memoized version to prevent re-renders
export const Scene3D = React.memo(Scene3DComponent);

// Preload the model
export const preloadModel = (modelPath: string) => {
  useGLTF.preload(modelPath);
};
