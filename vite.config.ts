import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Demo app build configuration for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/AEMSnippets/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'gradientTypography/embed': resolve(__dirname, 'gradientTypography/embed.html'),
        'glassTypography/embed': resolve(__dirname, 'glassTypography/embed.html'),
        'contentStack/embed': resolve(__dirname, 'contentStack/embed.html'),
        'tickertape/embed': resolve(__dirname, 'tickertape/embed.html'),
        'waveGen/embed': resolve(__dirname, 'waveGen/embed.html'),
        'glowingBento/embed': resolve(__dirname, 'glowingBento/embed.html'),
        '3dProductCard/embed': resolve(__dirname, '3dProductCard/embed.html')
      }
    }
  },
  // Handle client-side routing for production
  preview: {
    port: 4173,
    strictPort: true,
  }
})