import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// Demo app build configuration for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/colorTypography/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        embed: resolve(__dirname, 'embed.html')
      }
    }
  }
})