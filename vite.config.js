import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      three: path.resolve(__dirname, 'src/three-compat.js'),
    },
  },
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
