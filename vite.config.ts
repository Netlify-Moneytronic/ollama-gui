import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Shh....
  build: { chunkSizeWarningLimit: 1500 },
  server: {
    cors: true
  },
  preview: {
    cors: true
  }
})
