import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/movie-dom/',
  plugins: [react()],
  test: {
    setupFiles: './src/setupTests.js',
  },
});
