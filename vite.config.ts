import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@tokens': path.resolve(__dirname, './tokens'),
      '@components': path.resolve(__dirname, './components'),
    },
  },
  root: './playground',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
