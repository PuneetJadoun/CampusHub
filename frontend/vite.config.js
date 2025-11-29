import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],

  test: {
    globals: true,               // describe, it, expect without imports
    environment: 'jsdom',        // browser-like environment
    setupFiles: './src/test/setupTests.js',  // hamari test setup file
  },

});
