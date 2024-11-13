import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port: 4000,
    // Get rid (remove) of the CORS error
    proxy: {
      "/api" : {
        target: "http://localhost:5010", 
        changeOrigin: true,
        // because not use https
        secure: false,
      }
    }
  },
})
