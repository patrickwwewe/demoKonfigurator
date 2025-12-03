import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/demoKonfigurator/',  // Repository name für GitHub Pages
  build: {
    outDir: '../dist',  // Build direkt in root/dist für GitHub Pages
    emptyOutDir: true
  },
  server: {
    port: 5173
  }
})