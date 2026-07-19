import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    target: 'es2015',

    // Inline small assets (< 4KB) as base64 to save HTTP requests
    assetsInlineLimit: 4096,

    // Split vendor chunks for better long-term caching
    rollupOptions: {
      output: {
        // Vite 8 (rolldown) requires manualChunks as a function, not an object
        manualChunks: (id) => {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/gsap')) {
            return 'vendor-gsap';
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-ui';
          }
        },
        // Compact asset file names
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },

    // Minify with terser for smallest output
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,  // Remove console.log in production
        drop_debugger: true,
        passes: 2,
      },
    },

    // Warn when chunks exceed 500KB
    chunkSizeWarningLimit: 500,
  },

  // Optimize dev experience
  server: {
    hmr: true,
  },
})
