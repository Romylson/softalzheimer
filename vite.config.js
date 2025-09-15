import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3001'
    }
    },
  build: {
    // Increase chunk size warning limit to avoid noisy build output
    // Largest asset currently ~6MB; set threshold higher to suppress warnings
    chunkSizeWarningLimit: 8000
  }
});
