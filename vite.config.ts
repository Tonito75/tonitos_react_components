import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/components/index.tsx', // Entry point for your library
      name: 'TonitosReactComponents', // Global variable for UMD build
      fileName: (format) => `tonitos-react-components.${format}.js`,
    }
  }
})
