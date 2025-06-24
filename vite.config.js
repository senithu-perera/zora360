import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/zora360/', // Replace 'zora360' with your actual repository name
  build: {
    outDir: 'dist',
  },
})