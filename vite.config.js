import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  define: {
    'process.env': {},
    global: 'globalThis',
  },
  build: {
    sourcemap: mode !== 'production',
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('three') || id.includes('@react-three')) {
              return 'vendor_three';
            }
            if (id.includes('react')) {
              return 'vendor_react';
            }
            return 'vendor';
          }
        },
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
      },
    },
  },
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  },
  base: './', // Use relative paths for better compatibility
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
    },
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
}));
