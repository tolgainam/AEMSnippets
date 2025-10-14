/// <reference types="vite/client" />

// Declare module for GLB 3D model files
declare module '*.glb' {
  const src: string;
  export default src;
}

declare module '*.glb?url' {
  const src: string;
  export default src;
}
