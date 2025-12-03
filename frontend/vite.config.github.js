import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',  // Relative Pfade für GitHub Pages
  build: {
    outDir: '../dist',  // Build direkt in root/dist für GitHub Pages
    emptyOutDir: true,
    assetsDir: 'assets'
  },
  server: {
    port: 5173
  }
})