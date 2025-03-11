import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|webp|avif)$/i,
      exclude: undefined,
      includePublic: true,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false,
              },
              cleanupIDs: false,
            },
          },
        ],
      },
      png: {
        quality: 80,
        compressionLevel: 9,
      },
      jpeg: {
        quality: 80,
        progressive: true,
      },
      jpg: {
        quality: 80,
        progressive: true,
      },
      webp: {
        quality: 80,
        alphaQuality: 90,
        lossless: false,
        nearLossless: false,
        smartSubsample: true,
        preset: 'photo',
        effort: 4,
      },
      avif: {
        quality: 75,
        lossless: false,
        effort: 4,
      },
      gif: {
        optimizationLevel: 3,
      }
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
