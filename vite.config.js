import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Samskruthi 2025',
        short_name: 'Samskruthi',
        description: 'Annual Cultural Fest of East Point Group of Institutions',
        theme_color: '#03045e',
        icons: [
          {
            src: '/src/assets/Resources/logos/samskruthilogo.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globDirectory: 'dist',
        globPatterns: [
          '**/*.{js,css,html,ico,png,svg,jpg,jpeg,gif,webp,mp4,JPG,avif}'
        ],
        globIgnores: [
          '**/node_modules/**/*',
          'sw.js',
          'workbox-*.js'
        ]
      }
    })
  ],
  build: {
    // Enable minification and optimization
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Split chunks for better caching
    rollupOptions: {
      external: ['web-vitals'],
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['framer-motion', 'styled-components']
        }
      }
    },
    // Enable source maps for production
    sourcemap: true,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000
  },
  server: {
    port: 3000,
    open: true
  },
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.svg', '**/*.mp4', '**/*.webp', '**/*.avif'],
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'styled-components']
  }
})
