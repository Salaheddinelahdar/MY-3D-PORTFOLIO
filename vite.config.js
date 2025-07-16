import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  // Load only the environment variables we need
  const env = loadEnv(mode, process.cwd(), '');
  
  // Only pass the environment variables that start with VITE_ to the client
  const processEnv = {};
  Object.keys(env).forEach((key) => {
    if (key.startsWith('VITE_')) {
      processEnv[key] = JSON.stringify(env[key]);
    }
  });

  return defineConfig({
    plugins: [react()],
    define: {
      'process.env': processEnv,
      global: 'globalThis',
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
