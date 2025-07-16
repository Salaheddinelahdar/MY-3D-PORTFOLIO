import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  // Load environment variables
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react()],
    define: {
      'process.env': process.env,
      global: 'globalThis', // Fix for Three.js
    },
    build: {
      sourcemap: true, // Enable source maps for better debugging
      chunkSizeWarningLimit: 1000, // Increase chunk size warning limit
      rollupOptions: {
        output: {
          manualChunks: {
            three: ['three', '@react-three/fiber', '@react-three/drei'],
            vendor: ['react', 'react-dom', 'react-router-dom'],
          },
        },
      },
    },
    server: {
      host: true, // Listen on all network interfaces
      port: 5173,
      strictPort: true,
    },
    base: '/', // Ensure base path is set correctly
  });
};
