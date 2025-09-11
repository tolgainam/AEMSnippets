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
        'gradientTypography/embed': resolve(__dirname, 'gradientTypography/embed.html')
      }
    }
  },
  // Handle client-side routing for production
  preview: {
    port: 4173,
    strictPort: true,
  }
})