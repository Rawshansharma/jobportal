import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
    proxy: {
      // Proxy all API requests to the JSON server
      '/api': {
        target: 'http://localhost:8000',  // JSON server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),  // Remove '/api' prefix when forwarding
      },
    },
  }
})
