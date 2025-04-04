import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { imagetools } from 'vite-imagetools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools(),
    VitePWA({
      strategies: 'generateSW',
      globDirectory: 'dist',
      globPatterns: ['**/*.{js,css,html}'],
      globIgnores: ['node_modules/**/*', 'sw.js', 'workbox-*.js'],
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Samskruthi 2025',
        short_name: 'Samskruthi',
        description: 'East Point Group of Institutions Annual Cultural Fest',
        theme_color: '#0077b6',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
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
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation-vendor': ['framer-motion'],
          'ui-vendor': ['styled-components', 'react-icons']
        }
      }
    },
    // Enable source maps for production
    sourcemap: true,
    // Optimize chunk size
    chunkSizeWarningLimit: 1000
  },
  server: {
    // Enable compression
    compress: true
  }
})
