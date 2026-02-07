import { defineConfig } from 'vite'
import path, { resolve } from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  base: process.env.NODE_ENV === 'production'
    ? '/Assembly-house/'
    : '/',

  plugins: [react(), tsconfigPaths()],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      }
    }
  },

  server: {
    historyApiFallback: true
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      constants: path.resolve(__dirname, './src/constants'),
      modules: path.resolve(__dirname, './src/modules'),
      pages: path.resolve(__dirname, './src/pages')
    }
  }
});
