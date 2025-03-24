import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './',  // Ensure correct root path
  build: {
    outDir: 'dist',
  },
});
