import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Sitio de usuario (refm130995.github.io): se sirve desde la raíz.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
