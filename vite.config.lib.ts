import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// Library build configuration
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ['src/index.ts', 'src/components/**/*', 'src/tokens/**/*'],
      exclude: ['src/demo/**/*', 'src/embed/**/*', 'src/main.tsx']
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'GradientTypography',
      formats: ['es', 'umd'],
      fileName: (format) => `gradient-typography.${format}.js`
    },
    outDir: 'lib',
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})