import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { fileURLToPath, URL } from 'node:url'

/** GitHub Pages 기본 경로. 로컬에서 루트로 띄우려면 `VITE_APP_BASE_URL=/` */
const rawBase = process.env.VITE_APP_BASE_URL ?? '/cloneKakaoTalk/'
const resolvedBaseURL = rawBase.endsWith('/') ? rawBase : `${rawBase}/`

export default defineConfig({
  base: resolvedBaseURL,
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // main.scss에서 직접 import
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 8080,
    open: false,
    watch: {
      usePolling: process.env.CHOKIDAR_USEPOLLING === '1',
      interval: 300,
      ignored: ['**/.git/**', '**/dist/**', '**/node_modules/**'],
    },
  },
  preview: {
    host: '0.0.0.0',
    port: 8080,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    target: 'es2022',
    chunkSizeWarningLimit: 900,
    modulePreload: { polyfill: false },
  },
})
